import React from "react";
import { data } from "../RegistreType/RegistreType";

function ArchivesRegistres() {

  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">
              Archives des registre
            </div>
          </div>
          <div>
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
        </div>
      </div>
    </>
  );
}

export default ArchivesRegistres;


