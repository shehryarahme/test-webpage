import PropTypes from "prop-types";
import styles from "./Charts.module.css";

const Charts = ({ className = "" }) => {
  return (
    <div className={[styles.tableCards, className].join(" ")}>
      <div className={styles.card}>
        <div className={styles.tableCardHeaders}>
          <div className={styles.tableCardHeaderLabels}>
            <b className={styles.newPatient}>New Patient</b>
          </div>
          <div className={styles.paragraphContainer}>
            <div className={styles.growthValueIcon}>
              <div className={styles.div}></div>
            </div>
            <div className={styles.highThenLastMonthWrapper}>
              <div className={styles.highThenLast}>
                25% High then last month
              </div>
            </div>
          </div>
        </div>
        <div className={styles.overallGrowthChartLayout}>
          <div className={styles.overallGrowthCharts}>
            <div className={styles.overallGrowth}>Overall Growth</div>
            <div className={styles.montlyWrapper}>
              <div className={styles.montly}>Montly</div>
            </div>
            <div className={styles.day}>Day</div>
          </div>
          <div className={styles.chartFooter}>
            <b className={styles.footerDivider}>35.80%</b>
            <div className={styles.footerContent}>
              <b className={styles.footerDivider}>45.20%</b>
              <b className={styles.growthDropdownBottom}>5.50%</b>
            </div>
          </div>
        </div>
        <div className={styles.chartLegend}>
        
          <div className={styles.legendItem}>100</div>
          <div className={styles.cardPatientName}>80</div>
        </div>
        <div className={styles.treatmentType}>60</div>
        <div className={styles.patientMoreDetailsButton}>
          <div className={styles.legendTitle}>40</div>
        </div>
        <div className={styles.patientMoreDetailsButton}>
          <div className={styles.legendTitle}>20</div>
        </div>
        <div className={styles.patientChart}>
          <div className={styles.chartContainer}>
            <div className={styles.chart}>
              <img
                className={styles.inputFormContainer}
                alt=""
                src="/input-form-container.svg"
              />
              <div className={styles.chartDates}>
               
                <img
                  className={styles.svgjsline1438Icon}
                  loading="lazy"
                  alt=""
                  src="/svgjsline1438.svg"
                />
                <img
                  className={styles.sliderContainerIcon}
                  alt=""
                  src="/slider-container-1@2x.png"
                />
                <div className={styles.chartDateNumbers}>
                
                </div>
                <div className={styles.chartDateSelector}>
                 
                  
                </div>
              </div>
            </div>
            <div className={styles.chartDescription}>
              <div className={styles.chartTitle}>0</div>
              <div className={styles.chartDatesNumber}>
                <div className={styles.chartDate}>
                  <div className={styles.dateDayName}>Jan</div>
                  <div className={styles.dateDayNumber}>Feb</div>
                  <div className={styles.dateDayNumber}>Mar</div>
                  <div className={styles.dateMonthNumber}>Apr</div>
                  <div className={styles.dateYearNumber}>May</div>
                  <div className={styles.dateDayName}>Jun</div>
                  <div className={styles.chartNavigationButtons}>July</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.heartSurgeriesParent}>
              <h3 className={styles.heartSurgeries}>Heart Surgeries</h3>
              <div className={styles.tableGrowthLayout}>
                <div className={styles.overallGrowthCharts}>
                  <div className={styles.overallGrowth}>Overall Growth</div>
                  <div className={styles.growthDropdownLayout}>
                    <div className={styles.montly}>Montly</div>
                  </div>
                  <div className={styles.day}>Day</div>
                </div>
                <div className={styles.chartFooter}>
                  <b className={styles.growthDownIcon}>20.60%</b>
                  <div className={styles.growthDropdownTopParent}>
                    <b className={styles.footerDivider}>65.30%</b>
                    <b className={styles.growthDropdownBottom}>4.90%</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.paragraphContainer1}>
            <div className={styles.growthValueIcon}>
              <div className={styles.div}></div>
            </div>
            <div className={styles.highThenLastMonthWrapper}>
              <div className={styles.lowThenLast}>30% Low then last month</div>
            </div>
          </div>
        </div>
        <div className={styles.textInput} />
        <div className={styles.tableInner}>
          <div className={styles.frameGroup}>
            <div className={styles.overallGrowthChartHeaderCoParent}>
              <div className={styles.overallGrowthChartHeaderCo}>
                <div className={styles.dateMonthNumber}>100</div>
                <div className={styles.legendTitle}>80</div>
                <div className={styles.legendTitle}>60</div>
                <div className={styles.legendTitle}>40</div>
                <div className={styles.legendTitle}>20</div>
                <div className={styles.chartTitle}>0</div>
              </div>
              <div className={styles.growthChart}>
                <div className={styles.paginationContainer}>
                  <div className={styles.pageIndicator}>
                    <img className={styles.svgjsline1285Icon} alt="" />
                    <img className={styles.svgjsline1286Icon} alt="" />
                    <div className={styles.activePage}>
                      
                      <div className={styles.pageDots}>
                       
                       
                        
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.inputFormIcon}
                    alt=""
                    src="/input-form.svg"
                  />
                  <div className={styles.pageControls}>
                    <img
                      className={styles.paginationIcon}
                      alt=""
                      src="/pagination@2x.png"
                    />
                    <img
                      className={styles.paginationIcon1}
                      alt=""
                      src="/pagination-1@2x.png"
                    />
                    <img
                      className={styles.paginationIcon2}
                      alt=""
                      src="/pagination-2@2x.png"
                    />
                  </div>
                  <div className={styles.chartNavigation}>
                    <div className={styles.chartNavContainer}>
                      <div className={styles.chartNavItems}>
                        <b className={styles.svgjstext1209}>17</b>
                        <div className={styles.svgjstext1219Wrapper}>
                          <b className={styles.svgjstext1209}>15</b>
                        </div>
                        <div className={styles.svgjstext1229Wrapper}>
                          <b className={styles.svgjstext1209}>14</b>
                        </div>
                      </div>
                      <div className={styles.chartNavItems1}>
                        <div className={styles.chartNavItemsContainer}>
                          <div className={styles.chartNavItem}>
                            <div className={styles.chartNavItemDetails}>
                              <b className={styles.svgjstext1209}>11</b>
                            </div>
                            <b className={styles.svgjstext1209}>13</b>
                          </div>
                        </div>
                        <div className={styles.chartNavItem3}>
                          <div className={styles.chartNavItemDetails1}>
                            <b className={styles.svgjstext1209}>23</b>
                            <b className={styles.svgjstext1209}>55</b>
                          </div>
                        </div>
                        <div className={styles.chartNavItem6}>
                          <div className={styles.chartNavItemDetails2}>
                            <b className={styles.svgjstext1209}>15</b>
                            <b className={styles.svgjstext1209}>20</b>
                          </div>
                        </div>
                        <div className={styles.chartNavItem9}>
                          <div className={styles.chartNavItemDetails3}>
                            <b className={styles.chartNavItem10}>8</b>
                          </div>
                          <b className={styles.svgjstext1209}>67</b>
                        </div>
                        <div className={styles.chartNavItem12}>
                          <div className={styles.chartNavItemDetails4}>
                            <b className={styles.svgjstext1209}>21</b>
                            <b className={styles.svgjstext1209}>13</b>
                          </div>
                        </div>
                        <div className={styles.chartNavItem15}>
                          <b className={styles.svgjstext1209}>27</b>
                        </div>
                      </div>
                      <div className={styles.chartNavItems1}>
                        <div className={styles.chartNavItem17}>
                          <b className={styles.svgjstext1209}>44</b>
                        </div>
                        <div className={styles.chartNavItem19}>
                          <b className={styles.svgjstext1209}>41</b>
                        </div>
                        <div className={styles.chartNavItem21}>
                          <b className={styles.svgjstext1209}>22</b>
                        </div>
                        <b className={styles.svgjstext1209}>43</b>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.svgjsline1253Icon}
                    loading="lazy"
                    alt=""
                    src="/svgjsline1253.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.chartDate}>
                <b className={styles.monthLabel}>Jan '19</b>
                <div className={styles.monthLabel1}>02 Jan</div>
                <div className={styles.monthLabel1}>03 Jan</div>
                <div className={styles.monthLabel1}>04 Jan</div>
                <div className={styles.monthLabel1}>05 Jan</div>
                <div className={styles.monthLabel1}>06 Jan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card1}>
        <div className={styles.frameDiv}>
          <div className={styles.tableCardHeaderLabels}>
            <h3 className={styles.medicalTreatment}>Medical Treatment</h3>
          </div>
          <div className={styles.paragraphContainer2}>
            <div className={styles.growthValueIcon}>
              <div className={styles.div}></div>
            </div>
            <div className={styles.highThenLastMonthWrapper}>
              <div className={styles.highThenLast1}>
                20% High then last month
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.overallGrowthCharts}>
            <div className={styles.overallGrowth}>Overall Growth</div>
            <div className={styles.montlyContainer}>
              <div className={styles.montly}>Montly</div>
            </div>
            <div className={styles.day}>Day</div>
          </div>
          <div className={styles.chartFooter}>
            <b className={styles.b}>38.40%</b>
            <div className={styles.group}>
              <b className={styles.growthDownIcon}>52.49%</b>
              <b className={styles.b2}>4.70%</b>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.svgjsrect1298Parent}>
           
            <div className={styles.legendLabel}>120</div>
            <div className={styles.legendLabel}>100</div>
            <div className={styles.legendUnit}>80</div>
          </div>
          <div className={styles.legendContentWrapper}>
            <div className={styles.legendContent}>
              <div className={styles.legendTitle}>60</div>
              <div className={styles.legendTitle}>40</div>
              <div className={styles.legendTitle}>20</div>
              <div className={styles.legendChart}>
                <div className={styles.chartContainer}>
                  <div className={styles.legendChartContent}>
                    <img
                      className={styles.inputFormIcon1}
                      alt=""
                      src="/input-form-1.svg"
                    />
                    <div className={styles.svgjsline1299Parent}>
                      <img className={styles.svgjsline1299Icon} alt="" />
                      <img
                        className={styles.svgjsline1341Icon}
                        loading="lazy"
                        alt=""
                        src="/svgjsline1341.svg"
                      />
                      <img
                        className={styles.sliderContainerIcon}
                        alt=""
                        src="/horizontal-container@2x.png"
                      />
                      <div className={styles.svgjsline1378Parent}>
                        <img className={styles.svgjsline1471Icon} alt="" />
                        <img className={styles.svgjsline1472Icon} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.chartValues}>
                    <div className={styles.chartTitle}>0</div>
                    <div className={styles.chartDatesNumber}>
                      <div className={styles.chartDate}>
                        <div className={styles.dateDayName}>Jan</div>
                        <div className={styles.dateDayNumber}>Feb</div>
                        <div className={styles.dateDayNumber}>Mar</div>
                        <div className={styles.dateMonthNumber}>Apr</div>
                        <div className={styles.dateYearNumber}>May</div>
                        <div className={styles.dateDayName}>Jun</div>
                        <div className={styles.chartNavigationButtons}>
                          July
                        </div>
                        <div className={styles.treatmentDateNumber}>Aug</div>
                      </div>
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

Charts.propTypes = {
  className: PropTypes.string,
};

export default Charts;
