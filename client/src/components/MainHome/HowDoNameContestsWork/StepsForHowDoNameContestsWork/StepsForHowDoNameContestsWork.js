import React  from 'react';
import style from './StepsForHowDoNameContestsWork.module.sass';

function StepsForHowDoNameContestsWork(props ){

    const { dataForPage, bgColor, positionOfGif } = props;

    let backgroundColor;
    let textPositionNearTheGif = positionOfGif ?
        `${style.blockWithInformation} ${style.informationReverse}`
        : style.blockWithInformation;

    if(positionOfGif === "right"){
        backgroundColor = {backgroundColor: bgColor, color: "white"};
    }else{
        backgroundColor = {backgroundColor: bgColor};
    }

    const liItems = ( steps ) => {
        return steps.map( step => (<li key={step}>
            <i className="fas fa-check" style={backgroundColor}/>
            <span>{step}</span>
        </li>));
    };

    return (
        <div className={style.StepsForHowDoNameContestsWork} style={backgroundColor}>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.title}>{props.children}</div>
                    <div className={textPositionNearTheGif}>
                        <div className={style.box}>
                            <h4>{dataForPage.title}</h4>
                            <ul>
                                {liItems(dataForPage.steps)}
                            </ul>
                        </div>
                        <img className={style.gif} src={dataForPage.src} alt={''}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StepsForHowDoNameContestsWork;

