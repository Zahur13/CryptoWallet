import React, { useState } from "react";
import "./sender.styles.css";

const Modal = ({ setScreenIndex, setTransactionDetails }) => {
  const [senderId, setSenderId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [amount, setAmount] = useState(0);
  const [receiverName, setReceiverName] = useState("");

  return (
    <>
      <div className="send-container">
        <div className="form-container">
          <form>
            <label htmlFor="">Sender Id:</label>
            <input
              type="text"
              placeholder="Enter sender id..."
              value={senderId}
              onChange={(e) => setSenderId(e.target.value)}
            />
          </form>
          <form>
            <label htmlFor="">Receiver Id:</label>
            <input
              type="text"
              placeholder="Enter receiver id..."
              value={receiverId}
              onChange={(e) => setReceiverId(e.target.value)}
            />
          </form>
          <form>
            <label htmlFor="">Receiver Name:</label>
            <input
              type="text"
              placeholder="Enter receiver name..."
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
            />
          </form>
          <form>
            <label htmlFor="">Amount (USD):</label>
            <input
              type="text"
              placeholder="Enter sender address..."
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
            />
          </form>
        </div>
        <div className="send-btn">
          <button
            onClick={() => {
              setScreenIndex(1);
              setTransactionDetails({
                senderId: senderId,
                receiverId: receiverId,
                amount: amount,
                receiverName: receiverName,
              });
            }}
          >
            Initiate Transfer
          </button>
          <button
            onClick={() => {
              setScreenIndex("Dashboard");
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
