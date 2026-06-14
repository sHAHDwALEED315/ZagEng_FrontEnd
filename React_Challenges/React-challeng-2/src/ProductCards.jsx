import Card from "./Card"
import useFetch from "./useFetch";

const ProductCards = () => {
  const productstyle = { display: "flex"};
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