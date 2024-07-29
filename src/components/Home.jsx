import '../styles/components/home.scss';
import $ from 'jquery';
import { useEffect } from 'react';

function Home (){

    useEffect(() => {
        $('.home-heading').each(function () {
            let text = $(this).text();
            // Add a full stop to the end of each word
            let newText = text.split(' ').map(word => {
                return word ? `${word}<span class="full-stop">.</span>` : '<span class="full-stop">.</span>';
            }).join(' ');
            $(this).html(newText);
        });
    }, []);

    return (
        <div className='home'>
           
            <h1 className='home-heading'>
                Innovate Inspire Invest 
            </h1>
            <p className='home-description'>
                Lunate is a leading alternative investment manager,
                headquartered in Abu Dhabi, with over US$60 billion 
                in assets under management.
            </p>
            
        </div>
    );
}

export default Home;