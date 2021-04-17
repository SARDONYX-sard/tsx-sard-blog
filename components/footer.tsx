import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import footerStyles from './footer.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'SARDONYX'
export const siteTitle = 'SARDONYXのブログ'

export default function Footer() {
  return (
    <footer className={footerStyles.footer_bg}>
      <div className={footerStyles.container}>
        <Link href='/'>
          <a>&#x1f50d;Search</a>
        </Link>
        <Link href='/'>
          <a>&#x1F3E0;Home</a>
        </Link>
        <Link href='/about'>
          <a>&#x2618;About me</a>
        </Link>
      </div>
    </footer>
  )
}
