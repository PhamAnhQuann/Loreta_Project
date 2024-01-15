import React from 'react'
import './style.css'
import { Logo } from '../../../../images/IconLogo/Logo'
import NationPark from '../../NationalPark/index'
function index() {
    return (
        <div className='wrap-menu'>
            <div className='content-header'>
                <div className='grid-container'>
                    <div className='logo'>
                        <Logo />
                    </div>
                    <div className='route-pageintro'>
                        <div className='route'>Trang chủ</div>
                        <div className='route'>Câu  chuyện của chúng tôi</div>
                        <div className='route'>Quy trình</div>
                        <div className='route'>Thành tựu</div>
                        <div className='route'>Ưu đãi</div>
                        <div className='route'>Liên hệ</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index