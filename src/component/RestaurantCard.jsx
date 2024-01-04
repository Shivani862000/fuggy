import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-[250px] p-4">
      <div className="relative pb-48 overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt=""
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
          Highlight
        </span>
        <h2 className="mt-2 mb-2  font-bold">{name}</h2>
     
      </div>
      <div className="p-4 border-t border-b text-xs text-gray-700">
        {avgRating < 4.2 ? (
        <>
           <h4 classNameName="heading pt-0 pr-5 text-base w-12 h-6 bg-green-600 text-white font-medium rounded-md">
           ⭐{avgRating}
         </h4>
            <h3 className="mt-2 mb-2">{costForTwo ?? "₹200 for two"}</h3>
            <p className="text-sm">{cuisines.join(", ")}</p>
        </>
        ) : (
         <>
          <h4 classNameName="heading pt-0 pr-5 text-base w-12 h-6 bg-green-600 text-white font-medium rounded-md">
            ⭐{avgRating}
          </h4>
             <h3 className="mt-2 mb-2">{costForTwo ?? "₹200 for two"}</h3>
             <p className="text-sm">{cuisines.join(", ")}</p></>
        )}
      </div>
    </div>
  );
};
export default RestaurantCard;
