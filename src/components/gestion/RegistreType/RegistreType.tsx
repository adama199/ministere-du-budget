import React from "react";
import "./RegistreType.css";
import { FaUserPlus } from "react-icons/fa";
import AddRegistreModal from "./AddRegistreModal";
import { Input } from "../../common/Input";

function RegistreType() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">
              Type de registre
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
              <span>Nouveau registre</span>
            </button>
            <AddRegistreModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-left-registre-type mb-3 d-flex">
            <div className="content-col-left-registre-type w-100">
              <h3 className="title-registre-type-libele">Libellé</h3>
              <div className="container-list-libelle-registre">
                {data.map((item) => (
                  <div className="list-libelle-registre-item" key={item.id}>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-right-registre-type mb-3 d-flex">
            <div className="content-col-right-registre-type w-100">
              <form>
                <div className="container-form-add-registre">
                  <div className="mb-2">
                    <Input
                      type="text"
                      id="titre"
                      placeholder="Libellé"
                      label="Libellé"
                      aria-label="titre"
                      customClassLabel={"form-label-modal-add"}
                      customClassInput="auth-form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <Input
                      type="text"
                      id="titre"
                      placeholder="Libellé court"
                      label="Libellé court"
                      aria-label="titre"
                      customClassLabel={"form-label-modal-add"}
                      customClassInput="auth-form-control"
                    />
                  </div>
                  <div className="cbii-modal-add-project-btn-container pt-4">
                    <button className="next-button">Ajouter</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistreType;

export const data = [
  {
    id: 1,
    text: "Acte civil et public",
  },
  {
    id: 2,
    text: "Actes judiciaires et extrajudiciaires.",
  },
  {
    id: 3,
    text: "Recette des droits mutation par décès.",
  },
  {
    id: 4,
    text: "LOCATION VERBALE /CESSION AMIABLE",
  },
  {
    id: 5,
    text: "Actes sous seing privé",
  },
];
