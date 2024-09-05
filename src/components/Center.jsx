import PropTypes from "prop-types";
import styles from "./Center.module.css";

const Center = ({ className = "" }) => {
  return (
    <div className={[styles.patientCards, className].join(" ")}>
      <div className={styles.card}>
        <div className={styles.patientCardInputs}>
          <div className={styles.textInput}>
            <div className={styles.sliderContainer}>
              <div className={styles.operationLabels}>
                <h3 className={styles.newPatients}>New Patients</h3>
              </div>
              <div className={styles.operationsIconLayout}>
                <div className={styles.operationIconTopParent}>
                  <div className={styles.operationIconTop}>125</div>
                  <div className={styles.imageWrapper}>
                    <img
                      className={styles.imageIcon}
                      loading="lazy"
                      alt=""
                      src="/image@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.slider}>
                <div className={styles.textInput1} />
              </div>
            </div>
          </div>
          <div className={styles.textInput}>
            <div className={styles.sliderContainer}>
              <div className={styles.operationLabels}>
                <h3 className={styles.opdPatients}>OPD Patients</h3>
              </div>
              <div className={styles.operationsIconLayout}>
                <div className={styles.operationIconTopParent}>
                  <div className={styles.operationIconTop}>218</div>
                  <div className={styles.visitorIconBottom}>
                    <img
                      className={styles.imageIcon1}
                      alt=""
                      src="/image-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.slider}>
                <div className={styles.textInput2} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.patientCardInputs}>
          <div className={styles.textInput}>
            <div className={styles.textInputContainer4}>
              <div className={styles.operationLabels}>
                <div className={styles.todaysOperations}>
                  Today's Operations
                </div>
              </div>
              <div className={styles.operationsIconLayout}>
                <div className={styles.parent}>
                  <div className={styles.div}>25</div>
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.imageIcon1}
                      alt=""
                      src="/image-2@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.slider}>
                <div className={styles.textInput3} />
              </div>
            </div>
          </div>
          <div className={styles.textInput}>
            <div className={styles.textInputContainer7}>
              <div className={styles.operationLabels}>
                <div className={styles.visitors}>Visitors</div>
              </div>
              <div className={styles.operationsIconLayout}>
                <div className={styles.operationIconTopParent}>
                  <div className={styles.div1}>2,479</div>
                  <img
                    className={styles.imageIcon3}
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
              </div>
              <div className={styles.slider}>
                <div className={styles.textInput4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card1}>
        <div className={styles.textInput5}>
          <div className={styles.hospitalSurvey}>HOSPITAL SURVEY</div>
          <div className={styles.surveyIcons}>
            <div className={styles.wrapper}>
              <div className={styles.div2}></div>
            </div>
            <div className={styles.div3}></div>
            <div className={styles.div4}></div>
          </div>
        </div>
        <div className={styles.chartLayout}>
          <div className={styles.chartContainer}>
            <div className={styles.chartTitleLayout}>
          
              <div className={styles.svgjstext1066}>60</div>
              <div className={styles.svgjstext1066}>50</div>
              <div className={styles.svgjstext1066}>40</div>
            </div>
            <div className={styles.chartSubTitleWrapper}>
              <div className={styles.chartSubTitle}>30</div>
            </div>
          </div>
        </div>
        <div className={styles.chartYAxisLabelWrapper}>
          <div className={styles.chartSubTitle}>20</div>
        </div>
        <div className={styles.chartContentLayout}>
          <div className={styles.chartXAxisLayoutParent}>
            <div className={styles.chartXAxisLayout}>
              <img
                className={styles.textInputContainer9}
                alt=""
                src="/text-input-container.svg"
              />
              <div className={styles.chartXAxisContent}>
                <img className={styles.svgjsline1013Icon} alt="" />
                <img
                  className={styles.svgjsline1063Icon}
                  alt=""
                  src="/svgjsline1063.svg"
                />
                <img
                  className={styles.sliderContainerIcon}
                  alt=""
                  src="/slider-container@2x.png"
                />
                <div className={styles.chartXAxisTicks}>
                  <img className={styles.svgjsline1104Icon} alt="" />
                  <img className={styles.svgjsline1105Icon} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.chartCanvasLayout}>
              <div className={styles.chartCanvasTitle}>
                <div className={styles.chartSubTitle}>10</div>
                <div className={styles.svgjstext1078}>0</div>
              </div>
              <div className={styles.chartCanvasContentLayout}>
                <div className={styles.chartCanvasDataLayout}>
                  <div className={styles.chartCanvasDataValues}>
                    <div className={styles.svgjstext1028}>Jan</div>
                  </div>
                  <div className={styles.chartCanvasData}>Feb</div>
                  <div className={styles.chartCanvasDataValues}>
                    <div className={styles.chartCanvasData}>Mar</div>
                  </div>
                  <div className={styles.chartCanvasData1}>Apr</div>
                  <div className={styles.chartCanvasData2}>May</div>
                  <div className={styles.chartCanvasDataValues2}>
                    <div className={styles.svgjstext1028}>Jun</div>
                  </div>
                  <div className={styles.chartCanvasDataValues3}>
                    <div className={styles.svgjstext1046}>Jul</div>
                  </div>
                  <div className={styles.chartCanvasData3}>Aug</div>
                  <div className={styles.chartCanvasDataValues}>
                    <div className={styles.svgjstext1052}>Sep</div>
                  </div>
                  <div className={styles.chartCanvasData1}>Oct</div>
                  <div className={styles.svgjstext1052}>Nov</div>
                  <div className={styles.svgjstext1052}>Dec</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Center.propTypes = {
  className: PropTypes.string,
};

export default Center;
