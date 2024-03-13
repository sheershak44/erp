import React, { useEffect, useState } from "react";
import "./index.css";
import Dashboard from "./components/Dashboard.jsx";
import ProductsManagement from "./components/ProductsManagement.jsx";
import OrdersManagement from "./components/OrdersManagement.jsx";
import Layout from "./components/Layout.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const [pro, setPro] = useState(() => {
    const localData = localStorage.getItem("products");
    return localData
      ? JSON.parse(localData)
      : [
          { id: 1, name: "Pen", category: "Stationary", price: 100, stock: 10 },
          {
            id: 2,
            name: "Chair",
            category: "Furniture",
            price: 150,
            stock: 20,
          },
          { id: 3, name: "Shirt", category: "Clothes", price: 60, stock: 90 },
          { id: 4, name: "Denim", category: "Jeans", price: 110, stock: 50 },
          {
            id: 5,
            name: "HeadPhones",
            category: "Electronics",
            price: 40,
            stock: 80,
          },
        ];
  });

  // Loading  initial orders from localStorage
  const [ord, setOrd] = useState(() => {
    const localData = localStorage.getItem("orders");
    return localData
      ? JSON.parse(localData)
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

  // Updating localStorage when products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(pro));
  }, [pro]);

  // Updating localStorage when orders change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(ord));
  }, [ord]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          path=""
          element={
            <Dashboard productCount={pro.length} orderCount={ord.length} />
          }
        />
        <Route
          path="products"
          element={<ProductsManagement pro={pro} setPro={setPro} />}
        />
        <Route
          path="orders"
          element={<OrdersManagement ord={ord} setOrd={setOrd} />}
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
