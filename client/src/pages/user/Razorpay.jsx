import { toast } from "sonner";
import {
  setLatestBooking,
  setisPaymentDone,
} from "../../redux/user/LatestBookingsSlice";
import { setIsSweetAlert, setPageLoading } from "../../redux/user/userSlice";

export function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

//function to fetch latest bookings from db and update it to redux
export const fetchLatestBooking = async (user_id, dispatch) => {
  try {
    const response = await fetch("/api/user/latestbookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch latest booking");
    }

    const data = await response.json();
    dispatch(setLatestBooking(data));
    dispatch(setisPaymentDone(true));
    return data;
  } catch (error) {
    console.error("Error fetching latest booking:", error);
    return null;
  }
};

//function related to razorpay payment
export async function displayRazorpay(values, navigate, dispatch, currentUser) {
  try {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    let refreshToken = localStorage.getItem("refreshToken");
    let accessToken = localStorage.getItem("accessToken");

    if (!res) {
      toast.error("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await fetch("/api/user/razorpay", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${refreshToken},${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await result.json();

    if (!data.ok) {
      toast.error(data?.message);
      return;
    }

    // Getting the order details back
    const { amount, id, currency } = data;

    const options = {
      key: import.meta.env.RAZORPAY_KEY_ID,
      amount: amount.toString(),
      currency: currency,
      name: "Rent a Ride",
      description: "Car Rental Payment",
      order_id: id,
      handler: async function (response) {
        const paymentData = {
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        // final data to store in database
        const dbData = { ...values, ...paymentData };
        const result = await fetch("/api/user/bookCar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dbData),
        });
        const successStatus = await result.json();
        if (successStatus) {
          dispatch(setIsSweetAlert(true));
          await fetchLatestBooking(values.user_id, dispatch);
          navigate("/");
          dispatch(setPageLoading(false));
        }
      },
      prefill: {
        name: currentUser?.username || "User",
        email: currentUser?.email || "",
        contact: currentUser?.phone || "",
      },
      theme: {
        color: "#22c55e",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    dispatch(setPageLoading(false));
  } catch (error) {
    toast.error(error.message || "Payment failed");
  }
}

const Razorpay = () => {
  return <div></div>;
};

export default Razorpay;
