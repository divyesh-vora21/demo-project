import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const ConfirmModal = ({open, setOpen}) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/login");
    setOpen(false);
    localStorage.removeItem("user");
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid rgb(172, 172, 172)",
    boxShadow: 24,
    p: 4,
    borderRadius: "0.5rem",
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="text-center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Do you want to logout?
          </Typography>
          <div className="flex justify-around mt-5 ">
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Cancle
            </Button>
            <Button variant="contained" onClick={logoutHandler}>
              Yes
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
