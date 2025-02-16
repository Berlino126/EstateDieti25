import "./profilepage.scss";
import List from "../../components/list/list";
import { useNavigate } from "react-router";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
function Profilepage() {
  const { updateUser, currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8800/api/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profilePage">
      <div className="wrapper">
        <div className="title">
          <h1>Informazioni utente</h1>
        </div>
        <div className="info">
          <span>
            Foto Profilo
            <img src={currentUser.userInfo.avatar || "/noavatar.jpg"} alt="" />
          </span>
          <span>Nome utente: {currentUser.userInfo.username}</span>
          <span>Email utente: {currentUser.userInfo.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div className="title">
          <h1>Immobili caricati</h1>
          <button>Aggiungi nuova inserzione</button>
        </div>
        <List />
        <div className="title">
          <h1>Immobili Salvati</h1>
        </div>
        <List />
      </div>
    </div>
  );
}

export default Profilepage;
