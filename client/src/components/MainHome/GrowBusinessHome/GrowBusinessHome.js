import React, { useState }  from 'react';
import style from './GrowBusinessHome.module.sass';

import { Link } from "react-router-dom";

import { textAndLinksForGrowBusinessHome } from '../../../utils/textAndLinksForPages'

function GrowBusinessHome(){

    const [imagesColor, setImagesColor] = useState('');

    const arrayOfImages = [
        'Forbes-logo-vectorb',
        'the_next_web',
        'chicago',
        'mashable-hover'
    ];

    const images = (img, color) => ({ backgroundImage: `url(https://www.squadhelp.com/assets/nimages/home_images/${img}${color}.png)`});

    const divImg = (items, color) => items.map( item => {
        if(color === 'blue') return (
            <div key={item}
                 style={images(item, '_blue')}
                 className={style.image}
            />);

        return (
            <div key={item}
                 style={images(item, '_grey')}
                 className={style.image}
            />)
    });


    const arrayOflinks = ( images ) => {
      return images.map( img => {
          return(
              <>
                  <Link to={'/'}>
                        <div className={style.images} style={}/>
                  </Link>
              </>
          )
      })
    };

        return (
            <div className={style.growBusinessHome}>
                <div className={style.container}>

                    <div className={style.links}
                         onMouseOver={() => setImagesColor('w')}
                         onMouseOut={() => setImagesColor('')}
                    >
                        {arrayOflinks(links)}
                    </div>

                    <div className={style.value}>

                    </div>


                </div>
            </div>
        )
}

export default GrowBusinessHome;

