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
  const [text, setText] = useState('')
  const [selectPostsData, setSelectPostsData] = useState(allPostsData)

  function handleTextChange(text: string) {
    setText(text)
    let reg = new RegExp(text, "gi")
    console.log(reg);


    if (text === '') {
      setSelectPostsData(allPostsData)
    } else {
      setSelectPostsData(
        allPostsData.filter(({ id, date, title }) => {
          return id.match(reg) || date.match(reg) || title.match(reg)
        })
      )
    }
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

      <form>
        <p>
          <label>
            検索：
            <input
              type='text'
              name='name'
              onChange={(e) => {
                handleTextChange(e.target.value)
              }}
            />
          </label>
        </p>
      </form>

      <div className={index.container}>
        <main className={index.contents}>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}></h2>
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
