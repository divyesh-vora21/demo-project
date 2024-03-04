import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/slices/User.slice";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState({});

  const changeHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    const data = await dispatch(getUserData(inputData));
    const auth = data.payload.data.data.accessToken;
    if (auth) {
      navigate("/");
      localStorage.setItem("user", JSON.stringify(data.payload.data.data));
    }
  };

  return (
    <div className="login_wrapper">
      <div className="input_fields w-full max-w-96">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={changeHandler}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          onChange={changeHandler}
        />
        <div className="flex justify-around  mt-2">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#0866ff",
              color: "white",
            }}
            onClick={loginHandler}
          >
            Login
          </Button>
        </div>
        <div className="flex flex-col items-center">
          <div className="break-normal">
            Do you want to create your account?
          </div>
          <div className="break-normal">click below to register</div>
          <div className="mt-3">
            <Button
              variant="outlined"
              onClick={() => navigate("/register")}
              style={{
                backgroundColor: "#42b72a",
                color: "white",
              }}
            >
              Create new account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
