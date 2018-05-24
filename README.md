# react + redux + router 4 + antd-mobile

使用antd-mobile搭建的一套移动端react框架，数据管理使用了redux，但项目不复杂的话没必要使用redux。

路由这块使用了react-router 4 ， 在路由配置这块参考了[这里](https://github.com/ReactTraining/react-router/issues/3928)

由于router 4完全是组件化，所以v3之前的router配置思路应该完全放弃了，直接按照react的组件化思想，构建一个Layout布局，router 4在这里其实只是react中的一个辅助我们跳转路由的组件。

### 目录结构


```
react-mobile-seek/
├── README.md 
├── node_modules/
├── package.json
├── public/
├── index.html
├── favicon.ico
└── src/
    ├── common
    ├── components
    ├── container
    │   ├── dashboard
    │   │   ├── index.js
    │   │   └── index.less
    │   ├── home
    │   │   ├── home.js
    │   │   ├── homeAction.js
    │   │   ├── homeReducer.js
    │   │   ├── index.js
    │   │   └── index.less
    │   └── login
    │       ├── index.js
    │       ├── login.js
    │       ├── login.less
    │       ├── loginAction.js
    │       └── loginReducer.js
    ├── index.css
    ├── index.js
    ├── redux
    │   ├── reducers
    │   │   └── index.js
    │   └── store
    │       └── index.js
    ├── registerServiceWorker.js
    ├── router.js
    └── service
```

这两个文件是必须要有而且不能rename的:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

其他文件可以任意更改.

所有`JS` `CSS`需要创建在 `src`下，只有这个目录下的文件才会被webpack编译打包.

`public/index.html`只能引用`public`目录下的文件.


### 环境要求

NodeJS 6.0+

对node有多个版本需求的，可以使用[nvm](https://github.com/creationix/nvm)管理node版本

### 开发
```
$ yarn
$ yarn start
```
or
```
$ npm install
$ npm start
```

国内npm install速度慢，可以安装[nrm](https://github.com/Pana/nrm)，修改npm源

### 编译

```
$ yarn build
```
or
```
$ npm run build
```




