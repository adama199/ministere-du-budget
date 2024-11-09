import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { CustomPagination } from "../../../common/CustomPagination";

function RegistresTable() {
  // const { limit, page, onChange } = usePagination(10);

  const columns = [
    {
      dataField: "registre",
      text: `Registre`,
    },
    {
        dataField: "description",
        text: `Description`,
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
                  label="registrebre de fichiers"
                /> */}
     
      </div>
    </>
  );
}

export default RegistresTable;

const data = [
  {
    id: 1,
    registre: "ACP",
    description: "Acte civil et public",
  },
  {
    id: 2,
    registre: "SSP",
    description: "Actes sous seing privé",
  },
  {
    id: 3,
    registre: "AJ",
    description: "Actes judiciaires et extrajudiciaires.",
  },
  {
    id: 4,
    registre: "MD",
    description: "Recette des droits mutation par décès.",
  },
  {
    id: 5,
    registre: "LV-CA",
    description: "LOCATION VERBALE /CESSION AMIABLE",
  },
];
