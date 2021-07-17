"use strict";

export var length = function (list) {
  return function () {
    return list.length;
  };
};

export var toArray = function (list) {
  return function () {
    return [].slice.call(list);
  };
};

export var _item = function (index) {
  return function (list) {
    return function () {
      return list.item(index);
    };
  };
};
