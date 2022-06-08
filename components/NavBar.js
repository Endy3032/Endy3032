import React from "react"
import { FaBars } from "react-icons/fa"
import styles from "./NavBar.module.css"

export default function NavBar() {
  var switched = false

  React.useEffect(() => {
    window.addEventListener('resize', () => responsiveMenu(window))
  })

  function responsiveMenu(window) {
    let menu = document.querySelector(`.${styles.navBox}`)
    window.innerWidth > 640 && Object.values(menu.classList).includes(styles.open) ? menu.classList.toggle(styles.open) : null
    // Switch between being selectable/unselectable
    menu.childNodes.forEach(node => {
      if (window.innerWidth < 640) {
        node.tabIndex = -1
        node.setAttribute("responsive", "yes")
      } else {
        node.tabIndex = 0
        node.setAttribute("responsive", "no")
      }
    })
  }

  function toggleMenu(obj) {
    let menu = document.querySelector(`.${styles.navBox}`)
    if (obj !== undefined) {
      if (Object.values(obj.target.classList).includes("fa") || Object.values(obj.target.classList).includes(styles.menu) || obj.target.getAttribute("responsive") == "yes") {
        menu.classList.toggle(styles.open)
        menu.childNodes.forEach(node => {
          // Switch between being selectable/unselectable
          node.tabIndex = -!Boolean(node.tabIndex)
        })
      }
    }
  }

  return (
    <div className={styles["nav-wrapper"]}>
      <nav className={styles.navbar}>
        <a key="title" href="#home" id="title" className={styles.title}>Endy3032</a>
        <ul className={styles.navBox}>
          {["home", "about", "socials"].map(site => (
            <a key={site} href={`#${site}`} id={site} className={styles.navLink} tabIndex="0" onClick={toggleMenu}>/{site}</a>
          ))}
        </ul>
        <FaBars className={styles.menu} onClick={toggleMenu}/>
      </nav>
    </div>
  )
}