import React, { useState } from "react";

import InnerCol from "./InnerCol";

import classNames from "classnames";

import uuid from "react-uuid";

import tabPackageAirValues from "../config";
import styles from "../tabPackageAir.module.scss";
import ResponsiveImage from "../../../components/promotion/ResponsiveImage";

export default function FirstCome() {
  const [activeTab, setActiveTab] = useState("special-tab01");
  const [isActive, setIsActive] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const handleBtnClick = () => {
    setIsActive(!isActive);
  };

  return (
    <section className={styles["first-come-col"]}>
      <InnerCol>
        <h3>선착순 한정 수량으로</h3>
        <p>드리는 공부 효율 향상 보장 꿀템</p>
        <div className={styles["tab-menu"]}>
          <div className={styles["img-box"]}>
            {tabPackageAirValues.ipadColorValue.map((value, index) => (
              <div
                key={uuid()}
                className={classNames(styles["tab-cont"], {
                  [styles["active"]]: activeTab === `special-tab0${index + 1}`,
                })}
                id={`special-tab0${index + 1}`}
              >
                <ResponsiveImage pc={value.pc} mo={value.mo} alt={value.alt} />
              </div>
            ))}
          </div>
          <div className={styles["txt-box"]}>
            <h4>iPad Air6세대 11형</h4>
            <p>256GB wi-fi 모델</p>
            <ul className={styles["btn-box"]}>
              {tabPackageAirValues.ipadColorValue.map((value, index) => (
                <li
                  key={uuid()}
                  data-name={`special-tab0${index + 1}`}
                  className={classNames(styles["tab-btn"], styles[value.colorEn], {
                    [styles["active"]]: activeTab === `special-tab0${index + 1}`,
                  })}
                  onClick={() => handleTabClick(`special-tab0${index + 1}`)}
                >
                  <h5>{value.color}</h5>
                  <span></span>
                </li>
              ))}
            </ul>
            <em>색상은 랜덤으로 발송됩니다</em>
          </div>
        </div>
        <div className={classNames(styles["info-box"], { [styles["active"]]: isActive })}>
          <button onClick={handleBtnClick}>
            <p>공부에 최적화된 스펙 확인하기</p>
            <span></span>
          </button>
          <ul>
            {tabPackageAirValues.infoBoxList.map((value) => (
              <li key={uuid()}>{value.text}</li>
            ))}
          </ul>
        </div>
      </InnerCol>
    </section>
  );
}
