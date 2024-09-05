import PropTypes from "prop-types";
import styles from "./TableContainer.module.css";

const List = ({ className = "" }) => {
  return (
    <div className={[styles.tableContainer, className].join(" ")}>
      <div className={styles.textInput}>
        <div className={styles.admitPatientList}>ADMIT PATIENT LIST</div>
        <div className={styles.patientTableIcons}>
          <div className={styles.patientTableSearchIcon}>
            <div className={styles.div}></div>
          </div>
          <div className={styles.div1}></div>
          <div className={styles.div2}></div>
        </div>
      </div>
      <div className={styles.patientTableData}>
        <div className={styles.tableContainer1}>
          <div className={styles.tableContainer2}>
            <div className={styles.horizontalContainer}>
              <div className={styles.textInput1}>
                <div className={styles.no}>No</div>
              </div>
              <div className={styles.textInput2}>
                <div className={styles.name}>Name</div>
              </div>
              <div className={styles.textInput3}>
                <div className={styles.assignedDoctor}>Assigned Doctor</div>
              </div>
              <div className={styles.textInput4}>
                <div className={styles.dateOfAdmit}>Date Of Admit</div>
              </div>
              <div className={styles.textInput5}>
                <div className={styles.diseases}>Diseases</div>
              </div>
              <div className={styles.textInput6}>
                <div className={styles.roomNo}>Room No</div>
              </div>
              <div className={styles.textInput7}>
                <div className={styles.edit}>Edit</div>
              </div>
            </div>
            <div className={styles.table}>
              <div className={styles.horizontalContainer}>
                <div className={styles.slider}>
                  <div className={styles.patientIdValue}>1</div>
                </div>
                <div className={styles.textInput8}>
                  <div className={styles.jensBrincker}>Jens Brincker</div>
                </div>
                <div className={styles.textInput9}>
                  <div className={styles.drkennyJosh}>Dr.Kenny Josh</div>
                </div>
                <div className={styles.textInput10}>
                  <div className={styles.patientDateValue}>27/05/2016</div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.button}>
                    <div className={styles.influenza}>Influenza</div>
                  </div>
                </div>
                <div className={styles.textInput12}>
                  <div className={styles.patientRoomValue}>101</div>
                </div>
                <div className={styles.container}>
                <img src="Switch.png" alt=""/>
                  <div className={styles.switch1}>
                    <div className={styles.div4}></div>
                  </div>
                </div>
              </div>
              <div className={styles.horizontalContainer}>
                <div className={styles.slider}>
                  <div className={styles.div5}>2</div>
                </div>
                <div className={styles.textInput8}>
                  <div className={styles.markHay}>Mark Hay</div>
                </div>
                <div className={styles.textInput15}>
                  <div className={styles.drMark}>Dr. Mark</div>
                </div>
                <div className={styles.textInput10}>
                  <div className={styles.patientDateValue}>26/05/2017</div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.button1}>
                    <div className={styles.cholera}>Cholera</div>
                  </div>
                </div>
                <div className={styles.textInput12}>
                  <div className={styles.div7}>105</div>
                </div>
                <div className={styles.container}>
                <img src="Switch.png" alt=""/>
                  <div className={styles.switch1}>
                    <div className={styles.div4}></div>
                  </div>
                </div>
              </div>
              <div className={styles.horizontalContainer}>
                <div className={styles.slider}>
                  <div className={styles.div5}>3</div>
                </div>
                <div className={styles.textInput8}>
                  <div className={styles.anthonyDavie}>Anthony Davie</div>
                </div>
                <div className={styles.textInput20}>
                  <div className={styles.drcinnabar}>Dr.Cinnabar</div>
                </div>
                <div className={styles.textInput10}>
                  <div className={styles.div11}>21/05/2016</div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.button}>
                    <div className={styles.amoebiasis}>Amoebiasis</div>
                  </div>
                </div>
                <div className={styles.textInput12}>
                  <div className={styles.div7}>106</div>
                </div>
                <div className={styles.container}>
                <img src="Switch.png" alt=""/>
                  <div className={styles.switch1}>
                    <div className={styles.div4}></div>
                  </div>
                </div>
              </div>
              <div className={styles.horizontalContainer}>
                <div className={styles.slider}>
                  <div className={styles.div15}>4</div>
                </div>
                <div className={styles.textInput8}>
                  <div className={styles.davidPerry}>David Perry</div>
                </div>
                <div className={styles.textInput24}>
                  <div className={styles.drfelix}>Dr.Felix</div>
                </div>
                <div className={styles.textInput10}>
                  <div className={styles.div16}>20/04/2016</div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.button3}>
                    <div className={styles.jaundice}>Jaundice</div>
                  </div>
                </div>
                <div className={styles.textInput12}>
                  <div className={styles.div7}>105</div>
                </div>
                <div className={styles.container}>
                <img src="Switch.png" alt=""/>
                  <div className={styles.switch1}>
                    <div className={styles.div4}></div>
                  </div>
                </div>
              </div>
              <div className={styles.horizontalContainer}>
                <div className={styles.slider}>
                  <div className={styles.div15}>5</div>
                </div>
                <div className={styles.textInput8}>
                  <div className={styles.anthonyDavie}>Anthony Davie</div>
                </div>
                <div className={styles.textInput29}>
                  <div className={styles.drberyl}>Dr.Beryl</div>
                </div>
                <div className={styles.textInput10}>
                  <div className={styles.div16}>24/05/2016</div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.button4}>
                    <div className={styles.leptospirosis}>Leptospirosis</div>
                  </div>
                </div>
                <div className={styles.textInput12}>
                  <div className={styles.div22}>102</div>
                </div>
                <div className={styles.container}>
                <img src="Switch.png" alt=""/>
                  <div className={styles.switch1}>
                    <div className={styles.div4}></div>
                  </div>
                </div>
              </div>
              <div className={styles.horizontalContainer}>
                <div className={styles.slider}>
                  <div className={styles.div15}>6</div>
                </div>
                <div className={styles.textInput8}>
                  <div className={styles.alanGilchrist}>Alan Gilchrist</div>
                </div>
                <div className={styles.textInput34}>
                  <div className={styles.drjoshep}>Dr.Joshep</div>
                </div>
                <div className={styles.textInput10}>
                  <div className={styles.patientDateValue}>22/05/2016</div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.button1}>
                    <div className={styles.hepatitis}>Hepatitis</div>
                  </div>
                </div>
                <div className={styles.textInput12}>
                  <div className={styles.div7}>103</div>
                </div>
                <div className={styles.container}>
                <img src="Switch.png" alt=""/>
                  <div className={styles.switch1}>
                    <div className={styles.div4}></div>
                  </div>
                </div>
              </div>
              <div className={styles.horizontalContainer}>
                <div className={styles.slider}>
                  <div className={styles.div5}>7</div>
                </div>
                <div className={styles.textInput8}>
                  <div className={styles.markHay}>Mark Hay</div>
                </div>
                <div className={styles.textInput38}>
                  <div className={styles.drjayesh}>Dr.Jayesh</div>
                </div>
                <div className={styles.textInput10}>
                  <div className={styles.drsharma}>18/06/2016</div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.button4}>
                    <div className={styles.typhoid}>Typhoid</div>
                  </div>
                </div>
                <div className={styles.textInput12}>
                  <div className={styles.div22}>107</div>
                </div>
                <div className={styles.container}>
                <img src="Switch.png" alt=""/>
                  <div className={styles.switch1}>
                    <div className={styles.div4}></div>
                  </div>
                </div>
              </div>
              <div className={styles.horizontalContainer}>
                <div className={styles.slider}>
                  <div className={styles.div15}>8</div>
                </div>
                <div className={styles.textInput8}>
                  <div className={styles.sueWoodger}>Sue Woodger</div>
                </div>
                <div className={styles.textInput44}>
                  <div className={styles.drsharma}>Dr.Sharma</div>
                </div>
                <div className={styles.textInput10}>
                  <div className={styles.div11}>17/05/2016</div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.button3}>
                    <div className={styles.malaria}>Malaria</div>
                  </div>
                </div>
                <div className={styles.textInput12}>
                  <div className={styles.div7}>108</div>
                </div>
                <div className={styles.container}>
                <img src="Switch.png" alt=""/>
                  <div className={styles.switch1}>
                    <div className={styles.div4}></div>
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

List.propTypes = {
  className: PropTypes.string,
};

export default List;
