"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/******/
(function () {
  // webpackBootstrap

  /******/
  var __webpack_modules__ = {
    /***/
    "./node_modules/@popperjs/core/lib/createPopper.js": function node_modulesPopperjsCoreLibCreatePopperJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "popperGenerator": function popperGenerator() {
          return (
            /* binding */
            _popperGenerator
          );
        },

        /* harmony export */
        "createPopper": function createPopper() {
          return (
            /* binding */
            _createPopper
          );
        },

        /* harmony export */
        "detectOverflow": function detectOverflow() {
          return (
            /* reexport safe */
            _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__.default
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./dom-utils/getCompositeRect.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
      /* harmony import */


      var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./dom-utils/getLayoutRect.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
      /* harmony import */


      var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dom-utils/listScrollParents.js */
      "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
      /* harmony import */


      var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./dom-utils/getOffsetParent.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
      /* harmony import */


      var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dom-utils/getComputedStyle.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
      /* harmony import */


      var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./utils/orderModifiers.js */
      "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
      /* harmony import */


      var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./utils/debounce.js */
      "./node_modules/@popperjs/core/lib/utils/debounce.js");
      /* harmony import */


      var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./utils/validateModifiers.js */
      "./node_modules/@popperjs/core/lib/utils/validateModifiers.js");
      /* harmony import */


      var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./utils/uniqueBy.js */
      "./node_modules/@popperjs/core/lib/utils/uniqueBy.js");
      /* harmony import */


      var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./utils/getBasePlacement.js */
      "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
      /* harmony import */


      var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utils/mergeByName.js */
      "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
      /* harmony import */


      var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./utils/detectOverflow.js */
      "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
      /* harmony import */


      var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dom-utils/instanceOf.js */
      "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./enums.js */
      "./node_modules/@popperjs/core/lib/enums.js");

      var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
      var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
      var DEFAULT_OPTIONS = {
        placement: 'bottom',
        modifiers: [],
        strategy: 'absolute'
      };

      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return !args.some(function (element) {
          return !(element && typeof element.getBoundingClientRect === 'function');
        });
      }

      function _popperGenerator(generatorOptions) {
        if (generatorOptions === void 0) {
          generatorOptions = {};
        }

        var _generatorOptions = generatorOptions,
            _generatorOptions$def = _generatorOptions.defaultModifiers,
            defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
            _generatorOptions$def2 = _generatorOptions.defaultOptions,
            defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper(reference, popper, options) {
          if (options === void 0) {
            options = defaultOptions;
          }

          var state = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
              reference: reference,
              popper: popper
            },
            attributes: {},
            styles: {}
          };
          var effectCleanupFns = [];
          var isDestroyed = false;
          var instance = {
            state: state,
            setOptions: function setOptions(options) {
              cleanupModifierEffects();
              state.options = Object.assign({}, defaultOptions, state.options, options);
              state.scrollParents = {
                reference: (0, _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(reference) ? (0, _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__.default)(reference) : reference.contextElement ? (0, _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__.default)(reference.contextElement) : [],
                popper: (0, _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__.default)(popper)
              }; // Orders the modifiers based on their dependencies and `phase`
              // properties

              var orderedModifiers = (0, _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__.default)((0, _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

              state.orderedModifiers = orderedModifiers.filter(function (m) {
                return m.enabled;
              }); // Validate the provided modifiers so that the consumer will get warned
              // if one of the modifiers is invalid for any reason

              if (true) {
                var modifiers = (0, _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__.default)([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
                  var name = _ref.name;
                  return name;
                });
                (0, _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__.default)(modifiers);

                if ((0, _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__.default)(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_7__.auto) {
                  var flipModifier = state.orderedModifiers.find(function (_ref2) {
                    var name = _ref2.name;
                    return name === 'flip';
                  });

                  if (!flipModifier) {
                    console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
                  }
                }

                var _getComputedStyle = (0, _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__.default)(popper),
                    marginTop = _getComputedStyle.marginTop,
                    marginRight = _getComputedStyle.marginRight,
                    marginBottom = _getComputedStyle.marginBottom,
                    marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
                // cause bugs with positioning, so we'll warn the consumer


                if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
                  return parseFloat(margin);
                })) {
                  console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
                }
              }

              runModifierEffects();
              return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
              if (isDestroyed) {
                return;
              }

              var _state$elements = state.elements,
                  reference = _state$elements.reference,
                  popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
              // anymore

              if (!areValidElements(reference, popper)) {
                if (true) {
                  console.error(INVALID_ELEMENT_ERROR);
                }

                return;
              } // Store the reference and popper rects to be read by modifiers


              state.rects = {
                reference: (0, _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__.default)(reference, (0, _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__.default)(popper), state.options.strategy === 'fixed'),
                popper: (0, _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__.default)(popper)
              }; // Modifiers have the ability to reset the current update cycle. The
              // most common use case for this is the `flip` modifier changing the
              // placement, which then needs to re-run all the modifiers, because the
              // logic was previously ran for the previous placement and is therefore
              // stale/incorrect

              state.reset = false;
              state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
              // is filled with the initial data specified by the modifier. This means
              // it doesn't persist and is fresh on each update.
              // To ensure persistent data, use `${name}#persistent`

              state.orderedModifiers.forEach(function (modifier) {
                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
              });
              var __debug_loops__ = 0;

              for (var index = 0; index < state.orderedModifiers.length; index++) {
                if (true) {
                  __debug_loops__ += 1;

                  if (__debug_loops__ > 100) {
                    console.error(INFINITE_LOOP_ERROR);
                    break;
                  }
                }

                if (state.reset === true) {
                  state.reset = false;
                  index = -1;
                  continue;
                }

                var _state$orderedModifie = state.orderedModifiers[index],
                    fn = _state$orderedModifie.fn,
                    _state$orderedModifie2 = _state$orderedModifie.options,
                    _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                    name = _state$orderedModifie.name;

                if (typeof fn === 'function') {
                  state = fn({
                    state: state,
                    options: _options,
                    name: name,
                    instance: instance
                  }) || state;
                }
              }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, _utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__.default)(function () {
              return new Promise(function (resolve) {
                instance.forceUpdate();
                resolve(state);
              });
            }),
            destroy: function destroy() {
              cleanupModifierEffects();
              isDestroyed = true;
            }
          };

          if (!areValidElements(reference, popper)) {
            if (true) {
              console.error(INVALID_ELEMENT_ERROR);
            }

            return instance;
          }

          instance.setOptions(options).then(function (state) {
            if (!isDestroyed && options.onFirstUpdate) {
              options.onFirstUpdate(state);
            }
          }); // Modifiers have the ability to execute arbitrary code before the first
          // update cycle runs. They will be executed in the same order as the update
          // cycle. This is useful when a modifier adds some persistent data that
          // other modifiers need to use, but the modifier is run after the dependent
          // one.

          function runModifierEffects() {
            state.orderedModifiers.forEach(function (_ref3) {
              var name = _ref3.name,
                  _ref3$options = _ref3.options,
                  options = _ref3$options === void 0 ? {} : _ref3$options,
                  effect = _ref3.effect;

              if (typeof effect === 'function') {
                var cleanupFn = effect({
                  state: state,
                  name: name,
                  instance: instance,
                  options: options
                });

                var noopFn = function noopFn() {};

                effectCleanupFns.push(cleanupFn || noopFn);
              }
            });
          }

          function cleanupModifierEffects() {
            effectCleanupFns.forEach(function (fn) {
              return fn();
            });
            effectCleanupFns = [];
          }

          return instance;
        };
      }

      var _createPopper = /*#__PURE__*/_popperGenerator(); // eslint-disable-next-line import/no-unused-modules

      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/contains.js": function node_modulesPopperjsCoreLibDomUtilsContainsJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            contains
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./instanceOf.js */
      "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

      function contains(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

        if (parent.contains(child)) {
          return true;
        } // then fallback to custom implementation with Shadow DOM support
        else if (rootNode && (0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {
          var next = child;

          do {
            if (next && parent.isSameNode(next)) {
              return true;
            } // $FlowFixMe[prop-missing]: need a better way to handle this...


            next = next.parentNode || next.host;
          } while (next);
        } // Give up, the result is false


        return false;
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js": function node_modulesPopperjsCoreLibDomUtilsGetBoundingClientRectJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getBoundingClientRect
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./instanceOf.js */
      "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

      var round = Math.round;

      function getBoundingClientRect(element, includeScale) {
        if (includeScale === void 0) {
          includeScale = false;
        }

        var rect = element.getBoundingClientRect();
        var scaleX = 1;
        var scaleY = 1;

        if ((0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) && includeScale) {
          // Fallback to 1 in case both values are `0`
          scaleX = rect.width / element.offsetWidth || 1;
          scaleY = rect.height / element.offsetHeight || 1;
        }

        return {
          width: round(rect.width / scaleX),
          height: round(rect.height / scaleY),
          top: round(rect.top / scaleY),
          right: round(rect.right / scaleX),
          bottom: round(rect.bottom / scaleY),
          left: round(rect.left / scaleX),
          x: round(rect.left / scaleX),
          y: round(rect.top / scaleY)
        };
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js": function node_modulesPopperjsCoreLibDomUtilsGetClippingRectJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getClippingRect
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../enums.js */
      "./node_modules/@popperjs/core/lib/enums.js");
      /* harmony import */


      var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./getViewportRect.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
      /* harmony import */


      var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./getDocumentRect.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
      /* harmony import */


      var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./listScrollParents.js */
      "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
      /* harmony import */


      var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./getOffsetParent.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
      /* harmony import */


      var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./getDocumentElement.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
      /* harmony import */


      var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./getComputedStyle.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
      /* harmony import */


      var _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./instanceOf.js */
      "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
      /* harmony import */


      var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getBoundingClientRect.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
      /* harmony import */


      var _getParentNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./getParentNode.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
      /* harmony import */


      var _contains_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./contains.js */
      "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
      /* harmony import */


      var _getNodeName_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./getNodeName.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
      /* harmony import */


      var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils/rectToClientRect.js */
      "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
      /* harmony import */


      var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../utils/math.js */
      "./node_modules/@popperjs/core/lib/utils/math.js");

      function getInnerBoundingClientRect(element) {
        var rect = (0, _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
      }

      function getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_1__.viewport ? (0, _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__.default)((0, _getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__.default)(element)) : (0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0, _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__.default)((0, _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__.default)((0, _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__.default)(element)));
      } // A "clipping parent" is an overflowable container with the characteristic of
      // clipping (or hiding) overflowing elements with a position different from
      // `initial`


      function getClippingParents(element) {
        var clippingParents = (0, _listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__.default)((0, _getParentNode_js__WEBPACK_IMPORTED_MODULE_8__.default)(element));
        var canEscapeClipping = ['absolute', 'fixed'].indexOf((0, _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__.default)(element).position) >= 0;
        var clipperElement = canEscapeClipping && (0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(element) ? (0, _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__.default)(element) : element;

        if (!(0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clipperElement)) {
          return [];
        } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


        return clippingParents.filter(function (clippingParent) {
          return (0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) && (0, _contains_js__WEBPACK_IMPORTED_MODULE_11__.default)(clippingParent, clipperElement) && (0, _getNodeName_js__WEBPACK_IMPORTED_MODULE_12__.default)(clippingParent) !== 'body';
        });
      } // Gets the maximum area that the element is visible in due to any number of
      // clipping parents


      function getClippingRect(element, boundary, rootBoundary) {
        var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
        var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
        var firstClippingParent = clippingParents[0];
        var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
          var rect = getClientRectFromMixedType(element, clippingParent);
          accRect.top = (0, _utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.top, accRect.top);
          accRect.right = (0, _utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.right, accRect.right);
          accRect.bottom = (0, _utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.bottom, accRect.bottom);
          accRect.left = (0, _utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromMixedType(element, firstClippingParent));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js": function node_modulesPopperjsCoreLibDomUtilsGetCompositeRectJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getCompositeRect
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./getBoundingClientRect.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
      /* harmony import */


      var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./getNodeScroll.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
      /* harmony import */


      var _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./getNodeName.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
      /* harmony import */


      var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./instanceOf.js */
      "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
      /* harmony import */


      var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./getWindowScrollBarX.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
      /* harmony import */


      var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./getDocumentElement.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
      /* harmony import */


      var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./isScrollParent.js */
      "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");

      function isElementScaled(element) {
        var rect = element.getBoundingClientRect();
        var scaleX = rect.width / element.offsetWidth || 1;
        var scaleY = rect.height / element.offsetHeight || 1;
        return scaleX !== 1 || scaleY !== 1;
      } // Returns the composite rect of an element relative to its offsetParent.
      // Composite means it takes into account transforms as well as layout.


      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) {
          isFixed = false;
        }

        var isOffsetParentAnElement = (0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(offsetParent);
        var offsetParentIsScaled = (0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
        var documentElement = (0, _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__.default)(offsetParent);
        var rect = (0, _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_2__.default)(elementOrVirtualElement, offsetParentIsScaled);
        var scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        var offsets = {
          x: 0,
          y: 0
        };

        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if ((0, _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
          (0, _isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__.default)(documentElement)) {
            scroll = (0, _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_5__.default)(offsetParent);
          }

          if ((0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(offsetParent)) {
            offsets = (0, _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_2__.default)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = (0, _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_6__.default)(documentElement);
          }
        }

        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js": function node_modulesPopperjsCoreLibDomUtilsGetComputedStyleJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getComputedStyle
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getWindow.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

      function getComputedStyle(element) {
        return (0, _getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(element).getComputedStyle(element);
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js": function node_modulesPopperjsCoreLibDomUtilsGetDocumentElementJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getDocumentElement
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./instanceOf.js */
      "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

      function getDocumentElement(element) {
        // $FlowFixMe[incompatible-return]: assume body is always available
        return (((0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
        element.document) || window.document).documentElement;
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js": function node_modulesPopperjsCoreLibDomUtilsGetDocumentRectJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getDocumentRect
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getDocumentElement.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
      /* harmony import */


      var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./getComputedStyle.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
      /* harmony import */


      var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./getWindowScrollBarX.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
      /* harmony import */


      var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./getWindowScroll.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
      /* harmony import */


      var _utils_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils/math.js */
      "./node_modules/@popperjs/core/lib/utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
      // of the `<html>` and `<body>` rect bounds if horizontally scrollable


      function getDocumentRect(element) {
        var _element$ownerDocumen;

        var html = (0, _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
        var winScroll = (0, _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__.default)(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = (0, _utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = (0, _utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + (0, _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__.default)(element);
        var y = -winScroll.scrollTop;

        if ((0, _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__.default)(body || html).direction === 'rtl') {
          x += (0, _utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
        }

        return {
          width: width,
          height: height,
          x: x,
          y: y
        };
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js": function node_modulesPopperjsCoreLibDomUtilsGetHTMLElementScrollJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getHTMLElementScroll
          );
        }
        /* harmony export */

      });

      function getHTMLElementScroll(element) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js": function node_modulesPopperjsCoreLibDomUtilsGetLayoutRectJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getLayoutRect
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getBoundingClientRect.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
      // means it doesn't take into account transforms.


      function getLayoutRect(element) {
        var clientRect = (0, _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__.default)(element); // Use the clientRect sizes if it's not been transformed.
        // Fixes https://github.com/popperjs/popper-core/issues/1223

        var width = element.offsetWidth;
        var height = element.offsetHeight;

        if (Math.abs(clientRect.width - width) <= 1) {
          width = clientRect.width;
        }

        if (Math.abs(clientRect.height - height) <= 1) {
          height = clientRect.height;
        }

        return {
          x: element.offsetLeft,
          y: element.offsetTop,
          width: width,
          height: height
        };
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js": function node_modulesPopperjsCoreLibDomUtilsGetNodeNameJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getNodeName
          );
        }
        /* harmony export */

      });

      function getNodeName(element) {
        return element ? (element.nodeName || '').toLowerCase() : null;
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js": function node_modulesPopperjsCoreLibDomUtilsGetNodeScrollJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getNodeScroll
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./getWindowScroll.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
      /* harmony import */


      var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getWindow.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
      /* harmony import */


      var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./instanceOf.js */
      "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
      /* harmony import */


      var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./getHTMLElementScroll.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");

      function getNodeScroll(node) {
        if (node === (0, _getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node) || !(0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node)) {
          return (0, _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__.default)(node);
        } else {
          return (0, _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__.default)(node);
        }
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js": function node_modulesPopperjsCoreLibDomUtilsGetOffsetParentJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getOffsetParent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getWindow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./getWindow.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
      /* harmony import */


      var _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./getNodeName.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
      /* harmony import */


      var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./getComputedStyle.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
      /* harmony import */


      var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./instanceOf.js */
      "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
      /* harmony import */


      var _isTableElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./isTableElement.js */
      "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
      /* harmony import */


      var _getParentNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./getParentNode.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");

      function getTrueOffsetParent(element) {
        if (!(0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
        (0, _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(element).position === 'fixed') {
          return null;
        }

        return element.offsetParent;
      } // `.offsetParent` reports `null` for fixed elements, while absolute elements
      // return the containing block


      function getContainingBlock(element) {
        var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
        var isIE = navigator.userAgent.indexOf('Trident') !== -1;

        if (isIE && (0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
          // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
          var elementCss = (0, _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(element);

          if (elementCss.position === 'fixed') {
            return null;
          }
        }

        var currentNode = (0, _getParentNode_js__WEBPACK_IMPORTED_MODULE_2__.default)(element);

        while ((0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0, _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(currentNode)) < 0) {
          var css = (0, _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
          // create a containing block.
          // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

          if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
            return currentNode;
          } else {
            currentNode = currentNode.parentNode;
          }
        }

        return null;
      } // Gets the closest ancestor positioned element. Handles some edge cases,
      // such as table ancestors and cross browser bugs.


      function getOffsetParent(element) {
        var window = (0, _getWindow_js__WEBPACK_IMPORTED_MODULE_4__.default)(element);
        var offsetParent = getTrueOffsetParent(element);

        while (offsetParent && (0, _isTableElement_js__WEBPACK_IMPORTED_MODULE_5__.default)(offsetParent) && (0, _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(offsetParent).position === 'static') {
          offsetParent = getTrueOffsetParent(offsetParent);
        }

        if (offsetParent && ((0, _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(offsetParent) === 'html' || (0, _getNodeName_js__WEBPACK_IMPORTED_MODULE_3__.default)(offsetParent) === 'body' && (0, _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__.default)(offsetParent).position === 'static')) {
          return window;
        }

        return offsetParent || getContainingBlock(element) || window;
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js": function node_modulesPopperjsCoreLibDomUtilsGetParentNodeJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getParentNode
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getNodeName.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
      /* harmony import */


      var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./getDocumentElement.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
      /* harmony import */


      var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./instanceOf.js */
      "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

      function getParentNode(element) {
        if ((0, _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__.default)(element) === 'html') {
          return element;
        }

        return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
          // $FlowFixMe[incompatible-return]
          // $FlowFixMe[prop-missing]
          element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
          element.parentNode || ( // DOM Element detected
          (0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
          // $FlowFixMe[incompatible-call]: HTMLElement is a Node
          (0, _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__.default)(element) // fallback

        );
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js": function node_modulesPopperjsCoreLibDomUtilsGetScrollParentJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getScrollParent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./getParentNode.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
      /* harmony import */


      var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./isScrollParent.js */
      "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
      /* harmony import */


      var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getNodeName.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
      /* harmony import */


      var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./instanceOf.js */
      "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

      function getScrollParent(node) {
        if (['html', 'body', '#document'].indexOf((0, _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__.default)(node)) >= 0) {
          // $FlowFixMe[incompatible-return]: assume body is always available
          return node.ownerDocument.body;
        }

        if ((0, _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node) && (0, _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__.default)(node)) {
          return node;
        }

        return getScrollParent((0, _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__.default)(node));
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js": function node_modulesPopperjsCoreLibDomUtilsGetViewportRectJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getViewportRect
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getWindow.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
      /* harmony import */


      var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./getDocumentElement.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
      /* harmony import */


      var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./getWindowScrollBarX.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");

      function getViewportRect(element) {
        var win = (0, _getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
        var html = (0, _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__.default)(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
        // can be obscured underneath it.
        // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
        // if it isn't open, so if this isn't available, the popper will be detected
        // to overflow the bottom of the screen too early.

        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
          // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
          // errors due to floating point numbers, so we need to check precision.
          // Safari returns a number <= 0, usually < -1 when pinch-zoomed
          // Feature detection fails in mobile emulation mode in Chrome.
          // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
          // 0.001
          // Fallback here: "Not Safari" userAgent

          if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }

        return {
          width: width,
          height: height,
          x: x + (0, _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__.default)(element),
          y: y
        };
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js": function node_modulesPopperjsCoreLibDomUtilsGetWindowJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getWindow
          );
        }
        /* harmony export */

      });

      function getWindow(node) {
        if (node == null) {
          return window;
        }

        if (node.toString() !== '[object Window]') {
          var ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }

        return node;
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js": function node_modulesPopperjsCoreLibDomUtilsGetWindowScrollJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getWindowScroll
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getWindow.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

      function getWindowScroll(node) {
        var win = (0, _getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        };
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js": function node_modulesPopperjsCoreLibDomUtilsGetWindowScrollBarXJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getWindowScrollBarX
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getBoundingClientRect.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
      /* harmony import */


      var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./getDocumentElement.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
      /* harmony import */


      var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./getWindowScroll.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");

      function getWindowScrollBarX(element) {
        // If <html> has a CSS width greater than the viewport, then this will be
        // incorrect for RTL.
        // Popper 1 is broken in this case and never had a bug report so let's assume
        // it's not an issue. I don't think anyone ever specifies width on <html>
        // anyway.
        // Browsers where the left scrollbar doesn't cause an issue report `0` for
        // this (e.g. Edge 2019, IE11, Safari)
        return (0, _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__.default)((0, _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__.default)(element)).left + (0, _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__.default)(element).scrollLeft;
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js": function node_modulesPopperjsCoreLibDomUtilsInstanceOfJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "isElement": function isElement() {
          return (
            /* binding */
            _isElement
          );
        },

        /* harmony export */
        "isHTMLElement": function isHTMLElement() {
          return (
            /* binding */
            _isHTMLElement
          );
        },

        /* harmony export */
        "isShadowRoot": function isShadowRoot() {
          return (
            /* binding */
            _isShadowRoot
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getWindow.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

      function _isElement(node) {
        var OwnElement = (0, _getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node).Element;
        return node instanceof OwnElement || node instanceof Element;
      }

      function _isHTMLElement(node) {
        var OwnElement = (0, _getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
      }

      function _isShadowRoot(node) {
        // IE 11 has no ShadowRoot
        if (typeof ShadowRoot === 'undefined') {
          return false;
        }

        var OwnElement = (0, _getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js": function node_modulesPopperjsCoreLibDomUtilsIsScrollParentJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            isScrollParent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getComputedStyle.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

      function isScrollParent(element) {
        // Firefox wants us to check `-x` and `-y` variations as well
        var _getComputedStyle = (0, _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__.default)(element),
            overflow = _getComputedStyle.overflow,
            overflowX = _getComputedStyle.overflowX,
            overflowY = _getComputedStyle.overflowY;

        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js": function node_modulesPopperjsCoreLibDomUtilsIsTableElementJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            isTableElement
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getNodeName.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

      function isTableElement(element) {
        return ['table', 'td', 'th'].indexOf((0, _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__.default)(element)) >= 0;
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js": function node_modulesPopperjsCoreLibDomUtilsListScrollParentsJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            listScrollParents
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getScrollParent.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
      /* harmony import */


      var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./getParentNode.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
      /* harmony import */


      var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./getWindow.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
      /* harmony import */


      var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./isScrollParent.js */
      "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
      /*
      given a DOM element, return the list of all scroll parents, up the list of ancesors
      until we get to the top window object. This list is what we attach scroll listeners
      to, because if any of these parent elements scroll, we'll need to re-calculate the
      reference element's position.
      */


      function listScrollParents(element, list) {
        var _element$ownerDocumen;

        if (list === void 0) {
          list = [];
        }

        var scrollParent = (0, _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = (0, _getWindow_js__WEBPACK_IMPORTED_MODULE_1__.default)(scrollParent);
        var target = isBody ? [win].concat(win.visualViewport || [], (0, _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__.default)(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
        updatedList.concat(listScrollParents((0, _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__.default)(target)));
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/enums.js": function node_modulesPopperjsCoreLibEnumsJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "top": function top() {
          return (
            /* binding */
            _top
          );
        },

        /* harmony export */
        "bottom": function bottom() {
          return (
            /* binding */
            _bottom
          );
        },

        /* harmony export */
        "right": function right() {
          return (
            /* binding */
            _right
          );
        },

        /* harmony export */
        "left": function left() {
          return (
            /* binding */
            _left
          );
        },

        /* harmony export */
        "auto": function auto() {
          return (
            /* binding */
            _auto
          );
        },

        /* harmony export */
        "basePlacements": function basePlacements() {
          return (
            /* binding */
            _basePlacements
          );
        },

        /* harmony export */
        "start": function start() {
          return (
            /* binding */
            _start
          );
        },

        /* harmony export */
        "end": function end() {
          return (
            /* binding */
            _end
          );
        },

        /* harmony export */
        "clippingParents": function clippingParents() {
          return (
            /* binding */
            _clippingParents
          );
        },

        /* harmony export */
        "viewport": function viewport() {
          return (
            /* binding */
            _viewport
          );
        },

        /* harmony export */
        "popper": function popper() {
          return (
            /* binding */
            _popper
          );
        },

        /* harmony export */
        "reference": function reference() {
          return (
            /* binding */
            _reference
          );
        },

        /* harmony export */
        "variationPlacements": function variationPlacements() {
          return (
            /* binding */
            _variationPlacements
          );
        },

        /* harmony export */
        "placements": function placements() {
          return (
            /* binding */
            _placements
          );
        },

        /* harmony export */
        "beforeRead": function beforeRead() {
          return (
            /* binding */
            _beforeRead
          );
        },

        /* harmony export */
        "read": function read() {
          return (
            /* binding */
            _read
          );
        },

        /* harmony export */
        "afterRead": function afterRead() {
          return (
            /* binding */
            _afterRead
          );
        },

        /* harmony export */
        "beforeMain": function beforeMain() {
          return (
            /* binding */
            _beforeMain
          );
        },

        /* harmony export */
        "main": function main() {
          return (
            /* binding */
            _main
          );
        },

        /* harmony export */
        "afterMain": function afterMain() {
          return (
            /* binding */
            _afterMain
          );
        },

        /* harmony export */
        "beforeWrite": function beforeWrite() {
          return (
            /* binding */
            _beforeWrite
          );
        },

        /* harmony export */
        "write": function write() {
          return (
            /* binding */
            _write
          );
        },

        /* harmony export */
        "afterWrite": function afterWrite() {
          return (
            /* binding */
            _afterWrite
          );
        },

        /* harmony export */
        "modifierPhases": function modifierPhases() {
          return (
            /* binding */
            _modifierPhases
          );
        }
        /* harmony export */

      });

      var _top = 'top';
      var _bottom = 'bottom';
      var _right = 'right';
      var _left = 'left';
      var _auto = 'auto';
      var _basePlacements = [_top, _bottom, _right, _left];
      var _start = 'start';
      var _end = 'end';
      var _clippingParents = 'clippingParents';
      var _viewport = 'viewport';
      var _popper = 'popper';
      var _reference = 'reference';

      var _variationPlacements = /*#__PURE__*/_basePlacements.reduce(function (acc, placement) {
        return acc.concat([placement + "-" + _start, placement + "-" + _end]);
      }, []);

      var _placements = /*#__PURE__*/[].concat(_basePlacements, [_auto]).reduce(function (acc, placement) {
        return acc.concat([placement, placement + "-" + _start, placement + "-" + _end]);
      }, []); // modifiers that need to read the DOM


      var _beforeRead = 'beforeRead';
      var _read = 'read';
      var _afterRead = 'afterRead'; // pure-logic modifiers

      var _beforeMain = 'beforeMain';
      var _main = 'main';
      var _afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

      var _beforeWrite = 'beforeWrite';
      var _write = 'write';
      var _afterWrite = 'afterWrite';
      var _modifierPhases = [_beforeRead, _read, _afterRead, _beforeMain, _main, _afterMain, _beforeWrite, _write, _afterWrite];
      /***/
    },

    /***/
    "./node_modules/@popperjs/core/lib/index.js": function node_modulesPopperjsCoreLibIndexJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "afterMain": function afterMain() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterMain
          );
        },

        /* harmony export */
        "afterRead": function afterRead() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterRead
          );
        },

        /* harmony export */
        "afterWrite": function afterWrite() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterWrite
          );
        },

        /* harmony export */
        "auto": function auto() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.auto
          );
        },

        /* harmony export */
        "basePlacements": function basePlacements() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements
          );
        },

        /* harmony export */
        "beforeMain": function beforeMain() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeMain
          );
        },

        /* harmony export */
        "beforeRead": function beforeRead() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeRead
          );
        },

        /* harmony export */
        "beforeWrite": function beforeWrite() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeWrite
          );
        },

        /* harmony export */
        "bottom": function bottom() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom
          );
        },

        /* harmony export */
        "clippingParents": function clippingParents() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents
          );
        },

        /* harmony export */
        "end": function end() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.end
          );
        },

        /* harmony export */
        "left": function left() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.left
          );
        },

        /* harmony export */
        "main": function main() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.main
          );
        },

        /* harmony export */
        "modifierPhases": function modifierPhases() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases
          );
        },

        /* harmony export */
        "placements": function placements() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements
          );
        },

        /* harmony export */
        "popper": function popper() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper
          );
        },

        /* harmony export */
        "read": function read() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.read
          );
        },

        /* harmony export */
        "reference": function reference() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference
          );
        },

        /* harmony export */
        "right": function right() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.right
          );
        },

        /* harmony export */
        "start": function start() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.start
          );
        },

        /* harmony export */
        "top": function top() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.top
          );
        },

        /* harmony export */
        "variationPlacements": function variationPlacements() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements
          );
        },

        /* harmony export */
        "viewport": function viewport() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport
          );
        },

        /* harmony export */
        "write": function write() {
          return (
            /* reexport safe */
            _enums_js__WEBPACK_IMPORTED_MODULE_0__.write
          );
        },

        /* harmony export */
        "applyStyles": function applyStyles() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.applyStyles
          );
        },

        /* harmony export */
        "arrow": function arrow() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.arrow
          );
        },

        /* harmony export */
        "computeStyles": function computeStyles() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.computeStyles
          );
        },

        /* harmony export */
        "eventListeners": function eventListeners() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.eventListeners
          );
        },

        /* harmony export */
        "flip": function flip() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.flip
          );
        },

        /* harmony export */
        "hide": function hide() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.hide
          );
        },

        /* harmony export */
        "offset": function offset() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.offset
          );
        },

        /* harmony export */
        "popperOffsets": function popperOffsets() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.popperOffsets
          );
        },

        /* harmony export */
        "preventOverflow": function preventOverflow() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.preventOverflow
          );
        },

        /* harmony export */
        "popperGenerator": function popperGenerator() {
          return (
            /* reexport safe */
            _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.popperGenerator
          );
        },

        /* harmony export */
        "detectOverflow": function detectOverflow() {
          return (
            /* reexport safe */
            _createPopper_js__WEBPACK_IMPORTED_MODULE_3__.default
          );
        },

        /* harmony export */
        "createPopperBase": function createPopperBase() {
          return (
            /* reexport safe */
            _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.createPopper
          );
        },

        /* harmony export */
        "createPopper": function createPopper() {
          return (
            /* reexport safe */
            _popper_js__WEBPACK_IMPORTED_MODULE_4__.createPopper
          );
        },

        /* harmony export */
        "createPopperLite": function createPopperLite() {
          return (
            /* reexport safe */
            _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__.createPopper
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./enums.js */
      "./node_modules/@popperjs/core/lib/enums.js");
      /* harmony import */


      var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modifiers/index.js */
      "./node_modules/@popperjs/core/lib/modifiers/index.js");
      /* harmony import */


      var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./createPopper.js */
      "./node_modules/@popperjs/core/lib/createPopper.js");
      /* harmony import */


      var _createPopper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./createPopper.js */
      "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
      /* harmony import */


      var _popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./popper.js */
      "./node_modules/@popperjs/core/lib/popper.js");
      /* harmony import */


      var _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./popper-lite.js */
      "./node_modules/@popperjs/core/lib/popper-lite.js"); // eslint-disable-next-line import/no-unused-modules
      // eslint-disable-next-line import/no-unused-modules
      // eslint-disable-next-line import/no-unused-modules

      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js": function node_modulesPopperjsCoreLibModifiersApplyStylesJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../dom-utils/getNodeName.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
      /* harmony import */


      var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../dom-utils/instanceOf.js */
      "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
      // and applies them to the HTMLElements such as popper and arrow


      function applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach(function (name) {
          var style = state.styles[name] || {};
          var attributes = state.attributes[name] || {};
          var element = state.elements[name]; // arrow is optional + virtual elements

          if (!(0, _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0, _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__.default)(element)) {
            return;
          } // Flow doesn't support to extend this property, but it's the most
          // effective way to apply styles to an HTMLElement
          // $FlowFixMe[cannot-write]


          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function (name) {
            var value = attributes[name];

            if (value === false) {
              element.removeAttribute(name);
            } else {
              element.setAttribute(name, value === true ? '' : value);
            }
          });
        });
      }

      function effect(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
          popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
          },
          arrow: {
            position: 'absolute'
          },
          reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;

        if (state.elements.arrow) {
          Object.assign(state.elements.arrow.style, initialStyles.arrow);
        }

        return function () {
          Object.keys(state.elements).forEach(function (name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

            var style = styleProperties.reduce(function (style, property) {
              style[property] = '';
              return style;
            }, {}); // arrow is optional + virtual elements

            if (!(0, _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0, _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__.default)(element)) {
              return;
            }

            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function (attribute) {
              element.removeAttribute(attribute);
            });
          });
        };
      } // eslint-disable-next-line import/no-unused-modules

      /* harmony default export */


      __webpack_exports__["default"] = {
        name: 'applyStyles',
        enabled: true,
        phase: 'write',
        fn: applyStyles,
        effect: effect,
        requires: ['computeStyles']
      };
      /***/
    },

    /***/
    "./node_modules/@popperjs/core/lib/modifiers/arrow.js": function node_modulesPopperjsCoreLibModifiersArrowJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../utils/getBasePlacement.js */
      "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
      /* harmony import */


      var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../dom-utils/getLayoutRect.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
      /* harmony import */


      var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../dom-utils/contains.js */
      "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
      /* harmony import */


      var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../dom-utils/getOffsetParent.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
      /* harmony import */


      var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../utils/getMainAxisFromPlacement.js */
      "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
      /* harmony import */


      var _utils_within_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../utils/within.js */
      "./node_modules/@popperjs/core/lib/utils/within.js");
      /* harmony import */


      var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils/mergePaddingObject.js */
      "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
      /* harmony import */


      var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils/expandToHashMap.js */
      "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../enums.js */
      "./node_modules/@popperjs/core/lib/enums.js");
      /* harmony import */


      var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../dom-utils/instanceOf.js */
      "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"); // eslint-disable-next-line import/no-unused-modules


      var toPaddingObject = function toPaddingObject(padding, state) {
        padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
          placement: state.placement
        })) : padding;
        return (0, _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__.default)(typeof padding !== 'number' ? padding : (0, _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__.default)(padding, _enums_js__WEBPACK_IMPORTED_MODULE_2__.basePlacements));
      };

      function arrow(_ref) {
        var _state$modifiersData$;

        var state = _ref.state,
            name = _ref.name,
            options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets = state.modifiersData.popperOffsets;
        var basePlacement = (0, _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(state.placement);
        var axis = (0, _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__.default)(basePlacement);
        var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_2__.left, _enums_js__WEBPACK_IMPORTED_MODULE_2__.right].indexOf(basePlacement) >= 0;
        var len = isVertical ? 'height' : 'width';

        if (!arrowElement || !popperOffsets) {
          return;
        }

        var paddingObject = toPaddingObject(options.padding, state);
        var arrowRect = (0, _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__.default)(arrowElement);
        var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.top : _enums_js__WEBPACK_IMPORTED_MODULE_2__.left;
        var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_2__.right;
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
        var startDiff = popperOffsets[axis] - state.rects.reference[axis];
        var arrowOffsetParent = (0, _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__.default)(arrowElement);
        var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
        // outside of the popper bounds

        var min = paddingObject[minProp];
        var max = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset = (0, _utils_within_js__WEBPACK_IMPORTED_MODULE_7__.default)(min, center, max); // Prevents breaking syntax highlighting...

        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
      }

      function effect(_ref2) {
        var state = _ref2.state,
            options = _ref2.options;
        var _options$element = options.element,
            arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

        if (arrowElement == null) {
          return;
        } // CSS selector


        if (typeof arrowElement === 'string') {
          arrowElement = state.elements.popper.querySelector(arrowElement);

          if (!arrowElement) {
            return;
          }
        }

        if (true) {
          if (!(0, _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__.isHTMLElement)(arrowElement)) {
            console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
          }
        }

        if (!(0, _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_9__.default)(state.elements.popper, arrowElement)) {
          if (true) {
            console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
          }

          return;
        }

        state.elements.arrow = arrowElement;
      } // eslint-disable-next-line import/no-unused-modules

      /* harmony default export */


      __webpack_exports__["default"] = {
        name: 'arrow',
        enabled: true,
        phase: 'main',
        fn: arrow,
        effect: effect,
        requires: ['popperOffsets'],
        requiresIfExists: ['preventOverflow']
      };
      /***/
    },

    /***/
    "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js": function node_modulesPopperjsCoreLibModifiersComputeStylesJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "mapToStyles": function mapToStyles() {
          return (
            /* binding */
            _mapToStyles
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../enums.js */
      "./node_modules/@popperjs/core/lib/enums.js");
      /* harmony import */


      var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../dom-utils/getOffsetParent.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
      /* harmony import */


      var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../dom-utils/getWindow.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
      /* harmony import */


      var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../dom-utils/getDocumentElement.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
      /* harmony import */


      var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../dom-utils/getComputedStyle.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
      /* harmony import */


      var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../utils/getBasePlacement.js */
      "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
      /* harmony import */


      var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils/math.js */
      "./node_modules/@popperjs/core/lib/utils/math.js"); // eslint-disable-next-line import/no-unused-modules


      var unsetSides = {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto'
      }; // Round the offsets to the nearest suitable subpixel based on the DPR.
      // Zooming can change the DPR, but it seems to report a value that will
      // cleanly divide the values into the appropriate subpixels.

      function roundOffsetsByDPR(_ref) {
        var x = _ref.x,
            y = _ref.y;
        var win = window;
        var dpr = win.devicePixelRatio || 1;
        return {
          x: (0, _utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)((0, _utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(x * dpr) / dpr) || 0,
          y: (0, _utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)((0, _utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(y * dpr) / dpr) || 0
        };
      }

      function _mapToStyles(_ref2) {
        var _Object$assign2;

        var popper = _ref2.popper,
            popperRect = _ref2.popperRect,
            placement = _ref2.placement,
            offsets = _ref2.offsets,
            position = _ref2.position,
            gpuAcceleration = _ref2.gpuAcceleration,
            adaptive = _ref2.adaptive,
            roundOffsets = _ref2.roundOffsets;

        var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
            _ref3$x = _ref3.x,
            x = _ref3$x === void 0 ? 0 : _ref3$x,
            _ref3$y = _ref3.y,
            y = _ref3$y === void 0 ? 0 : _ref3$y;

        var hasX = offsets.hasOwnProperty('x');
        var hasY = offsets.hasOwnProperty('y');
        var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.left;
        var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;
        var win = window;

        if (adaptive) {
          var offsetParent = (0, _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__.default)(popper);
          var heightProp = 'clientHeight';
          var widthProp = 'clientWidth';

          if (offsetParent === (0, _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__.default)(popper)) {
            offsetParent = (0, _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__.default)(popper);

            if ((0, _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__.default)(offsetParent).position !== 'static') {
              heightProp = 'scrollHeight';
              widthProp = 'scrollWidth';
            }
          } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


          offsetParent = offsetParent;

          if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top) {
            sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom; // $FlowFixMe[prop-missing]

            y -= offsetParent[heightProp] - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
          }

          if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left) {
            sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.right; // $FlowFixMe[prop-missing]

            x -= offsetParent[widthProp] - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
          }
        }

        var commonStyles = Object.assign({
          position: position
        }, adaptive && unsetSides);

        if (gpuAcceleration) {
          var _Object$assign;

          return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
        }

        return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
      }

      function computeStyles(_ref4) {
        var state = _ref4.state,
            options = _ref4.options;
        var _options$gpuAccelerat = options.gpuAcceleration,
            gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
            _options$adaptive = options.adaptive,
            adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
            _options$roundOffsets = options.roundOffsets,
            roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

        if (true) {
          var transitionProperty = (0, _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__.default)(state.elements.popper).transitionProperty || '';

          if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
            return transitionProperty.indexOf(property) >= 0;
          })) {
            console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
          }
        }

        var commonStyles = {
          placement: (0, _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__.default)(state.placement),
          popper: state.elements.popper,
          popperRect: state.rects.popper,
          gpuAcceleration: gpuAcceleration
        };

        if (state.modifiersData.popperOffsets != null) {
          state.styles.popper = Object.assign({}, state.styles.popper, _mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive: adaptive,
            roundOffsets: roundOffsets
          })));
        }

        if (state.modifiersData.arrow != null) {
          state.styles.arrow = Object.assign({}, state.styles.arrow, _mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: 'absolute',
            adaptive: false,
            roundOffsets: roundOffsets
          })));
        }

        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          'data-popper-placement': state.placement
        });
      } // eslint-disable-next-line import/no-unused-modules

      /* harmony default export */


      __webpack_exports__["default"] = {
        name: 'computeStyles',
        enabled: true,
        phase: 'beforeWrite',
        fn: computeStyles,
        data: {}
      };
      /***/
    },

    /***/
    "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js": function node_modulesPopperjsCoreLibModifiersEventListenersJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../dom-utils/getWindow.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules


      var passive = {
        passive: true
      };

      function effect(_ref) {
        var state = _ref.state,
            instance = _ref.instance,
            options = _ref.options;
        var _options$scroll = options.scroll,
            scroll = _options$scroll === void 0 ? true : _options$scroll,
            _options$resize = options.resize,
            resize = _options$resize === void 0 ? true : _options$resize;
        var window = (0, _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.default)(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

        if (scroll) {
          scrollParents.forEach(function (scrollParent) {
            scrollParent.addEventListener('scroll', instance.update, passive);
          });
        }

        if (resize) {
          window.addEventListener('resize', instance.update, passive);
        }

        return function () {
          if (scroll) {
            scrollParents.forEach(function (scrollParent) {
              scrollParent.removeEventListener('scroll', instance.update, passive);
            });
          }

          if (resize) {
            window.removeEventListener('resize', instance.update, passive);
          }
        };
      } // eslint-disable-next-line import/no-unused-modules

      /* harmony default export */


      __webpack_exports__["default"] = {
        name: 'eventListeners',
        enabled: true,
        phase: 'write',
        fn: function fn() {},
        effect: effect,
        data: {}
      };
      /***/
    },

    /***/
    "./node_modules/@popperjs/core/lib/modifiers/flip.js": function node_modulesPopperjsCoreLibModifiersFlipJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils/getOppositePlacement.js */
      "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
      /* harmony import */


      var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils/getBasePlacement.js */
      "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
      /* harmony import */


      var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../utils/getOppositeVariationPlacement.js */
      "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
      /* harmony import */


      var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../utils/detectOverflow.js */
      "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
      /* harmony import */


      var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../utils/computeAutoPlacement.js */
      "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../enums.js */
      "./node_modules/@popperjs/core/lib/enums.js");
      /* harmony import */


      var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../utils/getVariation.js */
      "./node_modules/@popperjs/core/lib/utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules


      function getExpandedFallbackPlacements(placement) {
        if ((0, _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto) {
          return [];
        }

        var oppositePlacement = (0, _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(placement);
        return [(0, _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(placement), oppositePlacement, (0, _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(oppositePlacement)];
      }

      function flip(_ref) {
        var state = _ref.state,
            options = _ref.options,
            name = _ref.name;

        if (state.modifiersData[name]._skip) {
          return;
        }

        var _options$mainAxis = options.mainAxis,
            checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
            _options$altAxis = options.altAxis,
            checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
            specifiedFallbackPlacements = options.fallbackPlacements,
            padding = options.padding,
            boundary = options.boundary,
            rootBoundary = options.rootBoundary,
            altBoundary = options.altBoundary,
            _options$flipVariatio = options.flipVariations,
            flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
            allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = (0, _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0, _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
        var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
          return acc.concat((0, _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto ? (0, _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
          }) : placement);
        }, []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = new Map();
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements[0];

        for (var i = 0; i < placements.length; i++) {
          var placement = placements[i];

          var _basePlacement = (0, _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement);

          var isStartVariation = (0, _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__.default)(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.start;

          var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.top, _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom].indexOf(_basePlacement) >= 0;
          var len = isVertical ? 'width' : 'height';
          var overflow = (0, _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
          });
          var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.right : _enums_js__WEBPACK_IMPORTED_MODULE_1__.left : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;

          if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = (0, _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(mainVariationSide);
          }

          var altVariationSide = (0, _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__.default)(mainVariationSide);
          var checks = [];

          if (checkMainAxis) {
            checks.push(overflow[_basePlacement] <= 0);
          }

          if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
          }

          if (checks.every(function (check) {
            return check;
          })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
          }

          checksMap.set(placement, checks);
        }

        if (makeFallbackChecks) {
          // `2` may be desired in some cases – research later
          var numberOfChecks = flipVariations ? 3 : 1;

          var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function (placement) {
              var checks = checksMap.get(placement);

              if (checks) {
                return checks.slice(0, _i).every(function (check) {
                  return check;
                });
              }
            });

            if (fittingPlacement) {
              firstFittingPlacement = fittingPlacement;
              return "break";
            }
          };

          for (var _i = numberOfChecks; _i > 0; _i--) {
            var _ret = _loop(_i);

            if (_ret === "break") break;
          }
        }

        if (state.placement !== firstFittingPlacement) {
          state.modifiersData[name]._skip = true;
          state.placement = firstFittingPlacement;
          state.reset = true;
        }
      } // eslint-disable-next-line import/no-unused-modules

      /* harmony default export */


      __webpack_exports__["default"] = {
        name: 'flip',
        enabled: true,
        phase: 'main',
        fn: flip,
        requiresIfExists: ['offset'],
        data: {
          _skip: false
        }
      };
      /***/
    },

    /***/
    "./node_modules/@popperjs/core/lib/modifiers/hide.js": function node_modulesPopperjsCoreLibModifiersHideJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../enums.js */
      "./node_modules/@popperjs/core/lib/enums.js");
      /* harmony import */


      var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils/detectOverflow.js */
      "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");

      function getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) {
          preventedOffsets = {
            x: 0,
            y: 0
          };
        }

        return {
          top: overflow.top - rect.height - preventedOffsets.y,
          right: overflow.right - rect.width + preventedOffsets.x,
          bottom: overflow.bottom - rect.height + preventedOffsets.y,
          left: overflow.left - rect.width - preventedOffsets.x
        };
      }

      function isAnySideFullyClipped(overflow) {
        return [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].some(function (side) {
          return overflow[side] >= 0;
        });
      }

      function hide(_ref) {
        var state = _ref.state,
            name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = (0, _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__.default)(state, {
          elementContext: 'reference'
        });
        var popperAltOverflow = (0, _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__.default)(state, {
          altBoundary: true
        });
        var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
          referenceClippingOffsets: referenceClippingOffsets,
          popperEscapeOffsets: popperEscapeOffsets,
          isReferenceHidden: isReferenceHidden,
          hasPopperEscaped: hasPopperEscaped
        };
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          'data-popper-reference-hidden': isReferenceHidden,
          'data-popper-escaped': hasPopperEscaped
        });
      } // eslint-disable-next-line import/no-unused-modules

      /* harmony default export */


      __webpack_exports__["default"] = {
        name: 'hide',
        enabled: true,
        phase: 'main',
        requiresIfExists: ['preventOverflow'],
        fn: hide
      };
      /***/
    },

    /***/
    "./node_modules/@popperjs/core/lib/modifiers/index.js": function node_modulesPopperjsCoreLibModifiersIndexJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "applyStyles": function applyStyles() {
          return (
            /* reexport safe */
            _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__.default
          );
        },

        /* harmony export */
        "arrow": function arrow() {
          return (
            /* reexport safe */
            _arrow_js__WEBPACK_IMPORTED_MODULE_1__.default
          );
        },

        /* harmony export */
        "computeStyles": function computeStyles() {
          return (
            /* reexport safe */
            _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__.default
          );
        },

        /* harmony export */
        "eventListeners": function eventListeners() {
          return (
            /* reexport safe */
            _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__.default
          );
        },

        /* harmony export */
        "flip": function flip() {
          return (
            /* reexport safe */
            _flip_js__WEBPACK_IMPORTED_MODULE_4__.default
          );
        },

        /* harmony export */
        "hide": function hide() {
          return (
            /* reexport safe */
            _hide_js__WEBPACK_IMPORTED_MODULE_5__.default
          );
        },

        /* harmony export */
        "offset": function offset() {
          return (
            /* reexport safe */
            _offset_js__WEBPACK_IMPORTED_MODULE_6__.default
          );
        },

        /* harmony export */
        "popperOffsets": function popperOffsets() {
          return (
            /* reexport safe */
            _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__.default
          );
        },

        /* harmony export */
        "preventOverflow": function preventOverflow() {
          return (
            /* reexport safe */
            _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__.default
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./applyStyles.js */
      "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
      /* harmony import */


      var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./arrow.js */
      "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
      /* harmony import */


      var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./computeStyles.js */
      "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
      /* harmony import */


      var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./eventListeners.js */
      "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
      /* harmony import */


      var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./flip.js */
      "./node_modules/@popperjs/core/lib/modifiers/flip.js");
      /* harmony import */


      var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hide.js */
      "./node_modules/@popperjs/core/lib/modifiers/hide.js");
      /* harmony import */


      var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./offset.js */
      "./node_modules/@popperjs/core/lib/modifiers/offset.js");
      /* harmony import */


      var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./popperOffsets.js */
      "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
      /* harmony import */


      var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./preventOverflow.js */
      "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/modifiers/offset.js": function node_modulesPopperjsCoreLibModifiersOffsetJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "distanceAndSkiddingToXY": function distanceAndSkiddingToXY() {
          return (
            /* binding */
            _distanceAndSkiddingToXY
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils/getBasePlacement.js */
      "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../enums.js */
      "./node_modules/@popperjs/core/lib/enums.js");

      function _distanceAndSkiddingToXY(placement, rects, offset) {
        var basePlacement = (0, _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement);
        var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.top].indexOf(basePlacement) >= 0 ? -1 : 1;

        var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
          placement: placement
        })) : offset,
            skidding = _ref[0],
            distance = _ref[1];

        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.right].indexOf(basePlacement) >= 0 ? {
          x: distance,
          y: skidding
        } : {
          x: skidding,
          y: distance
        };
      }

      function offset(_ref2) {
        var state = _ref2.state,
            options = _ref2.options,
            name = _ref2.name;
        var _options$offset = options.offset,
            offset = _options$offset === void 0 ? [0, 0] : _options$offset;

        var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__.placements.reduce(function (acc, placement) {
          acc[placement] = _distanceAndSkiddingToXY(placement, state.rects, offset);
          return acc;
        }, {});

        var _data$state$placement = data[state.placement],
            x = _data$state$placement.x,
            y = _data$state$placement.y;

        if (state.modifiersData.popperOffsets != null) {
          state.modifiersData.popperOffsets.x += x;
          state.modifiersData.popperOffsets.y += y;
        }

        state.modifiersData[name] = data;
      } // eslint-disable-next-line import/no-unused-modules

      /* harmony default export */


      __webpack_exports__["default"] = {
        name: 'offset',
        enabled: true,
        phase: 'main',
        requires: ['popperOffsets'],
        fn: offset
      };
      /***/
    },

    /***/
    "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js": function node_modulesPopperjsCoreLibModifiersPopperOffsetsJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils/computeOffsets.js */
      "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");

      function popperOffsets(_ref) {
        var state = _ref.state,
            name = _ref.name; // Offsets are the actual position the popper needs to have to be
        // properly positioned near its reference element
        // This is the most basic placement, and will be adjusted by
        // the modifiers in the next step

        state.modifiersData[name] = (0, _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__.default)({
          reference: state.rects.reference,
          element: state.rects.popper,
          strategy: 'absolute',
          placement: state.placement
        });
      } // eslint-disable-next-line import/no-unused-modules

      /* harmony default export */


      __webpack_exports__["default"] = {
        name: 'popperOffsets',
        enabled: true,
        phase: 'read',
        fn: popperOffsets,
        data: {}
      };
      /***/
    },

    /***/
    "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js": function node_modulesPopperjsCoreLibModifiersPreventOverflowJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../enums.js */
      "./node_modules/@popperjs/core/lib/enums.js");
      /* harmony import */


      var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils/getBasePlacement.js */
      "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
      /* harmony import */


      var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../utils/getMainAxisFromPlacement.js */
      "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
      /* harmony import */


      var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../utils/getAltAxis.js */
      "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
      /* harmony import */


      var _utils_within_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../utils/within.js */
      "./node_modules/@popperjs/core/lib/utils/within.js");
      /* harmony import */


      var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../dom-utils/getLayoutRect.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
      /* harmony import */


      var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../dom-utils/getOffsetParent.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
      /* harmony import */


      var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils/detectOverflow.js */
      "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
      /* harmony import */


      var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils/getVariation.js */
      "./node_modules/@popperjs/core/lib/utils/getVariation.js");
      /* harmony import */


      var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../utils/getFreshSideObject.js */
      "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
      /* harmony import */


      var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../utils/math.js */
      "./node_modules/@popperjs/core/lib/utils/math.js");

      function preventOverflow(_ref) {
        var state = _ref.state,
            options = _ref.options,
            name = _ref.name;
        var _options$mainAxis = options.mainAxis,
            checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
            _options$altAxis = options.altAxis,
            checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
            boundary = options.boundary,
            rootBoundary = options.rootBoundary,
            altBoundary = options.altBoundary,
            padding = options.padding,
            _options$tether = options.tether,
            tether = _options$tether === void 0 ? true : _options$tether,
            _options$tetherOffset = options.tetherOffset,
            tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = (0, _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__.default)(state, {
          boundary: boundary,
          rootBoundary: rootBoundary,
          padding: padding,
          altBoundary: altBoundary
        });
        var basePlacement = (0, _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__.default)(state.placement);
        var variation = (0, _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__.default)(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = (0, _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(basePlacement);
        var altAxis = (0, _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__.default)(mainAxis);
        var popperOffsets = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
          placement: state.placement
        })) : tetherOffset;
        var data = {
          x: 0,
          y: 0
        };

        if (!popperOffsets) {
          return;
        }

        if (checkMainAxis || checkAltAxis) {
          var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;
          var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;
          var len = mainAxis === 'y' ? 'height' : 'width';
          var offset = popperOffsets[mainAxis];
          var min = popperOffsets[mainAxis] + overflow[mainSide];
          var max = popperOffsets[mainAxis] - overflow[altSide];
          var additive = tether ? -popperRect[len] / 2 : 0;
          var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? referenceRect[len] : popperRect[len];
          var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
          // outside the reference bounds

          var arrowElement = state.elements.arrow;
          var arrowRect = tether && arrowElement ? (0, _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__.default)(arrowElement) : {
            width: 0,
            height: 0
          };
          var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0, _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__.default)();
          var arrowPaddingMin = arrowPaddingObject[mainSide];
          var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
          // to include its full size in the calculation. If the reference is small
          // and near the edge of a boundary, the popper can overflow even if the
          // reference is not overflowing as well (e.g. virtual elements with no
          // width or height)

          var arrowLen = (0, _utils_within_js__WEBPACK_IMPORTED_MODULE_8__.default)(0, referenceRect[len], arrowRect[len]);
          var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
          var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
          var arrowOffsetParent = state.elements.arrow && (0, _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__.default)(state.elements.arrow);
          var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
          var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
          var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
          var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

          if (checkMainAxis) {
            var preventedOffset = (0, _utils_within_js__WEBPACK_IMPORTED_MODULE_8__.default)(tether ? (0, _utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(min, tetherMin) : min, offset, tether ? (0, _utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(max, tetherMax) : max);
            popperOffsets[mainAxis] = preventedOffset;
            data[mainAxis] = preventedOffset - offset;
          }

          if (checkAltAxis) {
            var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;

            var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;

            var _offset = popperOffsets[altAxis];

            var _min = _offset + overflow[_mainSide];

            var _max = _offset - overflow[_altSide];

            var _preventedOffset = (0, _utils_within_js__WEBPACK_IMPORTED_MODULE_8__.default)(tether ? (0, _utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(_min, tetherMin) : _min, _offset, tether ? (0, _utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(_max, tetherMax) : _max);

            popperOffsets[altAxis] = _preventedOffset;
            data[altAxis] = _preventedOffset - _offset;
          }
        }

        state.modifiersData[name] = data;
      } // eslint-disable-next-line import/no-unused-modules

      /* harmony default export */


      __webpack_exports__["default"] = {
        name: 'preventOverflow',
        enabled: true,
        phase: 'main',
        fn: preventOverflow,
        requiresIfExists: ['offset']
      };
      /***/
    },

    /***/
    "./node_modules/@popperjs/core/lib/popper-lite.js": function node_modulesPopperjsCoreLibPopperLiteJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "createPopper": function createPopper() {
          return (
            /* binding */
            _createPopper2
          );
        },

        /* harmony export */
        "popperGenerator": function popperGenerator() {
          return (
            /* reexport safe */
            _createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator
          );
        },

        /* harmony export */
        "defaultModifiers": function defaultModifiers() {
          return (
            /* binding */
            _defaultModifiers
          );
        },

        /* harmony export */
        "detectOverflow": function detectOverflow() {
          return (
            /* reexport safe */
            _createPopper_js__WEBPACK_IMPORTED_MODULE_5__.default
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _createPopper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./createPopper.js */
      "./node_modules/@popperjs/core/lib/createPopper.js");
      /* harmony import */


      var _createPopper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./createPopper.js */
      "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
      /* harmony import */


      var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./modifiers/eventListeners.js */
      "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
      /* harmony import */


      var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modifiers/popperOffsets.js */
      "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
      /* harmony import */


      var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modifiers/computeStyles.js */
      "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
      /* harmony import */


      var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modifiers/applyStyles.js */
      "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");

      var _defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.default, _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__.default, _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__.default, _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__.default];

      var _createPopper2 = /*#__PURE__*/(0, _createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)({
        defaultModifiers: _defaultModifiers
      }); // eslint-disable-next-line import/no-unused-modules

      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/popper.js": function node_modulesPopperjsCoreLibPopperJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "createPopper": function createPopper() {
          return (
            /* binding */
            _createPopper3
          );
        },

        /* harmony export */
        "popperGenerator": function popperGenerator() {
          return (
            /* reexport safe */
            _createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator
          );
        },

        /* harmony export */
        "defaultModifiers": function defaultModifiers() {
          return (
            /* binding */
            _defaultModifiers2
          );
        },

        /* harmony export */
        "detectOverflow": function detectOverflow() {
          return (
            /* reexport safe */
            _createPopper_js__WEBPACK_IMPORTED_MODULE_10__.default
          );
        },

        /* harmony export */
        "createPopperLite": function createPopperLite() {
          return (
            /* reexport safe */
            _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__.createPopper
          );
        },

        /* harmony export */
        "applyStyles": function applyStyles() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.applyStyles
          );
        },

        /* harmony export */
        "arrow": function arrow() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.arrow
          );
        },

        /* harmony export */
        "computeStyles": function computeStyles() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.computeStyles
          );
        },

        /* harmony export */
        "eventListeners": function eventListeners() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.eventListeners
          );
        },

        /* harmony export */
        "flip": function flip() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.flip
          );
        },

        /* harmony export */
        "hide": function hide() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.hide
          );
        },

        /* harmony export */
        "offset": function offset() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.offset
          );
        },

        /* harmony export */
        "popperOffsets": function popperOffsets() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.popperOffsets
          );
        },

        /* harmony export */
        "preventOverflow": function preventOverflow() {
          return (
            /* reexport safe */
            _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.preventOverflow
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _createPopper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./createPopper.js */
      "./node_modules/@popperjs/core/lib/createPopper.js");
      /* harmony import */


      var _createPopper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./createPopper.js */
      "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
      /* harmony import */


      var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./modifiers/eventListeners.js */
      "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
      /* harmony import */


      var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modifiers/popperOffsets.js */
      "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
      /* harmony import */


      var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modifiers/computeStyles.js */
      "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
      /* harmony import */


      var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modifiers/applyStyles.js */
      "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
      /* harmony import */


      var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modifiers/offset.js */
      "./node_modules/@popperjs/core/lib/modifiers/offset.js");
      /* harmony import */


      var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modifiers/flip.js */
      "./node_modules/@popperjs/core/lib/modifiers/flip.js");
      /* harmony import */


      var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modifiers/preventOverflow.js */
      "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
      /* harmony import */


      var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modifiers/arrow.js */
      "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
      /* harmony import */


      var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modifiers/hide.js */
      "./node_modules/@popperjs/core/lib/modifiers/hide.js");
      /* harmony import */


      var _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./popper-lite.js */
      "./node_modules/@popperjs/core/lib/popper-lite.js");
      /* harmony import */


      var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./modifiers/index.js */
      "./node_modules/@popperjs/core/lib/modifiers/index.js");

      var _defaultModifiers2 = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.default, _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__.default, _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__.default, _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__.default, _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__.default, _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__.default, _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__.default, _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__.default, _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__.default];

      var _createPopper3 = /*#__PURE__*/(0, _createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator)({
        defaultModifiers: _defaultModifiers2
      }); // eslint-disable-next-line import/no-unused-modules
      // eslint-disable-next-line import/no-unused-modules
      // eslint-disable-next-line import/no-unused-modules

      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js": function node_modulesPopperjsCoreLibUtilsComputeAutoPlacementJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            computeAutoPlacement
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./getVariation.js */
      "./node_modules/@popperjs/core/lib/utils/getVariation.js");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../enums.js */
      "./node_modules/@popperjs/core/lib/enums.js");
      /* harmony import */


      var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detectOverflow.js */
      "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
      /* harmony import */


      var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./getBasePlacement.js */
      "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");

      function computeAutoPlacement(state, options) {
        if (options === void 0) {
          options = {};
        }

        var _options = options,
            placement = _options.placement,
            boundary = _options.boundary,
            rootBoundary = _options.rootBoundary,
            padding = _options.padding,
            flipVariations = _options.flipVariations,
            _options$allowedAutoP = _options.allowedAutoPlacements,
            allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements : _options$allowedAutoP;
        var variation = (0, _getVariation_js__WEBPACK_IMPORTED_MODULE_1__.default)(placement);
        var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements : _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements.filter(function (placement) {
          return (0, _getVariation_js__WEBPACK_IMPORTED_MODULE_1__.default)(placement) === variation;
        }) : _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements;
        var allowedPlacements = placements.filter(function (placement) {
          return allowedAutoPlacements.indexOf(placement) >= 0;
        });

        if (allowedPlacements.length === 0) {
          allowedPlacements = placements;

          if (true) {
            console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
          }
        } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


        var overflows = allowedPlacements.reduce(function (acc, placement) {
          acc[placement] = (0, _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__.default)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
          })[(0, _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(placement)];
          return acc;
        }, {});
        return Object.keys(overflows).sort(function (a, b) {
          return overflows[a] - overflows[b];
        });
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/computeOffsets.js": function node_modulesPopperjsCoreLibUtilsComputeOffsetsJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            computeOffsets
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getBasePlacement.js */
      "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
      /* harmony import */


      var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./getVariation.js */
      "./node_modules/@popperjs/core/lib/utils/getVariation.js");
      /* harmony import */


      var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./getMainAxisFromPlacement.js */
      "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../enums.js */
      "./node_modules/@popperjs/core/lib/enums.js");

      function computeOffsets(_ref) {
        var reference = _ref.reference,
            element = _ref.element,
            placement = _ref.placement;
        var basePlacement = placement ? (0, _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__.default)(placement) : null;
        var variation = placement ? (0, _getVariation_js__WEBPACK_IMPORTED_MODULE_1__.default)(placement) : null;
        var commonX = reference.x + reference.width / 2 - element.width / 2;
        var commonY = reference.y + reference.height / 2 - element.height / 2;
        var offsets;

        switch (basePlacement) {
          case _enums_js__WEBPACK_IMPORTED_MODULE_2__.top:
            offsets = {
              x: commonX,
              y: reference.y - element.height
            };
            break;

          case _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom:
            offsets = {
              x: commonX,
              y: reference.y + reference.height
            };
            break;

          case _enums_js__WEBPACK_IMPORTED_MODULE_2__.right:
            offsets = {
              x: reference.x + reference.width,
              y: commonY
            };
            break;

          case _enums_js__WEBPACK_IMPORTED_MODULE_2__.left:
            offsets = {
              x: reference.x - element.width,
              y: commonY
            };
            break;

          default:
            offsets = {
              x: reference.x,
              y: reference.y
            };
        }

        var mainAxis = basePlacement ? (0, _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__.default)(basePlacement) : null;

        if (mainAxis != null) {
          var len = mainAxis === 'y' ? 'height' : 'width';

          switch (variation) {
            case _enums_js__WEBPACK_IMPORTED_MODULE_2__.start:
              offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
              break;

            case _enums_js__WEBPACK_IMPORTED_MODULE_2__.end:
              offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
              break;

            default:
          }
        }

        return offsets;
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/debounce.js": function node_modulesPopperjsCoreLibUtilsDebounceJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            debounce
          );
        }
        /* harmony export */

      });

      function debounce(fn) {
        var pending;
        return function () {
          if (!pending) {
            pending = new Promise(function (resolve) {
              Promise.resolve().then(function () {
                pending = undefined;
                resolve(fn());
              });
            });
          }

          return pending;
        };
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/detectOverflow.js": function node_modulesPopperjsCoreLibUtilsDetectOverflowJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            detectOverflow
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../dom-utils/getBoundingClientRect.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
      /* harmony import */


      var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../dom-utils/getClippingRect.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
      /* harmony import */


      var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../dom-utils/getDocumentElement.js */
      "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
      /* harmony import */


      var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./computeOffsets.js */
      "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
      /* harmony import */


      var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./rectToClientRect.js */
      "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../enums.js */
      "./node_modules/@popperjs/core/lib/enums.js");
      /* harmony import */


      var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../dom-utils/instanceOf.js */
      "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
      /* harmony import */


      var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mergePaddingObject.js */
      "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
      /* harmony import */


      var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./expandToHashMap.js */
      "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules


      function detectOverflow(state, options) {
        if (options === void 0) {
          options = {};
        }

        var _options = options,
            _options$placement = _options.placement,
            placement = _options$placement === void 0 ? state.placement : _options$placement,
            _options$boundary = _options.boundary,
            boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents : _options$boundary,
            _options$rootBoundary = _options.rootBoundary,
            rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport : _options$rootBoundary,
            _options$elementConte = _options.elementContext,
            elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper : _options$elementConte,
            _options$altBoundary = _options.altBoundary,
            altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
            _options$padding = _options.padding,
            padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = (0, _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__.default)(padding, _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements));
        var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference : _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper;
        var referenceElement = state.elements.reference;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = (0, _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__.default)((0, _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(element) ? element : element.contextElement || (0, _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__.default)(state.elements.popper), boundary, rootBoundary);
        var referenceClientRect = (0, _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__.default)(referenceElement);
        var popperOffsets = (0, _computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__.default)({
          reference: referenceClientRect,
          element: popperRect,
          strategy: 'absolute',
          placement: placement
        });
        var popperClientRect = (0, _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__.default)(Object.assign({}, popperRect, popperOffsets));
        var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
        // 0 or negative = within the clipping rect

        var overflowOffsets = {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

        if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper && offsetData) {
          var offset = offsetData[placement];
          Object.keys(overflowOffsets).forEach(function (key) {
            var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 1 : -1;
            var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
          });
        }

        return overflowOffsets;
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js": function node_modulesPopperjsCoreLibUtilsExpandToHashMapJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            expandToHashMap
          );
        }
        /* harmony export */

      });

      function expandToHashMap(value, keys) {
        return keys.reduce(function (hashMap, key) {
          hashMap[key] = value;
          return hashMap;
        }, {});
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/format.js": function node_modulesPopperjsCoreLibUtilsFormatJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            format
          );
        }
        /* harmony export */

      });

      function format(str) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return [].concat(args).reduce(function (p, c) {
          return p.replace(/%s/, c);
        }, str);
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/getAltAxis.js": function node_modulesPopperjsCoreLibUtilsGetAltAxisJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getAltAxis
          );
        }
        /* harmony export */

      });

      function getAltAxis(axis) {
        return axis === 'x' ? 'y' : 'x';
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js": function node_modulesPopperjsCoreLibUtilsGetBasePlacementJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getBasePlacement
          );
        }
        /* harmony export */

      });

      function getBasePlacement(placement) {
        return placement.split('-')[0];
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js": function node_modulesPopperjsCoreLibUtilsGetFreshSideObjectJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getFreshSideObject
          );
        }
        /* harmony export */

      });

      function getFreshSideObject() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js": function node_modulesPopperjsCoreLibUtilsGetMainAxisFromPlacementJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getMainAxisFromPlacement
          );
        }
        /* harmony export */

      });

      function getMainAxisFromPlacement(placement) {
        return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js": function node_modulesPopperjsCoreLibUtilsGetOppositePlacementJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getOppositePlacement
          );
        }
        /* harmony export */

      });

      var hash = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom'
      };

      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, function (matched) {
          return hash[matched];
        });
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js": function node_modulesPopperjsCoreLibUtilsGetOppositeVariationPlacementJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getOppositeVariationPlacement
          );
        }
        /* harmony export */

      });

      var hash = {
        start: 'end',
        end: 'start'
      };

      function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, function (matched) {
          return hash[matched];
        });
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/getVariation.js": function node_modulesPopperjsCoreLibUtilsGetVariationJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            getVariation
          );
        }
        /* harmony export */

      });

      function getVariation(placement) {
        return placement.split('-')[1];
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/math.js": function node_modulesPopperjsCoreLibUtilsMathJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "max": function max() {
          return (
            /* binding */
            _max2
          );
        },

        /* harmony export */
        "min": function min() {
          return (
            /* binding */
            _min2
          );
        },

        /* harmony export */
        "round": function round() {
          return (
            /* binding */
            _round
          );
        }
        /* harmony export */

      });

      var _max2 = Math.max;
      var _min2 = Math.min;
      var _round = Math.round;
      /***/
    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/mergeByName.js": function node_modulesPopperjsCoreLibUtilsMergeByNameJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            mergeByName
          );
        }
        /* harmony export */

      });

      function mergeByName(modifiers) {
        var merged = modifiers.reduce(function (merged, current) {
          var existing = merged[current.name];
          merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
          }) : current;
          return merged;
        }, {}); // IE11 does not support Object.values

        return Object.keys(merged).map(function (key) {
          return merged[key];
        });
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js": function node_modulesPopperjsCoreLibUtilsMergePaddingObjectJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            mergePaddingObject
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getFreshSideObject.js */
      "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

      function mergePaddingObject(paddingObject) {
        return Object.assign({}, (0, _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__.default)(), paddingObject);
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/orderModifiers.js": function node_modulesPopperjsCoreLibUtilsOrderModifiersJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            orderModifiers
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../enums.js */
      "./node_modules/@popperjs/core/lib/enums.js"); // source: https://stackoverflow.com/questions/49875255


      function order(modifiers) {
        var map = new Map();
        var visited = new Set();
        var result = [];
        modifiers.forEach(function (modifier) {
          map.set(modifier.name, modifier);
        }); // On visiting object, check for its dependencies and visit them recursively

        function sort(modifier) {
          visited.add(modifier.name);
          var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
          requires.forEach(function (dep) {
            if (!visited.has(dep)) {
              var depModifier = map.get(dep);

              if (depModifier) {
                sort(depModifier);
              }
            }
          });
          result.push(modifier);
        }

        modifiers.forEach(function (modifier) {
          if (!visited.has(modifier.name)) {
            // check for visited object
            sort(modifier);
          }
        });
        return result;
      }

      function orderModifiers(modifiers) {
        // order based on dependencies
        var orderedModifiers = order(modifiers); // order based on phase

        return _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases.reduce(function (acc, phase) {
          return acc.concat(orderedModifiers.filter(function (modifier) {
            return modifier.phase === phase;
          }));
        }, []);
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js": function node_modulesPopperjsCoreLibUtilsRectToClientRectJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            rectToClientRect
          );
        }
        /* harmony export */

      });

      function rectToClientRect(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        });
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/uniqueBy.js": function node_modulesPopperjsCoreLibUtilsUniqueByJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            uniqueBy
          );
        }
        /* harmony export */

      });

      function uniqueBy(arr, fn) {
        var identifiers = new Set();
        return arr.filter(function (item) {
          var identifier = fn(item);

          if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
          }
        });
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/validateModifiers.js": function node_modulesPopperjsCoreLibUtilsValidateModifiersJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            validateModifiers
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./format.js */
      "./node_modules/@popperjs/core/lib/utils/format.js");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../enums.js */
      "./node_modules/@popperjs/core/lib/enums.js");

      var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
      var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
      var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];

      function validateModifiers(modifiers) {
        modifiers.forEach(function (modifier) {
          Object.keys(modifier).forEach(function (key) {
            switch (key) {
              case 'name':
                if (typeof modifier.name !== 'string') {
                  console.error((0, _format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
                }

                break;

              case 'enabled':
                if (typeof modifier.enabled !== 'boolean') {
                  console.error((0, _format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
                }

              case 'phase':
                if (_enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.indexOf(modifier.phase) < 0) {
                  console.error((0, _format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
                }

                break;

              case 'fn':
                if (typeof modifier.fn !== 'function') {
                  console.error((0, _format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
                }

                break;

              case 'effect':
                if (typeof modifier.effect !== 'function') {
                  console.error((0, _format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
                }

                break;

              case 'requires':
                if (!Array.isArray(modifier.requires)) {
                  console.error((0, _format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
                }

                break;

              case 'requiresIfExists':
                if (!Array.isArray(modifier.requiresIfExists)) {
                  console.error((0, _format_js__WEBPACK_IMPORTED_MODULE_0__.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
                }

                break;

              case 'options':
              case 'data':
                break;

              default:
                console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
                  return "\"" + s + "\"";
                }).join(', ') + "; but \"" + key + "\" was provided.");
            }

            modifier.requires && modifier.requires.forEach(function (requirement) {
              if (modifiers.find(function (mod) {
                return mod.name === requirement;
              }) == null) {
                console.error((0, _format_js__WEBPACK_IMPORTED_MODULE_0__.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
              }
            });
          });
        });
      }
      /***/

    },

    /***/
    "./node_modules/@popperjs/core/lib/utils/within.js": function node_modulesPopperjsCoreLibUtilsWithinJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            within
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./math.js */
      "./node_modules/@popperjs/core/lib/utils/math.js");

      function within(min, value, max) {
        return (0, _math_js__WEBPACK_IMPORTED_MODULE_0__.max)(min, (0, _math_js__WEBPACK_IMPORTED_MODULE_0__.min)(value, max));
      }
      /***/

    },

    /***/
    "./node_modules/bootstrap/js/src/base-component.js": function node_modulesBootstrapJsSrcBaseComponentJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _dom_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dom/data */
      "./node_modules/bootstrap/js/src/dom/data.js");
      /* harmony import */


      var _util_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util/index */
      "./node_modules/bootstrap/js/src/util/index.js");
      /* harmony import */


      var _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dom/event-handler */
      "./node_modules/bootstrap/js/src/dom/event-handler.js");
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v5.1.0): base-component.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
       * --------------------------------------------------------------------------
       */

      /**
       * ------------------------------------------------------------------------
       * Constants
       * ------------------------------------------------------------------------
       */


      var VERSION = '5.1.0';

      var BaseComponent = /*#__PURE__*/function () {
        function BaseComponent(element) {
          _classCallCheck(this, BaseComponent);

          element = (0, _util_index__WEBPACK_IMPORTED_MODULE_1__.getElement)(element);

          if (!element) {
            return;
          }

          this._element = element;

          _dom_data__WEBPACK_IMPORTED_MODULE_0__.default.set(this._element, this.constructor.DATA_KEY, this);
        }

        _createClass(BaseComponent, [{
          key: "dispose",
          value: function dispose() {
            var _this = this;

            _dom_data__WEBPACK_IMPORTED_MODULE_0__.default.remove(this._element, this.constructor.DATA_KEY);

            _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__.default.off(this._element, this.constructor.EVENT_KEY);

            Object.getOwnPropertyNames(this).forEach(function (propertyName) {
              _this[propertyName] = null;
            });
          }
        }, {
          key: "_queueCallback",
          value: function _queueCallback(callback, element) {
            var isAnimated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            (0, _util_index__WEBPACK_IMPORTED_MODULE_1__.executeAfterTransition)(callback, element, isAnimated);
          }
          /** Static */

        }], [{
          key: "getInstance",
          value: function getInstance(element) {
            return _dom_data__WEBPACK_IMPORTED_MODULE_0__.default.get((0, _util_index__WEBPACK_IMPORTED_MODULE_1__.getElement)(element), this.DATA_KEY);
          }
        }, {
          key: "getOrCreateInstance",
          value: function getOrCreateInstance(element) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.getInstance(element) || new this(element, _typeof(config) === 'object' ? config : null);
          }
        }, {
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }, {
          key: "NAME",
          get: function get() {
            throw new Error('You have to implement the static method "NAME", for each component!');
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return "bs.".concat(this.NAME);
          }
        }, {
          key: "EVENT_KEY",
          get: function get() {
            return ".".concat(this.DATA_KEY);
          }
        }]);

        return BaseComponent;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = BaseComponent;
      /***/
    },

    /***/
    "./node_modules/bootstrap/js/src/collapse.js": function node_modulesBootstrapJsSrcCollapseJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./util/index */
      "./node_modules/bootstrap/js/src/util/index.js");
      /* harmony import */


      var _dom_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dom/data */
      "./node_modules/bootstrap/js/src/dom/data.js");
      /* harmony import */


      var _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dom/event-handler */
      "./node_modules/bootstrap/js/src/dom/event-handler.js");
      /* harmony import */


      var _dom_manipulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dom/manipulator */
      "./node_modules/bootstrap/js/src/dom/manipulator.js");
      /* harmony import */


      var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dom/selector-engine */
      "./node_modules/bootstrap/js/src/dom/selector-engine.js");
      /* harmony import */


      var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./base-component */
      "./node_modules/bootstrap/js/src/base-component.js");
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v5.1.0): collapse.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
       * --------------------------------------------------------------------------
       */

      /**
       * ------------------------------------------------------------------------
       * Constants
       * ------------------------------------------------------------------------
       */


      var NAME = 'collapse';
      var DATA_KEY = 'bs.collapse';
      var EVENT_KEY = ".".concat(DATA_KEY);
      var DATA_API_KEY = '.data-api';
      var Default = {
        toggle: true,
        parent: null
      };
      var DefaultType = {
        toggle: 'boolean',
        parent: '(null|element)'
      };
      var EVENT_SHOW = "show".concat(EVENT_KEY);
      var EVENT_SHOWN = "shown".concat(EVENT_KEY);
      var EVENT_HIDE = "hide".concat(EVENT_KEY);
      var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
      var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY).concat(DATA_API_KEY);
      var CLASS_NAME_SHOW = 'show';
      var CLASS_NAME_COLLAPSE = 'collapse';
      var CLASS_NAME_COLLAPSING = 'collapsing';
      var CLASS_NAME_COLLAPSED = 'collapsed';
      var CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
      var WIDTH = 'width';
      var HEIGHT = 'height';
      var SELECTOR_ACTIVES = '.show, .collapsing';
      var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

      var Collapse = /*#__PURE__*/function (_base_component__WEBP) {
        _inherits(Collapse, _base_component__WEBP);

        var _super = _createSuper(Collapse);

        function Collapse(element, config) {
          var _this2;

          _classCallCheck(this, Collapse);

          _this2 = _super.call(this, element);
          _this2._isTransitioning = false;
          _this2._config = _this2._getConfig(config);
          _this2._triggerArray = [];

          var toggleList = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_4__.default.find(SELECTOR_DATA_TOGGLE);

          for (var i = 0, len = toggleList.length; i < len; i++) {
            var elem = toggleList[i];
            var selector = (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.getSelectorFromElement)(elem);

            var filterElement = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_4__.default.find(selector).filter(function (foundElem) {
              return foundElem === _this2._element;
            });

            if (selector !== null && filterElement.length) {
              _this2._selector = selector;

              _this2._triggerArray.push(elem);
            }
          }

          _this2._initializeChildren();

          if (!_this2._config.parent) {
            _this2._addAriaAndCollapsedClass(_this2._triggerArray, _this2._isShown());
          }

          if (_this2._config.toggle) {
            _this2.toggle();
          }

          return _this2;
        } // Getters


        _createClass(Collapse, [{
          key: "toggle",
          value: // Public
          function toggle() {
            if (this._isShown()) {
              this.hide();
            } else {
              this.show();
            }
          }
        }, {
          key: "show",
          value: function show() {
            var _this3 = this;

            if (this._isTransitioning || this._isShown()) {
              return;
            }

            var actives = [];
            var activesData;

            if (this._config.parent) {
              var children = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_4__.default.find(".".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE), this._config.parent);

              actives = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_4__.default.find(SELECTOR_ACTIVES, this._config.parent).filter(function (elem) {
                return !children.includes(elem);
              }); // remove children if greater depth
            }

            var container = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_4__.default.findOne(this._selector);

            if (actives.length) {
              var tempActiveData = actives.find(function (elem) {
                return container !== elem;
              });
              activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;

              if (activesData && activesData._isTransitioning) {
                return;
              }
            }

            var startEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__.default.trigger(this._element, EVENT_SHOW);

            if (startEvent.defaultPrevented) {
              return;
            }

            actives.forEach(function (elemActive) {
              if (container !== elemActive) {
                Collapse.getOrCreateInstance(elemActive, {
                  toggle: false
                }).hide();
              }

              if (!activesData) {
                _dom_data__WEBPACK_IMPORTED_MODULE_1__.default.set(elemActive, DATA_KEY, null);
              }
            });

            var dimension = this._getDimension();

            this._element.classList.remove(CLASS_NAME_COLLAPSE);

            this._element.classList.add(CLASS_NAME_COLLAPSING);

            this._element.style[dimension] = 0;

            this._addAriaAndCollapsedClass(this._triggerArray, true);

            this._isTransitioning = true;

            var complete = function complete() {
              _this3._isTransitioning = false;

              _this3._element.classList.remove(CLASS_NAME_COLLAPSING);

              _this3._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

              _this3._element.style[dimension] = '';

              _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__.default.trigger(_this3._element, EVENT_SHOWN);
            };

            var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
            var scrollSize = "scroll".concat(capitalizedDimension);

            this._queueCallback(complete, this._element, true);

            this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
          }
        }, {
          key: "hide",
          value: function hide() {
            var _this4 = this;

            if (this._isTransitioning || !this._isShown()) {
              return;
            }

            var startEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__.default.trigger(this._element, EVENT_HIDE);

            if (startEvent.defaultPrevented) {
              return;
            }

            var dimension = this._getDimension();

            this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
            (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.reflow)(this._element);

            this._element.classList.add(CLASS_NAME_COLLAPSING);

            this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

            var triggerArrayLength = this._triggerArray.length;

            for (var i = 0; i < triggerArrayLength; i++) {
              var trigger = this._triggerArray[i];
              var elem = (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.getElementFromSelector)(trigger);

              if (elem && !this._isShown(elem)) {
                this._addAriaAndCollapsedClass([trigger], false);
              }
            }

            this._isTransitioning = true;

            var complete = function complete() {
              _this4._isTransitioning = false;

              _this4._element.classList.remove(CLASS_NAME_COLLAPSING);

              _this4._element.classList.add(CLASS_NAME_COLLAPSE);

              _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__.default.trigger(_this4._element, EVENT_HIDDEN);
            };

            this._element.style[dimension] = '';

            this._queueCallback(complete, this._element, true);
          }
        }, {
          key: "_isShown",
          value: function _isShown() {
            var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
            return element.classList.contains(CLASS_NAME_SHOW);
          } // Private

        }, {
          key: "_getConfig",
          value: function _getConfig(config) {
            config = _objectSpread(_objectSpread(_objectSpread({}, Default), _dom_manipulator__WEBPACK_IMPORTED_MODULE_3__.default.getDataAttributes(this._element)), config);
            config.toggle = Boolean(config.toggle); // Coerce string values

            config.parent = (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.getElement)(config.parent);
            (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.typeCheckConfig)(NAME, config, DefaultType);
            return config;
          }
        }, {
          key: "_getDimension",
          value: function _getDimension() {
            return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
          }
        }, {
          key: "_initializeChildren",
          value: function _initializeChildren() {
            var _this5 = this;

            if (!this._config.parent) {
              return;
            }

            var children = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_4__.default.find(".".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE), this._config.parent);

            _dom_selector_engine__WEBPACK_IMPORTED_MODULE_4__.default.find(SELECTOR_DATA_TOGGLE, this._config.parent).filter(function (elem) {
              return !children.includes(elem);
            }).forEach(function (element) {
              var selected = (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.getElementFromSelector)(element);

              if (selected) {
                _this5._addAriaAndCollapsedClass([element], _this5._isShown(selected));
              }
            });
          }
        }, {
          key: "_addAriaAndCollapsedClass",
          value: function _addAriaAndCollapsedClass(triggerArray, isOpen) {
            if (!triggerArray.length) {
              return;
            }

            triggerArray.forEach(function (elem) {
              if (isOpen) {
                elem.classList.remove(CLASS_NAME_COLLAPSED);
              } else {
                elem.classList.add(CLASS_NAME_COLLAPSED);
              }

              elem.setAttribute('aria-expanded', isOpen);
            });
          } // Static

        }], [{
          key: "Default",
          get: function get() {
            return Default;
          }
        }, {
          key: "NAME",
          get: function get() {
            return NAME;
          }
        }, {
          key: "jQueryInterface",
          value: function jQueryInterface(config) {
            return this.each(function () {
              var _config = {};

              if (typeof config === 'string' && /show|hide/.test(config)) {
                _config.toggle = false;
              }

              var data = Collapse.getOrCreateInstance(this, _config);

              if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') {
                  throw new TypeError("No method named \"".concat(config, "\""));
                }

                data[config]();
              }
            });
          }
        }]);

        return Collapse;
      }(_base_component__WEBPACK_IMPORTED_MODULE_5__.default);
      /**
       * ------------------------------------------------------------------------
       * Data Api implementation
       * ------------------------------------------------------------------------
       */


      _dom_event_handler__WEBPACK_IMPORTED_MODULE_2__.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
        // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
        if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
          event.preventDefault();
        }

        var selector = (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.getSelectorFromElement)(this);

        var selectorElements = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_4__.default.find(selector);

        selectorElements.forEach(function (element) {
          Collapse.getOrCreateInstance(element, {
            toggle: false
          }).toggle();
        });
      })
      /**
       * ------------------------------------------------------------------------
       * jQuery
       * ------------------------------------------------------------------------
       * add .Collapse to jQuery only if jQuery is present
       */
      ;

      (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(Collapse);
      /* harmony default export */

      __webpack_exports__["default"] = Collapse;
      /***/
    },

    /***/
    "./node_modules/bootstrap/js/src/dom/data.js": function node_modulesBootstrapJsSrcDomDataJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v5.1.0): dom/data.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
       * --------------------------------------------------------------------------
       */

      /**
       * ------------------------------------------------------------------------
       * Constants
       * ------------------------------------------------------------------------
       */


      var elementMap = new Map();
      /* harmony default export */

      __webpack_exports__["default"] = {
        set: function set(element, key, instance) {
          if (!elementMap.has(element)) {
            elementMap.set(element, new Map());
          }

          var instanceMap = elementMap.get(element); // make it clear we only want one instance per element
          // can be removed later when multiple key/instances are fine to be used

          if (!instanceMap.has(key) && instanceMap.size !== 0) {
            // eslint-disable-next-line no-console
            console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
            return;
          }

          instanceMap.set(key, instance);
        },
        get: function get(element, key) {
          if (elementMap.has(element)) {
            return elementMap.get(element).get(key) || null;
          }

          return null;
        },
        remove: function remove(element, key) {
          if (!elementMap.has(element)) {
            return;
          }

          var instanceMap = elementMap.get(element);
          instanceMap.delete(key); // free up element references if there are no instances left for an element

          if (instanceMap.size === 0) {
            elementMap.delete(element);
          }
        }
      };
      /***/
    },

    /***/
    "./node_modules/bootstrap/js/src/dom/event-handler.js": function node_modulesBootstrapJsSrcDomEventHandlerJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/index */
      "./node_modules/bootstrap/js/src/util/index.js");
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v5.1.0): dom/event-handler.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
       * --------------------------------------------------------------------------
       */

      /**
       * ------------------------------------------------------------------------
       * Constants
       * ------------------------------------------------------------------------
       */


      var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
      var stripNameRegex = /\..*/;
      var stripUidRegex = /::\d+$/;
      var eventRegistry = {}; // Events storage

      var uidEvent = 1;
      var customEvents = {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout'
      };
      var customEventsRegex = /^(mouseenter|mouseleave)/i;
      var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
      /**
       * ------------------------------------------------------------------------
       * Private methods
       * ------------------------------------------------------------------------
       */

      function getUidEvent(element, uid) {
        return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
      }

      function getEvent(element) {
        var uid = getUidEvent(element);
        element.uidEvent = uid;
        eventRegistry[uid] = eventRegistry[uid] || {};
        return eventRegistry[uid];
      }

      function bootstrapHandler(element, fn) {
        return function handler(event) {
          event.delegateTarget = element;

          if (handler.oneOff) {
            EventHandler.off(element, event.type, fn);
          }

          return fn.apply(element, [event]);
        };
      }

      function bootstrapDelegationHandler(element, selector, fn) {
        return function handler(event) {
          var domElements = element.querySelectorAll(selector);

          for (var target = event.target; target && target !== this; target = target.parentNode) {
            for (var i = domElements.length; i--;) {
              if (domElements[i] === target) {
                event.delegateTarget = target;

                if (handler.oneOff) {
                  // eslint-disable-next-line unicorn/consistent-destructuring
                  EventHandler.off(element, event.type, selector, fn);
                }

                return fn.apply(target, [event]);
              }
            }
          } // To please ESLint


          return null;
        };
      }

      function findHandler(events, handler) {
        var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var uidEventList = Object.keys(events);

        for (var i = 0, len = uidEventList.length; i < len; i++) {
          var event = events[uidEventList[i]];

          if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
            return event;
          }
        }

        return null;
      }

      function normalizeParams(originalTypeEvent, handler, delegationFn) {
        var delegation = typeof handler === 'string';
        var originalHandler = delegation ? delegationFn : handler;
        var typeEvent = getTypeEvent(originalTypeEvent);
        var isNative = nativeEvents.has(typeEvent);

        if (!isNative) {
          typeEvent = originalTypeEvent;
        }

        return [delegation, originalHandler, typeEvent];
      }

      function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
        if (typeof originalTypeEvent !== 'string' || !element) {
          return;
        }

        if (!handler) {
          handler = delegationFn;
          delegationFn = null;
        } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
        // this prevents the handler from being dispatched the same way as mouseover or mouseout does


        if (customEventsRegex.test(originalTypeEvent)) {
          var wrapFn = function wrapFn(fn) {
            return function (event) {
              if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
                return fn.call(this, event);
              }
            };
          };

          if (delegationFn) {
            delegationFn = wrapFn(delegationFn);
          } else {
            handler = wrapFn(handler);
          }
        }

        var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
            _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
            delegation = _normalizeParams2[0],
            originalHandler = _normalizeParams2[1],
            typeEvent = _normalizeParams2[2];

        var events = getEvent(element);
        var handlers = events[typeEvent] || (events[typeEvent] = {});
        var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

        if (previousFn) {
          previousFn.oneOff = previousFn.oneOff && oneOff;
          return;
        }

        var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
        var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
        fn.delegationSelector = delegation ? handler : null;
        fn.originalHandler = originalHandler;
        fn.oneOff = oneOff;
        fn.uidEvent = uid;
        handlers[uid] = fn;
        element.addEventListener(typeEvent, fn, delegation);
      }

      function removeHandler(element, events, typeEvent, handler, delegationSelector) {
        var fn = findHandler(events[typeEvent], handler, delegationSelector);

        if (!fn) {
          return;
        }

        element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
        delete events[typeEvent][fn.uidEvent];
      }

      function removeNamespacedHandlers(element, events, typeEvent, namespace) {
        var storeElementEvent = events[typeEvent] || {};
        Object.keys(storeElementEvent).forEach(function (handlerKey) {
          if (handlerKey.includes(namespace)) {
            var event = storeElementEvent[handlerKey];
            removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
          }
        });
      }

      function getTypeEvent(event) {
        // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
        event = event.replace(stripNameRegex, '');
        return customEvents[event] || event;
      }

      var EventHandler = {
        on: function on(element, event, handler, delegationFn) {
          addHandler(element, event, handler, delegationFn, false);
        },
        one: function one(element, event, handler, delegationFn) {
          addHandler(element, event, handler, delegationFn, true);
        },
        off: function off(element, originalTypeEvent, handler, delegationFn) {
          if (typeof originalTypeEvent !== 'string' || !element) {
            return;
          }

          var _normalizeParams3 = normalizeParams(originalTypeEvent, handler, delegationFn),
              _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
              delegation = _normalizeParams4[0],
              originalHandler = _normalizeParams4[1],
              typeEvent = _normalizeParams4[2];

          var inNamespace = typeEvent !== originalTypeEvent;
          var events = getEvent(element);
          var isNamespace = originalTypeEvent.startsWith('.');

          if (typeof originalHandler !== 'undefined') {
            // Simplest case: handler is passed, remove that listener ONLY.
            if (!events || !events[typeEvent]) {
              return;
            }

            removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
            return;
          }

          if (isNamespace) {
            Object.keys(events).forEach(function (elementEvent) {
              removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
            });
          }

          var storeElementEvent = events[typeEvent] || {};
          Object.keys(storeElementEvent).forEach(function (keyHandlers) {
            var handlerKey = keyHandlers.replace(stripUidRegex, '');

            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
              var event = storeElementEvent[keyHandlers];
              removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
            }
          });
        },
        trigger: function trigger(element, event, args) {
          if (typeof event !== 'string' || !element) {
            return null;
          }

          var $ = (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.getjQuery)();
          var typeEvent = getTypeEvent(event);
          var inNamespace = event !== typeEvent;
          var isNative = nativeEvents.has(typeEvent);
          var jQueryEvent;
          var bubbles = true;
          var nativeDispatch = true;
          var defaultPrevented = false;
          var evt = null;

          if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
          }

          if (isNative) {
            evt = document.createEvent('HTMLEvents');
            evt.initEvent(typeEvent, bubbles, true);
          } else {
            evt = new CustomEvent(event, {
              bubbles: bubbles,
              cancelable: true
            });
          } // merge custom information in our event


          if (typeof args !== 'undefined') {
            Object.keys(args).forEach(function (key) {
              Object.defineProperty(evt, key, {
                get: function get() {
                  return args[key];
                }
              });
            });
          }

          if (defaultPrevented) {
            evt.preventDefault();
          }

          if (nativeDispatch) {
            element.dispatchEvent(evt);
          }

          if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
            jQueryEvent.preventDefault();
          }

          return evt;
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = EventHandler;
      /***/
    },

    /***/
    "./node_modules/bootstrap/js/src/dom/manipulator.js": function node_modulesBootstrapJsSrcDomManipulatorJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v5.1.0): dom/manipulator.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
       * --------------------------------------------------------------------------
       */


      function normalizeData(val) {
        if (val === 'true') {
          return true;
        }

        if (val === 'false') {
          return false;
        }

        if (val === Number(val).toString()) {
          return Number(val);
        }

        if (val === '' || val === 'null') {
          return null;
        }

        return val;
      }

      function normalizeDataKey(key) {
        return key.replace(/[A-Z]/g, function (chr) {
          return "-".concat(chr.toLowerCase());
        });
      }

      var Manipulator = {
        setDataAttribute: function setDataAttribute(element, key, value) {
          element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
        },
        removeDataAttribute: function removeDataAttribute(element, key) {
          element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
        },
        getDataAttributes: function getDataAttributes(element) {
          if (!element) {
            return {};
          }

          var attributes = {};
          Object.keys(element.dataset).filter(function (key) {
            return key.startsWith('bs');
          }).forEach(function (key) {
            var pureKey = key.replace(/^bs/, '');
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = normalizeData(element.dataset[key]);
          });
          return attributes;
        },
        getDataAttribute: function getDataAttribute(element, key) {
          return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
        },
        offset: function offset(element) {
          var rect = element.getBoundingClientRect();
          return {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset
          };
        },
        position: function position(element) {
          return {
            top: element.offsetTop,
            left: element.offsetLeft
          };
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = Manipulator;
      /***/
    },

    /***/
    "./node_modules/bootstrap/js/src/dom/selector-engine.js": function node_modulesBootstrapJsSrcDomSelectorEngineJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/index */
      "./node_modules/bootstrap/js/src/util/index.js");
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v5.1.0): dom/selector-engine.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
       * --------------------------------------------------------------------------
       */

      /**
       * ------------------------------------------------------------------------
       * Constants
       * ------------------------------------------------------------------------
       */


      var NODE_TEXT = 3;
      var SelectorEngine = {
        find: function find(selector) {
          var _ref5;

          var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
          return (_ref5 = []).concat.apply(_ref5, _toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
        },
        findOne: function findOne(selector) {
          var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
          return Element.prototype.querySelector.call(element, selector);
        },
        children: function children(element, selector) {
          var _ref6;

          return (_ref6 = []).concat.apply(_ref6, _toConsumableArray(element.children)).filter(function (child) {
            return child.matches(selector);
          });
        },
        parents: function parents(element, selector) {
          var parents = [];
          var ancestor = element.parentNode;

          while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
            if (ancestor.matches(selector)) {
              parents.push(ancestor);
            }

            ancestor = ancestor.parentNode;
          }

          return parents;
        },
        prev: function prev(element, selector) {
          var previous = element.previousElementSibling;

          while (previous) {
            if (previous.matches(selector)) {
              return [previous];
            }

            previous = previous.previousElementSibling;
          }

          return [];
        },
        next: function next(element, selector) {
          var next = element.nextElementSibling;

          while (next) {
            if (next.matches(selector)) {
              return [next];
            }

            next = next.nextElementSibling;
          }

          return [];
        },
        focusableChildren: function focusableChildren(element) {
          var focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(function (selector) {
            return "".concat(selector, ":not([tabindex^=\"-\"])");
          }).join(', ');
          return this.find(focusables, element).filter(function (el) {
            return !(0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isDisabled)(el) && (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isVisible)(el);
          });
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = SelectorEngine;
      /***/
    },

    /***/
    "./node_modules/bootstrap/js/src/dropdown.js": function node_modulesBootstrapJsSrcDropdownJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _popperjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @popperjs/core */
      "./node_modules/@popperjs/core/lib/index.js");
      /* harmony import */


      var _popperjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @popperjs/core */
      "./node_modules/@popperjs/core/lib/popper.js");
      /* harmony import */


      var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./util/index */
      "./node_modules/bootstrap/js/src/util/index.js");
      /* harmony import */


      var _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dom/event-handler */
      "./node_modules/bootstrap/js/src/dom/event-handler.js");
      /* harmony import */


      var _dom_manipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dom/manipulator */
      "./node_modules/bootstrap/js/src/dom/manipulator.js");
      /* harmony import */


      var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dom/selector-engine */
      "./node_modules/bootstrap/js/src/dom/selector-engine.js");
      /* harmony import */


      var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./base-component */
      "./node_modules/bootstrap/js/src/base-component.js");
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v5.1.0): dropdown.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
       * --------------------------------------------------------------------------
       */

      /**
       * ------------------------------------------------------------------------
       * Constants
       * ------------------------------------------------------------------------
       */


      var NAME = 'dropdown';
      var DATA_KEY = 'bs.dropdown';
      var EVENT_KEY = ".".concat(DATA_KEY);
      var DATA_API_KEY = '.data-api';
      var ESCAPE_KEY = 'Escape';
      var SPACE_KEY = 'Space';
      var TAB_KEY = 'Tab';
      var ARROW_UP_KEY = 'ArrowUp';
      var ARROW_DOWN_KEY = 'ArrowDown';
      var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

      var REGEXP_KEYDOWN = new RegExp("".concat(ARROW_UP_KEY, "|").concat(ARROW_DOWN_KEY, "|").concat(ESCAPE_KEY));
      var EVENT_HIDE = "hide".concat(EVENT_KEY);
      var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
      var EVENT_SHOW = "show".concat(EVENT_KEY);
      var EVENT_SHOWN = "shown".concat(EVENT_KEY);
      var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY).concat(DATA_API_KEY);
      var EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY).concat(DATA_API_KEY);
      var EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY).concat(DATA_API_KEY);
      var CLASS_NAME_SHOW = 'show';
      var CLASS_NAME_DROPUP = 'dropup';
      var CLASS_NAME_DROPEND = 'dropend';
      var CLASS_NAME_DROPSTART = 'dropstart';
      var CLASS_NAME_NAVBAR = 'navbar';
      var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]';
      var SELECTOR_MENU = '.dropdown-menu';
      var SELECTOR_NAVBAR_NAV = '.navbar-nav';
      var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
      var PLACEMENT_TOP = (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'top-end' : 'top-start';
      var PLACEMENT_TOPEND = (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'top-start' : 'top-end';
      var PLACEMENT_BOTTOM = (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'bottom-end' : 'bottom-start';
      var PLACEMENT_BOTTOMEND = (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'bottom-start' : 'bottom-end';
      var PLACEMENT_RIGHT = (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'left-start' : 'right-start';
      var PLACEMENT_LEFT = (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? 'right-start' : 'left-start';
      var Default = {
        offset: [0, 2],
        boundary: 'clippingParents',
        reference: 'toggle',
        display: 'dynamic',
        popperConfig: null,
        autoClose: true
      };
      var DefaultType = {
        offset: '(array|string|function)',
        boundary: '(string|element)',
        reference: '(string|element|object)',
        display: 'string',
        popperConfig: '(null|object|function)',
        autoClose: '(boolean|string)'
      };
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

      var Dropdown = /*#__PURE__*/function (_base_component__WEBP2) {
        _inherits(Dropdown, _base_component__WEBP2);

        var _super2 = _createSuper(Dropdown);

        function Dropdown(element, config) {
          var _this6;

          _classCallCheck(this, Dropdown);

          _this6 = _super2.call(this, element);
          _this6._popper = null;
          _this6._config = _this6._getConfig(config);
          _this6._menu = _this6._getMenuElement();
          _this6._inNavbar = _this6._detectNavbar();
          return _this6;
        } // Getters


        _createClass(Dropdown, [{
          key: "toggle",
          value: // Public
          function toggle() {
            return this._isShown() ? this.hide() : this.show();
          }
        }, {
          key: "show",
          value: function show() {
            if ((0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isDisabled)(this._element) || this._isShown(this._menu)) {
              return;
            }

            var relatedTarget = {
              relatedTarget: this._element
            };

            var showEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.trigger(this._element, EVENT_SHOW, relatedTarget);

            if (showEvent.defaultPrevented) {
              return;
            }

            var parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

            if (this._inNavbar) {
              _dom_manipulator__WEBPACK_IMPORTED_MODULE_2__.default.setDataAttribute(this._menu, 'popper', 'none');
            } else {
              this._createPopper(parent);
            } // If this is a touch-enabled device we add extra
            // empty mouseover listeners to the body's immediate children;
            // only needed because of broken event delegation on iOS
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


            if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
              var _ref7;

              (_ref7 = []).concat.apply(_ref7, _toConsumableArray(document.body.children)).forEach(function (elem) {
                return _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.on(elem, 'mouseover', _util_index__WEBPACK_IMPORTED_MODULE_0__.noop);
              });
            }

            this._element.focus();

            this._element.setAttribute('aria-expanded', true);

            this._menu.classList.add(CLASS_NAME_SHOW);

            this._element.classList.add(CLASS_NAME_SHOW);

            _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.trigger(this._element, EVENT_SHOWN, relatedTarget);
          }
        }, {
          key: "hide",
          value: function hide() {
            if ((0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isDisabled)(this._element) || !this._isShown(this._menu)) {
              return;
            }

            var relatedTarget = {
              relatedTarget: this._element
            };

            this._completeHide(relatedTarget);
          }
        }, {
          key: "dispose",
          value: function dispose() {
            if (this._popper) {
              this._popper.destroy();
            }

            _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
          }
        }, {
          key: "update",
          value: function update() {
            this._inNavbar = this._detectNavbar();

            if (this._popper) {
              this._popper.update();
            }
          } // Private

        }, {
          key: "_completeHide",
          value: function _completeHide(relatedTarget) {
            var hideEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.trigger(this._element, EVENT_HIDE, relatedTarget);

            if (hideEvent.defaultPrevented) {
              return;
            } // If this is a touch-enabled device we remove the extra
            // empty mouseover listeners we added for iOS support


            if ('ontouchstart' in document.documentElement) {
              var _ref8;

              (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (elem) {
                return _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.off(elem, 'mouseover', _util_index__WEBPACK_IMPORTED_MODULE_0__.noop);
              });
            }

            if (this._popper) {
              this._popper.destroy();
            }

            this._menu.classList.remove(CLASS_NAME_SHOW);

            this._element.classList.remove(CLASS_NAME_SHOW);

            this._element.setAttribute('aria-expanded', 'false');

            _dom_manipulator__WEBPACK_IMPORTED_MODULE_2__.default.removeDataAttribute(this._menu, 'popper');

            _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.trigger(this._element, EVENT_HIDDEN, relatedTarget);
          }
        }, {
          key: "_getConfig",
          value: function _getConfig(config) {
            config = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), _dom_manipulator__WEBPACK_IMPORTED_MODULE_2__.default.getDataAttributes(this._element)), config);
            (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.typeCheckConfig)(NAME, config, this.constructor.DefaultType);

            if (_typeof(config.reference) === 'object' && !(0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isElement)(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
              // Popper virtual elements require a getBoundingClientRect method
              throw new TypeError("".concat(NAME.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
            }

            return config;
          }
        }, {
          key: "_createPopper",
          value: function _createPopper(parent) {
            if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_5__ === 'undefined') {
              throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
            }

            var referenceElement = this._element;

            if (this._config.reference === 'parent') {
              referenceElement = parent;
            } else if ((0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isElement)(this._config.reference)) {
              referenceElement = (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.getElement)(this._config.reference);
            } else if (_typeof(this._config.reference) === 'object') {
              referenceElement = this._config.reference;
            }

            var popperConfig = this._getPopperConfig();

            var isDisplayStatic = popperConfig.modifiers.find(function (modifier) {
              return modifier.name === 'applyStyles' && modifier.enabled === false;
            });
            this._popper = _popperjs_core__WEBPACK_IMPORTED_MODULE_6__.createPopper(referenceElement, this._menu, popperConfig);

            if (isDisplayStatic) {
              _dom_manipulator__WEBPACK_IMPORTED_MODULE_2__.default.setDataAttribute(this._menu, 'popper', 'static');
            }
          }
        }, {
          key: "_isShown",
          value: function _isShown() {
            var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
            return element.classList.contains(CLASS_NAME_SHOW);
          }
        }, {
          key: "_getMenuElement",
          value: function _getMenuElement() {
            return _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__.default.next(this._element, SELECTOR_MENU)[0];
          }
        }, {
          key: "_getPlacement",
          value: function _getPlacement() {
            var parentDropdown = this._element.parentNode;

            if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
              return PLACEMENT_RIGHT;
            }

            if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
              return PLACEMENT_LEFT;
            } // We need to trim the value because custom properties can also include spaces


            var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

            if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
              return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
            }

            return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
          }
        }, {
          key: "_detectNavbar",
          value: function _detectNavbar() {
            return this._element.closest(".".concat(CLASS_NAME_NAVBAR)) !== null;
          }
        }, {
          key: "_getOffset",
          value: function _getOffset() {
            var _this7 = this;

            var offset = this._config.offset;

            if (typeof offset === 'string') {
              return offset.split(',').map(function (val) {
                return Number.parseInt(val, 10);
              });
            }

            if (typeof offset === 'function') {
              return function (popperData) {
                return offset(popperData, _this7._element);
              };
            }

            return offset;
          }
        }, {
          key: "_getPopperConfig",
          value: function _getPopperConfig() {
            var defaultBsPopperConfig = {
              placement: this._getPlacement(),
              modifiers: [{
                name: 'preventOverflow',
                options: {
                  boundary: this._config.boundary
                }
              }, {
                name: 'offset',
                options: {
                  offset: this._getOffset()
                }
              }]
            }; // Disable Popper if we have a static display

            if (this._config.display === 'static') {
              defaultBsPopperConfig.modifiers = [{
                name: 'applyStyles',
                enabled: false
              }];
            }

            return _objectSpread(_objectSpread({}, defaultBsPopperConfig), typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
          }
        }, {
          key: "_selectMenuItem",
          value: function _selectMenuItem(_ref9) {
            var key = _ref9.key,
                target = _ref9.target;

            var items = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__.default.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(_util_index__WEBPACK_IMPORTED_MODULE_0__.isVisible);

            if (!items.length) {
              return;
            } // if target isn't included in items (e.g. when expanding the dropdown)
            // allow cycling to get the last item in case key equals ARROW_UP_KEY


            (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.getNextActiveElement)(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
          } // Static

        }], [{
          key: "Default",
          get: function get() {
            return Default;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType;
          }
        }, {
          key: "NAME",
          get: function get() {
            return NAME;
          }
        }, {
          key: "jQueryInterface",
          value: function jQueryInterface(config) {
            return this.each(function () {
              var data = Dropdown.getOrCreateInstance(this, config);

              if (typeof config !== 'string') {
                return;
              }

              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"".concat(config, "\""));
              }

              data[config]();
            });
          }
        }, {
          key: "clearMenus",
          value: function clearMenus(event) {
            if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY)) {
              return;
            }

            var toggles = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__.default.find(SELECTOR_DATA_TOGGLE);

            for (var i = 0, len = toggles.length; i < len; i++) {
              var context = Dropdown.getInstance(toggles[i]);

              if (!context || context._config.autoClose === false) {
                continue;
              }

              if (!context._isShown()) {
                continue;
              }

              var relatedTarget = {
                relatedTarget: context._element
              };

              if (event) {
                var composedPath = event.composedPath();
                var isMenuTarget = composedPath.includes(context._menu);

                if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
                  continue;
                } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


                if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
                  continue;
                }

                if (event.type === 'click') {
                  relatedTarget.clickEvent = event;
                }
              }

              context._completeHide(relatedTarget);
            }
          }
        }, {
          key: "getParentFromElement",
          value: function getParentFromElement(element) {
            return (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.getElementFromSelector)(element) || element.parentNode;
          }
        }, {
          key: "dataApiKeydownHandler",
          value: function dataApiKeydownHandler(event) {
            // If not input/textarea:
            //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
            // If input/textarea:
            //  - If space key => not a dropdown command
            //  - If key is other than escape
            //    - If key is not up or down => not a dropdown command
            //    - If trigger inside the menu => not a dropdown command
            if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
              return;
            }

            var isActive = this.classList.contains(CLASS_NAME_SHOW);

            if (!isActive && event.key === ESCAPE_KEY) {
              return;
            }

            event.preventDefault();
            event.stopPropagation();

            if ((0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isDisabled)(this)) {
              return;
            }

            var getToggleButton = this.matches(SELECTOR_DATA_TOGGLE) ? this : _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__.default.prev(this, SELECTOR_DATA_TOGGLE)[0];
            var instance = Dropdown.getOrCreateInstance(getToggleButton);

            if (event.key === ESCAPE_KEY) {
              instance.hide();
              return;
            }

            if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
              if (!isActive) {
                instance.show();
              }

              instance._selectMenuItem(event);

              return;
            }

            if (!isActive || event.key === SPACE_KEY) {
              Dropdown.clearMenus();
            }
          }
        }]);

        return Dropdown;
      }(_base_component__WEBPACK_IMPORTED_MODULE_4__.default);
      /**
       * ------------------------------------------------------------------------
       * Data Api implementation
       * ------------------------------------------------------------------------
       */


      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler);

      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);

      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus);

      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);

      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
        event.preventDefault();
        Dropdown.getOrCreateInstance(this).toggle();
      })
      /**
       * ------------------------------------------------------------------------
       * jQuery
       * ------------------------------------------------------------------------
       * add .Dropdown to jQuery only if jQuery is present
       */
      ;

      (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(Dropdown);
      /* harmony default export */

      __webpack_exports__["default"] = Dropdown;
      /***/
    },

    /***/
    "./node_modules/bootstrap/js/src/modal.js": function node_modulesBootstrapJsSrcModalJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _util_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./util/index */
      "./node_modules/bootstrap/js/src/util/index.js");
      /* harmony import */


      var _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dom/event-handler */
      "./node_modules/bootstrap/js/src/dom/event-handler.js");
      /* harmony import */


      var _dom_manipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dom/manipulator */
      "./node_modules/bootstrap/js/src/dom/manipulator.js");
      /* harmony import */


      var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dom/selector-engine */
      "./node_modules/bootstrap/js/src/dom/selector-engine.js");
      /* harmony import */


      var _util_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./util/scrollbar */
      "./node_modules/bootstrap/js/src/util/scrollbar.js");
      /* harmony import */


      var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./base-component */
      "./node_modules/bootstrap/js/src/base-component.js");
      /* harmony import */


      var _util_backdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./util/backdrop */
      "./node_modules/bootstrap/js/src/util/backdrop.js");
      /* harmony import */


      var _util_focustrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./util/focustrap */
      "./node_modules/bootstrap/js/src/util/focustrap.js");
      /* harmony import */


      var _util_component_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./util/component-functions */
      "./node_modules/bootstrap/js/src/util/component-functions.js");
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v5.1.0): modal.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
       * --------------------------------------------------------------------------
       */

      /**
       * ------------------------------------------------------------------------
       * Constants
       * ------------------------------------------------------------------------
       */


      var NAME = 'modal';
      var DATA_KEY = 'bs.modal';
      var EVENT_KEY = ".".concat(DATA_KEY);
      var DATA_API_KEY = '.data-api';
      var ESCAPE_KEY = 'Escape';
      var Default = {
        backdrop: true,
        keyboard: true,
        focus: true
      };
      var DefaultType = {
        backdrop: '(boolean|string)',
        keyboard: 'boolean',
        focus: 'boolean'
      };
      var EVENT_HIDE = "hide".concat(EVENT_KEY);
      var EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY);
      var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
      var EVENT_SHOW = "show".concat(EVENT_KEY);
      var EVENT_SHOWN = "shown".concat(EVENT_KEY);
      var EVENT_RESIZE = "resize".concat(EVENT_KEY);
      var EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY);
      var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY);
      var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss".concat(EVENT_KEY);
      var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY);
      var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY).concat(DATA_API_KEY);
      var CLASS_NAME_OPEN = 'modal-open';
      var CLASS_NAME_FADE = 'fade';
      var CLASS_NAME_SHOW = 'show';
      var CLASS_NAME_STATIC = 'modal-static';
      var SELECTOR_DIALOG = '.modal-dialog';
      var SELECTOR_MODAL_BODY = '.modal-body';
      var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]';
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

      var Modal = /*#__PURE__*/function (_base_component__WEBP3) {
        _inherits(Modal, _base_component__WEBP3);

        var _super3 = _createSuper(Modal);

        function Modal(element, config) {
          var _this8;

          _classCallCheck(this, Modal);

          _this8 = _super3.call(this, element);
          _this8._config = _this8._getConfig(config);
          _this8._dialog = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__.default.findOne(SELECTOR_DIALOG, _this8._element);
          _this8._backdrop = _this8._initializeBackDrop();
          _this8._focustrap = _this8._initializeFocusTrap();
          _this8._isShown = false;
          _this8._ignoreBackdropClick = false;
          _this8._isTransitioning = false;
          _this8._scrollBar = new _util_scrollbar__WEBPACK_IMPORTED_MODULE_4__.default();
          return _this8;
        } // Getters


        _createClass(Modal, [{
          key: "toggle",
          value: // Public
          function toggle(relatedTarget) {
            return this._isShown ? this.hide() : this.show(relatedTarget);
          }
        }, {
          key: "show",
          value: function show(relatedTarget) {
            var _this9 = this;

            if (this._isShown || this._isTransitioning) {
              return;
            }

            var showEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.trigger(this._element, EVENT_SHOW, {
              relatedTarget: relatedTarget
            });

            if (showEvent.defaultPrevented) {
              return;
            }

            this._isShown = true;

            if (this._isAnimated()) {
              this._isTransitioning = true;
            }

            this._scrollBar.hide();

            document.body.classList.add(CLASS_NAME_OPEN);

            this._adjustDialog();

            this._setEscapeEvent();

            this._setResizeEvent();

            _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
              _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.one(_this9._element, EVENT_MOUSEUP_DISMISS, function (event) {
                if (event.target === _this9._element) {
                  _this9._ignoreBackdropClick = true;
                }
              });
            });

            this._showBackdrop(function () {
              return _this9._showElement(relatedTarget);
            });
          }
        }, {
          key: "hide",
          value: function hide() {
            var _this10 = this;

            if (!this._isShown || this._isTransitioning) {
              return;
            }

            var hideEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.trigger(this._element, EVENT_HIDE);

            if (hideEvent.defaultPrevented) {
              return;
            }

            this._isShown = false;

            var isAnimated = this._isAnimated();

            if (isAnimated) {
              this._isTransitioning = true;
            }

            this._setEscapeEvent();

            this._setResizeEvent();

            this._focustrap.deactivate();

            this._element.classList.remove(CLASS_NAME_SHOW);

            _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.off(this._element, EVENT_CLICK_DISMISS);

            _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

            this._queueCallback(function () {
              return _this10._hideModal();
            }, this._element, isAnimated);
          }
        }, {
          key: "dispose",
          value: function dispose() {
            [window, this._dialog].forEach(function (htmlElement) {
              return _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.off(htmlElement, EVENT_KEY);
            });

            this._backdrop.dispose();

            this._focustrap.deactivate();

            _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
          }
        }, {
          key: "handleUpdate",
          value: function handleUpdate() {
            this._adjustDialog();
          } // Private

        }, {
          key: "_initializeBackDrop",
          value: function _initializeBackDrop() {
            return new _util_backdrop__WEBPACK_IMPORTED_MODULE_6__.default({
              isVisible: Boolean(this._config.backdrop),
              // 'static' option will be translated to true, and booleans will keep their value
              isAnimated: this._isAnimated()
            });
          }
        }, {
          key: "_initializeFocusTrap",
          value: function _initializeFocusTrap() {
            return new _util_focustrap__WEBPACK_IMPORTED_MODULE_7__.default({
              trapElement: this._element
            });
          }
        }, {
          key: "_getConfig",
          value: function _getConfig(config) {
            config = _objectSpread(_objectSpread(_objectSpread({}, Default), _dom_manipulator__WEBPACK_IMPORTED_MODULE_2__.default.getDataAttributes(this._element)), _typeof(config) === 'object' ? config : {});
            (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.typeCheckConfig)(NAME, config, DefaultType);
            return config;
          }
        }, {
          key: "_showElement",
          value: function _showElement(relatedTarget) {
            var _this11 = this;

            var isAnimated = this._isAnimated();

            var modalBody = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_3__.default.findOne(SELECTOR_MODAL_BODY, this._dialog);

            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
              // Don't move modal's DOM position
              document.body.append(this._element);
            }

            this._element.style.display = 'block';

            this._element.removeAttribute('aria-hidden');

            this._element.setAttribute('aria-modal', true);

            this._element.setAttribute('role', 'dialog');

            this._element.scrollTop = 0;

            if (modalBody) {
              modalBody.scrollTop = 0;
            }

            if (isAnimated) {
              (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.reflow)(this._element);
            }

            this._element.classList.add(CLASS_NAME_SHOW);

            var transitionComplete = function transitionComplete() {
              if (_this11._config.focus) {
                _this11._focustrap.activate();
              }

              _this11._isTransitioning = false;

              _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.trigger(_this11._element, EVENT_SHOWN, {
                relatedTarget: relatedTarget
              });
            };

            this._queueCallback(transitionComplete, this._dialog, isAnimated);
          }
        }, {
          key: "_setEscapeEvent",
          value: function _setEscapeEvent() {
            var _this12 = this;

            if (this._isShown) {
              _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
                if (_this12._config.keyboard && event.key === ESCAPE_KEY) {
                  event.preventDefault();

                  _this12.hide();
                } else if (!_this12._config.keyboard && event.key === ESCAPE_KEY) {
                  _this12._triggerBackdropTransition();
                }
              });
            } else {
              _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.off(this._element, EVENT_KEYDOWN_DISMISS);
            }
          }
        }, {
          key: "_setResizeEvent",
          value: function _setResizeEvent() {
            var _this13 = this;

            if (this._isShown) {
              _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.on(window, EVENT_RESIZE, function () {
                return _this13._adjustDialog();
              });
            } else {
              _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.off(window, EVENT_RESIZE);
            }
          }
        }, {
          key: "_hideModal",
          value: function _hideModal() {
            var _this14 = this;

            this._element.style.display = 'none';

            this._element.setAttribute('aria-hidden', true);

            this._element.removeAttribute('aria-modal');

            this._element.removeAttribute('role');

            this._isTransitioning = false;

            this._backdrop.hide(function () {
              document.body.classList.remove(CLASS_NAME_OPEN);

              _this14._resetAdjustments();

              _this14._scrollBar.reset();

              _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.trigger(_this14._element, EVENT_HIDDEN);
            });
          }
        }, {
          key: "_showBackdrop",
          value: function _showBackdrop(callback) {
            var _this15 = this;

            _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.on(this._element, EVENT_CLICK_DISMISS, function (event) {
              if (_this15._ignoreBackdropClick) {
                _this15._ignoreBackdropClick = false;
                return;
              }

              if (event.target !== event.currentTarget) {
                return;
              }

              if (_this15._config.backdrop === true) {
                _this15.hide();
              } else if (_this15._config.backdrop === 'static') {
                _this15._triggerBackdropTransition();
              }
            });

            this._backdrop.show(callback);
          }
        }, {
          key: "_isAnimated",
          value: function _isAnimated() {
            return this._element.classList.contains(CLASS_NAME_FADE);
          }
        }, {
          key: "_triggerBackdropTransition",
          value: function _triggerBackdropTransition() {
            var _this16 = this;

            var hideEvent = _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.trigger(this._element, EVENT_HIDE_PREVENTED);

            if (hideEvent.defaultPrevented) {
              return;
            }

            var _this$_element = this._element,
                classList = _this$_element.classList,
                scrollHeight = _this$_element.scrollHeight,
                style = _this$_element.style;
            var isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

            if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) {
              return;
            }

            if (!isModalOverflowing) {
              style.overflowY = 'hidden';
            }

            classList.add(CLASS_NAME_STATIC);

            this._queueCallback(function () {
              classList.remove(CLASS_NAME_STATIC);

              if (!isModalOverflowing) {
                _this16._queueCallback(function () {
                  style.overflowY = '';
                }, _this16._dialog);
              }
            }, this._dialog);

            this._element.focus();
          } // ----------------------------------------------------------------------
          // the following methods are used to handle overflowing modals
          // ----------------------------------------------------------------------

        }, {
          key: "_adjustDialog",
          value: function _adjustDialog() {
            var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

            var scrollbarWidth = this._scrollBar.getWidth();

            var isBodyOverflowing = scrollbarWidth > 0;

            if (!isBodyOverflowing && isModalOverflowing && !(0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() || isBodyOverflowing && !isModalOverflowing && (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)()) {
              this._element.style.paddingLeft = "".concat(scrollbarWidth, "px");
            }

            if (isBodyOverflowing && !isModalOverflowing && !(0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)() || !isBodyOverflowing && isModalOverflowing && (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isRTL)()) {
              this._element.style.paddingRight = "".concat(scrollbarWidth, "px");
            }
          }
        }, {
          key: "_resetAdjustments",
          value: function _resetAdjustments() {
            this._element.style.paddingLeft = '';
            this._element.style.paddingRight = '';
          } // Static

        }], [{
          key: "Default",
          get: function get() {
            return Default;
          }
        }, {
          key: "NAME",
          get: function get() {
            return NAME;
          }
        }, {
          key: "jQueryInterface",
          value: function jQueryInterface(config, relatedTarget) {
            return this.each(function () {
              var data = Modal.getOrCreateInstance(this, config);

              if (typeof config !== 'string') {
                return;
              }

              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"".concat(config, "\""));
              }

              data[config](relatedTarget);
            });
          }
        }]);

        return Modal;
      }(_base_component__WEBPACK_IMPORTED_MODULE_5__.default);
      /**
       * ------------------------------------------------------------------------
       * Data Api implementation
       * ------------------------------------------------------------------------
       */


      _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
        var _this17 = this;

        var target = (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.getElementFromSelector)(this);

        if (['A', 'AREA'].includes(this.tagName)) {
          event.preventDefault();
        }

        _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.one(target, EVENT_SHOW, function (showEvent) {
          if (showEvent.defaultPrevented) {
            // only register focus restorer if modal will actually get shown
            return;
          }

          _dom_event_handler__WEBPACK_IMPORTED_MODULE_1__.default.one(target, EVENT_HIDDEN, function () {
            if ((0, _util_index__WEBPACK_IMPORTED_MODULE_0__.isVisible)(_this17)) {
              _this17.focus();
            }
          });
        });

        var data = Modal.getOrCreateInstance(target);
        data.toggle(this);
      });

      (0, _util_component_functions__WEBPACK_IMPORTED_MODULE_8__.enableDismissTrigger)(Modal)
      /**
       * ------------------------------------------------------------------------
       * jQuery
       * ------------------------------------------------------------------------
       * add .Modal to jQuery only if jQuery is present
       */
      ;
      (0, _util_index__WEBPACK_IMPORTED_MODULE_0__.defineJQueryPlugin)(Modal);
      /* harmony default export */

      __webpack_exports__["default"] = Modal;
      /***/
    },

    /***/
    "./node_modules/bootstrap/js/src/util/backdrop.js": function node_modulesBootstrapJsSrcUtilBackdropJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../dom/event-handler */
      "./node_modules/bootstrap/js/src/dom/event-handler.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/bootstrap/js/src/util/index.js");
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v5.1.0): util/backdrop.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */


      var Default = {
        className: 'modal-backdrop',
        isVisible: true,
        // if false, we use the backdrop helper without adding any element to the dom
        isAnimated: false,
        rootElement: 'body',
        // give the choice to place backdrop under different elements
        clickCallback: null
      };
      var DefaultType = {
        className: 'string',
        isVisible: 'boolean',
        isAnimated: 'boolean',
        rootElement: '(element|string)',
        clickCallback: '(function|null)'
      };
      var NAME = 'backdrop';
      var CLASS_NAME_FADE = 'fade';
      var CLASS_NAME_SHOW = 'show';
      var EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME);

      var Backdrop = /*#__PURE__*/function () {
        function Backdrop(config) {
          _classCallCheck(this, Backdrop);

          this._config = this._getConfig(config);
          this._isAppended = false;
          this._element = null;
        }

        _createClass(Backdrop, [{
          key: "show",
          value: function show(callback) {
            if (!this._config.isVisible) {
              (0, _index__WEBPACK_IMPORTED_MODULE_1__.execute)(callback);
              return;
            }

            this._append();

            if (this._config.isAnimated) {
              (0, _index__WEBPACK_IMPORTED_MODULE_1__.reflow)(this._getElement());
            }

            this._getElement().classList.add(CLASS_NAME_SHOW);

            this._emulateAnimation(function () {
              ;
              (0, _index__WEBPACK_IMPORTED_MODULE_1__.execute)(callback);
            });
          }
        }, {
          key: "hide",
          value: function hide(callback) {
            var _this18 = this;

            if (!this._config.isVisible) {
              (0, _index__WEBPACK_IMPORTED_MODULE_1__.execute)(callback);
              return;
            }

            this._getElement().classList.remove(CLASS_NAME_SHOW);

            this._emulateAnimation(function () {
              _this18.dispose();

              (0, _index__WEBPACK_IMPORTED_MODULE_1__.execute)(callback);
            });
          } // Private

        }, {
          key: "_getElement",
          value: function _getElement() {
            if (!this._element) {
              var backdrop = document.createElement('div');
              backdrop.className = this._config.className;

              if (this._config.isAnimated) {
                backdrop.classList.add(CLASS_NAME_FADE);
              }

              this._element = backdrop;
            }

            return this._element;
          }
        }, {
          key: "_getConfig",
          value: function _getConfig(config) {
            config = _objectSpread(_objectSpread({}, Default), _typeof(config) === 'object' ? config : {}); // use getElement() with the default "body" to get a fresh Element on each instantiation

            config.rootElement = (0, _index__WEBPACK_IMPORTED_MODULE_1__.getElement)(config.rootElement);
            (0, _index__WEBPACK_IMPORTED_MODULE_1__.typeCheckConfig)(NAME, config, DefaultType);
            return config;
          }
        }, {
          key: "_append",
          value: function _append() {
            var _this19 = this;

            if (this._isAppended) {
              return;
            }

            this._config.rootElement.append(this._getElement());

            _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__.default.on(this._getElement(), EVENT_MOUSEDOWN, function () {
              ;
              (0, _index__WEBPACK_IMPORTED_MODULE_1__.execute)(_this19._config.clickCallback);
            });

            this._isAppended = true;
          }
        }, {
          key: "dispose",
          value: function dispose() {
            if (!this._isAppended) {
              return;
            }

            _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__.default.off(this._element, EVENT_MOUSEDOWN);

            this._element.remove();

            this._isAppended = false;
          }
        }, {
          key: "_emulateAnimation",
          value: function _emulateAnimation(callback) {
            (0, _index__WEBPACK_IMPORTED_MODULE_1__.executeAfterTransition)(callback, this._getElement(), this._config.isAnimated);
          }
        }]);

        return Backdrop;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = Backdrop;
      /***/
    },

    /***/
    "./node_modules/bootstrap/js/src/util/component-functions.js": function node_modulesBootstrapJsSrcUtilComponentFunctionsJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "enableDismissTrigger": function enableDismissTrigger() {
          return (
            /* binding */
            _enableDismissTrigger
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../dom/event-handler */
      "./node_modules/bootstrap/js/src/dom/event-handler.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/bootstrap/js/src/util/index.js");
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v5.1.0): util/component-functions.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
       * --------------------------------------------------------------------------
       */


      var _enableDismissTrigger = function _enableDismissTrigger(component) {
        var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hide';
        var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
        var name = component.NAME;

        _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__.default.on(document, clickEvent, "[data-bs-dismiss=\"".concat(name, "\"]"), function (event) {
          if (['A', 'AREA'].includes(this.tagName)) {
            event.preventDefault();
          }

          if ((0, _index__WEBPACK_IMPORTED_MODULE_1__.isDisabled)(this)) {
            return;
          }

          var target = (0, _index__WEBPACK_IMPORTED_MODULE_1__.getElementFromSelector)(this) || this.closest(".".concat(name));
          var instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

          instance[method]();
        });
      };
      /***/

    },

    /***/
    "./node_modules/bootstrap/js/src/util/focustrap.js": function node_modulesBootstrapJsSrcUtilFocustrapJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../dom/event-handler */
      "./node_modules/bootstrap/js/src/dom/event-handler.js");
      /* harmony import */


      var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../dom/selector-engine */
      "./node_modules/bootstrap/js/src/dom/selector-engine.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index */
      "./node_modules/bootstrap/js/src/util/index.js");
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v5.1.0): util/focustrap.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * --------------------------------------------------------------------------
       */


      var Default = {
        trapElement: null,
        // The element to trap focus inside of
        autofocus: true
      };
      var DefaultType = {
        trapElement: 'element',
        autofocus: 'boolean'
      };
      var NAME = 'focustrap';
      var DATA_KEY = 'bs.focustrap';
      var EVENT_KEY = ".".concat(DATA_KEY);
      var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
      var EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY);
      var TAB_KEY = 'Tab';
      var TAB_NAV_FORWARD = 'forward';
      var TAB_NAV_BACKWARD = 'backward';

      var FocusTrap = /*#__PURE__*/function () {
        function FocusTrap(config) {
          _classCallCheck(this, FocusTrap);

          this._config = this._getConfig(config);
          this._isActive = false;
          this._lastTabNavDirection = null;
        }

        _createClass(FocusTrap, [{
          key: "activate",
          value: function activate() {
            var _this20 = this;

            var _this$_config = this._config,
                trapElement = _this$_config.trapElement,
                autofocus = _this$_config.autofocus;

            if (this._isActive) {
              return;
            }

            if (autofocus) {
              trapElement.focus();
            }

            _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__.default.off(document, EVENT_KEY); // guard against infinite focus loop


            _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__.default.on(document, EVENT_FOCUSIN, function (event) {
              return _this20._handleFocusin(event);
            });

            _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__.default.on(document, EVENT_KEYDOWN_TAB, function (event) {
              return _this20._handleKeydown(event);
            });

            this._isActive = true;
          }
        }, {
          key: "deactivate",
          value: function deactivate() {
            if (!this._isActive) {
              return;
            }

            this._isActive = false;

            _dom_event_handler__WEBPACK_IMPORTED_MODULE_0__.default.off(document, EVENT_KEY);
          } // Private

        }, {
          key: "_handleFocusin",
          value: function _handleFocusin(event) {
            var target = event.target;
            var trapElement = this._config.trapElement;

            if (target === document || target === trapElement || trapElement.contains(target)) {
              return;
            }

            var elements = _dom_selector_engine__WEBPACK_IMPORTED_MODULE_1__.default.focusableChildren(trapElement);

            if (elements.length === 0) {
              trapElement.focus();
            } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
              elements[elements.length - 1].focus();
            } else {
              elements[0].focus();
            }
          }
        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if (event.key !== TAB_KEY) {
              return;
            }

            this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
          }
        }, {
          key: "_getConfig",
          value: function _getConfig(config) {
            config = _objectSpread(_objectSpread({}, Default), _typeof(config) === 'object' ? config : {});
            (0, _index__WEBPACK_IMPORTED_MODULE_2__.typeCheckConfig)(NAME, config, DefaultType);
            return config;
          }
        }]);

        return FocusTrap;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = FocusTrap;
      /***/
    },

    /***/
    "./node_modules/bootstrap/js/src/util/index.js": function node_modulesBootstrapJsSrcUtilIndexJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "getElement": function getElement() {
          return (
            /* binding */
            _getElement2
          );
        },

        /* harmony export */
        "getUID": function getUID() {
          return (
            /* binding */
            _getUID
          );
        },

        /* harmony export */
        "getSelectorFromElement": function getSelectorFromElement() {
          return (
            /* binding */
            _getSelectorFromElement
          );
        },

        /* harmony export */
        "getElementFromSelector": function getElementFromSelector() {
          return (
            /* binding */
            _getElementFromSelector
          );
        },

        /* harmony export */
        "getTransitionDurationFromElement": function getTransitionDurationFromElement() {
          return (
            /* binding */
            _getTransitionDurationFromElement
          );
        },

        /* harmony export */
        "triggerTransitionEnd": function triggerTransitionEnd() {
          return (
            /* binding */
            _triggerTransitionEnd
          );
        },

        /* harmony export */
        "isElement": function isElement() {
          return (
            /* binding */
            _isElement2
          );
        },

        /* harmony export */
        "typeCheckConfig": function typeCheckConfig() {
          return (
            /* binding */
            _typeCheckConfig
          );
        },

        /* harmony export */
        "isVisible": function isVisible() {
          return (
            /* binding */
            _isVisible
          );
        },

        /* harmony export */
        "isDisabled": function isDisabled() {
          return (
            /* binding */
            _isDisabled
          );
        },

        /* harmony export */
        "findShadowRoot": function findShadowRoot() {
          return (
            /* binding */
            _findShadowRoot
          );
        },

        /* harmony export */
        "noop": function noop() {
          return (
            /* binding */
            _noop
          );
        },

        /* harmony export */
        "getNextActiveElement": function getNextActiveElement() {
          return (
            /* binding */
            _getNextActiveElement
          );
        },

        /* harmony export */
        "reflow": function reflow() {
          return (
            /* binding */
            _reflow
          );
        },

        /* harmony export */
        "getjQuery": function getjQuery() {
          return (
            /* binding */
            _getjQuery
          );
        },

        /* harmony export */
        "onDOMContentLoaded": function onDOMContentLoaded() {
          return (
            /* binding */
            _onDOMContentLoaded
          );
        },

        /* harmony export */
        "isRTL": function isRTL() {
          return (
            /* binding */
            _isRTL
          );
        },

        /* harmony export */
        "defineJQueryPlugin": function defineJQueryPlugin() {
          return (
            /* binding */
            _defineJQueryPlugin
          );
        },

        /* harmony export */
        "execute": function execute() {
          return (
            /* binding */
            _execute
          );
        },

        /* harmony export */
        "executeAfterTransition": function executeAfterTransition() {
          return (
            /* binding */
            _executeAfterTransition
          );
        }
        /* harmony export */

      });
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v5.1.0): util/index.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
       * --------------------------------------------------------------------------
       */


      var MAX_UID = 1000000;
      var MILLISECONDS_MULTIPLIER = 1000;
      var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

      var toType = function toType(obj) {
        if (obj === null || obj === undefined) {
          return "".concat(obj);
        }

        return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
      };
      /**
       * --------------------------------------------------------------------------
       * Public Util Api
       * --------------------------------------------------------------------------
       */


      var _getUID = function _getUID(prefix) {
        do {
          prefix += Math.floor(Math.random() * MAX_UID);
        } while (document.getElementById(prefix));

        return prefix;
      };

      var getSelector = function getSelector(element) {
        var selector = element.getAttribute('data-bs-target');

        if (!selector || selector === '#') {
          var hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
          // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
          // `document.querySelector` will rightfully complain it is invalid.
          // See https://github.com/twbs/bootstrap/issues/32273

          if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
            return null;
          } // Just in case some CMS puts out a full URL with the anchor appended


          if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
            hrefAttr = "#".concat(hrefAttr.split('#')[1]);
          }

          selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
        }

        return selector;
      };

      var _getSelectorFromElement = function _getSelectorFromElement(element) {
        var selector = getSelector(element);

        if (selector) {
          return document.querySelector(selector) ? selector : null;
        }

        return null;
      };

      var _getElementFromSelector = function _getElementFromSelector(element) {
        var selector = getSelector(element);
        return selector ? document.querySelector(selector) : null;
      };

      var _getTransitionDurationFromElement = function _getTransitionDurationFromElement(element) {
        if (!element) {
          return 0;
        } // Get transition-duration of the element


        var _window$getComputedSt = window.getComputedStyle(element),
            transitionDuration = _window$getComputedSt.transitionDuration,
            transitionDelay = _window$getComputedSt.transitionDelay;

        var floatTransitionDuration = Number.parseFloat(transitionDuration);
        var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

        if (!floatTransitionDuration && !floatTransitionDelay) {
          return 0;
        } // If multiple durations are defined, take the first


        transitionDuration = transitionDuration.split(',')[0];
        transitionDelay = transitionDelay.split(',')[0];
        return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
      };

      var _triggerTransitionEnd = function _triggerTransitionEnd(element) {
        element.dispatchEvent(new Event(TRANSITION_END));
      };

      var _isElement2 = function _isElement2(obj) {
        if (!obj || _typeof(obj) !== 'object') {
          return false;
        }

        if (typeof obj.jquery !== 'undefined') {
          obj = obj[0];
        }

        return typeof obj.nodeType !== 'undefined';
      };

      var _getElement2 = function _getElement2(obj) {
        if (_isElement2(obj)) {
          // it's a jQuery object or a node element
          return obj.jquery ? obj[0] : obj;
        }

        if (typeof obj === 'string' && obj.length > 0) {
          return document.querySelector(obj);
        }

        return null;
      };

      var _typeCheckConfig = function _typeCheckConfig(componentName, config, configTypes) {
        Object.keys(configTypes).forEach(function (property) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && _isElement2(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new TypeError("".concat(componentName.toUpperCase(), ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\"."));
          }
        });
      };

      var _isVisible = function _isVisible(element) {
        if (!_isElement2(element) || element.getClientRects().length === 0) {
          return false;
        }

        return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
      };

      var _isDisabled = function _isDisabled(element) {
        if (!element || element.nodeType !== Node.ELEMENT_NODE) {
          return true;
        }

        if (element.classList.contains('disabled')) {
          return true;
        }

        if (typeof element.disabled !== 'undefined') {
          return element.disabled;
        }

        return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
      };

      var _findShadowRoot = function _findShadowRoot(element) {
        if (!document.documentElement.attachShadow) {
          return null;
        } // Can find the shadow root otherwise it'll return the document


        if (typeof element.getRootNode === 'function') {
          var root = element.getRootNode();
          return root instanceof ShadowRoot ? root : null;
        }

        if (element instanceof ShadowRoot) {
          return element;
        } // when we don't find a shadow root


        if (!element.parentNode) {
          return null;
        }

        return _findShadowRoot(element.parentNode);
      };

      var _noop = function _noop() {};
      /**
       * Trick to restart an element's animation
       *
       * @param {HTMLElement} element
       * @return void
       *
       * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
       */


      var _reflow = function _reflow(element) {
        // eslint-disable-next-line no-unused-expressions
        element.offsetHeight;
      };

      var _getjQuery = function _getjQuery() {
        var _window = window,
            jQuery = _window.jQuery;

        if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
          return jQuery;
        }

        return null;
      };

      var DOMContentLoadedCallbacks = [];

      var _onDOMContentLoaded = function _onDOMContentLoaded(callback) {
        if (document.readyState === 'loading') {
          // add listener on the first call when the document is in loading state
          if (!DOMContentLoadedCallbacks.length) {
            document.addEventListener('DOMContentLoaded', function () {
              DOMContentLoadedCallbacks.forEach(function (callback) {
                return callback();
              });
            });
          }

          DOMContentLoadedCallbacks.push(callback);
        } else {
          callback();
        }
      };

      var _isRTL = function _isRTL() {
        return document.documentElement.dir === 'rtl';
      };

      var _defineJQueryPlugin = function _defineJQueryPlugin(plugin) {
        _onDOMContentLoaded(function () {
          var $ = _getjQuery();
          /* istanbul ignore if */


          if ($) {
            var name = plugin.NAME;
            var JQUERY_NO_CONFLICT = $.fn[name];
            $.fn[name] = plugin.jQueryInterface;
            $.fn[name].Constructor = plugin;

            $.fn[name].noConflict = function () {
              $.fn[name] = JQUERY_NO_CONFLICT;
              return plugin.jQueryInterface;
            };
          }
        });
      };

      var _execute = function _execute(callback) {
        if (typeof callback === 'function') {
          callback();
        }
      };

      var _executeAfterTransition = function _executeAfterTransition(callback, transitionElement) {
        var waitForTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (!waitForTransition) {
          _execute(callback);

          return;
        }

        var durationPadding = 5;
        var emulatedDuration = _getTransitionDurationFromElement(transitionElement) + durationPadding;
        var called = false;

        var handler = function handler(_ref10) {
          var target = _ref10.target;

          if (target !== transitionElement) {
            return;
          }

          called = true;
          transitionElement.removeEventListener(TRANSITION_END, handler);

          _execute(callback);
        };

        transitionElement.addEventListener(TRANSITION_END, handler);
        setTimeout(function () {
          if (!called) {
            _triggerTransitionEnd(transitionElement);
          }
        }, emulatedDuration);
      };
      /**
       * Return the previous/next element of a list.
       *
       * @param {array} list    The list of elements
       * @param activeElement   The active element
       * @param shouldGetNext   Choose to get next or previous element
       * @param isCycleAllowed
       * @return {Element|elem} The proper element
       */


      var _getNextActiveElement = function _getNextActiveElement(list, activeElement, shouldGetNext, isCycleAllowed) {
        var index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

        if (index === -1) {
          return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
        }

        var listLength = list.length;
        index += shouldGetNext ? 1 : -1;

        if (isCycleAllowed) {
          index = (index + listLength) % listLength;
        }

        return list[Math.max(0, Math.min(index, listLength - 1))];
      };
      /***/

    },

    /***/
    "./node_modules/bootstrap/js/src/util/scrollbar.js": function node_modulesBootstrapJsSrcUtilScrollbarJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _dom_selector_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../dom/selector-engine */
      "./node_modules/bootstrap/js/src/dom/selector-engine.js");
      /* harmony import */


      var _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../dom/manipulator */
      "./node_modules/bootstrap/js/src/dom/manipulator.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index */
      "./node_modules/bootstrap/js/src/util/index.js");
      /**
       * --------------------------------------------------------------------------
       * Bootstrap (v5.1.0): util/scrollBar.js
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
       * --------------------------------------------------------------------------
       */


      var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
      var SELECTOR_STICKY_CONTENT = '.sticky-top';

      var ScrollBarHelper = /*#__PURE__*/function () {
        function ScrollBarHelper() {
          _classCallCheck(this, ScrollBarHelper);

          this._element = document.body;
        }

        _createClass(ScrollBarHelper, [{
          key: "getWidth",
          value: function getWidth() {
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
            var documentWidth = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - documentWidth);
          }
        }, {
          key: "hide",
          value: function hide() {
            var width = this.getWidth();

            this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


            this._setElementAttributes(this._element, 'paddingRight', function (calculatedValue) {
              return calculatedValue + width;
            }); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


            this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', function (calculatedValue) {
              return calculatedValue + width;
            });

            this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', function (calculatedValue) {
              return calculatedValue - width;
            });
          }
        }, {
          key: "_disableOverFlow",
          value: function _disableOverFlow() {
            this._saveInitialAttribute(this._element, 'overflow');

            this._element.style.overflow = 'hidden';
          }
        }, {
          key: "_setElementAttributes",
          value: function _setElementAttributes(selector, styleProp, callback) {
            var _this21 = this;

            var scrollbarWidth = this.getWidth();

            var manipulationCallBack = function manipulationCallBack(element) {
              if (element !== _this21._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
                return;
              }

              _this21._saveInitialAttribute(element, styleProp);

              var calculatedValue = window.getComputedStyle(element)[styleProp];
              element.style[styleProp] = "".concat(callback(Number.parseFloat(calculatedValue)), "px");
            };

            this._applyManipulationCallback(selector, manipulationCallBack);
          }
        }, {
          key: "reset",
          value: function reset() {
            this._resetElementAttributes(this._element, 'overflow');

            this._resetElementAttributes(this._element, 'paddingRight');

            this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

            this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
          }
        }, {
          key: "_saveInitialAttribute",
          value: function _saveInitialAttribute(element, styleProp) {
            var actualValue = element.style[styleProp];

            if (actualValue) {
              _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__.default.setDataAttribute(element, styleProp, actualValue);
            }
          }
        }, {
          key: "_resetElementAttributes",
          value: function _resetElementAttributes(selector, styleProp) {
            var manipulationCallBack = function manipulationCallBack(element) {
              var value = _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__.default.getDataAttribute(element, styleProp);

              if (typeof value === 'undefined') {
                element.style.removeProperty(styleProp);
              } else {
                _dom_manipulator__WEBPACK_IMPORTED_MODULE_1__.default.removeDataAttribute(element, styleProp);

                element.style[styleProp] = value;
              }
            };

            this._applyManipulationCallback(selector, manipulationCallBack);
          }
        }, {
          key: "_applyManipulationCallback",
          value: function _applyManipulationCallback(selector, callBack) {
            if ((0, _index__WEBPACK_IMPORTED_MODULE_2__.isElement)(selector)) {
              callBack(selector);
            } else {
              _dom_selector_engine__WEBPACK_IMPORTED_MODULE_0__.default.find(selector, this._element).forEach(callBack);
            }
          }
        }, {
          key: "isOverflowing",
          value: function isOverflowing() {
            return this.getWidth() > 0;
          }
        }]);

        return ScrollBarHelper;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = ScrollBarHelper;
      /***/
    },

    /***/
    "./src/js/components/main.js": function srcJsComponentsMainJs() {
      console.log('Hello from the main script!');
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/compat get default export */

  /******/


  !function () {
    /******/
    // getDefaultExport function for compatibility with non-harmony modules

    /******/
    __webpack_require__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
      /******/
      function () {
        return module['default'];
      } :
      /******/
      function () {
        return module;
      };
      /******/

      __webpack_require__.d(getter, {
        a: getter
      });
      /******/


      return getter;
      /******/
    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/define property getters */

  /******/

  !function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/

  !function () {
    /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/

  !function () {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  }();
  /******/

  /************************************************************************/

  var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be in strict mode.

  !function () {
    "use strict";
    /*!*************************!*\
      !*** ./src/js/index.js ***!
      \*************************/

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _node_modules_bootstrap_js_src_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../node_modules/bootstrap/js/src/modal */
    "./node_modules/bootstrap/js/src/modal.js");
    /* harmony import */


    var _node_modules_bootstrap_js_src_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../node_modules/bootstrap/js/src/collapse */
    "./node_modules/bootstrap/js/src/collapse.js");
    /* harmony import */


    var _node_modules_bootstrap_js_src_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../node_modules/bootstrap/js/src/dropdown */
    "./node_modules/bootstrap/js/src/dropdown.js");
    /* harmony import */


    var _components_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/main */
    "./src/js/components/main.js");
    /* harmony import */


    var _components_main__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_main__WEBPACK_IMPORTED_MODULE_3__); // import { Collapse } from 'bootstrap';

  }();
  /******/
})();
//# sourceMappingURL=index.js.map
