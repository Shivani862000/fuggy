import Header from '../component/header';
import {BofferCard} from '../component/BfyCards'
import {TrestaurantCard} from '../component/TrestaurantCard';
import {AllrestaurantCard , promotedCard} from '../component/AllrestaurantCard'
import { useEffect, useState } from "react";

import BannerList from '../component/BannerList';



export const Dashboard =()=>{
     const [restaurant , setDataRestaurant]= useState()
     const [bannerC , setBannerC]= useState()

     const Promotedc = promotedCard(AllrestaurantCard)
    let ApiLink='https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.52433180164408&lng=77.19500172883272&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
    useEffect(()=>{
        const fetchData = async()=>{
          try{
            const data  = await fetch(ApiLink);
            const result = await data.json();
            const topRestaurant = result?.data?.cards[3].card?.card
            const bannerCards = result?.data?.cards[0]
            // console.log(bannerCards)
            setBannerC(bannerCards)
            const allRestaurant= result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            setDataRestaurant(allRestaurant)
            // console.log(bannerCards)
          }
          catch (error){
            console.log(error)
          }
        }
        fetchData();
    },[])
    return (
        <>
        <section>
        <div className="container mx-auto lg:max-w-[1200px]">
            <BofferCard/>
            <BannerList banners={ bannerC}/>
            <TrestaurantCard/>
            <div className="grid grid-cols-4 gap-32 p-32 md:p-16">
            {restaurant?.map((item ,index)=>{
              // console.log(item.info.isOpen)
              return(
                <>
                {item.info.promoted ? <Promotedc allRestaurants={item}/>: <AllrestaurantCard allRestaurants={item}/>  }
                </>
              )
            })}
            </div>
           
            </div>
         
            

        </section>
        </>
    )
}