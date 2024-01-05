import firsCard from '../assets/images/firstCard.avif'
import secCard from '../assets/images/secCard.avif';
import thirdCard from '../assets/images/thirdCard.avif';

export const BofferCard = () => {
  return (
    <div className='my-16 max-sm:hidden'>
      <h1 className='font-bold text-2xl text-zinc-700 mb-6 lg:text-3xl'>
        Shivani, what's on your mind?
      </h1>
      <div className='flex flex-col lg:flex-row gap-6 my-6 overflow-x-auto '>
        <div className='cursor-pointer'>
          <img className='w-full h-auto lg:w-[452px] lg:h-[252px] rounded-md transition duration-300 transform hover:scale-105' src={firsCard} alt='offer' />
        </div>
        <div className='cursor-pointer'>
          <img className='w-full h-auto lg:w-[452px] lg:h-[252px] rounded-md transition duration-300 transform hover:scale-105' src={secCard} alt='offer' />
        </div>
        <div className='cursor-pointer'>
          <img className='w-full h-auto lg:w-[452px] lg:h-[252px] rounded-md transition duration-300 transform hover:scale-105' src={thirdCard} alt='offer' />
        </div>
      </div>
    </div>
  );
};
