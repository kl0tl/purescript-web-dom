"use strict";

var getEffProp = function (name) {
  return function (node) {
    return function () {
      return node[name];
    };
  };
};

export var nodeTypeIndex = function (node) {
  return node.nodeType;
};

export var nodeName = function (node) {
  return node.nodeName;
};

export var baseURI = getEffProp("baseURI");

export var _ownerDocument = getEffProp("ownerDocument");

export var _parentNode = getEffProp("parentNode");

export var _parentElement = getEffProp("parentElement");

export var hasChildNodes = function (node) {
  return function () {
    return node.hasChildNodes();
  };
};

export var childNodes = getEffProp("childNodes");

export var _firstChild = getEffProp("firstChild");

export var _lastChild = getEffProp("lastChild");

export var _previousSibling = getEffProp("previousSibling");

export var _nextSibling = getEffProp("nextSibling");

export var _nodeValue = getEffProp("nodeValue");

export var setNodeValue = function (value) {
  return function (node) {
    return function () {
      node.nodeValue = value;
    };
  };
};

export var textContent = getEffProp("textContent");

export var setTextContent = function (value) {
  return function (node) {
    return function () {
      node.textContent = value;
    };
  };
};

export var normalize = function (node) {
  return function () {
    node.normalize();
  };
};

export var clone = function (node) {
  return function () {
    return node.cloneNode(false);
  };
};

export var deepClone = function (node) {
  return function () {
    return node.cloneNode(true);
  };
};

export var isEqualNode = function (node1) {
  return function (node2) {
    return function () {
      return node1.isEqualNode(node2);
    };
  };
};

export var compareDocumentPositionBits = function (node1) {
  return function (node2) {
    return function () {
      return node1.compareDocumentPosition(node2);
    };
  };
};

export var contains = function (node1) {
  return function (node2) {
    return function () {
      return node1.contains(node2);
    };
  };
};

export var _lookupPrefix = function (prefix) {
  return function (node) {
    return function () {
      return node.lookupPrefix(prefix);
    };
  };
};

export var _lookupNamespaceURI = function (ns) {
  return function (node) {
    return function () {
      return node.lookupNamespaceURI(ns);
    };
  };
};

export var isDefaultNamespace = function (ns) {
  return function (node) {
    return function () {
      return node.isDefaultNamespace(ns);
    };
  };
};

export var insertBefore = function (node1) {
  return function (node2) {
    return function (parent) {
      return function () {
        parent.insertBefore(node1, node2);
      };
    };
  };
};

export var appendChild = function (node) {
  return function (parent) {
    return function () {
      parent.appendChild(node);
    };
  };
};

export var replaceChild = function (newChild) {
  return function (oldChild) {
    return function (parent) {
      return function () {
        parent.replaceChild(newChild, oldChild);
      };
    };
  };
};

export var removeChild = function (node) {
  return function (parent) {
    return function () {
      parent.removeChild(node);
    };
  };
};
