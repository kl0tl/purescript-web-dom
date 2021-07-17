"use strict";

export var _getElementById = function (id) {
  return function (node) {
    return function () {
      return node.getElementById(id);
    };
  };
};
