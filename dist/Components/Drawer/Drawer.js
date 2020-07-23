var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _Drawer=_interopRequireDefault(require("./Drawer.styles"));var _shadow=_interopRequireDefault(require("../../Utils/Shadow/shadow.js"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Drawer/Drawer.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var needsSafeAreaDefault=_reactNative.Platform.OS==='ios'&&parseInt(_reactNative.Platform.Version,10);var Drawer=function(_PureComponent){(0,_inherits2.default)(Drawer,_PureComponent);function Drawer(props){var _this;(0,_classCallCheck2.default)(this,Drawer);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Drawer).call(this,props));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{screenWidth:_reactNative.Dimensions.get('window').width,screenHeight:_reactNative.Dimensions.get('window').height,drawerWidth:240,expanded:false,backdropFade:new _reactNative.Animated.Value(0),leftOffset:new _reactNative.Animated.Value(0),appbarHeight:0,appbarWidth:0});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"openDrawer",function(){var _this$state=_this.state,drawerWidth=_this$state.drawerWidth,leftOffset=_this$state.leftOffset,backdropFade=_this$state.backdropFade;var _this$props=_this.props,animationTime=_this$props.animationTime,scrimOpacity=_this$props.scrimOpacity;_reactNative.Animated.parallel([_reactNative.Animated.timing(leftOffset,{toValue:drawerWidth,duration:animationTime,useNativeDriver:true}),_reactNative.Animated.timing(backdropFade,{toValue:scrimOpacity,duration:animationTime,useNativeDriver:true})]).start();});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"closeDrawer",function(){var animationTime=_this.props.animationTime;var _this$state2=_this.state,backdropFade=_this$state2.backdropFade,leftOffset=_this$state2.leftOffset;_reactNative.Animated.parallel([_reactNative.Animated.timing(leftOffset,{toValue:0,duration:animationTime,useNativeDriver:true}),_reactNative.Animated.timing(backdropFade,{toValue:0,duration:animationTime,useNativeDriver:true})]).start();});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"_onAppbarLayout",function(e){var _e$nativeEvent$layout=e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;_this.setState({appbarWidth:width,appbarHeight:height});});return _this;}(0,_createClass2.default)(Drawer,[{key:"componentDidMount",value:function componentDidMount(){var _this$props2=this.props,pageWidth=_this$props2.pageWidth,pageHeight=_this$props2.pageHeight,widthPercentage=_this$props2.widthPercentage,width=_this$props2.width;var screenWidth=_reactNative.Platform.OS=='web'?'100%':_reactNative.Dimensions.get('window').width;var screenHeight=_reactNative.Dimensions.get('window').height;if(pageWidth)screenWidth=pageWidth;if(pageHeight)screenHeight=pageHeight;var drawerWidth=_reactNative.Platform.OS=='web'?this.state.drawerWidth:screenWidth*(widthPercentage||0.45);if(width)drawerWidth=width;this.setState({screenWidth:screenWidth,screenHeight:screenHeight,drawerWidth:drawerWidth});}},{key:"componentDidUpdate",value:function componentDidUpdate(){var open=this.props.open;if(open){this.openDrawer();}else{this.closeDrawer();}}},{key:"_renderAppBar",value:function _renderAppBar(){var appbar=this.props.appbar;return _react.default.createElement(_reactNative.View,{style:{zIndex:1200},onLayout:this._onAppbarLayout,__source:{fileName:_jsxFileName,lineNumber:162}},appbar);}},{key:"_renderScrim",value:function _renderScrim(){var _this$props3=this.props,open=_this$props3.open,scrim=_this$props3.scrim,scrimColor=_this$props3.scrimColor,type=_this$props3.type,scrimStyles=_this$props3.scrimStyles;var _this$state3=this.state,backdropFade=_this$state3.backdropFade,screenWidth=_this$state3.screenWidth,screenHeight=_this$state3.screenHeight,appbarHeight=_this$state3.appbarHeight;var scrimColorImplemented=type=='push'?'transparent':'black';if(scrimColor)scrimColorImplemented=scrimColor;return _react.default.createElement(_reactNative.Animated.View,{useNativeDriver:true,style:[_Drawer.default.container,{backgroundColor:scrim?scrimColorImplemented:'transparent',opacity:backdropFade,zIndex:open?10:0,width:screenWidth,height:screenHeight,top:appbarHeight,position:_reactNative.Platform.OS=='web'?'fixed':'absolute'},scrimStyles],__source:{fileName:_jsxFileName,lineNumber:180}},_react.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:this.props.onClose,__source:{fileName:_jsxFileName,lineNumber:195}},_react.default.createElement(_reactNative.View,{style:[_Drawer.default.container,{width:screenWidth,height:screenHeight,backgroundColor:scrim?scrimColorImplemented:'transparent'}],__source:{fileName:_jsxFileName,lineNumber:196}})));}},{key:"_renderAppContent",value:function _renderAppContent(){var _this$props4=this.props,children=_this$props4.children,appbar=_this$props4.appbar,type=_this$props4.type,open=_this$props4.open,contentContainerStyle=_this$props4.contentContainerStyle;var _this$state4=this.state,leftOffset=_this$state4.leftOffset,drawerWidth=_this$state4.drawerWidth;var isPush=type=='push';var isPermanent=type=='permanent';if(isPush||isPermanent){return _react.default.createElement(_reactNative.View,{style:contentContainerStyle,__source:{fileName:_jsxFileName,lineNumber:220}},appbar?this._renderAppBar():null,_react.default.createElement(_reactNative.Animated.View,{useNativeDriver:true,style:{transform:[{translateX:leftOffset}],flex:1,width:open&&_reactNative.Platform.OS=='web'&&isPermanent?"calc(100% - "+drawerWidth+"px)":'100%'},__source:{fileName:_jsxFileName,lineNumber:222}},children));}return _react.default.createElement(_reactNative.View,{style:[{height:'100%'},contentContainerStyle],__source:{fileName:_jsxFileName,lineNumber:238}},appbar?this._renderAppBar():null,_react.default.createElement(_reactNative.View,{style:{height:'100%'},__source:{fileName:_jsxFileName,lineNumber:240}},children));}},{key:"_renderDrawer",value:function _renderDrawer(){var _this$props5=this.props,drawerContent=_this$props5.drawerContent,type=_this$props5.type,open=_this$props5.open,drawerStyle=_this$props5.drawerStyle,fullHeight=_this$props5.fullHeight,position=_this$props5.position,theme=_this$props5.theme;var _this$state5=this.state,drawerWidth=_this$state5.drawerWidth,screenHeight=_this$state5.screenHeight,leftOffset=_this$state5.leftOffset,appbarHeight=_this$state5.appbarHeight;var isPush=type=='push';var isPermanent=type=='permanent';var offsetDrawerShadow=isPermanent||open?0:5;var shadowImplemented=isPush||isPermanent?(0,_shadow.default)(0):(0,_shadow.default)(16);return _react.default.createElement(_react.Fragment,{__source:{fileName:_jsxFileName,lineNumber:264}},_react.default.createElement(_reactNative.Animated.View,{useNativeDriver:true,style:[theme.drawer,_objectSpread({position:position,width:drawerWidth,left:-drawerWidth-offsetDrawerShadow,top:appbarHeight,height:fullHeight?'100%':screenHeight,transform:[{translateX:leftOffset}]},shadowImplemented),drawerStyle],__source:{fileName:_jsxFileName,lineNumber:265}},drawerContent),isPermanent?null:this._renderScrim(),this._renderAppContent());}},{key:"render",value:function render(){var _this$props6=this.props,style=_this$props6.style,testID=_this$props6.testID,needsSafeArea=_this$props6.needsSafeArea;var screenWidth=this.state.screenWidth;if(needsSafeArea){return _react.default.createElement(_reactNative.SafeAreaView,{style:[_Drawer.default.safeAreaView,{position:'relative',width:screenWidth,overflow:'hidden'},style],__source:{fileName:_jsxFileName,lineNumber:295}},this._renderDrawer());}return _react.default.createElement(_reactNative.View,{style:[_Drawer.default.fullWidthContainer,{position:'relative',width:screenWidth,overflow:'hidden'},style],testID:testID,__source:{fileName:_jsxFileName,lineNumber:307}},this._renderDrawer());}}]);return Drawer;}(_react.PureComponent);(0,_defineProperty2.default)(Drawer,"propTypes",{open:_propTypes.default.bool,onClose:_propTypes.default.func,type:_propTypes.default.string,drawerContent:_propTypes.default.node,children:_propTypes.default.node,animationTime:_propTypes.default.number,pageHeight:_propTypes.default.number,pageWidth:_propTypes.default.number,widthPercentage:_propTypes.default.number,width:_propTypes.default.number,fullHeight:_propTypes.default.bool,position:_propTypes.default.string,needsSafeArea:_propTypes.default.bool,appbar:_propTypes.default.node,scrim:_propTypes.default.bool,scrimColor:_propTypes.default.string,scrimOpacity:_propTypes.default.number,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),contentContainerStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),drawerStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),scrimStyles:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),testID:_propTypes.default.string,theme:_propTypes.default.object});(0,_defineProperty2.default)(Drawer,"defaultProps",{open:false,animationTime:200,scrimOpacity:0.4,scrim:true,type:'modal',position:'absolute',needsSafeArea:needsSafeAreaDefault});var _default=(0,_withTheme.default)(Drawer);exports.default=_default;