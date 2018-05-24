import { handleActions } from 'redux-actions';
import { login, logout } from './loginAction';
import LocalStorage from '../../service/LocalStorage';

const Login = handleActions({
	[login]: (state, actions) => {
		LocalStorage.setItem('user', actions.payload);
		return {
		...state,
		...actions.payload
		}
	},
	[logout]: (state, actions) => {
		LocalStorage.removeItem('user');
		return {
			username: ''
		}
	}
}, {username: ''})

export default Login;
