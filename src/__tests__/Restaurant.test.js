import { render ,screen } from "@testing-library/react";
import RestaurantCard from '../component/RestaurantCard'
import MOCk_DATA from '../mock/restaurant.json';
import "@testing-library/jest-dom"
describe("Restaurant Card",()=>{
   

    it("should render Restaurant Card component name",()=>{
        render(<RestaurantCard {...MOCk_DATA.info}/>)
        expect(screen.getByText('Pizza Hut')).toBeInTheDocument();
    })

    it("should render Restaurant Card component price",()=>{
        render(<RestaurantCard {...MOCk_DATA.info}/>)
        expect(screen.getByText('₹350 for two')).toBeInTheDocument();
    })

})