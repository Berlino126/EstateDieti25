import "./editpropertiespage.scss"
import { AuthContext } from "../../context/AuthContext";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Assicurati di importarlo correttamente

function EditProperties(){
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!currentUser || (currentUser.userInfo.role !== "agent" && currentUser.userInfo.role !== "agency")) {
            navigate("/");
        }
    }, [currentUser, navigate]);
    
    

    return(
        <div className="editpropertiespage">Modifica immobili</div>
    )
}
export default EditProperties;