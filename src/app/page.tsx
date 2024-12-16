// 'use client'
import styles from './page.module.css'
import Sidebar from '@/components/Sidebar';
import Mainn from '@/components/Mainn';
import Footerr from '@/components/Footerr';
// import { useEffect, useState } from 'react';
// import axios from 'axios';


export default function Home() {
  // const [musicc, setMusicc] = useState([])
  
  // useEffect(() => {
  //   axios.get('https://json-server-vercel-3izoydvww-protagonistaaas-projects.vercel.app/music')
  //   .then(response => {
  //     console.log("Dados Recebidos: ", response.data);
  //     setMusicc(response.data)
  //   })
  // })

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
