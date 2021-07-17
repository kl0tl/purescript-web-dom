"use strict";

var getEffProp = function (name) {
  return function (node) {
    return function () {
      return node[name];
    };
  };
};

export var children = getEffProp("children");

export var _firstElementChild = getEffProp("firstElementChild");

export var _lastElementChild = getEffProp("lastElementChild");

export var childElementCount = getEffProp("childElementCount");

export var _querySelector = function (selector) {
  return function (node) {
    return function () {
      return node.querySelector(selector);
    };
  };
};

export var querySelectorAll = function (selector) {
  return function (node) {
    return function () {
      return node.querySelectorAll(selector);
    };
  };
};
