import React from 'react'
import CardProduct from '../../components/CardProduct/CardProduct'
import Cayenne from '../../../images/ListImage/cayenne.jpg'
function index() {
    return (
        <div style={{ margin: '30px' }}>
            <CardProduct achievement='Xe được yêu thích nhất năm' paramImg={Cayenne} iconHeart name={'Porsche Cayenne Turbor GT'} star={'4.9'} desc={'Xe này vừa êm vừa ngon đi đua thì hết nước chấm'} price={'196.000'} />
        </div>
    )
}

export default index