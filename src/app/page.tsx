import styles from './page.module.css'
import { House, Search, LibraryBig, ArrowLeft, ArrowRight, Play, CirclePlus, ArrowLeftToLine, ArrowRightToLine, Shuffle, Repeat, Volleyball, Mic2, ListCheck, MonitorSpeaker, Volume2 , PictureInPicture, Maximize2  } from 'lucide-react';
import Image from 'next/image';
import torfin from '../../public/@Getseskoo.jpg'
import mikiro from '../../public/cbef98583b5166ab0d9c0ba2902b77a3.jpg'
import gatinho from '../../public/gatinhofavicon.jpg'
import cristao from '../../public/Christian Anime Pfp.jpg'
import paz from '../../public/download (1).jpg'
import viajando from '../../public/download.jpg'


export default function Home() {
  return (
    <div className={styles.page}>
        <div className={styles.sidebar}>
          <aside>
            <div className={styles.bolinhaIpod}>
              <div className={styles.fechar} />
              <div className={styles.espandir} />
              <div className={styles.minimizar} />
            </div>
            <nav>
              <a href="#"><House className={styles.icon}  /> Home</a>
              <a href="#"><Search className={styles.icon} /> Search</a>
              <a href="#"><LibraryBig className={styles.icon} /> Your Library</a>
            </nav>

            <nav className={styles.playlist}>
              <div>
                <Image className={styles.imgplaylist} src={torfin} alt='Torfin'  />
                <a href="">Lil Protagonist</a>
              </div>
              <div>
                <Image className={styles.imgplaylist} src={mikiro} alt='Torfin'  />
                <a href="">Star boy</a>
              </div>

              <div>
                <Image className={styles.imgplaylist} src={viajando} alt='Torfin'  />
                <a href="">Peace, after a difficult day</a>
              </div>

              <div>
                <Image className={styles.imgplaylist} src={paz} alt='Torfin'  />
                <a href="">Protagonist MHZIN</a>
              </div>
              
              <div>
                <Image className={styles.imgplaylist} src={cristao} alt='Torfin'  />
                <a href="">No Ceu tem suipino</a>
              </div>
            </nav>
          </aside>
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
        
        </div>

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
    </div>
  );
}
