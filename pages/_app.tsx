import 'tailwindcss/tailwind.css'


import type { AppProps } from "next/app";
import { TrackingHeadScript } from "@phntms/next-gtm";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

const App = ({ Component }: AppProps) => (
  <>
    <TrackingHeadScript id={GA_TRACKING_ID} />
    <Component />
  </>
);

export default App;