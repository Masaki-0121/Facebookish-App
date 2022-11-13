import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Mail, Notifications } from "@mui/icons-material";
import SlideBar from "./SlideBar";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

// up means if it is bigger than sm it is gonna trigger
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar sx={{ bgcolor: "background.default" }} position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
            fontWeight: "bold",
            fontSize: "1.8rem",
            color: "#1877F2",
          }}
        >
          facenotes
        </Typography>

        <Box sx={{ color: "#1877f2", display: { xs: "block", sm: "none" } }}>
          <SlideBar />
        </Box>

        <Switch
          onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
          sx={{ mr: { xs: "0px", sm: "200px" } }}
        />

        <Search
          sx={{
            bgcolor: "#e6e8ea",
            height: "30px",
            mr: { xs: "30px", sm: "300px" },
          }}
        >
          <InputBase
            placeholder="Search Facenotes user..."
            startAdornment={
              <SearchIcon sx={{ color: "gray", position: "start" }} />
            }
          />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail sx={{ color: "#1877F2" }} />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications sx={{ color: "#1877F2" }} />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={require("../assets/friend8.jpg")}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={require("../assets/friend8.jpg")}
          />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
