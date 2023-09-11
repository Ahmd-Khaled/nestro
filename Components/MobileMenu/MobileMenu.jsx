import Link from "next/link";
import styles from "./styles.module.scss";
import { CgClose } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";


const MobileMenu = ({ showMobMenuHandler, showMobMenu }) => {
  const [showSearchBox, setShowSearchBox] = useState(true);
  const openSearchBoxHandler = () => {
    setShowSearchBox(true);
  };
  const closeSearchBoxHandler = () => {
    setShowSearchBox(false);
  };

  return (
    <div className={showMobMenu ? styles.mobMenu : styles.mobMenuHidden}>
      <div className={styles.container}>
        <div className={styles.mobMenuOverlay} onClick={showMobMenuHandler}></div>
        <div className={styles.mobMenuWrapper}>
          <div className={styles.head}>
            <Link href="/" className={styles.logo}>
              <Image width={217} height={100} src="/images/logo.png" alt="" />
            </Link>
            <button className={styles.closeBtn} onClick={showMobMenuHandler}>
              <CgClose />
            </button>
          </div>
          <div className={styles.search}>
            <button onClick={openSearchBoxHandler} className={styles.search__icon}>
              <FaSearch />
            </button>
            {
              showSearchBox ? (
                <div className={styles.searchBox}>
                  <button onClick={closeSearchBoxHandler} className={styles.closeSearchBtn}>
                    <CgClose />
                  </button>
                  <input type="text" placeholder="كيف يمكننا مساعدتك؟" />
                </div>
              ) : null
            }
          </div>
          <ul className={styles.linksList}>
            <li className={styles.listItem}>
              <Link href="/">من نحن</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/">القائمة</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/">انضم لعائلتنا</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/">أخبارنا</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/">المتجر الإلكتروني</Link>
            </li>
          </ul>
          <div className={styles.contacts}>
            <div className={styles.location}>
              <FaLocationDot />
              <Link href="/">فروعنا</Link>
            </div>
            <h2 className={styles.title}>ابق على تواصل</h2>
            <div className={styles.phone}>
              <FaPhoneFlip />
              <Link href="tel:920006843">920006843</Link>
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
      </div>
    </div>
  )
}

export default MobileMenu