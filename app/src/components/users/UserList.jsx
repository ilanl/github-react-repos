import React from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

const UserList = ({ loading, users }) => {
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {users && users.map(u => <UserItem key={u.id} user={u} />)}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

UserList.defaultProps = {
  loading: false
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool
}

export default UserList
