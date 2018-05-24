/*
 * @Author: qiuz
 * @Date: 2018-05-24 15:29:29
 * */

import { createActions } from 'redux-actions';

export const {login, logout} = createActions({
	LOGIN: param => param,
	LOGOUT: () => {}
});