import React from "react";
import { useStep } from "react-hooks-helper";
import { useStepType } from "../../../utils/type";
import InfoGenerales from "./EnretrementsTabs/InfoGenerales";
import PartiesTab from "./EnretrementsTabs/PartiesTab";
import BiensTab from "./EnretrementsTabs/BiensTab";
import DocumentsTab from "./EnretrementsTabs/DocumentsTab";

const steps = [
  { id: "info-generale", Component: InfoGenerales },
  {
    id: "parties",
    Component: PartiesTab,
  },
  {
    id: "biens",
    Component: BiensTab,
  },
  {
    id: "documents",
    Component: DocumentsTab,
  },
];
const tabs = [
  "Informations générales",
  "Les Parties",
  "Les Biens",
  "Les Documents",
];

function AddEngeregistrement() {
  const {
    step,
    navigation: { go },
    index,
  }: useStepType = useStep({ initialStep: 0, steps });
  const { Component } = step;
  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">
              Nouvel Enregistrement
            </div>
          </div>
        </div>
        <div className="cbii-details-projets-tab-container mb-3">
          <ul className="tabs-container parametre-tabs-container-admin mb-0 pt-4 pb-2">
            {tabs.map((tab: any, key: any) => (
              <li
                className={`param-tab-item  ${
                  index === key && "active-param-tab"
                }`}
                key={key}
                onClick={() => go(key)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        <div className="dash-admin-page-content-container mb-3">
          <Component />
        </div>
      </div>
    </>
  );
}

export default AddEngeregistrement;
