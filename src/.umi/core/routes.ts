import { ApplyPluginsType } from '/Users/rajeshpro/Development/Ant-React/ant-react-template/node_modules/@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.tsx').default
  },
  {
    "path": "/products",
    "exact": true,
    "component": require('@/pages/products.tsx').default
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
