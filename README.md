# timings-client-js

Client for [Timings API](https://www.github.com/godaddy/timings) to support **JavaScript** based test environments.  

**NOTE**: you need to have a timings API server running in your network to use this client!

## Purpose

- Sending performance data from functional tests to the [timings API](https://www.github.com/godaddy/timings).
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

Add a custom config file to **your project's root folder** (example: `perftimings.js`) and edit to reflect your environment. These will become the **default** parameters for your tests! You can overwrite parameters for individual tests by using the `getApiParams` method (see sample test below).

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
            "padding": 1.2
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

You can find a list of all the 'common' parameters here: https://github.com/godaddy/timings#common-parameters-navtiming-usertiming-and-apitiming


## Adding the client to your test scripts

In your test script(s), you have to initiate the client with the name of your custom config file, example:

```javascript
const timings = require('timings-client-js');
const perf = new timings.PUtils('perftimings.js');
```

You can now call the different methods from your script. Below is a simple example:

```javascript
const timings = require('timings-client-js');
const perf = new timings.PUtils('custom_config.js');

describe('Demo timings-client', function() {
    it('page performance should be within SLA', function() {
        const perf_params = perf.getApiParams({sla:{pageLoadTime: 3000}, debug: true});
        return perf.getInjectJS('navtiming', 'visual_complete')
            .then((response) => {
                const injectCode = response.data.inject_code;
                return browser
                    .url('http://seleniumhq.org/')
                    .isVisible('#header')
                    .execute('window.performance.mark("visual_complete");')
                    .execute(decodeURIComponent(injectCode))
                    .then((response) => {
                        // Grab the browser's response - has the performance data!
                        const injectResponse = response.value;
                        return perf.navtiming(injectResponse, perf_params)
                        .then((response) => {
                                // Grab the API's response - use the 'assert' field to validate!
                                const apiResponse = response.data;
                                expect(apiResponse.assert, 'Performance failed! assert field is False').to.be.true;
                            });
                    })
            });
    });
});
```

For more information about the API: [https://github.com/godaddy/perf-api](https://github.com/godaddy/perf-api/blob/master/README.md)
