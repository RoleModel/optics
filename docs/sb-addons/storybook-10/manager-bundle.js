try{
(()=>{var Qe=__STORYBOOK_API__,{ActiveTabs:Xe,Consumer:Ve,ManagerContext:et,Provider:tt,addons:Z,combineParameters:rt,controlOrMetaKey:at,controlOrMetaSymbol:nt,eventMatchesShortcut:ot,eventToShortcut:it,isMacLike:st,isShortcutTaken:lt,keyToSymbol:pt,merge:dt,mockChannel:ft,optionOrAltSymbol:ut,shortcutMatchesShortcut:ct,shortcutToHumanString:ht,types:gt,useAddonState:mt,useArgTypes:bt,useArgs:yt,useChannel:vt,useGlobalTypes:Ct,useGlobals:xt,useParameter:Ft,useSharedState:wt,useStoryPrepared:St,useStorybookApi:Pt,useStorybookState:kt}=__STORYBOOK_API__;var N=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof window<"u"?e=window:typeof self<"u"?e=self:e={},e})();var Et=__STORYBOOK_CLIENT_LOGGER__,{deprecate:Ht,logger:G,once:zt,pretty:At}=__STORYBOOK_CLIENT_LOGGER__;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},v.apply(this,arguments)}function ae(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},C(e,t)}function ne(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,C(e,t)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(e)}function oe(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function ie(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S(e,t,r){return ie()?S=Reflect.construct.bind():S=function(a,n,o){var i=[null];i.push.apply(i,n);var l=Function.bind.apply(a,i),p=new l;return o&&C(p,o.prototype),p},S.apply(null,arguments)}function A(e){var t=typeof Map=="function"?new Map:void 0;return A=function(r){if(r===null||!oe(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,a)}function a(){return S(r,arguments,z(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),C(a,r)},A(e)}var se={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function le(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],n=[],o;for(o=1;o<t.length;o+=1)n.push(t[o]);return n.forEach(function(i){a=a.replace(/%[a-z]/,i)}),a}var f=function(e){ne(t,e);function t(r){for(var a,n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return a=e.call(this,le.apply(void 0,[se[r]].concat(o)))||this,ae(a)}return t}(A(Error));function j(e){return Math.round(e*255)}function pe(e,t,r){return j(e)+","+j(t)+","+j(r)}function x(e,t,r,a){if(a===void 0&&(a=pe),t===0)return a(r,r,r);var n=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,i=o*(1-Math.abs(n%2-1)),l=0,p=0,d=0;n>=0&&n<1?(l=o,p=i):n>=1&&n<2?(l=i,p=o):n>=2&&n<3?(p=o,d=i):n>=3&&n<4?(p=i,d=o):n>=4&&n<5?(l=i,d=o):n>=5&&n<6&&(l=o,d=i);var b=r-o/2,y=l+b,u=p+b,M=d+b;return a(y,u,M)}var Y={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function de(e){if(typeof e!="string")return e;var t=e.toLowerCase();return Y[t]?"#"+Y[t]:e}var fe=/^#[a-fA-F0-9]{6}$/,ue=/^#[a-fA-F0-9]{8}$/,ce=/^#[a-fA-F0-9]{3}$/,he=/^#[a-fA-F0-9]{4}$/,B=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,ge=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,me=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,be=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function T(e){if(typeof e!="string")throw new f(3);var t=de(e);if(t.match(fe))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(ue)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(ce))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(he)){var a=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:a}}var n=B.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var o=ge.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var i=me.exec(t);if(i){var l=parseInt(""+i[1],10),p=parseInt(""+i[2],10)/100,d=parseInt(""+i[3],10)/100,b="rgb("+x(l,p,d)+")",y=B.exec(b);if(!y)throw new f(4,t,b);return{red:parseInt(""+y[1],10),green:parseInt(""+y[2],10),blue:parseInt(""+y[3],10)}}var u=be.exec(t.substring(0,50));if(u){var M=parseInt(""+u[1],10),te=parseInt(""+u[2],10)/100,re=parseInt(""+u[3],10)/100,q="rgb("+x(M,te,re)+")",w=B.exec(q);if(!w)throw new f(4,t,q);return{red:parseInt(""+w[1],10),green:parseInt(""+w[2],10),blue:parseInt(""+w[3],10),alpha:parseFloat(""+u[4])>1?parseFloat(""+u[4])/100:parseFloat(""+u[4])}}throw new f(5)}function ye(e){var t=e.red/255,r=e.green/255,a=e.blue/255,n=Math.max(t,r,a),o=Math.min(t,r,a),i=(n+o)/2;if(n===o)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var l,p=n-o,d=i>.5?p/(2-n-o):p/(n+o);switch(n){case t:l=(r-a)/p+(r<a?6:0);break;case r:l=(a-t)/p+2;break;default:l=(t-r)/p+4;break}return l*=60,e.alpha!==void 0?{hue:l,saturation:d,lightness:i,alpha:e.alpha}:{hue:l,saturation:d,lightness:i}}function W(e){return ye(T(e))}var ve=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},D=ve;function m(e){var t=e.toString(16);return t.length===1?"0"+t:t}function R(e){return m(Math.round(e*255))}function Ce(e,t,r){return D("#"+R(e)+R(t)+R(r))}function k(e,t,r){return x(e,t,r,Ce)}function xe(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return k(e,t,r);if(typeof e=="object"&&t===void 0&&r===void 0)return k(e.hue,e.saturation,e.lightness);throw new f(1)}function Fe(e,t,r,a){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?k(e,t,r):"rgba("+x(e,t,r)+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?k(e.hue,e.saturation,e.lightness):"rgba("+x(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new f(2)}function L(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return D("#"+m(e)+m(t)+m(r));if(typeof e=="object"&&t===void 0&&r===void 0)return D("#"+m(e.red)+m(e.green)+m(e.blue));throw new f(6)}function F(e,t,r,a){if(typeof e=="string"&&typeof t=="number"){var n=T(e);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?L(e,t,r):"rgba("+e+","+t+","+r+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?L(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new f(7)}var we=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Se=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},Pe=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},ke=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function J(e){if(typeof e!="object")throw new f(8);if(Se(e))return F(e);if(we(e))return L(e);if(ke(e))return Fe(e);if(Pe(e))return xe(e);throw new f(8)}function Q(e,t,r){return function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):Q(e,t,a)}}function I(e){return Q(e,e.length,[])}function _(e,t,r){return Math.max(e,Math.min(t,r))}function Oe(e,t){if(t==="transparent")return t;var r=W(t);return J(v({},r,{lightness:_(0,1,r.lightness-parseFloat(e))}))}var Te=I(Oe),Ie=Te;function _e(e,t){if(t==="transparent")return t;var r=W(t);return J(v({},r,{lightness:_(0,1,r.lightness+parseFloat(e))}))}var Me=I(_e),je=Me;function Be(e,t){if(t==="transparent")return t;var r=T(t),a=typeof r.alpha=="number"?r.alpha:1,n=v({},r,{alpha:_(0,1,(a*100+parseFloat(e)*100)/100)});return F(n)}var Gt=I(Be);function Re(e,t){if(t==="transparent")return t;var r=T(t),a=typeof r.alpha=="number"?r.alpha:1,n=v({},r,{alpha:_(0,1,+(a*100-parseFloat(e)*100).toFixed(2)/100)});return F(n)}var Ee=I(Re),He=Ee,s={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},K={app:"#F6F9FC",bar:s.lightest,content:s.lightest,preview:s.lightest,gridCellSize:10,hoverable:He(.9,s.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},O={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},ze={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:K.app,appContentBg:s.lightest,appPreviewBg:s.lightest,appBorderColor:s.border,appBorderRadius:4,fontBase:O.fonts.base,fontCode:O.fonts.mono,textColor:s.darkest,textInverseColor:s.lightest,textMutedColor:s.dark,barTextColor:s.mediumdark,barHoverColor:s.secondary,barSelectedColor:s.secondary,barBg:s.lightest,buttonBg:K.app,buttonBorder:s.medium,booleanBg:s.mediumlight,booleanSelectedBg:s.lightest,inputBg:s.lightest,inputBorder:s.border,inputTextColor:s.darkest,inputBorderRadius:4},U=ze,Ae={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:s.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:O.fonts.base,fontCode:O.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:"#798186",barHoverColor:s.secondary,barSelectedColor:s.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:s.lightest,inputBorderRadius:4},De=Ae,{window:E}=N;var Le=e=>typeof e!="string"?(G.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,$e=e=>!/(gradient|var|calc)/.test(e),qe=(e,t)=>e==="darken"?F(`${Ie(1,t)}`,.95):e==="lighten"?F(`${je(1,t)}`,.95):t,X=e=>t=>{if(!Le(t)||!$e(t))return t;try{return qe(e,t)}catch{return t}},Yt=X("lighten"),Kt=X("darken"),Ze=()=>!E||!E.matchMedia?"light":E.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",P={light:U,dark:De,normal:U},H=Ze(),$=(e={base:H},t)=>{let r={...P[H],...P[e.base]||{},...e,base:P[e.base]?e.base:H};return{...t,...r,barSelectedColor:e.barSelectedColor||r.colorSecondary}};var V='data:image/svg+xml,<svg width="337" height="60" viewBox="0 0 337 60" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C31.732 44 38 37.732 38 30C38 22.268 31.732 16 24 16C16.268 16 10 22.268 10 30C10 37.732 16.268 44 24 44ZM24 54C37.2548 54 48 43.2548 48 30C48 16.7452 37.2548 6 24 6C10.7452 6 0 16.7452 0 30C0 43.2548 10.7452 54 24 54Z" fill="%23FF7700"/>%0A<path fill-rule="evenodd" clip-rule="evenodd" d="M79.6549 6.41138C82.0063 7.729 82.8366 10.7239 81.5032 13.1118L59.989 51.5952C58.6555 53.9832 55.6728 54.887 53.3214 53.5694C50.9699 52.2518 50.0987 49.1827 51.4321 46.7948L72.9463 8.31137C74.2797 5.9234 77.3034 5.09377 79.6549 6.41138Z" fill="%23FACE0A"/>%0A<path d="M85 30C85 18.6863 85 13.0294 88.5147 9.51471C92.0294 6 97.6863 6 109 6C120.314 6 125.971 6 129.485 9.51471C133 13.0294 133 18.6863 133 30C133 41.3136 133 46.9705 129.485 50.4854C125.971 54 120.314 54 109 54C97.6863 54 92.0294 54 88.5147 50.4854C85 46.9705 85 41.3136 85 30Z" fill="%230868F7"/>%0A<path d="M163.343 49.7101C152.544 49.7101 144 41.4712 144 30.1861C144 18.9009 152.475 10.7313 163.343 10.7313C174.142 10.7313 182.685 18.9009 182.685 30.1861C182.685 41.4712 174.073 49.7101 163.343 49.7101ZM163.343 42.0251C169.562 42.0251 174.142 37.1095 174.142 30.2553C174.142 23.4011 169.562 18.4163 163.343 18.4163C157.055 18.4163 152.544 23.4011 152.544 30.2553C152.544 37.1095 157.055 42.0251 163.343 42.0251Z" fill="%23010814"/>%0A<path d="M206.829 10.7313C217.218 10.7313 225.488 19.1086 225.488 30.1861C225.488 41.2635 217.286 49.7101 206.76 49.7101C201.908 49.7101 197.738 47.9792 195.141 45.0714V60H186.939V11.5621H194.663V16.27C197.192 12.8083 201.634 10.7313 206.829 10.7313ZM206.008 42.0251C212.297 42.0251 216.944 37.0402 216.944 30.2553C216.944 23.4011 212.297 18.4163 206.008 18.4163C199.652 18.4163 195.141 23.3319 195.141 30.2553C195.141 37.1095 199.652 42.0251 206.008 42.0251Z" fill="%23010814"/>%0A<path d="M245.705 49.2947C237.435 49.2947 232.787 44.5868 232.787 36.3479V19.0394H226.089V11.5621H227.182C230.736 11.5621 232.787 9.55431 232.787 5.95413V0H240.989V11.5621H249.737V19.0394H240.989V36.3479C240.989 39.5327 242.287 42.5097 247.482 42.5097C248.165 42.5097 249.054 42.4405 249.942 42.302V48.9485C248.644 49.1562 247.003 49.2947 245.705 49.2947Z" fill="%23010814"/>%0A<path d="M255.668 9.37257V0.0259606H263.87V9.37257H255.668ZM255.668 48.8793V11.5621H263.87V48.8793H255.668Z" fill="%23010814"/>%0A<path d="M287.701 49.7101C276.902 49.7101 268.768 41.3328 268.768 30.1861C268.768 19.0394 276.833 10.7313 287.701 10.7313C295.492 10.7313 301.917 15.1623 304.173 21.4626L297.064 25.0627C295.629 21.0472 292.143 18.4163 287.701 18.4163C281.686 18.4163 277.312 23.3319 277.312 30.2553C277.312 37.0402 281.686 42.0251 287.701 42.0251C292.212 42.0251 295.629 39.4634 297.064 35.3786L304.173 39.048C301.986 45.1406 295.561 49.7101 287.701 49.7101Z" fill="%23010814"/>%0A<path d="M322.667 49.7101C315.012 49.7101 308.724 45.7637 306.4 39.2557L312.756 36.1402C314.67 40.5712 318.292 42.9251 322.667 42.9251C326.358 42.9251 328.75 41.1943 328.75 38.6326C328.75 36.071 326.153 34.9632 323.897 34.3401L317.609 32.6785C311.184 30.8784 307.972 27.0705 307.972 22.0164C307.972 15.3007 313.508 10.7313 321.641 10.7313C328.886 10.7313 334.628 14.4007 336.883 20.3548L330.458 23.4011C329.092 19.8702 325.811 17.7239 321.641 17.7239C318.224 17.7239 316.105 19.3163 316.105 21.6703C316.105 24.0242 318.429 25.2012 320.548 25.8243L327.109 27.6936C333.466 29.4937 336.883 33.2324 336.883 38.4249C336.883 45.1406 331.074 49.7101 322.667 49.7101Z" fill="%23010814"/>%0A</svg>%0A';var ee=$({base:"light",brandTitle:"Optics, a RoleModel Design System",brandUrl:"https://docs.optics.rolemodel.design/",brandImage:V,brandTarget:"_self",colorprimary:"#333333",colorSecondary:"#336CC1"});Z.setConfig({enableShortcuts:!1,theme:ee,toolbar:{fullscreen:{hidden:!0},outline:{hidden:!0},zoom:{hidden:!0},measure:{hidden:!0},backgrounds:{hidden:!0},viewport:{hidden:!0},grid:{hidden:!0}}});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
