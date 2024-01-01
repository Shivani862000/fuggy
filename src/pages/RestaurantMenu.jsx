import React, { useState, useEffect } from "react";
import { data } from "../data/restaurant";
import {ResCategory} from '../component/ResCategory'

const RestaurantMenu = () => {

 // Only trigger the effect when the 'id' changes
 const [showIndex , setShowIndex]= useState(0)
  // Check if the necessary properties exist before destructure
  const dataMainCard = data.data?.cards?.[0]?.card.card.info;
  const categories = data.data?.cards?.[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter(c=>c.card.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
//  console.log(data)
//  console.log(categories)
  return (
   <section>
     <div className="container my-8 mx-auto lg:max-w-[1200px]">
      <h1> {dataMainCard?.name}</h1>
      {dataMainCard?.cuisines?.[0]}
      {dataMainCard?.costForTwoMessage}
    
    
    <div>
     {categories.map((item,index)=>{
    
      return (
        <ResCategory  category={item.card.card} 
        showItems={index === showIndex ? true : false}
        setShowIndex={()=>setShowIndex(index)}
        /> 
      )
     })}
    </div>
    </div>
   </section>
  );
};

export default RestaurantMenu;
