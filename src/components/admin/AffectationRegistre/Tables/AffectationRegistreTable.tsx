import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { CustomPagination } from "../../../common/CustomPagination";

function AffectationRegistreTable() {
  // const { limit, page, onChange } = usePagination(10);

  const columns = [
    {
      dataField: "user",
      text: `Utilisateur`,
    },
    {
        dataField: "nom",
        text: `Nom`,
      },
    {
      dataField: "profil",
      text: "Profile",
    },
    {
      dataField: "agence",
      text: "Agence",
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

export default AffectationRegistreTable;

const data = [
  {
    id: 1,
    nom: "Jonh Doe",
    user: "Marie Paul",
    profil: "Receveur",
    agence: "Hôtel des Impôts",
  },
];
