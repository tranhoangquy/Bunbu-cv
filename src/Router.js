import React from 'react'
import HomeAdmin from './components/admin/homeAdmin/homeAdmin'
import Template from './components/admin/template/template'
import Navaccount from './components/admin/navAccount/navAccount'
import ListUser from './components/admin/account/listUser/listUser'
import AddUser from './components/admin/account/addUser/addUser'
import ListCvUser from './components/admin/listCvUser/listCvUser'
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
    path: '/users',
    exact: true,
    main: () => <ListUser />,
  },
  {
    path: '/users/new',
    exact: true,
    main: () => <AddUser />,
  },
  {
    path: '/listCv',
    exact: true,
    main: () => <ListCvUser />,
  },
]
export default route
