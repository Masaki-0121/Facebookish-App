import React from "react";
import {
  styled,
  Paper,
  Tab,
  Tabs,
  ImageList,
  ImageListItem,
  Avatar,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VideoCallIcon from "@mui/icons-material/VideoCall";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
];

const useStyles = styled({
  root: {
    flexGrow: 1,
  },
});

function StoryContents() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center ",
        flexDirection: "column",
        width: "90%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          className={classes.root}
          sx={{ width: { sm: "100%", xs: "100%" } }}
          centered
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            sx={{ display: "flex" }}
          >
            <Tab
              label="STORIES"
              icon={<MenuBookIcon />}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                px: { xs: "0px", sm: "80px" },
              }}
            />
            <Tab
              label="REEL"
              icon={<YouTubeIcon />}
              sx={{
                display: "flex",
                flexDirection: "row",
                px: { xs: "0px", sm: "80px" },
              }}
            />
            <Tab
              label="ROOM"
              icon={<VideoCallIcon />}
              sx={{
                display: "flex",
                flexDirection: "row",
                px: { xs: "0px", sm: "80px" },
              }}
            />
          </Tabs>
        </Paper>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: 3,
        }}
      >
        <Paper sx={{ width: { sm: "100%", xs: "100%" } }} centered>
          <ImageList
            sx={{ width: "100%", height: "200px" }}
            cols={6}
            rowHeight={164}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img} sx={{ position: "relative" }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 24, height: 24, position: "absolute" }}
                />
                <Typography
                  sx={{ color: "white", position: "absolute", bottom: "5%" }}
                >
                  Name
                </Typography>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ borderRadius: 6 }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Paper>
      </Box>
    </Container>
  );
}

export default StoryContents;
