import React from "react"
import { Link } from "react-scroll"
import classes from "./header.module.css"
import "../App.css"
import logo from "../images/logo.png"

const Header = () => {
  //   const handleClick = () => setClick(false)
  return (
    <section>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.navItems}>
          <div>
            <ul>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li>Home</li>
              </Link>
              <Link
                to="mission"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li>Mission</li>
              </Link>
              <Link
                to="perks"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li>Perks</li>
              </Link>
              <Link
                to="learnings"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li>Learnings</li>
              </Link>
              <Link
                to="mentor"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li>Mentor</li>
              </Link>
              <Link
                to="faqs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li>FAQs</li>
              </Link>
            </ul>
          </div>
          <div className={classes.btnDiv}>
            <button className={classes.btn}>Enroll Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
