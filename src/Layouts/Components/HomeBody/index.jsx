import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Button } from '@headlessui/react';

function HomeBody() {
    const mainStory = [
        {
            name: 'Dragon Ball (Original Series)',
        },
        {
            name: 'Dragon Ball Z',
        },
        {
            name: 'Dragon Ball Super',
        },
        {
            name: 'Dragon Ball GT (Non-Canon)',
        },
    ];

    /////
    const handleClick = (index) => {
        setIsVisible(isVisible === index ? null : index);
    };
    const [isVisible, setIsVisible] = useState(null);
    /////mul lang
    const { t } = useTranslation('home');

    return (
        <div className="mt-20 ml-10 dark:text-white">
            <h1 className=" font-bold text-2xl bg-black text-white dark:bg-white dark:text-black w-fit px-2 py-1 rounded-2xl mb-5">
                {t('HomeBody.title')}
            </h1>
            <p>{t('HomeBody.summary')}</p>
            <h2 className=" font-bold text-2xl mt-10">{t('HomeBody.mainstory')}</h2>
            <ul>
                {mainStory.map((story, index) => {
                    return (
                        <li key={index}>
                            <Button
                                className=" font-bold bg-black text-white w-fit px-2 py-1 rounded-md mt-8 mb-3"
                                onClick={() => handleClick(index)}
                            >
                                {t(`HomeBody.stories.${story.name}.title`)}
                                <span className={'ml-2'}>
                                    <FontAwesomeIcon
                                        className={clsx(
                                            'transition-transform duration-300',
                                            isVisible === index && 'rotate-180',
                                        )}
                                        icon={faCaretDown}
                                    />
                                </span>
                            </Button>
                            <p
                                className={clsx(
                                    'overflow-hidden transition-all duration-500',
                                    isVisible === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0',
                                )}
                            >
                                {t(`HomeBody.stories.${story.name}.content`)}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default HomeBody;
