import styles from '../app/page.module.css'
import {Play, CirclePlus, ArrowLeftToLine, ArrowRightToLine, Shuffle, Repeat, Volleyball, Mic2, ListCheck, MonitorSpeaker, Volume2 , PictureInPicture, Maximize2  } from 'lucide-react';
import Image from 'next/image';
import gatinho from '../../public/gatinhofavicon.jpg'

export default function Footerr() {
   return (
    <footer className={styles.footer}>
          <div className={styles.musicplay}>
            <Image className={styles.imgmusic} src={gatinho} alt='Torfin' width={50} height={50}/>
            <div>
              <p>1980s Lofi</p>
              <span>De devyuta</span>
              <a href=""><CirclePlus className={styles.addmusic} /></a>
              
            </div>
          
          </div>
          <div className={styles.playmusic}>
            <div>
            <Shuffle size={20}  />
            <ArrowLeftToLine size={20} />
            <Play size={25} className={styles.playmm}  />
            <ArrowRightToLine size={20} />
            <Repeat size={20} />
            </div>
            <div className={styles.slicerplay}>
              <span className={styles.timeemusic}>0:31</span>
              <div className={styles.progrecemusic}>
                <div className={styles.timedecorrido}></div><Volleyball size={15} />
              </div>
              <span className={styles.timeemusic}>2:41</span>
            </div>
          </div>
          <div className={styles.buttonaxiliares}>
            <Mic2 size={20} />
            <ListCheck size={21} />
            <MonitorSpeaker size={20} />
            <div>
                <Volume2 size={20} />
                <div className={styles.volume}>
                  <div className={styles.volumeup}></div>
              </div>
            </div>
            <PictureInPicture size={20} />
            <Maximize2 size={20} />
          </div>
        </footer>
   ) 
}