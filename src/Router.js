import React from 'react'
import HomeAdmin from './components/admin/homeAdmin/homeAdmin'
import Template from './components/admin/template/template'
import Navaccount from './components/admin/navAccount/navAccount'
import ListUser from './components/admin/account/listUser/listUser'
import AddUser from './components/admin/account/addUser/addUser'
import ProfileAdmin from './components/admin/profileAdmin/profileAdmin/profileAdmin'
const route = [
  {
    path: '/admin',
    exact: true,
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
    path: '/admin/profile',
    exact: true,
    main: () => <ProfileAdmin />,
  },
]
export default route
