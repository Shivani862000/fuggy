import { useEffect,useState } from "react";

export default function useRestaurant (){
    const [data ,setData] =useState()
    useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.52433180164408&lng=77.19500172883272&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const result = await data.json();
        setData(result)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
    return data
}