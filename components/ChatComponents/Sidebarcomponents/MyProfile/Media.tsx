import React from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";
import { useGetUsersMediaQuery } from "generated/graphql";
import { Tabs, Tab } from "react-bootstrap";

const Media = () => {
  const { data, loading } = useGetUsersMediaQuery();
  if (loading) return <span></span>;
  const MediaFiles = data?.GetUsersMedia;
  const Links = MediaFiles?.map((f) => f.image);

  let Images: string[] = [];
  Links?.filter((i) => {
    let img = i.includes("");
    let pdf = i.includes(".pdf");
    if (img !== pdf) {
      return Images.push(i);
    }
  });
  const Pdf = Links?.filter((i) => i.includes(".pdf"));

  return (
    <UserMedia>
      <Heading>Your Media</Heading>
      <Tabs
        className="d-flex justify-content-center mb-3"
        defaultActiveKey="images"
        id="uncontrolled-tab-example"
        variant="pills"
      >
        <Tab eventKey="images" title="Images">
          <div className="gallery">
            <SRLWrapper>
              {Images?.map((img, index) => (
                <img key={index} src={img} alt="User-Media" />
              ))}
            </SRLWrapper>
          </div>
        </Tab>
        <Tab eventKey="docs" title="Documents">
          <div className="gallery">
            {Pdf?.map((pdf, i) => (
              <a href={pdf} target="_blank" key={i}>{`Document ${
                i + 1
              }.pdf`}</a>
            ))}
          </div>
        </Tab>
      </Tabs>
    </UserMedia>
  );
};

const Heading = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`;

const UserMedia = styled.div`
  margin-top: 1.5rem;
  h1 {
    text-align: center;
  }
  .gallery {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    img {
      cursor: pointer;
      width: 50px;
      height: 50px;
    }
  }
  height: 26rem;
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

export default Media;
