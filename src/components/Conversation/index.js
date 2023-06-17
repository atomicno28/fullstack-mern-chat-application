import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

import "../../pages/dashboard/global.css";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      <Header />
      <div className="scrollbar" style={{ overflowY: "auto" }}>
        <Box width={"100%"} sx={{ flexGrow: 1 }}>
          <Message />
        </Box>
      </div>
      <Footer />
    </Stack>
  );
};

export default Conversation;
