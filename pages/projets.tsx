import Head from "next/head";
import React from "react";
import Header from "../components/Header";
// import ProjetoCard from "../components/projets/ProjetCard";

const Projets = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Julien Hulot | Projets</title>
        <meta name="description" content="Projetos desenvolvidos por mim." />
      </Head>
  
      <main className="animeLeft">
        <div>
          {/* <ProjetoCard /> */}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Projets;
