import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
        style={{ textAlign: 'center' }}
      >
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

        <h2 id='reactnextjs--typescriptで作られたblog'>
          React(Next.js) + TypeScriptで作られたBlog
        </h2>
        <p>
          当ブログの公開場所：
          <a href='https://tsx-sard-blog.netlify.app/'>tsx-sard-blog.netlify.app</a>
        </p>
        <p>
          当ブログのソースコード：
          <a href='https://github.com/SARDONYX-sard/tsx-sard-blog'>tsx-sard-blog.git</a>
        </p>
        <h2 id='作成目的'>作成目的</h2>
        <ul>
          <li>Vue(Nuxt.js) + TailWindCSSによるブログを以前作成したので次はReactを学ぶ。</li>
          <li>Reactの仕様、TypeScriptの静的型付けについての理解を深める。</li>
        </ul>
        <h2 id='予定'>予定</h2>
        <ul>
          <li>記事の増加</li>
          <li>Reactでブログ内サーチ機能(2021/4/22実装済)</li>
          <li>カテゴリー別サイドバー作成</li>
          <li>人気記事サイドバー作成</li>
        </ul>
      </main>
    </Layout>
  )
}
