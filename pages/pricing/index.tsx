import styles from '../../components/layouts/MainLayout.module.css'
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'



export default function PricingPage() {
  return (
    <>
      <MainLayout>
        <h1>Pricing Page</h1>
        <h1 >
          Ir a <Link className={styles.title} href="/">Home</Link>
        </h1>
        <p > 
            Get started by editing {''}
            <code className={'code'}>pages/pricing/index.jsx</code>
        </p>
      </MainLayout>
    </>
  )
}
