import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styles from "./styles.module.scss";

const Offers = () => {
  return (
    <section className={styles.offers}>
      <div className={styles.offers__container}>
        <div className={styles.left}>
          <div className={styles.title}>
            <h1>الامتياز والترخيص</h1>
          </div>
          <div className={styles.desc}>
            <p className={styles.text}>نحن نصنع تجارب القهوة الفريدة للمطاعم والفنادق والمكاتب. نحن نقدم حلول شاملة بما في ذلك اختيار القهوة ، وتطوير الخلطة، وتأجير المعدات والتدريب. املأ النموذج أدناه وسوف نتصل بك.</p>
            <button className={styles.reqNowBtn}>
              <span>اطلب الآن</span>
              <BsChevronLeft />
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h1>طلب الشركات</h1>
          </div>
          <div className={styles.desc}>
            <p className={styles.text}>نحن نصنع تجارب القهوة الفريدة للمطاعم والفنادق والمكاتب. نحن نقدم حلول شاملة بما في ذلك اختيار القهوة ، وتطوير الخلطة، وتأجير المعدات والتدريب. املأ النموذج أدناه وسوف نتصل بك.</p>
            <button className={styles.reqNowBtn}>
              <span>اطلب الآن</span>
              <BsChevronLeft />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers;