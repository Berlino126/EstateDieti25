import React, { useState } from 'react';
import './DeepSearch.scss';


function DeepSearch({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="deep-search-overlay">
      <div className="deep-search-dialog">
        <h2>
          Ricerca Avanzata <b>Immobili</b>
        </h2>
        <div className="input-group">
          <label htmlFor="numLocals">Numero di Locali</label>
          <input type="number" id="numLocals" placeholder="Numero di Locali" />
        </div>

        <div className="input-group">
          <label htmlFor="numBathrooms">Numero di Bagni</label>
          <input type="number" id="numBathrooms" placeholder="Numero di Bagni" />
        </div>

        <div className="input-group">
          <label htmlFor="floor">Piano</label>
          <select id="floor">
            <option value="terra">Terra</option>
            <option value="intermedio">Intermedio</option>
            <option value="ultimo">Ultimo</option>
          </select>
        </div>
        
        <label className="caratteristiche">Altre caratteristiche</label>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" />
            <i className="fa fa-sun"></i> Terrazzo
          </label>
          <label>
            <input type="checkbox" />
            <i className="fa fa-window-maximize"></i> Balcone
          </label>
          <label>
            <input type="checkbox" />
            <i className="fa fa-elevator"></i> Ascensore
          </label>
          <label>
            <input type="checkbox" />
            <i className="fa fa-couch"></i> Arredamento
          </label>
          <label>
            <input type="checkbox" />
            <i className="fa fa-cogs"></i> Cantina
          </label>
          <label>
            <input type="checkbox" />
            <i className="fa fa-swimming-pool"></i> Piscina
          </label>
          <label>
            <input type="checkbox" />
            <i className="fa fa-leaf"></i> Giardino
          </label>
          <label>
            <input type="checkbox" />
            <i className="fa fa-car"></i> Garage
          </label>
          <label>
            <input type="checkbox" />
            <i className="fa fa-snowflake"></i> Climatizzazione
          </label>
        </div>

        <div className="input-group">
          <label htmlFor="heating">Tipo di Riscaldamento</label>
          <select id="heating">
            <option value="centralizzato">Centralizzato</option>
            <option value="autonomo">Autonomo</option>
            <option value="inverter">Inverter</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="energyClass">Classe Energetica</label>
          <select id="energyClass">
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
          </select>
        </div>

        <div className="buttons">
          <div className="bottom">
            <button type="button">Ricerca</button>
          </div>
          <div className="bottom">
            <button type="button" onClick={onClose}>Chiudi</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeepSearch;
