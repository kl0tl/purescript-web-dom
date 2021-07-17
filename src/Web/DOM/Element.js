"use strict";

var getProp = function (name) {
  return function (doctype) {
    return doctype[name];
  };
};

export var _namespaceURI = getProp("namespaceURI");
export var _prefix = getProp("prefix");
export var localName = getProp("localName");
export var tagName = getProp("tagName");

export var id = function (node) {
  return function () {
    return node.id;
  };
};

export var setId = function (id) {
  return function (node) {
    return function () {
      node.id = id;
    };
  };
};

export var className = function (node) {
  return function () {
    return node.className;
  };
};

export var classList = function (element) {
  return function () {
    return element.classList;
  };
};

export var setClassName = function (className) {
  return function (node) {
    return function () {
      node.className = className;
    };
  };
};

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

export var setAttribute = function (name) {
  return function (value) {
    return function (element) {
      return function () {
        element.setAttribute(name, value);
      };
    };
  };
};

export var _getAttribute = function (name) {
  return function (element) {
    return function () {
      return element.getAttribute(name);
    };
  };
};

export var hasAttribute = function(name) {
  return function (element) {
    return function () {
      return element.hasAttribute(name);
    };
  };
};

export var removeAttribute = function (name) {
  return function (element) {
    return function () {
      element.removeAttribute(name);
    };
  };
};

export var matches = function (selector) {
  return function(element) {
    return function () {
      return element.matches(selector);
    };
  };
};

export var _closest = function (selector) {
  return function(element) {
    return function () {
      return element.closest(selector);
    };
  };
};

// - CSSOM ---------------------------------------------------------------------

export var scrollTop = function (node) {
  return function () {
    return node.scrollTop;
  };
};

export var setScrollTop = function (scrollTop) {
  return function (node) {
    return function () {
      node.scrollTop = scrollTop;
    };
  };
};

export var scrollLeft = function (node) {
  return function () {
    return node.scrollLeft;
  };
};

export var setScrollLeft = function (scrollLeft) {
  return function (node) {
    return function () {
      node.scrollLeft = scrollLeft;
    };
  };
};

export var scrollWidth = function (el) {
  return function () {
    return el.scrollWidth;
  };
};

export var scrollHeight = function (el) {
  return function () {
    return el.scrollHeight;
  };
};

export var clientTop = function (el) {
  return function () {
    return el.clientTop;
  };
};

export var clientLeft = function (el) {
  return function () {
    return el.clientLeft;
  };
};

export var clientWidth = function (el) {
  return function () {
    return el.clientWidth;
  };
};

export var clientHeight = function (el) {
  return function () {
    return el.clientHeight;
  };
};

export var _attachShadow = function(props) {
  return function (el) {
    return function() {
      return el.attachShadow(props);
    };
  };
};
