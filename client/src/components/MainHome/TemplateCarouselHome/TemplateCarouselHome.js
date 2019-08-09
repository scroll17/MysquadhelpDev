import React, {useState, useEffect}  from 'react';
import style from './TemplateCarouselHome.module.sass';

import { Carousel } from 'react-bootstrap';

function TemplateCarouselHome(props){

    const [width, setWidth] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', widthResizeChange);
        return () => window.removeEventListener('resize', widthResizeChange);
    }, [false]);

    const widthResizeChange = () =>{
        const newWidth = resizeWidth();
        setWidth(newWidth);
    };
    const resizeWidth = () =>{
        if(window.innerWidth <= 725){
            return 2
        }else if(window.innerWidth <= 900){
            return 1
        }
        return 0
    };


    const prevIcon = <span className={style.carouselIconPrev}><i className="fas fa-chevron-left"/></span>;
    const nextIcon = <span className={style.carouselIconNext}><i className="fas fa-chevron-right"/></span>;


    let arrayOfImages = [].concat(props.images);
    const carouselItem  = (items) => {
        const image = (img) => ({backgroundImage: `url(${img})`});

        let newArrayOfImages = [].concat(props.images);
        if(width === 1){
            const a = [];
            newArrayOfImages.forEach( images => {
                if(a.length === 0){
                    a.push({src: []})
                }
                if(a[a.length - 1].src.length === 2){
                    a.push({src: []})
                }
                const lastImage = images.src.pop();
                a[a.length - 1].src.push(lastImage)
            });

            const newA = a.concat(newArrayOfImages);
            console.log(newA);

            return newA.map( item => (
                <Carousel.Item>
                    <div className={style.carousel}>
                        {
                            item.src.map( img => (<div className={style.item} style={image(img)} />))
                        }
                    </div>
                </Carousel.Item>
            ));

        }


        return items.map( item => (
            <Carousel.Item>
                <div className={style.carousel}>
                    {
                        item.src.map( img => (<div className={style.item} style={image(img)} />))
                    }
                </div>
            </Carousel.Item>
        ))
    };

    return (
        <div className={style.container}>
            <Carousel
                indicators={false}
                pauseOnHover={true}
                nextIcon={nextIcon}
                prevIcon={prevIcon}
            >
                {carouselItem(arrayOfImages)}
            </Carousel>
        </div>
    )


}

export default TemplateCarouselHome;

/*

    if(width === 1){
        arrayOfImages.push({});
        arrayOfImages = arrayOfImages.map( images => {
            console.log(images);
            return images.src.map( (image, index) => {
                console.log('index', arrayOfImages);
                if(index )
                    return arrayOfImages[index + 1].push(images.src.pop());
            });
        });
    }*/
