import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the CSS for react-calendar

const OrdersCalendarView = ({ orders }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filteredOrders = orders.filter(
    (order) =>
      new Date(order.orderDate).toDateString() === selectedDate.toDateString()
  );

  return (
    <div>
      <Calendar onChange={setSelectedDate} value={selectedDate} />
      <div className="order-div">
        <h2>Orders for {selectedDate.toDateString()}:</h2>
        {filteredOrders.map((order) => (
          <div key={order.id} className="order-details">
            <p>Order ID: {order.id}</p>
            <p>Customer Name: {order.customerName}</p>
            <p>Order Date: {order.orderDate}</p>
            <p>Status: {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersCalendarView;
