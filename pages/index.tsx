import Head from "next/head";

import styles from "@/styles/Home.module.css";
import {
  BackgroundImage1,
  BackgroundImage2,
  GradientBackgroundCon,
} from "@/components/QuoteGenerator/QuoteGeneratorElement";

import Cloud1 from "@/assets/cloud-and-thunder.png";
import Cloud2 from "@/assets/cloudy-weather.png";
export default function Home() {
  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="A quote generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Background */}
      <GradientBackgroundCon>
        <BackgroundImage1
          src={Cloud1}
          height="300"
          alt="Cloudy Backgroud"
        ></BackgroundImage1>
        <BackgroundImage2
          src={Cloud2}
          height="300"
          alt="Cloudy Backgroud"
        ></BackgroundImage2>
        <main className={`${styles.main}`}>
          <div>Hello world</div>
        </main>
      </GradientBackgroundCon>
    </>
  );
}
