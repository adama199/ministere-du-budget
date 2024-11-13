import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { CustomPagination } from "../../../common/CustomPagination";
import { IoMdEye } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa";

function DocumentsTabTable() {
  // const { limit, page, onChange } = usePagination(10);
 
  const actionFormatter = (cell: number, row: any) => {
    return (
      <>
        <div className="table-actions-btn-container d-flex gap-3">
          <div className="container-btn-action-icon-modal">
            <button
              className="btn btn-action-modal-icon with-tooltip btn-see-detail-table"
              data-tooltip-content="Consulter"
            >
              <IoMdEye className="edit-action-icon" />
            </button>
          </div>
        </div>
      </>
    );
  };

  const fileFormatter = (cell: number, row: any) => {
    return (
      <div className="content-icon-file">
        <FaFilePdf />
      </div>
    );
  };

  const columns = [
    {
      dataField: "id",
      text: `Fichier`,
      formatter: fileFormatter
    },
    {
      dataField: "id",
      text: "Action",
      formatter: actionFormatter,
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

export default DocumentsTabTable;

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];
