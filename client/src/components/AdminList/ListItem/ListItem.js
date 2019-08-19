import React from 'react';
import style from './ListItem.module.sass';



function ListItem(props){
    const { clickToItem, name, id, status } = props;
        return(
            <div className={style.listItem} onClick={() => clickToItem(id, status)}>
                <div className={style.avatarAndData}>
                    <div className={style.avatar} />
                    <div className={style.name}>
                        <div className={style.listItemName}>
                            {name}
                        </div>
                    </div>
                </div>
                <div className={ status ? style.active : style.passive } >
                    <i className="fas fa-check check" />
                </div>
            </div>
        )
}
export default ListItem;
