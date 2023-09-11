import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.top}>
          <div className={styles.payMethods}>
            <p className={styles.text}>نحن نقبل الدفع عبر الإنترنت</p>
            <div className={styles.imgs}>
              <Link href="/">
                <Image width={217} height={47} src="/images/visa.png" alt="" />
              </Link>
            </div>
          </div>
          <div className={styles.contactus}>
            <p className={styles.text}>اتصل بنا على</p>
            <Link href="tel:920006843">920006843</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.links}>
            <div className={styles.copyrights}>
              <p>Copyrights &copy; Barn’s 2023</p>
            </div>
            <ul className={styles.linksList}>
              <li className={styles.item}>
                <Link href="/">خريطة الموقع</Link>
              </li>
              <li className={styles.item}>
                <Link href="/">لشروط و الأحكام</Link>
              </li>
              <li className={styles.item}>
                <Link href="/">أسئلة وأجوبة</Link>
              </li>
              <li className={styles.item}>
                <Link href="/">تواصل معنا</Link>
              </li>
              <li className={styles.item}>
                <Link href="/">تسجيل دخول الشركات</Link>
              </li>
            </ul>
          </div>
          <ul className={styles.socialList}>
            <li className={styles.socialList__item}>
              <Link href="/">
                <FaTwitter />
              </Link>
            </li>
            <li className={styles.socialList__item}>
              <Link href="/">
                <FaInstagram />
              </Link>
            </li>
            <li className={styles.socialList__item}>
              <Link href="/">
                <FaFacebookF />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer