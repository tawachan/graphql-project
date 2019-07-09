import Document, { Head, Main, NextScript } from "next/document";
import * as React from "react"

class CustomDocument extends Document {
  public static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    return (
      <html>
        <Head>
          <style>{`#__next { height: 100vh; width: 100vw; margin: 0; }`}</style>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta property="og:title" content="sample.me" />
          <meta property="og:url" content="https://sample.me/" />
          <meta
            property="og:image"
            content="static/assets/images/avatar.jpg"
          />
          <meta property="og:description" content="サンプルサイト" />
          <meta property="og:site_name" content="sample.me" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:image"
            content="static/assets/images/avatar.jpg"
          />
          <meta name="twitter:title" content="sample.me" />
          <meta name="twitter:description" content="サンプルサイト" />
          <meta name="twitter:site" content="@sample" />
          <meta name="description" content="サンプルサイト" />
          <meta
            name="keywords"
            content="サンプル"
          />

          <link
            href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c|Sawarabi+Mincho"
            rel="stylesheet"
          />
        </Head>
        <body
          style={{
            height: "100vh",
            width: "100vw",
            margin: 0,
            fontFamily: "'M PLUS Rounded 1c', 'Sawarabi Mincho', sans-serif",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
