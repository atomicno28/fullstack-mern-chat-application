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

const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header  */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0,25)",
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
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        {/* BODY  */}
        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
        <div className="scrollbar" style={{ overflowY: "auto" }}>
          <Stack
            p={3}
            spacing={value === 1 ? 1 : 3}
            sx={{ height: "100%", position: "relative" }}
          >
            {(() => {
              switch (value) {
                case 0:
                  //Images
                  return (
                    <Grid container spacing={2}>
                      {[0, 1, 2, 3, 4, 5, 6].map((el) => (
                        <Grid item xs={4}>
                          <img
                            src={faker.image.avatar()}
                            alt={faker.name.fullName()}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  );

                case 1:
                  //Links
                  return SHARED_LINKS.map((el) => <LinkMsg el={el} />);
                case 2:
                  //Docs
                  return SHARED_DOCS.map((el) => <DocMsg el={el} />);
                default:
                  break;
              }
            })()}
          </Stack>
        </div>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
