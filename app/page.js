import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/Components/Header/Header'
import About from '@/Components/About/About'
import ProductsSlider from '@/Components/ProductsSlider/ProductsSlider'
import Offers from '@/Components/Offers/Offers'
import Subscribe from '@/Components/Subscribe/Subscribe'
import Footer from '@/Components/Footer/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <About />
      <ProductsSlider />
      <Offers />
      <Subscribe />
      <Footer />
    </main>
  )
}
