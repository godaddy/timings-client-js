/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const assert = require('chai').assert;
const nock = require('nock');

const perfUtils = require('../src/perf-utils');
const sampleData = require('./data/sample-data');

describe('Should be able to:', function () {

  it('retrieve JS code from [injectjs]', function (done) {
    nock('http://localhost')
      .post('/v2/api/cicd/injectjs')
      .reply(200, {
        inject_code: 'url: document.location.href'
      });

    return perfUtils.getInjectJS('navtiming', 'visual_complete')
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
    nock('http://localhost')
      .post('/v2/api/cicd/navtiming')
      .reply(200, {
        assert: true,
        export: 'some data'
      });

    const apiParams = perfUtils.getApiParams({ sla: { pageLoadTime: 2000 }});
    return perfUtils.navtiming(sampleData.navtiming.injectJS, apiParams)
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
    const apiParams = perfUtils.getApiParams({ sla: { pageLoadTime: 2000 }});
    nock('http://localhost')
      .post('/v2/api/cicd/usertiming')
      .reply(200, {
        assert: true,
        export: 'some other data'
      });

    return perfUtils.usertiming(sampleData.usertiming.injectJS, apiParams)
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
    const apiParams = perfUtils.getApiParams({ sla: { pageLoadTime: 2000 }});
    nock('http://localhost')
      .post('/v2/api/cicd/apitiming')
      .reply(200, {
        assert: true,
        export: 'lorem ipsum'
      });

    return perfUtils.apitiming(sampleData.apitiming.timing, sampleData.apitiming.url, apiParams)
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
