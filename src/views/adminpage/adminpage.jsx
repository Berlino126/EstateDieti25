import { AuthContext } from "../../context/AuthContext";
import "./adminpage.scss"
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AdminPage(){
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate(); 
    useEffect(() => {
        if (!currentUser || currentUser.userInfo.role !== "admin") {
            navigate("/");
        }
    }, [currentUser, navigate]); 

    return (
        <div className="adminpage">Pagina di amministrazione</div>
    );
}

export default AdminPage;
