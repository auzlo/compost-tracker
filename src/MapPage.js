import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import './MapPage.css';

// Fix missing marker icons
L.Icon.Default.mergeOptions({
    iconUrl: '/marker-icon.png',
    shadowUrl: '/marker-shadow.png',
  });

  const iconRed = new L.Icon({
    iconUrl: '/bin-red.png',
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -35]
  });
  
  const iconYellow = new L.Icon({
    iconUrl: '/bin-yellow.png',
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -35]
  });
  
  const iconGreen = new L.Icon({
    iconUrl: '/bin-green.png',
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -35]
  });

function MapPage() {
  const position = [40.7831, -73.9712];
  const navigate = useNavigate();

  return (
    <div className="map-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Homepage
      </button>

      <div className="map-legend">
        <h4>Legend</h4>
        <div><img src="/bin-green.png" alt="Confirmed" /> Confirmed Compost</div>
        <div><img src="/bin-yellow.png" alt="Likely" /> Probably Composting</div>
        <div><img src="/bin-red.png" alt="None" /> No Compost</div>
        </div>


      <MapContainer center={position} zoom={12} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    
        <Marker position={[40.7831, -73.9712]} icon={iconGreen}>
         <Popup>Confirmed Compost - Central Park West</Popup>
        </Marker>

        <Marker position={[40.7755, -73.9520]} icon={iconYellow}>
          <Popup>Probably Composting - East 85th St</Popup>
        </Marker>

        <Marker position={[40.7680, -73.9818]} icon={iconRed}>
         <Popup>No Compost - Columbus Circle</Popup>
        </Marker>

        <Marker position={[40.7306, -73.9866]} icon={iconGreen}>
        <Popup>Confirmed Compost – NYU Stern</Popup>
        </Marker>

        <Marker position={[40.7484, -73.9857]} icon={iconYellow}>
        <Popup>Probably Composting – Empire State Building</Popup>
        </Marker>

        <Marker position={[40.8075, -73.9626]} icon={iconGreen}>
        <Popup>Confirmed Compost – Columbia University</Popup>
        </Marker>

        <Marker position={[40.7624, -73.9738]} icon={iconRed}>
        <Popup>No Compost – Rockefeller Center</Popup>
        </Marker>

        <Marker position={[40.7061, -74.0086]} icon={iconYellow}>
        <Popup>Probably Composting – Wall Street Area</Popup>
        </Marker>


      </MapContainer>
    </div>
  );
}

export default MapPage;
