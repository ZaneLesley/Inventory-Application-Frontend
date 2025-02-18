import './LandingPage.css'
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function LandingPage() {
    const tabList = [
        {name: "Product", url: "/Product"},
        {name: "User", url: "/User"},
        {name: "Employee", url: "/Employee"},
    ];
    return (
        <>
            <Header tabs={tabList}/>
            <div className="article">Stuff</div>
            <Footer />
        </>
    );
}

export default LandingPage;