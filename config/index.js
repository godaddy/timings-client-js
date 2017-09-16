const config = {};
config.configFileName = './.config.js';

/**
 * requiredParams against the version you have selected
 */
config.requiredParams = ['api_params.sla', 'api_params.baseline', 'api_params.log'];

/**
 * You can override any of these params from your config file
 * Also, if you want you can add new params as well in your config
 * The additional params sent are a combination of extraParams (overridden or not) and extra params from your config file
 */

config.extraParams = {};

module.exports = config;
