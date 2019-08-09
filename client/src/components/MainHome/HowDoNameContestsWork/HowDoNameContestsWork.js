import React  from 'react';
import style from './HowDoNameContestsWork.module.sass';

import { textAndLinksForHowDoNameContestsWork } from '../../../utils/textAndLinksForPages'
import StepsForHowDoNameContestsWork from './StepsForHowDoNameContestsWork/StepsForHowDoNameContestsWork'

function HowDoNameContestsWork(){
    return (
        <>
            <StepsForHowDoNameContestsWork
                bgColor={'white'}
                positionOfGif={'left'}
                dataForPage={textAndLinksForHowDoNameContestsWork[0]}>
                <h2>How Do Name Contests Work?</h2>
            </StepsForHowDoNameContestsWork>
            <StepsForHowDoNameContestsWork
                bgColor={'#28d2d0'}
                positionOfGif={'right'}
                dataForPage={textAndLinksForHowDoNameContestsWork[1]}>
            </StepsForHowDoNameContestsWork>
            <StepsForHowDoNameContestsWork
                bgColor={'#f9f9f9'}
                positionOfGif={'left'}
                dataForPage={textAndLinksForHowDoNameContestsWork[2]}>
            </StepsForHowDoNameContestsWork>
        </>
    )

}

export default HowDoNameContestsWork;

// #28d2d0
// #f9f9f9