import React from 'react'
import img from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <section className='banner'>
            <div className="container">
                <div className="banner-content">
                    <div className="banner-texts">
                        <span className="banner-text">
                            Dunyoni o'rganing
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="#f85e9f" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.35762 2.22454C8.69649 2.22454 8.13411 2.68392 7.97624 3.30309H13.2845C13.1267 2.68392 12.5643 2.22454 11.9031 2.22454H9.35762ZM14.7842 3.30308H16.7378C18.8098 3.30308 20.497 5.01077 20.497 7.10794C20.497 7.10794 20.4379 7.99574 20.4181 9.2321C20.4162 9.32993 20.3687 9.42579 20.2908 9.48377C19.8163 9.83426 19.3821 10.1239 19.3426 10.1438C17.7048 11.2423 15.8015 12.0153 13.7739 12.3998C13.6417 12.4257 13.5115 12.3569 13.4443 12.239C12.876 11.2543 11.8144 10.6132 10.6304 10.6132C9.45427 10.6132 8.38275 11.2473 7.79766 12.233C7.72958 12.3489 7.60131 12.4158 7.47009 12.3908C5.45926 12.0053 3.55598 11.2333 1.92799 10.1538L0.980789 9.49472C0.901856 9.44482 0.852518 9.35488 0.852518 9.25508C0.822923 8.74572 0.773584 7.10794 0.773584 7.10794C0.773584 5.01077 2.46079 3.30308 4.53278 3.30308H6.47651C6.66398 1.85504 7.87758 0.726562 9.35762 0.726562H11.9031C13.3832 0.726562 14.5968 1.85504 14.7842 3.30308ZM20.1615 11.3922L20.1221 11.4122C18.129 12.7504 15.7315 13.6392 13.2154 14.0087C12.8602 14.0586 12.505 13.8289 12.4064 13.4695C12.1893 12.6506 11.4887 12.1112 10.6501 12.1112H10.6402H10.6205C9.78187 12.1112 9.0813 12.6506 8.86424 13.4695C8.76562 13.8289 8.41037 14.0586 8.05517 14.0087C5.53918 13.6392 3.14158 12.7504 1.14852 11.4122C1.13866 11.4023 1.03999 11.3423 0.961056 11.3922C0.872251 11.4422 0.872251 11.562 0.872251 11.562L0.941322 16.6551C0.941322 18.7523 2.61865 20.45 4.69065 20.45H16.5701C18.6421 20.45 20.3194 18.7523 20.3194 16.6551L20.3984 11.562C20.3984 11.562 20.3984 11.4422 20.3096 11.3922C20.2603 11.3623 20.2011 11.3723 20.1615 11.3922ZM11.3704 15.5766C11.3704 15.9961 11.0448 16.3255 10.6304 16.3255C10.2258 16.3255 9.89035 15.9961 9.89035 15.5766V14.2883C9.89035 13.8788 10.2258 13.5393 10.6304 13.5393C11.0448 13.5393 11.3704 13.8788 11.3704 14.2883V15.5766Z" fill="#F85E9F" />
                            </svg>
                        </span>
                        <h1 className="banner-title">
                            Sayohat uchun <span className='banner-title_span'>eng yaxshi</span> manzillar
                        </h1>
                        <p className="banner-subtitle">
                            Sarguzasht qulaylik bilan bir joyda. Biz unutilmas sayohatlarni taklif qilamiz.
                        </p>

                        <div className="banner-buttons">
                            <button className="banner-btn">Hozir Boshlang</button>
                            <button className="banner-button">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="#5d50c6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.7195 0.625977C5.27579 0.625977 0.857738 5.04403 0.857738 10.4877C0.857738 15.9314 5.27579 20.3494 10.7195 20.3494C16.1632 20.3494 20.5812 15.9314 20.5812 10.4877C20.5812 5.04403 16.173 0.625977 10.7195 0.625977ZM13.678 12.6869L10.818 14.3338C10.463 14.5409 10.0686 14.6395 9.68393 14.6395C9.28956 14.6395 8.90486 14.5409 8.54988 14.3338C7.83984 13.9196 7.41578 13.1898 7.41578 12.3614V9.05775C7.41578 8.23923 7.83984 7.4996 8.54988 7.08541C9.25998 6.67121 10.108 6.67121 10.8279 7.08541L13.6878 8.73231C14.3978 9.14651 14.8219 9.87627 14.8219 10.7047C14.8219 11.533 14.3978 12.2727 13.678 12.6869Z" fill="#5D50C6" />
                                </svg>
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    <div className="banner-image">
                        <img src={img} className='banner-img' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner