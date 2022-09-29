import React from 'react'
import CategorySlider from './CategorySlider'
import MainCategory from './MainCategory'

const MainProductSlide = ({ shopList, category }) => {
    return (
        <div>
            <CategorySlider shopList={shopList} category={category} />
        </div>
    )
}

export default MainProductSlide