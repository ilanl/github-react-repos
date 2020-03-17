import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MovieItem = ({ movie: { Title, Year, imdbID, Poster } }) => {
  return (
    <div className='card text-center'>
      <img src={Poster} alt='' className='poster-img poster-s' />
      <h4>
        {Title} ({Year})
      </h4>
      <Link to={`/movies/${imdbID}`} className='btn btn-dark btn-sm my-1'>
        More
      </Link>
    </div>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired
  }).isRequired
}

export default MovieItem
