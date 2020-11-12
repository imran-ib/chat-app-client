import React from "react";
import Moment from "react-moment";
import moment from "moment";
import { useOtherUserQuery } from "generated/graphql";
import { toast } from "react-toastify";

const LastSeenComponent = ({ user: USER }: any) => {
  //Fetch Other User every 5 seconds to update users online status
  const { loading, data, error } = useOtherUserQuery({
    variables: {
      userId: USER.id,
    },
    fetchPolicy: "no-cache",
    pollInterval: 5000,
  });

  const user = data?.OtherUser;
  const LastSeen = moment(user?.lastSeen).unix() * 100;
  const currentTime = moment(new Date().toISOString()).unix() * 100;

  const Difference = currentTime - LastSeen;
  let Online;
  let active = false;
  if (Difference <= 5000) {
    Online = "online";
    active = true;
  } else {
    active = false;
    Online = <Moment date={user?.lastSeen} fromNow />;
  }

  if (loading) return <span>in progress...</span>;
  if (error) {
    toast.error(`Something went wrong ${error.message}`);
  }
  return (
    <p className="text-muted text-truncate mb-1">
      {active ? (
        <i className="ri-record-circle-fill font-size-10 text-success mr-1 d-inline-block"></i>
      ) : (
        <>
          <i className="ri-record-circle-fill font-size-10 text-danger mr-1 d-inline-block"></i>
          <span className="user-status"></span>
        </>
      )}
      {Online}
    </p>
  );
};

export default LastSeenComponent;
