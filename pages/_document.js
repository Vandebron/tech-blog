import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <script
            async
            src="https://www.google-analytics.com/analytics.js"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                ga('create', 'UA-49472651-19', { 'storage': 'none' });
                ga('send', 'pageview');`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
