/*
 * @Author: qiuz
 * @Date: 2018-05-24 19:24:46
 * */

import { fetchResource } from './fetchapi';
const API_HOST = '';
const SERVICE_NAME = '';

export const Resource = {

	user: fetchResource(`${API_HOST}${SERVICE_NAME}/user/:userId`), 
	
};
