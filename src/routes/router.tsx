import { Navigate } from "react-router-dom";
import Login from "../components/auth/Login";
import Dashboard from "../components/gestion/Dashboard/Dashboard";
import GestionLayout from "../components/shared/GestionLayout/GestionLayout";
import AdminLayout from "../components/shared/GestionLayout/AdminLayout";
import ListUsers from "../components/admin/ListUsers/ListUsers";
import AffectationRegistre from "../components/admin/AffectationRegistre/AffectationRegistre";
import HistoriquesMvt from "../components/admin/HistoriquesMvt/HistoriquesMvt";
import ProfileUser from "../components/admin/ProfileUser/ProfileUser";
import ProfilesListUsersTable from "../components/admin/ProfilesListUsers/ProfilesListUsersTable";
import ForgetPassword from "../components/auth/ForgetPassword";
import ResetPassword from "../components/auth/ResetPassword";
import VerifyCode from "../components/auth/VerifyCode";
import MessageConfirmation from "../components/auth/MessageConfirmation";
import EnregistrementsActes from "../components/gestion/EnregistrementActes/EnregistrementsActes";
import Encaissements from "../components/gestion/Encaissements/Encaissements";
import PartiesList from "../components/gestion/PartiesList/PartiesList";
import NotairesList from "../components/gestion/NotairesList/NotairesList";
import NatureActe from "../components/gestion/NatureActe/NatureActe";
import RegistreType from "../components/gestion/RegistreType/RegistreType";
import Rapports from "../components/gestion/Rapports/Rapports";
export const AppRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/mot-de-passe-oublie",
    element: <ForgetPassword />,
  },
  {
    path: "/reinitialiser-mot-de-passe",
    element: <ResetPassword />,
  },
  {
    path: "/code-de-verification",
    element: <VerifyCode />,
  },
  {
    path: "/message-de-confirmation",
    element: <MessageConfirmation />,
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
      {
        path: "enregistrement_acte",
        element: <EnregistrementsActes />,
      },
      {
        path: "encaissements",
        element: <Encaissements />,
      },
      {
        path: "parties",
        element: <PartiesList />,
      },
      {
        path: "notaires",
        element: <NotairesList />,
      },
      {
        path: "nature-acte",
        element: <NatureActe />,
      },
      {
        path: "les-registres",
        element: <RegistreType />,
      },
      {
        path: "rapports",
        element: <Rapports />,
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
      {
        path: "profiles-utilisateurs",
        element: <ProfilesListUsersTable />,
      },
    ],
  },
];
