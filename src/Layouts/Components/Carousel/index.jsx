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
                slidesPerView={4}
                autoplay={{ delay: 100 }}
                speed={2000}
                loop={items.length > 4}
            >
                {items.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Button className="w-full h-full group cursor-pointer" onClick={() => handleClick(item)}>
                                <div className="mx-auto w-[200px] h-[200px]">
                                    <img
                                        className="w-full h-auto group-hover:scale-110 transition-transform duration-200"
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
