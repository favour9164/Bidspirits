import { useEffect, useRef, useState } from "react";
import "./ticker.css";

export default function Ticker() {
  const [now, setNow] = useState(new Date());
  const [coords, setCoords] = useState(null); 
  const [place, setPlace] = useState(null); 
  const [geoError, setGeoError] = useState(null);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  const tickerRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setGeoError("Geolocation not supported");
      return;
    }

    const onSuccess = (pos) => {
      const { latitude: lat, longitude: lon } = pos.coords;
      setCoords({ lat, lon });
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;

      fetch(url, {
        headers: {
          "Accept": "application/json",
        },
      })
        .then((r) => {
          if (!r.ok) throw new Error("Reverse geocode failed");
          return r.json();
        })
        .then((data) => {
        if (data && data.address) {
            const addr = data.address;

            const city =
            addr.city ||
            addr.town ||
            addr.village ||
            addr.hamlet ||
            addr.suburb ||
            addr.locality;

            const state = addr.state || addr.region || addr.county;
            const country = addr.country;

            const formatted = [
            city ? city : null,
            state ? state : null,
            country ? country : null,
            ]
            .filter(Boolean)
            .join(", ");

            setPlace(formatted || "Unknown location");
        } else {
            setPlace(`Lat ${lat.toFixed(3)}, Lon ${lon.toFixed(3)}`);
        }
        })

    };

    const onError = (err) => {
      setGeoError(err.message || "Unable to get location");
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: false,
      timeout: 8000,
      maximumAge: 60 * 60 * 1000,
    });
  }, []);


  const dateStr = now.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const timeStr = now.toLocaleTimeString(undefined, { hour12: false });


  const locationText = place
    ? place
    : coords
    ? `Lat ${coords.lat.toFixed(3)}, Lon ${coords.lon.toFixed(3)}`
    : geoError
    ? `Location: ${geoError}`
    : "Location: fetching...";

  const tickerText = `Date: ${dateStr}  •  Time: ${timeStr} (${timeZone})  •  Location: ${locationText}  `;

  return (
    <div className="ticker-wrap" aria-live="polite">
      <div
        className="ticker"
        ref={tickerRef}
        title="Current date, time and location (hover to pause)"
      >

        <div className="ticker-content">{tickerText}</div>
        <div className="ticker-content">{tickerText}</div>
      </div>
    </div>
  );
}
