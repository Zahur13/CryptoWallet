import "./leftsection.css";
import React from "react";
// import Logo from "../../assets/logo.png";
// import Dashboard from "../../assets/element-3.png";
// import Anlytics from "../../assets/bar-line-chart.png";
// import Wallet from "../../assets/wallet-02.png";
// import Account from "../../assets/user-03.png";
// import Setting from "../../assets/setting-01.png";
const menuitems = [
  {
    name: "Dashboard",
    img: "https://cdn-icons-png.flaticon.com/128/1828/1828791.png",
  },
  {
    name: "Anlytics",
    img: "https://cdn-icons-png.flaticon.com/128/1548/1548914.png",
  },
  {
    name: "My Wallet",
    img: "https://cdn-icons-png.flaticon.com/128/3757/3757939.png",
  },
  {
    name: "Accounts",
    img: "https://cdn-icons-png.flaticon.com/128/3033/3033143.png",
  },
  {
    name: "Settings",
    img: "https://cdn-icons-png.flaticon.com/128/9637/9637797.png",
  },
  // https://ibb.co/bgQXksb1 //hand emoji
];
const othermenuitems = [
  {
    name: "Security",
    img: "https://cdn-icons-png.flaticon.com/128/95/95454.png",
  },
  {
    name: "Help Center",
    img: "https://cdn-icons-png.flaticon.com/128/174/174188.png",
  },
];
const LeftSection = () => {
  return (
    <>
      <div className="leftbar">
        <div className="logo">
          <img
            src={"https://cdn-icons-png.flaticon.com/128/5001/5001564.png"}
            alt=""
          />
          <h2>CryptoWallet</h2>
        </div>
        <section className="menu">
          {menuitems.map((item) => {
            return (
              <div className="menuItem">
                <img src={item.img} alt="menuitem" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </section>
        <div className="divide"></div>
        <section>
          {othermenuitems.map((otheritem) => {
            return (
              <div className="menuItem">
                <img src={otheritem.img} alt="menuitem" />
                <span>{otheritem.name}</span>
              </div>
            );
          })}
        </section>

        <section className="loggedIn">
          <div className="userlogo">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
              alt="user"
            />
          </div>
          <div className="usertitle">
            <span>Ali Riaz</span>
            <p>Web Developer</p>
          </div>
          <div className="downarrow">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png"
              alt="arrow"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default LeftSection;
