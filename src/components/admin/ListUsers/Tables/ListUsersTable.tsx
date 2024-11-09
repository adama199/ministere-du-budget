import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { CustomPagination } from "../../../common/CustomPagination";
import { FaLock, FaUserEdit } from "react-icons/fa";
import EditPasswordModal from "../Modals/EditPasswordModal";
import EditUserModal from "../Modals/EditUserModal";

function ListUsersTable() {
  // const { limit, page, onChange } = usePagination(10);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowPassword, setModalShowPassword] = React.useState(false);

  const editInfoFormatter = (cell: any, row: any) => {
    return (
      <div className="">
        <button
          className="btn btn-edit-profil-user"
          onClick={() => setModalShow(true)}
        >
          <FaUserEdit />
        </button>
      </div>
    );
  };
  const editPasswordFormatter = (cell: any, row: any) => {
    return (
      <div className="">
        <button
          className="btn btn-edit-password-user"
          onClick={() => setModalShowPassword(true)}
        >
          <FaLock />
        </button>
      </div>
    );
  };

  const columns = [
    {
      dataField: "nom",
      text: `Nom`,
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "profil",
      text: "Profile",
    },
    {
      dataField: "agence",
      text: "Agence",
    },
    {
      dataField: "id",
      text: "Modifier Info",
      formatter: editInfoFormatter,
    },
    {
      dataField: "id",
      text: "Modifier mot de passe",
      formatter: editPasswordFormatter,
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
        <EditUserModal show={modalShow} onHide={() => setModalShow(false)} />
        <EditPasswordModal
          show={modalShowPassword}
          onHide={() => setModalShowPassword(false)}
        />
      </div>
    </>
  );
}

export default ListUsersTable;

const data = [
  {
    id: 1,
    nom: "Jonh Doe",
    email: "jonhdoe@gmail.com",
    profil: "Receveur",
    agence: "Dakar",
  },
  {
    id: 2,
    nom: "Jonh Doe",
    email: "jonhdoe@gmail.com",
    profil: "Receveur",
    agence: "Dakar",
  },
  {
    id: 3,
    nom: "Jonh Doe",
    email: "jonhdoe@gmail.com",
    profil: "Receveur",
    agence: "Dakar",
  },
  {
    id: 4,
    nom: "Jonh Doe",
    email: "jonhdoe@gmail.com",
    profil: "Receveur",
    agence: "Dakar",
  },
  {
    id: 5,
    nom: "Jonh Doe",
    email: "jonhdoe@gmail.com",
    profil: "Receveur",
    agence: "Dakar",
  },
  {
    id: 6,
    nom: "Jonh Doe",
    email: "jonhdoe@gmail.com",
    profil: "Receveur",
    agence: "Dakar",
  },
  {
    id: 7,
    nom: "Jonh Doe",
    email: "jonhdoe@gmail.com",
    profil: "Receveur",
    agence: "Dakar",
  },
  {
    id: 8,
    nom: "Jonh Doe",
    email: "jonhdoe@gmail.com",
    profil: "Receveur",
    agence: "Dakar",
  },
  {
    id: 9,
    nom: "Jonh Doe",
    email: "jonhdoe@gmail.com",
    profil: "Receveur",
    agence: "Dakar",
  },
  {
    id: 10,
    nom: "Jonh Doe",
    email: "jonhdoe@gmail.com",
    profil: "Receveur",
    agence: "Dakar",
  },
  {
    id: 11,
    nom: "Jonh Doe",
    email: "jonhdoe@gmail.com",
    profil: "Receveur",
    agence: "Dakar",
  },
];
