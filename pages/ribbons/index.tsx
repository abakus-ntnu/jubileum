import type { NextPage } from 'next'
import Head from 'next/head'
import RibbonComponent from '../../components/RibbonComponent'
import styles from '../../styles/RibbonsPage.module.css'
import {Stack} from "@mui/material";
import {medalTypes} from './utils'


const RibbonsPage: NextPage = () => {
  return (
    <div className={styles.content}>
      <Head>
        <title>Daljer, Pins og Bånd - Abakus 45års jubilieum</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Daljer, Pins og Bånd
        </h1>

        <p className={styles.description}>
          Info om daljer
        </p>
        <Stack direction="row" spacing={2}>
            <RibbonComponent ribbonType = {medalTypes.formatted}/>
            <RibbonComponent ribbonType = {medalTypes.comitteeLeader}/>
            <RibbonComponent ribbonType = {medalTypes.comittee}/>
            <RibbonComponent ribbonType = {medalTypes.backup}/>
        </Stack>

        <Stack direction="row" spacing={2}>
            <RibbonComponent ribbonType = {medalTypes.abakusLeader}/>
            <RibbonComponent ribbonType = {medalTypes.hs}/>
            <RibbonComponent ribbonType = {medalTypes.honorary}/>
            <RibbonComponent ribbonType = {medalTypes.revueBoard}/>
        </Stack>
        <Stack direction="row" spacing={2}>
            <RibbonComponent ribbonType = {medalTypes.anniversary}/>
            <RibbonComponent ribbonType = {medalTypes.knight}/>
            <RibbonComponent ribbonType = {medalTypes.lineLeader}/>
        </Stack>
        <p className={styles.description}>
          Info om Bånd
        </p>
        <Stack direction="row" spacing={2}>
            <RibbonComponent ribbonType = ''/>
            <RibbonComponent ribbonType = ''/>
            <RibbonComponent ribbonType = ''/>
            <RibbonComponent ribbonType = ''/>
        </Stack>
        <p className={styles.description}>
          Info om pins
        </p>
        <Stack direction="row" spacing={2}>
            <RibbonComponent ribbonType = ''/>
            <RibbonComponent ribbonType = ''/>
            <RibbonComponent ribbonType = ''/>
            <RibbonComponent ribbonType = ''/>
        </Stack>
      </main>
    </div>
  )
}

export default RibbonsPage