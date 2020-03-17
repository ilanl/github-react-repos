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
      <img src={Poster} alt={Poster} />
    ) : (
      <h4>There is no poster available for this film</h4>
    )

  const plot = Plot !== 'N/A' ? Plot : ''

  const genres =
    Genre &&
    Genre.split(',').map(genre => (
      <span key={genre} className='movie-tag'>
        {genre}
      </span>
    ))

  return (
    <Fragment>
      <div>
        <div className='row'>
          <div className='s12'>
            <Link to='/' className='btn btn-light'>
              Back
            </Link>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <h1>{Title}</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 center-align poster-l'>{poster}</div>
          <div className='col-6'>
            <ul className='collection'>
              <li>
                <span className='red-text'>Released:</span> {Released}
              </li>

              {Genre && (
                <li>
                  <span className='red-text'>Genre:</span> {genres}
                </li>
              )}

              <li>
                <span className='red-text'>Rating:</span> {Rated}
              </li>
              <li>
                <span className='red-text'>Length:</span> {Runtime}
              </li>
              <li>
                <span className='red-text'>Director(s):</span> {Director}
              </li>
              <li>
                <span className='red-text'>Actors:</span> {Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <p>{plot}</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default MoviePage
