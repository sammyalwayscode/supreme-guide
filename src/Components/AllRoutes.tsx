import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "./Dashboards/Dashboard";
import Product from "./Dashboards/Product";
import HomeMain from "./LandingPage/Home/HomeMain/HomeMain";

const AllRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <HomeMain />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/staffs",
      element: <Product />,
    },
  ]);
  return element;
};

export default AllRoutes;
