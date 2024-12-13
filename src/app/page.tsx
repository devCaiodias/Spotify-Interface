import styles from './page.module.css'
import Sidebar from '@/components/Sidebar';
import Mainn from '@/components/Mainn';
import Footerr from '@/components/Footerr';


export default async function Home() {
  
  return (
    <div className={styles.page}>
        <div className={styles.sidebar}>
          <Sidebar />
          <Mainn />
        </div>
        <Footerr />
    </div>
  );
}
