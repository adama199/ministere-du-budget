import React from "react";
import { useNavigate } from "react-router-dom";

const PagesError404 = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page-component">
      <section id="error-page-section">
        <div className="container error-page-container">
          <div className="row error-page-section-row">
            <div className="col-lg-6 col-md-12 col-sm-12 error-page-section-col">
              <div className="error-page-textual-partial-container">
                <h1 className="error-page-section-title">Page non trouvée</h1>
                <div className="error-page-textual-container">
                  <div className="error-page-textual">
                    <p>Oups! Cette page n'existe pas encore.</p>
                  </div>
                  <div className="error-page-btn-container">
                    <button
                      onClick={() => navigate(-1)}
                      className="return-to-homepage-btn btn"
                    >
                      Retour
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 error-page-section-col">
              <div className="error-page-code-textual-container">
                <h2 className="error-page-code">404</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagesError404;
