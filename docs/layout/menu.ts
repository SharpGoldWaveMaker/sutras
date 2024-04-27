export const menus = [
    {
      key: '1',
      path: '/welcome',
      name: '欢迎',
      breadcrumbName: '欢迎',
    },
    {
      key: '2',
      path: '/admin',
      name: '管理页',
      breadcrumbName: '管理页',
      component: './Admin',
      children: [
        {
          key: '2-1',
          path: '/admin/sub-page1',
          name: '一级页面',
          breadcrumbName: '一级页面',
          icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
          component: './Welcome',
        },
        {
          key: '2-2',
          path: '/admin/sub-page2',
          name: '二级页面',
          breadcrumbName: '二级页面',
        },
        {
          key: '2-3',
          path: '/admin/sub-page3',
          name: '三级页面',
          breadcrumbName: '三级页面',
        },
      ],
    },
    {
      key: '3',
      name: '列表页',
      breadcrumbName: '列表页',
      path: '/list',
      component: './ListTableList',
      children: [
        {
          key: '3-1',
          path: '/list/sub-page',
          name: '列表页面',
          breadcrumbName: '列表页面',
          children: [
            {
              key: '3-1-1',
              path: 'sub-sub-page1',
              name: '一一级列表页面',
              breadcrumbName: '一一级列表页面',
            },
            {
              key: '3-1-2',
              path: '/list/sub-page/sub-sub-page2',
              name: '一二级列表页面',
              breadcrumbName: '一二级列表页面',
            },
            {
              key: '3-1-3',
              path: 'sub-sub-page3',
              name: '一三级列表页面',
              breadcrumbName: '一三级列表页面',
            },
          ],
        },
        {
          key: '3-2',
          path: '/list/sub-page2',
          name: '二级列表页面',
          breadcrumbName: '二级列表页面',
        },
        {
          key: '3-3',
          path: '/list/sub-page3',
          name: '三级列表页面',
          breadcrumbName: '三级列表页面',
        },
      ],
    },
    {
      key: '4',
      path: 'https://ant.design',
      name: '外部链接',
    },
]