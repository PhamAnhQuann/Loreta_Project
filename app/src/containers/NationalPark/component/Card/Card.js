import React from 'react'
import './styleCard.css'
import porsche_introducing from '../../../../../images/ListImage/porsche_introducing.jpg'
import porsche_sunrise from '../../../../../images/ListImage/porsche_sunrise.jpg'

function Card() {
    return (
        <div>
            <div className='border-card'>
                <div className='container-image-card'>
                    <div className='image-card'>
                        <img src={porsche_sunrise} style={{ width: '280px', height: '350px', objectFit: 'cover', borderRadius: '15px' }} />
                    </div>
                </div>
                <div className='option-product'></div>
                <div className='short-description'>
                    <div className='name-product'>Porsche Paramera</div>
                    <div className='address-product'>Hau Xa - Hung Dao - Tien Lu - Hung Yen</div>
                    <div className='price'>291,650$</div>
                </div>
            </div>
        </div>
    )
}

export default Card