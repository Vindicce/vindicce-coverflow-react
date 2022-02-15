"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _checkIcon = _interopRequireDefault(require("./checkIcon"));

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
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
    - slide (obj)
    - isLeft (bool)
    - numToActive (int)
    - isSelected (bool)
    - isUnselectable (bool)
    - onSlideClick (func)
    - selectItem (func)
*/
var CoverFlowSlide =
  /*#__PURE__*/
  (function (_React$Component) {
    _inherits(CoverFlowSlide, _React$Component);

    function CoverFlowSlide(props) {
      var _this;

      _classCallCheck(this, CoverFlowSlide);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(CoverFlowSlide).call(this, props)
      );
      _this._onSelect = _this._onSelect.bind(_assertThisInitialized(_this));
      _this._onSlideClick = _this._onSlideClick.bind(
        _assertThisInitialized(_this)
      );
      return _this;
    }

    _createClass(CoverFlowSlide, [
      {
        key: "_onSelect",
        value: function _onSelect(e) {
          e.stopPropagation(); //So that the click does not go through to the slide

          this.props.selectItem(this.props.slide.id);
        },
      },
      {
        key: "_onSlideClick",
        value: function _onSlideClick() {
          this.props.onSlideClick(this.props.slide.id);
        },
      },
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            slide = _this$props.slide,
            isLeft = _this$props.isLeft,
            numToActive = _this$props.numToActive,
            isSelected = _this$props.isSelected,
            isUnselectable = _this$props.isUnselectable; //Do not render slides that are offscreen

          if (numToActive > 4) {
            return _react["default"].createElement("div", {
              className: "coverflow-slide",
            });
          } //Set the isActive variable

          var isActive = numToActive === 0;
          /* --- Assign the correct classes based on the props --- */
          //Used to move left slides a bit more left, and right slides more right
          //And sets z-index

          var slideShift = {
            zIndex: 1000,
          }; //Base class that all slides have

          var slideClasses = ["cf-slide-inner"];

          if (isActive) {
            slideClasses.push("cf-active-slide");
          } else {
            //If not the active slide, then we need to apply a left/right transform
            if (isLeft) {
              slideClasses.push("cf-trans-left");
              slideShift = {
                transform: "translate3d(-130%,0,0)",
                zIndex: 1000 - numToActive,
              };
            } else {
              // If not left, then right
              slideClasses.push("cf-trans-right");
              slideShift = {
                transforms: "translate3d(30%,0,0)",
                zIndex: 1000 - numToActive,
              };
            }
          }
          /* --- Select button --- */
          //Need this otherwise it will be a regular pointer over the area where the button is invisible

          var selectButtonStyle = {};

          if (!isActive) {
            selectButtonStyle = _objectSpread({}, selectButtonStyle, {
              cursor: "pointer",
            });
          } //Set the select button's text and text classes

          var selectButtonTxt = slide.isDisabled
            ? "NOT AVAILABLE"
            : isSelected
            ? "SELECTED"
            : "CLICK TO SELECT";
          var selectButtonTxtClasses = ["cf-slide-htext"];

          if (isUnselectable) {
            if (isSelected) {
              //Is unselectable and selected so we change the text to deselect
              selectButtonTxt = "DESELECT";
            }
          } else {
            if (isSelected) {
              //Is not unselectable and is selected so we 'disable' the button
              selectButtonTxtClasses.push("cf-slide-htext-greyed");
            }
          } //Set the background image of the slide

          var bgImage;
          bgImage = ["url(", slide.image, ")"].join(""); //Check if the slide's heading is overflowing and needs to scroll

          var shouldScrollHeading = false;

          if (slide.name.length >= 30) {
            shouldScrollHeading = true;
          } // Render component

          return _react["default"].createElement(
            "div",
            {
              className: "coverflow-slide",
              style: slideShift,
            },
            _react["default"].createElement(
              "div",
              {
                className: slideClasses.join(" "),
                onClick: this._onSlideClick,
                style: {
                  backgroundImage: bgImage,
                },
              },
              _react["default"].createElement(
                "div",
                {
                  className: [
                    "cf-slide-heading",
                    !isActive ? "cf-hidden" : "",
                  ].join(" "),
                },
                _react["default"].createElement("p", {
                  className: [
                    "cf-slide-htext",
                    shouldScrollHeading ? "cf-slide-heading-scroll" : "",
                  ].join(" "),
                })
              )
            )
          );
        },
      },
    ]);

    return CoverFlowSlide;
  })(_react["default"].Component);

var _default = CoverFlowSlide;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3ZlckZsb3dTbGlkZS5qcyJdLCJuYW1lcyI6WyJDb3ZlckZsb3dTbGlkZSIsInByb3BzIiwiX29uU2VsZWN0IiwiYmluZCIsIl9vblNsaWRlQ2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwic2VsZWN0SXRlbSIsInNsaWRlIiwiaWQiLCJvblNsaWRlQ2xpY2siLCJpc0xlZnQiLCJudW1Ub0FjdGl2ZSIsImlzU2VsZWN0ZWQiLCJpc1Vuc2VsZWN0YWJsZSIsImlzQWN0aXZlIiwic2xpZGVTaGlmdCIsInpJbmRleCIsInNsaWRlQ2xhc3NlcyIsInB1c2giLCJ0cmFuc2Zvcm0iLCJzZWxlY3RCdXR0b25TdHlsZSIsImN1cnNvciIsInNlbGVjdEJ1dHRvblR4dCIsImlzRGlzYWJsZWQiLCJzZWxlY3RCdXR0b25UeHRDbGFzc2VzIiwiYmdJbWFnZSIsImltYWdlIiwiam9pbiIsInNob3VsZFNjcm9sbEhlYWRpbmciLCJuYW1lIiwibGVuZ3RoIiwiYmFja2dyb3VuZEltYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7SUFTTUEsYzs7Ozs7QUFDSiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQix3RkFBTUEsS0FBTjtBQUVBLFVBQUtDLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlQyxJQUFmLCtCQUFqQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsK0JBQXJCO0FBSmlCO0FBS2xCOzs7OzhCQUVTRSxDLEVBQUc7QUFDWEEsTUFBQUEsQ0FBQyxDQUFDQyxlQUFGLEdBRFcsQ0FDVzs7QUFDdEIsV0FBS0wsS0FBTCxDQUFXTSxVQUFYLENBQXNCLEtBQUtOLEtBQUwsQ0FBV08sS0FBWCxDQUFpQkMsRUFBdkM7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS1IsS0FBTCxDQUFX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QUFlLEVBQUVOO0FBRFo7QUFIVCxTQVNFO0FBQUssUUFBQSxTQUFTLEVBQUUsQ0FBQyxrQkFBRCxFQUFxQixDQUFDWCxRQUFELEdBQVksV0FBWixHQUEwQixFQUEvQyxFQUFtRGEsSUFBbkQsQ0FBd0QsR0FBeEQ7QUFBaEIsU0FDRTtBQUNFLFFBQUEsU0FBUyxFQUFFLENBQUMsZ0JBQUQsRUFBbUJDLG1CQUFtQixHQUFHLHlCQUFILEdBQStCLEVBQXJFLEVBQXlFRCxJQUF6RSxDQUE4RSxHQUE5RTtBQURiLFNBR0UsOENBQ0dwQixLQUFLLENBQUNzQixJQURULENBSEYsQ0FERixDQVRGLEVBcUJLbEIsV0FBVyxJQUFJLENBQWhCLEdBQXFCO0FBQ25CLFFBQUEsS0FBSyxFQUFFUyxpQkFEWTtBQUVuQixRQUFBLFNBQVMsRUFBRSxDQUNULHdCQURTLEVBRVQsQ0FBQ04sUUFBRCxHQUFZLFdBQVosR0FBNEJRLGVBQWUsS0FBSyxpQkFBckIsR0FBMEMscUJBQTFDLEdBQWtFLEVBRnBGLEVBR1RLLElBSFMsQ0FHSixHQUhJLENBRlE7QUFNbkIsUUFBQSxPQUFPLEVBQUUsS0FBSzFCLFNBTks7QUFPbkIsUUFBQSxRQUFRLEVBQUVNLEtBQUssQ0FBQ2dCLFVBQU4sSUFBcUIsQ0FBQ1Q7QUFQYixTQVNuQjtBQUFHLFFBQUEsU0FBUyxFQUFFVSxzQkFBc0IsQ0FBQ0csSUFBdkIsQ0FBNEIsR0FBNUI7QUFBZCxTQUNHTCxlQURILENBVG1CLENBQXJCLEdBWVksSUFqQ2hCLEVBc0NLVixVQUFELEdBQWUsZ0NBQUMscUJBQUQ7QUFDYixRQUFBLFNBQVMsRUFBRTtBQURFLFFBQWYsR0FFSyxJQXhDVCxDQUpGLENBREY7QUFrREQ7Ozs7RUFqSjBCb0Isa0JBQU1DLFM7O2VBb0pwQmxDLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGVja0ljb24gZnJvbSBcIi4vY2hlY2tJY29uXCI7XHJcblxyXG4vKiBQcm9wczpcclxuICAgIC0gc2xpZGUgKG9iailcclxuICAgIC0gaXNMZWZ0IChib29sKVxyXG4gICAgLSBudW1Ub0FjdGl2ZSAoaW50KVxyXG4gICAgLSBpc1NlbGVjdGVkIChib29sKVxyXG4gICAgLSBpc1Vuc2VsZWN0YWJsZSAoYm9vbClcclxuICAgIC0gb25TbGlkZUNsaWNrIChmdW5jKVxyXG4gICAgLSBzZWxlY3RJdGVtIChmdW5jKVxyXG4qL1xyXG5jbGFzcyBDb3ZlckZsb3dTbGlkZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLl9vblNlbGVjdCA9IHRoaXMuX29uU2VsZWN0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9vblNsaWRlQ2xpY2sgPSB0aGlzLl9vblNsaWRlQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIF9vblNlbGVjdChlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAgLy9TbyB0aGF0IHRoZSBjbGljayBkb2VzIG5vdCBnbyB0aHJvdWdoIHRvIHRoZSBzbGlkZVxyXG4gICAgdGhpcy5wcm9wcy5zZWxlY3RJdGVtKHRoaXMucHJvcHMuc2xpZGUuaWQpO1xyXG4gIH1cclxuXHJcbiAgX29uU2xpZGVDbGljaygpIHtcclxuICAgIHRoaXMucHJvcHMub25TbGlkZUNsaWNrKHRoaXMucHJvcHMuc2xpZGUuaWQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgc2xpZGUsIGlzTGVmdCwgbnVtVG9BY3RpdmUsIGlzU2VsZWN0ZWQsIGlzVW5zZWxlY3RhYmxlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIC8vRG8gbm90IHJlbmRlciBzbGlkZXMgdGhhdCBhcmUgb2Zmc2NyZWVuXHJcbiAgICBpZiAobnVtVG9BY3RpdmUgPiA0KSB7XHJcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJjb3ZlcmZsb3ctc2xpZGVcIn0+PC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIC8vU2V0IHRoZSBpc0FjdGl2ZSB2YXJpYWJsZVxyXG4gICAgbGV0IGlzQWN0aXZlID0gKG51bVRvQWN0aXZlID09PSAwKTtcclxuXHJcbiAgICAvKiAtLS0gQXNzaWduIHRoZSBjb3JyZWN0IGNsYXNzZXMgYmFzZWQgb24gdGhlIHByb3BzIC0tLSAqL1xyXG5cclxuICAgIC8vVXNlZCB0byBtb3ZlIGxlZnQgc2xpZGVzIGEgYml0IG1vcmUgbGVmdCwgYW5kIHJpZ2h0IHNsaWRlcyBtb3JlIHJpZ2h0XHJcbiAgICAvL0FuZCBzZXRzIHotaW5kZXhcclxuICAgIGxldCBzbGlkZVNoaWZ0ID0geyB6SW5kZXg6IDEwMDAgfTtcclxuICAgIC8vQmFzZSBjbGFzcyB0aGF0IGFsbCBzbGlkZXMgaGF2ZVxyXG4gICAgbGV0IHNsaWRlQ2xhc3NlcyA9IFtcImNmLXNsaWRlLWlubmVyXCJdO1xyXG5cclxuICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICBzbGlkZUNsYXNzZXMucHVzaChcImNmLWFjdGl2ZS1zbGlkZVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgeyAvL0lmIG5vdCB0aGUgYWN0aXZlIHNsaWRlLCB0aGVuIHdlIG5lZWQgdG8gYXBwbHkgYSBsZWZ0L3JpZ2h0IHRyYW5zZm9ybVxyXG4gICAgICBpZiAoaXNMZWZ0KSB7XHJcbiAgICAgICAgc2xpZGVDbGFzc2VzLnB1c2goXCJjZi10cmFucy1sZWZ0XCIpO1xyXG4gICAgICAgIHNsaWRlU2hpZnQgPSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlM2QoLTEzMCUsMCwwKVwiLFxyXG4gICAgICAgICAgekluZGV4OiAxMDAwIC0gbnVtVG9BY3RpdmVcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgeyAgLy9JZiBub3QgbGVmdCwgdGhlbiByaWdodFxyXG4gICAgICAgIHNsaWRlQ2xhc3Nlcy5wdXNoKFwiY2YtdHJhbnMtcmlnaHRcIik7XHJcbiAgICAgICAgc2xpZGVTaGlmdCA9IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgzMCUsMCwwKVwiLFxyXG4gICAgICAgICAgekluZGV4OiAxMDAwIC0gbnVtVG9BY3RpdmVcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogLS0tIFNlbGVjdCBidXR0b24gLS0tICovXHJcbiAgICAvL05lZWQgdGhpcyBvdGhlcndpc2UgaXQgd2lsbCBiZSBhIHJlZ3VsYXIgcG9pbnRlciBvdmVyIHRoZSBhcmVhIHdoZXJlIHRoZSBidXR0b24gaXMgaW52aXNpYmxlXHJcbiAgICBsZXQgc2VsZWN0QnV0dG9uU3R5bGUgPSB7fTtcclxuICAgIGlmICghaXNBY3RpdmUpIHtcclxuICAgICAgc2VsZWN0QnV0dG9uU3R5bGUgPSB7XHJcbiAgICAgICAgLi4uc2VsZWN0QnV0dG9uU3R5bGUsXHJcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vU2V0IHRoZSBzZWxlY3QgYnV0dG9uJ3MgdGV4dCBhbmQgdGV4dCBjbGFzc2VzXHJcbiAgICBsZXQgc2VsZWN0QnV0dG9uVHh0ID0gc2xpZGUuaXNEaXNhYmxlZCA/IFxyXG4gICAgICBcIk5PVCBBVkFJTEFCTEVcIiA6IFxyXG4gICAgICAoaXNTZWxlY3RlZCA/IFwiU0VMRUNURURcIiA6IFwiQ0xJQ0sgVE8gU0VMRUNUXCIpO1xyXG4gICAgbGV0IHNlbGVjdEJ1dHRvblR4dENsYXNzZXMgPSBbXCJjZi1zbGlkZS1odGV4dFwiXTtcclxuICAgIGlmIChpc1Vuc2VsZWN0YWJsZSkge1xyXG4gICAgICBpZiAoaXNTZWxlY3RlZCkge1xyXG4gICAgICAgIC8vSXMgdW5zZWxlY3RhYmxlIGFuZCBzZWxlY3RlZCBzbyB3ZSBjaGFuZ2UgdGhlIHRleHQgdG8gZGVzZWxlY3RcclxuICAgICAgICBzZWxlY3RCdXR0b25UeHQgPSBcIkRFU0VMRUNUXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpZiAoaXNTZWxlY3RlZCkge1xyXG4gICAgICAgIC8vSXMgbm90IHVuc2VsZWN0YWJsZSBhbmQgaXMgc2VsZWN0ZWQgc28gd2UgJ2Rpc2FibGUnIHRoZSBidXR0b25cclxuICAgICAgICBzZWxlY3RCdXR0b25UeHRDbGFzc2VzLnB1c2goXCJjZi1zbGlkZS1odGV4dC1ncmV5ZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1NldCB0aGUgYmFja2dyb3VuZCBpbWFnZSBvZiB0aGUgc2xpZGVcclxuICAgIGxldCBiZ0ltYWdlO1xyXG4gICAgYmdJbWFnZSA9IFtcInVybChcIiwgc2xpZGUuaW1hZ2UsIFwiKVwiXS5qb2luKFwiXCIpO1xyXG5cclxuICAgIC8vQ2hlY2sgaWYgdGhlIHNsaWRlJ3MgaGVhZGluZyBpcyBvdmVyZmxvd2luZyBhbmQgbmVlZHMgdG8gc2Nyb2xsXHJcbiAgICBsZXQgc2hvdWxkU2Nyb2xsSGVhZGluZyA9IGZhbHNlO1xyXG4gICAgaWYgKHNsaWRlLm5hbWUubGVuZ3RoID49IDMwKSB7XHJcbiAgICAgIHNob3VsZFNjcm9sbEhlYWRpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbmRlciBjb21wb25lbnRcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e1wiY292ZXJmbG93LXNsaWRlXCJ9XHJcbiAgICAgICAgc3R5bGU9e3NsaWRlU2hpZnR9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3NsaWRlQ2xhc3Nlcy5qb2luKFwiIFwiKX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uU2xpZGVDbGlja31cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYmdJbWFnZSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIC0tLSBTbGlkZSBDb250ZW50IC0tLSAqL31cclxuICAgICAgICAgIHsvKiBTbGlkZSBoZWFkaW5nICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tcImNmLXNsaWRlLWhlYWRpbmdcIiwgIWlzQWN0aXZlID8gXCJjZi1oaWRkZW5cIiA6IFwiXCJdLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1tcImNmLXNsaWRlLWh0ZXh0XCIsIHNob3VsZFNjcm9sbEhlYWRpbmcgPyBcImNmLXNsaWRlLWhlYWRpbmctc2Nyb2xsXCIgOiBcIlwiXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge3NsaWRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogU2xpZGUgc2VsZWN0IGJ1dHRvbiAoZG8gbm90IHJlbmRlciBpdCBpZiBpdCBpcyBub3QgYWN0aXZlIG9yIGEgbmVpZ2hib3VyIHRvIGFjdGl2ZSkgKi99XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIChudW1Ub0FjdGl2ZSA8PSAxKSA/IDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17c2VsZWN0QnV0dG9uU3R5bGV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXHJcbiAgICAgICAgICAgICAgICBcImNmLXNsaWRlLXNlbGVjdC1idXR0b25cIixcclxuICAgICAgICAgICAgICAgICFpc0FjdGl2ZSA/IFwiY2YtaGlkZGVuXCIgOiAoKHNlbGVjdEJ1dHRvblR4dCA9PT0gXCJDTElDSyBUTyBTRUxFQ1RcIikgPyBcInNlbGVjdC1idXR0b24tcHVsc2VcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vblNlbGVjdH1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17c2xpZGUuaXNEaXNhYmxlZCB8fCAoIWlzQWN0aXZlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c2VsZWN0QnV0dG9uVHh0Q2xhc3Nlcy5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0QnV0dG9uVHh0fVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9idXR0b24+IDogbnVsbFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHsvKiBTZWxlY3RlZCBUaWNrIChkbyBub3QgcmVuZGVyIGlmIG5vdCBzZWxlY3RlZCkgKi99XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIChpc1NlbGVjdGVkKSA/IDxDaGVja0ljb25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiY2Ytc2VsLWNoZWNrXCJ9XHJcbiAgICAgICAgICAgIC8+IDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3ZlckZsb3dTbGlkZTtcclxuIl19
