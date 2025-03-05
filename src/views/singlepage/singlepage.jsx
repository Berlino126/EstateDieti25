import Slider from "../../components/slider/slider";
import "./singlepage.scss";
import { singlePostData, userData } from "../../lib/dummydata";
import MapComponent from "../../components/Map/MapComponent";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import axios from 'axios';
import { Link  } from "react-router";
  // Funzione per tradurre il tipo di contratto
  const translateContract = (contract) => {
    switch (contract) {
      case "buy":
        return "Acquisto";
      case "rent":
        return "Affitto";
      default:
        return contract;
    }
  };

  // Funzione per tradurre il tipo di edificio
  const translateType = (type) => {
    switch (type) {
      case "apartment":
        return "Appartamento";
      case "house":
        return "Indipendente";
      case "condo":
        return "Condominio";
      case "land":
        return "Terreno";
      default:
        return type;
    }
  };

const PropertyFeatures = ({ details }) => {
  const features = [
    { key: "elevator", label: "Ascensore", iconClass: "fa fa-elevator" },
    { key: "terrace", label: "Terrazza", iconClass: "fa fa-sun" },
    { key: "balcony", label: "Balcone", iconClass: "fa fa-window-maximize" },
    { key: "furnished", label: "Arredato", iconClass: "fa fa-couch" },
    { key: "cellar", label: "Cantina", iconClass: "fa fa-cogs" },
    { key: "pool", label: "Piscina", iconClass: "fa fa-swimming-pool" },
    { key: "garden", label: "Giardino", iconClass: "fa fa-leaf" },
    { key: "garage", label: "Garage", iconClass: "fa fa-car" },
    {
      key: "airConditioning",
      label: "Aria condizionata",
      iconClass: "fa fa-snowflake",
    },
    {
      key: "heatingType",
      label: `Riscaldamento: ${details.heatingType}`,
      iconClass: "fa fa-fire",
    },
  ];

  return (
    <div className="featuresContainer">
      {features.map((feature) =>
        details[feature.key] ? (
          <div className="caratteristica" key={feature.key}>
            <div className="icon">
              <i className={feature.iconClass}></i>
            </div>
            <div className="carText">
              <span>{feature.label}</span>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};


function SinglePage() {
  const property = useLoaderData();
  const { currentUser } = useContext(AuthContext); 
  console.log(property.agency);
  const [error, setError] = useState("");
  const navigate = useNavigate();



  const handleDelete = async () => {
    const confirmDelete = window.confirm("Sei sicuro di voler eliminare questo immobile?");
    const città = property.city; 
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8800/api/property/${property.id}`, {
          withCredentials: true 
        });
        navigate(`/list?city=${città}`);
      } catch (error) {
        setError(error.response?.data?.message || "Errore durante la cancellazione");
      }
    }
  };
  
  return (
    <div className="singlepage">
      <div className="caratteristiche">
        <div className="wrapper">
          <p className="title">Informazioni generali</p>
          <div className="info">
            <PropertyFeatures details={property.propertyDetails} />
          </div>
          <div className="info2">
            <p className="title">Dimensioni</p>
            <div className="dimensioni">
              <div className="size">
                <img src="/size.png" alt="" />
                <span>{property.propertyDetails.size}m²</span>
              </div>
              <div className="size">
                <img src="/bed.png" alt="" />
                <span>{property.rooms} Camere</span>
              </div>
              <div className="size">
                <img src="/bath.png" alt="" />
                <span>{property.bathroom} Bagni</span>
              </div>
            </div>
          </div>
          <div className="location">
            <p className="title">Location</p>
            <div className="mapContainer">
              <MapComponent items={[property]} />
            </div>
            <button>
              <img src="/save.png" alt="" />
              Salva casa
            </button>
          </div>
        </div>
      </div>
      <div className="dettagli">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              
              <div className="post">
                <h1>{property.title}</h1>
                <div className="indirizzo">
                  <img src="/pin.png" alt="" />
                  <span>{property.address}</span>
                </div>
                <div className="price">{property.price}€</div>
              </div>
              <div className="agency">
                <img src={property.agency.avatar || ""} alt="" />
                <span>{property.agency.name || ""}</span>
              </div>
            </div>
            <div className="bottom">
              <div className="desc">{property.propertyDetails.description}</div>
              <div className="general">
                {[
                  {
                    icon: "fa-file",
                    text: `Tipologia di vendita: ${translateContract(
                      property.contract
                    )}`,
                  },
                  {
                    icon: "fa-house",
                    text: `Tipologia edificio: ${translateType(property.type)}`,
                  },
                  {
                    icon: "fa-stairs",
                    text: `${property.propertyDetails.floor}`,
                  },
                  {
                    icon: "fa-bolt",
                    text: `Classe energetica: ${property.propertyDetails.energyClass}`,
                  },
                ].map((item, index) => (
                  <div key={index} className="caratteristica">
                    <div className="icon">
                      <i className={`fa ${item.icon}`}></i>
                    </div>
                    <div className="carText">
                      <span>{item.text}</span>
                    </div>
                  </div>
                ))}
                {currentUser.id === property.agentId && (
                <div className="editDeleteButtons">
                  <Link to={`/edit-properties?${property.id}`} state={property}>
                  <i className=" fa fa-edit"></i>
                  </Link>
                    <i className=" fa fa-trash" onClick={handleDelete}></i>
                </div>
              )}
              </div>
 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
