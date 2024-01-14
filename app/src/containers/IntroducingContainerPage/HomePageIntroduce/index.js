import React from 'react'
import { IconUser } from '../../../../images/IconLogo/Logo'
import './style.css'
import porsche_911 from '../../../../images/ListImage/porsche_911.jpg'
import slide1 from '../../../../images/ListImage/slide.jpg'
import slide2 from '../../../../images/ListImage/slide_2.jpg'
import panamera_teaser_0 from '../../../../images/ListImage/panamera_teaser_0.jpg'
import porsche_sunrise from '../../../../images/ListImage/porsche_sunrise.jpg'
import CardDesc from '../../../components/CardDescription/index';


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
                    <p style={{ color: 'white', position: 'absolute', top: '50%', left: '12%', fontWeight: 'bold', fontSize: '30px' }}><span>THE NEW PORSCHE PARAMERA.</span><br></br> <span>COURAGE CHANGES EVERYTHING.</span></p>
                    <div className='wrap-img'>
                        <img className='img' src={panamera_teaser_0} />
                    </div>
                </div>
            </div>
            {/* <div className='short-description'>Porsche Paramera</div> */}

            <div className='concert'>
                <div className='my-favorite'>
                    <CardDesc urlImage={porsche_sunrise} width='100%' height='300px' borderRadius='15px' color='white' desc='The new Paramera' />
                </div>
                <div className='the-new-paramera'>
                    <CardDesc urlImage={slide1} width='100%' height='300px' borderRadius='15px' color='white' desc='Xe này của' />


                </div>
                <div className='cayenne'>
                    <CardDesc urlImage={slide1} width='100%' height='300px' borderRadius='15px' color='white' desc='Porsche chứ không phải của tôi!' />

                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px', fontWeight: 'bold' }}>Models</div>
            <div className='models'>
                <div className='card-models model_car1'>
                    <CardDesc urlImage={slide1} width='100%' height='700px' borderRadius='15px' color='white' desc='Porsche 911!' buttonleft buttonright />

                </div>
                <div className='card-models1 model_car1'>
                    <CardDesc urlImage={slide1} width='100%' height='700px' borderRadius='15px' color='white' desc='Porsche 718!' buttonleft buttonright />

                </div>
                <div className='card-models model_car2'>
                    <CardDesc urlImage={slide1} width='100%' height='700px' borderRadius='15px' color='white' desc='Porsche Macan!' buttonleft buttonright />

                </div>
                <div className='card-models1 model_car2'>
                    <CardDesc urlImage={slide1} width='100%' height='700px' borderRadius='15px' color='white' desc='Porsche Taycan!' buttonleft buttonright />

                </div>
                <div className='card-models model_car3'>
                    <CardDesc urlImage={slide1} width='100%' height='700px' borderRadius='15px' color='white' desc='Porsche Paramera!' buttonleft buttonright />

                </div>
                <div className='card-models1 model_car3'>
                    <CardDesc urlImage={slide1} width='100%' height='700px' borderRadius='15px' color='white' desc='Porsche Cayyene!' buttonleft buttonright />

                </div>
            </div>
            <div className='wrap-social'>
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
            </div>
            <div className='discover'>

            </div>
            <div className='footer'></div>
        </div>
    )
}

export default index