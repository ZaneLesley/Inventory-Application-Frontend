import LandingPage from './pages/LandingPage/LandingPage.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';

const routes = [
    {
        path: "/",
        element: <LandingPage/>,
    },
    {
        path: "Product",
        element: <ProductPage/>,
    }
];

export default routes;