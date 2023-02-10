import React from "react";

const DashboardMain = () => {
  return (
    <div className="bg-white rounded shadow py-6 m-6">
      <div className="flex items-center pb-6">
        <div className="w-12 h-12 mr-6 text-center">
          <i className="fas fa-check-circle text-teal-500"></i>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Feature Admin</h3>
          <p className="text-gray-600">
            Admin can see sellers, buyers, and reported items. Admin also can
            delete any of them and can verify a seller.
          </p>
        </div>
      </div>
      <div className="flex items-center pb-6">
        <div className="w-12 h-12 mr-6 text-center">
          <i className="fas fa-check-circle text-teal-500"></i>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Feature Seller</h3>
          <p className="text-gray-600">
            Sellers can add, delete and advertise their products. Admin can see
            sellers, buyers, and reported items.
          </p>
        </div>
      </div>
      <div className="flex items-center pb-6">
        <div className="w-12 h-12 mr-6 text-center">
          <i className="fas fa-check-circle text-teal-500"></i>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Feature Buyer</h3>
          <p className="text-gray-600">
            Buyers can order and report products. Sellers can add, delete and
            advertise their products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
