import React from 'react'
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
  },
]
export default route
