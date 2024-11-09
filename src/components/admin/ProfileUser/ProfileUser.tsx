import React from "react";
import { AiFillCamera } from "react-icons/ai";
import Avatar from "../../../assets/appImages/avatar.png";
import "./ProfileUser.css"

function ProfileUser() {
  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">Profile</div>
          </div>
        </div>
        <div className="admin-table">
          <div className="container-admin-table mt-4  mb-3">
            <form>
              <div className="container-form-add-abonnement">
                <div className="row details-row">
                  <div className="col-lg-12 mb-3">
                    <div className="p-3 custom-detail-item">
                      <div className="pt-3 profil_image__grid leader-auto-user-avatar-container">
                        <div className="image_wrapper">
                          <img src={Avatar} alt="Avatar" className="img-pp-user-profil-connect" />
                        </div>
                        <div className="pt-3">
                          <p className="m-0 last_name-and-first_name">
                            djib_data1
                          </p>
                        </div>

                        <div className="leader-auto-user-avatar-edit-hover-deux-profil">
                          <AiFillCamera className="edit-avatar-camera-icon" />
                        </div>
                        <form className="mt-4">
                          <input
                            type="file"
                            className="input-add-avatar"
                            id="changeAvatar"
                            accept="image/*"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-3">
                    <div className="p-3 custom-detail-item">
                      <div className="pt-3 infos-container">
                        <div className="row infos-row">
                          <div className="col-md-6 col-lg-6 mb-3 box-wrapper">
                            <div className="get_info__box_container">
                              <div className="infos-group">
                                <p className="m-0 pb-2 labelprofile-admin">
                                  Nom
                                </p>
                                <p className="m-0 sm_value first-name-and-last-name"></p>
                                <input
                                  type="text"
                                  className="form-control auth-form-control"
                                  placeholder="test"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 mb-3 box-wrapper">
                            <div className="get_info__box_container">
                              <div className="infos-group">
                                <p className="m-0 pb-2 labelprofile-admin">
                                  Adresse email
                                </p>
                                <input
                                  type="text"
                                  className="form-control auth-form-control"
                                  placeholder="test@gmail.com"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6 col-lg-6 mb-3 box-wrapper">
                            <div className="get_info__box_container">
                              <div className="infos-group">
                                <p className="m-0 pb-2 labelprofile-admin">
                                  Profile
                                </p>
                                <input
                                  type="text"
                                  className="form-control auth-form-control"
                                  placeholder="	Receveur"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6 col-lg-6 mb-3 box-wrapper">
                            <div className="get_info__box_container">
                              <div className="infos-group">
                                <p className="m-0 pb-2 labelprofile-admin">
                                  Agence
                                </p>
                                <input
                                  type="text"
                                  className="form-control auth-form-control"
                                  placeholder="Hôtel des Impôts"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-btn-submit-form-add-abonnement pt-4">
                    <button className="btn btn-theme-body-page">Enregistrer</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileUser;
