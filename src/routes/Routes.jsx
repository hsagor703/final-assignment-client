import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";

import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";

import Profile from "../pages/Dashboard/Common/Profile";
import Statistics from "../pages/Dashboard/Common/Statistics";
import MainLayout from "../layouts/MainLayout";

import { createBrowserRouter } from "react-router";
import JoinAsEmployee from "../pages/Employee/JoinAsEmployee";
import HRManager from "../pages/HRManager/HRManager";
import AssetList from "../components/Dashboard/Sidebar/Menu/hr/AssetList";
import AddAsset from "../components/Dashboard/Sidebar/Menu/hr/AddAsset";
import AllRequest from "../components/Dashboard/Sidebar/Menu/hr/AllRequest";
import EmployeeList from "../components/Dashboard/Sidebar/Menu/hr/EmployeeList";
import MyAsset from "../components/Dashboard/Sidebar/Menu/employee/MyAsset";
import MyTeam from "../components/Dashboard/Sidebar/Menu/employee/MyTeam";
import MyTeam2 from "../components/Dashboard/Sidebar/Menu/employee/MyTeam";
import RequestAssets from "../components/Dashboard/Sidebar/Menu/employee/RequestAssets";
import AddEmployee from "../components/Dashboard/Sidebar/Menu/hr/AddEmployee";
import Packages from "../components/Dashboard/Sidebar/Menu/hr/Packages";
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
        path: "/employee",
        element: <JoinAsEmployee />,
      },
      {
        path: "/hrManager",
        element: <HRManager />,
      },
      { path: "/login", element: <Login /> },
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
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },

      // for hrManager
      {
        path: "asset-list",
        element: (
          <PrivateRoute>
            <AssetList />
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
      {
        path: "employee-add",
        element: (
          <PrivateRoute>
            <AddEmployee />
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
        path: "my-team2",
        element: (
          <PrivateRoute>
            <MyTeam2 />
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
        path: "packages",
        element: (
          <PrivateRoute>
            <Packages />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
