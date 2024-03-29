import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../styles/header.module.css";

import devLogo from "../public/assets/img/dev.png";


const routes = [
  {
    name: "Accueil",
    route: "/",
  },
  {
    name: "Présentation",
    route: "/about",
  },
  {
    name: "Projets",
    route: "/projets",
  },
  {
    name: "Contact",
    route: "/contact",
  },
  
];

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [theme, setTheme] = React.useState("");
  const [themeImage, setThemeImage] = React.useState(
    "/assets/themes-icons/dark.png"
  );

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("user-theme");

    if (savedTheme === "light") {
      return setLightTheme();
    }

    localStorage.setItem("user-theme", "dark");
    setDarkTheme();
  }, []);

  React.useEffect(() => {
    if (theme) {
      localStorage.setItem("user-theme", theme);
    }
  }, [theme]);

  function changeTheme() {
    const savedTheme = getSavedTheme();

    if (savedTheme === "dark") {
      setLightTheme();
    }

    if (savedTheme === "light") {
      setDarkTheme();
    }
  }

  function getSavedTheme() {
    return localStorage.getItem("user-theme");
  }

  function setLightTheme() {
    const docStyle = document.documentElement.style;

    docStyle.setProperty("--main-text-color", "#050505");
    docStyle.setProperty("--main-background-color", "#f5f5f5");
    docStyle.setProperty("--card-text-color", "#222");
    docStyle.setProperty("--card-background-color", "#ccc");

    setThemeImage("/assets/themes-icons/light.png");
    setTheme("light");
  }

  function setDarkTheme() {
    const docStyle = document.documentElement.style;

    docStyle.setProperty("--main-text-color", "#f5f5f5");
    docStyle.setProperty("--main-background-color", "#001");
    docStyle.setProperty("--card-text-color", "#f5f5f5");
    docStyle.setProperty("--card-background-color", "#252525");

    setThemeImage("/assets/themes-icons/dark.png");
    setTheme("dark");
  }

 

  return (
    <header>
      <div className={styles.header} >
        <span>
          Julien Hulot
        </span>
        <nav>
          <ul>
            {routes.map(({ name, route }) => (
              <li key={name}>
                <Link
                  href={route}
                  className={currentRoute === `${route}` ? "active" : ""}
                  
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.themeImage}>
          {/* <span>Thème</span> */}
          <Image
            onClick={changeTheme}
            src={themeImage}
            alt="Tema"
            width={48}
            height={48}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
