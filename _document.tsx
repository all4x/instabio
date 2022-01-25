import Document, {
    Html,
    Head,
    Main,
    NextScript,
  } from "next/document";
  import { TrackingHeadScript } from "@phntms/react-gtm";
  
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";
  
  export default class MyDocument extends Document {
    render = () => (
      <Html>
        <Head>
          <TrackingHeadScript id={GA_TRACKING_ID} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }