import React from 'react';
import style from './StartContestSteps.module.sass';


import ProgressMain from './ProgressMain/ProgressMain'

import connect from "react-redux/es/connect/connect";
import { textForStartContestSteps  } from '../../../utils/textAndLinksForPages'

function StartContestSteps(props){

    const numberOfStages = props.contest.length;

    const nowStage = props.contest[numberOfStages-1];

    const textForStage = textForStartContestSteps.find( item => item.page === nowStage);


    return (
        <div className={style.startContestSteps}>
            <div className={style.container}>
                <div className={style.row}>

                    <div className={style.headingSteps}>
                        <h2 className={style.text}>{textForStage.title}</h2>
                        <p>
                            {textForStage.description}
                        </p>
                    </div>

                    <ProgressMain
                        caption={textForStage.caption}
                        numberOfStages={props.contest}
                    />

                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => ({
    contest: state.userReducers.contest
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(StartContestSteps);


