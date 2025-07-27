///Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
///Hooks
import { useEffect, useState } from 'react';
///Components
import Image from '../../../components/image';
/// Mul lang
import { useTranslation } from 'react-i18next';
///Api
import { renderSkin } from '../../../apiServices/searchRenderApi';
///Skeleton
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SearchRender({ Id }) {
    ////Chọn nhân vật
    const [character, setCharacter] = useState('');
    ////Chọn skin
    const [skin, setSkin] = useState('');
    ///Loading
    const [isLoading, setIsLoading] = useState(true);
    const [isSkinLoading, setIsSkinLoading] = useState(false);
    ///Hàm render từng character
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await renderSkin(Id);
                setCharacter(res);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [Id]);

    useEffect(() => {
        setSkin('');
    }, [character]);

    /// mul lang
    const { t } = useTranslation('products');
    return (
        <SkeletonTheme baseColor="#cccccc" highlightColor="#f5f5f5">
            <div className="pt-10 dark:text-white">
                <div className="flex flex-col md:flex-row text-center gap-4">
                    {character && (
                        <div className="ms-10">
                            {!character.name ? (
                                <Skeleton />
                            ) : (
                                <h1 className="font-bold text-6xl text-center mb-5">{character.name}</h1>
                            )}
                            {!character.ki ? (
                                <Skeleton />
                            ) : (
                                <h3 className="text-xl">
                                    <span className="font-bold">Ki:</span> {character.ki}
                                </h3>
                            )}
                            {!character.maxKi ? (
                                <Skeleton />
                            ) : (
                                <h3 className="text-xl">
                                    <span className="font-bold">{t('render.MaxKi')}</span> {character.maxKi}
                                </h3>
                            )}
                            {!character.race ? (
                                <Skeleton />
                            ) : (
                                <h3 className="text-xl">
                                    <span className="font-bold">{t('render.Race')}</span> {character.race}
                                </h3>
                            )}
                            {!character.affiliation ? (
                                <Skeleton />
                            ) : (
                                <h3 className="text-xl">
                                    <span className="font-bold ">{t('render.Affiliation')}</span>{' '}
                                    {character.affiliation}
                                </h3>
                            )}
                            {character.transformations && character.transformations.length > 0 && (
                                <h3 className="mt-3 text-xl">
                                    {isLoading ? (
                                        <Skeleton />
                                    ) : (
                                        <select
                                            className="mt-2 bg-black text-white dark:bg-white dark:text-black py-1 px-2 rounded"
                                            onChange={(e) => {
                                                const selected = character.transformations.find(
                                                    (t) => t.name === e.target.value,
                                                );
                                                if (selected) {
                                                    setIsSkinLoading(true);
                                                    setSkin(selected);
                                                } else {
                                                    setSkin('');
                                                }
                                            }}
                                            value={skin.name}
                                        >
                                            <option hidden>{t('render.Transformations')}</option>
                                            {character.transformations.map((transformName) => {
                                                return <option key={transformName.id} value={transformName.name}>{transformName.name}</option>;
                                            })}
                                        </select>
                                    )}
                                </h3>
                            )}
                        </div>
                    )}
                    <div className="flex w-auto mx-auto gap-10 lg:gap-40 xl:gap-70">
                        <div className="w-auto h-80">
                            {isLoading ? (
                                <Skeleton height={300} width={250} />
                            ) : (
                                <Image src={character.image} alt={character.name} />
                            )}
                        </div>
                        {skin && (
                            <div className="content-center w-fit text-9xl">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        )}
                        {skin && (
                            <div className="w-auto h-80 relative">
                                {isSkinLoading && (
                                    <Skeleton height={300} width={250} className="absolute top-0 left-0 z-10" />
                                )}
                                <Image
                                    key={skin.id}
                                    src={skin.image}
                                    alt={skin.name}
                                    onLoad={() => setIsSkinLoading(false)}
                                    className={`transition-opacity duration-300 ${
                                        isSkinLoading ? 'opacity-0' : 'opacity-100'
                                    }`}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default SearchRender;
