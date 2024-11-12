import React from "react";
import Modal from "react-bootstrap/Modal";
import { Input } from "../../../common/Input";

function AddOrUpdateNatureActeModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="cbii-modal-add-project-header px-4 d-flex justify-content-center border-0">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="cbii-modal-add-project-title"
        >
          Nouvelle nature d'acte
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <form action="">
          <div className="row">
            <div className="col-md-12 mb-2">
            <select className="form-control auth-form-control select-form-add-user mb-3">
                <option value="role" selected>
                Choisir un type de registre ...
                </option>
                <option value="acp">Acte civil et public (ACP)</option>
                <option value="aj">Actes judiciaires et extrajudiciaires. (AJ)</option>
                <option value="md">Recette des droits mutation par décès. (MD)</option>
                <option value="lv-ca">LOCATION VERBALE /CESSION AMIABLE (LV-CA)</option>
                <option value="ssp">Actes sous seing privé  (SSP)</option>
              </select>
            </div>
            <div className="col-md-12 mb-2">
              <Input
                type="text"
                id="titre"
                placeholder="Nature d'acte"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-12 mt-4">
              <div className="cbii-modal-add-project-btn-container">
                <button className="prev-button w-100">Annuler</button>
                <button className="next-button w-100">Ajouter</button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default AddOrUpdateNatureActeModal;
