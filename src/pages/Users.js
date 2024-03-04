import React, { useEffect } from "react";
import { Layout } from "./Layout";
import { ButtonBase, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { getUser } from "../apis/user/Users.api";

export const Users = () => {
//   useEffect(() => {
//    const getUserHandler = async () => {
//       getUser("/user").then((res) => {
//         console.log(res);
//       });
//     };
//     getUserHandler();
//   }, []);

  return (
    <Layout>
      <div className="container p-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
