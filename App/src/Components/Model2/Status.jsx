import React from "react";
import "./status.css";
import { useAuth } from "../../Components/context/AuthContext";

const Status = ({ setActiveTab, transactionDetails }) => {
  const { user, updateTransaction } = useAuth();

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
    updateTransaction({
      balance: 10000,
      transaction: [
        {
          amount: transactionDetails.amount,
          txnId: address,
          receiverName: transactionDetails.receiverName,
        },
      ],
      userName: user?.email?.split("@")[0],
    });

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
