import Link from 'next/link'
import styles from '../components/layouts/MainLayout.module.css'
import { MainLayout } from '../components/layouts/MainLayout'



export default function HomePage() {
  return (
    <>
      <MainLayout>
        <h1 >Home Page</h1>
        <h1 >
          Ir a <Link className={styles.title} href="/about">About Page</Link>
        </h1>
        <p> 
            Get started by editing {''}
            <code className={'code'}>pages/index.jsx</code>
        </p>
    </MainLayout>
    </>
  )
}
