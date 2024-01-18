import React from 'react'
import './cardproduct.css'
import PorscheCayenne from '../../../images/ListImage/cayenne.jpg';
import { IconHeartRed, IconHeartUil } from '../../../images/IconLogo/Logo';
import { AnglesLeft, AnglesRight } from '../ListIcon/Icon';
const CardProduct = ({ achievement, paramImg, iconHeart, name, star, desc, price }) => {
    return (
        <div className='wrap-card'>
            {
                iconHeart && (
                    <div className='icon-heart'><IconHeartUil /></div>
                )
            }
            <div className='achievement'>{achievement}</div>
            <div className='container-imgs'>
                {/* <div className='privious'><AnglesLeft /></div> */}
                <img className='img-product' src={paramImg} />
                <div className='next'><AnglesRight /></div>

            </div>
            <div className='nameandstar'>
                <div className='name'>{name}</div>
                <div className='star'>{star}</div>
            </div>
            <div className='desc'>{desc}!</div>
            <div className='price'><span>{price} $</span> / Car</div>
        </div>
    )
}

export default CardProduct