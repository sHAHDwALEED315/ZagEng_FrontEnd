import { Link } from "react-router-dom";

const Card = ({id,title,category,price,image}) => {

  const cardStyle = {  border: "1px solid #ccc", padding: "15px", margin: "30px", width: "250px"  };
  const imagstyle = { width: "240px", height: "100px"};
  return (
    <div style={cardStyle}>
       <img src={image} alt={title} style={imagstyle}/>
       <p>{category}</p>
       <h3>{title}</h3>
       <p>{price} $</p>

       <Link to={`/products/${id}`}>
         <button>View Details</button>
       </Link>
    </div>
  );
};  

export default Card