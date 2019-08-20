import React from 'react';
import style from './ContestPopularCategories.module.sass';

import ItemContestType from '../ItemContestType/ItemContestType'
import Heading from '../Heading/Heading'

import { textForContestPopularCategories }  from '../../../utils/textAndLinksForPages'

function ContestPopularCategories(){
    const {text, ...header} = textForContestPopularCategories.heading;

    const showItemContestTypes = ( contests ) => {
      return contests.map( contest => (
          <li>
              <ItemContestType {...contest}/>
          </li>
      ))
    };

        return (
            <div className={style.contentType}>
                <div className={style.container}>
                    <div className={style.row}>

                        <Heading color={'#fff'} {...header}>
                            {text}
                        </Heading>

                        <div className={style.categories}>
                            <ul className={style.listContestType}>
                               {showItemContestTypes(textForContestPopularCategories.itemContestType)}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )

}

export default ContestPopularCategories;

