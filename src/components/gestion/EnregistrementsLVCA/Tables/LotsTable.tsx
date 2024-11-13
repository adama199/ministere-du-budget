import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

function LotsTable() {


  const columns = [
    {
      dataField: "acte",
      text: `Acte`,
    },
    {
      dataField: "nom",
      text: "Nom",
    },
    {
      dataField: "total",
      text: "Total",
    },
    {
      dataField: "created_at",
      text: "Date de création",
    },
  ];
  return (
    <>
      <BootstrapTable
        keyField="id"
        data={data || []}
        columns={columns}
        condensed
        hover
        wrapperClasses="table-responsive admin-table"
        noDataIndication={() => "Aucune donnée trouvée"}
      />
      <div className="custom-pagination-container">
       
      
      </div>
    </>
  );
}

export default LotsTable;

const data = [
  {
    id: 1,
    acte: "ACP",
    nom: "SSP",
    total: "277",
    created_at: "13/11/2023"
  },
  {
    id: 2,
    acte: "ACP",
    nom: "SSP",
    total: "277",
    created_at: "13/11/2023"
  },
];
