import Document, { Head, Main, NextScript } from "next/document";

class Doc extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width initial-scale=1 shrink-to-fit=no"
          />
          <meta name="description" content="Ghana Auto Trader" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/static/images/icons/logo.png"
          />
          <script src="/static/vendors/axios.js" async defer />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default Doc;
