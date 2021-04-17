import Link from 'next/link'
import Layout from '../components/layout'
import FlexSearch from 'flexsearch'

type Props = {
  query: string
  meta: {
    id: number
    title: string
  }[]
}

const SearchResult = ({ query, meta }: Props) => {
  const listitems = meta.map((res, idx) => {
    const url = `/posts/${res.id}`
    return (
      <li key={idx}>
        <Link href={url}>{res.title}</Link>
      </li>
    )
  })
  return (
    <Layout>
      <h1>Search Results</h1>
      <h2>Query: {query}</h2>
      <ul>{listitems}</ul>
    </Layout>
  )
}

type Context = {
  query: {
    q: string
  }
}

export async function getServerSideProps(ctx: Context) {
  const { posts } = await import('../../cache/data')
  const query = ctx.query.q

  let index = new FlexSearch({
    tokenize: function (str: string) {
      return str.split(' ')
    },
    doc: {
      id: 'id',
      field: ['data:words'],
    },
  })

  await index.add(posts)

  const res = await index.search(query)

  type Response = {
    id: number
    data: {
      title: string
    }
  }
  const meta = res.map((r: Response) => ({
    id: r.id,
    title: r.data.title,
  }))

  return {
    props: { query: query, meta: meta },
  }
}

export default SearchResult
