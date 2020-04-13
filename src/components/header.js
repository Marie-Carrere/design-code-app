import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="Header">
      <div className="HeaderGroup">
        <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" alt=""/></Link>
        <Link to="/courses">Courses</Link>
        <Link to="/download">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/buy"><button>Buy</button></Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
