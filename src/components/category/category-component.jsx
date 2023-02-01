import './category-style.scss'

const Category = ({title}) => (
  <div className="category-container">
    <div className="background-image" />
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>Shop now</p>
    </div>
  </div>
);

export default Category