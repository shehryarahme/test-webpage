import Sidebar from "./Card4";
import PropTypes from "prop-types";
import styles from "./AdminCard.module.css";

const Header = ({ className = "" }) => {
  return (
    <header className={[styles.adminCard, className].join(" ")}>
      <Sidebar />
      <div className={styles.horizontalContainer}>
        <div className={styles.button}>
          <div className={styles.wrapper}>
          <h1 className={styles.h1}>
  <img src="topicon.png" alt="" className={styles.image} />
  </h1>

          </div>
          <a className={styles.medical}>{`Medical `}</a>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <div className={styles.searchInput}>
              <div className={styles.searchInputContainer}>
                <img
                  className={styles.cardIcon}
                  loading="lazy"
                  alt=""
                  src="/card.svg"
                />
              </div>
              <div className={styles.textInputContainer}>
                <div className={styles.searchLabel}>
                  <a className={styles.search}>Search...</a>
                </div>
                <div className={styles.textInput}>
                  <div className={styles.div}></div>
                </div>
              </div>
            </div>
            <div className={styles.languageContainer}>
              <div className={styles.languageSelector}>
                <div className={styles.languageDropdown}>
                  <div className={styles.languageDropdownContent}>
                    <div className={styles.englishContainer}>
                      <img
                        className={styles.imageIcon}
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <a className={styles.english}>English</a>
                  </div>
                </div>
                <div className={styles.notificationContainer}>
                  <div className={styles.notificationBell}>
                    <img
                      className={styles.verticalContainerIcon}
                      alt=""
                      src="/vertical-container-4.svg"
                    />
                    <div className={styles.verticalContainer}>
                      <a className={styles.notificationBadge}>6</a>
                    </div>
                  </div>
                </div>
                <div className={styles.messageContainer}>
                  <img
                    className={styles.containerIcon}
                    alt=""
                    src="/container-3.svg"
                  />
                  <div className={styles.verticalContainer1}>
                    <a className={styles.messageBadge}>2</a>
                  </div>
                </div>
                <div className={styles.profileContainer}>
                  <div className={styles.profileDropdown}>
                    <div className={styles.profileContent}>
                      <img
                        className={styles.imageIcon1}
                        alt=""
                        src="/image-6@2x.png"
                      />
                    </div>
                    <div className={styles.profileName}>
                      <div className={styles.kiran}>Kiran</div>
                    </div>
                    <div className={styles.container}>
                      <a className={styles.moreVert}>more_vert</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
