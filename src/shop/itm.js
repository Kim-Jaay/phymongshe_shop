import React from 'react'
import { useParams } from 'react-router-dom'

const Itm = () => {
    const { itm } = useParams();
    return (
        <div style={{ fontSize: '300px' }}> Itm{itm}</div >
    )
}

export default Itm