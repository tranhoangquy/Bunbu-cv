import React from 'react'
import HomeAdmin from './components/admin/homeAdmin'
import Template from './components/admin/template/template'
const route = [
  {
    path: '/admin',
    exact: false,
    main: () => <HomeAdmin />,
  },
  {
    path: '/template',
    exact: false,
    main: () => <Template />,
  },
]
export default route
