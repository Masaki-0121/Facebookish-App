import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";
import StoryContents from "./StoryContents";

function Feed() {
  return (
    <Box flex={3} p={{ xs: 0, md: 2 }}>
      <StoryContents />
      <Post />
    </Box>
  );
}

export default Feed;
