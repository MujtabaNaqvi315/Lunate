import '../styles/components/slider.scss';
import $ from 'jquery';

import slide_1 from '../assets/images/slide_1.webp';
import slide_2 from '../assets/images/slide_2.webp';
import slide_3 from '../assets/images/slide_3.webp';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useState } from 'react';
import { Thumbs } from 'swiper/modules';

function Slider () {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    function handleExploreLinkMouseEnter () {
        $('.explore-link-arrow-js').removeClass('on-mouse-out');
        $('.explore-link-arrow-js').addClass('on-mouse-in');
    }

    function handleExploreLinkMouseLeave () {
        $('.explore-link-arrow-js').removeClass('on-mouse-in');
        $('.explore-link-arrow-js').addClass('on-mouse-out');
    }


    return (
        <div className='slider'>
            <div className='upper-sec'>
                <div className='title-sec'>
                    <p className='small-heading'>Our Approach</p>
                    <h1 className='big-heading'>Unlocking unparalleled opportunities</h1>
                </div>
                <div className='description-sec'>
                    <p className='description'>Our deep partnerships, disciplined approach and customised strategies enable us to deliver superior risk-adjusted returns for our clients. This approach is strengthened by our investment and operations team, who bring a proven track record and unparalleled access to regional and global opportunities.</p>
                    <a className='explore-link' onMouseEnter={handleExploreLinkMouseEnter} onMouseLeave={handleExploreLinkMouseLeave} href="#">
                        More To Explore
                        <span className='explore-link-span'>
                            <svg className='explore-link-arrow explore-link-arrow-js' width="0.938rem" height="0.938rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.35355 0.646447C8.15829 0.451184 7.84171 0.451184 7.64645 0.646447C7.45118 0.841709 7.45118 1.15829 7.64645 1.35355L13.7929 7.5H1.00195C0.725811 7.5 0.501953 7.72386 0.501953 8C0.501953 8.27614 0.725811 8.5 1.00195 8.5H13.7929L7.64645 14.6464C7.45118 14.8417 7.45118 15.1583 7.64645 15.3536C7.84171 15.5488 8.15829 15.5488 8.35355 15.3536L15.3282 8.37892C15.4346 8.28723 15.502 8.15148 15.502 8C15.502 7.84852 15.4346 7.71278 15.3282 7.62109L8.35355 0.646447Z"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
            <div className='slider-sec'>
                <Swiper
                    modules={[Thumbs]}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                    loop = 'true'
                >
                    <SwiperSlide> 
                        <h4 className='slide-heading'>Asset Classes</h4>
                        <p className='slide-description'>We invest across asset classes, including Private Equity, Venture Capital, Credit, Real Assets, GP Stakes, and Public Markets.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h4 className='slide-heading'>Investment Strategies</h4>
                        <p className='slide-description'>We deploy capital through a broad spectrum of strategies, including Fund Investments, Direct and Co-Investments, Long-Term Capital, Special Opportunities, and Climate Investments</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h4 className='slide-heading'>Solutions</h4>
                        <p className='slide-description'>We primarily manage private markets-focused customised portfolios for our clients, seeking to deliver tailored solutions with superior risk-adjusted returns. We also manage and/or co-manage private markets commingled funds. We are the leading ETF manager in the MENA region.</p>
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    modules={[Navigation, Pagination, Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, type: 'progressbar' }}
                    loop = 'true'
                >
                    <SwiperSlide> 
                        <img className='slider-img' src={slide_1} alt="Slide 1" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='slider-img' src={slide_2} alt="Slide 3" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='slider-img' src={slide_3} alt="Slide 3" /> 
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Slider;