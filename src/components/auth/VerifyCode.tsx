import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/appImages/logo.png";

const VerifyCode = () => {
  return (
    <div>
      <div className="container-page-login-app">
        <div className="auth-row">
          <div className="auth-col auth-right-side-col">
            <div className="auth-right-side-container">
              <div className="auth-form-container text-center pb-4">
                <div className="content-img-logo-login-app">
                  <img src={Logo} alt="Logo" className="img-logo-login-app" />
                </div>
                <h2 className="title-auth-form-text pt-3">
                  Code de vérification
                </h2>
                <p className="info-connect-redirection">
                  Veuillez saisir le code que vous avez reçu par e-mail ou
                  numéro de téléphone
                </p>
                <div className="mt-5">
                  <form id="auth-form">
                    <div className="row auth-form-row">
                      <div className="container-vewrify-code mb-3">
                        <div className="form-group auth-form-group auth-form-group-login">
                          <input
                            type={`number`}
                            className="form-control auth-form-control-code"
                            id="number"
                            aria-label="code"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div className="form-group auth-form-group auth-form-group-login">
                          <input
                            type={`number`}
                            className="form-control auth-form-control-code"
                            id="number"
                            aria-label="code"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div className="form-group auth-form-group auth-form-group-login">
                          <input
                            type={`number`}
                            className="form-control auth-form-control-code"
                            id="number"
                            aria-label="code"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div className="form-group auth-form-group auth-form-group-login">
                          <input
                            type={`number`}
                            className="form-control auth-form-control-code"
                            id="number"
                            aria-label="code"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>

                      <div className="col-md-8 offset-md-2 auth-submit-btn-container mt-5">
                        <NavLink
                          to="/gestion/dashboard"
                          type="submit"
                          className="btn auth-submit-btn trans-0-2"
                        >
                          Envoyer
                        </NavLink>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
