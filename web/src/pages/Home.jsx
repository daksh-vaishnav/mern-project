import heroBanner from '../assets/hero-banner.png'
import { PiShoppingCartLight } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";

export const Home = () => {
    return (
        <section>
            <div className='hero-container'>
                <img className='hero-banner' src={heroBanner} alt="" />
                <div className='card'>
                    <h2 className='font1'>Sale ends today</h2>
                    <p className='hero-text'>Have a dream? Start learning your way to it with courses from ₹499.</p>
                </div>
                <div className='hero-content'>
                    <h2 className='hero-title font1'>All the skills you need in one place</h2>
                    <p className='hero-text'>From critical skills to technical topics, Udemy supports your professional development.</p>
                </div>
            </div>
        </section>
    )
}
