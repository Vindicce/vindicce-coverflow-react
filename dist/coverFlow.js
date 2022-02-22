"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSwipeable = require("react-swipeable");

var _coverFlowSlide = _interopRequireDefault(require("./coverFlowSlide"));

var _coverFlowNav = _interopRequireDefault(require("./coverFlowNav"));

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
    - slides (array)
    - selectedSlides (array)
    - selectedSlide (int - id)
    - onSlideSelect (func)
*/
var CoverFlow =
  /*#__PURE__*/
  (function (_React$Component) {
    _inherits(CoverFlow, _React$Component);

    function CoverFlow(props) {
      var _this;

      _classCallCheck(this, CoverFlow);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(CoverFlow).call(this, props)
      );
      var firstItemID = props.initial;

      _this.state = {
        deltaX: 0,
        //Local state to control swiping left/right between slides
        activeItemID: firstItemID,
      }; //Get the screen width

      var screenWidth = 700; //Default for if screen object is not available

      if (window.screen) {
        screenWidth = window.screen.width;
      } //Set the swipe range

      _this.swipeRange = screenWidth / 10;
      _this.swipeRange = Math.min(_this.swipeRange, 100); //Set the max

      _this.swipeRange = Math.max(_this.swipeRange, 60); //Set the min

      _this._onSwitching = _this._onSwitching.bind(
        _assertThisInitialized(_this)
      );
      _this._onSwiped = _this._onSwiped.bind(_assertThisInitialized(_this));
      _this._onClick = _this._onClick.bind(_assertThisInitialized(_this));
      _this._setActiveItem = _this._setActiveItem.bind(
        _assertThisInitialized(_this)
      );
      return _this;
    } //Called while swiping the coverflow

    _createClass(CoverFlow, [
      {
        key: "_onSwitching",
        value: function _onSwitching(deltaX, nextItemID, prevItemID) {
          if (deltaX - this.state.deltaX > this.swipeRange) {
            if (nextItemID !== null) {
              this.setState({
                deltaX: deltaX,
                activeItemID: nextItemID,
              });
              return;
            }

            this.setState({
              deltaX: deltaX,
            });
            return;
          }

          if (deltaX - this.state.deltaX < -1 * this.swipeRange) {
            if (prevItemID !== null) {
              this.setState({
                deltaX: deltaX,
                activeItemID: prevItemID,
              });
              return;
            }

            this.setState({
              deltaX: deltaX,
            });
            return;
          }
        }, //Called when the swipe is complete
      },
      {
        key: "_onSwiped",
        value: function _onSwiped() {
          var _this2 = this;
          this.props.changeIndex(this.state.activeItemID);
          //Settimeout so that onClick will run before onSwiped
          //This helps prevent a click happening when a swipe was intended
          setTimeout(function () {
            _this2.setState({
              deltaX: 0,
            });
          }, 1);
        }, //Called when a slide is clicked
      },
      {
        key: "_onClick",
        value: function _onClick(itemID) {
          //This check is so that we don't trigger a click at the end of a swipe
          if (this.state.deltaX === 0) {
            if (itemID === this.props.activeItemID) {
              this.props.onSlideSelect(itemID);
            } else {
              this.setState({
                activeItemID: itemID,
              });
            }
          }
        },
      },
      {
        key: "_setActiveItem",
        value: function _setActiveItem(itemID) {
          alert(this.state.activeItemID);
          this.setState({
            activeItemID: itemID,
          });
        },
      },
      {
        key: "render",
        value: function render() {
          var _this3 = this;

          var _this$props = this.props,
            slides = _this$props.slides,
            _this$props$selectedS = _this$props.selectedSlide,
            selectedSlide =
              _this$props$selectedS === void 0 ? null : _this$props$selectedS,
            _this$props$selectedS2 = _this$props.selectedSlides,
            selectedSlides =
              _this$props$selectedS2 === void 0 ? [] : _this$props$selectedS2,
            onSlideSelect = _this$props.onSlideSelect;
          var activeItemID = this.state.activeItemID; //If there are no slides, return an empty component

          if (slides.length === 0) {
            return null;
          } //Figure out how many slides are being rendered

          var lastSlideIndex = slides.length - 1; //Calculate the index of the active item

          var activeItemIndex;

          for (var i = 0; i <= lastSlideIndex; i++) {
            if (slides[i].id === activeItemID) {
              activeItemIndex = i;
              break;
            }
          } //Set vars for the next and prev item IDs

          var nextItemID = null;
          var prevItemID = null;

          if (activeItemIndex > 0) {
            prevItemID = slides[activeItemIndex - 1].id;
          }

          if (activeItemIndex < lastSlideIndex) {
            nextItemID = slides[activeItemIndex + 1].id;
          }

          var isMultiSelectable = selectedSlides.length > 0;
          return _react["default"].createElement(
            "div",
            {
              className: "coverflow-cont",
            },
            _react["default"].createElement(
              _reactSwipeable.Swipeable,
              {
                className: "coverflow-swipe",
                trackMouse: true,
                onSwiping: function onSwiping(_ref) {
                  var deltaX = _ref.deltaX;
                  return _this3._onSwitching(deltaX, nextItemID, prevItemID);
                },
                onSwiped: this._onSwiped,
                delta: this.swipeRange,
                style: {
                  transform: "translate3d(-" + activeItemIndex * 100 + "%,0,0)",
                },
              },
              slides.map(function (curSlide, index) {
                var isLeft = index < activeItemIndex;
                var isSelected;

                return _react["default"].createElement(
                  _coverFlowSlide["default"],
                  {
                    key: curSlide.id,
                    slide: curSlide,
                    isLeft: isLeft,
                    numToActive: Math.abs(index - activeItemIndex),
                    isSelected: isSelected,
                    isUnselectable: isMultiSelectable,
                    onSlideClick: _this3._onClick,
                    selectItem: onSlideSelect,
                  }
                );
              })
            )
          );
        },
      },
    ]);

    return CoverFlow;
  })(_react["default"].Component);

var _default = CoverFlow;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3ZlckZsb3cuanMiXSwibmFtZXMiOlsiQ292ZXJGbG93IiwicHJvcHMiLCJmaXJzdEl0ZW1JRCIsInNsaWRlcyIsImlkIiwic3RhdGUiLCJkZWx0YVgiLCJhY3RpdmVJdGVtSUQiLCJzY3JlZW5XaWR0aCIsIndpbmRvdyIsInNjcmVlbiIsIndpZHRoIiwic3dpcGVSYW5nZSIsIk1hdGgiLCJtaW4iLCJtYXgiLCJfb25Td2l0Y2hpbmciLCJiaW5kIiwiX29uU3dpcGVkIiwiX29uQ2xpY2siLCJfc2V0QWN0aXZlSXRlbSIsIm5leHRJdGVtSUQiLCJwcmV2SXRlbUlEIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwiaXRlbUlEIiwib25TbGlkZVNlbGVjdCIsInNlbGVjdGVkU2xpZGUiLCJzZWxlY3RlZFNsaWRlcyIsImxlbmd0aCIsImxhc3RTbGlkZUluZGV4IiwiYWN0aXZlSXRlbUluZGV4IiwiaSIsImlzTXVsdGlTZWxlY3RhYmxlIiwidHJhbnNmb3JtIiwibWFwIiwiY3VyU2xpZGUiLCJpbmRleCIsImlzTGVmdCIsImlzU2VsZWN0ZWQiLCJpbmRleE9mIiwiYWJzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNTUEsUzs7Ozs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixtRkFBTUEsS0FBTjtBQUNBLFFBQU1DLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWEsQ0FBYixJQUFrQkYsS0FBSyxDQUFDRSxNQUFOLENBQWEsQ0FBYixFQUFnQkMsRUFBbEMsR0FBdUMsSUFBM0Q7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsTUFBTSxFQUFFLENBREc7QUFDQztBQUNaQyxNQUFBQSxZQUFZLEVBQUVMO0FBRkgsS0FBYixDQUhpQixDQVFqQjs7QUFDQSxRQUFJTSxXQUFXLEdBQUcsR0FBbEIsQ0FUaUIsQ0FTTTs7QUFDdkIsUUFBSUMsTUFBTSxDQUFDQyxNQUFYLEVBQW1CO0FBQ2pCRixNQUFBQSxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUE1QjtBQUNELEtBWmdCLENBY2pCOzs7QUFDQSxVQUFLQyxVQUFMLEdBQWtCSixXQUFXLEdBQUcsRUFBaEM7QUFDQSxVQUFLSSxVQUFMLEdBQWtCQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxNQUFLRixVQUFkLEVBQTBCLEdBQTFCLENBQWxCLENBaEJpQixDQWdCaUM7O0FBQ2xELFVBQUtBLFVBQUwsR0FBa0JDLElBQUksQ0FBQ0UsR0FBTCxDQUFTLE1BQUtILFVBQWQsRUFBMEIsRUFBMUIsQ0FBbEIsQ0FqQmlCLENBaUJnQzs7QUFHakQsVUFBS0ksWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQiwrQkFBcEI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUQsSUFBZiwrQkFBakI7QUFDQSxVQUFLRSxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0YsSUFBZCwrQkFBaEI7QUFDQSxVQUFLRyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JILElBQXBCLCtCQUF0QjtBQXZCaUI7QUF3QmxCLEcsQ0FFRDs7Ozs7aUNBQ2FYLE0sRUFBUWUsVSxFQUFZQyxVLEVBQVk7QUFDM0MsVUFBSWhCLE1BQU0sR0FBRyxLQUFLRCxLQUFMLENBQVdDLE1BQXBCLEdBQTZCLEtBQUtNLFVBQXRDLEVBQWtEO0FBQ2hELFlBQUlTLFVBQVUsS0FBSyxJQUFuQixFQUF5QjtBQUN2QixlQUFLRSxRQUFMLENBQWM7QUFDWmpCLFlBQUFBLE1BQU0sRUFBRUEsTUFESTtBQUVaQyxZQUFBQSxZQUFZLEVBQUVjO0FBRkYsV0FBZDtBQUlBO0FBQ0Q7O0FBQ0QsYUFBS0UsUUFBTCxDQUFjO0FBQ1pqQixVQUFBQSxNQUFNLEVBQUVBO0FBREksU0FBZDtBQUdBO0FBQ0Q7O0FBQ0QsVUFBSUEsTUFBTSxHQUFHLEtBQUtELEtBQUwsQ0FBV0MsTUFBcEIsR0FBOEIsQ0FBQyxDQUFELEdBQUssS0FBS00sVUFBNUMsRUFBeUQ7QUFDdkQsWUFBSVUsVUFBVSxLQUFLLElBQW5CLEVBQXlCO0FBQ3ZCLGVBQUtDLFFBQUwsQ0FBYztBQUNaakIsWUFBQUEsTUFBTSxFQUFFQSxNQURJO0FBRVpDLFlBQUFBLFlBQVksRUFBRWU7QUFGRixXQUFkO0FBSUE7QUFDRDs7QUFDRCxhQUFLQyxRQUFMLENBQWM7QUFDWmpCLFVBQUFBLE1BQU0sRUFBRUE7QUFESSxTQUFkO0FBR0E7QUFDRDtBQUNGLEssQ0FFRDs7OztnQ0FDWTtBQUFBOztBQUNWO0FBQ0E7QUFDQWtCLE1BQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2YsUUFBQSxNQUFJLENBQUNELFFBQUwsQ0FBYztBQUNaakIsVUFBQUEsTUFBTSxFQUFFO0FBREksU0FBZDtBQUdELE9BSlMsRUFJUCxDQUpPLENBQVY7QUFLRCxLLENBRUQ7Ozs7NkJBQ1NtQixNLEVBQVE7QUFDZjtBQUNBLFVBQUksS0FBS3BCLEtBQUwsQ0FBV0MsTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUMzQixZQUFJbUIsTUFBTSxLQUFLLEtBQUt4QixLQUFMLENBQVdNLFlBQTFCLEVBQXdDO0FBQ3RDLGVBQUtOLEtBQUwsQ0FBV3lCLGFBQVgsQ0FBeUJELE1BQXpCO0FBQ0QsU0FGRCxNQUdLO0FBQ0gsZUFBS0YsUUFBTCxDQUFjO0FBQ1poQixZQUFBQSxZQUFZLEVBQUVrQjtBQURGLFdBQWQ7QUFHRDtBQUNGO0FBQ0Y7OzttQ0FFY0EsTSxFQUFRO0FBQ3JCLFdBQUtGLFFBQUwsQ0FBYztBQUNaaEIsUUFBQUEsWUFBWSxFQUFFa0I7QUFERixPQUFkO0FBR0Q7Ozs2QkFFUTtBQUFBOztBQUFBLHdCQUNrRSxLQUFLeEIsS0FEdkU7QUFBQSxVQUNDRSxNQURELGVBQ0NBLE1BREQ7QUFBQSw4Q0FDU3dCLGFBRFQ7QUFBQSxVQUNTQSxhQURULHNDQUN1QixJQUR2QjtBQUFBLCtDQUM2QkMsY0FEN0I7QUFBQSxVQUM2QkEsY0FEN0IsdUNBQzRDLEVBRDVDO0FBQUEsVUFDZ0RGLGFBRGhELGVBQ2dEQSxhQURoRDtBQUFBLFVBRUNuQixZQUZELEdBRWtCLEtBQUtGLEtBRnZCLENBRUNFLFlBRkQsRUFJUDs7QUFDQSxVQUFJSixNQUFNLENBQUMwQixNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLGVBQU8sSUFBUDtBQUNELE9BUE0sQ0FTUDs7O0FBQ0EsVUFBTUMsY0FBYyxHQUFHM0IsTUFBTSxDQUFDMEIsTUFBUCxHQUFnQixDQUF2QyxDQVZPLENBWVA7O0FBQ0EsVUFBSUUsZUFBSjs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUlGLGNBQXJCLEVBQXFDRSxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFlBQUk3QixNQUFNLENBQUM2QixDQUFELENBQU4sQ0FBVTVCLEVBQVYsS0FBaUJHLFlBQXJCLEVBQW1DO0FBQ2pDd0IsVUFBQUEsZUFBZSxHQUFHQyxDQUFsQjtBQUNBO0FBQ0Q7QUFDRixPQW5CTSxDQXFCUDs7O0FBQ0EsVUFBSVgsVUFBVSxHQUFHLElBQWpCO0FBQ0EsVUFBSUMsVUFBVSxHQUFHLElBQWpCOztBQUNBLFVBQUlTLGVBQWUsR0FBRyxDQUF0QixFQUF5QjtBQUN2QlQsUUFBQUEsVUFBVSxHQUFHbkIsTUFBTSxDQUFDNEIsZUFBZSxHQUFDLENBQWpCLENBQU4sQ0FBMEIzQixFQUF2QztBQUNEOztBQUNELFVBQUkyQixlQUFlLEdBQUdELGNBQXRCLEVBQXNDO0FBQ3BDVCxRQUFBQSxVQUFVLEdBQUdsQixNQUFNLENBQUM0QixlQUFlLEdBQUMsQ0FBakIsQ0FBTixDQUEwQjNCLEVBQXZDO0FBQ0Q7O0FBRUQsVUFBTTZCLGlCQUFpQixHQUFHTCxjQUFjLENBQUNDLE1BQWYsR0FBd0IsQ0FBbEQ7QUFFQSxhQUNFO0FBQUssUUFBQSxTQUFTLEVBQUU7QUFBaEIsU0FHRSxnQ0FBQyx5QkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFFLGlCQURiO0FBRUUsUUFBQSxVQUFVLEVBQUUsSUFGZDtBQUdFLFFBQUEsU0FBUyxFQUFFO0FBQUEsY0FBR3ZCLE1BQUgsUUFBR0EsTUFBSDtBQUFBLGlCQUFnQixNQUFJLENBQUNVLFlBQUwsQ0FBa0JWLE1BQWxCLEVBQTBCZSxVQUExQixFQUFzQ0MsVUFBdEMsQ0FBaEI7QUFBQSxTQUhiO0FBSUUsUUFBQSxRQUFRLEVBQUUsS0FBS0osU0FKakI7QUFLRSxRQUFBLEtBQUssRUFBRSxLQUFLTixVQUxkO0FBTUUsUUFBQSxLQUFLLEVBQUU7QUFBRXNCLFVBQUFBLFNBQVMsRUFBQyxrQkFBbUJILGVBQWUsR0FBRyxHQUFyQyxHQUE0QztBQUF4RDtBQU5ULFNBUUc1QixNQUFNLENBQUNnQyxHQUFQLENBQVcsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQXFCO0FBQy9CLFlBQUlDLE1BQU0sR0FBSUQsS0FBSyxHQUFHTixlQUF0QjtBQUNBLFlBQUlRLFVBQUo7O0FBQ0EsWUFBSU4saUJBQUosRUFBdUI7QUFDckJNLFVBQUFBLFVBQVUsR0FBSVgsY0FBYyxDQUFDWSxPQUFmLENBQXVCSixRQUFRLENBQUNoQyxFQUFoQyxLQUF1QyxDQUFyRDtBQUNELFNBRkQsTUFHSztBQUNIbUMsVUFBQUEsVUFBVSxHQUFJWixhQUFhLEtBQUtTLFFBQVEsQ0FBQ2hDLEVBQXpDO0FBQ0Q7O0FBRUQsZUFDRSxnQ0FBQywwQkFBRDtBQUNFLFVBQUEsR0FBRyxFQUFFZ0MsUUFBUSxDQUFDaEMsRUFEaEI7QUFFRSxVQUFBLEtBQUssRUFBRWdDLFFBRlQ7QUFHRSxVQUFBLE1BQU0sRUFBRUUsTUFIVjtBQUlFLFVBQUEsV0FBVyxFQUFFekIsSUFBSSxDQUFDNEIsR0FBTCxDQUFTSixLQUFLLEdBQUNOLGVBQWYsQ0FKZjtBQUtFLFVBQUEsVUFBVSxFQUFFUSxVQUxkO0FBTUUsVUFBQSxjQUFjLEVBQUVOLGlCQU5sQjtBQU9FLFVBQUEsWUFBWSxFQUFFLE1BQUksQ0FBQ2QsUUFQckI7QUFRRSxVQUFBLFVBQVUsRUFBRU87QUFSZCxVQURGO0FBWUQsT0F0QkEsQ0FSSCxDQUhGLEVBcUNFLGdDQUFDLHdCQUFEO0FBQ0UsUUFBQSxVQUFVLEVBQUVMLFVBRGQ7QUFFRSxRQUFBLFVBQVUsRUFBRUMsVUFGZDtBQUdFLFFBQUEsYUFBYSxFQUFFLEtBQUtGO0FBSHRCLFFBckNGLENBREY7QUE2Q0Q7Ozs7RUF2S3FCc0Isa0JBQU1DLFM7O2VBMEtmM0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vY292ZXJGbG93LmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN3aXBlYWJsZSB9IGZyb20gXCJyZWFjdC1zd2lwZWFibGVcIjtcclxuaW1wb3J0IENvdmVyRmxvd1NsaWRlIGZyb20gXCIuL2NvdmVyRmxvd1NsaWRlXCI7XHJcbmltcG9ydCBDb3ZlckZsb3dOYXYgZnJvbSBcIi4vY292ZXJGbG93TmF2XCI7XHJcblxyXG4vKiBQcm9wczpcclxuICAgIC0gc2xpZGVzIChhcnJheSlcclxuICAgIC0gc2VsZWN0ZWRTbGlkZXMgKGFycmF5KVxyXG4gICAgLSBzZWxlY3RlZFNsaWRlIChpbnQgLSBpZClcclxuICAgIC0gb25TbGlkZVNlbGVjdCAoZnVuYylcclxuKi9cclxuY2xhc3MgQ292ZXJGbG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc3QgZmlyc3RJdGVtSUQgPSBwcm9wcy5zbGlkZXNbMF0gPyBwcm9wcy5zbGlkZXNbMF0uaWQgOiBudWxsO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGVsdGFYOiAwLCAgLy9Mb2NhbCBzdGF0ZSB0byBjb250cm9sIHN3aXBpbmcgbGVmdC9yaWdodCBiZXR3ZWVuIHNsaWRlc1xyXG4gICAgICBhY3RpdmVJdGVtSUQ6IGZpcnN0SXRlbUlEXHJcbiAgICB9O1xyXG5cclxuICAgIC8vR2V0IHRoZSBzY3JlZW4gd2lkdGhcclxuICAgIGxldCBzY3JlZW5XaWR0aCA9IDcwMDsgLy9EZWZhdWx0IGZvciBpZiBzY3JlZW4gb2JqZWN0IGlzIG5vdCBhdmFpbGFibGVcclxuICAgIGlmICh3aW5kb3cuc2NyZWVuKSB7XHJcbiAgICAgIHNjcmVlbldpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvL1NldCB0aGUgc3dpcGUgcmFuZ2VcclxuICAgIHRoaXMuc3dpcGVSYW5nZSA9IHNjcmVlbldpZHRoIC8gMTA7XHJcbiAgICB0aGlzLnN3aXBlUmFuZ2UgPSBNYXRoLm1pbih0aGlzLnN3aXBlUmFuZ2UsIDEwMCk7IC8vU2V0IHRoZSBtYXhcclxuICAgIHRoaXMuc3dpcGVSYW5nZSA9IE1hdGgubWF4KHRoaXMuc3dpcGVSYW5nZSwgNjApOyAvL1NldCB0aGUgbWluXHJcblxyXG5cclxuICAgIHRoaXMuX29uU3dpdGNoaW5nID0gdGhpcy5fb25Td2l0Y2hpbmcuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX29uU3dpcGVkID0gdGhpcy5fb25Td2lwZWQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX29uQ2xpY2sgPSB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9zZXRBY3RpdmVJdGVtID0gdGhpcy5fc2V0QWN0aXZlSXRlbS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy9DYWxsZWQgd2hpbGUgc3dpcGluZyB0aGUgY292ZXJmbG93XHJcbiAgX29uU3dpdGNoaW5nKGRlbHRhWCwgbmV4dEl0ZW1JRCwgcHJldkl0ZW1JRCkge1xyXG4gICAgaWYgKGRlbHRhWCAtIHRoaXMuc3RhdGUuZGVsdGFYID4gdGhpcy5zd2lwZVJhbmdlKSB7XHJcbiAgICAgIGlmIChuZXh0SXRlbUlEICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBkZWx0YVg6IGRlbHRhWCxcclxuICAgICAgICAgIGFjdGl2ZUl0ZW1JRDogbmV4dEl0ZW1JRCxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGVsdGFYOiBkZWx0YVhcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChkZWx0YVggLSB0aGlzLnN0YXRlLmRlbHRhWCA8ICgtMSAqIHRoaXMuc3dpcGVSYW5nZSkpIHtcclxuICAgICAgaWYgKHByZXZJdGVtSUQgIT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGRlbHRhWDogZGVsdGFYLFxyXG4gICAgICAgICAgYWN0aXZlSXRlbUlEOiBwcmV2SXRlbUlELFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkZWx0YVg6IGRlbHRhWFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9DYWxsZWQgd2hlbiB0aGUgc3dpcGUgaXMgY29tcGxldGVcclxuICBfb25Td2lwZWQoKSB7XHJcbiAgICAvL1NldHRpbWVvdXQgc28gdGhhdCBvbkNsaWNrIHdpbGwgcnVuIGJlZm9yZSBvblN3aXBlZFxyXG4gICAgLy9UaGlzIGhlbHBzIHByZXZlbnQgYSBjbGljayBoYXBwZW5pbmcgd2hlbiBhIHN3aXBlIHdhcyBpbnRlbmRlZFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRlbHRhWDogMFxyXG4gICAgICB9KTtcclxuICAgIH0sIDEpO1xyXG4gIH1cclxuXHJcbiAgLy9DYWxsZWQgd2hlbiBhIHNsaWRlIGlzIGNsaWNrZWRcclxuICBfb25DbGljayhpdGVtSUQpIHtcclxuICAgIC8vVGhpcyBjaGVjayBpcyBzbyB0aGF0IHdlIGRvbid0IHRyaWdnZXIgYSBjbGljayBhdCB0aGUgZW5kIG9mIGEgc3dpcGVcclxuICAgIGlmICh0aGlzLnN0YXRlLmRlbHRhWCA9PT0gMCkge1xyXG4gICAgICBpZiAoaXRlbUlEID09PSB0aGlzLnByb3BzLmFjdGl2ZUl0ZW1JRCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25TbGlkZVNlbGVjdChpdGVtSUQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgYWN0aXZlSXRlbUlEOiBpdGVtSUQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZXRBY3RpdmVJdGVtKGl0ZW1JRCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGFjdGl2ZUl0ZW1JRDogaXRlbUlELFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNsaWRlcywgc2VsZWN0ZWRTbGlkZT1udWxsLCBzZWxlY3RlZFNsaWRlcz1bXSwgb25TbGlkZVNlbGVjdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgYWN0aXZlSXRlbUlEIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIC8vSWYgdGhlcmUgYXJlIG5vIHNsaWRlcywgcmV0dXJuIGFuIGVtcHR5IGNvbXBvbmVudFxyXG4gICAgaWYgKHNsaWRlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy9GaWd1cmUgb3V0IGhvdyBtYW55IHNsaWRlcyBhcmUgYmVpbmcgcmVuZGVyZWRcclxuICAgIGNvbnN0IGxhc3RTbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgLy9DYWxjdWxhdGUgdGhlIGluZGV4IG9mIHRoZSBhY3RpdmUgaXRlbVxyXG4gICAgbGV0IGFjdGl2ZUl0ZW1JbmRleDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxhc3RTbGlkZUluZGV4OyBpKyspIHtcclxuICAgICAgaWYgKHNsaWRlc1tpXS5pZCA9PT0gYWN0aXZlSXRlbUlEKSB7XHJcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vU2V0IHZhcnMgZm9yIHRoZSBuZXh0IGFuZCBwcmV2IGl0ZW0gSURzXHJcbiAgICBsZXQgbmV4dEl0ZW1JRCA9IG51bGw7XHJcbiAgICBsZXQgcHJldkl0ZW1JRCA9IG51bGw7XHJcbiAgICBpZiAoYWN0aXZlSXRlbUluZGV4ID4gMCkge1xyXG4gICAgICBwcmV2SXRlbUlEID0gc2xpZGVzW2FjdGl2ZUl0ZW1JbmRleC0xXS5pZDtcclxuICAgIH1cclxuICAgIGlmIChhY3RpdmVJdGVtSW5kZXggPCBsYXN0U2xpZGVJbmRleCkge1xyXG4gICAgICBuZXh0SXRlbUlEID0gc2xpZGVzW2FjdGl2ZUl0ZW1JbmRleCsxXS5pZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpc011bHRpU2VsZWN0YWJsZSA9IHNlbGVjdGVkU2xpZGVzLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY292ZXJmbG93LWNvbnRcIn0+XHJcblxyXG4gICAgICAgIHsvKiAtLS0gU2xpZGVzIC0tLSAqL31cclxuICAgICAgICA8U3dpcGVhYmxlXHJcbiAgICAgICAgICBjbGFzc05hbWU9e1wiY292ZXJmbG93LXN3aXBlXCJ9XHJcbiAgICAgICAgICB0cmFja01vdXNlPXt0cnVlfVxyXG4gICAgICAgICAgb25Td2lwaW5nPXsoeyBkZWx0YVggfSkgPT4gdGhpcy5fb25Td2l0Y2hpbmcoZGVsdGFYLCBuZXh0SXRlbUlELCBwcmV2SXRlbUlEKX1cclxuICAgICAgICAgIG9uU3dpcGVkPXt0aGlzLl9vblN3aXBlZH1cclxuICAgICAgICAgIGRlbHRhPXt0aGlzLnN3aXBlUmFuZ2V9XHJcbiAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06XCJ0cmFuc2xhdGUzZCgtXCIgKyAoYWN0aXZlSXRlbUluZGV4ICogMTAwKSArIFwiJSwwLDApXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c2xpZGVzLm1hcCgoY3VyU2xpZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpc0xlZnQgPSAoaW5kZXggPCBhY3RpdmVJdGVtSW5kZXgpO1xyXG4gICAgICAgICAgICBsZXQgaXNTZWxlY3RlZDtcclxuICAgICAgICAgICAgaWYgKGlzTXVsdGlTZWxlY3RhYmxlKSB7XHJcbiAgICAgICAgICAgICAgaXNTZWxlY3RlZCA9IChzZWxlY3RlZFNsaWRlcy5pbmRleE9mKGN1clNsaWRlLmlkKSA+PSAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBpc1NlbGVjdGVkID0gKHNlbGVjdGVkU2xpZGUgPT09IGN1clNsaWRlLmlkKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxDb3ZlckZsb3dTbGlkZVxyXG4gICAgICAgICAgICAgICAga2V5PXtjdXJTbGlkZS5pZH1cclxuICAgICAgICAgICAgICAgIHNsaWRlPXtjdXJTbGlkZX1cclxuICAgICAgICAgICAgICAgIGlzTGVmdD17aXNMZWZ0fVxyXG4gICAgICAgICAgICAgICAgbnVtVG9BY3RpdmU9e01hdGguYWJzKGluZGV4LWFjdGl2ZUl0ZW1JbmRleCl9XHJcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgaXNVbnNlbGVjdGFibGU9e2lzTXVsdGlTZWxlY3RhYmxlfVxyXG4gICAgICAgICAgICAgICAgb25TbGlkZUNsaWNrPXt0aGlzLl9vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0SXRlbT17b25TbGlkZVNlbGVjdH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9Td2lwZWFibGU+XHJcblxyXG4gICAgICAgIHsvKiAtLS0gQXJyb3cgbmF2IC0tLSAqL31cclxuICAgICAgICA8Q292ZXJGbG93TmF2XHJcbiAgICAgICAgICBuZXh0SXRlbUlEPXtuZXh0SXRlbUlEfVxyXG4gICAgICAgICAgcHJldkl0ZW1JRD17cHJldkl0ZW1JRH1cclxuICAgICAgICAgIHNldEFjdGl2ZUl0ZW09e3RoaXMuX3NldEFjdGl2ZUl0ZW19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ292ZXJGbG93O1xyXG4iXX0=
