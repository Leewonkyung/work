import ResponsiveImage from "../../../components/promotion/ResponsiveImage";

import { HOST_CDN_UPDATE } from "../config";
import styles from "../tabPackageAir.module.scss";

export default function SubMainSection() {
  return (
    <div className={styles["submain-col"]}>
      <ResponsiveImage
        pc={`${HOST_CDN_UPDATE}tabpackagesix_submain.png`}
        mo={`${HOST_CDN_UPDATE}m_tabpackagesix_submain.png`}
        alt="아이패드 air6세대 놀랍지만 진짜 드려요! 영어공부 이제 시작하세요"
      />
    </div>
  );
}
