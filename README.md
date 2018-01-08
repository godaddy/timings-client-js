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
    "api_timeout": 2000,
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

## Instrumenting your test scripts

In your test script(s), you initiate the client with the the `PUtils` class from the `timings-client-js` module. You can pass **just the filename** of your custom config file (file should be in the project root!) to the class. For example:

```javascript
const timings = require('timings-client-js');
const perf = new timings.PUtils('perftimings.js');
```

With the client initiated, you can now call the different methods from your script. **NOTE:** the methods are Promise based! Use async methods like `.then((response) => {})` to capture the responses!


### Example script

Below is a simple test script to demonstrate the instrumentation:

```javascript
const timings = require('timings-client-js');
const perf = new timings.PUtils('perftimings.js');

describe('Demo timings-client', function() {
    it('page performance should be within SLA', function() {
        const perf_params = perf.getApiParams( {sla:{pageLoadTime: 3000}, debug: true} );
        return perf.getInjectJS('navtiming', 'visual_complete', true)
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


### Client methods

## `getApiParams({ sla, debug, esTrace, esCreate, days, perc, padding, searchUrl, log })`

Collect or overwrite the default parameters (see above) to be send to the API. None of the parameters are required. If you submit an empty object, the defaults will be used.

|param|type|default|description|
|-|-|-|-|
|sla|object|-|Overwrite the default `sla` settings. Example:<br>`getApiParams( { "sla": {"visualCompleteTime": 2000} } )`
|debug|boolean|`false`|Receive extra debug information from the API
|esTrace|boolean|`false`|Request Elasticsearch query information from the API
|esCreate|boolean|`true`|Save the result to elasticsearch
|days|int|`7`|Number of days to calculate the baseline for
|perc|int|`75`|Percentile of the baseline to be calculated
|padding|int|`1.2`|Multiplier to calculate extra padding on top of the baseline
|searchUrl|string|`''`|Wildcard to use for baseline (instead of using the submitted URL)
|log|object|-|Object that holds the keys to be logged. Can be used to overwrite the defaults or add extra keys!

Example:<br>

```javascript
getApiParams( { "sla": { "pageLoadTime": 5000 }, "debug": true})
```

Returns:

```json
{
    "sla": {
        "pageLoadTime": 5000
    },
    "baseline": {
        "days": 7,
        "perc": 75,
        "padding": 1.2
    },
    "flags": {
        "assertBaseline": true,
        "debug": true,
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
```

Notice that the `sla` and the `flags.debug` keys were changed when compared to the defaults!

## `getInjectJS(injectType, visualCompleteMark, stripQueryString)`

Get the "inject code" from the API

|param|type|required|default|description|
|-|-|-|-|-|
|injectType|string|Yes|-|The type of measurement you are performing. Valid options are `navtiming` and `usertiming`|
|visualCompleteMark|No|string|`false`|The name of the visual complete mark|
|stripQueryString|No|boolean|`false`|Indicates whether you want to strip the querystring from the URL you are testing|

Example:<br>

```javascript
getInjectJS( "navtiming", "visual_complate", true )
```

Returns:

```json
{
    "status": 200,
    "inject_code": "var%20visualCompleteTime%20%3D%200%3B%0Aif%20(performance.getEntriesByName('visual_complete').length)%20%7B%0A%20%20visualCompleteTime%20%3D%20parseInt(performance.getEntriesByName('visual_complete')%5B0%5D.startTime)%3B%0A%20%20window.performance.clearMarks()%3B%0A%7D%3B%0Areturn%20%7Btime%3Anew%20Date().getTime()%2C%20timing%3Awindow.performance.timing%2C%20visualCompleteTime%3A%20visualCompleteTime%2C%20url%3A%20document.location.href.split(%22%3F%22)%5B0%5D%2C%20resources%3A%20window.performance.getEntriesByType('resource')%7D%3B"
}
```

## `navtiming(injectJS, apiParams)`

Post navtiming performance data to the API

|param|type|required|default|description|
|-|-|-|-|-|
|injectJS|object|Yes|-|Contains the full response that you received from the browser after injecting the `injectjs` code|
|apiParams|object|Yes|-|Contains the API params that you retrieved from the `getApiParams()` method|

## `usertiming(injectJS, apiParams)`

Post usertiming performance data to the API

|param|type|required|default|description|
|-|-|-|-|-|
|injectJS|object|Yes|-|Contains the full response that you received from the browser after injecting the `injectjs` code|
|apiParams|object|Yes|-|Contains the API params that you retrieved from the `getApiParams()` method|

## `apitiming(timing, url, apiParams)`

Post apitiming performance data to the API

|param|type|required|default|description|
|-|-|-|-|-|
|timing|object|Yes|-|Contains the start- and stop-timestamps that you set before and after running the API test. Example:<br>`{"startTime": 1515443109031, "endTime": 1515443109046}` |
|url|string|Yes|-|The URL of the API you're testing|
|apiParams|object|Yes|-|Contains the API params that you retrieved from the `getApiParams()` method|

For more information about the API: [https://github.com/godaddy/timings](https://github.com/godaddy/timings/blob/master/README.md)
