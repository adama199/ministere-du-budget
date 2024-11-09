import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { CustomPagination } from "../../../common/CustomPagination";
import { FaTrashAlt } from "react-icons/fa";

function RegistreAffecterTable() {
  // const { limit, page, onChange } = usePagination(10);

  const deleteRegistreFormatter = (cell: any, row: any) => {
    return (
      <div className="">
        <button
          className="btn btn-edit-password-user"
        >
          <FaTrashAlt />
        </button>
      </div>
    );
  };

  const columns = [
    {
      dataField: "registre",
      text: `Registre`,
    },
    {
        dataField: "libelle",
        text: `Libelle`,
      },
    {
        dataField: "id",
        text: `Supprimer`,
        formatter: deleteRegistreFormatter,
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

export default RegistreAffecterTable;

const data = [
  {
    id: 1,
    registre: "ACP",
    libelle: "Acte civil et public",
  },
];
