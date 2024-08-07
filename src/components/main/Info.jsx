import React from 'react'
import img from '../../assets/images/info.png'
import { infoData } from '../../data/infoData'

const Info = () => {
    return (
        <section className="info">
            <div className="container">
                <div className="info-content">
                    <div className="info-image">
                        <img src={img} className='info-img' alt="info img" />
                    </div>

                    <div className="info-texts">
                        <h3 className="info-text">BIZ SIZ UCHUN ENG ZO'RIMIZ</h3>
                        <h1 className="info-title">O'zingizning orzuingizdagi manzil</h1>

                        <div className="info-items">
                            {
                                infoData.map((item) => (
                                    <div className="info-item" key={item.id}>
                                        <h1 className="info-num">{item.num}</h1>
                                        <p className="info-subtitle">{item.title}</p>
                                    </div>

                                ))
                            }
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Info