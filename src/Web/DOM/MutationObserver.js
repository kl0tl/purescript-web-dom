"use strict";

export var mutationObserver = function (cb) {
  return function () {
    return new MutationObserver(function (mr, mo) {
      return cb(mr)(mo)();
    });
  };
};

export var _observe = function (node) {
  return function (config) {
    return function (mo) {
      return function () {
        return mo.observe(node, config);
      };
    };
  };
};

export var disconnect = function (mo) {
  return function () {
    return mo.disconnect();
  };
};

export var takeRecords = function (mo) {
  return function () {
    return mo.takeRecords();
  };
};
