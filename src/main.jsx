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
import UpdateProduct from "./Component/UpdateProduct";
import AboutUs from "./Component/AboutUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://assignment-technology-server.vercel.app/categories')
      },
      {
        path: "/addProduct",
        element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>,
      },
      {
        path: "/myCart",
        element: <PrivetRoute><MyCart></MyCart></PrivetRoute>,
        loader: () => fetch('https://assignment-technology-server.vercel.app/cartProducts')
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
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/products/:brand_name",
        element: <PrivetRoute><AllProducts></AllProducts></PrivetRoute>,
        loader: ({params}) => fetch(`https://assignment-technology-server.vercel.app/products/${params.brand_name}`)
      },
      {
        path: "/productDetails/:id",
        element:<PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
        loader: ({params}) => fetch(`https://assignment-technology-server.vercel.app/product/${params.id}`)
      },
      {
        path: "/updateProduct/:id",
        element:<PrivetRoute> <UpdateProduct></UpdateProduct></PrivetRoute>,
        loader: ({params}) => fetch(`https://assignment-technology-server.vercel.app/product/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);
