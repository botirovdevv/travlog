import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { linksData } from '../../data/linksData';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => {
        setIsOpen(true)
        document.body.classList.add('scroll')
    }

    const closeMenu = () => {
        setIsOpen(false)
        document.body.classList.remove('scroll')
    }
    return (
        <nav className='nav'>
            <div className={isOpen ? "nav-bg show" : "nav-bg"} onClick={closeMenu}></div>
            <div className="container">
                <div className="nav-content">
                    <a href="/" className="nav-logo">
                        Travlog
                    </a>

                    <ul className={isOpen ? "nav-links show" : "nav-links"}>
                        <a href='/' className='nav-logo_mobile'>Travlog</a>
                        <button className="nav-close_btn" onClick={closeMenu}>
                            <IoClose />
                        </button>
                        {
                            linksData.map((item) => (
                                <a href={item.to} className='nav-link' onClick={closeMenu}>
                                    {item.title}
                                </a>
                            ))
                        }
                    </ul>

                    <div className="nav-items">

                        <a href='#contact' className="nav-btn">
                            Sayohatni Boshlash
                        </a>

                        <button className="nav-menu_btn" onClick={openMenu}>
                            <RiMenu3Fill />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar