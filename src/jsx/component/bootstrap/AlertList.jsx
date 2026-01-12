import { useState } from 'react';
import { Link } from "react-scroll";
import { alertSidebar } from '../../constant/alldata';

const AlertList = () => {
    const [activeLink, setActiveLink] = useState(0);
    return (
        <>
            <div className="demo-right-inner dlab-scroll " >
                <h4 className="title">Alerts</h4>
                <ul className="navbar-nav" id="menu-bar">
                    {alertSidebar.map((item, ind) => (
                        <li key={ind} >
                            <Link to={item.to} smooth={true}
                                className={`scroll ${ind === activeLink ? 'active' : ''} `}
                                activeClass="active"
                                spy={true}
                                onClick={() => setActiveLink(ind)}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default AlertList;