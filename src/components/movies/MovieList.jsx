import React, { useContext } from 'react'
import MovieItem from './MovieItem'
import Spinner from '../layout/Spinner'
import MovieNotFound from './MovieNotFound'
import MovieContext from '../../context/movie/context'

const MovieList = () => {
  const { loading, movies } = useContext(MovieContext)

  if (loading) {
    return <Spinner />
  } else if (movies.length === 0) {
    return <MovieNotFound />
  } else {
    return (
      <div style={userStyle}>
        {movies &&
          movies.map(movie => <MovieItem key={movie.imdbID} movie={movie} />)}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default MovieList
