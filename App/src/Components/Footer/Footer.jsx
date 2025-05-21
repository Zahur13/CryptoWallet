import React from "react";
import "./footer.css";

const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <p> &copy; Copyright 2025, {props.title} - All Right Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
