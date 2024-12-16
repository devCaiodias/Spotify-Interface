import styles from '../app/styles/Footer.module.css'
import {Play, CirclePlus, ArrowLeftToLine, ArrowRightToLine, Shuffle, Repeat, Volleyball, Mic2, ListCheck, MonitorSpeaker, Volume2 , PictureInPicture, Maximize2, House, Search, LibraryBig, Heart  } from 'lucide-react';
import Image from 'next/image';
import gatinho from '../../public/gatinhofavicon.jpg'

export default function Footerr() {
   return (
    <div>
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
            <div className={styles.musicmobile}>
              <Image className={styles.imgmusicmobile} src={gatinho} alt='Torfin' width={50} height={50}/>
              <div className={styles.titlemusicmobile}>
                <p>1980s Lofi</p>
                <span>De devyuta</span>
              </div>
              <div className={styles.iconmobile}>
                <a href=""><Heart className={styles.favoritemobi} /></a>
                <a href=""><Play className={styles.playmobi} /></a>
              </div>
            </div>


            <div className={styles.mobilefooter}>
              <div className={styles.itensmobile}>
                  <a href="#"><House className={styles.icon}  /></a>
                  <p>Home</p>
              </div>
                <div className={styles.itensmobile}>
                  <a href="#"><Search className={styles.icon} /> </a>
                  <p>Search</p>
                </div>
                <div className={styles.itensmobile}>
                  <a href="#"><LibraryBig className={styles.icon} /> </a>
                  <p>Your Library</p>
                </div>
            </div>
    </div>
   ) 
}