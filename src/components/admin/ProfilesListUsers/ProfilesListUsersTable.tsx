import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

function ProfilesListUsersTable() {
  // const { limit, page, onChange } = usePagination(10);
 

  const columns = [
    {
      dataField: "user",
      text: `Utilisateurs`,
    },
    {
      dataField: "nom",
      text: "Nom",
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "profile",
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

export default ProfilesListUsersTable;

const data = [
    {
        id: 1,
        nom: "Jonh Doe",
        user: "Marie Paul",
        profile: "Receveur",
        agence: "Hôtel des Impôts",
        email: "test@gmail.com"
      },
];
