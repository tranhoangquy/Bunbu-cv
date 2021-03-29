import React from 'react'
import HomeAdmin from './components/admin/homeAdmin/homeAdmin'
import Template from './components/admin/template/template'
import Navaccount from './components/admin/navAccount/navAccount'
import ListUser from './components/admin/account/listUser/listUser'
import AddUser from './components/admin/account/addUser/addUser'
import ProfileAdmin from './components/admin/profileAdmin/profileAdmin/profileAdmin'
import HomeStaff from './components/staff/homeStaff/homeStaff'
import TemplateUser from './components/staff/template/listTemplate/listTemplate'
import TemplateCv1 from './components/staff/template/template1/template1'
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
  {
    path: '/staff',
    exact: true,
    main: () => <HomeStaff />,
  },
  {
    path: '/templates',
    exact: true,
    main: () => <TemplateUser />,
  },
  {
    path: '/templates/template1',
    exact: true,
    main: () => <TemplateCv1 />,
  },
    
]
export default route
