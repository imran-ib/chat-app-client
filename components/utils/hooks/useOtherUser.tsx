import { useOtherUserQuery } from "generated/graphql";

const useOtherUser = ({ userId }: any) => {
  const { loading, data, error, called } = useOtherUserQuery({
    variables: {
      userId: userId,
    },
    fetchPolicy: "no-cache",
    pollInterval: 5000,
  });

  if (data && !loading && !error && called) {
    return data.OtherUser;
  } else {
    return null;
  }
};

export default useOtherUser;
