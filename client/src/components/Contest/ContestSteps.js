import React from 'react';

import ContestTypes from './СontestTypes/СontestTypes'
import { ContestPopularCategories, ContestOtherCategories, ContestBundlePackages }  from '../../utils/textAndLinksForPages'

function ContestSteps(){
        const style = {
           headingColor: '#fff',
           borderColor: '#fff',
           bgColor: '#28d2d1',
           itemBgColor: '#ffffff',
        };

        return (
            <section>
                <ContestTypes
                    {...style}
                    textAndLinks={ContestPopularCategories}
                />
                <ContestTypes
                    textAndLinks={ContestBundlePackages}
                />
                <ContestTypes
                    textAndLinks={ContestOtherCategories}
                />
            </section>
        )
}

export default ContestSteps;

