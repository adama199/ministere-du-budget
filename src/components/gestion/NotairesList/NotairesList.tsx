import React from "react";
import "./NotairesList.css";
import { Filter } from "../PartiesList/PartiesList";
import NotairesListTable from "./Tables/NotairesListTable";
import { FaUserPlus } from "react-icons/fa";
import AddOrUpdateNotaireModal from "./Modal/AddOrUpdateNotaireModal";

function NotairesList() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">
            Notaires
            </div>
          </div>
          <div>
          <button
            className="btn btn-theme-body-page"
            onClick={() => setModalShow(true)}
          >
            <span>
            <FaUserPlus />
            </span>
            <span>Ajouter un notaire</span>
          </button>
          <AddOrUpdateNotaireModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
        <Filter />
        <div className="admin-table">
          <NotairesListTable />
        </div>
      </div>
    </>
  );
}

export default NotairesList;


