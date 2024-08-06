import React from 'react'
import { aboutData } from '../../data/aboutData'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-texts">
                        <h3 className="about-text">
                            Biz nimaga xizmat qilamiz
                        </h3>
                        <h1 className="about-title">
                            Yuqori qiymatlar
                            Siz uchun
                        </h1>
                        <p className="about-subtitle">
                            Hayotning kengligini qabul qiling va oldinga intiling
                        </p>
                    </div>
                    <div className="about-info">
                        {
                            aboutData.map((item) => (
                                <div className="about-card" key={item.id}>
                                    <img src={item.img} className='about-img' alt="" />
                                    <h1 className="about-info_title">{item.title}</h1>
                                    <p className="about-info_subtitle">{item.subtitle}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About