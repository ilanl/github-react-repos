import {useState, useEffect} from "react";

const defaultOptions = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0
};

export const usePosition = (watch = false, settings = defaultOptions) => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({coords, timestamp}) => {
    console.log("got new location", {...coords}, timestamp);
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      timestamp
    });
  };

  const onError = error => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }

    let watcher = null;
    if (watch) {
      watcher = geo.watchPosition(onChange, onError, settings);
    } else {
      geo.getCurrentPosition(onChange, onError, settings);
    }

    return () => watcher && geo.clearWatch(watcher);
  }, [settings, watch]);

  return {...position, error};
};
