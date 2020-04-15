import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "../styles/Header.css"

const Header = ({ siteTitle }) => {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    
    if (scrollTop > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  
  return(
    <header>
      <div className={scrolled ? 'Header HeaderScrolled' : 'Header'} >
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" alt="" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/download">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
