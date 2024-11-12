import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { CustomPagination } from "../../../common/CustomPagination";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import AddOrUpdateNotaireModal from "../Modal/AddOrUpdateNotaireModal";

function NotairesListTable() {
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
      dataField: "nom",
      text: `Nom`,
    },
    {
      dataField: "telephone",
      text: "Téléphone",
    },
    {
      dataField: "mobile",
      text: "Mobile",
    },
    {
      dataField: "email",
      text: "Email",
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

export default NotairesListTable;

const data = [
  {
    id: 1,
    nom: "Nom",
    mobile: "787777777",
    telephone: "777777777",
    email: "test@gmail.com",
  },
  {
    id: 2,
    nom: "Nom",
    mobile: "787777777",
    telephone: "777777777",
    email: "test@gmail.com",
  },
];