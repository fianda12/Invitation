import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"

const Location = () => {
  const location = { lat: -2.1258427253217205, lng: 106.11472539899044, name: "Swiss-BelHotel" };

  return (
      <div className="card w-full max-w-[1143px] mx-auto bg-white shadow-xl px-6 py-10 md:py-16 lg:py-20">
    <div className="map-container">
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution="Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>{location.name}</Popup>
        </Marker>
      </MapContainer>
      </div>
      <p className="text-center text-gray-700">Jl. Jendral Sudirman No.65, Gedung Nasional, Kec. Taman Sari, Kota Pangkal Pinang, Kepulauan Bangka Belitung 33128</p>
    </div>
  );
};

export default Location;
