import Slider from "../../components/slider/slider";
import "./singlepage.scss";
import { singlePostData, userData } from "../../lib/dummydata";
import MapComponent from "../../components/Map/MapComponent";

function SinglePage() {
  return (
    <div className="singlepage">
      <div className="caratteristiche">
        <div className="wrapper">
          <p className="title">Informazioni generali</p>
          <div className="info">
            <div className="caratteristica">
              <img src="/utility.png" alt="" />
              <div className="carText">
                <span>Utilities</span>
                <p>Lorem ipsum</p>
              </div>
            </div>
            <div className="caratteristica">
              <img src="/utility.png" alt="" />
              <div className="carText">
                <span>Utilities</span>
                <p>Lorem ipsum</p>
              </div>
            </div>
            <div className="caratteristica">
              <img src="/utility.png" alt="" />
              <div className="carText">
                <span>Utilities</span>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
          <div className="info2">
          <p className="title">
            Dimensioni
          </p>
          <div className="dimensioni">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80m</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>3 Camere da letto</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>2 Bagni</span>
            </div>
            </div> 
            </div>
        
          <div className="location">
          <p className="title">Location</p>
          <div className="mapContainer">
            
            <MapComponent items={[singlePostData]}/>
          </div>
          <button> <img src="/save.png" alt="" />Salva casa</button>
        </div>
        </div>
      </div>
      <div className="dettagli">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <h2>Lorem Ipsum</h2>
                <div className="indirizzo">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">{singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SinglePage;
