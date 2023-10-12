import ResturantCard from "./ResturantCard";
import restaurantList from "../Utils/mockData";
import { useState } from "../../node_modules/react";
const Body = () => {
  const [restaurantListData, setlistOfResturents] = useState(restaurantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (resData) => resData.data.avgRating >= 4
            );
            setlistOfResturents(filteredList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="restroContainer">
        {restaurantListData.map((restro) => (
          <ResturantCard key={restro.data.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;
