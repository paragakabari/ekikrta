import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import DefaultLayout from "../components/defaultLayout/defaultLayout";
import Home from "./home";
import WhoWeAre from "./whoWeAre";
import Employers from "./employers";
import Jobseekers from "./jobseekers";
import JobDetails from "./jobDetails";
import Contact from "./contact";
import Markets from "./markets";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout><Home /></DefaultLayout> ,
    },
    {
        path: "/who-we-are",
        element: <DefaultLayout><WhoWeAre /></DefaultLayout> ,
    },
    {
        path: "/employers",
        element: <DefaultLayout><Employers /></DefaultLayout> ,
    },
    {
        path: "/job-seekers",
        element: <DefaultLayout><Jobseekers /></DefaultLayout> ,
    },
    {
        path: "/job-details",
        element: <DefaultLayout><JobDetails /></DefaultLayout> ,
    },
    {
        path: "/contact",
        element: <DefaultLayout><Contact /></DefaultLayout> ,
    },
    {
        path: "/markets",
        element: <DefaultLayout><Markets /></DefaultLayout> ,
    },
]);

export default router