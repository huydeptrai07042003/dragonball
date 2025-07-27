import Header from "../Components/Header";
import Footer from "../Components/Footer";
function HeaderOnly({children}) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
}

export default HeaderOnly;
