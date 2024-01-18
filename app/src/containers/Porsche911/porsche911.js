import React from 'react';
import CardDesc from '../../components/CardDescription/index';
import Porsche911_Img from '../../../images/ListImage/porsche_911.jpg';
import './porsche911.css'
function porsche911() {
    return (
        <div style={{ margin: '60px' }}>
            <CardDesc urlImage={Porsche911_Img} width='20%' height='300px' borderRadius='15px' color='white' desc='The new Paramera' arrow buttonleft buttonright />
        </div>
    )
}

export default porsche911