import PropTypes from "prop-types";
import React from 'react'
// rafce

const Header = ({text, bgColor, textColor}) => {

  const headerStyles = {
    background: bgColor,
    color: textColor
  }  


  return (
    <header style={headerStyles}>
        <div className='container' >
            <h2>{text}</h2>
        </div>
    </header>
    
  )
}


Header.defaultProps = {
    text: "My Review app",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ffffff"
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string
}

export default Header