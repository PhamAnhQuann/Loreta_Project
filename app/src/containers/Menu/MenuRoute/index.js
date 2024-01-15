import React from 'react'
import './stylemenuroute.css'
import { MenuData } from './constants'
import { AnglesLeft, AnglesRight } from '../../../components/ListIcon/Icon'
function index() {
    return (
        <div className='wrap-menu'>
            <div className='route-page'>
                <div className='iconMenu'><AnglesLeft /></div>
                {MenuData.map((item) => (
                    <div className='btn-route'>{item.name}</div>
                ))}
                <div className='iconMenu'><AnglesRight /></div>
            </div>
            <div className='filter'>
                d
            </div>
        </div>
    )
}

export default index