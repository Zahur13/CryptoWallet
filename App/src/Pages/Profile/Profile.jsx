import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.inputs}>
        <h2>Profile</h2>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Second Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone" />
        <div className={styles.span}>
          <span>
            Update Info
            <img
              src="https://cdn-icons-png.flaticon.com/128/2767/2767192.png"
              alt="next-arrow"
              width={30}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
