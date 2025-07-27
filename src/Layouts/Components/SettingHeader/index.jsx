import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBurger } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { useState } from 'react';
import RenderSetting from '../RenderSetting';
import clsx from 'clsx';

function SettingHeader() {
    const [isShow, setIsShow] = useState(false);
    const [isHide, setIsHide] = useState(false);


    const onHideResult = () => {
        setIsShow(false);
    };

    const handleClick =()=>{
        setIsShow(!isShow);
        if(!isShow){setIsHide(false);}
    }

    return (
        <TippyHeadless
            render={(attrs) => (
                <div
                    className="bg-black dark:bg-white ms-2 text-white dark:text-black text-sm md:text-md mt-2 p-1 rounded-md w-25 sm:w-35"
                    tabIndex="-1"
                    {...attrs}
                >
                    <RenderSetting isHide={isHide}/>
                </div>
            )}
            placement="bottom-start"
            visible = {isShow}
            interactive
            onClickOutside={onHideResult}
            onHide={()=>{setIsHide(true)}}
        >
            <div className="self-center text-2xl group relative cursor-pointer w-30 md:w-40" onClick={handleClick}>
                <FontAwesomeIcon
                    className={clsx("absolute top-[50%] translate-y-[-50%] transition-opacity duration-300",isShow ? 'opacity-0' : 'opacity-100')}
                    icon={faBars}
                />
                <FontAwesomeIcon
                    className={clsx("absolute top-[50%] translate-y-[-50%] transition-opacity duration-300",isShow ? 'opacity-100' : 'opacity-0')}
                    icon={faBurger}
                />
            </div>
        </TippyHeadless>
    );
}

export default SettingHeader;
