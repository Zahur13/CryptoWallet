import React, { useContext, useEffect, useState } from "react";
import styles from "./analytics.module.css";
import { LivePrice } from "../../Components/context/LivePrice";
// import { useAuth } from "../context/AuthContext";

const Analytics = () => {
  const { setCurrency } = useContext(LivePrice);
  const { allCoin, currency } = useContext(LivePrice);
  const [displayCoin, setDisplayCoin] = useState([]);

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
  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.analytics}>
          <div className={styles.insideAnalytics}>
            <div className={styles.liveprice}>
              <span>Live Price</span>
              <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
              </select>
            </div>
            <div className={styles.cointable}>
              <div className={styles.coinlayout}>
                <p>#</p>
                <p>Coin</p>
                <p>Price</p>
                <p style={{ textAlign: "center" }}>24H Change</p>
                <p className="marketcap">Market Cap</p>
              </div>
              {displayCoin.slice(0, 50).map((item, index) => (
                <div className={styles.coinlayout} key={index}>
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
      </div>
    </>
  );
};

export default Analytics;
