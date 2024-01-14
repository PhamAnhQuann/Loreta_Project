import React from 'react';
import './stylecarddes.css';
import { makeStyles } from '@mui/material';
const useStyles = makeStyles(() => ({
    color_text: {
        color: 'black'
    },
    size_image: {
        width: '100%',
        height: '100%',
        borderRadius: '15px'
    }
}));
const index = ({ width, height, arrow, desc, urlImage }) => {
    const classes = useStyles();
    return (
        <div style={{ width: width || '100%', height: height || '100%' }} className='container'>
            <div>
                <img className={classes.size_image} src={urlImage} />
            </div>
        </div>
    )
}

export default index