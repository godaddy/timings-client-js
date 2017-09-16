# timings-client-js

Client for [Timings API](https://www.github.com/godaddy/timings) to support **JavaScript** based test environments

## Purpose

- Sending performance data from functional tests to the cicd-perf API.
- This client makes it easy to communicate with the API without the need to setup your own curl/axios/etc. calls.
- The response contains the necessary fields to validate/assert the performance results (look for the `assert` field!).
- The API stores the results in ElasticSearch and can be visualized with Kibana.
- This helps get better visibility into performance improvements/regression trends before moving into production.

To learn more about ELK (Elastic Search, LogStash, Kibana). Click Here [https://www.elastic.co/products/kibana](https://www.elastic.co/products/kibana)

## Usage

To use timings-client-js, add it as a 'devDependency' to your project

```shell
npm install --save-dev timings-client-js
```

Add a `.config.js` config file to your project's home folder and edit your default settings

```javascript
module.exports = {
    "PERF_API_URL": "http://<API host>/v2/api/cicd/",
    "api_params": {
        "sla": {
            "pageLoadTime": 2000
        },
        "baseline": {
            "days": 7,
            "perc": 75,
            "padding": 1.2,
            "searchUrl": ""
        },
        "flags": {
            "assertRum": true,
            "debug": false,
            "esTrace": false,
            "esCreate": false,
            "passOnFailedAssert": false
        },
        "log": {
            "test_info": "Sample test_info",
            "env_tester": "Sample tester",
            "browser": "Sample browser",
            "env_target": "Sample target",
            "team": "SAMPLE TEAM"
        }
    }
};
```

## Adding the client to your test scripts

In your test script(s), import the client like this:

```javascript
const perf = require('timings-client-js');
```

You can now call the different methods from your script. Below is a simple example:

```javascript
//”./js/specs/demo-2-perf.js”
const perf = require('timings-client-js');

describe('Demo timings-client', function() {
    it('page performance should be within SLA', function() {
        console.log("I'm in the navtiming test");
        const perf_params = perf.getApiParams({sla:{pageLoadTime: 3000}, debug: true});
        return perf.getInjectJS('navtiming', 'visual_complete')
            .then((response) => {
                injectCode = response.data.inject_code;
                console.log("nav_inject_code :" + injectCode)
                return browser
                    .url('http://seleniumhq.org/')
                    .isVisible('#header')
                    .execute('window.performance.mark("visual_complete");')
                    .execute(decodeURIComponent(injectCode))
                    .then((response) => {
                        // Grab the browser's response - has the performance data!
                        const injectResponse = response.value;
                        console.log("PERF-API response: " + JSON.stringify(perf_params, null, 4));
                        return perf.navtiming(injectResponse, perf_params, null)
                        .then((response) => {
                                // Grab the API's response - has the assert field!
                                const apiResponse = response.data;
                                console.log("PERF-API response: " + JSON.stringify(apiResponse.export.perf, null, 4));
                                expect(apiResponse.assert, 'Performance failed! assert field is False').to.be.true;
                            });
                    })
            });
    });
});
```

For more information about the API: [https://github.com/godaddy/perf-api](https://github.com/godaddy/perf-api/blob/master/README.md)