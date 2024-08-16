import React from "react";
import {
    createBrowserRouter,

} from "react-router-dom";
import DefaultLayout from "../components/defaultLayout/defaultLayout";
import Home from "./home";
import WhoWeAre from "./whoWeAre";
import Contact from "./contact";
import Product from "./Product";
import WhyUs from "./WhyUs/WhyUs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout><Home /></DefaultLayout> ,
    },
    {
        path: "/about",
        element: <DefaultLayout><WhoWeAre /></DefaultLayout> ,
    },
    {
        path: "/product",
        element: <DefaultLayout><Product /></DefaultLayout> ,
    },
    {
        path: "/contact",
        element: <DefaultLayout><Contact /></DefaultLayout> ,
    },
    {
        path: "/why-us",
        element: <DefaultLayout><WhyUs /></DefaultLayout> ,
    },
]);

export default router