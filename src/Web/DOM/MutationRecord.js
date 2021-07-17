"use strict";

export var typeString = function (mr) {
  return function () {
    return mr.type;
  };
};

export var target = function (mr) {
  return function () {
    return mr.target;
  };
};

export var addedNodes = function (mr) {
  return function () {
    return mr.addedNodes;
  };
};

export var removedNodes = function (mr) {
  return function () {
    return mr.removedNodes;
  };
};

export var _nextSibling = function (mr) {
  return function () {
    return mr.nextSibling;
  };
};

export var _previousSibling = function (mr) {
  return function () {
    return mr.previousSibling;
  };
};

export var _attributeName = function (mr) {
  return function () {
    return mr.attributeName;
  };
};

export var _attributeNamespace = function (mr) {
  return function () {
    return mr.attributeNamespace;
  };
};

export var _oldValue = function (mr) {
  return function () {
    return mr.oldValue;
  };
};
