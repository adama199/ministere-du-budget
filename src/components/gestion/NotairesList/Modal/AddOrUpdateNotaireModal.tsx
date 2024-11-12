import React from "react";
import Modal from "react-bootstrap/Modal";
import { Input } from "../../../common/Input";

function AddOrUpdateNotaireModal(props) {
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
          Ajouter un notaire
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <form action="">
          <div className="row">
            <div className="col-md-12 mb-2">
              <Input
                type="text"
                id="titre"
                placeholder="Nom"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-12 mb-2">
              <Input
                type="email"
                id="titre"
                placeholder="Email"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-12 mb-2">
              <Input
                type="text"
                id="titre"
                placeholder="Adresse"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-12 mb-2">
              <Input
                type="text"
                id="titre"
                placeholder="Boîte postale"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-12 mb-2">
              <Input
                type="text"
                id="titre"
                placeholder="Téléphone"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-12 mb-2">
              <Input
                type="text"
                id="titre"
                placeholder="Mobile"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-12 mb-2">
              <Input
                type="text"
                id="titre"
                placeholder="Pays"
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

export default AddOrUpdateNotaireModal;
