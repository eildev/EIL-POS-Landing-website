import banner_bg from '../assets/banner_Background.png'
import banner_img from '../assets/Screenshot.png'
const Banner = () => {
  return (
    <div className='md:h-[915px]'>
      <div style={{ backgroundImage: `url(${banner_bg})` }} className="h-[635px] bg-no-repeat bg-cover bg-center">
        <div className='p-0 md:pt-[100px] pt-20 w-[95%] mx-auto'>
          <div className='bg-[#4670F9] w-fit mx-auto p-[3px] pr-0 rounded-[13.5px]'>
            <span className='text-white font-bold text-xs px-2 py-1 bg-[#00C9A7] rounded-[9px]'>NEW</span>
            <span className='text-sm text-white ml-[13px] mr-[17px]'>Now supports multi-branch businesses</span>
          </div>
          <div className='mt-10'>
            <h1 className='text-center text-white text-3xl font-semibold mb-3'>Eclipse Pos</h1>
            <h2 className='text-[38px] tracking-[1.42px] text-white text-center'>All-in-One Business Solution</h2>
            <p className='mt-[10px] text-[#F8F9FA] text-[17px] tracking-[0.6px] max-w-[555px] mx-auto text-center'>
              From POS to HRM everything you need to manage and grow your business.
            </p>
          </div>
          <div className='max-w-full'>
            <img src={banner_img} alt="" className='max-w-screen  max-h-[524px] object-cover mx-auto md:mt-20 mt-10 p-0' />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;