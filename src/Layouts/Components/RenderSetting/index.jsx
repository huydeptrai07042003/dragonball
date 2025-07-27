import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faCircleHalfStroke, faMoon, faSun, faShieldHalved,faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { locales } from '../../../i18n/i18n';
import clsx from 'clsx';
import Button from '../../../components/button';

const settingItem = [
    {
        title: 'Language',
        icon: faLanguage,
        children: [
            {
                title: 'Vietnamese',
                key: 'vn',
            },
            {
                title: 'English',
                key: 'en',
            },
        ],
    },
    {
        title: 'Dark Mode',
        icon: faCircleHalfStroke,
        children: [
            {
                icon: faMoon,
                title: 'Dark',
            },
            {
                icon: faSun,
                title: 'Light',
            },
        ],
    },
    {
        title: 'Privacy',
        icon: faShieldHalved,
                children: [
            {
                icon: faTriangleExclamation,
                title: 'Incomplete',
            }
        ],
    },
];

function RenderSetting({ isHide }) {
    const { t, i18n } = useTranslation('setting');
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const currentLang = locales[i18n.language];

    const [history, setHistory] = useState([{ children: settingItem }]);
    const current = history[history.length - 1];
    const handleBack = () => {
        setHistory((pre) => pre.slice(0, pre.length - 1));
    };
    useEffect(() => {
        if (isHide) {
            setHistory((pre) => pre.slice(0, 1));
        }
    }, [isHide]);

    //DarkMode
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <div className="flex flex-col">
            {history.length > 1 && (
                <div
                    className="bg-blue-300 dark:bg-blue-900 hover:opacity-50 transition-opacity duration-200 font-bold rounded-sm cursor-pointer mb-2"
                    onClick={handleBack}
                >
                    {t('back')}
                </div>
            )}
            {current.children.map((item, index) => {
                const isParent = item.children;
                return (
                    <Button
                        key={index}
                        className={clsx(
                            ' py-1 px-2 hover:opacity-50 transition-opacity duration-200 cursor-pointer flex items-center gap-2',
                            item.title === currentLang && 'bg-neutral-500',
                            (item.title === 'Dark' && isDark && 'bg-neutral-400'),
                                (item.title === 'Light' && !isDark && 'bg-neutral-500'),
                        )}
                        onClick={() => {
                            if (isParent) {
                                setHistory((pre) => [...pre, { children: item.children }]);
                            } else {
                                if (item.title === 'Vietnamese') {
                                    changeLanguage('vi');
                                } else if (item.title === 'English') {
                                    changeLanguage('en');
                                } else if (item.title === 'Dark') {
                                    setIsDark(true);
                                } else if (item.title === 'Light') {
                                    setIsDark(false);
                                } else {
                                    console.log(item.title);
                                }
                            }
                        }}
                    >
                        {item.icon && (
                            <span className="w-6 justify-center items-center hidden sm:flex">
                                <FontAwesomeIcon icon={item.icon} />
                            </span>
                        )}
                        {t(item.title)}
                    </Button>
                );
            })}
        </div>
    );
}

export default RenderSetting;
