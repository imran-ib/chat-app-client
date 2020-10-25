import React, { useState } from "react";
import { AccountForm } from "components/styles/SharedStyles";
import styled from "styled-components";
import { ApolloConsumer } from "@apollo/react-hooks";
import debounce from "lodash.debounce";
import Downshift from "downshift";
import {
  GetUsersDocument,
  User,
  useAddFriendMutation,
  FriendsDocument,
} from "generated/graphql";
import { ChatSpinner } from "components/utils/Spinners/ChatSidebarSpinners";
import { toast } from "react-toastify";

const AddFriendForm = () => {
  const [emailOrUsername, setEmailOrUsername] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addFriend, { loading: addFriendLoading }] = useAddFriendMutation({
    refetchQueries: [{ query: FriendsDocument }],
  });

  const onChangeHandler = debounce(async (e, client) => {
    setLoading(true);

    const res = await client.query({
      query: GetUsersDocument,
      variables: { emailOrUsername: e.target.value },
    });
    setEmailOrUsername(res.data.GetUsers);
    setLoading(false);
  }, 350);
  if (addFriendLoading) <ChatSpinner />;
  return (
    <Form>
      <Text>Email Or userName</Text>

      <Downshift
        id="lang-switcher"
        onChange={(item) => {
          addFriend({
            variables: {
              id: item.id,
            },
          }).then(() => toast.success("Success! Friend request is Sent"));
        }}
        itemToString={(item) => (item === null ? "" : item.title)}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          highlightedIndex,
          inputValue,
        }) => (
          <div>
            <div>
              <ApolloConsumer>
                {(client) => (
                  <input
                    {...getInputProps({
                      onChange: (e) => {
                        e.persist();
                        onChangeHandler(e, client);
                      },
                      type: "text",
                      name: "emailOrUsername",
                      placeholder: "Email or username",
                    })}
                  />
                )}
              </ApolloConsumer>
            </div>
            <div>
              {isOpen && (
                <ListItems className="list-group">
                  {emailOrUsername?.length
                    ? emailOrUsername?.map((item: User, i) => (
                        <li
                          {...getItemProps({ item })}
                          style={{ padding: "10px" }}
                          className={`list-group-item ${
                            highlightedIndex === i ? "selected" : "non-selected"
                          }`}
                          key={item.id}
                        >
                          <div className="content">
                            <img
                              width="40"
                              style={{ marginRight: "20px" }}
                              //@ts-ignore
                              src={item.avatar}
                              alt={item.username}
                            />
                            {item.username}
                          </div>
                        </li>
                      ))
                    : null}
                  {loading && <li>Searching Please Wait....</li>}
                  {emailOrUsername.length === 0 && !loading && (
                    <li>No Result Found {inputValue}</li>
                  )}
                </ListItems>
              )}
            </div>
          </div>
        )}
      </Downshift>
    </Form>
  );
};

const ListItems = styled.ul`
  li {
    background: #292f3f;
    color: #c9c9c9;
  }
  .selected {
    background: #c9c9c9;
    color: #292f3f;
  }
`;

const Text = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Form = styled(AccountForm)`
  & input {
    width: 100%;
  }
`;

export default AddFriendForm;
