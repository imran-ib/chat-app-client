import React, { useEffect } from "react";
import { Badge, Dropdown, Image } from "react-bootstrap";
import styled from "styled-components";
import { useConversationStore } from "components/ChatComponents/ChatState";
import {
  useConfirmFriendRequestMutation,
  useGetFriendRequestsLazyQuery,
  useFriendsQuery,
} from "generated/graphql";
import TooltipComponent from "components/utils/Tooltip/Tootip";
import { toast } from "react-toastify";

const FriendRequest = () => {
  const requests = useConversationStore((state) => state.request);
  const dispatch = useConversationStore((state) => state.dispatch);
  const [ConfirmFriendRequest, { loading }] = useConfirmFriendRequestMutation({
    onCompleted: () => {
      toast.success(`New Friend Added`);
    },
  });

  const [GetFriendRequests] = useGetFriendRequestsLazyQuery({
    onCompleted: (data) => {
      //@ts-ignore
      dispatch({
        type: "ADD_FRIEND_REQUEST_NOTIFICATION",
        payload: { Request: data.GetFriendRequests },
      });
    },
  });

  useEffect(() => {
    GetFriendRequests();
  }, [GetFriendRequests]);

  return (
    <div>
      {/* 
      //@ts-ignore */}
      {requests?.length ? (
        <>
          <DropDownStyle>
            <Dropdown drop="left">
              <Dropdown.Toggle id="dropdown-custom-components">
                <Badge pill variant="primary">
                  <Icon className="ri-user-2-line">
                    <Number> 1 </Number>{" "}
                  </Icon>
                </Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu className="MenuStyles">
                {/* 
                //@ts-ignore */}
                {requests?.map((req) => (
                  <Dropdown.Item key={req.id} eventKey="1">
                    <ListItem>
                      <Image
                        width="25px"
                        src={req.sender.avatar}
                        roundedCircle
                      />
                      <span className="username"> {req.sender.username}</span>

                      <div className="buttons">
                        <span
                          onClick={() =>
                            ConfirmFriendRequest({
                              variables: {
                                id: req.id,
                              },
                            })
                          }
                          className="confirm m-2 text-primary "
                        >
                          {loading ? "wait..." : "Accept"}
                        </span>
                        <span
                          onClick={() => alert("Are you sure")}
                          className="reject m-2 text-danger"
                        >
                          Reject
                        </span>
                      </div>
                    </ListItem>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </DropDownStyle>
        </>
      ) : (
        <TooltipComponent position="bottom" content="Friends Requests">
          <IconEmpty className="ri-user-2-line "></IconEmpty>
        </TooltipComponent>
      )}
    </div>
  );
};

const ListItem = styled.span`
  display: flex;
  align-items: center;
  & img {
    margin-right: 1rem;
  }
  .username {
    color: #c9c9c9;
    font-size: 2rem;
  }
  .confirm {
    color: #c9c9c9;
    font-size: 2rem;
    cursor: pointer;
  }
  .reject {
    color: #c9c9c9;
    font-size: 2rem;
    cursor: pointer;
  }
  .buttons {
    margin-left: auto;
  }
`;

export const DropDownStyle = styled.div`
  /* border: 10px solid red; */
  //disable button styles
  & button {
    background: transparent;
    border: none;
  }

  //disable background white on hover
  & a {
    &:hover {
      background: inherit;
      cursor: default;
    }
  }
  .MenuStyles {
    width: 300px;
    background-color: #292f3f;

    box-shadow: -15px 15px 15px rgba(55, 62, 78, 0.5);
  }
  /* remove bootstrap default dropdown caret icon  */
  .dropdown-toggle {
    & ::after {
      display: none;
    }
  }
`;

const Number = styled.span`
  font-size: 1.5rem;
`;

const Icon = styled.i`
  font-size: 1.5rem;
`;
const IconEmpty = styled(Icon)`
  font-size: 1.8rem;
`;
export default FriendRequest;
