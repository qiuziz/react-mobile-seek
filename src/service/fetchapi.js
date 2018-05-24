/*
 * @Author: qiuz
 * @Date: 2018-05-24 19:24:33
 * */

import 'whatwg-fetch';

const fetchMethod = (_url, _config) => {
	return fetch(_url, _config)
					.then(response => {
						if (!response.ok) {
							return response.json().then(err => { throw err; });
						}
						return response.json().then(undefined, () => Promise.resolve(''));
					})
					.catch(err => {
						throw err;
					});
};

const matchUrlSearchParams = (url, urlSearchParams) => {
	if (!urlSearchParams) {
		return url.replace(/\/:[^?]+/g, '');
	}
	let u = new URLSearchParams();
	let _url = Object.keys(urlSearchParams).reduce((pre, next) => {
		if (pre.includes(':' + next)) {
			return pre.replace(':' + next, urlSearchParams[next]);
		} else {
			if (urlSearchParams[next] && urlSearchParams[next].constructor === Array) {
				urlSearchParams[next].forEach(value => {
					u.append(next, value);
				})
			} else {
				u.append(next, urlSearchParams[next]);
			}
			return pre;
		}
	}, url);
	// let u = toQueryString(urlSearchParams);
	_url = _url.replace(/\/:[^?]+/g, '');
	return _url + (u.toString() === '' ? '' : '?' + u);
};

// function toQueryPair(key, value) {
// 	if (typeof value === 'undefined'){
// 			return key;
// 	}
// 	return key + '=' + encodeURIComponent(value === null ? '' : String(value));
// }
// function toQueryString(obj) {
// 	var ret = [];
// 	for(var key in obj){
// 			key = encodeURIComponent(key);
// 			var values = obj[key];
// 			if(values && values.constructor === Array){//数组
// 					var queryValues = [];
// 					for (var i = 0, len = values.length, value; i < len; i++) {
// 							value = values[i];
// 							queryValues.push(toQueryPair(key, value));
// 					}
// 					ret = ret.concat(queryValues);
// 			}else{ //字符串
// 					ret.push(toQueryPair(key, values));
// 			}
// 	}
// 	return ret.join('&');
// }

class FetchApi {

	headers = {};

	constructor(_url) {
		this.url = _url;
		// this.headers.append("Content-Type", "application/json");
		this.headers["Content-Type"] = "application/json;charset=UTF-8";
	}

	get = (urlSearchParams, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams), config);
	};

	post = (urlSearchParams, bodyParams, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams),
			Object.assign(config, {
				method: 'POST',
				body: JSON.stringify(bodyParams)
			})
		);
	};

	upload = (urlSearchParams, bodyParams) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams),
			{
				method: 'POST',
				body: bodyParams
			}
		);
	};

	delete = (urlSearchParams, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams),
			Object.assign(config, {
				method: 'DELETE'
			})
		);
	};

	put = (urlSearchParams, bodyParams, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams),
			Object.assign(config, {
				method: 'PUT',
				body: JSON.stringify(bodyParams)
			})
		);
	};

	patch = (urlSearchParams, bodyParams, config = {headers: this.headers}) => {
		return fetchMethod(matchUrlSearchParams(this.url, urlSearchParams),
			Object.assign(config, {
				method: 'PATCH',
				body: JSON.stringify(bodyParams)
			})
		);
	}
}

const fetchResource = url => {
	return new FetchApi(url);
};

export { fetchResource };
