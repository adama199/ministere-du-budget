import React from "react";
import { Link } from "react-router-dom";

const PagesError401 = () => {
  return (
    <div className="error-page-component">
      <section id="error-page-section">
        <div className="container error-page-container">
          <div className="row error-page-section-row">
            <div className="col-lg-6 col-md-12 col-sm-12 error-page-section-col">
              <div className="error-page-textual-partial-container">
                <h1 className="error-page-section-title">Page non autorisée</h1>
                <div className="error-page-textual-container">
                  <div className="error-page-textual">
                    <p>Vous n'êtes pas autorisé à accéder à cette page.</p>
                  </div>
                  <div className="error-page-btn-container">
                    <Link to="/accueil" className="return-to-homepage-btn btn">
                      Accueil
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 error-page-section-col">
              <div className="error-page-code-textual-container">
                <h2 className="error-page-code">401</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagesError401;
