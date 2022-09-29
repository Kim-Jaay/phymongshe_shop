import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = ({ shopList }) => {
    return (
        <ul>
            <li><Link to='/'>BRAND</Link></li>
            {console.log(shopList)}
            <li><Link to='/shopList'>SHOPPING</Link></li>
            <li><Link to='/shopList/liquid'>EVENT</Link></li>
            <li><Link to='/shopList/pencil'>COMMUNITY</Link></li>
            <li><Link to='/shopList/powder'>CS CENTER</Link></li>
            <li><Link to='/'>CS CENTER</Link></li>
        </ul>
    )
}

export default MainNav