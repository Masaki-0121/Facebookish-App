import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";
import StoryContents from "./StoryContents";

function Feed() {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <StoryContents />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
