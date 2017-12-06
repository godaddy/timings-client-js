const axios = require('axios');
const path = require('path');

axios.defaults.timeout = 1000;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

class PUtils {
  constructor(customConfig = null) {
    this.defaultConfig = './.config.js';
    this.params = this.fetchParams(customConfig);
  }

  post(name, data) {
    axios.defaults.baseURL = this.params.PERF_API_URL;
    const result = axios
      .post(name, data)
      .catch(function (error) {
        console.warn(error);
      });
    return result;
  }

  fetchParams(customConfig = null) {
    const cwd = process.cwd();
    const fullPath = (customConfig) ? path.resolve(cwd, customConfig) : path.resolve(cwd, this.defaultConfig);

    // Check if config file exists file exists and can be accessed.
    try {
      const configFile = require(fullPath);
      return configFile;
    } catch (ex) {
      const configFile = require('../.config_sample.js');
      return configFile;
    }
  };

  getApiParams({ sla, debug, esTrace, esCreate, days, perc, padding, searchUrl, log }) {
    // app_info,platform,browser,environment,team are required values
    const updatedParams = this.params.api_params;
    updatedParams.sla = sla || this.params.api_params.sla;
    updatedParams.flags.debug = debug || this.params.api_params.flags.debug;
    updatedParams.flags.esTrace = esTrace || this.params.api_params.flags.esTrace;
    updatedParams.flags.esCreate = esCreate || this.params.api_params.flags.esCreate;
    updatedParams.baseline.days = days || this.params.api_params.baseline.days;
    updatedParams.baseline.perc = perc || this.params.api_params.baseline.perc;
    updatedParams.baseline.padding = padding || this.params.api_params.baseline.padding;

    if (searchUrl)
      updatedParams.baseline.searchUrl = searchUrl;

    if (log && typeof log === 'object')
      updatedParams.log = Object.assign(this.params.api_params.log, log);

    return updatedParams;
  }

  getInjectJS(injectType, visualCompleteMark) {
    const data = {
      injectType,
      visualCompleteMark
    };
    return this.post('injectjs', data);
  }

  usertiming(injectJS, apiParams) {
    const data = Object.assign({
      injectJS: injectJS
    }, apiParams);
    return this.post('usertiming', data);
  }

  navtiming(injectJS, apiParams) {
    const data = Object.assign({
      injectJS: injectJS
    }, apiParams);
    return this.post('navtiming', data);
  }

  apitiming(timing, url, apiParams) {
    const data = Object.assign({
      timing: timing,
      url: url
    }, apiParams);
    return this.post('apitiming', data);
  }
}

module.exports.PUtils = PUtils;
