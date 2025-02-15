import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router";
function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>DietiEstate25</span>
        </a>
        <a href="/">HomePage</a>
        <a href="/">Compra</a>
        <a href="/">Affitta</a>
        <a href="/">Contatti</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="/menu.png" alt="" />
            <span>John DOe</span>
            <Link to ="/profile" className="profile">Profilo</Link>
          </div>
        ) : (
          <>
            <a href="/" className="aut">
              Accedi
            </a>
            <a href="/" className="aut">
              Registrati
            </a>
          </>
        )}

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">HomePage</a>
          <a href="/">Chi siamo</a>
          <a href="/">Contatti</a>
          <a href="/">Agenti</a>
          <a href="/">Accedi</a>
          <a href="/">Registrati</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
