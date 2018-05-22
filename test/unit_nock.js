/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const assert = require('chai').assert;
const nock = require('nock');
const { URL } = require('url');

const perfUtils = require('../src/perf-utils');
const perf = new perfUtils.PUtils('.perf_config.js');
const sampleData = require('./data/sample-data');
const nockURL = new URL(perf.params.PERF_API_URL);

describe('Testing with "nock" server - should be able to:', function () {

  it('retrieve JS code from [injectjs]', function () {
    nock(nockURL.origin)
      .post(nockURL.pathname + 'injectjs')
      .reply(200, {
        inject_code: 'url: document.location.href'
      });

    return perf.getInjectJS('navtiming', 'visual_complete')
      .then(response => {
        assert.isString(response.data.inject_code);
        assert.isString(decodeURIComponent(response.data.inject_code));
        assert.include(decodeURIComponent(response.data.inject_code), 'url: document.location.href', 'has the expected text!');
      })
      .catch(err => {
        console.warn(`API error: code: ${err.code} - message: ${err.message}`);
        return (err);
      });
  });

  it('get expected result from [navtiming]', function () {
    nock(nockURL.origin)
      .post(nockURL.pathname + 'navtiming')
      .reply(200, {
        assert: true,
        export: 'some data'
      });

    const apiParams = perf.getApiParams({ sla: { pageLoadTime: 2500 }});
    return perf.navtiming(sampleData.navtiming.injectJS, apiParams)
      .then(response => {
        assert.isTrue(response.data.assert, 'expected the [assert] field to be True!');
        assert.property(response.data, 'export', '[navtiming] response did not include the [export] key!');
      })
      .catch(err => {
        console.warn(`API error: code: ${err.code} - message: ${err.message}`);
        return (err);
      });
  });

  it('get expected result from  [usertiming]', function () {
    nock(nockURL.origin)
      .post(nockURL.pathname + 'usertiming')
      .reply(200, {
        assert: true,
        export: 'some other data'
      });

    const apiParams = perf.getApiParams({ sla: { pageLoadTime: 1000 }});
    return perf.usertiming(sampleData.usertiming.injectJS, apiParams)
      .then(response => {
        assert.isTrue(response.data.assert, 'expected the [assert] field to be True!');
        assert.property(response.data, 'export', '[usertiming] response did not include the [export] key!');
      })
      .catch(err => {
        console.warn(`API error: code: ${err.code} - message: ${err.message}`);
        return (err);
      });
  });

  it('get expected result from  [apitiming]', function () {
    nock(nockURL.origin)
      .post(nockURL.pathname + 'apitiming')
      .reply(200, {
        assert: true,
        export: 'lorem ipsum'
      });

    const apiParams = perf.getApiParams({ sla: { pageLoadTime: 600 }});
    return perf.apitiming(sampleData.apitiming.timing, sampleData.apitiming.url, apiParams)
      .then(response => {
        assert.isTrue(response.data.assert, 'expected the [assert] field to be True!');
        assert.property(response.data, 'export', '[apitiming] response did not include the [export] key!');
      })
      .catch(err => {
        console.warn(`API error: code: ${err.code} - message: ${err.message}`);
        return (err);
      });
  });

  it('get expected result for [multirun]', function () {
    nock(nockURL.origin)
      .post(nockURL.pathname + 'navtiming')
      .reply(200, {
        acknowledge: true,
        export: 'lorem ipsum'
      });

    const apiParams = perf.getApiParams({ multirun: { totalRuns: 3, currentRun: 1 }});
    return perf.navtiming(sampleData.navtiming.timing, sampleData.navtiming.url, apiParams)
      .then(response => {
        assert.isTrue(response.data.acknowledge, 'expected the [acknowledge] field to be True!');
      })
      .catch(err => {
        console.warn(`API error: code: ${err.code} - message: ${err.message}`);
        return (err);
      });
  });
});
