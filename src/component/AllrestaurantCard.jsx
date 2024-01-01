import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
export const AllrestaurantCard = (allRestaurants) => {
  const restaurant = allRestaurants.allRestaurants?.info;
  return (
    <>
      <Link to={`/restaurant/${restaurant?.id}`}>
        <div className="max-w-[200px]">
          <div>
            <img
              src={CDN_URL + restaurant?.cloudinaryImageId}
              alt="restaurant"
              className="relative w-full min-h-[180px] overflow-hidden aspect-video object-cover block rounded-md"
            />
          </div>
          <p>{restaurant?.aggregatedDiscountInfoV3?.header}</p>
          <p>{restaurant?.aggregatedDiscountInfoV3?.subHeader}</p>
          <div>
            <h3>{restaurant?.name}</h3>
            <p>{restaurant?.avgRating}</p>
            <p>{restaurant.slaString}</p>
            <ul className="flex gap-3 flex-wrap">
              {restaurant?.cuisines.map((item) => {
                return (
                  <>
                    <li>{item}</li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
};

export const promotedCard =( AllrestaurantCard)=>{
 return(allRestaurants)=>{
  console.log(allRestaurants)
   return(
    <>
     <p>Promoted</p>
     <AllrestaurantCard {...allRestaurants} />
    </>
   )
 }
}