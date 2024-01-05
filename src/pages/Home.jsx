import RestaurantCard from "../component/RestaurantCard";
import { swiggy } from "../data/swiggy";
import BannerList from "../component/BannerList";
import { filterData, filtertop } from "../utils/filteredData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Home = () => {
  const [show , setShow]=useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    const restaurant =
      swiggy?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurant(restaurant || []);
    setFilteredRestaurant(restaurant);
  }, []);

  return (
    <>
      <section>
        <div className="container-max my-8">
          {/* <BofferCard /> */}
          <BannerList banners={swiggy?.data?.cards[0]} />
          <div className="my-16">
            <h1 className="font-bold my-6 text-2xl text-zinc-700">
              Restaurants with online food delivery in Delhi
            </h1>

            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Restaurant..."
              />
              <button
                onClick={() => {
                  const data = filterData(searchText, allRestaurant);
                  setFilteredRestaurant(data);
                }}
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>

            <div className="py-5 flex bg-pink-50 my-1">
             
              <div className="">
                <button
                 className="text-white mx-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    const topData = filtertop(allRestaurant);
                    setFilteredRestaurant(topData);
                    setShow(!show)
                  }}
                >
                  Top Rating Restaurants
                </button>

                {show && <button
                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    setFilteredRestaurant(allRestaurant);
                    setShow(!show)
                  }}
                >
                  All Restaurants
                </button>}
              </div>
            </div>

            <div class="flex flex-wrap -mx-4">
              {filteredRestaurant.length === 0 && searchText === "" ? (
                allRestaurant.map((restaurant) => (
                  <Link
                    key={restaurant?.info.id}
                    to={`/restaurant/${restaurant?.info.id}`}
                  >
                    <RestaurantCard {...restaurant?.info} />
                  </Link>
                ))
              ) : filteredRestaurant.length === 0 ? (
                <h1>No data match your filter</h1>
              ) : (
                filteredRestaurant.map((restaurant) => (
                  <Link
                    key={restaurant?.info.id}
                    to={`/restaurant/${restaurant?.info.id}`}
                  >
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
