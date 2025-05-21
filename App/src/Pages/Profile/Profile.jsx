import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  const clickHandler = () => {
    alert("Profile Updated Successfully");
  };
  return (
    <div className={styles.profile}>
      <div className={styles.inputs}>
        <h2>Profile</h2>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Second Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone" />

        <a href="/" className={styles.btn}>
          <button onClick={clickHandler}>Update Info</button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
