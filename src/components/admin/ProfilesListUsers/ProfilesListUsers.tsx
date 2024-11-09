import React from "react";
import './ProfilesListUsers.css'
import ProfilesListUsersTable from "./ProfilesListUsersTable";

function ProfilesListUsers() {
  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">
            Profiles des utilisateurs
            </div>
          </div>
        </div>
        <div className="admin-table">
          <ProfilesListUsersTable />
        </div>
      </div>
    </>
  );
}

export default ProfilesListUsers;
