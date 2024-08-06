import '../styles/components/slider.scss';
import $ from 'jquery';

import slide_1 from '../assets/images/slide_1.webp';
import slide_2 from '../assets/images/slide_2.webp';
import slide_3 from '../assets/images/slide_3.webp';

import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import { useState, useRef, useEffect } from 'react';

function Slider () {

    // const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [progress, setProgress] = useState(0);

    const swiperRef0 = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiperInstance = swiperRef.current.swiper;

            // Ensure the scrollbar element is available after initialization
            if (swiperInstance && swiperInstance.scrollbar.el) {
                const scrollbarEl = swiperInstance.scrollbar.el;
                const progressVal = translateVal(scrollbarEl);
                setProgress(progressVal);
            } else {
                console.error('Swiper or scrollbar element is not available during initialization.');
            }
        }
    }, []);

    function handleExploreLinkMouseEnter () {
        $('.explore-link-arrow-js').removeClass('on-mouse-out');
        $('.explore-link-arrow-js').addClass('on-mouse-in');
    }

    function handleExploreLinkMouseLeave () {
        $('.explore-link-arrow-js').removeClass('on-mouse-in');
        $('.explore-link-arrow-js').addClass('on-mouse-out');
    }


    function handleNextButtonClick () {
        // console.log("next" + swiperRef.current);

        if (swiperRef.current) {
            swiperRef0.current.swiper.slideNext();
            swiperRef.current.swiper.slideNext();
        } 
        // else {
        //     console.error("next Swiper instance not found");
        // }
    }

    function handlePrevButtonClick () {
        // console.log("prev" + swiperRef.current);

        if (swiperRef.current) {
            swiperRef0.current.swiper.slidePrev();
            swiperRef.current.swiper.slidePrev();
        } 
        // else {
        //     console.error("prev Swiper instance not found");
        // }
    }

    function handleSlideChange () {
        if (swiperRef.current) {
            updateProgress();
        }
    }

    function updateProgress () {
        if (swiperRef.current && swiperRef.current.swiper.scrollbar.el) {
            const scrollbarEl = swiperRef.current.swiper.scrollbar.el;
            const progressVal = translateVal(scrollbarEl);
            setProgress(progressVal);
        } else {
            console.error('Swiper or scrollbar element is not available.');
        }
    }

    function translateVal (el) {

        if (!el || !(el instanceof HTMLElement)) {
            console.error('The provided element is not valid:', el);
            return 0;
        }

        const transform = window.getComputedStyle(el).transform;
        const match = transform.match(/translate3d\((.+)px,(.+)px,(.+)px\)/);
        return match ? parseFloat(match[1]) : 0;
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
                    // modules={[Thumbs]}
                    // onSwiper={setThumbsSwiper}
                    loop = {true}
                    ref={swiperRef0}
                    allowTouchMove = {false}
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
                    ref={swiperRef}
                    modules={[Scrollbar]}
                    scrollbar={{
                        el: '.slider-scrollbar',
                        draggable: false,
                        hide: false,
                        snapOnRelease: false,
                        
                    }}
                    onSlideChange={handleSlideChange}
                    onInit={handleSlideChange}
                    // thumbs={{ swiper: thumbsSwiper }}
                    spaceBetween={50}
                    slidesPerView={1}
                    // navigation
                    //pagination={{ clickable: true, type: 'progressbar' }}
                    loop = {true}
                    allowTouchMove = {false}
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
            <div className='nav-btns'>
                <div className='prev-btn' onClick={handlePrevButtonClick}>

                    {/* <svg width="1.5rem" height="1.563rem" viewBox="0 0 1.5rem 1.563rem" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8208_3755)">
                            <path d="M15 18.2891L9 12.2891L15 6.28906" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8208_3755">
                                <rect width="1.5rem" height="1.5rem" fill="white" transform="matrix(-1 0 0 1 1.5rem 0.289062)"/>
                            </clipPath>
                        </defs>
                    </svg> */}
                    <svg width=".5rem" height=".875rem" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13.2891L1 7.28906L7 1.28906" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className='next-btn' onClick={handleNextButtonClick}>
                    {/* <svg width="1.5rem" height="1.563rem" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8208_5694)">
                            <path d="M9 18.2891L15 12.2891L9 6.28906" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_8208_5694">
                                <rect width="1.5rem" height="1.5rem" fill="white" transform="translate(0 0.289062)"/>
                            </clipPath>
                        </defs>
                    </svg> */}
                    <svg width=".5rem" height=".875rem" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13.2891L7 7.28906L1 1.28906" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>

            <div className="slider-progress-wrap">
                <div className="slider-progress"></div>
                {/* <div className="slider-progress2" style={{ width: progress + 'px' }}></div> */}
                <div className="slider-scrollbar"></div>
            </div>
        </div>
    );
}

export default Slider;