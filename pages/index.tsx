import Head from "next/head";
import Typewriter from "typewriter-effect";
import React, { useEffect } from "react";
import styles from "../styles/home.module.css";

export default function Home() {



  function delayedMessage() {
    setOutput("");
    const timeoutID = setTimeout(setOutput, 2 * 1000, "That was really slow!");
  }

  return (
    <React.Fragment>
      <Head>
        <title>Julien Hulot | Développeur Junior</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.home}>
          <span style={{ fontWeight: "500" }}>Bonjour,</span>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .start()
                .changeDelay(100)
                .pauseFor(1500)
                .typeString("Je m'appelle <strong>Julien</strong>.")
                .pauseFor(1500)
                // .deleteChars(17)
                .deleteAll()
                .typeString("Je suis <strong>Développeur Web</strong> Junior.")
                .pauseFor(1500)
                .deleteAll()
                .typeString(
                  "<strong>Ci-dessous</strong>, mon <strong>CV</strong>."
                )
                .pauseFor(1500)
                .deleteAll()
                .typeString("<strong>Bonne Visite</strong> ...")
                .pauseFor(4500)
                .stop()
                .pauseFor(1500)
                .start();
            }}
          />
          {/* <span style={{ fontWeight: "500" }}>Bonne Visite ...</span> */}

          <div id="output">
            <div className="cv">
              <a href="#" download>
                <span>Télécharger</span>
                <span>CV</span>
              </a>
            </div>
          </div>
        </div>

        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </main>
    </React.Fragment>
  );
}
function setOutput(arg0: string) {
  throw new Error("Function not implemented.");
}
