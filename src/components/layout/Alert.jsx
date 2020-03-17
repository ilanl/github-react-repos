import React, { useContext } from 'react'
import AlertContext from '../../context/alert/context'

const Alert = () => {
  const { message, color } = useContext(AlertContext)
  return (
    message && (
      <div className={`alert alert-${color}`}>
        <i className='fas fa-info-circle alert-icon' />
        {message}
      </div>
    )
  )
}

export default Alert
