import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
function ProductsHeader() {
    const {t} = useTranslation('products');
    return (
        <div className="text-center pt-[70px] dark:text-white dark:bg-black ">
            <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl mt-6 mb-4">
                <b>{t('header')} <span><FontAwesomeIcon icon={faMagnifyingGlass}/></span></b>
            </h1>
        </div>
    );
}

export default ProductsHeader;
