import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefautLayout from './Layouts/DefaultLayout';
import { Fragment } from 'react';
import ScrollToTop from './components/scrollToTop';

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="dark:bg-black">
                    <ScrollToTop />
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefautLayout;
                            if (route.layout === null) {
                                Layout = Fragment;
                            } else if (route.layout) {
                                Layout = route.layout;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
