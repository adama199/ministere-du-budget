import React from "react";
import "./Support.css";
import { Input } from "../../common/Input";

function Support() {
  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-left-support mb-3">
            <div className="content-col-left-support">
              <h3 className="title-registre-type-libele pb-3">Support</h3>
              <p className="title-gray-support mb-2">
                A utiliser en cas de problème d'utilisation
              </p>
              <p className="text-support">
                Besoin d'aide ou de support pour notre application ?
              </p>
              <div className="content-text-support-describe">
                <p className="text-support">
                  Contactez notre équipe dédiée en envoyant un message via cette
                  page de support. Nous sommes là pour répondre à vos questions,
                  résoudre les problèmes techniques et vous offrir une
                  assistance rapide et efficace. Faites-nous part de vos
                  préoccupations et nous ferons de notre mieux pour vous aider à
                  tirer le meilleur parti de notre application. Votre
                  satisfaction est notre priorité.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-right-support mb-3">
            <div className="content-col-right-support">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <Input
                      type="mail"
                      id="titre"
                      placeholder="Email"
                      label="Votre email"
                      aria-label="titre"
                      customClassLabel={"form-label-modal-add"}
                      customClassInput="auth-form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <Input
                      type="text"
                      id="titre"
                      placeholder="Objet du message"
                      label="Objet"
                      aria-label="titre"
                      customClassLabel={"form-label-modal-add"}
                      customClassInput="auth-form-control"
                    />
                  </div>
                  <div className="col-md-12 mb-2">
                    <label
                      htmlFor="nature"
                      className="form-label form-label-modal-add"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={2}
                      className="form-control auth-form-control"
                    ></textarea>
                  </div>
                  <div className="col-md-4 offset-md-8 mt-5">
                    <div className="cbii-modal-add-project-btn-container">
                      <button className="next-button w-100">Ajouter</button>
                    </div>
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

export default Support;
