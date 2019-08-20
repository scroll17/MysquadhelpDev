import React from 'react';
import style from './ProgressMain.module.sass';



function ProgressMain(props){

    const progressSteps = (len) => {
        return len.map( (item, index) => {
            if(index === len.length-1){
                return (
                    <div className={style.progressBarStep} key={item}>
                        <div className={`${style.circle} ${style.done}`}>
                            <span className={style.label}/>
                        </div>
                        <div className={style.tooltip}>
                            <div className={style.tooltipInner}>
                                {len.length}. {props.caption}
                            </div>
                        </div>
                    </div>
                )
            }else{
                return (
                    <div className={style.progressBarStep} key={item}>
                        <div className={`${style.circle} ${style.complete}`}>
                            <span className={style.label}>
                                <i className="fa fa-check"/>
                            </span>
                        </div>
                        <span className={style.bar}/>
                    </div>
                )
            }
        })
    };

    return (
        <div className={style.progressMain}>
                {progressSteps(props.numberOfStages)}
        </div>

    )

}

export default ProgressMain;




/*
function ProgressMain(props){


    return (
        <div className={style.progressMain}>
            <div className={style.progressBarStep}>
                <span/>
                <div className={`${style.circle} ${style.done}`}>
                    <span className={style.label}/>
                </div>
                <div className={style.tooltip}>
                    <div className={style.tooltipInner}>
                        1. Select Contest Type
                    </div>
                </div>
            </div>
            <div className={style.progressBarStep}>
                <span className={style.bar}/>
                <div className={style.circle}>
                    <span className={style.label}/>
                </div>
                <div className={style.Tooltip}>
                                </div>
            </div>
            <div className={style.progressBarStep}>
                <span className={style.bar}/>
                <div className={style.circle}>
                    <span className={style.label}/>
                </div>
                <div className={style.Tooltip}>
                                </div>
            </div>
            <div className={style.progressBarStep}>
                <span className={style.bar}/>
                <div className={style.circle}>
                    <span className={style.label}/>
                </div>
                <div className={style.Tooltip}>
                                </div>
            </div>
            <div className={style.progressBarStep}>
                <span className={style.bar}/>
                <div className={style.circle}>
                    <span className={style.label}/>
                </div>
                <div className={style.Tooltip}>
                                </div>
            </div>
            <div className={style.progressBarStep}>
                <div className={style.circle}>
                    <span className={style.label}/>
                </div>
                <div className={style.Tooltip}>
                                </div>
                <span className={style.bar}/>
            </div>
        </div>

    )

}

export default ProgressMain;*/


