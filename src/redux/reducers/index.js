/*
 * @Author: qiuziz
 * @Date: 2017-08-15 11:42:42
 * */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {loginReducer} from '../../container/login';
import {homeReducer} from '../../container/home';

const reducers = combineReducers({
	user: loginReducer,
	home: homeReducer,
	routing: routerReducer
});



export default reducers;
