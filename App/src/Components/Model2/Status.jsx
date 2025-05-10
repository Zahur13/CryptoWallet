import React from "react";
import "./status.css";

const Status = ({ setActiveTab }) => {
  function generateRandomBech32Address() {
    const prefix = "bc1q";
    const charset = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
    const mainPartLength = 38; // Standard length for P2WPKH addresses

    let address = prefix;

    // Generate random characters from the Bech32 charset
    for (let i = 0; i < mainPartLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      address += charset[randomIndex];
    }

    return address;
  }
  return (
    <>
      <div className="status-container">
        <img
          src="https://cdn-icons-png.flaticon.com/128/17763/17763051.png"
          alt=""
        />
        {/* // image Completed! */}
        Completed! <br />
        {generateRandomBech32Address()}
        {/* create a function to generate random bitcoin transaonction id */}
        <button
          onClick={() => {
            setActiveTab("Dashboard");
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default Status;
