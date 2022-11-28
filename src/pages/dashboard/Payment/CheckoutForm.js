import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
//-----------

//-----------------------------///--------------------//
const CheckoutForm = ({ bookedProduct }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const {
    buyerName,
    email,
    itemImg,
    meetingLocation,
    phone,
    price,
    productName,
    _id,
  } = bookedProduct;
  // console.log(bookedProduct);

  ///
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${process.env.REACT_APP_api_url}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  /// handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    // get card information
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    //
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    // if get error
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");

      // console.log("[PaymentMethod]", paymentMethod);
    }
    // workinG
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    ///
    if (paymentIntent.status === "succeeded") {
      setSuccess("Payment successful.");
      setTransactionId(paymentIntent.id);

      // // console.log("paymentIntent", paymentIntent);
      // console.log("card info", card);
      // ///store payment info in database workinG
      // const payment = {
      //   price,
      //   transactionId: paymentIntent.id,
      //   email,
      //   bookingId: _id,
      // };
      // fetch(`https://accudental-2-server.vercel.app/payments`, {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //     authorization: `bearer ${localStorage.getItem("accessToken")}`,
      //   },
      //   body: JSON.stringify(payment),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data); ////////
      //     if (data.insertedId) {
      //       setSuccess("Congrats! Your payment completed.");
      //       setTransactionId(paymentIntent.id);
      //     }
      //   });
    }
    setProcessing(false);
    ///

    // console.log("Payment intent", paymentIntent);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          className=" border border-1 border-slate-300 p-4 rounded"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary  w-full mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-error mt-3">
          {" "}
          <span className="font-bold  text-primary">Error:</span> {cardError}
        </p>
      )}
      {success && (
        <div className="text-success mt-3 ">
          {" "}
          <p>
            <span className="text-primary font-bold">Status: </span>
            {success}. Please save your transaction id ({" "}
            <span className="font-bold">{transactionId}</span> )
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
