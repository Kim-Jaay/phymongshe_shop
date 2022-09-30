import React from 'react'
import MainCategory from './MainCategory'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const CategorySlider = ({ shopList, category, arrow, dots }) => {
    const MainList = shopList.filter(it => category === it.cate);

    return (

        <Slider
            arrows={arrow}
            dots={dots}
            slidesToShow={5}
        >
            {
                MainList.map(it => {
                    return (
                        <figure key={it.id}>
                            <Link to={'/shopItem/' + it.id}>
                                <div className="box">
                                    <img src={it.src} alt="" />
                                </div>
                                <div className='name'>{it.name}</div>
                                <div className='des'>{it.des.substring(0, 100)} ...</div>
                                <div className='price'><span>{it.price.toLocaleString()}</span> 원</div>
                            </Link>
                        </figure>
                    )
                })
            }
        </Slider>

    )
}

export default CategorySlider