"use client";
import ProductCard from "../ProductCard/ProductCard";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import useNewArrivalProducts from "@/hooks/products/useNewArrivalProducts";
import { fetchDataISR, fetchDataSSG } from "@/utils/fetchData";


const ProductsSlider = ({ newArrivalProducts }) => {
  // const [newArrivalProducts, isLoading] = useNewArrivalProducts();


  const carouselRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    console.log("scrollWidth:", carouselRef.current.scrollWidth);
    console.log("offsetWidth:", carouselRef.current.offsetWidth);
  }, []);

  return (
    <section className={styles.productsSlider}>
      <div className={styles.productsSlider__container}>
        <h2 className={styles.title}>منتجاتنا</h2>
        <div className={styles.carouselWrapper}>
          <div className={styles.arrowBtns}>
            <div className={styles.rightArrow}>
              <BsChevronRight />
            </div>
            <div className={styles.leftArrow}>
              <BsChevronLeft />
            </div>
          </div>
          <motion.div
            className={styles.carousel}
            ref={carouselRef}
            whileTap={{ cursor: "grabbing"}}
          >
            <motion.ul
              drag="x"
              dragConstraints={{ left: 0, right: width }}
              className={styles.innerCarousel}
            >
              {
                newArrivalProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    img={product.image}
                    link="/"
                    text={product.title}
                  />
                ))
              }
              {/* <ProductCard
                img="/images/1632201114.png"
                link="/"
                text="قهوة سريعة الذوبان أظرف"
              />
              <ProductCard
                img="/images/1612175269.png"
                link="/"
                text="قهوة فرنسي مطحونة 250 غرام"
              />
              <ProductCard
                img="/images/1612264243.png"
                link="/"
                text="قهوة اسبريسو حبوب 250 غرام"
              />
              <ProductCard
                img="/images/1612095109.png"
                link="/"
                text="قهوة كابتشينو حبوب 250 غرام"
              />
              <ProductCard
                img="/images/1612178651.png"
                link="/"
                text="مسحوق البندق"
              />
              <ProductCard
                img="/images/1612178675.png"
                link="/"
                text="مسحوق الهيل"
              /> */}
            </motion.ul>
          </motion.div>
        </div>
        <button className={styles.discoverBtn}>
          <Link href="/products">تسوق كل المنتجات</Link>
        </button>
      </div>
    </section>
  )
}

export default ProductsSlider