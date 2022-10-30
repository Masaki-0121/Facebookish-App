import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Post from "./Post";
import StoryTest from "./StoryTest";

function Feed() {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <StoryTest />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
