import React from "react";
import Logo from "../../../assets/appImages/ai-consulting.png"

function Contact() {

  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-left-support mb-3">
                <div className="content-col-left-contact">
                  <img src={Logo} alt="Logo" className="img-ai-consulting" />
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-right-contact mb-3">
                <div className="container-about-app">
                  <h3 className="contact-title-gestion pb-3">DJIB DATA AI CONSULTING</h3>
                <p className="title-contact-gestion">
                djib-data-ai-consulting.com
                </p>
                <p className="text-support">adresse: Salam Tower</p>
                <p className="text-support">Tel: + 253 21 35 63 53</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Contact;


