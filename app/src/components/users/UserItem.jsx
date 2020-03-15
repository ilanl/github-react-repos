import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserItem = ({
  user: { id, login, avatar_url, html_url, blog, hireable, bio, location }
}) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/users/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
    blog: PropTypes.string,
    hireable: PropTypes.bool,
    location: PropTypes.string
  })
}

export default UserItem
