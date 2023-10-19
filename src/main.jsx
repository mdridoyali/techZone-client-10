import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home";
import ErrorPage from "./Component/ErrorPage";
import Root from "./Layout/Root";
import AddProduct from "./Component/AddProduct";
import MyCart from "./Component/MyCart";
import AuthProvider from "./Provider/AuthProvider";
import Login from "./Component/Login";
import Register from "./Component/Register";
import AllProducts from "./Component/AllProducts";
import PrivetRoute from "./Component/PrivetRoute";
import ProductDetails from "./Component/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/categories')
      },
      {
        path: "/addProduct",
        element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>,
      },
      {
        path: "/myCart",
        element: <PrivetRoute><MyCart></MyCart></PrivetRoute>,
        loader: () => fetch('http://localhost:5000/cartProducts')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/products/:brand_name",
        element: <PrivetRoute><AllProducts></AllProducts></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand_name}`)
      },
      {
        path: "/productDetails/:id",
        element:<PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);
