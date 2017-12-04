# timings-client-js

Client for [Timings API](https://www.github.com/godaddy/timings) to support **JavaScript** based test environments

## Purpose

- Sending performance data from functional tests to the [timings API](https://www.github.com/godaddy/timings).
- This client makes it easy to communicate with the API without the need to setup your own curl/axios/etc. calls.
- The response contains the necessary fields to validate/assert the performance results (look for the `assert` field!).
- The API stores the results in ElasticSearch and can be visualized with Kibana.
- This helps get better visibility into performance improvements/regression trends before moving into production.

To learn more about ELK (Elastic Search, LogStash, Kibana). Click Here [https://www.elastic.co/products/kibana](https://www.elastic.co/products/kibana)

## Installation

To use timings-client-js, add it as a 'devDependency' to your project

```shell
npm install --save-dev timings-client-js
```

## Configuration

Add a custom config file to your project's root folder and edit your default settings. Example:

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
            "assertBaseline": true,
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

## Instrumenting your test scripts

In your test script(s), you initiate the client with the the `PUtils` class from the `timings-client-js` module. You can pass **just the filename** of your custom config file (file should be in the project root!) to the class. For example:

```javascript
const timings = require('timings-client-js');
const perf = new timings.PUtils('perftimings.js');
```

With the client initiated, you can now call the different methods from your script. **NOTE:** the methods are Promise based! Use async methods like `.then((response) => {})` to capture the responses!

### Client methods

|method|Promise|description|response|
|-|-|-|-|
|**getApiParams**|no|grab the (default/custom) parameters to be send to the API|JSON object - refers to the example config file above. Also see the `perf_params` variable in below example|
|**getInjectJS**|yes|get the "inject code" from the API|Encrypted string in `response.data.inject_code` - Also see the `inject_code` variable in below example|
|**usertiming**|yes|Post user-timing performance data to the API|JSON object - look for `assert` field!|
|**navtiming**|yes|Post navigation-timing performance data to the API|JSON object - look for `assert` field!|
|**apitiming**|yes|Post api-timing performance data to the API|JSON object - look for `assert` field!|

### Example script

Below is a simple test script to demonstrate the instrumentation:

```javascript
const timings = require('timings-client-js');
const perf = new timings.PUtils('perftimings.js');

describe('Demo timings-client', function() {
    it('page performance should be within SLA', function() {
        const perf_params = perf.getApiParams({sla:{pageLoadTime: 3000}, debug: true});
        return perf.getInjectJS('navtiming', 'visual_complete')
            .then((response) => {
                inject_code = response.data.inject_code || '';
                if (inject_code) {
                    console.log("Encoded INJECT code: " + JSON.stringify(inject_code, null, 4));
                    return browser
                        .url('http://seleniumhq.org/')
                        .isVisible('#header')
                        .execute('window.performance.mark("visual_complete");')
                        .execute(decodeURIComponent(inject_code))
                        .then((response) => {
                            // Grab the browser's response - has the performance data!
                            const browser_response = response.value || {};
                            if (browser_response) {
                                console.log("BROWSER response: " + JSON.stringify(browser_response, null, 4));
                                return perf.navtiming(browser_response, perf_params, null)
                                .then((response) => {
                                        // Grab the API's response - has the assert field!
                                        const api_response = response.data || {};
                                        if (api_response) {
                                            console.log("PERF-API response: " + JSON.stringify(api_response.export.perf, null, 4));
                                            expect(api_response.assert, 'Performance failed! assert field is False').to.be.true;
                                        }
                                    });
                            }
                        })
                }
            });
    });
});
```

For more information about the API: [https://github.com/godaddy/timings](https://github.com/godaddy/timings/blob/master/README.md)
