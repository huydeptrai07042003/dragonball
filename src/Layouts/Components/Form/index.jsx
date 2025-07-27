import SearchInput from '../../../components/searchInput';
import Button from '../../../components/button';
import { useState } from 'react';
import Modal from '../../../components/modal';
import { useTranslation } from 'react-i18next';

function Feedbacks() {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [radioValue, setRadioValue] = useState(1);
    const [checkboxValue, setCheckboxValue] = useState([]);

    const [isShow, setIsShow] = useState(false);
    ////
    const handleSubmit = () => {
        if (!nameValue || !emailValue || !radioValue || checkboxValue.length === 0) {
            alert(t('warn'));
            return;
        }
        setIsShow(true);
    };
    const handleClose = () => {
        setIsShow(false);
        setNameValue('');
        setEmailValue('');
        setCheckboxValue([]);
    };

    ////
    const handleChange = (id) => {
        const isContain = checkboxValue.includes(id);
        setCheckboxValue((pre) => {
            if (isContain) {
                return checkboxValue.filter((item) => item !== id);
            } else {
                return [...pre, id];
            }
        });
    };

    //// mul lang
    const { t } = useTranslation('contact');
    const radioarray = t('radioArray', { returnObjects: true });
    const checkboxarray = t('checkboxArray', { returnObjects: true });
    const radioData = radioarray.find((item) => item.id === radioValue);
    const checkboxData = checkboxarray.filter((item) => checkboxValue.includes(item.id)).map((item) => item.content);

    return (
        <div className="pt-[90px]">
            <h1 className="text-center text-5xl md:text-7xl my-5 dark:bg-black dark:text-white">
                <b>{t('header')}</b>
            </h1>
            <div className=" bg-black dark:bg-white py-10 w-fit mx-auto px-10 rounded-lg flex flex-col">
                <div className="  grid lg:grid-cols-2 w-fit gap-5">
                    <div className="flex flex-col gap-2">
                        <p className="text-white dark:text-black ml-2 font text-xl">{t('name')}</p>
                        <SearchInput value={nameValue} onChange={setNameValue} placeholder={t('placeholder.radio')} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-white dark:text-black ml-2 font text-xl">{t('email')}</p>
                        <SearchInput
                            value={emailValue}
                            onChange={setEmailValue}
                            placeholder={t('placeholder.checkbox')}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 py-2 text-xl text-white dark:text-black mt-4">
                    <h3>{t('radioQuestion')}</h3>
                    {radioarray.map((item) => {
                        return (
                            <label
                                key={item.id}
                                className="flex gap-1 hover:opacity-50 transition-opacity duration-300 cursor-pointer"
                            >
                                <input
                                    checked={item.id === radioValue}
                                    onChange={() => {
                                        setRadioValue(item.id);
                                    }}
                                    type="radio"
                                />
                                <p>{item.content}</p>
                            </label>
                        );
                    })}
                </div>
                <div className="text text-white dark:text-black text-xl">
                    <h3>{t('checkboxQuestion')}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {checkboxarray.map((item) => {
                            return (
                                <label
                                    key={item.id}
                                    className="flex gap-1 hover:opacity-50 transition-opacity duration-300 cursor-pointer"
                                >
                                    <input
                                        checked={checkboxValue.includes(item.id)}
                                        onChange={() => {
                                            handleChange(item.id);
                                        }}
                                        type="checkbox"
                                    />
                                    <p>{item.content}</p>
                                </label>
                            );
                        })}
                    </div>
                </div>
                <Button
                    className="text-black bg-white dark:text-white dark:bg-black px-20 py-2 rounded-lg mt-4 hover:opacity-50 transition-opacity duration-300 w-fit mx-auto cursor-pointer"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
                {isShow && (
                    <Modal onClose={handleClose} title={t('Confirm Form')}>
                        <div className=" text-white dark:text-black ">
                            {nameValue ? (
                                <h3>
                                    - {t('name')}: {nameValue}
                                </h3>
                            ) : (
                                <h3>null</h3>
                            )}
                            {emailValue ? (
                                <h3>
                                    - {t('email')}: {emailValue}
                                </h3>
                            ) : (
                                <h3>null</h3>
                            )}
                            {radioValue ? (
                                <h3>
                                    - {t('Meet Needs')}: {radioData.content}
                                </h3>
                            ) : (
                                <h3>null</h3>
                            )}
                            {checkboxValue ? (
                                <h3>
                                    - {t('Advantages of the web')}:
                                    {checkboxData.map((data, index) => {
                                        return (
                                            <div className="text-sm ms-3" key={index}>
                                                + {data}
                                            </div>
                                        );
                                    })}
                                </h3>
                            ) : (
                                <h3>null</h3>
                            )}
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    );
}

export default Feedbacks;
