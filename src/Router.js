import React from 'react'
import HomeUser from './components/user/homeUser'

const route = [
  {
    path: '/user',
    exact: false,
    main: () => <HomeUser />,
  },
]
export default route
