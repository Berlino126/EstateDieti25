import { useState, useEffect } from "react";
import "./ListPage.scss";
import Build from "../../components/Build/Build";
import Filter from "../../components/Filter/Filter";
import MapComponent from "../../components/Map/MapComponent";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "react-router";

function ListPage() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [searchParams] = useSearchParams();
  const query = searchParams.toString();
  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 768;
      setIsSmallScreen(smallScreen);
      if (!smallScreen) {
        setIsMapOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchProperties = async ({ pageParam = 1, queryKey }) => {
    const [, filters] = queryKey; // Estrai i filtri dalla queryKey
    const res = await axios.get(`http://localhost:8800/api/property?page=${pageParam}&${filters}`);
    console.log(res.data);
    return res.data;
  };
  
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch, // Aggiungi refetch
  } = useInfiniteQuery({
    queryKey: ["properties", query],
    queryFn: ({ pageParam }) => fetchProperties({ pageParam, queryKey: ["properties", query] }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === 10 ? pages.length + 1 : undefined;
    },
  });
  
  useEffect(() => {
    refetch(); 
  }, [query, refetch]);
  

  return (
    <div className={`listPage ${isMapOpen ? "mapOpen" : ""}`}>
      {isSmallScreen && (
        <button className="toggleMapButton" onClick={() => setIsMapOpen(!isMapOpen)}>
          {isMapOpen ? "Chiudi Mappa" : "Apri Mappa"}
        </button>
      )}

      <div className={`mapContainer ${isMapOpen ? "fullMap" : "closeMap"}`}>
        <MapComponent items={data?.pages.flat() || []} />
      </div>

      {!isMapOpen && (
        <div className="listContainer">
          <div className="wrapper">
            <Filter />
            {data?.pages.flat().map((item) => (
              <Build key={item.id} item={item} />
            ))}
            {/* Pulsante per caricare più immobili */}
            {hasNextPage && (
              <button className="loadMoreButton" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
                {isFetchingNextPage ? "Caricamento..." : "Carica altri immobili"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListPage;
