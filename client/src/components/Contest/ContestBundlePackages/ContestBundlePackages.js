import React from 'react';
import style from './ContestBundlePackages.module.sass';

import ItemContestType from '../ItemContestType/ItemContestType'
import Heading from '../Heading/Heading'

function ContestBundlePackages(){
        return (
            <div className={style.contentType}>
                <div className={style.container}>
                    <div className={style.row}>

                        <Heading
                            headerText={"Save With Our Bundle"}
                            headerBoard={"Packages"}>
                            Launch multiple contests and pay a discounted bundle price
                        </Heading>

                        <div className={style.categories}>
                            <ul className={style.listContestType}>
                                <li>
                                    <ItemContestType
                                        src={['Company-Names','Logos']}
                                        href={'/startcontest'}
                                        name={'Name + Logo'}
                                        text={'Get the essentials needed to establish your brand together and save'}
                                    />
                                </li>
                                <li>
                                    <ItemContestType
                                        src={['Company-Names','Logos']}
                                        href={'/startcontest'}
                                        name={'Name + Logo + Business Cards'}
                                        text={'Get the branding essentials plus matching business cards and save'}
                                    />
                                </li>
                                <li>
                                    <ItemContestType
                                        src={['Company-Names','Taglines']}
                                        href={'/startcontest'}
                                        name={'Name + Tagline'}
                                        text={'Communicate your vision with the perfect Name/Tagline combo.'}
                                    />
                                </li>
                                <li>
                                    <ItemContestType
                                        src={['Company-Names','Logos','Taglines']}
                                        href={'/startcontest'}
                                        name={'Name + Logo + Tagline'}
                                        text={'Establish your entire brand identity and save with this bundle.'}
                                    />
                                </li>
                                <li>
                                    <ItemContestType
                                        src={['Logos','Business-Cards']}
                                        href={'/startcontest'}
                                        name={'Logo + Business Cards'}
                                        text={'Get your logo and business cards designed together and save'}
                                    />
                                </li>
                                <li>
                                    <ItemContestType
                                        src={['Logos','Taglines']}
                                        href={'/startcontest'}
                                        name={'Logo + Tagline'}
                                        text={'Description for Logo + Tagline will come here'}
                                    />
                                </li>
                                <li>
                                    <ItemContestType
                                        src={['Logos','Business-Cards','Stationary']}
                                        href={'/startcontest'}
                                        name={'Logo + Business Cards + Stationery'}
                                        text={'Get your logo, business cards and stationery designed together and save'}
                                    />
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )

}

export default ContestBundlePackages;

