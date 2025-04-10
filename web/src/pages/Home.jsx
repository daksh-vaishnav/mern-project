import heroBanner from '../assets/hero-banner.png'
import { PiShoppingCartLight } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";

export const Home = () => {
    return (
        <section>
            <div className='hero-container'>
                <img className='hero-banner' src={heroBanner} alt="" />
                <div className='card'>
                    <h2>Sale ends today</h2>
                    <p className='hero-text'>Have a dream? Start learning your way to it with courses from ₹499.</p>
                </div>
            </div>
        </section>
    )
}
