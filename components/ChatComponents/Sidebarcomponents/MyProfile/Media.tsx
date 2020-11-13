import React from "react";

import { useGetUsersMediaQuery } from "generated/graphql";
import UserMediaGrid from "components/utils/UserMediaGrid/UserMediaGrid";

const Media = () => {
  const { data, loading } = useGetUsersMediaQuery();
  if (loading) return <span></span>;
  const MediaFiles = data?.GetUsersMedia;
  const Links = MediaFiles?.map((f) => f.image);

  return <UserMediaGrid Links={Links} />;
};

export default Media;
