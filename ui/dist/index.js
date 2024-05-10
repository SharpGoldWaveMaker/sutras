import { defineComponent as D, inject as H, computed as w, createVNode as f, openBlock as yt, createElementBlock as bt, createElementVNode as qe, Fragment as Fe, isVNode as nt, Comment as nf, Text as Fs, Transition as wt, withDirectives as Go, resolveDirective as of, ref as k, shallowRef as j, watch as G, onMounted as Be, onBeforeUnmount as De, cloneVNode as kr, nextTick as Xe, onUpdated as qn, onUnmounted as Yo, toRef as Vr, withModifiers as xa, vShow as Ei, provide as ie, onBeforeMount as ks, Teleport as Mi, watchEffect as je, getCurrentInstance as kt, unref as Et, triggerRef as rf, h as Wr, render as Io, reactive as ot, toRaw as Oa, toRefs as Ai, mergeProps as af, createTextVNode as Vs, TransitionGroup as Ws } from "vue";
import { ReplMetaKey as Vt, DeviceTypeInjectKey as Di, DeviceTypeChangeInjectKey as lf, ReplFullscreenKey as Qn, SSRModeInjectKey as sf, SSRModeChangeInjectKey as cf, useRepl as Ks, ConsoleAPIInjectKey as uf, ConsoleLinkStoreInjectKey as df, ReplCodePreviewRendersKey as Xs, PreviewModeInjectKey as Us, ReplPattenKey as qo, ReplCodeShowLangKey as ff, ReplFilesInjectKey as Gs, ReplActiveFileKey as Ys, ReplActiveFileChangeKey as pf, ReplSetSourceInjectKey as vf, ReplCollapseKey as Ri, ReplPageDataInjectKey as mf, ReplCollapseChangeKey as qs, ReplFullscreenChangeKey as gf, ReplPatternChangeKey as hf, useDemoProvider as yf } from "@sgwm-sutras/hooks";
import { useNamespace as ke, classNames as yn } from "@sgwm-sutras/style";
import { useElementSize as bf, useClipboard as wf } from "@vueuse/core";
import { ConsoleProvider as Cf, Console as $f } from "@sgwm-sutras/console";
import { uniqueId as Sf, langFromExtension as xf, find as Of } from "@sgwm-sutras/shared";
import { isSpecialLang as Pf, getHighlighter as _f } from "shiki";
import { transformerNotationDiff as Tf, transformerNotationFocus as If, transformerNotationHighlight as Ef, transformerNotationErrorLevel as Mf, transformerCompactLineOptions as Af } from "@shikijs/transformers";
import { Splitpanes as Pa, Pane as no } from "splitpanes";
const Ni = /* @__PURE__ */ D({
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
    const n = ke("preview-layout"), o = H(Vt), r = yn(n.b(), {
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
}), Df = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.2em",
  height: "1.2em",
  viewBox: "0 0 32 32"
}, Rf = /* @__PURE__ */ qe("path", {
  fill: "currentColor",
  d: "M10 30H4a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M4 16v12h6V16z"
}, null, -1), Nf = /* @__PURE__ */ qe("path", {
  fill: "currentColor",
  d: "M28 4H6a2 2 0 0 0-2 2v6h2V6h22v14H14v2h2v4h-2v2h9v-2h-5v-4h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
}, null, -1), Bf = [
  Rf,
  Nf
];
function Hf(e, t) {
  return yt(), bt("svg", Df, [...Bf]);
}
const zf = { render: Hf }, jf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.2em",
  height: "1.2em",
  viewBox: "0 0 32 32"
}, Lf = /* @__PURE__ */ qe("path", {
  fill: "currentColor",
  d: "M16 22 6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z"
}, null, -1), Ff = [
  Lf
];
function kf(e, t) {
  return yt(), bt("svg", jf, [...Ff]);
}
const Vf = { render: kf };
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
function Bn(e) {
  "@babel/helpers - typeof";
  return Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bn(e);
}
function Wf(e, t) {
  if (Bn(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (Bn(o) != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Kf(e) {
  var t = Wf(e, "string");
  return Bn(t) == "symbol" ? t : t + "";
}
function Xf(e, t, n) {
  return t = Kf(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function _a(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _a(Object(n), !0).forEach(function(o) {
      Xf(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _a(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Uf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
  }
}
function Qs(e, t, n) {
  return n && Uf(e, n), e;
}
function bo() {
  return (bo = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }).apply(this, arguments);
}
function Zs(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Js(e, t) {
  if (e == null)
    return {};
  var n, o, r = {}, i = Object.keys(e);
  for (o = 0; o < i.length; o++)
    t.indexOf(n = i[o]) >= 0 || (r[n] = e[n]);
  return r;
}
function Ta(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var ec = Object.prototype, tc = ec.toString, Gf = ec.hasOwnProperty, nc = /^\s*function (\w+)/;
function Ia(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var o = n.toString().match(nc);
    return o ? o[1] : "";
  }
  return "";
}
var zt = function(e) {
  var t, n;
  return Ta(e) !== !1 && typeof (t = e.constructor) == "function" && Ta(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, oc = function(e) {
  return e;
}, Oe = oc;
if (process.env.NODE_ENV !== "production") {
  var Yf = typeof console < "u";
  Oe = Yf ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : oc;
}
var Hn = function(e, t) {
  return Gf.call(e, t);
}, qf = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, ln = Array.isArray || function(e) {
  return tc.call(e) === "[object Array]";
}, sn = function(e) {
  return tc.call(e) === "[object Function]";
}, Eo = function(e) {
  return zt(e) && Hn(e, "_vueTypes_name");
}, rc = function(e) {
  return zt(e) && (Hn(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return Hn(e, t);
  }));
};
function Bi(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function Wt(e, t, n) {
  var o, r = !0, i = "";
  o = zt(e) ? e : { type: e };
  var a = Eo(o) ? o._vueTypes_name + " - " : "";
  if (rc(o) && o.type !== null) {
    if (o.type === void 0 || o.type === !0 || !o.required && t === void 0)
      return r;
    ln(o.type) ? (r = o.type.some(function(c) {
      return Wt(c, t) === !0;
    }), i = o.type.map(function(c) {
      return Ia(c);
    }).join(" or ")) : r = (i = Ia(o)) === "Array" ? ln(t) : i === "Object" ? zt(t) : i === "String" || i === "Number" || i === "Boolean" || i === "Function" ? function(c) {
      if (c == null)
        return "";
      var p = c.constructor.toString().match(nc);
      return p ? p[1] : "";
    }(t) === i : t instanceof o.type;
  }
  if (!r) {
    var l = a + 'value "' + t + '" should be of type "' + i + '"';
    return l;
  }
  if (Hn(o, "validator") && sn(o.validator)) {
    var s = Oe, u = [];
    if (Oe = function(c) {
      u.push(c);
    }, r = o.validator(t), Oe = s, !r) {
      var d = (u.length > 1 ? "* " : "") + u.join(`
* `);
      return u.length = 0, d;
    }
  }
  return r;
}
function Ie(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(r) {
    return r !== void 0 || this.default ? sn(r) || Wt(this, r) === !0 ? (this.default = ln(r) ? function() {
      return [].concat(r);
    } : zt(r) ? function() {
      return Object.assign({}, r);
    } : r, this) : (Oe(this._vueTypes_name + ' - invalid default value: "' + r + '"'), this) : this;
  } } }), o = n.validator;
  return sn(o) && (n.validator = Bi(o, n)), n;
}
function Ue(e, t) {
  var n = Ie(e, t);
  return Object.defineProperty(n, "validate", { value: function(o) {
    return sn(this.validator) && Oe(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = Bi(o, this), this;
  } });
}
function Ea(e, t, n) {
  var o, r, i = (o = t, r = {}, Object.getOwnPropertyNames(o).forEach(function(c) {
    r[c] = Object.getOwnPropertyDescriptor(o, c);
  }), Object.defineProperties({}, r));
  if (i._vueTypes_name = e, !zt(n))
    return i;
  var a, l, s = n.validator, u = Js(n, ["validator"]);
  if (sn(s)) {
    var d = i.validator;
    d && (d = (l = (a = d).__original) !== null && l !== void 0 ? l : a), i.validator = Bi(d ? function(c) {
      return d.call(this, c) && s.call(this, c);
    } : s, i);
  }
  return Object.assign(i, u);
}
function Qo(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var Qf = function() {
  return Ue("any", {});
}, Zf = function() {
  return Ue("function", { type: Function });
}, Jf = function() {
  return Ue("boolean", { type: Boolean });
}, ep = function() {
  return Ue("string", { type: String });
}, tp = function() {
  return Ue("number", { type: Number });
}, np = function() {
  return Ue("array", { type: Array });
}, op = function() {
  return Ue("object", { type: Object });
}, rp = function() {
  return Ie("integer", { type: Number, validator: function(e) {
    return qf(e);
  } });
}, ip = function() {
  return Ie("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function ap(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return Ie(e.name || "<<anonymous function>>", { validator: function(n) {
    var o = e(n);
    return o || Oe(this._vueTypes_name + " - " + t), o;
  } });
}
function lp(e) {
  if (!ln(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(o, r) {
    if (r != null) {
      var i = r.constructor;
      o.indexOf(i) === -1 && o.push(i);
    }
    return o;
  }, []);
  return Ie("oneOf", { type: n.length > 0 ? n : void 0, validator: function(o) {
    var r = e.indexOf(o) !== -1;
    return r || Oe(t), r;
  } });
}
function sp(e) {
  if (!ln(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], o = 0; o < e.length; o += 1) {
    var r = e[o];
    if (rc(r)) {
      if (Eo(r) && r._vueTypes_name === "oneOf") {
        n = n.concat(r.type);
        continue;
      }
      if (sn(r.validator) && (t = !0), r.type !== !0 && r.type) {
        n = n.concat(r.type);
        continue;
      }
    }
    n.push(r);
  }
  return n = n.filter(function(i, a) {
    return n.indexOf(i) === a;
  }), Ie("oneOfType", t ? { type: n, validator: function(i) {
    var a = [], l = e.some(function(s) {
      var u = Wt(Eo(s) && s._vueTypes_name === "oneOf" ? s.type || null : s, i);
      return typeof u == "string" && a.push(u), u === !0;
    });
    return l || Oe("oneOfType - provided value does not match any of the " + a.length + ` passed-in validators:
` + Qo(a.join(`
`))), l;
  } } : { type: n });
}
function cp(e) {
  return Ie("arrayOf", { type: Array, validator: function(t) {
    var n, o = t.every(function(r) {
      return (n = Wt(e, r)) === !0;
    });
    return o || Oe(`arrayOf - value validation error:
` + Qo(n)), o;
  } });
}
function up(e) {
  return Ie("instanceOf", { type: e });
}
function dp(e) {
  return Ie("objectOf", { type: Object, validator: function(t) {
    var n, o = Object.keys(t).every(function(r) {
      return (n = Wt(e, t[r])) === !0;
    });
    return o || Oe(`objectOf - value validation error:
` + Qo(n)), o;
  } });
}
function fp(e) {
  var t = Object.keys(e), n = t.filter(function(r) {
    var i;
    return !!(!((i = e[r]) === null || i === void 0) && i.required);
  }), o = Ie("shape", { type: Object, validator: function(r) {
    var i = this;
    if (!zt(r))
      return !1;
    var a = Object.keys(r);
    if (n.length > 0 && n.some(function(s) {
      return a.indexOf(s) === -1;
    })) {
      var l = n.filter(function(s) {
        return a.indexOf(s) === -1;
      });
      return Oe(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
    }
    return a.every(function(s) {
      if (t.indexOf(s) === -1)
        return i._vueTypes_isLoose === !0 || (Oe('shape - shape definition does not include a "' + s + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var u = Wt(e[s], r[s]);
      return typeof u == "string" && Oe('shape - "' + s + `" property validation error:
 ` + Qo(u)), u === !0;
    });
  } });
  return Object.defineProperty(o, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(o, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), o;
}
var We = function() {
  function e() {
  }
  return e.extend = function(t) {
    var n = this;
    if (ln(t))
      return t.forEach(function(c) {
        return n.extend(c);
      }), this;
    var o = t.name, r = t.validate, i = r !== void 0 && r, a = t.getter, l = a !== void 0 && a, s = Js(t, ["name", "validate", "getter"]);
    if (Hn(this, o))
      throw new TypeError('[VueTypes error]: Type "' + o + '" already defined');
    var u, d = s.type;
    return Eo(d) ? (delete s.type, Object.defineProperty(this, o, l ? { get: function() {
      return Ea(o, d, s);
    } } : { value: function() {
      var c, p = Ea(o, d, s);
      return p.validator && (p.validator = (c = p.validator).bind.apply(c, [p].concat([].slice.call(arguments)))), p;
    } })) : (u = l ? { get: function() {
      var c = Object.assign({}, s);
      return i ? Ue(o, c) : Ie(o, c);
    }, enumerable: !0 } : { value: function() {
      var c, p, v = Object.assign({}, s);
      return c = i ? Ue(o, v) : Ie(o, v), v.validator && (c.validator = (p = v.validator).bind.apply(p, [c].concat([].slice.call(arguments)))), c;
    }, enumerable: !0 }, Object.defineProperty(this, o, u));
  }, Qs(e, null, [{ key: "any", get: function() {
    return Qf();
  } }, { key: "func", get: function() {
    return Zf().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return Jf().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return ep().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return tp().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return np().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return op().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return rp().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return ip();
  } }]), e;
}();
function ic(e) {
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
    return Zs(o, n), Qs(o, null, [{ key: "sensibleDefaults", get: function() {
      return bo({}, this.defaults);
    }, set: function(r) {
      this.defaults = r !== !1 ? bo({}, r !== !0 ? r : e) : {};
    } }]), o;
  }(We)).defaults = bo({}, e), t;
}
We.defaults = {}, We.custom = ap, We.oneOf = lp, We.instanceOf = up, We.oneOfType = sp, We.arrayOf = cp, We.objectOf = dp, We.shape = fp, We.utils = { validate: function(e, t) {
  return Wt(t, e) === !0;
}, toType: function(e, t, n) {
  return n === void 0 && (n = !1), n ? Ue(e, t) : Ie(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return Zs(t, e), t;
})(ic());
const A = ic({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
A.extend([{
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
function pp() {
  return "";
}
function vp(e) {
  return e ? e.ownerDocument : window.document;
}
function ac() {
}
const mp = () => ({
  action: A.oneOfType([A.string, A.arrayOf(A.string)]).def([]),
  showAction: A.any.def([]),
  hideAction: A.any.def([]),
  getPopupClassNameFromAlign: A.any.def(pp),
  onPopupVisibleChange: Function,
  afterPopupVisibleChange: A.func.def(ac),
  popup: A.any,
  popupStyle: {
    type: Object,
    default: void 0
  },
  prefixCls: A.string.def("rc-trigger-popup"),
  popupClassName: A.string.def(""),
  popupPlacement: String,
  builtinPlacements: A.object,
  popupTransitionName: String,
  popupAnimation: A.any,
  mouseEnterDelay: A.number.def(0),
  mouseLeaveDelay: A.number.def(0.1),
  zIndex: Number,
  focusDelay: A.number.def(0),
  blurDelay: A.number.def(0.15),
  getPopupContainer: Function,
  getDocument: A.func.def(vp),
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
  popupAlign: A.object.def(() => ({})),
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
function _t(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
let lc = (e) => setTimeout(e, 16), sc = (e) => clearTimeout(e);
typeof window < "u" && "requestAnimationFrame" in window && (lc = (e) => window.requestAnimationFrame(e), sc = (e) => window.cancelAnimationFrame(e));
let Ma = 0;
const Hi = /* @__PURE__ */ new Map();
function cc(e) {
  Hi.delete(e);
}
function we(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Ma += 1;
  const n = Ma;
  function o(r) {
    if (r === 0)
      cc(n), e();
    else {
      const i = lc(() => {
        o(r - 1);
      });
      Hi.set(n, i);
    }
  }
  return o(t), n;
}
we.cancel = (e) => {
  const t = Hi.get(e);
  return cc(t), sc(t);
};
const gp = (e) => typeof e == "function", hp = Array.isArray, yp = (e) => typeof e == "string", bp = (e) => e !== null && typeof e == "object", wp = /^on[^a-z]/, Cp = (e) => wp.test(e), uc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, $p = /-(\w)/g, dc = uc((e) => e.replace($p, (t, n) => n ? n.toUpperCase() : "")), Sp = /\B([A-Z])/g, xp = uc((e) => e.replace(Sp, "-$1").toLowerCase()), Op = Object.prototype.hasOwnProperty, Aa = (e, t) => Op.call(e, t);
function Pp(e, t, n, o) {
  const r = e[n];
  if (r != null) {
    const i = Aa(r, "default");
    if (i && o === void 0) {
      const a = r.default;
      o = r.type !== Function && gp(a) ? a() : a;
    }
    r.type === Boolean && (!Aa(t, n) && !i ? o = !1 : o === "" && (o = !0));
  }
  return o;
}
function tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e ?? n;
}
function _p(e) {
  let t;
  const n = new Promise((r) => {
    t = e(() => {
      r(!0);
    });
  }), o = () => {
    t == null || t();
  };
  return o.then = (r, i) => n.then(r, i), o.promise = n, o;
}
function Q() {
  const e = [];
  for (let t = 0; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (yp(n))
        e.push(n);
      else if (hp(n))
        for (let o = 0; o < n.length; o++) {
          const r = Q(n[o]);
          r && e.push(r);
        }
      else if (bp(n))
        for (const o in n)
          n[o] && e.push(o);
    }
  }
  return e.join(" ");
}
const Kr = (e) => e != null && e !== "", Zn = (e, t) => {
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
}, Tp = (e) => {
  const t = Object.keys(e), n = {}, o = {}, r = {};
  for (let i = 0, a = t.length; i < a; i++) {
    const l = t[i];
    Cp(l) ? (n[l[2].toLowerCase() + l.slice(3)] = e[l], o[l] = e[l]) : r[l] = e[l];
  }
  return {
    onEvents: o,
    events: n,
    extraAttrs: r
  };
}, Ip = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const n = {}, o = /;(?![^(]*\))/g, r = /:(.+)/;
  return typeof e == "object" ? e : (e.split(o).forEach(function(i) {
    if (i) {
      const a = i.split(r);
      if (a.length > 1) {
        const l = t ? dc(a[0].trim()) : a[0].trim();
        n[l] = a[1].trim();
      }
    }
  }), n);
}, Ep = (e, t) => e[t] !== void 0, fc = Symbol("skipFlatten"), Te = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = Array.isArray(e) ? e : [e], o = [];
  return n.forEach((r) => {
    Array.isArray(r) ? o.push(...Te(r, t)) : r && r.type === Fe ? r.key === fc ? o.push(r) : o.push(...Te(r.children, t)) : r && nt(r) ? t && !pc(r) ? o.push(r) : t || o.push(r) : Kr(r) && o.push(r);
  }), o;
}, Mp = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (nt(e))
    return e.type === Fe ? t === "default" ? Te(e.children) : [] : e.children && e.children[t] ? Te(e.children[t](n)) : [];
  {
    const o = e.$slots[t] && e.$slots[t](n);
    return Te(o);
  }
}, ut = (e) => {
  var t;
  let n = ((t = e == null ? void 0 : e.vnode) === null || t === void 0 ? void 0 : t.el) || e && (e.$el || e);
  for (; n && !n.tagName; )
    n = n.nextSibling;
  return n;
}, Ap = (e) => {
  const t = {};
  if (e.$ && e.$.vnode) {
    const n = e.$.vnode.props || {};
    Object.keys(e.$props).forEach((o) => {
      const r = e.$props[o], i = xp(o);
      (r !== void 0 || i in n) && (t[o] = r);
    });
  } else if (nt(e) && typeof e.type == "object") {
    const n = e.props || {}, o = {};
    Object.keys(n).forEach((i) => {
      o[dc(i)] = n[i];
    });
    const r = e.type.props || {};
    Object.keys(r).forEach((i) => {
      const a = Pp(r, o, i, o[i]);
      (a !== void 0 || i in o) && (t[i] = a);
    });
  }
  return t;
}, Dp = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, r;
  if (e.$) {
    const i = e[t];
    if (i !== void 0)
      return typeof i == "function" && o ? i(n) : i;
    r = e.$slots[t], r = o && r ? r(n) : r;
  } else if (nt(e)) {
    const i = e.props && e.props[t];
    if (i !== void 0 && e.props !== null)
      return typeof i == "function" && o ? i(n) : i;
    e.type === Fe ? r = e.children : e.children && e.children[t] && (r = e.children[t], r = o && r ? r(n) : r);
  }
  return Array.isArray(r) && (r = Te(r), r = r.length === 1 ? r[0] : r, r = r.length === 0 ? void 0 : r), r;
};
function Da() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = {};
  return e.$ ? n = m(m({}, n), e.$attrs) : n = m(m({}, n), e.props), Tp(n)[t ? "onEvents" : "events"];
}
function Rp(e, t) {
  let o = ((nt(e) ? e.props : e.$attrs) || {}).style || {};
  return typeof o == "string" && (o = Ip(o, t)), o;
}
function Np(e) {
  return e.length === 1 && e[0].type === Fe;
}
function pc(e) {
  return e && (e.type === nf || e.type === Fe && e.children.length === 0 || e.type === Fs && e.children.trim() === "");
}
function bn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const t = [];
  return e.forEach((n) => {
    Array.isArray(n) ? t.push(...n) : (n == null ? void 0 : n.type) === Fe ? t.push(...bn(n.children)) : t.push(n);
  }), t.filter((n) => !pc(n));
}
function cn(e) {
  return Array.isArray(e) && e.length === 1 && (e = e[0]), e && e.__v_isVNode && typeof e.type != "symbol";
}
function un(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
  var o, r;
  return (o = t[n]) !== null && o !== void 0 ? o : (r = e[n]) === null || r === void 0 ? void 0 : r.call(e);
}
let Mt = !1;
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Mt = !0;
    }
  });
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
} catch {
}
function In(e, t, n, o) {
  if (e && e.addEventListener) {
    let r = o;
    r === void 0 && Mt && (t === "touchstart" || t === "touchmove" || t === "wheel") && (r = {
      passive: !1
    }), e.addEventListener(t, n, r);
  }
  return {
    remove: () => {
      e && e.removeEventListener && e.removeEventListener(t, n);
    }
  };
}
const zi = {
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
}, Bp = m(m({}, zi), {
  mobile: {
    type: Object
  }
}), Hp = m(m({}, zi), {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
function ji(e) {
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
function vc(e) {
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
  return (a || i) && (l = ji({
    prefixCls: t,
    transitionName: a,
    animation: i
  })), f(wt, R({
    appear: !0
  }, l), {
    default: () => [Go(f("div", {
      style: {
        zIndex: o
      },
      class: `${t}-mask`
    }, null), [[of("if"), n]])]
  });
}
vc.displayName = "Mask";
const zp = D({
  compatConfig: {
    MODE: 3
  },
  name: "MobilePopupInner",
  inheritAttrs: !1,
  props: Bp,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      slots: o
    } = t;
    const r = k();
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
      let g = Te((i = o.default) === null || i === void 0 ? void 0 : i.call(o));
      g.length > 1 && (g = f("div", {
        class: `${s}-content`
      }, [g])), p && (g = p(g));
      const h = Q(s, u);
      return f(wt, R({
        ref: r
      }, c), {
        default: () => [l ? f("div", {
          class: h,
          style: v
        }, [g]) : null]
      });
    };
  }
});
var jp = function(e, t, n, o) {
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
const Ra = ["measure", "align", null, "motion"], Lp = (e, t) => {
  const n = j(null), o = j(), r = j(!1);
  function i(s) {
    r.value || (n.value = s);
  }
  function a() {
    we.cancel(o.value);
  }
  function l(s) {
    a(), o.value = we(() => {
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
  return G(e, () => {
    i("measure");
  }, {
    immediate: !0,
    flush: "post"
  }), Be(() => {
    G(n, () => {
      switch (n.value) {
        case "measure":
          t();
          break;
      }
      n.value && (o.value = we(() => jp(void 0, void 0, void 0, function* () {
        const s = Ra.indexOf(n.value), u = Ra[s + 1];
        u && s !== -1 && i(u);
      })));
    }, {
      immediate: !0,
      flush: "post"
    });
  }), De(() => {
    r.value = !0, a();
  }), [n, l];
}, Fp = (e) => {
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
function Na(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Ba(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Na(Object(n), !0).forEach(function(o) {
      kp(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Na(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Xr(e) {
  "@babel/helpers - typeof";
  return Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xr(e);
}
function kp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var xn, Vp = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function Mo() {
  if (xn !== void 0)
    return xn;
  xn = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var n in Vp)
    n + t in e && (xn = n);
  return xn;
}
function mc() {
  return Mo() ? "".concat(Mo(), "TransitionProperty") : "transitionProperty";
}
function Zo() {
  return Mo() ? "".concat(Mo(), "Transform") : "transform";
}
function Ha(e, t) {
  var n = mc();
  n && (e.style[n] = t, n !== "transitionProperty" && (e.style.transitionProperty = t));
}
function yr(e, t) {
  var n = Zo();
  n && (e.style[n] = t, n !== "transform" && (e.style.transform = t));
}
function Wp(e) {
  return e.style.transitionProperty || e.style[mc()];
}
function Kp(e) {
  var t = window.getComputedStyle(e, null), n = t.getPropertyValue("transform") || t.getPropertyValue(Zo());
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
var Xp = /matrix\((.*)\)/, Up = /matrix3d\((.*)\)/;
function Gp(e, t) {
  var n = window.getComputedStyle(e, null), o = n.getPropertyValue("transform") || n.getPropertyValue(Zo());
  if (o && o !== "none") {
    var r, i = o.match(Xp);
    if (i)
      i = i[1], r = i.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), r[4] = t.x, r[5] = t.y, yr(e, "matrix(".concat(r.join(","), ")"));
    else {
      var a = o.match(Up)[1];
      r = a.split(",").map(function(l) {
        return parseFloat(l, 10);
      }), r[12] = t.x, r[13] = t.y, yr(e, "matrix3d(".concat(r.join(","), ")"));
    }
  } else
    yr(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var Yp = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, Jn;
function za(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function on(e, t, n) {
  var o = n;
  if (Xr(t) === "object") {
    for (var r in t)
      t.hasOwnProperty(r) && on(e, r, t[r]);
    return;
  }
  if (typeof o < "u") {
    typeof o == "number" && (o = "".concat(o, "px")), e.style[t] = o;
    return;
  }
  return Jn(e, t);
}
function qp(e) {
  var t, n, o, r = e.ownerDocument, i = r.body, a = r && r.documentElement;
  return t = e.getBoundingClientRect(), n = Math.floor(t.left), o = Math.floor(t.top), n -= a.clientLeft || i.clientLeft || 0, o -= a.clientTop || i.clientTop || 0, {
    left: n,
    top: o
  };
}
function gc(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], o = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var r = e.document;
    n = r.documentElement[o], typeof n != "number" && (n = r.body[o]);
  }
  return n;
}
function hc(e) {
  return gc(e);
}
function yc(e) {
  return gc(e, !0);
}
function zn(e) {
  var t = qp(e), n = e.ownerDocument, o = n.defaultView || n.parentWindow;
  return t.left += hc(o), t.top += yc(o), t;
}
function Li(e) {
  return e != null && e == e.window;
}
function bc(e) {
  return Li(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function Qp(e, t, n) {
  var o = n, r = "", i = bc(e);
  return o = o || i.defaultView.getComputedStyle(e, null), o && (r = o.getPropertyValue(t) || o[t]), r;
}
var Zp = new RegExp("^(".concat(Yp, ")(?!px)[a-z%]+$"), "i"), Jp = /^(top|right|bottom|left)$/, br = "currentStyle", wr = "runtimeStyle", xt = "left", ev = "px";
function tv(e, t) {
  var n = e[br] && e[br][t];
  if (Zp.test(n) && !Jp.test(t)) {
    var o = e.style, r = o[xt], i = e[wr][xt];
    e[wr][xt] = e[br][xt], o[xt] = t === "fontSize" ? "1em" : n || 0, n = o.pixelLeft + ev, o[xt] = r, e[wr][xt] = i;
  }
  return n === "" ? "auto" : n;
}
typeof window < "u" && (Jn = window.getComputedStyle ? Qp : tv);
function oo(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function ja(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function La(e, t, n) {
  on(e, "position") === "static" && (e.style.position = "relative");
  var o = -999, r = -999, i = oo("left", n), a = oo("top", n), l = ja(i), s = ja(a);
  i !== "left" && (o = 999), a !== "top" && (r = 999);
  var u = "", d = zn(e);
  ("left" in t || "top" in t) && (u = Wp(e) || "", Ha(e, "none")), "left" in t && (e.style[l] = "", e.style[i] = "".concat(o, "px")), "top" in t && (e.style[s] = "", e.style[a] = "".concat(r, "px")), za(e);
  var c = zn(e), p = {};
  for (var v in t)
    if (t.hasOwnProperty(v)) {
      var g = oo(v, n), h = v === "left" ? o : r, y = d[v] - c[v];
      g === v ? p[g] = h + y : p[g] = h - y;
    }
  on(e, p), za(e), ("left" in t || "top" in t) && Ha(e, u);
  var b = {};
  for (var C in t)
    if (t.hasOwnProperty(C)) {
      var P = oo(C, n), _ = t[C] - d[C];
      C === P ? b[P] = p[P] + _ : b[P] = p[P] - _;
    }
  on(e, b);
}
function nv(e, t) {
  var n = zn(e), o = Kp(e), r = {
    x: o.x,
    y: o.y
  };
  "left" in t && (r.x = o.x + t.left - n.left), "top" in t && (r.y = o.y + t.top - n.top), Gp(e, r);
}
function ov(e, t, n) {
  if (n.ignoreShake) {
    var o = zn(e), r = o.left.toFixed(0), i = o.top.toFixed(0), a = t.left.toFixed(0), l = t.top.toFixed(0);
    if (r === a && i === l)
      return;
  }
  n.useCssRight || n.useCssBottom ? La(e, t, n) : n.useCssTransform && Zo() in document.body.style ? nv(e, t) : La(e, t, n);
}
function Fi(e, t) {
  for (var n = 0; n < e.length; n++)
    t(e[n]);
}
function wc(e) {
  return Jn(e, "boxSizing") === "border-box";
}
var rv = ["margin", "border", "padding"], Ur = -1, iv = 2, Gr = 1, av = 0;
function lv(e, t, n) {
  var o = {}, r = e.style, i;
  for (i in t)
    t.hasOwnProperty(i) && (o[i] = r[i], r[i] = t[i]);
  n.call(e);
  for (i in t)
    t.hasOwnProperty(i) && (r[i] = o[i]);
}
function En(e, t, n) {
  var o = 0, r, i, a;
  for (i = 0; i < t.length; i++)
    if (r = t[i], r)
      for (a = 0; a < n.length; a++) {
        var l = void 0;
        r === "border" ? l = "".concat(r).concat(n[a], "Width") : l = r + n[a], o += parseFloat(Jn(e, l)) || 0;
      }
  return o;
}
var Ke = {
  getParent: function(t) {
    var n = t;
    do
      n.nodeType === 11 && n.host ? n = n.host : n = n.parentNode;
    while (n && n.nodeType !== 1 && n.nodeType !== 9);
    return n;
  }
};
Fi(["Width", "Height"], function(e) {
  Ke["doc".concat(e)] = function(t) {
    var n = t.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      n.documentElement["scroll".concat(e)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      n.body["scroll".concat(e)],
      Ke["viewport".concat(e)](n)
    );
  }, Ke["viewport".concat(e)] = function(t) {
    var n = "client".concat(e), o = t.document, r = o.body, i = o.documentElement, a = i[n];
    return o.compatMode === "CSS1Compat" && a || r && r[n] || a;
  };
});
function Fa(e, t, n) {
  var o = n;
  if (Li(e))
    return t === "width" ? Ke.viewportWidth(e) : Ke.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? Ke.docWidth(e) : Ke.docHeight(e);
  var r = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], i = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), a = wc(e), l = 0;
  (i == null || i <= 0) && (i = void 0, l = Jn(e, t), (l == null || Number(l) < 0) && (l = e.style[t] || 0), l = Math.floor(parseFloat(l)) || 0), o === void 0 && (o = a ? Gr : Ur);
  var s = i !== void 0 || a, u = i || l;
  return o === Ur ? s ? u - En(e, ["border", "padding"], r) : l : s ? o === Gr ? u : u + (o === iv ? -En(e, ["border"], r) : En(e, ["margin"], r)) : l + En(e, rv.slice(o), r);
}
var sv = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function ka() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var o, r = t[0];
  return r.offsetWidth !== 0 ? o = Fa.apply(void 0, t) : lv(r, sv, function() {
    o = Fa.apply(void 0, t);
  }), o;
}
Fi(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  Ke["outer".concat(t)] = function(o, r) {
    return o && ka(o, e, r ? av : Gr);
  };
  var n = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  Ke[e] = function(o, r) {
    var i = r;
    if (i !== void 0) {
      if (o) {
        var a = wc(o);
        return a && (i += En(o, ["padding", "border"], n)), on(o, e, i);
      }
      return;
    }
    return o && ka(o, e, Ur);
  };
});
function Cc(e, t) {
  for (var n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
var K = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var n = t.ownerDocument || t;
    return n.defaultView || n.parentWindow;
  },
  getDocument: bc,
  offset: function(t, n, o) {
    if (typeof n < "u")
      ov(t, n, o || {});
    else
      return zn(t);
  },
  isWindow: Li,
  each: Fi,
  css: on,
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
  mix: Cc,
  getWindowScrollLeft: function(t) {
    return hc(t);
  },
  getWindowScrollTop: function(t) {
    return yc(t);
  },
  merge: function() {
    for (var t = {}, n = 0; n < arguments.length; n++)
      K.mix(t, n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
Cc(K, Ke);
var Cr = K.getParent;
function Yr(e) {
  if (K.isWindow(e) || e.nodeType === 9)
    return null;
  var t = K.getDocument(e), n = t.body, o, r = K.css(e, "position"), i = r === "fixed" || r === "absolute";
  if (!i)
    return e.nodeName.toLowerCase() === "html" ? null : Cr(e);
  for (o = Cr(e); o && o !== n && o.nodeType !== 9; o = Cr(o))
    if (r = K.css(o, "position"), r !== "static")
      return o;
  return null;
}
var Va = K.getParent;
function cv(e) {
  if (K.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = K.getDocument(e), n = t.body, o = null;
  for (
    o = Va(e);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    o && o !== n && o !== t;
    o = Va(o)
  ) {
    var r = K.css(o, "position");
    if (r === "fixed")
      return !0;
  }
  return !1;
}
function ki(e, t) {
  for (var n = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, o = Yr(e), r = K.getDocument(e), i = r.defaultView || r.parentWindow, a = r.body, l = r.documentElement; o; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || o.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    o !== a && o !== l && K.css(o, "overflow") !== "visible") {
      var s = K.offset(o);
      s.left += o.clientLeft, s.top += o.clientTop, n.top = Math.max(n.top, s.top), n.right = Math.min(
        n.right,
        // consider area without scrollBar
        s.left + o.clientWidth
      ), n.bottom = Math.min(n.bottom, s.top + o.clientHeight), n.left = Math.max(n.left, s.left);
    } else if (o === a || o === l)
      break;
    o = Yr(o);
  }
  var u = null;
  if (!K.isWindow(e) && e.nodeType !== 9) {
    u = e.style.position;
    var d = K.css(e, "position");
    d === "absolute" && (e.style.position = "fixed");
  }
  var c = K.getWindowScrollLeft(i), p = K.getWindowScrollTop(i), v = K.viewportWidth(i), g = K.viewportHeight(i), h = l.scrollWidth, y = l.scrollHeight, b = window.getComputedStyle(a);
  if (b.overflowX === "hidden" && (h = i.innerWidth), b.overflowY === "hidden" && (y = i.innerHeight), e.style && (e.style.position = u), t || cv(e))
    n.left = Math.max(n.left, c), n.top = Math.max(n.top, p), n.right = Math.min(n.right, c + v), n.bottom = Math.min(n.bottom, p + g);
  else {
    var C = Math.max(h, c + v);
    n.right = Math.min(n.right, C);
    var P = Math.max(y, p + g);
    n.bottom = Math.min(n.bottom, P);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function uv(e, t, n, o) {
  var r = K.clone(e), i = {
    width: t.width,
    height: t.height
  };
  return o.adjustX && r.left < n.left && (r.left = n.left), o.resizeWidth && r.left >= n.left && r.left + i.width > n.right && (i.width -= r.left + i.width - n.right), o.adjustX && r.left + i.width > n.right && (r.left = Math.max(n.right - i.width, n.left)), o.adjustY && r.top < n.top && (r.top = n.top), o.resizeHeight && r.top >= n.top && r.top + i.height > n.bottom && (i.height -= r.top + i.height - n.bottom), o.adjustY && r.top + i.height > n.bottom && (r.top = Math.max(n.bottom - i.height, n.top)), K.mix(r, i);
}
function Vi(e) {
  var t, n, o;
  if (!K.isWindow(e) && e.nodeType !== 9)
    t = K.offset(e), n = K.outerWidth(e), o = K.outerHeight(e);
  else {
    var r = K.getWindow(e);
    t = {
      left: K.getWindowScrollLeft(r),
      top: K.getWindowScrollTop(r)
    }, n = K.viewportWidth(r), o = K.viewportHeight(r);
  }
  return t.width = n, t.height = o, t;
}
function Wa(e, t) {
  var n = t.charAt(0), o = t.charAt(1), r = e.width, i = e.height, a = e.left, l = e.top;
  return n === "c" ? l += i / 2 : n === "b" && (l += i), o === "c" ? a += r / 2 : o === "r" && (a += r), {
    left: a,
    top: l
  };
}
function ro(e, t, n, o, r) {
  var i = Wa(t, n[1]), a = Wa(e, n[0]), l = [a.left - i.left, a.top - i.top];
  return {
    left: Math.round(e.left - l[0] + o[0] - r[0]),
    top: Math.round(e.top - l[1] + o[1] - r[1])
  };
}
function Ka(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function Xa(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function dv(e, t, n) {
  return e.left > n.right || e.left + t.width < n.left;
}
function fv(e, t, n) {
  return e.top > n.bottom || e.top + t.height < n.top;
}
function io(e, t, n) {
  var o = [];
  return K.each(e, function(r) {
    o.push(r.replace(t, function(i) {
      return n[i];
    }));
  }), o;
}
function ao(e, t) {
  return e[t] = -e[t], e;
}
function Ua(e, t) {
  var n;
  return /%$/.test(e) ? n = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : n = parseInt(e, 10), n || 0;
}
function Ga(e, t) {
  e[0] = Ua(e[0], t.width), e[1] = Ua(e[1], t.height);
}
function $c(e, t, n, o) {
  var r = n.points, i = n.offset || [0, 0], a = n.targetOffset || [0, 0], l = n.overflow, s = n.source || e;
  i = [].concat(i), a = [].concat(a), l = l || {};
  var u = {}, d = 0, c = !!(l && l.alwaysByViewport), p = ki(s, c), v = Vi(s);
  Ga(i, v), Ga(a, t);
  var g = ro(v, t, r, i, a), h = K.merge(v, g);
  if (p && (l.adjustX || l.adjustY) && o) {
    if (l.adjustX && Ka(g, v, p)) {
      var y = io(r, /[lr]/gi, {
        l: "r",
        r: "l"
      }), b = ao(i, 0), C = ao(a, 0), P = ro(v, t, y, b, C);
      dv(P, v, p) || (d = 1, r = y, i = b, a = C);
    }
    if (l.adjustY && Xa(g, v, p)) {
      var _ = io(r, /[tb]/gi, {
        t: "b",
        b: "t"
      }), x = ao(i, 1), O = ao(a, 1), $ = ro(v, t, _, x, O);
      fv($, v, p) || (d = 1, r = _, i = x, a = O);
    }
    d && (g = ro(v, t, r, i, a), K.mix(h, g));
    var T = Ka(g, v, p), I = Xa(g, v, p);
    if (T || I) {
      var E = r;
      T && (E = io(r, /[lr]/gi, {
        l: "r",
        r: "l"
      })), I && (E = io(r, /[tb]/gi, {
        t: "b",
        b: "t"
      })), r = E, i = n.offset || [0, 0], a = n.targetOffset || [0, 0];
    }
    u.adjustX = l.adjustX && T, u.adjustY = l.adjustY && I, (u.adjustX || u.adjustY) && (h = uv(g, v, p, u));
  }
  return h.width !== v.width && K.css(s, "width", K.width(s) + h.width - v.width), h.height !== v.height && K.css(s, "height", K.height(s) + h.height - v.height), K.offset(s, {
    left: h.left,
    top: h.top
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
function pv(e, t) {
  var n = ki(e, t), o = Vi(e);
  return !n || o.left + o.width <= n.left || o.top + o.height <= n.top || o.left >= n.right || o.top >= n.bottom;
}
function Wi(e, t, n) {
  var o = n.target || t, r = Vi(o), i = !pv(o, n.overflow && n.overflow.alwaysByViewport);
  return $c(e, r, n, i);
}
Wi.__getOffsetParent = Yr;
Wi.__getVisibleRectForElement = ki;
function vv(e, t, n) {
  var o, r, i = K.getDocument(e), a = i.defaultView || i.parentWindow, l = K.getWindowScrollLeft(a), s = K.getWindowScrollTop(a), u = K.viewportWidth(a), d = K.viewportHeight(a);
  "pageX" in t ? o = t.pageX : o = l + t.clientX, "pageY" in t ? r = t.pageY : r = s + t.clientY;
  var c = {
    left: o,
    top: r,
    width: 0,
    height: 0
  }, p = o >= 0 && o <= l + u && r >= 0 && r <= s + d, v = [n.points[0], "cc"];
  return $c(e, c, Ba(Ba({}, n), {}, {
    points: v
  }), p);
}
let qr = {};
function mv(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error(`Warning: ${t}`);
}
function gv() {
  qr = {};
}
function hv(e, t, n) {
  !t && !qr[n] && (e(!1, n), qr[n] = !0);
}
function Ki(e, t) {
  hv(mv, e, t);
}
function yv() {
}
let Ge = yv;
process.env.NODE_ENV !== "production" && (Ge = (e, t, n) => {
  Ki(e, `[ant-design-vue: ${t}] ${n}`), process.env.NODE_ENV === "test" && gv();
});
function Re(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, r = e;
  if (Array.isArray(e) && (r = bn(e)[0]), !r)
    return null;
  const i = kr(r, t, o);
  return i.props = n ? m(m({}, i.props), t) : i.props, Ge(typeof i.props.class != "object", "class must be string"), i;
}
const Sc = (e) => {
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
var xc = function() {
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
}(), Qr = typeof window < "u" && typeof document < "u" && window.document === document, Ao = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), bv = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Ao) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), wv = 2;
function Cv(e, t) {
  var n = !1, o = !1, r = 0;
  function i() {
    n && (n = !1, e()), o && l();
  }
  function a() {
    bv(i);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - r < wv)
        return;
      o = !0;
    } else
      n = !0, o = !1, setTimeout(a, t);
    r = s;
  }
  return l;
}
var $v = 20, Sv = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], xv = typeof MutationObserver < "u", Ov = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Cv(this.refresh.bind(this), $v);
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
      !Qr || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), xv ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Qr || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, o = n === void 0 ? "" : n, r = Sv.some(function(i) {
        return !!~o.indexOf(i);
      });
      r && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Oc = function(e, t) {
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
}, dn = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Ao;
}, Pc = Jo(0, 0, 0, 0);
function Do(e) {
  return parseFloat(e) || 0;
}
function Ya(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(o, r) {
    var i = e["border-" + r + "-width"];
    return o + Do(i);
  }, 0);
}
function Pv(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, o = 0, r = t; o < r.length; o++) {
    var i = r[o], a = e["padding-" + i];
    n[i] = Do(a);
  }
  return n;
}
function _v(e) {
  var t = e.getBBox();
  return Jo(0, 0, t.width, t.height);
}
function Tv(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Pc;
  var o = dn(e).getComputedStyle(e), r = Pv(o), i = r.left + r.right, a = r.top + r.bottom, l = Do(o.width), s = Do(o.height);
  if (o.boxSizing === "border-box" && (Math.round(l + i) !== t && (l -= Ya(o, "left", "right") + i), Math.round(s + a) !== n && (s -= Ya(o, "top", "bottom") + a)), !Ev(e)) {
    var u = Math.round(l + i) - t, d = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(d) !== 1 && (s -= d);
  }
  return Jo(r.left, r.top, l, s);
}
var Iv = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof dn(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof dn(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Ev(e) {
  return e === dn(e).document.documentElement;
}
function Mv(e) {
  return Qr ? Iv(e) ? _v(e) : Tv(e) : Pc;
}
function Av(e) {
  var t = e.x, n = e.y, o = e.width, r = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return Oc(a, {
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
function Jo(e, t, n, o) {
  return { x: e, y: t, width: n, height: o };
}
var Dv = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Jo(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Mv(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Rv = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var o = Av(n);
      Oc(this, { target: t, contentRect: o });
    }
    return e;
  }()
), Nv = (
  /** @class */
  function() {
    function e(t, n, o) {
      if (this.activeObservations_ = [], this.observations_ = new xc(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = o;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof dn(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new Dv(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof dn(t).Element))
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
          return new Rv(o.target, o.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), _c = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new xc(), Tc = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Ov.getInstance(), o = new Nv(t, n, this);
      _c.set(this, o);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Tc.prototype[e] = function() {
    var t;
    return (t = _c.get(this))[e].apply(t, arguments);
  };
});
var Ic = function() {
  return typeof Ao.ResizeObserver < "u" ? Ao.ResizeObserver : Tc;
}();
function Bv(e, t) {
  return e === t ? !0 : !e || !t ? !1 : "pageX" in t && "pageY" in t ? e.pageX === t.pageX && e.pageY === t.pageY : "clientX" in t && "clientY" in t ? e.clientX === t.clientX && e.clientY === t.clientY : !1;
}
function Hv(e, t) {
  e !== document.activeElement && _t(t, e) && typeof e.focus == "function" && e.focus();
}
function qa(e, t) {
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
  const i = new Ic(r);
  return e && i.observe(e), () => {
    i.disconnect();
  };
}
const zv = (e, t) => {
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
function jv() {
  this.__data__ = [], this.size = 0;
}
function Ec(e, t) {
  return e === t || e !== e && t !== t;
}
function er(e, t) {
  for (var n = e.length; n--; )
    if (Ec(e[n][0], t))
      return n;
  return -1;
}
var Lv = Array.prototype, Fv = Lv.splice;
function kv(e) {
  var t = this.__data__, n = er(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Fv.call(t, n, 1), --this.size, !0;
}
function Vv(e) {
  var t = this.__data__, n = er(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Wv(e) {
  return er(this.__data__, e) > -1;
}
function Kv(e, t) {
  var n = this.__data__, o = er(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function at(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
at.prototype.clear = jv;
at.prototype.delete = kv;
at.prototype.get = Vv;
at.prototype.has = Wv;
at.prototype.set = Kv;
function Xv() {
  this.__data__ = new at(), this.size = 0;
}
function Uv(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Gv(e) {
  return this.__data__.get(e);
}
function Yv(e) {
  return this.__data__.has(e);
}
var Mc = typeof global == "object" && global && global.Object === Object && global, qv = typeof self == "object" && self && self.Object === Object && self, lt = Mc || qv || Function("return this")(), fn = lt.Symbol, Ac = Object.prototype, Qv = Ac.hasOwnProperty, Zv = Ac.toString, On = fn ? fn.toStringTag : void 0;
function Jv(e) {
  var t = Qv.call(e, On), n = e[On];
  try {
    e[On] = void 0;
    var o = !0;
  } catch {
  }
  var r = Zv.call(e);
  return o && (t ? e[On] = n : delete e[On]), r;
}
var em = Object.prototype, tm = em.toString;
function nm(e) {
  return tm.call(e);
}
var om = "[object Null]", rm = "[object Undefined]", Qa = fn ? fn.toStringTag : void 0;
function eo(e) {
  return e == null ? e === void 0 ? rm : om : Qa && Qa in Object(e) ? Jv(e) : nm(e);
}
function Dc(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var im = "[object AsyncFunction]", am = "[object Function]", lm = "[object GeneratorFunction]", sm = "[object Proxy]";
function Rc(e) {
  if (!Dc(e))
    return !1;
  var t = eo(e);
  return t == am || t == lm || t == im || t == sm;
}
var $r = lt["__core-js_shared__"], Za = function() {
  var e = /[^.]+$/.exec($r && $r.keys && $r.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function cm(e) {
  return !!Za && Za in e;
}
var um = Function.prototype, dm = um.toString;
function Kt(e) {
  if (e != null) {
    try {
      return dm.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var fm = /[\\^$.*+?()[\]{}|]/g, pm = /^\[object .+?Constructor\]$/, vm = Function.prototype, mm = Object.prototype, gm = vm.toString, hm = mm.hasOwnProperty, ym = RegExp(
  "^" + gm.call(hm).replace(fm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bm(e) {
  if (!Dc(e) || cm(e))
    return !1;
  var t = Rc(e) ? ym : pm;
  return t.test(Kt(e));
}
function wm(e, t) {
  return e == null ? void 0 : e[t];
}
function wn(e, t) {
  var n = wm(e, t);
  return bm(n) ? n : void 0;
}
var jn = wn(lt, "Map"), Ln = wn(Object, "create");
function Cm() {
  this.__data__ = Ln ? Ln(null) : {}, this.size = 0;
}
function $m(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Sm = "__lodash_hash_undefined__", xm = Object.prototype, Om = xm.hasOwnProperty;
function Pm(e) {
  var t = this.__data__;
  if (Ln) {
    var n = t[e];
    return n === Sm ? void 0 : n;
  }
  return Om.call(t, e) ? t[e] : void 0;
}
var _m = Object.prototype, Tm = _m.hasOwnProperty;
function Im(e) {
  var t = this.__data__;
  return Ln ? t[e] !== void 0 : Tm.call(t, e);
}
var Em = "__lodash_hash_undefined__";
function Mm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ln && t === void 0 ? Em : t, this;
}
function jt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
jt.prototype.clear = Cm;
jt.prototype.delete = $m;
jt.prototype.get = Pm;
jt.prototype.has = Im;
jt.prototype.set = Mm;
function Am() {
  this.size = 0, this.__data__ = {
    hash: new jt(),
    map: new (jn || at)(),
    string: new jt()
  };
}
function Dm(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function tr(e, t) {
  var n = e.__data__;
  return Dm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Rm(e) {
  var t = tr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Nm(e) {
  return tr(this, e).get(e);
}
function Bm(e) {
  return tr(this, e).has(e);
}
function Hm(e, t) {
  var n = tr(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Xt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Xt.prototype.clear = Am;
Xt.prototype.delete = Rm;
Xt.prototype.get = Nm;
Xt.prototype.has = Bm;
Xt.prototype.set = Hm;
var zm = 200;
function jm(e, t) {
  var n = this.__data__;
  if (n instanceof at) {
    var o = n.__data__;
    if (!jn || o.length < zm - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Xt(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function pt(e) {
  var t = this.__data__ = new at(e);
  this.size = t.size;
}
pt.prototype.clear = Xv;
pt.prototype.delete = Uv;
pt.prototype.get = Gv;
pt.prototype.has = Yv;
pt.prototype.set = jm;
var Lm = "__lodash_hash_undefined__";
function Fm(e) {
  return this.__data__.set(e, Lm), this;
}
function km(e) {
  return this.__data__.has(e);
}
function Fn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Xt(); ++t < n; )
    this.add(e[t]);
}
Fn.prototype.add = Fn.prototype.push = Fm;
Fn.prototype.has = km;
function Vm(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Nc(e, t) {
  return e.has(t);
}
var Wm = 1, Km = 2;
function Bc(e, t, n, o, r, i) {
  var a = n & Wm, l = e.length, s = t.length;
  if (l != s && !(a && s > l))
    return !1;
  var u = i.get(e), d = i.get(t);
  if (u && d)
    return u == t && d == e;
  var c = -1, p = !0, v = n & Km ? new Fn() : void 0;
  for (i.set(e, t), i.set(t, e); ++c < l; ) {
    var g = e[c], h = t[c];
    if (o)
      var y = a ? o(h, g, c, t, e, i) : o(g, h, c, e, t, i);
    if (y !== void 0) {
      if (y)
        continue;
      p = !1;
      break;
    }
    if (v) {
      if (!Vm(t, function(b, C) {
        if (!Nc(v, C) && (g === b || r(g, b, n, o, i)))
          return v.push(C);
      })) {
        p = !1;
        break;
      }
    } else if (!(g === h || r(g, h, n, o, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), p;
}
var Ja = lt.Uint8Array;
function Xm(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Xi(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Um = 1, Gm = 2, Ym = "[object Boolean]", qm = "[object Date]", Qm = "[object Error]", Zm = "[object Map]", Jm = "[object Number]", eg = "[object RegExp]", tg = "[object Set]", ng = "[object String]", og = "[object Symbol]", rg = "[object ArrayBuffer]", ig = "[object DataView]", el = fn ? fn.prototype : void 0, Sr = el ? el.valueOf : void 0;
function ag(e, t, n, o, r, i, a) {
  switch (n) {
    case ig:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case rg:
      return !(e.byteLength != t.byteLength || !i(new Ja(e), new Ja(t)));
    case Ym:
    case qm:
    case Jm:
      return Ec(+e, +t);
    case Qm:
      return e.name == t.name && e.message == t.message;
    case eg:
    case ng:
      return e == t + "";
    case Zm:
      var l = Xm;
    case tg:
      var s = o & Um;
      if (l || (l = Xi), e.size != t.size && !s)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= Gm, a.set(e, t);
      var d = Bc(l(e), l(t), o, r, i, a);
      return a.delete(e), d;
    case og:
      if (Sr)
        return Sr.call(e) == Sr.call(t);
  }
  return !1;
}
function lg(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var kn = Array.isArray;
function sg(e, t, n) {
  var o = t(e);
  return kn(e) ? o : lg(o, n(e));
}
function cg(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, i = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (i[r++] = a);
  }
  return i;
}
function ug() {
  return [];
}
var dg = Object.prototype, fg = dg.propertyIsEnumerable, tl = Object.getOwnPropertySymbols, pg = tl ? function(e) {
  return e == null ? [] : (e = Object(e), cg(tl(e), function(t) {
    return fg.call(e, t);
  }));
} : ug;
function vg(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
function Vn(e) {
  return e != null && typeof e == "object";
}
var mg = "[object Arguments]";
function nl(e) {
  return Vn(e) && eo(e) == mg;
}
var Hc = Object.prototype, gg = Hc.hasOwnProperty, hg = Hc.propertyIsEnumerable, zc = nl(/* @__PURE__ */ function() {
  return arguments;
}()) ? nl : function(e) {
  return Vn(e) && gg.call(e, "callee") && !hg.call(e, "callee");
};
function yg() {
  return !1;
}
var jc = typeof exports == "object" && exports && !exports.nodeType && exports, ol = jc && typeof module == "object" && module && !module.nodeType && module, bg = ol && ol.exports === jc, rl = bg ? lt.Buffer : void 0, wg = rl ? rl.isBuffer : void 0, Ro = wg || yg, Cg = 9007199254740991, $g = /^(?:0|[1-9]\d*)$/;
function Sg(e, t) {
  var n = typeof e;
  return t = t ?? Cg, !!t && (n == "number" || n != "symbol" && $g.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var xg = 9007199254740991;
function Lc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= xg;
}
var Og = "[object Arguments]", Pg = "[object Array]", _g = "[object Boolean]", Tg = "[object Date]", Ig = "[object Error]", Eg = "[object Function]", Mg = "[object Map]", Ag = "[object Number]", Dg = "[object Object]", Rg = "[object RegExp]", Ng = "[object Set]", Bg = "[object String]", Hg = "[object WeakMap]", zg = "[object ArrayBuffer]", jg = "[object DataView]", Lg = "[object Float32Array]", Fg = "[object Float64Array]", kg = "[object Int8Array]", Vg = "[object Int16Array]", Wg = "[object Int32Array]", Kg = "[object Uint8Array]", Xg = "[object Uint8ClampedArray]", Ug = "[object Uint16Array]", Gg = "[object Uint32Array]", ae = {};
ae[Lg] = ae[Fg] = ae[kg] = ae[Vg] = ae[Wg] = ae[Kg] = ae[Xg] = ae[Ug] = ae[Gg] = !0;
ae[Og] = ae[Pg] = ae[zg] = ae[_g] = ae[jg] = ae[Tg] = ae[Ig] = ae[Eg] = ae[Mg] = ae[Ag] = ae[Dg] = ae[Rg] = ae[Ng] = ae[Bg] = ae[Hg] = !1;
function Yg(e) {
  return Vn(e) && Lc(e.length) && !!ae[eo(e)];
}
function qg(e) {
  return function(t) {
    return e(t);
  };
}
var Fc = typeof exports == "object" && exports && !exports.nodeType && exports, An = Fc && typeof module == "object" && module && !module.nodeType && module, Qg = An && An.exports === Fc, xr = Qg && Mc.process, il = function() {
  try {
    var e = An && An.require && An.require("util").types;
    return e || xr && xr.binding && xr.binding("util");
  } catch {
  }
}(), al = il && il.isTypedArray, Ui = al ? qg(al) : Yg, Zg = Object.prototype, Jg = Zg.hasOwnProperty;
function eh(e, t) {
  var n = kn(e), o = !n && zc(e), r = !n && !o && Ro(e), i = !n && !o && !r && Ui(e), a = n || o || r || i, l = a ? vg(e.length, String) : [], s = l.length;
  for (var u in e)
    Jg.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Sg(u, s))) && l.push(u);
  return l;
}
var th = Object.prototype;
function kc(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || th;
  return e === n;
}
function nh(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var oh = nh(Object.keys, Object), rh = Object.prototype, ih = rh.hasOwnProperty;
function Vc(e) {
  if (!kc(e))
    return oh(e);
  var t = [];
  for (var n in Object(e))
    ih.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Wc(e) {
  return e != null && Lc(e.length) && !Rc(e);
}
function ah(e) {
  return Wc(e) ? eh(e) : Vc(e);
}
function ll(e) {
  return sg(e, ah, pg);
}
var lh = 1, sh = Object.prototype, ch = sh.hasOwnProperty;
function uh(e, t, n, o, r, i) {
  var a = n & lh, l = ll(e), s = l.length, u = ll(t), d = u.length;
  if (s != d && !a)
    return !1;
  for (var c = s; c--; ) {
    var p = l[c];
    if (!(a ? p in t : ch.call(t, p)))
      return !1;
  }
  var v = i.get(e), g = i.get(t);
  if (v && g)
    return v == t && g == e;
  var h = !0;
  i.set(e, t), i.set(t, e);
  for (var y = a; ++c < s; ) {
    p = l[c];
    var b = e[p], C = t[p];
    if (o)
      var P = a ? o(C, b, p, t, e, i) : o(b, C, p, e, t, i);
    if (!(P === void 0 ? b === C || r(b, C, n, o, i) : P)) {
      h = !1;
      break;
    }
    y || (y = p == "constructor");
  }
  if (h && !y) {
    var _ = e.constructor, x = t.constructor;
    _ != x && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof x == "function" && x instanceof x) && (h = !1);
  }
  return i.delete(e), i.delete(t), h;
}
var Zr = wn(lt, "DataView"), Jr = wn(lt, "Promise"), rn = wn(lt, "Set"), ei = wn(lt, "WeakMap"), sl = "[object Map]", dh = "[object Object]", cl = "[object Promise]", ul = "[object Set]", dl = "[object WeakMap]", fl = "[object DataView]", fh = Kt(Zr), ph = Kt(jn), vh = Kt(Jr), mh = Kt(rn), gh = Kt(ei), Je = eo;
(Zr && Je(new Zr(new ArrayBuffer(1))) != fl || jn && Je(new jn()) != sl || Jr && Je(Jr.resolve()) != cl || rn && Je(new rn()) != ul || ei && Je(new ei()) != dl) && (Je = function(e) {
  var t = eo(e), n = t == dh ? e.constructor : void 0, o = n ? Kt(n) : "";
  if (o)
    switch (o) {
      case fh:
        return fl;
      case ph:
        return sl;
      case vh:
        return cl;
      case mh:
        return ul;
      case gh:
        return dl;
    }
  return t;
});
var hh = 1, pl = "[object Arguments]", vl = "[object Array]", lo = "[object Object]", yh = Object.prototype, ml = yh.hasOwnProperty;
function bh(e, t, n, o, r, i) {
  var a = kn(e), l = kn(t), s = a ? vl : Je(e), u = l ? vl : Je(t);
  s = s == pl ? lo : s, u = u == pl ? lo : u;
  var d = s == lo, c = u == lo, p = s == u;
  if (p && Ro(e)) {
    if (!Ro(t))
      return !1;
    a = !0, d = !1;
  }
  if (p && !d)
    return i || (i = new pt()), a || Ui(e) ? Bc(e, t, n, o, r, i) : ag(e, t, s, n, o, r, i);
  if (!(n & hh)) {
    var v = d && ml.call(e, "__wrapped__"), g = c && ml.call(t, "__wrapped__");
    if (v || g) {
      var h = v ? e.value() : e, y = g ? t.value() : t;
      return i || (i = new pt()), r(h, y, n, o, i);
    }
  }
  return p ? (i || (i = new pt()), uh(e, t, n, o, r, i)) : !1;
}
function Kc(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Vn(e) && !Vn(t) ? e !== e && t !== t : bh(e, t, n, o, Kc, r);
}
function wh(e, t) {
  return Kc(e, t);
}
const Ch = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function gl(e) {
  return typeof e != "function" ? null : e();
}
function hl(e) {
  return typeof e != "object" || !e ? null : e;
}
const $h = D({
  compatConfig: {
    MODE: 3
  },
  name: "Align",
  props: Ch,
  emits: ["align"],
  setup(e, t) {
    let {
      expose: n,
      slots: o
    } = t;
    const r = k({}), i = k(), [a, l] = zv(() => {
      const {
        disabled: p,
        target: v,
        align: g,
        onAlign: h
      } = e;
      if (!p && v && i.value) {
        const y = i.value;
        let b;
        const C = gl(v), P = hl(v);
        r.value.element = C, r.value.point = P, r.value.align = g;
        const {
          activeElement: _
        } = document;
        return C && Sc(C) ? b = Wi(y, C, g) : P && (b = vv(y, P, g)), Hv(_, y), h && b && h(y, b), !0;
      }
      return !1;
    }, w(() => e.monitorBufferTime)), s = k({
      cancel: () => {
      }
    }), u = k({
      cancel: () => {
      }
    }), d = () => {
      const p = e.target, v = gl(p), g = hl(p);
      i.value !== u.value.element && (u.value.cancel(), u.value.element = i.value, u.value.cancel = qa(i.value, a)), (r.value.element !== v || !Bv(r.value.point, g) || !wh(r.value.align, e.align)) && (a(), s.value.element !== v && (s.value.cancel(), s.value.element = v, s.value.cancel = qa(v, a)));
    };
    Be(() => {
      Xe(() => {
        d();
      });
    }), qn(() => {
      Xe(() => {
        d();
      });
    }), G(() => e.disabled, (p) => {
      p ? l() : a();
    }, {
      immediate: !0,
      flush: "post"
    });
    const c = k(null);
    return G(() => e.monitorWindowResize, (p) => {
      p ? c.value || (c.value = In(window, "resize", a)) : c.value && (c.value.remove(), c.value = null);
    }, {
      flush: "post"
    }), Yo(() => {
      s.value.cancel(), u.value.cancel(), c.value && c.value.remove(), l();
    }), n({
      forceAlign: () => a(!0)
    }), () => {
      const p = o == null ? void 0 : o.default();
      return p ? Re(p[0], {
        ref: i
      }, !0, !0) : null;
    };
  }
}), pn = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t;
}, Cn = (e) => {
  const t = e;
  return t.install = function(n) {
    n.component(t.displayName || t.name, e);
  }, e;
};
function ti() {
  return {
    type: [Function, Array]
  };
}
function le(e) {
  return {
    type: Object,
    default: e
  };
}
function $e(e) {
  return {
    type: Boolean,
    default: e
  };
}
function ni(e, t) {
  return {
    validator: () => !0,
    default: e
  };
}
function yl(e) {
  return {
    type: Array,
    default: e
  };
}
function bl(e) {
  return {
    type: String,
    default: e
  };
}
function Xc(e, t) {
  return e ? {
    type: e,
    default: t
  } : ni(t);
}
pn("bottomLeft", "bottomRight", "topLeft", "topRight");
const Gi = function(e) {
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
}, Uc = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return m(e ? {
    name: e,
    appear: !0,
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    appearActiveClass: `${e}`,
    appearToClass: `${e}-appear ${e}-appear-active`,
    enterFromClass: `${e}-appear ${e}-enter ${e}-appear-prepare ${e}-enter-prepare`,
    enterActiveClass: `${e}`,
    enterToClass: `${e}-enter ${e}-appear ${e}-appear-active ${e}-enter-active`,
    leaveActiveClass: `${e} ${e}-leave`,
    leaveToClass: `${e}-leave-active`
  } : {
    css: !1
  }, t);
}, Sh = (e, t, n) => n !== void 0 ? n : `${e}-${t}`, xh = D({
  compatConfig: {
    MODE: 3
  },
  name: "PopupInner",
  inheritAttrs: !1,
  props: zi,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(e, t) {
    let {
      expose: n,
      attrs: o,
      slots: r
    } = t;
    const i = j(), a = j(), l = j(), [s, u] = Fp(Vr(e, "stretch")), d = () => {
      e.stretch && u(e.getRootDomNode());
    }, c = j(!1);
    let p;
    G(() => e.visible, (O) => {
      clearTimeout(p), O ? p = setTimeout(() => {
        c.value = e.visible;
      }) : c.value = !1;
    }, {
      immediate: !0
    });
    const [v, g] = Lp(c, d), h = j(), y = () => e.point ? e.point : e.getRootDomNode, b = () => {
      var O;
      (O = i.value) === null || O === void 0 || O.forceAlign();
    }, C = (O, $) => {
      var T;
      const I = e.getClassNameFromAlign($), E = l.value;
      l.value !== I && (l.value = I), v.value === "align" && (E !== I ? Promise.resolve().then(() => {
        b();
      }) : g(() => {
        var B;
        (B = h.value) === null || B === void 0 || B.call(h);
      }), (T = e.onAlign) === null || T === void 0 || T.call(e, O, $));
    }, P = w(() => {
      const O = typeof e.animation == "object" ? e.animation : ji(e);
      return ["onAfterEnter", "onAfterLeave"].forEach(($) => {
        const T = O[$];
        O[$] = (I) => {
          g(), v.value = "stable", T == null || T(I);
        };
      }), O;
    }), _ = () => new Promise((O) => {
      h.value = O;
    });
    G([P, v], () => {
      !P.value && v.value === "motion" && g();
    }, {
      immediate: !0
    }), n({
      forceAlign: b,
      getElement: () => a.value.$el || a.value
    });
    const x = w(() => {
      var O;
      return !(!((O = e.align) === null || O === void 0) && O.points && (v.value === "align" || v.value === "stable"));
    });
    return () => {
      var O;
      const {
        zIndex: $,
        align: T,
        prefixCls: I,
        destroyPopupOnHide: E,
        onMouseenter: B,
        onMouseleave: V,
        onTouchstart: X = () => {
        },
        onMousedown: Y
      } = e, S = v.value, M = [m(m({}, s.value), {
        zIndex: $,
        opacity: S === "motion" || S === "stable" || !c.value ? null : 0,
        // pointerEvents: statusValue === 'stable' ? null : 'none',
        pointerEvents: !c.value && S !== "stable" ? "none" : null
      }), o.style];
      let z = Te((O = r.default) === null || O === void 0 ? void 0 : O.call(r, {
        visible: e.visible
      }));
      z.length > 1 && (z = f("div", {
        class: `${I}-content`
      }, [z]));
      const F = Q(I, o.class, l.value), oe = c.value || !e.visible ? Gi(P.value.name, P.value) : {};
      return f(wt, R(R({
        ref: a
      }, oe), {}, {
        onBeforeEnter: _
      }), {
        default: () => !E || e.visible ? Go(f($h, {
          target: y(),
          key: "popup",
          ref: i,
          monitorWindowResize: !0,
          disabled: x.value,
          align: T,
          onAlign: C
        }, {
          default: () => f("div", {
            class: F,
            onMouseenter: B,
            onMouseleave: V,
            onMousedown: xa(Y, ["capture"]),
            [Mt ? "onTouchstartPassive" : "onTouchstart"]: xa(X, ["capture"]),
            style: M
          }, [z])
        }), [[Ei, c.value]]) : null
      });
    };
  }
}), Oh = D({
  compatConfig: {
    MODE: 3
  },
  name: "Popup",
  inheritAttrs: !1,
  props: Hp,
  setup(e, t) {
    let {
      attrs: n,
      slots: o,
      expose: r
    } = t;
    const i = j(!1), a = j(!1), l = j(), s = j();
    return G([() => e.visible, () => e.mobile], () => {
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
      }), d = a.value ? f(zp, R(R({}, u), {}, {
        mobile: e.mobile,
        ref: l
      }), {
        default: o.default
      }) : f(xh, R(R({}, u), {}, {
        ref: l
      }), {
        default: o.default
      });
      return f("div", {
        ref: s
      }, [f(vc, u, null), d]);
    };
  }
});
function Ph(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function wl(e, t, n) {
  const o = e[t] || {};
  return m(m({}, o), n);
}
function _h(e, t, n, o) {
  const {
    points: r
  } = n, i = Object.keys(e);
  for (let a = 0; a < i.length; a += 1) {
    const l = i[a];
    if (Ph(e[l].points, r, o))
      return `${t}-placement-${l}`;
  }
  return "";
}
const Th = {
  methods: {
    setState() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = typeof e == "function" ? e(this.$data, this.$props) : e;
      if (this.getDerivedStateFromProps) {
        const o = this.getDerivedStateFromProps(Ap(this), m(m({}, this.$data), n));
        if (o === null)
          return;
        n = m(m({}, n), o || {});
      }
      m(this.$data, n), this._.isMounted && this.$forceUpdate(), Xe(() => {
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
}, Gc = Symbol("PortalContextKey"), Yc = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: !0
  };
  ie(Gc, {
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
}, Ih = () => {
  Yc({}, {
    inTriggerContext: !1
  });
  const e = H(Gc, {
    shouldRender: w(() => !1),
    inTriggerContext: !1
  });
  return {
    shouldRender: w(() => e.shouldRender.value || e.inTriggerContext === !1)
  };
}, qc = D({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: !1,
  props: {
    getContainer: A.func.isRequired,
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t, o = !0, r;
    const {
      shouldRender: i
    } = Ih();
    function a() {
      i.value && (r = e.getContainer());
    }
    ks(() => {
      o = !1, a();
    }), Be(() => {
      r || a();
    });
    const l = G(i, () => {
      i.value && !r && (r = e.getContainer()), r && l();
    });
    return qn(() => {
      Xe(() => {
        var s;
        i.value && ((s = e.didUpdate) === null || s === void 0 || s.call(e, e));
      });
    }), () => {
      var s;
      return i.value ? o ? (s = n.default) === null || s === void 0 ? void 0 : s.call(n) : r ? f(Mi, {
        to: r
      }, n) : null : null;
    };
  }
});
function Ye() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
const Cl = "data-vc-order", Eh = "vc-util-key", oi = /* @__PURE__ */ new Map();
function Qc() {
  let {
    mark: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return e ? e.startsWith("data-") ? e : `data-${e}` : Eh;
}
function nr(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function Mh(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Zc(e) {
  return Array.from((oi.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function Jc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ye())
    return null;
  const {
    csp: n,
    prepend: o
  } = t, r = document.createElement("style");
  r.setAttribute(Cl, Mh(o)), n != null && n.nonce && (r.nonce = n == null ? void 0 : n.nonce), r.innerHTML = e;
  const i = nr(t), {
    firstChild: a
  } = i;
  if (o) {
    if (o === "queue") {
      const l = Zc(i).filter((s) => ["prepend", "prependQueue"].includes(s.getAttribute(Cl)));
      if (l.length)
        return i.insertBefore(r, l[l.length - 1].nextSibling), r;
    }
    i.insertBefore(r, a);
  } else
    i.appendChild(r);
  return r;
}
function eu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = nr(t);
  return Zc(n).find((o) => o.getAttribute(Qc(t)) === e);
}
function No(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = eu(e, t);
  n && nr(t).removeChild(n);
}
function Ah(e, t) {
  const n = oi.get(e);
  if (!n || !_t(document, n)) {
    const o = Jc("", t), {
      parentNode: r
    } = o;
    oi.set(e, r), e.removeChild(o);
  }
}
function Wn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var o, r, i;
  const a = nr(n);
  Ah(a, n);
  const l = eu(t, n);
  if (l)
    return !((o = n.csp) === null || o === void 0) && o.nonce && l.nonce !== ((r = n.csp) === null || r === void 0 ? void 0 : r.nonce) && (l.nonce = (i = n.csp) === null || i === void 0 ? void 0 : i.nonce), l.innerHTML !== e && (l.innerHTML = e), l;
  const s = Jc(e, n);
  return s.setAttribute(Qc(n), t), s;
}
let Or;
function Dh(e) {
  if (typeof document > "u")
    return 0;
  if (Or === void 0) {
    const t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    const n = document.createElement("div"), o = n.style;
    o.position = "absolute", o.top = "0", o.left = "0", o.pointerEvents = "none", o.visibility = "hidden", o.width = "200px", o.height = "150px", o.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    const r = t.offsetWidth;
    n.style.overflow = "scroll";
    let i = t.offsetWidth;
    r === i && (i = n.clientWidth), document.body.removeChild(n), Or = r - i;
  }
  return Or;
}
const Rh = `vc-util-locker-${Date.now()}`;
let $l = 0;
function Nh() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
function Bh(e) {
  const t = w(() => !!e && !!e.value);
  $l += 1;
  const n = `${Rh}_${$l}`;
  je((o) => {
    if (Ye()) {
      if (t.value) {
        const r = Dh(), i = Nh();
        Wn(`
html body {
  overflow-y: hidden;
  ${i ? `width: calc(100% - ${r}px);` : ""}
}`, n);
      } else
        No(n);
      o(() => {
        No(n);
      });
    }
  }, {
    flush: "post"
  });
}
let Ot = 0;
const wo = Ye(), Sl = (e) => {
  if (!wo)
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
}, Hh = D({
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
    getContainer: A.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    autoLock: $e(),
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = j(), r = j(), i = j(), a = j(1), l = Ye() && document.createElement("div"), s = () => {
      var v, g;
      o.value === l && ((g = (v = o.value) === null || v === void 0 ? void 0 : v.parentNode) === null || g === void 0 || g.removeChild(o.value)), o.value = null;
    };
    let u = null;
    const d = function() {
      return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) || o.value && !o.value.parentNode ? (u = Sl(e.getContainer), u ? (u.appendChild(o.value), !0) : !1) : !0;
    }, c = () => wo ? (o.value || (o.value = l, d(!0)), p(), o.value) : null, p = () => {
      const {
        wrapperClassName: v
      } = e;
      o.value && v && v !== o.value.className && (o.value.className = v);
    };
    return qn(() => {
      p(), d();
    }), Bh(w(() => e.autoLock && e.visible && Ye() && (o.value === document.body || o.value === l))), Be(() => {
      let v = !1;
      G([() => e.visible, () => e.getContainer], (g, h) => {
        let [y, b] = g, [C, P] = h;
        wo && (u = Sl(e.getContainer), u === document.body && (y && !C ? Ot += 1 : v && (Ot -= 1))), v && (typeof b == "function" && typeof P == "function" ? b.toString() !== P.toString() : b !== P) && s(), v = !0;
      }, {
        immediate: !0,
        flush: "post"
      }), Xe(() => {
        d() || (i.value = we(() => {
          a.value += 1;
        }));
      });
    }), De(() => {
      const {
        visible: v
      } = e;
      wo && u === document.body && (Ot = v && Ot ? Ot - 1 : Ot), s(), we.cancel(i.value);
    }), () => {
      const {
        forceRender: v,
        visible: g
      } = e;
      let h = null;
      const y = {
        getOpenCount: () => Ot,
        getContainer: c
      };
      return a.value && (v || g || r.value) && (h = f(qc, {
        getContainer: c,
        ref: r,
        didUpdate: e.didUpdate
      }, {
        default: () => {
          var b;
          return (b = n.default) === null || b === void 0 ? void 0 : b.call(n, y);
        }
      })), h;
    };
  }
}), zh = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"], Yi = D({
  compatConfig: {
    MODE: 3
  },
  name: "Trigger",
  mixins: [Th],
  inheritAttrs: !1,
  props: mp(),
  setup(e) {
    const t = w(() => {
      const {
        popupPlacement: r,
        popupAlign: i,
        builtinPlacements: a
      } = e;
      return r && a ? wl(a, r, i) : i;
    }), n = j(null), o = (r) => {
      n.value = r;
    };
    return {
      vcTriggerContext: H("vcTriggerContext", {}),
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
    return this.popupVisible !== void 0 ? t = !!e.popupVisible : t = !!e.defaultPopupVisible, zh.forEach((n) => {
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
    ie("vcTriggerContext", {
      onPopupMouseDown: this.onPopupMouseDown,
      onPopupMouseenter: this.onPopupMouseenter,
      onPopupMouseleave: this.onPopupMouseleave
    }), Yc(this);
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
    this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), we.cancel(this.attachId);
  },
  methods: {
    updatedCal() {
      const e = this.$props;
      if (this.$data.sPopupVisible) {
        let n;
        !this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow()) && (n = e.getDocument(this.getRootDomNode()), this.clickOutsideHandler = In(n, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (n = n || e.getDocument(this.getRootDomNode()), this.touchOutsideHandler = In(n, "touchstart", this.onDocumentClick, Mt ? {
          passive: !1
        } : !1)), !this.contextmenuOutsideHandler1 && this.isContextmenuToShow() && (n = n || e.getDocument(this.getRootDomNode()), this.contextmenuOutsideHandler1 = In(n, "scroll", this.onContextmenuClose)), !this.contextmenuOutsideHandler2 && this.isContextmenuToShow() && (this.contextmenuOutsideHandler2 = In(window, "blur", this.onContextmenuClose));
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
      if (e && e.relatedTarget && !e.relatedTarget.setTimeout && _t((t = this.popupRef) === null || t === void 0 ? void 0 : t.getElement(), e.relatedTarget))
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
      _t(e.target, e.relatedTarget || document.activeElement) || (this.fireEvents("onBlur", e), this.clearDelayTimer(), this.isBlurToHide() && this.delaySetPopupVisible(!1, this.$props.blurDelay));
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
      (!_t(n, t) || this.isContextMenuOnly()) && !_t(o, t) && !this.hasPopupMouseDown && this.delaySetPopupVisible(!1, 0.1);
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
        const i = ((t = (e = this.triggerRef) === null || e === void 0 ? void 0 : e.$el) === null || t === void 0 ? void 0 : t.nodeName) === "#comment" ? null : ut(this.triggerRef);
        return ut(r(i));
      }
      try {
        const i = ((o = (n = this.triggerRef) === null || n === void 0 ? void 0 : n.$el) === null || o === void 0 ? void 0 : o.nodeName) === "#comment" ? null : ut(this.triggerRef);
        if (i)
          return i;
      } catch {
      }
      return ut(this);
    },
    handleGetPopupClassFromAlign(e) {
      const t = [], n = this.$props, {
        popupPlacement: o,
        builtinPlacements: r,
        prefixCls: i,
        alignPoint: a,
        getPopupClassNameFromAlign: l
      } = n;
      return o && r && t.push(_h(r, i, e, a)), l && t.push(l(e)), t.join(" ");
    },
    getPopupAlign() {
      const e = this.$props, {
        popupPlacement: t,
        popupAlign: n,
        builtinPlacements: o
      } = e;
      return t && o ? wl(o, t, n) : n;
    },
    getComponent() {
      const e = {};
      this.isMouseEnterToShow() && (e.onMouseenter = this.onPopupMouseenter), this.isMouseLeaveToHide() && (e.onMouseleave = this.onPopupMouseleave), e.onMousedown = this.onPopupMouseDown, e[Mt ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
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
        alignPoint: h,
        mobile: y,
        forceRender: b
      } = this.$props, {
        sPopupVisible: C,
        point: P
      } = this.$data, _ = m(m({
        prefixCls: r,
        destroyPopupOnHide: i,
        visible: C,
        point: h ? P : null,
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
        onAlign: o.onPopupAlign || ac
      }, e), {
        ref: this.setPopupRef,
        mobile: y,
        forceRender: b
      });
      return f(Oh, _, {
        default: this.$slots.popup || (() => Dp(this, "popup"))
      });
    },
    attachParent(e) {
      we.cancel(this.attachId);
      const {
        getPopupContainer: t,
        getDocument: n
      } = this.$props, o = this.getRootDomNode();
      let r;
      t ? (o || t.length === 0) && (r = t(o)) : r = n(this.getRootDomNode()).body, r ? r.appendChild(e) : this.attachId = we(() => {
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
      this.clearDelayTimer(), o !== e && (Ep(this, "popupVisible") || this.setState({
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
      const n = Da(this);
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
    } = this, t = bn(Mp(this)), {
      alignPoint: n,
      getPopupContainer: o
    } = this.$props, r = t[0];
    this.childOriginEvents = Da(r);
    const i = {
      key: "trigger"
    };
    this.isContextmenuToShow() ? i.onContextmenu = this.onContextmenu : i.onContextmenu = this.createTwoChains("onContextmenu"), this.isClickToHide() || this.isClickToShow() ? (i.onClick = this.onClick, i.onMousedown = this.onMousedown, i[Mt ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart) : (i.onClick = this.createTwoChains("onClick"), i.onMousedown = this.createTwoChains("onMousedown"), i[Mt ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart")), this.isMouseEnterToShow() ? (i.onMouseenter = this.onMouseenter, n && (i.onMousemove = this.onMouseMove)) : i.onMouseenter = this.createTwoChains("onMouseenter"), this.isMouseLeaveToHide() ? i.onMouseleave = this.onMouseleave : i.onMouseleave = this.createTwoChains("onMouseleave"), this.isFocusToShow() || this.isBlurToHide() ? (i.onFocus = this.onFocus, i.onBlur = this.onBlur) : (i.onFocus = this.createTwoChains("onFocus"), i.onBlur = (u) => {
      u && (!u.relatedTarget || !_t(u.target, u.relatedTarget)) && this.createTwoChains("onBlur")(u);
    });
    const a = Q(r && r.props && r.props.class, e.class);
    a && (i.class = a);
    const l = Re(r, m(m({}, i), {
      ref: "triggerRef"
    }), !0, !0), s = f(Hh, {
      key: "portal",
      getContainer: o && (() => o(this.getRootDomNode())),
      didUpdate: this.handlePortalUpdate,
      visible: this.$data.sPopupVisible
    }, {
      default: this.getComponent
    });
    return f(Fe, null, [l, s]);
  }
}), Qt = {
  adjustX: 1,
  adjustY: 1
}, Zt = [0, 0], jh = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Qt,
    offset: [0, -4],
    targetOffset: Zt
  },
  topCenter: {
    points: ["bc", "tc"],
    overflow: Qt,
    offset: [0, -4],
    targetOffset: Zt
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Qt,
    offset: [0, -4],
    targetOffset: Zt
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Qt,
    offset: [0, 4],
    targetOffset: Zt
  },
  bottomCenter: {
    points: ["tc", "bc"],
    overflow: Qt,
    offset: [0, 4],
    targetOffset: Zt
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Qt,
    offset: [0, 4],
    targetOffset: Zt
  }
};
var Lh = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Fh = D({
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
    prefixCls: A.string.def("rc-dropdown"),
    transitionName: String,
    overlayClassName: A.string.def(""),
    openClassName: String,
    animation: A.any,
    align: A.object,
    overlayStyle: {
      type: Object,
      default: void 0
    },
    placement: A.string.def("bottomLeft"),
    overlay: A.any,
    trigger: A.oneOfType([A.string, A.arrayOf(A.string)]).def("hover"),
    alignPoint: {
      type: Boolean,
      default: void 0
    },
    showAction: A.array,
    hideAction: A.array,
    getPopupContainer: Function,
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: !1
    },
    mouseEnterDelay: A.number.def(0.15),
    mouseLeaveDelay: A.number.def(0.1)
  },
  emits: ["visibleChange", "overlayClick"],
  setup(e, t) {
    let {
      slots: n,
      emit: o,
      expose: r
    } = t;
    const i = k(!!e.visible);
    G(() => e.visible, (v) => {
      v !== void 0 && (i.value = v);
    });
    const a = k();
    r({
      triggerRef: a
    });
    const l = (v) => {
      e.visible === void 0 && (i.value = !1), o("overlayClick", v);
    }, s = (v) => {
      e.visible === void 0 && (i.value = v), o("visibleChange", v);
    }, u = () => {
      var v;
      const g = (v = n.overlay) === null || v === void 0 ? void 0 : v.call(n), h = {
        prefixCls: `${e.prefixCls}-menu`,
        onClick: l
      };
      return f(Fe, {
        key: fc
      }, [e.arrow && f("div", {
        class: `${e.prefixCls}-arrow`
      }, null), Re(g, h, !1)]);
    }, d = w(() => {
      const {
        minOverlayWidthMatchTrigger: v = !e.alignPoint
      } = e;
      return v;
    }), c = () => {
      var v;
      const g = (v = n.default) === null || v === void 0 ? void 0 : v.call(n);
      return i.value && g ? Re(g[0], {
        class: e.openClassName || `${e.prefixCls}-open`
      }, !1) : g;
    }, p = w(() => !e.hideAction && e.trigger.indexOf("contextmenu") !== -1 ? ["click"] : e.hideAction);
    return () => {
      const {
        prefixCls: v,
        arrow: g,
        showAction: h,
        overlayStyle: y,
        trigger: b,
        placement: C,
        align: P,
        getPopupContainer: _,
        transitionName: x,
        animation: O,
        overlayClassName: $
      } = e, T = Lh(e, ["prefixCls", "arrow", "showAction", "overlayStyle", "trigger", "placement", "align", "getPopupContainer", "transitionName", "animation", "overlayClassName"]);
      return f(Yi, R(R({}, T), {}, {
        prefixCls: v,
        ref: a,
        popupClassName: Q($, {
          [`${v}-show-arrow`]: g
        }),
        popupStyle: y,
        builtinPlacements: jh,
        action: b,
        showAction: h,
        hideAction: p.value || [],
        popupPlacement: C,
        popupAlign: P,
        popupTransitionName: x,
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
}), qi = "anticon", kh = Symbol("GlobalFormContextKey"), Vh = (e) => {
  ie(kh, e);
}, Wh = () => ({
  iconPrefixCls: String,
  getTargetContainer: {
    type: Function
  },
  getPopupContainer: {
    type: Function
  },
  prefixCls: String,
  getPrefixCls: {
    type: Function
  },
  renderEmpty: {
    type: Function
  },
  transformCellText: {
    type: Function
  },
  csp: le(),
  input: le(),
  autoInsertSpaceInButton: {
    type: Boolean,
    default: void 0
  },
  locale: le(),
  pageHeader: le(),
  componentSize: {
    type: String
  },
  componentDisabled: {
    type: Boolean,
    default: void 0
  },
  direction: {
    type: String,
    default: "ltr"
  },
  space: le(),
  virtual: {
    type: Boolean,
    default: void 0
  },
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: !0
  },
  form: le(),
  pagination: le(),
  theme: le(),
  select: le(),
  wave: le()
}), Qi = Symbol("configProvider"), tu = {
  getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
  iconPrefixCls: w(() => qi),
  getPopupContainer: w(() => () => document.body),
  direction: w(() => "ltr")
}, Zi = () => H(Qi, tu), Kh = (e) => ie(Qi, e), nu = Symbol("DisabledContextKey"), or = () => H(nu, k(void 0)), Xh = (e) => {
  const t = or();
  return ie(nu, w(() => {
    var n;
    return (n = e.value) !== null && n !== void 0 ? n : t.value;
  })), e;
}, Uh = {
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
}, Gh = {
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
}, ou = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, xl = {
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
  }, Gh),
  timePickerLocale: m({}, ou)
}, Pe = "${label} is not a valid ${type}", Kn = {
  locale: "en",
  Pagination: Uh,
  DatePicker: xl,
  TimePicker: ou,
  Calendar: xl,
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
        string: Pe,
        method: Pe,
        array: Pe,
        object: Pe,
        number: Pe,
        date: Pe,
        boolean: Pe,
        integer: Pe,
        float: Pe,
        regexp: Pe,
        email: Pe,
        url: Pe,
        hex: Pe
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
}, ru = D({
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
    const o = H("localeData", {}), r = w(() => {
      const {
        componentName: a = "global",
        defaultLocale: l
      } = e, s = l || Kn[a || "global"], {
        antLocale: u
      } = o, d = a && u ? u[a] : {};
      return m(m({}, typeof s == "function" ? s() : s), d || {});
    }), i = w(() => {
      const {
        antLocale: a
      } = o, l = a && a.locale;
      return a && a.exist && !l ? Kn.locale : l;
    });
    return () => {
      const a = e.children || n.default, {
        antLocale: l
      } = o;
      return a == null ? void 0 : a(r.value, i.value, l);
    };
  }
});
function Ji(e) {
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
const Ol = "%";
class Yh {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.instanceId = t;
  }
  get(t) {
    return this.cache.get(Array.isArray(t) ? t.join(Ol) : t) || null;
  }
  update(t, n) {
    const o = Array.isArray(t) ? t.join(Ol) : t, r = this.cache.get(o), i = n(r);
    i === null ? this.cache.delete(o) : this.cache.set(o, i);
  }
}
const iu = "data-token-hash", Dt = "data-css-hash", qh = "data-cache-path", nn = "__cssinjs_instance__";
function Xn() {
  const e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    const t = document.body.querySelectorAll(`style[${Dt}]`) || [], {
      firstChild: n
    } = document.head;
    Array.from(t).forEach((r) => {
      r[nn] = r[nn] || e, r[nn] === e && document.head.insertBefore(r, n);
    });
    const o = {};
    Array.from(document.querySelectorAll(`style[${Dt}]`)).forEach((r) => {
      var i;
      const a = r.getAttribute(Dt);
      o[a] ? r[nn] === e && ((i = r.parentNode) === null || i === void 0 || i.removeChild(r)) : o[a] = !0;
    });
  }
  return new Yh(e);
}
const au = Symbol("StyleContextKey"), Qh = () => {
  var e, t, n;
  const o = kt();
  let r;
  if (o && o.appContext) {
    const i = (n = (t = (e = o.appContext) === null || e === void 0 ? void 0 : e.config) === null || t === void 0 ? void 0 : t.globalProperties) === null || n === void 0 ? void 0 : n.__ANTDV_CSSINJS_CACHE__;
    i ? r = i : (r = Xn(), o.appContext.config.globalProperties && (o.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = r));
  } else
    r = Xn();
  return r;
}, lu = {
  cache: Xn(),
  defaultCache: !0,
  hashPriority: "low"
}, rr = () => {
  const e = Qh();
  return H(au, j(m(m({}, lu), {
    cache: e
  })));
}, Zh = (e) => {
  const t = rr(), n = j(m(m({}, lu), {
    cache: Xn()
  }));
  return G([() => Et(e), t], () => {
    const o = m({}, t.value), r = Et(e);
    Object.keys(r).forEach((a) => {
      const l = r[a];
      r[a] !== void 0 && (o[a] = l);
    });
    const {
      cache: i
    } = r;
    o.cache = o.cache || Xn(), o.defaultCache = !i && t.value.defaultCache, n.value = o;
  }, {
    immediate: !0
  }), ie(au, n), n;
}, Jh = () => ({
  autoClear: $e(),
  /** @private Test only. Not work in production. */
  mock: bl(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: le(),
  /** Tell children that this context is default generated context */
  defaultCache: $e(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: bl(),
  /** Tell cssinjs where to inject style in */
  container: Xc(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: $e(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: yl(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: yl()
});
Cn(D({
  name: "AStyleProvider",
  inheritAttrs: !1,
  props: Jh(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Zh(e), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
}));
function e0() {
  return !1;
}
let ri = !1;
function t0() {
  return ri;
}
const n0 = process.env.NODE_ENV === "production" ? e0 : t0;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  const e = window;
  if (typeof e.webpackHotUpdate == "function") {
    const t = e.webpackHotUpdate;
    e.webpackHotUpdate = function() {
      return ri = !0, setTimeout(() => {
        ri = !1;
      }, 0), t(...arguments);
    };
  }
}
function su(e, t, n, o) {
  const r = rr(), i = j(""), a = j();
  je(() => {
    i.value = [e, ...t.value].join("%");
  });
  const l = n0(), s = (u) => {
    r.value.cache.update(u, (d) => {
      const [c = 0, p] = d || [];
      return c - 1 === 0 ? (o == null || o(p, !1), null) : [c - 1, p];
    });
  };
  return G(i, (u, d) => {
    d && s(d), r.value.cache.update(u, (c) => {
      const [p = 0, v] = c || [];
      let g = v;
      process.env.NODE_ENV !== "production" && v && l && (o == null || o(g, l), g = null);
      const h = g || n();
      return [p + 1, h];
    }), a.value = r.value.cache.get(i.value)[1];
  }, {
    immediate: !0
  }), De(() => {
    s(i.value);
  }), a;
}
function o0(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
class vn {
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
      if (this.size() + 1 > vn.MAX_CACHE_SIZE + vn.MAX_CACHE_OFFSET) {
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
      return this.keys = this.keys.filter((n) => !o0(n, t)), this.deleteByPath(this.cache, t);
  }
}
vn.MAX_CACHE_SIZE = 20;
vn.MAX_CACHE_OFFSET = 5;
let Pl = 0;
class cu {
  constructor(t) {
    this.derivatives = Array.isArray(t) ? t : [t], this.id = Pl, t.length === 0 && Ge(t.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function."), Pl += 1;
  }
  getDerivativeToken(t) {
    return this.derivatives.reduce((n, o) => o(t, n), void 0);
  }
}
const Pr = new vn();
function uu(e) {
  const t = Array.isArray(e) ? e : [e];
  return Pr.has(t) || Pr.set(t, new cu(t)), Pr.get(t);
}
const _l = /* @__PURE__ */ new WeakMap();
function Bo(e) {
  let t = _l.get(e) || "";
  return t || (Object.keys(e).forEach((n) => {
    const o = e[n];
    t += n, o instanceof cu ? t += o.id : o && typeof o == "object" ? t += Bo(o) : t += o;
  }), _l.set(e, t)), t;
}
function r0(e, t) {
  return Ji(`${t}_${Bo(e)}`);
}
const Dn = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ""), du = "_bAmBoO_";
function i0(e, t, n) {
  var o, r;
  if (Ye()) {
    Wn(e, Dn);
    const i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t == null || t(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    const a = (o = getComputedStyle(i).content) === null || o === void 0 ? void 0 : o.includes(du);
    return (r = i.parentNode) === null || r === void 0 || r.removeChild(i), No(Dn), a;
  }
  return !1;
}
let _r;
function a0() {
  return _r === void 0 && (_r = i0(`@layer ${Dn} { .${Dn} { content: "${du}"!important; } }`, (e) => {
    e.className = Dn;
  })), _r;
}
const Tl = {}, l0 = process.env.NODE_ENV === "production", s0 = process.env.NODE_ENV === "prerender", c0 = !l0 && !s0 ? "css-dev-only-do-not-override" : "css", Tt = /* @__PURE__ */ new Map();
function u0(e) {
  Tt.set(e, (Tt.get(e) || 0) + 1);
}
function d0(e, t) {
  typeof document < "u" && document.querySelectorAll(`style[${iu}="${e}"]`).forEach((o) => {
    var r;
    o[nn] === t && ((r = o.parentNode) === null || r === void 0 || r.removeChild(o));
  });
}
const f0 = 0;
function p0(e, t) {
  Tt.set(e, (Tt.get(e) || 0) - 1);
  const n = Array.from(Tt.keys()), o = n.filter((r) => (Tt.get(r) || 0) <= 0);
  n.length - o.length > f0 && o.forEach((r) => {
    d0(r, t), Tt.delete(r);
  });
}
const v0 = (e, t, n, o) => {
  const r = n.getDerivativeToken(e);
  let i = m(m({}, r), t);
  return o && (i = o(i)), i;
};
function m0(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : k({});
  const o = rr(), r = w(() => m({}, ...t.value)), i = w(() => Bo(r.value)), a = w(() => Bo(n.value.override || Tl));
  return su("token", w(() => [n.value.salt || "", e.value.id, i.value, a.value]), () => {
    const {
      salt: s = "",
      override: u = Tl,
      formatToken: d,
      getComputedToken: c
    } = n.value, p = c ? c(r.value, u, e.value) : v0(r.value, u, e.value, d), v = r0(p, s);
    p._tokenKey = v, u0(v);
    const g = `${c0}-${Ji(v)}`;
    return p._hashId = g, [p, g];
  }, (s) => {
    var u;
    p0(s[0]._tokenKey, (u = o.value) === null || u === void 0 ? void 0 : u.cache.instanceId);
  });
}
var g0 = {
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
}, fu = "comm", pu = "rule", vu = "decl", h0 = "@import", y0 = "@keyframes", b0 = "@layer", mu = Math.abs, ea = String.fromCharCode;
function gu(e) {
  return e.trim();
}
function Co(e, t, n) {
  return e.replace(t, n);
}
function w0(e, t, n) {
  return e.indexOf(t, n);
}
function Un(e, t) {
  return e.charCodeAt(t) | 0;
}
function Gn(e, t, n) {
  return e.slice(t, n);
}
function et(e) {
  return e.length;
}
function C0(e) {
  return e.length;
}
function so(e, t) {
  return t.push(e), e;
}
var ir = 1, mn = 1, hu = 0, Ne = 0, ue = 0, $n = "";
function ta(e, t, n, o, r, i, a, l) {
  return { value: e, root: t, parent: n, type: o, props: r, children: i, line: ir, column: mn, length: a, return: "", siblings: l };
}
function $0() {
  return ue;
}
function S0() {
  return ue = Ne > 0 ? Un($n, --Ne) : 0, mn--, ue === 10 && (mn = 1, ir--), ue;
}
function Le() {
  return ue = Ne < hu ? Un($n, Ne++) : 0, mn++, ue === 10 && (mn = 1, ir++), ue;
}
function Rt() {
  return Un($n, Ne);
}
function $o() {
  return Ne;
}
function ar(e, t) {
  return Gn($n, e, t);
}
function ii(e) {
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
function x0(e) {
  return ir = mn = 1, hu = et($n = e), Ne = 0, [];
}
function O0(e) {
  return $n = "", e;
}
function Tr(e) {
  return gu(ar(Ne - 1, ai(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function P0(e) {
  for (; (ue = Rt()) && ue < 33; )
    Le();
  return ii(e) > 2 || ii(ue) > 3 ? "" : " ";
}
function _0(e, t) {
  for (; --t && Le() && !(ue < 48 || ue > 102 || ue > 57 && ue < 65 || ue > 70 && ue < 97); )
    ;
  return ar(e, $o() + (t < 6 && Rt() == 32 && Le() == 32));
}
function ai(e) {
  for (; Le(); )
    switch (ue) {
      case e:
        return Ne;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ai(ue);
        break;
      case 40:
        e === 41 && ai(e);
        break;
      case 92:
        Le();
        break;
    }
  return Ne;
}
function T0(e, t) {
  for (; Le() && e + ue !== 57; )
    if (e + ue === 84 && Rt() === 47)
      break;
  return "/*" + ar(t, Ne - 1) + "*" + ea(e === 47 ? e : Le());
}
function I0(e) {
  for (; !ii(Rt()); )
    Le();
  return ar(e, Ne);
}
function E0(e) {
  return O0(So("", null, null, null, [""], e = x0(e), 0, [0], e));
}
function So(e, t, n, o, r, i, a, l, s) {
  for (var u = 0, d = 0, c = a, p = 0, v = 0, g = 0, h = 1, y = 1, b = 1, C = 0, P = "", _ = r, x = i, O = o, $ = P; y; )
    switch (g = C, C = Le()) {
      case 40:
        if (g != 108 && Un($, c - 1) == 58) {
          w0($ += Co(Tr(C), "&", "&\f"), "&\f", mu(u ? l[u - 1] : 0)) != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += Tr(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += P0(g);
        break;
      case 92:
        $ += _0($o() - 1, 7);
        continue;
      case 47:
        switch (Rt()) {
          case 42:
          case 47:
            so(M0(T0(Le(), $o()), t, n, s), s);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * h:
        l[u++] = et($) * b;
      case 125 * h:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            y = 0;
          case 59 + d:
            b == -1 && ($ = Co($, /\f/g, "")), v > 0 && et($) - c && so(v > 32 ? El($ + ";", o, n, c - 1, s) : El(Co($, " ", "") + ";", o, n, c - 2, s), s);
            break;
          case 59:
            $ += ";";
          default:
            if (so(O = Il($, t, n, u, d, r, l, P, _ = [], x = [], c, i), i), C === 123)
              if (d === 0)
                So($, t, O, O, _, i, c, l, x);
              else
                switch (p === 99 && Un($, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    So(e, O, O, o && so(Il(e, O, O, 0, 0, r, l, P, r, _ = [], c, x), x), r, x, c, l, o ? _ : x);
                    break;
                  default:
                    So($, O, O, O, [""], x, 0, l, x);
                }
        }
        u = d = v = 0, h = b = 1, P = $ = "", c = a;
        break;
      case 58:
        c = 1 + et($), v = g;
      default:
        if (h < 1) {
          if (C == 123)
            --h;
          else if (C == 125 && h++ == 0 && S0() == 125)
            continue;
        }
        switch ($ += ea(C), C * h) {
          case 38:
            b = d > 0 ? 1 : ($ += "\f", -1);
            break;
          case 44:
            l[u++] = (et($) - 1) * b, b = 1;
            break;
          case 64:
            Rt() === 45 && ($ += Tr(Le())), p = Rt(), d = c = et(P = $ += I0($o())), C++;
            break;
          case 45:
            g === 45 && et($) == 2 && (h = 0);
        }
    }
  return i;
}
function Il(e, t, n, o, r, i, a, l, s, u, d, c) {
  for (var p = r - 1, v = r === 0 ? i : [""], g = C0(v), h = 0, y = 0, b = 0; h < o; ++h)
    for (var C = 0, P = Gn(e, p + 1, p = mu(y = a[h])), _ = e; C < g; ++C)
      (_ = gu(y > 0 ? v[C] + " " + P : Co(P, /&\f/g, v[C]))) && (s[b++] = _);
  return ta(e, t, n, r === 0 ? pu : l, s, u, d, c);
}
function M0(e, t, n, o) {
  return ta(e, t, n, fu, ea($0()), Gn(e, 2, -2), 0, o);
}
function El(e, t, n, o, r) {
  return ta(e, t, n, vu, Gn(e, 0, o), Gn(e, o + 1, -1), o, r);
}
function li(e, t) {
  for (var n = "", o = 0; o < e.length; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function A0(e, t, n, o) {
  switch (e.type) {
    case b0:
      if (e.children.length)
        break;
    case h0:
    case vu:
      return e.return = e.return || e.value;
    case fu:
      return "";
    case y0:
      return e.return = e.value + "{" + li(e.children, o) + "}";
    case pu:
      if (!et(e.value = e.props.join(",")))
        return "";
  }
  return et(n = li(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function yu(e, t) {
  const {
    path: n,
    parentSelectors: o
  } = t;
  Ki(!1, `[Ant Design Vue CSS-in-JS] ${n ? `Error in '${n}': ` : ""}${e}${o.length ? ` Selector info: ${o.join(" -> ")}` : ""}`);
}
const D0 = (e, t, n) => {
  if (e === "content") {
    const o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    (typeof t != "string" || ["normal", "none", "initial", "inherit", "unset"].indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && yu(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${t}"'\`.`, n);
  }
}, R0 = (e, t, n) => {
  e === "animation" && n.hashId && t !== "none" && yu(`You seem to be using hashed animation '${t}', in which case 'animationName' with Keyframe as value is recommended.`, n);
}, Ml = "data-ant-cssinjs-cache-path", N0 = "_FILE_STYLE__";
let Nt, bu = !0;
function B0() {
  var e;
  if (!Nt && (Nt = {}, Ye())) {
    const t = document.createElement("div");
    t.className = Ml, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    let n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach((r) => {
      const [i, a] = r.split(":");
      Nt[i] = a;
    });
    const o = document.querySelector(`style[${Ml}]`);
    o && (bu = !1, (e = o.parentNode) === null || e === void 0 || e.removeChild(o)), document.body.removeChild(t);
  }
}
function H0(e) {
  return B0(), !!Nt[e];
}
function z0(e) {
  const t = Nt[e];
  let n = null;
  if (t && Ye())
    if (bu)
      n = N0;
    else {
      const o = document.querySelector(`style[${Dt}="${Nt[e]}"]`);
      o ? n = o.innerHTML : delete Nt[e];
    }
  return [n, t];
}
const Al = Ye(), wu = "_skip_check_", Cu = "_multi_value_";
function Dl(e) {
  return li(E0(e), A0).replace(/\{%%%\:[^;];}/g, ";");
}
function j0(e) {
  return typeof e == "object" && e && (wu in e || Cu in e);
}
function L0(e, t, n) {
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
const si = /* @__PURE__ */ new Set();
process.env.NODE_ENV;
const ci = function(e) {
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
  function v(y) {
    const b = y.getName(i);
    if (!p[b]) {
      const [C] = ci(y.style, t, {
        root: !1,
        parentSelectors: r
      });
      p[b] = `@keyframes ${y.getName(i)}${C}`;
    }
  }
  function g(y) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return y.forEach((C) => {
      Array.isArray(C) ? g(C, b) : C && b.push(C);
    }), b;
  }
  if (g(Array.isArray(e) ? e : [e]).forEach((y) => {
    const b = typeof y == "string" && !n ? {} : y;
    if (typeof b == "string")
      c += `${b}
`;
    else if (b._keyframe)
      v(b);
    else {
      const C = u.reduce((P, _) => {
        var x;
        return ((x = _ == null ? void 0 : _.visit) === null || x === void 0 ? void 0 : x.call(_, P)) || P;
      }, b);
      Object.keys(C).forEach((P) => {
        var _;
        const x = C[P];
        if (typeof x == "object" && x && (P !== "animationName" || !x._keyframe) && !j0(x)) {
          let O = !1, $ = P.trim(), T = !1;
          (n || o) && i ? $.startsWith("@") ? O = !0 : $ = L0(P, i, s) : n && !i && ($ === "&" || $ === "") && ($ = "", T = !0);
          const [I, E] = ci(x, t, {
            root: T,
            injectHash: O,
            parentSelectors: [...r, $]
          });
          p = m(m({}, p), E), c += `${$}${I}`;
        } else {
          let O = function(T, I) {
            process.env.NODE_ENV !== "production" && (typeof x != "object" || !(x != null && x[wu])) && [D0, R0, ...d].forEach((V) => V(T, I, {
              path: l,
              hashId: i,
              parentSelectors: r
            }));
            const E = T.replace(/[A-Z]/g, (V) => `-${V.toLowerCase()}`);
            let B = I;
            !g0[T] && typeof B == "number" && B !== 0 && (B = `${B}px`), T === "animationName" && (I != null && I._keyframe) && (v(I), B = I.getName(i)), c += `${E}:${B};`;
          };
          const $ = (_ = x == null ? void 0 : x.value) !== null && _ !== void 0 ? _ : x;
          typeof x == "object" && (x != null && x[Cu]) && Array.isArray($) ? $.forEach((T) => {
            O(P, T);
          }) : O(P, $);
        }
      });
    }
  }), !n)
    c = `{${c}}`;
  else if (a && a0()) {
    const y = a.split(",");
    c = `@layer ${y[y.length - 1].trim()} {${c}}`, y.length > 1 && (c = `@layer ${a}{%%%:%}${c}`);
  }
  return [c, p];
};
function F0(e, t) {
  return Ji(`${e.join("%")}${t}`);
}
function ui(e, t) {
  const n = rr(), o = w(() => e.value.token._tokenKey), r = w(() => [o.value, ...e.value.path]);
  let i = Al;
  return process.env.NODE_ENV !== "production" && n.value.mock !== void 0 && (i = n.value.mock === "client"), su(
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
      if (H0(p)) {
        const [$, T] = z0(p);
        if ($)
          return [$, o.value, T, {}, d, c];
      }
      const v = t(), {
        hashPriority: g,
        container: h,
        transformers: y,
        linters: b,
        cache: C
      } = n.value, [P, _] = ci(v, {
        hashId: l,
        hashPriority: g,
        layer: s,
        path: a.join("-"),
        transformers: y,
        linters: b
      }), x = Dl(P), O = F0(r.value, x);
      if (i) {
        const $ = {
          mark: Dt,
          prepend: "queue",
          attachTo: h,
          priority: c
        }, T = typeof u == "function" ? u() : u;
        T && ($.csp = {
          nonce: T
        });
        const I = Wn(x, O, $);
        I[nn] = C.instanceId, I.setAttribute(iu, o.value), process.env.NODE_ENV !== "production" && I.setAttribute(qh, r.value.join("|")), Object.keys(_).forEach((E) => {
          si.has(E) || (si.add(E), Wn(Dl(_[E]), `_effect-${E}`, {
            mark: Dt,
            prepend: "queue",
            attachTo: h
          }));
        });
      }
      return [x, o.value, O, _, d, c];
    },
    // Remove cache if no need
    (a, l) => {
      let [, , s] = a;
      (l || n.value.autoClear) && Al && No(s, {
        mark: Dt
      });
    }
  ), (a) => a;
}
class q {
  constructor(t, n) {
    this._keyframe = !0, this.name = t, this.style = n;
  }
  getName() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return t ? `${t}-${this.name}` : this.name;
  }
}
const k0 = "4.1.2", Ho = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function ye(e, t) {
  V0(e) && (e = "100%");
  var n = W0(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function co(e) {
  return Math.min(1, Math.max(0, e));
}
function V0(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function W0(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function $u(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function uo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function At(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function K0(e, t, n) {
  return {
    r: ye(e, 255) * 255,
    g: ye(t, 255) * 255,
    b: ye(n, 255) * 255
  };
}
function Rl(e, t, n) {
  e = ye(e, 255), t = ye(t, 255), n = ye(n, 255);
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
function Ir(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function X0(e, t, n) {
  var o, r, i;
  if (e = ye(e, 360), t = ye(t, 100), n = ye(n, 100), t === 0)
    r = n, i = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = Ir(l, a, e + 1 / 3), r = Ir(l, a, e), i = Ir(l, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: i * 255 };
}
function di(e, t, n) {
  e = ye(e, 255), t = ye(t, 255), n = ye(n, 255);
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
function U0(e, t, n) {
  e = ye(e, 360) * 6, t = ye(t, 100), n = ye(n, 100);
  var o = Math.floor(e), r = e - o, i = n * (1 - t), a = n * (1 - r * t), l = n * (1 - (1 - r) * t), s = o % 6, u = [n, a, i, i, l, n][s], d = [l, n, n, a, i, i][s], c = [i, i, l, n, n, a][s];
  return { r: u * 255, g: d * 255, b: c * 255 };
}
function fi(e, t, n, o) {
  var r = [
    At(Math.round(e).toString(16)),
    At(Math.round(t).toString(16)),
    At(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function G0(e, t, n, o, r) {
  var i = [
    At(Math.round(e).toString(16)),
    At(Math.round(t).toString(16)),
    At(Math.round(n).toString(16)),
    At(Y0(o))
  ];
  return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function Y0(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Nl(e) {
  return _e(e) / 255;
}
function _e(e) {
  return parseInt(e, 16);
}
function q0(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var pi = {
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
function en(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, i = null, a = !1, l = !1;
  return typeof e == "string" && (e = J0(e)), typeof e == "object" && (Qe(e.r) && Qe(e.g) && Qe(e.b) ? (t = K0(e.r, e.g, e.b), a = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Qe(e.h) && Qe(e.s) && Qe(e.v) ? (o = uo(e.s), r = uo(e.v), t = U0(e.h, o, r), a = !0, l = "hsv") : Qe(e.h) && Qe(e.s) && Qe(e.l) && (o = uo(e.s), i = uo(e.l), t = X0(e.h, o, i), a = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = $u(n), {
    ok: a,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Q0 = "[-\\+]?\\d+%?", Z0 = "[-\\+]?\\d*\\.\\d+%?", dt = "(?:".concat(Z0, ")|(?:").concat(Q0, ")"), Er = "[\\s|\\(]+(".concat(dt, ")[,|\\s]+(").concat(dt, ")[,|\\s]+(").concat(dt, ")\\s*\\)?"), Mr = "[\\s|\\(]+(".concat(dt, ")[,|\\s]+(").concat(dt, ")[,|\\s]+(").concat(dt, ")[,|\\s]+(").concat(dt, ")\\s*\\)?"), ze = {
  CSS_UNIT: new RegExp(dt),
  rgb: new RegExp("rgb" + Er),
  rgba: new RegExp("rgba" + Mr),
  hsl: new RegExp("hsl" + Er),
  hsla: new RegExp("hsla" + Mr),
  hsv: new RegExp("hsv" + Er),
  hsva: new RegExp("hsva" + Mr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function J0(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (pi[e])
    e = pi[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = ze.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = ze.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = ze.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = ze.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = ze.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = ze.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = ze.hex8.exec(e), n ? {
    r: _e(n[1]),
    g: _e(n[2]),
    b: _e(n[3]),
    a: Nl(n[4]),
    format: t ? "name" : "hex8"
  } : (n = ze.hex6.exec(e), n ? {
    r: _e(n[1]),
    g: _e(n[2]),
    b: _e(n[3]),
    format: t ? "name" : "hex"
  } : (n = ze.hex4.exec(e), n ? {
    r: _e(n[1] + n[1]),
    g: _e(n[2] + n[2]),
    b: _e(n[3] + n[3]),
    a: Nl(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = ze.hex3.exec(e), n ? {
    r: _e(n[1] + n[1]),
    g: _e(n[2] + n[2]),
    b: _e(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Qe(e) {
  return !!ze.CSS_UNIT.exec(String(e));
}
var de = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = q0(t)), this.originalInput = t;
      var r = en(t);
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
      return this.a = $u(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = di(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = di(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Rl(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Rl(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), fi(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), G0(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(ye(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(ye(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + fi(this.r, this.g, this.b, !1), n = 0, o = Object.entries(pi); n < o.length; n++) {
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
      return n.l += t / 100, n.l = co(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = co(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = co(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = co(n.s), new e(n);
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
), fo = 2, Bl = 0.16, ey = 0.05, ty = 0.05, ny = 0.15, Su = 5, xu = 4, oy = [{
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
function Hl(e) {
  var t = e.r, n = e.g, o = e.b, r = di(t, n, o);
  return {
    h: r.h * 360,
    s: r.s,
    v: r.v
  };
}
function po(e) {
  var t = e.r, n = e.g, o = e.b;
  return "#".concat(fi(t, n, o, !1));
}
function ry(e, t, n) {
  var o = n / 100, r = {
    r: (t.r - e.r) * o + e.r,
    g: (t.g - e.g) * o + e.g,
    b: (t.b - e.b) * o + e.b
  };
  return r;
}
function zl(e, t, n) {
  var o;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? o = n ? Math.round(e.h) - fo * t : Math.round(e.h) + fo * t : o = n ? Math.round(e.h) + fo * t : Math.round(e.h) - fo * t, o < 0 ? o += 360 : o >= 360 && (o -= 360), o;
}
function jl(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var o;
  return n ? o = e.s - Bl * t : t === xu ? o = e.s + Bl : o = e.s + ey * t, o > 1 && (o = 1), n && t === Su && o > 0.1 && (o = 0.1), o < 0.06 && (o = 0.06), Number(o.toFixed(2));
}
function Ll(e, t, n) {
  var o;
  return n ? o = e.v + ty * t : o = e.v - ny * t, o > 1 && (o = 1), Number(o.toFixed(2));
}
function Lt(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], o = en(e), r = Su; r > 0; r -= 1) {
    var i = Hl(o), a = po(en({
      h: zl(i, r, !0),
      s: jl(i, r, !0),
      v: Ll(i, r, !0)
    }));
    n.push(a);
  }
  n.push(po(o));
  for (var l = 1; l <= xu; l += 1) {
    var s = Hl(o), u = po(en({
      h: zl(s, l),
      s: jl(s, l),
      v: Ll(s, l)
    }));
    n.push(u);
  }
  return t.theme === "dark" ? oy.map(function(d) {
    var c = d.index, p = d.opacity, v = po(ry(en(t.backgroundColor || "#141414"), en(n[c]), p * 100));
    return v;
  }) : n;
}
var Ar = {
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
}, xo = {}, Dr = {};
Object.keys(Ar).forEach(function(e) {
  xo[e] = Lt(Ar[e]), xo[e].primary = xo[e][5], Dr[e] = Lt(Ar[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Dr[e].primary = Dr[e][5];
});
var iy = xo.blue;
const ay = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function ly(e) {
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
const Ou = {
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
}, lr = m(m({}, Ou), {
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
function sy(e, t) {
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
  } = e, c = n(s), p = n(r), v = n(i), g = n(a), h = n(l), y = o(u, d);
  return m(m({}, y), {
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
    colorInfoBg: h[1],
    colorInfoBgHover: h[2],
    colorInfoBorder: h[3],
    colorInfoBorderHover: h[4],
    colorInfoHover: h[4],
    colorInfo: h[6],
    colorInfoActive: h[7],
    colorInfoTextHover: h[8],
    colorInfoText: h[9],
    colorInfoTextActive: h[10],
    colorBgMask: new de("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const cy = (e) => {
  let t = e, n = e, o = e, r = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? o = 1 : e >= 6 && (o = 2), e > 4 && e < 8 ? r = 4 : e >= 8 && (r = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: o,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: r
  };
};
function uy(e) {
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
  }, cy(o));
}
const Ze = (e, t) => new de(e).setAlpha(t).toRgbString(), Pn = (e, t) => new de(e).darken(t).toHexString(), dy = (e) => {
  const t = Lt(e);
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
}, fy = (e, t) => {
  const n = e || "#fff", o = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: o,
    colorText: Ze(o, 0.88),
    colorTextSecondary: Ze(o, 0.65),
    colorTextTertiary: Ze(o, 0.45),
    colorTextQuaternary: Ze(o, 0.25),
    colorFill: Ze(o, 0.15),
    colorFillSecondary: Ze(o, 0.06),
    colorFillTertiary: Ze(o, 0.04),
    colorFillQuaternary: Ze(o, 0.02),
    colorBgLayout: Pn(n, 4),
    colorBgContainer: Pn(n, 0),
    colorBgElevated: Pn(n, 0),
    colorBgSpotlight: Ze(o, 0.85),
    colorBorder: Pn(n, 15),
    colorBorderSecondary: Pn(n, 6)
  };
};
function py(e) {
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
const vy = (e) => {
  const t = py(e), n = t.map((r) => r.size), o = t.map((r) => r.lineHeight);
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
function my(e) {
  const t = Object.keys(Ou).map((n) => {
    const o = Lt(e[n]);
    return new Array(10).fill(1).reduce((r, i, a) => (r[`${n}-${a + 1}`] = o[a], r), {});
  }).reduce((n, o) => (n = m(m({}, n), o), n), {});
  return m(m(m(m(m(m(m({}, e), t), sy(e, {
    generateColorPalettes: dy,
    generateNeutralColorPalettes: fy
  })), vy(e.fontSize)), ly(e)), ay(e)), uy(e));
}
function Rr(e) {
  return e >= 0 && e <= 255;
}
function vo(e, t) {
  const {
    r: n,
    g: o,
    b: r,
    a: i
  } = new de(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: l,
    b: s
  } = new de(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const d = Math.round((n - a * (1 - u)) / u), c = Math.round((o - l * (1 - u)) / u), p = Math.round((r - s * (1 - u)) / u);
    if (Rr(d) && Rr(c) && Rr(p))
      return new de({
        r: d,
        g: c,
        b: p,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new de({
    r: n,
    g: o,
    b: r,
    a: 1
  }).toRgbString();
}
var gy = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function hy(e) {
  const {
    override: t
  } = e, n = gy(e, ["override"]), o = m({}, t);
  Object.keys(lr).forEach((v) => {
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
    colorSplit: vo(r.colorBorderSecondary, r.colorBgContainer),
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
    colorErrorOutline: vo(r.colorErrorBg, r.colorBgContainer),
    colorWarningOutline: vo(r.colorWarningBg, r.colorBgContainer),
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
    controlOutline: vo(r.colorPrimaryBg, r.colorBgContainer),
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
      0 1px 2px -2px ${new de("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new de("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new de("rgba(0, 0, 0, 0.09)").toRgbString()}
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
const Pu = (e, t, n, o, r) => {
  const i = e / 2, a = 0, l = i, s = n * 1 / Math.sqrt(2), u = i - n * (1 - 1 / Math.sqrt(2)), d = i - t * (1 / Math.sqrt(2)), c = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)), p = 2 * i - d, v = c, g = 2 * i - s, h = u, y = 2 * i - a, b = l, C = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2), P = n * (Math.sqrt(2) - 1);
  return {
    pointerEvents: "none",
    width: e,
    height: e,
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      width: C,
      height: C,
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
        value: [`polygon(${P}px 100%, 50% ${P}px, ${2 * i - P}px 100%, ${P}px 100%)`, `path('M ${a} ${l} A ${n} ${n} 0 0 0 ${s} ${u} L ${d} ${c} A ${t} ${t} 0 0 1 ${p} ${v} L ${g} ${h} A ${n} ${n} 0 0 0 ${y} ${b} Z')`]
      },
      content: '""'
    }
  };
};
function yy(e, t) {
  return Ho.reduce((n, o) => {
    const r = e[`${o}-1`], i = e[`${o}-3`], a = e[`${o}-6`], l = e[`${o}-7`];
    return m(m({}, n), t(o, {
      lightColor: r,
      lightBorderColor: i,
      darkColor: a,
      textColor: l
    }));
  }, {});
}
const by = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, Ct = (e) => ({
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
}), _u = () => ({
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
}), Fl = () => ({
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
}), wy = (e) => ({
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
}), Cy = (e, t) => {
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
}, Tu = (e) => ({
  outline: `${e.lineWidthBold}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), zo = (e) => ({
  "&:focus-visible": m({}, Tu(e))
});
function He(e, t, n) {
  return (o) => {
    const r = w(() => o == null ? void 0 : o.value), [i, a, l] = to(), {
      getPrefixCls: s,
      iconPrefixCls: u
    } = Zi(), d = w(() => s()), c = w(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: ["Shared", d.value]
    }));
    ui(c, () => [{
      // Link
      "&": wy(a.value)
    }]);
    const p = w(() => ({
      theme: i.value,
      token: a.value,
      hashId: l.value,
      path: [e, r.value, u.value]
    }));
    return [ui(p, () => {
      const {
        token: v,
        flush: g
      } = Sy(a.value), h = typeof n == "function" ? n(v) : n, y = m(m({}, h), a.value[e]), b = `.${r.value}`, C = xe(v, {
        componentCls: b,
        prefixCls: r.value,
        iconCls: `.${u.value}`,
        antCls: `.${d.value}`
      }, y), P = t(C, {
        hashId: l.value,
        prefixCls: r.value,
        rootPrefixCls: d.value,
        iconPrefixCls: u.value,
        overrideComponentToken: a.value[e]
      });
      return g(e, y), [Cy(a.value, r.value), P];
    }), l];
  };
}
const Iu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let vi = !0;
function xe() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Iu)
    return m({}, ...t);
  vi = !1;
  const o = {};
  return t.forEach((r) => {
    Object.keys(r).forEach((a) => {
      Object.defineProperty(o, a, {
        configurable: !0,
        enumerable: !0,
        get: () => r[a]
      });
    });
  }), vi = !0, o;
}
function $y() {
}
function Sy(e) {
  let t, n = e, o = $y;
  return Iu && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(r, i) {
      return vi && t.add(i), r[i];
    }
  }), o = (r, i) => {
    Array.from(t);
  }), {
    token: n,
    keys: t,
    flush: o
  };
}
const xy = uu(my), Eu = {
  token: lr,
  hashed: !0
}, Mu = Symbol("DesignTokenContext"), mi = j(), Oy = (e) => {
  ie(Mu, e), G(e, () => {
    mi.value = Et(e), rf(mi);
  }, {
    immediate: !0,
    deep: !0
  });
}, Py = D({
  props: {
    value: le()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Oy(w(() => e.value)), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
function to() {
  const e = H(Mu, w(() => mi.value || Eu)), t = w(() => `${k0}-${e.value.hashed || ""}`), n = w(() => e.value.theme || xy), o = m0(n, w(() => [lr, e.value.token]), w(() => ({
    salt: t.value,
    override: m({
      override: e.value.token
    }, e.value.components),
    formatToken: hy
  })));
  return [n, w(() => o.value[0]), w(() => e.value.hashed ? o.value[1] : "")];
}
const Au = D({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = to(), t = w(() => new de(e.value.colorBgBase).toHsl().l < 0.5 ? {
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
Au.PRESENTED_IMAGE_DEFAULT = !0;
const Du = D({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = to(), t = w(() => {
      const {
        colorFill: n,
        colorFillTertiary: o,
        colorFillQuaternary: r,
        colorBgContainer: i
      } = e.value;
      return {
        borderColor: new de(n).onBackground(i).toHexString(),
        shadowColor: new de(o).onBackground(i).toHexString(),
        contentColor: new de(r).onBackground(i).toHexString()
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
Du.PRESENTED_IMAGE_SIMPLE = !0;
const _y = (e) => {
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
}, Ty = He("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, o = xe(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [_y(o)];
});
var Iy = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Ru = f(Au, null, null), Nu = f(Du, null, null), Ey = () => ({
  prefixCls: String,
  imageStyle: le(),
  image: ni(),
  description: ni()
}), na = D({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: Ey(),
  setup(e, t) {
    let {
      slots: n = {},
      attrs: o
    } = t;
    const {
      direction: r,
      prefixCls: i
    } = Ce("empty", e), [a, l] = Ty(i);
    return () => {
      var s, u;
      const d = i.value, c = m(m({}, e), o), {
        image: p = ((s = n.image) === null || s === void 0 ? void 0 : s.call(n)) || Ru,
        description: v = ((u = n.description) === null || u === void 0 ? void 0 : u.call(n)) || void 0,
        imageStyle: g,
        class: h = ""
      } = c, y = Iy(c, ["image", "description", "imageStyle", "class"]);
      return a(f(ru, {
        componentName: "Empty",
        children: (b) => {
          const C = typeof v < "u" ? v : b.description, P = typeof C == "string" ? C : "empty";
          let _ = null;
          return typeof p == "string" ? _ = f("img", {
            alt: P,
            src: p
          }, null) : _ = p, f("div", R({
            class: Q(d, h, l.value, {
              [`${d}-normal`]: p === Nu,
              [`${d}-rtl`]: r.value === "rtl"
            })
          }, y), [f("div", {
            class: `${d}-image`,
            style: g
          }, [_]), C && f("p", {
            class: `${d}-description`
          }, [C]), n.default && f("div", {
            class: `${d}-footer`
          }, [bn(n.default())])]);
        }
      }, null));
    };
  }
});
na.PRESENTED_IMAGE_DEFAULT = Ru;
na.PRESENTED_IMAGE_SIMPLE = Nu;
const _n = Cn(na), Bu = (e) => {
  const {
    prefixCls: t
  } = Ce("empty", e);
  return ((o) => {
    switch (o) {
      case "Table":
      case "List":
        return f(_n, {
          image: _n.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return f(_n, {
          image: _n.PRESENTED_IMAGE_SIMPLE,
          class: `${t.value}-small`
        }, null);
      default:
        return f(_n, null, null);
    }
  })(e.componentName);
};
function My(e) {
  return f(Bu, {
    componentName: e
  }, null);
}
const Hu = Symbol("SizeContextKey"), zu = () => H(Hu, k(void 0)), Ay = (e) => {
  const t = zu();
  return ie(Hu, w(() => e.value || t.value)), e;
}, Ce = (e, t) => {
  const n = zu(), o = or(), r = H(Qi, m(m({}, tu), {
    renderEmpty: ($) => Wr(Bu, {
      componentName: $
    })
  })), i = w(() => r.getPrefixCls(e, t.prefixCls)), a = w(() => {
    var $, T;
    return ($ = t.direction) !== null && $ !== void 0 ? $ : (T = r.direction) === null || T === void 0 ? void 0 : T.value;
  }), l = w(() => {
    var $;
    return ($ = t.iconPrefixCls) !== null && $ !== void 0 ? $ : r.iconPrefixCls.value;
  }), s = w(() => r.getPrefixCls()), u = w(() => {
    var $;
    return ($ = r.autoInsertSpaceInButton) === null || $ === void 0 ? void 0 : $.value;
  }), d = r.renderEmpty, c = r.space, p = r.pageHeader, v = r.form, g = w(() => {
    var $, T;
    return ($ = t.getTargetContainer) !== null && $ !== void 0 ? $ : (T = r.getTargetContainer) === null || T === void 0 ? void 0 : T.value;
  }), h = w(() => {
    var $, T, I;
    return (T = ($ = t.getContainer) !== null && $ !== void 0 ? $ : t.getPopupContainer) !== null && T !== void 0 ? T : (I = r.getPopupContainer) === null || I === void 0 ? void 0 : I.value;
  }), y = w(() => {
    var $, T;
    return ($ = t.dropdownMatchSelectWidth) !== null && $ !== void 0 ? $ : (T = r.dropdownMatchSelectWidth) === null || T === void 0 ? void 0 : T.value;
  }), b = w(() => {
    var $;
    return (t.virtual === void 0 ? (($ = r.virtual) === null || $ === void 0 ? void 0 : $.value) !== !1 : t.virtual !== !1) && y.value !== !1;
  }), C = w(() => t.size || n.value), P = w(() => {
    var $, T, I;
    return ($ = t.autocomplete) !== null && $ !== void 0 ? $ : (I = (T = r.input) === null || T === void 0 ? void 0 : T.value) === null || I === void 0 ? void 0 : I.autocomplete;
  }), _ = w(() => {
    var $;
    return ($ = t.disabled) !== null && $ !== void 0 ? $ : o.value;
  }), x = w(() => {
    var $;
    return ($ = t.csp) !== null && $ !== void 0 ? $ : r.csp;
  }), O = w(() => {
    var $, T;
    return ($ = t.wave) !== null && $ !== void 0 ? $ : (T = r.wave) === null || T === void 0 ? void 0 : T.value;
  });
  return {
    configProvider: r,
    prefixCls: i,
    direction: a,
    size: C,
    getTargetContainer: g,
    getPopupContainer: h,
    space: c,
    pageHeader: p,
    form: v,
    autoInsertSpaceInButton: u,
    renderEmpty: d,
    virtual: b,
    dropdownMatchSelectWidth: y,
    rootPrefixCls: s,
    getPrefixCls: r.getPrefixCls,
    autocomplete: P,
    csp: x,
    iconPrefixCls: l,
    disabled: _,
    select: r.select,
    wave: O
  };
}, Dy = (e) => {
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
}, Ry = He("Wave", (e) => [Dy(e)]);
function Pt(e) {
  const t = typeof e == "function" ? e() : e, n = k(t);
  function o(r) {
    n.value = r;
  }
  return [n, o];
}
function Ny(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Nr(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && Ny(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function By(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: o
  } = getComputedStyle(e);
  return Nr(t) ? t : Nr(n) ? n : Nr(o) ? o : null;
}
function Br(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Hy = D({
  props: {
    target: le(),
    className: String
  },
  setup(e) {
    const t = j(null), [n, o] = Pt(null), [r, i] = Pt([]), [a, l] = Pt(0), [s, u] = Pt(0), [d, c] = Pt(0), [p, v] = Pt(0), [g, h] = Pt(!1);
    function y() {
      const {
        target: $
      } = e, T = getComputedStyle($);
      o(By($));
      const I = T.position === "static", {
        borderLeftWidth: E,
        borderTopWidth: B
      } = T;
      l(I ? $.offsetLeft : Br(-parseFloat(E))), u(I ? $.offsetTop : Br(-parseFloat(B))), c($.offsetWidth), v($.offsetHeight);
      const {
        borderTopLeftRadius: V,
        borderTopRightRadius: X,
        borderBottomLeftRadius: Y,
        borderBottomRightRadius: S
      } = T;
      i([V, X, S, Y].map((M) => Br(parseFloat(M))));
    }
    let b, C, P;
    const _ = () => {
      clearTimeout(P), we.cancel(C), b == null || b.disconnect();
    }, x = () => {
      var $;
      const T = ($ = t.value) === null || $ === void 0 ? void 0 : $.parentElement;
      T && (Io(null, T), T.parentElement && T.parentElement.removeChild(T));
    };
    Be(() => {
      _(), P = setTimeout(() => {
        x();
      }, 5e3);
      const {
        target: $
      } = e;
      $ && (C = we(() => {
        y(), h(!0);
      }), typeof ResizeObserver < "u" && (b = new ResizeObserver(y), b.observe($)));
    }), De(() => {
      _();
    });
    const O = ($) => {
      $.propertyName === "opacity" && x();
    };
    return () => {
      if (!g.value)
        return null;
      const $ = {
        left: `${a.value}px`,
        top: `${s.value}px`,
        width: `${d.value}px`,
        height: `${p.value}px`,
        borderRadius: r.value.map((T) => `${T}px`).join(" ")
      };
      return n && ($["--wave-color"] = n.value), f(wt, {
        appear: !0,
        name: "wave-motion",
        appearFromClass: "wave-motion-appear",
        appearActiveClass: "wave-motion-appear",
        appearToClass: "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [f("div", {
          ref: t,
          class: e.className,
          style: $,
          onTransitionend: O
        }, null)]
      });
    };
  }
});
function zy(e, t) {
  const n = document.createElement("div");
  n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e == null || e.insertBefore(n, e == null ? void 0 : e.firstChild), Io(f(Hy, {
    target: e,
    className: t
  }, null), n);
}
function jy(e, t, n) {
  function o() {
    var r;
    const i = ut(e);
    !((r = n == null ? void 0 : n.value) === null || r === void 0) && r.disabled || !i || zy(i, t.value);
  }
  return o;
}
const ju = D({
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
    const o = kt(), {
      prefixCls: r,
      wave: i
    } = Ce("wave", e), [, a] = Ry(r), l = jy(o, w(() => Q(r.value, a.value)), i);
    let s;
    const u = () => {
      ut(o).removeEventListener("click", s, !0);
    };
    return Be(() => {
      G(() => e.disabled, () => {
        u(), Xe(() => {
          const d = ut(o);
          d == null || d.removeEventListener("click", s, !0), !(!d || d.nodeType !== 1 || e.disabled) && (s = (c) => {
            c.target.tagName === "INPUT" || !Sc(c.target) || // No need wave
            !d.getAttribute || d.getAttribute("disabled") || d.disabled || d.className.includes("disabled") || d.className.includes("-leave") || l();
          }, d.addEventListener("click", s, !0));
        });
      }, {
        immediate: !0,
        flush: "post"
      });
    }), De(() => {
      u();
    }), () => {
      var d;
      return (d = n.default) === null || d === void 0 ? void 0 : d.call(n)[0];
    };
  }
}), Lu = () => ({
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
  icon: A.any,
  href: String,
  target: String,
  title: String,
  onClick: ti(),
  onMousedown: ti()
}), gt = (e, t, n) => {
  Ki(e, `[ant-design-vue: ${t}] ${n}`);
};
var Ly = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Fy = Symbol("iconContext"), Fu = function() {
  return H(Fy, {
    prefixCls: k("anticon"),
    rootClassName: k(""),
    csp: k()
  });
};
function oa() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ky(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var kl = "data-vc-order", Vy = "vc-icon-key", gi = /* @__PURE__ */ new Map();
function ku() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Vy;
}
function ra(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Wy(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Vu(e) {
  return Array.from((gi.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Wu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!oa())
    return null;
  var n = t.csp, o = t.prepend, r = document.createElement("style");
  r.setAttribute(kl, Wy(o)), n && n.nonce && (r.nonce = n.nonce), r.innerHTML = e;
  var i = ra(t), a = i.firstChild;
  if (o) {
    if (o === "queue") {
      var l = Vu(i).filter(function(s) {
        return ["prepend", "prependQueue"].includes(s.getAttribute(kl));
      });
      if (l.length)
        return i.insertBefore(r, l[l.length - 1].nextSibling), r;
    }
    i.insertBefore(r, a);
  } else
    i.appendChild(r);
  return r;
}
function Ky(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = ra(t);
  return Vu(n).find(function(o) {
    return o.getAttribute(ku(t)) === e;
  });
}
function Xy(e, t) {
  var n = gi.get(e);
  if (!n || !ky(document, n)) {
    var o = Wu("", t), r = o.parentNode;
    gi.set(e, r), e.removeChild(o);
  }
}
function Uy(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = ra(n);
  Xy(o, n);
  var r = Ky(t, n);
  if (r)
    return n.csp && n.csp.nonce && r.nonce !== n.csp.nonce && (r.nonce = n.csp.nonce), r.innerHTML !== e && (r.innerHTML = e), r;
  var i = Wu(e, n);
  return i.setAttribute(ku(n), t), i;
}
function Vl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Gy(e, r, n[r]);
    });
  }
  return e;
}
function Gy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Yy(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function qy(e, t) {
  Yy(e, "[@ant-design/icons-vue] ".concat(t));
}
function Wl(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function hi(e, t, n) {
  return n ? Wr(e.tag, Vl({
    key: t
  }, n, e.attrs), (e.children || []).map(function(o, r) {
    return hi(o, "".concat(t, "-").concat(e.tag, "-").concat(r));
  })) : Wr(e.tag, Vl({
    key: t
  }, e.attrs), (e.children || []).map(function(o, r) {
    return hi(o, "".concat(t, "-").concat(e.tag, "-").concat(r));
  }));
}
function Ku(e) {
  return Lt(e)[0];
}
function Xu(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Qy = `
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
function Uu(e) {
  return e && e.getRootNode && e.getRootNode();
}
function Zy(e) {
  return oa() ? Uu(e) instanceof ShadowRoot : !1;
}
function Jy(e) {
  return Zy(e) ? Uu(e) : null;
}
var eb = function() {
  var t = Fu(), n = t.prefixCls, o = t.csp, r = kt(), i = Qy;
  n && (i = i.replace(/anticon/g, n.value)), Xe(function() {
    if (oa()) {
      var a = r.vnode.el, l = Jy(a);
      Uy(i, "@ant-design-vue-icons", {
        prepend: !0,
        csp: o.value,
        attachTo: l
      });
    }
  });
}, tb = ["icon", "primaryColor", "secondaryColor"];
function nb(e, t) {
  if (e == null)
    return {};
  var n = ob(e, t), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      o = i[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
function ob(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Oo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      rb(e, r, n[r]);
    });
  }
  return e;
}
function rb(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Rn = ot({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function ib(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Rn.primaryColor = t, Rn.secondaryColor = n || Ku(t), Rn.calculated = !!n;
}
function ab() {
  return Oo({}, Rn);
}
var $t = function(t, n) {
  var o = Oo({}, t, n.attrs), r = o.icon, i = o.primaryColor, a = o.secondaryColor, l = nb(o, tb), s = Rn;
  if (i && (s = {
    primaryColor: i,
    secondaryColor: a || Ku(i)
  }), qy(Wl(r), "icon should be icon definiton, but got ".concat(r)), !Wl(r))
    return null;
  var u = r;
  return u && typeof u.icon == "function" && (u = Oo({}, u, {
    icon: u.icon(s.primaryColor, s.secondaryColor)
  })), hi(u.icon, "svg-".concat(u.name), Oo({}, l, {
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
$t.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
$t.inheritAttrs = !1;
$t.displayName = "IconBase";
$t.getTwoToneColors = ab;
$t.setTwoToneColors = ib;
function lb(e, t) {
  return db(e) || ub(e, t) || cb(e, t) || sb();
}
function sb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cb(e, t) {
  if (e) {
    if (typeof e == "string")
      return Kl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Kl(e, t);
  }
}
function Kl(e, t) {
  t > e.length && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++)
    o[n] = e[n];
  return o;
}
function ub(e, t) {
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
function db(e) {
  if (Array.isArray(e))
    return e;
}
function Gu(e) {
  var t = Xu(e), n = lb(t, 2), o = n[0], r = n[1];
  return $t.setTwoToneColors({
    primaryColor: o,
    secondaryColor: r
  });
}
function fb() {
  var e = $t.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var pb = D({
  name: "InsertStyles",
  setup: function() {
    return eb(), function() {
      return null;
    };
  }
}), vb = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function mb(e, t) {
  return bb(e) || yb(e, t) || hb(e, t) || gb();
}
function gb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hb(e, t) {
  if (e) {
    if (typeof e == "string")
      return Xl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Xl(e, t);
  }
}
function Xl(e, t) {
  t > e.length && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++)
    o[n] = e[n];
  return o;
}
function yb(e, t) {
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
function bb(e) {
  if (Array.isArray(e))
    return e;
}
function Ul(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Mn(e, r, n[r]);
    });
  }
  return e;
}
function Mn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function wb(e, t) {
  if (e == null)
    return {};
  var n = Cb(e, t), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      o = i[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
function Cb(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
Gu(iy.primary);
var fe = function(t, n) {
  var o, r = Ul({}, t, n.attrs), i = r.class, a = r.icon, l = r.spin, s = r.rotate, u = r.tabindex, d = r.twoToneColor, c = r.onClick, p = wb(r, vb), v = Fu(), g = v.prefixCls, h = v.rootClassName, y = (o = {}, Mn(o, h.value, !!h.value), Mn(o, g.value, !0), Mn(o, "".concat(g.value, "-").concat(a.name), !!a.name), Mn(o, "".concat(g.value, "-spin"), !!l || a.name === "loading"), o), b = u;
  b === void 0 && c && (b = -1);
  var C = s ? {
    msTransform: "rotate(".concat(s, "deg)"),
    transform: "rotate(".concat(s, "deg)")
  } : void 0, P = Xu(d), _ = mb(P, 2), x = _[0], O = _[1];
  return f("span", Ul({
    role: "img",
    "aria-label": a.name
  }, p, {
    onClick: c,
    class: [y, i],
    tabindex: b
  }), [f($t, {
    icon: a,
    primaryColor: x,
    secondaryColor: O,
    style: C
  }, null), f(pb, null, null)]);
};
fe.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
fe.displayName = "AntdIcon";
fe.inheritAttrs = !1;
fe.getTwoToneColor = fb;
fe.setTwoToneColor = Gu;
function Gl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      $b(e, r, n[r]);
    });
  }
  return e;
}
function $b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ht = function(t, n) {
  var o = Gl({}, t, n.attrs);
  return f(fe, Gl({}, o, {
    icon: Ly
  }), null);
};
ht.displayName = "LoadingOutlined";
ht.inheritAttrs = !1;
const Yl = (e) => {
  e && (e.style.width = "0px", e.style.opacity = "0", e.style.transform = "scale(0)");
}, ql = (e) => {
  Xe(() => {
    e && (e.style.width = `${e.scrollWidth}px`, e.style.opacity = "1", e.style.transform = "scale(1)");
  });
}, Ql = (e) => {
  e && e.style && (e.style.width = null, e.style.opacity = null, e.style.transform = null);
}, Sb = D({
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
        }, [f(ht, null, null)]);
      const r = !!o;
      return f(wt, {
        name: `${n}-loading-icon-motion`,
        onBeforeEnter: Yl,
        onEnter: ql,
        onAfterEnter: Ql,
        onBeforeLeave: ql,
        onLeave: (i) => {
          setTimeout(() => {
            Yl(i);
          });
        },
        onAfterLeave: Ql
      }, {
        default: () => [r ? f("span", {
          class: `${n}-loading-icon`
        }, [f(ht, null, null)]) : null]
      });
    };
  }
}), Zl = (e, t) => ({
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
}), xb = (e) => {
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
      Zl(`${t}-primary`, r),
      Zl(`${t}-danger`, i)
    ]
  };
};
function Ob(e, t, n) {
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
function Pb(e, t, n) {
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
function _b(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, o = `${n}-compact`;
  return {
    [o]: m(m({}, Ob(e, o, t)), Pb(n, o, t))
  };
}
function Tb(e, t) {
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
function Ib(e, t) {
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
function Eb(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: m(m({}, Tb(e, t)), Ib(e.componentCls, t))
  };
}
const Mb = (e) => {
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
      "&:not(:disabled)": m({}, zo(e)),
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
}, rt = (e, t) => ({
  "&:not(:disabled)": {
    "&:hover": e,
    "&:active": t
  }
}), Ab = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Db = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), yi = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), jo = (e, t, n, o, r, i, a) => ({
  [`&${e}-background-ghost`]: m(m({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: n || void 0,
    boxShadow: "none"
  }, rt(m({
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
}), ia = (e) => ({
  "&:disabled": m({}, yi(e))
}), Yu = (e) => m({}, ia(e)), Lo = (e) => ({
  "&:disabled": {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), qu = (e) => m(m(m(m(m({}, Yu(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), rt({
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), jo(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: m(m(m({
    color: e.colorError,
    borderColor: e.colorError
  }, rt({
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), jo(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), ia(e))
}), Rb = (e) => m(m(m(m(m({}, Yu(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), rt({
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), jo(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: m(m(m({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, rt({
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), jo(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), ia(e))
}), Nb = (e) => m(m({}, qu(e)), {
  borderStyle: "dashed"
}), Bb = (e) => m(m(m({
  color: e.colorLink
}, rt({
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Lo(e)), {
  [`&${e.componentCls}-dangerous`]: m(m({
    color: e.colorError
  }, rt({
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), Lo(e))
}), Hb = (e) => m(m(m({}, rt({
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), Lo(e)), {
  [`&${e.componentCls}-dangerous`]: m(m({
    color: e.colorError
  }, Lo(e)), rt({
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), zb = (e) => m(m({}, yi(e)), {
  [`&${e.componentCls}:hover`]: m({}, yi(e))
}), jb = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: qu(e),
    [`${t}-primary`]: Rb(e),
    [`${t}-dashed`]: Nb(e),
    [`${t}-link`]: Bb(e),
    [`${t}-text`]: Hb(e),
    [`${t}-disabled`]: zb(e)
  };
}, aa = function(e) {
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
      [`${n}${n}-circle${t}`]: Ab(e)
    },
    {
      [`${n}${n}-round${t}`]: Db(e)
    }
  ];
}, Lb = (e) => aa(e), Fb = (e) => {
  const t = xe(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM
  });
  return aa(t, `${e.componentCls}-sm`);
}, kb = (e) => {
  const t = xe(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG
  });
  return aa(t, `${e.componentCls}-lg`);
}, Vb = (e) => {
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
}, Wb = He("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: n
  } = e, o = xe(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: n
  });
  return [
    // Shared
    Mb(o),
    // Size
    Fb(o),
    Lb(o),
    kb(o),
    // Block
    Vb(o),
    // Group (type, ghost, danger, disabled, loading)
    jb(o),
    // Button Group
    xb(o),
    // Space Compact
    _b(e, {
      focus: !1
    }),
    Eb(e)
  ];
});
function la(e) {
  const t = Symbol("contextKey");
  return {
    useProvide: (r, i) => {
      const a = ot({});
      return ie(t, a), je(() => {
        m(a, r, i || {});
      }), a;
    },
    useInject: () => H(t, e) || {}
  };
}
const Kb = () => ({
  prefixCls: String,
  size: {
    type: String
  }
}), Qu = la(), bi = D({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: Kb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      prefixCls: o,
      direction: r
    } = Ce("btn-group", e), [, , i] = to();
    Qu.useProvide(ot({
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
          gt(!l, "Button.Group", "Invalid prop `size`.");
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
      }, [Te((l = n.default) === null || l === void 0 ? void 0 : l.call(n))]);
    };
  }
}), Xb = (e) => {
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
}, Ub = (e) => {
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
}, Gb = He("Space", (e) => [Ub(e), Xb(e)]);
function Yb() {
}
function qb(e, t, n, o) {
  for (var r = e.length, i = n + -1; ++i < r; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
function Qb(e) {
  return e !== e;
}
function Zb(e, t, n) {
  for (var o = n - 1, r = e.length; ++o < r; )
    if (e[o] === t)
      return o;
  return -1;
}
function Jb(e, t, n) {
  return t === t ? Zb(e, t, n) : qb(e, Qb, n);
}
function e1(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Jb(e, t, 0) > -1;
}
var t1 = "[object Map]", n1 = "[object Set]", o1 = Object.prototype, r1 = o1.hasOwnProperty;
function Zu(e) {
  if (e == null)
    return !0;
  if (Wc(e) && (kn(e) || typeof e == "string" || typeof e.splice == "function" || Ro(e) || Ui(e) || zc(e)))
    return !e.length;
  var t = Je(e);
  if (t == t1 || t == n1)
    return !e.size;
  if (kc(e))
    return !Vc(e).length;
  for (var n in e)
    if (r1.call(e, n))
      return !1;
  return !0;
}
var i1 = 1 / 0, a1 = rn && 1 / Xi(new rn([, -0]))[1] == i1 ? function(e) {
  return new rn(e);
} : Yb, l1 = 200;
function s1(e, t, n) {
  var o = -1, r = e1, i = e.length, a = !0, l = [], s = l;
  if (i >= l1) {
    var u = a1(e);
    if (u)
      return Xi(u);
    a = !1, r = Nc, s = new Fn();
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
function Hr(e) {
  return e && e.length ? s1(e) : [];
}
const c1 = () => ({
  compactSize: String,
  compactDirection: A.oneOf(pn("horizontal", "vertical")).def("horizontal"),
  isFirstItem: $e(),
  isLastItem: $e()
}), sr = la(null), u1 = (e, t) => {
  const n = sr.useInject(), o = w(() => {
    if (!n || Zu(n))
      return "";
    const {
      compactDirection: r,
      isFirstItem: i,
      isLastItem: a
    } = n, l = r === "vertical" ? "-vertical-" : "-";
    return Q({
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
    return sr.useProvide(null), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
const d1 = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: A.oneOf(pn("horizontal", "vertical")).def("horizontal"),
  align: A.oneOf(pn("start", "end", "center", "baseline")),
  block: {
    type: Boolean,
    default: void 0
  }
}), f1 = D({
  name: "CompactItem",
  props: c1(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return sr.useProvide(e), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
D({
  name: "ASpaceCompact",
  inheritAttrs: !1,
  props: d1(),
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const {
      prefixCls: r,
      direction: i
    } = Ce("space-compact", e), a = sr.useInject(), [l, s] = Gb(r), u = w(() => Q(r.value, s.value, {
      [`${r.value}-rtl`]: i.value === "rtl",
      [`${r.value}-block`]: e.block,
      [`${r.value}-vertical`]: e.direction === "vertical"
    }));
    return () => {
      var d;
      const c = Te(((d = o.default) === null || d === void 0 ? void 0 : d.call(o)) || []);
      return c.length === 0 ? null : l(f("div", R(R({}, n), {}, {
        class: [u.value, n.class]
      }), [c.map((p, v) => {
        var g;
        const h = p && p.key || `${r.value}-item-${v}`, y = !a || Zu(a);
        return f(f1, {
          key: h,
          compactSize: (g = e.size) !== null && g !== void 0 ? g : "middle",
          compactDirection: e.direction,
          isFirstItem: v === 0 && (y || (a == null ? void 0 : a.isFirstItem)),
          isLastItem: v === c.length - 1 && (y || (a == null ? void 0 : a.isLastItem))
        }, {
          default: () => [p]
        });
      })]));
    };
  }
});
const Jl = /^[\u4e00-\u9fa5]{2}$/, es = Jl.test.bind(Jl);
function mo(e) {
  return e === "text" || e === "link";
}
const vt = D({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: Zn(Lu(), {
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
    } = Ce("btn", e), [d, c] = Wb(a), p = Qu.useInject(), v = or(), g = w(() => {
      var S;
      return (S = e.disabled) !== null && S !== void 0 ? S : v.value;
    }), h = j(null), y = j(void 0);
    let b = !1;
    const C = j(!1), P = j(!1), _ = w(() => l.value !== !1), {
      compactSize: x,
      compactItemClassnames: O
    } = u1(a, s), $ = w(() => typeof e.loading == "object" && e.loading.delay ? e.loading.delay || !0 : !!e.loading);
    G($, (S) => {
      clearTimeout(y.value), typeof $.value == "number" ? y.value = setTimeout(() => {
        C.value = S;
      }, $.value) : C.value = S;
    }, {
      immediate: !0
    });
    const T = w(() => {
      const {
        type: S,
        shape: M = "default",
        ghost: z,
        block: F,
        danger: J
      } = e, oe = a.value, L = {
        large: "lg",
        small: "sm",
        middle: void 0
      }, ee = x.value || (p == null ? void 0 : p.size) || u.value, re = ee && L[ee] || "";
      return [O.value, {
        [c.value]: !0,
        [`${oe}`]: !0,
        [`${oe}-${M}`]: M !== "default" && M,
        [`${oe}-${S}`]: S,
        [`${oe}-${re}`]: re,
        [`${oe}-loading`]: C.value,
        [`${oe}-background-ghost`]: z && !mo(S),
        [`${oe}-two-chinese-chars`]: P.value && _.value,
        [`${oe}-block`]: F,
        [`${oe}-dangerous`]: !!J,
        [`${oe}-rtl`]: s.value === "rtl"
      }];
    }), I = () => {
      const S = h.value;
      if (!S || l.value === !1)
        return;
      const M = S.textContent;
      b && es(M) ? P.value || (P.value = !0) : P.value && (P.value = !1);
    }, E = (S) => {
      if (C.value || g.value) {
        S.preventDefault();
        return;
      }
      r("click", S);
    }, B = (S) => {
      r("mousedown", S);
    }, V = (S, M) => {
      const z = M ? " " : "";
      if (S.type === Fs) {
        let F = S.children.trim();
        return es(F) && (F = F.split("").join(z)), f("span", null, [F]);
      }
      return S;
    };
    return je(() => {
      gt(!(e.ghost && mo(e.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    }), Be(I), qn(I), De(() => {
      y.value && clearTimeout(y.value);
    }), i({
      focus: () => {
        var S;
        (S = h.value) === null || S === void 0 || S.focus();
      },
      blur: () => {
        var S;
        (S = h.value) === null || S === void 0 || S.blur();
      }
    }), () => {
      var S, M;
      const {
        icon: z = (S = n.icon) === null || S === void 0 ? void 0 : S.call(n)
      } = e, F = Te((M = n.default) === null || M === void 0 ? void 0 : M.call(n));
      b = F.length === 1 && !z && !mo(e.type);
      const {
        type: J,
        htmlType: oe,
        href: L,
        title: ee,
        target: re
      } = e, ge = C.value ? "loading" : z, pe = m(m({}, o), {
        title: ee,
        disabled: g.value,
        class: [T.value, o.class, {
          [`${a.value}-icon-only`]: F.length === 0 && !!ge
        }],
        onClick: E,
        onMousedown: B
      });
      g.value || delete pe.disabled;
      const N = z && !C.value ? z : f(Sb, {
        existIcon: !!z,
        prefixCls: a.value,
        loading: !!C.value
      }, null), U = F.map((te) => V(te, b && _.value));
      if (L !== void 0)
        return d(f("a", R(R({}, pe), {}, {
          href: L,
          target: re,
          ref: h
        }), [N, U]));
      let Z = f("button", R(R({}, pe), {}, {
        ref: h,
        type: oe
      }), [N, U]);
      if (!mo(J)) {
        const te = /* @__PURE__ */ function() {
          return Z;
        }();
        Z = f(ju, {
          ref: "wave",
          disabled: !!C.value
        }, {
          default: () => [te]
        });
      }
      return d(Z);
    };
  }
});
vt.Group = bi;
vt.install = function(e) {
  return e.component(vt.name, vt), e.component(bi.name, bi), e;
};
const Ju = () => ({
  arrow: Xc([Boolean, Object]),
  trigger: {
    type: [Array, String]
  },
  menu: le(),
  overlay: A.any,
  /** @deprecated Please use `open` instead */
  visible: $e(),
  open: $e(),
  disabled: $e(),
  danger: $e(),
  autofocus: $e(),
  align: le(),
  getPopupContainer: Function,
  prefixCls: String,
  transitionName: String,
  placement: String,
  overlayClassName: String,
  overlayStyle: le(),
  forceRender: $e(),
  mouseEnterDelay: Number,
  mouseLeaveDelay: Number,
  openClassName: String,
  minOverlayWidthMatchTrigger: $e(),
  destroyPopupOnHide: $e(),
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
}), zr = Lu(), p1 = () => m(m({}, Ju()), {
  type: zr.type,
  size: String,
  htmlType: zr.htmlType,
  href: String,
  disabled: $e(),
  prefixCls: String,
  icon: A.any,
  title: String,
  loading: zr.loading,
  onClick: ti()
});
var v1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" };
function ts(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      m1(e, r, n[r]);
    });
  }
  return e;
}
function m1(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var cr = function(t, n) {
  var o = ts({}, t, n.attrs);
  return f(fe, ts({}, o, {
    icon: v1
  }), null);
};
cr.displayName = "EllipsisOutlined";
cr.inheritAttrs = !1;
function go(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return e.map((n) => `${t}${n}`).join(",");
}
const ed = 8;
function td(e) {
  const t = ed, {
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
function g1(e, t) {
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
  } = td({
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
      }, Pu(o, i, a, s, l)), {
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
      [go(["&-placement-topLeft", "&-placement-top", "&-placement-topRight"], u)]: {
        paddingBottom: g
      },
      // >>>>> Bottom
      [go(["&-placement-bottomLeft", "&-placement-bottom", "&-placement-bottomRight"], u)]: {
        paddingTop: g
      },
      // >>>>> Left
      [go(["&-placement-leftTop", "&-placement-left", "&-placement-leftBottom"], u)]: {
        paddingRight: {
          _skip_check_: !0,
          value: g
        }
      },
      // >>>>> Right
      [go(["&-placement-rightTop", "&-placement-right", "&-placement-rightBottom"], u)]: {
        paddingLeft: {
          _skip_check_: !0,
          value: g
        }
      }
    }
  };
}
const h1 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), y1 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), sa = function(e, t, n, o) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: m(m({}, h1(o)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: m(m({}, y1(o)), {
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
}, b1 = new q("antMoveDownIn", {
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
}), w1 = new q("antMoveDownOut", {
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
}), C1 = new q("antMoveLeftIn", {
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
}), $1 = new q("antMoveLeftOut", {
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
}), S1 = new q("antMoveRightIn", {
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
}), x1 = new q("antMoveRightOut", {
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
}), O1 = new q("antMoveUpIn", {
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
}), P1 = new q("antMoveUpOut", {
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
}), _1 = {
  "move-up": {
    inKeyframes: O1,
    outKeyframes: P1
  },
  "move-down": {
    inKeyframes: b1,
    outKeyframes: w1
  },
  "move-left": {
    inKeyframes: C1,
    outKeyframes: $1
  },
  "move-right": {
    inKeyframes: S1,
    outKeyframes: x1
  }
}, ns = (e, t) => {
  const {
    antCls: n
  } = e, o = `${n}-${t}`, {
    inKeyframes: r,
    outKeyframes: i
  } = _1[t];
  return [sa(o, r, i, e.motionDurationMid), {
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
}, nd = new q("antSlideUpIn", {
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
}), od = new q("antSlideUpOut", {
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
}), rd = new q("antSlideDownIn", {
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
}), id = new q("antSlideDownOut", {
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
}), T1 = new q("antSlideLeftIn", {
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
}), I1 = new q("antSlideLeftOut", {
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
}), E1 = new q("antSlideRightIn", {
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
}), M1 = new q("antSlideRightOut", {
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
}), A1 = {
  "slide-up": {
    inKeyframes: nd,
    outKeyframes: od
  },
  "slide-down": {
    inKeyframes: rd,
    outKeyframes: id
  },
  "slide-left": {
    inKeyframes: T1,
    outKeyframes: I1
  },
  "slide-right": {
    inKeyframes: E1,
    outKeyframes: M1
  }
}, Fo = (e, t) => {
  const {
    antCls: n
  } = e, o = `${n}-${t}`, {
    inKeyframes: r,
    outKeyframes: i
  } = A1[t];
  return [sa(o, r, i, e.motionDurationMid), {
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
}, D1 = new q("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), R1 = new q("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), os = new q("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), rs = new q("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), N1 = new q("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), B1 = new q("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), H1 = new q("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), z1 = new q("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), j1 = new q("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), L1 = new q("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), F1 = new q("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), k1 = new q("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), V1 = {
  zoom: {
    inKeyframes: D1,
    outKeyframes: R1
  },
  "zoom-big": {
    inKeyframes: os,
    outKeyframes: rs
  },
  "zoom-big-fast": {
    inKeyframes: os,
    outKeyframes: rs
  },
  "zoom-left": {
    inKeyframes: H1,
    outKeyframes: z1
  },
  "zoom-right": {
    inKeyframes: j1,
    outKeyframes: L1
  },
  "zoom-up": {
    inKeyframes: N1,
    outKeyframes: B1
  },
  "zoom-down": {
    inKeyframes: F1,
    outKeyframes: k1
  }
}, ca = (e, t) => {
  const {
    antCls: n
  } = e, o = `${n}-${t}`, {
    inKeyframes: r,
    outKeyframes: i
  } = V1[t];
  return [sa(o, r, i, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
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
}, W1 = (e) => ({
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
}), K1 = (e) => {
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
}, X1 = (e) => {
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
}, U1 = (e) => {
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
    controlPaddingHorizontal: h,
    colorBgElevated: y,
    boxShadowPopoverArrow: b
  } = e;
  return [
    {
      [t]: m(m({}, Ct(e)), {
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
        }, Pu(a, e.borderRadiusXS, e.borderRadiusOuter, y, b)),
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
          animationName: nd
        },
        [`&${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-topLeft,
          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-topLeft,
          &${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-top,
          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-top,
          &${l}-slide-up-enter${l}-slide-up-enter-active${t}-placement-topRight,
          &${l}-slide-up-appear${l}-slide-up-appear-active${t}-placement-topRight`]: {
          animationName: rd
        },
        [`&${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottomLeft,
          &${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottom,
          &${l}-slide-down-leave${l}-slide-down-leave-active${t}-placement-bottomRight`]: {
          animationName: od
        },
        [`&${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-topLeft,
          &${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-top,
          &${l}-slide-up-leave${l}-slide-up-leave-active${t}-placement-topRight`]: {
          animationName: id
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
          backgroundColor: y,
          backgroundClip: "padding-box",
          borderRadius: e.borderRadiusLG,
          outline: "none",
          boxShadow: e.boxShadowSecondary
        }, zo(e)), {
          [`${n}-item-group-title`]: {
            padding: `${d}px ${h}px`,
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
            padding: `${d}px ${h}px`,
            color: e.colorText,
            fontWeight: "normal",
            fontSize: c,
            lineHeight: e.lineHeight,
            cursor: "pointer",
            transition: `all ${u}`,
            "&:hover, &-active": {
              backgroundColor: e.controlItemBgHover
            }
          }, zo(e)), {
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
                backgroundColor: y,
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
            paddingInlineEnd: h + e.fontSizeSM
          },
          [`${n}-submenu-vertical`]: {
            position: "relative"
          },
          [`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]: {
            [`&, ${t}-menu-submenu-arrow-icon`]: {
              color: v,
              backgroundColor: y,
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
    [Fo(e, "slide-up"), Fo(e, "slide-down"), ns(e, "move-up"), ns(e, "move-down"), ca(e, "zoom-big")]
  ];
}, ad = He("Dropdown", (e, t) => {
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
  } = td({
    sizePopupArrow: r,
    contentRadius: c,
    borderRadiusOuter: d
  }), g = xe(e, {
    menuCls: `${u}-menu`,
    rootPrefixCls: n,
    dropdownArrowDistance: r / 2 + o,
    dropdownArrowOffset: v,
    dropdownPaddingVertical: p,
    dropdownEdgeChildPadding: s
  });
  return [U1(g), K1(g), X1(g)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50
}));
var G1 = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Y1 = vt.Group, ko = D({
  compatConfig: {
    MODE: 3
  },
  name: "ADropdownButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: Zn(p1(), {
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
    } = Ce("dropdown", e), u = w(() => `${a.value}-button`), [d, c] = ad(a);
    return () => {
      var p, v;
      const g = m(m({}, e), o), {
        type: h = "default",
        disabled: y,
        danger: b,
        loading: C,
        htmlType: P,
        class: _ = "",
        overlay: x = (p = n.overlay) === null || p === void 0 ? void 0 : p.call(n),
        trigger: O,
        align: $,
        open: T,
        visible: I,
        onVisibleChange: E,
        placement: B = l.value === "rtl" ? "bottomLeft" : "bottomRight",
        href: V,
        title: X,
        icon: Y = ((v = n.icon) === null || v === void 0 ? void 0 : v.call(n)) || f(cr, null, null),
        mouseEnterDelay: S,
        mouseLeaveDelay: M,
        overlayClassName: z,
        overlayStyle: F,
        destroyPopupOnHide: J,
        onClick: oe,
        "onUpdate:open": L
      } = g, ee = G1(g, ["type", "disabled", "danger", "loading", "htmlType", "class", "overlay", "trigger", "align", "open", "visible", "onVisibleChange", "placement", "href", "title", "icon", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "onClick", "onUpdate:open"]), re = {
        align: $,
        disabled: y,
        trigger: y ? [] : O,
        placement: B,
        getPopupContainer: s == null ? void 0 : s.value,
        onOpenChange: i,
        mouseEnterDelay: S,
        mouseLeaveDelay: M,
        open: T ?? I,
        overlayClassName: z,
        overlayStyle: F,
        destroyPopupOnHide: J
      }, ge = f(vt, {
        danger: b,
        type: h,
        disabled: y,
        loading: C,
        onClick: oe,
        htmlType: P,
        href: V,
        title: X
      }, {
        default: n.default
      }), pe = f(vt, {
        danger: b,
        type: h,
        icon: Y
      }, null);
      return d(f(Y1, R(R({}, ee), {}, {
        class: Q(u.value, _, c.value)
      }), {
        default: () => [n.leftButton ? n.leftButton({
          button: ge
        }) : ge, f(Bt, re, {
          default: () => [n.rightButton ? n.rightButton({
            button: pe
          }) : pe],
          overlay: () => x
        })]
      }));
    };
  }
});
var q1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
function is(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Q1(e, r, n[r]);
    });
  }
  return e;
}
function Q1(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Vo = function(t, n) {
  var o = is({}, t, n.attrs);
  return f(fe, is({}, o, {
    icon: q1
  }), null);
};
Vo.displayName = "RightOutlined";
Vo.inheritAttrs = !1;
function ld(e, t) {
  const n = m({}, e);
  for (let o = 0; o < t.length; o += 1) {
    const r = t[o];
    delete n[r];
  }
  return n;
}
const Me = {
  adjustX: 1,
  adjustY: 1
}, Ae = [0, 0], sd = {
  left: {
    points: ["cr", "cl"],
    overflow: Me,
    offset: [-4, 0],
    targetOffset: Ae
  },
  right: {
    points: ["cl", "cr"],
    overflow: Me,
    offset: [4, 0],
    targetOffset: Ae
  },
  top: {
    points: ["bc", "tc"],
    overflow: Me,
    offset: [0, -4],
    targetOffset: Ae
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Me,
    offset: [0, 4],
    targetOffset: Ae
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Me,
    offset: [0, -4],
    targetOffset: Ae
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Me,
    offset: [-4, 0],
    targetOffset: Ae
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Me,
    offset: [0, -4],
    targetOffset: Ae
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Me,
    offset: [4, 0],
    targetOffset: Ae
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Me,
    offset: [0, 4],
    targetOffset: Ae
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Me,
    offset: [4, 0],
    targetOffset: Ae
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Me,
    offset: [0, 4],
    targetOffset: Ae
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Me,
    offset: [-4, 0],
    targetOffset: Ae
  }
}, Z1 = {
  adjustX: 1,
  adjustY: 1
}, as = {
  adjustX: 0,
  adjustY: 0
}, J1 = [0, 0];
function ls(e) {
  return typeof e == "boolean" ? e ? Z1 : as : m(m({}, as), e);
}
function cd(e) {
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
      overflow: ls(r),
      targetOffset: J1
    }) : m(m({}, sd[l]), {
      overflow: ls(r)
    }), a[l].ignoreShake = !0;
  }), a;
}
const ud = Symbol("OverrideContextKey"), dd = () => H(ud, void 0), ew = (e) => {
  var t, n, o;
  const {
    prefixCls: r,
    mode: i,
    selectable: a,
    validator: l,
    onClick: s,
    expandIcon: u
  } = dd() || {};
  ie(ud, {
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
}, Bt = D({
  compatConfig: {
    MODE: 3
  },
  name: "ADropdown",
  inheritAttrs: !1,
  props: Zn(Ju(), {
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
    } = Ce("dropdown", e), [u, d] = ad(i);
    process.env.NODE_ENV !== "production" && [["visible", "open"], ["onVisibleChange", "onOpenChange"], ["onUpdate:visible", "onUpdate:open"]].forEach((y) => {
      let [b, C] = y;
      Ge(e[b] === void 0, "Dropdown", `\`${b}\` is deprecated which will be removed in next major version, please use \`${C}\` instead.`);
    });
    const c = w(() => {
      const {
        placement: y = "",
        transitionName: b
      } = e;
      return b !== void 0 ? b : y.includes("top") ? `${a.value}-slide-down` : `${a.value}-slide-up`;
    });
    ew({
      prefixCls: w(() => `${i.value}-menu`),
      expandIcon: w(() => f("span", {
        class: `${i.value}-menu-submenu-arrow`
      }, [f(Vo, {
        class: `${i.value}-menu-submenu-arrow-icon`
      }, null)])),
      mode: w(() => "vertical"),
      selectable: w(() => !1),
      onClick: () => {
      },
      validator: (y) => {
        let {
          mode: b
        } = y;
        Ge(!b || b === "vertical", "Dropdown", `mode="${b}" is not supported for Dropdown's Menu.`);
      }
    });
    const p = () => {
      var y, b, C;
      const P = e.overlay || ((y = n.overlay) === null || y === void 0 ? void 0 : y.call(n)), _ = Array.isArray(P) ? P[0] : P;
      if (!_)
        return null;
      const x = _.props || {};
      gt(!x.mode || x.mode === "vertical", "Dropdown", `mode="${x.mode}" is not supported for Dropdown's Menu.`);
      const {
        selectable: O = !1,
        expandIcon: $ = (C = (b = _.children) === null || b === void 0 ? void 0 : b.expandIcon) === null || C === void 0 ? void 0 : C.call(b)
      } = x, T = typeof $ < "u" && cn($) ? $ : f("span", {
        class: `${i.value}-menu-submenu-arrow`
      }, [f(Vo, {
        class: `${i.value}-menu-submenu-arrow-icon`
      }, null)]);
      return cn(_) ? Re(_, {
        mode: "vertical",
        selectable: O,
        expandIcon: () => T
      }) : _;
    }, v = w(() => {
      const y = e.placement;
      if (!y)
        return l.value === "rtl" ? "bottomRight" : "bottomLeft";
      if (y.includes("Center")) {
        const b = y.slice(0, y.indexOf("Center"));
        return gt(!y.includes("Center"), "Dropdown", `You are using '${y}' placement in Dropdown, which is deprecated. Try to use '${b}' instead.`), b;
      }
      return y;
    }), g = w(() => typeof e.visible == "boolean" ? e.visible : e.open), h = (y) => {
      r("update:visible", y), r("visibleChange", y), r("update:open", y), r("openChange", y);
    };
    return () => {
      var y, b;
      const {
        arrow: C,
        trigger: P,
        disabled: _,
        overlayClassName: x
      } = e, O = (y = n.default) === null || y === void 0 ? void 0 : y.call(n)[0], $ = Re(O, m({
        class: Q((b = O == null ? void 0 : O.props) === null || b === void 0 ? void 0 : b.class, {
          [`${i.value}-rtl`]: l.value === "rtl"
        }, `${i.value}-trigger`)
      }, _ ? {
        disabled: _
      } : {})), T = Q(x, d.value, {
        [`${i.value}-rtl`]: l.value === "rtl"
      }), I = _ ? [] : P;
      let E;
      I && I.includes("contextmenu") && (E = !0);
      const B = cd({
        arrowPointAtCenter: typeof C == "object" && C.pointAtCenter,
        autoAdjustOverflow: !0
      }), V = ld(m(m(m({}, e), o), {
        visible: g.value,
        builtinPlacements: B,
        overlayClassName: T,
        arrow: !!C,
        alignPoint: E,
        prefixCls: i.value,
        getPopupContainer: s == null ? void 0 : s.value,
        transitionName: c.value,
        trigger: I,
        onVisibleChange: h,
        placement: v.value
      }), ["overlay", "onUpdate:visible"]);
      return u(f(Fh, V, {
        default: () => [$],
        overlay: p
      }));
    };
  }
});
Bt.Button = ko;
Bt.Button = ko;
Bt.install = function(e) {
  return e.component(Bt.name, Bt), e.component(ko.name, ko), e;
};
function tw(e, t, n, o) {
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
function Tn(e, t) {
  return tw(Oa(e), Oa(t));
}
const fd = Symbol("menuContextKey"), pd = (e) => {
  ie(fd, e);
}, st = () => H(fd), vd = Symbol("ForceRenderKey"), nw = (e) => {
  ie(vd, e);
}, md = () => H(vd, !1), gd = Symbol("menuFirstLevelContextKey"), hd = (e) => {
  ie(gd, e);
}, ow = () => H(gd, !0), Wo = D({
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
    const o = st(), r = m({}, o);
    return e.mode !== void 0 && (r.mode = Vr(e, "mode")), e.overflowDisabled !== void 0 && (r.overflowDisabled = Vr(e, "overflowDisabled")), pd(r), () => {
      var i;
      return (i = n.default) === null || i === void 0 ? void 0 : i.call(n);
    };
  }
}), rw = pd, iw = Symbol("siderCollapsed"), yd = D({
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
    const o = ot({
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
        offsetWidth: h,
        offsetHeight: y
      } = p, b = Math.floor(v), C = Math.floor(g);
      if (o.width !== b || o.height !== C || o.offsetWidth !== h || o.offsetHeight !== y) {
        const P = {
          width: b,
          height: C,
          offsetWidth: h,
          offsetHeight: y
        };
        m(o, P), c && Promise.resolve().then(() => {
          c(m(m({}, P), {
            offsetWidth: h,
            offsetHeight: y
          }), p);
        });
      }
    }, s = kt(), u = () => {
      const {
        disabled: d
      } = e;
      if (d) {
        a();
        return;
      }
      const c = ut(s);
      c !== r && (a(), r = c), !i && c && (i = new Ic(l), i.observe(c));
    };
    return Be(() => {
      u();
    }), qn(() => {
      u();
    }), Yo(() => {
      a();
    }), G(() => e.disabled, () => {
      u();
    }, {
      flush: "post"
    }), () => {
      var d;
      return (d = n.default) === null || d === void 0 ? void 0 : d.call(n)[0];
    };
  }
}), bd = Symbol("OverflowContextProviderKey"), wi = D({
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
    return ie(bd, w(() => e.value)), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
}), aw = () => H(bd, w(() => null));
var lw = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Jt = void 0, Po = D({
  compatConfig: {
    MODE: 3
  },
  name: "Item",
  props: {
    prefixCls: String,
    item: A.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: {
      type: [String, Number]
    },
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: A.any,
    invalidate: Boolean
  },
  setup(e, t) {
    let {
      slots: n,
      expose: o
    } = t;
    const r = w(() => e.responsive && !e.display), i = k();
    o({
      itemNodeRef: i
    });
    function a(l) {
      e.registerSize(e.itemKey, l);
    }
    return Yo(() => {
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
        display: h,
        order: y,
        component: b = "div"
      } = e, C = lw(e, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"]), P = (l = n.default) === null || l === void 0 ? void 0 : l.call(n), _ = c && d !== Jt ? c(d) : P;
      let x;
      u || (x = {
        opacity: r.value ? 0 : 1,
        height: r.value ? 0 : Jt,
        overflowY: r.value ? "hidden" : Jt,
        order: p ? y : Jt,
        pointerEvents: r.value ? "none" : Jt,
        position: r.value ? "absolute" : Jt
      });
      const O = {};
      return r.value && (O["aria-hidden"] = !0), f(yd, {
        disabled: !p,
        onResize: ($) => {
          let {
            offsetWidth: T
          } = $;
          a(T);
        }
      }, {
        default: () => f(b, R(R(R({
          class: Q(!u && s),
          style: x
        }, O), C), {}, {
          ref: i
        }), {
          default: () => [_]
        })
      });
    };
  }
});
var jr = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const sw = D({
  compatConfig: {
    MODE: 3
  },
  name: "RawItem",
  inheritAttrs: !1,
  props: {
    component: A.any,
    title: A.any,
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
    const r = aw();
    return () => {
      var i;
      if (!r.value) {
        const {
          component: c = "div"
        } = e, p = jr(e, ["component"]);
        return f(c, R(R({}, p), o), {
          default: () => [(i = n.default) === null || i === void 0 ? void 0 : i.call(n)]
        });
      }
      const a = r.value, {
        className: l
      } = a, s = jr(a, ["className"]), {
        class: u
      } = o, d = jr(o, ["class"]);
      return f(wi, {
        value: null
      }, {
        default: () => [f(Po, R(R(R({
          class: Q(l, u)
        }, s), d), e), n)]
      });
    };
  }
});
var cw = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const wd = "responsive", Cd = "invalidate";
function uw(e) {
  return `+ ${e.length} ...`;
}
const dw = () => ({
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
  suffix: A.any,
  component: String,
  itemComponent: A.any,
  /** @private This API may be refactor since not well design */
  onVisibleChange: Function,
  /** When set to `full`, ssr will render full items by default and remove at client side */
  ssr: String,
  onMousedown: Function
}), mt = D({
  name: "Overflow",
  inheritAttrs: !1,
  props: dw(),
  emits: ["visibleChange"],
  setup(e, t) {
    let {
      attrs: n,
      emit: o,
      slots: r
    } = t;
    const i = w(() => e.ssr === "full"), a = j(null), l = w(() => a.value || 0), s = j(/* @__PURE__ */ new Map()), u = j(0), d = j(0), c = j(0), p = j(null), v = j(null), g = w(() => v.value === null && i.value ? Number.MAX_SAFE_INTEGER : v.value || 0), h = j(!1), y = w(() => `${e.prefixCls}-item`), b = w(() => Math.max(u.value, d.value)), C = w(() => !!(e.data.length && e.maxCount === wd)), P = w(() => e.maxCount === Cd), _ = w(() => C.value || typeof e.maxCount == "number" && e.data.length > e.maxCount), x = w(() => {
      let S = e.data;
      return C.value ? a.value === null && i.value ? S = e.data : S = e.data.slice(0, Math.min(e.data.length, l.value / e.itemWidth)) : typeof e.maxCount == "number" && (S = e.data.slice(0, e.maxCount)), S;
    }), O = w(() => C.value ? e.data.slice(g.value + 1) : e.data.slice(x.value.length)), $ = (S, M) => {
      var z;
      return typeof e.itemKey == "function" ? e.itemKey(S) : (z = e.itemKey && (S == null ? void 0 : S[e.itemKey])) !== null && z !== void 0 ? z : M;
    }, T = w(() => e.renderItem || ((S) => S)), I = (S, M) => {
      v.value = S, M || (h.value = S < e.data.length - 1, o("visibleChange", S));
    }, E = (S, M) => {
      a.value = M.clientWidth;
    }, B = (S, M) => {
      const z = new Map(s.value);
      M === null ? z.delete(S) : z.set(S, M), s.value = z;
    }, V = (S, M) => {
      u.value = d.value, d.value = M;
    }, X = (S, M) => {
      c.value = M;
    }, Y = (S) => s.value.get($(x.value[S], S));
    return G([l, s, d, c, () => e.itemKey, x], () => {
      if (l.value && b.value && x.value) {
        let S = c.value;
        const M = x.value.length, z = M - 1;
        if (!M) {
          I(0), p.value = null;
          return;
        }
        for (let F = 0; F < M; F += 1) {
          const J = Y(F);
          if (J === void 0) {
            I(F - 1, !0);
            break;
          }
          if (S += J, // Only one means `totalWidth` is the final width
          z === 0 && S <= l.value || // Last two width will be the final width
          F === z - 1 && S + Y(z) <= l.value) {
            I(z), p.value = null;
            break;
          } else if (S + b.value > l.value) {
            I(F - 1), p.value = S - J - c.value + d.value;
            break;
          }
        }
        e.suffix && Y(0) + c.value > l.value && (p.value = null);
      }
    }), () => {
      const S = h.value && !!O.value.length, {
        itemComponent: M,
        renderRawItem: z,
        renderRawRest: F,
        renderRest: J,
        prefixCls: oe = "rc-overflow",
        suffix: L,
        component: ee = "div",
        id: re,
        onMousedown: ge
      } = e, {
        class: pe,
        style: N
      } = n, U = cw(n, ["class", "style"]);
      let Z = {};
      p.value !== null && C.value && (Z = {
        position: "absolute",
        left: `${p.value}px`,
        top: 0
      });
      const te = {
        prefixCls: y.value,
        responsive: C.value,
        component: M,
        invalidate: P.value
      }, ce = z ? (me, Ee) => {
        const St = $(me, Ee);
        return f(wi, {
          key: St,
          value: m(m({}, te), {
            order: Ee,
            item: me,
            itemKey: St,
            registerSize: B,
            display: Ee <= g.value
          })
        }, {
          default: () => [z(me, Ee)]
        });
      } : (me, Ee) => {
        const St = $(me, Ee);
        return f(Po, R(R({}, te), {}, {
          order: Ee,
          key: St,
          item: me,
          renderItem: T.value,
          itemKey: St,
          registerSize: B,
          display: Ee <= g.value
        }), null);
      };
      let ve = () => null;
      const se = {
        order: S ? g.value : Number.MAX_SAFE_INTEGER,
        className: `${y.value} ${y.value}-rest`,
        registerSize: V,
        display: S
      };
      if (F)
        F && (ve = () => f(wi, {
          value: m(m({}, te), se)
        }, {
          default: () => [F(O.value)]
        }));
      else {
        const me = J || uw;
        ve = () => f(Po, R(R({}, te), se), {
          default: () => typeof me == "function" ? me(O.value) : me
        });
      }
      const Ve = () => {
        var me;
        return f(ee, R({
          id: re,
          class: Q(!P.value && oe, pe),
          style: N,
          onMousedown: ge
        }, U), {
          default: () => [x.value.map(ce), _.value ? ve() : null, L && f(Po, R(R({}, te), {}, {
            order: g.value,
            class: `${y.value}-suffix`,
            registerSize: X,
            display: !0,
            style: Z
          }), {
            default: () => L
          }), (me = r.default) === null || me === void 0 ? void 0 : me.call(r)]
        });
      };
      return f(yd, {
        disabled: !C.value,
        onResize: E
      }, {
        default: Ve
      });
    };
  }
});
mt.Item = sw;
mt.RESPONSIVE = wd;
mt.INVALIDATE = Cd;
const ho = "$$__vc-menu-more__key", $d = Symbol("KeyPathContext"), ua = () => H($d, {
  parentEventKeys: w(() => []),
  parentKeys: w(() => []),
  parentInfo: {}
}), fw = (e, t, n) => {
  const {
    parentEventKeys: o,
    parentKeys: r
  } = ua(), i = w(() => [...o.value, e]), a = w(() => [...r.value, t]);
  return ie($d, {
    parentEventKeys: i,
    parentKeys: a,
    parentInfo: n
  }), a;
}, Sd = Symbol("measure"), ss = D({
  compatConfig: {
    MODE: 3
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ie(Sd, !0), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
}), da = () => H(Sd, !1), pw = fw, vw = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: A.any
}, mw = D({
  compatConfig: {
    MODE: 3
  },
  name: "TooltipContent",
  props: vw,
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
var gw = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function cs() {
}
const hw = D({
  compatConfig: {
    MODE: 3
  },
  name: "Tooltip",
  inheritAttrs: !1,
  props: {
    trigger: A.any.def(["hover"]),
    defaultVisible: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    placement: A.string.def("right"),
    transitionName: String,
    animation: A.any,
    afterVisibleChange: A.func.def(() => {
    }),
    overlayStyle: {
      type: Object,
      default: void 0
    },
    overlayClassName: String,
    prefixCls: A.string.def("rc-tooltip"),
    mouseEnterDelay: A.number.def(0.1),
    mouseLeaveDelay: A.number.def(0.1),
    getPopupContainer: Function,
    destroyTooltipOnHide: {
      type: Boolean,
      default: !1
    },
    align: A.object.def(() => ({})),
    arrowContent: A.any.def(null),
    tipId: String,
    builtinPlacements: A.object,
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
      }, [un(n, e, "arrowContent")]), f(mw, {
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
    return je(() => {
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
        prefixCls: h,
        afterVisibleChange: y,
        transitionName: b,
        animation: C,
        placement: P,
        align: _,
        destroyTooltipOnHide: x,
        defaultVisible: O
      } = e, $ = gw(e, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"]), T = m({}, $);
      e.visible !== void 0 && (T.popupVisible = e.visible);
      const I = m(m(m({
        popupClassName: d,
        prefixCls: h,
        action: c,
        builtinPlacements: sd,
        popupPlacement: P,
        popupAlign: _,
        afterPopupVisibleChange: y,
        popupTransitionName: b,
        popupAnimation: C,
        defaultPopupVisible: O,
        destroyPopupOnHide: s.value,
        autoDestroy: u.value,
        mouseLeaveDelay: v,
        popupStyle: g,
        mouseEnterDelay: p
      }, T), o), {
        onPopupVisibleChange: e.onVisibleChange || cs,
        onPopupAlign: e.onPopupAlign || cs,
        ref: i,
        popup: a()
      });
      return f(Yi, I, {
        default: n.default
      });
    };
  }
}), yw = () => ({
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
  overlayStyle: le(),
  overlayInnerStyle: le(),
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
  align: le(),
  builtinPlacements: le(),
  children: Array,
  /** @deprecated Please use `onOpenChange` instead. */
  onVisibleChange: Function,
  /** @deprecated Please use `onUpdate:open` instead. */
  "onUpdate:visible": Function,
  onOpenChange: Function,
  "onUpdate:open": Function
});
function bw() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  for (let t = 0, n = e.length; t < n; t++)
    if (e[t] !== void 0)
      return e[t];
}
const ww = Ho.map((e) => `${e}-inverse`);
function Cw(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [...ww, ...Ho].includes(e) : Ho.includes(e);
}
function $w(e, t) {
  const n = Cw(t), o = Q({
    [`${e}-${t}`]: t && n
  }), r = {}, i = {};
  return t && !n && (r.background = t, i["--antd-arrow-background-color"] = t), {
    className: o,
    overlayStyle: r,
    arrowStyle: i
  };
}
const Sw = (e) => {
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
      [t]: m(m(m(m({}, Ct(e)), {
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
            borderRadius: Math.min(i, ed)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), yy(e, (p, v) => {
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
    g1(xe(e, {
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
}, xw = (e, t) => He("Tooltip", (o) => {
  if ((t == null ? void 0 : t.value) === !1)
    return [];
  const {
    borderRadius: r,
    colorTextLightSolid: i,
    colorBgDefault: a,
    borderRadiusOuter: l
  } = o, s = xe(o, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: i,
    tooltipBorderRadius: r,
    tooltipBg: a,
    tooltipRadiusOuter: l > 4 ? 4 : l
  });
  return [Sw(s), ca(o, "zoom-big-fast")];
}, (o) => {
  let {
    zIndexPopupBase: r,
    colorBgSpotlight: i
  } = o;
  return {
    zIndexPopup: r + 70,
    colorBgDefault: i
  };
})(e), Ow = (e, t) => {
  const n = {}, o = m({}, e);
  return t.forEach((r) => {
    e && r in e && (n[r] = e[r], delete o[r]);
  }), {
    picked: n,
    omitted: o
  };
}, Pw = () => m(m({}, yw()), {
  title: A.any
}), _w = D({
  compatConfig: {
    MODE: 3
  },
  name: "ATooltip",
  inheritAttrs: !1,
  props: Zn(Pw(), {
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
    process.env.NODE_ENV !== "production" && [["visible", "open"], ["onVisibleChange", "onOpenChange"]].forEach((E) => {
      let [B, V] = E;
      Ge(e[B] === void 0, "Tooltip", `\`${B}\` is deprecated, please use \`${V}\` instead.`);
    });
    const {
      prefixCls: a,
      getPopupContainer: l,
      direction: s,
      rootPrefixCls: u
    } = Ce("tooltip", e), d = w(() => {
      var E;
      return (E = e.open) !== null && E !== void 0 ? E : e.visible;
    }), c = k(bw([e.open, e.visible])), p = k();
    let v;
    G(d, (E) => {
      we.cancel(v), v = we(() => {
        c.value = !!E;
      });
    });
    const g = () => {
      var E;
      const B = (E = e.title) !== null && E !== void 0 ? E : n.title;
      return !B && B !== 0;
    }, h = (E) => {
      const B = g();
      d.value === void 0 && (c.value = B ? !1 : E), B || (o("update:visible", E), o("visibleChange", E), o("update:open", E), o("openChange", E));
    };
    i({
      getPopupDomNode: () => p.value.getPopupDomNode(),
      open: c,
      forcePopupAlign: () => {
        var E;
        return (E = p.value) === null || E === void 0 ? void 0 : E.forcePopupAlign();
      }
    });
    const b = w(() => {
      const {
        builtinPlacements: E,
        arrowPointAtCenter: B,
        autoAdjustOverflow: V
      } = e;
      return E || cd({
        arrowPointAtCenter: B,
        autoAdjustOverflow: V
      });
    }), C = (E) => E || E === "", P = (E) => {
      const B = E.type;
      if (typeof B == "object" && E.props && ((B.__ANT_BUTTON === !0 || B === "button") && C(E.props.disabled) || B.__ANT_SWITCH === !0 && (C(E.props.disabled) || C(E.props.loading)) || B.__ANT_RADIO === !0 && C(E.props.disabled))) {
        const {
          picked: V,
          omitted: X
        } = Ow(Rp(E), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), Y = m(m({
          display: "inline-block"
        }, V), {
          cursor: "not-allowed",
          lineHeight: 1,
          width: E.props && E.props.block ? "100%" : void 0
        }), S = m(m({}, X), {
          pointerEvents: "none"
        }), M = Re(E, {
          style: S
        }, !0);
        return f("span", {
          style: Y,
          class: `${a.value}-disabled-compatible-wrapper`
        }, [M]);
      }
      return E;
    }, _ = () => {
      var E, B;
      return (E = e.title) !== null && E !== void 0 ? E : (B = n.title) === null || B === void 0 ? void 0 : B.call(n);
    }, x = (E, B) => {
      const V = b.value, X = Object.keys(V).find((Y) => {
        var S, M;
        return V[Y].points[0] === ((S = B.points) === null || S === void 0 ? void 0 : S[0]) && V[Y].points[1] === ((M = B.points) === null || M === void 0 ? void 0 : M[1]);
      });
      if (X) {
        const Y = E.getBoundingClientRect(), S = {
          top: "50%",
          left: "50%"
        };
        X.indexOf("top") >= 0 || X.indexOf("Bottom") >= 0 ? S.top = `${Y.height - B.offset[1]}px` : (X.indexOf("Top") >= 0 || X.indexOf("bottom") >= 0) && (S.top = `${-B.offset[1]}px`), X.indexOf("left") >= 0 || X.indexOf("Right") >= 0 ? S.left = `${Y.width - B.offset[0]}px` : (X.indexOf("right") >= 0 || X.indexOf("Left") >= 0) && (S.left = `${-B.offset[0]}px`), E.style.transformOrigin = `${S.left} ${S.top}`;
      }
    }, O = w(() => $w(a.value, e.color)), $ = w(() => r["data-popover-inject"]), [T, I] = xw(a, w(() => !$.value));
    return () => {
      var E, B;
      const {
        openClassName: V,
        overlayClassName: X,
        overlayStyle: Y,
        overlayInnerStyle: S
      } = e;
      let M = (B = bn((E = n.default) === null || E === void 0 ? void 0 : E.call(n))) !== null && B !== void 0 ? B : null;
      M = M.length === 1 ? M[0] : M;
      let z = c.value;
      if (d.value === void 0 && g() && (z = !1), !M)
        return null;
      const F = P(cn(M) && !Np(M) ? M : f("span", null, [M])), J = Q({
        [V || `${a.value}-open`]: !0,
        [F.props && F.props.class]: F.props && F.props.class
      }), oe = Q(X, {
        [`${a.value}-rtl`]: s.value === "rtl"
      }, O.value.className, I.value), L = m(m({}, O.value.overlayStyle), S), ee = O.value.arrowStyle, re = m(m(m({}, r), e), {
        prefixCls: a.value,
        getPopupContainer: l == null ? void 0 : l.value,
        builtinPlacements: b.value,
        visible: z,
        ref: p,
        overlayClassName: oe,
        overlayStyle: m(m({}, ee), Y),
        overlayInnerStyle: L,
        onVisibleChange: h,
        onPopupAlign: x,
        transitionName: Sh(u.value, "zoom-big-fast", e.transitionName)
      });
      return T(f(hw, re, {
        default: () => [c.value ? Re(F, {
          class: J
        }) : F],
        arrowContent: () => f("span", {
          class: `${a.value}-arrow-content`
        }, null),
        overlay: _
      }));
    };
  }
}), it = Cn(_w), W = {
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
    n >= W.F1 && n <= W.F12)
      return !1;
    switch (n) {
      case W.ALT:
      case W.CAPS_LOCK:
      case W.CONTEXT_MENU:
      case W.CTRL:
      case W.DOWN:
      case W.END:
      case W.ESC:
      case W.HOME:
      case W.INSERT:
      case W.LEFT:
      case W.MAC_FF_META:
      case W.META:
      case W.NUMLOCK:
      case W.NUM_CENTER:
      case W.PAGE_DOWN:
      case W.PAGE_UP:
      case W.PAUSE:
      case W.PRINT_SCREEN:
      case W.RIGHT:
      case W.SHIFT:
      case W.UP:
      case W.WIN_KEY:
      case W.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= W.ZERO && t <= W.NINE || t >= W.NUM_ZERO && t <= W.NUM_MULTIPLY || t >= W.A && t <= W.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case W.SPACE:
      case W.QUESTION_MARK:
      case W.NUM_PLUS:
      case W.NUM_MINUS:
      case W.NUM_PERIOD:
      case W.NUM_DIVISION:
      case W.SEMICOLON:
      case W.DASH:
      case W.EQUALS:
      case W.COMMA:
      case W.PERIOD:
      case W.SLASH:
      case W.APOSTROPHE:
      case W.SINGLE_QUOTE:
      case W.OPEN_SQUARE_BRACKET:
      case W.BACKSLASH:
      case W.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
};
function xd(e) {
  const {
    mode: t,
    rtl: n,
    inlineIndent: o
  } = st();
  return w(() => t.value !== "inline" ? null : n.value ? {
    paddingRight: `${e.value * o.value}px`
  } : {
    paddingLeft: `${e.value * o.value}px`
  });
}
let Tw = 0;
const Iw = () => ({
  id: String,
  role: String,
  disabled: Boolean,
  danger: Boolean,
  title: {
    type: [String, Boolean],
    default: void 0
  },
  icon: A.any,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  // Internal user prop
  originItemValue: le()
}), Yn = D({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuItem",
  inheritAttrs: !1,
  props: Iw(),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      emit: o,
      attrs: r
    } = t;
    const i = kt(), a = da(), l = typeof i.vnode.key == "symbol" ? String(i.vnode.key) : i.vnode.key;
    gt(typeof i.vnode.key != "symbol", "MenuItem", `MenuItem \`:key="${String(l)}"\` not support Symbol type`);
    const s = `menu_item_${++Tw}_$$_${l}`, {
      parentEventKeys: u,
      parentKeys: d
    } = ua(), {
      prefixCls: c,
      activeKeys: p,
      disabled: v,
      changeActiveKeys: g,
      rtl: h,
      inlineCollapsed: y,
      siderCollapsed: b,
      onItemClick: C,
      selectedKeys: P,
      registerMenuInfo: _,
      unRegisterMenuInfo: x
    } = st(), O = ow(), $ = j(!1), T = w(() => [...d.value, l]);
    _(s, {
      eventKey: s,
      key: l,
      parentEventKeys: u,
      parentKeys: d,
      isLeaf: !0
    }), De(() => {
      x(s);
    }), G(p, () => {
      $.value = !!p.value.find((L) => L === l);
    }, {
      immediate: !0
    });
    const E = w(() => v.value || e.disabled), B = w(() => P.value.includes(l)), V = w(() => {
      const L = `${c.value}-item`;
      return {
        [`${L}`]: !0,
        [`${L}-danger`]: e.danger,
        [`${L}-active`]: $.value,
        [`${L}-selected`]: B.value,
        [`${L}-disabled`]: E.value
      };
    }), X = (L) => ({
      key: l,
      eventKey: s,
      keyPath: T.value,
      eventKeyPath: [...u.value, s],
      domEvent: L,
      item: m(m({}, e), r)
    }), Y = (L) => {
      if (E.value)
        return;
      const ee = X(L);
      o("click", L), C(ee);
    }, S = (L) => {
      E.value || (g(T.value), o("mouseenter", L));
    }, M = (L) => {
      E.value || (g([]), o("mouseleave", L));
    }, z = (L) => {
      if (o("keydown", L), L.which === W.ENTER) {
        const ee = X(L);
        o("click", L), C(ee);
      }
    }, F = (L) => {
      g(T.value), o("focus", L);
    }, J = (L, ee) => {
      const re = f("span", {
        class: `${c.value}-title-content`
      }, [ee]);
      return (!L || cn(ee) && ee.type === "span") && ee && y.value && O && typeof ee == "string" ? f("div", {
        class: `${c.value}-inline-collapsed-noicon`
      }, [ee.charAt(0)]) : re;
    }, oe = xd(w(() => T.value.length));
    return () => {
      var L, ee, re, ge, pe;
      if (a)
        return null;
      const N = (L = e.title) !== null && L !== void 0 ? L : (ee = n.title) === null || ee === void 0 ? void 0 : ee.call(n), U = Te((re = n.default) === null || re === void 0 ? void 0 : re.call(n)), Z = U.length;
      let te = N;
      typeof N > "u" ? te = O && Z ? U : "" : N === !1 && (te = "");
      const ce = {
        title: te
      };
      !b.value && !y.value && (ce.title = null, ce.open = !1);
      const ve = {};
      e.role === "option" && (ve["aria-selected"] = B.value);
      const se = (ge = e.icon) !== null && ge !== void 0 ? ge : (pe = n.icon) === null || pe === void 0 ? void 0 : pe.call(n, e);
      return f(it, R(R({}, ce), {}, {
        placement: h.value ? "left" : "right",
        overlayClassName: `${c.value}-inline-collapsed-tooltip`
      }), {
        default: () => [f(mt.Item, R(R(R({
          component: "li"
        }, r), {}, {
          id: e.id,
          style: m(m({}, r.style || {}), oe.value),
          class: [V.value, {
            [`${r.class}`]: !!r.class,
            [`${c.value}-item-only-child`]: (se ? Z + 1 : Z) === 1
          }],
          role: e.role || "menuitem",
          tabindex: e.disabled ? null : -1,
          "data-menu-id": l,
          "aria-disabled": e.disabled
        }, ve), {}, {
          onMouseenter: S,
          onMouseleave: M,
          onClick: Y,
          onKeydown: z,
          onFocus: F,
          title: typeof N == "string" ? N : void 0
        }), {
          default: () => [Re(typeof se == "function" ? se(e.originItemValue) : se, {
            class: `${c.value}-item-icon`
          }, !1), J(se, U)]
        })]
      });
    };
  }
}), ft = {
  adjustX: 1,
  adjustY: 1
}, Ew = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: ft,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: ft,
    offset: [0, 7]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: ft,
    offset: [-4, 0]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: ft,
    offset: [4, 0]
  }
}, Mw = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: ft,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: ft,
    offset: [0, 7]
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: ft,
    offset: [-4, 0]
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: ft,
    offset: [4, 0]
  }
}, Aw = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
}, us = D({
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
    } = st(), h = md(), y = w(() => a.value ? m(m({}, Mw), u.value) : m(m({}, Ew), u.value)), b = w(() => Aw[e.mode]), C = j();
    G(() => e.visible, (x) => {
      we.cancel(C.value), C.value = we(() => {
        r.value = x;
      });
    }, {
      immediate: !0
    }), De(() => {
      we.cancel(C.value);
    });
    const P = (x) => {
      o("visibleChange", x);
    }, _ = w(() => {
      var x, O;
      const $ = p.value || ((x = v.value) === null || x === void 0 ? void 0 : x[e.mode]) || ((O = v.value) === null || O === void 0 ? void 0 : O.other), T = typeof $ == "function" ? $() : $;
      return T ? Gi(T.name, {
        css: !0
      }) : void 0;
    });
    return () => {
      const {
        prefixCls: x,
        popupClassName: O,
        mode: $,
        popupOffset: T,
        disabled: I
      } = e;
      return f(Yi, {
        prefixCls: x,
        popupClassName: Q(`${x}-popup`, {
          [`${x}-rtl`]: a.value
        }, O, g.value),
        stretch: $ === "horizontal" ? "minWidth" : null,
        getPopupContainer: i.value,
        builtinPlacements: y.value,
        popupPlacement: b.value,
        popupVisible: r.value,
        popupAlign: T && {
          offset: T
        },
        action: I ? [] : [d.value],
        mouseEnterDelay: l.value,
        mouseLeaveDelay: s.value,
        onPopupVisibleChange: P,
        forceRender: h || c.value,
        popupAnimation: _.value
      }, {
        popup: n.popup,
        default: n.default
      });
    };
  }
}), fa = (e, t) => {
  let {
    slots: n,
    attrs: o
  } = t;
  var r;
  const {
    prefixCls: i,
    mode: a
  } = st();
  return f("ul", R(R({}, o), {}, {
    class: Q(i.value, `${i.value}-sub`, `${i.value}-${a.value === "inline" ? "inline" : "vertical"}`),
    "data-menu-list": !0
  }), [(r = n.default) === null || r === void 0 ? void 0 : r.call(n)]);
};
fa.displayName = "SubMenuList";
const Dw = D({
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
    } = st(), l = w(() => i.value === o.value), s = k(!l.value), u = w(() => l.value ? e.open : !1);
    G(i, () => {
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
      return s.value ? null : f(Wo, {
        mode: o.value
      }, {
        default: () => [f(wt, d.value, {
          default: () => [Go(f(fa, {
            id: e.id
          }, {
            default: () => [(c = n.default) === null || c === void 0 ? void 0 : c.call(n)]
          }), [[Ei, u.value]])]
        })]
      });
    };
  }
});
let ds = 0;
const Rw = () => ({
  icon: A.any,
  title: A.any,
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
  originItemValue: le()
}), gn = D({
  compatConfig: {
    MODE: 3
  },
  name: "ASubMenu",
  inheritAttrs: !1,
  props: Rw(),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      emit: r
    } = t;
    var i, a;
    hd(!1);
    const l = da(), s = kt(), u = typeof s.vnode.key == "symbol" ? String(s.vnode.key) : s.vnode.key;
    gt(typeof s.vnode.key != "symbol", "SubMenu", `SubMenu \`:key="${String(u)}"\` not support Symbol type`);
    const d = Kr(u) ? u : `sub_menu_${++ds}_$$_not_set_key`, c = (i = e.eventKey) !== null && i !== void 0 ? i : Kr(u) ? `sub_menu_${++ds}_$$_${u}` : d, {
      parentEventKeys: p,
      parentInfo: v,
      parentKeys: g
    } = ua(), h = w(() => [...g.value, d]), y = j([]), b = {
      eventKey: c,
      key: d,
      parentEventKeys: p,
      childrenEventKeys: y,
      parentKeys: g
    };
    (a = v.childrenEventKeys) === null || a === void 0 || a.value.push(c), De(() => {
      var ne;
      v.childrenEventKeys && (v.childrenEventKeys.value = (ne = v.childrenEventKeys) === null || ne === void 0 ? void 0 : ne.value.filter((he) => he != c));
    }), pw(c, d, b);
    const {
      prefixCls: C,
      activeKeys: P,
      disabled: _,
      changeActiveKeys: x,
      mode: O,
      inlineCollapsed: $,
      openKeys: T,
      overflowDisabled: I,
      onOpenChange: E,
      registerMenuInfo: B,
      unRegisterMenuInfo: V,
      selectedSubMenuKeys: X,
      expandIcon: Y,
      theme: S
    } = st(), M = u != null, z = !l && (md() || !M);
    nw(z), (l && M || !l && !M || z) && (B(c, b), De(() => {
      V(c);
    }));
    const F = w(() => `${C.value}-submenu`), J = w(() => _.value || e.disabled), oe = j(), L = j(), ee = w(() => T.value.includes(d)), re = w(() => !I.value && ee.value), ge = w(() => X.value.includes(d)), pe = j(!1);
    G(P, () => {
      pe.value = !!P.value.find((ne) => ne === d);
    }, {
      immediate: !0
    });
    const N = (ne) => {
      J.value || (r("titleClick", ne, d), O.value === "inline" && E(d, !ee.value));
    }, U = (ne) => {
      J.value || (x(h.value), r("mouseenter", ne));
    }, Z = (ne) => {
      J.value || (x([]), r("mouseleave", ne));
    }, te = xd(w(() => h.value.length)), ce = (ne) => {
      O.value !== "inline" && E(d, ne);
    }, ve = () => {
      x(h.value);
    }, se = c && `${c}-popup`, Ve = w(() => Q(C.value, `${C.value}-${e.theme || S.value}`, e.popupClassName)), me = (ne, he) => {
      if (!he)
        return $.value && !g.value.length && ne && typeof ne == "string" ? f("div", {
          class: `${C.value}-inline-collapsed-noicon`
        }, [ne.charAt(0)]) : f("span", {
          class: `${C.value}-title-content`
        }, [ne]);
      const ct = cn(ne) && ne.type === "span";
      return f(Fe, null, [Re(typeof he == "function" ? he(e.originItemValue) : he, {
        class: `${C.value}-item-icon`
      }, !1), ct ? ne : f("span", {
        class: `${C.value}-title-content`
      }, [ne])]);
    }, Ee = w(() => O.value !== "inline" && h.value.length > 1 ? "vertical" : O.value), St = w(() => O.value === "horizontal" ? "vertical" : O.value), tf = w(() => Ee.value === "horizontal" ? "vertical" : Ee.value), $a = () => {
      var ne, he;
      const ct = F.value, gr = (ne = e.icon) !== null && ne !== void 0 ? ne : (he = n.icon) === null || he === void 0 ? void 0 : he.call(n, e), Sa = e.expandIcon || n.expandIcon || Y.value, hr = me(un(n, e, "title"), gr);
      return f("div", {
        style: te.value,
        class: `${ct}-title`,
        tabindex: J.value ? null : -1,
        ref: oe,
        title: typeof hr == "string" ? hr : null,
        "data-menu-id": d,
        "aria-expanded": re.value,
        "aria-haspopup": !0,
        "aria-controls": se,
        "aria-disabled": J.value,
        onClick: N,
        onFocus: ve
      }, [hr, O.value !== "horizontal" && Sa ? Sa(m(m({}, e), {
        isOpen: re.value
      })) : f("i", {
        class: `${ct}-arrow`
      }, null)]);
    };
    return () => {
      var ne;
      if (l)
        return M ? (ne = n.default) === null || ne === void 0 ? void 0 : ne.call(n) : null;
      const he = F.value;
      let ct = () => null;
      if (!I.value && O.value !== "inline") {
        const gr = O.value === "horizontal" ? [0, 8] : [10, 0];
        ct = () => f(us, {
          mode: Ee.value,
          prefixCls: he,
          visible: !e.internalPopupClose && re.value,
          popupClassName: Ve.value,
          popupOffset: e.popupOffset || gr,
          disabled: J.value,
          onVisibleChange: ce
        }, {
          default: () => [$a()],
          popup: () => f(Wo, {
            mode: tf.value
          }, {
            default: () => [f(fa, {
              id: se,
              ref: L
            }, {
              default: n.default
            })]
          })
        });
      } else
        ct = () => f(us, null, {
          default: $a
        });
      return f(Wo, {
        mode: St.value
      }, {
        default: () => [f(mt.Item, R(R({
          component: "li"
        }, o), {}, {
          role: "none",
          class: Q(he, `${he}-${O.value}`, o.class, {
            [`${he}-open`]: re.value,
            [`${he}-active`]: pe.value,
            [`${he}-selected`]: ge.value,
            [`${he}-disabled`]: J.value
          }),
          onMouseenter: U,
          onMouseleave: Z,
          "data-submenu-id": d
        }), {
          default: () => f(Fe, null, [ct(), !I.value && f(Dw, {
            id: se,
            open: re.value,
            keyPath: h.value
          }, {
            default: n.default
          })])
        })]
      });
    };
  }
});
function Od(e, t) {
  return e.classList ? e.classList.contains(t) : ` ${e.className} `.indexOf(` ${t} `) > -1;
}
function fs(e, t) {
  e.classList ? e.classList.add(t) : Od(e, t) || (e.className = `${e.className} ${t}`);
}
function ps(e, t) {
  if (e.classList)
    e.classList.remove(t);
  else if (Od(e, t)) {
    const n = e.className;
    e.className = ` ${n} `.replace(` ${t} `, " ");
  }
}
const Nw = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return {
    name: e,
    appear: t,
    css: !0,
    onBeforeEnter: (n) => {
      n.style.height = "0px", n.style.opacity = "0", fs(n, e);
    },
    onEnter: (n) => {
      Xe(() => {
        n.style.height = `${n.scrollHeight}px`, n.style.opacity = "1";
      });
    },
    onAfterEnter: (n) => {
      n && (ps(n, e), n.style.height = null, n.style.opacity = null);
    },
    onBeforeLeave: (n) => {
      fs(n, e), n.style.height = `${n.offsetHeight}px`, n.style.opacity = null;
    },
    onLeave: (n) => {
      setTimeout(() => {
        n.style.height = "0px", n.style.opacity = "0";
      });
    },
    onAfterLeave: (n) => {
      n && (ps(n, e), n.style && (n.style.height = null, n.style.opacity = null));
    }
  };
}, Bw = () => ({
  title: A.any,
  // Internal user prop
  originItemValue: le()
}), Ko = D({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuItemGroup",
  inheritAttrs: !1,
  props: Bw(),
  slots: Object,
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    const {
      prefixCls: r
    } = st(), i = w(() => `${r.value}-item-group`), a = da();
    return () => {
      var l, s;
      return a ? (l = n.default) === null || l === void 0 ? void 0 : l.call(n) : f("li", R(R({}, o), {}, {
        onClick: (u) => u.stopPropagation(),
        class: i.value
      }), [f("div", {
        title: typeof e.title == "string" ? e.title : void 0,
        class: `${i.value}-title`
      }, [un(n, e, "title")]), f("ul", {
        class: `${i.value}-list`
      }, [(s = n.default) === null || s === void 0 ? void 0 : s.call(n)])]);
    };
  }
}), Hw = () => ({
  prefixCls: String,
  dashed: Boolean
}), Xo = D({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuDivider",
  props: Hw(),
  setup(e) {
    const {
      prefixCls: t
    } = st(), n = w(() => ({
      [`${t.value}-item-divider`]: !0,
      [`${t.value}-item-divider-dashed`]: !!e.dashed
    }));
    return () => f("li", {
      class: n.value
    }, null);
  }
});
var zw = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function Ci(e, t, n) {
  return (e || []).map((o, r) => {
    if (o && typeof o == "object") {
      const i = o, {
        label: a,
        children: l,
        key: s,
        type: u
      } = i, d = zw(i, ["label", "children", "key", "type"]), c = s ?? `tmp-${r}`, p = n ? n.parentKeys.slice() : [], v = [], g = {
        eventKey: c,
        key: c,
        parentEventKeys: k(p),
        parentKeys: k(p),
        childrenEventKeys: k(v),
        isLeaf: !1
      };
      if (l || u === "group") {
        if (u === "group") {
          const y = Ci(l, t, n);
          return f(Ko, R(R({
            key: c
          }, d), {}, {
            title: a,
            originItemValue: o
          }), {
            default: () => [y]
          });
        }
        t.set(c, g), n && n.childrenEventKeys.push(c);
        const h = Ci(l, t, {
          childrenEventKeys: v,
          parentKeys: [].concat(p, c)
        });
        return f(gn, R(R({
          key: c
        }, d), {}, {
          title: a,
          originItemValue: o
        }), {
          default: () => [h]
        });
      }
      return u === "divider" ? f(Xo, R({
        key: c
      }, d), null) : (g.isLeaf = !0, t.set(c, g), f(Yn, R(R({
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
function jw(e) {
  const t = j([]), n = j(!1), o = j(/* @__PURE__ */ new Map());
  return G(() => e.items, () => {
    const r = /* @__PURE__ */ new Map();
    n.value = !1, e.items ? (n.value = !0, t.value = Ci(e.items, r)) : t.value = void 0, o.value = r;
  }, {
    immediate: !0,
    deep: !0
  }), {
    itemsNodes: t,
    store: o,
    hasItmes: n
  };
}
const Lw = (e) => {
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
}, Fw = (e) => {
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
}, vs = (e) => m({}, Tu(e)), ms = (e, t) => {
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
    menuItemPaddingInline: h,
    motionDurationMid: y,
    colorItemTextHover: b,
    lineType: C,
    colorSplit: P,
    // Disabled
    colorItemTextDisabled: _,
    // Danger
    colorDangerItemText: x,
    colorDangerItemTextHover: O,
    colorDangerItemTextSelected: $,
    colorDangerItemBgActive: T,
    colorDangerItemBgSelected: I,
    colorItemBgHover: E,
    menuSubMenuBg: B,
    // Horizontal
    colorItemTextSelectedHorizontal: V,
    colorItemBgSelectedHorizontal: X
  } = e;
  return {
    [`${n}-${t}`]: {
      color: o,
      background: a,
      [`&${n}-root:focus-visible`]: m({}, vs(e)),
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
            backgroundColor: E
          },
          "&:active": {
            backgroundColor: s
          }
        },
        [`${n}-submenu-title`]: {
          "&:hover": {
            backgroundColor: E
          },
          "&:active": {
            backgroundColor: s
          }
        }
      },
      // Danger - only Item has
      [`${n}-item-danger`]: {
        color: x,
        [`&${n}-item:hover`]: {
          [`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
            color: O
          }
        },
        [`&${n}-item:active`]: {
          background: T
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
          color: $
        },
        "a, a:hover": {
          color: "inherit"
        }
      },
      [`& ${n}-item-selected`]: {
        backgroundColor: s,
        // Danger
        [`&${n}-item-danger`]: {
          backgroundColor: I
        }
      },
      [`${n}-item, ${n}-submenu-title`]: {
        [`&:not(${n}-item-disabled):focus-visible`]: m({}, vs(e))
      },
      [`&${n}-submenu > ${n}`]: {
        backgroundColor: B
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
            insetInline: h,
            bottom: 0,
            borderBottom: `${u}px solid transparent`,
            transition: `border-color ${p} ${v}`,
            content: '""'
          },
          "&:hover, &-active, &-open": {
            "&::after": {
              borderBottomWidth: u,
              borderBottomColor: V
            }
          },
          "&-selected": {
            color: V,
            backgroundColor: X,
            "&::after": {
              borderBottomWidth: u,
              borderBottomColor: V
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${n}-root`]: {
        [`&${n}-inline, &${n}-vertical`]: {
          borderInlineEnd: `${c}px ${C} ${P}`
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
            transition: [`transform ${y} ${g}`, `opacity ${y} ${g}`].join(","),
            content: '""'
          },
          // Danger
          [`&${n}-item-danger`]: {
            "&::after": {
              borderInlineEndColor: $
            }
          }
        },
        [`${n}-selected, ${n}-item-selected`]: {
          "&::after": {
            transform: "scaleY(1)",
            opacity: 1,
            transition: [`transform ${y} ${v}`, `opacity ${y} ${v}`].join(",")
          }
        }
      }
    }
  };
}, gs = (e) => {
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
}, kw = (e) => {
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
  } = e, h = {
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
        }, gs(e))
      },
      [`${t}-submenu-popup`]: {
        [`${t}-vertical`]: m(m({}, gs(e)), {
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
          [`& > ${t}-submenu > ${t}-submenu-title`]: h,
          [`& ${t}-item-group-title`]: {
            paddingInlineStart: u
          }
        },
        // >>>>> Item
        [`${t}-item`]: h
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
        [`${t}-item-group-title`]: m(m({}, by), {
          paddingInline: v
        })
      }
    }
  ];
}, hs = (e) => {
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
      [`${t}-item-icon`]: m({}, _u()),
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
}, ys = (e) => {
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
}, Vw = (e) => {
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
    menuArrowSize: h,
    menuArrowOffset: y,
    lineType: b,
    menuPanelMaskInset: C
  } = e;
  return [
    // Misc
    {
      "": {
        [`${n}`]: m(m({}, Fl()), {
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
      [n]: m(m(m(m(m(m(m({}, Ct(e)), Fl()), {
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
      }), hs(e)), {
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
              inset: `${C}px 0 0`,
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
            insetInlineStart: C
          },
          [`> ${n}`]: m(m(m({
            borderRadius: v
          }, hs(e)), ys(e)), {
            [`${n}-item, ${n}-submenu > ${n}-submenu-title`]: {
              borderRadius: g
            },
            [`${n}-submenu-title::after`]: {
              transition: `transform ${r} ${a}`
            }
          })
        }
      }), ys(e)), {
        [`&-inline-collapsed ${n}-submenu-arrow,
        &-inline ${n}-submenu-arrow`]: {
          // ↓
          "&::before": {
            transform: `rotate(-45deg) translateX(${y})`
          },
          "&::after": {
            transform: `rotate(45deg) translateX(-${y})`
          }
        },
        [`${n}-submenu-open${n}-submenu-inline > ${n}-submenu-title > ${n}-submenu-arrow`]: {
          // ↑
          transform: `translateY(-${h * 0.2}px)`,
          "&::after": {
            transform: `rotate(-45deg) translateX(-${y})`
          },
          "&::before": {
            transform: `rotate(45deg) translateX(${y})`
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
}, Ww = (e, t) => He("Menu", (o, r) => {
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
  } = o, v = p / 7 * 5, g = xe(o, {
    menuItemHeight: c,
    menuItemPaddingInline: o.margin,
    menuArrowSize: v,
    menuHorizontalHeight: c * 1.15,
    menuArrowOffset: `${v * 0.25}px`,
    menuPanelMaskInset: -7,
    menuSubMenuBg: a
  }), h = new de(d).setAlpha(0.65).toRgbString(), y = xe(g, {
    colorItemText: h,
    colorItemTextHover: d,
    colorGroupTitle: h,
    colorItemTextSelected: d,
    colorItemBg: "#001529",
    colorSubItemBg: "#000c17",
    colorItemBgActive: "transparent",
    colorItemBgSelected: l,
    colorActiveBarWidth: 0,
    colorActiveBarHeight: 0,
    colorActiveBarBorderSize: 0,
    // Disabled
    colorItemTextDisabled: new de(d).setAlpha(0.25).toRgbString(),
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
    Vw(g),
    // Horizontal
    Lw(g),
    // Vertical
    kw(g),
    // Theme
    ms(g, "light"),
    ms(y, "dark"),
    // RTL
    Fw(g),
    // Motion
    W1(g),
    Fo(g, "slide-up"),
    Fo(g, "slide-down"),
    ca(g, "zoom-big")
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
    controlItemBgActive: h,
    colorBgTextHover: y
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
    colorItemBgHover: y,
    colorItemBgActive: p,
    colorSubItemBg: c,
    colorItemBgSelected: h,
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
})(e), Kw = () => ({
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
}), bs = [], tt = D({
  compatConfig: {
    MODE: 3
  },
  name: "AMenu",
  inheritAttrs: !1,
  props: Kw(),
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
    } = Ce("menu", e), l = dd(), s = w(() => {
      var N;
      return a("menu", e.prefixCls || ((N = l == null ? void 0 : l.prefixCls) === null || N === void 0 ? void 0 : N.value));
    }), [u, d] = Ww(s, w(() => !l)), c = j(/* @__PURE__ */ new Map()), p = H(iw, k(void 0)), v = w(() => p.value !== void 0 ? p.value : e.inlineCollapsed), {
      itemsNodes: g
    } = jw(e), h = j(!1);
    Be(() => {
      h.value = !0;
    }), je(() => {
      gt(!(e.inlineCollapsed === !0 && e.mode !== "inline"), "Menu", "`inlineCollapsed` should only be used when `mode` is inline."), gt(!(p.value !== void 0 && e.inlineCollapsed === !0), "Menu", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.");
    });
    const y = k([]), b = k([]), C = k({});
    G(c, () => {
      const N = {};
      for (const U of c.value.values())
        N[U.key] = U;
      C.value = N;
    }, {
      flush: "post"
    }), je(() => {
      if (e.activeKey !== void 0) {
        let N = [];
        const U = e.activeKey ? C.value[e.activeKey] : void 0;
        U && e.activeKey !== void 0 ? N = Hr([].concat(Et(U.parentKeys), e.activeKey)) : N = [], Tn(y.value, N) || (y.value = N);
      }
    }), G(() => e.selectedKeys, (N) => {
      N && (b.value = N.slice());
    }, {
      immediate: !0,
      deep: !0
    });
    const P = k([]);
    G([C, b], () => {
      let N = [];
      b.value.forEach((U) => {
        const Z = C.value[U];
        Z && (N = N.concat(Et(Z.parentKeys)));
      }), N = Hr(N), Tn(P.value, N) || (P.value = N);
    }, {
      immediate: !0
    });
    const _ = (N) => {
      if (e.selectable) {
        const {
          key: U
        } = N, Z = b.value.includes(U);
        let te;
        e.multiple ? Z ? te = b.value.filter((ve) => ve !== U) : te = [...b.value, U] : te = [U];
        const ce = m(m({}, N), {
          selectedKeys: te
        });
        Tn(te, b.value) || (e.selectedKeys === void 0 && (b.value = te), o("update:selectedKeys", te), Z && e.multiple ? o("deselect", ce) : o("select", ce));
      }
      E.value !== "inline" && !e.multiple && x.value.length && X(bs);
    }, x = k([]);
    G(() => e.openKeys, function() {
      let N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : x.value;
      Tn(x.value, N) || (x.value = N.slice());
    }, {
      immediate: !0,
      deep: !0
    });
    let O;
    const $ = (N) => {
      clearTimeout(O), O = setTimeout(() => {
        e.activeKey === void 0 && (y.value = N), o("update:activeKey", N[N.length - 1]);
      });
    }, T = w(() => !!e.disabled), I = w(() => i.value === "rtl"), E = k("vertical"), B = j(!1);
    je(() => {
      var N;
      (e.mode === "inline" || e.mode === "vertical") && v.value ? (E.value = "vertical", B.value = v.value) : (E.value = e.mode, B.value = !1), !((N = l == null ? void 0 : l.mode) === null || N === void 0) && N.value && (E.value = l.mode.value);
    });
    const V = w(() => E.value === "inline"), X = (N) => {
      x.value = N, o("update:openKeys", N), o("openChange", N);
    }, Y = k(x.value), S = j(!1);
    G(x, () => {
      V.value && (Y.value = x.value);
    }, {
      immediate: !0
    }), G(V, () => {
      if (!S.value) {
        S.value = !0;
        return;
      }
      V.value ? x.value = Y.value : X(bs);
    }, {
      immediate: !0
    });
    const M = w(() => ({
      [`${s.value}`]: !0,
      [`${s.value}-root`]: !0,
      [`${s.value}-${E.value}`]: !0,
      [`${s.value}-inline-collapsed`]: B.value,
      [`${s.value}-rtl`]: I.value,
      [`${s.value}-${e.theme}`]: !0
    })), z = w(() => a()), F = w(() => ({
      horizontal: {
        name: `${z.value}-slide-up`
      },
      inline: Nw(`${z.value}-motion-collapse`),
      other: {
        name: `${z.value}-zoom-big`
      }
    }));
    hd(!0);
    const J = function() {
      let N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      const U = [], Z = c.value;
      return N.forEach((te) => {
        const {
          key: ce,
          childrenEventKeys: ve
        } = Z.get(te);
        U.push(ce, ...J(Et(ve)));
      }), U;
    }, oe = (N) => {
      var U;
      o("click", N), _(N), (U = l == null ? void 0 : l.onClick) === null || U === void 0 || U.call(l);
    }, L = (N, U) => {
      var Z;
      const te = ((Z = C.value[N]) === null || Z === void 0 ? void 0 : Z.childrenEventKeys) || [];
      let ce = x.value.filter((ve) => ve !== N);
      if (U)
        ce.push(N);
      else if (E.value !== "inline") {
        const ve = J(Et(te));
        ce = Hr(ce.filter((se) => !ve.includes(se)));
      }
      Tn(x, ce) || X(ce);
    }, ee = (N, U) => {
      c.value.set(N, U), c.value = new Map(c.value);
    }, re = (N) => {
      c.value.delete(N), c.value = new Map(c.value);
    }, ge = k(0), pe = w(() => {
      var N;
      return e.expandIcon || n.expandIcon || !((N = l == null ? void 0 : l.expandIcon) === null || N === void 0) && N.value ? (U) => {
        let Z = e.expandIcon || n.expandIcon;
        return Z = typeof Z == "function" ? Z(U) : Z, Re(Z, {
          class: `${s.value}-submenu-expand-icon`
        }, !1);
      } : null;
    });
    return rw({
      prefixCls: s,
      activeKeys: y,
      openKeys: x,
      selectedKeys: b,
      changeActiveKeys: $,
      disabled: T,
      rtl: I,
      mode: E,
      inlineIndent: w(() => e.inlineIndent),
      subMenuCloseDelay: w(() => e.subMenuCloseDelay),
      subMenuOpenDelay: w(() => e.subMenuOpenDelay),
      builtinPlacements: w(() => e.builtinPlacements),
      triggerSubMenuAction: w(() => e.triggerSubMenuAction),
      getPopupContainer: w(() => e.getPopupContainer),
      inlineCollapsed: B,
      theme: w(() => e.theme),
      siderCollapsed: p,
      defaultMotions: w(() => h.value ? F.value : null),
      motion: w(() => h.value ? e.motion : null),
      overflowDisabled: j(void 0),
      onOpenChange: L,
      onItemClick: oe,
      registerMenuInfo: ee,
      unRegisterMenuInfo: re,
      selectedSubMenuKeys: P,
      expandIcon: pe,
      forceSubMenuRender: w(() => e.forceSubMenuRender),
      rootClassName: d
    }), () => {
      var N, U;
      const Z = g.value || Te((N = n.default) === null || N === void 0 ? void 0 : N.call(n)), te = ge.value >= Z.length - 1 || E.value !== "horizontal" || e.disabledOverflow, ce = E.value !== "horizontal" || e.disabledOverflow ? Z : (
        // Need wrap for overflow dropdown that do not response for open
        Z.map((se, Ve) => (
          // Always wrap provider to avoid sub node re-mount
          f(Wo, {
            key: se.key,
            overflowDisabled: Ve > ge.value
          }, {
            default: () => se
          })
        ))
      ), ve = ((U = n.overflowedIndicator) === null || U === void 0 ? void 0 : U.call(n)) || f(cr, null, null);
      return u(f(mt, R(R({}, r), {}, {
        onMousedown: e.onMousedown,
        prefixCls: `${s.value}-overflow`,
        component: "ul",
        itemComponent: Yn,
        class: [M.value, r.class, d.value],
        role: "menu",
        id: e.id,
        data: ce,
        renderRawItem: (se) => se,
        renderRawRest: (se) => {
          const Ve = se.length, me = Ve ? Z.slice(-Ve) : null;
          return f(Fe, null, [f(gn, {
            eventKey: ho,
            key: ho,
            title: ve,
            disabled: te,
            internalPopupClose: Ve === 0
          }, {
            default: () => me
          }), f(ss, null, {
            default: () => [f(gn, {
              eventKey: ho,
              key: ho,
              title: ve,
              disabled: te,
              internalPopupClose: Ve === 0
            }, {
              default: () => me
            })]
          })]);
        },
        maxCount: E.value !== "horizontal" || e.disabledOverflow ? mt.INVALIDATE : mt.RESPONSIVE,
        ssr: "full",
        "data-menu-list": !0,
        onVisibleChange: (se) => {
          ge.value = se;
        }
      }), {
        default: () => [f(Mi, {
          to: "body"
        }, {
          default: () => [f("div", {
            style: {
              display: "none"
            },
            "aria-hidden": !0
          }, [f(ss, null, {
            default: () => [ce]
          })])]
        })]
      }));
    };
  }
});
tt.install = function(e) {
  return e.component(tt.name, tt), e.component(Yn.name, Yn), e.component(gn.name, gn), e.component(Xo.name, Xo), e.component(Ko.name, Ko), e;
};
tt.Item = Yn;
tt.Divider = Xo;
tt.SubMenu = gn;
tt.ItemGroup = Ko;
function ws(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !nt(e);
}
const Xw = tt.Item, Pd = /* @__PURE__ */ D({
  name: "DeviceSwitch",
  setup() {
    const e = ke("device-switch"), t = k(), n = H(Di), o = H(lf), r = H(Vt), i = H(Qn), a = w(() => Object.keys(r.value.deviceList || {})), l = w(() => {
      if (n.value) {
        const [c, p] = r.value.deviceList[n.value];
        return c !== 0 && p !== 0;
      }
      return !1;
    }), s = w(() => yn(e.b(), {
      [e.m("active")]: l.value
    })), u = () => f("div", {
      class: s.value
    }, [f("div", {
      class: e.e("icon")
    }, [f(zf, null, null)]), f("div", {
      class: e.e("label")
    }, [n.value]), f("div", {
      class: e.e("icon")
    }, [f(Vf, null, null)])]), d = () => {
      let c;
      return f(tt, {
        onClick: ({
          key: p
        }) => o(p)
      }, ws(c = a.value.map((p) => f(Xw, {
        key: p
      }, ws(p) ? p : {
        default: () => [p]
      }))) ? c : {
        default: () => [c]
      });
    };
    return () => n.value ? f("div", {
      ref: t
    }, [f(Bt, {
      getPopupContainer: () => i.value ? t.value : document.body,
      placement: "bottomRight"
    }, {
      default: u,
      overlay: d
    })]) : null;
  }
}), $i = Symbol("ContextProps"), Si = Symbol("InternalContextProps"), xi = {
  id: w(() => {
  }),
  onFieldBlur: () => {
  },
  onFieldChange: () => {
  },
  clearValidate: () => {
  }
}, Oi = {
  addFormItemField: () => {
  },
  removeFormItemField: () => {
  }
}, Uw = () => {
  const e = H(Si, Oi), t = Symbol("FormItemFieldKey"), n = kt();
  return e.addFormItemField(t, n.type), De(() => {
    e.removeFormItemField(t);
  }), ie(Si, Oi), ie($i, xi), H($i, xi);
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
    return ie(Si, Oi), ie($i, xi), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
const Gw = la({});
D({
  name: "NoFormStatus",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Gw.useProvide({}), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
const Yw = (e) => {
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
}, qw = (e) => {
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
}, Qw = (e) => {
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
}, Zw = (e) => {
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
}, Jw = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: m(m(m(m({}, Ct(e)), {
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
    }), zo(e)), {
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
}, eC = He("Switch", (e) => {
  const t = e.fontSize * e.lineHeight, n = e.controlHeight / 2, o = 2, r = t - o * 2, i = n - o * 2, a = xe(e, {
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
    switchHandleShadow: `0 2px 4px 0 ${new de("#00230b").setAlpha(0.2).toRgbString()}`,
    switchLoadingIconSize: e.fontSizeIcon * 0.75,
    switchLoadingIconColor: `rgba(0, 0, 0, ${e.opacityLoading})`,
    switchHandleActiveInset: "-30%"
  });
  return [
    Jw(a),
    // inner style
    Zw(a),
    // handle style
    Qw(a),
    // loading style
    qw(a),
    // small style
    Yw(a)
  ];
}), tC = pn("small", "default"), nC = () => ({
  id: String,
  prefixCls: String,
  size: A.oneOf(tC),
  disabled: {
    type: Boolean,
    default: void 0
  },
  checkedChildren: A.any,
  unCheckedChildren: A.any,
  tabindex: A.oneOfType([A.string, A.number]),
  autofocus: {
    type: Boolean,
    default: void 0
  },
  loading: {
    type: Boolean,
    default: void 0
  },
  checked: A.oneOfType([A.string, A.number, A.looseBool]),
  checkedValue: A.oneOfType([A.string, A.number, A.looseBool]).def(!0),
  unCheckedValue: A.oneOfType([A.string, A.number, A.looseBool]).def(!1),
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
}), oC = D({
  compatConfig: {
    MODE: 3
  },
  name: "ASwitch",
  __ANT_SWITCH: !0,
  inheritAttrs: !1,
  props: nC(),
  slots: Object,
  // emits: ['update:checked', 'mouseup', 'change', 'click', 'keydown', 'blur'],
  setup(e, t) {
    let {
      attrs: n,
      slots: o,
      expose: r,
      emit: i
    } = t;
    const a = Uw(), l = or(), s = w(() => {
      var I;
      return (I = e.disabled) !== null && I !== void 0 ? I : l.value;
    });
    ks(() => {
      Ge(!("defaultChecked" in n), "Switch", "'defaultChecked' is deprecated, please use 'v-model:checked'"), Ge(!("value" in n), "Switch", "`value` is not validate prop, do you mean `checked`?");
    });
    const u = k(e.checked !== void 0 ? e.checked : n.defaultChecked), d = w(() => u.value === e.checkedValue);
    G(() => e.checked, () => {
      u.value = e.checked;
    });
    const {
      prefixCls: c,
      direction: p,
      size: v
    } = Ce("switch", e), [g, h] = eC(c), y = k(), b = () => {
      var I;
      (I = y.value) === null || I === void 0 || I.focus();
    };
    r({
      focus: b,
      blur: () => {
        var I;
        (I = y.value) === null || I === void 0 || I.blur();
      }
    }), Be(() => {
      Xe(() => {
        e.autofocus && !s.value && y.value.focus();
      });
    });
    const P = (I, E) => {
      s.value || (i("update:checked", I), i("change", I, E), a.onFieldChange());
    }, _ = (I) => {
      i("blur", I);
    }, x = (I) => {
      b();
      const E = d.value ? e.unCheckedValue : e.checkedValue;
      P(E, I), i("click", E, I);
    }, O = (I) => {
      I.keyCode === W.LEFT ? P(e.unCheckedValue, I) : I.keyCode === W.RIGHT && P(e.checkedValue, I), i("keydown", I);
    }, $ = (I) => {
      var E;
      (E = y.value) === null || E === void 0 || E.blur(), i("mouseup", I);
    }, T = w(() => ({
      [`${c.value}-small`]: v.value === "small",
      [`${c.value}-loading`]: e.loading,
      [`${c.value}-checked`]: d.value,
      [`${c.value}-disabled`]: s.value,
      [c.value]: !0,
      [`${c.value}-rtl`]: p.value === "rtl",
      [h.value]: !0
    }));
    return () => {
      var I;
      return g(f(ju, null, {
        default: () => [f("button", R(R(R({}, ld(e, ["prefixCls", "checkedChildren", "unCheckedChildren", "checked", "autofocus", "checkedValue", "unCheckedValue", "id", "onChange", "onUpdate:checked"])), n), {}, {
          id: (I = e.id) !== null && I !== void 0 ? I : a.id.value,
          onKeydown: O,
          onClick: x,
          onBlur: _,
          onMouseup: $,
          type: "button",
          role: "switch",
          "aria-checked": u.value,
          disabled: s.value || e.loading,
          class: [n.class, T.value],
          ref: y
        }), [f("div", {
          class: `${c.value}-handle`
        }, [e.loading ? f(ht, {
          class: `${c.value}-loading-icon`
        }, null) : null]), f("span", {
          class: `${c.value}-inner`
        }, [f("span", {
          class: `${c.value}-inner-checked`
        }, [un(o, e, "checkedChildren")]), f("span", {
          class: `${c.value}-inner-unchecked`
        }, [un(o, e, "unCheckedChildren")])])])]
      }));
    };
  }
}), rC = Cn(oC), iC = /* @__PURE__ */ D({
  name: "SSR",
  setup() {
    const e = H(sf), t = H(cf);
    return () => f("div", {
      class: "browser-ssr"
    }, [f(rC, {
      size: "small",
      checked: e.value === "server",
      "checked-children": "SSR",
      "un-checked-children": "CSR",
      onChange: (n) => t(n ? "server" : "client")
    }, null)]);
  }
}), aC = /* @__PURE__ */ D({
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
    } = Ai(e), i = k(null), a = bf(i), l = w(() => r.value ? "scale(1)" : `scale(${Math.min(a.width.value / n.value, a.height.value / o.value)})`);
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
}), ur = Symbol("ShowTerminial"), pa = Symbol("DeviceRotate"), _d = Symbol("ErrorMessage"), Td = Symbol("PreviewLoading"), Id = /* @__PURE__ */ D({
  name: "PreviewDevice",
  setup(e, {
    slots: t
  }) {
    const n = ke("preview-device"), o = H(Di), r = H(pa), i = H(Vt), a = w(() => i.value.deviceList), l = w(() => {
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
    }), u = yn(n.b());
    return () => f("div", {
      class: u
    }, [f(aC, af(l.value, {
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
}), lC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, sC = /* @__PURE__ */ qe("path", { d: "M225.835 286.165a42.667 42.667 0 1 1 60.33-60.33l256 256a42.667 42.667 0 0 1 1.28 59.008l-234.666 256a42.667 42.667 0 1 1-62.891-57.686L452.949 513.28z" }, null, -1), cC = /* @__PURE__ */ qe("path", {
  d: "M554.667 725.333H896q42.667 0 42.667 42.667T896 810.667H554.667Q512 810.667 512 768t42.667-42.667",
  opacity: ".3"
}, null, -1), uC = [
  sC,
  cC
];
function dC(e, t) {
  return yt(), bt("svg", lC, [...uC]);
}
const Ed = { render: dC }, fC = /* @__PURE__ */ D({
  name: "TerminialSwitch",
  setup() {
    const e = H(Qn), t = H(ur), n = ke("terminal-switch");
    if (e != null && e.value)
      return;
    const o = w(() => yn(n.b(), {
      [n.m("active")]: t.value
    }));
    return () => f("div", null, [f(it, {
      title: "查看终端"
    }, {
      default: () => [f("div", {
        class: o.value,
        onClick: () => t.value = !t.value
      }, [f(Ed, {
        class: "icon"
      }, null)])]
    })]);
  }
}), pC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  class: "icon",
  viewBox: "0 0 1175 1024"
}, vC = /* @__PURE__ */ qe("path", {
  fill: "#666",
  d: "M87.273 31.418h576c28.904 0 52.363 23.46 34.909 52.364V921.6c17.454 28.905-6.005 52.364-34.91 52.364h-576A52.364 52.364 0 0 1 34.91 921.6V83.782a52.364 52.364 0 0 1 52.364-52.364m733.09 261.818h209.455a52.364 52.364 0 0 1 52.224 48.454l.14 3.91v576a52.364 52.364 0 0 1-48.454 52.224l-3.91.14H820.364V869.236h157.09V397.964h-157.09zm-209.454 576v-733.09H139.636v733.09zM244.364 659.782h261.818v104.727H244.364z"
}, null, -1), mC = [
  vC
];
function gC(e, t) {
  return yt(), bt("svg", pC, [...mC]);
}
const hC = { render: gC }, Md = /* @__PURE__ */ D({
  name: "TerminialSwitch",
  setup() {
    const e = H(pa), t = H(Di), n = H(Vt), o = ke("device-rotate"), r = w(() => {
      if (!t.value)
        return !1;
      const [a, l] = n.value.deviceList[t.value];
      return a !== 0 && l !== 0;
    }), i = w(() => yn(o.b(), {
      [o.m("active")]: e.value
    }));
    return () => r.value ? f("div", null, [f(it, {
      title: "旋转设备"
    }, {
      default: () => [f("div", {
        class: i.value,
        onClick: () => e.value = !e.value
      }, [f(hC, {
        class: o.e("icon")
      }, null)])]
    })]) : null;
  }
}), yC = /* @__PURE__ */ D({
  name: "BrowserDecorate",
  setup() {
    const e = ke("browser-decorate");
    return () => f("div", {
      class: e.b()
    }, null);
  }
}), bC = /* @__PURE__ */ D({
  name: "BrowserDecorate",
  setup() {
    const e = ke("browser-url");
    return () => f("div", {
      class: e.b()
    }, null);
  }
}), Ad = /* @__PURE__ */ D({
  name: "PreviewContent",
  setup(e, {
    slots: t
  }) {
    const n = ke("preview-content"), o = H(Vt), r = w(() => {
      var a;
      return {
        background: (a = o == null ? void 0 : o.value) == null ? void 0 : a.background
      };
    }), i = w(() => {
      var a;
      return yn(n.b(), {
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
function wC(e, t, n) {
  var o = n || {}, r = o.noTrailing, i = r === void 0 ? !1 : r, a = o.noLeading, l = a === void 0 ? !1 : a, s = o.debounceMode, u = s === void 0 ? void 0 : s, d, c = !1, p = 0;
  function v() {
    d && clearTimeout(d);
  }
  function g(y) {
    var b = y || {}, C = b.upcomingOnly, P = C === void 0 ? !1 : C;
    v(), c = !P;
  }
  function h() {
    for (var y = arguments.length, b = new Array(y), C = 0; C < y; C++)
      b[C] = arguments[C];
    var P = this, _ = Date.now() - p;
    if (c)
      return;
    function x() {
      p = Date.now(), t.apply(P, b);
    }
    function O() {
      d = void 0;
    }
    !l && u && !d && x(), v(), u === void 0 && _ > e ? l ? (p = Date.now(), i || (d = setTimeout(u ? O : x, e))) : x() : i !== !0 && (d = setTimeout(u ? O : x, u === void 0 ? e - _ : e));
  }
  return h.cancel = g, h;
}
function CC(e, t, n) {
  var o = {}, r = o.atBegin, i = r === void 0 ? !1 : r;
  return wC(e, t, {
    debounceMode: i !== !1
  });
}
const $C = new q("antSpinMove", {
  to: {
    opacity: 1
  }
}), SC = new q("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), xC = (e) => ({
  [`${e.componentCls}`]: m(m({}, Ct(e)), {
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
        animationName: $C,
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
        animationName: SC,
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
}), OC = He("Spin", (e) => {
  const t = xe(e, {
    spinDotDefault: e.colorTextDescription,
    spinDotSize: e.controlHeightLG / 2,
    spinDotSizeSM: e.controlHeightLG * 0.35,
    spinDotSizeLG: e.controlHeight
  });
  return [xC(t)];
}, {
  contentHeight: 400
});
var PC = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const _C = () => ({
  prefixCls: String,
  spinning: {
    type: Boolean,
    default: void 0
  },
  size: String,
  wrapperClassName: String,
  tip: A.any,
  delay: Number,
  indicator: A.any
});
let _o = null;
function TC(e, t) {
  return !!e && !!t && !isNaN(Number(t));
}
function IC(e) {
  const t = e.indicator;
  _o = typeof t == "function" ? t : () => f(t, null, null);
}
const Ht = D({
  compatConfig: {
    MODE: 3
  },
  name: "ASpin",
  inheritAttrs: !1,
  props: Zn(_C(), {
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
    } = Ce("spin", e), [l, s] = OC(r), u = j(e.spinning && !TC(e.spinning, e.delay));
    let d;
    return G([() => e.spinning, () => e.delay], () => {
      d == null || d.cancel(), d = CC(e.delay, () => {
        u.value = e.spinning;
      }), d == null || d();
    }, {
      immediate: !0,
      flush: "post"
    }), De(() => {
      d == null || d.cancel();
    }), () => {
      var c, p;
      const {
        class: v
      } = n, g = PC(n, ["class"]), {
        tip: h = (c = o.tip) === null || c === void 0 ? void 0 : c.call(o)
      } = e, y = (p = o.default) === null || p === void 0 ? void 0 : p.call(o), b = {
        [s.value]: !0,
        [r.value]: !0,
        [`${r.value}-sm`]: i.value === "small",
        [`${r.value}-lg`]: i.value === "large",
        [`${r.value}-spinning`]: u.value,
        [`${r.value}-show-text`]: !!h,
        [`${r.value}-rtl`]: a.value === "rtl",
        [v]: !!v
      };
      function C(_) {
        const x = `${_}-dot`;
        let O = un(o, e, "indicator");
        return O === null ? null : (Array.isArray(O) && (O = O.length === 1 ? O[0] : O), nt(O) ? kr(O, {
          class: x
        }) : _o && nt(_o()) ? kr(_o(), {
          class: x
        }) : f("span", {
          class: `${x} ${_}-dot-spin`
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
      const P = f("div", R(R({}, g), {}, {
        class: b,
        "aria-live": "polite",
        "aria-busy": u.value
      }), [C(r.value), h ? f("div", {
        class: `${r.value}-text`
      }, [h]) : null]);
      if (y && bn(y).length) {
        const _ = {
          [`${r.value}-container`]: !0,
          [`${r.value}-blur`]: u.value
        };
        return l(f("div", {
          class: [`${r.value}-nested-loading`, e.wrapperClassName, s.value]
        }, [u.value && f("div", {
          key: "loading"
        }, [P]), f("div", {
          class: _,
          key: "container"
        }, [y])]));
      }
      return l(P);
    };
  }
});
Ht.setDefaultIndicator = IC;
Ht.install = function(e) {
  return e.component(Ht.name, Ht), e;
};
const EC = /* @__PURE__ */ D({
  name: "PreviewLoading",
  setup() {
    const e = ke("preview-loading"), t = H(Td);
    return () => f(Ht, {
      class: e.b(),
      spinning: t.value
    }, null);
  }
});
var MC = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
function Cs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      AC(e, r, n[r]);
    });
  }
  return e;
}
function AC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Sn = function(t, n) {
  var o = Cs({}, t, n.attrs);
  return f(fe, Cs({}, o, {
    icon: MC
  }), null);
};
Sn.displayName = "CloseOutlined";
Sn.inheritAttrs = !1;
var DC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
function $s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      RC(e, r, n[r]);
    });
  }
  return e;
}
function RC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dr = function(t, n) {
  var o = $s({}, t, n.attrs);
  return f(fe, $s({}, o, {
    icon: DC
  }), null);
};
dr.displayName = "CheckCircleOutlined";
dr.inheritAttrs = !1;
var NC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
function Ss(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      BC(e, r, n[r]);
    });
  }
  return e;
}
function BC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var fr = function(t, n) {
  var o = Ss({}, t, n.attrs);
  return f(fe, Ss({}, o, {
    icon: NC
  }), null);
};
fr.displayName = "ExclamationCircleOutlined";
fr.inheritAttrs = !1;
var HC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
function xs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      zC(e, r, n[r]);
    });
  }
  return e;
}
function zC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var pr = function(t, n) {
  var o = xs({}, t, n.attrs);
  return f(fe, xs({}, o, {
    icon: HC
  }), null);
};
pr.displayName = "InfoCircleOutlined";
pr.inheritAttrs = !1;
var jC = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" };
function Os(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      LC(e, r, n[r]);
    });
  }
  return e;
}
function LC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vr = function(t, n) {
  var o = Os({}, t, n.attrs);
  return f(fe, Os({}, o, {
    icon: jC
  }), null);
};
vr.displayName = "CloseCircleOutlined";
vr.inheritAttrs = !1;
var FC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Ps(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      kC(e, r, n[r]);
    });
  }
  return e;
}
function kC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ut = function(t, n) {
  var o = Ps({}, t, n.attrs);
  return f(fe, Ps({}, o, {
    icon: FC
  }), null);
};
Ut.displayName = "CheckCircleFilled";
Ut.inheritAttrs = !1;
var VC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
function _s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      WC(e, r, n[r]);
    });
  }
  return e;
}
function WC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Gt = function(t, n) {
  var o = _s({}, t, n.attrs);
  return f(fe, _s({}, o, {
    icon: VC
  }), null);
};
Gt.displayName = "ExclamationCircleFilled";
Gt.inheritAttrs = !1;
var KC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
function Ts(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      XC(e, r, n[r]);
    });
  }
  return e;
}
function XC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Yt = function(t, n) {
  var o = Ts({}, t, n.attrs);
  return f(fe, Ts({}, o, {
    icon: KC
  }), null);
};
Yt.displayName = "InfoCircleFilled";
Yt.inheritAttrs = !1;
var UC = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
function Is(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      GC(e, r, n[r]);
    });
  }
  return e;
}
function GC(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var qt = function(t, n) {
  var o = Is({}, t, n.attrs);
  return f(fe, Is({}, o, {
    icon: UC
  }), null);
};
qt.displayName = "CloseCircleFilled";
qt.inheritAttrs = !1;
const yo = (e, t, n, o, r) => ({
  backgroundColor: e,
  border: `${o.lineWidth}px ${o.lineType} ${t}`,
  [`${r}-icon`]: {
    color: n
  }
}), YC = (e) => {
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
    paddingContentHorizontalLG: h
  } = e;
  return {
    [t]: m(m({}, Ct(e)), {
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
      paddingInline: h,
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
}, qC = (e) => {
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
      "&-success": yo(r, o, n, e, t),
      "&-info": yo(v, p, c, e, t),
      "&-warning": yo(l, a, i, e, t),
      "&-error": m(m({}, yo(d, u, s, e, t)), {
        [`${t}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, QC = (e) => {
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
}, ZC = (e) => [YC(e), qC(e), QC(e)], JC = He("Alert", (e) => {
  const {
    fontSizeHeading3: t
  } = e, n = xe(e, {
    alertIconSizeLG: t,
    alertPaddingHorizontal: 12
    // Fixed value here.
  });
  return [ZC(n)];
}), e$ = {
  success: Ut,
  info: Yt,
  error: qt,
  warning: Gt
}, t$ = {
  success: dr,
  info: pr,
  error: vr,
  warning: fr
}, n$ = pn("success", "info", "warning", "error"), o$ = () => ({
  /**
   * Type of Alert styles, options: `success`, `info`, `warning`, `error`
   */
  type: A.oneOf(n$),
  /** Whether Alert can be closed */
  closable: {
    type: Boolean,
    default: void 0
  },
  /** Close text to show */
  closeText: A.any,
  /** Content of Alert */
  message: A.any,
  /** Additional content of Alert */
  description: A.any,
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
  icon: A.any,
  closeIcon: A.any,
  onClose: Function
}), r$ = D({
  compatConfig: {
    MODE: 3
  },
  name: "AAlert",
  inheritAttrs: !1,
  props: o$(),
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
    } = Ce("alert", e), [s, u] = JC(a), d = j(!1), c = j(!1), p = j(), v = (b) => {
      b.preventDefault();
      const C = p.value;
      C.style.height = `${C.offsetHeight}px`, C.style.height = `${C.offsetHeight}px`, d.value = !0, o("close", b);
    }, g = () => {
      var b;
      d.value = !1, c.value = !0, (b = e.afterClose) === null || b === void 0 || b.call(e);
    }, h = w(() => {
      const {
        type: b
      } = e;
      return b !== void 0 ? b : e.banner ? "warning" : "info";
    });
    i({
      animationEnd: g
    });
    const y = j({});
    return () => {
      var b, C, P, _, x, O, $, T, I, E;
      const {
        banner: B,
        closeIcon: V = (b = n.closeIcon) === null || b === void 0 ? void 0 : b.call(n)
      } = e;
      let {
        closable: X,
        showIcon: Y
      } = e;
      const S = (C = e.closeText) !== null && C !== void 0 ? C : (P = n.closeText) === null || P === void 0 ? void 0 : P.call(n), M = (_ = e.description) !== null && _ !== void 0 ? _ : (x = n.description) === null || x === void 0 ? void 0 : x.call(n), z = (O = e.message) !== null && O !== void 0 ? O : ($ = n.message) === null || $ === void 0 ? void 0 : $.call(n), F = (T = e.icon) !== null && T !== void 0 ? T : (I = n.icon) === null || I === void 0 ? void 0 : I.call(n), J = (E = n.action) === null || E === void 0 ? void 0 : E.call(n);
      Y = B && Y === void 0 ? !0 : Y;
      const oe = (M ? t$ : e$)[h.value] || null;
      S && (X = !0);
      const L = a.value, ee = Q(L, {
        [`${L}-${h.value}`]: !0,
        [`${L}-closing`]: d.value,
        [`${L}-with-description`]: !!M,
        [`${L}-no-icon`]: !Y,
        [`${L}-banner`]: !!B,
        [`${L}-closable`]: X,
        [`${L}-rtl`]: l.value === "rtl",
        [u.value]: !0
      }), re = X ? f("button", {
        type: "button",
        onClick: v,
        class: `${L}-close-icon`,
        tabindex: 0
      }, [S ? f("span", {
        class: `${L}-close-text`
      }, [S]) : V === void 0 ? f(Sn, null, null) : V]) : null, ge = F && (cn(F) ? Re(F, {
        class: `${L}-icon`
      }) : f("span", {
        class: `${L}-icon`
      }, [F])) || f(oe, {
        class: `${L}-icon`
      }, null), pe = Gi(`${L}-motion`, {
        appear: !1,
        css: !0,
        onAfterLeave: g,
        onBeforeLeave: (N) => {
          N.style.maxHeight = `${N.offsetHeight}px`;
        },
        onLeave: (N) => {
          N.style.maxHeight = "0px";
        }
      });
      return s(c.value ? null : f(wt, pe, {
        default: () => [Go(f("div", R(R({
          role: "alert"
        }, r), {}, {
          style: [r.style, y.value],
          class: [r.class, ee],
          "data-show": !d.value,
          ref: p
        }), [Y ? ge : null, f("div", {
          class: `${L}-content`
        }, [z ? f("div", {
          class: `${L}-message`
        }, [z]) : null, M ? f("div", {
          class: `${L}-description`
        }, [M]) : null]), J ? f("div", {
          class: `${L}-action`
        }, [J]) : null, re]), [[Ei, !d.value]])]
      }));
    };
  }
}), i$ = Cn(r$), a$ = /* @__PURE__ */ D({
  name: "PreviewError",
  setup() {
    const e = ke("preview-error"), t = H(_d), n = H(ur);
    return () => t.value ? f("div", {
      class: e.b()
    }, [f(i$, {
      type: "error",
      banner: !0,
      message: t.value
    }, {
      action: () => f(vt, {
        size: "small",
        type: "link",
        onClick: () => n.value = !0
      }, {
        default: () => [Vs("查看终端")]
      })
    })]) : null;
  }
}), l$ = /* @__PURE__ */ D({
  name: "PreviewBrowser",
  setup() {
    const e = k(null), t = H(Vt), n = k("");
    function o(c) {
      n.value = c;
    }
    const {
      loading: r,
      initializing: i
    } = Ks({
      container: e,
      onError: o
    }), a = H(Qn), l = w(() => r.value || i.value);
    ie(Td, l), ie(_d, n);
    const s = w(() => {
      const c = t.value.enableSSR;
      return typeof c == "string" ? c === "both" : !!c;
    }), u = () => [f(Id, null, {
      default: () => [f(Ad, null, {
        default: () => [f("div", {
          style: {
            height: "100%"
          },
          ref: e
        }, null)]
      })]
    }), f(EC, null, null), f(a$, null, null)], d = () => {
      const c = [s.value && f(iC, null, null), f(Pd, null, null), f(Md, null, null)];
      return a.value || c.push(f(fC, null, null)), c;
    };
    return () => f(Ni, {
      compact: !0
    }, {
      left: () => f(yC, null, null),
      right: d,
      center: () => f(bC, null, null),
      default: u
    });
  }
});
function s$(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !nt(e);
}
const c$ = /* @__PURE__ */ D({
  name: "TerminalContent",
  setup() {
    const e = H(uf), t = H(df), n = k([...e.values || []]), o = k(!1);
    return G(() => e.values, (r, i) => {
      r.length === 0 && i.length !== 0 ? o.value = !0 : r.length !== 0 && (n.value = r, o.value = !1);
    }, {
      deep: !0
    }), () => {
      const r = () => n.value.length ? f(Ht, {
        spinning: o.value
      }, {
        default: () => [f(Cf, {
          store: t.value
        }, {
          default: () => [f($f, {
            data: n.value
          }, null)]
        })]
      }) : f("span", {
        style: "font-style:italic;line-height:24px;font-size:12px;margin-left:18px;"
      }, [Vs("(The console has no information to display)")]);
      return f(wt, {
        name: "fade",
        mode: "out-in"
      }, s$(r) ? r : {
        default: () => [r]
      });
    };
  }
}), va = /* @__PURE__ */ D({
  name: "TerminalBox",
  setup() {
    return () => f(Ni, {
      class: "terminal-box",
      compact: !0
    }, {
      left: () => [f(Ed, {
        class: "title-icon"
      }, null), "Terminal"],
      default: () => f(c$, null, null)
    });
  }
}), u$ = /* @__PURE__ */ D({
  name: "TerminalDrawer",
  setup() {
    const e = H(ur);
    return () => {
      if (e.value)
        return f("div", {
          class: "terminal-drawer"
        }, [f(va, null, null)]);
    };
  }
}), d$ = /* @__PURE__ */ D({
  name: "PreviewTerminal",
  setup() {
    const e = k(null);
    return Ks({
      container: e,
      onError: () => {
      }
    }), () => [f("div", {
      ref: e
    }, null), f(va, null, null)];
  }
}), f$ = /* @__PURE__ */ D({
  name: "PreviewBlock",
  setup() {
    const e = H(Vt), t = H(Xs), n = () => [f(Pd, null, null), f(Md, null, null)];
    return () => {
      var o;
      return f(Ni, {
        class: "preview-block",
        compact: ((o = e.value.style) == null ? void 0 : o.indexOf("compact")) > -1,
        showHeader: !1
      }, {
        extra: n,
        default: () => f(Id, null, {
          default: () => [f(Ad, null, {
            default: () => {
              var r;
              return [(r = t.default) == null ? void 0 : r.call(t)];
            }
          })]
        })
      });
    };
  }
}), p$ = /* @__PURE__ */ D({
  name: "Preview",
  setup() {
    const e = k(!1), t = k(!1), n = H(Us);
    return ie(ur, e), ie(pa, t), () => n.value === "terminal" ? f(d$, null, null) : n.value === "browser" ? [f(l$, null, null), f(u$, null, null)] : f(f$, null, null);
  }
}), Es = "typescript", Pi = { light: "github-light", dark: "github-dark" }, v$ = ["typescript", "javascript", "vue"];
async function m$() {
  return await _f({
    themes: [Pi.light, Pi.dark],
    langs: v$
  });
}
async function g$() {
  const e = await m$(), t = [
    Tf(),
    If({
      classActiveLine: "has-focus",
      classActivePre: "has-focused-lines"
    }),
    Ef(),
    Mf(),
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
    l = l.replace(o, "").replace(r, "").replace(n, "").toLowerCase() || Es, l && !e.getLoadedLanguages().includes(l) && !Pf(l) && (l = Es);
    const u = [], d = /* @__PURE__ */ new Map(), c = (g) => s ? g : g.replace(i, (h) => {
      let y = d.get(h);
      return y || (y = Sf(), d.set(h, y)), y;
    }), p = (g) => (d.forEach((h, y) => {
      g = g.replaceAll(h, y);
    }), g);
    a = c(a).trimEnd();
    const v = e.codeToHtml(a, {
      lang: l,
      transformers: [
        ...t,
        Af(u),
        {
          name: "vitepress:v-pre",
          pre(g) {
            s && (g.properties["v-pre"] = "");
          }
        },
        {
          name: "vitepress:empty-line",
          code(g) {
            g.children.forEach((h) => {
              h.type === "element" && h.tagName === "span" && Array.isArray(h.properties.class) && h.properties.class.includes("line") && h.children.length === 0 && h.children.push({
                type: "element",
                tagName: "wbr",
                properties: {},
                children: []
              });
            });
          }
        }
      ],
      themes: Pi,
      defaultColor: !1
    });
    return p(v);
  };
}
const ma = Symbol("EditorReady"), h$ = /* @__PURE__ */ D({
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
    } = Ai(e), o = k("<pre></pre>"), r = k(null), i = k(n.value), a = H(qo), l = H(ma), s = (d) => {
      var p;
      const c = d.target.value;
      i.value = c, (p = e.onChange) == null || p.call(e, c), u(c);
    }, u = async (d) => {
      var c;
      r.value || (r.value = await g$()), o.value = (c = r.value) == null ? void 0 : c.call(r, d, e.lang || "ts"), !l.value && (l.value = !0);
    };
    return G(() => a.value, (d) => {
      d === "editable" && u(n.value);
    }, {
      immediate: !0
    }), G(() => n.value, (d) => {
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
}), y$ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, b$ = /* @__PURE__ */ qe("path", {
  fill: "#444",
  d: "M503.467 490.667 678.4 665.6l-59.733 59.733L384 490.667 618.667 256l59.733 59.733z"
}, null, -1), w$ = [
  b$
];
function C$(e, t) {
  return yt(), bt("svg", y$, [...w$]);
}
const $$ = { render: C$ }, S$ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  fill: "currentColor",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, x$ = /* @__PURE__ */ qe("path", {
  fill: "#444",
  d: "M558.933 490.667 384 665.6l59.733 59.733L678.4 490.667 443.733 256 384 315.733z"
}, null, -1), O$ = [
  x$
];
function P$(e, t) {
  return yt(), bt("svg", S$, [...O$]);
}
const _$ = { render: P$ }, T$ = /* @__PURE__ */ D({
  name: "FileTabs",
  props: {
    files: Array,
    activeKey: String,
    onActiveChange: Function
  },
  setup(e) {
    const t = k(null), n = w(() => t.value ? t.value.scrollWidth > t.value.clientWidth : !1), o = () => {
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
    }, [f($$, {
      class: "icon"
    }, null)]), f("div", {
      class: "content",
      ref: t
    }, [f(i, null, null)]), n.value && f("div", {
      class: "tab action",
      onClick: r
    }, [f(_$, {
      class: "icon"
    }, null)])]);
  }
}), I$ = /* @__PURE__ */ D({
  name: "CodePreviewer",
  props: {
    identifier: String
  },
  setup(e) {
    const {
      identifier: t
    } = Ai(e), n = H(Xs), o = H(ff), r = H(qo), i = H(ma), a = w(() => r.value === "editable" && !i.value), l = w(() => {
      if ((o == null ? void 0 : o.value) === "js") {
        const s = `codejs-${t == null ? void 0 : t.value}`;
        if (n[s])
          return s;
      }
      return `code-${t == null ? void 0 : t.value}`;
    });
    return () => f(Ht, {
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
function E$() {
  const e = H(Gs), t = H(Ys), n = H(pf), o = H(vf), r = w(() => Of(e.value, {
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
const M$ = /* @__PURE__ */ D({
  name: "CodePanel",
  setup(e, {
    slots: t
  }) {
    const {
      files: n,
      activeFile: o,
      setActiveFile: r,
      setActiveFileCode: i
    } = E$(), a = H(qo), l = k(null), s = k(!1);
    ie(ma, s), G(a, (d) => {
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
      }, [f(T$, {
        files: n.value,
        activeKey: o.value.identifier,
        onActiveChange: r
      }, null), f("div", {
        class: "extra"
      }, [(d = t.extra) == null ? void 0 : d.call(t)])]), f("div", {
        class: "main"
      }, [f(h$, {
        ref: l,
        value: o.value.code,
        lang: xf(o.value.extension),
        onChange: i
      }, null), u.value && f(I$, {
        identifier: o.value.identifier
      }, null)]), f("div", {
        class: "footer"
      }, null)]);
    };
  }
}), A$ = /* @__PURE__ */ D({
  name: "FullLayout",
  setup(e, {
    slots: t
  }) {
    const n = H(Us);
    return () => {
      var o, r, i;
      return f("div", {
        class: "full-wrapper"
      }, [f("div", {
        class: "header"
      }, [(o = t.header) == null ? void 0 : o.call(t), (r = t.meta) == null ? void 0 : r.call(t), (i = t.toolbar) == null ? void 0 : i.call(t)]), f("div", {
        class: "main"
      }, [f(Pa, {
        class: "default-theme"
      }, {
        default: () => [f(no, null, {
          default: () => [f(Pa, {
            horizontal: !0,
            class: "default-theme"
          }, {
            default: () => [f(no, null, {
              default: () => {
                var a;
                return [(a = t.preview) == null ? void 0 : a.call(t)];
              }
            }), n.value === "browser" && f(no, null, {
              default: () => {
                var a;
                return [(a = t.terminal) == null ? void 0 : a.call(t)];
              }
            })]
          })]
        }), f(no, null, {
          default: () => {
            var a;
            return [(a = t.code) == null ? void 0 : a.call(t)];
          }
        })]
      })])]);
    };
  }
}), D$ = /* @__PURE__ */ D({
  name: "BlockLayout",
  setup(e, {
    slots: t
  }) {
    const n = H(Ri), o = ke("block-layout"), r = w(() => !n.value);
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
}), R$ = /* @__PURE__ */ D({
  setup(e, {
    slots: t
  }) {
    const n = H(Qn), o = () => n.value ? f(A$, null, {
      ...t
    }) : f(D$, null, {
      ...t
    });
    return () => f("div", {
      class: `layout ${n.value ?? "fullscreen"}`
    }, [f(o, null, null)]);
  }
}), N$ = /* @__PURE__ */ D({
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
}), B$ = /* @__PURE__ */ D({
  name: "CollapseAction",
  setup() {
    const e = H(mf), t = H(Ri), n = H(qs), o = w(() => e == null ? void 0 : e.isDark.value);
    return () => f(it, {
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
}), H$ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, z$ = /* @__PURE__ */ qe("path", {
  fill: "#666",
  d: "M149.333 394.667c17.067 0 32-14.934 32-32V226.133l187.734 187.734c6.4 6.4 14.933 8.533 23.466 8.533s17.067-2.133 23.467-8.533c12.8-12.8 12.8-32 0-44.8L228.267 181.333h134.4c17.066 0 32-14.933 32-32s-14.934-32-32-32H149.333c-4.266 0-8.533 0-10.666 2.134-8.534 4.266-14.934 10.666-19.2 17.066-2.134 4.267-2.134 8.534-2.134 12.8v213.334c0 17.066 14.934 32 32 32m725.334 234.666c-17.067 0-32 14.934-32 32v136.534L642.133 597.333c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l200.534 200.534H661.333c-17.066 0-32 14.933-32 32s14.934 32 32 32h213.334c4.266 0 8.533 0 10.666-2.134 8.534-4.266 14.934-8.533 17.067-17.066 2.133-4.267 2.133-8.534 2.133-10.667V661.333c2.134-17.066-12.8-32-29.866-32m-492.8-34.133L181.333 795.733v-134.4c0-17.066-14.933-32-32-32s-32 14.934-32 32v213.334c0 4.266 0 8.533 2.134 10.666 4.266 8.534 8.533 14.934 17.066 17.067 4.267 2.133 8.534 2.133 10.667 2.133h213.333c17.067 0 32-14.933 32-32s-14.933-32-32-32H224L424.533 640c12.8-12.8 12.8-32 0-44.8s-29.866-10.667-42.666 0m522.666-456.533q0-3.201 0 0c-4.266-8.534-10.666-14.934-17.066-17.067-4.267-2.133-8.534-2.133-10.667-2.133H661.333c-17.066 0-32 14.933-32 32s14.934 32 32 32h136.534L610.133 371.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.934 8.533 23.467 8.533s17.067-2.133 23.467-8.533L844.8 228.267v134.4c0 17.066 14.933 32 32 32s32-14.934 32-32V149.333c-2.133-4.266-2.133-8.533-4.267-10.666"
}, null, -1), j$ = [
  z$
];
function L$(e, t) {
  return yt(), bt("svg", H$, [...j$]);
}
const F$ = { render: L$ }, k$ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, V$ = /* @__PURE__ */ qe("path", {
  fill: "#666",
  d: "M313.6 358.4H177.067c-17.067 0-32 14.933-32 32s14.933 32 32 32H390.4c4.267 0 8.533 0 10.667-2.133C409.6 416 416 411.733 418.133 403.2c2.134-4.267 2.134-8.533 2.134-10.667V179.2c0-17.067-14.934-32-32-32s-32 14.933-32 32v136.533L172.8 125.867c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8zm381.867 292.267H832c17.067 0 32-14.934 32-32s-14.933-32-32-32H618.667c-4.267 0-8.534 0-10.667 2.133-8.533 4.267-14.933 8.533-17.067 17.067-2.133 4.266-2.133 8.533-2.133 10.666v213.334c0 17.066 14.933 32 32 32s32-14.934 32-32V693.333l200.533 200.534c6.4 6.4 14.934 8.533 23.467 8.533s17.067-2.133 23.467-8.533c12.8-12.8 12.8-32 0-44.8zm-260.267-44.8c-4.267-8.534-8.533-14.934-17.067-17.067-4.266-2.133-8.533-2.133-10.666-2.133H192c-17.067 0-32 14.933-32 32s14.933 32 32 32h136.533L128 851.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933 8.533 23.467 8.533s17.066-2.133 23.466-8.533l200.534-200.533V832c0 17.067 14.933 32 32 32s32-14.933 32-32V618.667c-2.134-4.267-2.134-8.534-4.267-12.8M603.733 403.2c4.267 8.533 8.534 14.933 17.067 17.067 4.267 2.133 8.533 2.133 10.667 2.133H844.8c17.067 0 32-14.933 32-32s-14.933-32-32-32H708.267L896 170.667c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0L663.467 313.6V177.067c0-17.067-14.934-32-32-32s-32 14.933-32 32V390.4c2.133 4.267 2.133 8.533 4.266 12.8"
}, null, -1), W$ = [
  V$
];
function K$(e, t) {
  return yt(), bt("svg", k$, [...W$]);
}
const X$ = { render: K$ }, U$ = /* @__PURE__ */ D({
  name: "FullscreenAction",
  setup() {
    const e = H(Qn), t = H(gf);
    return () => e.value ? f(it, {
      title: "退出全屏"
    }, {
      default: () => [f("span", {
        class: "su-fullscreen-action su-action",
        onClick: () => t == null ? void 0 : t(!1)
      }, [f(X$, null, null)])]
    }) : f(it, {
      title: "全屏查看"
    }, {
      default: () => [f("span", {
        class: "su-fullscreen-action su-action",
        onClick: () => t == null ? void 0 : t(!0)
      }, [f(F$, null, null)])]
    });
  }
});
var G$ = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" } }] }, name: "edit", theme: "filled" };
function Ms(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Y$(e, r, n[r]);
    });
  }
  return e;
}
function Y$(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ga = function(t, n) {
  var o = Ms({}, t, n.attrs);
  return f(fe, Ms({}, o, {
    icon: G$
  }), null);
};
ga.displayName = "EditFilled";
ga.inheritAttrs = !1;
var q$ = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z" } }] }, name: "undo", theme: "outlined" };
function As(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Q$(e, r, n[r]);
    });
  }
  return e;
}
function Q$(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ha = function(t, n) {
  var o = As({}, t, n.attrs);
  return f(fe, As({}, o, {
    icon: q$
  }), null);
};
ha.displayName = "UndoOutlined";
ha.inheritAttrs = !1;
const Z$ = /* @__PURE__ */ D({
  name: "EditAction",
  setup() {
    const e = H(qo), t = H(Ri), n = H(qs), o = H(hf), r = () => {
      t.value && (n == null || n(!1)), o == null || o("editable");
    }, i = () => {
      o == null || o("readPretty");
    };
    return () => e.value === "readPretty" ? f(it, {
      title: "编辑"
    }, {
      default: () => [f(ga, {
        class: "su-action",
        onClick: r
      }, null)]
    }) : f(it, {
      title: "取消"
    }, {
      default: () => [f(ha, {
        class: "su-action",
        onClick: i
      }, null)]
    });
  }
}), mr = D({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t, r, i = !1;
    const a = w(() => e.duration === void 0 ? 4.5 : e.duration), l = () => {
      a.value && !i && (r = setTimeout(() => {
        u();
      }, a.value * 1e3));
    }, s = () => {
      r && (clearTimeout(r), r = null);
    }, u = (c) => {
      c && c.stopPropagation(), s();
      const {
        onClose: p,
        noticeKey: v
      } = e;
      p && p(v);
    }, d = () => {
      s(), l();
    };
    return Be(() => {
      l();
    }), Yo(() => {
      i = !0, s();
    }), G([a, () => e.updateMark, () => e.visible], (c, p) => {
      let [v, g, h] = c, [y, b, C] = p;
      (v !== y || g !== b || h !== C && C) && d();
    }, {
      flush: "post"
    }), () => {
      var c, p;
      const {
        prefixCls: v,
        closable: g,
        closeIcon: h = (c = o.closeIcon) === null || c === void 0 ? void 0 : c.call(o),
        onClick: y,
        holder: b
      } = e, {
        class: C,
        style: P
      } = n, _ = `${v}-notice`, x = Object.keys(n).reduce(($, T) => ((T.startsWith("data-") || T.startsWith("aria-") || T === "role") && ($[T] = n[T]), $), {}), O = f("div", R({
        class: Q(_, C, {
          [`${_}-closable`]: g
        }),
        style: P,
        onMouseenter: s,
        onMouseleave: l,
        onClick: y
      }, x), [f("div", {
        class: `${_}-content`
      }, [(p = o.default) === null || p === void 0 ? void 0 : p.call(o)]), g ? f("a", {
        tabindex: 0,
        onClick: u,
        class: `${_}-close`
      }, [h || f("span", {
        class: `${_}-close-x`
      }, null)]) : null]);
      return b ? f(Mi, {
        to: b
      }, {
        default: () => O
      }) : O;
    };
  }
});
let Lr = m({}, Kn.Modal);
function J$(e) {
  e ? Lr = m(m({}, Lr), e) : Lr = m({}, Kn.Modal);
}
const _i = "internalMark", To = D({
  compatConfig: {
    MODE: 3
  },
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    Ge(e.ANT_MARK__ === _i, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    const o = ot({
      antLocale: m(m({}, e.locale), {
        exist: !0
      }),
      ANT_MARK__: _i
    });
    return ie("localeData", o), G(() => e.locale, (r) => {
      J$(r && r.Modal), o.antLocale = m(m({}, r), {
        exist: !0
      });
    }, {
      immediate: !0
    }), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
To.install = function(e) {
  return e.component(To.name, To), e;
};
const eS = Cn(To), tS = (e) => {
  const {
    componentCls: t,
    width: n,
    notificationMarginEdge: o
  } = e, r = new q("antNotificationTopFadeIn", {
    "0%": {
      marginTop: "-100%",
      opacity: 0
    },
    "100%": {
      marginTop: 0,
      opacity: 1
    }
  }), i = new q("antNotificationBottomFadeIn", {
    "0%": {
      marginBottom: "-100%",
      opacity: 0
    },
    "100%": {
      marginBottom: 0,
      opacity: 1
    }
  }), a = new q("antNotificationLeftFadeIn", {
    "0%": {
      right: {
        _skip_check_: !0,
        value: n
      },
      opacity: 0
    },
    "100%": {
      right: {
        _skip_check_: !0,
        value: 0
      },
      opacity: 1
    }
  });
  return {
    [`&${t}-top, &${t}-bottom`]: {
      marginInline: 0
    },
    [`&${t}-top`]: {
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: r
      }
    },
    [`&${t}-bottom`]: {
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: i
      }
    },
    [`&${t}-topLeft, &${t}-bottomLeft`]: {
      marginInlineEnd: 0,
      marginInlineStart: o,
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: a
      }
    }
  };
}, nS = (e) => {
  const {
    iconCls: t,
    componentCls: n,
    // .ant-notification
    boxShadowSecondary: o,
    fontSizeLG: r,
    notificationMarginBottom: i,
    borderRadiusLG: a,
    colorSuccess: l,
    colorInfo: s,
    colorWarning: u,
    colorError: d,
    colorTextHeading: c,
    notificationBg: p,
    notificationPadding: v,
    notificationMarginEdge: g,
    motionDurationMid: h,
    motionEaseInOut: y,
    fontSize: b,
    lineHeight: C,
    width: P,
    notificationIconSize: _
  } = e, x = `${n}-notice`, O = new q("antNotificationFadeIn", {
    "0%": {
      left: {
        _skip_check_: !0,
        value: P
      },
      opacity: 0
    },
    "100%": {
      left: {
        _skip_check_: !0,
        value: 0
      },
      opacity: 1
    }
  }), $ = new q("antNotificationFadeOut", {
    "0%": {
      maxHeight: e.animationMaxHeight,
      marginBottom: i,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [n]: m(m(m(m({}, Ct(e)), {
        position: "fixed",
        zIndex: e.zIndexPopup,
        marginInlineEnd: g,
        [`${n}-hook-holder`]: {
          position: "relative"
        },
        [`&${n}-top, &${n}-bottom`]: {
          [`${n}-notice`]: {
            marginInline: "auto auto"
          }
        },
        [`&${n}-topLeft, &${n}-bottomLeft`]: {
          [`${n}-notice`]: {
            marginInlineEnd: "auto",
            marginInlineStart: 0
          }
        },
        //  animation
        [`${n}-fade-enter, ${n}-fade-appear`]: {
          animationDuration: e.motionDurationMid,
          animationTimingFunction: y,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${n}-fade-leave`]: {
          animationTimingFunction: y,
          animationFillMode: "both",
          animationDuration: h,
          animationPlayState: "paused"
        },
        [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]: {
          animationName: O,
          animationPlayState: "running"
        },
        [`${n}-fade-leave${n}-fade-leave-active`]: {
          animationName: $,
          animationPlayState: "running"
        }
      }), tS(e)), {
        // RTL
        "&-rtl": {
          direction: "rtl",
          [`${n}-notice-btn`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [x]: {
        position: "relative",
        width: P,
        maxWidth: `calc(100vw - ${g * 2}px)`,
        marginBottom: i,
        marginInlineStart: "auto",
        padding: v,
        overflow: "hidden",
        lineHeight: C,
        wordWrap: "break-word",
        background: p,
        borderRadius: a,
        boxShadow: o,
        [`${n}-close-icon`]: {
          fontSize: b,
          cursor: "pointer"
        },
        [`${x}-message`]: {
          marginBottom: e.marginXS,
          color: c,
          fontSize: r,
          lineHeight: e.lineHeightLG
        },
        [`${x}-description`]: {
          fontSize: b
        },
        [`&${x}-closable ${x}-message`]: {
          paddingInlineEnd: e.paddingLG
        },
        [`${x}-with-icon ${x}-message`]: {
          marginBottom: e.marginXS,
          marginInlineStart: e.marginSM + _,
          fontSize: r
        },
        [`${x}-with-icon ${x}-description`]: {
          marginInlineStart: e.marginSM + _,
          fontSize: b
        },
        // Icon & color style in different selector level
        // https://github.com/ant-design/ant-design/issues/16503
        // https://github.com/ant-design/ant-design/issues/15512
        [`${x}-icon`]: {
          position: "absolute",
          fontSize: _,
          lineHeight: 0,
          // icon-font
          [`&-success${t}`]: {
            color: l
          },
          [`&-info${t}`]: {
            color: s
          },
          [`&-warning${t}`]: {
            color: u
          },
          [`&-error${t}`]: {
            color: d
          }
        },
        [`${x}-close`]: {
          position: "absolute",
          top: e.notificationPaddingVertical,
          insetInlineEnd: e.notificationPaddingHorizontal,
          color: e.colorIcon,
          outline: "none",
          width: e.notificationCloseButtonSize,
          height: e.notificationCloseButtonSize,
          borderRadius: e.borderRadiusSM,
          transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            color: e.colorIconHover,
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContent
          }
        },
        [`${x}-btn`]: {
          float: "right",
          marginTop: e.marginSM
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${x}-pure-panel`]: {
        margin: 0
      }
    }
  ];
}, ya = He("Notification", (e) => {
  const t = e.paddingMD, n = e.paddingLG, o = xe(e, {
    // default.less variables
    notificationBg: e.colorBgElevated,
    notificationPaddingVertical: t,
    notificationPaddingHorizontal: n,
    // index.less variables
    notificationPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
    notificationMarginBottom: e.margin,
    notificationMarginEdge: e.marginLG,
    animationMaxHeight: 150,
    notificationIconSize: e.fontSizeLG * e.lineHeightLG,
    notificationCloseButtonSize: e.controlHeightLG * 0.55
  });
  return [nS(o)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50,
  width: 384
}));
function Dd(e, t) {
  return t || f("span", {
    class: `${e}-close-x`
  }, [f(Sn, {
    class: `${e}-close-icon`
  }, null)]);
}
f(Yt, null, null), f(Ut, null, null), f(qt, null, null), f(Gt, null, null), f(ht, null, null);
const oS = {
  success: Ut,
  info: Yt,
  error: qt,
  warning: Gt
};
function Rd(e) {
  let {
    prefixCls: t,
    icon: n,
    type: o,
    message: r,
    description: i,
    btn: a
  } = e, l = null;
  if (n)
    l = f("span", {
      class: `${t}-icon`
    }, [tn(n)]);
  else if (o) {
    const s = oS[o];
    l = f(s, {
      class: `${t}-icon ${t}-icon-${o}`
    }, null);
  }
  return f("div", {
    class: Q({
      [`${t}-with-icon`]: l
    }),
    role: "alert"
  }, [l, f("div", {
    class: `${t}-message`
  }, [r]), f("div", {
    class: `${t}-description`
  }, [i]), a && f("div", {
    class: `${t}-btn`
  }, [a])]);
}
D({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "icon", "type", "message", "description", "btn", "closeIcon"],
  setup(e) {
    const {
      getPrefixCls: t
    } = Ce("notification", e), n = w(() => e.prefixCls || t("notification")), o = w(() => `${n.value}-notice`), [, r] = ya(n);
    return () => f(mr, R(R({}, e), {}, {
      prefixCls: n.value,
      class: Q(r.value, `${o.value}-pure-panel`),
      noticeKey: "pure",
      duration: null,
      closable: e.closable,
      closeIcon: Dd(n.value, e.closeIcon)
    }), {
      default: () => [f(Rd, {
        prefixCls: o.value,
        icon: e.icon,
        type: e.type,
        message: e.message,
        description: e.description,
        btn: e.btn
      }, null)]
    });
  }
});
function Nd(e, t, n) {
  let o;
  switch (t = typeof t == "number" ? `${t}px` : t, n = typeof n == "number" ? `${n}px` : n, e) {
    case "top":
      o = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: t,
        bottom: "auto"
      };
      break;
    case "topLeft":
      o = {
        left: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "topRight":
      o = {
        right: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "bottom":
      o = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom: n
      };
      break;
    case "bottomLeft":
      o = {
        left: 0,
        top: "auto",
        bottom: n
      };
      break;
    default:
      o = {
        right: 0,
        top: "auto",
        bottom: n
      };
      break;
  }
  return o;
}
function rS(e) {
  return {
    name: `${e}-fade`
  };
}
var iS = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Ds = 24, aS = 4.5, lS = D({
  name: "Holder",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content", "onAllRemoved"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    const {
      getPrefixCls: o,
      getPopupContainer: r
    } = Ce("notification", e), i = w(() => e.prefixCls || o("notification")), a = (p) => {
      var v, g;
      return Nd(p, (v = e.top) !== null && v !== void 0 ? v : Ds, (g = e.bottom) !== null && g !== void 0 ? g : Ds);
    }, [, l] = ya(i), s = () => Q(l.value, {
      [`${i.value}-rtl`]: e.rtl
    }), u = () => rS(i.value), [d, c] = Wd({
      prefixCls: i.value,
      getStyles: a,
      getClassName: s,
      motion: u,
      closable: !0,
      closeIcon: Dd(i.value),
      duration: aS,
      getContainer: () => {
        var p, v;
        return ((p = e.getPopupContainer) === null || p === void 0 ? void 0 : p.call(e)) || ((v = r.value) === null || v === void 0 ? void 0 : v.call(r)) || document.body;
      },
      maxCount: e.maxCount,
      hashId: l.value,
      onAllRemoved: e.onAllRemoved
    });
    return n(m(m({}, d), {
      prefixCls: i.value,
      hashId: l
    })), c;
  }
});
function sS(e) {
  const t = j(null), n = Symbol("notificationHolderKey"), o = (l) => {
    if (!t.value)
      return;
    const {
      open: s,
      prefixCls: u,
      hashId: d
    } = t.value, c = `${u}-notice`, {
      message: p,
      description: v,
      icon: g,
      type: h,
      btn: y,
      class: b
    } = l, C = iS(l, ["message", "description", "icon", "type", "btn", "class"]);
    return s(m(m({
      placement: "topRight"
    }, C), {
      content: () => f(Rd, {
        prefixCls: c,
        icon: typeof g == "function" ? g() : g,
        type: h,
        message: typeof p == "function" ? p() : p,
        description: typeof v == "function" ? v() : v,
        btn: typeof y == "function" ? y() : y
      }, null),
      // @ts-ignore
      class: Q(h && `${c}-${h}`, d, b)
    }));
  }, i = {
    open: o,
    destroy: (l) => {
      var s, u;
      l !== void 0 ? (s = t.value) === null || s === void 0 || s.close(l) : (u = t.value) === null || u === void 0 || u.destroy();
    }
  };
  return ["success", "info", "warning", "error"].forEach((l) => {
    i[l] = (s) => o(m(m({}, s), {
      type: l
    }));
  }), [i, () => f(lS, R(R({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function cS(e) {
  return sS(e);
}
const It = {};
let Bd = 4.5, Hd = "24px", zd = "24px", Ti = "", jd = "topRight", Ld = () => document.body, Fd = null, Ii = !1, kd;
function uS(e) {
  const {
    duration: t,
    placement: n,
    bottom: o,
    top: r,
    getContainer: i,
    closeIcon: a,
    prefixCls: l
  } = e;
  l !== void 0 && (Ti = l), t !== void 0 && (Bd = t), n !== void 0 && (jd = n), o !== void 0 && (zd = typeof o == "number" ? `${o}px` : o), r !== void 0 && (Hd = typeof r == "number" ? `${r}px` : r), i !== void 0 && (Ld = i), a !== void 0 && (Fd = a), e.rtl !== void 0 && (Ii = e.rtl), e.maxCount !== void 0 && (kd = e.maxCount);
}
function dS(e, t) {
  let {
    prefixCls: n,
    placement: o = jd,
    getContainer: r = Ld,
    top: i,
    bottom: a,
    closeIcon: l = Fd,
    appContext: s
  } = e;
  const {
    getPrefixCls: u
  } = SS(), d = u("notification", n || Ti), c = `${d}-${o}-${Ii}`, p = It[c];
  if (p) {
    Promise.resolve(p).then((g) => {
      t(g);
    });
    return;
  }
  const v = Q(`${d}-${o}`, {
    [`${d}-rtl`]: Ii === !0
  });
  Uo.newInstance({
    name: "notification",
    prefixCls: n || Ti,
    useStyle: ya,
    class: v,
    style: Nd(o, i ?? Hd, a ?? zd),
    appContext: s,
    getContainer: r,
    closeIcon: (g) => {
      let {
        prefixCls: h
      } = g;
      return f("span", {
        class: `${h}-close-x`
      }, [tn(l, {}, f(Sn, {
        class: `${h}-close-icon`
      }, null))]);
    },
    maxCount: kd,
    hasTransitionName: !0
  }, (g) => {
    It[c] = g, t(g);
  });
}
const fS = {
  success: dr,
  info: pr,
  error: vr,
  warning: fr
};
function pS(e) {
  const {
    icon: t,
    type: n,
    description: o,
    message: r,
    btn: i
  } = e, a = e.duration === void 0 ? Bd : e.duration;
  dS(e, (l) => {
    l.notice({
      content: (s) => {
        let {
          prefixCls: u
        } = s;
        const d = `${u}-notice`;
        let c = null;
        if (t)
          c = () => f("span", {
            class: `${d}-icon`
          }, [tn(t)]);
        else if (n) {
          const p = fS[n];
          c = () => f(p, {
            class: `${d}-icon ${d}-icon-${n}`
          }, null);
        }
        return f("div", {
          class: c ? `${d}-with-icon` : ""
        }, [c && c(), f("div", {
          class: `${d}-message`
        }, [!o && c ? f("span", {
          class: `${d}-message-single-line-auto-margin`
        }, null) : null, tn(r)]), f("div", {
          class: `${d}-description`
        }, [tn(o)]), i ? f("span", {
          class: `${d}-btn`
        }, [tn(i)]) : null]);
      },
      duration: a,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class
    });
  });
}
const hn = {
  open: pS,
  close(e) {
    Object.keys(It).forEach((t) => Promise.resolve(It[t]).then((n) => {
      n.removeNotice(e);
    }));
  },
  config: uS,
  destroy() {
    Object.keys(It).forEach((e) => {
      Promise.resolve(It[e]).then((t) => {
        t.destroy();
      }), delete It[e];
    });
  }
}, vS = ["success", "info", "warning", "error"];
vS.forEach((e) => {
  hn[e] = (t) => hn.open(m(m({}, t), {
    type: e
  }));
});
hn.warn = hn.warning;
hn.useNotification = cS;
const mS = `-ant-${Date.now()}-${Math.random()}`;
function gS(e, t) {
  const n = {}, o = (a, l) => {
    let s = a.clone();
    return s = (l == null ? void 0 : l(s)) || s, s.toRgbString();
  }, r = (a, l) => {
    const s = new de(a), u = Lt(s.toRgbString());
    n[`${l}-color`] = o(s), n[`${l}-color-disabled`] = u[1], n[`${l}-color-hover`] = u[4], n[`${l}-color-active`] = u[6], n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = u[0], n[`${l}-color-deprecated-border`] = u[2];
  };
  if (t.primaryColor) {
    r(t.primaryColor, "primary");
    const a = new de(t.primaryColor), l = Lt(a.toRgbString());
    l.forEach((u, d) => {
      n[`primary-${d + 1}`] = u;
    }), n["primary-color-deprecated-l-35"] = o(a, (u) => u.lighten(35)), n["primary-color-deprecated-l-20"] = o(a, (u) => u.lighten(20)), n["primary-color-deprecated-t-20"] = o(a, (u) => u.tint(20)), n["primary-color-deprecated-t-50"] = o(a, (u) => u.tint(50)), n["primary-color-deprecated-f-12"] = o(a, (u) => u.setAlpha(u.getAlpha() * 0.12));
    const s = new de(l[0]);
    n["primary-color-active-deprecated-f-30"] = o(s, (u) => u.setAlpha(u.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = o(s, (u) => u.darken(2));
  }
  return t.successColor && r(t.successColor, "success"), t.warningColor && r(t.warningColor, "warning"), t.errorColor && r(t.errorColor, "error"), t.infoColor && r(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim();
}
function hS(e, t) {
  const n = gS(e, t);
  Ye() ? Wn(n, `${mS}-dynamic-theme`) : Ge(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const yS = (e) => {
  const [t, n] = to();
  return ui(w(() => ({
    theme: t.value,
    token: n.value,
    hashId: "",
    path: ["ant-design-icons", e.value]
  })), () => [{
    [`.${e.value}`]: m(m({}, _u()), {
      [`.${e.value} .${e.value}-icon`]: {
        display: "block"
      }
    })
  }]);
};
function bS(e, t) {
  const n = w(() => (e == null ? void 0 : e.value) || {}), o = w(() => n.value.inherit === !1 || !(t != null && t.value) ? Eu : t.value);
  return w(() => {
    if (!(e != null && e.value))
      return t == null ? void 0 : t.value;
    const i = m({}, o.value.components);
    return Object.keys(e.value.components || {}).forEach((a) => {
      i[a] = m(m({}, i[a]), e.value.components[a]);
    }), m(m(m({}, o.value), n.value), {
      token: m(m({}, o.value.token), n.value.token),
      components: i
    });
  });
}
var wS = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const CS = "ant";
function an() {
  return be.prefixCls || CS;
}
function Vd() {
  return be.iconPrefixCls || qi;
}
const ba = ot({}), be = ot({});
je(() => {
  m(be, ba), be.prefixCls = an(), be.iconPrefixCls = Vd(), be.getPrefixCls = (e, t) => t || (e ? `${be.prefixCls}-${e}` : be.prefixCls), be.getRootPrefixCls = () => be.prefixCls ? be.prefixCls : an();
});
let Fr;
const $S = (e) => {
  Fr && Fr(), Fr = je(() => {
    m(ba, ot(e)), m(be, ot(e));
  }), e.theme && hS(an(), e.theme);
}, SS = () => ({
  getPrefixCls: (e, t) => t || (e ? `${an()}-${e}` : an()),
  getIconPrefixCls: Vd,
  getRootPrefixCls: () => be.prefixCls ? be.prefixCls : an()
}), Nn = D({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: Wh(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = Zi(), r = (S, M) => {
      const {
        prefixCls: z = "ant"
      } = e;
      if (M)
        return M;
      const F = z || o.getPrefixCls("");
      return S ? `${F}-${S}` : F;
    }, i = w(() => e.iconPrefixCls || o.iconPrefixCls.value || qi), a = w(() => i.value !== o.iconPrefixCls.value), l = w(() => {
      var S;
      return e.csp || ((S = o.csp) === null || S === void 0 ? void 0 : S.value);
    }), s = yS(i), u = bS(w(() => e.theme), w(() => {
      var S;
      return (S = o.theme) === null || S === void 0 ? void 0 : S.value;
    })), d = (S) => (e.renderEmpty || n.renderEmpty || o.renderEmpty || My)(S), c = w(() => {
      var S, M;
      return (S = e.autoInsertSpaceInButton) !== null && S !== void 0 ? S : (M = o.autoInsertSpaceInButton) === null || M === void 0 ? void 0 : M.value;
    }), p = w(() => {
      var S;
      return e.locale || ((S = o.locale) === null || S === void 0 ? void 0 : S.value);
    });
    G(p, () => {
      ba.locale = p.value;
    }, {
      immediate: !0
    });
    const v = w(() => {
      var S;
      return e.direction || ((S = o.direction) === null || S === void 0 ? void 0 : S.value);
    }), g = w(() => {
      var S, M;
      return (S = e.space) !== null && S !== void 0 ? S : (M = o.space) === null || M === void 0 ? void 0 : M.value;
    }), h = w(() => {
      var S, M;
      return (S = e.virtual) !== null && S !== void 0 ? S : (M = o.virtual) === null || M === void 0 ? void 0 : M.value;
    }), y = w(() => {
      var S, M;
      return (S = e.dropdownMatchSelectWidth) !== null && S !== void 0 ? S : (M = o.dropdownMatchSelectWidth) === null || M === void 0 ? void 0 : M.value;
    }), b = w(() => {
      var S;
      return e.getTargetContainer !== void 0 ? e.getTargetContainer : (S = o.getTargetContainer) === null || S === void 0 ? void 0 : S.value;
    }), C = w(() => {
      var S;
      return e.getPopupContainer !== void 0 ? e.getPopupContainer : (S = o.getPopupContainer) === null || S === void 0 ? void 0 : S.value;
    }), P = w(() => {
      var S;
      return e.pageHeader !== void 0 ? e.pageHeader : (S = o.pageHeader) === null || S === void 0 ? void 0 : S.value;
    }), _ = w(() => {
      var S;
      return e.input !== void 0 ? e.input : (S = o.input) === null || S === void 0 ? void 0 : S.value;
    }), x = w(() => {
      var S;
      return e.pagination !== void 0 ? e.pagination : (S = o.pagination) === null || S === void 0 ? void 0 : S.value;
    }), O = w(() => {
      var S;
      return e.form !== void 0 ? e.form : (S = o.form) === null || S === void 0 ? void 0 : S.value;
    }), $ = w(() => {
      var S;
      return e.select !== void 0 ? e.select : (S = o.select) === null || S === void 0 ? void 0 : S.value;
    }), T = w(() => e.componentSize), I = w(() => e.componentDisabled), E = w(() => {
      var S, M;
      return (S = e.wave) !== null && S !== void 0 ? S : (M = o.wave) === null || M === void 0 ? void 0 : M.value;
    }), B = {
      csp: l,
      autoInsertSpaceInButton: c,
      locale: p,
      direction: v,
      space: g,
      virtual: h,
      dropdownMatchSelectWidth: y,
      getPrefixCls: r,
      iconPrefixCls: i,
      theme: w(() => {
        var S, M;
        return (S = u.value) !== null && S !== void 0 ? S : (M = o.theme) === null || M === void 0 ? void 0 : M.value;
      }),
      renderEmpty: d,
      getTargetContainer: b,
      getPopupContainer: C,
      pageHeader: P,
      input: _,
      pagination: x,
      form: O,
      select: $,
      componentSize: T,
      componentDisabled: I,
      transformCellText: w(() => e.transformCellText),
      wave: E
    }, V = w(() => {
      const S = u.value || {}, {
        algorithm: M,
        token: z
      } = S, F = wS(S, ["algorithm", "token"]), J = M && (!Array.isArray(M) || M.length > 0) ? uu(M) : void 0;
      return m(m({}, F), {
        theme: J,
        token: m(m({}, lr), z)
      });
    }), X = w(() => {
      var S, M;
      let z = {};
      return p.value && (z = ((S = p.value.Form) === null || S === void 0 ? void 0 : S.defaultValidateMessages) || ((M = Kn.Form) === null || M === void 0 ? void 0 : M.defaultValidateMessages) || {}), e.form && e.form.validateMessages && (z = m(m({}, z), e.form.validateMessages)), z;
    });
    Kh(B), Vh({
      validateMessages: X
    }), Ay(T), Xh(I);
    const Y = (S) => {
      var M, z;
      let F = a.value ? s((M = n.default) === null || M === void 0 ? void 0 : M.call(n)) : (z = n.default) === null || z === void 0 ? void 0 : z.call(n);
      if (e.theme) {
        const J = /* @__PURE__ */ function() {
          return F;
        }();
        F = f(Py, {
          value: V.value
        }, {
          default: () => [J]
        });
      }
      return f(eS, {
        locale: p.value || S,
        ANT_MARK__: _i
      }, {
        default: () => [F]
      });
    };
    return je(() => {
      v.value && (Ft.config({
        rtl: v.value === "rtl"
      }), hn.config({
        rtl: v.value === "rtl"
      }));
    }), () => f(ru, {
      children: (S, M, z) => Y(z)
    }, null);
  }
});
Nn.config = $S;
Nn.install = function(e) {
  e.component(Nn.name, Nn);
};
const xS = Nn;
var OS = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
let Rs = 0;
const PS = Date.now();
function Ns() {
  const e = Rs;
  return Rs += 1, `rcNotification_${PS}_${e}`;
}
const Uo = D({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
  setup(e, t) {
    let {
      attrs: n,
      expose: o,
      slots: r
    } = t;
    const i = /* @__PURE__ */ new Map(), a = k([]), l = w(() => {
      const {
        prefixCls: d,
        animation: c = "fade"
      } = e;
      let p = e.transitionName;
      return !p && c && (p = `${d}-${c}`), Uc(p);
    }), s = (d, c) => {
      const p = d.key || Ns(), v = m(m({}, d), {
        key: p
      }), {
        maxCount: g
      } = e, h = a.value.map((b) => b.notice.key).indexOf(p), y = a.value.concat();
      h !== -1 ? y.splice(h, 1, {
        notice: v,
        holderCallback: c
      }) : (g && a.value.length >= g && (v.key = y[0].notice.key, v.updateMark = Ns(), v.userPassKey = p, y.shift()), y.push({
        notice: v,
        holderCallback: c
      })), a.value = y;
    }, u = (d) => {
      a.value = a.value.filter((c) => {
        let {
          notice: {
            key: p,
            userPassKey: v
          }
        } = c;
        return (v || p) !== d;
      });
    };
    return o({
      add: s,
      remove: u,
      notices: a
    }), () => {
      var d;
      const {
        prefixCls: c,
        closeIcon: p = (d = r.closeIcon) === null || d === void 0 ? void 0 : d.call(r, {
          prefixCls: c
        })
      } = e, v = a.value.map((h, y) => {
        let {
          notice: b,
          holderCallback: C
        } = h;
        const P = y === a.value.length - 1 ? b.updateMark : void 0, {
          key: _,
          userPassKey: x
        } = b, {
          content: O
        } = b, $ = m(m(m({
          prefixCls: c,
          closeIcon: typeof p == "function" ? p({
            prefixCls: c
          }) : p
        }, b), b.props), {
          key: _,
          noticeKey: x || _,
          updateMark: P,
          onClose: (T) => {
            var I;
            u(T), (I = b.onClose) === null || I === void 0 || I.call(b);
          },
          onClick: b.onClick
        });
        return C ? f("div", {
          key: _,
          class: `${c}-hook-holder`,
          ref: (T) => {
            typeof _ > "u" || (T ? (i.set(_, T), C(T, $)) : i.delete(_));
          }
        }, null) : f(mr, R(R({}, $), {}, {
          class: Q($.class, e.hashId)
        }), {
          default: () => [typeof O == "function" ? O({
            prefixCls: c
          }) : O]
        });
      }), g = {
        [c]: 1,
        [n.class]: !!n.class,
        [e.hashId]: !0
      };
      return f("div", {
        class: g,
        style: n.style || {
          top: "65px",
          left: "50%"
        }
      }, [f(Ws, R({
        tag: "div"
      }, l.value), {
        default: () => [v]
      })]);
    };
  }
});
Uo.newInstance = function(t, n) {
  const o = t || {}, {
    name: r = "notification",
    getContainer: i,
    appContext: a,
    prefixCls: l,
    rootPrefixCls: s,
    transitionName: u,
    hasTransitionName: d,
    useStyle: c
  } = o, p = OS(o, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]), v = document.createElement("div");
  i ? i().appendChild(v) : document.body.appendChild(v);
  const g = D({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup(y, b) {
      let {
        attrs: C
      } = b;
      const P = j(), _ = w(() => be.getPrefixCls(r, l)), [, x] = c(_);
      return Be(() => {
        n({
          notice(O) {
            var $;
            ($ = P.value) === null || $ === void 0 || $.add(O);
          },
          removeNotice(O) {
            var $;
            ($ = P.value) === null || $ === void 0 || $.remove(O);
          },
          destroy() {
            Io(null, v), v.parentNode && v.parentNode.removeChild(v);
          },
          component: P
        });
      }), () => {
        const O = be, $ = O.getRootPrefixCls(s, _.value), T = d ? u : `${_.value}-${u}`;
        return f(xS, R(R({}, O), {}, {
          prefixCls: $
        }), {
          default: () => [f(Uo, R(R({
            ref: P
          }, C), {}, {
            prefixCls: _.value,
            transitionName: T,
            hashId: x.value
          }), null)]
        });
      };
    }
  }), h = f(g, p);
  h.appContext = a || h.appContext, Io(h, v);
};
let Bs = 0;
const _S = Date.now();
function Hs() {
  const e = Bs;
  return Bs += 1, `rcNotification_${_S}_${e}`;
}
const TS = D({
  name: "HookNotification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const r = /* @__PURE__ */ new Map(), i = w(() => e.notices), a = w(() => {
      let d = e.transitionName;
      if (!d && e.animation)
        switch (typeof e.animation) {
          case "string":
            d = e.animation;
            break;
          case "function":
            d = e.animation().name;
            break;
          case "object":
            d = e.animation.name;
            break;
          default:
            d = `${e.prefixCls}-fade`;
            break;
        }
      return Uc(d);
    }), l = (d) => e.remove(d), s = k({});
    G(i, () => {
      const d = {};
      Object.keys(s.value).forEach((c) => {
        d[c] = [];
      }), e.notices.forEach((c) => {
        const {
          placement: p = "topRight"
        } = c.notice;
        p && (d[p] = d[p] || [], d[p].push(c));
      }), s.value = d;
    });
    const u = w(() => Object.keys(s.value));
    return () => {
      var d;
      const {
        prefixCls: c,
        closeIcon: p = (d = o.closeIcon) === null || d === void 0 ? void 0 : d.call(o, {
          prefixCls: c
        })
      } = e, v = u.value.map((g) => {
        var h, y;
        const b = s.value[g], C = (h = e.getClassName) === null || h === void 0 ? void 0 : h.call(e, g), P = (y = e.getStyles) === null || y === void 0 ? void 0 : y.call(e, g), _ = b.map(($, T) => {
          let {
            notice: I,
            holderCallback: E
          } = $;
          const B = T === i.value.length - 1 ? I.updateMark : void 0, {
            key: V,
            userPassKey: X
          } = I, {
            content: Y
          } = I, S = m(m(m({
            prefixCls: c,
            closeIcon: typeof p == "function" ? p({
              prefixCls: c
            }) : p
          }, I), I.props), {
            key: V,
            noticeKey: X || V,
            updateMark: B,
            onClose: (M) => {
              var z;
              l(M), (z = I.onClose) === null || z === void 0 || z.call(I);
            },
            onClick: I.onClick
          });
          return E ? f("div", {
            key: V,
            class: `${c}-hook-holder`,
            ref: (M) => {
              typeof V > "u" || (M ? (r.set(V, M), E(M, S)) : r.delete(V));
            }
          }, null) : f(mr, R(R({}, S), {}, {
            class: Q(S.class, e.hashId)
          }), {
            default: () => [typeof Y == "function" ? Y({
              prefixCls: c
            }) : Y]
          });
        }), x = {
          [c]: 1,
          [`${c}-${g}`]: 1,
          [n.class]: !!n.class,
          [e.hashId]: !0,
          [C]: !!C
        };
        function O() {
          var $;
          b.length > 0 || (Reflect.deleteProperty(s.value, g), ($ = e.onAllRemoved) === null || $ === void 0 || $.call(e));
        }
        return f("div", {
          key: g,
          class: x,
          style: n.style || P || {
            top: "65px",
            left: "50%"
          }
        }, [f(Ws, R(R({
          tag: "div"
        }, a.value), {}, {
          onAfterLeave: O
        }), {
          default: () => [_]
        })]);
      });
      return f(qc, {
        getContainer: e.getContainer
      }, {
        default: () => [v]
      });
    };
  }
}), IS = TS;
var ES = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const MS = () => document.body;
let zs = 0;
function AS() {
  const e = {};
  for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
    n[o] = arguments[o];
  return n.forEach((r) => {
    r && Object.keys(r).forEach((i) => {
      const a = r[i];
      a !== void 0 && (e[i] = a);
    });
  }), e;
}
function Wd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    getContainer: t = MS,
    motion: n,
    prefixCls: o,
    maxCount: r,
    getClassName: i,
    getStyles: a,
    onAllRemoved: l
  } = e, s = ES(e, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]), u = j([]), d = j(), c = (b, C) => {
    const P = b.key || Hs(), _ = m(m({}, b), {
      key: P
    }), x = u.value.map(($) => $.notice.key).indexOf(P), O = u.value.concat();
    x !== -1 ? O.splice(x, 1, {
      notice: _,
      holderCallback: C
    }) : (r && u.value.length >= r && (_.key = O[0].notice.key, _.updateMark = Hs(), _.userPassKey = P, O.shift()), O.push({
      notice: _,
      holderCallback: C
    })), u.value = O;
  }, p = (b) => {
    u.value = u.value.filter((C) => {
      let {
        notice: {
          key: P,
          userPassKey: _
        }
      } = C;
      return (_ || P) !== b;
    });
  }, v = () => {
    u.value = [];
  }, g = () => f(IS, {
    ref: d,
    prefixCls: o,
    maxCount: r,
    notices: u.value,
    remove: p,
    getClassName: i,
    getStyles: a,
    animation: n,
    hashId: e.hashId,
    onAllRemoved: l,
    getContainer: t
  }, null), h = j([]), y = {
    open: (b) => {
      const C = AS(s, b);
      (C.key === null || C.key === void 0) && (C.key = `vc-notification-${zs}`, zs += 1), h.value = [...h.value, {
        type: "open",
        config: C
      }];
    },
    close: (b) => {
      h.value = [...h.value, {
        type: "close",
        key: b
      }];
    },
    destroy: () => {
      h.value = [...h.value, {
        type: "destroy"
      }];
    }
  };
  return G(h, () => {
    h.value.length && (h.value.forEach((b) => {
      switch (b.type) {
        case "open":
          c(b.config);
          break;
        case "close":
          p(b.key);
          break;
        case "destroy":
          v();
          break;
      }
    }), h.value = []);
  }), [y, g];
}
const DS = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    boxShadowSecondary: o,
    colorBgElevated: r,
    colorSuccess: i,
    colorError: a,
    colorWarning: l,
    colorInfo: s,
    fontSizeLG: u,
    motionEaseInOutCirc: d,
    motionDurationSlow: c,
    marginXS: p,
    paddingXS: v,
    borderRadiusLG: g,
    zIndexPopup: h,
    // Custom token
    messageNoticeContentPadding: y
  } = e, b = new q("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: v,
      transform: "translateY(0)",
      opacity: 1
    }
  }), C = new q("MessageMoveOut", {
    "0%": {
      maxHeight: e.height,
      padding: v,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [t]: m(m({}, Ct(e)), {
        position: "fixed",
        top: p,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        pointerEvents: "none",
        zIndex: h,
        [`${t}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
          animationName: b,
          animationDuration: c,
          animationPlayState: "paused",
          animationTimingFunction: d
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: C,
          animationDuration: c,
          animationPlayState: "paused",
          animationTimingFunction: d
        },
        [`${t}-move-up-leave${t}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [`${t}-notice`]: {
        padding: v,
        textAlign: "center",
        [n]: {
          verticalAlign: "text-bottom",
          marginInlineEnd: p,
          fontSize: u
        },
        [`${t}-notice-content`]: {
          display: "inline-block",
          padding: y,
          background: r,
          borderRadius: g,
          boxShadow: o,
          pointerEvents: "all"
        },
        [`${t}-success ${n}`]: {
          color: i
        },
        [`${t}-error ${n}`]: {
          color: a
        },
        [`${t}-warning ${n}`]: {
          color: l
        },
        [`
        ${t}-info ${n},
        ${t}-loading ${n}`]: {
          color: s
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: {
        padding: 0,
        textAlign: "start"
      }
    }
  ];
}, wa = He("Message", (e) => {
  const t = xe(e, {
    messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
  });
  return [DS(t)];
}, (e) => ({
  height: 150,
  zIndexPopup: e.zIndexPopupBase + 10
})), RS = {
  info: f(Yt, null, null),
  success: f(Ut, null, null),
  error: f(qt, null, null),
  warning: f(Gt, null, null),
  loading: f(ht, null, null)
}, Kd = D({
  name: "PureContent",
  inheritAttrs: !1,
  props: ["prefixCls", "type", "icon"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var o;
      return f("div", {
        class: Q(`${e.prefixCls}-custom-content`, `${e.prefixCls}-${e.type}`)
      }, [e.icon || RS[e.type], f("span", null, [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)])]);
    };
  }
});
D({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content"],
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    var r;
    const {
      getPrefixCls: i
    } = Zi(), a = w(() => e.prefixCls || i("message")), [, l] = wa(a);
    return f(mr, R(R({}, o), {}, {
      prefixCls: a.value,
      class: Q(l.value, `${a.value}-notice-pure-panel`),
      noticeKey: "pure",
      duration: null
    }), {
      default: () => [f(Kd, {
        prefixCls: a.value,
        type: e.type,
        icon: e.icon
      }, {
        default: () => [(r = n.default) === null || r === void 0 ? void 0 : r.call(n)]
      })]
    });
  }
});
var NS = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const BS = 8, HS = 3, zS = D({
  name: "Holder",
  inheritAttrs: !1,
  props: ["top", "prefixCls", "getContainer", "maxCount", "duration", "rtl", "transitionName", "onAllRemoved"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    var o, r;
    const {
      getPrefixCls: i,
      getPopupContainer: a
    } = Ce("message", e), l = w(() => i("message", e.prefixCls)), [, s] = wa(l), u = () => {
      var h;
      const y = (h = e.top) !== null && h !== void 0 ? h : BS;
      return {
        left: "50%",
        transform: "translateX(-50%)",
        top: typeof y == "number" ? `${y}px` : y
      };
    }, d = () => Q(s.value, e.rtl ? `${l.value}-rtl` : ""), c = () => {
      var h;
      return ji({
        prefixCls: l.value,
        animation: (h = e.animation) !== null && h !== void 0 ? h : "move-up",
        transitionName: e.transitionName
      });
    }, p = f("span", {
      class: `${l.value}-close-x`
    }, [f(Sn, {
      class: `${l.value}-close-icon`
    }, null)]), [v, g] = Wd({
      //@ts-ignore
      getStyles: u,
      prefixCls: l.value,
      getClassName: d,
      motion: c,
      closable: !1,
      closeIcon: p,
      duration: (o = e.duration) !== null && o !== void 0 ? o : HS,
      getContainer: (r = e.staticGetContainer) !== null && r !== void 0 ? r : a.value,
      maxCount: e.maxCount,
      onAllRemoved: e.onAllRemoved
    });
    return n(m(m({}, v), {
      prefixCls: l,
      hashId: s
    })), g;
  }
});
let js = 0;
function jS(e) {
  const t = j(null), n = Symbol("messageHolderKey"), o = (s) => {
    var u;
    (u = t.value) === null || u === void 0 || u.close(s);
  }, r = (s) => {
    if (!t.value) {
      const x = () => {
      };
      return x.then = () => {
      }, x;
    }
    const {
      open: u,
      prefixCls: d,
      hashId: c
    } = t.value, p = `${d}-notice`, {
      content: v,
      icon: g,
      type: h,
      key: y,
      class: b,
      onClose: C
    } = s, P = NS(s, ["content", "icon", "type", "key", "class", "onClose"]);
    let _ = y;
    return _ == null && (js += 1, _ = `antd-message-${js}`), _p((x) => (u(m(m({}, P), {
      key: _,
      content: () => f(Kd, {
        prefixCls: d,
        type: h,
        icon: typeof g == "function" ? g() : g
      }, {
        default: () => [typeof v == "function" ? v() : v]
      }),
      placement: "top",
      // @ts-ignore
      class: Q(h && `${p}-${h}`, c, b),
      onClose: () => {
        C == null || C(), x();
      }
    })), () => {
      o(_);
    }));
  }, a = {
    open: r,
    destroy: (s) => {
      var u;
      s !== void 0 ? o(s) : (u = t.value) === null || u === void 0 || u.destroy();
    }
  };
  return ["info", "success", "warning", "error", "loading"].forEach((s) => {
    const u = (d, c, p) => {
      let v;
      d && typeof d == "object" && "content" in d ? v = d : v = {
        content: d
      };
      let g, h;
      typeof c == "function" ? h = c : (g = c, h = p);
      const y = m(m({
        onClose: h,
        duration: g
      }, v), {
        type: s
      });
      return r(y);
    };
    a[s] = u;
  }), [a, () => f(zS, R(R({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function LS(e) {
  return jS(e);
}
let Xd = 3, Ud, Se, FS = 1, Gd = "", Yd = "move-up", qd = !1, Qd = () => document.body, Zd, Jd = !1;
function kS() {
  return FS++;
}
function VS(e) {
  e.top !== void 0 && (Ud = e.top, Se = null), e.duration !== void 0 && (Xd = e.duration), e.prefixCls !== void 0 && (Gd = e.prefixCls), e.getContainer !== void 0 && (Qd = e.getContainer, Se = null), e.transitionName !== void 0 && (Yd = e.transitionName, Se = null, qd = !0), e.maxCount !== void 0 && (Zd = e.maxCount, Se = null), e.rtl !== void 0 && (Jd = e.rtl);
}
function WS(e, t) {
  if (Se) {
    t(Se);
    return;
  }
  Uo.newInstance({
    appContext: e.appContext,
    prefixCls: e.prefixCls || Gd,
    rootPrefixCls: e.rootPrefixCls,
    transitionName: Yd,
    hasTransitionName: qd,
    style: {
      top: Ud
    },
    getContainer: Qd || e.getPopupContainer,
    maxCount: Zd,
    name: "message",
    useStyle: wa
  }, (n) => {
    if (Se) {
      t(Se);
      return;
    }
    Se = n, t(n);
  });
}
const ef = {
  info: Yt,
  success: Ut,
  error: qt,
  warning: Gt,
  loading: ht
}, KS = Object.keys(ef);
function XS(e) {
  const t = e.duration !== void 0 ? e.duration : Xd, n = e.key || kS(), o = new Promise((i) => {
    const a = () => (typeof e.onClose == "function" && e.onClose(), i(!0));
    WS(e, (l) => {
      l.notice({
        key: n,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: (s) => {
          let {
            prefixCls: u
          } = s;
          const d = ef[e.type], c = d ? f(d, null, null) : "", p = Q(`${u}-custom-content`, {
            [`${u}-${e.type}`]: e.type,
            [`${u}-rtl`]: Jd === !0
          });
          return f("div", {
            class: p
          }, [typeof e.icon == "function" ? e.icon() : e.icon || c, f("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
        },
        onClose: a,
        onClick: e.onClick
      });
    });
  }), r = () => {
    Se && Se.removeNotice(n);
  };
  return r.then = (i, a) => o.then(i, a), r.promise = o, r;
}
function US(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
const Ft = {
  open: XS,
  config: VS,
  destroy(e) {
    if (Se)
      if (e) {
        const {
          removeNotice: t
        } = Se;
        t(e);
      } else {
        const {
          destroy: t
        } = Se;
        t(), Se = null;
      }
  }
};
function GS(e, t) {
  e[t] = (n, o, r) => US(n) ? e.open(m(m({}, n), {
    type: t
  })) : (typeof o == "function" && (r = o, o = void 0), e.open({
    content: n,
    duration: o,
    type: t,
    onClose: r
  }));
}
KS.forEach((e) => GS(Ft, e));
Ft.warn = Ft.warning;
Ft.useMessage = LS;
var YS = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 888H232V336h218v174c0 22.1 17.9 40 40 40h174v338zm0-402H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z" } }] }, name: "snippets", theme: "outlined" };
function Ls(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      qS(e, r, n[r]);
    });
  }
  return e;
}
function qS(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ca = function(t, n) {
  var o = Ls({}, t, n.attrs);
  return f(fe, Ls({}, o, {
    icon: YS
  }), null);
};
Ca.displayName = "SnippetsOutlined";
Ca.inheritAttrs = !1;
const QS = /* @__PURE__ */ D({
  name: "CopyAction",
  setup() {
    const e = H(Gs), t = H(Ys), n = k("file-code-copy"), {
      isSupported: o,
      copy: r
    } = wf({
      source: n
    });
    async function i() {
      const a = e == null ? void 0 : e.value.find((l) => l.identifier === (t == null ? void 0 : t.value));
      if (a)
        try {
          await r(a.code), Ft.success({
            content: "已复制"
          });
        } catch {
          Ft.error({
            content: "复制失败"
          });
        }
    }
    if (o.value)
      return () => f(it, {
        title: "复制代码"
      }, {
        default: () => [f(Ca, {
          class: "code-box-code-action scale small",
          key: "copy",
          onClick: i
        }, null)]
      });
  }
}), l2 = /* @__PURE__ */ D({
  name: "DemoBox",
  setup(e, {
    slots: t
  }) {
    const n = k(null);
    yf(n);
    const o = () => f(N$, null, {
      default: () => [f(B$, null, null), f(U$, null, null), f(Z$, null, null), f(QS, null, null)]
    });
    return () => f(R$, {
      ref: n
    }, {
      header: t.title,
      meta: t.description,
      toolbar: o,
      code: () => f(M$, null, null),
      preview: () => f(p$, null, null),
      terminal: () => f(va, null, null)
    });
  }
});
export {
  l2 as DemoBox
};
