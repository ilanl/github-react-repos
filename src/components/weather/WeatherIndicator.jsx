import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { usePosition } from '../../hooks/usePosition'
import * as api from '../../api/api.weather'

const WeatherIndicator = ({ watch, settings }) => {
  const [weather, setWeather] = useState(null)

  const { latitude, longitude } = usePosition(watch, settings)

  useEffect(() => {
    if (latitude && longitude) {
      api
        .getWeatherDataByCoords(latitude, longitude)
        .then(({ description, temperature, iconCode }) => {
          setWeather({ description, temperature, iconCode })
        })
        .catch(e => console.log(e))
    }
  }, [latitude, longitude])

  return (
    <ul className='weather-container'>
      {weather && (
        <li>
          <i className={`fas fa-${weather.iconCode} weather-icon`} />
        </li>
      )}
    </ul>
  )
}

WeatherIndicator.propTypes = {
  watch: PropTypes.bool,
  settings: PropTypes.object
}

export default WeatherIndicator
