import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const callouts = [
  {
    id: 1,
    title: "Never give up to be a Web Developer!",
    time: new Date().toLocaleString(),
    imageAvatar: require("../assets/friend8.jpg"),
    feedImage: require("../assets/post4.jpg"),
    description:
      "Hi I'm Masaki! Thank you for looking at my portfolio! or you may not even look at this post haha.It's not an easy path to be a web developer on your own. I've been studying coding all by myself, without going any school. But I've never given up. I've been believing in me, and kept studying. I will never stop until I become the best web developer. Thank you for paying attention",
  },
  {
    id: 2,
    title: "Breakfast at Le Negresco",
    time: new Date().toLocaleString(),
    imageAvatar: require("../assets/friend3.jpg"),
    feedImage: require("../assets/foodphoto1.jpg"),
    description:
      "I had wonderful morning at Hotel Le Negresco. They have the best service I've ever had and the pancake was awesome! ",
  },
  {
    id: 3,
    title: "Breakfast at Le Negresco",
    time: new Date().toLocaleString(),
    imageAvatar: require("../assets/friend2.jpg"),
    feedImage: require("../assets/post5.jpg"),
    description:
      "I had wonderful morning at Hotel Le Negresco. They have the best service I've ever had and the pancake was awesome! ",
  },
];

function Post() {
  return (
    <div>
      {callouts.map((callout) => (
        <Card key={callout.key} sx={{ margin: 5 }}>
          <CardHeader
            avatar={<Avatar aria-label="recipe" src={callout.imageAvatar} />}
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={callout.title}
            subheader={callout.time}
          />
          <CardMedia
            component="img"
            height="20%"
            image={callout.feedImage}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {callout.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Post;
