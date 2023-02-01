import "./categories-style.scss";
import Category from "./components/category/category-component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mens",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <Category key={id} title={title} />
      ))}
    </div>
  );
};

export default App;
