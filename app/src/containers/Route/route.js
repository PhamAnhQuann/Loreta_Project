import React from 'react'
import paramera from '../PorscheParamera/paramera'
import porschecayenne from '../PorscheCayenne/porschecayenne'
import porsche911 from '../Porsche911/porsche911'

export default [
    {
        exact: true,
        path: "/",
        component: paramera
    },
    {
        exact: true,
        path: "/porschecayenne",
        component: porschecayenne
    },
    {
        exact: true,
        path: "/porsche911",
        component: porsche911
    }

]