import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useState, useEffect } from "react";
import "./MapComponent.scss";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "8px",
};

const MapComponent = ({ items }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAAjvaziPhKPzbFfhXEmtsdVUuIV5dmm9Y",
  });

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [center, setCenter] = useState(null);

  useEffect(() => {
    if (items.length > 0) {
      setCenter({ lat: items[0].latitude, lng: items[0].longitude });
    }
  }, [items]); // Si aggiorna ogni volta che cambia `items`

  console.log("Mappa centrata su:", center);
  console.log("Elementi ricevuti:", items);

  if (loadError) return <div>Errore nel caricamento della mappa</div>;
  if (!isLoaded || !center) return <div>Caricamento...</div>;

  return (
    <div className="mapWrapper">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        {items.map((item, index) => (
          <Marker
            key={item.id || index}
            position={{ lat: item.latitude, lng: item.longitude }}
            onClick={() => setSelectedMarker(item)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={{
              lat: selectedMarker.latitude,
              lng: selectedMarker.longitude,
            }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div className="infoWindow">
            <img className= "infoImage"src={selectedMarker.images[0]} alt="" />
              <h3 className="infoTitle">{selectedMarker.title}</h3>
              <p className="infoPrice">{selectedMarker.price}€</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
