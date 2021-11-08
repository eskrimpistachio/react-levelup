import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Coastline from "./coastline.jpg";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdown = new Date("January 1, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdown - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  const d = new Date();
  const day = d.getDay();
  const dayNum = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  let todayday;
  let todaymonth;

  switch (day) {
    case 0:
      todayday = "Sunday";
      break;
    case 1:
      todayday = "Monday";
      break;
    case 2:
      todayday = "Tuesday";
      break;
    case 3:
      todayday = "Wednesday";
      break;
    case 4:
      todayday = "Thursday";
      break;
    case 5:
      todayday = "Friday";
    case 6:
      todayday = "Saturday";
  }
  switch (month) {
    case 1:
      todaymonth = "January";
      break;
    case 2:
      todaymonth = "February";
      break;
    case 3:
      todaymonth = "March";
      break;
    case 4:
      todaymonth = "April";
      break;
    case 5:
      todaymonth = "May";
      break;
    case 6:
      todaymonth = "June";
      break;
    case 7:
      todaymonth = "July";
      break;
    case 8:
      todaymonth = "August";
      break;
    case 9:
      todaymonth = "September";
      break;
    case 10:
      todaymonth = "October";
      break;
    case 11:
      todaymonth = "November";
      break;
    case 12:
      todaymonth = "December";
      break;
  }

  return (
    <div className="sidebarmiddle">
      <div className="greeting">
        <div className="loginName">
          <a>Hello, Alfatih Rizqi Alfian</a>
        </div>
        <div className="todayDate">
          <a>
            Today is {todayday}, {dayNum} {todaymonth} {year}
          </a>
        </div>
      </div>
      <div className="searchSubmit">
        <Icon icon="ant-design:search-outlined" className="searchicon" />
        <Link to="/main-submit">
          Submit your Trash{" "}
          <Icon icon="bi:download" className="downloadicon2" />
        </Link>
      </div>
      <div className="submitbutton"></div>
      <div className="searchbutton"></div>
      <div className="coastlineImage">
        <a>Lets make our coastline cleaner.</a>
        <img
          src={Coastline}
          alt="missing coastline img"
          width="932px"
          height="281px"
          className="coastline"
        ></img>
      </div>
      <div className="displayMenu">
        <a className="timelimitText">Time Limits</a>
        <div className="timeLimit">
          <a className="timereward">Waktu Sebelum Pembagian Reward</a>
          <hr className="timerewardborder"></hr>
          <div className="countdown">
            <a className="dayscountdown">{timerDays}</a>
            <a className="separator">:</a>
            <a className="daystext">Days</a>
            <a className="hourscountdown">{timerHours}</a>
            <a className="separator2">:</a>
            <a className="hourstext">Hours</a>
            <a className="minutescountdown">{timerMinutes}</a>
            <a className="minutestext">Minutes</a>
            <a className="separator3">:</a>
            <a className="secondcountdown">{timerSeconds}</a>
            <a className="secondtext">Seconds</a>
          </div>

          <div className="progresscontainer">
            <a className="progresschecktext">CHECK PROGRESS</a>
            <hr className="progresscheckborder"></hr>
            <a className="segerakirim">
              Ayo Segera Kirim Sampah Daur Ulang mu sebanyak-banyaknya !
            </a>
          </div>
        </div>
        <a className="topleaderboardtext">Top Leaderboards</a>
        <div className="topleaderboard">
          <div className="rangkingplace">
            <a>1st</a>
            <a>2nd</a>
            <a>3rd</a>
          </div>
          <div className="rangkingname">
            <a>Alfatih Rizqi Alfian</a>
            <a>Muhammad Raihan Parama</a>
            <a>Ali Rafli</a>
          </div>
          <div className="pointperson">
            <a>85</a>
            <a>80</a>
            <a>78</a>
          </div>
        </div>
        <a className="currencytext">Pearls</a>
        <div className="currency">
          <a>85</a>
        </div>
        <a className="rangkingtext">Rangking</a>
        <div className="rangking">
          <a>#1</a>
        </div>
      </div>
    </div>
  );
}

export default Main;
