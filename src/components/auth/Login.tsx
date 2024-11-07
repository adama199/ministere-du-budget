import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/appImages/logo.png";
import "./Login.css"
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
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
                <h2 className="title-auth-form-text pt-3">Connexion</h2>
                <p className="info-connect-redirection">
                Entrez votre email et mot de passe
                        </p>
                <div className="mt-5">
                  <form id="auth-form">
                    <div className="row auth-form-row">
                      <div className="col-md-12 auth-input-col mb-3">
                        <div className="auth-form-group">
                          <input
                            type={`email`}
                            className="form-control auth-form-control"
                            id="email-or-username"
                            aria-label="Username"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 auth-input-col mb-2">
                        <div className="auth-form-group position-relative">
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
                      <div className="col-md-12 mt-3 text-right">
                        <span className="mt-2">
                          <NavLink
                            className="nav-link forget-password-link"
                            to="/mot-de-passe-oublie"
                            data-tooltip-content="Gestionnaires"
                          >
                            Mot de passe oublié
                          </NavLink>
                        </span>
                      </div>

                      <div className="col-md-8 offset-md-2 auth-submit-btn-container mt-5">
                        <NavLink to="/gestion/dashboard"
                          type="submit"
                          className="btn auth-submit-btn trans-0-2"
                        >Connexion</NavLink>
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

export default Login;
