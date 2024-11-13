import React from "react";
import "./Dashboard.css";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRectangleList, FaUsersRectangle } from "react-icons/fa6";
import LineChartEncaissements from "./LineChart/LineChartEncaissements";
import LineChartReceveur from "./LineChart/LineChartReceveur";
import BarChartDash from "./LineChart/BarChartDash";

function Dashboard() {
  return (
    <div className="dashbord-admin-component">
      <div className="dash-admin-page-content-container mb-3">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="cbii-dashboard-custom-bg">
              <div className="cbii-dashboard-subtitle mb-3">Statistiques</div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="cbii-dashboard-project-card">
                    <div className="cbii-dashboard-project-title-container mb-3">
                      <div>
                        <div className="cbii-dashboard-project-title">
                          Total par receveur
                        </div>
                        <div className="container-total-fdj  py-2">
                          <p className="text-total-fdj mb-0">Total :</p>
                          <p className="chiffre-dash-data mb-0">
                            20 <span className="ps-2">Fdj</span>
                          </p>
                        </div>
                        <div className="cbii-dashboard-project-stats">
                          <FaRegCheckSquare />
                          <div>
                            <span className="pe-1">Nombre d'acte</span>/ jour
                          </div>
                        </div>
                      </div>
                      <div style={{ color: "#0dcaf0", fontSize: 50 }}>
                        <FaUsersRectangle />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="cbii-dashboard-project-card">
                    <div className="cbii-dashboard-project-title-container mb-3">
                      <div>
                        <div className="cbii-dashboard-project-title">
                          Total par Encaissements
                        </div>
                        <div className="container-total-fdj  py-2">
                          <p className="text-total-fdj mb-0">Total :</p>
                          <p className="chiffre-dash-data mb-0">
                            20 <span className="ps-2">Fdj</span>
                          </p>
                        </div>
                        <div className="cbii-dashboard-project-stats">
                          <FaRegCheckSquare />
                          <div>
                            <span className="pe-1">Nombre d'acte</span>/ jour
                          </div>
                        </div>
                      </div>
                      <div style={{ color: "#fd7e14", fontSize: 50 }}>
                        <FaRectangleList />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="cbii-dashboard-project-card">
                    <div className="cbii-dashboard-project-title-container mb-3">
                      <div>
                        <div className="cbii-dashboard-project-title">
                          Total par receveur
                        </div>
                        <div className="container-total-fdj  py-2">
                          <p className="text-total-fdj mb-0">Total :</p>
                          <p className="chiffre-dash-data mb-0">
                            20 <span className="ps-2">Fdj</span>
                          </p>
                        </div>
                        <div className="cbii-dashboard-project-stats">
                          <FaRegCheckSquare />
                          <div>
                            <span className="pe-1">Nombre d'acte</span>/ mois
                          </div>
                        </div>
                      </div>
                      <div style={{ color: "#0dcaf0", fontSize: 50 }}>
                        <FaUsersRectangle />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="cbii-dashboard-project-card">
                    <div className="cbii-dashboard-project-title-container mb-3">
                      <div>
                        <div className="cbii-dashboard-project-title">
                          Total par Encaissements
                        </div>
                        <div className="container-total-fdj  py-2">
                          <p className="text-total-fdj mb-0">Total :</p>
                          <p className="chiffre-dash-data mb-0">
                            20 <span className="ps-2">Fdj</span>
                          </p>
                        </div>
                        <div className="cbii-dashboard-project-stats">
                          <FaRegCheckSquare />
                          <div>
                            <span className="pe-1">Nombre d'acte</span>/ mois
                          </div>
                        </div>
                      </div>
                      <div style={{ color: "#fd7e14", fontSize: 50 }}>
                        <FaRectangleList />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4 d-flex">
            <div className="cbii-dashboard-custom-bg w-100 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="cbii-dashboard-subtitle">
                  Statistiques de l'année par Receveur
                </div>
              </div>
              <div className="content-graph-admin flex-grow-1">
                <LineChartReceveur />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4 d-flex">
            <div className="cbii-dashboard-custom-bg w-100 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="cbii-dashboard-subtitle">
                  Statistiques d'Encaissements de l'année
                </div>
              </div>
              <div className="content-graph-admin flex-grow-1">
                <LineChartEncaissements />
              </div>
            </div>
          </div>
          <div className="col-md-12 mb-4 d-flex">
            <div className="cbii-dashboard-custom-bg w-100 d-flex flex-column">
              <div className="content-graph-admin flex-grow-1">
                <BarChartDash />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
