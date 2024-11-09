import { Navigate } from "react-router-dom";
import Login from "../components/auth/Login";
import Dashboard from "../components/gestion/Dashboard/Dashboard";
import GestionLayout from "../components/shared/GestionLayout/GestionLayout";
import AdminLayout from "../components/shared/GestionLayout/AdminLayout";
import ListUsers from "../components/admin/ListUsers/ListUsers";
import AffectationRegistre from "../components/admin/AffectationRegistre/AffectationRegistre";
import HistoriquesMvt from "../components/admin/HistoriquesMvt/HistoriquesMvt";
import ProfileUser from "../components/admin/ProfileUser/ProfileUser";
export const AppRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "gestion/",
    element: <GestionLayout />,
    children: [
      { element: <Navigate to="dashboard" replace />, index: true },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "admin/",
    element: <AdminLayout />,
    children: [
      { element: <Navigate to="utilisateurs" replace />, index: true },
      {
        path: "utilisateurs",
        element: <ListUsers />,
      },
      {
        path: "profil",
        element: <ProfileUser />,
      },
      {
        path: "affectations-registre",
        element: <AffectationRegistre />,
      },
      {
        path: "historiques",
        element: <HistoriquesMvt />,
      },
    ],
  },
];
