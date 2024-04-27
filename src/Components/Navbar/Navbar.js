import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import Logo from '../../Assets/Insightify Logo.png';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <div className='logo-div'>
                    <img src={Logo} width={100} height={100} alt="Logo" className="mr-3 pointer flex ml-3 items-center" />
                    <h2 className='text-lg font-normal text-left text-[#09070A] leading-5 mt-0.75rem'>...the best online career compass</h2>
                </div>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
