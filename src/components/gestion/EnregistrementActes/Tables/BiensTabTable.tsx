import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { CustomPagination } from "../../../common/CustomPagination";

function BiensTabTable() {
  // const { limit, page, onChange } = usePagination(10);
 


  const columns = [
    {
      dataField: "bien",
      text: `Bien`,
    },
    {
      dataField: "description",
      text: "Description",
    },
    {
      dataField: "adresse",
      text: "Adresse",
    },
    {
      dataField: "prix",
      text: "Prix",
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

export default BiensTabTable;

const data = [
  {
    id: 1,
    bien: "Maison",
    description: "Description",
    adresse: "Dakar",
    prix: "12000"
  },
  {
    id: 2,
    bien: "Maison",
    description: "Description",
    adresse: "Dakar",
    prix: "12000"
  },
  {
    id: 3,
    bien: "Maison",
    description: "Description",
    adresse: "Dakar",
    prix: "12000"
  },
  {
    id: 4,
    bien: "Maison",
    description: "Description",
    adresse: "Dakar",
    prix: "12000"
  },
  {
    id: 5,
    bien: "Maison",
    description: "Description",
    adresse: "Dakar",
    prix: "12000"
  },
];
