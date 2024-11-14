// src/ProfilePage.js
import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileDetails from "./ProfileDetails";

const ProfilePage = ({ user }) => {
  return (
    <div className="profile-page">
      <ProfilePicture imageUrl={user.profilePictureUrl} />
      <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
    </div>
  );
};

export default ProfilePage;
