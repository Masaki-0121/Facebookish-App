import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

// passing props from App theme mode
function Sidebar({ mode, setMode }) {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding sx={{ py: 1 }}>
            <ListItemButton>
              <ListItemIcon>
                <Home sx={{ color: "#1877F2" }} />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }}>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Article sx={{ color: "#1877F2" }} />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }}>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group sx={{ color: "#1877F2" }} />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }}>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront sx={{ color: "#1877F2" }} />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }}>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Person sx={{ color: "#1877F2" }} />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }}>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings sx={{ color: "#1877F2" }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }}>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox sx={{ color: "#1877F2" }} />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ py: 1 }}>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight sx={{ color: "#1877F2" }} />
              </ListItemIcon>
              <Switch
                // if it's light it's gonna be dark, if not it will be light
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
