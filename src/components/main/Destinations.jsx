import React from 'react'
import { destinationsData } from '../../data/destinationsData'

const Destinations = () => {
    return (
        <section className="destinations">
            <div className="container">
                <div className="destinations-content">
                    <h2 className="destinations-text">
                        keyingi manzilingizni tanlang
                    </h2>
                    <h1 className="destinations-title">
                        Eng yaxshi manzilni o'rganing
                    </h1>

                    <div className="destinations-cards">
                        {
                            destinationsData.map((item) => (
                                <div className="destinations-card">
                                    <img src={item.img} className='destinations-img' alt="" />
                                    <h1 className="destinations-name">{item.city}</h1>
                                    <p className="destinations-subtitle">{item.desc}</p>
                                    <div className="destinations-card_items">
                                        <span className="destinations-price">
                                            {item.price}
                                        </span>
                                        <button className="destinations-btn">
                                            Olish
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Destinations