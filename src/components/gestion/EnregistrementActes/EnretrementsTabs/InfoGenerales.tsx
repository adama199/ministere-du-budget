import React from "react";
import { Input } from "../../../common/Input";

function InfoGenerales() {
  return (
    <div className="container-tab-enregistrement">
      <h3 className="title-registre-type-libele py-4">
        Veuillez saisir les informations suivantes:
      </h3>
      <div className="content-form-enregistrement-info-tab">
        <form>
          <div className="row">
            <div className="col-md-6 mb-2">
              <label
                htmlFor="nature"
                className="form-label form-label-modal-add"
              >
                Liste des natures
              </label>
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
            <div className="col-lg-6 mb-2">
              <label
                htmlFor="nature"
                className="form-label form-label-modal-add"
              >
                Nature de l'acte
              </label>
              <select className="form-control auth-form-control select-form-add-user mb-3">
                <option value="nature" selected>
                  Nature de l'acte
                </option>
                <option value="acp">Acte civil et public</option>
                <option value="aj">Acte chez un notaire</option>
                <option value="md">jugement n133/23</option>
                <option value="lv-ca">contrat de vente</option>
                <option value="ssp">statuts</option>
                <option value="acp">jugement</option>
                <option value="aj">contrat de bail d'habitation </option>
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
            <div className="col-md-4 mb-2">
              <label
                htmlFor="nature"
                className="form-label form-label-modal-add"
              >
                Notaire
              </label>
              <select className="form-control auth-form-control select-form-add-user mb-3">
                <option value="role" selected>
                  Notaires ...
                </option>
                <option value="aucun">Aucun</option>
              </select>
            </div>
            <div className="col-md-4 mb-2">
              <Input
                type="date"
                id="titre"
                placeholder=""
                label="Date création"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Input
                type="date"
                id="titre"
                placeholder=""
                label="Date d'enregistrement"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Input
                type="text"
                id="titre"
                placeholder="Nom du Bénéficiaire"
                label="Nom du Bénéficiaire"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Input
                type="tel"
                id="titre"
                placeholder="Tél. du Bénéficiaire"
                label="Tél. du Bénéficiaire"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-4 mb-2">
              <label
                htmlFor="nature"
                className="form-label form-label-modal-add"
              >
                Faits
              </label>
              <textarea
                name="faits"
                id="faits"
                rows={1}
                className="form-control auth-form-control"
              ></textarea>
            </div>
            <div className="col-md-3 mb-2">
              <Input
                type="number"
                id="titre"
                placeholder=""
                label="Droit Progressif"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-3 mb-2">
              <Input
                type="number"
                id="titre"
                placeholder=""
                label="Droit Fixe"
                aria-label=""
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-3 mb-2">
              <Input
                type="number"
                id="titre"
                placeholder=""
                aria-label="titre"
                label="Droit Proportionnel"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-3 mb-2">
              <Input
                type="text"
                id="titre"
                placeholder="Total Droit d'enregistrement"
                label="Total Droit d'enregistrement"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
                disabled
              />
            </div>
            <div className="col-md-3 mb-2">
              <Input
                type="number"
                id="titre"
                placeholder=""
                label="Nombre de timbres"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-3 mb-2">
              <label
                htmlFor="nature"
                className="form-label form-label-modal-add"
              >
                Droit d'un timbre
              </label>
              <select className="form-control auth-form-control select-form-add-user mb-3">
                <option value="aucun" selected>1000 djf</option>
                <option value="aucun">1500 djf</option>
              </select>
            </div>
            <div className="col-md-3 mb-2">
              <Input
                type="number"
                id="titre"
                placeholder=""
                label="Total des droits de timbre"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
                disabled
              />
            </div>
            <div className="col-md-3 mb-2">
              <Input
                type="number"
                id="titre"
                placeholder=""
                label="Total général à payer"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
                disabled
              />
            </div>
            <div className="col-md-4 mb-2">
              <Input
                type="text"
                id="titre"
                placeholder=""
                label="N° de Volume"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Input
                type="text"
                id="titre"
                placeholder=""
                label="Folio"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Input
                type="text"
                id="titre"
                placeholder=""
                label="N° Case"
                aria-label="titre"
                customClassLabel={"form-label-modal-add"}
                customClassInput="auth-form-control"
              />
            </div>
            <div className="col-md-6 offset-md-6 mt-4">
              <div className="cbii-modal-add-project-btn-container">
                <button className="prev-button w-100">Annuler</button>
                <button className="next-button w-100">Ajouter</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InfoGenerales;
