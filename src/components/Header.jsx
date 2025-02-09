import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";

function Header({tabs = []}) {
    const [storeName, setStoreName] = useState(null);
    const [storeId, setStoreId] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/stores', {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                setStoreName(data[0].name)
                setStoreId(data[0].id);
            })
            .catch((error) => console.log('Fetch error:', error));
    }, []);
    return (<div className="header">
        <div className="navbar">
            img
        </div>
        <div className="store-name">
            {storeName}
        </div>
        <div className="store-id">
            {storeId}
        </div>
        <div className="tabs">
            {tabs.map((tab, index) => (<Link key={index} to={tab.url} className={"tab"}>
                <div>{tab.name}</div>
            </Link>))}
        </div>
    </div>);
}

export default Header;