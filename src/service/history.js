/*
 * @Author: qiuz
 * @Date: 2018-05-24 19:24:39
 * */

import { hashHistory } from 'react-router';


const BrowserUtils = {

	push(params) {
    hashHistory.push(params);
	},

	replace(params) {
    hashHistory.replace(params);
	},

	goBack() {
		hashHistory.goBack();
	}

};

export default BrowserUtils;