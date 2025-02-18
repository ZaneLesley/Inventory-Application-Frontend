import './Footer.css'

import {Link} from 'react-router-dom';
import githubLogo from '../../assets/github-mark.svg';

function Footer() {
    return (
        <div className="footer-container">
            <div className="github-logo">
                <Link to="https://github.com/ZaneLesley/Inventory-Application-Frontend">
                    <img src={githubLogo} alt="GitHub Logo"/>
                </Link>
            </div>
            <div className="credits">Zane Lesley</div>
            <div className="Links">
                <Link to="http://localhost:3000/api">
                    <div className="link">API</div>
                </Link>
            </div>
        </div>
    )
        ;
}

export default Footer;