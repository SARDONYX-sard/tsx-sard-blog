import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          モンハン好きの常時腱鞘炎なプログラマ。
          <br />
          なお、プログラマと呼べるほどのスキルはない模様。
        </p>
        <p>
          使用言語：JavaScript, Python, Ruby
          <br />
          GitHub： <a href='https://github.com/SARDONYX-sard'>SARDONYX-sard</a>
        </p>
      </section>
    </Layout>
  )
}
