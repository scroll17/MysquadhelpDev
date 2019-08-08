import React  from 'react';
import style from './HowItWorksHome.module.sass';

import ButtonsHomePage from '../../Buttons/ButtonsHomePage/ButtonsHomePage'

import { Carousel } from 'react-bootstrap';

function HowItWorksHome(){

    const prevIcon = <span className={style.carouselIconPrev}><i className="fas fa-chevron-left"/></span>;
    const nextIcon = <span className={style.carouselIconNext}><i className="fas fa-chevron-right"/></span>;

        return (
            <div className={style.main}>
                <div className={style.container}>
                    <div className={style.row}>

                        <ul className={style.navTabs}>
                            <li  className={style.active}>
                                <span>Names</span>
                            </li>
                            <li  className={style.larged}>
                                <span>Taglines & Slogans</span>
                            </li>
                            <li  className={style.larged}>
                                <span>Logo Designs</span>
                            </li>
                        </ul>

                        <div className={style.tabContent}>
                            <Carousel
                                indicators={false}
                                pauseOnHover={true}

                                nextIcon={nextIcon}
                                prevIcon={prevIcon}
                            >
                                <Carousel.Item>
                                    <div className={style.carousel}>
                                        <div className={style.item}
                                            style={{backgroundImage: "url(https://www.squadhelp.com/story_images/visual_images/B_2_15.jpg)"}}
                                        />
                                        <div className={style.item}
                                             style={{backgroundImage: "url(https://www.squadhelp.com/story_images/visual_images/B_2_15.jpg)"}}
                                        />
                                        <div className={style.item}
                                             style={{backgroundImage: "url(https://www.squadhelp.com/story_images/visual_images/B_2_15.jpg)"}}
                                        />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={style.carousel}>
                                        <div className={style.item}
                                             style={{backgroundImage: "url(https://www.squadhelp.com/story_images/visual_images/B_2_15.jpg)"}}
                                        />
                                        <div className={style.item}
                                             style={{backgroundImage: "url(https://www.squadhelp.com/story_images/visual_images/B_2_15.jpg)"}}
                                        />
                                        <div className={style.item}
                                             style={{backgroundImage: "url(https://www.squadhelp.com/story_images/visual_images/B_2_15.jpg)"}}
                                        />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>



                        <div className={style.Button}>
                            <ButtonsHomePage link={"/Name-Ideas"}>More Name Examples</ButtonsHomePage>
                        </div>

                    </div>
                </div>
            </div>
        )

}

export default HowItWorksHome;

