import React from "react";
import "./NatureActe.css";
import { Filter } from "../PartiesList/PartiesList";
import { FaUserPlus } from "react-icons/fa";
import AddOrUpdateNatureActeModal from "./Modal/AddOrUpdateNatureActeModal";
import NatureActeTable from "./Tables/NatureActeTable";

function NatureActe() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">
              Nature d'acte
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
              <span>Nouvelle nature d'acte</span>
            </button>
            <AddOrUpdateNatureActeModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
        <div style={{ width: "400px" }}>
          <select className="form-control auth-form-control select-form-add-user mb-3">
            <option value="role" selected>
              Choisir un type de registre ...
            </option>
            <option value="acp">Acte civil et public (ACP)</option>
            <option value="aj">
              Actes judiciaires et extrajudiciaires. (AJ)
            </option>
            <option value="md">
              Recette des droits mutation par décès. (MD)
            </option>
            <option value="lv-ca">
              LOCATION VERBALE /CESSION AMIABLE (LV-CA)
            </option>
            <option value="ssp">Actes sous seing privé (SSP)</option>
          </select>
        </div>
        <div className="admin-table">
          <NatureActeTable />
        </div>
      </div>
    </>
  );
}

export default NatureActe;
