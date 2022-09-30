import React from 'react'
import { Customer } from './Customer'
import '../css/Footer.scss'
import company from '../data/profile'

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className="top">
                <div className="inner">
                    <Customer />
                </div>
            </div>
            <div className="bot">
                <div className="inner">
                    <div>{company.address}</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer