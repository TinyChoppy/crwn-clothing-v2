import ProductCard from "../product-card/product-card-component";
import { useNavigate } from "react-router-dom";
import "./category-preview-style.scss";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const handleCategory = ()=> {
    navigate(title)
  }
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={handleCategory}>{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
