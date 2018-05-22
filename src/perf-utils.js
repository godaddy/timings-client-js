const axios = require('axios');
const path = require('path');

axios.defaults.timeout = 2000;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

class PUtils {
  constructor(customConfig = null) {
    this.defaultConfig = '../.config_sample.js';
    this.params = this.fetchParams(customConfig);
  }

  post(name, data) {
    axios.defaults.baseURL = this.params.PERF_API_URL;
    const result = axios
      .post(name, data)
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the 2xx range
          console.warn(
            `timings-client-js - API Error [${axios.defaults.baseURL}${name}]:\n${JSON.stringify(error.response.data, null, 2)}`
          );
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.warn(`timings-client-js - API Error [${axios.defaults.baseURL}${name}]: No response from server!`);
        } else {
          // Something else happened in setting up the request that triggered an Error
          console.warn(`timings-client-js - API Error [${axios.defaults.baseURL}${name}]: ${error.message}`);
        }
        return (error.message);
      });
    return (result);
  }

  fetchParams(customConfig = null) {
    let configFile;
    if (customConfig) {
      const cwd = process.cwd();
      const fullPath = (customConfig) ? path.resolve(cwd, customConfig) : path.resolve(cwd, this.defaultConfig);
      // Check if config file exists file exists and can be accessed.
      try {
        configFile = require(fullPath);
      } catch (ex) {
        console.warn('timings-client-js - Error reading custom config - switching to default!' + ex.message);
        configFile = require(this.defaultConfig);
      }
    } else {
      configFile = require(this.defaultConfig);
    }

    if (configFile.hasOwnProperty('api_timeout')) {
      const apiTimeout = parseInt(configFile.api_timeout, 10);
      if (apiTimeout > 2000) {
        console.warn('timings-client-js - changing API timeout to: ' + apiTimeout);
        axios.defaults.timeout = apiTimeout;
      }
    }
    return configFile;
  }

  getApiParams({ sla, debug, multirun, esTrace, esCreate, days, perc, padding, searchUrl, log }) {
    // app_info,platform,browser,environment,team are required values
    const data = this.params.api_params;
    data.sla = sla || this.params.api_params.sla;
    data.flags.debug = debug || this.params.api_params.flags.debug;
    data.flags.esTrace = esTrace || this.params.api_params.flags.esTrace;
    data.flags.esCreate = esCreate || this.params.api_params.flags.esCreate;
    data.baseline.days = days || this.params.api_params.baseline.days;
    data.baseline.perc = perc || this.params.api_params.baseline.perc;
    data.baseline.padding = padding || this.params.api_params.baseline.padding;
    if (searchUrl)
      data.baseline.searchUrl = searchUrl;
    if (multirun && typeof multirun === 'object')
      data.multirun = multirun;
    if (log && typeof log === 'object') {
      this.params.api_params.log = Object.assign(this.params.api_params.log, log);
    }
    return data;
  }

  getInjectJS(injectType, visualCompleteMark, stripQueryString) {
    const data = {
      injectType: injectType,
      visualCompleteMark: visualCompleteMark
    };
    if (typeof stripQueryString === 'boolean') {
      data.stripQueryString = stripQueryString;
    }
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
