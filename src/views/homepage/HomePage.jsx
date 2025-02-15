import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.scss"
import { useEffect } from "react";
function HomePage(){
    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                <h1 className="title">DietiEstate25 </h1>
                <h2>Inizia a cercare la casa dei tuoi sogni</h2>
                <SearchBar/>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/homepng.jpg" alt="" />
            </div>
            <div className="riepmimento"></div>
        </div>
    );
}
export default HomePage