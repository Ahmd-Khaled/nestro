import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/Components/Header/Header'
import About from '@/Components/About/About'
import ProductsSlider from '@/Components/ProductsSlider/ProductsSlider'
import Offers from '@/Components/Offers/Offers'
import Subscribe from '@/Components/Subscribe/Subscribe'
import Footer from '@/Components/Footer/Footer'


import useNewArrivalProducts from '@/hooks/products/useNewArrivalProducts'

export default async function Home() {
  const [newArrivalProducts, isLoading, error] = await useNewArrivalProducts();

  console.log("newArrivalProducts:---------------", newArrivalProducts);

  return (
    <main className={styles.main}>
      <Header />
      <About />
      <ProductsSlider newArrivalProducts={newArrivalProducts} />
      <Offers />
      <Subscribe />
      <Footer />
    </main>
  )
}
