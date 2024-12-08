import styles from './page.module.css'
import { House, Search, LibraryBig, ArrowLeft, ArrowRight } from 'lucide-react';
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
            <div className={styles.miusc}><Image className={styles.imgmusic}  src={torfin} alt='Torfin' width={90} height={90}/> Lil Protagonist</div>
            <div className={styles.miusc}><Image className={styles.imgmusic} src={mikiro} alt='Torfin' width={90} height={90}/> Star boy</div>
            <div className={styles.miusc}><Image className={styles.imgmusic} src={viajando} alt='Torfin' width={90} height={90}/> Peace, after a difficult day</div>
            <div className={styles.miusc}><Image className={styles.imgmusic} src={paz} alt='Torfin' width={90} height={90}/> Protagonist MHZIN</div>
            <div className={styles.miusc}><Image className={styles.imgmusic} src={cristao} alt='Torfin' width={90} height={90}/> No Ceu tem suipino.</div>
            <div className={styles.miusc}><Image className={styles.imgmusic} src={gatinho} alt='Torfin' width={90} height={90}/> 1980s Lofi</div>
          </div>
        </main>
        
        </div>

        <footer className={styles.footer}>
          Fotter
        </footer>
    </div>
  );
}
