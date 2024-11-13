import React from "react";
import "./EnregistrementsLVCA.css";
import { Filter } from "../PartiesList/PartiesList";
import LotsTable from "./Tables/LotsTable";
import ActePrincipal from "./Tables/ActePrincipal";
import { Input } from "../../common/Input";

function EnregistrementsLVCA() {
  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">
              Enregistrement des lots LV-CA
            </div>
          </div>
        </div>

        <div className="row row-enregistrement-lv-ca">
          <div className="col-lg-4 col-md-12">
            <div className="content-col-left-enregistrement-lv-ca">
              <Filter />
              <div className="admin-table pt-4">
                <LotsTable />
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="content-col-left-enregistrement-lv-ca">
              <div className="content-form-acte-principal">
                <h3 className="title-registre-type-libele pb-4">
                  Acte Principal :
                </h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <Input
                        type="text"
                        id="titre"
                        placeholder="Nom"
                        label="Nom"
                        aria-label="titre"
                        customClassLabel={"form-label-modal-add"}
                        customClassInput="auth-form-control"
                      />
                    </div>
                    <div className="col-md-6 mb-2">
                      <Input
                        type="text"
                        id="titre"
                        placeholder="Description"
                        label="Description"
                        aria-label="titre"
                        customClassLabel={"form-label-modal-add"}
                        customClassInput="auth-form-control"
                      />
                    </div>
                    <div className="col-md-6 mb-2">
                      <Input
                        type="number"
                        id="titre"
                        placeholder="Droit Enregistrement"
                        label="Droit Enregistrement"
                        aria-label="titre"
                        customClassLabel={"form-label-modal-add"}
                        customClassInput="auth-form-control"
                      />
                    </div>
                    <div className="col-md-6 mb-2">
                      <Input
                        type="number"
                        id="titre"
                        placeholder="Timbre"
                        label="Timbre"
                        aria-label="titre"
                        customClassLabel={"form-label-modal-add"}
                        customClassInput="auth-form-control"
                      />
                    </div>
                    <div className="col-md-4 offset-md-8 mt-4">
                      <div className="cbii-modal-add-project-btn-container">
                        <button className="next-button w-100">Ajouter</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="admin-table pt-5">
                <ActePrincipal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnregistrementsLVCA;
