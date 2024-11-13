import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { CustomPagination } from "../../../common/CustomPagination";

function PartiesTabTable() {
  // const { limit, page, onChange } = usePagination(10);
 


  const columns = [
    {
      dataField: "nom",
      text: `Nom`,
    },
    {
      dataField: "nom_pere",
      text: "Nom père",
    },
    {
      dataField: "role",
      text: "Rôle",
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

export default PartiesTabTable;

const data = [
  {
    id: 1,
    nom: "Jonh Doe",
    nom_pere: "Jean Pierre",
    role: "receveur",
  },
  {
    id: 2,
    nom: "Jonh Doe",
    nom_pere: "Jean Pierre",
    role: "receveur",
  },
  {
    id: 3,
    nom: "Jonh Doe",
    nom_pere: "Jean Pierre",
    role: "receveur",
  },
  {
    id: 4,
    nom: "Jonh Doe",
    nom_pere: "Jean Pierre",
    role: "receveur",
  },
  {
    id: 5,
    nom: "Jonh Doe",
    nom_pere: "Jean Pierre",
    role: "receveur",
  },
];
