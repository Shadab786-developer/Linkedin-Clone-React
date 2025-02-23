import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Not logegd in</h1>;
  return (
    <div>
      <h3>Profile : {user.username}</h3>
      <h6>More Component</h6>
    </div>
  );
}

export default Profile;
