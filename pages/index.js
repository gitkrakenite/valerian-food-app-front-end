import Head from 'next/head'
import Image from 'next/image'
import Featured from '../component/Featured'
import PizzaList from '../component/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>The best Restaurant in Town</title>
        <meta name="description" content="For your favorite meals.Hot and ready" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Featured />
      <PizzaList />



    </div>
  )
}
