import Document, { Head, Main, NextScript, Html } from 'next/document'
import { existsGaId, GA_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          {/* Google Analytics */}
          {existsGaId && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}

          <link rel='preconnect' href='https://fonts.gstatic.com'></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap'
            rel='stylesheet'
          ></link>

          <link
            href='https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&display=swap&subset=japanese'
            rel='stylesheet'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
