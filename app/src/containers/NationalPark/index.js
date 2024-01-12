import React from 'react'
import Card from './component/Card/Card'
function index() {
    return (
        <div style={{ margin: '15px' }}>
            <div style={{ marginTop: '40px' }}>
                <Card />
            </div>
            <div style={{ marginTop: '40px' }}>
                <Card />
            </div>
            <div style={{ marginTop: '40px' }}>
                <Card />
            </div>
        </div>
    )
}

export default index