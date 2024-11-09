import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/appImages/logo.png";
import { MdEmail } from "react-icons/md";
const ForgetPassword = () => {
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
                  Mot de passe oublié
                </h2>
                <p className="info-connect-redirection">
                  Entrez le mail lié à votre compte. Vous y recevrez un code à 4
                  chiffres pour vérifier votre identité
                </p>
                <div className="mt-5">
                  <form id="auth-form">
                    <div className="row auth-form-row">
                      <div className="col-md-12 auth-input-col mb-3">
                        <div className="auth-form-group position-relative">
                          <span className="content-icon-login-input">
                            <MdEmail />
                          </span>
                          <input
                            type={`email`}
                            className="form-control auth-form-control"
                            id="email-or-username"
                            aria-label="Username"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="col-md-8 offset-md-2 auth-submit-btn-container mt-5">
                        <NavLink
                          to="/reinitialiser-mot-de-passe"
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

export default ForgetPassword;
