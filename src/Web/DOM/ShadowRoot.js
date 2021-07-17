"use strict";

export var _mode = function (el) {
  return el.mode;
};

export var host = function (el) {
  return function() {
    return el.host;
  };
};
