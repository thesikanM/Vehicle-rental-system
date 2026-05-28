import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import Jwt from "jsonwebtoken";

const expireDate = new Date(Date.now() + 3600000);

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    // Input validation
    if (!username || !email || !password) {
      return next(errorHandler(400, "All fields are required"));
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return next(errorHandler(400, "Invalid email format"));
    }

    // Validate password strength (minimum 6 characters)
    if (password.length < 6) {
      return next(errorHandler(400, "Password must be at least 6 characters"));
    }

    // Validate username length
    if (username.length < 3) {
      return next(errorHandler(400, "Username must be at least 3 characters"));
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return next(errorHandler(409, "Email or username already in use"));
    }

    // Hash password asynchronously
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isUser: true,
    });
    await newUser.save();
    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
};

//refreshTokens
export const refreshToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return next(errorHandler(403, "Bad request: no header provided"));
  }

  const refreshToken = req.headers.authorization.split(" ")[1].split(",")[0];
  const accessToken = req.headers.authorization.split(" ")[1].split(",")[1];

  if (!refreshToken) {
    return next(errorHandler(401, "You are not authenticated"));
  }

  try {
    const decoded = Jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
    const user = await User.findById(decoded.id);

    if (!user) return next(errorHandler(403, "Invalid refresh token"));
    if (user.refreshToken !== refreshToken) {
      return next(errorHandler(403, "Invalid refresh token"));
    }

    const newAccessToken = Jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN,
      { expiresIn: "15m" }
    );
    const newRefreshToken = Jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN,
      { expiresIn: "7d" }
    );

    await User.updateOne({ _id: user._id }, { refreshToken: newRefreshToken });

    res
      .cookie("access_token", newAccessToken, {
        httpOnly: true,
        maxAge: 900000,
        sameSite: "None",
        secure: true,
        domain: "rent-a-ride-two.vercel.app",
      })
      .cookie("refresh_token", newRefreshToken, {
        httpOnly: true,
        maxAge: 604800000,
        sameSite: "None",
        secure: true,
        domain: "rent-a-ride-two.vercel.app",
      })
      .status(200)
      .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  } catch (error) {
    next(errorHandler(500, "Error refreshing token"));
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Input validation
    if (!email || !password) {
      return next(errorHandler(400, "Email and password are required"));
    }

    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    
    const validPassword = await bcryptjs.compare(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid credentials"));
    
    let accessToken = "";
    let refreshToken = "";
    accessToken = Jwt.sign({ id: validUser._id }, process.env.ACCESS_TOKEN, {
      expiresIn: "15m",
    });
    refreshToken = Jwt.sign({ id: validUser._id }, process.env.REFRESH_TOKEN, {
      expiresIn: "7d",
    });

    const updatedData = await User.findByIdAndUpdate(
      { _id: validUser._id },
      { refreshToken },
      { new: true }
    );

    const { password: hashedPassword, ...rest } = updatedData._doc;

    const responsePayload = {
      refreshToken: refreshToken,
      accessToken,
      ...rest,
    };

    req.user = {
      ...rest,
      isAdmin: validUser.isAdmin,
      isUser: validUser.isUser,
    };

    res.status(200).json(responsePayload);
    next();
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    // Input validation
    if (!req.body.email) {
      return next(errorHandler(400, "Email is required"));
    }

    const user = await User.findOne({ email: req.body.email }).lean();
    if (user && !user.isUser) {
      return next(errorHandler(409, "Email already in use as a vendor"));
    }
    if (user) {
      const { password: hashedPassword, ...rest } = user;
      const token = Jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN);

      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: expireDate,
          sameSite: "None",
          secure: true,
          domain: ".vercel.app",
        })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = await bcryptjs.hash(generatedPassword, 10);
      const newUser = new User({
        profilePicture: req.body.photo,
        password: hashedPassword,
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8),
        email: req.body.email,
        isUser: true,
      });
      const savedUser = await newUser.save();
      const userObject = savedUser.toObject();

      const token = Jwt.sign({ id: newUser._id }, process.env.ACCESS_TOKEN);
      const { password: hashedPassword2, ...rest } = userObject;
      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: expireDate,
          sameSite: "None",
          secure: true,
          domain: ".vercel.app",
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
