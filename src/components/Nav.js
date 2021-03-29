import React from 'react'
import '../styles/Nav.css'
import NavLink from './NavLink'

function Nav() {
    return (
        <div className='NavContainer'>

            {/* <div className="NavTitle">
                <h1>Lucas Cantão</h1>
                <p>Web Developer</p>
            </div> */}

            <div className="NavLinks">
                <NavLink title={'Home'} />
                <NavLink title={'Projects'} />
                <NavLink title={'Contact'} />
            </div>

        </div>
    )
}

export default Nav
