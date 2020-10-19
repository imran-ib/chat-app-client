import React from "react";
import { useAuthStore, useUser } from "components/Auth/Auth";
import Container from "react-bootstrap/Container";

const Profile = () => {
  const user = useUser();
  console.log("Profile -> user", user);
  return (
    <Container>
      <img src={user?.avatar} alt="" />
      <h1> {user?.username}</h1>
      <h1> {user?.email}</h1>
    </Container>
  );
};

export default Profile;
