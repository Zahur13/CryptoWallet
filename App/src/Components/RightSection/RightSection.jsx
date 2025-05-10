import React, { useState } from "react";
import "./rightsection.css";
const RightSection = () => {
  const [balance, setBalance] = useState(
    localStorage.getItem("balance") || 7000000
  );

  return (
    <>
      <div className="rightsection">
        <div className="card">
          <h2>My Card</h2>
          <section>
            <p>Card Balance</p>
            <span>${balance}</span>
          </section>
          <div className="card2">
            <div className="cardtop">
              <div className="carditem">
                <p>Current Balance</p>
                <span>${balance}</span>
              </div>
              <img
                src="https://img.icons8.com/?size=96&id=62765&format=png"
                alt="mastercard"
              />
            </div>
            <div className="cardbottom">
              <h5>5282 3456 7890 1289</h5>
              <h4>09/25</h4>
            </div>
          </div>
          <div className="btns">
            <button>Manage Cards</button>
            <button>Transfer</button>
          </div>
        </div>
        <div className="card3">
          <div className="top">
            <span>Activity</span>
            <input type="Month" />
          </div>
          <div className="activity">
            <span>75%</span>
            <div>
              <input type="range" min="0" max="100" value="55" />
              <label for="volume">Daily payment</label>
            </div>
            <div>
              <input type="range" min="0" max="100" value="20" />
              <label for="cowbell">Hobby</label>
            </div>
          </div>
          <button className="activitybutton">View all activity</button>
        </div>
      </div>
    </>
  );
};

export default RightSection;
