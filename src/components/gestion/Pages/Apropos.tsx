import React from "react";


function Apropos() {

  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="container-about-app mb-4">
            <h3 className="title-registre-type-libele pb-3">À propos de l'Application</h3>
            <p className="text-support">
            L'application de gestion des registres de droits de Djibouti est un outil conçu pour faciliter la gestion et l'enregistrement des droits et des autorisations dans le contexte de Djibouti. L'application permet aux utilisateurs d'effectuer diverses opérations liées à la gestion des droits, notamment l'ajout, la modification et la suppression des utilisateurs et de leurs droits.
            </p>
        </div>
        <div className="container-about-app mb-4">
            <h3 className="title-registre-type-libele pb-3">À propos de l'Application</h3>
            <p className="text-support">
            L'objectif principal de cette application est de simplifier et d'automatiser le processus de gestion des registres de droits, en offrant une plateforme conviviale et sécurisée pour les administrateurs et les utilisateurs. L'application vise à améliorer l'efficacité et la transparence de la gestion des droits, tout en réduisant les erreurs et les problèmes liés à la manipulation manuelle des registres.
            </p>
        </div>
        <div className="container-about-app mb-4">
            <h3 className="title-registre-type-libele pb-3">Fonctionnalités Principales</h3>
            <p className="text-support">
            Gestion des utilisateurs : Ajout, modification et suppression des utilisateurs, y compris leurs informations personnelles et leurs droits d'accès.
            </p>
            <p className="text-support">
            Attribution des droits : Assignation des droits spécifiques à chaque utilisateur, en fonction de leur rôle et de leurs responsabilités.
            </p>
            <p className="text-support">
            Historique des modifications : Suivi des modifications apportées aux droits des utilisateurs, avec des journaux d'audit détaillés.
            </p>
            <p className="text-support">
            Sécurité renforcée : Mise en place de mesures de sécurité pour protéger les informations sensibles et prévenir tout accès non autorisé.
            </p>
            <p className="text-support">
            Interface utilisateur conviviale : Une interface intuitive et conviviale pour faciliter la navigation et l'utilisation de l'application.
            </p>
        </div>
        <div className="container-about-app mb-4">
            <h3 className="title-registre-type-libele pb-3">Technologies Utilisées</h3>
            <p className="text-support">
            Base de données : PostgreSQL pour le stockage sécurisé des informations des utilisateurs et des droits.
            </p>
            <p className="text-support">
            Backend : Python avec le framework Flask pour la création de l'API de gestion des utilisateurs.
            </p>
            <p className="text-support">
            Frontend : Angular pour la création de l'interface utilisateur interactive et réactive.
            </p>
        </div>
        <div className="container-about-app mb-4">
            <h3 className="title-registre-type-libele pb-3">Contact</h3>
            <p className="text-support">
            Si vous avez des questions, des commentaires ou des suggestions concernant cette application, n'hésitez pas à nous contacter à l'adresse suivante :
            <br />
            contact@djib-data-ai-consulting.com.
            </p>
            <p className="text-support">
            Nous espérons que cette application vous sera utile dans la gestion efficace des registres de droits de Djibouti.
            </p>
        </div>
      </div>
    </>
  );
}

export default Apropos;


