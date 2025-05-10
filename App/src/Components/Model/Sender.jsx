import React from "react";
import "./sender.styles.css";

const Modal = ({ setScreenIndex }) => {
  return (
    <>
      <div className="send-container">
        <div className="form-container">
          <form>
            <label htmlFor="">Sender Id:</label>
            <input type="text" placeholder="Enter sender id..." />
          </form>
          <form>
            <label htmlFor="">Sender Address:</label>
            <input type="text" placeholder="Enter sender address..." />
          </form>
        </div>
        <div className="send-btn">
          <button
            onClick={() => {
              setScreenIndex(1);
            }}
          >
            Send
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
