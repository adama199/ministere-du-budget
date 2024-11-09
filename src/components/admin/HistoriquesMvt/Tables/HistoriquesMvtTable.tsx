import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { CustomPagination } from "../../../common/CustomPagination";

function HistoriquesMvtTable() {
  // const { limit, page, onChange } = usePagination(10);
 

  const columns = [
    {
      dataField: "user",
      text: `Utilisateur`,
    },
    {
      dataField: "nom",
      text: "Nom complet",
    },
    {
      dataField: "log",
      text: "Log",
    },
    {
      dataField: "created_at",
      text: "Date de création",
    },
    {
      dataField: "action",
      text: "Action",
    },
    {
      dataField: "ip",
      text: "IP",
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

export default HistoriquesMvtTable;

const data = [
  {
    id: 1,
    user: "Marie Paul",
    nom: "Jonh Doe",
    log: "556",
    created_at: "2024-11-09",
    action: "Connexion au portail d'enregistrement des actes",
    ip: "41.83.174.201"
  },
  {
    id: 2,
    user: "Marie Paul",
    nom: "Jonh Doe",
    log: "556",
    created_at: "2024-11-09",
    action: "Connexion au portail d'enregistrement des actes",
    ip: "41.83.174.201"
  },
  {
    id: 3,
    user: "Marie Paul",
    nom: "Jonh Doe",
    log: "556",
    created_at: "2024-11-09",
    action: "Connexion au portail d'enregistrement des actes",
    ip: "41.83.174.201"
  },
  {
    id: 4,
    user: "Marie Paul",
    nom: "Jonh Doe",
    log: "556",
    created_at: "2024-11-09",
    action: "Connexion au portail d'enregistrement des actes",
    ip: "41.83.174.201"
  },
  {
    id: 5,
    user: "Marie Paul",
    nom: "Jonh Doe",
    log: "556",
    created_at: "2024-11-09",
    action: "Connexion au portail d'enregistrement des actes",
    ip: "41.83.174.201"
  },
  {
    id: 6,
    user: "Marie Paul",
    nom: "Jonh Doe",
    log: "556",
    created_at: "2024-11-09",
    action: "Connexion au portail d'enregistrement des actes",
    ip: "41.83.174.201"
  },
  {
    id: 7,
    user: "Marie Paul",
    nom: "Jonh Doe",
    log: "556",
    created_at: "2024-11-09",
    action: "Connexion au portail d'enregistrement des actes",
    ip: "41.83.174.201"
  },
  {
    id: 8,
    user: "Marie Paul",
    nom: "Jonh Doe",
    log: "556",
    created_at: "2024-11-09",
    action: "Connexion au portail d'enregistrement des actes",
    ip: "41.83.174.201"
  },
  {
    id: 9,
    user: "Marie Paul",
    nom: "Jonh Doe",
    log: "556",
    created_at: "2024-11-09",
    action: "Connexion au portail d'enregistrement des actes",
    ip: "41.83.174.201"
  },
  {
    id: 10,
    user: "Marie Paul",
    nom: "Jonh Doe",
    log: "556",
    created_at: "2024-11-09",
    action: "Connexion au portail d'enregistrement des actes",
    ip: "41.83.174.201"
  },
  {
    id: 11,
    user: "Marie Paul",
    nom: "Jonh Doe",
    log: "556",
    created_at: "2024-11-09",
    action: "Connexion au portail d'enregistrement des actes",
    ip: "41.83.174.201"
  },
];
