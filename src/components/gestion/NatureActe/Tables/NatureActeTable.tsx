import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { CustomPagination } from "../../../common/CustomPagination";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import AddOrUpdateNotaireModal from "../Modal/AddOrUpdateNatureActeModal";

function NatureActeTable() {
  // const { limit, page, onChange } = usePagination(10);
  const [modalShow, setModalShow] = React.useState(false);

  const actionFormatter = (cell: number, row: any) => {
    return (
      <>
        <div className="table-actions-btn-container d-flex gap-3">
          <div className="container-btn-action-icon-modal">
            <button
              className="btn btn-action-modal-icon with-tooltip btn-edit-cell-table"
              data-tooltip-content="Modifier"
              onClick={() => setModalShow(true)}
            >
              <MdEdit className="edit-action-icon" />
            </button>
          </div>
          <div className="container-btn-action-icon-modal">
            <button
              className="btn btn-action-modal-icon with-tooltip btn-delete-cell-table"
              data-tooltip-content="Supprimer"
            >
              <FaTrashAlt className="delete-action-btn" />
            </button>
          </div>
        </div>
      </>
    );
  };
  const columns = [
    {
      dataField: "libelle",
      text: `Libelle`,
    },
    {
        dataField: "id",
        text: "Action",
        formatter: actionFormatter,
    }
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
                 <AddOrUpdateNotaireModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
}

export default NatureActeTable;

const data = [
  {
    id: 1,
    libelle: "Acte civil et public",
  },
  {
    id: 2,
    libelle: "Acte chez un notaire",
  },
];
