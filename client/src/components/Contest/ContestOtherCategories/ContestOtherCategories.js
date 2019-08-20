import React  from 'react';
import style from './ContestOtherCategories.module.sass';

import ItemContestType from '../ItemContestType/ItemContestType'
import Heading from '../Heading/Heading'

function ContestOtherCategories(){
        return (
            <div className={style.contentType}>
                <div className={style.container}>
                    <div className={style.row}>

                        <Heading
                            headerText={"Other"}
                            headerBoard={"Categories"}>
                            Additional ways to build your brand
                        </Heading>

                        <div className={style.categories}>
                            <ul className={style.listContestType}>
                                <li>
                                    <ItemContestType
                                        src={['Signage']}
                                        href={'/startcontest'}
                                        name={'Signage'}
                                        text={'Get noticed with a high-quality a sign, billboard, or banner'}
                                    />
                                </li>
                                <li>
                                    <ItemContestType
                                        src={['Clothing']}
                                        href={'/startcontest'}
                                        name={'Clothing'}
                                        text={'Get dozens of T-shirt cover designs based upon your branding from our creatives'}
                                    />
                                </li>
                                <li>
                                    <ItemContestType
                                        src={['Email-Newsletter-Design']}
                                        href={'/startcontest'}
                                        name={'Email Template'}
                                        text={'Get dozens of beautifully designed email templates for your email marketing campaigns from our branding experts'}
                                    />
                                </li>
                                <li>
                                    <ItemContestType
                                        src={['Product-Feedback-Research']}
                                        href={'/startcontest'}
                                        name={'Product Feedback & Research'}
                                        text={'Get feedback, ideas, research report for your product, business idea or industry. You can get early product advice from creatives across the world before launching your product to general audience. '}
                                    />
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )

}

export default ContestOtherCategories;

