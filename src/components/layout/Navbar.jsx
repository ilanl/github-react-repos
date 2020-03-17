import React from 'react'
import PropTypes from 'prop-types'

import WeatherIndicator from '../weather/WeatherIndicator'

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} style={{ marginRight: '5px' }} />
        {title}
      </h1>
      <WeatherIndicator />
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Movie Finder',
  icon: 'fab fa-chromecast'
}

export default Navbar
