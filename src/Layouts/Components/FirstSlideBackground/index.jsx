import BackgroundDesign from '../BackgroundDesign';
import dragonballHomeBg from '../../../assets/dragonball_background.jpg';

function FirstSlideBackground() {
    return (
        <div className='mt-10'>
            <BackgroundDesign minScreen={1200} maxScreen={2100} source={dragonballHomeBg} alter="DragonBall_picture" />
        </div>
    );
}

export default FirstSlideBackground;
