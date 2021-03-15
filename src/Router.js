import React from 'react'
import HomeUser from './components/user/homeUser'
import ListCv from './components/user/listCv/listCv'
const route = [
  {
    path: '/user',
    exact: false,
    main: () => <HomeUser />,
  },
  {
    path: '/listcvuser',
    exact: false,
    main: () => <ListCv />,
  },
]
export default route
