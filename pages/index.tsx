/*
This is the index page, aka the page that opens when you run the project
This is where you are to put everything you want on the start page and 
links to all the other pages you want to include in the project
*/

import type { NextPage } from 'next'
import Head from 'next/head'
import TestComponent from '../components/TestComponent'
import styles from '../styles/Home.module.css'
import Countdown from '../components/Countdown'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abkus 45års jubilieum</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Countdown countDownDate={new Date("Mar 13, 2022 02:00:00")}/>
        <h1 className={styles.title}>
          Abakus 45års jubileumsside!:)
        </h1>

        <p className={styles.description}>
          Wohoo her skal dere lage en skikkelig kul side! Lykkke til, det blir bra!
        </p>

        <TestComponent />

      </main>
    </div>
  )
}

export default Home
