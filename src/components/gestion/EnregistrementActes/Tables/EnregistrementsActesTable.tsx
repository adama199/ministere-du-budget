import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { CustomPagination } from "../../../common/CustomPagination";

function EnregistrementsActesTable() {
  // const { limit, page, onChange } = usePagination(10);
 


  const columns = [
    {
      dataField: "registre",
      text: `Registre`,
    },
    {
      dataField: "nature",
      text: "Nature",
    },
    {
      dataField: "parties",
      text: "Parties",
    },
    {
      dataField: "fait",
      text: "Faits",
    },
    {
      dataField: "created_at",
      text: "Date création",
    },
    {
      dataField: "num_acte",
      text: "N° Acte",
    },
    {
        dataField: "montant",
        text: `Montant`,
      },
      {
        dataField: "receveur",
        text: "Receveurs",
      },
      {
        dataField: "status",
        text: "Statut",
      },
      {
        dataField: "detail",
        text: "Détails",
      },
      {
        dataField: "valider",
        text: "Valider",
      },
      {
        dataField: "bl",
        text: "BL",
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

export default EnregistrementsActesTable;

const data = [
  {
    id: 1,
    registre: "SSP",
    nature: "nature",
    parties: "partie",
    fait: "fait",
    created_at: "21/12/2023",
    num_acte: "255",
    montant: "250 000",
    receveur: "Jonh Doe",
    statut: "CREE",
    detail: "Actes sous seing privé",
    valider: "Valide",
    bl: "bl",
  },
  {
    id: 2,
    registre: "ACP",
    nature: "nature",
    parties: "partie",
    fait: "fait",
    created_at: "21/12/2023",
    num_acte: "255",
    montant: "250 000",
    receveur: "Jonh Doe",
    statut: "PAYE AU SERVICE D'ENREGISTREMENTS",
    detail: "Acte civil et public",
    valider: "Valide",
    bl: "bl",
  },
  {
    id: 3,
    registre: "AJ",
    nature: "nature",
    parties: "partie",
    fait: "fait",
    created_at: "21/12/2023",
    num_acte: "255",
    montant: "250 000",
    receveur: "Jonh Doe",
    statut: "VALIDE",
    detail: "Actes judiciaires et extrajudiciaires.",
    valider: "Valide",
    bl: "bl",
  },
  {
    id: 4,
    registre: "MD",
    nature: "nature",
    parties: "partie",
    fait: "fait",
    created_at: "21/12/2023",
    num_acte: "255",
    montant: "250 000",
    receveur: "Jonh Doe",
    statut: "PAYE AU TRESOR NATIONAL",
    detail: "Recette des droits mutation par décès.",
    valider: "Valide",
    bl: "bl",
  },
  {
    id: 5,
    registre: "LV-CA",
    nature: "nature",
    parties: "partie",
    fait: "fait",
    created_at: "21/12/2023",
    num_acte: "255",
    montant: "250 000",
    receveur: "Jonh Doe",
    statut: "CREE",
    detail: "LOCATION VERBALE /CESSION AMIABLE",
    valider: "Valide",
    bl: "bl",
  },
];
