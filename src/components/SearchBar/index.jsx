import SearchInput from '../searchInput';
///Thư viện Tippy
import Tippy from '@tippyjs/react/headless';
//hook
import { useEffect, useState } from 'react';
//
import Button from '../button';
import Modal from '../modal';
import { useTranslation } from 'react-i18next';
// call api
import { characterList } from '../../apiServices/CharactersListApi';
import { request } from '../../utils/http';
// skeleton loading
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function SearchBar({ children, onSearchChange, searchValue }) {
    const [links, setLinks] = useState({});
    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState();
    const [currentUrl, setCurrentUrl] = useState(null);

    const fetchData = async (url) => {
        // Nếu url không đổi thì bỏ qua
        if (url === currentUrl) return;
        try {
            setLoading(true);
            let res;
            if (url) {
                res = (await request.get(url)).data;
                setCurrentUrl(url);
            } else {
                res = await characterList(8);
                setCurrentUrl(null);
            }
            setCharacters(res.items || []);
            setLinks(res.links || {});
            setPage(res.meta || '');
        } catch (err) {
            console.error('Failed to fetch characters:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [isShow, setIsShow] = useState(true);
    const onHideResult = () => {
        setIsShow(false);
    };
    const [openedList, setOpenedList] = useState(false);

    const handleClose = () => {
        setOpenedList(false);
    };

    const { t } = useTranslation('products');

    return (
        <div className=" bg-black dark:text-white dark:bg-white  py-3 flex gap-6">
            <Tippy
                render={(attrs) => (
                    <div
                        className="box bg-black/30 dark:bg-white/30 dark:text-black text-white backdrop-blur-sm ms-6 w-[300px] py-2 rounded-lg flex flex-col max-h-[200px] overflow-hidden"
                        tabIndex="-1"
                        {...attrs}
                    >
                        {children}
                    </div>
                )}
                placement="bottom"
                visible={isShow && searchValue.trim() !== '' && children.length > 0}
                interactive
                onClickOutside={onHideResult}
            >
                <div className="ms-12">
                    <SearchInput
                        hideBoolan={() => {
                            setIsShow(true);
                        }}
                        onChange={onSearchChange}
                        value={searchValue}
                        placeholder={t('placeholder')}
                    />
                </div>
            </Tippy>
            <Button
                className="bg-white dark:bg-black px-2 rounded-lg font-bold hover:opacity-70 transition-opacity duration-300"
                onClick={() => {
                    setOpenedList(true);
                }}
            >
                {t('Listbutton')}
            </Button>
            {openedList && (
                <Modal contentWidth="" onClose={handleClose} marginTitle="mb-5" title={t('modalTitle')}>
                    <SkeletonTheme>
                        <div className=" mx-auto">
                            <ul className="grid grid-cols-3 gap-2 text-sm text-black">
                                {loading ? (
                                    <li
                                                className=" h-15 text-center bg-gray-100 dark:bg-gray-500 dark:text-white rounded shadow "
                                            >
                                                <Skeleton width="100%" height="100%" />
                                            </li>
                                ) : (
                                    <li className="content-center h-15 text-center bg-gray-100 dark:text-white dark:bg-gray-500 rounded shadow ">
                                        <p className="font-semibold">
                                            {t('render.page')} {page.currentPage}/{page.totalPages}
                                        </p>
                                    </li>
                                )}
                                {loading
                                    ? characters.map((e, index) => {
                                        return (
                                            <li
                                                className="h-15 text-center bg-gray-100 dark:bg-gray-500 dark:text-white rounded shadow "
                                                key={index}
                                            >
                                                <Skeleton width="100%" height="100%" />
                                            </li>
                                        );
                                    })
                                : characters.map((char) => (
                                        <li
                                            key={char.id}
                                            className="content-center h-15 text-center bg-gray-100 dark:bg-gray-500 dark:text-white rounded shadow "
                                        >
                                            <p className="font-semibold">{char.name}</p>
                                        </li>
                                    ))}
                            </ul>
                            {/* Buttons */}
                            <div className="flex justify-center gap-3 mt-6">
                                <Button
                                    onClick={() => fetchData(links.first)}
                                    disabled={!links.first || loading}
                                    className="px-4 py-2 bg-white text-black dark:bg-black dark:text-white rounded dark:hover:bg-black/50 hover:bg-white/50  transition-colors duration-300"
                                >
                                    {t('render.firstpage')}
                                </Button>
                                <Button
                                    onClick={() => fetchData(links.previous)}
                                    disabled={!links.previous || loading}
                                    className="px-4 py-2 bg-white text-black dark:bg-black dark:text-white dark:hover:bg-black/50 rounded hover:bg-white/50 transition-colors duration-300"
                                >
                                    {t('render.prevpage')}
                                </Button>
                                <Button
                                    onClick={() => fetchData(links.next)}
                                    disabled={!links.next || loading}
                                    className=" px-4 py-2 bg-white text-black dark:bg-black dark:text-white dark:hover:bg-black/50 rounded hover:bg-white/50 transition-colors duration-300"
                                >
                                    {t('render.nextpage')}
                                </Button>
                                <Button
                                    onClick={() => fetchData(links.last)}
                                    disabled={!links.last || loading}
                                    className="px-4 py-2 bg-white text-black dark:bg-black dark:text-white dark:hover:bg-black/50 rounded hover:bg-white/50 transition-colors duration-300"
                                >
                                    {t('render.lastpage')}
                                </Button>
                            </div>
                        </div>
                    </SkeletonTheme>
                </Modal>
            )}
        </div>
    );
}

export default SearchBar;
