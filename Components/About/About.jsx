import Image from "next/image";
import styles from "./styles.module.scss";
import NavigationDots from "../NavigationDots/NavigationDots";
import Link from "next/link";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__images}>
        <div className={styles.imageOne}>
          <div className={styles.imageOne__gif}>
            <img src="/images/gifcoffee_beans.gif" alt="" />
          </div>
          <div className={styles.imageOne__timeLine}>
            <div className={styles.info}>
              <p className={styles.txt}>منذ</p>
              <h1 className={styles.title}>1992</h1>
              <p className={styles.desc}>
                <span>نستريتو هي أول علامة تجارية حديثة و محلية</span>
                <span>الكامل متخصصة في صناعة القهوة في</span>
                <span>المملكة العربية السعودية.</span>
              </p>
            </div>
            <div className={styles.start}>
              <Image className={styles.sliderImg} width={61} height={108} src="/images/slide-icon.png" alt="" />
              <Image className={styles.handImg} width={65} height={61} src="/images/hand-flipped.png" alt="" />
            </div>
            <div className={styles.startDate}>2023</div>
            <div className={styles.lineVertOne}></div>
          </div>
        </div>
        <div className={styles.imageTwo}>
          <div className={styles.imageTwo__gif}>
            <img src="/images/powder-coffee-ar.gif" alt="" />
          </div>
          <div className={styles.imageTwo__timeLine}>
            <div className={styles.step}>
              <h1 className={styles.mainTitle}>ننشر</h1>
              <h1 className={styles.subTitle}>نكهتنا</h1>
              <p className={styles.text}>نستريتو تعيد تعريف النكهة وعلاقاتها مع الناس</p>
              <Link className={styles.discoverBtn} href="/discover">اكتشف</Link>
            </div>
            <div className={styles.lineVertTwo}></div>
          </div>
        </div>
        <div className={styles.imageThree}>
          <div className={styles.imageThree__gif}>
            <img src="/images/coffee-cup-ar.gif" alt="" />
          </div>
          <div className={styles.imageThree__timeLine}>
            <div className={styles.step}>
              <h1 className={styles.mainTitle}>رشفة من خيال</h1>
              <p className={styles.text}>كوب قهوة بارنز هو البداية المثالية في المكان المناسب، لتبدأ حديثك مع صديق عزيز أو تقضي بعض الوقت برفقة كتاب، وتستمتع بعشق القهوة .</p>
              <Link className={styles.discoverBtn} href="/more">المزيد</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>

        {/* <div className={styles.timeLine}>
          <div className={styles.start}>
            <Image className={styles.sliderImg} width={61} height={108} src="/images/slide-icon.png" alt="" />
            <Image className={styles.handImg} width={65} height={61} src="/images/hand-flipped.png" alt="" />
          </div>
          <div className={styles.startDate}>2023</div>
          <div className={styles.lineVertOne}></div>
          <div className={styles.step}>
            <h1 className={styles.mainTitle}>ننشر</h1>
            <h1 className={styles.subTitle}>نكهتنا</h1>
            <p className={styles.text}>نستريتو تعيد تعريف النكهة وعلاقاتها مع الناس</p>
            <Link className={styles.discoverBtn} href="/discover">اكتشف</Link>
          </div>
          <div className={styles.lineVertTwo}></div>
          <div className={styles.step}>
            <h1 className={styles.mainTitle}>رشفة من خيال</h1>
            <p className={styles.text}>
              <span>كوب قهوة بارنز هو البداية المثالية في المكان المناسب،</span>
              <span>لتبدأ حديثك مع صديق عزيز أو تقضي بعض الوقت برفقة</span>
              <span>كتاب، وتستمتع بعشق القهوة .</span>
            </p>
            <Link className={styles.discoverBtn} href="/more">المزيد</Link>
          </div>
        </div> */}
      </div>
      <NavigationDots />
    </section>
  )
}

export default About;