import React, { useState } from 'react'
import './details.css';
import cayenne from '../../../images/ListImage/cayenne.jpg'
import Popup from '../../components/Popup/Popup';
import { ArrowLeft } from '../../../images/IconLogo/Logo';

function detailsProduct() {
    const [isOpenInfo, setIsOpenInfo] = useState(false);
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <div className='containers-layout' >
            <div className='btn-back'>
                <div className='style-btn'><ArrowLeft /></div>
            </div>
            <div className='content-details'>
                <div className='name-product'>
                    <div className='name'>Đảo hoa</div>
                    <div className='shareandsave'>
                        <div className='share'>Chia sẻ</div>
                        <div className='save'>Lưu</div>
                    </div>
                </div>
                {/* <div className='container-wrap-container-block'>
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
                </div> */}


                <div className='container-block'>
                    <div className='block1'>
                        <img className='img-block1' src={cayenne} />
                    </div>
                    <div className='wrap-block2'>
                        <div className='block2'>
                            <img className='img-block2' src={cayenne} />
                            <img className='img-block2' style={{ marginTop: '10px' }} src={cayenne} />
                        </div>
                    </div>
                    <div className='block3'>
                        <img className='img-block3' src={cayenne} />
                        <img className='img-block3' style={{ marginTop: '10px' }} src={cayenne} />
                    </div>
                </div>
                <div className='basic-info'>
                    <div className='info-room'>
                        <div className='name-room'>Porsche rooms</div>
                        <div className='short-desc'>Trên 16 khách 8 phòng ngủ 8 giường 9 phòng tắm</div>
                        <div className='achievement-room'>
                            <div className='medal-achieve'>Được khách<br></br> yêu thích</div>
                            <div className='evaluate-detail'>Khách đánh giá đây là một <br></br>trong những ngôi nhà được yêu <br></br> thích nhất trên AirBnb</div>
                            <div className='evaluate-star'>4.95 </div>
                            <div className='numberofreview'>168 <br></br> đánh giá</div>
                        </div>
                        <div className='roomowner'>
                            <div className='avatar-roomowner'>
                                <img className='img-roomowner' src={cayenne} />
                            </div>
                            <div className='name-roomowner'>Philipe</div>
                        </div>
                        <div className='endow'>
                            <div className='item-endow'>Trải nghiệm nhận phòng tuyệt vời </div>
                            <div className='item-endow'>Lặn </div>
                            <div className='item-endow'>Hủy miễn phí trong 48 giờ</div>
                        </div>
                        <div className='condition'>Phòng có thể chứa tối đa 24 người trở lên <button>Hiển thị thêm</button></div>
                    </div>
                    <div className='bill'>
                        <div>$893/đêm</div>
                        <div className='date-room'>
                            <div className='staendDate'>
                                <div className='startDate' onClick={() => setIsOpenInfo(true)}><div className='label-date'>Nhận phòng</div><div className='date'>20/10/2024</div></div>
                                <div className='endDate' onClick={() => setIsOpenInfo(true)}><div className='label-date'>Trả phòng</div> <div className='date'>19/11/2024</div></div>
                            </div>
                            <div className='number-register'>Khách <div className='register'> 2 Khách</div></div>

                        </div>
                        <div className='wrap-btn'>
                            <div className='btn-order'>Đặt phòng</div>

                        </div>
                        <div className='expense'>
                            <div className='wrap-expense-value'>
                                <div className='expense-child'>5 dem</div><div className='expense-value'>500</div>
                            </div>
                            <div className='wrap-expense-value'>
                                <div className='expense-child'>5 dem</div><div className='expense-value'>500</div>
                            </div>
                            <div className='wrap-expense-value'>
                                <div className='expense-child'>5 dem</div><div className='expense-value'>500</div>
                            </div>                        </div>
                        <div className='wrap-bill'>
                            <div className='label-total-bill'>Tổng trước thuế:</div> <div className='value-bill'>1500</div>
                        </div>
                    </div>
                    <div className='amenities'></div>
                    <div className='evaluate'></div>
                    <div className='address'></div>
                </div>
            </div>
            {
                isOpenInfo && (
                    <Popup isOpen={isOpenInfo} onClose={() => setIsOpenInfo(false)}>
                        <h2>This is a Popup</h2>
                        <p>Popup content goes here.</p>
                    </Popup>
                )
            }
        </div>
    )
}

export default detailsProduct