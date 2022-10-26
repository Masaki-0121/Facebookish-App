import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";

function App() {
  return (
    <Box>
      {/* Navbar */}
      <Stack>
        <Sidebar direction="row" spacing={2} justifyContent="space-between" />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
