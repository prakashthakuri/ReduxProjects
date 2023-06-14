import { useDispatch, useSelector } from 'react-redux';






const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  console.log(dispatch(useSelector(product)))

  return (
    <div>
      <img src={imageUrl} alt={`${name}`} />
      <div>
        <div>{name}</div>
        <div>{price}</div>
      </div>
      <button
        buttonType="button"
        onClick={() =>console.log("click")}
      >
        Add to card
      </button>
    </div>
  );
};

export default ProductCard;