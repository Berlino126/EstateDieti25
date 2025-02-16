import "./loginpage.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
function LoginPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log(username, password);
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", {
        username,
        password,
      });
      updateUser(res.data);
      navigate("/");
      console.log(res.data);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="loginPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="wrapper">
          <h1>Accedi al tuo account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <div className="error"></div>
          <button disabled={isLoading} className="accedi">
            Accedi
          </button>
          <div className="oauth">
            <button className="google">
              <FaGoogle size={20} />
            </button>
            <button className="facebook">
              <FaFacebook size={20} />
            </button>
          </div>
          {error && <span>{error}</span>}
          <Link to="/register" className="registerLink">
            Non hai un account? Registrati
          </Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/homepng.jpg" alt="" />
      </div>
      <div className="riepmimento"></div>
    </div>
  );
}
export default LoginPage;
