import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import BackgroundDesign from '../BackgroundDesign';
import dragonballHomeBg from '../../../assets/dragonball_home_bg.jpg';
import { useTranslation } from 'react-i18next';

function MainHomeContent() {
    const {t} =useTranslation('home');
    return (
        <div className="text-center pt-[90px]">
            <h1 className="text-4xl md:text-7xl my-5 dark:text-white">
                <b>
                    {t('MainHomeContent.name')}{' '}
                    <span>
                        <FontAwesomeIcon icon={faBookBookmark} />
                    </span>
                </b>
            </h1>
            <BackgroundDesign minScreen={90} maxScreen={700} source={dragonballHomeBg} alter="DragonBall_picture" />
        </div>
    );
}

export default MainHomeContent;
