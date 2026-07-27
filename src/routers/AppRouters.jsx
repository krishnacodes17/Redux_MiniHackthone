
import { createBrowserRouter, RouterProvider } from "react-router";
import React from 'react'
import HomePage from "../pages/HomePage";
import ProductPage  from "../pages/ProductPage"
import MainLayout from "../Layout/MainLayout";
import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import UserDetails from "../pages/UserDetails";
import CheckoutPage from "../pages/CheckoutPage";

function AppRouters() {

    let route = createBrowserRouter([
        {
            path:"/",
            element: <MainLayout />,
            children:[
                {
                    index:true,
                    element : <HomePage />
                },
                {
                    path:"product",
                    element:<ProductPage />
                },
                {
                    path:"about",
                    element:<AboutPage/>
                },{
                    path:"cart",
                    element:<CartPage />
                },
                {
                    path:"user/:id",
                    element: <UserDetails />
                },
                {
                    path:"checkout",
                    element: <CheckoutPage />
                }
                
            ]
        },
        
    ])



  return <RouterProvider router={route} />
}

export default AppRouters
