import Header from '../../components/Header/Header.jsx';

function LandingPage() {
    const tabList = [
        {name: "Product", url: "/Product"},
        {name: "User", url: "/User"},
        {name: "Employee", url: "/Employee"},
    ];
    return (
        <>
            <Header tabs={tabList}/>
        </>
    );
}

export default LandingPage;