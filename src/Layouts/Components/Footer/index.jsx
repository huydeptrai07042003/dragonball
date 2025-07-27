import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/button';
function Footer() {
    const { t } = useTranslation('footer');

    return (
        <div className="bg-black text-white dark:bg-white dark:text-black">
            <footer className=" text-center mx-20 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-15 pb-10">
                <div className="logo">
                    <img src="https://static.wikia.nocookie.net/6a181c72-e8bf-419b-b4db-18fd56a0eb60" />
                </div>
                <nav className="flex flex-col gap-1">
                    <Button href="#">{t('about')}</Button>
                    <Button href="#">{t('privacy')}</Button>
                    <Button href="#">{t('terms')}</Button>
                </nav>
                <div className="contact flex flex-col gap-1">
                    <p>trinhquanghuy0704@gmail.com</p>
                    <p>
                        <span>{t('phone')}</span> 0834586662
                    </p>
                </div>
                <div className="social flex flex-col gap-1">
                    <Button target="_blank" href="https://www.facebook.com/huy.trinh.842684">
                        <span>
                            <FontAwesomeIcon icon={faSquareFacebook} />
                        </span>{' '}
                        Facebook
                    </Button>
                    <Button target="_blank" href="#">
                        <span>
                            <FontAwesomeIcon icon={faYoutube} />
                        </span>{' '}
                        YouTube
                    </Button>
                </div>
                <p>© 2025 HCMUTE</p>
            </footer>
        </div>
    );
}

export default Footer;
