import React from "react";
import './AffectationRegistre.css'
import { FaUserPlus } from "react-icons/fa";
import AffectationRegistreTable from "./Tables/AffectationRegistreTable";
import RegistresTable from "./Tables/RegistresTable";
import RegistreAffecterTable from "./Tables/RegistreAffecterTable";

function AffectationRegistre() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">
            Affectation des registres
            </div>
          </div>
          <button
            className="btn btn-theme-body-page"
            onClick={() => setModalShow(true)}
          >
            <span>
            <FaUserPlus />
            </span>
            <span>Affecter</span>
          </button>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-12 mb-3">
            <div className="admin-table">
          <AffectationRegistreTable />
        </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-3">
            <div className="admin-table">
          <RegistresTable />
        </div>
            </div>
            <div className="col-lg-12 mb-3">
                <div className="container-list-affectations-registres">
                <RegistreAffecterTable />
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default AffectationRegistre;
