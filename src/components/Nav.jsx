import React from 'react'
import headerlogo from '../assets/images/headerlogo.svg'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
// import footerlogo from '../assets/images/footerlogo.svg'

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-center items-center max-container max-lg:justify-between">
                <a href="/">
                    <img src={headerlogo} alt="Logo" width={110} height={29} />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden visible">
                    {navLinks.map((item) => {
                        return (<li key={item.label} className='text-sm font-light font-montserrat'>
                            <a href={item.href}>
                                {item.label}
                            </a>
                        </li>)
                    })}
                </ul>
                <div className="invisible max-lg:visible max-lg:block">
                    <img src={hamburger} className="w-7 h-7" alt="Hamburger" />
                </div>

                <div className='max-lg:hidden visible'>
                <a href="/" className='font-medium font-montserrat'>Sign in</a>
                <p className='inline'> / </p>
                    <a href="/" className='font-medium font-montserrat'>Explore</a>
            </div>
            </nav>
        </header>
    )
}

export default Nav
