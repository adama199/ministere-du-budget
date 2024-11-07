import React from "react";
import { NavLink } from "react-router-dom";

const BannerPage = () => {
  return (
    <div className="banner-page-container">
      <div className="row row-banner">
        <div className="col-md-6 col-left-banner-home-page">
          <div className="content-col-left-home-page">
            <h1 className="title-home-page-banner">
              low-price, tout le <br /> plaisir de la
              <br /> lecture
            </h1>
            <div className="content-text-description-home-page-banner mt-4 mb-5">
              <p className="text-description-home-page-banner">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                placerat vel phasellus a eros, pharetra, sed sagittis. Lacus
                integer amet cras et iaculis est senectus ultricies.
              </p>
            </div>
            <div className="content-btn-connect-banner">
              <NavLink className="btn btn-connect-banner" to="/commencer">
                Commencer maintenant
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
