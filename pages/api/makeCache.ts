import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import glob from 'glob'
import remark from 'remark'
import { tokenize } from 'kuromojin'
import strip from 'strip-markdown'



const POSTDIRPATH = path.join(process.cwd(), 'src', 'pages', 'posts')

function getAllPosts() {
  const pattern = path.join(POSTDIRPATH, '**', '*.md')
  const posts = glob.sync(pattern)
  return posts
}

function markdownToText(content: string) {
  let text:any
  remark()
    .use(strip, { keep: ['code'] })
    .process(content, (err, file) => {
      if (err) throw err
      text = file.contents
    })
  return text
}

async function filterToken(text: string) {
  const res = await tokenize(text)
  const POS_LIST = [`名詞`, `動詞`, `形容詞`]
  const IGNORE_REGEX = /^[!-/:-@[-`{-~、-〜”’・]+$/
  return res
    .filter((token) => POS_LIST.includes(token.pos))
    .map((token) => token.surface_form)
    .filter((word) => !IGNORE_REGEX.test(word))
    .filter((word) => word.length >= 2)
}

async function makePostsCache() {
  const filepaths = getAllPosts()

  const posts = await Promise.all(
    filepaths.map(async (filepath: string) => {
      const id = path.parse(filepath).base.replace('.md', '')
      const contents = fs.readFileSync(filepath)
      const matterResult = matter(contents)
      const text = markdownToText(matterResult.content)

      const text_words = await filterToken(text)
      const title_words = await filterToken(matterResult.data.title)
      const all_words = [...text_words, ...title_words]
      const words = [...new Set(all_words)]

      return {
        id: id,
        data: {
          title: matterResult.data.title,
          words: words.join(' '),
        },
      }
    })
  )

  const fileContents = `export const posts = ${JSON.stringify(posts)}`
  const outdir = path.join(process.cwd(), 'cache')
  fs.writeFileSync(path.join(outdir, 'data.js'), fileContents)
}

makePostsCache()
