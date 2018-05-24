/*
 * @Author: qiuz
 * @Date: 2018-05-24 15:28:32
 * */

import React from 'react';
import {withRouter, Redirect} from "react-router-dom";

import { NavBar, Icon } from 'antd-mobile';
import './index.less';
import LocalStorage from '../../service/LocalStorage';


@withRouter
export default class dashboard extends React.Component {

	onLeftClick = () => {
		this.props.history.go(-1);
	}

  render () {
		const user = LocalStorage.getItem('user');
    return (
			user
			?	<div className="dashboard">
					<header>
						<NavBar
				      mode="light"
				      icon={<Icon type="left" />}
				      onLeftClick={this.onLeftClick}
				      rightContent={[
				        <Icon key="1" type="ellipsis" />,
							]}>
							{this.props.title}
						</NavBar>
					</header>
					<main>
						{this.props.children}
					</main>
					<footer>
							2018@qiuz
					</footer>
				</div>
			: <Redirect to="/login" />
    )
  }
}

