import { useEffect, useState } from 'react';
import Carousel from '../Carousel';
import { useTranslation } from 'react-i18next';
import { searchApi } from '../../../apiServices/carouselApi';

function MostSearch() {
    ///Lấy giá trị Api
    const [info, setInfo] = useState([]);
    ////Api
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const searchReSult = await searchApi(10);
                setInfo(searchReSult);
            } catch (error) {
                console.error(error);
            }
        };
        fetchApi();
    }, []);
    ////mul lang
    const { t } = useTranslation('home');
    return (
        <div className="mt-20">
            <h1 className="ml-10 font-bold text-2xl bg-black text-white dark:text-black dark:bg-white w-fit px-2 py-1 rounded-2xl mb-5">
                {t('MostSearch.title')}
            </h1>
            <div className="my-20 border-t-2 border-b-2 border-amber-600 bg-amber-200 dark:border-amber-100 dark:bg-amber-900">
                <Carousel items={info} />
            </div>
        </div>
    );
}

export default MostSearch;
