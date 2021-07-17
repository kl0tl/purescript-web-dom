"use strict";

export var remove = function (node) {
  return function () {
    return node.remove();
  };
};
