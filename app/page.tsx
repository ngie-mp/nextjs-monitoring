import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import getAllAccreds from '@/lib/getAllAccreds'

export default async function Home() {
  const accredsData: Promise<Accred[]> = getAllAccreds()
  const accreds = await accredsData

  return (
    <main className={styles.main}>
      <h1>Hello world</h1>
      <Link href='/about'>about page</Link>
      <Link href='/accreds'>accreds page</Link>
    </main>
  )
}
