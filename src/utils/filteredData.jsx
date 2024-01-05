

export function filterData(searchText, allRestaurant) {
    const filterData = allRestaurant.filter((restaurant) =>
        restaurant?.info?.name.toUpperCase().includes(searchText.toUpperCase()));

    return filterData;
}

export function filtertop(allRestaurant){
 const filterTop = allRestaurant.filter((restaurant)=>
    restaurant.info.avgRating >= 4.3)
    // console.log(filterTop)
 return filterTop
}