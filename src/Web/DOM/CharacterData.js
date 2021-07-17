"use strict";

export var data_ = function (t) {
  return function () {
    return t.data;
  };
};

export var length = function (t) {
  return function () {
    return t.length;
  };
};

export var substringData = function (offset) {
  return function (count) {
    return function (cd) {
      return function () {
        cd.substringData(offset, count);
      };
    };
  };
};

export var appendData = function (data) {
  return function (cd) {
    return function () {
      cd.appendData(data);
    };
  };
};

export var insertData = function (offset) {
  return function (data) {
    return function (cd) {
      return function () {
        cd.insertData(offset, data);
      };
    };
  };
};

export var deleteData = function (offset) {
  return function (count) {
    return function (cd) {
      return function () {
        cd.deleteData(offset, count);
      };
    };
  };
};

export var replaceData = function (offset) {
  return function (count) {
    return function (data) {
      return function (cd) {
        return function () {
          cd.replaceData(offset, count, data);
        };
      };
    };
  };
};
