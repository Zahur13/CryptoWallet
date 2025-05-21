import React, { useEffect, useState } from "react";
import styles from "./Wallet.module.css";

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
  }, [balance, cardnumber, cvv]);

  const clickHandler = () => {
    alert("Wallet Updated Successfully");
  };

  return (
    <div className={styles.wallet}>
      <div className={styles.walletInside}>
        <h2>Wallet</h2>
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
          <button onClick={clickHandler}>Submit</button>
        </a>
      </div>
    </div>
  );
};

export default Wallet;
