import React from 'react'
import './style.css'
import { Logo } from '../../../../images/IconLogo/Logo'
import NationPark from '../../NationalPark/index'
function index() {

    const optionRegister = () => (
        <div></div>
    )
    return (
        <div className='wrap-menu'>
            <div className='content-header'>
                <div className='grid-container'>
                    <div className='logo'>
                        <Logo />
                    </div>
                    <div className='route-pageintro'>
                        <div className='route'>Trang chủ</div>
                        <div className='route'>Câu  chuyện</div>
                        <div className='route'>Quy trình</div>
                        <div className='route'>Thành tựu</div>
                        <div className='route'>Ưu đãi</div>
                        <div className='route'>Liên hệ</div>
                    </div>
                </div>
                <div className='wrap-search-header'>
                    <div className='search-header'>
                        <div className='item-search-header'>
                            <div className='item-address'>
                                Địa điểm
                            </div>
                        </div>
                        <div className='item-search-header'>
                            <div className='item-startDate'>Nhận phòng</div>
                        </div>
                        <div className='item-search-header'>
                            <div className='item-endDate'>
                                <div className='btn-endDate'>Trả phòng</div>
                            </div>
                            <div className='option-endDate'></div>
                        </div>
                        <div className='item-search-header'>
                            <div className='item-register'>
                                <div className='btn-register'>Khách</div>
                            </div>
                            <div className='option-register'>v</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index