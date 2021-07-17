"use strict";

var getEffProp = function (name) {
  return function (doc) {
    return function () {
      return doc[name];
    };
  };
};

export var url = getEffProp("URL");
export var documentURI = getEffProp("documentURI");
export var origin = getEffProp("origin");
export var compatMode = getEffProp("compatMode");
export var characterSet = getEffProp("characterSet");
export var contentType = getEffProp("contentType");

export var _doctype = getEffProp("doctype");
export var _documentElement = getEffProp("documentElement");

export var getElementsByTagName = function (localName) {
  return function (doc) {
    return function () {
      return doc.getElementsByTagName(localName);
    };
  };
};

export var _getElementsByTagNameNS = function (ns) {
  return function (localName) {
    return function (doc) {
      return function () {
        return doc.getElementsByTagNameNS(ns, localName);
      };
    };
  };
};

export var getElementsByClassName = function (classNames) {
  return function (doc) {
    return function () {
      return doc.getElementsByClassName(classNames);
    };
  };
};

export var createElement = function (localName) {
  return function (doc) {
    return function () {
      return doc.createElement(localName);
    };
  };
};

export var _createElementNS = function (ns) {
  return function (qualifiedName) {
    return function (doc) {
      return function () {
        return doc.createElementNS(ns, qualifiedName);
      };
    };
  };
};

export var createDocumentFragment = function (doc) {
  return function () {
    return doc.createDocumentFragment();
  };
};

export var createTextNode = function (data) {
  return function (doc) {
    return function () {
      return doc.createTextNode(data);
    };
  };
};

export var createComment = function (data) {
  return function (doc) {
    return function () {
      return doc.createComment(data);
    };
  };
};

export var createProcessingInstruction = function (target) {
  return function (data) {
    return function (doc) {
      return function () {
        return doc.createProcessingInstruction(target, data);
      };
    };
  };
};

export var importNode = function (node) {
  return function (deep) {
    return function (doc) {
      return function () {
        return doc.importNode(node, deep);
      };
    };
  };
};

export var adoptNode = function (node) {
  return function (doc) {
    return function () {
      return doc.adoptNode(node);
    };
  };
};
