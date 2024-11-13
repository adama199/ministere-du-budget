import React, { useState } from "react";
import { Input } from "../../../common/Input";
import PartiesTabTable from "../Tables/PartiesTabTable";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdAddCircle } from "react-icons/md";

function PartiesTab() {
  const [inputFields, setInputFields] = useState<any>([]);
  const [inputFieldsRole, setInputFieldsRole] = useState<any>([]);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const addFields = (e) => {
    let newfield = { typePartie: "" };
    e.preventDefault();
    setInputFields([...inputFields, newfield]);
  };
  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const handleFormChangeRole = (index, event) => {
    let data = [...inputFieldsRole];
    data[index][event.target.name] = event.target.value;
    setInputFieldsRole(data);
  };
  const addFieldsRole = (e) => {
    let newfield = { typePartie: "" };
    e.preventDefault();
    setInputFieldsRole([...inputFieldsRole, newfield]);
  };
  const removeFieldsRole = (index) => {
    let data = [...inputFieldsRole];
    data.splice(index, 1);
    setInputFieldsRole(data);
  };
  return (
    <div className="container-tab-enregistrement">
     
      <div className="content-form-enregistrement-info-tab">
        <div className="row row-parties-tab pt-4">
          <div className="col-lg-6 col-md-12 col-left-parties-tab mb-3">
            <div className="content-col-left-parties-tab">
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
                      placeholder="Nom du père"
                      label="Nom du père"
                      aria-label="titre"
                      customClassLabel={"form-label-modal-add"}
                      customClassInput="auth-form-control"
                    />
                  </div>
                  <div className="col-md-12 mb-2">
                    <Input
                      type="text"
                      id="titre"
                      placeholder="Nom de la mère"
                      label="Nom de la mère"
                      aria-label="titre"
                      customClassLabel={"form-label-modal-add"}
                      customClassInput="auth-form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <Input
                      type="date"
                      id="titre"
                      placeholder=""
                      label="Date de naissance"
                      aria-label="titre"
                      customClassLabel={"form-label-modal-add"}
                      customClassInput="auth-form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <Input
                      type="date"
                      id="titre"
                      placeholder=""
                      label="Lieu de naissance"
                      aria-label="titre"
                      customClassLabel={"form-label-modal-add"}
                      customClassInput="auth-form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <Input
                      type="tel"
                      id="titre"
                      placeholder=""
                      label="Téléphone"
                      aria-label="titre"
                      customClassLabel={"form-label-modal-add"}
                      customClassInput="auth-form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <Input
                      type="text"
                      id="titre"
                      placeholder=""
                      label="Cni"
                      aria-label=""
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
                      label="Adresse"
                      customClassLabel={"form-label-modal-add"}
                      customClassInput="auth-form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <Input
                      type="text"
                      id="titre"
                      placeholder="Identification fiscale"
                      label="Identification fiscale"
                      aria-label="titre"
                      customClassLabel={"form-label-modal-add"}
                      customClassInput="auth-form-control"
                      disabled
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <Input
                      type="text"
                      id="titre"
                      placeholder="Numero unique"
                      label="Numero unique"
                      aria-label="titre"
                      customClassLabel={"form-label-modal-add"}
                      customClassInput="auth-form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <label htmlFor="">Type partie</label>
                    <select className="form-control auth-form-control select-form-add-user mb-3">
                      <option value="nature" selected>
                        Selection un type ..
                      </option>
                      <option value="">A Déterminer</option>
                      <option value="">Défunt</option>
                      <option value="">Entreprises</option>
                      <option value="">Fiduciaires</option>
                      <option value="">Gouvernements</option>
                      <option value="">Individus</option>
                      <option value="">Nouveau Né</option>
                      <option value="">Organisations à but non lucratif</option>
                      <option value="">Partenaires commerciaux</option>
                      <option value="">Test A</option>
                      <option value="">Test B</option>
                    </select>
                    <button
                      className="btn btn-add-others-partie"
                      onClick={addFields}
                    >
                      <MdAddCircle />
                    </button>
                    {inputFields.map((input, index) => {
                      return (
                        <div
                          className="container-form-others-partie mb-2"
                          key={index}
                        >
                          <Input
                            type="text"
                            id="typePartie"
                            name="typePartie"
                            placeholder="Type de partie"
                            label="Type de partie"
                            aria-label="typePartie"
                            value={input.typePartie}
                            onChange={(event) => handleFormChange(index, event)}
                            customClassLabel={"form-label-modal-add"}
                            customClassInput="auth-form-control"
                          />
                          <button
                            className="btn btn-remove-others-partie"
                            onClick={() => removeFields(index)}
                          >
                            <IoIosCloseCircleOutline />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="col-md-6 mb-2">
                    <label htmlFor="">Rôle</label>
                    <select className="form-control auth-form-control select-form-add-user mb-3">
                      <option value="nature" selected>
                        Selection un type ..
                      </option>
                      <option value="">A Déterminer</option>
                      <option value="">Associé</option>
                      <option value="">Bénéficiare</option>
                      <option value="">Gérant</option>
                      <option value="">Maitre d'oeuvre</option>
                      <option value="">Role Test</option>
                      <option value="">Vendeur</option>
                    </select>
                    <button
                      className="btn btn-add-others-partie"
                      onClick={addFieldsRole}
                    >
                      <MdAddCircle />
                    </button>
                    {inputFieldsRole.map((input, index) => {
                      return (
                        <div
                          className="container-form-others-partie mb-2"
                          key={index}
                        >
                          <Input
                            type="text"
                            id="role"
                            name="role"
                            placeholder="Type de partie"
                            label="Type de partie"
                            aria-label="role"
                            value={input.role}
                            onChange={(event) =>
                              handleFormChangeRole(index, event)
                            }
                            customClassLabel={"form-label-modal-add"}
                            customClassInput="auth-form-control"
                          />
                          <button
                            className="btn btn-remove-others-partie"
                            onClick={() => removeFieldsRole(index)}
                          >
                            <IoIosCloseCircleOutline />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="col-md-8 offset-md-4 mt-4">
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
              <PartiesTabTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartiesTab;
