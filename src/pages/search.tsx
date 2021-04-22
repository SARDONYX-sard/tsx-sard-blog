import Head from 'next/head'
import { useState } from 'react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import index from '../styles/index.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  const [selectPostsData, setSelectPostsData] = useState(allPostsData)

  function handleTextChange(text: string) {
    let reg = new RegExp(text, 'gi')
    console.log(reg)

    if (text === '') {
      setSelectPostsData(allPostsData)
    } else {
      setSelectPostsData(
        allPostsData.filter(({ id, date, title }) => {
          return date.match(reg) || title.match(reg)
        })
      )
    }
    // console.log(selectPostsData)
  }

  return (
    <Layout>
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
        <h1 className={utilStyles.headingMd}>
          <p>
            <label>
              検索：
              <input
                className={utilStyles.headingMd}
                type='text'
                name='name'
                onChange={(e) => {
                  handleTextChange(e.target.value)
                }}
              />
            </label>
          </p>
        </h1>
        <p>月別検索の例：</p>
        <p>[2020年1月の記事]：2020-01</p>
        <main className={index.contents}>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <ul className={utilStyles.list}>
              {selectPostsData.map(({ id, date, title }) => (
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
    </Layout>
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
