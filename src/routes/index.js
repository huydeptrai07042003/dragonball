import { Home,About,Contact,Products,Pagination } from '../pages';
import HeaderOnly from '../Layouts/HeaderOnly';
//Public Route
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/About', component: About },
    { path: '/Contact', component: Contact,  layout:HeaderOnly },
    { path: '/Products', component: Products, layout:HeaderOnly },
    { path: '/Pagination', component: Pagination, layout:HeaderOnly },

];

//Prive Route
const privateRoutes = [];

export { publicRoutes, privateRoutes };
