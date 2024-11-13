import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

function ActePrincipal() {
  // const { limit, page, onChange } = usePagination(10);
 


  const columns = [
    
    {
      dataField: "nom",
      text: "Nom",
    },
    {
        dataField: "description",
        text: `Description`,
      },
    {
      dataField: "num_acte",
      text: "N° Acte",
    },
    {
      dataField: "timbre",
      text: "Timbre",
    },
    {
      dataField: "droit_enregistrement",
      text: "Droit enregistrement",
    },
    {
      dataField: "vol",
      text: "Vol",
    },
    {
      dataField: "folio",
      text: "Folio",
    },
    {
      dataField: "case",
      text: "Case",
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
        {/* <CustomPagination
                  nbPages={data?.length}
                  page={page}
                  onChange={onChange}
                  perPage={limit}
                  label="Nombre de fichiers"
                /> */}
      
      </div>
    </>
  );
}

export default ActePrincipal;

const data = [
  {
    id: 1,
    num_acte: "3",
    nom: "SSP",
    description: "Description",
    timbre: "1311",
    droit_enregistrement: "Enregistrement",
    vol: "Vol",
    folio: "Folio",
    case: "Case"
  },
];
