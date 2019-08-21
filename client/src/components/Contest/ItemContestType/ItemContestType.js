import React from 'react';
import style from './ItemContestType.module.sass';

import { addToContestQueue, nextContestStage } from "../../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

import { first } from 'lodash';

function ItemContestType(props){
    const { contestQueue, contestTo} = props;

    const uploadImage = (img) => ({ backgroundImage: `url(https://www.squadhelp.com/story_images/contest_types/${img}_blue.png)`});

    const showBlockImage = ( images ) => images.map( image => {
        return (
            <div key={image}
                 style={uploadImage(image)}
                 className={style.image}
            />)
    });

    return (
        <span
            style={{background: props.bgColor}}
            className={style.container}
            onClick={() => {
                if(contestTo.includes(first(contestQueue))){
                    return props.nextContestForm()
                }
                return props.toNewContestQueue(contestTo)
            }}
        >
            <div className={style.images}>
                {showBlockImage(props.src)}
            </div>

            <h5>{props.name}</h5>
            <hr />
            <p>{props.text}</p>
        </span>
    )
}

const mapStateToProps = (state) => ({
    contestQueue: state.contestReducers.contestQueue
});
const mapDispatchToProps = dispatch => ({
    toNewContestQueue: stages => dispatch(addToContestQueue(stages)),
    nextContestForm: () => dispatch(nextContestStage())
});


ItemContestType.defaultProps = {
    bgColor: "#f5f5f5",
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContestType);

