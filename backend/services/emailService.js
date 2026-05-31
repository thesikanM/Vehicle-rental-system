import nodemailer from 'nodemailer';

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_HOST,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('Email service error:', error);
  } else {
    console.log('Email service is ready to send emails');
  }
});

// Send email function
export const sendEmail = async (to, subject, htmlContent) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_HOST,
      to: to,
      subject: subject,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return { success: true, message: 'Email sent successfully', info };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email', error };
  }
};

// Send booking confirmation email
export const sendBookingConfirmationEmail = async (userEmail, bookingDetails) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Booking Confirmation</h2>
      <p>Dear ${bookingDetails.userName},</p>
      <p>Your booking has been confirmed! Here are the details:</p>
      
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <p><strong>Booking ID:</strong> ${bookingDetails.bookingId}</p>
        <p><strong>Vehicle:</strong> ${bookingDetails.vehicleName}</p>
        <p><strong>Pickup Date:</strong> ${bookingDetails.pickupDate}</p>
        <p><strong>Return Date:</strong> ${bookingDetails.returnDate}</p>
        <p><strong>Total Price:</strong> ₹${bookingDetails.totalPrice}</p>
        <p><strong>Status:</strong> ${bookingDetails.status}</p>
      </div>
      
      <p>Thank you for choosing Rent-a-Ride!</p>
      <p>If you have any questions, please contact us.</p>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">This is an automated email. Please do not reply to this email.</p>
    </div>
  `;

  return sendEmail(userEmail, 'Booking Confirmation - Rent-a-Ride', htmlContent);
};

// Send registration confirmation email
export const sendRegistrationEmail = async (userEmail, userName) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Welcome to Rent-a-Ride!</h2>
      <p>Dear ${userName},</p>
      <p>Thank you for registering with Rent-a-Ride. Your account has been successfully created.</p>
      
      <p>You can now:</p>
      <ul>
        <li>Search and book vehicles</li>
        <li>Manage your bookings</li>
        <li>Update your profile</li>
        <li>View your booking history</li>
      </ul>
      
      <p>If you have any questions, please contact us.</p>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">This is an automated email. Please do not reply to this email.</p>
    </div>
  `;

  return sendEmail(userEmail, 'Welcome to Rent-a-Ride!', htmlContent);
};

// Send password reset email
export const sendPasswordResetEmail = async (userEmail, resetLink) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Password Reset Request</h2>
      <p>We received a request to reset your password. Click the link below to reset it:</p>
      
      <p style="margin: 20px 0;">
        <a href="${resetLink}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
          Reset Password
        </a>
      </p>
      
      <p>If you didn't request this, please ignore this email.</p>
      <p>This link will expire in 24 hours.</p>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">This is an automated email. Please do not reply to this email.</p>
    </div>
  `;

  return sendEmail(userEmail, 'Password Reset Request - Rent-a-Ride', htmlContent);
};

// Send cancellation email
export const sendCancellationEmail = async (userEmail, bookingDetails) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Booking Cancelled</h2>
      <p>Dear ${bookingDetails.userName},</p>
      <p>Your booking has been cancelled. Here are the details:</p>
      
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <p><strong>Booking ID:</strong> ${bookingDetails.bookingId}</p>
        <p><strong>Vehicle:</strong> ${bookingDetails.vehicleName}</p>
        <p><strong>Cancellation Date:</strong> ${new Date().toLocaleDateString()}</p>
        <p><strong>Refund Amount:</strong> ₹${bookingDetails.refundAmount}</p>
      </div>
      
      <p>The refund will be processed within 5-7 business days.</p>
      <p>If you have any questions, please contact us.</p>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">This is an automated email. Please do not reply to this email.</p>
    </div>
  `;

  return sendEmail(userEmail, 'Booking Cancelled - Rent-a-Ride', htmlContent);
};

export default transporter;
