import React, { useContext, useEffect, useState } from "react";
import "./midsection.css";
import TransactionTable from "./TransactionTable";
import { LivePrice } from "../context/LivePrice";
import { useAuth } from "../context/AuthContext";

// const heading = ["Name", "Date", "Amount", "Status"];

const MidSection = () => {
  const { user, fetchTransactions } = useAuth();

  const { setCurrency } = useContext(LivePrice);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  const { allCoin, currency } = useContext(LivePrice);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [totalWithdrawal, setTotalWithdrawal] = useState(0);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  console.log(totalWithdrawal, "totalWithdrawal");
  useEffect(() => {
    fetchTransactions(user.email?.split("@")[0]).then((res) => {
      let sum = res.transactions
        ?.map((ele) => {
          return ele.amount;
        })
        .reduce((a, c) => a + c, 0);
      setTotalWithdrawal(sum);
      localStorage.setItem("balance", 700000 - sum);
    });
  }, []);
  return (
    <>
      <div className="midsection">
        <div className="greet">
          <span>WelCome Back, {user?.email}</span>
          <p>Bitcoin is different than what you know</p>
        </div>
        <div className="total">
          <section>
            <div className="arrow">
              <img
                src="https://cdn-icons-png.flaticon.com/128/8591/8591512.png"
                alt="user"
              />
            </div>
            <div className="usertitle">
              <p>Total Deposit</p>
              <span>$700.000</span>
            </div>
            <div className="downarrow">
              <span>+1.29%</span>
            </div>
          </section>
          <section>
            <div className="arrow2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/8591/8591651.png"
                alt="user"
              />
            </div>
            <div className="usertitle">
              <p>Total Withdrawal</p>
              <span className="redspan">${totalWithdrawal}</span>
            </div>
            <div className="reddownarrow">
              <span>+1.29%</span>
            </div>
          </section>
        </div>
        <div className="analytics">
          <div className="insideAnalytics">
            <div className="liveprice">
              <span>Live Price</span>
              <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
              </select>
            </div>
            <div className="coin-table">
              <div className="coin-layout">
                <p>#</p>
                <p>Coin</p>
                <p>Price</p>
                <p style={{ textAlign: "center" }}>24H Change</p>
                <p className="marketcap">Market Cap</p>
              </div>
              {displayCoin.slice(0, 10).map((item, index) => (
                <div className="coin-layout" key={index}>
                  <p>{item.market_cap_rank}</p>
                  <div>
                    <img src={item.image} alt="" />
                    <p>{item.name + " " + item.symbol}</p>
                  </div>
                  <p>
                    {currency.symbol}
                    {item.current_price.toLocaleString()}
                  </p>
                  <p
                    className={
                      item.price_change_percentage_24h > 0 ? "green" : "red"
                    }
                  >
                    {Math.floor(item.price_change_percentage_24h * 100) / 100}
                  </p>
                  <p className="marketcap">
                    {currency.symbol + " " + item.market_cap.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="transaction">
          <div className="insidetransaction">
            <section>
              <span>Transactions</span>
            </section>
            <section className="inout">
              <div className="search">
                <input type="text" placeholder="Search for anything..." />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8669/8669664.png"
                  alt="search"
                />
              </div>
              <div className="input2">
                <input type="date" />
              </div>
            </section>
          </div>
          <div className="transactionitems">
            <TransactionTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default MidSection;
