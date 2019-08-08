import React  from 'react';
import style from './MarketplaceDomainsHome.module.sass';

import { textAndLinksForMarketplaceDomainsHome } from '../../../utils/textAndLinksForPages'

function MarketplaceDomainsHome(){

        const MarketplaceDomains = ( obj ) => {
            return obj.map( content => {
                const img = {backgroundImage: `url(${content.src})`};
                return(
                    <div className={style.heroHighlightContainer}>
                        <div className={style.heroHighlight}>
                            <div className={style.images} style={img} />
                        </div>
                        <h3>{content.title}</h3>
                        <span>{content.description}</span>
                    </div>
                )
            });
        };

        return (
            <div className={style.marketplaceDomainsHome}>
                <div className={style.row}>
                    <div className={style.heading}>
                        <h2>Why Squadhelp?</h2>
                        <span />
                    </div>

                    <div className={style.container}>
                        {MarketplaceDomains(textAndLinksForMarketplaceDomainsHome)}
                    </div>

                </div>
            </div>
        )

}

export default MarketplaceDomainsHome;

