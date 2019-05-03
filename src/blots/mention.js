'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _quill = require('quill');

var _quill2 = _interopRequireDefault(_quill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Embed = _quill2.default.import('blots/embed');

var MentionBlot = function (_Embed) {
  _inherits(MentionBlot, _Embed);

  function MentionBlot() {
    _classCallCheck(this, MentionBlot);

    return _possibleConstructorReturn(this, (MentionBlot.__proto__ || Object.getPrototypeOf(MentionBlot)).apply(this, arguments));
  }

  _createClass(MentionBlot, null, [{
    key: 'create',
    value: function create(data) {
      var node = _get(MentionBlot.__proto__ || Object.getPrototypeOf(MentionBlot), 'create', this).call(this);
      var denotationChar = document.createElement('span');
      denotationChar.className = 'ql-mention-denotation-char';
      denotationChar.innerHTML = data.denotationChar;
      node.appendChild(denotationChar);
      node.innerHTML += data.value;
      return MentionBlot.setDataValues(node, data);
    }
  }, {
    key: 'setDataValues',
    value: function setDataValues(element, data) {
      var domNode = element;
      Object.keys(data).forEach(function (key) {
        domNode.dataset[key] = data[key];
      });
      return domNode;
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.dataset;
    }
  }]);

  return MentionBlot;
}(Embed);

MentionBlot.blotName = 'mention';
MentionBlot.tagName = 'span';
MentionBlot.className = 'mention';

_quill2.default.register(MentionBlot);