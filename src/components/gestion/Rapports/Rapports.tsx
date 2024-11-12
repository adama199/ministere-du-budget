import React from "react";
import "./Rapports.css";
import Accordion from "react-bootstrap/Accordion";
import { FaFileSignature } from "react-icons/fa";
import { Input } from "../../common/Input";

function Rapports() {
  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">Rapports</div>
          </div>
        </div>
        <div className="">
          <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="cbii-details-projet-tab-etapes-accordion-header-title">
                    <span className="pe-2">
                      <FaFileSignature />
                    </span>
                    <span>Rapports des transactions par nature</span>
                  </div>
                </Accordion.Header>
              <Accordion.Body className="cbii-details-projet-tab-etapes-accordion-body">
                <h3 className="title-registre-type-libele pb-4">
                  Transactions par Natures d'Actes
                </h3>
                <form>
                  <div className="row container-form-add-registre">
                    <div className="col-lg-4 mb-2">
                      <label htmlFor="nature" className="form-label form-label-modal-add">Liste des natures</label>
                      <select className="form-control auth-form-control select-form-add-user mb-3">
                        <option value="nature" selected>
                          Tous..
                        </option>
                        <option value="acp">Acte civil et public</option>
                        <option value="aj">Acte chez un notaire</option>
                        <option value="md">jugement n133/23</option>
                        <option value="lv-ca">contrat de vente</option>
                        <option value="ssp">statuts</option>
                        <option value="acp">jugement</option>
                        <option value="aj">
                          contrat de bail d'habitation{" "}
                        </option>
                        <option value="md">contrat de bail commercial</option>
                        <option value="lv-ca">convention de pret</option>
                        <option value="ssp">proces verbal </option>
                        <option value="ssp">protocole d'accord</option>
                        <option value="ssp">Cession amiable</option>
                        <option value="ssp">Passation de marché</option>
                        <option value="ssp">Test act</option>
                        <option value="ssp">New type Nature injection</option>
                      </select>
                    </div>
                    <div className="col-lg-4 mb-2">
                      <Input
                        type="date"
                        id="titre"
                        placeholder=""
                        label="Date de début"
                        aria-label="titre"
                        customClassLabel={"form-label-modal-add"}
                        customClassInput="auth-form-control"
                      />
                    </div>
                    <div className="col-lg-4 mb-2">
                      <Input
                        type="date"
                        id="titre"
                        placeholder=""
                        label="Date de fin"
                        aria-label="titre"
                        customClassLabel={"form-label-modal-add"}
                        customClassInput="auth-form-control"
                      />
                    </div>
                  </div>
                </form>
                <div className="cbii-modal-add-project-btn-container pt-4">
                  <button className="btn btn-print-rapport">Imprimer</button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className="cbii-details-projet-tab-etapes-accordion-header-title">
                    <span className="pe-2">
                      <FaFileSignature />
                    </span>
                    <span>Rapport des transactions par dates</span>
                  </div>
                </Accordion.Header>
              <Accordion.Body className="cbii-details-projet-tab-etapes-accordion-body">
                <h3 className="title-registre-type-libele pb-4">
                  Transactions par Date d'Actes
                </h3>
                <form>
                  <div className="row container-form-add-registre">
                    <div className="col-lg-6 mb-2">
                      <Input
                        type="date"
                        id="titre"
                        placeholder=""
                        label="Date de début"
                        aria-label="titre"
                        customClassLabel={"form-label-modal-add"}
                        customClassInput="auth-form-control"
                      />
                    </div>
                    <div className="col-lg-6 mb-2">
                      <Input
                        type="date"
                        id="titre"
                        placeholder=""
                        label="Date de fin"
                        aria-label="titre"
                        customClassLabel={"form-label-modal-add"}
                        customClassInput="auth-form-control"
                      />
                    </div>
                  </div>
                </form>
                <div className="cbii-modal-add-project-btn-container pt-4">
                  <button className="btn btn-print-rapport">Imprimer</button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Rapports;

const data = [
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
