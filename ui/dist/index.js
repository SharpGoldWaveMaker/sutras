import { defineComponent as D, inject as R, computed as w, createVNode as f, openBlock as vt, createElementBlock as mt, createElementVNode as We, Fragment as Be, isVNode as Qe, Comment as Ku, Text as ls, Transition as gt, withDirectives as Eo, resolveDirective as Xu, ref as F, shallowRef as j, watch as Y, onMounted as ke, onBeforeUnmount as Me, cloneVNode as mr, nextTick as Fe, onUpdated as Dn, onUnmounted as Jr, toRef as gr, withModifiers as qi, vShow as ei, provide as se, onBeforeMount as ss, Teleport as cs, watchEffect as lt, getCurrentInstance as Rt, unref as xt, triggerRef as Uu, h as hr, render as us, reactive as Io, toRaw as Qi, toRefs as ti, mergeProps as Gu, createTextVNode as ds } from "vue";
import { ReplMetaKey as Nt, DeviceTypeInjectKey as ni, DeviceTypeChangeInjectKey as Yu, ReplFullscreenKey as Rn, SSRModeInjectKey as qu, SSRModeChangeInjectKey as Qu, useRepl as fs, ConsoleAPIInjectKey as Zu, ConsoleLinkStoreInjectKey as Ju, ReplCodePreviewRendersKey as ps, PreviewModeInjectKey as vs, ReplPattenKey as Mo, ReplCodeShowLangKey as ed, ReplFilesInjectKey as td, ReplActiveFileKey as nd, ReplActiveFileChangeKey as od, ReplSetSourceInjectKey as rd, ReplCollapseKey as oi, ReplPageDataInjectKey as id, ReplCollapseChangeKey as ms, ReplFullscreenChangeKey as ad, ReplPatternChangeKey as ld, useDemoProvider as sd } from "@sgwm-sutras/hooks";
import { useNamespace as ze, classNames as nn } from "@sgwm-sutras/style";
import { useElementSize as cd } from "@vueuse/core";
import { ConsoleProvider as ud, Console as dd } from "@sgwm-sutras/console";
import { uniqueId as fd, langFromExtension as pd, find as vd } from "@sgwm-sutras/shared";
import { isSpecialLang as md, getHighlighter as gd } from "shiki";
import { transformerNotationDiff as hd, transformerNotationFocus as yd, transformerNotationHighlight as bd, transformerNotationErrorLevel as wd, transformerCompactLineOptions as Sd } from "@shikijs/transformers";
import { Splitpanes as Zi, Pane as jn } from "splitpanes";
const ri = /* @__PURE__ */ D({
  name: "PreviewLayout",
  props: {
    showHeader: {
      type: Boolean,
      default: !0
    },
    compact: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, {
    slots: t
  }) {
    const n = ze("preview-layout"), o = R(Nt), r = nn(n.b(), {
      [n.m("with-extra")]: !!t.extra,
      [n.m("with-header")]: !!e.showHeader
    }), i = w(() => {
      const a = o.value.previewHeight;
      if (a)
        return {
          height: typeof a == "string" ? a : `${a}px`
        };
    });
    return () => {
      var a, l, s, u, d;
      return f("div", {
        class: r,
        style: i.value
      }, [e.showHeader && f("div", {
        class: n.e("header")
      }, [f("div", {
        class: n.e("header-left")
      }, [(a = t.left) == null ? void 0 : a.call(t)]), f("div", {
        class: n.e("header-center")
      }, [(l = t.center) == null ? void 0 : l.call(t)]), t.right && f("div", {
        class: n.e("header-right")
      }, [(s = t.right) == null ? void 0 : s.call(t)])]), f("div", {
        class: n.e("main")
      }, [(u = t.default) == null ? void 0 : u.call(t)]), t.extra && f("div", {
        class: n.e("extra")
      }, [(d = t.extra) == null ? void 0 : d.call(t)])]);
    };
  }
}), $d = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.2em",
  height: "1.2em",
  viewBox: "0 0 32 32"
}, Cd = /* @__PURE__ */ We("path", {
  fill: "currentColor",
  d: "M10 30H4a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M4 16v12h6V16z"
}, null, -1), xd = /* @__PURE__ */ We("path", {
  fill: "currentColor",
  d: "M28 4H6a2 2 0 0 0-2 2v6h2V6h22v14H14v2h2v4h-2v2h9v-2h-5v-4h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
}, null, -1), Od = [
  Cd,
  xd
];
function Td(e, t) {
  return vt(), mt("svg", $d, [...Od]);
}
const Pd = { render: Td }, _d = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.2em",
  height: "1.2em",
  viewBox: "0 0 32 32"
}, Ed = /* @__PURE__ */ We("path", {
  fill: "currentColor",
  d: "M16 22 6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z"
}, null, -1), Id = [
  Ed
];
function Md(e, t) {
  return vt(), mt("svg", _d, [...Id]);
}
const Ad = { render: Md };
function m() {
  return m = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, m.apply(this, arguments);
}
function bn(e) {
  "@babel/helpers - typeof";
  return bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bn(e);
}
function Dd(e, t) {
  if (bn(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (bn(o) != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Rd(e) {
  var t = Dd(e, "string");
  return bn(t) == "symbol" ? t : t + "";
}
function Nd(e, t, n) {
  return t = Rd(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ji(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ji(Object(n), !0).forEach(function(o) {
      Nd(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ji(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Bd(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
  }
}
function gs(e, t, n) {
  return n && Bd(e, n), e;
}
function to() {
  return (to = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }).apply(this, arguments);
}
function hs(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function ys(e, t) {
  if (e == null)
    return {};
  var n, o, r = {}, i = Object.keys(e);
  for (o = 0; o < i.length; o++)
    t.indexOf(n = i[o]) >= 0 || (r[n] = e[n]);
  return r;
}
function ea(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var bs = Object.prototype, ws = bs.toString, zd = bs.hasOwnProperty, Ss = /^\s*function (\w+)/;
function ta(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var o = n.toString().match(Ss);
    return o ? o[1] : "";
  }
  return "";
}
var At = function(e) {
  var t, n;
  return ea(e) !== !1 && typeof (t = e.constructor) == "function" && ea(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, $s = function(e) {
  return e;
}, Se = $s;
if (process.env.NODE_ENV !== "production") {
  var Hd = typeof console < "u";
  Se = Hd ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : $s;
}
var wn = function(e, t) {
  return zd.call(e, t);
}, jd = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, Xt = Array.isArray || function(e) {
  return ws.call(e) === "[object Array]";
}, Ut = function(e) {
  return ws.call(e) === "[object Function]";
}, uo = function(e) {
  return At(e) && wn(e, "_vueTypes_name");
}, Cs = function(e) {
  return At(e) && (wn(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return wn(e, t);
  }));
};
function ii(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function Bt(e, t, n) {
  var o, r = !0, i = "";
  o = At(e) ? e : { type: e };
  var a = uo(o) ? o._vueTypes_name + " - " : "";
  if (Cs(o) && o.type !== null) {
    if (o.type === void 0 || o.type === !0 || !o.required && t === void 0)
      return r;
    Xt(o.type) ? (r = o.type.some(function(c) {
      return Bt(c, t) === !0;
    }), i = o.type.map(function(c) {
      return ta(c);
    }).join(" or ")) : r = (i = ta(o)) === "Array" ? Xt(t) : i === "Object" ? At(t) : i === "String" || i === "Number" || i === "Boolean" || i === "Function" ? function(c) {
      if (c == null)
        return "";
      var p = c.constructor.toString().match(Ss);
      return p ? p[1] : "";
    }(t) === i : t instanceof o.type;
  }
  if (!r) {
    var l = a + 'value "' + t + '" should be of type "' + i + '"';
    return l;
  }
  if (wn(o, "validator") && Ut(o.validator)) {
    var s = Se, u = [];
    if (Se = function(c) {
      u.push(c);
    }, r = o.validator(t), Se = s, !r) {
      var d = (u.length > 1 ? "* " : "") + u.join(`
* `);
      return u.length = 0, d;
    }
  }
  return r;
}
function Oe(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(r) {
    return r !== void 0 || this.default ? Ut(r) || Bt(this, r) === !0 ? (this.default = Xt(r) ? function() {
      return [].concat(r);
    } : At(r) ? function() {
      return Object.assign({}, r);
    } : r, this) : (Se(this._vueTypes_name + ' - invalid default value: "' + r + '"'), this) : this;
  } } }), o = n.validator;
  return Ut(o) && (n.validator = ii(o, n)), n;
}
function Ve(e, t) {
  var n = Oe(e, t);
  return Object.defineProperty(n, "validate", { value: function(o) {
    return Ut(this.validator) && Se(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = ii(o, this), this;
  } });
}
function na(e, t, n) {
  var o, r, i = (o = t, r = {}, Object.getOwnPropertyNames(o).forEach(function(c) {
    r[c] = Object.getOwnPropertyDescriptor(o, c);
  }), Object.defineProperties({}, r));
  if (i._vueTypes_name = e, !At(n))
    return i;
  var a, l, s = n.validator, u = ys(n, ["validator"]);
  if (Ut(s)) {
    var d = i.validator;
    d && (d = (l = (a = d).__original) !== null && l !== void 0 ? l : a), i.validator = ii(d ? function(c) {
      return d.call(this, c) && s.call(this, c);
    } : s, i);
  }
  return Object.assign(i, u);
}
function Ao(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var Ld = function() {
  return Ve("any", {});
}, Fd = function() {
  return Ve("function", { type: Function });
}, Vd = function() {
  return Ve("boolean", { type: Boolean });
}, Wd = function() {
  return Ve("string", { type: String });
}, kd = function() {
  return Ve("number", { type: Number });
}, Kd = function() {
  return Ve("array", { type: Array });
}, Xd = function() {
  return Ve("object", { type: Object });
}, Ud = function() {
  return Oe("integer", { type: Number, validator: function(e) {
    return jd(e);
  } });
}, Gd = function() {
  return Oe("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function Yd(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return Oe(e.name || "<<anonymous function>>", { validator: function(n) {
    var o = e(n);
    return o || Se(this._vueTypes_name + " - " + t), o;
  } });
}
function qd(e) {
  if (!Xt(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(o, r) {
    if (r != null) {
      var i = r.constructor;
      o.indexOf(i) === -1 && o.push(i);
    }
    return o;
  }, []);
  return Oe("oneOf", { type: n.length > 0 ? n : void 0, validator: function(o) {
    var r = e.indexOf(o) !== -1;
    return r || Se(t), r;
  } });
}
function Qd(e) {
  if (!Xt(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], o = 0; o < e.length; o += 1) {
    var r = e[o];
    if (Cs(r)) {
      if (uo(r) && r._vueTypes_name === "oneOf") {
        n = n.concat(r.type);
        continue;
      }
      if (Ut(r.validator) && (t = !0), r.type !== !0 && r.type) {
        n = n.concat(r.type);
        continue;
      }
    }
    n.push(r);
  }
  return n = n.filter(function(i, a) {
    return n.indexOf(i) === a;
  }), Oe("oneOfType", t ? { type: n, validator: function(i) {
    var a = [], l = e.some(function(s) {
      var u = Bt(uo(s) && s._vueTypes_name === "oneOf" ? s.type || null : s, i);
      return typeof u == "string" && a.push(u), u === !0;
    });
    return l || Se("oneOfType - provided value does not match any of the " + a.length + ` passed-in validators:
` + Ao(a.join(`
`))), l;
  } } : { type: n });
}
function Zd(e) {
  return Oe("arrayOf", { type: Array, validator: function(t) {
    var n, o = t.every(function(r) {
      return (n = Bt(e, r)) === !0;
    });
    return o || Se(`arrayOf - value validation error:
` + Ao(n)), o;
  } });
}
function Jd(e) {
  return Oe("instanceOf", { type: e });
}
function ef(e) {
  return Oe("objectOf", { type: Object, validator: function(t) {
    var n, o = Object.keys(t).every(function(r) {
      return (n = Bt(e, t[r])) === !0;
    });
    return o || Se(`objectOf - value validation error:
` + Ao(n)), o;
  } });
}
function tf(e) {
  var t = Object.keys(e), n = t.filter(function(r) {
    var i;
    return !!(!((i = e[r]) === null || i === void 0) && i.required);
  }), o = Oe("shape", { type: Object, validator: function(r) {
    var i = this;
    if (!At(r))
      return !1;
    var a = Object.keys(r);
    if (n.length > 0 && n.some(function(s) {
      return a.indexOf(s) === -1;
    })) {
      var l = n.filter(function(s) {
        return a.indexOf(s) === -1;
      });
      return Se(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
    }
    return a.every(function(s) {
      if (t.indexOf(s) === -1)
        return i._vueTypes_isLoose === !0 || (Se('shape - shape definition does not include a "' + s + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var u = Bt(e[s], r[s]);
      return typeof u == "string" && Se('shape - "' + s + `" property validation error:
 ` + Ao(u)), u === !0;
    });
  } });
  return Object.defineProperty(o, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(o, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), o;
}
var je = function() {
  function e() {
  }
  return e.extend = function(t) {
    var n = this;
    if (Xt(t))
      return t.forEach(function(c) {
        return n.extend(c);
      }), this;
    var o = t.name, r = t.validate, i = r !== void 0 && r, a = t.getter, l = a !== void 0 && a, s = ys(t, ["name", "validate", "getter"]);
    if (wn(this, o))
      throw new TypeError('[VueTypes error]: Type "' + o + '" already defined');
    var u, d = s.type;
    return uo(d) ? (delete s.type, Object.defineProperty(this, o, l ? { get: function() {
      return na(o, d, s);
    } } : { value: function() {
      var c, p = na(o, d, s);
      return p.validator && (p.validator = (c = p.validator).bind.apply(c, [p].concat([].slice.call(arguments)))), p;
    } })) : (u = l ? { get: function() {
      var c = Object.assign({}, s);
      return i ? Ve(o, c) : Oe(o, c);
    }, enumerable: !0 } : { value: function() {
      var c, p, v = Object.assign({}, s);
      return c = i ? Ve(o, v) : Oe(o, v), v.validator && (c.validator = (p = v.validator).bind.apply(p, [c].concat([].slice.call(arguments)))), c;
    }, enumerable: !0 }, Object.defineProperty(this, o, u));
  }, gs(e, null, [{ key: "any", get: function() {
    return Ld();
  } }, { key: "func", get: function() {
    return Fd().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return Vd().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return Wd().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return kd().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return Kd().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return Xd().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return Ud().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return Gd();
  } }]), e;
}();
function xs(e) {
  var t;
  return e === void 0 && (e = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (t = function(n) {
    function o() {
      return n.apply(this, arguments) || this;
    }
    return hs(o, n), gs(o, null, [{ key: "sensibleDefaults", get: function() {
      return to({}, this.defaults);
    }, set: function(r) {
      this.defaults = r !== !1 ? to({}, r !== !0 ? r : e) : {};
    } }]), o;
  }(je)).defaults = to({}, e), t;
}
je.defaults = {}, je.custom = Yd, je.oneOf = qd, je.instanceOf = Jd, je.oneOfType = Qd, je.arrayOf = Zd, je.objectOf = ef, je.shape = tf, je.utils = { validate: function(e, t) {
  return Bt(t, e) === !0;
}, toType: function(e, t, n) {
  return n === void 0 && (n = !1), n ? Ve(e, t) : Oe(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return hs(t, e), t;
})(xs());
const M = xs({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
M.extend([{
  name: "looseBool",
  getter: !0,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: !0,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: !0,
  type: null
}]);
function nf() {
  return "";
}
function of(e) {
  return e ? e.ownerDocument : window.document;
}
function Os() {
}
const rf = () => ({
  action: M.oneOfType([M.string, M.arrayOf(M.string)]).def([]),
  showAction: M.any.def([]),
  hideAction: M.any.def([]),
  getPopupClassNameFromAlign: M.any.def(nf),
  onPopupVisibleChange: Function,
  afterPopupVisibleChange: M.func.def(Os),
  popup: M.any,
  popupStyle: {
    type: Object,
    default: void 0
  },
  prefixCls: M.string.def("rc-trigger-popup"),
  popupClassName: M.string.def(""),
  popupPlacement: String,
  builtinPlacements: M.object,
  popupTransitionName: String,
  popupAnimation: M.any,
  mouseEnterDelay: M.number.def(0),
  mouseLeaveDelay: M.number.def(0.1),
  zIndex: Number,
  focusDelay: M.number.def(0),
  blurDelay: M.number.def(0.15),
  getPopupContainer: Function,
  getDocument: M.func.def(of),
  forceRender: {
    type: Boolean,
    default: void 0
  },
  destroyPopupOnHide: {
    type: Boolean,
    default: !1
  },
  mask: {
    type: Boolean,
    default: !1
  },
  maskClosable: {
    type: Boolean,
    default: !0
  },
  // onPopupAlign: PropTypes.func.def(noop),
  popupAlign: M.object.def(() => ({})),
  popupVisible: {
    type: Boolean,
    default: void 0
  },
  defaultPopupVisible: {
    type: Boolean,
    default: !1
  },
  maskTransitionName: String,
  maskAnimation: String,
  stretch: String,
  alignPoint: {
    type: Boolean,
    default: void 0
  },
  autoDestroy: {
    type: Boolean,
    default: !1
  },
  mobile: Object,
  getTriggerDOMNode: Function
});
function $t(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
let Ts = (e) => setTimeout(e, 16), Ps = (e) => clearTimeout(e);
typeof window < "u" && "requestAnimationFrame" in window && (Ts = (e) => window.requestAnimationFrame(e), Ps = (e) => window.cancelAnimationFrame(e));
let oa = 0;
const ai = /* @__PURE__ */ new Map();
function _s(e) {
  ai.delete(e);
}
function ye(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  oa += 1;
  const n = oa;
  function o(r) {
    if (r === 0)
      _s(n), e();
    else {
      const i = Ts(() => {
        o(r - 1);
      });
      ai.set(n, i);
    }
  }
  return o(t), n;
}
ye.cancel = (e) => {
  const t = ai.get(e);
  return _s(t), Ps(t);
};
const af = (e) => typeof e == "function", lf = Array.isArray, sf = (e) => typeof e == "string", cf = (e) => e !== null && typeof e == "object", uf = /^on[^a-z]/, df = (e) => uf.test(e), Es = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ff = /-(\w)/g, Is = Es((e) => e.replace(ff, (t, n) => n ? n.toUpperCase() : "")), pf = /\B([A-Z])/g, vf = Es((e) => e.replace(pf, "-$1").toLowerCase()), mf = Object.prototype.hasOwnProperty, ra = (e, t) => mf.call(e, t);
function gf(e, t, n, o) {
  const r = e[n];
  if (r != null) {
    const i = ra(r, "default");
    if (i && o === void 0) {
      const a = r.default;
      o = r.type !== Function && af(a) ? a() : a;
    }
    r.type === Boolean && (!ra(t, n) && !i ? o = !1 : o === "" && (o = !0));
  }
  return o;
}
function ae() {
  const e = [];
  for (let t = 0; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (sf(n))
        e.push(n);
      else if (lf(n))
        for (let o = 0; o < n.length; o++) {
          const r = ae(n[o]);
          r && e.push(r);
        }
      else if (cf(n))
        for (const o in n)
          n[o] && e.push(o);
    }
  }
  return e.join(" ");
}
const yr = (e) => e != null && e !== "", Nn = (e, t) => {
  const n = m({}, e);
  return Object.keys(t).forEach((o) => {
    const r = n[o];
    if (r)
      r.type || r.default ? r.default = t[o] : r.def ? r.def(t[o]) : n[o] = {
        type: r,
        default: t[o]
      };
    else
      throw new Error(`not have ${o} prop`);
  }), n;
}, hf = (e) => {
  const t = Object.keys(e), n = {}, o = {}, r = {};
  for (let i = 0, a = t.length; i < a; i++) {
    const l = t[i];
    df(l) ? (n[l[2].toLowerCase() + l.slice(3)] = e[l], o[l] = e[l]) : r[l] = e[l];
  }
  return {
    onEvents: o,
    events: n,
    extraAttrs: r
  };
}, yf = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n = {}, o = /;(?![^(]*\))/g, r = /:(.+)/;
  return typeof e == "object" ? e : (e.split(o).forEach(function(i) {
    if (i) {
      const a = i.split(r);
      if (a.length > 1) {
        const l = t ? Is(a[0].trim()) : a[0].trim();
        n[l] = a[1].trim();
      }
    }
  }), n);
}, bf = (e, t) => e[t] !== void 0, Ms = Symbol("skipFlatten"), xe = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = Array.isArray(e) ? e : [e], o = [];
  return n.forEach((r) => {
    Array.isArray(r) ? o.push(...xe(r, t)) : r && r.type === Be ? r.key === Ms ? o.push(r) : o.push(...xe(r.children, t)) : r && Qe(r) ? t && !As(r) ? o.push(r) : t || o.push(r) : yr(r) && o.push(r);
  }), o;
}, wf = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (Qe(e))
    return e.type === Be ? t === "default" ? xe(e.children) : [] : e.children && e.children[t] ? xe(e.children[t](n)) : [];
  {
    const o = e.$slots[t] && e.$slots[t](n);
    return xe(o);
  }
}, rt = (e) => {
  var t;
  let n = ((t = e == null ? void 0 : e.vnode) === null || t === void 0 ? void 0 : t.el) || e && (e.$el || e);
  for (; n && !n.tagName; )
    n = n.nextSibling;
  return n;
}, Sf = (e) => {
  const t = {};
  if (e.$ && e.$.vnode) {
    const n = e.$.vnode.props || {};
    Object.keys(e.$props).forEach((o) => {
      const r = e.$props[o], i = vf(o);
      (r !== void 0 || i in n) && (t[o] = r);
    });
  } else if (Qe(e) && typeof e.type == "object") {
    const n = e.props || {}, o = {};
    Object.keys(n).forEach((i) => {
      o[Is(i)] = n[i];
    });
    const r = e.type.props || {};
    Object.keys(r).forEach((i) => {
      const a = gf(r, o, i, o[i]);
      (a !== void 0 || i in o) && (t[i] = a);
    });
  }
  return t;
}, $f = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, r;
  if (e.$) {
    const i = e[t];
    if (i !== void 0)
      return typeof i == "function" && o ? i(n) : i;
    r = e.$slots[t], r = o && r ? r(n) : r;
  } else if (Qe(e)) {
    const i = e.props && e.props[t];
    if (i !== void 0 && e.props !== null)
      return typeof i == "function" && o ? i(n) : i;
    e.type === Be ? r = e.children : e.children && e.children[t] && (r = e.children[t], r = o && r ? r(n) : r);
  }
  return Array.isArray(r) && (r = xe(r), r = r.length === 1 ? r[0] : r, r = r.length === 0 ? void 0 : r), r;
};
function ia() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = {};
  return e.$ ? n = m(m({}, n), e.$attrs) : n = m(m({}, n), e.props), hf(n)[t ? "onEvents" : "events"];
}
function Cf(e, t) {
  let o = ((Qe(e) ? e.props : e.$attrs) || {}).style || {};
  return typeof o == "string" && (o = yf(o, t)), o;
}
function xf(e) {
  return e.length === 1 && e[0].type === Be;
}
function As(e) {
  return e && (e.type === Ku || e.type === Be && e.children.length === 0 || e.type === ls && e.children.trim() === "");
}
function on() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const t = [];
  return e.forEach((n) => {
    Array.isArray(n) ? t.push(...n) : (n == null ? void 0 : n.type) === Be ? t.push(...on(n.children)) : t.push(n);
  }), t.filter((n) => !As(n));
}
function Gt(e) {
  return Array.isArray(e) && e.length === 1 && (e = e[0]), e && e.__v_isVNode && typeof e.type != "symbol";
}
function Yt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
  var o, r;
  return (o = t[n]) !== null && o !== void 0 ? o : (r = e[n]) === null || r === void 0 ? void 0 : r.call(e);
}
let Ot = !1;
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Ot = !0;
    }
  });
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
} catch {
}
function pn(e, t, n, o) {
  if (e && e.addEventListener) {
    let r = o;
    r === void 0 && Ot && (t === "touchstart" || t === "touchmove" || t === "wheel") && (r = {
      passive: !1
    }), e.addEventListener(t, n, r);
  }
  return {
    remove: () => {
      e && e.removeEventListener && e.removeEventListener(t, n);
    }
  };
}
const li = {
  visible: Boolean,
  prefixCls: String,
  zIndex: Number,
  destroyPopupOnHide: Boolean,
  forceRender: Boolean,
  // Legacy Motion
  animation: [String, Object],
  transitionName: String,
  // Measure
  stretch: {
    type: String
  },
  // Align
  align: {
    type: Object
  },
  point: {
    type: Object
  },
  getRootDomNode: {
    type: Function
  },
  getClassNameFromAlign: {
    type: Function
  },
  onAlign: {
    type: Function
  },
  onMouseenter: {
    type: Function
  },
  onMouseleave: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
}, Of = m(m({}, li), {
  mobile: {
    type: Object
  }
}), Tf = m(m({}, li), {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
function Ds(e) {
  let {
    prefixCls: t,
    animation: n,
    transitionName: o
  } = e;
  return n ? {
    name: `${t}-${n}`
  } : o ? {
    name: o
  } : {};
}
function Rs(e) {
  const {
    prefixCls: t,
    visible: n,
    zIndex: o,
    mask: r,
    maskAnimation: i,
    maskTransitionName: a
  } = e;
  if (!r)
    return null;
  let l = {};
  return (a || i) && (l = Ds({
    prefixCls: t,
    transitionName: a,
    animation: i
  })), f(gt, H({
    appear: !0
  }, l), {
    default: () => [Eo(f("div", {
      style: {
        zIndex: o
      },
      class: `${t}-mask`
    }, null), [[Xu("if"), n]])]
  });
}
Rs.displayName = "Mask";
const Pf = D({
  compatConfig: {
    MODE: 3
  },
  name: "MobilePopupInner",
  inheritAttrs: !1,
  props: Of,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      slots: o
    } = t;
    const r = F();
    return n({
      forceAlign: () => {
      },
      getElement: () => r.value
    }), () => {
      var i;
      const {
        zIndex: a,
        visible: l,
        prefixCls: s,
        mobile: {
          popupClassName: u,
          popupStyle: d,
          popupMotion: c = {},
          popupRender: p
        } = {}
      } = e, v = m({
        zIndex: a
      }, d);
      let g = xe((i = o.default) === null || i === void 0 ? void 0 : i.call(o));
      g.length > 1 && (g = f("div", {
        class: `${s}-content`
      }, [g])), p && (g = p(g));
      const y = ae(s, u);
      return f(gt, H({
        ref: r
      }, c), {
        default: () => [l ? f("div", {
          class: y,
          style: v
        }, [g]) : null]
      });
    };
  }
});
var _f = function(e, t, n, o) {
  function r(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
    function l(d) {
      try {
        u(o.next(d));
      } catch (c) {
        a(c);
      }
    }
    function s(d) {
      try {
        u(o.throw(d));
      } catch (c) {
        a(c);
      }
    }
    function u(d) {
      d.done ? i(d.value) : r(d.value).then(l, s);
    }
    u((o = o.apply(e, t || [])).next());
  });
};
const aa = ["measure", "align", null, "motion"], Ef = (e, t) => {
  const n = j(null), o = j(), r = j(!1);
  function i(s) {
    r.value || (n.value = s);
  }
  function a() {
    ye.cancel(o.value);
  }
  function l(s) {
    a(), o.value = ye(() => {
      let u = n.value;
      switch (n.value) {
        case "align":
          u = "motion";
          break;
        case "motion":
          u = "stable";
          break;
      }
      i(u), s == null || s();
    });
  }
  return Y(e, () => {
    i("measure");
  }, {
    immediate: !0,
    flush: "post"
  }), ke(() => {
    Y(n, () => {
      switch (n.value) {
        case "measure":
          t();
          break;
      }
      n.value && (o.value = ye(() => _f(void 0, void 0, void 0, function* () {
        const s = aa.indexOf(n.value), u = aa[s + 1];
        u && s !== -1 && i(u);
      })));
    }, {
      immediate: !0,
      flush: "post"
    });
  }), Me(() => {
    r.value = !0, a();
  }), [n, l];
}, If = (e) => {
  const t = j({
    width: 0,
    height: 0
  });
  function n(r) {
    t.value = {
      width: r.offsetWidth,
      height: r.offsetHeight
    };
  }
  return [w(() => {
    const r = {};
    if (e.value) {
      const {
        width: i,
        height: a
      } = t.value;
      e.value.indexOf("height") !== -1 && a ? r.height = `${a}px` : e.value.indexOf("minHeight") !== -1 && a && (r.minHeight = `${a}px`), e.value.indexOf("width") !== -1 && i ? r.width = `${i}px` : e.value.indexOf("minWidth") !== -1 && i && (r.minWidth = `${i}px`);
    }
    return r;
  }), n];
};
function la(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function sa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? la(Object(n), !0).forEach(function(o) {
      Mf(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : la(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function br(e) {
  "@babel/helpers - typeof";
  return br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, br(e);
}
function Mf(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var sn, Af = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function fo() {
  if (sn !== void 0)
    return sn;
  sn = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var n in Af)
    n + t in e && (sn = n);
  return sn;
}
function Ns() {
  return fo() ? "".concat(fo(), "TransitionProperty") : "transitionProperty";
}
function Do() {
  return fo() ? "".concat(fo(), "Transform") : "transform";
}
function ca(e, t) {
  var n = Ns();
  n && (e.style[n] = t, n !== "transitionProperty" && (e.style.transitionProperty = t));
}
function Uo(e, t) {
  var n = Do();
  n && (e.style[n] = t, n !== "transform" && (e.style.transform = t));
}
function Df(e) {
  return e.style.transitionProperty || e.style[Ns()];
}
function Rf(e) {
  var t = window.getComputedStyle(e, null), n = t.getPropertyValue("transform") || t.getPropertyValue(Do());
  if (n && n !== "none") {
    var o = n.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(o[12] || o[4], 0),
      y: parseFloat(o[13] || o[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var Nf = /matrix\((.*)\)/, Bf = /matrix3d\((.*)\)/;
function zf(e, t) {
  var n = window.getComputedStyle(e, null), o = n.getPropertyValue("transform") || n.getPropertyValue(Do());
  if (o && o !== "none") {
    var r, i = o.match(Nf);
    if (i)
      i = i[1], r = i.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), r[4] = t.x, r[5] = t.y, Uo(e, "matrix(".concat(r.join(","), ")"));
    else {
      var a = o.match(Bf)[1];
      r = a.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), r[12] = t.x, r[13] = t.y, Uo(e, "matrix3d(".concat(r.join(","), ")"));
    }
  } else
    Uo(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var Hf = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, Bn;
function ua(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function kt(e, t, n) {
  var o = n;
  if (br(t) === "object") {
    for (var r in t)
      t.hasOwnProperty(r) && kt(e, r, t[r]);
    return;
  }
  if (typeof o < "u") {
    typeof o == "number" && (o = "".concat(o, "px")), e.style[t] = o;
    return;
  }
  return Bn(e, t);
}
function jf(e) {
  var t, n, o, r = e.ownerDocument, i = r.body, a = r && r.documentElement;
  return t = e.getBoundingClientRect(), n = Math.floor(t.left), o = Math.floor(t.top), n -= a.clientLeft || i.clientLeft || 0, o -= a.clientTop || i.clientTop || 0, {
    left: n,
    top: o
  };
}
function Bs(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], o = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var r = e.document;
    n = r.documentElement[o], typeof n != "number" && (n = r.body[o]);
  }
  return n;
}
function zs(e) {
  return Bs(e);
}
function Hs(e) {
  return Bs(e, !0);
}
function Sn(e) {
  var t = jf(e), n = e.ownerDocument, o = n.defaultView || n.parentWindow;
  return t.left += zs(o), t.top += Hs(o), t;
}
function si(e) {
  return e != null && e == e.window;
}
function js(e) {
  return si(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function Lf(e, t, n) {
  var o = n, r = "", i = js(e);
  return o = o || i.defaultView.getComputedStyle(e, null), o && (r = o.getPropertyValue(t) || o[t]), r;
}
var Ff = new RegExp("^(".concat(Hf, ")(?!px)[a-z%]+$"), "i"), Vf = /^(top|right|bottom|left)$/, Go = "currentStyle", Yo = "runtimeStyle", bt = "left", Wf = "px";
function kf(e, t) {
  var n = e[Go] && e[Go][t];
  if (Ff.test(n) && !Vf.test(t)) {
    var o = e.style, r = o[bt], i = e[Yo][bt];
    e[Yo][bt] = e[Go][bt], o[bt] = t === "fontSize" ? "1em" : n || 0, n = o.pixelLeft + Wf, o[bt] = r, e[Yo][bt] = i;
  }
  return n === "" ? "auto" : n;
}
typeof window < "u" && (Bn = window.getComputedStyle ? Lf : kf);
function Ln(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function da(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function fa(e, t, n) {
  kt(e, "position") === "static" && (e.style.position = "relative");
  var o = -999, r = -999, i = Ln("left", n), a = Ln("top", n), l = da(i), s = da(a);
  i !== "left" && (o = 999), a !== "top" && (r = 999);
  var u = "", d = Sn(e);
  ("left" in t || "top" in t) && (u = Df(e) || "", ca(e, "none")), "left" in t && (e.style[l] = "", e.style[i] = "".concat(o, "px")), "top" in t && (e.style[s] = "", e.style[a] = "".concat(r, "px")), ua(e);
  var c = Sn(e), p = {};
  for (var v in t)
    if (t.hasOwnProperty(v)) {
      var g = Ln(v, n), y = v === "left" ? o : r, h = d[v] - c[v];
      g === v ? p[g] = y + h : p[g] = y - h;
    }
  kt(e, p), ua(e), ("left" in t || "top" in t) && ca(e, u);
  var b = {};
  for (var $ in t)
    if (t.hasOwnProperty($)) {
      var x = Ln($, n), _ = t[$] - d[$];
      $ === x ? b[x] = p[x] + _ : b[x] = p[x] - _;
    }
  kt(e, b);
}
function Kf(e, t) {
  var n = Sn(e), o = Rf(e), r = {
    x: o.x,
    y: o.y
  };
  "left" in t && (r.x = o.x + t.left - n.left), "top" in t && (r.y = o.y + t.top - n.top), zf(e, r);
}
function Xf(e, t, n) {
  if (n.ignoreShake) {
    var o = Sn(e), r = o.left.toFixed(0), i = o.top.toFixed(0), a = t.left.toFixed(0), l = t.top.toFixed(0);
    if (r === a && i === l)
      return;
  }
  n.useCssRight || n.useCssBottom ? fa(e, t, n) : n.useCssTransform && Do() in document.body.style ? Kf(e, t) : fa(e, t, n);
}
function ci(e, t) {
  for (var n = 0; n < e.length; n++)
    t(e[n]);
}
function Ls(e) {
  return Bn(e, "boxSizing") === "border-box";
}
var Uf = ["margin", "border", "padding"], wr = -1, Gf = 2, Sr = 1, Yf = 0;
function qf(e, t, n) {
  var o = {}, r = e.style, i;
  for (i in t)
    t.hasOwnProperty(i) && (o[i] = r[i], r[i] = t[i]);
  n.call(e);
  for (i in t)
    t.hasOwnProperty(i) && (r[i] = o[i]);
}
function vn(e, t, n) {
  var o = 0, r, i, a;
  for (i = 0; i < t.length; i++)
    if (r = t[i], r)
      for (a = 0; a < n.length; a++) {
        var l = void 0;
        r === "border" ? l = "".concat(r).concat(n[a], "Width") : l = r + n[a], o += parseFloat(Bn(e, l)) || 0;
      }
  return o;
}
var Le = {
  getParent: function(t) {
    var n = t;
    do
      n.nodeType === 11 && n.host ? n = n.host : n = n.parentNode;
    while (n && n.nodeType !== 1 && n.nodeType !== 9);
    return n;
  }
};
ci(["Width", "Height"], function(e) {
  Le["doc".concat(e)] = function(t) {
    var n = t.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      n.documentElement["scroll".concat(e)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      n.body["scroll".concat(e)],
      Le["viewport".concat(e)](n)
    );
  }, Le["viewport".concat(e)] = function(t) {
    var n = "client".concat(e), o = t.document, r = o.body, i = o.documentElement, a = i[n];
    return o.compatMode === "CSS1Compat" && a || r && r[n] || a;
  };
});
function pa(e, t, n) {
  var o = n;
  if (si(e))
    return t === "width" ? Le.viewportWidth(e) : Le.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? Le.docWidth(e) : Le.docHeight(e);
  var r = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], i = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), a = Ls(e), l = 0;
  (i == null || i <= 0) && (i = void 0, l = Bn(e, t), (l == null || Number(l) < 0) && (l = e.style[t] || 0), l = Math.floor(parseFloat(l)) || 0), o === void 0 && (o = a ? Sr : wr);
  var s = i !== void 0 || a, u = i || l;
  return o === wr ? s ? u - vn(e, ["border", "padding"], r) : l : s ? o === Sr ? u : u + (o === Gf ? -vn(e, ["border"], r) : vn(e, ["margin"], r)) : l + vn(e, Uf.slice(o), r);
}
var Qf = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function va() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var o, r = t[0];
  return r.offsetWidth !== 0 ? o = pa.apply(void 0, t) : qf(r, Qf, function() {
    o = pa.apply(void 0, t);
  }), o;
}
ci(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  Le["outer".concat(t)] = function(o, r) {
    return o && va(o, e, r ? Yf : Sr);
  };
  var n = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  Le[e] = function(o, r) {
    var i = r;
    if (i !== void 0) {
      if (o) {
        var a = Ls(o);
        return a && (i += vn(o, ["padding", "border"], n)), kt(o, e, i);
      }
      return;
    }
    return o && va(o, e, wr);
  };
});
function Fs(e, t) {
  for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
var k = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var n = t.ownerDocument || t;
    return n.defaultView || n.parentWindow;
  },
  getDocument: js,
  offset: function(t, n, o) {
    if (typeof n < "u")
      Xf(t, n, o || {});
    else
      return Sn(t);
  },
  isWindow: si,
  each: ci,
  css: kt,
  clone: function(t) {
    var n, o = {};
    for (n in t)
      t.hasOwnProperty(n) && (o[n] = t[n]);
    var r = t.overflow;
    if (r)
      for (n in t)
        t.hasOwnProperty(n) && (o.overflow[n] = t.overflow[n]);
    return o;
  },
  mix: Fs,
  getWindowScrollLeft: function(t) {
    return zs(t);
  },
  getWindowScrollTop: function(t) {
    return Hs(t);
  },
  merge: function() {
    for (var t = {}, n = 0; n < arguments.length; n++)
      k.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
Fs(k, Le);
var qo = k.getParent;
function $r(e) {
  if (k.isWindow(e) || e.nodeType === 9)
    return null;
  var t = k.getDocument(e), n = t.body, o, r = k.css(e, "position"), i = r === "fixed" || r === "absolute";
  if (!i)
    return e.nodeName.toLowerCase() === "html" ? null : qo(e);
  for (o = qo(e); o && o !== n && o.nodeType !== 9; o = qo(o))
    if (r = k.css(o, "position"), r !== "static")
      return o;
  return null;
}
var ma = k.getParent;
function Zf(e) {
  if (k.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = k.getDocument(e), n = t.body, o = null;
  for (
    o = ma(e);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    o && o !== n && o !== t;
    o = ma(o)
  ) {
    var r = k.css(o, "position");
    if (r === "fixed")
      return !0;
  }
  return !1;
}
function ui(e, t) {
  for (var n = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, o = $r(e), r = k.getDocument(e), i = r.defaultView || r.parentWindow, a = r.body, l = r.documentElement; o; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || o.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    o !== a && o !== l && k.css(o, "overflow") !== "visible") {
      var s = k.offset(o);
      s.left += o.clientLeft, s.top += o.clientTop, n.top = Math.max(n.top, s.top), n.right = Math.min(
        n.right,
        // consider area without scrollBar
        s.left + o.clientWidth
      ), n.bottom = Math.min(n.bottom, s.top + o.clientHeight), n.left = Math.max(n.left, s.left);
    } else if (o === a || o === l)
      break;
    o = $r(o);
  }
  var u = null;
  if (!k.isWindow(e) && e.nodeType !== 9) {
    u = e.style.position;
    var d = k.css(e, "position");
    d === "absolute" && (e.style.position = "fixed");
  }
  var c = k.getWindowScrollLeft(i), p = k.getWindowScrollTop(i), v = k.viewportWidth(i), g = k.viewportHeight(i), y = l.scrollWidth, h = l.scrollHeight, b = window.getComputedStyle(a);
  if (b.overflowX === "hidden" && (y = i.innerWidth), b.overflowY === "hidden" && (h = i.innerHeight), e.style && (e.style.position = u), t || Zf(e))
    n.left = Math.max(n.left, c), n.top = Math.max(n.top, p), n.right = Math.min(n.right, c + v), n.bottom = Math.min(n.bottom, p + g);
  else {
    var $ = Math.max(y, c + v);
    n.right = Math.min(n.right, $);
    var x = Math.max(h, p + g);
    n.bottom = Math.min(n.bottom, x);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function Jf(e, t, n, o) {
  var r = k.clone(e), i = {
    width: t.width,
    height: t.height
  };
  return o.adjustX && r.left < n.left && (r.left = n.left), o.resizeWidth && r.left >= n.left && r.left + i.width > n.right && (i.width -= r.left + i.width - n.right), o.adjustX && r.left + i.width > n.right && (r.left = Math.max(n.right - i.width, n.left)), o.adjustY && r.top < n.top && (r.top = n.top), o.resizeHeight && r.top >= n.top && r.top + i.height > n.bottom && (i.height -= r.top + i.height - n.bottom), o.adjustY && r.top + i.height > n.bottom && (r.top = Math.max(n.bottom - i.height, n.top)), k.mix(r, i);
}
function di(e) {
  var t, n, o;
  if (!k.isWindow(e) && e.nodeType !== 9)
    t = k.offset(e), n = k.outerWidth(e), o = k.outerHeight(e);
  else {
    var r = k.getWindow(e);
    t = {
      left: k.getWindowScrollLeft(r),
      top: k.getWindowScrollTop(r)
    }, n = k.viewportWidth(r), o = k.viewportHeight(r);
  }
  return t.width = n, t.height = o, t;
}
function ga(e, t) {
  var n = t.charAt(0), o = t.charAt(1), r = e.width, i = e.height, a = e.left, l = e.top;
  return n === "c" ? l += i / 2 : n === "b" && (l += i), o === "c" ? a += r / 2 : o === "r" && (a += r), {
    left: a,
    top: l
  };
}
function Fn(e, t, n, o, r) {
  var i = ga(t, n[1]), a = ga(e, n[0]), l = [a.left - i.left, a.top - i.top];
  return {
    left: Math.round(e.left - l[0] + o[0] - r[0]),
    top: Math.round(e.top - l[1] + o[1] - r[1])
  };
}
function ha(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function ya(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function ep(e, t, n) {
  return e.left > n.right || e.left + t.width < n.left;
}
function tp(e, t, n) {
  return e.top > n.bottom || e.top + t.height < n.top;
}
function Vn(e, t, n) {
  var o = [];
  return k.each(e, function(r) {
    o.push(r.replace(t, function(i) {
      return n[i];
    }));
  }), o;
}
function Wn(e, t) {
  return e[t] = -e[t], e;
}
function ba(e, t) {
  var n;
  return /%$/.test(e) ? n = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : n = parseInt(e, 10), n || 0;
}
function wa(e, t) {
  e[0] = ba(e[0], t.width), e[1] = ba(e[1], t.height);
}
function Vs(e, t, n, o) {
  var r = n.points, i = n.offset || [0, 0], a = n.targetOffset || [0, 0], l = n.overflow, s = n.source || e;
  i = [].concat(i), a = [].concat(a), l = l || {};
  var u = {}, d = 0, c = !!(l && l.alwaysByViewport), p = ui(s, c), v = di(s);
  wa(i, v), wa(a, t);
  var g = Fn(v, t, r, i, a), y = k.merge(v, g);
  if (p && (l.adjustX || l.adjustY) && o) {
    if (l.adjustX && ha(g, v, p)) {
      var h = Vn(r, /[lr]/gi, {
        l: "r",
        r: "l"
      }), b = Wn(i, 0), $ = Wn(a, 0), x = Fn(v, t, h, b, $);
      ep(x, v, p) || (d = 1, r = h, i = b, a = $);
    }
    if (l.adjustY && ya(g, v, p)) {
      var _ = Vn(r, /[tb]/gi, {
        t: "b",
        b: "t"
      }), C = Wn(i, 1), O = Wn(a, 1), S = Fn(v, t, _, C, O);
      tp(S, v, p) || (d = 1, r = _, i = C, a = O);
    }
    d && (g = Fn(v, t, r, i, a), k.mix(y, g));
    var P = ha(g, v, p), E = ya(g, v, p);
    if (P || E) {
      var T = r;
      P && (T = Vn(r, /[lr]/gi, {
        l: "r",
        r: "l"
      })), E && (T = Vn(r, /[tb]/gi, {
        t: "b",
        b: "t"
      })), r = T, i = n.offset || [0, 0], a = n.targetOffset || [0, 0];
    }
    u.adjustX = l.adjustX && P, u.adjustY = l.adjustY && E, (u.adjustX || u.adjustY) && (y = Jf(g, v, p, u));
  }
  return y.width !== v.width && k.css(s, "width", k.width(s) + y.width - v.width), y.height !== v.height && k.css(s, "height", k.height(s) + y.height - v.height), k.offset(s, {
    left: y.left,
    top: y.top
  }, {
    useCssRight: n.useCssRight,
    useCssBottom: n.useCssBottom,
    useCssTransform: n.useCssTransform,
    ignoreShake: n.ignoreShake
  }), {
    points: r,
    offset: i,
    targetOffset: a,
    overflow: u
  };
}
function np(e, t) {
  var n = ui(e, t), o = di(e);
  return !n || o.left + o.width <= n.left || o.top + o.height <= n.top || o.left >= n.right || o.top >= n.bottom;
}
function fi(e, t, n) {
  var o = n.target || t, r = di(o), i = !np(o, n.overflow && n.overflow.alwaysByViewport);
  return Vs(e, r, n, i);
}
fi.__getOffsetParent = $r;
fi.__getVisibleRectForElement = ui;
function op(e, t, n) {
  var o, r, i = k.getDocument(e), a = i.defaultView || i.parentWindow, l = k.getWindowScrollLeft(a), s = k.getWindowScrollTop(a), u = k.viewportWidth(a), d = k.viewportHeight(a);
  "pageX" in t ? o = t.pageX : o = l + t.clientX, "pageY" in t ? r = t.pageY : r = s + t.clientY;
  var c = {
    left: o,
    top: r,
    width: 0,
    height: 0
  }, p = o >= 0 && o <= l + u && r >= 0 && r <= s + d, v = [n.points[0], "cc"];
  return Vs(e, c, sa(sa({}, n), {}, {
    points: v
  }), p);
}
let Cr = {};
function rp(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error(`Warning: ${t}`);
}
function ip() {
  Cr = {};
}
function ap(e, t, n) {
  !t && !Cr[n] && (e(!1, n), Cr[n] = !0);
}
function pi(e, t) {
  ap(rp, e, t);
}
function lp() {
}
let dt = lp;
process.env.NODE_ENV !== "production" && (dt = (e, t, n) => {
  pi(e, `[ant-design-vue: ${t}] ${n}`), process.env.NODE_ENV === "test" && ip();
});
function Ae(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, r = e;
  if (Array.isArray(e) && (r = on(e)[0]), !r)
    return null;
  const i = mr(r, t, o);
  return i.props = n ? m(m({}, i.props), t) : i.props, dt(typeof i.props.class != "object", "class must be string"), i;
}
const Ws = (e) => {
  if (!e)
    return !1;
  if (e.offsetParent)
    return !0;
  if (e.getBBox) {
    const t = e.getBBox();
    if (t.width || t.height)
      return !0;
  }
  if (e.getBoundingClientRect) {
    const t = e.getBoundingClientRect();
    if (t.width || t.height)
      return !0;
  }
  return !1;
};
var ks = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var o = -1;
    return t.some(function(r, i) {
      return r[0] === n ? (o = i, !0) : !1;
    }), o;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var o = e(this.__entries__, n), r = this.__entries__[o];
        return r && r[1];
      }, t.prototype.set = function(n, o) {
        var r = e(this.__entries__, n);
        ~r ? this.__entries__[r][1] = o : this.__entries__.push([n, o]);
      }, t.prototype.delete = function(n) {
        var o = this.__entries__, r = e(o, n);
        ~r && o.splice(r, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, o) {
        o === void 0 && (o = null);
        for (var r = 0, i = this.__entries__; r < i.length; r++) {
          var a = i[r];
          n.call(o, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), xr = typeof window < "u" && typeof document < "u" && window.document === document, po = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), sp = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(po) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), cp = 2;
function up(e, t) {
  var n = !1, o = !1, r = 0;
  function i() {
    n && (n = !1, e()), o && l();
  }
  function a() {
    sp(i);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - r < cp)
        return;
      o = !0;
    } else
      n = !0, o = !1, setTimeout(a, t);
    r = s;
  }
  return l;
}
var dp = 20, fp = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], pp = typeof MutationObserver < "u", vp = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = up(this.refresh.bind(this), dp);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, o = n.indexOf(t);
      ~o && n.splice(o, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !xr || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), pp ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !xr || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, o = n === void 0 ? "" : n, r = fp.some(function(i) {
        return !!~o.indexOf(i);
      });
      r && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Ks = function(e, t) {
  for (var n = 0, o = Object.keys(t); n < o.length; n++) {
    var r = o[n];
    Object.defineProperty(e, r, {
      value: t[r],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, qt = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || po;
}, Xs = Ro(0, 0, 0, 0);
function vo(e) {
  return parseFloat(e) || 0;
}
function Sa(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(o, r) {
    var i = e["border-" + r + "-width"];
    return o + vo(i);
  }, 0);
}
function mp(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, o = 0, r = t; o < r.length; o++) {
    var i = r[o], a = e["padding-" + i];
    n[i] = vo(a);
  }
  return n;
}
function gp(e) {
  var t = e.getBBox();
  return Ro(0, 0, t.width, t.height);
}
function hp(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Xs;
  var o = qt(e).getComputedStyle(e), r = mp(o), i = r.left + r.right, a = r.top + r.bottom, l = vo(o.width), s = vo(o.height);
  if (o.boxSizing === "border-box" && (Math.round(l + i) !== t && (l -= Sa(o, "left", "right") + i), Math.round(s + a) !== n && (s -= Sa(o, "top", "bottom") + a)), !bp(e)) {
    var u = Math.round(l + i) - t, d = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(d) !== 1 && (s -= d);
  }
  return Ro(r.left, r.top, l, s);
}
var yp = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof qt(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof qt(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function bp(e) {
  return e === qt(e).document.documentElement;
}
function wp(e) {
  return xr ? yp(e) ? gp(e) : hp(e) : Xs;
}
function Sp(e) {
  var t = e.x, n = e.y, o = e.width, r = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return Ks(a, {
    x: t,
    y: n,
    width: o,
    height: r,
    top: n,
    right: t + o,
    bottom: r + n,
    left: t
  }), a;
}
function Ro(e, t, n, o) {
  return { x: e, y: t, width: n, height: o };
}
var $p = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ro(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = wp(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Cp = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var o = Sp(n);
      Ks(this, { target: t, contentRect: o });
    }
    return e;
  }()
), xp = (
  /** @class */
  function() {
    function e(t, n, o) {
      if (this.activeObservations_ = [], this.observations_ = new ks(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = o;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof qt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new $p(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof qt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(o) {
          return new Cp(o.target, o.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Us = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new ks(), Gs = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = vp.getInstance(), o = new xp(t, n, this);
      Us.set(this, o);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Gs.prototype[e] = function() {
    var t;
    return (t = Us.get(this))[e].apply(t, arguments);
  };
});
var Ys = function() {
  return typeof po.ResizeObserver < "u" ? po.ResizeObserver : Gs;
}();
function Op(e, t) {
  return e === t ? !0 : !e || !t ? !1 : "pageX" in t && "pageY" in t ? e.pageX === t.pageX && e.pageY === t.pageY : "clientX" in t && "clientY" in t ? e.clientX === t.clientX && e.clientY === t.clientY : !1;
}
function Tp(e, t) {
  e !== document.activeElement && $t(t, e) && typeof e.focus == "function" && e.focus();
}
function $a(e, t) {
  let n = null, o = null;
  function r(a) {
    let [{
      target: l
    }] = a;
    if (!document.documentElement.contains(l))
      return;
    const {
      width: s,
      height: u
    } = l.getBoundingClientRect(), d = Math.floor(s), c = Math.floor(u);
    (n !== d || o !== c) && Promise.resolve().then(() => {
      t({
        width: d,
        height: c
      });
    }), n = d, o = c;
  }
  const i = new Ys(r);
  return e && i.observe(e), () => {
    i.disconnect();
  };
}
const Pp = (e, t) => {
  let n = !1, o = null;
  function r() {
    clearTimeout(o);
  }
  function i(a) {
    if (!n || a === !0) {
      if (e() === !1)
        return;
      n = !0, r(), o = setTimeout(() => {
        n = !1;
      }, t.value);
    } else
      r(), o = setTimeout(() => {
        n = !1, i();
      }, t.value);
  }
  return [i, () => {
    n = !1, r();
  }];
};
function _p() {
  this.__data__ = [], this.size = 0;
}
function qs(e, t) {
  return e === t || e !== e && t !== t;
}
function No(e, t) {
  for (var n = e.length; n--; )
    if (qs(e[n][0], t))
      return n;
  return -1;
}
var Ep = Array.prototype, Ip = Ep.splice;
function Mp(e) {
  var t = this.__data__, n = No(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Ip.call(t, n, 1), --this.size, !0;
}
function Ap(e) {
  var t = this.__data__, n = No(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Dp(e) {
  return No(this.__data__, e) > -1;
}
function Rp(e, t) {
  var n = this.__data__, o = No(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function et(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
et.prototype.clear = _p;
et.prototype.delete = Mp;
et.prototype.get = Ap;
et.prototype.has = Dp;
et.prototype.set = Rp;
function Np() {
  this.__data__ = new et(), this.size = 0;
}
function Bp(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function zp(e) {
  return this.__data__.get(e);
}
function Hp(e) {
  return this.__data__.has(e);
}
var Qs = typeof global == "object" && global && global.Object === Object && global, jp = typeof self == "object" && self && self.Object === Object && self, tt = Qs || jp || Function("return this")(), Qt = tt.Symbol, Zs = Object.prototype, Lp = Zs.hasOwnProperty, Fp = Zs.toString, cn = Qt ? Qt.toStringTag : void 0;
function Vp(e) {
  var t = Lp.call(e, cn), n = e[cn];
  try {
    e[cn] = void 0;
    var o = !0;
  } catch {
  }
  var r = Fp.call(e);
  return o && (t ? e[cn] = n : delete e[cn]), r;
}
var Wp = Object.prototype, kp = Wp.toString;
function Kp(e) {
  return kp.call(e);
}
var Xp = "[object Null]", Up = "[object Undefined]", Ca = Qt ? Qt.toStringTag : void 0;
function zn(e) {
  return e == null ? e === void 0 ? Up : Xp : Ca && Ca in Object(e) ? Vp(e) : Kp(e);
}
function Js(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Gp = "[object AsyncFunction]", Yp = "[object Function]", qp = "[object GeneratorFunction]", Qp = "[object Proxy]";
function ec(e) {
  if (!Js(e))
    return !1;
  var t = zn(e);
  return t == Yp || t == qp || t == Gp || t == Qp;
}
var Qo = tt["__core-js_shared__"], xa = function() {
  var e = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Zp(e) {
  return !!xa && xa in e;
}
var Jp = Function.prototype, ev = Jp.toString;
function zt(e) {
  if (e != null) {
    try {
      return ev.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var tv = /[\\^$.*+?()[\]{}|]/g, nv = /^\[object .+?Constructor\]$/, ov = Function.prototype, rv = Object.prototype, iv = ov.toString, av = rv.hasOwnProperty, lv = RegExp(
  "^" + iv.call(av).replace(tv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function sv(e) {
  if (!Js(e) || Zp(e))
    return !1;
  var t = ec(e) ? lv : nv;
  return t.test(zt(e));
}
function cv(e, t) {
  return e == null ? void 0 : e[t];
}
function rn(e, t) {
  var n = cv(e, t);
  return sv(n) ? n : void 0;
}
var $n = rn(tt, "Map"), Cn = rn(Object, "create");
function uv() {
  this.__data__ = Cn ? Cn(null) : {}, this.size = 0;
}
function dv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var fv = "__lodash_hash_undefined__", pv = Object.prototype, vv = pv.hasOwnProperty;
function mv(e) {
  var t = this.__data__;
  if (Cn) {
    var n = t[e];
    return n === fv ? void 0 : n;
  }
  return vv.call(t, e) ? t[e] : void 0;
}
var gv = Object.prototype, hv = gv.hasOwnProperty;
function yv(e) {
  var t = this.__data__;
  return Cn ? t[e] !== void 0 : hv.call(t, e);
}
var bv = "__lodash_hash_undefined__";
function wv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Cn && t === void 0 ? bv : t, this;
}
function Dt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Dt.prototype.clear = uv;
Dt.prototype.delete = dv;
Dt.prototype.get = mv;
Dt.prototype.has = yv;
Dt.prototype.set = wv;
function Sv() {
  this.size = 0, this.__data__ = {
    hash: new Dt(),
    map: new ($n || et)(),
    string: new Dt()
  };
}
function $v(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Bo(e, t) {
  var n = e.__data__;
  return $v(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Cv(e) {
  var t = Bo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xv(e) {
  return Bo(this, e).get(e);
}
function Ov(e) {
  return Bo(this, e).has(e);
}
function Tv(e, t) {
  var n = Bo(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Ht(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ht.prototype.clear = Sv;
Ht.prototype.delete = Cv;
Ht.prototype.get = xv;
Ht.prototype.has = Ov;
Ht.prototype.set = Tv;
var Pv = 200;
function _v(e, t) {
  var n = this.__data__;
  if (n instanceof et) {
    var o = n.__data__;
    if (!$n || o.length < Pv - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Ht(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function st(e) {
  var t = this.__data__ = new et(e);
  this.size = t.size;
}
st.prototype.clear = Np;
st.prototype.delete = Bp;
st.prototype.get = zp;
st.prototype.has = Hp;
st.prototype.set = _v;
var Ev = "__lodash_hash_undefined__";
function Iv(e) {
  return this.__data__.set(e, Ev), this;
}
function Mv(e) {
  return this.__data__.has(e);
}
function xn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Ht(); ++t < n; )
    this.add(e[t]);
}
xn.prototype.add = xn.prototype.push = Iv;
xn.prototype.has = Mv;
function Av(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function tc(e, t) {
  return e.has(t);
}
var Dv = 1, Rv = 2;
function nc(e, t, n, o, r, i) {
  var a = n & Dv, l = e.length, s = t.length;
  if (l != s && !(a && s > l))
    return !1;
  var u = i.get(e), d = i.get(t);
  if (u && d)
    return u == t && d == e;
  var c = -1, p = !0, v = n & Rv ? new xn() : void 0;
  for (i.set(e, t), i.set(t, e); ++c < l; ) {
    var g = e[c], y = t[c];
    if (o)
      var h = a ? o(y, g, c, t, e, i) : o(g, y, c, e, t, i);
    if (h !== void 0) {
      if (h)
        continue;
      p = !1;
      break;
    }
    if (v) {
      if (!Av(t, function(b, $) {
        if (!tc(v, $) && (g === b || r(g, b, n, o, i)))
          return v.push($);
      })) {
        p = !1;
        break;
      }
    } else if (!(g === y || r(g, y, n, o, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), p;
}
var Oa = tt.Uint8Array;
function Nv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function vi(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Bv = 1, zv = 2, Hv = "[object Boolean]", jv = "[object Date]", Lv = "[object Error]", Fv = "[object Map]", Vv = "[object Number]", Wv = "[object RegExp]", kv = "[object Set]", Kv = "[object String]", Xv = "[object Symbol]", Uv = "[object ArrayBuffer]", Gv = "[object DataView]", Ta = Qt ? Qt.prototype : void 0, Zo = Ta ? Ta.valueOf : void 0;
function Yv(e, t, n, o, r, i, a) {
  switch (n) {
    case Gv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Uv:
      return !(e.byteLength != t.byteLength || !i(new Oa(e), new Oa(t)));
    case Hv:
    case jv:
    case Vv:
      return qs(+e, +t);
    case Lv:
      return e.name == t.name && e.message == t.message;
    case Wv:
    case Kv:
      return e == t + "";
    case Fv:
      var l = Nv;
    case kv:
      var s = o & Bv;
      if (l || (l = vi), e.size != t.size && !s)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= zv, a.set(e, t);
      var d = nc(l(e), l(t), o, r, i, a);
      return a.delete(e), d;
    case Xv:
      if (Zo)
        return Zo.call(e) == Zo.call(t);
  }
  return !1;
}
function qv(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var On = Array.isArray;
function Qv(e, t, n) {
  var o = t(e);
  return On(e) ? o : qv(o, n(e));
}
function Zv(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, i = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (i[r++] = a);
  }
  return i;
}
function Jv() {
  return [];
}
var em = Object.prototype, tm = em.propertyIsEnumerable, Pa = Object.getOwnPropertySymbols, nm = Pa ? function(e) {
  return e == null ? [] : (e = Object(e), Zv(Pa(e), function(t) {
    return tm.call(e, t);
  }));
} : Jv;
function om(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
function Tn(e) {
  return e != null && typeof e == "object";
}
var rm = "[object Arguments]";
function _a(e) {
  return Tn(e) && zn(e) == rm;
}
var oc = Object.prototype, im = oc.hasOwnProperty, am = oc.propertyIsEnumerable, rc = _a(/* @__PURE__ */ function() {
  return arguments;
}()) ? _a : function(e) {
  return Tn(e) && im.call(e, "callee") && !am.call(e, "callee");
};
function lm() {
  return !1;
}
var ic = typeof exports == "object" && exports && !exports.nodeType && exports, Ea = ic && typeof module == "object" && module && !module.nodeType && module, sm = Ea && Ea.exports === ic, Ia = sm ? tt.Buffer : void 0, cm = Ia ? Ia.isBuffer : void 0, mo = cm || lm, um = 9007199254740991, dm = /^(?:0|[1-9]\d*)$/;
function fm(e, t) {
  var n = typeof e;
  return t = t ?? um, !!t && (n == "number" || n != "symbol" && dm.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var pm = 9007199254740991;
function ac(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pm;
}
var vm = "[object Arguments]", mm = "[object Array]", gm = "[object Boolean]", hm = "[object Date]", ym = "[object Error]", bm = "[object Function]", wm = "[object Map]", Sm = "[object Number]", $m = "[object Object]", Cm = "[object RegExp]", xm = "[object Set]", Om = "[object String]", Tm = "[object WeakMap]", Pm = "[object ArrayBuffer]", _m = "[object DataView]", Em = "[object Float32Array]", Im = "[object Float64Array]", Mm = "[object Int8Array]", Am = "[object Int16Array]", Dm = "[object Int32Array]", Rm = "[object Uint8Array]", Nm = "[object Uint8ClampedArray]", Bm = "[object Uint16Array]", zm = "[object Uint32Array]", re = {};
re[Em] = re[Im] = re[Mm] = re[Am] = re[Dm] = re[Rm] = re[Nm] = re[Bm] = re[zm] = !0;
re[vm] = re[mm] = re[Pm] = re[gm] = re[_m] = re[hm] = re[ym] = re[bm] = re[wm] = re[Sm] = re[$m] = re[Cm] = re[xm] = re[Om] = re[Tm] = !1;
function Hm(e) {
  return Tn(e) && ac(e.length) && !!re[zn(e)];
}
function jm(e) {
  return function(t) {
    return e(t);
  };
}
var lc = typeof exports == "object" && exports && !exports.nodeType && exports, gn = lc && typeof module == "object" && module && !module.nodeType && module, Lm = gn && gn.exports === lc, Jo = Lm && Qs.process, Ma = function() {
  try {
    var e = gn && gn.require && gn.require("util").types;
    return e || Jo && Jo.binding && Jo.binding("util");
  } catch {
  }
}(), Aa = Ma && Ma.isTypedArray, mi = Aa ? jm(Aa) : Hm, Fm = Object.prototype, Vm = Fm.hasOwnProperty;
function Wm(e, t) {
  var n = On(e), o = !n && rc(e), r = !n && !o && mo(e), i = !n && !o && !r && mi(e), a = n || o || r || i, l = a ? om(e.length, String) : [], s = l.length;
  for (var u in e)
    Vm.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    fm(u, s))) && l.push(u);
  return l;
}
var km = Object.prototype;
function sc(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || km;
  return e === n;
}
function Km(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Xm = Km(Object.keys, Object), Um = Object.prototype, Gm = Um.hasOwnProperty;
function cc(e) {
  if (!sc(e))
    return Xm(e);
  var t = [];
  for (var n in Object(e))
    Gm.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function uc(e) {
  return e != null && ac(e.length) && !ec(e);
}
function Ym(e) {
  return uc(e) ? Wm(e) : cc(e);
}
function Da(e) {
  return Qv(e, Ym, nm);
}
var qm = 1, Qm = Object.prototype, Zm = Qm.hasOwnProperty;
function Jm(e, t, n, o, r, i) {
  var a = n & qm, l = Da(e), s = l.length, u = Da(t), d = u.length;
  if (s != d && !a)
    return !1;
  for (var c = s; c--; ) {
    var p = l[c];
    if (!(a ? p in t : Zm.call(t, p)))
      return !1;
  }
  var v = i.get(e), g = i.get(t);
  if (v && g)
    return v == t && g == e;
  var y = !0;
  i.set(e, t), i.set(t, e);
  for (var h = a; ++c < s; ) {
    p = l[c];
    var b = e[p], $ = t[p];
    if (o)
      var x = a ? o($, b, p, t, e, i) : o(b, $, p, e, t, i);
    if (!(x === void 0 ? b === $ || r(b, $, n, o, i) : x)) {
      y = !1;
      break;
    }
    h || (h = p == "constructor");
  }
  if (y && !h) {
    var _ = e.constructor, C = t.constructor;
    _ != C && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof C == "function" && C instanceof C) && (y = !1);
  }
  return i.delete(e), i.delete(t), y;
}
var Or = rn(tt, "DataView"), Tr = rn(tt, "Promise"), Kt = rn(tt, "Set"), Pr = rn(tt, "WeakMap"), Ra = "[object Map]", eg = "[object Object]", Na = "[object Promise]", Ba = "[object Set]", za = "[object WeakMap]", Ha = "[object DataView]", tg = zt(Or), ng = zt($n), og = zt(Tr), rg = zt(Kt), ig = zt(Pr), Ge = zn;
(Or && Ge(new Or(new ArrayBuffer(1))) != Ha || $n && Ge(new $n()) != Ra || Tr && Ge(Tr.resolve()) != Na || Kt && Ge(new Kt()) != Ba || Pr && Ge(new Pr()) != za) && (Ge = function(e) {
  var t = zn(e), n = t == eg ? e.constructor : void 0, o = n ? zt(n) : "";
  if (o)
    switch (o) {
      case tg:
        return Ha;
      case ng:
        return Ra;
      case og:
        return Na;
      case rg:
        return Ba;
      case ig:
        return za;
    }
  return t;
});
var ag = 1, ja = "[object Arguments]", La = "[object Array]", kn = "[object Object]", lg = Object.prototype, Fa = lg.hasOwnProperty;
function sg(e, t, n, o, r, i) {
  var a = On(e), l = On(t), s = a ? La : Ge(e), u = l ? La : Ge(t);
  s = s == ja ? kn : s, u = u == ja ? kn : u;
  var d = s == kn, c = u == kn, p = s == u;
  if (p && mo(e)) {
    if (!mo(t))
      return !1;
    a = !0, d = !1;
  }
  if (p && !d)
    return i || (i = new st()), a || mi(e) ? nc(e, t, n, o, r, i) : Yv(e, t, s, n, o, r, i);
  if (!(n & ag)) {
    var v = d && Fa.call(e, "__wrapped__"), g = c && Fa.call(t, "__wrapped__");
    if (v || g) {
      var y = v ? e.value() : e, h = g ? t.value() : t;
      return i || (i = new st()), r(y, h, n, o, i);
    }
  }
  return p ? (i || (i = new st()), Jm(e, t, n, o, r, i)) : !1;
}
function dc(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Tn(e) && !Tn(t) ? e !== e && t !== t : sg(e, t, n, o, dc, r);
}
function cg(e, t) {
  return dc(e, t);
}
const ug = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function Va(e) {
  return typeof e != "function" ? null : e();
}
function Wa(e) {
  return typeof e != "object" || !e ? null : e;
}
const dg = D({
  compatConfig: {
    MODE: 3
  },
  name: "Align",
  props: ug,
  emits: ["align"],
  setup(e, t) {
    let {
      expose: n,
      slots: o
    } = t;
    const r = F({}), i = F(), [a, l] = Pp(() => {
      const {
        disabled: p,
        target: v,
        align: g,
        onAlign: y
      } = e;
      if (!p && v && i.value) {
        const h = i.value;
        let b;
        const $ = Va(v), x = Wa(v);
        r.value.element = $, r.value.point = x, r.value.align = g;
        const {
          activeElement: _
        } = document;
        return $ && Ws($) ? b = fi(h, $, g) : x && (b = op(h, x, g)), Tp(_, h), y && b && y(h, b), !0;
      }
      return !1;
    }, w(() => e.monitorBufferTime)), s = F({
      cancel: () => {
      }
    }), u = F({
      cancel: () => {
      }
    }), d = () => {
      const p = e.target, v = Va(p), g = Wa(p);
      i.value !== u.value.element && (u.value.cancel(), u.value.element = i.value, u.value.cancel = $a(i.value, a)), (r.value.element !== v || !Op(r.value.point, g) || !cg(r.value.align, e.align)) && (a(), s.value.element !== v && (s.value.cancel(), s.value.element = v, s.value.cancel = $a(v, a)));
    };
    ke(() => {
      Fe(() => {
        d();
      });
    }), Dn(() => {
      Fe(() => {
        d();
      });
    }), Y(() => e.disabled, (p) => {
      p ? l() : a();
    }, {
      immediate: !0,
      flush: "post"
    });
    const c = F(null);
    return Y(() => e.monitorWindowResize, (p) => {
      p ? c.value || (c.value = pn(window, "resize", a)) : c.value && (c.value.remove(), c.value = null);
    }, {
      flush: "post"
    }), Jr(() => {
      s.value.cancel(), u.value.cancel(), c.value && c.value.remove(), l();
    }), n({
      forceAlign: () => a(!0)
    }), () => {
      const p = o == null ? void 0 : o.default();
      return p ? Ae(p[0], {
        ref: i
      }, !0, !0) : null;
    };
  }
}), Zt = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t;
}, Hn = (e) => {
  const t = e;
  return t.install = function(n) {
    n.component(t.displayName || t.name, e);
  }, e;
};
function _r() {
  return {
    type: [Function, Array]
  };
}
function we(e) {
  return {
    type: Object,
    default: e
  };
}
function be(e) {
  return {
    type: Boolean,
    default: e
  };
}
function Er(e, t) {
  return {
    validator: () => !0,
    default: e
  };
}
function ka(e) {
  return {
    type: Array,
    default: e
  };
}
function Ka(e) {
  return {
    type: String,
    default: e
  };
}
function fc(e, t) {
  return e ? {
    type: e,
    default: t
  } : Er(t);
}
Zt("bottomLeft", "bottomRight", "topLeft", "topRight");
const gi = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return m(e ? {
    name: e,
    appear: !0,
    // type: 'animation',
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    // appearActiveClass: `antdv-base-transtion`,
    // appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
    enterFromClass: `${e}-enter ${e}-enter-prepare ${e}-enter-start`,
    enterActiveClass: `${e}-enter ${e}-enter-prepare`,
    enterToClass: `${e}-enter ${e}-enter-active`,
    leaveFromClass: ` ${e}-leave`,
    leaveActiveClass: `${e}-leave ${e}-leave-active`,
    leaveToClass: `${e}-leave ${e}-leave-active`
  } : {
    css: !1
  }, t);
}, fg = (e, t, n) => n !== void 0 ? n : `${e}-${t}`, pg = D({
  compatConfig: {
    MODE: 3
  },
  name: "PopupInner",
  inheritAttrs: !1,
  props: li,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      attrs: o,
      slots: r
    } = t;
    const i = j(), a = j(), l = j(), [s, u] = If(gr(e, "stretch")), d = () => {
      e.stretch && u(e.getRootDomNode());
    }, c = j(!1);
    let p;
    Y(() => e.visible, (O) => {
      clearTimeout(p), O ? p = setTimeout(() => {
        c.value = e.visible;
      }) : c.value = !1;
    }, {
      immediate: !0
    });
    const [v, g] = Ef(c, d), y = j(), h = () => e.point ? e.point : e.getRootDomNode, b = () => {
      var O;
      (O = i.value) === null || O === void 0 || O.forceAlign();
    }, $ = (O, S) => {
      var P;
      const E = e.getClassNameFromAlign(S), T = l.value;
      l.value !== E && (l.value = E), v.value === "align" && (T !== E ? Promise.resolve().then(() => {
        b();
      }) : g(() => {
        var N;
        (N = y.value) === null || N === void 0 || N.call(y);
      }), (P = e.onAlign) === null || P === void 0 || P.call(e, O, S));
    }, x = w(() => {
      const O = typeof e.animation == "object" ? e.animation : Ds(e);
      return ["onAfterEnter", "onAfterLeave"].forEach((S) => {
        const P = O[S];
        O[S] = (E) => {
          g(), v.value = "stable", P == null || P(E);
        };
      }), O;
    }), _ = () => new Promise((O) => {
      y.value = O;
    });
    Y([x, v], () => {
      !x.value && v.value === "motion" && g();
    }, {
      immediate: !0
    }), n({
      forceAlign: b,
      getElement: () => a.value.$el || a.value
    });
    const C = w(() => {
      var O;
      return !(!((O = e.align) === null || O === void 0) && O.points && (v.value === "align" || v.value === "stable"));
    });
    return () => {
      var O;
      const {
        zIndex: S,
        align: P,
        prefixCls: E,
        destroyPopupOnHide: T,
        onMouseenter: N,
        onMouseleave: K,
        onTouchstart: U = () => {
        },
        onMousedown: q
      } = e, I = v.value, B = [m(m({}, s.value), {
        zIndex: S,
        opacity: I === "motion" || I === "stable" || !c.value ? null : 0,
        // pointerEvents: statusValue === 'stable' ? null : 'none',
        pointerEvents: !c.value && I !== "stable" ? "none" : null
      }), o.style];
      let V = xe((O = r.default) === null || O === void 0 ? void 0 : O.call(r, {
        visible: e.visible
      }));
      V.length > 1 && (V = f("div", {
        class: `${E}-content`
      }, [V]));
      const W = ae(E, o.class, l.value), ne = c.value || !e.visible ? gi(x.value.name, x.value) : {};
      return f(gt, H(H({
        ref: a
      }, ne), {}, {
        onBeforeEnter: _
      }), {
        default: () => !T || e.visible ? Eo(f(dg, {
          target: h(),
          key: "popup",
          ref: i,
          monitorWindowResize: !0,
          disabled: C.value,
          align: P,
          onAlign: $
        }, {
          default: () => f("div", {
            class: W,
            onMouseenter: N,
            onMouseleave: K,
            onMousedown: qi(q, ["capture"]),
            [Ot ? "onTouchstartPassive" : "onTouchstart"]: qi(U, ["capture"]),
            style: B
          }, [V])
        }), [[ei, c.value]]) : null
      });
    };
  }
}), vg = D({
  compatConfig: {
    MODE: 3
  },
  name: "Popup",
  inheritAttrs: !1,
  props: Tf,
  setup(e, t) {
    let {
      attrs: n,
      slots: o,
      expose: r
    } = t;
    const i = j(!1), a = j(!1), l = j(), s = j();
    return Y([() => e.visible, () => e.mobile], () => {
      i.value = e.visible, e.visible && e.mobile && (a.value = !0);
    }, {
      immediate: !0,
      flush: "post"
    }), r({
      forceAlign: () => {
        var u;
        (u = l.value) === null || u === void 0 || u.forceAlign();
      },
      getElement: () => {
        var u;
        return (u = l.value) === null || u === void 0 ? void 0 : u.getElement();
      }
    }), () => {
      const u = m(m(m({}, e), n), {
        visible: i.value
      }), d = a.value ? f(Pf, H(H({}, u), {}, {
        mobile: e.mobile,
        ref: l
      }), {
        default: o.default
      }) : f(pg, H(H({}, u), {}, {
        ref: l
      }), {
        default: o.default
      });
      return f("div", {
        ref: s
      }, [f(Rs, u, null), d]);
    };
  }
});
function mg(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Xa(e, t, n) {
  const o = e[t] || {};
  return m(m({}, o), n);
}
function gg(e, t, n, o) {
  const {
    points: r
  } = n, i = Object.keys(e);
  for (let a = 0; a < i.length; a += 1) {
    const l = i[a];
    if (mg(e[l].points, r, o))
      return `${t}-placement-${l}`;
  }
  return "";
}
const hg = {
  methods: {
    setState() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = typeof e == "function" ? e(this.$data, this.$props) : e;
      if (this.getDerivedStateFromProps) {
        const o = this.getDerivedStateFromProps(Sf(this), m(m({}, this.$data), n));
        if (o === null)
          return;
        n = m(m({}, n), o || {});
      }
      m(this.$data, n), this._.isMounted && this.$forceUpdate(), Fe(() => {
        t && t();
      });
    },
    __emit() {
      const e = [].slice.call(arguments, 0);
      let t = e[0];
      t = `on${t[0].toUpperCase()}${t.substring(1)}`;
      const n = this.$props[t] || this.$attrs[t];
      if (e.length && n)
        if (Array.isArray(n))
          for (let o = 0, r = n.length; o < r; o++)
            n[o](...e.slice(1));
        else
          n(...e.slice(1));
    }
  }
}, pc = Symbol("PortalContextKey"), vc = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: !0
  };
  se(pc, {
    inTriggerContext: t.inTriggerContext,
    shouldRender: w(() => {
      const {
        sPopupVisible: n,
        popupRef: o,
        forceRender: r,
        autoDestroy: i
      } = e || {};
      let a = !1;
      return (n || o || r) && (a = !0), !n && i && (a = !1), a;
    })
  });
}, yg = () => {
  vc({}, {
    inTriggerContext: !1
  });
  const e = R(pc, {
    shouldRender: w(() => !1),
    inTriggerContext: !1
  });
  return {
    shouldRender: w(() => e.shouldRender.value || e.inTriggerContext === !1)
  };
}, bg = D({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: !1,
  props: {
    getContainer: M.func.isRequired,
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t, o = !0, r;
    const {
      shouldRender: i
    } = yg();
    function a() {
      i.value && (r = e.getContainer());
    }
    ss(() => {
      o = !1, a();
    }), ke(() => {
      r || a();
    });
    const l = Y(i, () => {
      i.value && !r && (r = e.getContainer()), r && l();
    });
    return Dn(() => {
      Fe(() => {
        var s;
        i.value && ((s = e.didUpdate) === null || s === void 0 || s.call(e, e));
      });
    }), () => {
      var s;
      return i.value ? o ? (s = n.default) === null || s === void 0 ? void 0 : s.call(n) : r ? f(cs, {
        to: r
      }, n) : null : null;
    };
  }
});
function Ze() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
const Ua = "data-vc-order", wg = "vc-util-key", Ir = /* @__PURE__ */ new Map();
function mc() {
  let {
    mark: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return e ? e.startsWith("data-") ? e : `data-${e}` : wg;
}
function zo(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function Sg(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function gc(e) {
  return Array.from((Ir.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function hc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ze())
    return null;
  const {
    csp: n,
    prepend: o
  } = t, r = document.createElement("style");
  r.setAttribute(Ua, Sg(o)), n != null && n.nonce && (r.nonce = n == null ? void 0 : n.nonce), r.innerHTML = e;
  const i = zo(t), {
    firstChild: a
  } = i;
  if (o) {
    if (o === "queue") {
      const l = gc(i).filter((s) => ["prepend", "prependQueue"].includes(s.getAttribute(Ua)));
      if (l.length)
        return i.insertBefore(r, l[l.length - 1].nextSibling), r;
    }
    i.insertBefore(r, a);
  } else
    i.appendChild(r);
  return r;
}
function yc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = zo(t);
  return gc(n).find((o) => o.getAttribute(mc(t)) === e);
}
function go(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = yc(e, t);
  n && zo(t).removeChild(n);
}
function $g(e, t) {
  const n = Ir.get(e);
  if (!n || !$t(document, n)) {
    const o = hc("", t), {
      parentNode: r
    } = o;
    Ir.set(e, r), e.removeChild(o);
  }
}
function ho(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var o, r, i;
  const a = zo(n);
  $g(a, n);
  const l = yc(t, n);
  if (l)
    return !((o = n.csp) === null || o === void 0) && o.nonce && l.nonce !== ((r = n.csp) === null || r === void 0 ? void 0 : r.nonce) && (l.nonce = (i = n.csp) === null || i === void 0 ? void 0 : i.nonce), l.innerHTML !== e && (l.innerHTML = e), l;
  const s = hc(e, n);
  return s.setAttribute(mc(n), t), s;
}
let er;
function Cg(e) {
  if (typeof document > "u")
    return 0;
  if (er === void 0) {
    const t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    const n = document.createElement("div"), o = n.style;
    o.position = "absolute", o.top = "0", o.left = "0", o.pointerEvents = "none", o.visibility = "hidden", o.width = "200px", o.height = "150px", o.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    const r = t.offsetWidth;
    n.style.overflow = "scroll";
    let i = t.offsetWidth;
    r === i && (i = n.clientWidth), document.body.removeChild(n), er = r - i;
  }
  return er;
}
const xg = `vc-util-locker-${Date.now()}`;
let Ga = 0;
function Og() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
function Tg(e) {
  const t = w(() => !!e && !!e.value);
  Ga += 1;
  const n = `${xg}_${Ga}`;
  lt((o) => {
    if (Ze()) {
      if (t.value) {
        const r = Cg(), i = Og();
        ho(`
html body {
  overflow-y: hidden;
  ${i ? `width: calc(100% - ${r}px);` : ""}
}`, n);
      } else
        go(n);
      o(() => {
        go(n);
      });
    }
  }, {
    flush: "post"
  });
}
let wt = 0;
const no = Ze(), Ya = (e) => {
  if (!no)
    return null;
  if (e) {
    if (typeof e == "string")
      return document.querySelectorAll(e)[0];
    if (typeof e == "function")
      return e();
    if (typeof e == "object" && e instanceof window.HTMLElement)
      return e;
  }
  return document.body;
}, Pg = D({
  compatConfig: {
    MODE: 3
  },
  name: "PortalWrapper",
  inheritAttrs: !1,
  props: {
    wrapperClassName: String,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getContainer: M.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    autoLock: be(),
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = j(), r = j(), i = j(), a = j(1), l = Ze() && document.createElement("div"), s = () => {
      var v, g;
      o.value === l && ((g = (v = o.value) === null || v === void 0 ? void 0 : v.parentNode) === null || g === void 0 || g.removeChild(o.value)), o.value = null;
    };
    let u = null;
    const d = function() {
      return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) || o.value && !o.value.parentNode ? (u = Ya(e.getContainer), u ? (u.appendChild(o.value), !0) : !1) : !0;
    }, c = () => no ? (o.value || (o.value = l, d(!0)), p(), o.value) : null, p = () => {
      const {
        wrapperClassName: v
      } = e;
      o.value && v && v !== o.value.className && (o.value.className = v);
    };
    return Dn(() => {
      p(), d();
    }), Tg(w(() => e.autoLock && e.visible && Ze() && (o.value === document.body || o.value === l))), ke(() => {
      let v = !1;
      Y([() => e.visible, () => e.getContainer], (g, y) => {
        let [h, b] = g, [$, x] = y;
        no && (u = Ya(e.getContainer), u === document.body && (h && !$ ? wt += 1 : v && (wt -= 1))), v && (typeof b == "function" && typeof x == "function" ? b.toString() !== x.toString() : b !== x) && s(), v = !0;
      }, {
        immediate: !0,
        flush: "post"
      }), Fe(() => {
        d() || (i.value = ye(() => {
          a.value += 1;
        }));
      });
    }), Me(() => {
      const {
        visible: v
      } = e;
      no && u === document.body && (wt = v && wt ? wt - 1 : wt), s(), ye.cancel(i.value);
    }), () => {
      const {
        forceRender: v,
        visible: g
      } = e;
      let y = null;
      const h = {
        getOpenCount: () => wt,
        getContainer: c
      };
      return a.value && (v || g || r.value) && (y = f(bg, {
        getContainer: c,
        ref: r,
        didUpdate: e.didUpdate
      }, {
        default: () => {
          var b;
          return (b = n.default) === null || b === void 0 ? void 0 : b.call(n, h);
        }
      })), y;
    };
  }
}), _g = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"], hi = D({
  compatConfig: {
    MODE: 3
  },
  name: "Trigger",
  mixins: [hg],
  inheritAttrs: !1,
  props: rf(),
  setup(e) {
    const t = w(() => {
      const {
        popupPlacement: r,
        popupAlign: i,
        builtinPlacements: a
      } = e;
      return r && a ? Xa(a, r, i) : i;
    }), n = j(null), o = (r) => {
      n.value = r;
    };
    return {
      vcTriggerContext: R("vcTriggerContext", {}),
      popupRef: n,
      setPopupRef: o,
      triggerRef: j(null),
      align: t,
      focusTime: null,
      clickOutsideHandler: null,
      contextmenuOutsideHandler1: null,
      contextmenuOutsideHandler2: null,
      touchOutsideHandler: null,
      attachId: null,
      delayTimer: null,
      hasPopupMouseDown: !1,
      preClickTime: null,
      preTouchTime: null,
      mouseDownTimeout: null,
      childOriginEvents: {}
    };
  },
  data() {
    const e = this.$props;
    let t;
    return this.popupVisible !== void 0 ? t = !!e.popupVisible : t = !!e.defaultPopupVisible, _g.forEach((n) => {
      this[`fire${n}`] = (o) => {
        this.fireEvents(n, o);
      };
    }), {
      prevPopupVisible: t,
      sPopupVisible: t,
      point: null
    };
  },
  watch: {
    popupVisible(e) {
      e !== void 0 && (this.prevPopupVisible = this.sPopupVisible, this.sPopupVisible = e);
    }
  },
  created() {
    se("vcTriggerContext", {
      onPopupMouseDown: this.onPopupMouseDown,
      onPopupMouseenter: this.onPopupMouseenter,
      onPopupMouseleave: this.onPopupMouseleave
    }), vc(this);
  },
  deactivated() {
    this.setPopupVisible(!1);
  },
  mounted() {
    this.$nextTick(() => {
      this.updatedCal();
    });
  },
  updated() {
    this.$nextTick(() => {
      this.updatedCal();
    });
  },
  beforeUnmount() {
    this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), ye.cancel(this.attachId);
  },
  methods: {
    updatedCal() {
      const e = this.$props;
      if (this.$data.sPopupVisible) {
        let n;
        !this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow()) && (n = e.getDocument(this.getRootDomNode()), this.clickOutsideHandler = pn(n, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (n = n || e.getDocument(this.getRootDomNode()), this.touchOutsideHandler = pn(n, "touchstart", this.onDocumentClick, Ot ? {
          passive: !1
        } : !1)), !this.contextmenuOutsideHandler1 && this.isContextmenuToShow() && (n = n || e.getDocument(this.getRootDomNode()), this.contextmenuOutsideHandler1 = pn(n, "scroll", this.onContextmenuClose)), !this.contextmenuOutsideHandler2 && this.isContextmenuToShow() && (this.contextmenuOutsideHandler2 = pn(window, "blur", this.onContextmenuClose));
      } else
        this.clearOutsideHandler();
    },
    onMouseenter(e) {
      const {
        mouseEnterDelay: t
      } = this.$props;
      this.fireEvents("onMouseenter", e), this.delaySetPopupVisible(!0, t, t ? null : e);
    },
    onMouseMove(e) {
      this.fireEvents("onMousemove", e), this.setPoint(e);
    },
    onMouseleave(e) {
      this.fireEvents("onMouseleave", e), this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
    },
    onPopupMouseenter() {
      const {
        vcTriggerContext: e = {}
      } = this;
      e.onPopupMouseenter && e.onPopupMouseenter(), this.clearDelayTimer();
    },
    onPopupMouseleave(e) {
      var t;
      if (e && e.relatedTarget && !e.relatedTarget.setTimeout && $t((t = this.popupRef) === null || t === void 0 ? void 0 : t.getElement(), e.relatedTarget))
        return;
      this.isMouseLeaveToHide() && this.delaySetPopupVisible(!1, this.$props.mouseLeaveDelay);
      const {
        vcTriggerContext: n = {}
      } = this;
      n.onPopupMouseleave && n.onPopupMouseleave(e);
    },
    onFocus(e) {
      this.fireEvents("onFocus", e), this.clearDelayTimer(), this.isFocusToShow() && (this.focusTime = Date.now(), this.delaySetPopupVisible(!0, this.$props.focusDelay));
    },
    onMousedown(e) {
      this.fireEvents("onMousedown", e), this.preClickTime = Date.now();
    },
    onTouchstart(e) {
      this.fireEvents("onTouchstart", e), this.preTouchTime = Date.now();
    },
    onBlur(e) {
      $t(e.target, e.relatedTarget || document.activeElement) || (this.fireEvents("onBlur", e), this.clearDelayTimer(), this.isBlurToHide() && this.delaySetPopupVisible(!1, this.$props.blurDelay));
    },
    onContextmenu(e) {
      e.preventDefault(), this.fireEvents("onContextmenu", e), this.setPopupVisible(!0, e);
    },
    onContextmenuClose() {
      this.isContextmenuToShow() && this.close();
    },
    onClick(e) {
      if (this.fireEvents("onClick", e), this.focusTime) {
        let n;
        if (this.preClickTime && this.preTouchTime ? n = Math.min(this.preClickTime, this.preTouchTime) : this.preClickTime ? n = this.preClickTime : this.preTouchTime && (n = this.preTouchTime), Math.abs(n - this.focusTime) < 20)
          return;
        this.focusTime = 0;
      }
      this.preClickTime = 0, this.preTouchTime = 0, this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && e && e.preventDefault && e.preventDefault(), e && e.domEvent && e.domEvent.preventDefault();
      const t = !this.$data.sPopupVisible;
      (this.isClickToHide() && !t || t && this.isClickToShow()) && this.setPopupVisible(!this.$data.sPopupVisible, e);
    },
    onPopupMouseDown() {
      const {
        vcTriggerContext: e = {}
      } = this;
      this.hasPopupMouseDown = !0, clearTimeout(this.mouseDownTimeout), this.mouseDownTimeout = setTimeout(() => {
        this.hasPopupMouseDown = !1;
      }, 0), e.onPopupMouseDown && e.onPopupMouseDown(...arguments);
    },
    onDocumentClick(e) {
      if (this.$props.mask && !this.$props.maskClosable)
        return;
      const t = e.target, n = this.getRootDomNode(), o = this.getPopupDomNode();
      // mousedown on the target should also close popup when action is contextMenu.
      // https://github.com/ant-design/ant-design/issues/29853
      (!$t(n, t) || this.isContextMenuOnly()) && !$t(o, t) && !this.hasPopupMouseDown && this.delaySetPopupVisible(!1, 0.1);
    },
    getPopupDomNode() {
      var e;
      return ((e = this.popupRef) === null || e === void 0 ? void 0 : e.getElement()) || null;
    },
    getRootDomNode() {
      var e, t, n, o;
      const {
        getTriggerDOMNode: r
      } = this.$props;
      if (r) {
        const i = ((t = (e = this.triggerRef) === null || e === void 0 ? void 0 : e.$el) === null || t === void 0 ? void 0 : t.nodeName) === "#comment" ? null : rt(this.triggerRef);
        return rt(r(i));
      }
      try {
        const i = ((o = (n = this.triggerRef) === null || n === void 0 ? void 0 : n.$el) === null || o === void 0 ? void 0 : o.nodeName) === "#comment" ? null : rt(this.triggerRef);
        if (i)
          return i;
      } catch {
      }
      return rt(this);
    },
    handleGetPopupClassFromAlign(e) {
      const t = [], n = this.$props, {
        popupPlacement: o,
        builtinPlacements: r,
        prefixCls: i,
        alignPoint: a,
        getPopupClassNameFromAlign: l
      } = n;
      return o && r && t.push(gg(r, i, e, a)), l && t.push(l(e)), t.join(" ");
    },
    getPopupAlign() {
      const e = this.$props, {
        popupPlacement: t,
        popupAlign: n,
        builtinPlacements: o
      } = e;
      return t && o ? Xa(o, t, n) : n;
    },
    getComponent() {
      const e = {};
      this.isMouseEnterToShow() && (e.onMouseenter = this.onPopupMouseenter), this.isMouseLeaveToHide() && (e.onMouseleave = this.onPopupMouseleave), e.onMousedown = this.onPopupMouseDown, e[Ot ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
      const {
        handleGetPopupClassFromAlign: t,
        getRootDomNode: n,
        $attrs: o
      } = this, {
        prefixCls: r,
        destroyPopupOnHide: i,
        popupClassName: a,
        popupAnimation: l,
        popupTransitionName: s,
        popupStyle: u,
        mask: d,
        maskAnimation: c,
        maskTransitionName: p,
        zIndex: v,
        stretch: g,
        alignPoint: y,
        mobile: h,
        forceRender: b
      } = this.$props, {
        sPopupVisible: $,
        point: x
      } = this.$data, _ = m(m({
        prefixCls: r,
        destroyPopupOnHide: i,
        visible: $,
        point: y ? x : null,
        align: this.align,
        animation: l,
        getClassNameFromAlign: t,
        stretch: g,
        getRootDomNode: n,
        mask: d,
        zIndex: v,
        transitionName: s,
        maskAnimation: c,
        maskTransitionName: p,
        class: a,
        style: u,
        onAlign: o.onPopupAlign || Os
      }, e), {
        ref: this.setPopupRef,
        mobile: h,
        forceRender: b
      });
      return f(vg, _, {
        default: this.$slots.popup || (() => $f(this, "popup"))
      });
    },
    attachParent(e) {
      ye.cancel(this.attachId);
      const {
        getPopupContainer: t,
        getDocument: n
      } = this.$props, o = this.getRootDomNode();
      let r;
      t ? (o || t.length === 0) && (r = t(o)) : r = n(this.getRootDomNode()).body, r ? r.appendChild(e) : this.attachId = ye(() => {
        this.attachParent(e);
      });
    },
    getContainer() {
      const {
        $props: e
      } = this, {
        getDocument: t
      } = e, n = t(this.getRootDomNode()).createElement("div");
      return n.style.position = "absolute", n.style.top = "0", n.style.left = "0", n.style.width = "100%", this.attachParent(n), n;
    },
    setPopupVisible(e, t) {
      const {
        alignPoint: n,
        sPopupVisible: o,
        onPopupVisibleChange: r
      } = this;
      this.clearDelayTimer(), o !== e && (bf(this, "popupVisible") || this.setState({
        sPopupVisible: e,
        prevPopupVisible: o
      }), r && r(e)), n && t && e && this.setPoint(t);
    },
    setPoint(e) {
      const {
        alignPoint: t
      } = this.$props;
      !t || !e || this.setState({
        point: {
          pageX: e.pageX,
          pageY: e.pageY
        }
      });
    },
    handlePortalUpdate() {
      this.prevPopupVisible !== this.sPopupVisible && this.afterPopupVisibleChange(this.sPopupVisible);
    },
    delaySetPopupVisible(e, t, n) {
      const o = t * 1e3;
      if (this.clearDelayTimer(), o) {
        const r = n ? {
          pageX: n.pageX,
          pageY: n.pageY
        } : null;
        this.delayTimer = setTimeout(() => {
          this.setPopupVisible(e, r), this.clearDelayTimer();
        }, o);
      } else
        this.setPopupVisible(e, n);
    },
    clearDelayTimer() {
      this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
    },
    clearOutsideHandler() {
      this.clickOutsideHandler && (this.clickOutsideHandler.remove(), this.clickOutsideHandler = null), this.contextmenuOutsideHandler1 && (this.contextmenuOutsideHandler1.remove(), this.contextmenuOutsideHandler1 = null), this.contextmenuOutsideHandler2 && (this.contextmenuOutsideHandler2.remove(), this.contextmenuOutsideHandler2 = null), this.touchOutsideHandler && (this.touchOutsideHandler.remove(), this.touchOutsideHandler = null);
    },
    createTwoChains(e) {
      let t = () => {
      };
      const n = ia(this);
      return this.childOriginEvents[e] && n[e] ? this[`fire${e}`] : (t = this.childOriginEvents[e] || n[e] || t, t);
    },
    isClickToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("click") !== -1 || t.indexOf("click") !== -1;
    },
    isContextMenuOnly() {
      const {
        action: e
      } = this.$props;
      return e === "contextmenu" || e.length === 1 && e[0] === "contextmenu";
    },
    isContextmenuToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("contextmenu") !== -1 || t.indexOf("contextmenu") !== -1;
    },
    isClickToHide() {
      const {
        action: e,
        hideAction: t
      } = this.$props;
      return e.indexOf("click") !== -1 || t.indexOf("click") !== -1;
    },
    isMouseEnterToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("hover") !== -1 || t.indexOf("mouseenter") !== -1;
    },
    isMouseLeaveToHide() {
      const {
        action: e,
        hideAction: t
      } = this.$props;
      return e.indexOf("hover") !== -1 || t.indexOf("mouseleave") !== -1;
    },
    isFocusToShow() {
      const {
        action: e,
        showAction: t
      } = this.$props;
      return e.indexOf("focus") !== -1 || t.indexOf("focus") !== -1;
    },
    isBlurToHide() {
      const {
        action: e,
        hideAction: t
      } = this.$props;
      return e.indexOf("focus") !== -1 || t.indexOf("blur") !== -1;
    },
    forcePopupAlign() {
      var e;
      this.$data.sPopupVisible && ((e = this.popupRef) === null || e === void 0 || e.forceAlign());
    },
    fireEvents(e, t) {
      this.childOriginEvents[e] && this.childOriginEvents[e](t);
      const n = this.$props[e] || this.$attrs[e];
      n && n(t);
    },
    close() {
      this.setPopupVisible(!1);
    }
  },
  render() {
    const {
      $attrs: e
    } = this, t = on(wf(this)), {
      alignPoint: n,
      getPopupContainer: o
    } = this.$props, r = t[0];
    this.childOriginEvents = ia(r);
    const i = {
      key: "trigger"
    };
    this.isContextmenuToShow() ? i.onContextmenu = this.onContextmenu : i.onContextmenu = this.createTwoChains("onContextmenu"), this.isClickToHide() || this.isClickToShow() ? (i.onClick = this.onClick, i.onMousedown = this.onMousedown, i[Ot ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart) : (i.onClick = this.createTwoChains("onClick"), i.onMousedown = this.createTwoChains("onMousedown"), i[Ot ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart")), this.isMouseEnterToShow() ? (i.onMouseenter = this.onMouseenter, n && (i.onMousemove = this.onMouseMove)) : i.onMouseenter = this.createTwoChains("onMouseenter"), this.isMouseLeaveToHide() ? i.onMouseleave = this.onMouseleave : i.onMouseleave = this.createTwoChains("onMouseleave"), this.isFocusToShow() || this.isBlurToHide() ? (i.onFocus = this.onFocus, i.onBlur = this.onBlur) : (i.onFocus = this.createTwoChains("onFocus"), i.onBlur = (u) => {
      u && (!u.relatedTarget || !$t(u.target, u.relatedTarget)) && this.createTwoChains("onBlur")(u);
    });
    const a = ae(r && r.props && r.props.class, e.class);
    a && (i.class = a);
    const l = Ae(r, m(m({}, i), {
      ref: "triggerRef"
    }), !0, !0), s = f(Pg, {
      key: "portal",
      getContainer: o && (() => o(this.getRootDomNode())),
      didUpdate: this.handlePortalUpdate,
      visible: this.$data.sPopupVisible
    }, {
      default: this.getComponent
    });
    return f(Be, null, [l, s]);
  }
}), jt = {
  adjustX: 1,
  adjustY: 1
}, Lt = [0, 0], Eg = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: jt,
    offset: [0, -4],
    targetOffset: Lt
  },
  topCenter: {
    points: ["bc", "tc"],
    overflow: jt,
    offset: [0, -4],
    targetOffset: Lt
  },
  topRight: {
    points: ["br", "tr"],
    overflow: jt,
    offset: [0, -4],
    targetOffset: Lt
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: jt,
    offset: [0, 4],
    targetOffset: Lt
  },
  bottomCenter: {
    points: ["tc", "bc"],
    overflow: jt,
    offset: [0, 4],
    targetOffset: Lt
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: jt,
    offset: [0, 4],
    targetOffset: Lt
  }
};
var Ig = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Mg = D({
  compatConfig: {
    MODE: 3
  },
  props: {
    minOverlayWidthMatchTrigger: {
      type: Boolean,
      default: void 0
    },
    arrow: {
      type: Boolean,
      default: !1
    },
    prefixCls: M.string.def("rc-dropdown"),
    transitionName: String,
    overlayClassName: M.string.def(""),
    openClassName: String,
    animation: M.any,
    align: M.object,
    overlayStyle: {
      type: Object,
      default: void 0
    },
    placement: M.string.def("bottomLeft"),
    overlay: M.any,
    trigger: M.oneOfType([M.string, M.arrayOf(M.string)]).def("hover"),
    alignPoint: {
      type: Boolean,
      default: void 0
    },
    showAction: M.array,
    hideAction: M.array,
    getPopupContainer: Function,
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: !1
    },
    mouseEnterDelay: M.number.def(0.15),
    mouseLeaveDelay: M.number.def(0.1)
  },
  emits: ["visibleChange", "overlayClick"],
  setup(e, t) {
    let {
      slots: n,
      emit: o,
      expose: r
    } = t;
    const i = F(!!e.visible);
    Y(() => e.visible, (v) => {
      v !== void 0 && (i.value = v);
    });
    const a = F();
    r({
      triggerRef: a
    });
    const l = (v) => {
      e.visible === void 0 && (i.value = !1), o("overlayClick", v);
    }, s = (v) => {
      e.visible === void 0 && (i.value = v), o("visibleChange", v);
    }, u = () => {
      var v;
      const g = (v = n.overlay) === null || v === void 0 ? void 0 : v.call(n), y = {
        prefixCls: `${e.prefixCls}-menu`,
        onClick: l
      };
      return f(Be, {
        key: Ms
      }, [e.arrow && f("div", {
        class: `${e.prefixCls}-arrow`
      }, null), Ae(g, y, !1)]);
    }, d = w(() => {
      const {
        minOverlayWidthMatchTrigger: v = !e.alignPoint
      } = e;
      return v;
    }), c = () => {
      var v;
      const g = (v = n.default) === null || v === void 0 ? void 0 : v.call(n);
      return i.value && g ? Ae(g[0], {
        class: e.openClassName || `${e.prefixCls}-open`
      }, !1) : g;
    }, p = w(() => !e.hideAction && e.trigger.indexOf("contextmenu") !== -1 ? ["click"] : e.hideAction);
    return () => {
      const {
        prefixCls: v,
        arrow: g,
        showAction: y,
        overlayStyle: h,
        trigger: b,
        placement: $,
        align: x,
        getPopupContainer: _,
        transitionName: C,
        animation: O,
        overlayClassName: S
      } = e, P = Ig(e, ["prefixCls", "arrow", "showAction", "overlayStyle", "trigger", "placement", "align", "getPopupContainer", "transitionName", "animation", "overlayClassName"]);
      return f(hi, H(H({}, P), {}, {
        prefixCls: v,
        ref: a,
        popupClassName: ae(S, {
          [`${v}-show-arrow`]: g
        }),
        popupStyle: h,
        builtinPlacements: Eg,
        action: b,
        showAction: y,
        hideAction: p.value || [],
        popupPlacement: $,
        popupAlign: x,
        popupTransitionName: C,
        popupAnimation: O,
        popupVisible: i.value,
        stretch: d.value ? "minWidth" : "",
        onPopupVisibleChange: s,
        getPopupContainer: _
      }), {
        popup: u,
        default: c
      });
    };
  }
}), Ag = "anticon", bc = Symbol("configProvider"), wc = {
  getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
  iconPrefixCls: w(() => Ag),
  getPopupContainer: w(() => () => document.body),
  direction: w(() => "ltr")
}, Dg = () => R(bc, wc), Rg = Symbol("DisabledContextKey"), yi = () => R(Rg, F(void 0)), Ng = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
}, Bg = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
}, Sc = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, qa = {
  lang: m({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, Bg),
  timePickerLocale: m({}, Sc)
}, $e = "${label} is not a valid ${type}", Qa = {
  locale: "en",
  Pagination: Ng,
  DatePicker: qa,
  TimePicker: Sc,
  Calendar: qa,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: $e,
        method: $e,
        array: $e,
        object: $e,
        number: $e,
        date: $e,
        boolean: $e,
        integer: $e,
        float: $e,
        regexp: $e,
        email: $e,
        url: $e,
        hex: $e
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  }
}, zg = D({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = R("localeData", {}), r = w(() => {
      const {
        componentName: a = "global",
        defaultLocale: l
      } = e, s = l || Qa[a || "global"], {
        antLocale: u
      } = o, d = a && u ? u[a] : {};
      return m(m({}, typeof s == "function" ? s() : s), d || {});
    }), i = w(() => {
      const {
        antLocale: a
      } = o, l = a && a.locale;
      return a && a.exist && !l ? Qa.locale : l;
    });
    return () => {
      const a = e.children || n.default, {
        antLocale: l
      } = o;
      return a == null ? void 0 : a(r.value, i.value, l);
    };
  }
});
function bi(e) {
  for (var t = 0, n, o = 0, r = e.length; r >= 4; ++o, r -= 4)
    n = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (r) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
const Za = "%";
class Hg {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.instanceId = t;
  }
  get(t) {
    return this.cache.get(Array.isArray(t) ? t.join(Za) : t) || null;
  }
  update(t, n) {
    const o = Array.isArray(t) ? t.join(Za) : t, r = this.cache.get(o), i = n(r);
    i === null ? this.cache.delete(o) : this.cache.set(o, i);
  }
}
const $c = "data-token-hash", Pt = "data-css-hash", jg = "data-cache-path", Wt = "__cssinjs_instance__";
function Pn() {
  const e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    const t = document.body.querySelectorAll(`style[${Pt}]`) || [], {
      firstChild: n
    } = document.head;
    Array.from(t).forEach((r) => {
      r[Wt] = r[Wt] || e, r[Wt] === e && document.head.insertBefore(r, n);
    });
    const o = {};
    Array.from(document.querySelectorAll(`style[${Pt}]`)).forEach((r) => {
      var i;
      const a = r.getAttribute(Pt);
      o[a] ? r[Wt] === e && ((i = r.parentNode) === null || i === void 0 || i.removeChild(r)) : o[a] = !0;
    });
  }
  return new Hg(e);
}
const Cc = Symbol("StyleContextKey"), Lg = () => {
  var e, t, n;
  const o = Rt();
  let r;
  if (o && o.appContext) {
    const i = (n = (t = (e = o.appContext) === null || e === void 0 ? void 0 : e.config) === null || t === void 0 ? void 0 : t.globalProperties) === null || n === void 0 ? void 0 : n.__ANTDV_CSSINJS_CACHE__;
    i ? r = i : (r = Pn(), o.appContext.config.globalProperties && (o.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = r));
  } else
    r = Pn();
  return r;
}, xc = {
  cache: Pn(),
  defaultCache: !0,
  hashPriority: "low"
}, Ho = () => {
  const e = Lg();
  return R(Cc, j(m(m({}, xc), {
    cache: e
  })));
}, Fg = (e) => {
  const t = Ho(), n = j(m(m({}, xc), {
    cache: Pn()
  }));
  return Y([() => xt(e), t], () => {
    const o = m({}, t.value), r = xt(e);
    Object.keys(r).forEach((a) => {
      const l = r[a];
      r[a] !== void 0 && (o[a] = l);
    });
    const {
      cache: i
    } = r;
    o.cache = o.cache || Pn(), o.defaultCache = !i && t.value.defaultCache, n.value = o;
  }, {
    immediate: !0
  }), se(Cc, n), n;
}, Vg = () => ({
  autoClear: be(),
  /** @private Test only. Not work in production. */
  mock: Ka(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: we(),
  /** Tell children that this context is default generated context */
  defaultCache: be(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: Ka(),
  /** Tell cssinjs where to inject style in */
  container: fc(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: be(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: ka(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: ka()
});
Hn(D({
  name: "AStyleProvider",
  inheritAttrs: !1,
  props: Vg(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Fg(e), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
}));
function Wg() {
  return !1;
}
let Mr = !1;
function kg() {
  return Mr;
}
const Kg = process.env.NODE_ENV === "production" ? Wg : kg;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  const e = window;
  if (typeof e.webpackHotUpdate == "function") {
    const t = e.webpackHotUpdate;
    e.webpackHotUpdate = function() {
      return Mr = !0, setTimeout(() => {
        Mr = !1;
      }, 0), t(...arguments);
    };
  }
}
function Oc(e, t, n, o) {
  const r = Ho(), i = j(""), a = j();
  lt(() => {
    i.value = [e, ...t.value].join("%");
  });
  const l = Kg(), s = (u) => {
    r.value.cache.update(u, (d) => {
      const [c = 0, p] = d || [];
      return c - 1 === 0 ? (o == null || o(p, !1), null) : [c - 1, p];
    });
  };
  return Y(i, (u, d) => {
    d && s(d), r.value.cache.update(u, (c) => {
      const [p = 0, v] = c || [];
      let g = v;
      process.env.NODE_ENV !== "production" && v && l && (o == null || o(g, l), g = null);
      const y = g || n();
      return [p + 1, y];
    }), a.value = r.value.cache.get(i.value)[1];
  }, {
    immediate: !0
  }), Me(() => {
    s(i.value);
  }), a;
}
function Xg(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
class Jt {
  constructor() {
    this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = {
      map: this.cache
    };
    return t.forEach((r) => {
      var i;
      o ? o = (i = o == null ? void 0 : o.map) === null || i === void 0 ? void 0 : i.get(r) : o = void 0;
    }), o != null && o.value && n && (o.value[1] = this.cacheCallTimes++), o == null ? void 0 : o.value;
  }
  get(t) {
    var n;
    return (n = this.internalGet(t, !0)) === null || n === void 0 ? void 0 : n[0];
  }
  has(t) {
    return !!this.internalGet(t);
  }
  set(t, n) {
    if (!this.has(t)) {
      if (this.size() + 1 > Jt.MAX_CACHE_SIZE + Jt.MAX_CACHE_OFFSET) {
        const [r] = this.keys.reduce((i, a) => {
          const [, l] = i;
          return this.internalGet(a)[1] < l ? [a, this.internalGet(a)[1]] : i;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(r);
      }
      this.keys.push(t);
    }
    let o = this.cache;
    t.forEach((r, i) => {
      if (i === t.length - 1)
        o.set(r, {
          value: [n, this.cacheCallTimes++]
        });
      else {
        const a = o.get(r);
        a ? a.map || (a.map = /* @__PURE__ */ new Map()) : o.set(r, {
          map: /* @__PURE__ */ new Map()
        }), o = o.get(r).map;
      }
    });
  }
  deleteByPath(t, n) {
    var o;
    const r = t.get(n[0]);
    if (n.length === 1)
      return r.map ? t.set(n[0], {
        map: r.map
      }) : t.delete(n[0]), (o = r.value) === null || o === void 0 ? void 0 : o[0];
    const i = this.deleteByPath(r.map, n.slice(1));
    return (!r.map || r.map.size === 0) && !r.value && t.delete(n[0]), i;
  }
  delete(t) {
    if (this.has(t))
      return this.keys = this.keys.filter((n) => !Xg(n, t)), this.deleteByPath(this.cache, t);
  }
}
Jt.MAX_CACHE_SIZE = 20;
Jt.MAX_CACHE_OFFSET = 5;
let Ja = 0;
class Tc {
  constructor(t) {
    this.derivatives = Array.isArray(t) ? t : [t], this.id = Ja, t.length === 0 && dt(t.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function."), Ja += 1;
  }
  getDerivativeToken(t) {
    return this.derivatives.reduce((n, o) => o(t, n), void 0);
  }
}
const tr = new Jt();
function Ug(e) {
  const t = Array.isArray(e) ? e : [e];
  return tr.has(t) || tr.set(t, new Tc(t)), tr.get(t);
}
const el = /* @__PURE__ */ new WeakMap();
function yo(e) {
  let t = el.get(e) || "";
  return t || (Object.keys(e).forEach((n) => {
    const o = e[n];
    t += n, o instanceof Tc ? t += o.id : o && typeof o == "object" ? t += yo(o) : t += o;
  }), el.set(e, t)), t;
}
function Gg(e, t) {
  return bi(`${t}_${yo(e)}`);
}
const hn = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ""), Pc = "_bAmBoO_";
function Yg(e, t, n) {
  var o, r;
  if (Ze()) {
    ho(e, hn);
    const i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t == null || t(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    const a = (o = getComputedStyle(i).content) === null || o === void 0 ? void 0 : o.includes(Pc);
    return (r = i.parentNode) === null || r === void 0 || r.removeChild(i), go(hn), a;
  }
  return !1;
}
let nr;
function qg() {
  return nr === void 0 && (nr = Yg(`@layer ${hn} { .${hn} { content: "${Pc}"!important; } }`, (e) => {
    e.className = hn;
  })), nr;
}
const tl = {}, Qg = process.env.NODE_ENV === "production", Zg = process.env.NODE_ENV === "prerender", Jg = !Qg && !Zg ? "css-dev-only-do-not-override" : "css", Ct = /* @__PURE__ */ new Map();
function eh(e) {
  Ct.set(e, (Ct.get(e) || 0) + 1);
}
function th(e, t) {
  typeof document < "u" && document.querySelectorAll(`style[${$c}="${e}"]`).forEach((o) => {
    var r;
    o[Wt] === t && ((r = o.parentNode) === null || r === void 0 || r.removeChild(o));
  });
}
const nh = 0;
function oh(e, t) {
  Ct.set(e, (Ct.get(e) || 0) - 1);
  const n = Array.from(Ct.keys()), o = n.filter((r) => (Ct.get(r) || 0) <= 0);
  n.length - o.length > nh && o.forEach((r) => {
    th(r, t), Ct.delete(r);
  });
}
const rh = (e, t, n, o) => {
  const r = n.getDerivativeToken(e);
  let i = m(m({}, r), t);
  return o && (i = o(i)), i;
};
function ih(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : F({});
  const o = Ho(), r = w(() => m({}, ...t.value)), i = w(() => yo(r.value)), a = w(() => yo(n.value.override || tl));
  return Oc("token", w(() => [n.value.salt || "", e.value.id, i.value, a.value]), () => {
    const {
      salt: s = "",
      override: u = tl,
      formatToken: d,
      getComputedToken: c
    } = n.value, p = c ? c(r.value, u, e.value) : rh(r.value, u, e.value, d), v = Gg(p, s);
    p._tokenKey = v, eh(v);
    const g = `${Jg}-${bi(v)}`;
    return p._hashId = g, [p, g];
  }, (s) => {
    var u;
    oh(s[0]._tokenKey, (u = o.value) === null || u === void 0 ? void 0 : u.cache.instanceId);
  });
}
var ah = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, _c = "comm", Ec = "rule", Ic = "decl", lh = "@import", sh = "@keyframes", ch = "@layer", Mc = Math.abs, wi = String.fromCharCode;
function Ac(e) {
  return e.trim();
}
function oo(e, t, n) {
  return e.replace(t, n);
}
function uh(e, t, n) {
  return e.indexOf(t, n);
}
function _n(e, t) {
  return e.charCodeAt(t) | 0;
}
function En(e, t, n) {
  return e.slice(t, n);
}
function Ye(e) {
  return e.length;
}
function dh(e) {
  return e.length;
}
function Kn(e, t) {
  return t.push(e), e;
}
var jo = 1, en = 1, Dc = 0, De = 0, ce = 0, an = "";
function Si(e, t, n, o, r, i, a, l) {
  return { value: e, root: t, parent: n, type: o, props: r, children: i, line: jo, column: en, length: a, return: "", siblings: l };
}
function fh() {
  return ce;
}
function ph() {
  return ce = De > 0 ? _n(an, --De) : 0, en--, ce === 10 && (en = 1, jo--), ce;
}
function Ne() {
  return ce = De < Dc ? _n(an, De++) : 0, en++, ce === 10 && (en = 1, jo++), ce;
}
function _t() {
  return _n(an, De);
}
function ro() {
  return De;
}
function Lo(e, t) {
  return En(an, e, t);
}
function Ar(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function vh(e) {
  return jo = en = 1, Dc = Ye(an = e), De = 0, [];
}
function mh(e) {
  return an = "", e;
}
function or(e) {
  return Ac(Lo(De - 1, Dr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gh(e) {
  for (; (ce = _t()) && ce < 33; )
    Ne();
  return Ar(e) > 2 || Ar(ce) > 3 ? "" : " ";
}
function hh(e, t) {
  for (; --t && Ne() && !(ce < 48 || ce > 102 || ce > 57 && ce < 65 || ce > 70 && ce < 97); )
    ;
  return Lo(e, ro() + (t < 6 && _t() == 32 && Ne() == 32));
}
function Dr(e) {
  for (; Ne(); )
    switch (ce) {
      case e:
        return De;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Dr(ce);
        break;
      case 40:
        e === 41 && Dr(e);
        break;
      case 92:
        Ne();
        break;
    }
  return De;
}
function yh(e, t) {
  for (; Ne() && e + ce !== 57; )
    if (e + ce === 84 && _t() === 47)
      break;
  return "/*" + Lo(t, De - 1) + "*" + wi(e === 47 ? e : Ne());
}
function bh(e) {
  for (; !Ar(_t()); )
    Ne();
  return Lo(e, De);
}
function wh(e) {
  return mh(io("", null, null, null, [""], e = vh(e), 0, [0], e));
}
function io(e, t, n, o, r, i, a, l, s) {
  for (var u = 0, d = 0, c = a, p = 0, v = 0, g = 0, y = 1, h = 1, b = 1, $ = 0, x = "", _ = r, C = i, O = o, S = x; h; )
    switch (g = $, $ = Ne()) {
      case 40:
        if (g != 108 && _n(S, c - 1) == 58) {
          uh(S += oo(or($), "&", "&\f"), "&\f", Mc(u ? l[u - 1] : 0)) != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += or($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += gh(g);
        break;
      case 92:
        S += hh(ro() - 1, 7);
        continue;
      case 47:
        switch (_t()) {
          case 42:
          case 47:
            Kn(Sh(yh(Ne(), ro()), t, n, s), s);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * y:
        l[u++] = Ye(S) * b;
      case 125 * y:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            h = 0;
          case 59 + d:
            b == -1 && (S = oo(S, /\f/g, "")), v > 0 && Ye(S) - c && Kn(v > 32 ? ol(S + ";", o, n, c - 1, s) : ol(oo(S, " ", "") + ";", o, n, c - 2, s), s);
            break;
          case 59:
            S += ";";
          default:
            if (Kn(O = nl(S, t, n, u, d, r, l, x, _ = [], C = [], c, i), i), $ === 123)
              if (d === 0)
                io(S, t, O, O, _, i, c, l, C);
              else
                switch (p === 99 && _n(S, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    io(e, O, O, o && Kn(nl(e, O, O, 0, 0, r, l, x, r, _ = [], c, C), C), r, C, c, l, o ? _ : C);
                    break;
                  default:
                    io(S, O, O, O, [""], C, 0, l, C);
                }
        }
        u = d = v = 0, y = b = 1, x = S = "", c = a;
        break;
      case 58:
        c = 1 + Ye(S), v = g;
      default:
        if (y < 1) {
          if ($ == 123)
            --y;
          else if ($ == 125 && y++ == 0 && ph() == 125)
            continue;
        }
        switch (S += wi($), $ * y) {
          case 38:
            b = d > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            l[u++] = (Ye(S) - 1) * b, b = 1;
            break;
          case 64:
            _t() === 45 && (S += or(Ne())), p = _t(), d = c = Ye(x = S += bh(ro())), $++;
            break;
          case 45:
            g === 45 && Ye(S) == 2 && (y = 0);
        }
    }
  return i;
}
function nl(e, t, n, o, r, i, a, l, s, u, d, c) {
  for (var p = r - 1, v = r === 0 ? i : [""], g = dh(v), y = 0, h = 0, b = 0; y < o; ++y)
    for (var $ = 0, x = En(e, p + 1, p = Mc(h = a[y])), _ = e; $ < g; ++$)
      (_ = Ac(h > 0 ? v[$] + " " + x : oo(x, /&\f/g, v[$]))) && (s[b++] = _);
  return Si(e, t, n, r === 0 ? Ec : l, s, u, d, c);
}
function Sh(e, t, n, o) {
  return Si(e, t, n, _c, wi(fh()), En(e, 2, -2), 0, o);
}
function ol(e, t, n, o, r) {
  return Si(e, t, n, Ic, En(e, 0, o), En(e, o + 1, -1), o, r);
}
function Rr(e, t) {
  for (var n = "", o = 0; o < e.length; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function $h(e, t, n, o) {
  switch (e.type) {
    case ch:
      if (e.children.length)
        break;
    case lh:
    case Ic:
      return e.return = e.return || e.value;
    case _c:
      return "";
    case sh:
      return e.return = e.value + "{" + Rr(e.children, o) + "}";
    case Ec:
      if (!Ye(e.value = e.props.join(",")))
        return "";
  }
  return Ye(n = Rr(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function Rc(e, t) {
  const {
    path: n,
    parentSelectors: o
  } = t;
  pi(!1, `[Ant Design Vue CSS-in-JS] ${n ? `Error in '${n}': ` : ""}${e}${o.length ? ` Selector info: ${o.join(" -> ")}` : ""}`);
}
const Ch = (e, t, n) => {
  if (e === "content") {
    const o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    (typeof t != "string" || ["normal", "none", "initial", "inherit", "unset"].indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Rc(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${t}"'\`.`, n);
  }
}, xh = (e, t, n) => {
  e === "animation" && n.hashId && t !== "none" && Rc(`You seem to be using hashed animation '${t}', in which case 'animationName' with Keyframe as value is recommended.`, n);
}, rl = "data-ant-cssinjs-cache-path", Oh = "_FILE_STYLE__";
let Et, Nc = !0;
function Th() {
  var e;
  if (!Et && (Et = {}, Ze())) {
    const t = document.createElement("div");
    t.className = rl, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    let n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach((r) => {
      const [i, a] = r.split(":");
      Et[i] = a;
    });
    const o = document.querySelector(`style[${rl}]`);
    o && (Nc = !1, (e = o.parentNode) === null || e === void 0 || e.removeChild(o)), document.body.removeChild(t);
  }
}
function Ph(e) {
  return Th(), !!Et[e];
}
function _h(e) {
  const t = Et[e];
  let n = null;
  if (t && Ze())
    if (Nc)
      n = Oh;
    else {
      const o = document.querySelector(`style[${Pt}="${Et[e]}"]`);
      o ? n = o.innerHTML : delete Et[e];
    }
  return [n, t];
}
const il = Ze(), Bc = "_skip_check_", zc = "_multi_value_";
function al(e) {
  return Rr(wh(e), $h).replace(/\{%%%\:[^;];}/g, ";");
}
function Eh(e) {
  return typeof e == "object" && e && (Bc in e || zc in e);
}
function Ih(e, t, n) {
  if (!t)
    return e;
  const o = `.${t}`, r = n === "low" ? `:where(${o})` : o;
  return e.split(",").map((a) => {
    var l;
    const s = a.trim().split(/\s+/);
    let u = s[0] || "";
    const d = ((l = u.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return u = `${d}${r}${u.slice(d.length)}`, [u, ...s.slice(1)].join(" ");
  }).join(",");
}
const Nr = /* @__PURE__ */ new Set();
process.env.NODE_ENV;
const Br = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    root: n,
    injectHash: o,
    parentSelectors: r
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  };
  const {
    hashId: i,
    layer: a,
    path: l,
    hashPriority: s,
    transformers: u = [],
    linters: d = []
  } = t;
  let c = "", p = {};
  function v(h) {
    const b = h.getName(i);
    if (!p[b]) {
      const [$] = Br(h.style, t, {
        root: !1,
        parentSelectors: r
      });
      p[b] = `@keyframes ${h.getName(i)}${$}`;
    }
  }
  function g(h) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return h.forEach(($) => {
      Array.isArray($) ? g($, b) : $ && b.push($);
    }), b;
  }
  if (g(Array.isArray(e) ? e : [e]).forEach((h) => {
    const b = typeof h == "string" && !n ? {} : h;
    if (typeof b == "string")
      c += `${b}
`;
    else if (b._keyframe)
      v(b);
    else {
      const $ = u.reduce((x, _) => {
        var C;
        return ((C = _ == null ? void 0 : _.visit) === null || C === void 0 ? void 0 : C.call(_, x)) || x;
      }, b);
      Object.keys($).forEach((x) => {
        var _;
        const C = $[x];
        if (typeof C == "object" && C && (x !== "animationName" || !C._keyframe) && !Eh(C)) {
          let O = !1, S = x.trim(), P = !1;
          (n || o) && i ? S.startsWith("@") ? O = !0 : S = Ih(x, i, s) : n && !i && (S === "&" || S === "") && (S = "", P = !0);
          const [E, T] = Br(C, t, {
            root: P,
            injectHash: O,
            parentSelectors: [...r, S]
          });
          p = m(m({}, p), T), c += `${S}${E}`;
        } else {
          let O = function(P, E) {
            process.env.NODE_ENV !== "production" && (typeof C != "object" || !(C != null && C[Bc])) && [Ch, xh, ...d].forEach((K) => K(P, E, {
              path: l,
              hashId: i,
              parentSelectors: r
            }));
            const T = P.replace(/[A-Z]/g, (K) => `-${K.toLowerCase()}`);
            let N = E;
            !ah[P] && typeof N == "number" && N !== 0 && (N = `${N}px`), P === "animationName" && (E != null && E._keyframe) && (v(E), N = E.getName(i)), c += `${T}:${N};`;
          };
          const S = (_ = C == null ? void 0 : C.value) !== null && _ !== void 0 ? _ : C;
          typeof C == "object" && (C != null && C[zc]) && Array.isArray(S) ? S.forEach((P) => {
            O(x, P);
          }) : O(x, S);
        }
      });
    }
  }), !n)
    c = `{${c}}`;
  else if (a && qg()) {
    const h = a.split(",");
    c = `@layer ${h[h.length - 1].trim()} {${c}}`, h.length > 1 && (c = `@layer ${a}{%%%:%}${c}`);
  }
  return [c, p];
};
function Mh(e, t) {
  return bi(`${e.join("%")}${t}`);
}
function ll(e, t) {
  const n = Ho(), o = w(() => e.value.token._tokenKey), r = w(() => [o.value, ...e.value.path]);
  let i = il;
  return process.env.NODE_ENV !== "production" && n.value.mock !== void 0 && (i = n.value.mock === "client"), Oc(
    "style",
    r,
    // Create cache if needed
    () => {
      const {
        path: a,
        hashId: l,
        layer: s,
        nonce: u,
        clientOnly: d,
        order: c = 0
      } = e.value, p = r.value.join("|");
      if (Ph(p)) {
        const [S, P] = _h(p);
        if (S)
          return [S, o.value, P, {}, d, c];
      }
      const v = t(), {
        hashPriority: g,
        container: y,
        transformers: h,
        linters: b,
        cache: $
      } = n.value, [x, _] = Br(v, {
        hashId: l,
        hashPriority: g,
        layer: s,
        path: a.join("-"),
        transformers: h,
        linters: b
      }), C = al(x), O = Mh(r.value, C);
      if (i) {
        const S = {
          mark: Pt,
          prepend: "queue",
          attachTo: y,
          priority: c
        }, P = typeof u == "function" ? u() : u;
        P && (S.csp = {
          nonce: P
        });
        const E = ho(C, O, S);
        E[Wt] = $.instanceId, E.setAttribute($c, o.value), process.env.NODE_ENV !== "production" && E.setAttribute(jg, r.value.join("|")), Object.keys(_).forEach((T) => {
          Nr.has(T) || (Nr.add(T), ho(al(_[T]), `_effect-${T}`, {
            mark: Pt,
            prepend: "queue",
            attachTo: y
          }));
        });
      }
      return [C, o.value, O, _, d, c];
    },
    // Remove cache if no need
    (a, l) => {
      let [, , s] = a;
      (l || n.value.autoClear) && il && go(s, {
        mark: Pt
      });
    }
  ), (a) => a;
}
class te {
  constructor(t, n) {
    this._keyframe = !0, this.name = t, this.style = n;
  }
  getName() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return t ? `${t}-${this.name}` : this.name;
  }
}
const Ah = "4.1.2", bo = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function he(e, t) {
  Dh(e) && (e = "100%");
  var n = Rh(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Xn(e) {
  return Math.min(1, Math.max(0, e));
}
function Dh(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Rh(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Hc(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Un(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Tt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Nh(e, t, n) {
  return {
    r: he(e, 255) * 255,
    g: he(t, 255) * 255,
    b: he(n, 255) * 255
  };
}
function sl(e, t, n) {
  e = he(e, 255), t = he(t, 255), n = he(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), i = 0, a = 0, l = (o + r) / 2;
  if (o === r)
    a = 0, i = 0;
  else {
    var s = o - r;
    switch (a = l > 0.5 ? s / (2 - o - r) : s / (o + r), o) {
      case e:
        i = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / s + 2;
        break;
      case n:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l };
}
function rr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Bh(e, t, n) {
  var o, r, i;
  if (e = he(e, 360), t = he(t, 100), n = he(n, 100), t === 0)
    r = n, i = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = rr(l, a, e + 1 / 3), r = rr(l, a, e), i = rr(l, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: i * 255 };
}
function zr(e, t, n) {
  e = he(e, 255), t = he(t, 255), n = he(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), i = 0, a = o, l = o - r, s = o === 0 ? 0 : l / o;
  if (o === r)
    i = 0;
  else {
    switch (o) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s, v: a };
}
function zh(e, t, n) {
  e = he(e, 360) * 6, t = he(t, 100), n = he(n, 100);
  var o = Math.floor(e), r = e - o, i = n * (1 - t), a = n * (1 - r * t), l = n * (1 - (1 - r) * t), s = o % 6, u = [n, a, i, i, l, n][s], d = [l, n, n, a, i, i][s], c = [i, i, l, n, n, a][s];
  return { r: u * 255, g: d * 255, b: c * 255 };
}
function Hr(e, t, n, o) {
  var r = [
    Tt(Math.round(e).toString(16)),
    Tt(Math.round(t).toString(16)),
    Tt(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function Hh(e, t, n, o, r) {
  var i = [
    Tt(Math.round(e).toString(16)),
    Tt(Math.round(t).toString(16)),
    Tt(Math.round(n).toString(16)),
    Tt(jh(o))
  ];
  return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function jh(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function cl(e) {
  return Ce(e) / 255;
}
function Ce(e) {
  return parseInt(e, 16);
}
function Lh(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var jr = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Vt(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, i = null, a = !1, l = !1;
  return typeof e == "string" && (e = Wh(e)), typeof e == "object" && (Xe(e.r) && Xe(e.g) && Xe(e.b) ? (t = Nh(e.r, e.g, e.b), a = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Xe(e.h) && Xe(e.s) && Xe(e.v) ? (o = Un(e.s), r = Un(e.v), t = zh(e.h, o, r), a = !0, l = "hsv") : Xe(e.h) && Xe(e.s) && Xe(e.l) && (o = Un(e.s), i = Un(e.l), t = Bh(e.h, o, i), a = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Hc(n), {
    ok: a,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Fh = "[-\\+]?\\d+%?", Vh = "[-\\+]?\\d*\\.\\d+%?", it = "(?:".concat(Vh, ")|(?:").concat(Fh, ")"), ir = "[\\s|\\(]+(".concat(it, ")[,|\\s]+(").concat(it, ")[,|\\s]+(").concat(it, ")\\s*\\)?"), ar = "[\\s|\\(]+(".concat(it, ")[,|\\s]+(").concat(it, ")[,|\\s]+(").concat(it, ")[,|\\s]+(").concat(it, ")\\s*\\)?"), Re = {
  CSS_UNIT: new RegExp(it),
  rgb: new RegExp("rgb" + ir),
  rgba: new RegExp("rgba" + ar),
  hsl: new RegExp("hsl" + ir),
  hsla: new RegExp("hsla" + ar),
  hsv: new RegExp("hsv" + ir),
  hsva: new RegExp("hsva" + ar),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Wh(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (jr[e])
    e = jr[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Re.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Re.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Re.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Re.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Re.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Re.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Re.hex8.exec(e), n ? {
    r: Ce(n[1]),
    g: Ce(n[2]),
    b: Ce(n[3]),
    a: cl(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Re.hex6.exec(e), n ? {
    r: Ce(n[1]),
    g: Ce(n[2]),
    b: Ce(n[3]),
    format: t ? "name" : "hex"
  } : (n = Re.hex4.exec(e), n ? {
    r: Ce(n[1] + n[1]),
    g: Ce(n[2] + n[2]),
    b: Ce(n[3] + n[3]),
    a: cl(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Re.hex3.exec(e), n ? {
    r: Ce(n[1] + n[1]),
    g: Ce(n[2] + n[2]),
    b: Ce(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Xe(e) {
  return !!Re.CSS_UNIT.exec(String(e));
}
var ge = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Lh(t)), this.originalInput = t;
      var r = Vt(t);
      this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (o = n.format) !== null && o !== void 0 ? o : r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, o, r, i = t.r / 255, a = t.g / 255, l = t.b / 255;
      return i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? o = a / 12.92 : o = Math.pow((a + 0.055) / 1.055, 2.4), l <= 0.03928 ? r = l / 12.92 : r = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Hc(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = zr(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = zr(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = sl(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = sl(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Hr(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Hh(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), o = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(o, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(o, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(he(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(he(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Hr(this.r, this.g, this.b, !1), n = 0, o = Object.entries(jr); n < o.length; n++) {
        var r = o[n], i = r[0], a = r[1];
        if (t === a)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var o = !1, r = this.a < 1 && this.a >= 0, i = !n && r && (t.startsWith("hex") || t === "name");
      return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Xn(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Xn(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Xn(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Xn(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), i = n / 100, a = {
        r: (r.r - o.r) * i + o.r,
        g: (r.g - o.g) * i + o.g,
        b: (r.b - o.b) * i + o.b,
        a: (r.a - o.a) * i + o.a
      };
      return new e(a);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), r = 360 / n, i = [this];
      for (o.h = (o.h - (r * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + r) % 360, i.push(new e(o));
      return i;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, r = n.s, i = n.v, a = [], l = 1 / t; t--; )
        a.push(new e({ h: o, s: r, v: i })), i = (i + l) % 1;
      return a;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), o = new e(t).toRgb(), r = n.a + o.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + o.r * o.a * (1 - n.a)) / r,
        g: (n.g * n.a + o.g * o.a * (1 - n.a)) / r,
        b: (n.b * n.a + o.b * o.a * (1 - n.a)) / r,
        a: r
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), o = n.h, r = [this], i = 360 / t, a = 1; a < t; a++)
        r.push(new e({ h: (o + a * i) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), Gn = 2, ul = 0.16, kh = 0.05, Kh = 0.05, Xh = 0.15, jc = 5, Lc = 4, Uh = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function dl(e) {
  var t = e.r, n = e.g, o = e.b, r = zr(t, n, o);
  return {
    h: r.h * 360,
    s: r.s,
    v: r.v
  };
}
function Yn(e) {
  var t = e.r, n = e.g, o = e.b;
  return "#".concat(Hr(t, n, o, !1));
}
function Gh(e, t, n) {
  var o = n / 100, r = {
    r: (t.r - e.r) * o + e.r,
    g: (t.g - e.g) * o + e.g,
    b: (t.b - e.b) * o + e.b
  };
  return r;
}
function fl(e, t, n) {
  var o;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? o = n ? Math.round(e.h) - Gn * t : Math.round(e.h) + Gn * t : o = n ? Math.round(e.h) + Gn * t : Math.round(e.h) - Gn * t, o < 0 ? o += 360 : o >= 360 && (o -= 360), o;
}
function pl(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var o;
  return n ? o = e.s - ul * t : t === Lc ? o = e.s + ul : o = e.s + kh * t, o > 1 && (o = 1), n && t === jc && o > 0.1 && (o = 0.1), o < 0.06 && (o = 0.06), Number(o.toFixed(2));
}
function vl(e, t, n) {
  var o;
  return n ? o = e.v + Kh * t : o = e.v - Xh * t, o > 1 && (o = 1), Number(o.toFixed(2));
}
function In(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], o = Vt(e), r = jc; r > 0; r -= 1) {
    var i = dl(o), a = Yn(Vt({
      h: fl(i, r, !0),
      s: pl(i, r, !0),
      v: vl(i, r, !0)
    }));
    n.push(a);
  }
  n.push(Yn(o));
  for (var l = 1; l <= Lc; l += 1) {
    var s = dl(o), u = Yn(Vt({
      h: fl(s, l),
      s: pl(s, l),
      v: vl(s, l)
    }));
    n.push(u);
  }
  return t.theme === "dark" ? Uh.map(function(d) {
    var c = d.index, p = d.opacity, v = Yn(Gh(Vt(t.backgroundColor || "#141414"), Vt(n[c]), p * 100));
    return v;
  }) : n;
}
var lr = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, ao = {}, sr = {};
Object.keys(lr).forEach(function(e) {
  ao[e] = In(lr[e]), ao[e].primary = ao[e][5], sr[e] = In(lr[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), sr[e].primary = sr[e][5];
});
var Yh = ao.blue;
const qh = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Qh(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3)
    // 4
  };
}
const Fc = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, $i = m(m({}, Fc), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1
});
function Zh(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: o
  } = t;
  const {
    colorSuccess: r,
    colorWarning: i,
    colorError: a,
    colorInfo: l,
    colorPrimary: s,
    colorBgBase: u,
    colorTextBase: d
  } = e, c = n(s), p = n(r), v = n(i), g = n(a), y = n(l), h = o(u, d);
  return m(m({}, h), {
    colorPrimaryBg: c[1],
    colorPrimaryBgHover: c[2],
    colorPrimaryBorder: c[3],
    colorPrimaryBorderHover: c[4],
    colorPrimaryHover: c[5],
    colorPrimary: c[6],
    colorPrimaryActive: c[7],
    colorPrimaryTextHover: c[8],
    colorPrimaryText: c[9],
    colorPrimaryTextActive: c[10],
    colorSuccessBg: p[1],
    colorSuccessBgHover: p[2],
    colorSuccessBorder: p[3],
    colorSuccessBorderHover: p[4],
    colorSuccessHover: p[4],
    colorSuccess: p[6],
    colorSuccessActive: p[7],
    colorSuccessTextHover: p[8],
    colorSuccessText: p[9],
    colorSuccessTextActive: p[10],
    colorErrorBg: g[1],
    colorErrorBgHover: g[2],
    colorErrorBorder: g[3],
    colorErrorBorderHover: g[4],
    colorErrorHover: g[5],
    colorError: g[6],
    colorErrorActive: g[7],
    colorErrorTextHover: g[8],
    colorErrorText: g[9],
    colorErrorTextActive: g[10],
    colorWarningBg: v[1],
    colorWarningBgHover: v[2],
    colorWarningBorder: v[3],
    colorWarningBorderHover: v[4],
    colorWarningHover: v[4],
    colorWarning: v[6],
    colorWarningActive: v[7],
    colorWarningTextHover: v[8],
    colorWarningText: v[9],
    colorWarningTextActive: v[10],
    colorInfoBg: y[1],
    colorInfoBgHover: y[2],
    colorInfoBorder: y[3],
    colorInfoBorderHover: y[4],
    colorInfoHover: y[4],
    colorInfo: y[6],
    colorInfoActive: y[7],
    colorInfoTextHover: y[8],
    colorInfoText: y[9],
    colorInfoTextActive: y[10],
    colorBgMask: new ge("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Jh = (e) => {
  let t = e, n = e, o = e, r = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? o = 1 : e >= 6 && (o = 2), e > 4 && e < 8 ? r = 4 : e >= 8 && (r = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: o,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: r
  };
};
function e0(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: o,
    lineWidth: r
  } = e;
  return m({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: r + 1
  }, Jh(o));
}
const Ue = (e, t) => new ge(e).setAlpha(t).toRgbString(), un = (e, t) => new ge(e).darken(t).toHexString(), t0 = (e) => {
  const t = In(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, n0 = (e, t) => {
  const n = e || "#fff", o = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: o,
    colorText: Ue(o, 0.88),
    colorTextSecondary: Ue(o, 0.65),
    colorTextTertiary: Ue(o, 0.45),
    colorTextQuaternary: Ue(o, 0.25),
    colorFill: Ue(o, 0.15),
    colorFillSecondary: Ue(o, 0.06),
    colorFillTertiary: Ue(o, 0.04),
    colorFillQuaternary: Ue(o, 0.02),
    colorBgLayout: un(n, 4),
    colorBgContainer: un(n, 0),
    colorBgElevated: un(n, 0),
    colorBgSpotlight: Ue(o, 0.85),
    colorBorder: un(n, 15),
    colorBorderSecondary: un(n, 6)
  };
};
function o0(e) {
  const t = new Array(10).fill(null).map((n, o) => {
    const r = o - 1, i = e * Math.pow(2.71828, r / 5), a = o > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return t[1] = e, t.map((n) => {
    const o = n + 8;
    return {
      size: n,
      lineHeight: o / n
    };
  });
}
const r0 = (e) => {
  const t = o0(e), n = t.map((r) => r.size), o = t.map((r) => r.lineHeight);
  return {
    fontSizeSM: n[0],
    fontSize: n[1],
    fontSizeLG: n[2],
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: o[1],
    lineHeightLG: o[2],
    lineHeightSM: o[0],
    lineHeightHeading1: o[6],
    lineHeightHeading2: o[5],
    lineHeightHeading3: o[4],
    lineHeightHeading4: o[3],
    lineHeightHeading5: o[2]
  };
};
function i0(e) {
  const t = Object.keys(Fc).map((n) => {
    const o = In(e[n]);
    return new Array(10).fill(1).reduce((r, i, a) => (r[`${n}-${a + 1}`] = o[a], r), {});
  }).reduce((n, o) => (n = m(m({}, n), o), n), {});
  return m(m(m(m(m(m(m({}, e), t), Zh(e, {
    generateColorPalettes: t0,
    generateNeutralColorPalettes: n0
  })), r0(e.fontSize)), Qh(e)), qh(e)), e0(e));
}
function cr(e) {
  return e >= 0 && e <= 255;
}
function qn(e, t) {
  const {
    r: n,
    g: o,
    b: r,
    a: i
  } = new ge(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: l,
    b: s
  } = new ge(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const d = Math.round((n - a * (1 - u)) / u), c = Math.round((o - l * (1 - u)) / u), p = Math.round((r - s * (1 - u)) / u);
    if (cr(d) && cr(c) && cr(p))
      return new ge({
        r: d,
        g: c,
        b: p,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new ge({
    r: n,
    g: o,
    b: r,
    a: 1
  }).toRgbString();
}
var a0 = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function l0(e) {
  const {
    override: t
  } = e, n = a0(e, ["override"]), o = m({}, t);
  Object.keys($i).forEach((v) => {
    delete o[v];
  });
  const r = m(m({}, n), o), i = 480, a = 576, l = 768, s = 992, u = 1200, d = 1600, c = 2e3;
  return m(m(m({}, r), {
    colorLink: r.colorInfoText,
    colorLinkHover: r.colorInfoHover,
    colorLinkActive: r.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: r.colorFillSecondary,
    colorFillContentHover: r.colorFill,
    colorFillAlter: r.colorFillQuaternary,
    colorBgContainerDisabled: r.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: r.colorBgContainer,
    colorSplit: qn(r.colorBorderSecondary, r.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: r.colorTextQuaternary,
    colorTextDisabled: r.colorTextQuaternary,
    colorTextHeading: r.colorText,
    colorTextLabel: r.colorTextSecondary,
    colorTextDescription: r.colorTextTertiary,
    colorTextLightSolid: r.colorWhite,
    colorHighlight: r.colorError,
    colorBgTextHover: r.colorFillSecondary,
    colorBgTextActive: r.colorFill,
    colorIcon: r.colorTextTertiary,
    colorIconHover: r.colorText,
    colorErrorOutline: qn(r.colorErrorBg, r.colorBgContainer),
    colorWarningOutline: qn(r.colorWarningBg, r.colorBgContainer),
    // Font
    fontSizeIcon: r.fontSizeSM,
    // Control
    lineWidth: r.lineWidth,
    controlOutlineWidth: r.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: r.controlHeight / 2,
    controlItemBgHover: r.colorFillTertiary,
    controlItemBgActive: r.colorPrimaryBg,
    controlItemBgActiveHover: r.colorPrimaryBgHover,
    controlItemBgActiveDisabled: r.colorFill,
    controlTmpOutline: r.colorFillQuaternary,
    controlOutline: qn(r.colorPrimaryBg, r.colorBgContainer),
    lineType: r.lineType,
    borderRadius: r.borderRadius,
    borderRadiusXS: r.borderRadiusXS,
    borderRadiusSM: r.borderRadiusSM,
    borderRadiusLG: r.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: r.sizeXXS,
    paddingXS: r.sizeXS,
    paddingSM: r.sizeSM,
    padding: r.size,
    paddingMD: r.sizeMD,
    paddingLG: r.sizeLG,
    paddingXL: r.sizeXL,
    paddingContentHorizontalLG: r.sizeLG,
    paddingContentVerticalLG: r.sizeMS,
    paddingContentHorizontal: r.sizeMS,
    paddingContentVertical: r.sizeSM,
    paddingContentHorizontalSM: r.size,
    paddingContentVerticalSM: r.sizeXS,
    marginXXS: r.sizeXXS,
    marginXS: r.sizeXS,
    marginSM: r.sizeSM,
    margin: r.size,
    marginMD: r.sizeMD,
    marginLG: r.sizeLG,
    marginXL: r.sizeXL,
    marginXXL: r.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: a - 1,
    screenSM: a,
    screenSMMin: a,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: s - 1,
    screenLG: s,
    screenLGMin: s,
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: d - 1,
    screenXXL: d,
    screenXXLMin: d,
    screenXXLMax: c - 1,
    screenXXXL: c,
    screenXXXLMin: c,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new ge("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ge("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ge("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), o);
}
const Vc = (e, t, n, o, r) => {
  const i = e / 2, a = 0, l = i, s = n * 1 / Math.sqrt(2), u = i - n * (1 - 1 / Math.sqrt(2)), d = i - t * (1 / Math.sqrt(2)), c = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)), p = 2 * i - d, v = c, g = 2 * i - s, y = u, h = 2 * i - a, b = l, $ = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2), x = n * (Math.sqrt(2) - 1);
  return {
    pointerEvents: "none",
    width: e,
    height: e,
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      width: $,
      height: $,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${t}px 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: r,
      zIndex: 0,
      background: "transparent"
    },
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: e,
      height: e / 2,
      background: o,
      clipPath: {
        _multi_value_: !0,
        value: [`polygon(${x}px 100%, 50% ${x}px, ${2 * i - x}px 100%, ${x}px 100%)`, `path('M ${a} ${l} A ${n} ${n} 0 0 0 ${s} ${u} L ${d} ${c} A ${t} ${t} 0 0 1 ${p} ${v} L ${g} ${y} A ${n} ${n} 0 0 0 ${h} ${b} Z')`]
      },
      content: '""'
    }
  };
};
function s0(e, t) {
  return bo.reduce((n, o) => {
    const r = e[`${o}-1`], i = e[`${o}-3`], a = e[`${o}-6`], l = e[`${o}-7`];
    return m(m({}, n), t(o, {
      lightColor: r,
      lightBorderColor: i,
      darkColor: a,
      textColor: l
    }));
  }, {});
}
const c0 = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, ln = (e) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: e.fontFamily
}), u0 = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), ml = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), d0 = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), f0 = (e, t) => {
  const {
    fontFamily: n,
    fontSize: o
  } = e, r = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [r]: {
      fontFamily: n,
      fontSize: o,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [r]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
}, Wc = (e) => ({
  outline: `${e.lineWidthBold}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), wo = (e) => ({
  "&:focus-visible": m({}, Wc(e))
});
function Ke(e, t, n) {
  return (o) => {
    const r = w(() => o == null ? void 0 : o.value), [i, a, l] = Fo(), {
      getPrefixCls: s,
      iconPrefixCls: u
    } = Dg(), d = w(() => s()), c = w(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: ["Shared", d.value]
    }));
    ll(c, () => [{
      // Link
      "&": d0(a.value)
    }]);
    const p = w(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: [e, r.value, u.value]
    }));
    return [ll(p, () => {
      const {
        token: v,
        flush: g
      } = v0(a.value), y = typeof n == "function" ? n(v) : n, h = m(m({}, y), a.value[e]), b = `.${r.value}`, $ = Te(v, {
        componentCls: b,
        prefixCls: r.value,
        iconCls: `.${u.value}`,
        antCls: `.${d.value}`
      }, h), x = t($, {
        hashId: l.value,
        prefixCls: r.value,
        rootPrefixCls: d.value,
        iconPrefixCls: u.value,
        overrideComponentToken: a.value[e]
      });
      return g(e, h), [f0(a.value, r.value), x];
    }), l];
  };
}
const kc = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let Lr = !0;
function Te() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!kc)
    return m({}, ...t);
  Lr = !1;
  const o = {};
  return t.forEach((r) => {
    Object.keys(r).forEach((a) => {
      Object.defineProperty(o, a, {
        configurable: !0,
        enumerable: !0,
        get: () => r[a]
      });
    });
  }), Lr = !0, o;
}
function p0() {
}
function v0(e) {
  let t, n = e, o = p0;
  return kc && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(r, i) {
      return Lr && t.add(i), r[i];
    }
  }), o = (r, i) => {
    Array.from(t);
  }), {
    token: n,
    keys: t,
    flush: o
  };
}
const m0 = Ug(i0), g0 = {
  token: $i,
  hashed: !0
}, Kc = Symbol("DesignTokenContext"), Fr = j(), h0 = (e) => {
  se(Kc, e), Y(e, () => {
    Fr.value = xt(e), Uu(Fr);
  }, {
    immediate: !0,
    deep: !0
  });
};
D({
  props: {
    value: we()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return h0(w(() => e.value)), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
function Fo() {
  const e = R(Kc, w(() => Fr.value || g0)), t = w(() => `${Ah}-${e.value.hashed || ""}`), n = w(() => e.value.theme || m0), o = ih(n, w(() => [$i, e.value.token]), w(() => ({
    salt: t.value,
    override: m({
      override: e.value.token
    }, e.value.components),
    formatToken: l0
  })));
  return [n, w(() => o.value[0]), w(() => e.value.hashed ? o.value[1] : "")];
}
const Xc = D({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = Fo(), t = w(() => new ge(e.value.colorBgBase).toHsl().l < 0.5 ? {
      opacity: 0.65
    } : {});
    return () => f("svg", {
      style: t.value,
      width: "184",
      height: "152",
      viewBox: "0 0 184 152",
      xmlns: "http://www.w3.org/2000/svg"
    }, [f("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, [f("g", {
      transform: "translate(24 31.67)"
    }, [f("ellipse", {
      "fill-opacity": ".8",
      fill: "#F5F5F7",
      cx: "67.797",
      cy: "106.89",
      rx: "67.797",
      ry: "12.668"
    }, null), f("path", {
      d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      fill: "#AEB8C2"
    }, null), f("path", {
      d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      fill: "url(#linearGradient-1)",
      transform: "translate(13.56)"
    }, null), f("path", {
      d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      fill: "#F5F5F7"
    }, null), f("path", {
      d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      fill: "#DCE0E6"
    }, null)]), f("path", {
      d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      fill: "#DCE0E6"
    }, null), f("g", {
      transform: "translate(149.65 15.383)",
      fill: "#FFF"
    }, [f("ellipse", {
      cx: "20.654",
      cy: "3.167",
      rx: "2.849",
      ry: "2.815"
    }, null), f("path", {
      d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Xc.PRESENTED_IMAGE_DEFAULT = !0;
const Uc = D({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = Fo(), t = w(() => {
      const {
        colorFill: n,
        colorFillTertiary: o,
        colorFillQuaternary: r,
        colorBgContainer: i
      } = e.value;
      return {
        borderColor: new ge(n).onBackground(i).toHexString(),
        shadowColor: new ge(o).onBackground(i).toHexString(),
        contentColor: new ge(r).onBackground(i).toHexString()
      };
    });
    return () => f("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, [f("g", {
      transform: "translate(0 1)",
      fill: "none",
      "fill-rule": "evenodd"
    }, [f("ellipse", {
      fill: t.value.shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }, null), f("g", {
      "fill-rule": "nonzero",
      stroke: t.value.borderColor
    }, [f("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), f("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: t.value.contentColor
    }, null)])])]);
  }
});
Uc.PRESENTED_IMAGE_SIMPLE = !0;
const y0 = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: o,
    marginXL: r,
    fontSize: i,
    lineHeight: a
  } = e;
  return {
    [t]: {
      marginInline: o,
      fontSize: i,
      lineHeight: a,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: o,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          height: "100%",
          margin: "auto"
        }
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-footer`]: {
        marginTop: n
      },
      "&-normal": {
        marginBlock: r,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: o,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, b0 = Ke("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, o = Te(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [y0(o)];
});
var w0 = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Gc = f(Xc, null, null), Yc = f(Uc, null, null), S0 = () => ({
  prefixCls: String,
  imageStyle: we(),
  image: Er(),
  description: Er()
}), Ci = D({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: S0(),
  setup(e, t) {
    let {
      slots: n = {},
      attrs: o
    } = t;
    const {
      direction: r,
      prefixCls: i
    } = Pe("empty", e), [a, l] = b0(i);
    return () => {
      var s, u;
      const d = i.value, c = m(m({}, e), o), {
        image: p = ((s = n.image) === null || s === void 0 ? void 0 : s.call(n)) || Gc,
        description: v = ((u = n.description) === null || u === void 0 ? void 0 : u.call(n)) || void 0,
        imageStyle: g,
        class: y = ""
      } = c, h = w0(c, ["image", "description", "imageStyle", "class"]);
      return a(f(zg, {
        componentName: "Empty",
        children: (b) => {
          const $ = typeof v < "u" ? v : b.description, x = typeof $ == "string" ? $ : "empty";
          let _ = null;
          return typeof p == "string" ? _ = f("img", {
            alt: x,
            src: p
          }, null) : _ = p, f("div", H({
            class: ae(d, y, l.value, {
              [`${d}-normal`]: p === Yc,
              [`${d}-rtl`]: r.value === "rtl"
            })
          }, h), [f("div", {
            class: `${d}-image`,
            style: g
          }, [_]), $ && f("p", {
            class: `${d}-description`
          }, [$]), n.default && f("div", {
            class: `${d}-footer`
          }, [on(n.default())])]);
        }
      }, null));
    };
  }
});
Ci.PRESENTED_IMAGE_DEFAULT = Gc;
Ci.PRESENTED_IMAGE_SIMPLE = Yc;
const dn = Hn(Ci), $0 = (e) => {
  const {
    prefixCls: t
  } = Pe("empty", e);
  return ((o) => {
    switch (o) {
      case "Table":
      case "List":
        return f(dn, {
          image: dn.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return f(dn, {
          image: dn.PRESENTED_IMAGE_SIMPLE,
          class: `${t.value}-small`
        }, null);
      default:
        return f(dn, null, null);
    }
  })(e.componentName);
}, C0 = Symbol("SizeContextKey"), x0 = () => R(C0, F(void 0)), Pe = (e, t) => {
  const n = x0(), o = yi(), r = R(bc, m(m({}, wc), {
    renderEmpty: (S) => hr($0, {
      componentName: S
    })
  })), i = w(() => r.getPrefixCls(e, t.prefixCls)), a = w(() => {
    var S, P;
    return (S = t.direction) !== null && S !== void 0 ? S : (P = r.direction) === null || P === void 0 ? void 0 : P.value;
  }), l = w(() => {
    var S;
    return (S = t.iconPrefixCls) !== null && S !== void 0 ? S : r.iconPrefixCls.value;
  }), s = w(() => r.getPrefixCls()), u = w(() => {
    var S;
    return (S = r.autoInsertSpaceInButton) === null || S === void 0 ? void 0 : S.value;
  }), d = r.renderEmpty, c = r.space, p = r.pageHeader, v = r.form, g = w(() => {
    var S, P;
    return (S = t.getTargetContainer) !== null && S !== void 0 ? S : (P = r.getTargetContainer) === null || P === void 0 ? void 0 : P.value;
  }), y = w(() => {
    var S, P, E;
    return (P = (S = t.getContainer) !== null && S !== void 0 ? S : t.getPopupContainer) !== null && P !== void 0 ? P : (E = r.getPopupContainer) === null || E === void 0 ? void 0 : E.value;
  }), h = w(() => {
    var S, P;
    return (S = t.dropdownMatchSelectWidth) !== null && S !== void 0 ? S : (P = r.dropdownMatchSelectWidth) === null || P === void 0 ? void 0 : P.value;
  }), b = w(() => {
    var S;
    return (t.virtual === void 0 ? ((S = r.virtual) === null || S === void 0 ? void 0 : S.value) !== !1 : t.virtual !== !1) && h.value !== !1;
  }), $ = w(() => t.size || n.value), x = w(() => {
    var S, P, E;
    return (S = t.autocomplete) !== null && S !== void 0 ? S : (E = (P = r.input) === null || P === void 0 ? void 0 : P.value) === null || E === void 0 ? void 0 : E.autocomplete;
  }), _ = w(() => {
    var S;
    return (S = t.disabled) !== null && S !== void 0 ? S : o.value;
  }), C = w(() => {
    var S;
    return (S = t.csp) !== null && S !== void 0 ? S : r.csp;
  }), O = w(() => {
    var S, P;
    return (S = t.wave) !== null && S !== void 0 ? S : (P = r.wave) === null || P === void 0 ? void 0 : P.value;
  });
  return {
    configProvider: r,
    prefixCls: i,
    direction: a,
    size: $,
    getTargetContainer: g,
    getPopupContainer: y,
    space: c,
    pageHeader: p,
    form: v,
    autoInsertSpaceInButton: u,
    renderEmpty: d,
    virtual: b,
    dropdownMatchSelectWidth: h,
    rootPrefixCls: s,
    getPrefixCls: r.getPrefixCls,
    autocomplete: x,
    csp: C,
    iconPrefixCls: l,
    disabled: _,
    select: r.select,
    wave: O
  };
}, O0 = (e) => {
  const {
    componentCls: t,
    colorPrimary: n
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${n})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        }
      }
    }
  };
}, T0 = Ke("Wave", (e) => [O0(e)]);
function St(e) {
  const t = typeof e == "function" ? e() : e, n = F(t);
  function o(r) {
    n.value = r;
  }
  return [n, o];
}
function P0(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function ur(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && P0(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function _0(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: o
  } = getComputedStyle(e);
  return ur(t) ? t : ur(n) ? n : ur(o) ? o : null;
}
function dr(e) {
  return Number.isNaN(e) ? 0 : e;
}
const E0 = D({
  props: {
    target: we(),
    className: String
  },
  setup(e) {
    const t = j(null), [n, o] = St(null), [r, i] = St([]), [a, l] = St(0), [s, u] = St(0), [d, c] = St(0), [p, v] = St(0), [g, y] = St(!1);
    function h() {
      const {
        target: S
      } = e, P = getComputedStyle(S);
      o(_0(S));
      const E = P.position === "static", {
        borderLeftWidth: T,
        borderTopWidth: N
      } = P;
      l(E ? S.offsetLeft : dr(-parseFloat(T))), u(E ? S.offsetTop : dr(-parseFloat(N))), c(S.offsetWidth), v(S.offsetHeight);
      const {
        borderTopLeftRadius: K,
        borderTopRightRadius: U,
        borderBottomLeftRadius: q,
        borderBottomRightRadius: I
      } = P;
      i([K, U, I, q].map((B) => dr(parseFloat(B))));
    }
    let b, $, x;
    const _ = () => {
      clearTimeout(x), ye.cancel($), b == null || b.disconnect();
    }, C = () => {
      var S;
      const P = (S = t.value) === null || S === void 0 ? void 0 : S.parentElement;
      P && (us(null, P), P.parentElement && P.parentElement.removeChild(P));
    };
    ke(() => {
      _(), x = setTimeout(() => {
        C();
      }, 5e3);
      const {
        target: S
      } = e;
      S && ($ = ye(() => {
        h(), y(!0);
      }), typeof ResizeObserver < "u" && (b = new ResizeObserver(h), b.observe(S)));
    }), Me(() => {
      _();
    });
    const O = (S) => {
      S.propertyName === "opacity" && C();
    };
    return () => {
      if (!g.value)
        return null;
      const S = {
        left: `${a.value}px`,
        top: `${s.value}px`,
        width: `${d.value}px`,
        height: `${p.value}px`,
        borderRadius: r.value.map((P) => `${P}px`).join(" ")
      };
      return n && (S["--wave-color"] = n.value), f(gt, {
        appear: !0,
        name: "wave-motion",
        appearFromClass: "wave-motion-appear",
        appearActiveClass: "wave-motion-appear",
        appearToClass: "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [f("div", {
          ref: t,
          class: e.className,
          style: S,
          onTransitionend: O
        }, null)]
      });
    };
  }
});
function I0(e, t) {
  const n = document.createElement("div");
  n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e == null || e.insertBefore(n, e == null ? void 0 : e.firstChild), us(f(E0, {
    target: e,
    className: t
  }, null), n);
}
function M0(e, t, n) {
  function o() {
    var r;
    const i = rt(e);
    !((r = n == null ? void 0 : n.value) === null || r === void 0) && r.disabled || !i || I0(i, t.value);
  }
  return o;
}
const qc = D({
  compatConfig: {
    MODE: 3
  },
  name: "Wave",
  props: {
    disabled: Boolean
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = Rt(), {
      prefixCls: r,
      wave: i
    } = Pe("wave", e), [, a] = T0(r), l = M0(o, w(() => ae(r.value, a.value)), i);
    let s;
    const u = () => {
      rt(o).removeEventListener("click", s, !0);
    };
    return ke(() => {
      Y(() => e.disabled, () => {
        u(), Fe(() => {
          const d = rt(o);
          d == null || d.removeEventListener("click", s, !0), !(!d || d.nodeType !== 1 || e.disabled) && (s = (c) => {
            c.target.tagName === "INPUT" || !Ws(c.target) || // No need wave
            !d.getAttribute || d.getAttribute("disabled") || d.disabled || d.className.includes("disabled") || d.className.includes("-leave") || l();
          }, d.addEventListener("click", s, !0));
        });
      }, {
        immediate: !0,
        flush: "post"
      });
    }), Me(() => {
      u();
    }), () => {
      var d;
      return (d = n.default) === null || d === void 0 ? void 0 : d.call(n)[0];
    };
  }
}), Qc = () => ({
  prefixCls: String,
  type: String,
  htmlType: {
    type: String,
    default: "button"
  },
  shape: {
    type: String
  },
  size: {
    type: String
  },
  loading: {
    type: [Boolean, Object],
    default: () => !1
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  ghost: {
    type: Boolean,
    default: void 0
  },
  block: {
    type: Boolean,
    default: void 0
  },
  danger: {
    type: Boolean,
    default: void 0
  },
  icon: M.any,
  href: String,
  target: String,
  title: String,
  onClick: _r(),
  onMousedown: _r()
}), ft = (e, t, n) => {
  pi(e, `[ant-design-vue: ${t}] ${n}`);
};
var A0 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, D0 = Symbol("iconContext"), Zc = function() {
  return R(D0, {
    prefixCls: F("anticon"),
    rootClassName: F(""),
    csp: F()
  });
};
function xi() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function R0(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var gl = "data-vc-order", N0 = "vc-icon-key", Vr = /* @__PURE__ */ new Map();
function Jc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : N0;
}
function Oi(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function B0(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function eu(e) {
  return Array.from((Vr.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function tu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!xi())
    return null;
  var n = t.csp, o = t.prepend, r = document.createElement("style");
  r.setAttribute(gl, B0(o)), n && n.nonce && (r.nonce = n.nonce), r.innerHTML = e;
  var i = Oi(t), a = i.firstChild;
  if (o) {
    if (o === "queue") {
      var l = eu(i).filter(function(s) {
        return ["prepend", "prependQueue"].includes(s.getAttribute(gl));
      });
      if (l.length)
        return i.insertBefore(r, l[l.length - 1].nextSibling), r;
    }
    i.insertBefore(r, a);
  } else
    i.appendChild(r);
  return r;
}
function z0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Oi(t);
  return eu(n).find(function(o) {
    return o.getAttribute(Jc(t)) === e;
  });
}
function H0(e, t) {
  var n = Vr.get(e);
  if (!n || !R0(document, n)) {
    var o = tu("", t), r = o.parentNode;
    Vr.set(e, r), e.removeChild(o);
  }
}
function j0(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = Oi(n);
  H0(o, n);
  var r = z0(t, n);
  if (r)
    return n.csp && n.csp.nonce && r.nonce !== n.csp.nonce && (r.nonce = n.csp.nonce), r.innerHTML !== e && (r.innerHTML = e), r;
  var i = tu(e, n);
  return i.setAttribute(Jc(n), t), i;
}
function hl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      L0(e, r, n[r]);
    });
  }
  return e;
}
function L0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function F0(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function V0(e, t) {
  F0(e, "[@ant-design/icons-vue] ".concat(t));
}
function yl(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Wr(e, t, n) {
  return n ? hr(e.tag, hl({
    key: t
  }, n, e.attrs), (e.children || []).map(function(o, r) {
    return Wr(o, "".concat(t, "-").concat(e.tag, "-").concat(r));
  })) : hr(e.tag, hl({
    key: t
  }, e.attrs), (e.children || []).map(function(o, r) {
    return Wr(o, "".concat(t, "-").concat(e.tag, "-").concat(r));
  }));
}
function nu(e) {
  return In(e)[0];
}
function ou(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var W0 = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
function ru(e) {
  return e && e.getRootNode && e.getRootNode();
}
function k0(e) {
  return xi() ? ru(e) instanceof ShadowRoot : !1;
}
function K0(e) {
  return k0(e) ? ru(e) : null;
}
var X0 = function() {
  var t = Zc(), n = t.prefixCls, o = t.csp, r = Rt(), i = W0;
  n && (i = i.replace(/anticon/g, n.value)), Fe(function() {
    if (xi()) {
      var a = r.vnode.el, l = K0(a);
      j0(i, "@ant-design-vue-icons", {
        prepend: !0,
        csp: o.value,
        attachTo: l
      });
    }
  });
}, U0 = ["icon", "primaryColor", "secondaryColor"];
function G0(e, t) {
  if (e == null)
    return {};
  var n = Y0(e, t), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      o = i[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
function Y0(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function lo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      q0(e, r, n[r]);
    });
  }
  return e;
}
function q0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var yn = Io({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function Q0(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  yn.primaryColor = t, yn.secondaryColor = n || nu(t), yn.calculated = !!n;
}
function Z0() {
  return lo({}, yn);
}
var ht = function(t, n) {
  var o = lo({}, t, n.attrs), r = o.icon, i = o.primaryColor, a = o.secondaryColor, l = G0(o, U0), s = yn;
  if (i && (s = {
    primaryColor: i,
    secondaryColor: a || nu(i)
  }), V0(yl(r), "icon should be icon definiton, but got ".concat(r)), !yl(r))
    return null;
  var u = r;
  return u && typeof u.icon == "function" && (u = lo({}, u, {
    icon: u.icon(s.primaryColor, s.secondaryColor)
  })), Wr(u.icon, "svg-".concat(u.name), lo({}, l, {
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
ht.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
ht.inheritAttrs = !1;
ht.displayName = "IconBase";
ht.getTwoToneColors = Z0;
ht.setTwoToneColors = Q0;
function J0(e, t) {
  return oy(e) || ny(e, t) || ty(e, t) || ey();
}
function ey() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ty(e, t) {
  if (e) {
    if (typeof e == "string")
      return bl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return bl(e, t);
  }
}
function bl(e, t) {
  t > e.length && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++)
    o[n] = e[n];
  return o;
}
function ny(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o = [], r = !0, i = !1, a, l;
    try {
      for (n = n.call(e); !(r = (a = n.next()).done) && (o.push(a.value), !(t && o.length === t)); r = !0)
        ;
    } catch (s) {
      i = !0, l = s;
    } finally {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return o;
  }
}
function oy(e) {
  if (Array.isArray(e))
    return e;
}
function iu(e) {
  var t = ou(e), n = J0(t, 2), o = n[0], r = n[1];
  return ht.setTwoToneColors({
    primaryColor: o,
    secondaryColor: r
  });
}
function ry() {
  var e = ht.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var iy = D({
  name: "InsertStyles",
  setup: function() {
    return X0(), function() {
      return null;
    };
  }
}), ay = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function ly(e, t) {
  return dy(e) || uy(e, t) || cy(e, t) || sy();
}
function sy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cy(e, t) {
  if (e) {
    if (typeof e == "string")
      return wl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return wl(e, t);
  }
}
function wl(e, t) {
  t > e.length && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++)
    o[n] = e[n];
  return o;
}
function uy(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o = [], r = !0, i = !1, a, l;
    try {
      for (n = n.call(e); !(r = (a = n.next()).done) && (o.push(a.value), !(t && o.length === t)); r = !0)
        ;
    } catch (s) {
      i = !0, l = s;
    } finally {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return o;
  }
}
function dy(e) {
  if (Array.isArray(e))
    return e;
}
function Sl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      mn(e, r, n[r]);
    });
  }
  return e;
}
function mn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function fy(e, t) {
  if (e == null)
    return {};
  var n = py(e, t), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      o = i[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
function py(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
iu(Yh.primary);
var pe = function(t, n) {
  var o, r = Sl({}, t, n.attrs), i = r.class, a = r.icon, l = r.spin, s = r.rotate, u = r.tabindex, d = r.twoToneColor, c = r.onClick, p = fy(r, ay), v = Zc(), g = v.prefixCls, y = v.rootClassName, h = (o = {}, mn(o, y.value, !!y.value), mn(o, g.value, !0), mn(o, "".concat(g.value, "-").concat(a.name), !!a.name), mn(o, "".concat(g.value, "-spin"), !!l || a.name === "loading"), o), b = u;
  b === void 0 && c && (b = -1);
  var $ = s ? {
    msTransform: "rotate(".concat(s, "deg)"),
    transform: "rotate(".concat(s, "deg)")
  } : void 0, x = ou(d), _ = ly(x, 2), C = _[0], O = _[1];
  return f("span", Sl({
    role: "img",
    "aria-label": a.name
  }, p, {
    onClick: c,
    class: [h, i],
    tabindex: b
  }), [f(ht, {
    icon: a,
    primaryColor: C,
    secondaryColor: O,
    style: $
  }, null), f(iy, null, null)]);
};
pe.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
pe.displayName = "AntdIcon";
pe.inheritAttrs = !1;
pe.getTwoToneColor = ry;
pe.setTwoToneColor = iu;
function $l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      vy(e, r, n[r]);
    });
  }
  return e;
}
function vy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Mn = function(t, n) {
  var o = $l({}, t, n.attrs);
  return f(pe, $l({}, o, {
    icon: A0
  }), null);
};
Mn.displayName = "LoadingOutlined";
Mn.inheritAttrs = !1;
const Cl = (e) => {
  e && (e.style.width = "0px", e.style.opacity = "0", e.style.transform = "scale(0)");
}, xl = (e) => {
  Fe(() => {
    e && (e.style.width = `${e.scrollWidth}px`, e.style.opacity = "1", e.style.transform = "scale(1)");
  });
}, Ol = (e) => {
  e && e.style && (e.style.width = null, e.style.opacity = null, e.style.transform = null);
}, my = D({
  compatConfig: {
    MODE: 3
  },
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup(e) {
    return () => {
      const {
        existIcon: t,
        prefixCls: n,
        loading: o
      } = e;
      if (t)
        return f("span", {
          class: `${n}-loading-icon`
        }, [f(Mn, null, null)]);
      const r = !!o;
      return f(gt, {
        name: `${n}-loading-icon-motion`,
        onBeforeEnter: Cl,
        onEnter: xl,
        onAfterEnter: Ol,
        onBeforeLeave: xl,
        onLeave: (i) => {
          setTimeout(() => {
            Cl(i);
          });
        },
        onAfterLeave: Ol
      }, {
        default: () => [r ? f("span", {
          class: `${n}-loading-icon`
        }, [f(Mn, null, null)]) : null]
      });
    };
  }
}), Tl = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), gy = (e) => {
  const {
    componentCls: t,
    fontSize: n,
    lineWidth: o,
    colorPrimaryHover: r,
    colorErrorHover: i
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -o,
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: n
        }
      },
      // Border Color
      Tl(`${t}-primary`, r),
      Tl(`${t}-danger`, i)
    ]
  };
};
function hy(e, t, n) {
  const {
    focusElCls: o,
    focus: r,
    borderElCls: i
  } = n, a = i ? "> *" : "", l = ["hover", r ? "focus" : null, "active"].filter(Boolean).map((s) => `&:${s} ${a}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: -e.lineWidth
    },
    "&-item": m(m({
      [l]: {
        zIndex: 2
      }
    }, o ? {
      [`&${o}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${a}`]: {
        zIndex: 0
      }
    })
  };
}
function yy(e, t, n) {
  const {
    borderElCls: o
  } = n, r = o ? `> ${o}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${r}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${r}, &${e}-sm ${r}, &${e}-lg ${r}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${r}, &${e}-sm ${r}, &${e}-lg ${r}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function by(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, o = `${n}-compact`;
  return {
    [o]: m(m({}, hy(e, o, t)), yy(n, o, t))
  };
}
function wy(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: -e.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function Sy(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function $y(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: m(m({}, wy(e, t)), Sy(e.componentCls, t))
  };
}
const Cy = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: 400,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${e.lineWidth}px ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: e.lineHeight,
      color: e.colorText,
      "> span": {
        display: "inline-block"
      },
      // Leave a space between icon and text.
      [`> ${n} + span, > span + ${n}`]: {
        marginInlineStart: e.marginXS
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": m({}, wo(e)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${t}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -e.lineWidth,
            insetInlineStart: -e.lineWidth,
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${e.lineWidth * 2}px)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -e.lineWidth,
              insetInlineStart: -e.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${e.lineWidth * 2}px)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, Je = (e, t) => ({
  "&:not(:disabled)": {
    "&:hover": e,
    "&:active": t
  }
}), xy = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Oy = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), kr = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), So = (e, t, n, o, r, i, a) => ({
  [`&${e}-background-ghost`]: m(m({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: n || void 0,
    boxShadow: "none"
  }, Je(m({
    backgroundColor: "transparent"
  }, i), m({
    backgroundColor: "transparent"
  }, a))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: r || void 0
    }
  })
}), Ti = (e) => ({
  "&:disabled": m({}, kr(e))
}), au = (e) => m({}, Ti(e)), $o = (e) => ({
  "&:disabled": {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), lu = (e) => m(m(m(m(m({}, au(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), Je({
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), So(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: m(m(m({
    color: e.colorError,
    borderColor: e.colorError
  }, Je({
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), So(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), Ti(e))
}), Ty = (e) => m(m(m(m(m({}, au(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), Je({
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), So(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: m(m(m({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, Je({
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), So(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), Ti(e))
}), Py = (e) => m(m({}, lu(e)), {
  borderStyle: "dashed"
}), _y = (e) => m(m(m({
  color: e.colorLink
}, Je({
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), $o(e)), {
  [`&${e.componentCls}-dangerous`]: m(m({
    color: e.colorError
  }, Je({
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), $o(e))
}), Ey = (e) => m(m(m({}, Je({
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), $o(e)), {
  [`&${e.componentCls}-dangerous`]: m(m({
    color: e.colorError
  }, $o(e)), Je({
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), Iy = (e) => m(m({}, kr(e)), {
  [`&${e.componentCls}:hover`]: m({}, kr(e))
}), My = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: lu(e),
    [`${t}-primary`]: Ty(e),
    [`${t}-dashed`]: Py(e),
    [`${t}-link`]: _y(e),
    [`${t}-text`]: Ey(e),
    [`${t}-disabled`]: Iy(e)
  };
}, Pi = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: n,
    iconCls: o,
    controlHeight: r,
    fontSize: i,
    lineHeight: a,
    lineWidth: l,
    borderRadius: s,
    buttonPaddingHorizontal: u
  } = e, d = Math.max(0, (r - i * a) / 2 - l), c = u - l, p = `${n}-icon-only`;
  return [
    // Size
    {
      [`${n}${t}`]: {
        fontSize: i,
        height: r,
        padding: `${d}px ${c}px`,
        borderRadius: s,
        [`&${p}`]: {
          width: r,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${n}-round`]: {
            width: "auto"
          },
          "> span": {
            transform: "scale(1.143)"
            // 14px -> 16px
          }
        },
        // Loading
        [`&${n}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${n}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        },
        [`&:not(${p}) ${n}-loading-icon > ${o}`]: {
          marginInlineEnd: e.marginXS
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: xy(e)
    },
    {
      [`${n}${n}-round${t}`]: Oy(e)
    }
  ];
}, Ay = (e) => Pi(e), Dy = (e) => {
  const t = Te(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM
  });
  return Pi(t, `${e.componentCls}-sm`);
}, Ry = (e) => {
  const t = Te(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG
  });
  return Pi(t, `${e.componentCls}-lg`);
}, Ny = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, By = Ke("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: n
  } = e, o = Te(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: n
  });
  return [
    // Shared
    Cy(o),
    // Size
    Dy(o),
    Ay(o),
    Ry(o),
    // Block
    Ny(o),
    // Group (type, ghost, danger, disabled, loading)
    My(o),
    // Button Group
    gy(o),
    // Space Compact
    by(e, {
      focus: !1
    }),
    $y(e)
  ];
});
function _i(e) {
  const t = Symbol("contextKey");
  return {
    useProvide: (r, i) => {
      const a = Io({});
      return se(t, a), lt(() => {
        m(a, r, i || {});
      }), a;
    },
    useInject: () => R(t, e) || {}
  };
}
const zy = () => ({
  prefixCls: String,
  size: {
    type: String
  }
}), su = _i(), Kr = D({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: zy(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      prefixCls: o,
      direction: r
    } = Pe("btn-group", e), [, , i] = Fo();
    su.useProvide(Io({
      size: w(() => e.size)
    }));
    const a = w(() => {
      const {
        size: l
      } = e;
      let s = "";
      switch (l) {
        case "large":
          s = "lg";
          break;
        case "small":
          s = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          ft(!l, "Button.Group", "Invalid prop `size`.");
      }
      return {
        [`${o.value}`]: !0,
        [`${o.value}-${s}`]: s,
        [`${o.value}-rtl`]: r.value === "rtl",
        [i.value]: !0
      };
    });
    return () => {
      var l;
      return f("div", {
        class: a.value
      }, [xe((l = n.default) === null || l === void 0 ? void 0 : l.call(n))]);
    };
  }
}), Hy = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
}, jy = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${t}-space-item`]: {
        "&:empty": {
          display: "none"
        }
      }
    }
  };
}, Ly = Ke("Space", (e) => [jy(e), Hy(e)]);
function Fy() {
}
function Vy(e, t, n, o) {
  for (var r = e.length, i = n + -1; ++i < r; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
function Wy(e) {
  return e !== e;
}
function ky(e, t, n) {
  for (var o = n - 1, r = e.length; ++o < r; )
    if (e[o] === t)
      return o;
  return -1;
}
function Ky(e, t, n) {
  return t === t ? ky(e, t, n) : Vy(e, Wy, n);
}
function Xy(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Ky(e, t, 0) > -1;
}
var Uy = "[object Map]", Gy = "[object Set]", Yy = Object.prototype, qy = Yy.hasOwnProperty;
function cu(e) {
  if (e == null)
    return !0;
  if (uc(e) && (On(e) || typeof e == "string" || typeof e.splice == "function" || mo(e) || mi(e) || rc(e)))
    return !e.length;
  var t = Ge(e);
  if (t == Uy || t == Gy)
    return !e.size;
  if (sc(e))
    return !cc(e).length;
  for (var n in e)
    if (qy.call(e, n))
      return !1;
  return !0;
}
var Qy = 1 / 0, Zy = Kt && 1 / vi(new Kt([, -0]))[1] == Qy ? function(e) {
  return new Kt(e);
} : Fy, Jy = 200;
function eb(e, t, n) {
  var o = -1, r = Xy, i = e.length, a = !0, l = [], s = l;
  if (i >= Jy) {
    var u = Zy(e);
    if (u)
      return vi(u);
    a = !1, r = tc, s = new xn();
  } else
    s = l;
  e:
    for (; ++o < i; ) {
      var d = e[o], c = d;
      if (d = d !== 0 ? d : 0, a && c === c) {
        for (var p = s.length; p--; )
          if (s[p] === c)
            continue e;
        l.push(d);
      } else
        r(s, c, n) || (s !== l && s.push(c), l.push(d));
    }
  return l;
}
function fr(e) {
  return e && e.length ? eb(e) : [];
}
const tb = () => ({
  compactSize: String,
  compactDirection: M.oneOf(Zt("horizontal", "vertical")).def("horizontal"),
  isFirstItem: be(),
  isLastItem: be()
}), Vo = _i(null), nb = (e, t) => {
  const n = Vo.useInject(), o = w(() => {
    if (!n || cu(n))
      return "";
    const {
      compactDirection: r,
      isFirstItem: i,
      isLastItem: a
    } = n, l = r === "vertical" ? "-vertical-" : "-";
    return ae({
      [`${e.value}-compact${l}item`]: !0,
      [`${e.value}-compact${l}first-item`]: i,
      [`${e.value}-compact${l}last-item`]: a,
      [`${e.value}-compact${l}item-rtl`]: t.value === "rtl"
    });
  });
  return {
    compactSize: w(() => n == null ? void 0 : n.compactSize),
    compactDirection: w(() => n == null ? void 0 : n.compactDirection),
    compactItemClassnames: o
  };
};
D({
  name: "NoCompactStyle",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Vo.useProvide(null), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
const ob = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: M.oneOf(Zt("horizontal", "vertical")).def("horizontal"),
  align: M.oneOf(Zt("start", "end", "center", "baseline")),
  block: {
    type: Boolean,
    default: void 0
  }
}), rb = D({
  name: "CompactItem",
  props: tb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Vo.useProvide(e), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
D({
  name: "ASpaceCompact",
  inheritAttrs: !1,
  props: ob(),
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const {
      prefixCls: r,
      direction: i
    } = Pe("space-compact", e), a = Vo.useInject(), [l, s] = Ly(r), u = w(() => ae(r.value, s.value, {
      [`${r.value}-rtl`]: i.value === "rtl",
      [`${r.value}-block`]: e.block,
      [`${r.value}-vertical`]: e.direction === "vertical"
    }));
    return () => {
      var d;
      const c = xe(((d = o.default) === null || d === void 0 ? void 0 : d.call(o)) || []);
      return c.length === 0 ? null : l(f("div", H(H({}, n), {}, {
        class: [u.value, n.class]
      }), [c.map((p, v) => {
        var g;
        const y = p && p.key || `${r.value}-item-${v}`, h = !a || cu(a);
        return f(rb, {
          key: y,
          compactSize: (g = e.size) !== null && g !== void 0 ? g : "middle",
          compactDirection: e.direction,
          isFirstItem: v === 0 && (h || (a == null ? void 0 : a.isFirstItem)),
          isLastItem: v === c.length - 1 && (h || (a == null ? void 0 : a.isLastItem))
        }, {
          default: () => [p]
        });
      })]));
    };
  }
});
const Pl = /^[\u4e00-\u9fa5]{2}$/, _l = Pl.test.bind(Pl);
function Qn(e) {
  return e === "text" || e === "link";
}
const ct = D({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: Nn(Qc(), {
    type: "default"
  }),
  slots: Object,
  // emits: ['click', 'mousedown'],
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      emit: r,
      expose: i
    } = t;
    const {
      prefixCls: a,
      autoInsertSpaceInButton: l,
      direction: s,
      size: u
    } = Pe("btn", e), [d, c] = By(a), p = su.useInject(), v = yi(), g = w(() => {
      var I;
      return (I = e.disabled) !== null && I !== void 0 ? I : v.value;
    }), y = j(null), h = j(void 0);
    let b = !1;
    const $ = j(!1), x = j(!1), _ = w(() => l.value !== !1), {
      compactSize: C,
      compactItemClassnames: O
    } = nb(a, s), S = w(() => typeof e.loading == "object" && e.loading.delay ? e.loading.delay || !0 : !!e.loading);
    Y(S, (I) => {
      clearTimeout(h.value), typeof S.value == "number" ? h.value = setTimeout(() => {
        $.value = I;
      }, S.value) : $.value = I;
    }, {
      immediate: !0
    });
    const P = w(() => {
      const {
        type: I,
        shape: B = "default",
        ghost: V,
        block: W,
        danger: Z
      } = e, ne = a.value, z = {
        large: "lg",
        small: "sm",
        middle: void 0
      }, Q = C.value || (p == null ? void 0 : p.size) || u.value, oe = Q && z[Q] || "";
      return [O.value, {
        [c.value]: !0,
        [`${ne}`]: !0,
        [`${ne}-${B}`]: B !== "default" && B,
        [`${ne}-${I}`]: I,
        [`${ne}-${oe}`]: oe,
        [`${ne}-loading`]: $.value,
        [`${ne}-background-ghost`]: V && !Qn(I),
        [`${ne}-two-chinese-chars`]: x.value && _.value,
        [`${ne}-block`]: W,
        [`${ne}-dangerous`]: !!Z,
        [`${ne}-rtl`]: s.value === "rtl"
      }];
    }), E = () => {
      const I = y.value;
      if (!I || l.value === !1)
        return;
      const B = I.textContent;
      b && _l(B) ? x.value || (x.value = !0) : x.value && (x.value = !1);
    }, T = (I) => {
      if ($.value || g.value) {
        I.preventDefault();
        return;
      }
      r("click", I);
    }, N = (I) => {
      r("mousedown", I);
    }, K = (I, B) => {
      const V = B ? " " : "";
      if (I.type === ls) {
        let W = I.children.trim();
        return _l(W) && (W = W.split("").join(V)), f("span", null, [W]);
      }
      return I;
    };
    return lt(() => {
      ft(!(e.ghost && Qn(e.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    }), ke(E), Dn(E), Me(() => {
      h.value && clearTimeout(h.value);
    }), i({
      focus: () => {
        var I;
        (I = y.value) === null || I === void 0 || I.focus();
      },
      blur: () => {
        var I;
        (I = y.value) === null || I === void 0 || I.blur();
      }
    }), () => {
      var I, B;
      const {
        icon: V = (I = n.icon) === null || I === void 0 ? void 0 : I.call(n)
      } = e, W = xe((B = n.default) === null || B === void 0 ? void 0 : B.call(n));
      b = W.length === 1 && !V && !Qn(e.type);
      const {
        type: Z,
        htmlType: ne,
        href: z,
        title: Q,
        target: oe
      } = e, ve = $.value ? "loading" : V, ue = m(m({}, o), {
        title: Q,
        disabled: g.value,
        class: [P.value, o.class, {
          [`${a.value}-icon-only`]: W.length === 0 && !!ve
        }],
        onClick: T,
        onMousedown: N
      });
      g.value || delete ue.disabled;
      const A = V && !$.value ? V : f(my, {
        existIcon: !!V,
        prefixCls: a.value,
        loading: !!$.value
      }, null), X = W.map((J) => K(J, b && _.value));
      if (z !== void 0)
        return d(f("a", H(H({}, ue), {}, {
          href: z,
          target: oe,
          ref: y
        }), [A, X]));
      let G = f("button", H(H({}, ue), {}, {
        ref: y,
        type: ne
      }), [A, X]);
      if (!Qn(Z)) {
        const J = /* @__PURE__ */ function() {
          return G;
        }();
        G = f(qc, {
          ref: "wave",
          disabled: !!$.value
        }, {
          default: () => [J]
        });
      }
      return d(G);
    };
  }
});
ct.Group = Kr;
ct.install = function(e) {
  return e.component(ct.name, ct), e.component(Kr.name, Kr), e;
};
const uu = () => ({
  arrow: fc([Boolean, Object]),
  trigger: {
    type: [Array, String]
  },
  menu: we(),
  overlay: M.any,
  /** @deprecated Please use `open` instead */
  visible: be(),
  open: be(),
  disabled: be(),
  danger: be(),
  autofocus: be(),
  align: we(),
  getPopupContainer: Function,
  prefixCls: String,
  transitionName: String,
  placement: String,
  overlayClassName: String,
  overlayStyle: we(),
  forceRender: be(),
  mouseEnterDelay: Number,
  mouseLeaveDelay: Number,
  openClassName: String,
  minOverlayWidthMatchTrigger: be(),
  destroyPopupOnHide: be(),
  /** @deprecated Please use `onOpenChange` instead */
  onVisibleChange: {
    type: Function
  },
  /** @deprecated Please use `onUpdate:open` instead */
  "onUpdate:visible": {
    type: Function
  },
  onOpenChange: {
    type: Function
  },
  "onUpdate:open": {
    type: Function
  }
}), pr = Qc(), ib = () => m(m({}, uu()), {
  type: pr.type,
  size: String,
  htmlType: pr.htmlType,
  href: String,
  disabled: be(),
  prefixCls: String,
  icon: M.any,
  title: String,
  loading: pr.loading,
  onClick: _r()
});
var ab = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" };
function El(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      lb(e, r, n[r]);
    });
  }
  return e;
}
function lb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Wo = function(t, n) {
  var o = El({}, t, n.attrs);
  return f(pe, El({}, o, {
    icon: ab
  }), null);
};
Wo.displayName = "EllipsisOutlined";
Wo.inheritAttrs = !1;
function Zn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return e.map((n) => `${t}${n}`).join(",");
}
const du = 8;
function fu(e) {
  const t = du, {
    sizePopupArrow: n,
    contentRadius: o,
    borderRadiusOuter: r,
    limitVerticalRadius: i
  } = e, a = n / 2 - Math.ceil(r * (Math.sqrt(2) - 1)), l = (o > 12 ? o + 2 : 12) - a, s = i ? t - a : l;
  return {
    dropdownArrowOffset: l,
    dropdownArrowOffsetVertical: s
  };
}
function sb(e, t) {
  const {
    componentCls: n,
    sizePopupArrow: o,
    marginXXS: r,
    borderRadiusXS: i,
    borderRadiusOuter: a,
    boxShadowPopoverArrow: l
  } = e, {
    colorBg: s,
    showArrowCls: u,
    contentRadius: d = e.borderRadiusLG,
    limitVerticalRadius: c
  } = t, {
    dropdownArrowOffsetVertical: p,
    dropdownArrowOffset: v
  } = fu({
    sizePopupArrow: o,
    contentRadius: d,
    borderRadiusOuter: a,
    limitVerticalRadius: c
  }), g = o / 2 + r;
  return {
    [n]: {
      // ============================ Basic ============================
      [`${n}-arrow`]: [m(m({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, Vc(o, i, a, s, l)), {
        "&:before": {
          background: s
        }
      })],
      // ========================== Placement ==========================
      // Here handle the arrow position and rotate stuff
      // >>>>> Top
      [[`&-placement-top ${n}-arrow`, `&-placement-topLeft ${n}-arrow`, `&-placement-topRight ${n}-arrow`].join(",")]: {
        bottom: 0,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: v
        }
      },
      [`&-placement-topRight ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: v
        }
      },
      // >>>>> Bottom
      [[`&-placement-bottom ${n}-arrow`, `&-placement-bottomLeft ${n}-arrow`, `&-placement-bottomRight ${n}-arrow`].join(",")]: {
        top: 0,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      [`&-placement-bottomLeft ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: v
        }
      },
      [`&-placement-bottomRight ${n}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: v
        }
      },
      // >>>>> Left
      [[`&-placement-left ${n}-arrow`, `&-placement-leftTop ${n}-arrow`, `&-placement-leftBottom ${n}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: 0
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop ${n}-arrow`]: {
        top: p
      },
      [`&-placement-leftBottom ${n}-arrow`]: {
        bottom: p
      },
      // >>>>> Right
      [[`&-placement-right ${n}-arrow`, `&-placement-rightTop ${n}-arrow`, `&-placement-rightBottom ${n}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: 0
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop ${n}-arrow`]: {
        top: p
      },
      [`&-placement-rightBottom ${n}-arrow`]: {
        bottom: p
      },
      // =========================== Offset ============================
      // Offset the popover to account for the dropdown arrow
      // >>>>> Top
      [Zn(["&-placement-topLeft", "&-placement-top", "&-placement-topRight"], u)]: {
        paddingBottom: g
      },
      // >>>>> Bottom
      [Zn(["&-placement-bottomLeft", "&-placement-bottom", "&-placement-bottomRight"], u)]: {
        paddingTop: g
      },
      // >>>>> Left
      [Zn(["&-placement-leftTop", "&-placement-left", "&-placement-leftBottom"], u)]: {
        paddingRight: {
          _skip_check_: !0,
          value: g
        }
      },
      // >>>>> Right
      [Zn(["&-placement-rightTop", "&-placement-right", "&-placement-rightBottom"], u)]: {
        paddingLeft: {
          _skip_check_: !0,
          value: g
        }
      }
    }
  };
}
const cb = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), ub = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Ei = function(e, t, n, o) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: m(m({}, cb(o)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: m(m({}, ub(o)), {
      animationPlayState: "paused"
    }),
    [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${i}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, db = new te("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), fb = new te("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), pb = new te("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), vb = new te("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), mb = new te("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), gb = new te("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), hb = new te("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), yb = new te("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), bb = {
  "move-up": {
    inKeyframes: hb,
    outKeyframes: yb
  },
  "move-down": {
    inKeyframes: db,
    outKeyframes: fb
  },
  "move-left": {
    inKeyframes: pb,
    outKeyframes: vb
  },
  "move-right": {
    inKeyframes: mb,
    outKeyframes: gb
  }
}, Il = (e, t) => {
  const {
    antCls: n
  } = e, o = `${n}-${t}`, {
    inKeyframes: r,
    outKeyframes: i
  } = bb[t];
  return [Ei(o, r, i, e.motionDurationMid), {
    [`
        ${o}-enter,
        ${o}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc
    },
    [`${o}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, pu = new te("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), vu = new te("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), mu = new te("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), gu = new te("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), wb = new te("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), Sb = new te("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), $b = new te("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), Cb = new te("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), xb = {
  "slide-up": {
    inKeyframes: pu,
    outKeyframes: vu
  },
  "slide-down": {
    inKeyframes: mu,
    outKeyframes: gu
  },
  "slide-left": {
    inKeyframes: wb,
    outKeyframes: Sb
  },
  "slide-right": {
    inKeyframes: $b,
    outKeyframes: Cb
  }
}, Co = (e, t) => {
  const {
    antCls: n
  } = e, o = `${n}-${t}`, {
    inKeyframes: r,
    outKeyframes: i
  } = xb[t];
  return [Ei(o, r, i, e.motionDurationMid), {
    [`
      ${o}-enter,
      ${o}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint
    },
    [`${o}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
}, Ob = new te("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Tb = new te("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Ml = new te("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Al = new te("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), Pb = new te("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), _b = new te("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), Eb = new te("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), Ib = new te("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), Mb = new te("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), Ab = new te("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), Db = new te("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), Rb = new te("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Nb = {
  zoom: {
    inKeyframes: Ob,
    outKeyframes: Tb
  },
  "zoom-big": {
    inKeyframes: Ml,
    outKeyframes: Al
  },
  "zoom-big-fast": {
    inKeyframes: Ml,
    outKeyframes: Al
  },
  "zoom-left": {
    inKeyframes: Eb,
    outKeyframes: Ib
  },
  "zoom-right": {
    inKeyframes: Mb,
    outKeyframes: Ab
  },
  "zoom-up": {
    inKeyframes: Pb,
    outKeyframes: _b
  },
  "zoom-down": {
    inKeyframes: Db,
    outKeyframes: Rb
  }
}, Ii = (e, t) => {
  const {
    antCls: n
  } = e, o = `${n}-${t}`, {
    inKeyframes: r,
    outKeyframes: i
  } = Nb[t];
  return [Ei(o, r, i, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
    [`
        ${o}-enter,
        ${o}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${o}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, Bb = (e) => ({
  [e.componentCls]: {
    // For common/openAnimation
    [`${e.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
      }
    },
    [`${e.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
    }
  }
}), zb = (e) => {
  const {
    componentCls: t,
    antCls: n,
    paddingXS: o,
    opacityLoading: r
  } = e;
  return {
    [`${t}-button`]: {
      whiteSpace: "nowrap",
      [`&${n}-btn-group > ${n}-btn`]: {
        [`&-loading, &-loading + ${n}-btn`]: {
          cursor: "default",
          pointerEvents: "none",
          opacity: r
        },
        [`&:last-child:not(:first-child):not(${n}-btn-icon-only)`]: {
          paddingInline: o
        }
      }
    }
  };
}, Hb = (e) => {
  const {
    componentCls: t,
    menuCls: n,
    colorError: o,
    colorTextLightSolid: r
  } = e, i = `${n}-item`;
  return {
    [`${t}, ${t}-menu-submenu`]: {
      [`${n} ${i}`]: {
        [`&${i}-danger:not(${i}-disabled)`]: {
          color: o,
          "&:hover": {
            color: r,
            backgroundColor: o
          }
        }
      }
    }
  };
}, jb = (e) => {
  const {
    componentCls: t,
    menuCls: n,
    zIndexPopup: o,
    dropdownArrowDistance: r,
    dropdownArrowOffset: i,
    sizePopupArrow: a,
    antCls: l,
    iconCls: s,
    motionDurationMid: u,
    dropdownPaddingVertical: d,
    fontSize: c,
    dropdownEdgeChildPadding: p,
    colorTextDisabled: v,
    fontSizeIcon: g,
    controlPaddingHorizontal: y,
    colorBgElevated: h,
    boxShadowPopoverArrow: b
  } = e;
  return [
    {
      [t]: m(m({}, ln(e)), {
        position: "absolute",
        top: -9999,
        left: {
          _skip_check_: !0,
          value: -9999
        },
        zIndex: o,
        display: "block",
        // A placeholder out of dropdown visible range to avoid close when user moving
        "&::before": {
          position: "absolute",
          insetBlock: -r + a / 2,
          // insetInlineStart: -7, // FIXME: Seems not work for hidden element
          zIndex: -9999,
          opacity: 1e-4,
          content: '""'
        },
        [`${t}-wrap`]: {
          position: "relative",
          [`${l}-btn > ${s}-down`]: {
            fontSize: g
          },
          [`${s}-down::before`]: {
            transition: `transform ${u}`
          }
        },
        [`${t}-wrap-open`]: {
          [`${s}-down::before`]: {
            transform: "rotate(180deg)"
          }
        },
        "\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ": {
          display: "none"
        },
        // =============================================================
        // ==                          Arrow                          ==
        // =============================================================
        // Offset the popover to account for the dropdown arrow
        [`
        &-show-arrow${t}-placement-topLeft,
        &-show-arrow${t}-placement-top,
        &-show-arrow${t}-placement-topRight
      `]: {
          paddingBottom: r
        },
        [`
        &-show-arrow${t}-placement-bottomLeft,
        &-show-arrow${t}-placement-bottom,
        &-show-arrow${t}-placement-bottomRight
      `]: {
          paddingTop: r
        },
        // Note: .popover-arrow is outer, .popover-arrow:after is inner
        [`${t}-arrow`]: m({
          position: "absolute",
          zIndex: 1,
          display: "block"
        }, Vc(a, e.borderRadiusXS, e.borderRadiusOuter, h, b)),
        [`
        &-placement-top > ${t}-arrow,
        &-placement-topLeft > ${t}-arrow,
        &-placement-topRight > ${t}-arrow
      `]: {
          bottom: r,
          transform: "translateY(100%) rotate(180deg)"
        },
        [`&-placement-top > ${t}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: "50%"
          },
          transform: "translateX(-50%) translateY(100%) rotate(180deg)"
        },
        [`&-placement-topLeft > ${t}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        },
        [`&-placement-topRight > ${t}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        },
        [`
          &-placement-bottom > ${t}-arrow,
          &-placement-bottomLeft > ${t}-arrow,
          &-placement-bottomRight > ${t}-arrow
        `]: {
          top: r,
          transform: "translateY(-100%)"
        },
        [`&-placement-bottom > ${t}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: "50%"
          },
          transform: "translateY(-100%) translateX(-50%)"
        },
        [`&-placement-bottomLeft > ${t}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        },
        [`&-placement-bottomRight > ${t}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        },
        // =============================================================
        // ==                         Motion                          ==
        // =============================================================
        // When position is not enough for dropdown, the placement will revert.
        // We will handle this with revert motion name.
        [`&${l}-slide-down-enter${l}-slide-down-enter-active${t}-placement-bottomLeft,
          &${l}-slide-down-appear${l}-slide-down-appear-active${t}-placement-bottomLeft,
          &${l}-slide-down-enter${l}-slide-down-enter-active${t}-placement-bottom,
          &${l}-slide-down-appear${l}-slide-down-appear-active${t}-placement-bottom,
          &${l}-slide-down-enter${l}-slide-down-enter-active${t}-placement-bottomRight,
          &${l}-slide-down-appear${l}-slide-down-appear-active${t}-placement-bottomRight`]: {
          animationName: pu
        },
        [`&${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-topLeft,
          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-topLeft,
          &${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-top,
          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-top,
          &${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-topRight,
          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-topRight`]: {
          animationName: mu
        },
        [`&${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottomLeft,
          &${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottom,
          &${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottomRight`]: {
          animationName: vu
        },
        [`&${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-topLeft,
          &${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-top,
          &${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-topRight`]: {
          animationName: gu
        }
      })
    },
    {
      // =============================================================
      // ==                          Menu                           ==
      // =============================================================
      [`${t} ${n}`]: {
        position: "relative",
        margin: 0
      },
      [`${n}-submenu-popup`]: {
        position: "absolute",
        zIndex: o,
        background: "transparent",
        boxShadow: "none",
        transformOrigin: "0 0",
        "ul,li": {
          listStyle: "none"
        },
        ul: {
          marginInline: "0.3em"
        }
      },
      [`${t}, ${t}-menu-submenu`]: {
        [n]: m(m({
          padding: p,
          listStyleType: "none",
          backgroundColor: h,
          backgroundClip: "padding-box",
          borderRadius: e.borderRadiusLG,
          outline: "none",
          boxShadow: e.boxShadowSecondary
        }, wo(e)), {
          [`${n}-item-group-title`]: {
            padding: `${d}px ${y}px`,
            color: e.colorTextDescription,
            transition: `all ${u}`
          },
          // ======================= Item Content =======================
          [`${n}-item`]: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            borderRadius: e.borderRadiusSM
          },
          [`${n}-item-icon`]: {
            minWidth: c,
            marginInlineEnd: e.marginXS,
            fontSize: e.fontSizeSM
          },
          [`${n}-title-content`]: {
            flex: "auto",
            "> a": {
              color: "inherit",
              transition: `all ${u}`,
              "&:hover": {
                color: "inherit"
              },
              "&::after": {
                position: "absolute",
                inset: 0,
                content: '""'
              }
            }
          },
          // =========================== Item ===========================
          [`${n}-item, ${n}-submenu-title`]: m(m({
            clear: "both",
            margin: 0,
            padding: `${d}px ${y}px`,
            color: e.colorText,
            fontWeight: "normal",
            fontSize: c,
            lineHeight: e.lineHeight,
            cursor: "pointer",
            transition: `all ${u}`,
            "&:hover, &-active": {
              backgroundColor: e.controlItemBgHover
            }
          }, wo(e)), {
            "&-selected": {
              color: e.colorPrimary,
              backgroundColor: e.controlItemBgActive,
              "&:hover, &-active": {
                backgroundColor: e.controlItemBgActiveHover
              }
            },
            "&-disabled": {
              color: v,
              cursor: "not-allowed",
              "&:hover": {
                color: v,
                backgroundColor: h,
                cursor: "not-allowed"
              },
              a: {
                pointerEvents: "none"
              }
            },
            "&-divider": {
              height: 1,
              margin: `${e.marginXXS}px 0`,
              overflow: "hidden",
              lineHeight: 0,
              backgroundColor: e.colorSplit
            },
            [`${t}-menu-submenu-expand-icon`]: {
              position: "absolute",
              insetInlineEnd: e.paddingXS,
              [`${t}-menu-submenu-arrow-icon`]: {
                marginInlineEnd: "0 !important",
                color: e.colorTextDescription,
                fontSize: g,
                fontStyle: "normal"
              }
            }
          }),
          [`${n}-item-group-list`]: {
            margin: `0 ${e.marginXS}px`,
            padding: 0,
            listStyle: "none"
          },
          [`${n}-submenu-title`]: {
            paddingInlineEnd: y + e.fontSizeSM
          },
          [`${n}-submenu-vertical`]: {
            position: "relative"
          },
          [`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]: {
            [`&, ${t}-menu-submenu-arrow-icon`]: {
              color: v,
              backgroundColor: h,
              cursor: "not-allowed"
            }
          },
          // https://github.com/ant-design/ant-design/issues/19264
          [`${n}-submenu-selected ${t}-menu-submenu-title`]: {
            color: e.colorPrimary
          }
        })
      }
    },
    // Follow code may reuse in other components
    [Co(e, "slide-up"), Co(e, "slide-down"), Il(e, "move-up"), Il(e, "move-down"), Ii(e, "zoom-big")]
  ];
}, hu = Ke("Dropdown", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const {
    marginXXS: o,
    sizePopupArrow: r,
    controlHeight: i,
    fontSize: a,
    lineHeight: l,
    paddingXXS: s,
    componentCls: u,
    borderRadiusOuter: d,
    borderRadiusLG: c
  } = e, p = (i - a * l) / 2, {
    dropdownArrowOffset: v
  } = fu({
    sizePopupArrow: r,
    contentRadius: c,
    borderRadiusOuter: d
  }), g = Te(e, {
    menuCls: `${u}-menu`,
    rootPrefixCls: n,
    dropdownArrowDistance: r / 2 + o,
    dropdownArrowOffset: v,
    dropdownPaddingVertical: p,
    dropdownEdgeChildPadding: s
  });
  return [jb(g), zb(g), Hb(g)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
}));
var Lb = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Fb = ct.Group, xo = D({
  compatConfig: {
    MODE: 3
  },
  name: "ADropdownButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: Nn(ib(), {
    trigger: "hover",
    placement: "bottomRight",
    type: "default"
  }),
  // emits: ['click', 'visibleChange', 'update:visible'],s
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      emit: r
    } = t;
    const i = (p) => {
      r("update:visible", p), r("visibleChange", p), r("update:open", p), r("openChange", p);
    }, {
      prefixCls: a,
      direction: l,
      getPopupContainer: s
    } = Pe("dropdown", e), u = w(() => `${a.value}-button`), [d, c] = hu(a);
    return () => {
      var p, v;
      const g = m(m({}, e), o), {
        type: y = "default",
        disabled: h,
        danger: b,
        loading: $,
        htmlType: x,
        class: _ = "",
        overlay: C = (p = n.overlay) === null || p === void 0 ? void 0 : p.call(n),
        trigger: O,
        align: S,
        open: P,
        visible: E,
        onVisibleChange: T,
        placement: N = l.value === "rtl" ? "bottomLeft" : "bottomRight",
        href: K,
        title: U,
        icon: q = ((v = n.icon) === null || v === void 0 ? void 0 : v.call(n)) || f(Wo, null, null),
        mouseEnterDelay: I,
        mouseLeaveDelay: B,
        overlayClassName: V,
        overlayStyle: W,
        destroyPopupOnHide: Z,
        onClick: ne,
        "onUpdate:open": z
      } = g, Q = Lb(g, ["type", "disabled", "danger", "loading", "htmlType", "class", "overlay", "trigger", "align", "open", "visible", "onVisibleChange", "placement", "href", "title", "icon", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "onClick", "onUpdate:open"]), oe = {
        align: S,
        disabled: h,
        trigger: h ? [] : O,
        placement: N,
        getPopupContainer: s == null ? void 0 : s.value,
        onOpenChange: i,
        mouseEnterDelay: I,
        mouseLeaveDelay: B,
        open: P ?? E,
        overlayClassName: V,
        overlayStyle: W,
        destroyPopupOnHide: Z
      }, ve = f(ct, {
        danger: b,
        type: y,
        disabled: h,
        loading: $,
        onClick: ne,
        htmlType: x,
        href: K,
        title: U
      }, {
        default: n.default
      }), ue = f(ct, {
        danger: b,
        type: y,
        icon: q
      }, null);
      return d(f(Fb, H(H({}, Q), {}, {
        class: ae(u.value, _, c.value)
      }), {
        default: () => [n.leftButton ? n.leftButton({
          button: ve
        }) : ve, f(It, oe, {
          default: () => [n.rightButton ? n.rightButton({
            button: ue
          }) : ue],
          overlay: () => C
        })]
      }));
    };
  }
});
var Vb = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
function Dl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Wb(e, r, n[r]);
    });
  }
  return e;
}
function Wb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Oo = function(t, n) {
  var o = Dl({}, t, n.attrs);
  return f(pe, Dl({}, o, {
    icon: Vb
  }), null);
};
Oo.displayName = "RightOutlined";
Oo.inheritAttrs = !1;
function yu(e, t) {
  const n = m({}, e);
  for (let o = 0; o < t.length; o += 1) {
    const r = t[o];
    delete n[r];
  }
  return n;
}
const Ee = {
  adjustX: 1,
  adjustY: 1
}, Ie = [0, 0], bu = {
  left: {
    points: ["cr", "cl"],
    overflow: Ee,
    offset: [-4, 0],
    targetOffset: Ie
  },
  right: {
    points: ["cl", "cr"],
    overflow: Ee,
    offset: [4, 0],
    targetOffset: Ie
  },
  top: {
    points: ["bc", "tc"],
    overflow: Ee,
    offset: [0, -4],
    targetOffset: Ie
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Ee,
    offset: [0, 4],
    targetOffset: Ie
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ee,
    offset: [0, -4],
    targetOffset: Ie
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Ee,
    offset: [-4, 0],
    targetOffset: Ie
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ee,
    offset: [0, -4],
    targetOffset: Ie
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Ee,
    offset: [4, 0],
    targetOffset: Ie
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ee,
    offset: [0, 4],
    targetOffset: Ie
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Ee,
    offset: [4, 0],
    targetOffset: Ie
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ee,
    offset: [0, 4],
    targetOffset: Ie
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Ee,
    offset: [-4, 0],
    targetOffset: Ie
  }
}, kb = {
  adjustX: 1,
  adjustY: 1
}, Rl = {
  adjustX: 0,
  adjustY: 0
}, Kb = [0, 0];
function Nl(e) {
  return typeof e == "boolean" ? e ? kb : Rl : m(m({}, Rl), e);
}
function wu(e) {
  const {
    arrowWidth: t = 4,
    horizontalArrowShift: n = 16,
    verticalArrowShift: o = 8,
    autoAdjustOverflow: r,
    arrowPointAtCenter: i
  } = e, a = {
    left: {
      points: ["cr", "cl"],
      offset: [-4, 0]
    },
    right: {
      points: ["cl", "cr"],
      offset: [4, 0]
    },
    top: {
      points: ["bc", "tc"],
      offset: [0, -4]
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4]
    },
    topLeft: {
      points: ["bl", "tc"],
      offset: [-(n + t), -4]
    },
    leftTop: {
      points: ["tr", "cl"],
      offset: [-4, -(o + t)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [n + t, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(o + t)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [n + t, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, o + t]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-(n + t), 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, o + t]
    }
  };
  return Object.keys(a).forEach((l) => {
    a[l] = i ? m(m({}, a[l]), {
      overflow: Nl(r),
      targetOffset: Kb
    }) : m(m({}, bu[l]), {
      overflow: Nl(r)
    }), a[l].ignoreShake = !0;
  }), a;
}
const Su = Symbol("OverrideContextKey"), $u = () => R(Su, void 0), Xb = (e) => {
  var t, n, o;
  const {
    prefixCls: r,
    mode: i,
    selectable: a,
    validator: l,
    onClick: s,
    expandIcon: u
  } = $u() || {};
  se(Su, {
    prefixCls: w(() => {
      var d, c;
      return (c = (d = e.prefixCls) === null || d === void 0 ? void 0 : d.value) !== null && c !== void 0 ? c : r == null ? void 0 : r.value;
    }),
    mode: w(() => {
      var d, c;
      return (c = (d = e.mode) === null || d === void 0 ? void 0 : d.value) !== null && c !== void 0 ? c : i == null ? void 0 : i.value;
    }),
    selectable: w(() => {
      var d, c;
      return (c = (d = e.selectable) === null || d === void 0 ? void 0 : d.value) !== null && c !== void 0 ? c : a == null ? void 0 : a.value;
    }),
    validator: (t = e.validator) !== null && t !== void 0 ? t : l,
    onClick: (n = e.onClick) !== null && n !== void 0 ? n : s,
    expandIcon: (o = e.expandIcon) !== null && o !== void 0 ? o : u == null ? void 0 : u.value
  });
}, It = D({
  compatConfig: {
    MODE: 3
  },
  name: "ADropdown",
  inheritAttrs: !1,
  props: Nn(uu(), {
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
    placement: "bottomLeft",
    trigger: "hover"
  }),
  // emits: ['visibleChange', 'update:visible'],
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      emit: r
    } = t;
    const {
      prefixCls: i,
      rootPrefixCls: a,
      direction: l,
      getPopupContainer: s
    } = Pe("dropdown", e), [u, d] = hu(i);
    process.env.NODE_ENV !== "production" && [["visible", "open"], ["onVisibleChange", "onOpenChange"], ["onUpdate:visible", "onUpdate:open"]].forEach((h) => {
      let [b, $] = h;
      dt(e[b] === void 0, "Dropdown", `\`${b}\` is deprecated which will be removed in next major version, please use \`${$}\` instead.`);
    });
    const c = w(() => {
      const {
        placement: h = "",
        transitionName: b
      } = e;
      return b !== void 0 ? b : h.includes("top") ? `${a.value}-slide-down` : `${a.value}-slide-up`;
    });
    Xb({
      prefixCls: w(() => `${i.value}-menu`),
      expandIcon: w(() => f("span", {
        class: `${i.value}-menu-submenu-arrow`
      }, [f(Oo, {
        class: `${i.value}-menu-submenu-arrow-icon`
      }, null)])),
      mode: w(() => "vertical"),
      selectable: w(() => !1),
      onClick: () => {
      },
      validator: (h) => {
        let {
          mode: b
        } = h;
        dt(!b || b === "vertical", "Dropdown", `mode="${b}" is not supported for Dropdown's Menu.`);
      }
    });
    const p = () => {
      var h, b, $;
      const x = e.overlay || ((h = n.overlay) === null || h === void 0 ? void 0 : h.call(n)), _ = Array.isArray(x) ? x[0] : x;
      if (!_)
        return null;
      const C = _.props || {};
      ft(!C.mode || C.mode === "vertical", "Dropdown", `mode="${C.mode}" is not supported for Dropdown's Menu.`);
      const {
        selectable: O = !1,
        expandIcon: S = ($ = (b = _.children) === null || b === void 0 ? void 0 : b.expandIcon) === null || $ === void 0 ? void 0 : $.call(b)
      } = C, P = typeof S < "u" && Gt(S) ? S : f("span", {
        class: `${i.value}-menu-submenu-arrow`
      }, [f(Oo, {
        class: `${i.value}-menu-submenu-arrow-icon`
      }, null)]);
      return Gt(_) ? Ae(_, {
        mode: "vertical",
        selectable: O,
        expandIcon: () => P
      }) : _;
    }, v = w(() => {
      const h = e.placement;
      if (!h)
        return l.value === "rtl" ? "bottomRight" : "bottomLeft";
      if (h.includes("Center")) {
        const b = h.slice(0, h.indexOf("Center"));
        return ft(!h.includes("Center"), "Dropdown", `You are using '${h}' placement in Dropdown, which is deprecated. Try to use '${b}' instead.`), b;
      }
      return h;
    }), g = w(() => typeof e.visible == "boolean" ? e.visible : e.open), y = (h) => {
      r("update:visible", h), r("visibleChange", h), r("update:open", h), r("openChange", h);
    };
    return () => {
      var h, b;
      const {
        arrow: $,
        trigger: x,
        disabled: _,
        overlayClassName: C
      } = e, O = (h = n.default) === null || h === void 0 ? void 0 : h.call(n)[0], S = Ae(O, m({
        class: ae((b = O == null ? void 0 : O.props) === null || b === void 0 ? void 0 : b.class, {
          [`${i.value}-rtl`]: l.value === "rtl"
        }, `${i.value}-trigger`)
      }, _ ? {
        disabled: _
      } : {})), P = ae(C, d.value, {
        [`${i.value}-rtl`]: l.value === "rtl"
      }), E = _ ? [] : x;
      let T;
      E && E.includes("contextmenu") && (T = !0);
      const N = wu({
        arrowPointAtCenter: typeof $ == "object" && $.pointAtCenter,
        autoAdjustOverflow: !0
      }), K = yu(m(m(m({}, e), o), {
        visible: g.value,
        builtinPlacements: N,
        overlayClassName: P,
        arrow: !!$,
        alignPoint: T,
        prefixCls: i.value,
        getPopupContainer: s == null ? void 0 : s.value,
        transitionName: c.value,
        trigger: E,
        onVisibleChange: y,
        placement: v.value
      }), ["overlay", "onUpdate:visible"]);
      return u(f(Mg, K, {
        default: () => [S],
        overlay: p
      }));
    };
  }
});
It.Button = xo;
It.Button = xo;
It.install = function(e) {
  return e.component(It.name, It), e.component(xo.name, xo), e;
};
function Ub(e, t, n, o) {
  let r;
  if (r !== void 0)
    return !!r;
  if (e === t)
    return !0;
  if (typeof e != "object" || !e || typeof t != "object" || !t)
    return !1;
  const i = Object.keys(e), a = Object.keys(t);
  if (i.length !== a.length)
    return !1;
  const l = Object.prototype.hasOwnProperty.bind(t);
  for (let s = 0; s < i.length; s++) {
    const u = i[s];
    if (!l(u))
      return !1;
    const d = e[u], c = t[u];
    if (r = void 0, r === !1 || r === void 0 && d !== c)
      return !1;
  }
  return !0;
}
function fn(e, t) {
  return Ub(Qi(e), Qi(t));
}
const Cu = Symbol("menuContextKey"), xu = (e) => {
  se(Cu, e);
}, nt = () => R(Cu), Ou = Symbol("ForceRenderKey"), Gb = (e) => {
  se(Ou, e);
}, Tu = () => R(Ou, !1), Pu = Symbol("menuFirstLevelContextKey"), _u = (e) => {
  se(Pu, e);
}, Yb = () => R(Pu, !0), To = D({
  compatConfig: {
    MODE: 3
  },
  name: "MenuContextProvider",
  inheritAttrs: !1,
  props: {
    mode: {
      type: String,
      default: void 0
    },
    overflowDisabled: {
      type: Boolean,
      default: void 0
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = nt(), r = m({}, o);
    return e.mode !== void 0 && (r.mode = gr(e, "mode")), e.overflowDisabled !== void 0 && (r.overflowDisabled = gr(e, "overflowDisabled")), xu(r), () => {
      var i;
      return (i = n.default) === null || i === void 0 ? void 0 : i.call(n);
    };
  }
}), qb = xu, Qb = Symbol("siderCollapsed"), Eu = D({
  compatConfig: {
    MODE: 3
  },
  name: "ResizeObserver",
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ["resize"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = Io({
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    });
    let r = null, i = null;
    const a = () => {
      i && (i.disconnect(), i = null);
    }, l = (d) => {
      const {
        onResize: c
      } = e, p = d[0].target, {
        width: v,
        height: g
      } = p.getBoundingClientRect(), {
        offsetWidth: y,
        offsetHeight: h
      } = p, b = Math.floor(v), $ = Math.floor(g);
      if (o.width !== b || o.height !== $ || o.offsetWidth !== y || o.offsetHeight !== h) {
        const x = {
          width: b,
          height: $,
          offsetWidth: y,
          offsetHeight: h
        };
        m(o, x), c && Promise.resolve().then(() => {
          c(m(m({}, x), {
            offsetWidth: y,
            offsetHeight: h
          }), p);
        });
      }
    }, s = Rt(), u = () => {
      const {
        disabled: d
      } = e;
      if (d) {
        a();
        return;
      }
      const c = rt(s);
      c !== r && (a(), r = c), !i && c && (i = new Ys(l), i.observe(c));
    };
    return ke(() => {
      u();
    }), Dn(() => {
      u();
    }), Jr(() => {
      a();
    }), Y(() => e.disabled, () => {
      u();
    }, {
      flush: "post"
    }), () => {
      var d;
      return (d = n.default) === null || d === void 0 ? void 0 : d.call(n)[0];
    };
  }
}), Iu = Symbol("OverflowContextProviderKey"), Xr = D({
  compatConfig: {
    MODE: 3
  },
  name: "OverflowContextProvider",
  inheritAttrs: !1,
  props: {
    value: {
      type: Object
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return se(Iu, w(() => e.value)), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
}), Zb = () => R(Iu, w(() => null));
var Jb = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Ft = void 0, so = D({
  compatConfig: {
    MODE: 3
  },
  name: "Item",
  props: {
    prefixCls: String,
    item: M.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: {
      type: [String, Number]
    },
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: M.any,
    invalidate: Boolean
  },
  setup(e, t) {
    let {
      slots: n,
      expose: o
    } = t;
    const r = w(() => e.responsive && !e.display), i = F();
    o({
      itemNodeRef: i
    });
    function a(l) {
      e.registerSize(e.itemKey, l);
    }
    return Jr(() => {
      a(null);
    }), () => {
      var l;
      const {
        prefixCls: s,
        invalidate: u,
        item: d,
        renderItem: c,
        responsive: p,
        registerSize: v,
        itemKey: g,
        display: y,
        order: h,
        component: b = "div"
      } = e, $ = Jb(e, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"]), x = (l = n.default) === null || l === void 0 ? void 0 : l.call(n), _ = c && d !== Ft ? c(d) : x;
      let C;
      u || (C = {
        opacity: r.value ? 0 : 1,
        height: r.value ? 0 : Ft,
        overflowY: r.value ? "hidden" : Ft,
        order: p ? h : Ft,
        pointerEvents: r.value ? "none" : Ft,
        position: r.value ? "absolute" : Ft
      });
      const O = {};
      return r.value && (O["aria-hidden"] = !0), f(Eu, {
        disabled: !p,
        onResize: (S) => {
          let {
            offsetWidth: P
          } = S;
          a(P);
        }
      }, {
        default: () => f(b, H(H(H({
          class: ae(!u && s),
          style: C
        }, O), $), {}, {
          ref: i
        }), {
          default: () => [_]
        })
      });
    };
  }
});
var vr = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const e1 = D({
  compatConfig: {
    MODE: 3
  },
  name: "RawItem",
  inheritAttrs: !1,
  props: {
    component: M.any,
    title: M.any,
    id: String,
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    role: String,
    tabindex: Number
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const r = Zb();
    return () => {
      var i;
      if (!r.value) {
        const {
          component: c = "div"
        } = e, p = vr(e, ["component"]);
        return f(c, H(H({}, p), o), {
          default: () => [(i = n.default) === null || i === void 0 ? void 0 : i.call(n)]
        });
      }
      const a = r.value, {
        className: l
      } = a, s = vr(a, ["className"]), {
        class: u
      } = o, d = vr(o, ["class"]);
      return f(Xr, {
        value: null
      }, {
        default: () => [f(so, H(H(H({
          class: ae(l, u)
        }, s), d), e), n)]
      });
    };
  }
});
var t1 = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Mu = "responsive", Au = "invalidate";
function n1(e) {
  return `+ ${e.length} ...`;
}
const o1 = () => ({
  id: String,
  prefixCls: String,
  data: Array,
  itemKey: [String, Number, Function],
  /** Used for `responsive`. It will limit render node to avoid perf issue */
  itemWidth: {
    type: Number,
    default: 10
  },
  renderItem: Function,
  /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
  renderRawItem: Function,
  maxCount: [Number, String],
  renderRest: Function,
  /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
  renderRawRest: Function,
  suffix: M.any,
  component: String,
  itemComponent: M.any,
  /** @private This API may be refactor since not well design */
  onVisibleChange: Function,
  /** When set to `full`, ssr will render full items by default and remove at client side */
  ssr: String,
  onMousedown: Function
}), ut = D({
  name: "Overflow",
  inheritAttrs: !1,
  props: o1(),
  emits: ["visibleChange"],
  setup(e, t) {
    let {
      attrs: n,
      emit: o,
      slots: r
    } = t;
    const i = w(() => e.ssr === "full"), a = j(null), l = w(() => a.value || 0), s = j(/* @__PURE__ */ new Map()), u = j(0), d = j(0), c = j(0), p = j(null), v = j(null), g = w(() => v.value === null && i.value ? Number.MAX_SAFE_INTEGER : v.value || 0), y = j(!1), h = w(() => `${e.prefixCls}-item`), b = w(() => Math.max(u.value, d.value)), $ = w(() => !!(e.data.length && e.maxCount === Mu)), x = w(() => e.maxCount === Au), _ = w(() => $.value || typeof e.maxCount == "number" && e.data.length > e.maxCount), C = w(() => {
      let I = e.data;
      return $.value ? a.value === null && i.value ? I = e.data : I = e.data.slice(0, Math.min(e.data.length, l.value / e.itemWidth)) : typeof e.maxCount == "number" && (I = e.data.slice(0, e.maxCount)), I;
    }), O = w(() => $.value ? e.data.slice(g.value + 1) : e.data.slice(C.value.length)), S = (I, B) => {
      var V;
      return typeof e.itemKey == "function" ? e.itemKey(I) : (V = e.itemKey && (I == null ? void 0 : I[e.itemKey])) !== null && V !== void 0 ? V : B;
    }, P = w(() => e.renderItem || ((I) => I)), E = (I, B) => {
      v.value = I, B || (y.value = I < e.data.length - 1, o("visibleChange", I));
    }, T = (I, B) => {
      a.value = B.clientWidth;
    }, N = (I, B) => {
      const V = new Map(s.value);
      B === null ? V.delete(I) : V.set(I, B), s.value = V;
    }, K = (I, B) => {
      u.value = d.value, d.value = B;
    }, U = (I, B) => {
      c.value = B;
    }, q = (I) => s.value.get(S(C.value[I], I));
    return Y([l, s, d, c, () => e.itemKey, C], () => {
      if (l.value && b.value && C.value) {
        let I = c.value;
        const B = C.value.length, V = B - 1;
        if (!B) {
          E(0), p.value = null;
          return;
        }
        for (let W = 0; W < B; W += 1) {
          const Z = q(W);
          if (Z === void 0) {
            E(W - 1, !0);
            break;
          }
          if (I += Z, // Only one means `totalWidth` is the final width
          V === 0 && I <= l.value || // Last two width will be the final width
          W === V - 1 && I + q(V) <= l.value) {
            E(V), p.value = null;
            break;
          } else if (I + b.value > l.value) {
            E(W - 1), p.value = I - Z - c.value + d.value;
            break;
          }
        }
        e.suffix && q(0) + c.value > l.value && (p.value = null);
      }
    }), () => {
      const I = y.value && !!O.value.length, {
        itemComponent: B,
        renderRawItem: V,
        renderRawRest: W,
        renderRest: Z,
        prefixCls: ne = "rc-overflow",
        suffix: z,
        component: Q = "div",
        id: oe,
        onMousedown: ve
      } = e, {
        class: ue,
        style: A
      } = n, X = t1(n, ["class", "style"]);
      let G = {};
      p.value !== null && $.value && (G = {
        position: "absolute",
        left: `${p.value}px`,
        top: 0
      });
      const J = {
        prefixCls: h.value,
        responsive: $.value,
        component: B,
        invalidate: x.value
      }, le = V ? (fe, _e) => {
        const yt = S(fe, _e);
        return f(Xr, {
          key: yt,
          value: m(m({}, J), {
            order: _e,
            item: fe,
            itemKey: yt,
            registerSize: N,
            display: _e <= g.value
          })
        }, {
          default: () => [V(fe, _e)]
        });
      } : (fe, _e) => {
        const yt = S(fe, _e);
        return f(so, H(H({}, J), {}, {
          order: _e,
          key: yt,
          item: fe,
          renderItem: P.value,
          itemKey: yt,
          registerSize: N,
          display: _e <= g.value
        }), null);
      };
      let de = () => null;
      const ie = {
        order: I ? g.value : Number.MAX_SAFE_INTEGER,
        className: `${h.value} ${h.value}-rest`,
        registerSize: K,
        display: I
      };
      if (W)
        W && (de = () => f(Xr, {
          value: m(m({}, J), ie)
        }, {
          default: () => [W(O.value)]
        }));
      else {
        const fe = Z || n1;
        de = () => f(so, H(H({}, J), ie), {
          default: () => typeof fe == "function" ? fe(O.value) : fe
        });
      }
      const He = () => {
        var fe;
        return f(Q, H({
          id: oe,
          class: ae(!x.value && ne, ue),
          style: A,
          onMousedown: ve
        }, X), {
          default: () => [C.value.map(le), _.value ? de() : null, z && f(so, H(H({}, J), {}, {
            order: g.value,
            class: `${h.value}-suffix`,
            registerSize: U,
            display: !0,
            style: G
          }), {
            default: () => z
          }), (fe = r.default) === null || fe === void 0 ? void 0 : fe.call(r)]
        });
      };
      return f(Eu, {
        disabled: !$.value,
        onResize: T
      }, {
        default: He
      });
    };
  }
});
ut.Item = e1;
ut.RESPONSIVE = Mu;
ut.INVALIDATE = Au;
const Jn = "$$__vc-menu-more__key", Du = Symbol("KeyPathContext"), Mi = () => R(Du, {
  parentEventKeys: w(() => []),
  parentKeys: w(() => []),
  parentInfo: {}
}), r1 = (e, t, n) => {
  const {
    parentEventKeys: o,
    parentKeys: r
  } = Mi(), i = w(() => [...o.value, e]), a = w(() => [...r.value, t]);
  return se(Du, {
    parentEventKeys: i,
    parentKeys: a,
    parentInfo: n
  }), a;
}, Ru = Symbol("measure"), Bl = D({
  compatConfig: {
    MODE: 3
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return se(Ru, !0), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
}), Ai = () => R(Ru, !1), i1 = r1, a1 = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: M.any
}, l1 = D({
  compatConfig: {
    MODE: 3
  },
  name: "TooltipContent",
  props: a1,
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var o;
      return f("div", {
        class: `${e.prefixCls}-inner`,
        id: e.id,
        role: "tooltip",
        style: e.overlayInnerStyle
      }, [(o = n.overlay) === null || o === void 0 ? void 0 : o.call(n)]);
    };
  }
});
var s1 = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function zl() {
}
const c1 = D({
  compatConfig: {
    MODE: 3
  },
  name: "Tooltip",
  inheritAttrs: !1,
  props: {
    trigger: M.any.def(["hover"]),
    defaultVisible: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    placement: M.string.def("right"),
    transitionName: String,
    animation: M.any,
    afterVisibleChange: M.func.def(() => {
    }),
    overlayStyle: {
      type: Object,
      default: void 0
    },
    overlayClassName: String,
    prefixCls: M.string.def("rc-tooltip"),
    mouseEnterDelay: M.number.def(0.1),
    mouseLeaveDelay: M.number.def(0.1),
    getPopupContainer: Function,
    destroyTooltipOnHide: {
      type: Boolean,
      default: !1
    },
    align: M.object.def(() => ({})),
    arrowContent: M.any.def(null),
    tipId: String,
    builtinPlacements: M.object,
    overlayInnerStyle: {
      type: Object,
      default: void 0
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    onVisibleChange: Function,
    onPopupAlign: Function
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      expose: r
    } = t;
    const i = j(), a = () => {
      const {
        prefixCls: d,
        tipId: c,
        overlayInnerStyle: p
      } = e;
      return [f("div", {
        class: `${d}-arrow`,
        key: "arrow"
      }, [Yt(n, e, "arrowContent")]), f(l1, {
        key: "content",
        prefixCls: d,
        id: c,
        overlayInnerStyle: p
      }, {
        overlay: n.overlay
      })];
    };
    r({
      getPopupDomNode: () => i.value.getPopupDomNode(),
      triggerDOM: i,
      forcePopupAlign: () => {
        var d;
        return (d = i.value) === null || d === void 0 ? void 0 : d.forcePopupAlign();
      }
    });
    const s = j(!1), u = j(!1);
    return lt(() => {
      const {
        destroyTooltipOnHide: d
      } = e;
      if (typeof d == "boolean")
        s.value = d;
      else if (d && typeof d == "object") {
        const {
          keepParent: c
        } = d;
        s.value = c === !0, u.value = c === !1;
      }
    }), () => {
      const {
        overlayClassName: d,
        trigger: c,
        mouseEnterDelay: p,
        mouseLeaveDelay: v,
        overlayStyle: g,
        prefixCls: y,
        afterVisibleChange: h,
        transitionName: b,
        animation: $,
        placement: x,
        align: _,
        destroyTooltipOnHide: C,
        defaultVisible: O
      } = e, S = s1(e, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"]), P = m({}, S);
      e.visible !== void 0 && (P.popupVisible = e.visible);
      const E = m(m(m({
        popupClassName: d,
        prefixCls: y,
        action: c,
        builtinPlacements: bu,
        popupPlacement: x,
        popupAlign: _,
        afterPopupVisibleChange: h,
        popupTransitionName: b,
        popupAnimation: $,
        defaultPopupVisible: O,
        destroyPopupOnHide: s.value,
        autoDestroy: u.value,
        mouseLeaveDelay: v,
        popupStyle: g,
        mouseEnterDelay: p
      }, P), o), {
        onPopupVisibleChange: e.onVisibleChange || zl,
        onPopupAlign: e.onPopupAlign || zl,
        ref: i,
        popup: a()
      });
      return f(hi, E, {
        default: n.default
      });
    };
  }
}), u1 = () => ({
  trigger: [String, Array],
  open: {
    type: Boolean,
    default: void 0
  },
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: void 0
  },
  placement: String,
  color: String,
  transitionName: String,
  overlayStyle: we(),
  overlayInnerStyle: we(),
  overlayClassName: String,
  openClassName: String,
  prefixCls: String,
  mouseEnterDelay: Number,
  mouseLeaveDelay: Number,
  getPopupContainer: Function,
  arrowPointAtCenter: {
    type: Boolean,
    default: void 0
  },
  autoAdjustOverflow: {
    type: [Boolean, Object],
    default: void 0
  },
  destroyTooltipOnHide: {
    type: Boolean,
    default: void 0
  },
  align: we(),
  builtinPlacements: we(),
  children: Array,
  /** @deprecated Please use `onOpenChange` instead. */
  onVisibleChange: Function,
  /** @deprecated Please use `onUpdate:open` instead. */
  "onUpdate:visible": Function,
  onOpenChange: Function,
  "onUpdate:open": Function
});
function d1() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  for (let t = 0, n = e.length; t < n; t++)
    if (e[t] !== void 0)
      return e[t];
}
const f1 = bo.map((e) => `${e}-inverse`);
function p1(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [...f1, ...bo].includes(e) : bo.includes(e);
}
function v1(e, t) {
  const n = p1(t), o = ae({
    [`${e}-${t}`]: t && n
  }), r = {}, i = {};
  return t && !n && (r.background = t, i["--antd-arrow-background-color"] = t), {
    className: o,
    overlayStyle: r,
    arrowStyle: i
  };
}
const m1 = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: n,
    tooltipColor: o,
    tooltipBg: r,
    tooltipBorderRadius: i,
    zIndexPopup: a,
    controlHeight: l,
    boxShadowSecondary: s,
    paddingSM: u,
    paddingXS: d,
    tooltipRadiusOuter: c
  } = e;
  return [
    {
      [t]: m(m(m(m({}, ln(e)), {
        position: "absolute",
        zIndex: a,
        display: "block",
        "&": [{
          width: "max-content"
        }, {
          width: "intrinsic"
        }],
        maxWidth: n,
        visibility: "visible",
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": r,
        // Wrapper for the tooltip content
        [`${t}-inner`]: {
          minWidth: l,
          minHeight: l,
          padding: `${u / 2}px ${d}px`,
          color: o,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: r,
          borderRadius: i,
          boxShadow: s
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: Math.min(i, du)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), s0(e, (p, v) => {
        let {
          darkColor: g
        } = v;
        return {
          [`&${t}-${p}`]: {
            [`${t}-inner`]: {
              backgroundColor: g
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": g
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    sb(Te(e, {
      borderRadiusOuter: c
    }), {
      colorBg: "var(--antd-arrow-background-color)",
      showArrowCls: "",
      contentRadius: i,
      limitVerticalRadius: !0
    }),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none"
      }
    }
  ];
}, g1 = (e, t) => Ke("Tooltip", (o) => {
  if ((t == null ? void 0 : t.value) === !1)
    return [];
  const {
    borderRadius: r,
    colorTextLightSolid: i,
    colorBgDefault: a,
    borderRadiusOuter: l
  } = o, s = Te(o, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: i,
    tooltipBorderRadius: r,
    tooltipBg: a,
    tooltipRadiusOuter: l > 4 ? 4 : l
  });
  return [m1(s), Ii(o, "zoom-big-fast")];
}, (o) => {
  let {
    zIndexPopupBase: r,
    colorBgSpotlight: i
  } = o;
  return {
    zIndexPopup: r + 70,
    colorBgDefault: i
  };
})(e), h1 = (e, t) => {
  const n = {}, o = m({}, e);
  return t.forEach((r) => {
    e && r in e && (n[r] = e[r], delete o[r]);
  }), {
    picked: n,
    omitted: o
  };
}, y1 = () => m(m({}, u1()), {
  title: M.any
}), b1 = D({
  compatConfig: {
    MODE: 3
  },
  name: "ATooltip",
  inheritAttrs: !1,
  props: Nn(y1(), {
    trigger: "hover",
    align: {},
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: !1,
    autoAdjustOverflow: !0
  }),
  slots: Object,
  // emits: ['update:visible', 'visibleChange'],
  setup(e, t) {
    let {
      slots: n,
      emit: o,
      attrs: r,
      expose: i
    } = t;
    process.env.NODE_ENV !== "production" && [["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((T) => {
      let [N, K] = T;
      dt(e[N] === void 0, "Tooltip", `\`${N}\` is deprecated, please use \`${K}\` instead.`);
    });
    const {
      prefixCls: a,
      getPopupContainer: l,
      direction: s,
      rootPrefixCls: u
    } = Pe("tooltip", e), d = w(() => {
      var T;
      return (T = e.open) !== null && T !== void 0 ? T : e.visible;
    }), c = F(d1([e.open, e.visible])), p = F();
    let v;
    Y(d, (T) => {
      ye.cancel(v), v = ye(() => {
        c.value = !!T;
      });
    });
    const g = () => {
      var T;
      const N = (T = e.title) !== null && T !== void 0 ? T : n.title;
      return !N && N !== 0;
    }, y = (T) => {
      const N = g();
      d.value === void 0 && (c.value = N ? !1 : T), N || (o("update:visible", T), o("visibleChange", T), o("update:open", T), o("openChange", T));
    };
    i({
      getPopupDomNode: () => p.value.getPopupDomNode(),
      open: c,
      forcePopupAlign: () => {
        var T;
        return (T = p.value) === null || T === void 0 ? void 0 : T.forcePopupAlign();
      }
    });
    const b = w(() => {
      const {
        builtinPlacements: T,
        arrowPointAtCenter: N,
        autoAdjustOverflow: K
      } = e;
      return T || wu({
        arrowPointAtCenter: N,
        autoAdjustOverflow: K
      });
    }), $ = (T) => T || T === "", x = (T) => {
      const N = T.type;
      if (typeof N == "object" && T.props && ((N.__ANT_BUTTON === !0 || N === "button") && $(T.props.disabled) || N.__ANT_SWITCH === !0 && ($(T.props.disabled) || $(T.props.loading)) || N.__ANT_RADIO === !0 && $(T.props.disabled))) {
        const {
          picked: K,
          omitted: U
        } = h1(Cf(T), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), q = m(m({
          display: "inline-block"
        }, K), {
          cursor: "not-allowed",
          lineHeight: 1,
          width: T.props && T.props.block ? "100%" : void 0
        }), I = m(m({}, U), {
          pointerEvents: "none"
        }), B = Ae(T, {
          style: I
        }, !0);
        return f("span", {
          style: q,
          class: `${a.value}-disabled-compatible-wrapper`
        }, [B]);
      }
      return T;
    }, _ = () => {
      var T, N;
      return (T = e.title) !== null && T !== void 0 ? T : (N = n.title) === null || N === void 0 ? void 0 : N.call(n);
    }, C = (T, N) => {
      const K = b.value, U = Object.keys(K).find((q) => {
        var I, B;
        return K[q].points[0] === ((I = N.points) === null || I === void 0 ? void 0 : I[0]) && K[q].points[1] === ((B = N.points) === null || B === void 0 ? void 0 : B[1]);
      });
      if (U) {
        const q = T.getBoundingClientRect(), I = {
          top: "50%",
          left: "50%"
        };
        U.indexOf("top") >= 0 || U.indexOf("Bottom") >= 0 ? I.top = `${q.height - N.offset[1]}px` : (U.indexOf("Top") >= 0 || U.indexOf("bottom") >= 0) && (I.top = `${-N.offset[1]}px`), U.indexOf("left") >= 0 || U.indexOf("Right") >= 0 ? I.left = `${q.width - N.offset[0]}px` : (U.indexOf("right") >= 0 || U.indexOf("Left") >= 0) && (I.left = `${-N.offset[0]}px`), T.style.transformOrigin = `${I.left} ${I.top}`;
      }
    }, O = w(() => v1(a.value, e.color)), S = w(() => r["data-popover-inject"]), [P, E] = g1(a, w(() => !S.value));
    return () => {
      var T, N;
      const {
        openClassName: K,
        overlayClassName: U,
        overlayStyle: q,
        overlayInnerStyle: I
      } = e;
      let B = (N = on((T = n.default) === null || T === void 0 ? void 0 : T.call(n))) !== null && N !== void 0 ? N : null;
      B = B.length === 1 ? B[0] : B;
      let V = c.value;
      if (d.value === void 0 && g() && (V = !1), !B)
        return null;
      const W = x(Gt(B) && !xf(B) ? B : f("span", null, [B])), Z = ae({
        [K || `${a.value}-open`]: !0,
        [W.props && W.props.class]: W.props && W.props.class
      }), ne = ae(U, {
        [`${a.value}-rtl`]: s.value === "rtl"
      }, O.value.className, E.value), z = m(m({}, O.value.overlayStyle), I), Q = O.value.arrowStyle, oe = m(m(m({}, r), e), {
        prefixCls: a.value,
        getPopupContainer: l == null ? void 0 : l.value,
        builtinPlacements: b.value,
        visible: V,
        ref: p,
        overlayClassName: ne,
        overlayStyle: m(m({}, Q), q),
        overlayInnerStyle: z,
        onVisibleChange: y,
        onPopupAlign: C,
        transitionName: fg(u.value, "zoom-big-fast", e.transitionName)
      });
      return P(f(c1, oe, {
        default: () => [c.value ? Ae(W, {
          class: Z
        }) : W],
        arrowContent: () => f("span", {
          class: `${a.value}-arrow-content`
        }, null),
        overlay: _
      }));
    };
  }
}), pt = Hn(b1), L = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  /**
   * END
   */
  END: 35,
  /**
   * HOME
   */
  HOME: 36,
  /**
   * LEFT
   */
  LEFT: 37,
  /**
   * UP
   */
  UP: 38,
  /**
   * RIGHT
   */
  RIGHT: 39,
  /**
   * DOWN
   */
  DOWN: 40,
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  /**
   * DELETE
   */
  DELETE: 46,
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  /**
   * DASH
   */
  DASH: 189,
  /**
   * EQUALS
   */
  EQUALS: 187,
  /**
   * COMMA
   */
  COMMA: 188,
  /**
   * PERIOD
   */
  PERIOD: 190,
  /**
   * SLASH
   */
  SLASH: 191,
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    const {
      keyCode: n
    } = t;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    n >= L.F1 && n <= L.F12)
      return !1;
    switch (n) {
      case L.ALT:
      case L.CAPS_LOCK:
      case L.CONTEXT_MENU:
      case L.CTRL:
      case L.DOWN:
      case L.END:
      case L.ESC:
      case L.HOME:
      case L.INSERT:
      case L.LEFT:
      case L.MAC_FF_META:
      case L.META:
      case L.NUMLOCK:
      case L.NUM_CENTER:
      case L.PAGE_DOWN:
      case L.PAGE_UP:
      case L.PAUSE:
      case L.PRINT_SCREEN:
      case L.RIGHT:
      case L.SHIFT:
      case L.UP:
      case L.WIN_KEY:
      case L.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= L.ZERO && t <= L.NINE || t >= L.NUM_ZERO && t <= L.NUM_MULTIPLY || t >= L.A && t <= L.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case L.SPACE:
      case L.QUESTION_MARK:
      case L.NUM_PLUS:
      case L.NUM_MINUS:
      case L.NUM_PERIOD:
      case L.NUM_DIVISION:
      case L.SEMICOLON:
      case L.DASH:
      case L.EQUALS:
      case L.COMMA:
      case L.PERIOD:
      case L.SLASH:
      case L.APOSTROPHE:
      case L.SINGLE_QUOTE:
      case L.OPEN_SQUARE_BRACKET:
      case L.BACKSLASH:
      case L.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
};
function Nu(e) {
  const {
    mode: t,
    rtl: n,
    inlineIndent: o
  } = nt();
  return w(() => t.value !== "inline" ? null : n.value ? {
    paddingRight: `${e.value * o.value}px`
  } : {
    paddingLeft: `${e.value * o.value}px`
  });
}
let w1 = 0;
const S1 = () => ({
  id: String,
  role: String,
  disabled: Boolean,
  danger: Boolean,
  title: {
    type: [String, Boolean],
    default: void 0
  },
  icon: M.any,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  // Internal user prop
  originItemValue: we()
}), An = D({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuItem",
  inheritAttrs: !1,
  props: S1(),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      emit: o,
      attrs: r
    } = t;
    const i = Rt(), a = Ai(), l = typeof i.vnode.key == "symbol" ? String(i.vnode.key) : i.vnode.key;
    ft(typeof i.vnode.key != "symbol", "MenuItem", `MenuItem \`:key="${String(l)}"\` not support Symbol type`);
    const s = `menu_item_${++w1}_$$_${l}`, {
      parentEventKeys: u,
      parentKeys: d
    } = Mi(), {
      prefixCls: c,
      activeKeys: p,
      disabled: v,
      changeActiveKeys: g,
      rtl: y,
      inlineCollapsed: h,
      siderCollapsed: b,
      onItemClick: $,
      selectedKeys: x,
      registerMenuInfo: _,
      unRegisterMenuInfo: C
    } = nt(), O = Yb(), S = j(!1), P = w(() => [...d.value, l]);
    _(s, {
      eventKey: s,
      key: l,
      parentEventKeys: u,
      parentKeys: d,
      isLeaf: !0
    }), Me(() => {
      C(s);
    }), Y(p, () => {
      S.value = !!p.value.find((z) => z === l);
    }, {
      immediate: !0
    });
    const T = w(() => v.value || e.disabled), N = w(() => x.value.includes(l)), K = w(() => {
      const z = `${c.value}-item`;
      return {
        [`${z}`]: !0,
        [`${z}-danger`]: e.danger,
        [`${z}-active`]: S.value,
        [`${z}-selected`]: N.value,
        [`${z}-disabled`]: T.value
      };
    }), U = (z) => ({
      key: l,
      eventKey: s,
      keyPath: P.value,
      eventKeyPath: [...u.value, s],
      domEvent: z,
      item: m(m({}, e), r)
    }), q = (z) => {
      if (T.value)
        return;
      const Q = U(z);
      o("click", z), $(Q);
    }, I = (z) => {
      T.value || (g(P.value), o("mouseenter", z));
    }, B = (z) => {
      T.value || (g([]), o("mouseleave", z));
    }, V = (z) => {
      if (o("keydown", z), z.which === L.ENTER) {
        const Q = U(z);
        o("click", z), $(Q);
      }
    }, W = (z) => {
      g(P.value), o("focus", z);
    }, Z = (z, Q) => {
      const oe = f("span", {
        class: `${c.value}-title-content`
      }, [Q]);
      return (!z || Gt(Q) && Q.type === "span") && Q && h.value && O && typeof Q == "string" ? f("div", {
        class: `${c.value}-inline-collapsed-noicon`
      }, [Q.charAt(0)]) : oe;
    }, ne = Nu(w(() => P.value.length));
    return () => {
      var z, Q, oe, ve, ue;
      if (a)
        return null;
      const A = (z = e.title) !== null && z !== void 0 ? z : (Q = n.title) === null || Q === void 0 ? void 0 : Q.call(n), X = xe((oe = n.default) === null || oe === void 0 ? void 0 : oe.call(n)), G = X.length;
      let J = A;
      typeof A > "u" ? J = O && G ? X : "" : A === !1 && (J = "");
      const le = {
        title: J
      };
      !b.value && !h.value && (le.title = null, le.open = !1);
      const de = {};
      e.role === "option" && (de["aria-selected"] = N.value);
      const ie = (ve = e.icon) !== null && ve !== void 0 ? ve : (ue = n.icon) === null || ue === void 0 ? void 0 : ue.call(n, e);
      return f(pt, H(H({}, le), {}, {
        placement: y.value ? "left" : "right",
        overlayClassName: `${c.value}-inline-collapsed-tooltip`
      }), {
        default: () => [f(ut.Item, H(H(H({
          component: "li"
        }, r), {}, {
          id: e.id,
          style: m(m({}, r.style || {}), ne.value),
          class: [K.value, {
            [`${r.class}`]: !!r.class,
            [`${c.value}-item-only-child`]: (ie ? G + 1 : G) === 1
          }],
          role: e.role || "menuitem",
          tabindex: e.disabled ? null : -1,
          "data-menu-id": l,
          "aria-disabled": e.disabled
        }, de), {}, {
          onMouseenter: I,
          onMouseleave: B,
          onClick: q,
          onKeydown: V,
          onFocus: W,
          title: typeof A == "string" ? A : void 0
        }), {
          default: () => [Ae(typeof ie == "function" ? ie(e.originItemValue) : ie, {
            class: `${c.value}-item-icon`
          }, !1), Z(ie, X)]
        })]
      });
    };
  }
}), at = {
  adjustX: 1,
  adjustY: 1
}, $1 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: at,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: at,
    offset: [0, 7]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: at,
    offset: [-4, 0]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: at,
    offset: [4, 0]
  }
}, C1 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: at,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: at,
    offset: [0, 7]
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: at,
    offset: [-4, 0]
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: at,
    offset: [4, 0]
  }
}, x1 = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
}, Hl = D({
  compatConfig: {
    MODE: 3
  },
  name: "PopupTrigger",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    mode: String,
    visible: Boolean,
    // popup: React.ReactNode;
    popupClassName: String,
    popupOffset: Array,
    disabled: Boolean,
    onVisibleChange: Function
  },
  slots: Object,
  emits: ["visibleChange"],
  setup(e, t) {
    let {
      slots: n,
      emit: o
    } = t;
    const r = j(!1), {
      getPopupContainer: i,
      rtl: a,
      subMenuOpenDelay: l,
      subMenuCloseDelay: s,
      builtinPlacements: u,
      triggerSubMenuAction: d,
      forceSubMenuRender: c,
      motion: p,
      defaultMotions: v,
      rootClassName: g
    } = nt(), y = Tu(), h = w(() => a.value ? m(m({}, C1), u.value) : m(m({}, $1), u.value)), b = w(() => x1[e.mode]), $ = j();
    Y(() => e.visible, (C) => {
      ye.cancel($.value), $.value = ye(() => {
        r.value = C;
      });
    }, {
      immediate: !0
    }), Me(() => {
      ye.cancel($.value);
    });
    const x = (C) => {
      o("visibleChange", C);
    }, _ = w(() => {
      var C, O;
      const S = p.value || ((C = v.value) === null || C === void 0 ? void 0 : C[e.mode]) || ((O = v.value) === null || O === void 0 ? void 0 : O.other), P = typeof S == "function" ? S() : S;
      return P ? gi(P.name, {
        css: !0
      }) : void 0;
    });
    return () => {
      const {
        prefixCls: C,
        popupClassName: O,
        mode: S,
        popupOffset: P,
        disabled: E
      } = e;
      return f(hi, {
        prefixCls: C,
        popupClassName: ae(`${C}-popup`, {
          [`${C}-rtl`]: a.value
        }, O, g.value),
        stretch: S === "horizontal" ? "minWidth" : null,
        getPopupContainer: i.value,
        builtinPlacements: h.value,
        popupPlacement: b.value,
        popupVisible: r.value,
        popupAlign: P && {
          offset: P
        },
        action: E ? [] : [d.value],
        mouseEnterDelay: l.value,
        mouseLeaveDelay: s.value,
        onPopupVisibleChange: x,
        forceRender: y || c.value,
        popupAnimation: _.value
      }, {
        popup: n.popup,
        default: n.default
      });
    };
  }
}), Di = (e, t) => {
  let {
    slots: n,
    attrs: o
  } = t;
  var r;
  const {
    prefixCls: i,
    mode: a
  } = nt();
  return f("ul", H(H({}, o), {}, {
    class: ae(i.value, `${i.value}-sub`, `${i.value}-${a.value === "inline" ? "inline" : "vertical"}`),
    "data-menu-list": !0
  }), [(r = n.default) === null || r === void 0 ? void 0 : r.call(n)]);
};
Di.displayName = "SubMenuList";
const O1 = D({
  compatConfig: {
    MODE: 3
  },
  name: "InlineSubMenuList",
  inheritAttrs: !1,
  props: {
    id: String,
    open: Boolean,
    keyPath: Array
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = w(() => "inline"), {
      motion: r,
      mode: i,
      defaultMotions: a
    } = nt(), l = w(() => i.value === o.value), s = F(!l.value), u = w(() => l.value ? e.open : !1);
    Y(i, () => {
      l.value && (s.value = !1);
    }, {
      flush: "post"
    });
    const d = w(() => {
      var c, p;
      const v = r.value || ((c = a.value) === null || c === void 0 ? void 0 : c[o.value]) || ((p = a.value) === null || p === void 0 ? void 0 : p.other), g = typeof v == "function" ? v() : v;
      return m(m({}, g), {
        appear: e.keyPath.length <= 1
      });
    });
    return () => {
      var c;
      return s.value ? null : f(To, {
        mode: o.value
      }, {
        default: () => [f(gt, d.value, {
          default: () => [Eo(f(Di, {
            id: e.id
          }, {
            default: () => [(c = n.default) === null || c === void 0 ? void 0 : c.call(n)]
          }), [[ei, u.value]])]
        })]
      });
    };
  }
});
let jl = 0;
const T1 = () => ({
  icon: M.any,
  title: M.any,
  disabled: Boolean,
  level: Number,
  popupClassName: String,
  popupOffset: Array,
  internalPopupClose: Boolean,
  eventKey: String,
  expandIcon: Function,
  theme: String,
  onMouseenter: Function,
  onMouseleave: Function,
  onTitleClick: Function,
  // Internal user prop
  originItemValue: we()
}), tn = D({
  compatConfig: {
    MODE: 3
  },
  name: "ASubMenu",
  inheritAttrs: !1,
  props: T1(),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      emit: r
    } = t;
    var i, a;
    _u(!1);
    const l = Ai(), s = Rt(), u = typeof s.vnode.key == "symbol" ? String(s.vnode.key) : s.vnode.key;
    ft(typeof s.vnode.key != "symbol", "SubMenu", `SubMenu \`:key="${String(u)}"\` not support Symbol type`);
    const d = yr(u) ? u : `sub_menu_${++jl}_$$_not_set_key`, c = (i = e.eventKey) !== null && i !== void 0 ? i : yr(u) ? `sub_menu_${++jl}_$$_${u}` : d, {
      parentEventKeys: p,
      parentInfo: v,
      parentKeys: g
    } = Mi(), y = w(() => [...g.value, d]), h = j([]), b = {
      eventKey: c,
      key: d,
      parentEventKeys: p,
      childrenEventKeys: h,
      parentKeys: g
    };
    (a = v.childrenEventKeys) === null || a === void 0 || a.value.push(c), Me(() => {
      var ee;
      v.childrenEventKeys && (v.childrenEventKeys.value = (ee = v.childrenEventKeys) === null || ee === void 0 ? void 0 : ee.value.filter((me) => me != c));
    }), i1(c, d, b);
    const {
      prefixCls: $,
      activeKeys: x,
      disabled: _,
      changeActiveKeys: C,
      mode: O,
      inlineCollapsed: S,
      openKeys: P,
      overflowDisabled: E,
      onOpenChange: T,
      registerMenuInfo: N,
      unRegisterMenuInfo: K,
      selectedSubMenuKeys: U,
      expandIcon: q,
      theme: I
    } = nt(), B = u != null, V = !l && (Tu() || !B);
    Gb(V), (l && B || !l && !B || V) && (N(c, b), Me(() => {
      K(c);
    }));
    const W = w(() => `${$.value}-submenu`), Z = w(() => _.value || e.disabled), ne = j(), z = j(), Q = w(() => P.value.includes(d)), oe = w(() => !E.value && Q.value), ve = w(() => U.value.includes(d)), ue = j(!1);
    Y(x, () => {
      ue.value = !!x.value.find((ee) => ee === d);
    }, {
      immediate: !0
    });
    const A = (ee) => {
      Z.value || (r("titleClick", ee, d), O.value === "inline" && T(d, !Q.value));
    }, X = (ee) => {
      Z.value || (C(y.value), r("mouseenter", ee));
    }, G = (ee) => {
      Z.value || (C([]), r("mouseleave", ee));
    }, J = Nu(w(() => y.value.length)), le = (ee) => {
      O.value !== "inline" && T(d, ee);
    }, de = () => {
      C(y.value);
    }, ie = c && `${c}-popup`, He = w(() => ae($.value, `${$.value}-${e.theme || I.value}`, e.popupClassName)), fe = (ee, me) => {
      if (!me)
        return S.value && !g.value.length && ee && typeof ee == "string" ? f("div", {
          class: `${$.value}-inline-collapsed-noicon`
        }, [ee.charAt(0)]) : f("span", {
          class: `${$.value}-title-content`
        }, [ee]);
      const ot = Gt(ee) && ee.type === "span";
      return f(Be, null, [Ae(typeof me == "function" ? me(e.originItemValue) : me, {
        class: `${$.value}-item-icon`
      }, !1), ot ? ee : f("span", {
        class: `${$.value}-title-content`
      }, [ee])]);
    }, _e = w(() => O.value !== "inline" && y.value.length > 1 ? "vertical" : O.value), yt = w(() => O.value === "horizontal" ? "vertical" : O.value), ku = w(() => _e.value === "horizontal" ? "vertical" : _e.value), Gi = () => {
      var ee, me;
      const ot = W.value, Ko = (ee = e.icon) !== null && ee !== void 0 ? ee : (me = n.icon) === null || me === void 0 ? void 0 : me.call(n, e), Yi = e.expandIcon || n.expandIcon || q.value, Xo = fe(Yt(n, e, "title"), Ko);
      return f("div", {
        style: J.value,
        class: `${ot}-title`,
        tabindex: Z.value ? null : -1,
        ref: ne,
        title: typeof Xo == "string" ? Xo : null,
        "data-menu-id": d,
        "aria-expanded": oe.value,
        "aria-haspopup": !0,
        "aria-controls": ie,
        "aria-disabled": Z.value,
        onClick: A,
        onFocus: de
      }, [Xo, O.value !== "horizontal" && Yi ? Yi(m(m({}, e), {
        isOpen: oe.value
      })) : f("i", {
        class: `${ot}-arrow`
      }, null)]);
    };
    return () => {
      var ee;
      if (l)
        return B ? (ee = n.default) === null || ee === void 0 ? void 0 : ee.call(n) : null;
      const me = W.value;
      let ot = () => null;
      if (!E.value && O.value !== "inline") {
        const Ko = O.value === "horizontal" ? [0, 8] : [10, 0];
        ot = () => f(Hl, {
          mode: _e.value,
          prefixCls: me,
          visible: !e.internalPopupClose && oe.value,
          popupClassName: He.value,
          popupOffset: e.popupOffset || Ko,
          disabled: Z.value,
          onVisibleChange: le
        }, {
          default: () => [Gi()],
          popup: () => f(To, {
            mode: ku.value
          }, {
            default: () => [f(Di, {
              id: ie,
              ref: z
            }, {
              default: n.default
            })]
          })
        });
      } else
        ot = () => f(Hl, null, {
          default: Gi
        });
      return f(To, {
        mode: yt.value
      }, {
        default: () => [f(ut.Item, H(H({
          component: "li"
        }, o), {}, {
          role: "none",
          class: ae(me, `${me}-${O.value}`, o.class, {
            [`${me}-open`]: oe.value,
            [`${me}-active`]: ue.value,
            [`${me}-selected`]: ve.value,
            [`${me}-disabled`]: Z.value
          }),
          onMouseenter: X,
          onMouseleave: G,
          "data-submenu-id": d
        }), {
          default: () => f(Be, null, [ot(), !E.value && f(O1, {
            id: ie,
            open: oe.value,
            keyPath: y.value
          }, {
            default: n.default
          })])
        })]
      });
    };
  }
});
function Bu(e, t) {
  return e.classList ? e.classList.contains(t) : ` ${e.className} `.indexOf(` ${t} `) > -1;
}
function Ll(e, t) {
  e.classList ? e.classList.add(t) : Bu(e, t) || (e.className = `${e.className} ${t}`);
}
function Fl(e, t) {
  if (e.classList)
    e.classList.remove(t);
  else if (Bu(e, t)) {
    const n = e.className;
    e.className = ` ${n} `.replace(` ${t} `, " ");
  }
}
const P1 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return {
    name: e,
    appear: t,
    css: !0,
    onBeforeEnter: (n) => {
      n.style.height = "0px", n.style.opacity = "0", Ll(n, e);
    },
    onEnter: (n) => {
      Fe(() => {
        n.style.height = `${n.scrollHeight}px`, n.style.opacity = "1";
      });
    },
    onAfterEnter: (n) => {
      n && (Fl(n, e), n.style.height = null, n.style.opacity = null);
    },
    onBeforeLeave: (n) => {
      Ll(n, e), n.style.height = `${n.offsetHeight}px`, n.style.opacity = null;
    },
    onLeave: (n) => {
      setTimeout(() => {
        n.style.height = "0px", n.style.opacity = "0";
      });
    },
    onAfterLeave: (n) => {
      n && (Fl(n, e), n.style && (n.style.height = null, n.style.opacity = null));
    }
  };
}, _1 = () => ({
  title: M.any,
  // Internal user prop
  originItemValue: we()
}), Po = D({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuItemGroup",
  inheritAttrs: !1,
  props: _1(),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const {
      prefixCls: r
    } = nt(), i = w(() => `${r.value}-item-group`), a = Ai();
    return () => {
      var l, s;
      return a ? (l = n.default) === null || l === void 0 ? void 0 : l.call(n) : f("li", H(H({}, o), {}, {
        onClick: (u) => u.stopPropagation(),
        class: i.value
      }), [f("div", {
        title: typeof e.title == "string" ? e.title : void 0,
        class: `${i.value}-title`
      }, [Yt(n, e, "title")]), f("ul", {
        class: `${i.value}-list`
      }, [(s = n.default) === null || s === void 0 ? void 0 : s.call(n)])]);
    };
  }
}), E1 = () => ({
  prefixCls: String,
  dashed: Boolean
}), _o = D({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuDivider",
  props: E1(),
  setup(e) {
    const {
      prefixCls: t
    } = nt(), n = w(() => ({
      [`${t.value}-item-divider`]: !0,
      [`${t.value}-item-divider-dashed`]: !!e.dashed
    }));
    return () => f("li", {
      class: n.value
    }, null);
  }
});
var I1 = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function Ur(e, t, n) {
  return (e || []).map((o, r) => {
    if (o && typeof o == "object") {
      const i = o, {
        label: a,
        children: l,
        key: s,
        type: u
      } = i, d = I1(i, ["label", "children", "key", "type"]), c = s ?? `tmp-${r}`, p = n ? n.parentKeys.slice() : [], v = [], g = {
        eventKey: c,
        key: c,
        parentEventKeys: F(p),
        parentKeys: F(p),
        childrenEventKeys: F(v),
        isLeaf: !1
      };
      if (l || u === "group") {
        if (u === "group") {
          const h = Ur(l, t, n);
          return f(Po, H(H({
            key: c
          }, d), {}, {
            title: a,
            originItemValue: o
          }), {
            default: () => [h]
          });
        }
        t.set(c, g), n && n.childrenEventKeys.push(c);
        const y = Ur(l, t, {
          childrenEventKeys: v,
          parentKeys: [].concat(p, c)
        });
        return f(tn, H(H({
          key: c
        }, d), {}, {
          title: a,
          originItemValue: o
        }), {
          default: () => [y]
        });
      }
      return u === "divider" ? f(_o, H({
        key: c
      }, d), null) : (g.isLeaf = !0, t.set(c, g), f(An, H(H({
        key: c
      }, d), {}, {
        originItemValue: o
      }), {
        default: () => [a]
      }));
    }
    return null;
  }).filter((o) => o);
}
function M1(e) {
  const t = j([]), n = j(!1), o = j(/* @__PURE__ */ new Map());
  return Y(() => e.items, () => {
    const r = /* @__PURE__ */ new Map();
    n.value = !1, e.items ? (n.value = !0, t.value = Ur(e.items, r)) : t.value = void 0, o.value = r;
  }, {
    immediate: !0,
    deep: !0
  }), {
    itemsNodes: t,
    store: o,
    hasItmes: n
  };
}
const A1 = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n,
    menuHorizontalHeight: o,
    colorSplit: r,
    lineWidth: i,
    lineType: a,
    menuItemPaddingInline: l
  } = e;
  return {
    [`${t}-horizontal`]: {
      lineHeight: `${o}px`,
      border: 0,
      borderBottom: `${i}px ${a} ${r}`,
      boxShadow: "none",
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        content: '"\\20"'
      },
      // ======================= Item =======================
      [`${t}-item, ${t}-submenu`]: {
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
        paddingInline: l
      },
      [`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]: {
        backgroundColor: "transparent"
      },
      [`${t}-item, ${t}-submenu-title`]: {
        transition: [`border-color ${n}`, `background ${n}`].join(",")
      },
      // ===================== Sub Menu =====================
      [`${t}-submenu-arrow`]: {
        display: "none"
      }
    }
  };
}, D1 = (e) => {
  let {
    componentCls: t,
    menuArrowOffset: n
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl"
    },
    [`${t}-submenu-rtl`]: {
      transformOrigin: "100% 0"
    },
    // Vertical Arrow
    [`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]: {
      [`${t}-submenu-arrow`]: {
        "&::before": {
          transform: `rotate(-45deg) translateY(-${n})`
        },
        "&::after": {
          transform: `rotate(45deg) translateY(${n})`
        }
      }
    }
  };
}, Vl = (e) => m({}, Wc(e)), Wl = (e, t) => {
  const {
    componentCls: n,
    colorItemText: o,
    colorItemTextSelected: r,
    colorGroupTitle: i,
    colorItemBg: a,
    colorSubItemBg: l,
    colorItemBgSelected: s,
    colorActiveBarHeight: u,
    colorActiveBarWidth: d,
    colorActiveBarBorderSize: c,
    motionDurationSlow: p,
    motionEaseInOut: v,
    motionEaseOut: g,
    menuItemPaddingInline: y,
    motionDurationMid: h,
    colorItemTextHover: b,
    lineType: $,
    colorSplit: x,
    // Disabled
    colorItemTextDisabled: _,
    // Danger
    colorDangerItemText: C,
    colorDangerItemTextHover: O,
    colorDangerItemTextSelected: S,
    colorDangerItemBgActive: P,
    colorDangerItemBgSelected: E,
    colorItemBgHover: T,
    menuSubMenuBg: N,
    // Horizontal
    colorItemTextSelectedHorizontal: K,
    colorItemBgSelectedHorizontal: U
  } = e;
  return {
    [`${n}-${t}`]: {
      color: o,
      background: a,
      [`&${n}-root:focus-visible`]: m({}, Vl(e)),
      // ======================== Item ========================
      [`${n}-item-group-title`]: {
        color: i
      },
      [`${n}-submenu-selected`]: {
        [`> ${n}-submenu-title`]: {
          color: r
        }
      },
      // Disabled
      [`${n}-item-disabled, ${n}-submenu-disabled`]: {
        color: `${_} !important`
      },
      // Hover
      [`${n}-item:hover, ${n}-submenu-title:hover`]: {
        [`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
          color: b
        }
      },
      [`&:not(${n}-horizontal)`]: {
        [`${n}-item:not(${n}-item-selected)`]: {
          "&:hover": {
            backgroundColor: T
          },
          "&:active": {
            backgroundColor: s
          }
        },
        [`${n}-submenu-title`]: {
          "&:hover": {
            backgroundColor: T
          },
          "&:active": {
            backgroundColor: s
          }
        }
      },
      // Danger - only Item has
      [`${n}-item-danger`]: {
        color: C,
        [`&${n}-item:hover`]: {
          [`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
            color: O
          }
        },
        [`&${n}-item:active`]: {
          background: P
        }
      },
      [`${n}-item a`]: {
        "&, &:hover": {
          color: "inherit"
        }
      },
      [`${n}-item-selected`]: {
        color: r,
        // Danger
        [`&${n}-item-danger`]: {
          color: S
        },
        "a, a:hover": {
          color: "inherit"
        }
      },
      [`& ${n}-item-selected`]: {
        backgroundColor: s,
        // Danger
        [`&${n}-item-danger`]: {
          backgroundColor: E
        }
      },
      [`${n}-item, ${n}-submenu-title`]: {
        [`&:not(${n}-item-disabled):focus-visible`]: m({}, Vl(e))
      },
      [`&${n}-submenu > ${n}`]: {
        backgroundColor: N
      },
      [`&${n}-popup > ${n}`]: {
        backgroundColor: a
      },
      // ====================== Horizontal ======================
      [`&${n}-horizontal`]: m(m({}, t === "dark" ? {
        borderBottom: 0
      } : {}), {
        [`> ${n}-item, > ${n}-submenu`]: {
          top: c,
          marginTop: -c,
          marginBottom: 0,
          borderRadius: 0,
          "&::after": {
            position: "absolute",
            insetInline: y,
            bottom: 0,
            borderBottom: `${u}px solid transparent`,
            transition: `border-color ${p} ${v}`,
            content: '""'
          },
          "&:hover, &-active, &-open": {
            "&::after": {
              borderBottomWidth: u,
              borderBottomColor: K
            }
          },
          "&-selected": {
            color: K,
            backgroundColor: U,
            "&::after": {
              borderBottomWidth: u,
              borderBottomColor: K
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${n}-root`]: {
        [`&${n}-inline, &${n}-vertical`]: {
          borderInlineEnd: `${c}px ${$} ${x}`
        }
      },
      // ======================== Inline ========================
      [`&${n}-inline`]: {
        // Sub
        [`${n}-sub${n}-inline`]: {
          background: l
        },
        // Item
        [`${n}-item, ${n}-submenu-title`]: c && d ? {
          width: `calc(100% + ${c}px)`
        } : {},
        [`${n}-item`]: {
          position: "relative",
          "&::after": {
            position: "absolute",
            insetBlock: 0,
            insetInlineEnd: 0,
            borderInlineEnd: `${d}px solid ${r}`,
            transform: "scaleY(0.0001)",
            opacity: 0,
            transition: [`transform ${h} ${g}`, `opacity ${h} ${g}`].join(","),
            content: '""'
          },
          // Danger
          [`&${n}-item-danger`]: {
            "&::after": {
              borderInlineEndColor: S
            }
          }
        },
        [`${n}-selected, ${n}-item-selected`]: {
          "&::after": {
            transform: "scaleY(1)",
            opacity: 1,
            transition: [`transform ${h} ${v}`, `opacity ${h} ${v}`].join(",")
          }
        }
      }
    }
  };
}, kl = (e) => {
  const {
    componentCls: t,
    menuItemHeight: n,
    itemMarginInline: o,
    padding: r,
    menuArrowSize: i,
    marginXS: a,
    marginXXS: l
  } = e, s = r + i + a;
  return {
    [`${t}-item`]: {
      position: "relative"
    },
    [`${t}-item, ${t}-submenu-title`]: {
      height: n,
      lineHeight: `${n}px`,
      paddingInline: r,
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginInline: o,
      marginBlock: l,
      width: `calc(100% - ${o * 2}px)`
    },
    // disable margin collapsed
    [`${t}-submenu`]: {
      paddingBottom: 0.02
    },
    [`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: {
      height: n,
      lineHeight: `${n}px`
    },
    [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: {
      paddingInlineEnd: s
    }
  };
}, R1 = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    menuItemHeight: o,
    colorTextLightSolid: r,
    dropdownWidth: i,
    controlHeightLG: a,
    motionDurationMid: l,
    motionEaseOut: s,
    paddingXL: u,
    fontSizeSM: d,
    fontSizeLG: c,
    motionDurationSlow: p,
    paddingXS: v,
    boxShadowSecondary: g
  } = e, y = {
    height: o,
    lineHeight: `${o}px`,
    listStylePosition: "inside",
    listStyleType: "disc"
  };
  return [
    {
      [t]: {
        "&-inline, &-vertical": m({
          [`&${t}-root`]: {
            boxShadow: "none"
          }
        }, kl(e))
      },
      [`${t}-submenu-popup`]: {
        [`${t}-vertical`]: m(m({}, kl(e)), {
          boxShadow: g
        })
      }
    },
    // Vertical only
    {
      [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
        minWidth: i,
        maxHeight: `calc(100vh - ${a * 2.5}px)`,
        padding: "0",
        overflow: "hidden",
        borderInlineEnd: 0,
        // https://github.com/ant-design/ant-design/issues/22244
        // https://github.com/ant-design/ant-design/issues/26812
        "&:not([class*='-active'])": {
          overflowX: "hidden",
          overflowY: "auto"
        }
      }
    },
    // Inline Only
    {
      [`${t}-inline`]: {
        width: "100%",
        // Motion enhance for first level
        [`&${t}-root`]: {
          [`${t}-item, ${t}-submenu-title`]: {
            display: "flex",
            alignItems: "center",
            transition: [`border-color ${p}`, `background ${p}`, `padding ${l} ${s}`].join(","),
            [`> ${t}-title-content`]: {
              flex: "auto",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            "> *": {
              flex: "none"
            }
          }
        },
        // >>>>> Sub
        [`${t}-sub${t}-inline`]: {
          padding: 0,
          border: 0,
          borderRadius: 0,
          boxShadow: "none",
          [`& > ${t}-submenu > ${t}-submenu-title`]: y,
          [`& ${t}-item-group-title`]: {
            paddingInlineStart: u
          }
        },
        // >>>>> Item
        [`${t}-item`]: y
      }
    },
    // Inline Collapse Only
    {
      [`${t}-inline-collapsed`]: {
        width: o * 2,
        [`&${t}-root`]: {
          [`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
            [`> ${t}-inline-collapsed-noicon`]: {
              fontSize: c,
              textAlign: "center"
            }
          }
        },
        [`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]: {
          insetInlineStart: 0,
          paddingInline: `calc(50% - ${d}px)`,
          textOverflow: "clip",
          [`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: {
            opacity: 0
          },
          [`${t}-item-icon, ${n}`]: {
            margin: 0,
            fontSize: c,
            lineHeight: `${o}px`,
            "+ span": {
              display: "inline-block",
              opacity: 0
            }
          }
        },
        [`${t}-item-icon, ${n}`]: {
          display: "inline-block"
        },
        "&-tooltip": {
          pointerEvents: "none",
          [`${t}-item-icon, ${n}`]: {
            display: "none"
          },
          "a, a:hover": {
            color: r
          }
        },
        [`${t}-item-group-title`]: m(m({}, c0), {
          paddingInline: v
        })
      }
    }
  ];
}, Kl = (e) => {
  const {
    componentCls: t,
    fontSize: n,
    motionDurationSlow: o,
    motionDurationMid: r,
    motionEaseInOut: i,
    motionEaseOut: a,
    iconCls: l,
    controlHeightSM: s
  } = e;
  return {
    // >>>>> Item
    [`${t}-item, ${t}-submenu-title`]: {
      position: "relative",
      display: "block",
      margin: 0,
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: [`border-color ${o}`, `background ${o}`, `padding ${o} ${i}`].join(","),
      [`${t}-item-icon, ${l}`]: {
        minWidth: n,
        fontSize: n,
        transition: [`font-size ${r} ${a}`, `margin ${o} ${i}`, `color ${o}`].join(","),
        "+ span": {
          marginInlineStart: s - n,
          opacity: 1,
          transition: [`opacity ${o} ${i}`, `margin ${o}`, `color ${o}`].join(",")
        }
      },
      [`${t}-item-icon`]: m({}, u0()),
      [`&${t}-item-only-child`]: {
        [`> ${l}, > ${t}-item-icon`]: {
          marginInlineEnd: 0
        }
      }
    },
    // Disabled state sets text to gray and nukes hover/tab effects
    [`${t}-item-disabled, ${t}-submenu-disabled`]: {
      background: "none !important",
      cursor: "not-allowed",
      "&::after": {
        borderColor: "transparent !important"
      },
      a: {
        color: "inherit !important"
      },
      [`> ${t}-submenu-title`]: {
        color: "inherit !important",
        cursor: "not-allowed"
      }
    }
  };
}, Xl = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n,
    motionEaseInOut: o,
    borderRadius: r,
    menuArrowSize: i,
    menuArrowOffset: a
  } = e;
  return {
    [`${t}-submenu`]: {
      "&-expand-icon, &-arrow": {
        position: "absolute",
        top: "50%",
        insetInlineEnd: e.margin,
        width: i,
        color: "currentcolor",
        transform: "translateY(-50%)",
        transition: `transform ${n} ${o}, opacity ${n}`
      },
      "&-arrow": {
        // →
        "&::before, &::after": {
          position: "absolute",
          width: i * 0.6,
          height: i * 0.15,
          backgroundColor: "currentcolor",
          borderRadius: r,
          transition: [`background ${n} ${o}`, `transform ${n} ${o}`, `top ${n} ${o}`, `color ${n} ${o}`].join(","),
          content: '""'
        },
        "&::before": {
          transform: `rotate(45deg) translateY(-${a})`
        },
        "&::after": {
          transform: `rotate(-45deg) translateY(${a})`
        }
      }
    }
  };
}, N1 = (e) => {
  const {
    antCls: t,
    componentCls: n,
    fontSize: o,
    motionDurationSlow: r,
    motionDurationMid: i,
    motionEaseInOut: a,
    lineHeight: l,
    paddingXS: s,
    padding: u,
    colorSplit: d,
    lineWidth: c,
    zIndexPopup: p,
    borderRadiusLG: v,
    radiusSubMenuItem: g,
    menuArrowSize: y,
    menuArrowOffset: h,
    lineType: b,
    menuPanelMaskInset: $
  } = e;
  return [
    // Misc
    {
      "": {
        [`${n}`]: m(m({}, ml()), {
          // Hidden
          "&-hidden": {
            display: "none"
          }
        })
      },
      [`${n}-submenu-hidden`]: {
        display: "none"
      }
    },
    {
      [n]: m(m(m(m(m(m(m({}, ln(e)), ml()), {
        marginBottom: 0,
        paddingInlineStart: 0,
        // Override default ul/ol
        fontSize: o,
        lineHeight: 0,
        listStyle: "none",
        outline: "none",
        transition: `width ${r} cubic-bezier(0.2, 0, 0, 1) 0s`,
        "ul, ol": {
          margin: 0,
          padding: 0,
          listStyle: "none"
        },
        // Overflow ellipsis
        "&-overflow": {
          display: "flex",
          [`${n}-item`]: {
            flex: "none"
          }
        },
        [`${n}-item, ${n}-submenu, ${n}-submenu-title`]: {
          borderRadius: e.radiusItem
        },
        [`${n}-item-group-title`]: {
          padding: `${s}px ${u}px`,
          fontSize: o,
          lineHeight: l,
          transition: `all ${r}`
        },
        [`&-horizontal ${n}-submenu`]: {
          transition: [`border-color ${r} ${a}`, `background ${r} ${a}`].join(",")
        },
        [`${n}-submenu, ${n}-submenu-inline`]: {
          transition: [`border-color ${r} ${a}`, `background ${r} ${a}`, `padding ${i} ${a}`].join(",")
        },
        [`${n}-submenu ${n}-sub`]: {
          cursor: "initial",
          transition: [`background ${r} ${a}`, `padding ${r} ${a}`].join(",")
        },
        [`${n}-title-content`]: {
          transition: `color ${r}`
        },
        [`${n}-item a`]: {
          "&::before": {
            position: "absolute",
            inset: 0,
            backgroundColor: "transparent",
            content: '""'
          }
        },
        // Removed a Badge related style seems it's safe
        // https://github.com/ant-design/ant-design/issues/19809
        // >>>>> Divider
        [`${n}-item-divider`]: {
          overflow: "hidden",
          lineHeight: 0,
          borderColor: d,
          borderStyle: b,
          borderWidth: 0,
          borderTopWidth: c,
          marginBlock: c,
          padding: 0,
          "&-dashed": {
            borderStyle: "dashed"
          }
        }
      }), Kl(e)), {
        [`${n}-item-group`]: {
          [`${n}-item-group-list`]: {
            margin: 0,
            padding: 0,
            [`${n}-item, ${n}-submenu-title`]: {
              paddingInline: `${o * 2}px ${u}px`
            }
          }
        },
        // ======================= Sub Menu =======================
        "&-submenu": {
          "&-popup": {
            position: "absolute",
            zIndex: p,
            background: "transparent",
            borderRadius: v,
            boxShadow: "none",
            transformOrigin: "0 0",
            // https://github.com/ant-design/ant-design/issues/13955
            "&::before": {
              position: "absolute",
              inset: `${$}px 0 0`,
              zIndex: -1,
              width: "100%",
              height: "100%",
              opacity: 0,
              content: '""'
            }
          },
          // https://github.com/ant-design/ant-design/issues/13955
          "&-placement-rightTop::before": {
            top: 0,
            insetInlineStart: $
          },
          [`> ${n}`]: m(m(m({
            borderRadius: v
          }, Kl(e)), Xl(e)), {
            [`${n}-item, ${n}-submenu > ${n}-submenu-title`]: {
              borderRadius: g
            },
            [`${n}-submenu-title::after`]: {
              transition: `transform ${r} ${a}`
            }
          })
        }
      }), Xl(e)), {
        [`&-inline-collapsed ${n}-submenu-arrow,
        &-inline ${n}-submenu-arrow`]: {
          // ↓
          "&::before": {
            transform: `rotate(-45deg) translateX(${h})`
          },
          "&::after": {
            transform: `rotate(45deg) translateX(-${h})`
          }
        },
        [`${n}-submenu-open${n}-submenu-inline > ${n}-submenu-title > ${n}-submenu-arrow`]: {
          // ↑
          transform: `translateY(-${y * 0.2}px)`,
          "&::after": {
            transform: `rotate(-45deg) translateX(-${h})`
          },
          "&::before": {
            transform: `rotate(45deg) translateX(${h})`
          }
        }
      })
    },
    // Integration with header element so menu items have the same height
    {
      [`${t}-layout-header`]: {
        [n]: {
          lineHeight: "inherit"
        }
      }
    }
  ];
}, B1 = (e, t) => Ke("Menu", (o, r) => {
  let {
    overrideComponentToken: i
  } = r;
  if ((t == null ? void 0 : t.value) === !1)
    return [];
  const {
    colorBgElevated: a,
    colorPrimary: l,
    colorError: s,
    colorErrorHover: u,
    colorTextLightSolid: d
  } = o, {
    controlHeightLG: c,
    fontSize: p
  } = o, v = p / 7 * 5, g = Te(o, {
    menuItemHeight: c,
    menuItemPaddingInline: o.margin,
    menuArrowSize: v,
    menuHorizontalHeight: c * 1.15,
    menuArrowOffset: `${v * 0.25}px`,
    menuPanelMaskInset: -7,
    menuSubMenuBg: a
  }), y = new ge(d).setAlpha(0.65).toRgbString(), h = Te(g, {
    colorItemText: y,
    colorItemTextHover: d,
    colorGroupTitle: y,
    colorItemTextSelected: d,
    colorItemBg: "#001529",
    colorSubItemBg: "#000c17",
    colorItemBgActive: "transparent",
    colorItemBgSelected: l,
    colorActiveBarWidth: 0,
    colorActiveBarHeight: 0,
    colorActiveBarBorderSize: 0,
    // Disabled
    colorItemTextDisabled: new ge(d).setAlpha(0.25).toRgbString(),
    // Danger
    colorDangerItemText: s,
    colorDangerItemTextHover: u,
    colorDangerItemTextSelected: d,
    colorDangerItemBgActive: s,
    colorDangerItemBgSelected: s,
    menuSubMenuBg: "#001529",
    // Horizontal
    colorItemTextSelectedHorizontal: d,
    colorItemBgSelectedHorizontal: l
  }, m({}, i));
  return [
    // Basic
    N1(g),
    // Horizontal
    A1(g),
    // Vertical
    R1(g),
    // Theme
    Wl(g, "light"),
    Wl(h, "dark"),
    // RTL
    D1(g),
    // Motion
    Bb(g),
    Co(g, "slide-up"),
    Co(g, "slide-down"),
    Ii(g, "zoom-big")
  ];
}, (o) => {
  const {
    colorPrimary: r,
    colorError: i,
    colorTextDisabled: a,
    colorErrorBg: l,
    colorText: s,
    colorTextDescription: u,
    colorBgContainer: d,
    colorFillAlter: c,
    colorFillContent: p,
    lineWidth: v,
    lineWidthBold: g,
    controlItemBgActive: y,
    colorBgTextHover: h
  } = o;
  return {
    dropdownWidth: 160,
    zIndexPopup: o.zIndexPopupBase + 50,
    radiusItem: o.borderRadiusLG,
    radiusSubMenuItem: o.borderRadiusSM,
    colorItemText: s,
    colorItemTextHover: s,
    colorItemTextHoverHorizontal: r,
    colorGroupTitle: u,
    colorItemTextSelected: r,
    colorItemTextSelectedHorizontal: r,
    colorItemBg: d,
    colorItemBgHover: h,
    colorItemBgActive: p,
    colorSubItemBg: c,
    colorItemBgSelected: y,
    colorItemBgSelectedHorizontal: "transparent",
    colorActiveBarWidth: 0,
    colorActiveBarHeight: g,
    colorActiveBarBorderSize: v,
    // Disabled
    colorItemTextDisabled: a,
    // Danger
    colorDangerItemText: i,
    colorDangerItemTextHover: i,
    colorDangerItemTextSelected: i,
    colorDangerItemBgActive: l,
    colorDangerItemBgSelected: l,
    itemMarginInline: o.marginXXS
  };
})(e), z1 = () => ({
  id: String,
  prefixCls: String,
  // donot use items, now only support inner use
  items: Array,
  disabled: Boolean,
  inlineCollapsed: Boolean,
  disabledOverflow: Boolean,
  forceSubMenuRender: Boolean,
  openKeys: Array,
  selectedKeys: Array,
  activeKey: String,
  selectable: {
    type: Boolean,
    default: !0
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  tabindex: {
    type: [Number, String]
  },
  motion: Object,
  role: String,
  theme: {
    type: String,
    default: "light"
  },
  mode: {
    type: String,
    default: "vertical"
  },
  inlineIndent: {
    type: Number,
    default: 24
  },
  subMenuOpenDelay: {
    type: Number,
    default: 0
  },
  subMenuCloseDelay: {
    type: Number,
    default: 0.1
  },
  builtinPlacements: {
    type: Object
  },
  triggerSubMenuAction: {
    type: String,
    default: "hover"
  },
  getPopupContainer: Function,
  expandIcon: Function,
  onOpenChange: Function,
  onSelect: Function,
  onDeselect: Function,
  onClick: [Function, Array],
  onFocus: Function,
  onBlur: Function,
  onMousedown: Function,
  "onUpdate:openKeys": Function,
  "onUpdate:selectedKeys": Function,
  "onUpdate:activeKey": Function
}), Ul = [], qe = D({
  compatConfig: {
    MODE: 3
  },
  name: "AMenu",
  inheritAttrs: !1,
  props: z1(),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      emit: o,
      attrs: r
    } = t;
    const {
      direction: i,
      getPrefixCls: a
    } = Pe("menu", e), l = $u(), s = w(() => {
      var A;
      return a("menu", e.prefixCls || ((A = l == null ? void 0 : l.prefixCls) === null || A === void 0 ? void 0 : A.value));
    }), [u, d] = B1(s, w(() => !l)), c = j(/* @__PURE__ */ new Map()), p = R(Qb, F(void 0)), v = w(() => p.value !== void 0 ? p.value : e.inlineCollapsed), {
      itemsNodes: g
    } = M1(e), y = j(!1);
    ke(() => {
      y.value = !0;
    }), lt(() => {
      ft(!(e.inlineCollapsed === !0 && e.mode !== "inline"), "Menu", "`inlineCollapsed` should only be used when `mode` is inline."), ft(!(p.value !== void 0 && e.inlineCollapsed === !0), "Menu", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.");
    });
    const h = F([]), b = F([]), $ = F({});
    Y(c, () => {
      const A = {};
      for (const X of c.value.values())
        A[X.key] = X;
      $.value = A;
    }, {
      flush: "post"
    }), lt(() => {
      if (e.activeKey !== void 0) {
        let A = [];
        const X = e.activeKey ? $.value[e.activeKey] : void 0;
        X && e.activeKey !== void 0 ? A = fr([].concat(xt(X.parentKeys), e.activeKey)) : A = [], fn(h.value, A) || (h.value = A);
      }
    }), Y(() => e.selectedKeys, (A) => {
      A && (b.value = A.slice());
    }, {
      immediate: !0,
      deep: !0
    });
    const x = F([]);
    Y([$, b], () => {
      let A = [];
      b.value.forEach((X) => {
        const G = $.value[X];
        G && (A = A.concat(xt(G.parentKeys)));
      }), A = fr(A), fn(x.value, A) || (x.value = A);
    }, {
      immediate: !0
    });
    const _ = (A) => {
      if (e.selectable) {
        const {
          key: X
        } = A, G = b.value.includes(X);
        let J;
        e.multiple ? G ? J = b.value.filter((de) => de !== X) : J = [...b.value, X] : J = [X];
        const le = m(m({}, A), {
          selectedKeys: J
        });
        fn(J, b.value) || (e.selectedKeys === void 0 && (b.value = J), o("update:selectedKeys", J), G && e.multiple ? o("deselect", le) : o("select", le));
      }
      T.value !== "inline" && !e.multiple && C.value.length && U(Ul);
    }, C = F([]);
    Y(() => e.openKeys, function() {
      let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : C.value;
      fn(C.value, A) || (C.value = A.slice());
    }, {
      immediate: !0,
      deep: !0
    });
    let O;
    const S = (A) => {
      clearTimeout(O), O = setTimeout(() => {
        e.activeKey === void 0 && (h.value = A), o("update:activeKey", A[A.length - 1]);
      });
    }, P = w(() => !!e.disabled), E = w(() => i.value === "rtl"), T = F("vertical"), N = j(!1);
    lt(() => {
      var A;
      (e.mode === "inline" || e.mode === "vertical") && v.value ? (T.value = "vertical", N.value = v.value) : (T.value = e.mode, N.value = !1), !((A = l == null ? void 0 : l.mode) === null || A === void 0) && A.value && (T.value = l.mode.value);
    });
    const K = w(() => T.value === "inline"), U = (A) => {
      C.value = A, o("update:openKeys", A), o("openChange", A);
    }, q = F(C.value), I = j(!1);
    Y(C, () => {
      K.value && (q.value = C.value);
    }, {
      immediate: !0
    }), Y(K, () => {
      if (!I.value) {
        I.value = !0;
        return;
      }
      K.value ? C.value = q.value : U(Ul);
    }, {
      immediate: !0
    });
    const B = w(() => ({
      [`${s.value}`]: !0,
      [`${s.value}-root`]: !0,
      [`${s.value}-${T.value}`]: !0,
      [`${s.value}-inline-collapsed`]: N.value,
      [`${s.value}-rtl`]: E.value,
      [`${s.value}-${e.theme}`]: !0
    })), V = w(() => a()), W = w(() => ({
      horizontal: {
        name: `${V.value}-slide-up`
      },
      inline: P1(`${V.value}-motion-collapse`),
      other: {
        name: `${V.value}-zoom-big`
      }
    }));
    _u(!0);
    const Z = function() {
      let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      const X = [], G = c.value;
      return A.forEach((J) => {
        const {
          key: le,
          childrenEventKeys: de
        } = G.get(J);
        X.push(le, ...Z(xt(de)));
      }), X;
    }, ne = (A) => {
      var X;
      o("click", A), _(A), (X = l == null ? void 0 : l.onClick) === null || X === void 0 || X.call(l);
    }, z = (A, X) => {
      var G;
      const J = ((G = $.value[A]) === null || G === void 0 ? void 0 : G.childrenEventKeys) || [];
      let le = C.value.filter((de) => de !== A);
      if (X)
        le.push(A);
      else if (T.value !== "inline") {
        const de = Z(xt(J));
        le = fr(le.filter((ie) => !de.includes(ie)));
      }
      fn(C, le) || U(le);
    }, Q = (A, X) => {
      c.value.set(A, X), c.value = new Map(c.value);
    }, oe = (A) => {
      c.value.delete(A), c.value = new Map(c.value);
    }, ve = F(0), ue = w(() => {
      var A;
      return e.expandIcon || n.expandIcon || !((A = l == null ? void 0 : l.expandIcon) === null || A === void 0) && A.value ? (X) => {
        let G = e.expandIcon || n.expandIcon;
        return G = typeof G == "function" ? G(X) : G, Ae(G, {
          class: `${s.value}-submenu-expand-icon`
        }, !1);
      } : null;
    });
    return qb({
      prefixCls: s,
      activeKeys: h,
      openKeys: C,
      selectedKeys: b,
      changeActiveKeys: S,
      disabled: P,
      rtl: E,
      mode: T,
      inlineIndent: w(() => e.inlineIndent),
      subMenuCloseDelay: w(() => e.subMenuCloseDelay),
      subMenuOpenDelay: w(() => e.subMenuOpenDelay),
      builtinPlacements: w(() => e.builtinPlacements),
      triggerSubMenuAction: w(() => e.triggerSubMenuAction),
      getPopupContainer: w(() => e.getPopupContainer),
      inlineCollapsed: N,
      theme: w(() => e.theme),
      siderCollapsed: p,
      defaultMotions: w(() => y.value ? W.value : null),
      motion: w(() => y.value ? e.motion : null),
      overflowDisabled: j(void 0),
      onOpenChange: z,
      onItemClick: ne,
      registerMenuInfo: Q,
      unRegisterMenuInfo: oe,
      selectedSubMenuKeys: x,
      expandIcon: ue,
      forceSubMenuRender: w(() => e.forceSubMenuRender),
      rootClassName: d
    }), () => {
      var A, X;
      const G = g.value || xe((A = n.default) === null || A === void 0 ? void 0 : A.call(n)), J = ve.value >= G.length - 1 || T.value !== "horizontal" || e.disabledOverflow, le = T.value !== "horizontal" || e.disabledOverflow ? G : (
        // Need wrap for overflow dropdown that do not response for open
        G.map((ie, He) => (
          // Always wrap provider to avoid sub node re-mount
          f(To, {
            key: ie.key,
            overflowDisabled: He > ve.value
          }, {
            default: () => ie
          })
        ))
      ), de = ((X = n.overflowedIndicator) === null || X === void 0 ? void 0 : X.call(n)) || f(Wo, null, null);
      return u(f(ut, H(H({}, r), {}, {
        onMousedown: e.onMousedown,
        prefixCls: `${s.value}-overflow`,
        component: "ul",
        itemComponent: An,
        class: [B.value, r.class, d.value],
        role: "menu",
        id: e.id,
        data: le,
        renderRawItem: (ie) => ie,
        renderRawRest: (ie) => {
          const He = ie.length, fe = He ? G.slice(-He) : null;
          return f(Be, null, [f(tn, {
            eventKey: Jn,
            key: Jn,
            title: de,
            disabled: J,
            internalPopupClose: He === 0
          }, {
            default: () => fe
          }), f(Bl, null, {
            default: () => [f(tn, {
              eventKey: Jn,
              key: Jn,
              title: de,
              disabled: J,
              internalPopupClose: He === 0
            }, {
              default: () => fe
            })]
          })]);
        },
        maxCount: T.value !== "horizontal" || e.disabledOverflow ? ut.INVALIDATE : ut.RESPONSIVE,
        ssr: "full",
        "data-menu-list": !0,
        onVisibleChange: (ie) => {
          ve.value = ie;
        }
      }), {
        default: () => [f(cs, {
          to: "body"
        }, {
          default: () => [f("div", {
            style: {
              display: "none"
            },
            "aria-hidden": !0
          }, [f(Bl, null, {
            default: () => [le]
          })])]
        })]
      }));
    };
  }
});
qe.install = function(e) {
  return e.component(qe.name, qe), e.component(An.name, An), e.component(tn.name, tn), e.component(_o.name, _o), e.component(Po.name, Po), e;
};
qe.Item = An;
qe.Divider = _o;
qe.SubMenu = tn;
qe.ItemGroup = Po;
function Gl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Qe(e);
}
const H1 = qe.Item, zu = /* @__PURE__ */ D({
  name: "DeviceSwitch",
  setup() {
    const e = ze("device-switch"), t = F(), n = R(ni), o = R(Yu), r = R(Nt), i = R(Rn), a = w(() => Object.keys(r.value.deviceList || {})), l = w(() => {
      if (n.value) {
        const [c, p] = r.value.deviceList[n.value];
        return c !== 0 && p !== 0;
      }
      return !1;
    }), s = w(() => nn(e.b(), {
      [e.m("active")]: l.value
    })), u = () => f("div", {
      class: s.value
    }, [f("div", {
      class: e.e("icon")
    }, [f(Pd, null, null)]), f("div", {
      class: e.e("label")
    }, [n.value]), f("div", {
      class: e.e("icon")
    }, [f(Ad, null, null)])]), d = () => {
      let c;
      return f(qe, {
        onClick: ({
          key: p
        }) => o(p)
      }, Gl(c = a.value.map((p) => f(H1, {
        key: p
      }, Gl(p) ? p : {
        default: () => [p]
      }))) ? c : {
        default: () => [c]
      });
    };
    return () => n.value ? f("div", {
      ref: t
    }, [f(It, {
      getPopupContainer: () => i.value ? t.value : document.body,
      placement: "bottomRight"
    }, {
      default: u,
      overlay: d
    })]) : null;
  }
}), Gr = Symbol("ContextProps"), Yr = Symbol("InternalContextProps"), qr = {
  id: w(() => {
  }),
  onFieldBlur: () => {
  },
  onFieldChange: () => {
  },
  clearValidate: () => {
  }
}, Qr = {
  addFormItemField: () => {
  },
  removeFormItemField: () => {
  }
}, j1 = () => {
  const e = R(Yr, Qr), t = Symbol("FormItemFieldKey"), n = Rt();
  return e.addFormItemField(t, n.type), Me(() => {
    e.removeFormItemField(t);
  }), se(Yr, Qr), se(Gr, qr), R(Gr, qr);
};
D({
  compatConfig: {
    MODE: 3
  },
  name: "AFormItemRest",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return se(Yr, Qr), se(Gr, qr), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
const L1 = _i({});
D({
  name: "NoFormStatus",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return L1.useProvide({}), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
const F1 = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-inner`;
  return {
    [t]: {
      [`&${t}-small`]: {
        minWidth: e.switchMinWidthSM,
        height: e.switchHeightSM,
        lineHeight: `${e.switchHeightSM}px`,
        [`${t}-inner`]: {
          paddingInlineStart: e.switchInnerMarginMaxSM,
          paddingInlineEnd: e.switchInnerMarginMinSM,
          [`${n}-checked`]: {
            marginInlineStart: `calc(-100% + ${e.switchPinSizeSM + e.switchPadding * 2}px - ${e.switchInnerMarginMaxSM * 2}px)`,
            marginInlineEnd: `calc(100% - ${e.switchPinSizeSM + e.switchPadding * 2}px + ${e.switchInnerMarginMaxSM * 2}px)`
          },
          [`${n}-unchecked`]: {
            marginTop: -e.switchHeightSM,
            marginInlineStart: 0,
            marginInlineEnd: 0
          }
        },
        [`${t}-handle`]: {
          width: e.switchPinSizeSM,
          height: e.switchPinSizeSM
        },
        [`${t}-loading-icon`]: {
          top: (e.switchPinSizeSM - e.switchLoadingIconSize) / 2,
          fontSize: e.switchLoadingIconSize
        },
        [`&${t}-checked`]: {
          [`${t}-inner`]: {
            paddingInlineStart: e.switchInnerMarginMinSM,
            paddingInlineEnd: e.switchInnerMarginMaxSM,
            [`${n}-checked`]: {
              marginInlineStart: 0,
              marginInlineEnd: 0
            },
            [`${n}-unchecked`]: {
              marginInlineStart: `calc(100% - ${e.switchPinSizeSM + e.switchPadding * 2}px + ${e.switchInnerMarginMaxSM * 2}px)`,
              marginInlineEnd: `calc(-100% + ${e.switchPinSizeSM + e.switchPadding * 2}px - ${e.switchInnerMarginMaxSM * 2}px)`
            }
          },
          [`${t}-handle`]: {
            insetInlineStart: `calc(100% - ${e.switchPinSizeSM + e.switchPadding}px)`
          }
        },
        [`&:not(${t}-disabled):active`]: {
          [`&:not(${t}-checked) ${n}`]: {
            [`${n}-unchecked`]: {
              marginInlineStart: e.marginXXS / 2,
              marginInlineEnd: -e.marginXXS / 2
            }
          },
          [`&${t}-checked ${n}`]: {
            [`${n}-checked`]: {
              marginInlineStart: -e.marginXXS / 2,
              marginInlineEnd: e.marginXXS / 2
            }
          }
        }
      }
    }
  };
}, V1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`${t}-loading-icon${e.iconCls}`]: {
        position: "relative",
        top: (e.switchPinSize - e.fontSize) / 2,
        color: e.switchLoadingIconColor,
        verticalAlign: "top"
      },
      [`&${t}-checked ${t}-loading-icon`]: {
        color: e.switchColor
      }
    }
  };
}, W1 = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-handle`;
  return {
    [t]: {
      [n]: {
        position: "absolute",
        top: e.switchPadding,
        insetInlineStart: e.switchPadding,
        width: e.switchPinSize,
        height: e.switchPinSize,
        transition: `all ${e.switchDuration} ease-in-out`,
        "&::before": {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          backgroundColor: e.colorWhite,
          borderRadius: e.switchPinSize / 2,
          boxShadow: e.switchHandleShadow,
          transition: `all ${e.switchDuration} ease-in-out`,
          content: '""'
        }
      },
      [`&${t}-checked ${n}`]: {
        insetInlineStart: `calc(100% - ${e.switchPinSize + e.switchPadding}px)`
      },
      [`&:not(${t}-disabled):active`]: {
        [`${n}::before`]: {
          insetInlineEnd: e.switchHandleActiveInset,
          insetInlineStart: 0
        },
        [`&${t}-checked ${n}::before`]: {
          insetInlineEnd: 0,
          insetInlineStart: e.switchHandleActiveInset
        }
      }
    }
  };
}, k1 = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-inner`;
  return {
    [t]: {
      [n]: {
        display: "block",
        overflow: "hidden",
        borderRadius: 100,
        height: "100%",
        paddingInlineStart: e.switchInnerMarginMax,
        paddingInlineEnd: e.switchInnerMarginMin,
        transition: `padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,
        [`${n}-checked, ${n}-unchecked`]: {
          display: "block",
          color: e.colorTextLightSolid,
          fontSize: e.fontSizeSM,
          transition: `margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,
          pointerEvents: "none"
        },
        [`${n}-checked`]: {
          marginInlineStart: `calc(-100% + ${e.switchPinSize + e.switchPadding * 2}px - ${e.switchInnerMarginMax * 2}px)`,
          marginInlineEnd: `calc(100% - ${e.switchPinSize + e.switchPadding * 2}px + ${e.switchInnerMarginMax * 2}px)`
        },
        [`${n}-unchecked`]: {
          marginTop: -e.switchHeight,
          marginInlineStart: 0,
          marginInlineEnd: 0
        }
      },
      [`&${t}-checked ${n}`]: {
        paddingInlineStart: e.switchInnerMarginMin,
        paddingInlineEnd: e.switchInnerMarginMax,
        [`${n}-checked`]: {
          marginInlineStart: 0,
          marginInlineEnd: 0
        },
        [`${n}-unchecked`]: {
          marginInlineStart: `calc(100% - ${e.switchPinSize + e.switchPadding * 2}px + ${e.switchInnerMarginMax * 2}px)`,
          marginInlineEnd: `calc(-100% + ${e.switchPinSize + e.switchPadding * 2}px - ${e.switchInnerMarginMax * 2}px)`
        }
      },
      [`&:not(${t}-disabled):active`]: {
        [`&:not(${t}-checked) ${n}`]: {
          [`${n}-unchecked`]: {
            marginInlineStart: e.switchPadding * 2,
            marginInlineEnd: -e.switchPadding * 2
          }
        },
        [`&${t}-checked ${n}`]: {
          [`${n}-checked`]: {
            marginInlineStart: -e.switchPadding * 2,
            marginInlineEnd: e.switchPadding * 2
          }
        }
      }
    }
  };
}, K1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: m(m(m(m({}, ln(e)), {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      minWidth: e.switchMinWidth,
      height: e.switchHeight,
      lineHeight: `${e.switchHeight}px`,
      verticalAlign: "middle",
      background: e.colorTextQuaternary,
      border: "0",
      borderRadius: 100,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid}`,
      userSelect: "none",
      [`&:hover:not(${t}-disabled)`]: {
        background: e.colorTextTertiary
      }
    }), wo(e)), {
      [`&${t}-checked`]: {
        background: e.switchColor,
        [`&:hover:not(${t}-disabled)`]: {
          background: e.colorPrimaryHover
        }
      },
      [`&${t}-loading, &${t}-disabled`]: {
        cursor: "not-allowed",
        opacity: e.switchDisabledOpacity,
        "*": {
          boxShadow: "none",
          cursor: "not-allowed"
        }
      },
      // rtl style
      [`&${t}-rtl`]: {
        direction: "rtl"
      }
    })
  };
}, X1 = Ke("Switch", (e) => {
  const t = e.fontSize * e.lineHeight, n = e.controlHeight / 2, o = 2, r = t - o * 2, i = n - o * 2, a = Te(e, {
    switchMinWidth: r * 2 + o * 4,
    switchHeight: t,
    switchDuration: e.motionDurationMid,
    switchColor: e.colorPrimary,
    switchDisabledOpacity: e.opacityLoading,
    switchInnerMarginMin: r / 2,
    switchInnerMarginMax: r + o + o * 2,
    switchPadding: o,
    switchPinSize: r,
    switchBg: e.colorBgContainer,
    switchMinWidthSM: i * 2 + o * 2,
    switchHeightSM: n,
    switchInnerMarginMinSM: i / 2,
    switchInnerMarginMaxSM: i + o + o * 2,
    switchPinSizeSM: i,
    switchHandleShadow: `0 2px 4px 0 ${new ge("#00230b").setAlpha(0.2).toRgbString()}`,
    switchLoadingIconSize: e.fontSizeIcon * 0.75,
    switchLoadingIconColor: `rgba(0, 0, 0, ${e.opacityLoading})`,
    switchHandleActiveInset: "-30%"
  });
  return [
    K1(a),
    // inner style
    k1(a),
    // handle style
    W1(a),
    // loading style
    V1(a),
    // small style
    F1(a)
  ];
}), U1 = Zt("small", "default"), G1 = () => ({
  id: String,
  prefixCls: String,
  size: M.oneOf(U1),
  disabled: {
    type: Boolean,
    default: void 0
  },
  checkedChildren: M.any,
  unCheckedChildren: M.any,
  tabindex: M.oneOfType([M.string, M.number]),
  autofocus: {
    type: Boolean,
    default: void 0
  },
  loading: {
    type: Boolean,
    default: void 0
  },
  checked: M.oneOfType([M.string, M.number, M.looseBool]),
  checkedValue: M.oneOfType([M.string, M.number, M.looseBool]).def(!0),
  unCheckedValue: M.oneOfType([M.string, M.number, M.looseBool]).def(!1),
  onChange: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onKeydown: {
    type: Function
  },
  onMouseup: {
    type: Function
  },
  "onUpdate:checked": {
    type: Function
  },
  onBlur: Function,
  onFocus: Function
}), Y1 = D({
  compatConfig: {
    MODE: 3
  },
  name: "ASwitch",
  __ANT_SWITCH: !0,
  inheritAttrs: !1,
  props: G1(),
  slots: Object,
  // emits: ['update:checked', 'mouseup', 'change', 'click', 'keydown', 'blur'],
  setup(e, t) {
    let {
      attrs: n,
      slots: o,
      expose: r,
      emit: i
    } = t;
    const a = j1(), l = yi(), s = w(() => {
      var E;
      return (E = e.disabled) !== null && E !== void 0 ? E : l.value;
    });
    ss(() => {
      dt(!("defaultChecked" in n), "Switch", "'defaultChecked' is deprecated, please use 'v-model:checked'"), dt(!("value" in n), "Switch", "`value` is not validate prop, do you mean `checked`?");
    });
    const u = F(e.checked !== void 0 ? e.checked : n.defaultChecked), d = w(() => u.value === e.checkedValue);
    Y(() => e.checked, () => {
      u.value = e.checked;
    });
    const {
      prefixCls: c,
      direction: p,
      size: v
    } = Pe("switch", e), [g, y] = X1(c), h = F(), b = () => {
      var E;
      (E = h.value) === null || E === void 0 || E.focus();
    };
    r({
      focus: b,
      blur: () => {
        var E;
        (E = h.value) === null || E === void 0 || E.blur();
      }
    }), ke(() => {
      Fe(() => {
        e.autofocus && !s.value && h.value.focus();
      });
    });
    const x = (E, T) => {
      s.value || (i("update:checked", E), i("change", E, T), a.onFieldChange());
    }, _ = (E) => {
      i("blur", E);
    }, C = (E) => {
      b();
      const T = d.value ? e.unCheckedValue : e.checkedValue;
      x(T, E), i("click", T, E);
    }, O = (E) => {
      E.keyCode === L.LEFT ? x(e.unCheckedValue, E) : E.keyCode === L.RIGHT && x(e.checkedValue, E), i("keydown", E);
    }, S = (E) => {
      var T;
      (T = h.value) === null || T === void 0 || T.blur(), i("mouseup", E);
    }, P = w(() => ({
      [`${c.value}-small`]: v.value === "small",
      [`${c.value}-loading`]: e.loading,
      [`${c.value}-checked`]: d.value,
      [`${c.value}-disabled`]: s.value,
      [c.value]: !0,
      [`${c.value}-rtl`]: p.value === "rtl",
      [y.value]: !0
    }));
    return () => {
      var E;
      return g(f(qc, null, {
        default: () => [f("button", H(H(H({}, yu(e, ["prefixCls", "checkedChildren", "unCheckedChildren", "checked", "autofocus", "checkedValue", "unCheckedValue", "id", "onChange", "onUpdate:checked"])), n), {}, {
          id: (E = e.id) !== null && E !== void 0 ? E : a.id.value,
          onKeydown: O,
          onClick: C,
          onBlur: _,
          onMouseup: S,
          type: "button",
          role: "switch",
          "aria-checked": u.value,
          disabled: s.value || e.loading,
          class: [n.class, P.value],
          ref: h
        }), [f("div", {
          class: `${c.value}-handle`
        }, [e.loading ? f(Mn, {
          class: `${c.value}-loading-icon`
        }, null) : null]), f("span", {
          class: `${c.value}-inner`
        }, [f("span", {
          class: `${c.value}-inner-checked`
        }, [Yt(o, e, "checkedChildren")]), f("span", {
          class: `${c.value}-inner-unchecked`
        }, [Yt(o, e, "unCheckedChildren")])])])]
      }));
    };
  }
}), q1 = Hn(Y1), Q1 = /* @__PURE__ */ D({
  name: "SSR",
  setup() {
    const e = R(qu), t = R(Qu);
    return () => f("div", {
      class: "browser-ssr"
    }, [f(q1, {
      size: "small",
      checked: e.value === "server",
      "checked-children": "SSR",
      "un-checked-children": "CSR",
      onChange: (n) => t(n ? "server" : "client")
    }, null)]);
  }
}), Z1 = /* @__PURE__ */ D({
  name: "Responsive",
  props: {
    width: Number,
    height: Number,
    disableScaling: Boolean
  },
  setup(e, {
    slots: t
  }) {
    const {
      width: n,
      height: o,
      disableScaling: r
    } = ti(e), i = F(null), a = cd(i), l = w(() => r.value ? "scale(1)" : `scale(${Math.min(a.width.value / n.value, a.height.value / o.value)})`);
    return () => {
      var s;
      return f("div", {
        ref: i,
        style: {
          display: "grid",
          height: "100%",
          width: "100%",
          placeItems: r.value ? "unset" : "center",
          placeContent: r.value ? "unset" : "center"
        }
      }, [f("div", {
        style: {
          width: r.value ? "100%" : `${n.value}px`,
          height: r.value ? "100%" : `${o.value}px`,
          transform: l.value,
          transformOrigin: "center center",
          overflow: "hidden"
        }
      }, [(s = t.default) == null ? void 0 : s.call(t, {
        width: n.value,
        height: o.value,
        scale: l.value
      })])]);
    };
  }
}), ko = Symbol("ShowTerminial"), Ri = Symbol("DeviceRotate"), Hu = Symbol("ErrorMessage"), ju = Symbol("PreviewLoading"), Lu = /* @__PURE__ */ D({
  name: "PreviewDevice",
  setup(e, {
    slots: t
  }) {
    const n = ze("preview-device"), o = R(ni), r = R(Ri), i = R(Nt), a = w(() => i.value.deviceList), l = w(() => {
      if (!o.value)
        return {
          width: 0,
          height: 0
        };
      const [d = 0, c = 0] = a.value[o.value] || [];
      return r.value ? {
        width: c,
        height: d
      } : {
        width: d,
        height: c
      };
    }), s = w(() => {
      const {
        width: d,
        height: c
      } = l.value;
      return d === 0 && c === 0;
    }), u = nn(n.b());
    return () => f("div", {
      class: u
    }, [f(Z1, Gu(l.value, {
      disableScaling: s.value
    }), {
      default: () => {
        var d;
        return [f("div", {
          class: n.e("content")
        }, [(d = t.default) == null ? void 0 : d.call(t)])];
      }
    })]);
  }
}), J1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, ew = /* @__PURE__ */ We("path", { d: "M225.835 286.165a42.667 42.667 0 1 1 60.33-60.33l256 256a42.667 42.667 0 0 1 1.28 59.008l-234.666 256a42.667 42.667 0 1 1-62.891-57.686L452.949 513.28z" }, null, -1), tw = /* @__PURE__ */ We("path", {
  d: "M554.667 725.333H896q42.667 0 42.667 42.667T896 810.667H554.667Q512 810.667 512 768t42.667-42.667",
  opacity: ".3"
}, null, -1), nw = [
  ew,
  tw
];
function ow(e, t) {
  return vt(), mt("svg", J1, [...nw]);
}
const Fu = { render: ow }, rw = /* @__PURE__ */ D({
  name: "TerminialSwitch",
  setup() {
    const e = R(Rn), t = R(ko), n = ze("terminal-switch");
    if (e != null && e.value)
      return;
    const o = w(() => nn(n.b(), {
      [n.m("active")]: t.value
    }));
    return () => f("div", null, [f(pt, {
      title: "查看终端"
    }, {
      default: () => [f("div", {
        class: o.value,
        onClick: () => t.value = !t.value
      }, [f(Fu, {
        class: "icon"
      }, null)])]
    })]);
  }
}), iw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  class: "icon",
  viewBox: "0 0 1175 1024"
}, aw = /* @__PURE__ */ We("path", {
  fill: "#666",
  d: "M87.273 31.418h576c28.904 0 52.363 23.46 34.909 52.364V921.6c17.454 28.905-6.005 52.364-34.91 52.364h-576A52.364 52.364 0 0 1 34.91 921.6V83.782a52.364 52.364 0 0 1 52.364-52.364m733.09 261.818h209.455a52.364 52.364 0 0 1 52.224 48.454l.14 3.91v576a52.364 52.364 0 0 1-48.454 52.224l-3.91.14H820.364V869.236h157.09V397.964h-157.09zm-209.454 576v-733.09H139.636v733.09zM244.364 659.782h261.818v104.727H244.364z"
}, null, -1), lw = [
  aw
];
function sw(e, t) {
  return vt(), mt("svg", iw, [...lw]);
}
const cw = { render: sw }, Vu = /* @__PURE__ */ D({
  name: "TerminialSwitch",
  setup() {
    const e = R(Ri), t = R(ni), n = R(Nt), o = ze("device-rotate"), r = w(() => {
      if (!t.value)
        return !1;
      const [a, l] = n.value.deviceList[t.value];
      return a !== 0 && l !== 0;
    }), i = w(() => nn(o.b(), {
      [o.m("active")]: e.value
    }));
    return () => r.value ? f("div", null, [f(pt, {
      title: "旋转设备"
    }, {
      default: () => [f("div", {
        class: i.value,
        onClick: () => e.value = !e.value
      }, [f(cw, {
        class: o.e("icon")
      }, null)])]
    })]) : null;
  }
}), uw = /* @__PURE__ */ D({
  name: "BrowserDecorate",
  setup() {
    const e = ze("browser-decorate");
    return () => f("div", {
      class: e.b()
    }, null);
  }
}), dw = /* @__PURE__ */ D({
  name: "BrowserDecorate",
  setup() {
    const e = ze("browser-url");
    return () => f("div", {
      class: e.b()
    }, null);
  }
}), Wu = /* @__PURE__ */ D({
  name: "PreviewContent",
  setup(e, {
    slots: t
  }) {
    const n = ze("preview-content"), o = R(Nt), r = w(() => {
      var a;
      return {
        background: (a = o == null ? void 0 : o.value) == null ? void 0 : a.background
      };
    }), i = w(() => {
      var a;
      return nn(n.b(), {
        [o.value.style]: !!o.value.style,
        [n.m("compact")]: (a = o.value.style) == null ? void 0 : a.includes("compact")
      });
    });
    return () => {
      var a;
      return f("div", {
        class: i.value,
        style: r.value
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    };
  }
});
function fw(e, t, n) {
  var o = n || {}, r = o.noTrailing, i = r === void 0 ? !1 : r, a = o.noLeading, l = a === void 0 ? !1 : a, s = o.debounceMode, u = s === void 0 ? void 0 : s, d, c = !1, p = 0;
  function v() {
    d && clearTimeout(d);
  }
  function g(h) {
    var b = h || {}, $ = b.upcomingOnly, x = $ === void 0 ? !1 : $;
    v(), c = !x;
  }
  function y() {
    for (var h = arguments.length, b = new Array(h), $ = 0; $ < h; $++)
      b[$] = arguments[$];
    var x = this, _ = Date.now() - p;
    if (c)
      return;
    function C() {
      p = Date.now(), t.apply(x, b);
    }
    function O() {
      d = void 0;
    }
    !l && u && !d && C(), v(), u === void 0 && _ > e ? l ? (p = Date.now(), i || (d = setTimeout(u ? O : C, e))) : C() : i !== !0 && (d = setTimeout(u ? O : C, u === void 0 ? e - _ : e));
  }
  return y.cancel = g, y;
}
function pw(e, t, n) {
  var o = {}, r = o.atBegin, i = r === void 0 ? !1 : r;
  return fw(e, t, {
    debounceMode: i !== !1
  });
}
const vw = new te("antSpinMove", {
  to: {
    opacity: 1
  }
}), mw = new te("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), gw = (e) => ({
  [`${e.componentCls}`]: m(m({}, ln(e)), {
    position: "absolute",
    display: "none",
    color: e.colorPrimary,
    textAlign: "center",
    verticalAlign: "middle",
    opacity: 0,
    transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
    "&-spinning": {
      position: "static",
      display: "inline-block",
      opacity: 1
    },
    "&-nested-loading": {
      position: "relative",
      [`> div > ${e.componentCls}`]: {
        position: "absolute",
        top: 0,
        insetInlineStart: 0,
        zIndex: 4,
        display: "block",
        width: "100%",
        height: "100%",
        maxHeight: e.contentHeight,
        [`${e.componentCls}-dot`]: {
          position: "absolute",
          top: "50%",
          insetInlineStart: "50%",
          margin: -e.spinDotSize / 2
        },
        [`${e.componentCls}-text`]: {
          position: "absolute",
          top: "50%",
          width: "100%",
          paddingTop: (e.spinDotSize - e.fontSize) / 2 + 2,
          textShadow: `0 1px 2px ${e.colorBgContainer}`
          // FIXME: shadow
        },
        [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: {
          marginTop: -(e.spinDotSize / 2) - 10
        },
        "&-sm": {
          [`${e.componentCls}-dot`]: {
            margin: -e.spinDotSizeSM / 2
          },
          [`${e.componentCls}-text`]: {
            paddingTop: (e.spinDotSizeSM - e.fontSize) / 2 + 2
          },
          [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: {
            marginTop: -(e.spinDotSizeSM / 2) - 10
          }
        },
        "&-lg": {
          [`${e.componentCls}-dot`]: {
            margin: -(e.spinDotSizeLG / 2)
          },
          [`${e.componentCls}-text`]: {
            paddingTop: (e.spinDotSizeLG - e.fontSize) / 2 + 2
          },
          [`&${e.componentCls}-show-text ${e.componentCls}-dot`]: {
            marginTop: -(e.spinDotSizeLG / 2) - 10
          }
        }
      },
      [`${e.componentCls}-container`]: {
        position: "relative",
        transition: `opacity ${e.motionDurationSlow}`,
        "&::after": {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: 10,
          width: "100%",
          height: "100%",
          background: e.colorBgContainer,
          opacity: 0,
          transition: `all ${e.motionDurationSlow}`,
          content: '""',
          pointerEvents: "none"
        }
      },
      [`${e.componentCls}-blur`]: {
        clear: "both",
        opacity: 0.5,
        userSelect: "none",
        pointerEvents: "none",
        "&::after": {
          opacity: 0.4,
          pointerEvents: "auto"
        }
      }
    },
    // tip
    // ------------------------------
    "&-tip": {
      color: e.spinDotDefault
    },
    // dots
    // ------------------------------
    [`${e.componentCls}-dot`]: {
      position: "relative",
      display: "inline-block",
      fontSize: e.spinDotSize,
      width: "1em",
      height: "1em",
      "&-item": {
        position: "absolute",
        display: "block",
        width: (e.spinDotSize - e.marginXXS / 2) / 2,
        height: (e.spinDotSize - e.marginXXS / 2) / 2,
        backgroundColor: e.colorPrimary,
        borderRadius: "100%",
        transform: "scale(0.75)",
        transformOrigin: "50% 50%",
        opacity: 0.3,
        animationName: vw,
        animationDuration: "1s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        animationDirection: "alternate",
        "&:nth-child(1)": {
          top: 0,
          insetInlineStart: 0
        },
        "&:nth-child(2)": {
          top: 0,
          insetInlineEnd: 0,
          animationDelay: "0.4s"
        },
        "&:nth-child(3)": {
          insetInlineEnd: 0,
          bottom: 0,
          animationDelay: "0.8s"
        },
        "&:nth-child(4)": {
          bottom: 0,
          insetInlineStart: 0,
          animationDelay: "1.2s"
        }
      },
      "&-spin": {
        transform: "rotate(45deg)",
        animationName: mw,
        animationDuration: "1.2s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear"
      }
    },
    // Sizes
    // ------------------------------
    // small
    [`&-sm ${e.componentCls}-dot`]: {
      fontSize: e.spinDotSizeSM,
      i: {
        width: (e.spinDotSizeSM - e.marginXXS / 2) / 2,
        height: (e.spinDotSizeSM - e.marginXXS / 2) / 2
      }
    },
    // large
    [`&-lg ${e.componentCls}-dot`]: {
      fontSize: e.spinDotSizeLG,
      i: {
        width: (e.spinDotSizeLG - e.marginXXS) / 2,
        height: (e.spinDotSizeLG - e.marginXXS) / 2
      }
    },
    [`&${e.componentCls}-show-text ${e.componentCls}-text`]: {
      display: "block"
    }
  })
}), hw = Ke("Spin", (e) => {
  const t = Te(e, {
    spinDotDefault: e.colorTextDescription,
    spinDotSize: e.controlHeightLG / 2,
    spinDotSizeSM: e.controlHeightLG * 0.35,
    spinDotSizeLG: e.controlHeight
  });
  return [gw(t)];
}, {
  contentHeight: 400
});
var yw = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const bw = () => ({
  prefixCls: String,
  spinning: {
    type: Boolean,
    default: void 0
  },
  size: String,
  wrapperClassName: String,
  tip: M.any,
  delay: Number,
  indicator: M.any
});
let co = null;
function ww(e, t) {
  return !!e && !!t && !isNaN(Number(t));
}
function Sw(e) {
  const t = e.indicator;
  co = typeof t == "function" ? t : () => f(t, null, null);
}
const Mt = D({
  compatConfig: {
    MODE: 3
  },
  name: "ASpin",
  inheritAttrs: !1,
  props: Nn(bw(), {
    size: "default",
    spinning: !0,
    wrapperClassName: ""
  }),
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const {
      prefixCls: r,
      size: i,
      direction: a
    } = Pe("spin", e), [l, s] = hw(r), u = j(e.spinning && !ww(e.spinning, e.delay));
    let d;
    return Y([() => e.spinning, () => e.delay], () => {
      d == null || d.cancel(), d = pw(e.delay, () => {
        u.value = e.spinning;
      }), d == null || d();
    }, {
      immediate: !0,
      flush: "post"
    }), Me(() => {
      d == null || d.cancel();
    }), () => {
      var c, p;
      const {
        class: v
      } = n, g = yw(n, ["class"]), {
        tip: y = (c = o.tip) === null || c === void 0 ? void 0 : c.call(o)
      } = e, h = (p = o.default) === null || p === void 0 ? void 0 : p.call(o), b = {
        [s.value]: !0,
        [r.value]: !0,
        [`${r.value}-sm`]: i.value === "small",
        [`${r.value}-lg`]: i.value === "large",
        [`${r.value}-spinning`]: u.value,
        [`${r.value}-show-text`]: !!y,
        [`${r.value}-rtl`]: a.value === "rtl",
        [v]: !!v
      };
      function $(_) {
        const C = `${_}-dot`;
        let O = Yt(o, e, "indicator");
        return O === null ? null : (Array.isArray(O) && (O = O.length === 1 ? O[0] : O), Qe(O) ? mr(O, {
          class: C
        }) : co && Qe(co()) ? mr(co(), {
          class: C
        }) : f("span", {
          class: `${C} ${_}-dot-spin`
        }, [f("i", {
          class: `${_}-dot-item`
        }, null), f("i", {
          class: `${_}-dot-item`
        }, null), f("i", {
          class: `${_}-dot-item`
        }, null), f("i", {
          class: `${_}-dot-item`
        }, null)]));
      }
      const x = f("div", H(H({}, g), {}, {
        class: b,
        "aria-live": "polite",
        "aria-busy": u.value
      }), [$(r.value), y ? f("div", {
        class: `${r.value}-text`
      }, [y]) : null]);
      if (h && on(h).length) {
        const _ = {
          [`${r.value}-container`]: !0,
          [`${r.value}-blur`]: u.value
        };
        return l(f("div", {
          class: [`${r.value}-nested-loading`, e.wrapperClassName, s.value]
        }, [u.value && f("div", {
          key: "loading"
        }, [x]), f("div", {
          class: _,
          key: "container"
        }, [h])]));
      }
      return l(x);
    };
  }
});
Mt.setDefaultIndicator = Sw;
Mt.install = function(e) {
  return e.component(Mt.name, Mt), e;
};
const $w = /* @__PURE__ */ D({
  name: "PreviewLoading",
  setup() {
    const e = ze("preview-loading"), t = R(ju);
    return () => f(Mt, {
      class: e.b(),
      spinning: t.value
    }, null);
  }
});
var Cw = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
function Yl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      xw(e, r, n[r]);
    });
  }
  return e;
}
function xw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ni = function(t, n) {
  var o = Yl({}, t, n.attrs);
  return f(pe, Yl({}, o, {
    icon: Cw
  }), null);
};
Ni.displayName = "CloseOutlined";
Ni.inheritAttrs = !1;
var Ow = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
function ql(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Tw(e, r, n[r]);
    });
  }
  return e;
}
function Tw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Bi = function(t, n) {
  var o = ql({}, t, n.attrs);
  return f(pe, ql({}, o, {
    icon: Ow
  }), null);
};
Bi.displayName = "CheckCircleOutlined";
Bi.inheritAttrs = !1;
var Pw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
function Ql(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      _w(e, r, n[r]);
    });
  }
  return e;
}
function _w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var zi = function(t, n) {
  var o = Ql({}, t, n.attrs);
  return f(pe, Ql({}, o, {
    icon: Pw
  }), null);
};
zi.displayName = "ExclamationCircleOutlined";
zi.inheritAttrs = !1;
var Ew = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
function Zl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Iw(e, r, n[r]);
    });
  }
  return e;
}
function Iw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Hi = function(t, n) {
  var o = Zl({}, t, n.attrs);
  return f(pe, Zl({}, o, {
    icon: Ew
  }), null);
};
Hi.displayName = "InfoCircleOutlined";
Hi.inheritAttrs = !1;
var Mw = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" };
function Jl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Aw(e, r, n[r]);
    });
  }
  return e;
}
function Aw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ji = function(t, n) {
  var o = Jl({}, t, n.attrs);
  return f(pe, Jl({}, o, {
    icon: Mw
  }), null);
};
ji.displayName = "CloseCircleOutlined";
ji.inheritAttrs = !1;
var Dw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Rw(e, r, n[r]);
    });
  }
  return e;
}
function Rw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Li = function(t, n) {
  var o = es({}, t, n.attrs);
  return f(pe, es({}, o, {
    icon: Dw
  }), null);
};
Li.displayName = "CheckCircleFilled";
Li.inheritAttrs = !1;
var Nw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
function ts(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Bw(e, r, n[r]);
    });
  }
  return e;
}
function Bw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Fi = function(t, n) {
  var o = ts({}, t, n.attrs);
  return f(pe, ts({}, o, {
    icon: Nw
  }), null);
};
Fi.displayName = "ExclamationCircleFilled";
Fi.inheritAttrs = !1;
var zw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
function ns(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Hw(e, r, n[r]);
    });
  }
  return e;
}
function Hw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Vi = function(t, n) {
  var o = ns({}, t, n.attrs);
  return f(pe, ns({}, o, {
    icon: zw
  }), null);
};
Vi.displayName = "InfoCircleFilled";
Vi.inheritAttrs = !1;
var jw = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
function os(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Lw(e, r, n[r]);
    });
  }
  return e;
}
function Lw(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Wi = function(t, n) {
  var o = os({}, t, n.attrs);
  return f(pe, os({}, o, {
    icon: jw
  }), null);
};
Wi.displayName = "CloseCircleFilled";
Wi.inheritAttrs = !1;
const eo = (e, t, n, o, r) => ({
  backgroundColor: e,
  border: `${o.lineWidth}px ${o.lineType} ${t}`,
  [`${r}-icon`]: {
    color: n
  }
}), Fw = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n,
    marginXS: o,
    marginSM: r,
    fontSize: i,
    fontSizeLG: a,
    lineHeight: l,
    borderRadiusLG: s,
    motionEaseInOutCirc: u,
    alertIconSizeLG: d,
    colorText: c,
    paddingContentVerticalSM: p,
    alertPaddingHorizontal: v,
    paddingMD: g,
    paddingContentHorizontalLG: y
  } = e;
  return {
    [t]: m(m({}, ln(e)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: `${p}px ${v}px`,
      wordWrap: "break-word",
      borderRadius: s,
      [`&${t}-rtl`]: {
        direction: "rtl"
      },
      [`${t}-content`]: {
        flex: 1,
        minWidth: 0
      },
      [`${t}-icon`]: {
        marginInlineEnd: o,
        lineHeight: 0
      },
      "&-description": {
        display: "none",
        fontSize: i,
        lineHeight: l
      },
      "&-message": {
        color: c
      },
      [`&${t}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${n} ${u}, opacity ${n} ${u},
        padding-top ${n} ${u}, padding-bottom ${n} ${u},
        margin-bottom ${n} ${u}`
      },
      [`&${t}-motion-leave-active`]: {
        maxHeight: 0,
        marginBottom: "0 !important",
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      }
    }),
    [`${t}-with-description`]: {
      alignItems: "flex-start",
      paddingInline: y,
      paddingBlock: g,
      [`${t}-icon`]: {
        marginInlineEnd: r,
        fontSize: d,
        lineHeight: 0
      },
      [`${t}-message`]: {
        display: "block",
        marginBottom: o,
        color: c,
        fontSize: a
      },
      [`${t}-description`]: {
        display: "block"
      }
    },
    [`${t}-banner`]: {
      marginBottom: 0,
      border: "0 !important",
      borderRadius: 0
    }
  };
}, Vw = (e) => {
  const {
    componentCls: t,
    colorSuccess: n,
    colorSuccessBorder: o,
    colorSuccessBg: r,
    colorWarning: i,
    colorWarningBorder: a,
    colorWarningBg: l,
    colorError: s,
    colorErrorBorder: u,
    colorErrorBg: d,
    colorInfo: c,
    colorInfoBorder: p,
    colorInfoBg: v
  } = e;
  return {
    [t]: {
      "&-success": eo(r, o, n, e, t),
      "&-info": eo(v, p, c, e, t),
      "&-warning": eo(l, a, i, e, t),
      "&-error": m(m({}, eo(d, u, s, e, t)), {
        [`${t}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, Ww = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    motionDurationMid: o,
    marginXS: r,
    fontSizeIcon: i,
    colorIcon: a,
    colorIconHover: l
  } = e;
  return {
    [t]: {
      "&-action": {
        marginInlineStart: r
      },
      [`${t}-close-icon`]: {
        marginInlineStart: r,
        padding: 0,
        overflow: "hidden",
        fontSize: i,
        lineHeight: `${i}px`,
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        [`${n}-close`]: {
          color: a,
          transition: `color ${o}`,
          "&:hover": {
            color: l
          }
        }
      },
      "&-close-text": {
        color: a,
        transition: `color ${o}`,
        "&:hover": {
          color: l
        }
      }
    }
  };
}, kw = (e) => [Fw(e), Vw(e), Ww(e)], Kw = Ke("Alert", (e) => {
  const {
    fontSizeHeading3: t
  } = e, n = Te(e, {
    alertIconSizeLG: t,
    alertPaddingHorizontal: 12
    // Fixed value here.
  });
  return [kw(n)];
}), Xw = {
  success: Li,
  info: Vi,
  error: Wi,
  warning: Fi
}, Uw = {
  success: Bi,
  info: Hi,
  error: ji,
  warning: zi
}, Gw = Zt("success", "info", "warning", "error"), Yw = () => ({
  /**
   * Type of Alert styles, options: `success`, `info`, `warning`, `error`
   */
  type: M.oneOf(Gw),
  /** Whether Alert can be closed */
  closable: {
    type: Boolean,
    default: void 0
  },
  /** Close text to show */
  closeText: M.any,
  /** Content of Alert */
  message: M.any,
  /** Additional content of Alert */
  description: M.any,
  /** Trigger when animation ending of Alert */
  afterClose: Function,
  /** Whether to show icon */
  showIcon: {
    type: Boolean,
    default: void 0
  },
  prefixCls: String,
  banner: {
    type: Boolean,
    default: void 0
  },
  icon: M.any,
  closeIcon: M.any,
  onClose: Function
}), qw = D({
  compatConfig: {
    MODE: 3
  },
  name: "AAlert",
  inheritAttrs: !1,
  props: Yw(),
  setup(e, t) {
    let {
      slots: n,
      emit: o,
      attrs: r,
      expose: i
    } = t;
    const {
      prefixCls: a,
      direction: l
    } = Pe("alert", e), [s, u] = Kw(a), d = j(!1), c = j(!1), p = j(), v = (b) => {
      b.preventDefault();
      const $ = p.value;
      $.style.height = `${$.offsetHeight}px`, $.style.height = `${$.offsetHeight}px`, d.value = !0, o("close", b);
    }, g = () => {
      var b;
      d.value = !1, c.value = !0, (b = e.afterClose) === null || b === void 0 || b.call(e);
    }, y = w(() => {
      const {
        type: b
      } = e;
      return b !== void 0 ? b : e.banner ? "warning" : "info";
    });
    i({
      animationEnd: g
    });
    const h = j({});
    return () => {
      var b, $, x, _, C, O, S, P, E, T;
      const {
        banner: N,
        closeIcon: K = (b = n.closeIcon) === null || b === void 0 ? void 0 : b.call(n)
      } = e;
      let {
        closable: U,
        showIcon: q
      } = e;
      const I = ($ = e.closeText) !== null && $ !== void 0 ? $ : (x = n.closeText) === null || x === void 0 ? void 0 : x.call(n), B = (_ = e.description) !== null && _ !== void 0 ? _ : (C = n.description) === null || C === void 0 ? void 0 : C.call(n), V = (O = e.message) !== null && O !== void 0 ? O : (S = n.message) === null || S === void 0 ? void 0 : S.call(n), W = (P = e.icon) !== null && P !== void 0 ? P : (E = n.icon) === null || E === void 0 ? void 0 : E.call(n), Z = (T = n.action) === null || T === void 0 ? void 0 : T.call(n);
      q = N && q === void 0 ? !0 : q;
      const ne = (B ? Uw : Xw)[y.value] || null;
      I && (U = !0);
      const z = a.value, Q = ae(z, {
        [`${z}-${y.value}`]: !0,
        [`${z}-closing`]: d.value,
        [`${z}-with-description`]: !!B,
        [`${z}-no-icon`]: !q,
        [`${z}-banner`]: !!N,
        [`${z}-closable`]: U,
        [`${z}-rtl`]: l.value === "rtl",
        [u.value]: !0
      }), oe = U ? f("button", {
        type: "button",
        onClick: v,
        class: `${z}-close-icon`,
        tabindex: 0
      }, [I ? f("span", {
        class: `${z}-close-text`
      }, [I]) : K === void 0 ? f(Ni, null, null) : K]) : null, ve = W && (Gt(W) ? Ae(W, {
        class: `${z}-icon`
      }) : f("span", {
        class: `${z}-icon`
      }, [W])) || f(ne, {
        class: `${z}-icon`
      }, null), ue = gi(`${z}-motion`, {
        appear: !1,
        css: !0,
        onAfterLeave: g,
        onBeforeLeave: (A) => {
          A.style.maxHeight = `${A.offsetHeight}px`;
        },
        onLeave: (A) => {
          A.style.maxHeight = "0px";
        }
      });
      return s(c.value ? null : f(gt, ue, {
        default: () => [Eo(f("div", H(H({
          role: "alert"
        }, r), {}, {
          style: [r.style, h.value],
          class: [r.class, Q],
          "data-show": !d.value,
          ref: p
        }), [q ? ve : null, f("div", {
          class: `${z}-content`
        }, [V ? f("div", {
          class: `${z}-message`
        }, [V]) : null, B ? f("div", {
          class: `${z}-description`
        }, [B]) : null]), Z ? f("div", {
          class: `${z}-action`
        }, [Z]) : null, oe]), [[ei, !d.value]])]
      }));
    };
  }
}), Qw = Hn(qw), Zw = /* @__PURE__ */ D({
  name: "PreviewError",
  setup() {
    const e = ze("preview-error"), t = R(Hu), n = R(ko);
    return () => t.value ? f("div", {
      class: e.b()
    }, [f(Qw, {
      type: "error",
      banner: !0,
      message: t.value
    }, {
      action: () => f(ct, {
        size: "small",
        type: "link",
        onClick: () => n.value = !0
      }, {
        default: () => [ds("查看终端")]
      })
    })]) : null;
  }
}), Jw = /* @__PURE__ */ D({
  name: "PreviewBrowser",
  setup() {
    const e = F(null), t = R(Nt), n = F("");
    function o(c) {
      n.value = c;
    }
    const {
      loading: r,
      initializing: i
    } = fs({
      container: e,
      onError: o
    }), a = R(Rn), l = w(() => r.value || i.value);
    se(ju, l), se(Hu, n);
    const s = w(() => {
      const c = t.value.enableSSR;
      return typeof c == "string" ? c === "both" : !!c;
    }), u = () => [f(Lu, null, {
      default: () => [f(Wu, null, {
        default: () => [f("div", {
          style: {
            height: "100%"
          },
          ref: e
        }, null)]
      })]
    }), f($w, null, null), f(Zw, null, null)], d = () => {
      const c = [s.value && f(Q1, null, null), f(zu, null, null), f(Vu, null, null)];
      return a.value || c.push(f(rw, null, null)), c;
    };
    return () => f(ri, {
      compact: !0
    }, {
      left: () => f(uw, null, null),
      right: d,
      center: () => f(dw, null, null),
      default: u
    });
  }
});
function e2(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Qe(e);
}
const t2 = /* @__PURE__ */ D({
  name: "TerminalContent",
  setup() {
    const e = R(Zu), t = R(Ju), n = F([...e.values || []]), o = F(!1);
    return Y(() => e.values, (r, i) => {
      r.length === 0 && i.length !== 0 ? o.value = !0 : r.length !== 0 && (n.value = r, o.value = !1);
    }, {
      deep: !0
    }), () => {
      const r = () => n.value.length ? f(Mt, {
        spinning: o.value
      }, {
        default: () => [f(ud, {
          store: t.value
        }, {
          default: () => [f(dd, {
            data: n.value
          }, null)]
        })]
      }) : f("span", {
        style: "font-style:italic;line-height:24px;font-size:12px;margin-left:18px;"
      }, [ds("(The console has no information to display)")]);
      return f(gt, {
        name: "fade",
        mode: "out-in"
      }, e2(r) ? r : {
        default: () => [r]
      });
    };
  }
}), ki = /* @__PURE__ */ D({
  name: "TerminalBox",
  setup() {
    return () => f(ri, {
      class: "terminal-box",
      compact: !0
    }, {
      left: () => [f(Fu, {
        class: "title-icon"
      }, null), "Terminal"],
      default: () => f(t2, null, null)
    });
  }
}), n2 = /* @__PURE__ */ D({
  name: "TerminalDrawer",
  setup() {
    const e = R(ko);
    return () => {
      if (e.value)
        return f("div", {
          class: "terminal-drawer"
        }, [f(ki, null, null)]);
    };
  }
}), o2 = /* @__PURE__ */ D({
  name: "PreviewTerminal",
  setup() {
    const e = F(null);
    return fs({
      container: e,
      onError: () => {
      }
    }), () => [f("div", {
      ref: e
    }, null), f(ki, null, null)];
  }
}), r2 = /* @__PURE__ */ D({
  name: "PreviewBlock",
  setup() {
    const e = R(Nt), t = R(ps), n = () => [f(zu, null, null), f(Vu, null, null)];
    return () => {
      var o;
      return f(ri, {
        class: "preview-block",
        compact: ((o = e.value.style) == null ? void 0 : o.indexOf("compact")) > -1,
        showHeader: !1
      }, {
        extra: n,
        default: () => f(Lu, null, {
          default: () => [f(Wu, null, {
            default: () => {
              var r;
              return [(r = t.default) == null ? void 0 : r.call(t)];
            }
          })]
        })
      });
    };
  }
}), i2 = /* @__PURE__ */ D({
  name: "Preview",
  setup() {
    const e = F(!1), t = F(!1), n = R(vs);
    return se(ko, e), se(Ri, t), () => n.value === "terminal" ? f(o2, null, null) : n.value === "browser" ? [f(Jw, null, null), f(n2, null, null)] : f(r2, null, null);
  }
}), rs = "typescript", Zr = { light: "github-light", dark: "github-dark" }, a2 = ["typescript", "javascript", "vue"];
async function l2() {
  return await gd({
    themes: [Zr.light, Zr.dark],
    langs: a2
  });
}
async function s2() {
  const e = await l2(), t = [
    hd(),
    yd({
      classActiveLine: "has-focus",
      classActivePre: "has-focused-lines"
    }),
    bd(),
    wd(),
    {
      name: "vitepress:add-class",
      pre(a) {
        this.addClassToHast(a, "vp-code");
      }
    },
    {
      name: "vitepress:clean-up",
      pre(a) {
        delete a.properties.tabindex, delete a.properties.style;
      }
    }
  ], n = /-vue$/, o = /=(\d*)/, r = /:(no-)?line-numbers(=\d*)?$/, i = /\{\{.*?\}\}/g;
  return (a, l) => {
    const s = n.test(l) ? "" : "v-pre";
    l = l.replace(o, "").replace(r, "").replace(n, "").toLowerCase() || rs, l && !e.getLoadedLanguages().includes(l) && !md(l) && (l = rs);
    const u = [], d = /* @__PURE__ */ new Map(), c = (g) => s ? g : g.replace(i, (y) => {
      let h = d.get(y);
      return h || (h = fd(), d.set(y, h)), h;
    }), p = (g) => (d.forEach((y, h) => {
      g = g.replaceAll(y, h);
    }), g);
    a = c(a).trimEnd();
    const v = e.codeToHtml(a, {
      lang: l,
      transformers: [
        ...t,
        Sd(u),
        {
          name: "vitepress:v-pre",
          pre(g) {
            s && (g.properties["v-pre"] = "");
          }
        },
        {
          name: "vitepress:empty-line",
          code(g) {
            g.children.forEach((y) => {
              y.type === "element" && y.tagName === "span" && Array.isArray(y.properties.class) && y.properties.class.includes("line") && y.children.length === 0 && y.children.push({
                type: "element",
                tagName: "wbr",
                properties: {},
                children: []
              });
            });
          }
        }
      ],
      themes: Zr,
      defaultColor: !1
    });
    return p(v);
  };
}
const Ki = Symbol("EditorReady"), c2 = /* @__PURE__ */ D({
  name: "LightEditor",
  props: {
    value: String,
    lang: String,
    onChange: Function
  },
  setup(e, {
    expose: t
  }) {
    const {
      value: n
    } = ti(e), o = F("<pre></pre>"), r = F(null), i = F(n.value), a = R(Mo), l = R(Ki), s = (d) => {
      var p;
      const c = d.target.value;
      i.value = c, (p = e.onChange) == null || p.call(e, c), u(c);
    }, u = async (d) => {
      var c;
      r.value || (r.value = await s2()), o.value = (c = r.value) == null ? void 0 : c.call(r, d, e.lang || "ts"), !l.value && (l.value = !0);
    };
    return Y(() => a.value, (d) => {
      d === "editable" && u(n.value);
    }, {
      immediate: !0
    }), Y(() => n.value, (d) => {
      i.value = d, a.value === "editable" && u(d);
    }), () => f("div", {
      class: "code-editor"
    }, [l.value && [f("span", null, [f("div", {
      class: "preview language-vue vp-adaptive-theme",
      innerHTML: o.value
    }, null)]), f("textarea", {
      class: "editor",
      value: i.value,
      autocomplete: "off",
      autocorrect: "off",
      autocapitalize: "off",
      spellcheck: !1,
      onInput: s
    }, null)]]);
  }
}), u2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, d2 = /* @__PURE__ */ We("path", {
  fill: "#444",
  d: "M503.467 490.667 678.4 665.6l-59.733 59.733L384 490.667 618.667 256l59.733 59.733z"
}, null, -1), f2 = [
  d2
];
function p2(e, t) {
  return vt(), mt("svg", u2, [...f2]);
}
const v2 = { render: p2 }, m2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, g2 = /* @__PURE__ */ We("path", {
  fill: "#444",
  d: "M558.933 490.667 384 665.6l59.733 59.733L678.4 490.667 443.733 256 384 315.733z"
}, null, -1), h2 = [
  g2
];
function y2(e, t) {
  return vt(), mt("svg", m2, [...h2]);
}
const b2 = { render: y2 }, w2 = /* @__PURE__ */ D({
  name: "FileTabs",
  props: {
    files: Array,
    activeKey: String,
    onActiveChange: Function
  },
  setup(e) {
    const t = F(null), n = w(() => t.value ? t.value.scrollWidth > t.value.clientWidth : !1), o = () => {
      t.value && (t.value.scrollLeft -= 50);
    }, r = () => {
      t.value && (t.value.scrollLeft += 50);
    }, i = () => e.files.map((a) => f("div", {
      class: `tab${e.activeKey === a.identifier ? " active" : ""}`,
      onClick: () => e.onActiveChange(a.identifier)
    }, [a.pathFromEntry === "." ? `${a.filename}${a.extension}` : a.pathFromEntry]));
    return () => f("div", {
      class: "file-tabs"
    }, [n.value && f("div", {
      class: "tab action",
      onClick: o
    }, [f(v2, {
      class: "icon"
    }, null)]), f("div", {
      class: "content",
      ref: t
    }, [f(i, null, null)]), n.value && f("div", {
      class: "tab action",
      onClick: r
    }, [f(b2, {
      class: "icon"
    }, null)])]);
  }
}), S2 = /* @__PURE__ */ D({
  name: "CodePreviewer",
  props: {
    identifier: String
  },
  setup(e) {
    const {
      identifier: t
    } = ti(e), n = R(ps), o = R(ed), r = R(Mo), i = R(Ki), a = w(() => r.value === "editable" && !i.value), l = w(() => {
      if ((o == null ? void 0 : o.value) === "js") {
        const s = `codejs-${t == null ? void 0 : t.value}`;
        if (n[s])
          return s;
      }
      return `code-${t == null ? void 0 : t.value}`;
    });
    return () => f(Mt, {
      style: {
        fontSize: "inherit"
      },
      spinning: a.value
    }, {
      default: () => {
        var s;
        return [(s = n[l.value]) == null ? void 0 : s.call(n)];
      }
    });
  }
});
function $2() {
  const e = R(td), t = R(nd), n = R(od), o = R(rd), r = w(() => vd(e.value, {
    identifier: t.value
  }));
  return {
    files: e,
    activeFile: r,
    setActiveFile: n,
    setActiveFileCode: (a) => {
      o(t.value, a);
    }
  };
}
const C2 = /* @__PURE__ */ D({
  name: "CodePanel",
  setup(e, {
    slots: t
  }) {
    const {
      files: n,
      activeFile: o,
      setActiveFile: r,
      setActiveFileCode: i
    } = $2(), a = R(Mo), l = F(null), s = F(!1);
    se(Ki, s), Y(a, (d) => {
      d === "readPretty" && (s.value = !1);
    }, {
      immediate: !0
    });
    const u = w(() => !(a.value === "editable" && s.value));
    return () => {
      var d;
      return f("div", {
        class: `code-panel${a.value === "editable" ? " edit" : ""}`
      }, [n.value.length > 1 && f("div", {
        class: "header"
      }, [f(w2, {
        files: n.value,
        activeKey: o.value.identifier,
        onActiveChange: r
      }, null), f("div", {
        class: "extra"
      }, [(d = t.extra) == null ? void 0 : d.call(t)])]), f("div", {
        class: "main"
      }, [f(c2, {
        ref: l,
        value: o.value.code,
        lang: pd(o.value.extension),
        onChange: i
      }, null), u.value && f(S2, {
        identifier: o.value.identifier
      }, null)]), f("div", {
        class: "footer"
      }, null)]);
    };
  }
}), x2 = /* @__PURE__ */ D({
  name: "FullLayout",
  setup(e, {
    slots: t
  }) {
    const n = R(vs);
    return () => {
      var o, r, i;
      return f("div", {
        class: "full-wrapper"
      }, [f("div", {
        class: "header"
      }, [(o = t.header) == null ? void 0 : o.call(t), (r = t.meta) == null ? void 0 : r.call(t), (i = t.toolbar) == null ? void 0 : i.call(t)]), f("div", {
        class: "main"
      }, [f(Zi, {
        class: "default-theme"
      }, {
        default: () => [f(jn, null, {
          default: () => [f(Zi, {
            horizontal: !0,
            class: "default-theme"
          }, {
            default: () => [f(jn, null, {
              default: () => {
                var a;
                return [(a = t.preview) == null ? void 0 : a.call(t)];
              }
            }), n.value === "browser" && f(jn, null, {
              default: () => {
                var a;
                return [(a = t.terminal) == null ? void 0 : a.call(t)];
              }
            })]
          })]
        }), f(jn, null, {
          default: () => {
            var a;
            return [(a = t.code) == null ? void 0 : a.call(t)];
          }
        })]
      })])]);
    };
  }
}), O2 = /* @__PURE__ */ D({
  name: "BlockLayout",
  setup(e, {
    slots: t
  }) {
    const n = R(oi), o = ze("block-layout"), r = w(() => !n.value);
    return () => {
      var i, a, l, s, u;
      return f("div", {
        class: o.b()
      }, [(i = t.header) == null ? void 0 : i.call(t), f("div", {
        class: o.e()
      }, [(a = t.preview) == null ? void 0 : a.call(t), (l = t.meta) == null ? void 0 : l.call(t), f("div", {
        class: o.e("toolbar")
      }, [(s = t.toolbar) == null ? void 0 : s.call(t)]), r.value && ((u = t.code) == null ? void 0 : u.call(t))])]);
    };
  }
}), T2 = /* @__PURE__ */ D({
  setup(e, {
    slots: t
  }) {
    const n = R(Rn), o = () => n.value ? f(x2, null, {
      ...t
    }) : f(O2, null, {
      ...t
    });
    return () => f("div", {
      class: `layout ${n.value ?? "fullscreen"}`
    }, [f(o, null, null)]);
  }
}), P2 = /* @__PURE__ */ D({
  name: "Toolbar",
  setup(e, {
    slots: t
  }) {
    return () => {
      var n;
      return f("div", {
        class: "toolbar"
      }, [(n = t.default) == null ? void 0 : n.call(t)]);
    };
  }
}), _2 = /* @__PURE__ */ D({
  name: "CollapseAction",
  setup() {
    const e = R(id), t = R(oi), n = R(ms), o = w(() => e == null ? void 0 : e.isDark.value);
    return () => f(pt, {
      title: t.value ? "展开代码" : "收起代码"
    }, {
      default: () => [f("span", {
        class: "su-collapse-action su-action"
      }, [f("img", {
        alt: "expand code",
        src: o.value ? "https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg" : "https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg",
        class: t.value ? "show" : "hide",
        onClick: () => n(!t.value)
      }, null), f("img", {
        alt: "collapse code",
        src: o.value ? "https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg" : "https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",
        class: t.value ? "hide" : "show",
        onClick: () => n(!t.value)
      }, null)])]
    });
  }
}), E2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, I2 = /* @__PURE__ */ We("path", {
  fill: "#666",
  d: "M149.333 394.667c17.067 0 32-14.934 32-32V226.133l187.734 187.734c6.4 6.4 14.933 8.533 23.466 8.533s17.067-2.133 23.467-8.533c12.8-12.8 12.8-32 0-44.8L228.267 181.333h134.4c17.066 0 32-14.933 32-32s-14.934-32-32-32H149.333c-4.266 0-8.533 0-10.666 2.134-8.534 4.266-14.934 10.666-19.2 17.066-2.134 4.267-2.134 8.534-2.134 12.8v213.334c0 17.066 14.934 32 32 32m725.334 234.666c-17.067 0-32 14.934-32 32v136.534L642.133 597.333c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l200.534 200.534H661.333c-17.066 0-32 14.933-32 32s14.934 32 32 32h213.334c4.266 0 8.533 0 10.666-2.134 8.534-4.266 14.934-8.533 17.067-17.066 2.133-4.267 2.133-8.534 2.133-10.667V661.333c2.134-17.066-12.8-32-29.866-32m-492.8-34.133L181.333 795.733v-134.4c0-17.066-14.933-32-32-32s-32 14.934-32 32v213.334c0 4.266 0 8.533 2.134 10.666 4.266 8.534 8.533 14.934 17.066 17.067 4.267 2.133 8.534 2.133 10.667 2.133h213.333c17.067 0 32-14.933 32-32s-14.933-32-32-32H224L424.533 640c12.8-12.8 12.8-32 0-44.8s-29.866-10.667-42.666 0m522.666-456.533q0-3.201 0 0c-4.266-8.534-10.666-14.934-17.066-17.067-4.267-2.133-8.534-2.133-10.667-2.133H661.333c-17.066 0-32 14.933-32 32s14.934 32 32 32h136.534L610.133 371.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.934 8.533 23.467 8.533s17.067-2.133 23.467-8.533L844.8 228.267v134.4c0 17.066 14.933 32 32 32s32-14.934 32-32V149.333c-2.133-4.266-2.133-8.533-4.267-10.666"
}, null, -1), M2 = [
  I2
];
function A2(e, t) {
  return vt(), mt("svg", E2, [...M2]);
}
const D2 = { render: A2 }, R2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, N2 = /* @__PURE__ */ We("path", {
  fill: "#666",
  d: "M313.6 358.4H177.067c-17.067 0-32 14.933-32 32s14.933 32 32 32H390.4c4.267 0 8.533 0 10.667-2.133C409.6 416 416 411.733 418.133 403.2c2.134-4.267 2.134-8.533 2.134-10.667V179.2c0-17.067-14.934-32-32-32s-32 14.933-32 32v136.533L172.8 125.867c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8zm381.867 292.267H832c17.067 0 32-14.934 32-32s-14.933-32-32-32H618.667c-4.267 0-8.534 0-10.667 2.133-8.533 4.267-14.933 8.533-17.067 17.067-2.133 4.266-2.133 8.533-2.133 10.666v213.334c0 17.066 14.933 32 32 32s32-14.934 32-32V693.333l200.533 200.534c6.4 6.4 14.934 8.533 23.467 8.533s17.067-2.133 23.467-8.533c12.8-12.8 12.8-32 0-44.8zm-260.267-44.8c-4.267-8.534-8.533-14.934-17.067-17.067-4.266-2.133-8.533-2.133-10.666-2.133H192c-17.067 0-32 14.933-32 32s14.933 32 32 32h136.533L128 851.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533l200.534-200.533V832c0 17.067 14.933 32 32 32s32-14.933 32-32V618.667c-2.134-4.267-2.134-8.534-4.267-12.8M603.733 403.2c4.267 8.533 8.534 14.933 17.067 17.067 4.267 2.133 8.533 2.133 10.667 2.133H844.8c17.067 0 32-14.933 32-32s-14.933-32-32-32H708.267L896 170.667c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0L663.467 313.6V177.067c0-17.067-14.934-32-32-32s-32 14.933-32 32V390.4c2.133 4.267 2.133 8.533 4.266 12.8"
}, null, -1), B2 = [
  N2
];
function z2(e, t) {
  return vt(), mt("svg", R2, [...B2]);
}
const H2 = { render: z2 }, j2 = /* @__PURE__ */ D({
  name: "FullscreenAction",
  setup() {
    const e = R(Rn), t = R(ad);
    return () => e.value ? f(pt, {
      title: "退出全屏"
    }, {
      default: () => [f("span", {
        class: "su-fullscreen-action su-action",
        onClick: () => t == null ? void 0 : t(!1)
      }, [f(H2, null, null)])]
    }) : f(pt, {
      title: "全屏查看"
    }, {
      default: () => [f("span", {
        class: "su-fullscreen-action su-action",
        onClick: () => t == null ? void 0 : t(!0)
      }, [f(D2, null, null)])]
    });
  }
});
var L2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" } }] }, name: "edit", theme: "filled" };
function is(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      F2(e, r, n[r]);
    });
  }
  return e;
}
function F2(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Xi = function(t, n) {
  var o = is({}, t, n.attrs);
  return f(pe, is({}, o, {
    icon: L2
  }), null);
};
Xi.displayName = "EditFilled";
Xi.inheritAttrs = !1;
var V2 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z" } }] }, name: "undo", theme: "outlined" };
function as(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      W2(e, r, n[r]);
    });
  }
  return e;
}
function W2(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ui = function(t, n) {
  var o = as({}, t, n.attrs);
  return f(pe, as({}, o, {
    icon: V2
  }), null);
};
Ui.displayName = "UndoOutlined";
Ui.inheritAttrs = !1;
const k2 = /* @__PURE__ */ D({
  name: "EditAction",
  setup() {
    const e = R(Mo), t = R(oi), n = R(ms), o = R(ld), r = () => {
      t.value && (n == null || n(!1)), o == null || o("editable");
    }, i = () => {
      o == null || o("readPretty");
    };
    return () => e.value === "readPretty" ? f(pt, {
      title: "编辑"
    }, {
      default: () => [f(Xi, {
        class: "su-action",
        onClick: r
      }, null)]
    }) : f(pt, {
      title: "取消"
    }, {
      default: () => [f(Ui, {
        class: "su-action",
        onClick: i
      }, null)]
    });
  }
}), eS = /* @__PURE__ */ D({
  name: "DemoBox",
  setup(e, {
    slots: t
  }) {
    const n = F(null);
    sd(n);
    const o = () => f(P2, null, {
      default: () => [f(_2, null, null), f(j2, null, null), f(k2, null, null)]
    });
    return () => f(T2, {
      ref: n
    }, {
      header: t.title,
      meta: t.description,
      toolbar: o,
      code: () => f(C2, null, null),
      preview: () => f(i2, null, null),
      terminal: () => f(ki, null, null)
    });
  }
});
export {
  eS as DemoBox
};
