import * as React from "react";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuthStore } from "components/Auth/Auth";
import { useRouter } from "next/router";

const DotMenuStyle = styled.div`
  .MenuStyles {
    background-color: #292f3f;
    box-shadow: -15px 15px 15px rgba(55, 62, 78, 0.5);
    & a {
      color: #ffdc00;
      font-size: 2rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
  /* remove bootstrap default dropdown caret icon  */
  .dropdown-toggle {
    & ::after {
      display: none;
    }
  }
`;
const DotsMenuIcon = styled.div`
  background-image: url("/images/menu.png");
  width: 3.2rem;
  height: 3.2rem;
  position: absolute;
  right: 3rem;
  top: 3rem;
  cursor: pointer;
`;

const DotMenu = () => {
  const Router = useRouter();
  const dispatch = useAuthStore((state) => state.dispatch);
  return (
    <DotMenuStyle>
      <Dropdown>
        <Dropdown.Toggle
          as={DotsMenuIcon}
          className="After-hide"
          id="dropdown-split-basic"
        />
        <Dropdown.Menu className="MenuStyles">
          <Dropdown.Item>My Account</Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              //@ts-ignore
              dispatch({ type: "Logout", payload: {} });
              Router.push("/");
            }}
          >
            Logout
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3"></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </DotMenuStyle>
  );
};

export default DotMenu;
