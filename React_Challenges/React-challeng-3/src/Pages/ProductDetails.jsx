import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching data</h2>;

  return (
    <>
      <img src={data.image} width="200" />
      <h2>{data.title}</h2>
      <h3>${data.price}</h3>
      <p>{data.description}</p>
      <button onClick={() => navigate("/products")}>
        Back To Products
      </button>
    </>
  );
};

export default ProductDetails;