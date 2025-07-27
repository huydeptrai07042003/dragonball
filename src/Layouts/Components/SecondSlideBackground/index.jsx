import BackgroundDesign from '../BackgroundDesign';
import dragonballHomeBg2 from '../../../assets/dragonball_background2.jpg';

function SecondSlideBackground() {
    return (
        <div className='mt-10'>
            <BackgroundDesign minScreen={2700} maxScreen={3600} source={dragonballHomeBg2} alter="DragonBall_picture" />
        </div>
    );
}

export default SecondSlideBackground;
