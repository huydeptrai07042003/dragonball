import MainHomeContent from '../Layouts/Components/MainHomeContent';
import HomeBody from '../Layouts/Components/HomeBody';
import EventUpdate from '../Layouts/Components/EventUpdate';
import FirstSlideBackground from '../Layouts/Components/FirstSlideBackground';
import MostSearch from '../Layouts/Components/MostSearch';
import SecondSlideBackground from '../Layouts/Components/SecondSlideBackground';

function Home() {
    return (
        <div>
            <MainHomeContent />
            <HomeBody />
            <FirstSlideBackground />
            <EventUpdate />
            <SecondSlideBackground />
            <MostSearch />
        </div>
    );
}

export default Home;
