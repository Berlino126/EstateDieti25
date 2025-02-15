import { useState } from "react";
import "./SearchBar.scss";

const type = ["Compra", "Affitta"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "Compra",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {type.map((t) => (
          <button
            key={t}
            onClick={() => switchType(t)}
            className={query.type === t ? "active" : ""}
          >
            {t}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="Città" />
        <input type="number" name="minPrice" min={0} max={1000000000} placeholder="Prezzo Minimo" />
        <input type="number" name="maxPrice" min={0} max={1000000000} placeholder="Prezzo Massimo" />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
