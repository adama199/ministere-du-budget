import React from "react";
import { NavLink } from "react-router-dom";

const MessageConfirmation = () => {
  return (
    <div>
      <div className="container-page-login-app">
        <div className="auth-row">
          <div className="auth-col auth-right-side-col">
            <div className="auth-right-side-container">
              <div className="auth-form-container text-center pb-4">
                <p className="info-connect-redirection">
                  Un code de confirmation vous a été Envoyer. <br /> Veuillez
                  vérifier votre mail !
                </p>
                <div className="col-md-8 offset-md-2 auth-submit-btn-container mt-3">
                  <NavLink
                    to="/code-de-verification"
                    type="submit"
                    className="btn auth-submit-btn trans-0-2"
                  >
                    Envoyer
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageConfirmation;
