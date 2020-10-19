import React from "react";
import { useUser } from "./Auth";
import LoginShield from "./LoginShield";
import Container from "react-bootstrap/Container";

interface Props {
  children?: any;
}

const AuthShield: React.FC<Props> = ({ children }) => {
  const user = useUser();
  if (!user)
    return (
      <Container className="mt-5">
        <LoginShield />
      </Container>
    );
  return children;
};

export default AuthShield;
