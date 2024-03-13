import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ productCount, orderCount }) => {
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
        Dashboard Overview
      </h1>

      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden transform     transition-all hover:scale-105 duration-300 w-64">
          <div className="px-6 py-8 bg-gradient-to-br from-blue-500 to-blue-600">
            <span className="text-xl font-bold text-white block">Products</span>
          </div>
          <div className="px-6 py-4">
            <span className="text-lg font-semibold text-gray-700 block">
              Total Number:{" "}
              <span className="text-blue-600">{productCount}</span>
            </span>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300 w-64">
          <div className="px-6 py-8 bg-gradient-to-br from-green-500 to-green-600">
            <span className="text-xl font-bold text-white block">Orders</span>
          </div>
          <div className="px-6 py-4">
            <span className="text-lg font-semibold text-gray-700 block">
              Total Number: <span className="text-green-600">{orderCount}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          to="/products"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-150"
        >
          Manage Products
        </Link>
        <Link
          to="/orders"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-150"
        >
          Manage Orders
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
