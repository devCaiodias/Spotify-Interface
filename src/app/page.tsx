import styles from './page.module.css'
import { House, Search, LibraryBig } from 'lucide-react';


export default function Home() {
  return (
    <div className={styles.page}>
        <div className={styles.sidebar}>
          <aside>
            <nav>
              <a href="#"><House className={styles.icon}  /> Home</a>
              <a href="#"><Search className={styles.icon} /> Search</a>
              <a href="#"><LibraryBig className={styles.icon} /> Your Library</a>
            </nav>
          </aside>
        <main className={styles.main}>
          Main
        </main>
        
        </div>

        <footer className={styles.footer}>
          Fotter
        </footer>
    </div>
  );
}
