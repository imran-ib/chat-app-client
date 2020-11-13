import React from "react";
import { useGetMediaBetweenUsersQuery } from "generated/graphql";
import UserMediaGrid from "components/utils/UserMediaGrid/UserMediaGrid";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { useConversationStore } from "components/ChatComponents/ChatState";

const ShowMedia: React.FC<any> = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <MediaModal show={modalShow} onHide={() => setModalShow(false)} />
      <a
        onClick={() => setModalShow(true)}
        className="dropdown-item d-block  user-profile-show"
      >
        Show Media
      </a>
    </>
  );
};

const MediaModal = (props: any) => {
  let user: any = useConversationStore((state) => state.user);
  const { data } = useGetMediaBetweenUsersQuery({
    variables: {
      OtherUserId: user.id,
    },
  });

  const MediaFiles = data?.GetMediaBetweenUsers;
  const Links = MediaFiles?.map((f) => f.image);
  return (
    <ModalStyles
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <UserMediaGrid Links={Links} />
    </ModalStyles>
  );
};

const ModalStyles = styled(Modal)`
  //over ride the bootstrap modal content class name for custom styling
  .modal-content {
    background: #292f3f;
    color: #c9c9c9;
  }
`;

export default ShowMedia;
