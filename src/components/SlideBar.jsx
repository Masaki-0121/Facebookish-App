import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DehazeIcon from "@mui/icons-material/Dehaze";

import {
  AccountBox,
  Article,
  Group,
  Home,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

export default function SlideBar({ mode, setMode }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding sx={{ py: 1 }}>
          <ListItemButton>
            <ListItemIcon>
              <Home sx={{ color: "#1877f2" }} />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ py: 1 }}>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Article sx={{ color: "#1877f2" }} />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ py: 1 }}>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Group sx={{ color: "#1877f2" }} />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ py: 1 }}>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Storefront sx={{ color: "#1877f2" }} />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ py: 1 }}>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Person sx={{ color: "#1877f2" }} />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ py: 1 }}>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Settings sx={{ color: "#1877f2" }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ py: 1 }}>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <AccountBox sx={{ color: "#1877f2" }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <DehazeIcon onClick={toggleDrawer(anchor, true)}>{anchor}</DehazeIcon>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
