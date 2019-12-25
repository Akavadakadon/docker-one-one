var head = function(t) {
function e(e) {
for (var n, i, o = e[0], s = e[1], a = 0, c = []; a < o.length; a++) i = o[a], r[i] && c.push(r[i][0]), 
r[i] = 0;
for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
for (u && u(e); c.length; ) c.shift()();
}
var n = {}, r = {
3: 0
};
function i(e) {
if (n[e]) return n[e].exports;
var r = n[e] = {
i: e,
l: !1,
exports: {}
};
return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
}
i.e = function(t) {
var e = [], n = r[t];
if (0 !== n) if (n) e.push(n[2]); else {
var o = new Promise(function(e, i) {
n = r[t] = [ e, i ];
});
e.push(n[2] = o);
var s, a = document.getElementsByTagName("head")[0], u = document.createElement("script");
u.charset = "utf-8", u.timeout = 120, i.nc && u.setAttribute("nonce", i.nc), u.src = function(t) {
return i.p + "" + ({
31: "authClient",
34: "vendors~authClient"
}[t] || t) + "-" + t + ".9c7e9a3021e04e850839.js";
}(t), s = function(e) {
u.onerror = u.onload = null, clearTimeout(c);
var n = r[t];
if (0 !== n) {
if (n) {
var i = e && ("load" === e.type ? "missing" : e.type), o = e && e.target && e.target.src, s = new Error("Loading chunk " + t + " failed.\n(" + i + ": " + o + ")");
s.type = i, s.request = o, n[1](s);
}
r[t] = void 0;
}
};
var c = setTimeout(function() {
s({
type: "timeout",
target: u
});
}, 12e4);
u.onerror = u.onload = s, a.appendChild(u);
}
return Promise.all(e);
}, i.m = t, i.c = n, i.d = function(t, e, n) {
i.o(t, e) || Object.defineProperty(t, e, {
enumerable: !0,
get: n
});
}, i.r = function(t) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(t, "__esModule", {
value: !0
});
}, i.t = function(t, e) {
if (1 & e && (t = i(t)), 8 & e) return t;
if (4 & e && "object" == typeof t && t && t.__esModule) return t;
var n = Object.create(null);
if (i.r(n), Object.defineProperty(n, "default", {
enumerable: !0,
value: t
}), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function(e) {
return t[e];
}.bind(null, r));
return n;
}, i.n = function(t) {
var e = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
return i.d(e, "a", e), e;
}, i.o = function(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}, i.p = "/pack/", i.oe = function(t) {
throw t;
};
var o = window.webpackJsonp_name_ = window.webpackJsonp_name_ || [], s = o.push.bind(o);
o.push = e, o = o.slice();
for (var a = 0; a < o.length; a++) e(o[a]);
var u = s;
return i(i.s = 294);
}({
0: function(t, e) {
t.exports = {
lang: "ru",
currency: {
code: "RUB",
sign: "₽"
},
env: "production",
ordersMail: "orders@javascript.info",
providers: [ {
name: "Facebook",
id: "facebook"
}, {
name: "Google+",
id: "google"
}, {
name: "Вконтакте",
id: "vkontakte"
}, {
name: "Github",
id: "github"
}, {
name: "Яндекс",
id: "yandex"
} ],
stripeKey: "pk_live_ukCHHaAAUHELtXYFa9EwbROW"
};
},
136: function(t, e) {
function n() {
var t = document.querySelector(".page-wrapper");
document.querySelector(".page").classList.toggle("page_sidebar_on"), t && t.classList.toggle("page-wrapper_sidebar_on"), 
document.querySelector(".page").classList.contains("page_sidebar_on") ? delete localStorage.noSidebar : localStorage.noSidebar = 1;
}
document.addEventListener("click", function(t) {
if (!t.target.hasAttribute("data-sidebar-toggle")) return;
n();
}), document.addEventListener("keydown", function(t) {
if (document.activeElement && ~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) return;
if (t.keyCode != "S".charCodeAt(0)) return;
if (~navigator.userAgent.toLowerCase().indexOf("mac os x")) {
if (!t.metaKey || !t.altKey) return;
} else if (!t.altKey) return;
n(), t.preventDefault();
}), function() {
function t() {
var t = document.getElementsByClassName("sidebar__navigation-link_active");
t[0] && t[0].classList.remove("sidebar__navigation-link_active");
var e, n = document.getElementsByTagName("h2");
for (e = 0; e < n.length; e++) {
var r = n[e];
if (r.getBoundingClientRect().top > 1) break;
}
if (--e >= 0) {
var i = n[e].firstElementChild && n[e].firstElementChild.getAttribute("href"), o = document.querySelector('.sidebar__navigation-link a[href="' + i + '"]');
i && o && o.classList.add("sidebar__navigation-link_active");
}
}
document.addEventListener("DOMContentLoaded", function() {
t(), window.addEventListener("scroll", t);
});
}();
},
148: function(t, e) {
var n = new Intl.DateTimeFormat([], {
timeZoneName: "short"
}).formatToParts;
t.exports = function() {
if (n) return new Intl.DateTimeFormat([], {
timeZoneName: "short"
}).formatToParts(new Date()).find(function(t) {
return "timeZoneName" == t.type;
}).value;
var t = -new Date().getTimezoneOffset(), e = new Date().toLocaleTimeString([], {
timeZoneName: "short"
}).split(" ");
return e[0].match(/[+-]/) ? e = e[0] : e[e.length - 1].match(/[+-]/) ? e = e[e.length - 1] : e[e.length - 1].match(/[A-Z]{2,}/) ? e = e[e.length - 1] : (e = "GMT", 
t > 0 && (e += "+" + t / 60), t < 0 && (e += "-" + -t / 60)), e;
};
},
16: function(t, e, n) {
var r = n(96), i = n(289), o = n(330), s = n(291), a = n(338), u = function t(e, n, u) {
var c, l, d, f, h = e & t.F, m = e & t.G, p = e & t.P, y = e & t.B, _ = m ? r : e & t.S ? r[n] || (r[n] = {}) : (r[n] || {}).prototype, g = m ? i : i[n] || (i[n] = {}), v = g.prototype || (g.prototype = {});
for (c in m && (u = n), u) d = ((l = !h && _ && void 0 !== _[c]) ? _ : u)[c], f = y && l ? a(d, r) : p && "function" == typeof d ? a(Function.call, d) : d, 
_ && s(_, c, d, e & t.U), g[c] != d && o(g, c, f), p && v[c] != d && (v[c] = d);
};
r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, 
t.exports = u;
},
2: function(t, e, n) {
"use strict";
function r(t) {
return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
function i(t, e) {
return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return t;
}(t) : e;
}
function o(t) {
return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
return t.__proto__ || Object.getPrototypeOf(t);
})(t);
}
function s(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
writable: !0,
configurable: !0
}
}), e && a(t, e);
}
function a(t, e) {
return (a = Object.setPrototypeOf || function(t, e) {
return t.__proto__ = e, t;
})(t, e);
}
function u(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function c(t, e) {
for (var n = 0; n < e.length; n++) {
var r = e[n];
r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
Object.defineProperty(t, r.key, r);
}
}
function l(t, e, n) {
return e && c(t.prototype, e), n && c(t, n), t;
}
n.r(e), n.d(e, "init", function() {
return h;
}), n.d(e, "Info", function() {
return p;
}), n.d(e, "Warning", function() {
return y;
}), n.d(e, "Success", function() {
return _;
}), n.d(e, "Error", function() {
return g;
});
var d = n(3), f = function() {
function t() {
var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
u(this, t), this.notifications = [], this.verticalSpace = e.verticalSpace || 8;
}
return l(t, [ {
key: "register",
value: function(t) {
var e = this;
this.notifications.unshift(t), setTimeout(function() {
return e.recalculate();
}, 20);
}
}, {
key: "unregister",
value: function(t) {
var e = this.notifications.indexOf(t);
this.notifications.splice(e, 1), this.recalculate();
}
}, {
key: "recalculate",
value: function() {
var t = this, e = this.verticalSpace;
this.notifications.forEach(function(n) {
n.top = e, e += n.height + t.verticalSpace;
});
}
} ]), t;
}();
function h(t) {
window.notificationManager || (window.notificationManager = new f(t));
}
var m = function() {
function t(e, n, r) {
u(this, t);
var i = '<div class="notification notification_popup notification_'.concat(n, '">\n    <div class="notification__content">').concat(e, '</div>\n    <button title="Закрыть" class="notification__close"></button></div>');
switch (document.body.insertAdjacentHTML("beforeEnd", i), this.elem = document.body.lastElementChild, 
r) {
case void 0:
this.timeout = this.TIMEOUT_DEFAULT;
break;

case "slow":
this.timeout = this.TIMEOUT_SLOW;
break;

case "fast":
this.timeout = this.TIMEOUT_FAST;
break;

default:
this.timeout = r;
}
window.notificationManager.register(this), this.setupCloseHandler(), this.setupCloseTimeout();
}
return l(t, [ {
key: "close",
value: function() {
this.elem.parentNode && (this.elem.remove(), window.notificationManager.unregister(this));
}
}, {
key: "setupCloseHandler",
value: function() {
var t = this;
this.delegate(".notification__close", "click", function() {
return t.close();
});
}
}, {
key: "setupCloseTimeout",
value: function() {
var t = this;
this.timeout && setTimeout(function() {
return t.close();
}, this.timeout);
}
}, {
key: "TIMEOUT_DEFAULT",
get: function() {
return 3e3;
}
}, {
key: "TIMEOUT_SLOW",
get: function() {
return 5e3;
}
}, {
key: "TIMEOUT_FAST",
get: function() {
return 1500;
}
}, {
key: "height",
get: function() {
return this.elem.offsetHeight;
}
}, {
key: "top",
set: function(t) {
this.elem.style.transform = "translateY(" + t + "px)";
}
} ]), t;
}();
d.delegateMixin(m.prototype);
var p = function(t) {
function e(t, n) {
return u(this, e), i(this, o(e).call(this, t, "info", n));
}
return s(e, m), e;
}(), y = function(t) {
function e(t, n) {
return u(this, e), i(this, o(e).call(this, t, "warning", n));
}
return s(e, m), e;
}(), _ = function(t) {
function e(t, n) {
return u(this, e), i(this, o(e).call(this, t, "success", n));
}
return s(e, m), e;
}(), g = function(t) {
function e(t, n) {
return u(this, e), i(this, o(e).call(this, t, "error", n));
}
return s(e, m), l(e, [ {
key: "TIMEOUT_DEFAULT",
get: function() {
return 5e3;
}
} ]), e;
}();
},
284: function(t, e) {
function n(t) {
return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
t.exports = function(t) {
return "object" === n(t) ? null !== t : "function" == typeof t;
};
},
285: function(t, e, n) {
var r = n(284);
t.exports = function(t) {
if (!r(t)) throw TypeError(t + " is not an object!");
return t;
};
},
286: function(t, e, n) {
var r = n(432)("wks"), i = n(347), o = n(96).Symbol, s = "function" == typeof o;
(t.exports = function(t) {
return r[t] || (r[t] = s && o[t] || (s ? o : i)("Symbol." + t));
}).store = r;
},
287: function(t, e, n) {
var r = n(285), i = n(458), o = n(344), s = Object.defineProperty;
e.f = n(288) ? Object.defineProperty : function(t, e, n) {
if (r(t), e = o(e, !0), r(n), i) try {
return s(t, e, n);
} catch (t) {}
if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
return "value" in n && (t[e] = n.value), t;
};
},
288: function(t, e, n) {
t.exports = !n(90)(function() {
return 7 != Object.defineProperty({}, "a", {
get: function() {
return 7;
}
}).a;
});
},
289: function(t, e) {
var n = t.exports = {
version: "2.6.5"
};
"number" == typeof __e && (__e = n);
},
290: function(t, e, n) {
var r = n(342), i = Math.min;
t.exports = function(t) {
return t > 0 ? i(r(t), 9007199254740991) : 0;
};
},
291: function(t, e, n) {
var r = n(96), i = n(330), o = n(293), s = n(347)("src"), a = n(73), u = ("" + a).split("toString");
n(289).inspectSource = function(t) {
return a.call(t);
}, (t.exports = function(t, e, n, a) {
var c = "function" == typeof n;
c && (o(n, "name") || i(n, "name", e)), t[e] !== n && (c && (o(n, s) || i(n, s, t[e] ? "" + t[e] : u.join(String(e)))), 
t === r ? t[e] = n : a ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)));
})(Function.prototype, "toString", function() {
return "function" == typeof this && this[s] || a.call(this);
});
},
293: function(t, e) {
var n = {}.hasOwnProperty;
t.exports = function(t, e) {
return n.call(t, e);
};
},
294: function(t, e, n) {
n(295), e.login = n(303), n(304), e.resizeOnload = n(53), n(305), n(306), n(136), 
n(308), n(310), n(311), n(312), n(2).init(), n(313), n(314);
},
295: function(t, e, n) {
n(296), n(302);
},
296: function(t, e, n) {
function r(t) {
if (t.length) {
if (1 === t.length) return "string" == typeof t[0] ? document.createTextNode(t[0]) : t[0];
for (var e, n = document.createDocumentFragment(), r = t.length, i = -1; ++i < r; ) e = t[i], 
n.appendChild("string" == typeof e ? document.createTextNode(e) : e);
return n;
}
throw new Error("DOM Exception 8");
}
var i = {
matches: Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
replace: function() {
this.parentNode && this.parentNode.replaceChild(r(arguments), this);
},
prepend: function() {
this.insertBefore(r(arguments), this.firstChild);
},
append: function() {
this.appendChild(r(arguments));
},
remove: function() {
var t = this.parentNode;
if (t) return t.removeChild(this);
},
before: function() {
this.parentNode && this.parentNode.insertBefore(r(arguments), this);
},
after: function() {
this.parentNode && this.parentNode.insertBefore(r(arguments), this.nextSibling);
},
closest: function(t) {
for (var e = this; e; ) {
if (e.matches && e.matches(t)) return e;
e = e.parentElement;
}
return null;
}
};
for (var o in i) Element.prototype[o] || (Element.prototype[o] = i[o]);
n(297), n(298), n(299), n(300), n(301);
},
297: function(t, e) {
try {
new CustomEvent("IE has CustomEvent, but doesn't support constructor");
} catch (t) {
window.CustomEvent = function(t, e) {
var n;
return e = e || {
bubbles: !1,
cancelable: !1,
detail: void 0
}, (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), 
n;
}, CustomEvent.prototype = Object.create(window.Event.prototype);
}
},
298: function(t, e) {
if (!(document.documentElement.dataset || Object.getOwnPropertyDescriptor(Element.prototype, "dataset") && Object.getOwnPropertyDescriptor(Element.prototype, "dataset").get)) {
var n = {
enumerable: !0,
get: function() {
"use strict";
var t, e, n, r, i, o, s = this.attributes, a = s.length, u = function(t) {
return t.charAt(1).toUpperCase();
}, c = function() {
return this;
}, l = function(t, e) {
return void 0 !== e ? this.setAttribute(t, e) : this.removeAttribute(t);
};
try {
({}).__defineGetter__("test", function() {}), e = {};
} catch (t) {
e = document.createElement("div");
}
for (t = 0; t < a; t++) if ((o = s[t]) && o.name && /^data-\w[\w\-]*$/.test(o.name)) {
n = o.value, i = (r = o.name).substr(5).replace(/-./g, u);
try {
Object.defineProperty(e, i, {
enumerable: this.enumerable,
get: c.bind(n || ""),
set: l.bind(this, r)
});
} catch (t) {
e[i] = n;
}
}
return e;
}
};
try {
Object.defineProperty(Element.prototype, "dataset", n);
} catch (t) {
n.enumerable = !1, Object.defineProperty(Element.prototype, "dataset", n);
}
}
},
299: function(t, e) {
void 0 === document.documentElement.hidden && (document.head.insertAdjacentHTML("beforeEnd", "<style> [hidden] { display: none } </style>"), 
Object.defineProperty(Element.prototype, "hidden", {
set: function(t) {
this.setAttribute("hidden", t);
},
get: function() {
return this.getAttribute("hidden");
}
}));
},
3: function(t, e) {
function n(t, e, n, r, i) {
t.addEventListener(n, function(t) {
var n = function(t, e) {
for (var n = t.target; n; ) {
if (n.matches(e)) return n;
if (n == t.currentTarget) break;
n = n.parentElement;
}
return null;
}(t, e);
t.delegateTarget = n, n && r.call(i || this, t);
});
}
n.delegateMixin = function(t) {
t.delegate = function(t, e, r) {
n(this.elem, t, e, r, this);
};
}, t.exports = n;
},
300: function(t, e) {
var n;
n = 0, window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
var r = new Date().getTime(), i = Math.max(0, 16 - (r - n)), o = window.setTimeout(function() {
t(r + i);
}, i);
return n = r + i, o;
}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
clearTimeout(t);
});
},
301: function(t, e) {
(function() {
"use strict";
var t = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
function e(e) {
var n = t.has(e);
return e = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e), !n && e;
}
function n(t) {
var e = t.isConnected;
if (void 0 !== e) return e;
for (;t && !(t.__CE_isImportDocument || t instanceof Document); ) t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
return !(!t || !(t.__CE_isImportDocument || t instanceof Document));
}
function r(t, e) {
for (;e && e !== t && !e.nextSibling; ) e = e.parentNode;
return e && e !== t ? e.nextSibling : null;
}
function i(t, e, n) {
n = void 0 === n ? new Set() : n;
for (var o = t; o; ) {
if (o.nodeType === Node.ELEMENT_NODE) {
var s = o;
e(s);
var a = s.localName;
if ("link" === a && "import" === s.getAttribute("rel")) {
if ((o = s.import) instanceof Node && !n.has(o)) for (n.add(o), o = o.firstChild; o; o = o.nextSibling) i(o, e, n);
o = r(t, s);
continue;
}
if ("template" === a) {
o = r(t, s);
continue;
}
if (s = s.__CE_shadowRoot) for (s = s.firstChild; s; s = s.nextSibling) i(s, e, n);
}
o = o.firstChild ? o.firstChild : r(t, o);
}
}
function o(t, e, n) {
t[e] = n;
}
function s() {
this.a = new Map(), this.f = new Map(), this.c = [], this.b = !1;
}
function a(t, e) {
t.b = !0, t.c.push(e);
}
function u(t, e) {
t.b && i(e, function(e) {
return c(t, e);
});
}
function c(t, e) {
if (t.b && !e.__CE_patched) {
e.__CE_patched = !0;
for (var n = 0; n < t.c.length; n++) t.c[n](e);
}
}
function l(t, e) {
var n = [];
for (i(e, function(t) {
return n.push(t);
}), e = 0; e < n.length; e++) {
var r = n[e];
1 === r.__CE_state ? t.connectedCallback(r) : h(t, r);
}
}
function d(t, e) {
var n = [];
for (i(e, function(t) {
return n.push(t);
}), e = 0; e < n.length; e++) {
var r = n[e];
1 === r.__CE_state && t.disconnectedCallback(r);
}
}
function f(t, e, n) {
var r = (n = void 0 === n ? {} : n).u || new Set(), o = n.h || function(e) {
return h(t, e);
}, s = [];
if (i(e, function(e) {
if ("link" === e.localName && "import" === e.getAttribute("rel")) {
var n = e.import;
n instanceof Node && (n.__CE_isImportDocument = !0, n.__CE_hasRegistry = !0), n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : e.addEventListener("load", function() {
var n = e.import;
if (!n.__CE_documentLoadHandled) {
n.__CE_documentLoadHandled = !0;
var i = new Set(r);
i.delete(n), f(t, n, {
u: i,
h: o
});
}
});
} else s.push(e);
}, r), t.b) for (e = 0; e < s.length; e++) c(t, s[e]);
for (e = 0; e < s.length; e++) o(s[e]);
}
function h(t, e) {
if (void 0 === e.__CE_state) {
var r = e.ownerDocument;
if ((r.defaultView || r.__CE_isImportDocument && r.__CE_hasRegistry) && (r = t.a.get(e.localName))) {
r.constructionStack.push(e);
var i = r.constructorFunction;
try {
try {
if (new i() !== e) throw Error("The custom element constructor did not produce the element being upgraded.");
} finally {
r.constructionStack.pop();
}
} catch (t) {
throw e.__CE_state = 2, t;
}
if (e.__CE_state = 1, e.__CE_definition = r, r.attributeChangedCallback) for (r = r.observedAttributes, 
i = 0; i < r.length; i++) {
var o = r[i], s = e.getAttribute(o);
null !== s && t.attributeChangedCallback(e, o, null, s, null);
}
n(e) && t.connectedCallback(e);
}
}
}
function m(t) {
var e = document;
this.c = t, this.a = e, this.b = void 0, f(this.c, this.a), "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), 
this.b.observe(this.a, {
childList: !0,
subtree: !0
}));
}
function p(t) {
t.b && t.b.disconnect();
}
function y(t) {
if (t.a) throw Error("Already resolved.");
t.a = void 0, t.b && t.b(void 0);
}
function _(t) {
this.c = !1, this.a = t, this.j = new Map(), this.f = function(t) {
return t();
}, this.b = !1, this.i = [], this.o = new m(t);
}
s.prototype.connectedCallback = function(t) {
var e = t.__CE_definition;
e.connectedCallback && e.connectedCallback.call(t);
}, s.prototype.disconnectedCallback = function(t) {
var e = t.__CE_definition;
e.disconnectedCallback && e.disconnectedCallback.call(t);
}, s.prototype.attributeChangedCallback = function(t, e, n, r, i) {
var o = t.__CE_definition;
o.attributeChangedCallback && -1 < o.observedAttributes.indexOf(e) && o.attributeChangedCallback.call(t, e, n, r, i);
}, m.prototype.f = function(t) {
var e = this.a.readyState;
for ("interactive" !== e && "complete" !== e || p(this), e = 0; e < t.length; e++) for (var n = t[e].addedNodes, r = 0; r < n.length; r++) f(this.c, n[r]);
}, _.prototype.l = function(t, n) {
var r = this;
if (!(n instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
if (!e(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
if (this.a.a.get(t)) throw Error("A custom element with name '" + t + "' has already been defined.");
if (this.c) throw Error("A custom element is already being defined.");
this.c = !0;
try {
var i = function(t) {
var e = o[t];
if (void 0 !== e && !(e instanceof Function)) throw Error("The '" + t + "' callback must be a function.");
return e;
}, o = n.prototype;
if (!(o instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
var s = i("connectedCallback"), a = i("disconnectedCallback"), u = i("adoptedCallback"), c = i("attributeChangedCallback"), l = n.observedAttributes || [];
} catch (t) {
return;
} finally {
this.c = !1;
}
n = {
localName: t,
constructorFunction: n,
connectedCallback: s,
disconnectedCallback: a,
adoptedCallback: u,
attributeChangedCallback: c,
observedAttributes: l,
constructionStack: []
}, function(t, e, n) {
t.a.set(e, n), t.f.set(n.constructorFunction, n);
}(this.a, t, n), this.i.push(n), this.b || (this.b = !0, this.f(function() {
return function(t) {
if (!1 !== t.b) {
t.b = !1;
for (var e = t.i, n = [], r = new Map(), i = 0; i < e.length; i++) r.set(e[i].localName, []);
for (f(t.a, document, {
h: function(e) {
if (void 0 === e.__CE_state) {
var i = e.localName, o = r.get(i);
o ? o.push(e) : t.a.a.get(i) && n.push(e);
}
}
}), i = 0; i < n.length; i++) h(t.a, n[i]);
for (;0 < e.length; ) {
var o = e.shift();
i = o.localName, o = r.get(o.localName);
for (var s = 0; s < o.length; s++) h(t.a, o[s]);
(i = t.j.get(i)) && y(i);
}
}
}(r);
}));
}, _.prototype.h = function(t) {
f(this.a, t);
}, _.prototype.get = function(t) {
if (t = this.a.a.get(t)) return t.constructorFunction;
}, _.prototype.m = function(t) {
if (!e(t)) return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
var n = this.j.get(t);
return n ? n.c : (n = new function() {
var t = this;
this.b = this.a = void 0, this.c = new Promise(function(e) {
t.b = e, t.a && e(t.a);
});
}(), this.j.set(t, n), this.a.a.get(t) && !this.i.some(function(e) {
return e.localName === t;
}) && y(n), n.c);
}, _.prototype.s = function(t) {
p(this.o);
var e = this.f;
this.f = function(n) {
return t(function() {
return e(n);
});
};
}, window.CustomElementRegistry = _, _.prototype.define = _.prototype.l, _.prototype.upgrade = _.prototype.h, 
_.prototype.get = _.prototype.get, _.prototype.whenDefined = _.prototype.m, _.prototype.polyfillWrapFlushCallback = _.prototype.s;
var g = window.Document.prototype.createElement, v = window.Document.prototype.createElementNS, w = window.Document.prototype.importNode, b = window.Document.prototype.prepend, S = window.Document.prototype.append, M = window.DocumentFragment.prototype.prepend, k = window.DocumentFragment.prototype.append, D = window.Node.prototype.cloneNode, E = window.Node.prototype.appendChild, T = window.Node.prototype.insertBefore, Y = window.Node.prototype.removeChild, O = window.Node.prototype.replaceChild, x = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), C = window.Element.prototype.attachShadow, L = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), P = window.Element.prototype.getAttribute, N = window.Element.prototype.setAttribute, j = window.Element.prototype.removeAttribute, A = window.Element.prototype.getAttributeNS, H = window.Element.prototype.setAttributeNS, R = window.Element.prototype.removeAttributeNS, W = window.Element.prototype.insertAdjacentElement, F = window.Element.prototype.insertAdjacentHTML, U = window.Element.prototype.prepend, I = window.Element.prototype.append, G = window.Element.prototype.before, V = window.Element.prototype.after, q = window.Element.prototype.replaceWith, z = window.Element.prototype.remove, Z = window.HTMLElement, B = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), $ = window.HTMLElement.prototype.insertAdjacentElement, J = window.HTMLElement.prototype.insertAdjacentHTML, X = new function() {}();
function K(t, e, r) {
function i(e) {
return function(r) {
for (var i = [], o = 0; o < arguments.length; ++o) i[o] = arguments[o];
o = [];
for (var s = [], a = 0; a < i.length; a++) {
var u = i[a];
if (u instanceof Element && n(u) && s.push(u), u instanceof DocumentFragment) for (u = u.firstChild; u; u = u.nextSibling) o.push(u); else o.push(u);
}
for (e.apply(this, i), i = 0; i < s.length; i++) d(t, s[i]);
if (n(this)) for (i = 0; i < o.length; i++) (s = o[i]) instanceof Element && l(t, s);
};
}
void 0 !== r.g && (e.prepend = i(r.g)), void 0 !== r.append && (e.append = i(r.append));
}
var Q, tt = window.customElements;
if (!tt || tt.forcePolyfill || "function" != typeof tt.define || "function" != typeof tt.get) {
var et = new s();
Q = et, window.HTMLElement = function() {
function t() {
var t = this.constructor, e = Q.f.get(t);
if (!e) throw Error("The custom element being constructed was not registered with `customElements`.");
var n = e.constructionStack;
if (0 === n.length) return n = g.call(document, e.localName), Object.setPrototypeOf(n, t.prototype), 
n.__CE_state = 1, n.__CE_definition = e, c(Q, n), n;
var r = n[e = n.length - 1];
if (r === X) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
return n[e] = X, Object.setPrototypeOf(r, t.prototype), c(Q, r), r;
}
return t.prototype = Z.prototype, Object.defineProperty(t.prototype, "constructor", {
writable: !0,
configurable: !0,
enumerable: !1,
value: t
}), t;
}(), function() {
var t = et;
o(Document.prototype, "createElement", function(e) {
if (this.__CE_hasRegistry) {
var n = t.a.get(e);
if (n) return new n.constructorFunction();
}
return e = g.call(this, e), c(t, e), e;
}), o(Document.prototype, "importNode", function(e, n) {
return e = w.call(this, e, !!n), this.__CE_hasRegistry ? f(t, e) : u(t, e), e;
}), o(Document.prototype, "createElementNS", function(e, n) {
if (this.__CE_hasRegistry && (null === e || "http://www.w3.org/1999/xhtml" === e)) {
var r = t.a.get(n);
if (r) return new r.constructorFunction();
}
return e = v.call(this, e, n), c(t, e), e;
}), K(t, Document.prototype, {
g: b,
append: S
});
}(), K(et, DocumentFragment.prototype, {
g: M,
append: k
}), function() {
function t(t, r) {
Object.defineProperty(t, "textContent", {
enumerable: r.enumerable,
configurable: !0,
get: r.get,
set: function(t) {
if (this.nodeType === Node.TEXT_NODE) r.set.call(this, t); else {
var i = void 0;
if (this.firstChild) {
var o = this.childNodes, s = o.length;
if (0 < s && n(this)) {
i = Array(s);
for (var a = 0; a < s; a++) i[a] = o[a];
}
}
if (r.set.call(this, t), i) for (t = 0; t < i.length; t++) d(e, i[t]);
}
}
});
}
var e = et;
o(Node.prototype, "insertBefore", function(t, r) {
if (t instanceof DocumentFragment) {
var i = Array.prototype.slice.apply(t.childNodes);
if (t = T.call(this, t, r), n(this)) for (r = 0; r < i.length; r++) l(e, i[r]);
return t;
}
return i = n(t), r = T.call(this, t, r), i && d(e, t), n(this) && l(e, t), r;
}), o(Node.prototype, "appendChild", function(t) {
if (t instanceof DocumentFragment) {
var r = Array.prototype.slice.apply(t.childNodes);
if (t = E.call(this, t), n(this)) for (var i = 0; i < r.length; i++) l(e, r[i]);
return t;
}
return r = n(t), i = E.call(this, t), r && d(e, t), n(this) && l(e, t), i;
}), o(Node.prototype, "cloneNode", function(t) {
return t = D.call(this, !!t), this.ownerDocument.__CE_hasRegistry ? f(e, t) : u(e, t), 
t;
}), o(Node.prototype, "removeChild", function(t) {
var r = n(t), i = Y.call(this, t);
return r && d(e, t), i;
}), o(Node.prototype, "replaceChild", function(t, r) {
if (t instanceof DocumentFragment) {
var i = Array.prototype.slice.apply(t.childNodes);
if (t = O.call(this, t, r), n(this)) for (d(e, r), r = 0; r < i.length; r++) l(e, i[r]);
return t;
}
i = n(t);
var o = O.call(this, t, r), s = n(this);
return s && d(e, r), i && d(e, t), s && l(e, t), o;
}), x && x.get ? t(Node.prototype, x) : a(e, function(e) {
t(e, {
enumerable: !0,
configurable: !0,
get: function() {
for (var t = [], e = 0; e < this.childNodes.length; e++) t.push(this.childNodes[e].textContent);
return t.join("");
},
set: function(t) {
for (;this.firstChild; ) Y.call(this, this.firstChild);
E.call(this, document.createTextNode(t));
}
});
});
}(), function() {
function t(t, e) {
Object.defineProperty(t, "innerHTML", {
enumerable: e.enumerable,
configurable: !0,
get: e.get,
set: function(t) {
var r = this, o = void 0;
if (n(this) && (o = [], i(this, function(t) {
t !== r && o.push(t);
})), e.set.call(this, t), o) for (var a = 0; a < o.length; a++) {
var c = o[a];
1 === c.__CE_state && s.disconnectedCallback(c);
}
return this.ownerDocument.__CE_hasRegistry ? f(s, this) : u(s, this), t;
}
});
}
function e(t, e) {
o(t, "insertAdjacentElement", function(t, r) {
var i = n(r);
return t = e.call(this, t, r), i && d(s, r), n(t) && l(s, r), t;
});
}
function r(t, e) {
function n(t, e) {
for (var n = []; t !== e; t = t.nextSibling) n.push(t);
for (e = 0; e < n.length; e++) f(s, n[e]);
}
o(t, "insertAdjacentHTML", function(t, r) {
if ("beforebegin" === (t = t.toLowerCase())) {
var i = this.previousSibling;
e.call(this, t, r), n(i || this.parentNode.firstChild, this);
} else if ("afterbegin" === t) i = this.firstChild, e.call(this, t, r), n(this.firstChild, i); else if ("beforeend" === t) i = this.lastChild, 
e.call(this, t, r), n(i || this.firstChild, null); else {
if ("afterend" !== t) throw new SyntaxError("The value provided (" + String(t) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
i = this.nextSibling, e.call(this, t, r), n(this.nextSibling, i);
}
});
}
var s = et;
C && o(Element.prototype, "attachShadow", function(t) {
return this.__CE_shadowRoot = C.call(this, t);
}), L && L.get ? t(Element.prototype, L) : B && B.get ? t(HTMLElement.prototype, B) : a(s, function(e) {
t(e, {
enumerable: !0,
configurable: !0,
get: function() {
return D.call(this, !0).innerHTML;
},
set: function(t) {
var e = "template" === this.localName, n = e ? this.content : this, r = v.call(document, this.namespaceURI, this.localName);
for (r.innerHTML = t; 0 < n.childNodes.length; ) Y.call(n, n.childNodes[0]);
for (t = e ? r.content : r; 0 < t.childNodes.length; ) E.call(n, t.childNodes[0]);
}
});
}), o(Element.prototype, "setAttribute", function(t, e) {
if (1 !== this.__CE_state) return N.call(this, t, e);
var n = P.call(this, t);
N.call(this, t, e), e = P.call(this, t), s.attributeChangedCallback(this, t, n, e, null);
}), o(Element.prototype, "setAttributeNS", function(t, e, n) {
if (1 !== this.__CE_state) return H.call(this, t, e, n);
var r = A.call(this, t, e);
H.call(this, t, e, n), n = A.call(this, t, e), s.attributeChangedCallback(this, e, r, n, t);
}), o(Element.prototype, "removeAttribute", function(t) {
if (1 !== this.__CE_state) return j.call(this, t);
var e = P.call(this, t);
j.call(this, t), null !== e && s.attributeChangedCallback(this, t, e, null, null);
}), o(Element.prototype, "removeAttributeNS", function(t, e) {
if (1 !== this.__CE_state) return R.call(this, t, e);
var n = A.call(this, t, e);
R.call(this, t, e);
var r = A.call(this, t, e);
n !== r && s.attributeChangedCallback(this, e, n, r, t);
}), $ ? e(HTMLElement.prototype, $) : W && e(Element.prototype, W), J ? r(HTMLElement.prototype, J) : F && r(Element.prototype, F), 
K(s, Element.prototype, {
g: U,
append: I
}), function(t) {
function e(e) {
return function(r) {
for (var i = [], o = 0; o < arguments.length; ++o) i[o] = arguments[o];
o = [];
for (var s = [], a = 0; a < i.length; a++) {
var u = i[a];
if (u instanceof Element && n(u) && s.push(u), u instanceof DocumentFragment) for (u = u.firstChild; u; u = u.nextSibling) o.push(u); else o.push(u);
}
for (e.apply(this, i), i = 0; i < s.length; i++) d(t, s[i]);
if (n(this)) for (i = 0; i < o.length; i++) (s = o[i]) instanceof Element && l(t, s);
};
}
var r = Element.prototype;
void 0 !== G && (r.before = e(G)), void 0 !== G && (r.after = e(V)), void 0 !== q && o(r, "replaceWith", function(e) {
for (var r = [], i = 0; i < arguments.length; ++i) r[i] = arguments[i];
i = [];
for (var o = [], s = 0; s < r.length; s++) {
var a = r[s];
if (a instanceof Element && n(a) && o.push(a), a instanceof DocumentFragment) for (a = a.firstChild; a; a = a.nextSibling) i.push(a); else i.push(a);
}
for (s = n(this), q.apply(this, r), r = 0; r < o.length; r++) d(t, o[r]);
if (s) for (d(t, this), r = 0; r < i.length; r++) (o = i[r]) instanceof Element && l(t, o);
}), void 0 !== z && o(r, "remove", function() {
var e = n(this);
z.call(this), e && d(t, this);
});
}(s);
}(), document.__CE_hasRegistry = !0;
var nt = new _(et);
Object.defineProperty(window, "customElements", {
configurable: !0,
enumerable: !0,
value: nt
});
}
}).call(self);
},
302: function(t, e, n) {
function r(t) {
return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
n(35), String.prototype.startsWith || (String.prototype.startsWith = function(t) {
var e = arguments.length < 2 ? 0 : arguments[1];
return 0 === this.slice(e).indexOf(t);
}), String.prototype.endsWith || (String.prototype.endsWith = function(t) {
var e = arguments.length < 2 ? this.length : arguments[1], n = this.lastIndexOf(t);
return -1 !== n && n === e - t.length;
}), String.prototype.includes || (String.prototype.includes = function(t, e) {
if ("object" === r(t) && t instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
return -1 !== this.indexOf(t, e);
});
},
303: function(t, e, n) {
var r = n(9), i = !0, o = !1, s = void 0;
try {
for (var a, u = document.querySelectorAll("[data-action-login]")[Symbol.iterator](); !(i = (a = u.next()).done); i = !0) {
var c = a.value, l = !0, d = !1, f = void 0;
try {
for (var h, m = c.classList[Symbol.iterator](); !(l = (h = m.next()).done); l = !0) {
var p = h.value;
p.endsWith("_unready") && c.classList.remove(p);
}
} catch (t) {
d = !0, f = t;
} finally {
try {
l || null == m.return || m.return();
} finally {
if (d) throw f;
}
}
}
} catch (t) {
o = !0, s = t;
} finally {
try {
i || null == u.return || u.return();
} finally {
if (o) throw s;
}
}
function y() {
var t = new Modal({
hasClose: !1,
mixClass: "login-modal"
}), e = new r();
t.setContent(e.elem), e.start(), Promise.all([ n.e(34), n.e(31) ]).then(function() {
t.remove(), new (n(47))();
}.bind(null, n)).catch(n.oe);
}
document.addEventListener("click", function(t) {
t.target.hasAttribute("data-action-login") && (t.preventDefault(), y());
}), t.exports = y;
},
304: function(t, e) {
function n() {
var t = document.createElement("form");
t.method = "POST", t.action = "/auth/logout?_csrf=" + document.cookie.match(/XSRF-TOKEN=([\w-]+)/)[1], 
document.body.appendChild(t), t.submit();
}
document.addEventListener("click", function(t) {
t.target.hasAttribute("data-action-user-logout") && (t.preventDefault(), n());
}), t.exports = n;
},
305: function(t, e, n) {
var r, i = n(793).loadDisqus, o = n(793).loadDisqusComments, s = n(793).loadDisqusIfVisible;
var a = 840;
function u() {
r || (r = window.requestAnimationFrame(function() {
!function() {
var t = document.querySelector(".sitetoolbar");
if (!t) return;
var e = document.querySelector(".sidebar");
if (e) {
var n = document.querySelector(".page"), r = n.classList.contains("page_profile") && "flex" === getComputedStyle(n).display ? 0 : Math.max(t.getBoundingClientRect().bottom, 0) + "px";
e.style.top = r, function() {
var t = document.querySelector(".sidebar"), e = t.querySelector(".sidebar__content"), n = t.querySelector(".sidebar__inner"), r = t.classList.contains("sidebar_sticky-footer");
if (t.classList.contains("sidebar_compact")) {
(r ? e.lastElementChild.getBoundingClientRect().top - e.lastElementChild.previousElementSibling.getBoundingClientRect().bottom : e.getBoundingClientRect().bottom - e.lastElementChild.getBoundingClientRect().bottom) > 150 && t.classList.remove("sidebar_compact");
} else n.scrollHeight, n.clientHeight, n.scrollHeight > n.clientHeight && t.classList.add("sidebar_compact");
}();
}
i = document.documentElement.clientWidth <= a, o = document.querySelector('meta[name="viewport"]').content, 
o = o.replace(/user-scalable=\w+/, "user-scalable=" + (i ? "yes" : "no")), document.querySelector('meta[name="viewport"]').content = o, 
s();
var i, o;
}(), r = null;
}));
}
function c() {
window.location.hash.match(/#comment-/) && i(), o(), u();
}
window.addEventListener("resize-internal", u), window.addEventListener("scroll", u), 
window.addEventListener("resize", u), "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", c) : c();
},
306: function(t, e) {
document.addEventListener("click", function(t) {
if (!t.target.closest) return;
t.target.closest(i + "__search-toggle") && (n || (r = document.querySelector(i), 
s = r.querySelector(i + "__search-input input"), r.querySelector(i + "__find").onmousedown = function(t) {
e = !0;
}, s.onkeydown = function(t) {
27 == t.keyCode && (this.value = "", o());
}, s.onblur = function(t) {
!e && o();
}, n = !0), o());
var e, r, s;
}), document.addEventListener("click", function(t) {
if (!t.target.closest) return;
var e = t.target.closest("[data-dropdown-toggler]");
if (!e) return;
e.nextElementSibling.style.display = e.nextElementSibling.offsetWidth ? "none" : "block";
}), document.addEventListener("click", function(t) {
if (!t.target.closest) return;
if (!t.target.closest(".sitetoolbar__nav-toggle")) return;
t.target.classList.toggle("sitetoolbar__nav-toggle_active"), document.querySelector(".sitetoolbar").classList.toggle("sitetoolbar_menu_open");
});
var n = !1, r = "sitetoolbar", i = "." + r;
function o() {
var t, e = document.querySelector(i);
e.classList.toggle(r + "_search_open");
var n = e.querySelector(i + "__search-input input");
e.classList.contains(r + "_search_open") ? (n.focus(), (t = document.createElement("div")).className = "search-paranja", 
t.style.top = e.offsetHeight + "px", document.body.appendChild(t), document.body.classList.add("paranja-open")) : ((t = document.querySelector(".search-paranja")).parentNode.removeChild(t), 
document.body.classList.remove("paranja-open"));
}
},
308: function(t, e, n) {
function r() {
var t = document.querySelector('link[rel="next"]');
t && (document.querySelector('a[href="' + t.getAttribute("href") + '"] .page__nav-text-shortcut').innerHTML = 'Ctrl + <span class="page__nav-text-arr">→</span>');
var e = document.querySelector('link[rel="prev"]');
e && (document.querySelector('a[href="' + e.getAttribute("href") + '"] .page__nav-text-shortcut').innerHTML = 'Ctrl + <span class="page__nav-text-arr">←</span>');
}
n(309)(document, {
onRight: function() {
var t = document.querySelector('link[rel="prev"]');
t && (document.location = t.href);
},
onLeft: function() {
var t = document.querySelector('link[rel="next"]');
t && (document.location = t.href);
}
}), document.addEventListener("keydown", function(t) {
if ((!document.activeElement || !~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) && t.ctrlKey) {
var e = null;
switch (t.keyCode) {
case 37:
e = "prev";
break;

case 39:
e = "next";
break;

default:
return;
}
var n = document.querySelector('link[rel="' + e + '"]');
n && (document.location = n.href, t.preventDefault());
}
}), "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", r) : r();
},
309: function(t, e) {
t.exports = function(t, e) {
var n, r, i, o, s, a = (e = e || {}).onRight || function() {}, u = e.onLeft || function() {}, c = e.tolerance || 50, l = e.threshold || 150, d = e.allowedTime || 500;
t.addEventListener("touchstart", function(t) {
var e = t.changedTouches[0];
i = 0, n = e.pageX, r = e.pageY, s = Date.now();
}), t.addEventListener("touchend", function(t) {
var e = t.changedTouches[0];
if (i = e.pageX - n, o = Date.now() - s, !(Math.abs(e.pageY - r) > c || o > d)) {
for (var f = !1, h = t.target; h != document.body; ) {
if (h.scrollWidth > h.clientWidth) {
f = !0;
break;
}
h = h.parentElement;
}
f || (i > l && a(t), i < -l && u(t));
}
});
};
},
310: function(t, e) {
var n;
document.addEventListener("mouseover", function(t) {
if (t.target.closest) {
var e = t.target.closest("[data-add-class-on-hover]") || t.target.closest(".button");
e && (n = e, e.classList.add("hover"));
}
}), document.addEventListener("touchend", function(t) {
setTimeout(function() {
n && (n.classList.remove("hover"), n = null);
}, 500);
}), document.addEventListener("mouseout", function(t) {
n && (n.contains(t.relatedTarget) || (n.classList.remove("hover"), n = null));
}), navigator.userAgent.match(/(iPad|iPhone|iPod)/g) || document.documentElement.classList.add("working-hover");
},
311: function(t, e, n) {
var r = window.location.host, i = n(361);
document.addEventListener("click", function(t) {
if (1 == t.which && !t.defaultPrevented) {
var e = t.target.closest && t.target.closest("a");
if (e && (r != e.host || e.hasAttribute("data-track-outbound")) && ~[ "_self", "_top", "_parent" ].indexOf(e.target) && !(t.shiftKey || t.ctrlKey || t.altKey)) {
t.preventDefault();
var n = e.href;
window.ga("send", "event", {
eventCategory: "outbound",
eventAction: "click",
eventLabel: n,
hitCallback: i(function() {
document.location = n;
})
});
}
}
});
},
312: function(t, e, n) {
var r = n(2);
document.addEventListener("click", function(t) {
var e = t.target.closest("[data-banner-close]");
e && (localStorage["hideBanner" + e.dataset.bannerClose] = 1, new r.Success(e.dataset.bannerCloseMessage), 
e.parentNode.remove());
});
},
313: function(t, e, n) {
function r(t) {
return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
function i(t, e) {
for (var n = 0; n < e.length; n++) {
var r = e[n];
r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
Object.defineProperty(t, r.key, r);
}
}
function o(t, e) {
return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return t;
}(t) : e;
}
function s(t) {
var e = "function" == typeof Map ? new Map() : void 0;
return (s = function(t) {
if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
var n;
if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
if (void 0 !== e) {
if (e.has(t)) return e.get(t);
e.set(t, r);
}
function r() {
return a(t, arguments, c(this).constructor);
}
return r.prototype = Object.create(t.prototype, {
constructor: {
value: r,
enumerable: !1,
writable: !0,
configurable: !0
}
}), u(r, t);
})(t);
}
function a(t, e, n) {
return (a = function() {
if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
if (Reflect.construct.sham) return !1;
if ("function" == typeof Proxy) return !0;
try {
return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
!0;
} catch (t) {
return !1;
}
}() ? Reflect.construct : function(t, e, n) {
var r = [ null ];
r.push.apply(r, e);
var i = new (Function.bind.apply(t, r))();
return n && u(i, n.prototype), i;
}).apply(null, arguments);
}
function u(t, e) {
return (u = Object.setPrototypeOf || function(t, e) {
return t.__proto__ = e, t;
})(t, e);
}
function c(t) {
return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
return t.__proto__ || Object.getPrototypeOf(t);
})(t);
}
var l = n(91), d = n(148), f = function(t) {
function e() {
var t;
return function(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}(this, e), (t = o(this, c(e).call(this))).render(), t;
}
var n, r, a;
return function(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
writable: !0,
configurable: !0
}
}), e && u(t, e);
}(e, s(HTMLElement)), n = e, a = [ {
key: "observedAttributes",
get: function() {
return [ "timestamp", "format", "with-zone", "to", "from" ];
}
} ], (r = [ {
key: "connectedCallback",
value: function() {
this.render();
}
}, {
key: "attributeChangedCallback",
value: function(t, e, n) {
this.render();
}
}, {
key: "format",
value: function(t, e, n) {
var r = l(t).utcOffset(-new Date().getTimezoneOffset()).format(e);
return n && (r += " " + d()), r;
}
}, {
key: "render",
value: function() {
var t = this, e = [ "timestamp", "from", "to", "format" ].map(function(e) {
return t.getAttribute(e);
}).join(":");
if (this.lastParams !== e) if (this.lastParams = e, this.getAttribute("timestamp")) {
if ("{" === this.getAttribute("timestamp")[0]) return;
this.innerHTML = this.format(this.getAttribute("timestamp"), this.getAttribute("format"), this.hasAttribute("with-zone"));
} else {
var n = [];
if ("{" !== this.getAttribute("from")[0] && "{" !== this.getAttribute("to")[0]) {
var r = new Date(this.getAttribute("from")), i = new Date(this.getAttribute("to")), o = this.getAttribute("format"), s = this.getAttribute("format");
r.getFullYear() === i.getFullYear() && (o = o.replace(/ YY(YY)?$/g, "")), r.getFullYear() === i.getFullYear() && r.getMonth() === i.getMonth() && r.getDate() === i.getDate() || n.push(this.format(r, o)), 
n.push(this.format(i, s, this.hasAttribute("with-zone"))), this.innerHTML = n.join(" – ");
}
}
}
} ]) && i(n.prototype, r), a && i(n, a), e;
}();
window.DateLocalElement = f, window.customElements.define("date-local", f);
},
314: function(t, e, n) {
function r(t) {
return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
function i(t, e) {
return function(t) {
if (Array.isArray(t)) return t;
}(t) || function(t, e) {
var n = [], r = !0, i = !1, o = void 0;
try {
for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), 
!e || n.length !== e); r = !0) ;
} catch (t) {
i = !0, o = t;
} finally {
try {
r || null == a.return || a.return();
} finally {
if (i) throw o;
}
}
return n;
}(t, e) || function() {
throw new TypeError("Invalid attempt to destructure non-iterable instance");
}();
}
function o(t, e) {
for (var n = 0; n < e.length; n++) {
var r = e[n];
r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
Object.defineProperty(t, r.key, r);
}
}
function s(t, e) {
return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return t;
}(t) : e;
}
function a(t) {
var e = "function" == typeof Map ? new Map() : void 0;
return (a = function(t) {
if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
var n;
if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
if (void 0 !== e) {
if (e.has(t)) return e.get(t);
e.set(t, r);
}
function r() {
return u(t, arguments, l(this).constructor);
}
return r.prototype = Object.create(t.prototype, {
constructor: {
value: r,
enumerable: !1,
writable: !0,
configurable: !0
}
}), c(r, t);
})(t);
}
function u(t, e, n) {
return (u = function() {
if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
if (Reflect.construct.sham) return !1;
if ("function" == typeof Proxy) return !0;
try {
return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
!0;
} catch (t) {
return !1;
}
}() ? Reflect.construct : function(t, e, n) {
var r = [ null ];
r.push.apply(r, e);
var i = new (Function.bind.apply(t, r))();
return n && c(i, n.prototype), i;
}).apply(null, arguments);
}
function c(t, e) {
return (c = Object.setPrototypeOf || function(t, e) {
return t.__proto__ = e, t;
})(t, e);
}
function l(t) {
return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
return t.__proto__ || Object.getPrototypeOf(t);
})(t);
}
var d = n(91), f = n(148), h = n(315), m = n(0).lang, p = function(t) {
function e() {
var t;
return function(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}(this, e), (t = s(this, l(e).call(this))).render(), t;
}
var n, r, u;
return function(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
writable: !0,
configurable: !0
}
}), e && c(t, e);
}(e, a(HTMLElement)), n = e, u = [ {
key: "observedAttributes",
get: function() {
return [ "weekdays", "format", "with-zone", "to", "from" ];
}
} ], (r = [ {
key: "attributeChangedCallback",
value: function(t, e, n) {
this.render();
}
}, {
key: "connectedCallback",
value: function() {
this.render();
}
}, {
key: "format",
value: function(t, e, n) {
var r = d(t).utcOffset(-new Date().getTimezoneOffset()).format(e);
return n && (r += " " + f()), r;
}
}, {
key: "render",
value: function() {
var t = this;
if ("{" !== this.getAttribute("weekdays")[0]) {
var e = [ "weekdays", "with-zone", "from", "to" ].map(function(e) {
return t.getAttribute(e);
}).join(":");
if (this.lastParams !== e) {
this.lastParams = e;
var n, r = this.getAttribute("weekdays").split(",").map(Number), o = this.getAttribute("from"), s = this.getAttribute("to"), a = i(h(r, o, s, -new Date().getTimezoneOffset()), 3);
r = a[0], o = a[1], s = a[2], n = "ru" === m ? [ "", "пн", "вт", "ср", "чт", "пт", "сб", "вс" ] : [ "", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ], 
r = r.map(function(t) {
return n[t];
}), r = "ru" === m ? r.join("/") : r.join(", ");
var u = this.hasAttribute("with-zone") ? " " + f() : "";
this.innerHTML = r + " " + o + " – " + s + u;
}
}
}
} ]) && o(n.prototype, r), u && o(n, u), e;
}();
window.WeekRangeElement = p, window.customElements.define("week-range", p);
},
315: function(t, e) {
t.exports = function(t, e, n, r) {
r = +r, e.split && (e = e.split(":").map(Number)), n.split && (n = n.split(":").map(Number)), 
e = 60 * e[0] + e[1] + r, n = 60 * n[0] + n[1] + r, e < 0 ? (e += 1440, n += 1440, 
t = t.map(function(t) {
return 1 === t ? 7 : t - 1;
})) : e >= 1440 && (e -= 1440, n -= 1440, t = t.map(function(t) {
return 7 === t ? 1 : t + 1;
})), n > 1440 && (n -= 1440), n < 0 && (n += 1440);
var i = function(t) {
return 0 === t ? "00" : t < 10 ? "0" + t : t;
};
return [ t, e = [ Math.floor(e / 60), e % 60 ].map(i).join(":"), n = [ Math.floor(n / 60), n % 60 ].map(i).join(":") ];
};
},
33: function(t, e, n) {
(function(t) {
var r, i, o;
function s(t) {
return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
o = function() {
"use strict";
var e, r;
function i() {
return e.apply(null, arguments);
}
function o(t) {
return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t);
}
function a(t) {
return null != t && "[object Object]" === Object.prototype.toString.call(t);
}
function u(t) {
return void 0 === t;
}
function c(t) {
return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t);
}
function l(t) {
return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t);
}
function d(t, e) {
var n, r = [];
for (n = 0; n < t.length; ++n) r.push(e(t[n], n));
return r;
}
function f(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}
function h(t, e) {
for (var n in e) f(e, n) && (t[n] = e[n]);
return f(e, "toString") && (t.toString = e.toString), f(e, "valueOf") && (t.valueOf = e.valueOf), 
t;
}
function m(t, e, n, r) {
return xe(t, e, n, r, !0).utc();
}
function p(t) {
return null == t._pf && (t._pf = {
empty: !1,
unusedTokens: [],
unusedInput: [],
overflow: -2,
charsLeftOver: 0,
nullInput: !1,
invalidMonth: null,
invalidFormat: !1,
userInvalidated: !1,
iso: !1,
parsedDateParts: [],
meridiem: null,
rfc2822: !1,
weekdayMismatch: !1
}), t._pf;
}
function y(t) {
if (null == t._isValid) {
var e = p(t), n = r.call(e.parsedDateParts, function(t) {
return null != t;
}), i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), 
null != Object.isFrozen && Object.isFrozen(t)) return i;
t._isValid = i;
}
return t._isValid;
}
function _(t) {
var e = m(NaN);
return null != t ? h(p(e), t) : p(e).userInvalidated = !0, e;
}
r = Array.prototype.some ? Array.prototype.some : function(t) {
for (var e = Object(this), n = e.length >>> 0, r = 0; r < n; r++) if (r in e && t.call(this, e[r], r, e)) return !0;
return !1;
};
var g = i.momentProperties = [];
function v(t, e) {
var n, r, i;
if (u(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), u(e._i) || (t._i = e._i), 
u(e._f) || (t._f = e._f), u(e._l) || (t._l = e._l), u(e._strict) || (t._strict = e._strict), 
u(e._tzm) || (t._tzm = e._tzm), u(e._isUTC) || (t._isUTC = e._isUTC), u(e._offset) || (t._offset = e._offset), 
u(e._pf) || (t._pf = p(e)), u(e._locale) || (t._locale = e._locale), g.length > 0) for (n = 0; n < g.length; n++) u(i = e[r = g[n]]) || (t[r] = i);
return t;
}
var w = !1;
function b(t) {
v(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), 
!1 === w && (w = !0, i.updateOffset(this), w = !1);
}
function S(t) {
return t instanceof b || null != t && null != t._isAMomentObject;
}
function M(t) {
return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
}
function k(t) {
var e = +t, n = 0;
return 0 !== e && isFinite(e) && (n = M(e)), n;
}
function D(t, e, n) {
var r, i = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), s = 0;
for (r = 0; r < i; r++) (n && t[r] !== e[r] || !n && k(t[r]) !== k(e[r])) && s++;
return s + o;
}
function E(t) {
!1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn;
}
function T(t, e) {
var n = !0;
return h(function() {
if (null != i.deprecationHandler && i.deprecationHandler(null, t), n) {
for (var r, o = [], a = 0; a < arguments.length; a++) {
if (r = "", "object" === s(arguments[a])) {
for (var u in r += "\n[" + a + "] ", arguments[0]) r += u + ": " + arguments[0][u] + ", ";
r = r.slice(0, -2);
} else r = arguments[a];
o.push(r);
}
E((Array.prototype.slice.call(o).join(""), new Error().stack)), n = !1;
}
return e.apply(this, arguments);
}, e);
}
var Y, O = {};
function x(t, e) {
null != i.deprecationHandler && i.deprecationHandler(t, e), O[t] || (E(), O[t] = !0);
}
function C(t) {
return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t);
}
function L(t, e) {
var n, r = h({}, t);
for (n in e) f(e, n) && (a(t[n]) && a(e[n]) ? (r[n] = {}, h(r[n], t[n]), h(r[n], e[n])) : null != e[n] ? r[n] = e[n] : delete r[n]);
for (n in t) f(t, n) && !f(e, n) && a(t[n]) && (r[n] = h({}, r[n]));
return r;
}
function P(t) {
null != t && this.set(t);
}
i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, Y = Object.keys ? Object.keys : function(t) {
var e, n = [];
for (e in t) f(t, e) && n.push(e);
return n;
};
var N = {};
function j(t, e) {
var n = t.toLowerCase();
N[n] = N[n + "s"] = N[e] = t;
}
function A(t) {
return "string" == typeof t ? N[t] || N[t.toLowerCase()] : void 0;
}
function H(t) {
var e, n, r = {};
for (n in t) f(t, n) && (e = A(n)) && (r[e] = t[n]);
return r;
}
var R = {};
function W(t, e) {
R[t] = e;
}
function F(t, e, n) {
var r = "" + Math.abs(t), i = e - r.length;
return (t >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r;
}
var U = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, I = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, G = {}, V = {};
function q(t, e, n, r) {
var i = r;
"string" == typeof r && (i = function() {
return this[r]();
}), t && (V[t] = i), e && (V[e[0]] = function() {
return F(i.apply(this, arguments), e[1], e[2]);
}), n && (V[n] = function() {
return this.localeData().ordinal(i.apply(this, arguments), t);
});
}
function z(t, e) {
return t.isValid() ? (e = Z(e, t.localeData()), G[e] = G[e] || function(t) {
var e, n, r, i = t.match(U);
for (e = 0, n = i.length; e < n; e++) V[i[e]] ? i[e] = V[i[e]] : i[e] = (r = i[e]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
return function(e) {
var r, o = "";
for (r = 0; r < n; r++) o += C(i[r]) ? i[r].call(e, t) : i[r];
return o;
};
}(e), G[e](t)) : t.localeData().invalidDate();
}
function Z(t, e) {
var n = 5;
function r(t) {
return e.longDateFormat(t) || t;
}
for (I.lastIndex = 0; n >= 0 && I.test(t); ) t = t.replace(I, r), I.lastIndex = 0, 
n -= 1;
return t;
}
var B = /\d/, $ = /\d\d/, J = /\d{3}/, X = /\d{4}/, K = /[+-]?\d{6}/, Q = /\d\d?/, tt = /\d\d\d\d?/, et = /\d\d\d\d\d\d?/, nt = /\d{1,3}/, rt = /\d{1,4}/, it = /[+-]?\d{1,6}/, ot = /\d+/, st = /[+-]?\d+/, at = /Z|[+-]\d\d:?\d\d/gi, ut = /Z|[+-]\d\d(?::?\d\d)?/gi, ct = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, lt = {};
function dt(t, e, n) {
lt[t] = C(e) ? e : function(t, r) {
return t && n ? n : e;
};
}
function ft(t, e) {
return f(lt, t) ? lt[t](e._strict, e._locale) : new RegExp(ht(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, r, i) {
return e || n || r || i;
})));
}
function ht(t) {
return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var mt = {};
function pt(t, e) {
var n, r = e;
for ("string" == typeof t && (t = [ t ]), c(e) && (r = function(t, n) {
n[e] = k(t);
}), n = 0; n < t.length; n++) mt[t[n]] = r;
}
function yt(t, e) {
pt(t, function(t, n, r, i) {
r._w = r._w || {}, e(t, r._w, r, i);
});
}
function _t(t, e, n) {
null != e && f(mt, t) && mt[t](e, n._a, n, t);
}
var gt = 0, vt = 1, wt = 2, bt = 3, St = 4, Mt = 5, kt = 6, Dt = 7, Et = 8;
function Tt(t) {
return Yt(t) ? 366 : 365;
}
function Yt(t) {
return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
}
q("Y", 0, 0, function() {
var t = this.year();
return t <= 9999 ? "" + t : "+" + t;
}), q(0, [ "YY", 2 ], 0, function() {
return this.year() % 100;
}), q(0, [ "YYYY", 4 ], 0, "year"), q(0, [ "YYYYY", 5 ], 0, "year"), q(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
j("year", "y"), W("year", 1), dt("Y", st), dt("YY", Q, $), dt("YYYY", rt, X), dt("YYYYY", it, K), 
dt("YYYYYY", it, K), pt([ "YYYYY", "YYYYYY" ], gt), pt("YYYY", function(t, e) {
e[gt] = 2 === t.length ? i.parseTwoDigitYear(t) : k(t);
}), pt("YY", function(t, e) {
e[gt] = i.parseTwoDigitYear(t);
}), pt("Y", function(t, e) {
e[gt] = parseInt(t, 10);
}), i.parseTwoDigitYear = function(t) {
return k(t) + (k(t) > 68 ? 1900 : 2e3);
};
var Ot, xt = Ct("FullYear", !0);
function Ct(t, e) {
return function(n) {
return null != n ? (Pt(this, t, n), i.updateOffset(this, e), this) : Lt(this, t);
};
}
function Lt(t, e) {
return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
}
function Pt(t, e, n) {
t.isValid() && !isNaN(n) && ("FullYear" === e && Yt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), Nt(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n));
}
function Nt(t, e) {
if (isNaN(t) || isNaN(e)) return NaN;
var n, r = (e % (n = 12) + n) % n;
return t += (e - r) / 12, 1 === r ? Yt(t) ? 29 : 28 : 31 - r % 7 % 2;
}
Ot = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
var e;
for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
return -1;
}, q("M", [ "MM", 2 ], "Mo", function() {
return this.month() + 1;
}), q("MMM", 0, 0, function(t) {
return this.localeData().monthsShort(this, t);
}), q("MMMM", 0, 0, function(t) {
return this.localeData().months(this, t);
}), j("month", "M"), W("month", 8), dt("M", Q), dt("MM", Q, $), dt("MMM", function(t, e) {
return e.monthsShortRegex(t);
}), dt("MMMM", function(t, e) {
return e.monthsRegex(t);
}), pt([ "M", "MM" ], function(t, e) {
e[vt] = k(t) - 1;
}), pt([ "MMM", "MMMM" ], function(t, e, n, r) {
var i = n._locale.monthsParse(t, r, n._strict);
null != i ? e[vt] = i : p(n).invalidMonth = t;
});
var jt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, At = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
var Ht = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
function Rt(t, e) {
var n;
if (!t.isValid()) return t;
if ("string" == typeof e) if (/^\d+$/.test(e)) e = k(e); else if (!c(e = t.localeData().monthsParse(e))) return t;
return n = Math.min(t.date(), Nt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), 
t;
}
function Wt(t) {
return null != t ? (Rt(this, t), i.updateOffset(this, !0), this) : Lt(this, "Month");
}
var Ft = ct;
var Ut = ct;
function It() {
function t(t, e) {
return e.length - t.length;
}
var e, n, r = [], i = [], o = [];
for (e = 0; e < 12; e++) n = m([ 2e3, e ]), r.push(this.monthsShort(n, "")), i.push(this.months(n, "")), 
o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
for (r.sort(t), i.sort(t), o.sort(t), e = 0; e < 12; e++) r[e] = ht(r[e]), i[e] = ht(i[e]);
for (e = 0; e < 24; e++) o[e] = ht(o[e]);
this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, 
this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
}
function Gt(t) {
var e = new Date(Date.UTC.apply(null, arguments));
return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), 
e;
}
function Vt(t, e, n) {
var r = 7 + e - n;
return -((7 + Gt(t, 0, r).getUTCDay() - e) % 7) + r - 1;
}
function qt(t, e, n, r, i) {
var o, s, a = 1 + 7 * (e - 1) + (7 + n - r) % 7 + Vt(t, r, i);
return a <= 0 ? s = Tt(o = t - 1) + a : a > Tt(t) ? (o = t + 1, s = a - Tt(t)) : (o = t, 
s = a), {
year: o,
dayOfYear: s
};
}
function zt(t, e, n) {
var r, i, o = Vt(t.year(), e, n), s = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
return s < 1 ? r = s + Zt(i = t.year() - 1, e, n) : s > Zt(t.year(), e, n) ? (r = s - Zt(t.year(), e, n), 
i = t.year() + 1) : (i = t.year(), r = s), {
week: r,
year: i
};
}
function Zt(t, e, n) {
var r = Vt(t, e, n), i = Vt(t + 1, e, n);
return (Tt(t) - r + i) / 7;
}
q("w", [ "ww", 2 ], "wo", "week"), q("W", [ "WW", 2 ], "Wo", "isoWeek"), j("week", "w"), 
j("isoWeek", "W"), W("week", 5), W("isoWeek", 5), dt("w", Q), dt("ww", Q, $), dt("W", Q), 
dt("WW", Q, $), yt([ "w", "ww", "W", "WW" ], function(t, e, n, r) {
e[r.substr(0, 1)] = k(t);
});
q("d", 0, "do", "day"), q("dd", 0, 0, function(t) {
return this.localeData().weekdaysMin(this, t);
}), q("ddd", 0, 0, function(t) {
return this.localeData().weekdaysShort(this, t);
}), q("dddd", 0, 0, function(t) {
return this.localeData().weekdays(this, t);
}), q("e", 0, 0, "weekday"), q("E", 0, 0, "isoWeekday"), j("day", "d"), j("weekday", "e"), 
j("isoWeekday", "E"), W("day", 11), W("weekday", 11), W("isoWeekday", 11), dt("d", Q), 
dt("e", Q), dt("E", Q), dt("dd", function(t, e) {
return e.weekdaysMinRegex(t);
}), dt("ddd", function(t, e) {
return e.weekdaysShortRegex(t);
}), dt("dddd", function(t, e) {
return e.weekdaysRegex(t);
}), yt([ "dd", "ddd", "dddd" ], function(t, e, n, r) {
var i = n._locale.weekdaysParse(t, r, n._strict);
null != i ? e.d = i : p(n).invalidWeekday = t;
}), yt([ "d", "e", "E" ], function(t, e, n, r) {
e[r] = k(t);
});
var Bt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
var $t = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
var Jt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
var Xt = ct;
var Kt = ct;
var Qt = ct;
function te() {
function t(t, e) {
return e.length - t.length;
}
var e, n, r, i, o, s = [], a = [], u = [], c = [];
for (e = 0; e < 7; e++) n = m([ 2e3, 1 ]).day(e), r = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), 
o = this.weekdays(n, ""), s.push(r), a.push(i), u.push(o), c.push(r), c.push(i), 
c.push(o);
for (s.sort(t), a.sort(t), u.sort(t), c.sort(t), e = 0; e < 7; e++) a[e] = ht(a[e]), 
u[e] = ht(u[e]), c[e] = ht(c[e]);
this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, 
this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), 
this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
}
function ee() {
return this.hours() % 12 || 12;
}
function ne(t, e) {
q(t, 0, 0, function() {
return this.localeData().meridiem(this.hours(), this.minutes(), e);
});
}
function re(t, e) {
return e._meridiemParse;
}
q("H", [ "HH", 2 ], 0, "hour"), q("h", [ "hh", 2 ], 0, ee), q("k", [ "kk", 2 ], 0, function() {
return this.hours() || 24;
}), q("hmm", 0, 0, function() {
return "" + ee.apply(this) + F(this.minutes(), 2);
}), q("hmmss", 0, 0, function() {
return "" + ee.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2);
}), q("Hmm", 0, 0, function() {
return "" + this.hours() + F(this.minutes(), 2);
}), q("Hmmss", 0, 0, function() {
return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2);
}), ne("a", !0), ne("A", !1), j("hour", "h"), W("hour", 13), dt("a", re), dt("A", re), 
dt("H", Q), dt("h", Q), dt("k", Q), dt("HH", Q, $), dt("hh", Q, $), dt("kk", Q, $), 
dt("hmm", tt), dt("hmmss", et), dt("Hmm", tt), dt("Hmmss", et), pt([ "H", "HH" ], bt), 
pt([ "k", "kk" ], function(t, e, n) {
var r = k(t);
e[bt] = 24 === r ? 0 : r;
}), pt([ "a", "A" ], function(t, e, n) {
n._isPm = n._locale.isPM(t), n._meridiem = t;
}), pt([ "h", "hh" ], function(t, e, n) {
e[bt] = k(t), p(n).bigHour = !0;
}), pt("hmm", function(t, e, n) {
var r = t.length - 2;
e[bt] = k(t.substr(0, r)), e[St] = k(t.substr(r)), p(n).bigHour = !0;
}), pt("hmmss", function(t, e, n) {
var r = t.length - 4, i = t.length - 2;
e[bt] = k(t.substr(0, r)), e[St] = k(t.substr(r, 2)), e[Mt] = k(t.substr(i)), p(n).bigHour = !0;
}), pt("Hmm", function(t, e, n) {
var r = t.length - 2;
e[bt] = k(t.substr(0, r)), e[St] = k(t.substr(r));
}), pt("Hmmss", function(t, e, n) {
var r = t.length - 4, i = t.length - 2;
e[bt] = k(t.substr(0, r)), e[St] = k(t.substr(r, 2)), e[Mt] = k(t.substr(i));
});
var ie, oe = Ct("Hours", !0), se = {
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
longDateFormat: {
LTS: "h:mm:ss A",
LT: "h:mm A",
L: "MM/DD/YYYY",
LL: "MMMM D, YYYY",
LLL: "MMMM D, YYYY h:mm A",
LLLL: "dddd, MMMM D, YYYY h:mm A"
},
invalidDate: "Invalid date",
ordinal: "%d",
dayOfMonthOrdinalParse: /\d{1,2}/,
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
months: At,
monthsShort: Ht,
week: {
dow: 0,
doy: 6
},
weekdays: Bt,
weekdaysMin: Jt,
weekdaysShort: $t,
meridiemParse: /[ap]\.?m?\.?/i
}, ae = {}, ue = {};
function ce(t) {
return t ? t.toLowerCase().replace("_", "-") : t;
}
function le(e) {
var r = null;
if (!ae[e] && void 0 !== t && t && t.exports) try {
r = ie._abbr;
n(43)("./" + e), de(r);
} catch (t) {}
return ae[e];
}
function de(t, e) {
var n;
return t && ((n = u(e) ? he(t) : fe(t, e)) ? ie = n : "undefined" != typeof console && console.warn), 
ie._abbr;
}
function fe(t, e) {
if (null !== e) {
var n, r = se;
if (e.abbr = t, null != ae[t]) x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), 
r = ae[t]._config; else if (null != e.parentLocale) if (null != ae[e.parentLocale]) r = ae[e.parentLocale]._config; else {
if (null == (n = le(e.parentLocale))) return ue[e.parentLocale] || (ue[e.parentLocale] = []), 
ue[e.parentLocale].push({
name: t,
config: e
}), null;
r = n._config;
}
return ae[t] = new P(L(r, e)), ue[t] && ue[t].forEach(function(t) {
fe(t.name, t.config);
}), de(t), ae[t];
}
return delete ae[t], null;
}
function he(t) {
var e;
if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ie;
if (!o(t)) {
if (e = le(t)) return e;
t = [ t ];
}
return function(t) {
for (var e, n, r, i, o = 0; o < t.length; ) {
for (e = (i = ce(t[o]).split("-")).length, n = (n = ce(t[o + 1])) ? n.split("-") : null; e > 0; ) {
if (r = le(i.slice(0, e).join("-"))) return r;
if (n && n.length >= e && D(i, n, !0) >= e - 1) break;
e--;
}
o++;
}
return ie;
}(t);
}
function me(t) {
var e, n = t._a;
return n && -2 === p(t).overflow && (e = n[vt] < 0 || n[vt] > 11 ? vt : n[wt] < 1 || n[wt] > Nt(n[gt], n[vt]) ? wt : n[bt] < 0 || n[bt] > 24 || 24 === n[bt] && (0 !== n[St] || 0 !== n[Mt] || 0 !== n[kt]) ? bt : n[St] < 0 || n[St] > 59 ? St : n[Mt] < 0 || n[Mt] > 59 ? Mt : n[kt] < 0 || n[kt] > 999 ? kt : -1, 
p(t)._overflowDayOfYear && (e < gt || e > wt) && (e = wt), p(t)._overflowWeeks && -1 === e && (e = Dt), 
p(t)._overflowWeekday && -1 === e && (e = Et), p(t).overflow = e), t;
}
function pe(t, e, n) {
return null != t ? t : null != e ? e : n;
}
function ye(t) {
var e, n, r, o, s, a = [];
if (!t._d) {
for (r = function(t) {
var e = new Date(i.now());
return t._useUTC ? [ e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() ] : [ e.getFullYear(), e.getMonth(), e.getDate() ];
}(t), t._w && null == t._a[wt] && null == t._a[vt] && function(t) {
var e, n, r, i, o, s, a, u;
if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, s = 4, n = pe(e.GG, t._a[gt], zt(Ce(), 1, 4).year), 
r = pe(e.W, 1), ((i = pe(e.E, 1)) < 1 || i > 7) && (u = !0); else {
o = t._locale._week.dow, s = t._locale._week.doy;
var c = zt(Ce(), o, s);
n = pe(e.gg, t._a[gt], c.year), r = pe(e.w, c.week), null != e.d ? ((i = e.d) < 0 || i > 6) && (u = !0) : null != e.e ? (i = e.e + o, 
(e.e < 0 || e.e > 6) && (u = !0)) : i = o;
}
r < 1 || r > Zt(n, o, s) ? p(t)._overflowWeeks = !0 : null != u ? p(t)._overflowWeekday = !0 : (a = qt(n, r, i, o, s), 
t._a[gt] = a.year, t._dayOfYear = a.dayOfYear);
}(t), null != t._dayOfYear && (s = pe(t._a[gt], r[gt]), (t._dayOfYear > Tt(s) || 0 === t._dayOfYear) && (p(t)._overflowDayOfYear = !0), 
n = Gt(s, 0, t._dayOfYear), t._a[vt] = n.getUTCMonth(), t._a[wt] = n.getUTCDate()), 
e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = r[e];
for (;e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
24 === t._a[bt] && 0 === t._a[St] && 0 === t._a[Mt] && 0 === t._a[kt] && (t._nextDay = !0, 
t._a[bt] = 0), t._d = (t._useUTC ? Gt : function(t, e, n, r, i, o, s) {
var a = new Date(t, e, n, r, i, o, s);
return t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a;
}).apply(null, a), o = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), 
t._nextDay && (t._a[bt] = 24), t._w && void 0 !== t._w.d && t._w.d !== o && (p(t).weekdayMismatch = !0);
}
}
var _e = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ge = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ve = /Z|[+-]\d\d(?::?\d\d)?/, we = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ] ], be = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], Se = /^\/?Date\((\-?\d+)/i;
function Me(t) {
var e, n, r, i, o, s, a = t._i, u = _e.exec(a) || ge.exec(a);
if (u) {
for (p(t).iso = !0, e = 0, n = we.length; e < n; e++) if (we[e][1].exec(u[1])) {
i = we[e][0], r = !1 !== we[e][2];
break;
}
if (null == i) return void (t._isValid = !1);
if (u[3]) {
for (e = 0, n = be.length; e < n; e++) if (be[e][1].exec(u[3])) {
o = (u[2] || " ") + be[e][0];
break;
}
if (null == o) return void (t._isValid = !1);
}
if (!r && null != o) return void (t._isValid = !1);
if (u[4]) {
if (!ve.exec(u[4])) return void (t._isValid = !1);
s = "Z";
}
t._f = i + (o || "") + (s || ""), Ye(t);
} else t._isValid = !1;
}
var ke = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
function De(t, e, n, r, i, o) {
var s = [ function(t) {
var e = parseInt(t, 10);
if (e <= 49) return 2e3 + e;
if (e <= 999) return 1900 + e;
return e;
}(t), Ht.indexOf(e), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10) ];
return o && s.push(parseInt(o, 10)), s;
}
var Ee = {
UT: 0,
GMT: 0,
EDT: -240,
EST: -300,
CDT: -300,
CST: -360,
MDT: -360,
MST: -420,
PDT: -420,
PST: -480
};
function Te(t) {
var e = ke.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
if (e) {
var n = De(e[4], e[3], e[2], e[5], e[6], e[7]);
if (!function(t, e, n) {
return !t || $t.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() || (p(n).weekdayMismatch = !0, 
n._isValid = !1, !1);
}(e[1], n, t)) return;
t._a = n, t._tzm = function(t, e, n) {
if (t) return Ee[t];
if (e) return 0;
var r = parseInt(n, 10), i = r % 100;
return (r - i) / 100 * 60 + i;
}(e[8], e[9], e[10]), t._d = Gt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), 
p(t).rfc2822 = !0;
} else t._isValid = !1;
}
function Ye(t) {
if (t._f !== i.ISO_8601) if (t._f !== i.RFC_2822) {
t._a = [], p(t).empty = !0;
var e, n, r, o, s, a = "" + t._i, u = a.length, c = 0;
for (r = Z(t._f, t._locale).match(U) || [], e = 0; e < r.length; e++) o = r[e], 
(n = (a.match(ft(o, t)) || [])[0]) && ((s = a.substr(0, a.indexOf(n))).length > 0 && p(t).unusedInput.push(s), 
a = a.slice(a.indexOf(n) + n.length), c += n.length), V[o] ? (n ? p(t).empty = !1 : p(t).unusedTokens.push(o), 
_t(o, n, t)) : t._strict && !n && p(t).unusedTokens.push(o);
p(t).charsLeftOver = u - c, a.length > 0 && p(t).unusedInput.push(a), t._a[bt] <= 12 && !0 === p(t).bigHour && t._a[bt] > 0 && (p(t).bigHour = void 0), 
p(t).parsedDateParts = t._a.slice(0), p(t).meridiem = t._meridiem, t._a[bt] = function(t, e, n) {
var r;
if (null == n) return e;
return null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? ((r = t.isPM(n)) && e < 12 && (e += 12), 
r || 12 !== e || (e = 0), e) : e;
}(t._locale, t._a[bt], t._meridiem), ye(t), me(t);
} else Te(t); else Me(t);
}
function Oe(t) {
var e = t._i, n = t._f;
return t._locale = t._locale || he(t._l), null === e || void 0 === n && "" === e ? _({
nullInput: !0
}) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), S(e) ? new b(me(e)) : (l(e) ? t._d = e : o(n) ? function(t) {
var e, n, r, i, o;
if (0 === t._f.length) return p(t).invalidFormat = !0, void (t._d = new Date(NaN));
for (i = 0; i < t._f.length; i++) o = 0, e = v({}, t), null != t._useUTC && (e._useUTC = t._useUTC), 
e._f = t._f[i], Ye(e), y(e) && (o += p(e).charsLeftOver, o += 10 * p(e).unusedTokens.length, 
p(e).score = o, (null == r || o < r) && (r = o, n = e));
h(t, n || e);
}(t) : n ? Ye(t) : function(t) {
var e = t._i;
u(e) ? t._d = new Date(i.now()) : l(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? function(t) {
var e = Se.exec(t._i);
null === e ? (Me(t), !1 === t._isValid && (delete t._isValid, Te(t), !1 === t._isValid && (delete t._isValid, 
i.createFromInputFallback(t)))) : t._d = new Date(+e[1]);
}(t) : o(e) ? (t._a = d(e.slice(0), function(t) {
return parseInt(t, 10);
}), ye(t)) : a(e) ? function(t) {
if (!t._d) {
var e = H(t._i);
t._a = d([ e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond ], function(t) {
return t && parseInt(t, 10);
}), ye(t);
}
}(t) : c(e) ? t._d = new Date(e) : i.createFromInputFallback(t);
}(t), y(t) || (t._d = null), t));
}
function xe(t, e, n, r, i) {
var s, u = {};
return !0 !== n && !1 !== n || (r = n, n = void 0), (a(t) && function(t) {
if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
var e;
for (e in t) if (t.hasOwnProperty(e)) return !1;
return !0;
}(t) || o(t) && 0 === t.length) && (t = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = i, 
u._l = n, u._i = t, u._f = e, u._strict = r, (s = new b(me(Oe(u))))._nextDay && (s.add(1, "d"), 
s._nextDay = void 0), s;
}
function Ce(t, e, n, r) {
return xe(t, e, n, r, !1);
}
i.createFromInputFallback = T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
}), i.ISO_8601 = function() {}, i.RFC_2822 = function() {};
var Le = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
var t = Ce.apply(null, arguments);
return this.isValid() && t.isValid() ? t < this ? this : t : _();
}), Pe = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
var t = Ce.apply(null, arguments);
return this.isValid() && t.isValid() ? t > this ? this : t : _();
});
function Ne(t, e) {
var n, r;
if (1 === e.length && o(e[0]) && (e = e[0]), !e.length) return Ce();
for (n = e[0], r = 1; r < e.length; ++r) e[r].isValid() && !e[r][t](n) || (n = e[r]);
return n;
}
var je = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
function Ae(t) {
var e = H(t), n = e.year || 0, r = e.quarter || 0, i = e.month || 0, o = e.week || 0, s = e.day || 0, a = e.hour || 0, u = e.minute || 0, c = e.second || 0, l = e.millisecond || 0;
this._isValid = function(t) {
for (var e in t) if (-1 === Ot.call(je, e) || null != t[e] && isNaN(t[e])) return !1;
for (var n = !1, r = 0; r < je.length; ++r) if (t[je[r]]) {
if (n) return !1;
parseFloat(t[je[r]]) !== k(t[je[r]]) && (n = !0);
}
return !0;
}(e), this._milliseconds = +l + 1e3 * c + 6e4 * u + 1e3 * a * 60 * 60, this._days = +s + 7 * o, 
this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = he(), this._bubble();
}
function He(t) {
return t instanceof Ae;
}
function Re(t) {
return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
}
function We(t, e) {
q(t, 0, 0, function() {
var t = this.utcOffset(), n = "+";
return t < 0 && (t = -t, n = "-"), n + F(~~(t / 60), 2) + e + F(~~t % 60, 2);
});
}
We("Z", ":"), We("ZZ", ""), dt("Z", ut), dt("ZZ", ut), pt([ "Z", "ZZ" ], function(t, e, n) {
n._useUTC = !0, n._tzm = Ue(ut, t);
});
var Fe = /([\+\-]|\d\d)/gi;
function Ue(t, e) {
var n = (e || "").match(t);
if (null === n) return null;
var r = ((n[n.length - 1] || []) + "").match(Fe) || [ "-", 0, 0 ], i = 60 * r[1] + k(r[2]);
return 0 === i ? 0 : "+" === r[0] ? i : -i;
}
function Ie(t, e) {
var n, r;
return e._isUTC ? (n = e.clone(), r = (S(t) || l(t) ? t.valueOf() : Ce(t).valueOf()) - n.valueOf(), 
n._d.setTime(n._d.valueOf() + r), i.updateOffset(n, !1), n) : Ce(t).local();
}
function Ge(t) {
return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
}
function Ve() {
return !!this.isValid() && (this._isUTC && 0 === this._offset);
}
i.updateOffset = function() {};
var qe = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, ze = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Ze(t, e) {
var n, r, i, o = t, a = null;
return He(t) ? o = {
ms: t._milliseconds,
d: t._days,
M: t._months
} : c(t) ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (a = qe.exec(t)) ? (n = "-" === a[1] ? -1 : 1, 
o = {
y: 0,
d: k(a[wt]) * n,
h: k(a[bt]) * n,
m: k(a[St]) * n,
s: k(a[Mt]) * n,
ms: k(Re(1e3 * a[kt])) * n
}) : (a = ze.exec(t)) ? (n = "-" === a[1] ? -1 : (a[1], 1), o = {
y: Be(a[2], n),
M: Be(a[3], n),
w: Be(a[4], n),
d: Be(a[5], n),
h: Be(a[6], n),
m: Be(a[7], n),
s: Be(a[8], n)
}) : null == o ? o = {} : "object" === s(o) && ("from" in o || "to" in o) && (i = function(t, e) {
var n;
if (!t.isValid() || !e.isValid()) return {
milliseconds: 0,
months: 0
};
e = Ie(e, t), t.isBefore(e) ? n = $e(t, e) : ((n = $e(e, t)).milliseconds = -n.milliseconds, 
n.months = -n.months);
return n;
}(Ce(o.from), Ce(o.to)), (o = {}).ms = i.milliseconds, o.M = i.months), r = new Ae(o), 
He(t) && f(t, "_locale") && (r._locale = t._locale), r;
}
function Be(t, e) {
var n = t && parseFloat(t.replace(",", "."));
return (isNaN(n) ? 0 : n) * e;
}
function $e(t, e) {
var n = {
milliseconds: 0,
months: 0
};
return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, 
n.milliseconds = +e - +t.clone().add(n.months, "M"), n;
}
function Je(t, e) {
return function(n, r) {
var i;
return null === r || isNaN(+r) || (x(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), 
i = n, n = r, r = i), Xe(this, Ze(n = "string" == typeof n ? +n : n, r), t), this;
};
}
function Xe(t, e, n, r) {
var o = e._milliseconds, s = Re(e._days), a = Re(e._months);
t.isValid() && (r = null == r || r, a && Rt(t, Lt(t, "Month") + a * n), s && Pt(t, "Date", Lt(t, "Date") + s * n), 
o && t._d.setTime(t._d.valueOf() + o * n), r && i.updateOffset(t, s || a));
}
Ze.fn = Ae.prototype, Ze.invalid = function() {
return Ze(NaN);
};
var Ke = Je(1, "add"), Qe = Je(-1, "subtract");
function tn(t, e) {
var n = 12 * (e.year() - t.year()) + (e.month() - t.month()), r = t.clone().add(n, "months");
return -(n + (e - r < 0 ? (e - r) / (r - t.clone().add(n - 1, "months")) : (e - r) / (t.clone().add(n + 1, "months") - r))) || 0;
}
function en(t) {
var e;
return void 0 === t ? this._locale._abbr : (null != (e = he(t)) && (this._locale = e), 
this);
}
i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
var nn = T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
return void 0 === t ? this.localeData() : this.locale(t);
});
function rn() {
return this._locale;
}
function on(t, e) {
q(0, [ t, t.length ], 0, e);
}
function sn(t, e, n, r, i) {
var o;
return null == t ? zt(this, r, i).year : (e > (o = Zt(t, r, i)) && (e = o), function(t, e, n, r, i) {
var o = qt(t, e, n, r, i), s = Gt(o.year, 0, o.dayOfYear);
return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), 
this;
}.call(this, t, e, n, r, i));
}
q(0, [ "gg", 2 ], 0, function() {
return this.weekYear() % 100;
}), q(0, [ "GG", 2 ], 0, function() {
return this.isoWeekYear() % 100;
}), on("gggg", "weekYear"), on("ggggg", "weekYear"), on("GGGG", "isoWeekYear"), 
on("GGGGG", "isoWeekYear"), j("weekYear", "gg"), j("isoWeekYear", "GG"), W("weekYear", 1), 
W("isoWeekYear", 1), dt("G", st), dt("g", st), dt("GG", Q, $), dt("gg", Q, $), dt("GGGG", rt, X), 
dt("gggg", rt, X), dt("GGGGG", it, K), dt("ggggg", it, K), yt([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(t, e, n, r) {
e[r.substr(0, 2)] = k(t);
}), yt([ "gg", "GG" ], function(t, e, n, r) {
e[r] = i.parseTwoDigitYear(t);
}), q("Q", 0, "Qo", "quarter"), j("quarter", "Q"), W("quarter", 7), dt("Q", B), 
pt("Q", function(t, e) {
e[vt] = 3 * (k(t) - 1);
}), q("D", [ "DD", 2 ], "Do", "date"), j("date", "D"), W("date", 9), dt("D", Q), 
dt("DD", Q, $), dt("Do", function(t, e) {
return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
}), pt([ "D", "DD" ], wt), pt("Do", function(t, e) {
e[wt] = k(t.match(Q)[0]);
});
var an = Ct("Date", !0);
q("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), j("dayOfYear", "DDD"), W("dayOfYear", 4), 
dt("DDD", nt), dt("DDDD", J), pt([ "DDD", "DDDD" ], function(t, e, n) {
n._dayOfYear = k(t);
}), q("m", [ "mm", 2 ], 0, "minute"), j("minute", "m"), W("minute", 14), dt("m", Q), 
dt("mm", Q, $), pt([ "m", "mm" ], St);
var un = Ct("Minutes", !1);
q("s", [ "ss", 2 ], 0, "second"), j("second", "s"), W("second", 15), dt("s", Q), 
dt("ss", Q, $), pt([ "s", "ss" ], Mt);
var cn, ln = Ct("Seconds", !1);
for (q("S", 0, 0, function() {
return ~~(this.millisecond() / 100);
}), q(0, [ "SS", 2 ], 0, function() {
return ~~(this.millisecond() / 10);
}), q(0, [ "SSS", 3 ], 0, "millisecond"), q(0, [ "SSSS", 4 ], 0, function() {
return 10 * this.millisecond();
}), q(0, [ "SSSSS", 5 ], 0, function() {
return 100 * this.millisecond();
}), q(0, [ "SSSSSS", 6 ], 0, function() {
return 1e3 * this.millisecond();
}), q(0, [ "SSSSSSS", 7 ], 0, function() {
return 1e4 * this.millisecond();
}), q(0, [ "SSSSSSSS", 8 ], 0, function() {
return 1e5 * this.millisecond();
}), q(0, [ "SSSSSSSSS", 9 ], 0, function() {
return 1e6 * this.millisecond();
}), j("millisecond", "ms"), W("millisecond", 16), dt("S", nt, B), dt("SS", nt, $), 
dt("SSS", nt, J), cn = "SSSS"; cn.length <= 9; cn += "S") dt(cn, ot);
function dn(t, e) {
e[kt] = k(1e3 * ("0." + t));
}
for (cn = "S"; cn.length <= 9; cn += "S") pt(cn, dn);
var fn = Ct("Milliseconds", !1);
q("z", 0, 0, "zoneAbbr"), q("zz", 0, 0, "zoneName");
var hn = b.prototype;
function mn(t) {
return t;
}
hn.add = Ke, hn.calendar = function(t, e) {
var n = t || Ce(), r = Ie(n, this).startOf("day"), o = i.calendarFormat(this, r) || "sameElse", s = e && (C(e[o]) ? e[o].call(this, n) : e[o]);
return this.format(s || this.localeData().calendar(o, this, Ce(n)));
}, hn.clone = function() {
return new b(this);
}, hn.diff = function(t, e, n) {
var r, i, o;
if (!this.isValid()) return NaN;
if (!(r = Ie(t, this)).isValid()) return NaN;
switch (i = 6e4 * (r.utcOffset() - this.utcOffset()), e = A(e)) {
case "year":
o = tn(this, r) / 12;
break;

case "month":
o = tn(this, r);
break;

case "quarter":
o = tn(this, r) / 3;
break;

case "second":
o = (this - r) / 1e3;
break;

case "minute":
o = (this - r) / 6e4;
break;

case "hour":
o = (this - r) / 36e5;
break;

case "day":
o = (this - r - i) / 864e5;
break;

case "week":
o = (this - r - i) / 6048e5;
break;

default:
o = this - r;
}
return n ? o : M(o);
}, hn.endOf = function(t) {
return void 0 === (t = A(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), 
this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"));
}, hn.format = function(t) {
t || (t = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
var e = z(this, t);
return this.localeData().postformat(e);
}, hn.from = function(t, e) {
return this.isValid() && (S(t) && t.isValid() || Ce(t).isValid()) ? Ze({
to: this,
from: t
}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}, hn.fromNow = function(t) {
return this.from(Ce(), t);
}, hn.to = function(t, e) {
return this.isValid() && (S(t) && t.isValid() || Ce(t).isValid()) ? Ze({
from: this,
to: t
}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}, hn.toNow = function(t) {
return this.to(Ce(), t);
}, hn.get = function(t) {
return C(this[t = A(t)]) ? this[t]() : this;
}, hn.invalidAt = function() {
return p(this).overflow;
}, hn.isAfter = function(t, e) {
var n = S(t) ? t : Ce(t);
return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = A(u(e) ? "millisecond" : e)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf());
}, hn.isBefore = function(t, e) {
var n = S(t) ? t : Ce(t);
return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = A(u(e) ? "millisecond" : e)) ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf());
}, hn.isBetween = function(t, e, n, r) {
return ("(" === (r = r || "()")[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === r[1] ? this.isBefore(e, n) : !this.isAfter(e, n));
}, hn.isSame = function(t, e) {
var n, r = S(t) ? t : Ce(t);
return !(!this.isValid() || !r.isValid()) && ("millisecond" === (e = A(e || "millisecond")) ? this.valueOf() === r.valueOf() : (n = r.valueOf(), 
this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()));
}, hn.isSameOrAfter = function(t, e) {
return this.isSame(t, e) || this.isAfter(t, e);
}, hn.isSameOrBefore = function(t, e) {
return this.isSame(t, e) || this.isBefore(t, e);
}, hn.isValid = function() {
return y(this);
}, hn.lang = nn, hn.locale = en, hn.localeData = rn, hn.max = Pe, hn.min = Le, hn.parsingFlags = function() {
return h({}, p(this));
}, hn.set = function(t, e) {
if ("object" === s(t)) for (var n = function(t) {
var e = [];
for (var n in t) e.push({
unit: n,
priority: R[n]
});
return e.sort(function(t, e) {
return t.priority - e.priority;
}), e;
}(t = H(t)), r = 0; r < n.length; r++) this[n[r].unit](t[n[r].unit]); else if (C(this[t = A(t)])) return this[t](e);
return this;
}, hn.startOf = function(t) {
switch (t = A(t)) {
case "year":
this.month(0);

case "quarter":
case "month":
this.date(1);

case "week":
case "isoWeek":
case "day":
case "date":
this.hours(0);

case "hour":
this.minutes(0);

case "minute":
this.seconds(0);

case "second":
this.milliseconds(0);
}
return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), 
this;
}, hn.subtract = Qe, hn.toArray = function() {
var t = this;
return [ t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond() ];
}, hn.toObject = function() {
var t = this;
return {
years: t.year(),
months: t.month(),
date: t.date(),
hours: t.hours(),
minutes: t.minutes(),
seconds: t.seconds(),
milliseconds: t.milliseconds()
};
}, hn.toDate = function() {
return new Date(this.valueOf());
}, hn.toISOString = function(t) {
if (!this.isValid()) return null;
var e = !0 !== t, n = e ? this.clone().utc() : this;
return n.year() < 0 || n.year() > 9999 ? z(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : C(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", z(n, "Z")) : z(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
}, hn.inspect = function() {
if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
var t = "moment", e = "";
this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", 
e = "Z");
var n = "[" + t + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = e + '[")]';
return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + i);
}, hn.toJSON = function() {
return this.isValid() ? this.toISOString() : null;
}, hn.toString = function() {
return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}, hn.unix = function() {
return Math.floor(this.valueOf() / 1e3);
}, hn.valueOf = function() {
return this._d.valueOf() - 6e4 * (this._offset || 0);
}, hn.creationData = function() {
return {
input: this._i,
format: this._f,
locale: this._locale,
isUTC: this._isUTC,
strict: this._strict
};
}, hn.year = xt, hn.isLeapYear = function() {
return Yt(this.year());
}, hn.weekYear = function(t) {
return sn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
}, hn.isoWeekYear = function(t) {
return sn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
}, hn.quarter = hn.quarters = function(t) {
return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3);
}, hn.month = Wt, hn.daysInMonth = function() {
return Nt(this.year(), this.month());
}, hn.week = hn.weeks = function(t) {
var e = this.localeData().week(this);
return null == t ? e : this.add(7 * (t - e), "d");
}, hn.isoWeek = hn.isoWeeks = function(t) {
var e = zt(this, 1, 4).week;
return null == t ? e : this.add(7 * (t - e), "d");
}, hn.weeksInYear = function() {
var t = this.localeData()._week;
return Zt(this.year(), t.dow, t.doy);
}, hn.isoWeeksInYear = function() {
return Zt(this.year(), 1, 4);
}, hn.date = an, hn.day = hn.days = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
return null != t ? (t = function(t, e) {
return "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10);
}(t, this.localeData()), this.add(t - e, "d")) : e;
}, hn.weekday = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
return null == t ? e : this.add(t - e, "d");
}, hn.isoWeekday = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
if (null != t) {
var e = function(t, e) {
return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t;
}(t, this.localeData());
return this.day(this.day() % 7 ? e : e - 7);
}
return this.day() || 7;
}, hn.dayOfYear = function(t) {
var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
return null == t ? e : this.add(t - e, "d");
}, hn.hour = hn.hours = oe, hn.minute = hn.minutes = un, hn.second = hn.seconds = ln, 
hn.millisecond = hn.milliseconds = fn, hn.utcOffset = function(t, e, n) {
var r, o = this._offset || 0;
if (!this.isValid()) return null != t ? this : NaN;
if (null != t) {
if ("string" == typeof t) {
if (null === (t = Ue(ut, t))) return this;
} else Math.abs(t) < 16 && !n && (t *= 60);
return !this._isUTC && e && (r = Ge(this)), this._offset = t, this._isUTC = !0, 
null != r && this.add(r, "m"), o !== t && (!e || this._changeInProgress ? Xe(this, Ze(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
i.updateOffset(this, !0), this._changeInProgress = null)), this;
}
return this._isUTC ? o : Ge(this);
}, hn.utc = function(t) {
return this.utcOffset(0, t);
}, hn.local = function(t) {
return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ge(this), "m")), 
this;
}, hn.parseZone = function() {
if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
var t = Ue(at, this._i);
null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
}
return this;
}, hn.hasAlignedHourOffset = function(t) {
return !!this.isValid() && (t = t ? Ce(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0);
}, hn.isDST = function() {
return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}, hn.isLocal = function() {
return !!this.isValid() && !this._isUTC;
}, hn.isUtcOffset = function() {
return !!this.isValid() && this._isUTC;
}, hn.isUtc = Ve, hn.isUTC = Ve, hn.zoneAbbr = function() {
return this._isUTC ? "UTC" : "";
}, hn.zoneName = function() {
return this._isUTC ? "Coordinated Universal Time" : "";
}, hn.dates = T("dates accessor is deprecated. Use date instead.", an), hn.months = T("months accessor is deprecated. Use month instead", Wt), 
hn.years = T("years accessor is deprecated. Use year instead", xt), hn.zone = T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) {
return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
}), hn.isDSTShifted = T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
if (!u(this._isDSTShifted)) return this._isDSTShifted;
var t = {};
if (v(t, this), (t = Oe(t))._a) {
var e = t._isUTC ? m(t._a) : Ce(t._a);
this._isDSTShifted = this.isValid() && D(t._a, e.toArray()) > 0;
} else this._isDSTShifted = !1;
return this._isDSTShifted;
});
var pn = P.prototype;
function yn(t, e, n, r) {
var i = he(), o = m().set(r, e);
return i[n](o, t);
}
function _n(t, e, n) {
if (c(t) && (e = t, t = void 0), t = t || "", null != e) return yn(t, e, n, "month");
var r, i = [];
for (r = 0; r < 12; r++) i[r] = yn(t, r, n, "month");
return i;
}
function gn(t, e, n, r) {
"boolean" == typeof t ? (c(e) && (n = e, e = void 0), e = e || "") : (n = e = t, 
t = !1, c(e) && (n = e, e = void 0), e = e || "");
var i, o = he(), s = t ? o._week.dow : 0;
if (null != n) return yn(e, (n + s) % 7, r, "day");
var a = [];
for (i = 0; i < 7; i++) a[i] = yn(e, (i + s) % 7, r, "day");
return a;
}
pn.calendar = function(t, e, n) {
var r = this._calendar[t] || this._calendar.sameElse;
return C(r) ? r.call(e, n) : r;
}, pn.longDateFormat = function(t) {
var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()];
return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
return t.slice(1);
}), this._longDateFormat[t]);
}, pn.invalidDate = function() {
return this._invalidDate;
}, pn.ordinal = function(t) {
return this._ordinal.replace("%d", t);
}, pn.preparse = mn, pn.postformat = mn, pn.relativeTime = function(t, e, n, r) {
var i = this._relativeTime[n];
return C(i) ? i(t, e, n, r) : i.replace(/%d/i, t);
}, pn.pastFuture = function(t, e) {
var n = this._relativeTime[t > 0 ? "future" : "past"];
return C(n) ? n(e) : n.replace(/%s/i, e);
}, pn.set = function(t) {
var e, n;
for (n in t) C(e = t[n]) ? this[n] = e : this["_" + n] = e;
this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
}, pn.months = function(t, e) {
return t ? o(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || jt).test(e) ? "format" : "standalone"][t.month()] : o(this._months) ? this._months : this._months.standalone;
}, pn.monthsShort = function(t, e) {
return t ? o(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[jt.test(e) ? "format" : "standalone"][t.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}, pn.monthsParse = function(t, e, n) {
var r, i, o;
if (this._monthsParseExact) return function(t, e, n) {
var r, i, o, s = t.toLocaleLowerCase();
if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], 
this._shortMonthsParse = [], r = 0; r < 12; ++r) o = m([ 2e3, r ]), this._shortMonthsParse[r] = this.monthsShort(o, "").toLocaleLowerCase(), 
this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
return n ? "MMM" === e ? -1 !== (i = Ot.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = Ot.call(this._longMonthsParse, s)) ? i : null : "MMM" === e ? -1 !== (i = Ot.call(this._shortMonthsParse, s)) ? i : -1 !== (i = Ot.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = Ot.call(this._longMonthsParse, s)) ? i : -1 !== (i = Ot.call(this._shortMonthsParse, s)) ? i : null;
}.call(this, t, e, n);
for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
r = 0; r < 12; r++) {
if (i = m([ 2e3, r ]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), 
this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), 
n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), 
this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[r].test(t)) return r;
if (n && "MMM" === e && this._shortMonthsParse[r].test(t)) return r;
if (!n && this._monthsParse[r].test(t)) return r;
}
}, pn.monthsRegex = function(t) {
return this._monthsParseExact ? (f(this, "_monthsRegex") || It.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (f(this, "_monthsRegex") || (this._monthsRegex = Ut), 
this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
}, pn.monthsShortRegex = function(t) {
return this._monthsParseExact ? (f(this, "_monthsRegex") || It.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (f(this, "_monthsShortRegex") || (this._monthsShortRegex = Ft), 
this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
}, pn.week = function(t) {
return zt(t, this._week.dow, this._week.doy).week;
}, pn.firstDayOfYear = function() {
return this._week.doy;
}, pn.firstDayOfWeek = function() {
return this._week.dow;
}, pn.weekdays = function(t, e) {
return t ? o(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : o(this._weekdays) ? this._weekdays : this._weekdays.standalone;
}, pn.weekdaysMin = function(t) {
return t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
}, pn.weekdaysShort = function(t) {
return t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
}, pn.weekdaysParse = function(t, e, n) {
var r, i, o;
if (this._weekdaysParseExact) return function(t, e, n) {
var r, i, o, s = t.toLocaleLowerCase();
if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], 
this._minWeekdaysParse = [], r = 0; r < 7; ++r) o = m([ 2e3, 1 ]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(o, "").toLocaleLowerCase(), 
this._shortWeekdaysParse[r] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
return n ? "dddd" === e ? -1 !== (i = Ot.call(this._weekdaysParse, s)) ? i : null : "ddd" === e ? -1 !== (i = Ot.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = Ot.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === e ? -1 !== (i = Ot.call(this._weekdaysParse, s)) ? i : -1 !== (i = Ot.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Ot.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === e ? -1 !== (i = Ot.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Ot.call(this._weekdaysParse, s)) ? i : -1 !== (i = Ot.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = Ot.call(this._minWeekdaysParse, s)) ? i : -1 !== (i = Ot.call(this._weekdaysParse, s)) ? i : -1 !== (i = Ot.call(this._shortWeekdaysParse, s)) ? i : null;
}.call(this, t, e, n);
for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], 
this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
if (i = m([ 2e3, 1 ]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), 
this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), 
this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), 
this._weekdaysParse[r] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), 
this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[r].test(t)) return r;
if (n && "ddd" === e && this._shortWeekdaysParse[r].test(t)) return r;
if (n && "dd" === e && this._minWeekdaysParse[r].test(t)) return r;
if (!n && this._weekdaysParse[r].test(t)) return r;
}
}, pn.weekdaysRegex = function(t) {
return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || te.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (f(this, "_weekdaysRegex") || (this._weekdaysRegex = Xt), 
this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
}, pn.weekdaysShortRegex = function(t) {
return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || te.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (f(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Kt), 
this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}, pn.weekdaysMinRegex = function(t) {
return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || te.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (f(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qt), 
this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}, pn.isPM = function(t) {
return "p" === (t + "").toLowerCase().charAt(0);
}, pn.meridiem = function(t, e, n) {
return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}, de("en", {
dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
ordinal: function(t) {
var e = t % 10;
return t + (1 === k(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
}
}), i.lang = T("moment.lang is deprecated. Use moment.locale instead.", de), i.langData = T("moment.langData is deprecated. Use moment.localeData instead.", he);
var vn = Math.abs;
function wn(t, e, n, r) {
var i = Ze(e, n);
return t._milliseconds += r * i._milliseconds, t._days += r * i._days, t._months += r * i._months, 
t._bubble();
}
function bn(t) {
return t < 0 ? Math.floor(t) : Math.ceil(t);
}
function Sn(t) {
return 4800 * t / 146097;
}
function Mn(t) {
return 146097 * t / 4800;
}
function kn(t) {
return function() {
return this.as(t);
};
}
var Dn = kn("ms"), En = kn("s"), Tn = kn("m"), Yn = kn("h"), On = kn("d"), xn = kn("w"), Cn = kn("M"), Ln = kn("y");
function Pn(t) {
return function() {
return this.isValid() ? this._data[t] : NaN;
};
}
var Nn = Pn("milliseconds"), jn = Pn("seconds"), An = Pn("minutes"), Hn = Pn("hours"), Rn = Pn("days"), Wn = Pn("months"), Fn = Pn("years");
var Un = Math.round, In = {
ss: 44,
s: 45,
m: 45,
h: 22,
d: 26,
M: 11
};
var Gn = Math.abs;
function Vn(t) {
return (t > 0) - (t < 0) || +t;
}
function qn() {
if (!this.isValid()) return this.localeData().invalidDate();
var t, e, n = Gn(this._milliseconds) / 1e3, r = Gn(this._days), i = Gn(this._months);
e = M((t = M(n / 60)) / 60), n %= 60, t %= 60;
var o = M(i / 12), s = i %= 12, a = r, u = e, c = t, l = n ? n.toFixed(3).replace(/\.?0+$/, "") : "", d = this.asSeconds();
if (!d) return "P0D";
var f = d < 0 ? "-" : "", h = Vn(this._months) !== Vn(d) ? "-" : "", m = Vn(this._days) !== Vn(d) ? "-" : "", p = Vn(this._milliseconds) !== Vn(d) ? "-" : "";
return f + "P" + (o ? h + o + "Y" : "") + (s ? h + s + "M" : "") + (a ? m + a + "D" : "") + (u || c || l ? "T" : "") + (u ? p + u + "H" : "") + (c ? p + c + "M" : "") + (l ? p + l + "S" : "");
}
var zn = Ae.prototype;
return zn.isValid = function() {
return this._isValid;
}, zn.abs = function() {
var t = this._data;
return this._milliseconds = vn(this._milliseconds), this._days = vn(this._days), 
this._months = vn(this._months), t.milliseconds = vn(t.milliseconds), t.seconds = vn(t.seconds), 
t.minutes = vn(t.minutes), t.hours = vn(t.hours), t.months = vn(t.months), t.years = vn(t.years), 
this;
}, zn.add = function(t, e) {
return wn(this, t, e, 1);
}, zn.subtract = function(t, e) {
return wn(this, t, e, -1);
}, zn.as = function(t) {
if (!this.isValid()) return NaN;
var e, n, r = this._milliseconds;
if ("month" === (t = A(t)) || "year" === t) return e = this._days + r / 864e5, n = this._months + Sn(e), 
"month" === t ? n : n / 12;
switch (e = this._days + Math.round(Mn(this._months)), t) {
case "week":
return e / 7 + r / 6048e5;

case "day":
return e + r / 864e5;

case "hour":
return 24 * e + r / 36e5;

case "minute":
return 1440 * e + r / 6e4;

case "second":
return 86400 * e + r / 1e3;

case "millisecond":
return Math.floor(864e5 * e) + r;

default:
throw new Error("Unknown unit " + t);
}
}, zn.asMilliseconds = Dn, zn.asSeconds = En, zn.asMinutes = Tn, zn.asHours = Yn, 
zn.asDays = On, zn.asWeeks = xn, zn.asMonths = Cn, zn.asYears = Ln, zn.valueOf = function() {
return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN;
}, zn._bubble = function() {
var t, e, n, r, i, o = this._milliseconds, s = this._days, a = this._months, u = this._data;
return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * bn(Mn(a) + s), 
s = 0, a = 0), u.milliseconds = o % 1e3, t = M(o / 1e3), u.seconds = t % 60, e = M(t / 60), 
u.minutes = e % 60, n = M(e / 60), u.hours = n % 24, a += i = M(Sn(s += M(n / 24))), 
s -= bn(Mn(i)), r = M(a / 12), a %= 12, u.days = s, u.months = a, u.years = r, this;
}, zn.clone = function() {
return Ze(this);
}, zn.get = function(t) {
return t = A(t), this.isValid() ? this[t + "s"]() : NaN;
}, zn.milliseconds = Nn, zn.seconds = jn, zn.minutes = An, zn.hours = Hn, zn.days = Rn, 
zn.weeks = function() {
return M(this.days() / 7);
}, zn.months = Wn, zn.years = Fn, zn.humanize = function(t) {
if (!this.isValid()) return this.localeData().invalidDate();
var e = this.localeData(), n = function(t, e, n) {
var r = Ze(t).abs(), i = Un(r.as("s")), o = Un(r.as("m")), s = Un(r.as("h")), a = Un(r.as("d")), u = Un(r.as("M")), c = Un(r.as("y")), l = i <= In.ss && [ "s", i ] || i < In.s && [ "ss", i ] || o <= 1 && [ "m" ] || o < In.m && [ "mm", o ] || s <= 1 && [ "h" ] || s < In.h && [ "hh", s ] || a <= 1 && [ "d" ] || a < In.d && [ "dd", a ] || u <= 1 && [ "M" ] || u < In.M && [ "MM", u ] || c <= 1 && [ "y" ] || [ "yy", c ];
return l[2] = e, l[3] = +t > 0, l[4] = n, function(t, e, n, r, i) {
return i.relativeTime(e || 1, !!n, t, r);
}.apply(null, l);
}(this, !t, e);
return t && (n = e.pastFuture(+this, n)), e.postformat(n);
}, zn.toISOString = qn, zn.toString = qn, zn.toJSON = qn, zn.locale = en, zn.localeData = rn, 
zn.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", qn), 
zn.lang = nn, q("X", 0, 0, "unix"), q("x", 0, 0, "valueOf"), dt("x", st), dt("X", /[+-]?\d+(\.\d{1,3})?/), 
pt("X", function(t, e, n) {
n._d = new Date(1e3 * parseFloat(t, 10));
}), pt("x", function(t, e, n) {
n._d = new Date(k(t));
}), i.version = "2.22.2", e = Ce, i.fn = hn, i.min = function() {
return Ne("isBefore", [].slice.call(arguments, 0));
}, i.max = function() {
return Ne("isAfter", [].slice.call(arguments, 0));
}, i.now = function() {
return Date.now ? Date.now() : +new Date();
}, i.utc = m, i.unix = function(t) {
return Ce(1e3 * t);
}, i.months = function(t, e) {
return _n(t, e, "months");
}, i.isDate = l, i.locale = de, i.invalid = _, i.duration = Ze, i.isMoment = S, 
i.weekdays = function(t, e, n) {
return gn(t, e, n, "weekdays");
}, i.parseZone = function() {
return Ce.apply(null, arguments).parseZone();
}, i.localeData = he, i.isDuration = He, i.monthsShort = function(t, e) {
return _n(t, e, "monthsShort");
}, i.weekdaysMin = function(t, e, n) {
return gn(t, e, n, "weekdaysMin");
}, i.defineLocale = fe, i.updateLocale = function(t, e) {
if (null != e) {
var n, r, i = se;
null != (r = le(t)) && (i = r._config), (n = new P(e = L(i, e))).parentLocale = ae[t], 
ae[t] = n, de(t);
} else null != ae[t] && (null != ae[t].parentLocale ? ae[t] = ae[t].parentLocale : null != ae[t] && delete ae[t]);
return ae[t];
}, i.locales = function() {
return Y(ae);
}, i.weekdaysShort = function(t, e, n) {
return gn(t, e, n, "weekdaysShort");
}, i.normalizeUnits = A, i.relativeTimeRounding = function(t) {
return void 0 === t ? Un : "function" == typeof t && (Un = t, !0);
}, i.relativeTimeThreshold = function(t, e) {
return void 0 !== In[t] && (void 0 === e ? In[t] : (In[t] = e, "s" === t && (In.ss = e - 1), 
!0));
}, i.calendarFormat = function(t, e) {
var n = t.diff(e, "days", !0);
return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}, i.prototype = hn, i.HTML5_FMT = {
DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
DATE: "YYYY-MM-DD",
TIME: "HH:mm",
TIME_SECONDS: "HH:mm:ss",
TIME_MS: "HH:mm:ss.SSS",
WEEK: "YYYY-[W]WW",
MONTH: "YYYY-MM"
}, i;
}, "object" === s(e) && void 0 !== t ? t.exports = o() : void 0 === (i = "function" == typeof (r = o) ? r.call(e, n, e, t) : r) || (t.exports = i);
}).call(this, n(46)(t));
},
330: function(t, e, n) {
var r = n(287), i = n(346);
t.exports = n(288) ? function(t, e, n) {
return r.f(t, e, i(1, n));
} : function(t, e, n) {
return t[e] = n, t;
};
},
331: function(t, e, n) {
var r = n(416), i = n(341);
t.exports = function(t) {
return r(i(t));
};
},
338: function(t, e, n) {
var r = n(339);
t.exports = function(t, e, n) {
if (r(t), void 0 === e) return t;
switch (n) {
case 1:
return function(n) {
return t.call(e, n);
};

case 2:
return function(n, r) {
return t.call(e, n, r);
};

case 3:
return function(n, r, i) {
return t.call(e, n, r, i);
};
}
return function() {
return t.apply(e, arguments);
};
};
},
339: function(t, e) {
t.exports = function(t) {
if ("function" != typeof t) throw TypeError(t + " is not a function!");
return t;
};
},
34: function(t, e, n) {
var r, i, o, s;
function a(t) {
return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
s = function(t) {
"use strict";
function e(t, e, n) {
var r, i;
return "m" === n ? e ? "минута" : "минуту" : t + " " + (r = +t, i = {
ss: e ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
mm: e ? "минута_минуты_минут" : "минуту_минуты_минут",
hh: "час_часа_часов",
dd: "день_дня_дней",
MM: "месяц_месяца_месяцев",
yy: "год_года_лет"
}[n].split("_"), r % 10 == 1 && r % 100 != 11 ? i[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? i[1] : i[2]);
}
var n = [ /^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i ];
return t.defineLocale("ru", {
months: {
format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
},
monthsShort: {
format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
},
weekdays: {
standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
},
weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
monthsParse: n,
longMonthsParse: n,
shortMonthsParse: n,
monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
longDateFormat: {
LT: "H:mm",
LTS: "H:mm:ss",
L: "DD.MM.YYYY",
LL: "D MMMM YYYY г.",
LLL: "D MMMM YYYY г., H:mm",
LLLL: "dddd, D MMMM YYYY г., H:mm"
},
calendar: {
sameDay: "[Сегодня, в] LT",
nextDay: "[Завтра, в] LT",
lastDay: "[Вчера, в] LT",
nextWeek: function(t) {
if (t.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
switch (this.day()) {
case 0:
return "[В следующее] dddd, [в] LT";

case 1:
case 2:
case 4:
return "[В следующий] dddd, [в] LT";

case 3:
case 5:
case 6:
return "[В следующую] dddd, [в] LT";
}
},
lastWeek: function(t) {
if (t.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
switch (this.day()) {
case 0:
return "[В прошлое] dddd, [в] LT";

case 1:
case 2:
case 4:
return "[В прошлый] dddd, [в] LT";

case 3:
case 5:
case 6:
return "[В прошлую] dddd, [в] LT";
}
},
sameElse: "L"
},
relativeTime: {
future: "через %s",
past: "%s назад",
s: "несколько секунд",
ss: e,
m: e,
mm: e,
h: "час",
hh: e,
d: "день",
dd: e,
M: "месяц",
MM: e,
y: "год",
yy: e
},
meridiemParse: /ночи|утра|дня|вечера/i,
isPM: function(t) {
return /^(дня|вечера)$/.test(t);
},
meridiem: function(t, e, n) {
return t < 4 ? "ночи" : t < 12 ? "утра" : t < 17 ? "дня" : "вечера";
},
dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
ordinal: function(t, e) {
switch (e) {
case "M":
case "d":
case "DDD":
return t + "-й";

case "D":
return t + "-го";

case "w":
case "W":
return t + "-я";

default:
return t;
}
},
week: {
dow: 1,
doy: 4
}
});
}, "object" === a(e) && void 0 !== t ? s(n(33)) : (i = [ n(33) ], void 0 === (o = "function" == typeof (r = s) ? r.apply(e, i) : r) || (t.exports = o));
},
340: function(t, e) {
var n = {}.toString;
t.exports = function(t) {
return n.call(t).slice(8, -1);
};
},
341: function(t, e) {
t.exports = function(t) {
if (void 0 == t) throw TypeError("Can't call method on  " + t);
return t;
};
},
342: function(t, e) {
var n = Math.ceil, r = Math.floor;
t.exports = function(t) {
return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
};
},
344: function(t, e, n) {
var r = n(284);
t.exports = function(t, e) {
if (!r(t)) return t;
var n, i;
if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
throw TypeError("Can't convert object to primitive value");
};
},
346: function(t, e) {
t.exports = function(t, e) {
return {
enumerable: !(1 & t),
configurable: !(2 & t),
writable: !(4 & t),
value: e
};
};
},
347: function(t, e) {
var n = 0, r = Math.random();
t.exports = function(t) {
return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
};
},
348: function(t, e) {
t.exports = !1;
},
349: function(t, e, n) {
var r = n(460), i = n(435);
t.exports = Object.keys || function(t) {
return r(t, i);
};
},
35: function(t, e, n) {
n(36), t.exports = n(289).String.matchAll;
},
350: function(t, e, n) {
var r = n(342), i = Math.max, o = Math.min;
t.exports = function(t, e) {
return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e);
};
},
351: function(t, e, n) {
var r = n(285), i = n(461), o = n(435), s = n(434)("IE_PROTO"), a = function() {}, u = function() {
var t, e = n(431)("iframe"), r = o.length;
for (e.style.display = "none", n(437).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), 
t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--; ) delete u.prototype[o[r]];
return u();
};
t.exports = Object.create || function(t, e) {
var n;
return null !== t ? (a.prototype = r(t), n = new a(), a.prototype = null, n[s] = t) : n = u(), 
void 0 === e ? n : i(n, e);
};
},
354: function(t, e, n) {
var r = n(287).f, i = n(293), o = n(286)("toStringTag");
t.exports = function(t, e, n) {
t && !i(t = n ? t : t.prototype, o) && r(t, o, {
configurable: !0,
value: e
});
};
},
36: function(t, e, n) {
"use strict";
var r = n(16), i = n(341), o = n(290), s = n(446), a = n(453), u = RegExp.prototype, c = function(t, e) {
this._r = t, this._s = e;
};
n(472)(c, "RegExp String", function() {
var t = this._r.exec(this._s);
return {
value: t,
done: null === t
};
}), r(r.P, "String", {
matchAll: function(t) {
if (i(this), !s(t)) throw TypeError(t + " is not a regexp!");
var e = String(this), n = "flags" in u ? String(t.flags) : a.call(t), r = new RegExp(t.source, ~n.indexOf("g") ? n : "g" + n);
return r.lastIndex = o(t.lastIndex), new c(r, e);
}
});
},
361: function(t, e) {
t.exports = function(t) {
function e() {
e.wasCalled || (e.wasCalled = !0, t());
}
return setTimeout(e, 500), e;
};
},
416: function(t, e, n) {
var r = n(340);
t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
return "String" == r(t) ? t.split("") : Object(t);
};
},
420: function(t, e, n) {
var r = n(331), i = n(290), o = n(350);
t.exports = function(t) {
return function(e, n, s) {
var a, u = r(e), c = i(u.length), l = o(s, c);
if (t && n != n) {
for (;c > l; ) if ((a = u[l++]) != a) return !0;
} else for (;c > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0;
return !t && -1;
};
};
},
43: function(t, e, n) {
var r = {
"./ru": 34,
"./ru.js": 34
};
function i(t) {
var e = o(t);
return n(e);
}
function o(t) {
var e = r[t];
if (!(e + 1)) {
var n = new Error("Cannot find module '" + t + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return e;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, t.exports = i, i.id = 43;
},
431: function(t, e, n) {
var r = n(284), i = n(96).document, o = r(i) && r(i.createElement);
t.exports = function(t) {
return o ? i.createElement(t) : {};
};
},
432: function(t, e, n) {
var r = n(289), i = n(96), o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
(t.exports = function(t, e) {
return o[t] || (o[t] = void 0 !== e ? e : {});
})("versions", []).push({
version: r.version,
mode: n(348) ? "pure" : "global",
copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
});
},
434: function(t, e, n) {
var r = n(432)("keys"), i = n(347);
t.exports = function(t) {
return r[t] || (r[t] = i(t));
};
},
435: function(t, e) {
t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
},
437: function(t, e, n) {
var r = n(96).document;
t.exports = r && r.documentElement;
},
446: function(t, e, n) {
var r = n(284), i = n(340), o = n(286)("match");
t.exports = function(t) {
var e;
return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t));
};
},
45: function(t, e) {
t.exports = function(t, e) {
var n, r, i = !1;
return function o() {
if (i) return n = arguments, void (r = this);
t.apply(this, arguments), i = !0, setTimeout(function() {
i = !1, n && (o.apply(r, n), n = r = null);
}, e);
};
};
},
453: function(t, e, n) {
"use strict";
var r = n(285);
t.exports = function() {
var t = r(this), e = "";
return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), 
t.unicode && (e += "u"), t.sticky && (e += "y"), e;
};
},
458: function(t, e, n) {
t.exports = !n(288) && !n(90)(function() {
return 7 != Object.defineProperty(n(431)("div"), "a", {
get: function() {
return 7;
}
}).a;
});
},
46: function(t, e) {
t.exports = function(t) {
return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), 
Object.defineProperty(t, "loaded", {
enumerable: !0,
get: function() {
return t.l;
}
}), Object.defineProperty(t, "id", {
enumerable: !0,
get: function() {
return t.i;
}
}), t.webpackPolyfill = 1), t;
};
},
460: function(t, e, n) {
var r = n(293), i = n(331), o = n(420)(!1), s = n(434)("IE_PROTO");
t.exports = function(t, e) {
var n, a = i(t), u = 0, c = [];
for (n in a) n != s && r(a, n) && c.push(n);
for (;e.length > u; ) r(a, n = e[u++]) && (~o(c, n) || c.push(n));
return c;
};
},
461: function(t, e, n) {
var r = n(287), i = n(285), o = n(349);
t.exports = n(288) ? Object.defineProperties : function(t, e) {
i(t);
for (var n, s = o(e), a = s.length, u = 0; a > u; ) r.f(t, n = s[u++], e[n]);
return t;
};
},
472: function(t, e, n) {
"use strict";
var r = n(351), i = n(346), o = n(354), s = {};
n(330)(s, n(286)("iterator"), function() {
return this;
}), t.exports = function(t, e, n) {
t.prototype = r(s, {
next: i(1, n)
}), o(t, e + " Iterator");
};
},
53: function(t, e, n) {
var r = n(54), i = n(45), o = [];
e.iframe = function(t) {
r.async(t, function(e, n) {
n && (t.style.height = n + "px");
});
}, e.codeTabs = function(t) {
function e() {
var e = t.closest(".code-tabs"), n = (t.closest("[data-code-tabs-content]"), e.querySelector("[data-code-tabs-switches]"));
n.firstElementChild.offsetWidth > n.offsetWidth ? e.classList.add("code-tabs_scroll") : e.classList.remove("code-tabs_scroll");
}
e(), o.push(e);
}, window.addEventListener("resize", i(function() {
o.forEach(function(t) {
t();
});
}, 200));
},
54: function(t, e, n) {
var r = n(55);
function i(t, e) {
var n = setTimeout(function() {
e(new Error("timeout"));
}, 500);
function i(t, r) {
clearTimeout(n), e(t, r);
}
try {
(t.contentDocument || t.contentWindow.document).body;
} catch (t) {
!function(t, e) {
throw new Error("Not implemented yet");
}();
}
if (!t.offsetWidth) {
var o = t.cloneNode(!0);
return o.name = "", o.style.height = "50px", o.style.position = "absolute", o.style.display = "block", 
o.style.top = "10000px", o.onload = function() {
var e = r(this.contentDocument);
t.style.display = "block", o.remove(), i(null, e);
}, void document.body.appendChild(o);
}
t.style.display = "block", t.style.height = "1px";
var s = r(t.contentDocument);
t.style.height = "", i(null, s);
}
i.async = function(t, e) {
setTimeout(function() {
i(t, e);
}, 0);
}, t.exports = i;
},
55: function(t, e, n) {
var r, i = n(56);
t.exports = function(t) {
t = t || document;
var e = Math.max(t.body.scrollHeight, t.documentElement.scrollHeight, t.body.offsetHeight, t.documentElement.offsetHeight, t.body.clientHeight, t.documentElement.clientHeight);
return t.documentElement.scrollWidth > t.documentElement.clientWidth && (r || (r = i()), 
e += r), e;
};
},
56: function(t, e) {
t.exports = function() {
var t = document.createElement("div");
if (t.style.cssText = "visibility:hidden;height:100px", !document.body) throw new Error("getScrollbarHeight called to early: no document.body");
document.body.appendChild(t);
var e = t.offsetWidth;
t.style.overflow = "scroll";
var n = document.createElement("div");
n.style.width = "100%", t.appendChild(n);
var r = n.offsetWidth;
return t.parentNode.removeChild(t), e - r;
};
},
73: function(t, e, n) {
t.exports = n(432)("native-function-to-string", Function.toString);
},
793: function(t, e) {
var n = "//" + window.disqus_shortname + ".disqus.com/embed.js", r = "//" + window.disqus_shortname + ".disqus.com/count.js";
function i() {
var t = document.getElementById("disqus_thread");
if (!t.classList.contains("disqus-loading")) {
t.classList.add("disqus-loading");
var e = new Spinner({
size: "large"
});
t.append(e.elem), e.start();
var r = document.createElement("script");
r.src = n, r.setAttribute("data-timestamp", +new Date()), document.head.appendChild(r), 
r.onload = function() {
e.stop(), e.elem.remove();
};
}
}
e.loadDisqus = i, e.loadDisqusComments = function() {
var t = document.getElementById("disqus_comments");
if (t) {
window.disqus_config(), t.dataset.disqusIdentifier = window.page.identifier;
var e = document.createElement("script");
e.id = "dsq-count-scr", e.src = r, e.setAttribute("data-timestamp", +new Date()), 
document.head.appendChild(e);
}
}, e.loadDisqusIfVisible = function() {
if (window.disqus_enabled && !document.querySelector('script[src="'.concat(n, '"]'))) {
var t = document.getElementById("disqus_thread");
if (!t.hasChildNodes()) {
var e = t.getBoundingClientRect();
e.top > document.documentElement.clientHeight + 150 || e.bottom < -150 || i();
}
}
};
},
80: function(t, e, n) {
var r, i, o, s;
function a(t) {
return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
s = function(t) {
"use strict";
return t.defineLocale("zh-cn", {
months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
weekdaysMin: "日_一_二_三_四_五_六".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "YYYY/MM/DD",
LL: "YYYY年M月D日",
LLL: "YYYY年M月D日Ah点mm分",
LLLL: "YYYY年M月D日ddddAh点mm分",
l: "YYYY/M/D",
ll: "YYYY年M月D日",
lll: "YYYY年M月D日 HH:mm",
llll: "YYYY年M月D日dddd HH:mm"
},
meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
meridiemHour: function(t, e) {
return 12 === t && (t = 0), "凌晨" === e || "早上" === e || "上午" === e ? t : "下午" === e || "晚上" === e ? t + 12 : t >= 11 ? t : t + 12;
},
meridiem: function(t, e, n) {
var r = 100 * t + e;
return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上";
},
calendar: {
sameDay: "[今天]LT",
nextDay: "[明天]LT",
nextWeek: "[下]ddddLT",
lastDay: "[昨天]LT",
lastWeek: "[上]ddddLT",
sameElse: "L"
},
dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
ordinal: function(t, e) {
switch (e) {
case "d":
case "D":
case "DDD":
return t + "日";

case "M":
return t + "月";

case "w":
case "W":
return t + "周";

default:
return t;
}
},
relativeTime: {
future: "%s内",
past: "%s前",
s: "几秒",
ss: "%d 秒",
m: "1 分钟",
mm: "%d 分钟",
h: "1 小时",
hh: "%d 小时",
d: "1 天",
dd: "%d 天",
M: "1 个月",
MM: "%d 个月",
y: "1 年",
yy: "%d 年"
},
week: {
dow: 1,
doy: 4
}
});
}, "object" === a(e) && void 0 !== t ? s(n(33)) : (i = [ n(33) ], void 0 === (o = "function" == typeof (r = s) ? r.apply(e, i) : r) || (t.exports = o));
},
9: function(t, e) {
function n(t) {
if (t = t || {}, this.elem = t.elem, this.size = t.size || "medium", this.class = t.class ? " " + t.class : "", 
this.elemClass = t.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
n.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, n.prototype.stop = function() {
var t = this.elem.querySelector(".spinner");
t && (t.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = n, t.exports = n;
},
90: function(t, e) {
t.exports = function(t) {
try {
return !!t();
} catch (t) {
return !0;
}
};
},
91: function(t, e, n) {
var r = n(0).lang, i = n(33);
"ru" === r ? (n(34), i.updateLocale("ru", {
monthsShort: {
format: "янв_февр_мар_апр_мая_июня_июля_авг_сент_окт_нояб_дек".split("_"),
standalone: "янв_февр_март_апр_май_июнь_июль_авг_сент_окт_нояб_дек".split("_")
}
})) : "zh" === r ? n(80) : "en" !== r && n(43)("./" + r), t.exports = i;
},
96: function(t, e) {
var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
"number" == typeof __g && (__g = n);
}
});