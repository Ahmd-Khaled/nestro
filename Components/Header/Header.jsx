"use client";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi"
import { GoPerson } from "react-icons/go"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { FaBarsStaggered } from "react-icons/fa6"
import styles from "./styles.module.scss";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [lang, setLang] = useState("AR");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobMenu, setShowMobMenu] = useState(false);

  const showLangMenuHandler = () => {
    setShowLangMenu(!showLangMenu);
    setShowAccountMenu(false);
  }

  const showAccountMenuHandler = () => {
    setShowAccountMenu(!showAccountMenu);
    setShowLangMenu(false);
  }

  const chooseLangHandler = () => {
    setLang("EN");
    setShowLangMenu(false);
  }

  const showMobMenuHandler = () => {
    setShowMobMenu(!showMobMenu);
  }

  return (
    <header className={showMobMenu ? styles.headerOverlay : styles.header}>
      <MobileMenu showMobMenuHandler={showMobMenuHandler} showMobMenu={showMobMenu} />
      <div className={styles.header__container}>
        <div className={styles.navLinks}>
          <div className={styles.reqBtn}>
            <Link href="/store" className={styles.link}>
              <span>اطلب</span>
              <span>الان</span>
            </Link>
          </div>
          <div className={styles.icons}>
            <div className={styles.cart}>
              <FiShoppingCart />
              <span className={styles.itemsNum}>0</span>
            </div>
            <div className={styles.account}>
              <GoPerson onClick={showAccountMenuHandler} />
              {
                showAccountMenu ? (
                  <ul className={styles.accountMenu}>
                    <li className={styles.accountMenu__item}>
                      <Link className={styles.link} href="/">تسجيل الدخول</Link>
                    </li>
                    <li className={styles.accountMenu__item}>
                      <Link className={styles.link} href="/">انشاء حساب</Link>
                    </li>
                    <li className={styles.accountMenu__item}>
                      <Link className={styles.link} href="/">متابعة الطلب</Link>
                    </li>
                  </ul>
                ) : null
              }
            </div>
            <div className={styles.langBox}>
              <div onClick={showLangMenuHandler} className={styles.lang}>
                <span className={styles.txt}>{lang}</span>
                {showLangMenu ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </div>
              {showLangMenu ? (
                <div onClick={chooseLangHandler} className={styles.dropDownLang}>EN</div>
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo}>
            <Image width={217} height={100} src="/images/logo.png" alt="" />
          </Link>
          <button onClick={showMobMenuHandler} className={styles.menuBtn}>
            <FaBarsStaggered />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header