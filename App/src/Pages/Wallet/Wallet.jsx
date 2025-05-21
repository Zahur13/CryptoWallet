import React, { useEffect, useState } from "react";
// import styles from "./Wallet.module.css";

const Wallet = () => {
  const [balance, setBalance] = useState([]);
  const [cardnumber, setCardNumber] = useState([]);
  const [cvv, setCvv] = useState([]);

  useEffect(() => {
    localStorage.setItem("balance", balance);
    localStorage.setItem("cardnumber", cardnumber);
    localStorage.setItem("cvv", cvv);
  }, [balance, cardnumber, cvv]);

  useEffect(() => {
    localStorage.getItem("balance", balance);
    localStorage.getItem("cardnumber", cardnumber);
    localStorage.getItem("cvv", cvv);
  }, []);
  console.log(balance);

  return (
    <div>
      <h2>Wallet</h2>
      <div className="walletInside">
        <input
          type="text"
          placeholder="Add Balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Card number"
          value={cardnumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <a href="/">
          <button>Submit</button>
        </a>
      </div>
    </div>
  );
};

export default Wallet;
