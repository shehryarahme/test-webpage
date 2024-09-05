import Dashboard from "../components/TextInput1";
import Center from "../components/Center";
import Charts from "../components/Charts";
import List from "../components/TableContainer";
import Header from "../components/AdminCard";
import styles from "./MedicalDashboard.module.css";

const MedicalDashboard = () => {
  return (
    <div className={styles.medicalDashboard}>
      <main className={styles.tableContainer}>
        <section className={styles.tableContainer1}>
          <Dashboard />
          <div className={styles.cardsLayoutWrapper}>
            <div className={styles.cardsLayout}>
              <Center />
              <div className={styles.tableCardLayout}>
                <Charts />
                <List />
              </div>
            </div>
          </div>
        </section>
        <Header />
      </main>
      <footer className={styles.textInput}>
        <div className={styles.redstarHospitalTemplateContainer}>
          <span>{`2021 © RedStar Hospital Template By `}</span>
          <span className={styles.redstartheme}>Redstartheme</span>
        </div>
      </footer>
    </div>
  );
};

export default MedicalDashboard;
