import React, { useState } from "react";
import { Layout } from "./Layout";
import { TextField ,NumberInput} from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { register } from "../apis/user/Users.api";

export const Register = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({});

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const submitHandler = async () => {
    const res = await register("/user", inputData).then((result) => {
        console.log("result====>", result);
    });
    console.log(res);
  };
  return (
    <div className="login_wrapper">
      <div className="input_fields w-full max-w-96">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          onChange={inputChangeHandler}
        />
        <TextField
          id="outlined-basic"
          label="userName"
          variant="outlined"
          name="userName"
          onChange={inputChangeHandler}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={inputChangeHandler}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          onChange={inputChangeHandler}
        />
        <TextField
        type="number"
          id="outlined-basic"
          label="Contact"
          variant="outlined"
          name="contact"
          onChange={inputChangeHandler}
        />

        <div className="flex flex-col items-center">
          <div className="break-normal">Do you have already an accout?</div>
          <div className="break-normal">
            click{" "}
            <a
              className="underline text-blue-600 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              here
            </a>{" "}
            to login
          </div>
          <div className="mt-3">
            <Button
              variant="outlined"
              style={{
                backgroundColor: "#42b72a",
                color: "white",
              }}
              onClick={submitHandler}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
