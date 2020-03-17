import React, { useContext, useEffect, Fragment } from 'react'
import MovieContext from '../../context/movie/context'

import { useParams, Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'

const MoviePage = () => {
  const { id } = useParams()
  const { movie, loading, getMovieById } = useContext(MovieContext)

  useEffect(() => {
    getMovieById(id)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <Spinner />
  }

  const {
    Title,
    Poster,
    Released,
    Rated,
    Runtime,
    Plot,
    Director,
    Actors,
    Genre
  } = movie

  const poster =
    Poster !== 'N/A' ? (
      <img src={Poster} className='poster-l' alt={Poster} />
    ) : (
      <h4>No poster available</h4>
    )

  const plot = Plot !== 'N/A' ? <p>{Plot}</p> : null

  const genres =
    Genre &&
    Genre.split(',').map(genre => (
      <span key={genre} className='movie-tag'>
        {genre}
      </span>
    ))

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back
      </Link>
      <h1>{Title}</h1>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <div style={{ width: '300px', float: 'left' }}>{poster}</div>
        <div style={{ marginLeft: '310px' }}>
          <ul>
            {Released && (
              <li>
                <span className='movie-field'>Released:</span> {Released}
              </li>
            )}
            {Rated && (
              <li>
                <span className='movie-field'>Rating:</span> {Rated}
              </li>
            )}
            {Runtime && (
              <li>
                <span className='movie-field'>Length:</span> {Runtime}
              </li>
            )}
            {Director && (
              <li>
                <span className='movie-field'>Director(s):</span> {Director}
              </li>
            )}
            {Actors && (
              <li>
                <span className='movie-field'>Actors:</span> {Actors}
              </li>
            )}
            {Genre && (
              <li style={{ paddingTop: '25px' }}>
                <span className='movie-field'>Genre:</span> {genres}
              </li>
            )}
          </ul>
        </div>
      </div>
      <div style={{ width: '100%', overflow: 'hidden' }}>{plot}</div>
    </Fragment>
  )
}

export default MoviePage
