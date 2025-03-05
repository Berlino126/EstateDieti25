import { useContext, useState, useEffect  } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./changePassword.scss";

function ChangePassword({ isOpen, onClose }) {
  const { currentUser } = useContext(AuthContext);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (newPassword !== confirmPassword) {
      setError("Le nuove password non coincidono.");
      return;
    }

    try {
        console.log(oldPassword);
        console.log(newPassword);
      const response = await axios.put(
        "http://localhost:8800/api/user/changePassword",
        {
          oldPassword,
          newPassword,
        },
        { withCredentials: true }
      );

      if (response.data.success) {
        setSuccessMessage("Password cambiata con successo!");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setTimeout(() => handleClose(), 2000); // Chiude il popup dopo 2 secondi
      } else {
        setError(response.data.message || "Errore nel cambio password.");
      }
    } catch (err) {
      setError("Errore durante il cambio password. Riprova.");
    }
  };
  const handleClose = () => {
    setNewPassword("")
    setOldPassword("")
    setConfirmPassword("")
    setSuccessMessage("")
    setError("")
    // Chiamata alla funzione di chiusura passata come prop
    onClose();
  };
  return (
    <div className="password-overlay">
      <div className="password-dialog">
        <div className="header">
          <h1>Desideri cambiare password?</h1>
          <button className="close-btn" onClick={handleClose}>
            Chiudi
          </button>
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Vecchia password"
              required
            />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Nuova password"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Conferma la nuova password"
              required
            />
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <button className="submit-btn" type="submit">
              Cambia password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
