import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './shop/List';
import Main from './pages/Main';
import './css/ShopDetail.scss'
import Itm from './shop/Itm'
import { Route, Routes } from 'react-router-dom';
import Cart from './shop/Cart';

//https://desipossa.github.io/shop_cra/assets/data.json
const App = () => {
    const [itm, setItm] = useState();
    const [cart, setCart] = useState([
        { id: 1, itm: 'lala', price: 5000 },
    ]);
    useEffect(() => {
        const url = 'https://desipossa.github.io/shop_cra/assets/data.json'
        const getProduct = async () => {
            const res = await axios.get(url);
            console.log(res.data)
            const shopdata = res.data.slice(50, 140).map(it => {
                return {
                    id: it.id,
                    name: it.name,
                    src: it.image_link,
                    brand: it.brand,
                    cate: it.category,
                    price: it.price * 1450,
                    des: it.description,
                    color: it.product_colors,
                    time: it.created_at,
                    type: it.type,

                }
            })
            setItm(shopdata);
            console.log(shopdata);
        }
        getProduct();
    }, [])

    return (
        <>
            <Header cart={cart} />
            {
                itm ?
                    <Routes>
                        <Route path='/' element={<Main />}></Route>
                        <Route path='/cart' element={<Cart cart={cart} />}></Route>
                        <Route path='/shopList' element={<List shopList={itm} />}></Route>
                        <Route path='/shopItem/:itm' element={<Itm shopList={itm} cart={cart} setCart={setCart} />}></Route>
                    </Routes>
                    : <div>Loading...</div>
            }
            <Footer />
        </>
    )
}

export default App