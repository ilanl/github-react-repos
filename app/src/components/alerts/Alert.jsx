import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ message, color }) => {
  return (
    <div className={`alert alert-${color}`}>
      <i className='fas fa-info-circle' />
      {message}
    </div>
  )
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Alert
