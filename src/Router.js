import React from 'react'
import HomeAdmin from './Admin/Home-admin'
import ListStaff from './Admin/Lisst/ListStaff/ListStaff'
import Account from './Admin/Account/Account'
import AddAccount from './Admin/Lisst/AddAccount/AddAccount'
import ListCV from './Admin/ListCV/listcv'
import HomeUser from './Users/Home-User'
import Template from './Admin/Template/Template'
import Profile from './Admin/Profile/Profile'
const route = [
    {
        path: '/admin',
        exact: false,
        main: () => <HomeAdmin />,
    },
    {
        path: '/user',
        exact: false,
        main: () => <HomeUser />,
    },
    {
        path: '/account',
        exact: false,
        main: () => <Account />,
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
    {
        path: '/listcv',
        exact: false,
        main: () => <ListCV />,
    },
    {
        path: '/template',
        exact: false,
        main: () => <Template />,
    },
    {
        path: '/profile',
        exact: false,
        main: () => <Profile />,
    },
]
export default route
