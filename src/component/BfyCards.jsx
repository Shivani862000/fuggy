import firsCard from '../assets/images/firstCard.avif'
import secCard from '../assets/images/secCard.avif';
import thirdCard from '../assets/images/thirdCard.avif';
export const BofferCard =()=>{
    return(
        <>
        <div>
            <h2 className='font-bold capitalize 2xl'>Bests Offer for you</h2>
            <div className=' flex gap-6 my-6 overflow-scroll'>
                <div className='cursor-pointer' ><img className='lg:w-[452px] lg:h-[252px]' src={firsCard} alt='offer' /></div>
          
                <div className='cursor-pointer' >
                <img className='lg:w-[452px] lg:h-[252px]' src={secCard} alt='offer'/>
            </div>
            <div className='cursor-pointer' >
                <img className='lg:w-[452px] lg:h-[252px]' src={thirdCard} alt='offer'/>
            </div>
            </div>
        </div>
        
        </>
    )
}