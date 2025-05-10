import React from "react";
import { useContext, useEffect, useState } from "react";
import { LivePrice } from "../context/LivePrice";
const MidSection = () => {
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

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);
};

const Analytics = ({ setActiveTab }) => {
  return (
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
  );
};

export default Analytics;
