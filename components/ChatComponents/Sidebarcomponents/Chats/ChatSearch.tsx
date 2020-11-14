import React from "react";
import { Modal } from "react-bootstrap";
import { SearchStyles } from "../Contacts/Contacts";
import styled from "styled-components";
import { useSearchTermResultsLazyQuery } from "generated/graphql";
import { useConversationStore } from "components/ChatComponents/ChatState";
import Moment from "react-moment";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const ChatSearch = () => {
  const [copiedText, setCopiedText] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useConversationStore((state) => state.dispatch);
  const [SearchTermResults, { data }] = useSearchTermResultsLazyQuery({
    onCompleted: () => {
      handleShow();
      setSearchTerm("");
      useConversationStore.destroy();
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.preventDefault();

    SearchTermResults({
      variables: {
        term: searchTerm,
      },
    });
  };
  const Message = data?.SearchTermResults;

  return (
    <div>
      <ModalStyles show={show} onHide={handleClose}>
        {!Message?.length && <Modal.Header>No Result Found</Modal.Header>}
        {Message?.map((m) => (
          <div key={m.id}>
            <Modal.Header>
              <Modal.Title>
                <div className="d-flex  justify-content-between">
                  <a>{m.content}</a>
                  <CopyAnchorStyles
                    // @ts-ignore
                    text={m.content}
                    onCopy={() => {
                      toast.success(`Success! Copied To Clipboard`);
                      handleClose();
                    }}
                  >
                    <a
                      onClick={() => {
                        // @ts-ignore
                        setCopiedText(m.content);
                      }}
                    >
                      Copy
                      <i className="ri-file-copy-line float-right text-muted"></i>
                    </a>
                  </CopyAnchorStyles>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Message from <strong>{m.from.username}</strong> to{" "}
              <strong>{m.to.username}</strong>
            </Modal.Body>
            <Modal.Footer>
              <Moment date={m.createdAt} fromNow />
              <strong className="mr-5">{m.__typename}</strong>
            </Modal.Footer>
          </div>
        ))}
      </ModalStyles>
      <SearchStyles onSubmit={(e) => handleSubmit(e)} className="mt-2">
        <div className="input-group mb-3 position-relative  input-group-lg rounded-lg">
          <div className="input-group-prepend">
            <button
              className="btn btn-link text-muted pr-1 position-absolute text-decoration-none"
              type="button"
            >
              <i
                onClick={(e) => handleSubmit(e)}
                className="ri-search-line search-icon font-size-18"
              ></i>
            </button>
          </div>

          <input
            type="text"
            className="form-control"
            placeholder="Search messages or users"
            value={searchTerm}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </SearchStyles>
    </div>
  );
};

const ModalStyles = styled(Modal)`
  //over ride the bootstrap modal content class name for custom styling
  .modal-content {
    background: #292f3f;
    color: #c9c9c9;
  }
`;

const CopyAnchorStyles = styled(CopyToClipboard)`
  margin-left: 35rem;

  &:hover {
    background-color: #ffdc00;
    color: black;
  }
`;
export default ChatSearch;
