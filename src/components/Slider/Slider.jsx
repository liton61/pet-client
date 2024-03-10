import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from '../../assets/pet (1).jpg';
import slider2 from '../../assets/pet (2).jpg';
import slider3 from '../../assets/pet (3).jpg';
import slider4 from '../../assets/pet (4).jpg';
import slider5 from '../../assets/pet (5).jpg';
import slider6 from '../../assets/pet (6).jpg';
import slider7 from '../../assets/pet (7).jpg';
import slider8 from '../../assets/pet (8).jpg';
import banner from '../../assets/banner3.jpg';
import banner2 from '../../assets/banner5.jpg';


const Slider = () => {
    return (
        <div className='lg:w-3/4 mx-auto py-16 lg:px-0 px-5'>
            {/* <div className='lg:py-10 md:py-7 py-5'>
                <h1 className='text-center lg:text-3xl md:text-2xl font-bold uppercase'>Most Selling Pets</h1>
            </div> */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider7} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider8} alt="" /></SwiperSlide>
            </Swiper>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-7 md:gap-7'>
                <img className='w-full pt-6' src={banner} alt="" />
                <img className='w-full pt-6' src={banner2} alt="" />
            </div>
        </div>
    );
};

export default Slider;