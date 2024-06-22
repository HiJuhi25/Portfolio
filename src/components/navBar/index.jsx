import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';
import {BiBullseye} from 'react-icons/bi'
const data = [
    {
        lable: 'HOME',
        to: '/'
    },
    {
        lable: 'ABOUT ME',
        to: '/about'
    },
    {
        lable: 'SKILLS',
        to: '/skills'
    },
    {
        lable: 'RESUME',
        to: '/resume'
    },
    {
        lable: 'PROJECTS',
        to: '/portfolio'
    },
    
]

const Navbar = () => {

    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    };

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to={"/"} className='navbar__container__logo'>
                        <BiBullseye size={30} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}` }>
                    {data.map((item, key) => (
                        <li key={key} className='navbar__container__menu__item'>
                            <Link className='navbar__container__menu__item__links' to={item.to}>
                                {item.lable}
                            </Link>
                        </li>
                    ))
                    }
                </ul>
                <div className='nav-icon' onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar
