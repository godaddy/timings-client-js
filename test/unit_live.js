/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const assert = require('chai').assert;

const perfUtils = require('../src/perf-utils');
const perf = new perfUtils.PUtils('.perf_config.js');
const sampleData = require('./data/sample-data');

describe('Testing against live server - should be able to:', function () {

  it('retrieve JS code from [injectjs]', function (done) {
    return perf.getInjectJS('navtiming', 'visual_complete')
      .then(response => {
        assert.isString(response.data.inject_code);
        assert.isString(decodeURIComponent(response.data.inject_code));
        assert.include(decodeURIComponent(response.data.inject_code), 'url: document.location.href', 'has the expected text!');
        done();
      })
      .catch(err => {
        console.warn(`API error: code: ${err.code} - message: ${err.message}`);
        return done(err);
      });
  });

  it('get expected result from [navtiming]', function (done) {
    const apiParams = perf.getApiParams({ sla: { pageLoadTime: 2500 }, debug: true });
    return perf.navtiming(sampleData.navtiming.injectJS, apiParams)
      .then(response => {
        assert.isTrue(response.data.assert, 'expected the [assert] field to be True!');
        assert.property(response.data, 'export', '[navtiming] response did not include the [export] key!');
        done();
      })
      .catch(err => {
        console.warn(`API error: code: ${err.code} - message: ${err.message}`);
        return done(err);
      });
  });

  it('get expected result from  [usertiming]', function (done) {
    const apiParams = perf.getApiParams({ sla: { pageLoadTime: 1000 }});
    return perf.usertiming(sampleData.usertiming.injectJS, apiParams)
      .then(response => {
        assert.isTrue(response.data.assert, 'expected the [assert] field to be True!');
        assert.property(response.data, 'export', '[usertiming] response did not include the [export] key!');
        done();
      })
      .catch(err => {
        console.warn(`API error: code: ${err.code} - message: ${err.message}`);
        return done(err);
      });
  });

  it('get expected result from  [apitiming]', function (done) {
    const apiParams = perf.getApiParams({ sla: { pageLoadTime: 600 }});
    return perf.apitiming(sampleData.apitiming.timing, sampleData.apitiming.url, apiParams)
      .then(response => {
        assert.isTrue(response.data.assert, 'expected the [assert] field to be True!');
        assert.property(response.data, 'export', '[apitiming] response did not include the [export] key!');
        done();
      })
      .catch(err => {
        console.warn(`API error: code: ${err.code} - message: ${err.message}`);
        return done(err);
      });
  });
});
