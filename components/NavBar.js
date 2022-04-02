import React from "react"
import Head from "next/head"
import styles from "./NavBar.module.css"

export default function NavBar() {
  React.useEffect(() => {
    window.addEventListener('resize', () => responsivemenu(window))
  })

  function responsivemenu(window) {
    let menu = document.querySelector(`.${styles.navBox}`)
    // Switch between being selectable/unselectable
    menu.childNodes.forEach(node => {
      if (window.innerWidth < 640) {
        node.tabIndex = -1
        node.setAttribute("responsive","yes")
      } else {
        node.tabIndex = 0
        node.setAttribute("responsive","no")
      }
    })
  }

  function toggleMenu(obj) {
    let menu = document.querySelector(`.${styles.navBox}`)
    if (obj !== undefined) {
      if (Object.values(obj.target.classList).includes("fa") || Object.values(obj.target.classList).includes(styles.hamburger) || obj.target.getAttribute("responsive") == "yes") {
        menu.classList.toggle(styles.open)
        menu.childNodes.forEach(node => {
          // Switch between being selectable/unselectable
          node.tabIndex = -!Boolean(node.tabIndex)
        })
      }
    }
  }

  return (
    <>
      <Head>
        <title>Endy3032</title>
      </Head>
      <div className={styles["nav-wrapper"]}>
        <nav className={styles.navbar}>
          <a key="title" href="#home" id="title" className={`${styles.navLink} ${styles.title}`}>Endy3032</a>
          <ul className={styles.navBox}>
            {["home", "about", "socials"].map((site) => (
              <a key={site} href={`#${site}`} id={site} className={styles.navLink} tabIndex="0" onClick={toggleMenu}>/{site}</a>
              // <NavLink activeClassName={styles.active} href={site.href}><a className={`navLink ${styles.navLink}`} id={site.href.slice(1)} tabIndex="0" onClick={toggleMenu}>{site.name}</a></NavLink>
            ))}
          </ul>
          <a className={`${styles.hamburger} ${styles.navLink} ${styles.eTransition}`} onClick={toggleMenu}><i className="fa fa-bars"></i></a>
        </nav>
      </div>
    </>
  )
}