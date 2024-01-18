import React from 'react'
import './details.css';
import cayenne from '../../../images/ListImage/cayenne.jpg'
function detailsProduct() {
    return (
        <div className='containers-layout' style={{ marginTop: '15px' }}>
            <div className='btn-back'>Back</div>
            <div className='content-details'>
                <div className='name-product'>
                    <div className='name'>Đảo hoa</div>
                    <div className='shareandsave'>
                        <div className='share'>Chia sẻ</div>
                        <div className='save'>Lưu</div>
                    </div>
                </div>
                <div className='container-wrap-container-block'>
                    <div className='wrap-container-block'>
                        <div className='container-block'>
                            <div className='block1'>
                                <img className='img-block1' src={cayenne} />
                            </div>
                            <div className='block2'>
                                <img className='img-block2' src={cayenne} />
                                <img className='img-block2' src={cayenne} />
                            </div>
                            <div className='block3'>
                                <img className='img-block3' src={cayenne} />
                                <img className='img-block3' src={cayenne} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='basic-info'></div>
                <div className='amenities'></div>
                <div className='evaluate'></div>
                <div className='address'></div>
            </div>
        </div>
    )
}

export default detailsProduct