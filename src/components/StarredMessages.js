import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { updateSidebarType } from "../redux/slices/app";
import { CaretLeft } from "phosphor-react";
import { useDispatch } from "react-redux";
import "../pages/dashboard/global.css";
import { faker } from "@faker-js/faker";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { useState } from "react";
import Message from "./Conversation/Message";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const StarredMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: "320px", height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header  */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0,25",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction="row"
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(updateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Starred Messages</Typography>
          </Stack>
        </Box>
        {/* BODY  */}

        <div className="scrollbar" style={{ overflowY: "auto" }}>
          <Stack
            p={3}
            spacing={3}
            sx={{ height: "100%", position: "relative" }}
          >
            <Message />
          </Stack>
        </div>
      </Stack>
    </Box>
  );
};

export default StarredMessages;
