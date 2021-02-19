import React from 'react'
import HomeAdmin from './components/admin/homeAdmin'
const route = [
    {
        path: '/admin',
        exact: false,
        main: () => <HomeAdmin />,
    },
]
export default route
