import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        {/* fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
          rel="stylesheet"
        />
        <body>
          <Main />
          <NextScript />
          {/* DOMContentLoaded as promises */}
          <script
            dangerouslySetInnerHTML={{
              __html:
                'window.loadContentPromise = new Promise((resolve)=>{window.addEventListener("DOMContentLoaded", resolve);});',
            }}
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
