import React from "react";
import './EnregistrementsActes.css'
import { FaUserPlus } from "react-icons/fa";
import EnregistrementsActesTable from "./Tables/EnregistrementsActesTable";

function EnregistrementsActes() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">
            Suivi des enregistrements
            </div>
          </div>
          <button
            className="btn btn-theme-body-page"
            onClick={() => setModalShow(true)}
          >
            <span>
            <FaUserPlus />
            </span>
            <span>Nouvel enregistrement</span>
          </button>
        </div>
        <div className="admin-table">
          <EnregistrementsActesTable />
        </div>
      </div>
      {/* <AddNewFileModale show={modalShow} onHide={() => setModalShow(false)} /> */}
    </>
  );
}

export default EnregistrementsActes;
