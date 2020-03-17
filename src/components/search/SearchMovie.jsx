import React, { useState, useContext } from 'react'
import MovieContext from '../../context/movie/context'
import AlertContext from '../../context/alert/context'

const initialText = ''

const SearchMovie = () => {
  const [text, setText] = useState(initialText)
  const { searchMovies, clearMovies, movies } = useContext(MovieContext)
  const { showAlert } = useContext(AlertContext)

  const onSubmit = async e => {
    e.preventDefault()
    if (text === '') {
      showAlert('Please enter something', 'light')
    } else {
      searchMovies(text)
      setText(initialText)
    }
  }

  const onClear = () => {
    setText(initialText)
    clearMovies()
  }

  return (
    <div>
      <form className='form' onSubmit={onSubmit} onReset={onClear}>
        <input
          type='text'
          name='text'
          placeholder='enter movie, series, episode name'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type='submit' className='btn-search btn btn-dark btn-block'>
          Search
        </button>
        {movies && movies.length > 0 && (
          <button
            type='button'
            onClick={onClear}
            className='btn-clear btn btn-light btn-block'
          >
            Clear
          </button>
        )}
      </form>
    </div>
  )
}

export default SearchMovie
