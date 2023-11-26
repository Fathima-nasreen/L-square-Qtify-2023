import {virtual, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Card from '../Card';

import 'swiper/css';
import 'swiper/css/Pagination';
import 'swiper/css/Navigation';
import './carousel.css';


export default ({data}) => {
    return 
    <div className = 'carousel-container'>
        <Swiper modules = {[virtual, Navigation, Pagination]}
        slidesPerView = {7}
        
        spaceBetween = {30}

        Navigation = {{nextEl:".arrrow-left", prevEl:".arrow-right"}}
        virtual
        >
            {data.map(cardData => <SwiperSlide key={cardData.id}> 
            <Card key = {cardData.id}
            imgSrc = {cardData.image}
            label = {cardData.title}
            followersCount = {cardData.follows} />
            </SwiperSlide>)}
        </Swiper>
        <div className = 'arrow-left arrow'><img src = "leftarr.png" alt ="" /></div>
        <div className = 'arrow-right arrow'><img src = "rightarr.png" alt ="" /></div>

    </div>
}