import React from 'react'
import company from '../data/profile'
import { Link } from 'react-router-dom'


export const Customer = () => {
    return (
        <>
            <div>
                <h3>CS CENTER</h3>
                <strong>{company.address}</strong>
                <div className='tel'>{company.tel}</div>
                <ul>
                    {
                        company.open.map((it) => { <li>{it}</li> })
                    }
                </ul>
            </div>
            <div>
                <h3>BANK INFO</h3>
                <strong>{company.bank}</strong>
                <div>예금주 : {company.name}</div>
            </div>
            <div>
                <h3>COMPANY</h3>
                <strong>{company.address}</strong>
                <ul>
                    <li><a href="/" target='_blank'><i className="xi-kakaotalk"></i></a></li>
                    <li><a href="/" target='_blank'><i className="xi-facebook"></i></a></li>
                    <li><a href="/" target='_blank'><i className="xi-instagram"></i></a></li>
                </ul>
            </div>

        </>
    )
}
