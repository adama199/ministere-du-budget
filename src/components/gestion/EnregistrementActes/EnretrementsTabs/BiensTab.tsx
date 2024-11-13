import React, { useState } from "react";
import { Input } from "../../../common/Input";
import PartiesTabTable from "../Tables/PartiesTabTable";
import BiensTabTable from "../Tables/BiensTabTable";


function BiensTab() {
  
  return (
    <div className="container-tab-enregistrement">
      <h3 className="title-registre-type-libele py-4">
      Veuillez rajouter les informations des biens si nécessaires.
      </h3>
      <div className="content-form-enregistrement-info-tab">
        <div className="row row-parties-tab">
          <div className="col-lg-4 col-md-12 col-left-parties-tab mb-3">
            <div className="content-col-left-parties-tab">
              <form>
                <div className="">
                  <div className="mb-3">
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
                  <div className="col-md-12 mb-2">
                    <Input
                      type="text"
                      id="titre"
                      placeholder="Adresse"
                      label="Adresse"
                      aria-label="titre"
                      customClassLabel={"form-label-modal-add"}
                      customClassInput="auth-form-control"
                    />
                  </div>
                  <div className="col-md-12 mb-2">
                    <Input
                      type="number"
                      id="titre"
                      placeholder="Valeur du bien"
                      label="Valeur du bien"
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
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-right-parties-tab mb-3">
            <div className="content-col-right-parties-tab admin-table">
              <BiensTabTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiensTab;
