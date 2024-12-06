//import { io } from "socket.io-client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";
import { useEffect, useState } from "react";

/*
const socket = io("http://localhost:3000", {
  autoConnect: false,
});
*/

// custom icons for start and stops:
const startIcon = new L.icon({
  iconUrl: "../assets/start-icon.png",
  iconSize: [50, 50], // Size of the icon
  iconAnchor: [25, 50], // Anchor point of the icon
  popupAnchor: [0, -50], // Position of the popup relative to the icon
});

const stopIcon = new L.icon({
  iconUrl: "../assets/stop-icon.png",
  iconSize: [50, 50], // Size of the icon
  iconAnchor: [25, 50], // Anchor point of the icon
  popupAnchor: [0, -50], // Position of the popup relative to the icon
});

export default function App() {
  /*
  navigator.geolocation.watchPosition((pos) => {
    console.log(pos.coords);
  });
  */
  const [routes, setRoutes] = useState(null);
  const [repeatedLocations, setRepeatedLocations] = useState({});

  async function requestServer() {
    const response = await fetch("http://localhost:3000/api/routes");
    const json = await response.json();
    // set the bus data
    setRoutes(json.routes);
  }

  //console.log(routes);

  // request the server (only once)
  useEffect(() => {
    requestServer();
  }, []);

  return (
    <div>
      <MapContainer
        center={[24.8081, 66.9893]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {routes &&
          routes.map((route, index) => {
            // this is the actual bus data (bData)
            const { start_location, end_location, start, end } = route;
            return (
              <div>
                <Marker
                  icon={startIcon}
                  position={[start_location.latitude, end_location.longitude]}
                >
                  <Popup>{start}</Popup>
                </Marker>
                <Marker
                  icon={stopIcon}
                  position={[end_location.latitude, end_location.longitude]}
                >
                  <Popup>{end}</Popup>
                </Marker>
              </div>
            );
          })}
      </MapContainer>
    </div>
  );
}
