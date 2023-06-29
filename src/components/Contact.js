import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
  Slide,
} from "@mui/material";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { ToggleSidebar, updateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import "../pages/dashboard/global.css";
import AntSwitch from "./AntSwitch";
import { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Block this contact</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want ot block this contact ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Yes</Button>
        <Button onClick={handleClose}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

const DeleteDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Delete the chat</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want ot delete this chat ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Yes</Button>
        <Button onClick={handleClose}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleCloseBlock = () => {
    setOpenBlock(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

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
            justifyContent={"space-between"}
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>
        {/* BODY  */}
        <div className="scrollbar" style={{ overflowY: "auto" }}>
          <Stack
            p={3}
            spacing={3}
            sx={{ height: "100%", position: "relative" }}
          >
            <Stack spacing={2} direction="row" alignItems={"center"}>
              <Avatar
                src={faker.image.avatar()}
                alt={faker.name.firstName()}
                sx={{ height: 64, width: 64 }}
              />
              <Stack spacing={0.5}>
                <Typography variant="article" fontWeight={600}>
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  {"+91 722 7274 1786"}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent="space-evenly"
            >
              <Stack spacing={1} alignItems="center">
                <IconButton>
                  <Phone />
                </IconButton>
                <Typography variant="overline">Voice</Typography>
              </Stack>
              <Stack spacing={1} alignItems="center">
                <IconButton>
                  <VideoCamera />
                </IconButton>
                <Typography variant="overline">Video</Typography>
              </Stack>
            </Stack>
            <Divider />
            <Stack spacing={0.5}>
              <Typography variant="article">About </Typography>
              <Typography variant="body2">Sky is the limit</Typography>
            </Stack>
            <Divider />
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle2">Media, Links & Docs</Typography>
              <Button
                onClick={() => {
                  dispatch(updateSidebarType("SHARED"));
                }}
                endIcon={<CaretRight />}
              >
                401
              </Button>
            </Stack>
            <Stack direction="row" spacing={2} alignItems={"center"}>
              {[1, 2, 3].map((el) => (
                <Box>
                  <img src={faker.image.food()} alt={faker.name.fullName()} />
                </Box>
              ))}
            </Stack>
            <Divider />
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Star size={21} />
                <Typography variant="subtitle2"> Starred Messages</Typography>
              </Stack>
              <IconButton
                onClick={() => {
                  dispatch(updateSidebarType("STARRED"));
                }}
              >
                <CaretRight />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Bell size={21} />
                <Typography variant="subtitle2"> Mute Notifications</Typography>
              </Stack>
              <AntSwitch />
            </Stack>
            <Divider />
            <Typography> 1 group in common</Typography>
            <Stack direction={"row"} spacing={2} alignContent={"center"}>
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
              <Stack spacing={0.5}>
                <Typography variant="subtitle2">Placement Drive</Typography>
                <Typography variant="caption">
                  Owl,Parrot, Rabbit, You
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems={"center"} spacing={2}>
              <Button
                onClick={() => {
                  setOpenBlock(true);
                }}
                startIcon={<Prohibit />}
                fullWidth
                variant="outlined"
              >
                Block
              </Button>
              <Button
                onClick={() => {
                  setOpenDelete(true);
                }}
                startIcon={<Trash />}
                fullWidth
                variant="outlined"
              >
                Delete
              </Button>
            </Stack>
          </Stack>
        </div>
      </Stack>
      {openBlock && (
        <BlockDialog open={openBlock} handleClose={handleCloseBlock} />
      )}
      {openDelete && (
        <DeleteDialog open={openDelete} handleClose={handleCloseDelete} />
      )}
    </Box>
  );
};

export default Contact;
