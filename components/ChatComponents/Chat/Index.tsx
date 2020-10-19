import React from "react";
import SideBarComponent from "../Sidebarcomponents";
import ChatComponents from "../ChatComponents";

const Chat = () => {
  return (
    <div className="layout-wrapper d-lg-flex">
      <SideBarComponent />
      <ChatComponents />
    </div>
  );
};

export default Chat;
