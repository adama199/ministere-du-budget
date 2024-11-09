import React from "react";
import HistoriquesMvtTable from "./Tables/HistoriquesMvtTable";
import './HistoriquesMvt.css'

function HistoriquesMvt() {
  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">
            Historique des transactions
            </div>
          </div>
        </div>
        <div className="admin-table">
          <HistoriquesMvtTable />
        </div>
      </div>
    </>
  );
}

export default HistoriquesMvt;
