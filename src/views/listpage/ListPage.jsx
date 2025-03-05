import { useState, useEffect } from "react";
import "./ListPage.scss";
import { listData } from "../../lib/dummydata";
import Build from "../../components/Build/Build";
import Filter from "../../components/Filter/Filter";
import MapComponent from "../../components/Map/MapComponent";
import { useLoaderData } from "react-router";
import { useInfiniteQuery } from "@tanstack/react-query";
function ListPage() {
  const properties = useLoaderData();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isDeepSearchOpen, setIsDeepSearchOpen] = useState(false); 
  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 768;
      setIsSmallScreen(smallScreen);
      if (!smallScreen) {
        setIsMapOpen(false); // Se lo schermo diventa grande, la mappa torna normale
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openAdminDialog = () => {
    setIsAdminOpen(true);  // Apri la dialog
  };

  const closeAdminDialog = () => {
    setIsAdminOpen(false);  // Chiudi la dialog
  };
  return (
    <div className={`listPage ${isMapOpen ? "mapOpen" : ""}`}>
      {isSmallScreen && (
        <button className="toggleMapButton" onClick={() => setIsMapOpen(!isMapOpen)}>
          {isMapOpen ? "Chiudi Mappa" : "Apri Mappa"}
        </button>
      )}

      <div className={`mapContainer ${isMapOpen ? "fullMap" : "closeMap"}`}>
        <MapComponent items={properties} />
      </div>

      {!isMapOpen && (
        <div className="listContainer">
          <div className="wrapper">
            <Filter />
            {properties.map((item) => (
              <Build key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListPage;
