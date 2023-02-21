import ProductCard from "../product-card/product-card-component";
import { useNavigate } from "react-router-dom";
import {CategoryPreviewContainer, Preview, Title} from "./category-preview-style";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const handleCategory = ()=> {
    navigate(title)
  }
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title onClick={handleCategory}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
