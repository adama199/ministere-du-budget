import React from "react";
import AddNewFileModale from "./Modals/AddNewUserModal";
import ListUsersTable from "./Tables/ListUsersTable";
import './ListUsers.css'
import { FaUserPlus } from "react-icons/fa";

function ListUsers() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">
              Listes des utilisateurs
            </div>
          </div>
          <button
            className="btn btn-theme-body-page"
            onClick={() => setModalShow(true)}
          >
            <span>
            <FaUserPlus />
            </span>
            <span>Ajouter un utilisateur</span>
          </button>
        </div>
        <div className="admin-table">
          <ListUsersTable />
        </div>
      </div>
      <AddNewFileModale show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ListUsers;
