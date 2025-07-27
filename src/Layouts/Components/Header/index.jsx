import dragonball_logo from '../../../assets/dragonball_logo.png';
import Image from '../../../components/image';
import SettingHeader from '../SettingHeader';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/button';

function Header() {
    const { t } = useTranslation('header');

    return (
        <header className="w-full bg-white dark:bg-black dark:text-white flex justify-around text-center fixed z-100 h-20 sm:h-auto shadow-xl">
            <Button to="/" className="logo w-40 hidden sm:block">
                <Image src={dragonball_logo} alt={dragonball_logo} />
            </Button>
            <div className="navigation flex text-center text-sm sm:text-md md:text-lg font-bold justify-around gap-0 sm:gap-6 md:gap-8 lg:gap-10">
                <Button className="hover:border-b-1 w-[80px] sm:w-auto transition-all duration-200" to="/">
                    {t('home')}
                </Button>
                <Button className="hover:border-b-1 w-[80px] sm:w-auto transition-all duration-200" to="/About">
                    {t('about')}
                </Button>
                <Button className="hover:border-b-1 w-[80px] sm:w-auto transition-all duration-200" to="/Products">
                    {t('products')}
                </Button>
                <Button className="hover:border-b-1 w-[80px] sm:w-auto transition-all duration-200" to="/Contact">
                    {t('contact')}
                </Button>
                <div className='content-center sm:hidden'>
                    <SettingHeader />
                </div>
            </div>  
            <div className='content-center hidden sm:block'><SettingHeader /></div>
        </header>
    );
}

export default Header;
