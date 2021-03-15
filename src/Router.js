import React from 'react'
import HomeUser from './components/user/homeUser'
import TemplateUser from './components/user/template/template'
import TemplateCv1 from './components/user/template/template-cv1/template-cv1'

const route = [
  {
    path: '/user',
    exact: false,
    main: () => <HomeUser />,
  },
  {
    path: '/templateuser',
    exact: false,
    main: () => <TemplateCv1 />,
  },
]
export default route
