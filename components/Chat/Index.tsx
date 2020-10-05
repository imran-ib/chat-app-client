import React from "react";
import { useAuthStore } from "components/Auth/Auth";
import Container from "react-bootstrap/Container";

const Chat = () => {
  const user = useAuthStore();
  console.log("Chat -> user", user);
  return (
    <Container>
      <h1> User Chat</h1>
    </Container>
  );
};

export default Chat;
