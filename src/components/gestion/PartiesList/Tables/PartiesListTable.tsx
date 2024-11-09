import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { CustomPagination } from "../../../common/CustomPagination";

function PartiesListTable() {
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
      dataField: "nom_mere",
      text: "Nom mère",
    },
    {
      dataField: "ddn",
      text: "DDN",
    },
    {
      dataField: "telephone",
      text: "Téléphone",
    },
    {
      dataField: "cni",
      text: "Cin",
    },
    {
        dataField: "adresse",
        text: `Adresse`,
      },
      {
        dataField: "nif",
        text: "NIF",
      },
      {
        dataField: "niu",
        text: "NIU",
      },
      {
        dataField: "num",
        text: "	N°",
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

export default PartiesListTable;

const data = [
  {
    id: 1,
    nom: "Nom",
    nom_pere: "Nom père",
    nom_mere: "Nom mère",
    ddn: "DNN",
    telephone: "777777777",
    cni: "255",
    adresse: "Dakar",
    nif: "NIF",
    niu: "NIU",
    num: "A255",
  },
  {
    id: 2,
    nom: "Nom",
    nom_pere: "Nom père",
    nom_mere: "Nom mère",
    ddn: "DNN",
    telephone: "777777777",
    cni: "255",
    adresse: "Dakar",
    nif: "NIF",
    niu: "NIU",
    num: "A255",
  },
];
