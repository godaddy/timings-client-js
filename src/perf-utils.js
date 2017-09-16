const axios = require('axios');

const fetchParams = require('./config-utility').fetchParams;

const params = fetchParams();
axios.defaults.baseURL = params.PERF_API_URL;
axios.defaults.timeout = 1000;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

exports = module.exports = {
  getApiParams,
  getInjectJS,
  navtiming,
  usertiming,
  apitiming
};

function post(name, data) {
  return axios.post(name, data);
}

function getApiParams({ sla, debug, esTrace, esCreate, days, perc, padding, searchUrl, log }) {
  // app_info,platform,browser,environment,team are required values
  const data = params.api_params;
  data.sla = sla || params.api_params.sla;
  data.flags.debug = debug || params.api_params.flags.debug;
  data.flags.esTrace = esTrace || params.api_params.flags.esTrace;
  data.flags.esCreate = esCreate || params.api_params.flags.esCreate;
  data.baseline.days = days || params.api_params.baseline.days;
  data.baseline.perc = perc || params.api_params.baseline.perc;
  data.baseline.padding = padding || params.api_params.baseline.padding;
  data.baseline.searchUrl = searchUrl || '';

  if (!searchUrl) delete data.baseline.searchUrl;

  if (log && typeof log === 'object') {
    params.api_params.log = Object.assign(params.api_params.log, log);
  }
  return data;
}

function getInjectJS(injectType, visualCompleteMark, cb) {
  const data = { injectType, visualCompleteMark };
  return post('injectjs', data, cb);
}

function usertiming(injectJS, apiParams, cb) {
  const data = Object.assign({ injectJS: injectJS }, apiParams);
  return post('usertiming', data, cb);
}

function navtiming(injectJS, apiParams, cb) {
  const data = Object.assign({ injectJS: injectJS }, apiParams);
  return post('navtiming', data, cb);
}

function apitiming(timing, url, apiParams, cb) {
  const data = Object.assign({ timing: timing, url: url }, apiParams);
  return post('apitiming', data, cb);
}
