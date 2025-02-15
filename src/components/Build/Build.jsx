import { Link } from "react-router";
import "./Build.scss";
function Build({ item }) {
  return (
    <div className="build">
      <Link to={`/${item.id}`}className="imgContainer">
      <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
      <p className="prezzo">€{item.price}</p>
        <h2 className="title"><Link to={`/${item.id}`}>{item.title}</Link></h2>
        <p className="subtitle">Lorem Ipsum</p>
        <p className="indirizzo">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <div className="bottom">
          <div className="caratteristiche">
          <div className="caratteristica">
            <img src="/bed.png" alt="" />
            <span>{item.bedroom}</span>
          </div>
          <div className="caratteristica">
            <img src="/bath.png" alt="" />
            <span>{item.bathroom}</span>
          </div>
          </div>
          <div className="icona">
            <img src="/save.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Build;
