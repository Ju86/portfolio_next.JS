import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "../styles/contact.module.css";
import linkedinLogo from "../public/assets/logos/linkedin-logo.svg";
import githubLogo from "../public/assets/logos/github-logo.svg";

const Contact = () => {
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");

  function enviarEmail() {
    if (title !== "" && message !== "") {
      window.open(
        `mailto:filipegallodev@hotmail.com?subject=${title}&body=${message}`
      );
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>Julien Hulot | </title>
        <meta name="description" content="Entre em contato comigo." />
      </Head>


      <main className="animeLeft">
        <div className={styles.contact}>
          <h2>Me Contacter</h2>
          <div className={styles.meiosDecontact}>
            <div>
              <h3>Envoyer un message</h3>
              <form className={styles.form} onSubmit={enviarEmail}>
                <div className={styles.title}>
                  <label htmlFor="title">Objet :</label>
                  <input
                    className="title"
                    type="text"
                    id="title"
                    placeholder="Título"
                    required
                    onChange={({ target }) => setTitle(target.value)}
                  />
                </div>
                <div className={styles.title}>
                  <label htmlFor="title">Coordonnées :</label>
                  <input
                    className="title"
                    type="text"
                    id="title"
                    placeholder="Título"
                    required
                    onChange={({ target }) => setTitle(target.value)}
                  />
                </div>
                <div className={styles.message}>
                  <label htmlFor="mensagem">Message:</label>
                  <textarea
                    className="mensagem"
                    id="mensagem"
                    cols={30}
                    rows={10}
                    placeholder="Conteúdo da mensagem..."
                    required
                    onChange={({ target }) => setMessage(target.value)}
                  ></textarea>
                </div>
                <div>
                  <button>Enviar</button>
                </div>
              </form>
            </div>
            <div className={styles.redes}>
              <h3>Mes Réseaux</h3>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/filipegallo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={linkedinLogo} alt="LinkedIn" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/filipegallodev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={githubLogo} alt="GitHub" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Contact;
