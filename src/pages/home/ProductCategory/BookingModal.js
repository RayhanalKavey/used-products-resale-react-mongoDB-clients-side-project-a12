import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const BookingModal = ({ itemName, itemImg, productPrice, setClearModal }) => {
  const { user } = useContext(AuthContext);
  // const

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.item.value;
    const buyerName = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const meetingLocation = form.mLocation.value;

    const booking = {
      productName,
      buyerName,
      email,
      phone,
      meetingLocation,
      itemImg,
      price,
    };
    // console.log(booking);

    ///post bookings
    fetch(`${process.env.REACT_APP_api_url}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.acknowledged) {
          //can add spinner here
          toast.success("Booking confirmed.");
          setClearModal(false);
          // refetch();
        } else {
          toast.error(data.message);
        }
      });

    form.reset();
  };

  return (
    <>
      {/* The button to open modal
      <label htmlFor="booking-modal" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-5">{itemName}</h3>
          <form
            onSubmit={handleBooking}
            className="flex flex-col m-5 gap-3"
            action=""
          >
            {/* /// Item Name*/}

            <input
              type="text"
              name="item"
              placeholder="Item Name"
              defaultValue={itemName}
              className="input input-bordered w-full "
              disabled
            />

            {/* /// name*/}
            <input
              type="text"
              name="name"
              placeholder="Full name"
              defaultValue={user?.displayName}
              className="input input-bordered w-full "
              disabled
            />
            {/* /// email*/}
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={user?.email}
              className="input input-bordered w-full "
              disabled
            />
            {/* /// email*/}
            <input
              type="text"
              name="price"
              placeholder="Product Price"
              defaultValue={`${productPrice} tk`}
              className="input input-bordered w-full "
              disabled
            />
            {/* /// Phone*/}

            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered w-full "
            />
            {/* ///  meeting location*/}
            <input
              type="text"
              name="mLocation"
              placeholder="Meeting Location"
              className="input input-bordered w-full "
            />

            <input className="btn btn-primary  " type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
