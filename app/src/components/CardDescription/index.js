import React from 'react';
import './stylecarddes.css';
import { ArrowRight } from '../ListIcon/Icon';

const index = ({ width, height, arrow, desc, urlImage, borderRadius, color, fontSize }) => {
    return (
        <div style={{ width: width || '100%', height: height || '100%', position: 'relative' }} className="image-container">
            <img style={{ width: '100%', height: '100%', borderRadius: borderRadius, objectFit: 'cover', position: 'absolute', transition: 'transform 0.3s' }} src={urlImage} className="hover-image" />
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <p style={{ position: 'absolute', bottom: '20px', left: '30px', color: color || 'black', fontWeight: 'bold' }}>The new Paramera</p>
                <div style={{ position: 'absolute', bottom: '31px', right: '50px', color: color || 'black' }} className='btnArr'><ArrowRight /></div>
            </div>
        </div>
    )
}

export default index