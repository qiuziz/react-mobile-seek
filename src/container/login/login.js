/*
 * @Author: qiuz
 * @Date: 2018-05-24 15:28:47
 * */

import './login.less';
 
import React from 'react';
import { WhiteSpace, InputItem, Button, Toast } from 'antd-mobile';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {login} from './loginAction';

@withRouter
@connect(
	state => ({
		user: state.user
	}), {
		login
	})
export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	componentDidMount() {
    
	}

	onChangePwd = (value) => {
    this.setState({
      password: value
    });
	}

	onChangeUsername = value => {
		this.setState({
      username: value
    });
	}
	
	loginClick = () => {
		const {username, password} = this.state;
		if (!username || !password) {
			Toast.fail('请填写用户名和密码');
			return;
		}
		this.props.login(this.state);
		this.props.history.push("/");
	}
	
	render() {
		return (
			<div className="login">
				<header className="header">
					<img src="./images/login-header.jpg" alt="login" />
				</header>
				<WhiteSpace />
				<main className="content">
					<div className="info">
							<InputItem
								type="text"
								placeholder="input your name"
								onChange={this.onChangeUsername}
								value={this.state.username}
							/>
							<WhiteSpace />
							<InputItem
								type="password"
								placeholder="input your password"
								onChange={this.onChangePwd}
								value={this.state.password}
						/>
					</div>
					<WhiteSpace />

					<Button type="primary" className="login-btn" onClick={this.loginClick}>Login</Button>
				</main>
			</div>
		)
	}
}