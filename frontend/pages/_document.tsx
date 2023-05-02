import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Staatliches"
          />
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.16.15/dist/css/uikit.min.css" />

        <script src="https://cdn.jsdelivr.net/npm/uikit@3.16.15/dist/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.16.15/dist/js/uikit-icons.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
