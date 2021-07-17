"use strict";

export var splitText = function (offset) {
  return function (t) {
    return function () {
      return t.splitText(offset);
    };
  };
};

export var wholeText = function (t) {
  return function () {
    return t.wholeText;
  };
};
