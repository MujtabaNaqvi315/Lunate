import '../styles/components/intro.scss';

function Intro () {

    return (
        <div className='intro'>
            <div className='upper-sec'>
                <div className='title-sec'>
                    <p className='small-heading'>Who We Are</p>
                    <h1 className='big-heading'>World-class capabilities, deep global networks</h1>
                </div>
                <div className='description-sec'>
                    <p className='description'>Lunate is your trusted investment partner. Driven by discipline, powered by expertise and defined by excellence – we enable our partners to invest at scale, building customised portfolios across strategies, asset classes and products.</p>
                    <a className='explore-link' href="#">
                        Explore Lunate
                        <span className='explore-link-span'>
                            <svg className='explore-link-arrow' width="1.5rem" height="1.5rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.35355 0.646447C8.15829 0.451184 7.84171 0.451184 7.64645 0.646447C7.45118 0.841709 7.45118 1.15829 7.64645 1.35355L13.7929 7.5H1.00195C0.725811 7.5 0.501953 7.72386 0.501953 8C0.501953 8.27614 0.725811 8.5 1.00195 8.5H13.7929L7.64645 14.6464C7.45118 14.8417 7.45118 15.1583 7.64645 15.3536C7.84171 15.5488 8.15829 15.5488 8.35355 15.3536L15.3282 8.37892C15.4346 8.28723 15.502 8.15148 15.502 8C15.502 7.84852 15.4346 7.71278 15.3282 7.62109L8.35355 0.646447Z"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
            <div className='lower-sec'>
                <div className='content'>
                    <h4 className='content-heading'>Partner-led</h4>
                    <p className='content-description'>Commercial and independent</p>
                </div>
                <div className='content'>
                    <h4 className='content-heading'>150+</h4>
                    <p className='content-description'>Investment and operating professionals</p>
                </div>
                <div className='content'>
                    <h4 className='content-heading'>3</h4>
                    <p className='content-description'>Core investment strategies</p>
                </div>
            </div>
        </div>
    );
}

export default Intro;