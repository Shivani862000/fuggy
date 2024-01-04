import firsCard from '../assets/images/firstCard.avif'
import secCard from '../assets/images/secCard.avif';
import thirdCard from '../assets/images/thirdCard.avif';
export const BofferCard =()=>{
    return(
        <>
            <div className='my-16'>
        <h1 className='font-bold text-2xl text-zinc-700'>shivani, what's on your mind?</h1>
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