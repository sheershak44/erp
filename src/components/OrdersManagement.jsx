import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // CSS import

function OrdersManagement() {
  // Initialized orders from localStorage, fallback to initial data if none
  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem("orders");
    return storedOrders
      ? JSON.parse(storedOrders)
      : [
          {
            id: 1,
            customerName: "Alex Johnson",
            orderDate: "2024-03-07",
            status: "Shipped",
            deliveryDate: "2024-03-17",
          },
          {
            id: 2,
            customerName: "Maria Smith",
            orderDate: "2024-03-11",
            status: "Processing",
            deliveryDate: "2024-03-18",
          },
          {
            id: 3,
            customerName: "Rahul Sharma",
            orderDate: "2024-03-12",
            status: "Shipped",
            deliveryDate: "2024-03-20",
          },
          {
            id: 4,
            customerName: "Mark Mishra",
            orderDate: "2024-03-14",
            status: "Processing",
            deliveryDate: "2024-03-22",
          },
        ];
  });
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Effect to update localStorage whenever the orders change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Function to update the status of an order
  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  // Function to delete an order
  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
  };

  // Rendering a single order item
  const renderOrderItem = (order) => (
    <div key={order.id} className="bg-white shadow rounded-lg p-4 mb-4">
      <div className="mb-2">Order ID: {order.id}</div>
      <div className="mb-2">Customer Name: {order.customerName}</div>
      <div className="mb-2">Order Date: {order.orderDate}</div>
      <div className="mb-2">Delivery Date: {order.deliveryDate}</div>
      <div className="mb-2">Status: {order.status}</div>
      <div className="flex space-x-2 mt-2">
        <button
          onClick={() => updateOrderStatus(order.id, "Processing")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Processing
        </button>
        <button
          onClick={() => updateOrderStatus(order.id, "Shipped")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
        >
          Shipped
        </button>
        <button
          onClick={() => updateOrderStatus(order.id, "Delivered")}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded"
        >
          Delivered
        </button>
        <button
          onClick={() => deleteOrder(order.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );

  // Filter orders based on the selected date
  const filteredOrders = orders.filter(
    (order) =>
      new Date(order.deliveryDate).toDateString() ===
      selectedDate.toDateString()
  );

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Orders Management
      </h2>
      <div>
        <h3 className="text-lg font-semibold text-gray-600 mt-5 mb-3">
          All Orders:
        </h3>
        {orders.map(renderOrderItem)}
      </div>
      <center>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="mt-5"
        />
      </center>
      <div>
        <h3 className="text-lg font-semibold text-gray-600 mt-5">
          Orders for {selectedDate.toDateString()}:
        </h3>
        {filteredOrders.length > 0 ? (
          filteredOrders.map(renderOrderItem)
        ) : (
          <p>No orders for this date.</p>
        )}
      </div>
    </div>
  );
}

export default OrdersManagement;
