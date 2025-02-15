import React, { useState } from "react";
import "./Filter.scss";
import DeepSearch from "../deepSearch/DeepSearch";

function Filter() {
  const [isDeepSearchOpen, setIsDeepSearchOpen] = useState(false);

  const openDeepSearch = () => {
    setIsDeepSearchOpen(true);
  };

  const closeDeepSearch = () => {
    setIsDeepSearchOpen(false);
  };

  return (
    <div className="filter">
      <h1>
        Risultati per <b>Napoli</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="Città">Posizione</label>
          <input
            type="text"
            id="città"
            name="città"
            placeholder="Posizione Città"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="Contratto">Contratto</label>
          <select name="Contratto" id="Contratto">
            <option value="Compra">Compra</option>
            <option value="Affitta">Affitta</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="PrezzoMin">Prezzo Minimo</label>
          <input
            type="number"
            id="PrezzoMin"
            name="PrezzoMin"
            placeholder="Da"
          />
        </div>
        <div className="item">
          <label htmlFor="PrezzoMax">Prezzo Massimo</label>
          <input
            type="number"
            id="PrezzoMax"
            name="PrezzoMax"
            placeholder="A"
          />
        </div>
        <button onClick={openDeepSearch}>Ricerca Avanzata</button>
      </div>

      <DeepSearch isOpen={isDeepSearchOpen} onClose={closeDeepSearch} />
    </div>
  );
}

export default Filter;
