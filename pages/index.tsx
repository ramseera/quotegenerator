import Head from "next/head";

import styles from "@/styles/Home.module.css";
import {
  BackgroundImage1,
  BackgroundImage2,
  FooterContainer,
  GradientBackgroundCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorTitle,
  QuoteGeneratorSubTitle,
  GenerateQuoteButton,
  GenerateButtonText,
  QuoteGeneratorCon,
} from "@/components/QuoteGenerator/QuoteGeneratorElement";

import Cloud1 from "@/assets/cloud-and-thunder.png";
import Cloud2 from "@/assets/cloudy-weather.png";
import { useState } from "react";
export default function Home() {
  const [numberOfQuotes, SetNumberOfQuotes] = useState<number>(1);
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
          {/* <QuoteGeneratorModalPopup></QuoteGeneratorModalPopup> */}
          <QuoteGeneratorCon>
            <QuoteGeneratorInnerCon>
              <QuoteGeneratorTitle>
                Daily Inspiration Generator
              </QuoteGeneratorTitle>
              <QuoteGeneratorSubTitle>
                Loooking for splash of inspiration? Generate a Quote card with a
                random inspration quote powerd by ZenQuotes API
              </QuoteGeneratorSubTitle>
              <GenerateQuoteButton>
                <GenerateButtonText onClick={() => {}}>
                  Make a Quote
                </GenerateButtonText>
              </GenerateQuoteButton>
            </QuoteGeneratorInnerCon>
          </QuoteGeneratorCon>
        </main>
        <FooterContainer>
          <>
            Quotes Generated : {numberOfQuotes} <br></br> Developed with ❤️ by
            𒆜🆁🅰🅼𒆜
          </>
        </FooterContainer>
      </GradientBackgroundCon>
    </>
  );
}
