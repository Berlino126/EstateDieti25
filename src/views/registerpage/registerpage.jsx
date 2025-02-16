import "./registerpage.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
function RegisterPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(username, email, password);
    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
      console.log(res.data);
    } catch (error) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="wrapper">
          <h1>Crea un account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading} className="registrati">Registrati</button>
          <div className="oauth">
            <button className="google">
              <FaGoogle size={20} />
            </button>
            <button className="facebook">
              <FaFacebook size={20} />
            </button>
          </div>
          {error && <span>{err}</span>}
          <Link to="/login" className="loginLink">
            {" "}
            Hai già un account?
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
export default RegisterPage;
