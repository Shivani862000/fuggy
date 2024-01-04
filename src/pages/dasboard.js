import { BofferCard } from "../component/BfyCards";
import RestaurantCard from "../component/RestaurantCard";
import { swiggy } from "../data/swiggy";
import BannerList from "../component/BannerList";
import { filterData } from "../utils/filteredData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Dashboard = () => {
  const [searchText, setSearchText] = useState("");
  const [filterdRestaurant, setFilterdRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    const restaurant = swiggy?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setAllRestaurant(restaurant || []);
    setFilterdRestaurant(restaurant)
  }, []);

  console.log(allRestaurant)
  return (
    <>
      <section>
        <div className="container-max ">
          <BofferCard />
          <BannerList banners={swiggy?.data?.cards[0]} />
          <div className="my-16">
            <h1 className="font-bold text-2xl text-zinc-700">
              Restaurants with online food delivery in Delhi
            </h1>
            <div className="p-5 bg-pink-50 my-1">
              <input
                type="text"
                className="Search-input"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />

              <button
                className="p-3 m-2 bg-purple-600 text-white rounded-lg hover:bg-green-800"
                onClick={() => {
                  const data = filterData(searchText, allRestaurant);
                  setFilterdRestaurant(data);
                }}
              >
                Search
              </button>
            </div>

            <div class="flex flex-wrap -mx-4">
              {filterdRestaurant.length === 0 ? (
                <h1>No data match your filter</h1>
              ) : (
                filterdRestaurant.map((restaurant) => (
                  <Link key={restaurant?.info.id} to={`/restaurant/${restaurant?.info.id}`}>
                    <RestaurantCard {...restaurant?.info} />
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
