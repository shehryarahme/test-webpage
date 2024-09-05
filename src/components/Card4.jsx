import PropTypes from "prop-types";
import styles from "./Card4.module.css";

const Sidebar = ({ className = "" }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <div className={styles.adminName}>
        <div className={styles.adminInfo}>
          <div className={styles.adminImage}>
            <img className={styles.imageIcon} alt="" src="/image-4@2x.png" />
          </div>
          <div className={styles.textInput}>
            <div className={styles.drKiranPatel}>Dr. Kiran Patel</div>
          </div>
          <div className={styles.adminDesignation}>
            <a className={styles.administrator}>Administrator</a>
          </div>
        </div>
      </div>
      <div className={styles.adminMenu}>
        <div className={styles.textInput1}>
          <div className={styles.logoutButton}>
            <img
              className={styles.buttonContainerIcon}
              loading="lazy"
              alt=""
              src="/button-container.svg"
            />
          </div>
          <div className={styles.menuDashboard}>
            <a className={styles.dashboard}>Dashboard</a>
          </div>
          <div className={styles.menuMore}>
            <div className={styles.div}>&gt;</div>
          </div>
        </div>
        <div className={styles.navigationMenu}>
          <div className={styles.menuList}>
            <div className={styles.logoutButton}>
              <div className={styles.menuItems}>
                <img
                  className={styles.buttonContainerIcon}
                  loading="lazy"
                  alt=""
                  src="/vertical-container.svg"
                />
                <img
                  className={styles.buttonContainerIcon}
                  alt=""
                  src="/container.svg"
                />
                <img
                  className={styles.buttonContainerIcon}
                  alt=""
                  src="/button-container-1.svg"
                />
                <img
                  className={styles.buttonContainerIcon}
                  alt=""
                  src="/horizontal-container-1.svg"
                />
                <img
                  className={styles.buttonContainerIcon}
                  alt=""
                  src="/horizontal-container-2.svg"
                />
                <img
                  className={styles.buttonContainerIcon}
                  alt=""
                  src="/vertical-container-1.svg"
                />
                <img
                  className={styles.buttonContainerIcon}
                  alt=""
                  src="/container-1.svg"
                />
                <img
                  className={styles.buttonContainerIcon}
                  loading="lazy"
                  alt=""
                  src="/rating-container.svg"
                />
                <img
                  className={styles.buttonContainerIcon}
                  alt=""
                  src="/container-2.svg"
                />
                <img
                  className={styles.buttonContainerIcon}
                  alt=""
                  src="/vertical-container-2.svg"
                />
                <img
                  className={styles.buttonContainerIcon}
                  alt=""
                  src="/vertical-container-3.svg"
                />
              </div>
            </div>
            <div className={styles.navigationFooter}>
              <div className={styles.footerDetails}>
                <div className={styles.footerList}>
                  <div className={styles.footerListItems}>
                    <div className={styles.footerItems}>
                      <div className={styles.footerList}>
                        <div className={styles.email}>Email</div>
                        <a className={styles.calendar}>Calendar</a>
                        <div className={styles.appointment}>Appointment</div>
                        <div className={styles.doctors}>Doctors</div>
                        <div className={styles.otherStaff}>Other Staff</div>
                        <div className={styles.patients}>Patients</div>
                        <div className={styles.roomAllotment}>
                          Room Allotment
                        </div>
                        <div className={styles.payments}>Payments</div>
                        <div className={styles.widget}>Widget</div>
                        <div className={styles.uiElements}>UI Elements</div>
                      </div>
                    </div>
                    <div className={styles.pageNavigation}>
                      <div className={styles.button}>
                        <div className={styles.emptyButton}>3</div>
                      </div>
                      <div className={styles.button1}>
                        <div className={styles.div1}>10</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.materialElements}>
                    Material Elements
                  </div>
                </div>
              </div>
              <div className={styles.rightChevronContainer}>
                <div className={styles.div}>&gt;</div>
                <div className={styles.doubleChevronContainer}>
                  <div className={styles.div}>&gt;</div>
                  <div className={styles.div}>&gt;</div>
                  <div className={styles.doubleChevronContainer}>
                    <div className={styles.div}>&gt;</div>
                    <div className={styles.doubleChevronContainer}>
                      <div className={styles.div}>&gt;</div>
                      <div className={styles.div}>&gt;</div>
                      <div className={styles.div}>&gt;</div>
                    </div>
                    <div className={styles.footerList}>
                      <div className={styles.div}>&gt;</div>
                      <div className={styles.div}>&gt;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
