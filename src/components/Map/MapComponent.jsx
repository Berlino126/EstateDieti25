import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useState } from "react";
import "./MapComponent.scss";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "8px",
};

const center = { lat: 51.5074, lng: -0.1278 };

const MapComponent = ({ items }) => {
  console.log(items);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAAjvaziPhKPzbFfhXEmtsdVUuIV5dmm9Y"
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  if (loadError) return <div>Errore nel caricamento della mappa</div>;
  if (!isLoaded) return <div>Caricamento...</div>;

  return (
    <div className="mapWrapper">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        {items.map((item, index) => (
          <Marker
            key={item.id}
            position={{ lat: item.lat, lng: item.lng }}
            onClick={() => setSelectedMarker(item)}
          />
        ))}
                {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div className="infoWindow">
              <h3>{selectedMarker.title}</h3>
              <p>{selectedMarker.price}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
