import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Technologies from "../components/technologies/Technologies";

import styles from "../styles/about.module.css";

const About = () => {

  

  return (
    <React.Fragment>
      <Head>
        <title>Julien Hulot | A Propos</title>
        <meta name="description" content="Sobre mim." />
      </Head>
    
      <main className="animeLeft">
        <div className={styles.sobre}>
          <div className={styles.texto}>
            <h2>Un peu sur moi</h2>
            <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, itaque. Exercitationem delectus ab iusto assumenda labore atque, quae dolor in, facilis molestiae error molestias asperiores vero nostrum qui. Ab, debitis!
            </p>
            <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque vero dignissimos quas! Ipsa veniam officia atque qui odit, iste delectus culpa? Quasi facilis aspernatur animi quod quidem porro ducimus?
            </p>
            <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat iure sint odit, quis beatae animi repudiandae atque sed, maxime illo explicabo aliquid harum eligendi velit tempora optio veritatis! Quas, cumque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dignissimos delectus amet beatae dolorum saepe tenetur minima ipsa! Corrupti aliquam voluptate labore distinctio soluta laboriosam fugiat rem odit exercitationem reiciendis!
            </p>
          </div>
          <div className={styles.verticalLine}></div>
          <div>
            <h2>Technologies</h2>
            <Technologies />
          </div>

        </div>
      </main>
    </React.Fragment>
  );
};

export default About;




