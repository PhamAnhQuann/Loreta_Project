import React from 'react'
import './style.css'
import { Logo } from '../../../images/IconLogo/Logo'
import NationPark from '../NationalPark/index'
function index() {
    return (
        <div>
            <div className='menu'>
                <div className='logo'>
                    <Logo />
                </div>
                <ul className='option'>
                    <li>Trang chủ</li>
                    <li>Câu  chuyện của chúng tôi</li>
                    <li>Quy trình</li>
                    <li>Thành tựu</li>
                    <li>Ưu đãi</li>
                    <li>Liên hệ</li>
                </ul>
            </div>
            <div className='type-product'>
                <ul className='option'>
                    <li>Công viên quốc gia</li>
                    <li>Khung cảnh tuyệt vời</li>
                    <li>Được ưu chuộng</li>
                    <li>Bắc cực</li>
                    <li>Chơi golf</li>
                    <li>Cabin</li>
                    <li>Nhà trên cây</li>
                    <li>Phòng</li>
                    <li>Hướng biển</li>
                    <li>Cắm trại</li>
                    <li>Đảo</li>
                    <li>Lâu đài</li>
                    <li>Nông trại</li>
                    <li>Cối xay gió</li>
                    <li>Sa mạc</li>
                </ul>
            </div>
            <NationPark />
        </div>
    )
}

export default index