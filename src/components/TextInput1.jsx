import PropTypes from "prop-types";
import styles from "./TextInput1.module.css";

const Dashboard = ({ className = "" }) => {
  return (
    <div className={[styles.textInput, className].join(" ")}>
      <div className={styles.dashboardWrapper}>
        <a className={styles.dashboard}>Dashboard</a>
      </div>
      <div className={styles.button}>
        <div className={styles.wrapper}>
        <div className={styles.div}>
  <img src="home.png" alt="" className={styles.image} />
</div>

        </div>
        <div className={styles.homeWrapper}>
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div1}>&gt;</div>
        </div>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboard1}>Dashboard</div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  className: PropTypes.string,
};

export default Dashboard;
