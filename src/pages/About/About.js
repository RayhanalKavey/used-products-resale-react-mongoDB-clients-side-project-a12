import React from "react";
import PrimaryHeading from "../../components/PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "../../components/SecondaryHeading/SecondaryHeading";
import useTitle from "../../hooks/useTitle/useTitle";
import "./About.css";

const About = () => {
  useTitle("About");

  return (
    <div className="mb-10 px-3">
      <PrimaryHeading customClass="text-center mt-8 mb-2 font-bold ">
        Welcome to Laptop Utopia
      </PrimaryHeading>
      <SecondaryHeading customClass="text-center">
        Need a laptop? then you are in the right place.
      </SecondaryHeading>
      <h3 className="font-semibold mb-2">Description</h3>
      Need a laptop? then you are in the right place.
      <p className="pb-8 px-4">
        <br />- We sell laptops to three companies. The three categories showed
        in the home page. By clicking the category card you can see the product
        details. <br />- There are two types of sign up procedure. One can sign
        up as buyer or seller. The features of buyer and seller are different.{" "}
        <br /> - Buyer can book a meeting to buy the product, and can see
        his/her bookings in the dashboard route. <br /> - Seller can add product
        and manage product form dashboard. <br /> - Dashboard UI is different
        for both buyer and seller. <br /> - There is one more controller, the
        admin. Admin can see all sellers, all buyers and reported items. Login
        information as buyer are given below. <br /> - Some important concepts
        about the technology used on this website are in the blog section.{" "}
        <br /> - Firebase authentication system is applied in this application.
        Like, google login, email password login, GitHub login, etc.
      </p>
      <h3 className="font-semibold mb-2">Technology used in the Project</h3>
      <p className="px-4">
        -React
        <br /> - React Router DOM <br />- React Hot Toast <br />- Tailwind CSS ,
        daisyUI, React date picker <br /> - Firebase <br />- MongoDb <br /> -
        TanStack Query <br /> - Axios
      </p>
    </div>
  );
};

export default About;
