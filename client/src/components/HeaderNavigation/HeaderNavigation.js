import React  from 'react';
import style from './HeaderNavigation.module.sass';

import { Link } from "react-router-dom";

import { URL } from '../../api/baseURL'

import ListItem from './ListItem/ListItem'
import ButtonsHomePage from '../Buttons/ButtonsHomePage/ButtonsHomePage'

function HeaderNavigation(){
        return (
            <div className={style.header}>
                <div className={style.container}>
                    <div className={style.row}>

                        <Link to={'/'} className={style.link}>
                            <div className={style.logo} />
                        </Link>

                        <div className={style.list} >
                            <ul className={style.headerList}>
                                <ListItem>
                                    Name Ideas
                                    <>Beauty</>
                                    <>Consulting</>
                                    <>E-commerce</>
                                    <>Fashion & Clothing</>
                                    <>Finance</>
                                    <>Real Estate</>
                                    <>Tech</>
                                    <hr id={'one'}/>
                                    <>More Categories</>
                                </ListItem>

                                <ListItem>
                                    Contests
                                    <>How it Works</>
                                    <>Pricing</>
                                    <>Agency Services</>
                                    <hr id={'two'}/>
                                    <>Active Contests</>
                                    <>Winners</>
                                    <>Leaderboard</>
                                    <hr id={'three'}/>
                                    <>Become A Creative</>
                                </ListItem>

                                <ListItem>
                                    Our Work
                                    <>Names</>
                                    <>Taglines</>
                                    <>Logos</>
                                    <hr id={'four'}/>
                                    <>Testimonials</>
                                </ListItem>

                                <ListItem>
                                    Names For Sale
                                    <>Popular Names</>
                                    <>Short Names</>
                                    <>Intriguing Names</>
                                    <>Names By Category</>
                                    <>Visual Name Generator</>
                                    <hr id={'five'}/>
                                    <>Shell Your Domains</>
                                </ListItem>

                                <ListItem>
                                    Blog
                                    <>Ultimate Naming Guide</>
                                    <>Poetic Devices in Business Naming</>
                                    <>Crowded Bar Theory</>
                                    <hr id={'six'}/>
                                    <>All Articles</>
                                </ListItem>
                            </ul>
                        </div>

                        <ButtonsHomePage link={URL.CONTEST_TYPE}>start contest</ButtonsHomePage>

                    </div>
                </div>
            </div>
        )
}

export default HeaderNavigation;
