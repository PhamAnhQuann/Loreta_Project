import React, { useState } from 'react'
import './stylemenuroute.css'
import { MenuData } from './constants'
import { AnglesLeft, AnglesRight } from '../../../components/ListIcon/Icon';
import { Link } from 'react-router-dom';

function index() {

    return (
        <div className='wrap-menu'>
            <div className='route-page'>
                <div className='iconMenu'><AnglesLeft /></div>
                {MenuData.map((item) => (
                    <div>
                        <Link to={item.path} />
                        <div className='btn-route'>{item.name}</div>
                    </div>
                ))}
                <div className='iconMenu'><AnglesRight /></div>
            </div>
            <div className='filter'>

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