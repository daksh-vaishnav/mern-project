import logo from '../assets/logo.svg'
import { PiShoppingCartLight } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

export const Header = () => {
    return (
        <header className='header'>
            <nav className="nav">
                <div className="logo-left">
                    <img className="logo" src={logo} al="logo" />
                    <a className="nav-item">Explore</a>
                </div>
                <div className="logo-right">
                    <a className="nav-item"> Plan & Pricing</a>
                    <a className="nav-item"> Udemy Business</a>
                    <a className="nav-item"> Tech on Udemy</a>
                    <a className="nav-item"> <PiShoppingCartLight fontSize={'1.3rem'} /></a>
                    <button className='nav-outer-btn'>Login</button>
                    <button className='nav-btn'>Sign up</button>
                    <button className='nav-lan-btn'><CiGlobe fontSize={"2rem"} /></button>
                </div>
            </nav>
            <div className='search'>
                <input className='search-header' type="text" placeholder='Search for anything' ></input>
            </div>
        </header>

    )
}
