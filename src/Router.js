import React from 'react'
import HomeAdmin from './components/admin/homeAdmin'
import Template from './components/admin/template/template'
import Navaccount from './components/admin/account/nav-account'
import ListUser from './components/admin/account/listUser'
import AddUser from './components/admin/account/addUser'

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
  {
    path: '/account',
    exact: false,
    main: () => <Navaccount />,
  },
  {
    path: '/listuser',
    exact: false,
    main: () => <ListUser />,
  },
  {
    path: '/adduser',
    exact: false,
    main: () => <AddUser />,
  },
]
export default route
