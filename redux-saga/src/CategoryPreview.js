import ProductCard from './ProductCard';



const CategoryPreview = ({ title, products }) => {
  return (
    <div>
      <h2>
        <h3>{title}</h3>
      </h2>
      <span>
        {products
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </span>
    </div>
  );
};

export default CategoryPreview;