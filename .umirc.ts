import { defineConfig } from 'umi';

export default defineConfig({
  locale: { antd: true },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/products', component: '@/pages/products' },
  // ],
  routes: [
    // { path: '/login', component: 'login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/products', component: 'products' },
        // { path: '/admin', component: 'admin' },
      ],
    },
  ],
});
