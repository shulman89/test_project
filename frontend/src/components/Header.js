import '../css/header.scss'
import logo from '../media/logo.png'
import {useEffect, useState} from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function Header() {
    const [navbarItems, setNavbarItems] = useState()
    const [modal, setModal] = useState(false)
    useEffect(() => {
        axios
            .get('https://testigorek.site/navbar/')
            .then((response) => {
                setNavbarItems(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);


    return (
        <div className={'header-container'}>
            <div className={'header-logo'}>
                <img src={logo} alt={'logo'}/>
            </div>
            <div className={'header-navMenu'}>
                {navbarItems &&
                    navbarItems.map((item) =>
                        <Link className={'link'} to="#">{item.name}</Link>
                    )}
            </div>
            <div
                className={'burger-navMenu'}
                onClick={() => setModal(!modal)}
            >
                <FontAwesomeIcon icon={faBars}/>
            </div>

            <div className={modal ? 'active' : 'hidden'}>
                {navbarItems &&
                    navbarItems.map((item) =>
                       <div> <Link className={'link-modal'} to="#">{item.name}</Link></div>
                    )}
            </div>
        </div>
    )
}

export default Header