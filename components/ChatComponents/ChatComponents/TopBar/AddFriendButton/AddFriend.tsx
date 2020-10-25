import React from "react";
import { useModalStore } from "components/ChatComponents/ChatState";
import AddFriendForm from "./AddFriendForm";
import ModalComponent from "components/utils/Models/Modal";
import TooltipComponent from "components/utils/Tooltip/Tootip";

const AddFriend = () => {
  const show = useModalStore((state) => state.show);
  const handleClose = useModalStore((state) => state.handleClose);
  const handleShow = useModalStore((state) => state.handleShow);
  const onHide = useModalStore((state) => state.onHide);
  return (
    <>
      <ModalComponent show={show} onHide={onHide}>
        <AddFriendForm />
      </ModalComponent>
      <div className="user-chat-nav">
        <div data-toggle="tooltip" data-placement="bottom" title="Add Contact">
          {/* <!-- Button trigger modal --> */}
          <button
            // @ts-ignore
            onClick={() => handleShow()}
            type="button"
            className="btn btn-link text-decoration-none text-muted font-size-18 py-0"
            data-toggle="modal"
            data-target="#addContact-exampleModal"
          >
            <TooltipComponent position="bottom" content="Add Friend">
              <i className="ri-user-add-line"></i>
            </TooltipComponent>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddFriend;
