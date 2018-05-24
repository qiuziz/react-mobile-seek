/*
 * @Author: qiuz
 * @Date: 2018-05-24 15:28:40
 * */

import React from 'react';
import {connect} from 'react-redux';

@connect(state => ({
	user: state.user
}))
export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: props.user.username,
			blog: 'http://qiuz.me',
			github: 'https://github.com/qiuziz'
		};
	}

	componentDidMount() {
    
	}
	
	render() {
		return (
			<div>
				Hi, {this.state.username}
				<br />
				<br />
				I'm qiuz
				<br />
				<br />
				This is my <a href={this.state.blog}>Blog</a>
				<br />
				<br />
				This is my <a href={this.state.github}>Github</a>
			</div>
		)
	}
}