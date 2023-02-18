import { useNavigate } from "react-router-dom";
import "./directory-item-style.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();
  const handleCategory = ()=> {
    navigate(`shop/${title}`);
  }

  return (
    <div className="directory-item-container" onClick={handleCategory}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
