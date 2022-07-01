import { Box, useColorModeValue } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import WorkPage from "./pages/WorkPage";
import HomePage from "./pages/HomePage";

function App() {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const isDark = colorMode === "dark";

  return (
    <Box as="main">
      <NavBar />
      <Routes>
        <Route path="/my-porfolio" element={<HomePage />} />
        <Route path="/works" element={<WorkPage />} />
      </Routes>
    </Box>
  );
}

export default App;
