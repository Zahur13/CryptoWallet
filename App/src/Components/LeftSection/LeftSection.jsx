import "./leftsection.css";
import React, { useState, useEffect } from "react";
import Modal from "../Model/Sender";
import Status from "../Model2/Status";
import { useAuth } from "../context/AuthContext";

const menuitems = [
  [
    {
      name: "Dashboard",
      img: "https://cdn-icons-png.flaticon.com/128/1828/1828791.png",
    },
    {
      name: "Anlytics",
      img: "https://cdn-icons-png.flaticon.com/128/1548/1548914.png",
    },
    {
      name: "Transfer",
      img: "https://cdn-icons-png.flaticon.com/128/1790/1790169.png",
    },
    {
      name: "My Wallet",
      img: "https://cdn-icons-png.flaticon.com/128/3757/3757939.png",
    },
    {
      name: "Profile",
      img: "https://cdn-icons-png.flaticon.com/128/3033/3033143.png",
    },
    {
      name: "Settings",
      img: "https://cdn-icons-png.flaticon.com/128/9637/9637797.png",
    },
  ],
  [
    {
      name: "Security",
      img: "https://cdn-icons-png.flaticon.com/128/95/95454.png",
    },
    {
      name: "Help Center",
      img: "https://cdn-icons-png.flaticon.com/128/174/174188.png",
    },
  ],
  // https://ibb.co/bgQXksb1 //hand emoji
];

const LeftSection = () => {
  const { user, logOut } = useAuth();
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [screenIndex, setScreenIndex] = useState(0);

  const [transactionDetails, setTransactionDetails] = useState({});

  useEffect(() => {
    setScreenIndex(0);
  }, [activeTab]);

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
          {menuitems[0].map((item) => {
            return (
              <div
                className={`menuItem ${item.name === activeTab && "active"}`}
                onClick={() => {
                  setActiveTab(item.name);
                }}
              >
                <img src={item.img} alt="menuitem" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </section>
        <div className="divide"></div>
        <section>
          {menuitems[1].map((item) => {
            return (
              <div
                className={`menuItem ${item.name === activeTab && "active"}`}
                onClick={() => {
                  setActiveTab(item.name);
                }}
              >
                <img src={item.img} alt="menuitem" />
                <span>{item.name}</span>
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
            <span>{user?.email?.split("@")[0]}</span>
            <p>Web Developer</p>
          </div>
          <div className="downarrow1" onClick={logOut}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/11873/11873991.png"
              alt="arrow"
            />
          </div>
        </section>
      </div>
      {activeTab === "Transfer" && screenIndex === 0 && (
        <Modal
          setScreenIndex={setScreenIndex}
          setTransactionDetails={setTransactionDetails}
        />
      )}
      {activeTab === "Transfer" && screenIndex === 1 && (
        <Status
          setActiveTab={setActiveTab}
          transactionDetails={transactionDetails}
        />
      )}
    </>
  );
};

export default LeftSection;
