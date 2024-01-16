import ResturantCard from "./ResturantCard";
import restaurantList from "../Utils/mockData";
import { useState } from "../../node_modules/react";
import { filterData } from "../Utils/helper";
const Body = () => {
  const [restaurantListData, setlistOfResturents] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
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

        <input
          data-testid="search-input"
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, restaurantListData);
            // update the state - restaurants
            setlistOfResturents(data);
          }}
        >
          Search
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
