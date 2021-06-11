import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.google-analytics.com/analytics.js"
          ></script>

          <link
            rel="stylesheet"
            href="https://d381m57et8llfk.cloudfront.net/20210128-6054/static/css/dc7f55cf12b36887a247.fonts.css"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                ga('create', 'UA-49472651-19', { 'storage': 'none' });
                ga('send', 'pageview');`,
            }}
          />

          <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
