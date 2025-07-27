import clsx from 'clsx';
import Image from '../../../components/image';
import { useEffect, useState } from 'react';

function BackgroundDesign({minScreen,maxScreen,source,alter}) {
    ///// Hover IMG Home
    const [target, setTarget] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > minScreen && window.scrollY < maxScreen) {
                setTarget(true);
            } else {
                setTarget(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        ///Clear
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="home_img group overflow-hidden w-full relative">
            <Image src={source} alt={alter} />
            <div
                className={clsx(
                    'absolute top-0 start-0 w-full h-full duration-300',
                    target ? 'lg:bg-amber-300 opacity-10' : 'bg-black opacity-50',
                )}
            />
            <div
                className={clsx(
                    'homeBgHover absolute top-[50%] start-[50%] translate-[-50%] z-10 w-170 h-120 rounded-2xl overflow-hidden border-5 transition-all duration-300',
                    target ? ' lg:border-amber-200' : 'border-[transparent]',
                )}
            >
                <Image src={source} alt={alter} />
            </div>
        </div>
    );
}

export default BackgroundDesign;
