import React from 'react'
import PropTypes from 'prop-types'

const MovieNotFound = ({ message }) => {
  return <div className='empty-movie-list'>{message}</div>
}

MovieNotFound.propTypes = {
  message: PropTypes.string.isRequired
}

MovieNotFound.defaultProps = {
  message: 'No matches'
}

export default MovieNotFound
