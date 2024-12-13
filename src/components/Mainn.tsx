import styles from '../app/styles/Main.module.css'
import Image from 'next/image'
import {ArrowLeft, ArrowRight, Play} from 'lucide-react'

import torfin from '../../public/@Getseskoo.jpg'
import mikiro from '../../public/cbef98583b5166ab0d9c0ba2902b77a3.jpg'
import cristao from '../../public/Christian Anime Pfp.jpg'
import paz from '../../public/download (1).jpg'
import viajando from '../../public/download.jpg'
import gatinho from '../../public/gatinhofavicon.jpg'

export default function Mainn() {
    return (
        <main className={styles.main}>
          <div className={styles.botoes}>
            <button type="button"> <ArrowLeft /></button>
            <button type="button"> <ArrowRight /></button>
          </div>

          <h1>Good Morning</h1>
          
          <div className={styles.abamiusc}>
            <a href='#' className={styles.miusc}><Image className={styles.imgmusic}  src={torfin} alt='Torfin' width={90} height={90}/> <strong>Lil Protagonist</strong> <Play className={styles.play} /> </a>
            <a href='#' className={styles.miusc}><Image className={styles.imgmusic} src={mikiro} alt='Torfin' width={90} height={90}/> <strong>Star boy</strong> <Play className={styles.play} /></a>
            <a href='#' className={styles.miusc}><Image className={styles.imgmusic} src={viajando} alt='Torfin' width={90} height={90}/> <strong>Peace, after a difficult day</strong> <Play className={styles.play} /></a>
            <a href='#' className={styles.miusc}><Image className={styles.imgmusic} src={paz} alt='Torfin' width={90} height={90}/> <strong>Protagonist MHZIN</strong> <Play className={styles.play} /></a>
            <a href='#' className={styles.miusc}><Image className={styles.imgmusic} src={cristao} alt='Torfin' width={90} height={90}/> <strong>No Ceu tem suipino.</strong> <Play className={styles.play} /></a>
            <a href='#' className={styles.miusc}><Image className={styles.imgmusic} src={gatinho} alt='Torfin' width={90} height={90}/> <strong>1980s Lofi</strong> <Play className={styles.play} /></a>
          </div>

          <h2>Tocados recentemente</h2>

          <div className={styles.tocadaRecen}>
            <a>
              <Image className={styles.imgmusic}  src={torfin} alt='Torfin' width={150} height={150}/>
              <p>Lil Protagonist</p>
              <strong>De devyuta</strong>
            </a>
            <a>
              <Image className={styles.imgmusic}  src={mikiro} alt='Torfin' width={150} height={150}/>
              <p>Star boy</p>
              <strong>De devyuta</strong>
            </a>
            <a>
              <Image className={styles.imgmusic}  src={viajando} alt='Torfin' width={150} height={150}/>
              <p>Peace, after a difficult day</p>
              <strong>De devyuta</strong>
            </a>
            <a>
              <Image className={styles.imgmusic}  src={paz} alt='Torfin' width={150} height={150}/>
              <p>Lil Protagonist</p>
              <strong>De devyuta</strong>
            </a>
            <a>
              <Image className={styles.imgmusic}  src={cristao} alt='Torfin' width={150} height={150}/>
              <p>Lil Protagonist</p>
              <strong>De devyuta</strong>
            </a>
          </div>
        </main>
    )
}