import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from '../pages/Login/Login'
import SignUp from "../pages/SignUp/SignUp";
import PlantDetails from "../pages/PlantDetails/PlantDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AddPlant from "../pages/Dashboard/Seller/AddPlant";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Profile from "../pages/Dashboard/Common/Profile";
import Statistics from "../pages/Dashboard/Common/Statistics";
import MainLayout from "../layouts/MainLayout";
import MyInventory from "../pages/Dashboard/Seller/MyInventory";
import ManageOrders from "../pages/Dashboard/Seller/ManageOrders";
import MyOrders from "../pages/Dashboard/Customer/MyOrders";
import { createBrowserRouter } from "react-router";
import JoinAsEmployee from "../pages/Employee/JoinAsEmployee";
import HRManager from "../pages/HRManager/HRManager";
import AssetList from "../components/Dashboard/Sidebar/Menu/hr/AssetList";
import AddAsset from "../components/Dashboard/Sidebar/Menu/hr/AddAsset";
import AllRequest from "../components/Dashboard/Sidebar/Menu/hr/AllRequest";
import EmployeeList from "../components/Dashboard/Sidebar/Menu/hr/EmployeeList";
import MyAsset from "../components/Dashboard/Sidebar/Menu/employee/MyAsset";
import MyTeam from "../components/Dashboard/Sidebar/Menu/employee/MyTeam";
import RequestAssets from "../components/Dashboard/Sidebar/Menu/employee/RequestAssets";
// import LoginPage from "../pages/LoginPage/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        // index:true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/plant/:id",
        element: <PlantDetails />,
      },
      {
        path: "/employee",
        element: <JoinAsEmployee />,
      },
      {
        path: "/hrManager",
        element: <HRManager />,
      },
      { path: "/login", element: <Login/> },
  
    ],
  },
 
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: "add-plant",
        element: (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        ),
      },
      {
        path: "my-inventory",
        element: (
          <PrivateRoute>
            <MyInventory />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },

      // for hrManager 
      {
        path: "asset-list",
        element: (
          <PrivateRoute>
            <AssetList/>
          </PrivateRoute>
        ),
      },
      {
        path: "add-asset",
        element: (
          <PrivateRoute>
            <AddAsset />
          </PrivateRoute>
        ),
      },
      {
        path: "all-request",
        element: (
          <PrivateRoute>
            <AllRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "employee-list",
        element: (
          <PrivateRoute>
            <EmployeeList />
          </PrivateRoute>
        ),
      },
      // for employee 
      {
        path: "my-asset",
        element: (
          <PrivateRoute>
            <MyAsset />
          </PrivateRoute>
        ),
      },
      {
        path: "my-team",
        element: (
          <PrivateRoute>
            <MyTeam />
          </PrivateRoute>
        ),
      },
      {
        path: "request-assets",
        element: (
          <PrivateRoute>
            <RequestAssets />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-orders",
        element: <ManageOrders />,
      },
    ],
  },
]);
