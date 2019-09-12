import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-container__icon">
                <i className="fab fa-react"></i>
            </div>

            <div className="header-container__title">
                <h2>Users App</h2>
            </div>
        </div>
    )
}

export default Header
