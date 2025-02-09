import Header from '../../components/Header.jsx';

function ProductPage() {
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

export default ProductPage;