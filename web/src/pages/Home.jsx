import heroBanner from '../assets/hero-banner.png'
import { PiShoppingCartLight } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import React, { useState } from 'react';
import { courses } from '../../db'

const { dataScience, IT, Leadership, WebDevelopment, Communication, BusinessIntelligence } = courses;

export const Home = () => {
    const courseList = Object.keys(courses)
    const [selectedCourse, setSelectedCourse] = useState(courseList[0]);
    console.log(courseList);

    return (
        <>
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
            <section>
                <div className="tabs">
                    {courseList.map((tab, idx) => (
                        <React.Fragment key={idx}>
                            <input
                                type="radio"
                                name="tab"
                                id={`tab${idx}`}
                                onClick={() => setSelectedCourse(tab)}
                            />
                            <label
                                className={selectedCourse === tab ? 'tab-label active' : 'tab-label'}
                                htmlFor={`tab${idx}`}
                            >
                                {tab}
                            </label>
                        </React.Fragment>
                    ))}
                </div>
                <div className='tab-content'>
                    <TabContent data={courses[selectedCourse]} />
                </div>
            </section>
        </>
    )
}


const TabContent = ({ data }) => {
    return (data.map(course => (
        <div className='course-card' key={JSON.stringify(course)}>
            <div className='course-card-img'>
                <img src={course.imageURL} className='res-img' alt="" />
            </div>
            <div className='course-card-content'>
                <h4>{course.courseName}</h4>
                <h5>{course.creatorName}</h5>
                <h5>{course.rating}({course.totalReview})</h5>
                <h5>₹ {course.price}</h5>
                <span>{course.tags.join(",")}</span>
            </div>
        </div>
    )))
}