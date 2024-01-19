import React, { useState } from 'react'
import './stylemenuroute.css'
import { MenuData } from './constants'
import { AnglesLeft, AnglesRight } from '../../../components/ListIcon/Icon';
import { Link } from 'react-router-dom';

function index() {

    return (
        <div className='wrap-menu-item'>
            <div className='route-page'>
                <div className='iconMenu'><AnglesLeft /></div>
                {MenuData.map((item, index) => (
                    <div key={index}>
                        <Link to={item.path} className='link'>
                            <div className='btn-route'>{item.name}</div>
                        </Link>
                    </div>
                ))}
                <div className='iconMenu'><AnglesRight /></div>
            </div>
            <div className='filter'>
                <input className='search' type='text' placeholder='Search...' />
            </div>

        </div>
    )
}
/**
 * 
 * <Link to="/" className='ItemMenu' style={{textAlign:'center', padding:'5px'}}>
               
               <div>Trang chủ </div>
            </Link>
 */
export default index