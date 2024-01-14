import React from 'react';
import './stylecarddes.css';
import { ArrowRight } from '../ListIcon/Icon';

const index = ({ width, height, arrow, desc, urlImage, borderRadius, color, fontSize, buttonleft, buttonright, bold }) => {
    return (
        <div style={{ width: width || '100%', height: height || '100%', position: 'relative' }} >
            <img className="image-container " style={{ width: '100%', height: '100%', borderRadius: borderRadius, objectFit: 'cover', position: 'absolute', transition: 'transform 0.3s' }} src={urlImage} />
            <div className='grid_desc' style={{ color: color || 'white', fontWeight: bold }}>
                <p className='label-desc' style={{ fontSize: fontSize || '20px' }} >{desc}</p>
                {
                    buttonleft && (
                        <div className='btndesc1'>Build your 718</div>

                    )
                }
                {
                    buttonright && (
                        <div className='btndesc2' >Build your 718</div>
                    )
                }
                {
                    arrow && (
                        <div className='arrow btnArr'><ArrowRight /></div>
                    )
                }
            </div>
        </div>
    )
}

export default index