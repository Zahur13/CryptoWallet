import React, { useEffect, useState } from "react";
import "./TransactionTable.css"; // We'll create this for styling
import { useAuth } from "../context/AuthContext";

const TransactionTable = () => {
  const { user, fetchTransactions } = useAuth();
  const [state, setstate] = useState({});

  const image = [
    "https://cdn-icons-png.flaticon.com/128/3518/3518775.png",
    "https://cdn-icons-png.flaticon.com/128/3393/3393852.png",
    "https://cdn-icons-png.flaticon.com/128/3442/3442091.png",
    "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
    "https://cdn-icons-png.flaticon.com/128/4140/4140047.png",
    "https://cdn-icons-png.flaticon.com/128/18798/18798808.png",
    "https://cdn-icons-png.flaticon.com/128/6997/6997668.png",
    "https://cdn-icons-png.flaticon.com/128/2118/2118520.png",
    "https://cdn-icons-png.flaticon.com/128/1999/1999625.png",
    "https://cdn-icons-png.flaticon.com/128/16683/16683451.png",
    "https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
    "https://cdn-icons-png.flaticon.com/128/6924/6924580.png",
    "https://cdn-icons-png.flaticon.com/128/14663/14663195.png",
  ];

  useEffect(() => {
    fetchTransactions(user?.email?.split("@")[0]).then((res) => {
      setstate(res);
    });
  }, []);

  console.log(state);

  // const transactions = [
  //   {
  //     name: "Abubakar",
  //     address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  //     status: "Completed",
  //     amount: "$80",
  //     img: "https://cdn-icons-png.flaticon.com/128/3518/3518775.png",
  //   },
  //   {
  //     name: "Muiz",
  //     address: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVKk",
  //     status: "Completed",
  //     amount: "$70",
  //     img: "https://cdn-icons-png.flaticon.com/128/3393/3393852.png",
  //   },
  //   {
  //     name: "Arjun",
  //     address: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
  //     status: "Declined",
  //     amount: "$140",
  //     img: "https://cdn-icons-png.flaticon.com/128/3442/3442091.png",
  //   },
  //   {
  //     name: "Sophia",
  //     address: "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",
  //     status: "Pending",
  //     amount: "$210",
  //     img: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
  //   },
  //   {
  //     name: "Liam",
  //     address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  //     status: "Completed",
  //     amount: "$55",
  //     img: "https://cdn-icons-png.flaticon.com/128/4140/4140047.png",
  //   },
  //   {
  //     name: "Emma",
  //     address: "D8vFuhbUq1J5gqfRTw6X8kXWY1ZQ9JtXhG",
  //     status: "Refunded",
  //     amount: "$320",
  //     img: "https://cdn-icons-png.flaticon.com/128/18798/18798808.png",
  //   },
  //   {
  //     name: "Noah",
  //     address: "LZ3v24X6wN5qRt1mJ7S9T2pY8dF4E1cVbN",
  //     status: "Completed",
  //     amount: "$95",
  //     img: "https://cdn-icons-png.flaticon.com/128/6997/6997668.png",
  //   },
  //   {
  //     name: "Olivia",
  //     address: "XhwZ4m5jQ7vRt3k8Wn9yBp2sDf6Gh1JkLm",
  //     status: "Declined",
  //     amount: "$180",
  //     img: "https://cdn-icons-png.flaticon.com/128/2118/2118520.png",
  //   },
  //   {
  //     name: "William",
  //     address: "bc1q9z8u7x6t5r4e3w2y1ioplkjhgfdsazxcvbnm",
  //     status: "Pending",
  //     amount: "$65",
  //     img: "https://cdn-icons-png.flaticon.com/128/1999/1999625.png",
  //   },
  //   {
  //     name: "Ava",
  //     address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  //     status: "Completed",
  //     amount: "$230",
  //     img: "https://cdn-icons-png.flaticon.com/128/16683/16683451.png",
  //   },
  //   {
  //     name: "James",
  //     address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  //     status: "Completed",
  //     amount: "$150",
  //     img: "https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
  //   },
  //   {
  //     name: "Isabella",
  //     address: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
  //     status: "Declined",
  //     amount: "$275",
  //     img: "https://cdn-icons-png.flaticon.com/128/6924/6924580.png",
  //   },
  //   {
  //     name: "Benjamin",
  //     address: "DQnz5YwXq7Ft4Eb1r9G2p3sK6jH8mLvNc",
  //     status: "Completed",
  //     amount: "$110",
  //     img: "https://cdn-icons-png.flaticon.com/128/14663/14663195.png",
  //   },
  // ];

  return (
    <div className="transaction-table-container">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {state?.transactions?.map((transaction, index) => (
            <tr key={index}>
              <td>
                <div className="icons">
                  <div className="round">
                    <img src={image} alt="icon" />
                  </div>

                  {transaction.receiverName}
                </div>
              </td>
              <td>{transaction.txnId}</td>
              <td>{transaction.amount}</td>
              <td>
                <span className={`status-badge ${transaction.status}`}>
                  {transaction.status}Completed
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
