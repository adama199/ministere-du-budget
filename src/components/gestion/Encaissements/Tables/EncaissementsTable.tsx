import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { CustomPagination } from "../../../common/CustomPagination";

function EncaissementsTable() {
  // const { limit, page, onChange } = usePagination(10);
 


  const columns = [
    {
      dataField: "acte",
      text: `Acte`,
    },
    {
        dataField: "partie",
        text: `Parties`,
      },
    {
        dataField: "registre",
        text: `Registre`,
      },
    {
      dataField: "nature",
      text: "Nature",
    },
    {
      dataField: "fait",
      text: "Faits",
    },
    {
      dataField: "droits_eng",
      text: "Droits Enrg.",
    },
    {
      dataField: "droits_timbre",
      text: "Droits Timbres",
    },
    {
        dataField: "montant",
        text: `Montant`,
      },
      {
        dataField: "date",
        text: "Date",
      },
      {
        dataField: "encaissement",
        text: "Encaissement",
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

export default EncaissementsTable;

const data = [
  {
    id: 1,
    acte: "SSP",
    registre: "SSP",
    nature: "nature",
    partie: "partie",
    fait: "fait",
    droits_eng: "21/12/2023",
    droits_timbre: "255",
    montant: "250 000",
    date: "CREE",
    encaissement: "100 000",
  },
  
];
