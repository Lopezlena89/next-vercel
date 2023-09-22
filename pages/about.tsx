import Link from 'next/link'
import styles from '../components/layouts/MainLayout.module.css'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'



export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 >
        Ir a <Link className={styles.title} href="/">Home Page</Link>
      </h1>
      <p className={styles.description}> 
          Get started by editing {''}
          <code className={'code'} >pages/about.jsx</code>
      </p>
    </>
  )
}

AboutPage.getLayout = function getLayout(page:JSX.Element){
  return (
    <MainLayout>
        <DarkLayout>
          {page}
        </DarkLayout>
    </MainLayout>
  )
}
