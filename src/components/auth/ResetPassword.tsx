import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/appImages/logo.png";
import { FaLock } from "react-icons/fa";
const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                <h2 className="title-auth-form-text pt-3">Nouveau mot de passe</h2>
                <p className="info-connect-redirection">
                Veuillez saisir votre nouveau mot de passe.
                        </p>
                <div className="mt-5">
                  <form id="auth-form">
                    <div className="row auth-form-row">
                      <div className="col-md-12 auth-input-col mb-2">
                        <div className="auth-form-group position-relative">
                        <span className="content-icon-login-input">
                          <FaLock />
                          </span>
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control auth-form-control"
                            id="password"
                            placeholder="Mot de passe"
                            aria-label="Password"
                            aria-placeholder="***********"
                          />
                          <span
                            className="show-hide-password"
                            onClick={() => {
                              setShowPassword(!showPassword);
                            }}
                          >
                            {showPassword ? (
                              <AiFillEyeInvisible />
                            ) : (
                              <AiFillEye />
                            )}
                          </span>
                        </div>
                      </div>
                     
                      <div className="col-md-12 auth-input-col mb-2">
                        <div className="auth-form-group position-relative">
                        <span className="content-icon-login-input">
                          <FaLock />
                          </span>
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            className="form-control auth-form-control"
                            id="password"
                            placeholder="Confirmer mot de passe"
                            aria-label="Password"
                            aria-placeholder="***********"
                          />
                          <span
                            className="show-hide-password"
                            onClick={() => {
                                setShowConfirmPassword(!showConfirmPassword);
                            }}
                          >
                            {showConfirmPassword ? (
                              <AiFillEyeInvisible />
                            ) : (
                              <AiFillEye />
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-8 offset-md-2 auth-submit-btn-container mt-5">
                        <NavLink to="/gestion/dashboard"
                          type="submit"
                          className="btn auth-submit-btn trans-0-2"
                        >Confirmer</NavLink>
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

export default ResetPassword;
