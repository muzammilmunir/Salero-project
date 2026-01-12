import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IMAGES, SVGICON } from '../../constant/theme';

const swiperData = [
    { image: IMAGES.favirate1, title: 'Spaghetti Italiano With Mozarella Cheese' },
    { image: IMAGES.favirate3, title: 'Sweet Orange Juice from Magelang' },
    { image: IMAGES.favirate4, title: 'Original Big Burger with Extra Spicy' },
    { image: IMAGES.favirate1, title: 'Sate Padang Daging Ayam Cincang Komplit' },
    { image: IMAGES.favirate6, title: 'Medium Fresh Salad Less Sugar (All Fruits)' },
    { image: IMAGES.favirate4, title: 'Original Big Burger with Extra Spicy' },
];

const MenuSlider = () => {
    return (
        <>
            <Swiper
                className="mySwiper"
                spaceBetween={50}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    416: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1788: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
            >
                {swiperData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-media mb-2">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="swiper-info">
                            <h6 className=""><Link to={"/ecom-product-detail"}>{item.title}</Link></h6>
                            <ul className="d-flex align-items-center justify-content-between mb-3">
                                <li className="text-success">
                                    {SVGICON.CircleRight}
                                    456 <small>Served</small>
                                </li>
                                <li><h3 className="text-primary fs-14 mb-0">$8.6</h3></li>
                            </ul>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default MenuSlider;