import React, { Fragment } from 'react'

import SearchMovie from '../search/SearchMovie'
import MovieList from '../movies/MovieList'
import Alert from '../layout/Alert'

const HomePage = () => {
  return (
    <Fragment>
      <Alert />
      <SearchMovie />
      <MovieList />
    </Fragment>
  )
}

export default HomePage
