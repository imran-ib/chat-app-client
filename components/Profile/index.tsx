import React from "react";
import { useAuthStore } from "components/Auth/Auth";
import Container from "react-bootstrap/Container";

const Profile = () => {
  const user = useAuthStore();
  console.log("Profile -> user", user);
  return (
    <Container>
      <h1> User Profile</h1>
    </Container>
  );
};

export default Profile;
