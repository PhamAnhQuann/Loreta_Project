import React from 'react'
import CardDesc from '../../components/CardDescription/index';
import PorscheCayenne from '../../../images/ListImage/cayenne.jpg';

function porschecayenne() {
    return (
        <div style={{ margin: '60px' }}>
            <CardDesc urlImage={PorscheCayenne} width='20%' height='300px' borderRadius='15px' color='white' desc='The new Paramera' arrow buttonleft buttonright />
        </div>
    )
}

export default porschecayenne