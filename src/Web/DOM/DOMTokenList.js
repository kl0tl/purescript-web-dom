"use strict";

export var add = function(list) {
  return function(token) {
    return function() {
      return list.add(token);
    };
  };
};

export var remove = function(list) {
  return function(token) {
    return function() {
      return list.remove(token);
    };
  };
};

export var contains = function(list) {
  return function(token) {
    return function() {
      return list.contains(token);
    };
  };
};

export var toggle = function(list) {
  return function(token) {
    return function() {
      return list.toggle(token);
    };
  };
};

export var toggleForce = function(list) {
  return function(token) {
    return function(force) {
      return function() {
        return list.toggle(token, force);
      };
    };
  };
};

export var _item = function(list) {
  return function(index) {
    return function() {
      return list.item(index);
    };
  };
};
