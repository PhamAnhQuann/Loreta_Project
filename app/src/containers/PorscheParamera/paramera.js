import React from 'react'
import CardDesc from '../../components/CardDescription/index';
import PorscheParamera from '../../../images/ListImage/paramera_product.jpg';

function paramera() {
    return (
        <div>
            <div style={{ margin: '60px' }}>
                <CardDesc urlImage={PorscheParamera} width='20%' height='300px' borderRadius='15px' color='white' desc='The new Paramera' arrow buttonleft buttonright />
            </div>
        </div>
    )
}

export default paramera