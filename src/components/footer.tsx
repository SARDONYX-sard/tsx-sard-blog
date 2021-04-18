import footerStyles from './footer.module.css'
import Link from 'next/link'

export default function Footer({ isHome, isAbout }: { isHome: boolean; isAbout: boolean }) {
  return (
    <footer className={footerStyles.footer_bg}>
      <div className={footerStyles.container}>
        <Link href='/search'>
          <a>&#x1f50d;Search</a>
        </Link>
        {!isHome && (
          <Link href='/'>
            <a>&#x1F3E0;Home</a>
          </Link>
        )}
        {!isAbout && (
          <Link href='/about'>
            <a>&#x2618;About me</a>
          </Link>
        )}
      </div>
    </footer>
  )
}
