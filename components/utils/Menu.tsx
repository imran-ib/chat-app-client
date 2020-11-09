import * as React from "react";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuthStore } from "components/Auth/Auth";
import { useCurrentUserQuery } from "generated/graphql";



export const DotMenuStyle = styled.div`
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
export const DotsMenuIcon = styled.div`
  background-image: url("/images/menu.png");
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
`;

const DotMenu = () => {
  const dispatch = useAuthStore((state) => state.dispatch);
  const {
    data,
    loading: UserLoading,
    error: userError,
    called,
    refetch,
  } = useCurrentUserQuery();
  return (
    <DotMenuStyle className="ml-auto mb-5">
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
              if (data && !UserLoading && !userError && called) refetch();
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
