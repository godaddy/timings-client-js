const path = require('path');
const config = require('../config');

const fetchParams = function () {
  const cwd = process.cwd();
  const fullPath = path.resolve(cwd, config.configFileName);

  // Check if config file exists file exists and can be accessed.
  try {
    const configFile = require(fullPath);
    return configFile;
  } catch (ex) {
    const configFile = require('../.config_sample.js');
    return configFile;
  }
};

const checkForRequiredParams = function (repoConfig) {

  for (let i = 0; i < config.requiredParams.length ; i++) {
    const param = config.requiredParams[i];
    if (!(param in repoConfig)) {
      return false;
    }
  }
  return true;
};

const getExtraParams = function (repoConfig) {
  const allParams = {};
  // Priority is given to extraParams from the calling repo
  for (const repoParam in repoConfig.extraParams) {
    if (!Object.prototype.hasOwnProperty.call(repoConfig.extraParams, repoParam)) {
      allParams[repoParam] = repoConfig.extraParams[repoParam];
    }
  }

  for (const defaultParam in config.extraParams) {
    if (!Object.prototype.hasOwnProperty.call(config.extraParams, defaultParam)) {
      allParams[defaultParam] = config.extraParams[defaultParam];
    }
  }
  return allParams;
};


module.exports.fetchParams = fetchParams;
module.exports.checkForRequiredParams = checkForRequiredParams;
module.exports.getExtraParams = getExtraParams;
