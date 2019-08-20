import React from 'react';
//import style from './ContestSteps.module.sass';

import ContestPopularCategories from './ContestPopularCategories/ContestPopularCategories'
import ContestBundlePackages from './ContestBundlePackages/ContestBundlePackages'
import ContestOtherCategories from './ContestOtherCategories/ContestOtherCategories'

function ContestSteps(){

        return (
            <section>

                <ContestPopularCategories />
                <ContestBundlePackages />
                <ContestOtherCategories />

            </section>
        )

}

export default ContestSteps;

