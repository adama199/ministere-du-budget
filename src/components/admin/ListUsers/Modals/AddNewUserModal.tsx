import React from "react";
import Modal from "react-bootstrap/Modal";
import { Input } from "../../../common/Input";
import { HiOutlineUpload } from "react-icons/hi";

function AddNewUserModal(props) {
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
          Ajouter un nouveau utilisateur
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
              <select className="form-control auth-form-control select-form-add-user mb-3">
                <option value="role" selected>
                  Choisir un rôle
                </option>
                <option value="receveur">Receveur</option>
                <option value="manager">Manager</option>
                <option value="caissier">Caissier</option>
                <option value="administrateur">Administrateur</option>
                <option value="visualisation">Visualisation</option>
                <option value="banque">Banque</option>
              </select>
            </div>
            <div className="col-md-12 mb-2">
              <select className="form-control auth-form-control select-form-add-user mb-3">
                <option value="role" selected>
                  Choisir une agence
                </option>
                <option value="impots">Hôtel des Impôts</option>
                <option value="guichet">Guichet Unique</option>
              </select>
            </div>
            <div className="col-md-12 mb-2">
              <Input
                type="password"
                id="titre"
                placeholder="Mot de passe"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-12 mb-2">
              <Input
                type="password"
                id="titre"
                placeholder="Confirmer mot de passe"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-12 mb-3">
              <div className="position-relative">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="inputfile"
                />
                <label htmlFor="file">Choisir un fichier</label>
                <span className="upload-file-auth">
                  <HiOutlineUpload />
                </span>
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="checkbox">
                <input
                  className="custom-checkbox"
                  type="checkbox"
                  id="checkbox"
                />
                <label htmlFor="checkbox" className="label-checkbox ps-2">
                  L' utilisateur a lu et approuvé
                  <span style={{ color: "#0d6efd", textDecoration: "underline", paddingLeft: 5 }}>Termes et Conditions</span>
                </label>
              </div>
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

export default AddNewUserModal;
