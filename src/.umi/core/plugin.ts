import { Plugin } from '/Users/rajeshpro/Development/Ant-React/ant-react-template/node_modules/@umijs/runtime/dist/index.js';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','request',],
});
plugin.register({
  apply: require('/Users/rajeshpro/Development/Ant-React/ant-react-template/src/.umi/plugin-dva/runtime.tsx'),
  path: '/Users/rajeshpro/Development/Ant-React/ant-react-template/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('/Users/rajeshpro/Development/Ant-React/ant-react-template/node_modules/@umijs/plugin-initial-state/lib/runtime'),
  path: '/Users/rajeshpro/Development/Ant-React/ant-react-template/node_modules/@umijs/plugin-initial-state/lib/runtime',
});
plugin.register({
  apply: require('/Users/rajeshpro/Development/Ant-React/ant-react-template/node_modules/@umijs/plugin-model/lib/runtime'),
  path: '/Users/rajeshpro/Development/Ant-React/ant-react-template/node_modules/@umijs/plugin-model/lib/runtime',
});

export { plugin };
