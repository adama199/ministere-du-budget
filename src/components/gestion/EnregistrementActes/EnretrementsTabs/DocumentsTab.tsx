import React from "react";
import { Input } from "../../../common/Input";
import DocumentsTabTable from "../Tables/DocumentsTabTable";


function DocumentsTab () {
  
  return (
    <div className="container-tab-enregistrement">
      <h3 className="title-registre-type-libele py-4">
      En cours de développement
      </h3>
      <div className="content-form-enregistrement-info-tab">
        <div className="row row-parties-tab">
          <div className="col-lg-6 col-md-12 col-left-parties-tab mb-3">
            <div className="content-col-left-parties-tab">
              <form>
                <div className="">
                  <div className="mb-3">
                    <Input
                      type="file"
                      id="titre"
                      placeholder=""
                      label="Documents scannés"
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
          <div className="col-lg-6 col-md-12 col-right-parties-tab mb-3">
            <div className="content-col-right-parties-tab admin-table">
              <DocumentsTabTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentsTab;
