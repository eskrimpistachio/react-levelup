import React from "react";
import { Icon } from "@iconify/react";
import "./Navibar.css";
import { Link } from "react-router-dom";

const Navibar = () => {
  return (
    <div className="sidebarleft">
      <div className="companylogo">
        <Icon icon="akar-icons:send" className="arrow" />
        <Icon icon="ci:trash-empty" className="trash" />
        <a>
          Trash <span style={{ color: "#50CB93" }}>Submitter</span>
        </a>
      </div>
      <div className="user">
        <Icon
          icon="healthicons:ui-user-profile-outline"
          className="userprofile"
        />
        <a className="username">Alfatih Rizqi Alfian</a>
      </div>
      <div className="navmenu">
        <Link to="/" className="dashboard">
          <Icon icon="ant-design:home-filled" className="home" />
          <a>Dashboard</a>
        </Link>
        <Link to="/main-submit" className="submityourtrash">
          <Icon icon="bi:download" className="downloadicon" />
          <a>Submit your Trash</a>
        </Link>
        <Link to="/main-leaderboard" className="leaderboard">
          <Icon icon="akar-icons:trophy" className="trophyicon" />
          <a>Leaderboards</a>
        </Link>
        <Link to="/history" className="historymenu">
          <Icon icon="akar-icons:clock" className="historysymbol" />
          <a>History</a>
        </Link>
      </div>
    </div>
  );
};

export default Navibar;
