/*
 * @Author: qiuz
 * @Date: 2018-05-23 17:34:02
 * */

import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from "./container/dashboard";
import {Home} from "./container/home";
import {Login} from "./container/login";

const App = () => (
	<Switch>
		{
			routes.map(({ path, Layout, Component, exact, title } = {}, index) => (
				<Route key={index} path={path} exact={exact} render={
					props => (
						<Layout {...props} title={title}>
								<Component {...props}/>
							</Layout>
					)}
				/>
		))
	}
	<Route path="/login" exact component={Login} />
	<Redirect to="/" />
	</Switch>
)

	const routes = [
		{ path: '/',
			Component: Home,
			exact: true,
			Layout: Dashboard,
			title: '首页'
		},
		{ path: '/home',
			Component: Home,
			exact: true,
			Layout: Dashboard,
			title: 'Home'
		}
	]
	
	

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends React.Component{
  render(){
    return(
      <HashRouter>
       	<App />
      </HashRouter>
    )
  }
}