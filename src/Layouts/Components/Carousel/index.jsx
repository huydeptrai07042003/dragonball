// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
//component
import Modal from '../../../components/modal';
import Button from '../../../components/button';
//hook
import { useState } from 'react';

function Carousel({ items }) {
    ///function
    const handleClick = (item) => {
        setSelectedItem(item);
    };
    ////
    const [selectedItem, setSelectedItem] = useState(null);
    const closeModal = () => {
        setSelectedItem(null);
    };
    return (
        <>
            <Swiper
                modules={[Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 2, 
                    },
                    350: {
                        slidesPerView: 3, 
                    },
                    450: {
                        slidesPerView: 4, 
                    },
                }}
                autoplay={{ delay: 100 }}
                speed={2000}
                loop={items.length > 3}
            >
                {items.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Button className="group cursor-pointer" onClick={() => handleClick(item)}>
                                <div className="w-[100px] sm:w-[180px] md:w-[200px] h-[200px] mx-auto content-center">
                                    <img
                                        className="w-full group-hover:scale-110 transition-transform duration-200"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </div>
                            </Button>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {selectedItem && (
                <Modal onClose={closeModal} title={selectedItem.name}>
                    <div className="text-white dark:text-black dark:bg-white ml-8 my-8">
                        <h2 className="text-xl mb-4 font-bold">Ki: {selectedItem.ki}</h2>
                        <h2 className="text-xl mb-4 font-bold">Race: {selectedItem.race}</h2>
                        <h2 className="text-xl mb-4 font-bold">Gender: {selectedItem.gender}</h2>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default Carousel;
