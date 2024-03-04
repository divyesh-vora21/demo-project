import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, Modal, Typography } from "@mui/material";
import { ConfirmModal } from "./ConfirmModal";

export const Navbar = () => {
  const navigate = useNavigate();

  const navbarData = ["Home", "About", "Contact", "Logout"];
  const user = JSON.parse(localStorage.getItem("user"));

  const [open, setOpen] = useState(false);

  
  const navigateHandler = (item) => {
    switch (item) {
      case "Home":
        return navigate("/");
      case "About":
        return navigate("/about");
      case "Contact":
        return navigate("/contact");
      case "Logout":
        return setOpen(true);
      default:
        break;
    }
  };


  return (
    <>
      <div className="navbar">
        <div className="left_links">
          <div className="profile_pic">
            <AccountCircleIcon fontSize="large" />
          </div>
          <div>
            <div className="userData">Hello! {user?.name}</div>
            <div className="userData text-sm text-slate-400">{user?.email}</div>
          </div>
        </div>
        <div className="right_links">
          {navbarData?.map((item, ind) => {
            return (
              <div
                className="navbar_links"
                key={ind}
                onClick={() => navigateHandler(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <ConfirmModal open={open} setOpen={setOpen}/>
      </div>
    </>
  );
};
