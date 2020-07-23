var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _BackLayer=_interopRequireDefault(require("./BackLayer.styles"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Backdrop/BackLayer/BackLayer.js";var BackLayer=function(_Component){(0,_inherits2.default)(BackLayer,_Component);function BackLayer(props){var _this;(0,_classCallCheck2.default)(this,BackLayer);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(BackLayer).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"renderBackLayerConcealed",function(){var _this$props=_this.props,backLayerConcealed=_this$props.backLayerConcealed,backRevealed=_this$props.backRevealed,animate=_this$props.animate;if(!backLayerConcealed||backRevealed){return null;}var md=backRevealed?0:1;var opacity=animate.interpolate({inputRange:[0,0.6,1],outputRange:[1,md,0]});return _react.default.createElement(_reactNative.Animated.View,{style:[_BackLayer.default.backLayer,{opacity:opacity}],useNativeDriver:true,__source:{fileName:_jsxFileName,lineNumber:32}},backLayerConcealed);});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"renderBackLayerRevealed",function(){var _this$props2=_this.props,backLayerRevealed=_this$props2.backLayerRevealed,backRevealed=_this$props2.backRevealed,animate=_this$props2.animate;if(!backLayerRevealed||!backRevealed){return null;}var md=backRevealed?1:0;var opacity=animate.interpolate({inputRange:[0,0.6,1],outputRange:[0,md,1]});return _react.default.createElement(_reactNative.Animated.View,{style:[_BackLayer.default.backLayer,{opacity:opacity}],useNativeDriver:true,__source:{fileName:_jsxFileName,lineNumber:52}},_this.renderBackElements());});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"renderBackElements",function(){var _this$props3=_this.props,backLayerRevealed=_this$props3.backLayerRevealed,internalAnimate=_this$props3.internalAnimate;var opacity=internalAnimate.interpolate({inputRange:[0,0.5,1],outputRange:[1,0,1]});return _react.default.createElement(_reactNative.Animated.View,{style:{flex:1,opacity:opacity},useNativeDriver:true,__source:{fileName:_jsxFileName,lineNumber:69}},backLayerRevealed);});return _this;}(0,_createClass2.default)(BackLayer,[{key:"render",value:function render(){return _react.default.createElement(_react.Fragment,{__source:{fileName:_jsxFileName,lineNumber:77}},this.renderBackLayerConcealed(),this.renderBackLayerRevealed());}}]);return BackLayer;}(_react.Component);(0,_defineProperty2.default)(BackLayer,"propTypes",{backLayerConcealed:_propTypes.default.node,backLayerRevealed:_propTypes.default.node,backRevealed:_propTypes.default.bool,animate:_propTypes.default.object,internalAnimate:_propTypes.default.object});var _default=(0,_withTheme.default)(BackLayer);exports.default=_default;