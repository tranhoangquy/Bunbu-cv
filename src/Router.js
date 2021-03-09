import React from 'react'
import HomeAdmin from './components/admin/homeAdmin'
import Template from './components/admin/template/template'
import Navaccount from './components/admin/account/nav-account'
import ListStaff from './components/admin/account/liststaffs'
import AddAccount from './components/admin/account/addAccount'

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
    path: '/liststaff',
    exact: false,
    main: () => <ListStaff />,
  },
  {
    path: '/addaccount',
    exact: false,
    main: () => <AddAccount />,
  },
]
export default route
