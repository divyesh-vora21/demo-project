import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/books.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


export const Sidebar = () => {
  const sidebarData = ["Books","users"];
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
        <div className="logo">
          <img src={logo} />
        </div>
        {sidebarData.map((item, ind) => {
          return (
            <div
              className="options"
              key={ind}
              onClick={() => navigate(`${`/${item}`}`)}
            >
              {item}
            </div>
          );
        })}
      </aside>
  )
}
