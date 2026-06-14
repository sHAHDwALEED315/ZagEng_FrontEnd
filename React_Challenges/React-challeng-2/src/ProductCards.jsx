import Card from "./Card"
import useFetch from "./useFetch";

const ProductCards = () => {

  const productstyle = { display: "flex"};

  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error fetching data</h2>;
  }
  
  return (
    <div style={productstyle}>
      {data.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          category={product.category}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
    );
};
   

export default ProductCards