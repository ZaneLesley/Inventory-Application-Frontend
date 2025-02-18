import Header from '../../components/Header/Header.jsx';
import Footer from "../../components/Footer/Footer.jsx";

function ProductPage() {
    const tabList = [
        {name: "Product", url: "/Product"},
        {name: "User", url: "/User"},
        {name: "Employee", url: "/Employee"},
    ];
    return (
        <>
            <Header tabs={tabList}/>
            <Footer/>
        </>
    );
}

export default ProductPage;