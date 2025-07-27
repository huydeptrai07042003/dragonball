import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faBook, faGamepad, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import clsx from 'clsx';
import Button from '../../../components/button';
import { useTranslation } from 'react-i18next';
function EventUpdate() {
    const newEvent = [
        {
            name: 'Anime',
            icon: faVideo,
        },
        {
            name: 'Manga',
            icon: faBook,
        },
        {
            name: 'Video Games',
            icon: faGamepad,
        },
        {
            name: 'Articles',
            icon: faNewspaper,
        },
    ];
    //////function handle
    const handleClick = (index) => {
        setIsShow(index);
        if (ScrollRef.current) {
            const offsetTop = ScrollRef.current.getBoundingClientRect().top + window.scrollY - 350;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };
    /////
    const renderItem = (event, index) => {
        return (
            <Button
                className={clsx(
                    ' rounded-lg text-white dark:text-black p-9 hover:opacity-90 hover:shadow-black dark:hover:shadow-white shadow-2xl transition-all duration-200',
                    isShow === index ? 'bg-red-400' : 'bg-black dark:bg-white',
                )}
                key={index}
                onClick={() => handleClick(index)}
            >
                <FontAwesomeIcon className="text-6xl" icon={event.icon} />
                <p className="text-2xl font-bold">{t(`EventUpdate.type.${event.name}.title`)}</p>
            </Button>
        );
    };
    const [isShow, setIsShow] = useState(null);
    /////
    const ScrollRef = useRef(null);
    ///mul lang
    const { t } = useTranslation('home');
    return (
        <div className="mt-20">
            <h1 className="m-10 font-bold text-2xl bg-black text-white dark:text-black dark:bg-white w-fit px-2 py-1 rounded-2xl mb-5">
                {t('EventUpdate.title')}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-5 text-center">
                {newEvent.map((event, index) => renderItem(event, index))}
            </div>
            <div ref={ScrollRef} className="h-[200px] bg-black text-white dark:text-black dark:bg-white mt-10 p-6">
                {isShow !== null ? (
                    <>
                        <h2 className="text-2xl">
                            {t('EventUpdate.renderTitle')}{' '}
                            <span>{t(`EventUpdate.type.${newEvent[isShow].name}.title`)}</span>
                        </h2>
                        <p>{t(`EventUpdate.type.${newEvent[isShow].name}.content`)}</p>
                    </>
                ) : (
                    t('EventUpdate.warn')
                )}
            </div>
        </div>
    );
}

export default EventUpdate;
