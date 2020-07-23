var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _SheetSide=_interopRequireDefault(require("./SheetSide.styles"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/SheetSide/SheetSide.android.js";var needsSafeArea=_reactNative.Platform.OS==='ios'&&parseInt(_reactNative.Platform.Version,10);var SheetSide=function(_Component){(0,_inherits2.default)(SheetSide,_Component);function SheetSide(props){var _this;(0,_classCallCheck2.default)(this,SheetSide);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(SheetSide).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{internalVisible:false,animatedPosition:new _reactNative.Animated.Value(0),pan:new _reactNative.Animated.ValueXY(),initialHeight:0,initialWidth:0,fullHeight:0,fullWidth:0});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onMenuLayout",function(e){var _e$nativeEvent$layout=e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;_this.setState({initialWidth:width,initialHeight:height},function(){_this.createPanResponder(_this.props);});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"createPanResponder",function(){var _this$props=_this.props,onSwipeLeft=_this$props.onSwipeLeft,onSwipeRight=_this$props.onSwipeRight,widthPercentage=_this$props.widthPercentage,sheetWidth=_this$props.sheetWidth;var fullWidth=_this.state.fullWidth;var sheetWidthCalculated=_reactNative.Platform.OS=='web'?sheetWidth:fullWidth*widthPercentage;_this.panResponder=_reactNative.PanResponder.create({onStartShouldSetPanResponder:function onStartShouldSetPanResponder(){return true;},onPanResponderRelease:function onPanResponderRelease(e,gestureState){if(sheetWidthCalculated/4-gestureState.dy<0){if(onSwipeLeft)onSwipeLeft();}else if(sheetWidthCalculated/4+gestureState.dy>0){if(onSwipeRight)onSwipeRight();}}});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"_close",function(){_this.animateSheet(false);});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"_onBackdropPress",function(){var onBackdropPress=_this.props.onBackdropPress;if(onBackdropPress)onBackdropPress();});_this.createPanResponder(_this.props);return _this;}(0,_createClass2.default)(SheetSide,[{key:"componentDidMount",value:function componentDidMount(){var _this$props2=this.props,visible=_this$props2.visible,pageHeight=_this$props2.pageHeight,pageWidth=_this$props2.pageWidth,side=_this$props2.side;var pan=this.state.pan;if(visible){this._open();}this.createPanResponder(this.props);var width=_reactNative.Dimensions.get('window').width;pan.setValue({x:side=='left'?-width:width,y:0});this.setState({fullHeight:pageHeight?pageHeight:_reactNative.Dimensions.get('window').height,fullWidth:pageWidth?pageWidth:width});}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var visible=this.props.visible;if(visible!=prevProps.visible){if(visible){this._open();}else{this._close();}}}},{key:"animateSheet",value:function animateSheet(visible){var _this2=this;var _this$props3=this.props,duration=_this$props3.duration,widthPercentage=_this$props3.widthPercentage,side=_this$props3.side,sheetWidth=_this$props3.sheetWidth;var _this$state=this.state,fullWidth=_this$state.fullWidth,pan=_this$state.pan;var openValue=_reactNative.Platform.OS=='web'?fullWidth-sheetWidth:fullWidth*(1-widthPercentage);var closeValue=fullWidth;if(side=='left'){openValue=0;closeValue=-closeValue;}if(visible){this.setState({internalVisible:true},function(){_reactNative.Animated.timing(pan,{useNativeDriver:true,toValue:{x:openValue,y:0},duration:duration}).start();});}else{_reactNative.Animated.timing(pan,{useNativeDriver:true,toValue:{x:closeValue,y:0},duration:duration}).start(function(){_this2.setState({internalVisible:false});});}}},{key:"_open",value:function _open(){this.animateSheet(true);}},{key:"_handlePlatform",value:function _handlePlatform(){var internalVisible=this.state.internalVisible;return _react.default.createElement(_reactNative.Modal,{transparent:true,animationType:'none',visible:internalVisible,onRequestClose:this._close,__source:{fileName:_jsxFileName,lineNumber:183}},this._handleSafeView());}},{key:"_handleSafeView",value:function _handleSafeView(){var fullWidth=this.state.fullWidth;if(needsSafeArea){return _react.default.createElement(_reactNative.SafeAreaView,{style:[_SheetSide.default.safeAreaView,{backgroundColor:'transparent',width:fullWidth,height:'100%'}],__source:{fileName:_jsxFileName,lineNumber:197}},this._renderContent());}else{return this._renderContent();}}},{key:"_renderContent",value:function _renderContent(){var _this$props4=this.props,children=_this$props4.children,wrapperStyles=_this$props4.wrapperStyles,style=_this$props4.style,widthPercentage=_this$props4.widthPercentage,testID=_this$props4.testID,sheetWidth=_this$props4.sheetWidth;var _this$state2=this.state,pan=_this$state2.pan,fullWidth=_this$state2.fullWidth;return _react.default.createElement(_reactNative.View,{style:[_SheetSide.default.wrapper,wrapperStyles],testID:testID,__source:{fileName:_jsxFileName,lineNumber:226}},_react.default.createElement(_reactNative.TouchableOpacity,{style:_SheetSide.default.mask,activeOpacity:1,onPress:this._onBackdropPress,__source:{fileName:_jsxFileName,lineNumber:227}}),_react.default.createElement(_reactNative.Animated.View,(0,_extends2.default)({useNativeDriver:true},this.panResponder.panHandlers,{style:[_SheetSide.default.container,style,{height:'100%',width:_reactNative.Platform.OS=='web'?sheetWidth:fullWidth*widthPercentage,transform:[{translateX:pan.x}]}],__source:{fileName:_jsxFileName,lineNumber:233}}),_react.default.createElement(_reactNative.View,{onLayout:this.onMenuLayout,__source:{fileName:_jsxFileName,lineNumber:247}},children)));}},{key:"render",value:function render(){return this._handlePlatform();}}]);return SheetSide;}(_react.Component);(0,_defineProperty2.default)(SheetSide,"propTypes",{duration:_propTypes.default.number,onBackdropPress:_propTypes.default.func,onSwipeLeft:_propTypes.default.func,onSwipeRight:_propTypes.default.func,children:_propTypes.default.node,wrapperStyles:_propTypes.default.object,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),visible:_propTypes.default.bool,pageWidth:_propTypes.default.number,pageHeight:_propTypes.default.number,widthPercentage:_propTypes.default.number,side:_propTypes.default.string,testID:_propTypes.default.string,sheetWidth:_propTypes.default.number});(0,_defineProperty2.default)(SheetSide,"defaultProps",{duration:200,widthPercentage:0.8,side:'right',sheetWidth:300});var _default=SheetSide;exports.default=_default;