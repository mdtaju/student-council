import { Close } from "@mui/icons-material";
import { Alert, IconButton, Snackbar } from "@mui/material";
import React from "react";

const SnackMessage = ({ open, setOpen, message }) => {
  const handleClose = () => {
    setOpen(false);
  };

  let action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}>
        <Close fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      onClose={handleClose}
      // message={message?.message}
      // key={vertical + horizontal}
      action={action}
      // className="top-[200px] bg-red-400"
    >
      <Alert
        onClose={handleClose}
        severity={message?.error ? "error" : "success"}
        sx={{ width: "100%" }}>
        {message?.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackMessage;
