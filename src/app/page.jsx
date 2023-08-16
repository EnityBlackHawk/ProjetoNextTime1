import Image from 'next/image'
import styles from './page.module.scss'
import Header from '../../components/header'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h1 className={styles.title}>Welcome to Next.js!</h1> */}
      <Header />
    </main>
  )
}
