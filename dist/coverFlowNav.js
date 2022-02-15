"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _prevIcon = _interopRequireDefault(require("./prevIcon"));

var _nextIcon = _interopRequireDefault(require("./nextIcon"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

/* Props:
    - nextItemID (int?)
    - prevItemID (int?)
    - setActiveItem (func)
*/
var CoverFlowNav =
  /*#__PURE__*/
  (function (_React$Component) {
    _inherits(CoverFlowNav, _React$Component);

    function CoverFlowNav(props) {
      var _this;

      _classCallCheck(this, CoverFlowNav);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(CoverFlowNav).call(this, props)
      );
      _this._onNavNext = _this._onNavNext.bind(_assertThisInitialized(_this));
      _this._onNavPrev = _this._onNavPrev.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(CoverFlowNav, [
      {
        key: "_onNavNext",
        value: function _onNavNext() {
          this.props.setActiveItem(this.props.nextItemID);
        },
      },
      {
        key: "_onNavPrev",
        value: function _onNavPrev() {
          this.props.setActiveItem(this.props.prevItemID);
        },
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            nextItemID = _this$props.nextItemID,
            prevItemID = _this$props.prevItemID;
          /* --- Arrow nav --- */

          return null;
        },
      },
    ]);

    return CoverFlowNav;
  })(_react["default"].Component);

var _default = CoverFlowNav;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3ZlckZsb3dOYXYuanMiXSwibmFtZXMiOlsiQ292ZXJGbG93TmF2IiwicHJvcHMiLCJfb25OYXZOZXh0IiwiYmluZCIsIl9vbk5hdlByZXYiLCJzZXRBY3RpdmVJdGVtIiwibmV4dEl0ZW1JRCIsInByZXZJdGVtSUQiLCJmaWxsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtNQSxZOzs7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLHNGQUFNQSxLQUFOO0FBRUEsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQiwrQkFBbEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLCtCQUFsQjtBQUppQjtBQUtsQjs7OztpQ0FFWTtBQUNYLFdBQUtGLEtBQUwsQ0FBV0ksYUFBWCxDQUF5QixLQUFLSixLQUFMLENBQVdLLFVBQXBDO0FBQ0Q7OztpQ0FFWTtBQUNYLFdBQUtMLEtBQUwsQ0FBV0ksYUFBWCxDQUF5QixLQUFLSixLQUFMLENBQVdNLFVBQXBDO0FBQ0Q7Ozs2QkFFUTtBQUFBLHdCQUM0QixLQUFLTixLQURqQztBQUFBLFVBQ0NLLFVBREQsZUFDQ0EsVUFERDtBQUFBLFVBQ2FDLFVBRGIsZUFDYUEsVUFEYjtBQUdQOztBQUNBLGFBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBRUU7QUFDRSxRQUFBLFFBQVEsRUFBR0EsVUFBVSxLQUFLLElBRDVCO0FBRUUsUUFBQSxPQUFPLEVBQUUsS0FBS0g7QUFGaEIsU0FJRSxnQ0FBQyxvQkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFFLG9CQURiO0FBRUUsUUFBQSxLQUFLLEVBQUU7QUFBRUksVUFBQUEsSUFBSSxFQUFHRCxVQUFVLEtBQUssSUFBaEIsR0FBd0IsdUJBQXhCLEdBQWtEO0FBQTFEO0FBRlQsUUFKRixDQUZGLEVBWUU7QUFDRSxRQUFBLFFBQVEsRUFBR0QsVUFBVSxLQUFLLElBRDVCO0FBRUUsUUFBQSxPQUFPLEVBQUUsS0FBS0o7QUFGaEIsU0FJRSxnQ0FBQyxvQkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFFLG9CQURiO0FBRUUsUUFBQSxLQUFLLEVBQUU7QUFBRU0sVUFBQUEsSUFBSSxFQUFHRixVQUFVLEtBQUssSUFBaEIsR0FBd0IsdUJBQXhCLEdBQWtEO0FBQTFEO0FBRlQsUUFKRixDQVpGLENBREY7QUF3QkQ7Ozs7RUE1Q3dCRyxrQkFBTUMsUzs7ZUErQ2xCVixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJldkljb24gZnJvbSBcIi4vcHJldkljb25cIjtcclxuaW1wb3J0IE5leHRJY29uIGZyb20gXCIuL25leHRJY29uXCI7XHJcblxyXG4vKiBQcm9wczpcclxuICAgIC0gbmV4dEl0ZW1JRCAoaW50PylcclxuICAgIC0gcHJldkl0ZW1JRCAoaW50PylcclxuICAgIC0gc2V0QWN0aXZlSXRlbSAoZnVuYylcclxuKi9cclxuY2xhc3MgQ292ZXJGbG93TmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuX29uTmF2TmV4dCA9IHRoaXMuX29uTmF2TmV4dC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5fb25OYXZQcmV2ID0gdGhpcy5fb25OYXZQcmV2LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBfb25OYXZOZXh0KCkge1xyXG4gICAgdGhpcy5wcm9wcy5zZXRBY3RpdmVJdGVtKHRoaXMucHJvcHMubmV4dEl0ZW1JRCk7XHJcbiAgfVxyXG5cclxuICBfb25OYXZQcmV2KCkge1xyXG4gICAgdGhpcy5wcm9wcy5zZXRBY3RpdmVJdGVtKHRoaXMucHJvcHMucHJldkl0ZW1JRCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG5leHRJdGVtSUQsIHByZXZJdGVtSUQgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgLyogLS0tIEFycm93IG5hdiAtLS0gKi9cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2YtYnV0dG9uLW5hdlwiPlxyXG4gICAgICAgIHsvKiBQcmV2IHNsaWRlIGJ1dHRvbiAqL31cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBkaXNhYmxlZD17KHByZXZJdGVtSUQgPT09IG51bGwpfVxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5fb25OYXZQcmV2fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQcmV2SWNvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiY2YtbmF2LWJ1dHRvbi1pY29uXCJ9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6IChwcmV2SXRlbUlEID09PSBudWxsKSA/IFwicmdiYSgyNTUsMjU1LDI1NSwwLjMpXCIgOiBcIiNmZmZcIiB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7LyogTmV4dCBzbGlkZSBidXR0b24gKi99XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyhuZXh0SXRlbUlEID09PSBudWxsKX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uTmF2TmV4dH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TmV4dEljb25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImNmLW5hdi1idXR0b24taWNvblwifVxyXG4gICAgICAgICAgICBzdHlsZT17eyBmaWxsOiAobmV4dEl0ZW1JRCA9PT0gbnVsbCkgPyBcInJnYmEoMjU1LDI1NSwyNTUsMC4zKVwiIDogXCIjZmZmXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdmVyRmxvd05hdjtcclxuIl19
