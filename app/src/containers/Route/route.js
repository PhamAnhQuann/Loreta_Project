import React from 'react'
import paramera from '../PorscheParamera/paramera.js'
import porschecayenne from '../PorscheCayenne/porschecayenne.js'
import porsche911 from '../Porsche911/porsche911.js'
import Island from '../Island/Island.js'
import detailsProduct from '../Details/detailsProduct.js'

export default [
    {
        path: "/",
        component: paramera
    },
    {
        path: "/porschecayenne",
        component: porschecayenne
    },
    {
        path: "/porsche911",
        component: porsche911
    },
    {
        path: "/island",
        component: Island
    },
    {
        path: "/details",
        component: detailsProduct
    }
]