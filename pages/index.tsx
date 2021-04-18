import Head from 'next/head'
import { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import index from '../styles/index.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

import getRandomImg from '../lib/randomImage'
import Footer from '../components/footer'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <>
      <style>
        {`.styles_title__1AK6-::before {
          background-image: url(/images/${getRandomImg()}.jpg);
        }`}
      </style>
      <Head>
        <title>{siteTitle}</title>

        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Learn how to build a personal website using Next.js' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <div className={index.container}>
        <header
          className={index.title}
          // style={{ backgroundImage: `url(/images/${getRandomImg()}.jpg)` }}
        >
          <h1 className={index.h1}>{siteTitle}</h1>
          <p>学んだ技術や知識をまとめておく場所</p>
        </header>
        <main className={index.contents}>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>最新記事</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>

      <Footer isHome={true} isAbout={false} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
