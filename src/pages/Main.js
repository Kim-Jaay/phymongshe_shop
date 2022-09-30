import React from 'react'
import MainSlide from '../components/MainSlide'
import Itm from '../shop/Itm'
import MainTab from '../components/MainTab'
import '../css/Main.scss'
import MainCategory from '../components/MainCategory'
import MainProductSlide from '../components/MainProductSlide'

const Main = ({ shopList }) => {

    return (
        <>
            <MainSlide />
            <MainProductSlide shopList={shopList} category={'pencil'} tit={'BEST PRODUCT'} des={'피몽쉐 마인드풀 라운지 BSET'} arrow={true} dots={true} />
            <MainProductSlide shopList={shopList} category={'liquid'} tit={'BEST PRODUCT'} des={'피몽쉐 마인드풀 라운지 BSET'} bg arrow={true} dots={false} />
            <MainCategory shopList={shopList} category={'pencil'} />
            <MainCategory shopList={shopList} category={'liquid'} bg />
            <MainTab shopList={shopList} arrow={true} dots={false} />

        </>
    )
}

export default Main