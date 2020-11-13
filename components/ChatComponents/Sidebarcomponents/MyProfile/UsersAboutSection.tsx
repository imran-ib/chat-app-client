import { customMedia } from "components/styles/Global";
import React from "react";
import styled from "styled-components";

const AboutSection = ({ user }: any) => {
  return (
    <AboutSectionStyles
      className="p-4 user-profile-desc border-bottom"
      data-simplebar
    >
      <div id="profile-user-accordion-1" className="custom-accordion">
        {/* Accourdian */}
        <AboutList>
          <li>
            User Name : <span>{user?.username}</span>
          </li>
          <li>
            Email : <span>{user?.email}</span>
          </li>
          <li>
            Location : <span>Riyadh KSA</span>
          </li>
          <li>
            Total Friends : <span>205</span>
          </li>
          <li>
            About Me : <span>Something</span>
          </li>
        </AboutList>

        {/* Accourdian */}
      </div>
    </AboutSectionStyles>
  );
};

const AboutSectionStyles = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  height: calc(100vh - 50rem);
  ${customMedia.lessThan("small")`
  height: calc(100vh - 30rem);
  `}
  margin-right:2rem;
  overflow: auto;
  /* Scroll bar */
  ::-webkit-scrollbar {
    width: 0.4em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

const AboutList = styled.ul`
  text-align: left;
  li {
    margin: 2rem;
    span {
      color: #c9c9c9;
      margin-left: 1.5rem;
      text-align: right;
    }
  }
`;

export default AboutSection;
