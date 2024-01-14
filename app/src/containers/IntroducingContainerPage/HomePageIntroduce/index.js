import React from 'react'
import { IconUser } from '../../../../images/IconLogo/Logo'
import './style.css'
import porsche_911 from '../../../../images/ListImage/porsche_911.jpg'
import slide1 from '../../../../images/ListImage/slide.jpg'
import slide2 from '../../../../images/ListImage/slide_2.jpg'
import panamera_teaser_0 from '../../../../images/ListImage/panamera_teaser_0.jpg'
import porsche_sunrise from '../../../../images/ListImage/porsche_sunrise.jpg'



function index() {
    return (
        <div className='page'>
            <div className='content_1'>
                <div className='wrap-header'>
                    <div className='grid-container'>
                        <div className='content-header'>
                            <div className='option-header'>
                                <div className='menu'>Menu</div>
                                <div className='logo-porsche'>Logo</div>
                                <div className='user'>User</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slide-product'>
                    <div className='wrap-img'>
                        <img className='img' src={panamera_teaser_0} />
                    </div>
                </div>
            </div>
            {/* <div className='short-description'>Porsche Paramera</div> */}

            <div className='concert'>
                <div className='my-favorite'>
                    <img className='card' src={porsche_911} />
                </div>
                <div className='the-new-paramera'>
                    <img className='card' src={slide1} />

                </div>
                <div className='cayenne'>
                    <img className='card' src={porsche_911} />

                </div>
            </div>
            <div className='models'>
                <div className='card-models'>
                    <img className='img-model' src={porsche_sunrise} />
                </div>
                <div className='card-models1'>
                    <img className='img-model' src={porsche_sunrise} />
                </div>
                <div className='card-models'>
                    <img className='img-model' src={porsche_sunrise} />
                </div>
                <div className='card-models1'>
                    <img className='img-model' src={porsche_sunrise} />
                </div>
                <div className='card-models'>
                    <img className='img-model' src={porsche_sunrise} />
                </div>
                <div className='card-models1'>
                    <img className='img-model' src={porsche_sunrise} />
                </div>
            </div>
            <div className='social-media-stories'>
                <div className='item1'>
                    <img className='card-media' src={slide2} />
                </div>
                <div className='item2'>
                    <img className='card-media' src={slide2} />
                </div>
                <div className='item3'>
                    <img className='card-media' src={slide2} />
                </div>
                <div className='item4'>
                    <img className='card-media' src={slide2} />
                </div>
                <div className='item5'>
                    <img className='card-media' src={slide2} />
                </div>
                <div className='item6'>
                    <img className='card-media' src={slide2} />
                </div>
                <div className='item7'>
                    <img className='card-media' src={slide2} />
                </div>
                <div className='item8'>
                    <img className='card-media' src={slide2} />
                </div>
                <div className='item9'>
                    <img className='card-media' src={slide2} />
                </div>
            </div>
            <div className='discover'>

            </div>
            <div className='footer'></div>
        </div>
    )
}

export default index