import React from 'react'
<<<<<<< HEAD
import HomeUser from './components/user/homeUser/homeUser'
import TemplateUser from './components/user/template/listTemplate/listTemplate'
import TemplateCv1 from './components/user/template/template1/template1'
const route = [
  {
    path: '/staff',
    exact: true,
    main: () => <HomeUser />,
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
=======
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
>>>>>>> f1e3791cac8698830daf648c5b986cb9b7d53776
  },
]
export default route
