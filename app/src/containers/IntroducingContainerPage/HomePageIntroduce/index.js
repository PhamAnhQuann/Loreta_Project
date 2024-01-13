import React from 'react'
import { IconUser } from '../../../../images/IconLogo/Logo'
import './style.css'
import porsche_911 from '../../../../images/ListImage/porsche_911.jpg'
import slide1 from '../../../../images/ListImage/slide.jpg'
import slide2 from '../../../../images/ListImage/slide_2.jpg'
import panamera_teaser_0 from '../../../../images/ListImage/panamera_teaser_0.jpg'


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
                <div className='my-favorite'>fas</div>
                <div className='the-new-paramera'>fasf</div>
                <div className='cayenne'>fasf</div>
            </div>
            <div className='models'></div>
            <div className='social-media-stories'></div>
            <div className='discover'></div>
            <div className='footer'></div>
        </div>
    )
}

export default index