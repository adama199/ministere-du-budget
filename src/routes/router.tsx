import { Navigate } from "react-router-dom";
import AdminLayout from "../components/shared/AdminLayout/AdminLayout";
import Login from "../components/auth/Login";
import Dashboard from "../components/gestion/Dashboard/Dashboard";
export const AppRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "gestion/",
    element: <AdminLayout />,
    children: [
      { element: <Navigate to="dashboard" replace />, index: true },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];
