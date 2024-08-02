import '../styles/components/slider.scss';
import $ from 'jquery';

function Slider () {

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
        </div>
    );
}

export default Slider;