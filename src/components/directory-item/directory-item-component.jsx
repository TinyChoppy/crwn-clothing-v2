import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item-style";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();
  const handleCategory = () => {
    navigate(`shop/${title}`);
  };

  return (
    <DirectoryItemContainer onClick={handleCategory}>
      <BackgroundImage imgUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
