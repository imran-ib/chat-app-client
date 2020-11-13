import React from "react";
import { useGetMediaBetweenUsersQuery } from "generated/graphql";
import UserMediaGrid from "components/utils/UserMediaGrid/UserMediaGrid";

interface Props {
  id: number;
}
const Media: React.FC<Props> = ({ id }) => {
  const { data, loading } = useGetMediaBetweenUsersQuery({
    variables: {
      OtherUserId: id,
    },
  });
  if (loading) return <span></span>;
  const MediaFiles = data?.GetMediaBetweenUsers;
  const Links = MediaFiles?.map((f) => f.image);

  return <UserMediaGrid Links={Links} />;
};

export default Media;
