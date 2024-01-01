import { CDN_URL } from '../utils/constants';

const Banner = ({ banner }) => {
  return (
    <div className='keen-slider__slide max-w-[150px]'>
      <img className='block w-[150px] h-[150px]' src={CDN_URL + banner?.imageId} alt='' />
    </div>
  );
};

export default Banner;