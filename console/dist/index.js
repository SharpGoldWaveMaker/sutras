var Ye = Object.defineProperty;
var Je = (e, t, n) => t in e ? Ye(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var P = (e, t, n) => (Je(e, typeof t != "symbol" ? t + "" : t, n), n);
import { openBlock as u, createElementBlock as d, createElementVNode as w, defineComponent as y, createVNode as l, toRefs as ie, ref as q, watch as X, withDirectives as Qe, vShow as Ze, provide as ue, inject as J, useSlots as et, computed as Ee, h as Y, useAttrs as tt, normalizeProps as nt, guardReactiveProps as rt, unref as i, renderSlot as L, createTextVNode as p, mergeProps as st, shallowRef as fe, watchEffect as at, toRaw as xe, createBlock as A, withCtx as k, toDisplayString as b, Fragment as v, createCommentVNode as D, renderList as T, resolveDynamicComponent as lt, normalizeClass as ot, reactive as ct, shallowReactive as ne, getCurrentInstance as it, isVNode as ut } from "vue";
import { useNamespace as R, classNames as ft } from "@sgwm-sutras/style";
import { sprintf as dt } from "sprintf-js";
const ht = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, mt = /* @__PURE__ */ w("path", { d: "M1003.52 95.573c-3.413-6.826-10.24-10.24-13.653-10.24H34.133c-6.826 0-10.24 3.414-13.653 10.24s-3.413 10.24 0 17.067l477.867 819.2c3.413 6.827 10.24 6.827 13.653 6.827s10.24-3.414 13.653-6.827l477.867-819.2c3.413-6.827 3.413-13.653 0-17.067" }, null, -1), yt = [
  mt
];
function pt(e, t) {
  return u(), d("svg", ht, [...yt]);
}
const gt = { render: pt }, bt = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, kt = /* @__PURE__ */ w("path", { d: "M931.84 498.347 112.64 20.48c-6.827-3.413-10.24-3.413-17.067 0s-10.24 6.827-10.24 13.653v955.734c0 6.826 3.414 10.24 10.24 13.653 3.414 0 6.827 3.413 6.827 3.413 3.413 0 6.827 0 10.24-3.413l819.2-477.867c6.827-3.413 6.827-10.24 6.827-13.653s-3.414-10.24-6.827-13.653" }, null, -1), vt = [
  kt
];
function Ot(e, t) {
  return u(), d("svg", bt, [...vt]);
}
const wt = { render: Ot }, Ie = /* @__PURE__ */ y({
  name: "CollapseIcon",
  props: {
    expand: Boolean,
    onClick: Function
  },
  setup(e) {
    return () => l("span", {
      class: "su-console-collapse-icon",
      onClick: e.onClick
    }, [e.expand ? l(gt, null, null) : l(wt, null, null)]);
  }
}), Ct = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, At = /* @__PURE__ */ w("path", {
  fill: "#1C6BFF",
  d: "M1023.977 585.153a40.6 40.6 0 0 1-12.142 29.403 38.98 38.98 0 0 1-28.817 12.434H839.66c0 74.384-14.263 137.505-42.86 189.362l133.116 136.482c8.046 8.265 12.141 18.065 12.141 29.402a40.52 40.52 0 0 1-12.141 29.33A37.67 37.67 0 0 1 901.099 1024a37.67 37.67 0 0 1-28.817-12.434l-126.68-128.655c-2.195 2.194-5.34 5.046-9.582 8.557-4.316 3.438-13.239 9.655-26.916 18.578s-27.501 16.823-41.618 23.844a292 292 0 0 1-52.442 18.944 237.1 237.1 0 0 1-62.097 8.484v-585.13H471.03v585.13a245.8 245.8 0 0 1-64.95-8.777 258.4 258.4 0 0 1-55.66-21.577 522 522 0 0 1-42.275-25.526 229 229 0 0 1-27.794-21.21l-9.654-9.143-117.1 135.238a41.105 41.105 0 0 1-58.22 3.291 42.28 42.28 0 0 1-13.165-29.11 42.13 42.13 0 0 1 9.947-30.354l129.314-148.257c-24.795-49.663-37.156-109.273-37.156-178.976H40.959a38.98 38.98 0 0 1-28.818-12.434A40.6 40.6 0 0 1 0 585.153c0-11.337 4.023-21.138 12.141-29.403a38.98 38.98 0 0 1 28.818-12.434h143.357v-191.85L73.58 238.392a40.6 40.6 0 0 1-12.141-29.403c0-11.337 4.096-21.138 12.141-29.403a38.98 38.98 0 0 1 28.818-12.434c11.117 0 20.699 4.17 28.817 12.434l110.736 113.003h540.148L892.76 179.585a38.98 38.98 0 0 1 28.818-12.434c11.117 0 20.699 4.17 28.818 12.434 8.045 8.265 12.141 18.066 12.141 29.403a40.6 40.6 0 0 1-12.141 29.403L839.66 351.394v191.995h143.357c11.117 0 20.698 4.096 28.817 12.434 8.046 8.192 12.142 17.993 12.142 29.257zM716.784 208.988H307.193c0-57.855 19.968-107.225 59.83-147.892A195.43 195.43 0 0 1 511.987.023c56.758 0 105.104 20.334 144.966 61.073 39.862 40.667 59.83 89.964 59.83 147.892"
}, null, -1), Lt = [
  At
];
function St(e, t) {
  return u(), d("svg", Ct, [...Lt]);
}
const Nt = { render: St }, $t = /* @__PURE__ */ y({
  name: "DebugIcon",
  props: {
    expand: Boolean
  },
  setup(e) {
    return () => l("span", {
      class: "su-console-debug-icon"
    }, [l(Nt, null, null)]);
  }
}), Et = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, xt = /* @__PURE__ */ w("path", {
  fill: "#CF3736",
  d: "M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0m218.624 672.256c15.872 15.872 15.872 41.984 0 57.856-8.192 8.192-18.432 11.776-29.184 11.776s-20.992-4.096-29.184-11.776L512 569.856 351.744 730.112c-8.192 8.192-18.432 11.776-29.184 11.776s-20.992-4.096-29.184-11.776c-15.872-15.872-15.872-41.984 0-57.856L454.144 512 293.376 351.744c-15.872-15.872-15.872-41.984 0-57.856s41.984-15.872 57.856 0L512 454.144l160.256-160.256c15.872-15.872 41.984-15.872 57.856 0s15.872 41.984 0 57.856L569.856 512z"
}, null, -1), It = [
  xt
];
function jt(e, t) {
  return u(), d("svg", Et, [...It]);
}
const Dt = { render: jt }, Rt = /* @__PURE__ */ y({
  name: "ErrorIcon",
  props: {
    expand: Boolean
  },
  setup(e) {
    return () => l("span", {
      class: "su-console-error-icon"
    }, [l(Dt, null, null)]);
  }
}), Bt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  class: "icon",
  viewBox: "0 0 1024 1024"
}, _t = /* @__PURE__ */ w("path", {
  fill: "#E9994B",
  d: "M1019.204 901.632 546.628 82.944c-15.36-26.112-52.736-26.112-68.096 0L5.444 901.632c-15.36 26.112 3.584 58.88 34.304 58.88H984.9c30.208 0 49.152-32.768 34.304-58.88"
}, null, -1), Tt = /* @__PURE__ */ w("path", {
  fill: "#FFF",
  d: "M462.148 353.792h.512a46.98 46.98 0 0 1 47.104-47.104h5.632a46.98 46.98 0 0 1 47.104 47.104v254.464c0 26.112-21.504 47.616-48.128 47.104h-4.608c-26.112 0-47.616-20.992-47.616-47.104zm107.52 421.888c-5.12 26.112-20.48 41.984-46.592 47.616q-9.216 2.304-18.432 0c-27.136-5.632-43.52-20.992-49.152-46.592-1.536-6.656-1.536-13.312 0-19.456q8.448-38.4 49.152-46.08a55.7 55.7 0 0 1 18.432 0c26.112 5.632 41.472 20.992 46.592 47.104 1.024 5.632 1.024 11.776 0 17.408"
}, null, -1), Mt = [
  _t,
  Tt
];
function Pt(e, t) {
  return u(), d("svg", Bt, [...Mt]);
}
const zt = { render: Pt }, Ft = /* @__PURE__ */ y({
  name: "WarnIcon",
  props: {
    expand: Boolean
  },
  setup(e) {
    return () => l("span", {
      class: "su-console-warn-icon"
    }, [l(zt, null, null)]);
  }
}), N = /* @__PURE__ */ y({
  name: "ConsoleCollapse",
  inheritAttrs: !1,
  props: {
    onlyBtn: Boolean,
    disableMagic: Boolean,
    forceMagic: Boolean,
    paddingLeft: Number,
    flat: Boolean,
    show: Boolean,
    classSummary: String,
    classDetail: String,
    showIcon: {
      type: Boolean,
      default: !0
    }
  },
  setup(e, {
    slots: t
  }) {
    const n = R("console-collapse"), {
      show: r
    } = ie(e), s = q(e.show), a = q(s.value);
    if (X(r, (h) => {
      s.value = h;
    }), !s.value) {
      const h = X(s, () => {
        a.value = !0, h();
      });
    }
    function c(h) {
      s.value = !s.value, h.stopPropagation();
    }
    const o = () => {
      if (e.showIcon)
        return l("div", {
          class: n.e("icon")
        }, [l(Ie, {
          expand: s.value
        }, null)]);
    }, f = () => {
      var g, F, E;
      if (t.summary)
        return t.summary();
      let h;
      return e.forceMagic ? h = (g = t["summary-opened"]) == null ? void 0 : g.call(t) : e.disableMagic || !t["summary-opened"] || !s.value ? h = (F = t.default) == null ? void 0 : F.call(t) : h = (E = t["summary-opened"]) == null ? void 0 : E.call(t), l("div", {
        class: n.e("summary")
      }, [h]);
    }, m = () => {
      var h;
      if (s.value || a.value)
        return Qe(l("div", {
          class: ["collapse-detail", e.classDetail],
          style: {
            "--p-left": e.paddingLeft ? `${e.paddingLeft}px` : void 0
          }
        }, [(h = t.content) == null ? void 0 : h.call(t, {
          state: s.value
        })]), [[Ze, s.value]]);
    };
    return () => {
      var h, g;
      return e.onlyBtn ? (h = t.default) == null ? void 0 : h.call(t) : e.flat ? (g = t.content) == null ? void 0 : g.call(t) : l("div", {
        class: n.b()
      }, [l("div", {
        class: n.e("preview"),
        onClick: c
      }, [l(o, null, null), l(f, null, null)]), l(m, null, null)]);
    };
  }
});
function je(e = 0) {
  var a, c;
  e += 5;
  const t = (a = new Error().stack) == null ? void 0 : a.toString().split(" at ", e);
  if (!t)
    return;
  const n = (c = t[e - 1] ?? t[t.length - 1]) == null ? void 0 : c.trim();
  if (!n)
    return;
  if (n.includes(")")) {
    const o = n.slice(
      n.lastIndexOf("(") + 1,
      n.lastIndexOf(")")
    );
    try {
      const f = new URL(o);
      return f.searchParams.delete("t"), f.href;
    } catch {
      return o;
    }
  }
  const r = n.indexOf(" "), s = n.slice(r === -1 ? 0 : r);
  try {
    const o = new URL(s);
    return o.searchParams.delete("t"), o.href;
  } catch {
    return s;
  }
}
const we = /* @__PURE__ */ new Map();
function qt(e) {
  const t = we.get(e);
  if (t)
    return t;
  const n = Math.random().toString(36);
  return we.set(e, n), n;
}
function Vt(e) {
  return [
    ...Object.getOwnPropertyNames(e),
    ...Object.getOwnPropertySymbols(e)
  ];
}
function W(e) {
  return Vt(e).map((t) => [t, e[t]]);
}
function Ut({ arr: e }) {
  for (const t in e)
    return !!Number.isNaN(+t);
  return !0;
}
const Gt = (e, t) => ({
  "@t": "string",
  "@first": t.first,
  "@value": e
}), Ce = (e) => ({
  "@t": "number",
  "@value": e.toString()
}), Wt = (e) => ({
  "@t": "bint",
  "@value": `${e.toString()}n`
}), Ht = (e) => ({
  "@t": "symbol",
  "@value": `${e.toString()}`
}), Kt = () => ({
  "@t": "nill",
  "@value": "undefined"
}), Xt = () => ({
  "@t": "nill",
  "@value": "null"
});
function V(e, t, n) {
  try {
    return Reflect.get(e, t, n);
  } catch (r) {
    return r;
  }
}
function de(e) {
  return e instanceof ArrayBuffer;
}
const { toString: Yt } = Object.prototype;
function Q(e) {
  return Yt.call(e).slice(8, -1);
}
function Z(e) {
  var n;
  const t = Q(e);
  return e !== null && typeof e == "object" && // なんで？わかない。ぼくわかない。
  Object.getPrototypeOf(e) === ((n = e.constructor) == null ? void 0 : n.prototype) && (t === "Map" || t === "WeakMap" || t === "Set" || t === "WeakSet");
}
function he(e) {
  return e instanceof DataView;
}
function De(e) {
  try {
    return e instanceof Node ? e.nodeName !== void 0 : !1;
  } catch {
    return !1;
  }
}
function ee(e) {
  return Array.isArray(e) ? !0 : e instanceof NodeList;
}
function Re(e) {
  return typeof (e == null ? void 0 : e.then) == "function";
}
function te(e) {
  return e instanceof RegExp;
}
const Be = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
];
typeof BigInt64Array < "u" && Be.push(
  // eslint-disable-next-line n/no-unsupported-features/es-builtins
  BigInt64Array,
  // eslint-disable-next-line n/no-unsupported-features/es-builtins
  BigUint64Array
);
function me(e) {
  return Be.some((t) => e instanceof t);
}
const Jt = /(?:^async(?:\s+function\s*)?\s*\*?\s*)|(?:^(?:function\s*)?\*?\s*)/, Qt = /^\*\s*/, Zt = /,\s*/g, Ae = /\s+/g;
function en(e) {
  const t = Jt.exec(e)[0], n = e.indexOf("{");
  let r;
  const s = n === -1 ? r = (e.indexOf("=>") >>> 0) + 2 : n, a = e.slice(t.length, s), c = a.indexOf("("), o = a.indexOf(")"), f = t.startsWith("async"), m = t.includes("*"), h = a.slice(0, c).replace(Qt, "* "), g = a.slice(h.length, o + 1).replace(Zt, ", "), F = t.includes("function") ? 0 : a.includes("=>") ? 1 : 2;
  let E;
  return F === 1 && (n > -1 ? E = e.slice(n, (e.lastIndexOf("}") >>> 0) + 1).replace(Ae, " ") : E = e.slice(r + 1, (e.lastIndexOf("}") >>> 0) + 1).replace(Ae, " "), E.length > 52 && (E = void 0)), { name: h, args: g, content: E, isAsync: f, isStar: m, typeFn: F };
}
const tn = ["byteLength"];
function _e(e) {
  const t = {};
  return tn.forEach((n) => {
    const r = V(e, n, e), s = !1;
    typeof r != "function" && (t[n.toString()] = {
      value: e[n],
      enumerable: s
    });
  }), t;
}
const nn = ["size"];
function Te(e) {
  const t = {}, n = Q(e).startsWith("Weak");
  return nn.forEach((r) => {
    if (n && r === "size")
      return;
    const s = V(e, r, e), a = !1;
    typeof s != "function" && (t[r.toString()] = {
      value: e[r],
      enumerable: a
    });
  }), t;
}
const rn = ["buffer", "byteLength", "byteOffset"];
function Me(e) {
  const t = {};
  return rn.forEach((n) => {
    const r = V(e, n, e), s = !1;
    typeof r != "function" && (t[n.toString()] = {
      value: e[n],
      enumerable: s
    });
  }), t;
}
function ye(e) {
  const t = {}, n = ee(e);
  for (const r in e)
    n && typeof r == "string" && r !== "length" || (t[r] = {
      value: V(e, r, e),
      enumerable: !0
    });
  return t;
}
const sn = W(Object.getOwnPropertyDescriptors(RegExp.prototype));
function Pe(e) {
  const t = {};
  return sn.forEach(([n, r]) => {
    const { value: s, enumerable: a } = r;
    n !== "lastIndex" && typeof s != "function" && (t[n.toString()] = {
      value: e[n],
      enumerable: a
    });
  }), t;
}
const ze = [
  // "BYTES_PER_ELEMENT",
  "buffer",
  "byteLength",
  "byteOffset",
  "length",
  Symbol.toStringTag
];
function ae(e) {
  const t = {};
  return ze.forEach((n) => {
    const r = V(e, n, e), s = !1;
    typeof r != "function" && (t[n.toString()] = {
      value: e[n],
      enumerable: s
    });
  }), t;
}
const an = 80;
function ln(e) {
  return e.childNodes.length === 0 || e.childNodes.length === 1 && (!e.textContent || e.childNodes[0].nodeType === Node.TEXT_NODE && e.textContent.length < an);
}
function I(e, t = !1) {
  return {
    "@hidden": t,
    "@value": e
  };
}
function j(e, t = null) {
  return {
    "@t": "object",
    "@name": t,
    "@first": !1,
    "@real": e,
    "@des": null
  };
}
const le = (e, t) => {
  const { first: n, linkReal: r, store: s } = t;
  if (r) {
    const a = `${e}`, c = en(a);
    return {
      "@t": "function",
      "@code": n ? e.toString() : "",
      "@header": c,
      "@first": n,
      "@real": n ? null : O(e, t.store)
    };
  }
  return j($(e, { store: s }));
}, on = (e, t) => {
  const { linkReal: n, first: r, store: s } = t;
  return n ? {
    "@t": "error",
    "@first": r,
    "@stack": e.stack ?? "",
    "@real": r ? null : O(e, t.store)
  } : j($(e, { store: s }));
}, cn = (e, t) => {
  const { linkReal: n, first: r, store: s } = t;
  return n ? {
    "@t": "regexp",
    "@name": `${e}`,
    "@first": r,
    "@flags": e.flags,
    "@source": e.source,
    "@real": r ? null : O(e, s)
  } : j(
    $(e, { store: s }, Pe(e))
  );
}, un = (e, t) => {
  const { linkReal: n, first: r, store: s } = t;
  return n ? {
    "@t": "date",
    "@first": r,
    "@value": e.toString(),
    "@real": r ? null : O(e, s),
    "@des": r ? null : H(e, { store: s })
  } : j($(e, { store: s }));
}, fn = (e, t) => {
  const { linkReal: n, first: r, store: s } = t;
  return n ? {
    "@t": "array",
    "@first": r,
    "@size": e.length,
    "@name": e instanceof NodeList ? "NodeList" : null,
    "@des": H(e, { store: s }),
    "@real": O(e, s)
  } : j($(e, { store: s }));
};
function dn(e, t) {
  const { linkReal: n, first: r, preview: s, store: a } = t;
  return n ? {
    "@t": "typedarray",
    "@first": r,
    "@size": e.length,
    "@name": e[Symbol.toStringTag],
    "@des": s ? H(e, { store: a }, ae(e)) : null,
    "@real": O(e, a)
  } : j(
    $(
      e,
      { store: a },
      ae(e)
    )
  );
}
const hn = (e, t) => {
  var s;
  const { linkReal: n, store: r } = t;
  return n ? {
    "@t": "collection",
    "@name": toString.call(e).slice(8, -1),
    "@size": e.size ?? null,
    "@entries": Array.from(
      ((s = e.entries) == null ? void 0 : s.call(e)) ?? []
    ).map(([c, o]) => [
      C(c, {
        first: !1,
        linkReal: !0,
        store: r
      }),
      C(o, {
        first: !1,
        linkReal: !0,
        store: r
      })
    ]),
    "@real": O(e, r)
  } : j(
    $(e, { store: r }, Te(e))
  );
}, mn = (e, t) => {
  const { linkReal: n, first: r, store: s } = t;
  return n ? {
    "@t": "buffer",
    "@first": r,
    "@size": e.byteLength,
    "@name": Q(e),
    "@real": O(e, s)
  } : j({
    ...$(e, { store: s }, _e(e)),
    "[[Int8Array]]": I(
      C(new Int8Array(e), {
        first: !1,
        linkReal: !0,
        preview: !1,
        store: s
      }),
      !0
    ),
    "[[Uint8Array]]": I(
      C(new Uint8Array(e), {
        first: !1,
        linkReal: !0,
        preview: !1,
        store: s
      }),
      !0
    ),
    "[[Int16Array]]": I(
      C(new Int16Array(e, 0, ~~(e.byteLength / 2)), {
        first: !1,
        linkReal: !0,
        preview: !1,
        store: s
      }),
      !0
    ),
    "[[Int32Array]]": I(
      C(new Int32Array(e, 0, ~~(e.byteLength / 4)), {
        first: !1,
        linkReal: !0,
        preview: !1,
        store: s
      }),
      !0
    ),
    "[[ArrayBufferByteLength]]": I(
      C(e.byteLength, {
        first: !1,
        linkReal: !0,
        store: s
      }),
      !0
    )
  });
}, yn = (e, t) => {
  const { linkReal: n, first: r, store: s } = t;
  return n ? {
    "@t": "dataview",
    "@name": "DataView",
    "@first": r,
    "@size": e.byteLength,
    "@real": O(e, s)
  } : j(
    $(
      e,
      { store: s },
      Me(e)
    )
  );
}, pn = (e, t) => {
  const { linkReal: n, first: r, store: s } = t;
  return n ? {
    "@t": "promise",
    "@first": r,
    "@state": "pending",
    "@real": O(e, s),
    "@des": H(e, { store: s })
  } : j($(e, { store: s }));
}, gn = {
  1: "ELEMENT_NODE",
  3: "TEXT_NODE",
  7: "PROCESSING_INSTRUCTION_NODE",
  8: "COMMENT_NODE",
  9: "DOCUMENT_NODE",
  10: "DOCUMENT_TYPE_NODE",
  11: "DOCUMENT_FRAGMENT_NODE"
}, bn = (e, t) => {
  const { linkReal: n, first: r, store: s } = t;
  if (n) {
    const a = r && e instanceof Element ? Array.from(e.attributes).map((c) => [
      c.name,
      c.value
    ]) : void 0;
    switch (e.nodeType) {
      case Node.ELEMENT_NODE:
        return {
          "@t": "element",
          "@name": e.nodeName,
          "@first": r,
          "@attrs": a,
          "@real": r ? null : O(e, s),
          "@childs": ln(e) ? e.textContent : O(e.childNodes, s)
        };
      case Node.TEXT_NODE:
      case Node.CDATA_SECTION_NODE:
      case Node.COMMENT_NODE:
        return {
          "@t": "element",
          "@name": e.nodeName,
          "@first": r,
          "@attrs": a,
          "@real": r ? null : O(e, s),
          "@childs": e.textContent
        };
      case Node.PROCESSING_INSTRUCTION_NODE:
        return {
          "@t": "element",
          "@name": e.nodeName,
          "@first": r,
          "@attrs": a,
          "@real": r ? null : O(e, s)
        };
      case Node.DOCUMENT_TYPE_NODE:
        return {
          "@t": "element",
          "@name": e.nodeName,
          // html
          "@first": r,
          "@attrs": a,
          "@real": r ? null : O(e, s),
          "@childs": `<!DOCTYPE ${e.name} ${e.publicId ? ` PUBLIC "${e.publicId}"` : ""} ${!e.publicId && e.systemId ? " SYSTEM" : ""} ${e.systemId ? ` "${e.systemId}"` : ""} >`
        };
      case Node.DOCUMENT_NODE:
        return {
          "@t": "element",
          "@name": e.nodeName,
          // #document
          "@first": r,
          "@attrs": a,
          "@real": r ? null : O(e, s)
        };
      case Node.DOCUMENT_FRAGMENT_NODE:
        return {
          "@t": "element",
          "@name": e.nodeName,
          // #document-fragment
          "@first": r,
          "@attrs": a,
          "@real": null
        };
      default:
        return {
          "@t": "element",
          "@name": `#${gn[e.nodeType]}` || "#unknown",
          "@first": r,
          "@real": r ? null : O(e, s)
        };
    }
  }
  return j($(e, { store: s }));
}, kn = (e, t) => {
  var c;
  if (e === null)
    return Xt();
  if (e instanceof Error)
    return on(e, t);
  if (te(e))
    return cn(e, t);
  if (e instanceof Date)
    return un(e, t);
  if (!t.forceObject && ee(e))
    return fn(e, t);
  if (me(e))
    return dn(e, t);
  if (Z(e))
    return hn(e, t);
  if (de(e))
    return mn(e, t);
  if (he(e))
    return yn(e, t);
  if (Re(e))
    return pn(e, t);
  if (De(e))
    return bn(e, t);
  const { first: n, linkReal: r, preview: s } = t;
  return {
    "@t": "object",
    "@name": ((c = e.constructor) == null ? void 0 : c.name) ?? null,
    "@first": n,
    "@real": r ? O(e, t.store) : $(e, {
      store: t.store
    }),
    "@des": r && s ? H(e, {
      store: t.store
    }) : null
  };
};
function $(e, t, n, r = Object.getPrototypeOf(e)) {
  const s = {
    first: !1,
    linkReal: !0,
    store: t.store
  }, a = Object.fromEntries(
    W(
      Object.assign(
        ye(e),
        Object.getOwnPropertyDescriptors(e),
        n
      )
    ).map(([c, o]) => {
      const { value: f } = o;
      if ("get" in o || "set" in o) {
        const m = {};
        return o.get && (m.get = le(o.get, s)), o.set && (m.set = le(o.set, s)), [
          c.toString(),
          I(
            {
              "@t": "gs",
              "@value": O(() => V(e, c, e), s.store),
              "@at": m
            },
            !o.enumerable
          )
        ];
      }
      return f !== null && typeof f == "object" && !te(f) && !Z(f) && !(f instanceof Error) && !ee(f) ? [
        c.toString(),
        I(
          C(f, s),
          !o.enumerable
        )
      ] : typeof f == "function" ? [
        c.toString(),
        I(
          C(f, s),
          !o.enumerable
        )
      ] : [
        c.toString(),
        I(C(f, s), !o.enumerable)
      ];
    })
  );
  return Object.assign(a, {
    "[[Prototype]]": I(
      C(r, {
        store: s.store,
        first: !1,
        linkReal: !0,
        preview: !1,
        forceObject: !0
      })
    )
  });
}
function H(e, t, n) {
  let r = "";
  return {
    "@value": Object.fromEntries(
      W(
        Object.assign(
          ye(e),
          Object.getOwnPropertyDescriptors(e),
          n
          // data instanceof RegExp ? getOwnDescriptorsRegExp(data) : undefined
        )
      ).map(([a, c]) => {
        a = a.toString(), r = a;
        const { value: o } = c;
        return [a, I(oe(o, t), !c.enumerable)];
      })
    ),
    "@lastKey": r
  };
}
function oe(e, t) {
  var n, r;
  return e !== null && typeof e == "object" ? e instanceof Error ? {
    "@t": "error",
    "@stack": ((n = e.stack) == null ? void 0 : n.split(`
`, 3).slice(0, 3).join(`
`)) ?? ""
  } : te(e) ? {
    "@t": "regexp",
    "@name": `${e}`
  } : e instanceof Date ? {
    "@t": "date",
    "@value": e.toString()
  } : Z(e) ? {
    "@t": "collection",
    "@name": toString.call(e).slice(8, -1),
    "@size": e.size ?? null
  } : ee(e) ? {
    "@t": "array",
    "@name": e instanceof NodeList ? "NodeList" : null,
    "@size": e.length
  } : me(e) ? {
    "@t": "typedarray",
    "@name": e[Symbol.toStringTag],
    "@size": e.length
  } : de(e) ? {
    "@t": "buffer",
    "@name": Q(e),
    "@size": e.byteLength
  } : he(e) ? {
    "@t": "dataview",
    "@name": "DataView",
    "@size": e.byteLength
  } : De(e) ? {
    "@t": "element",
    "@name": e.nodeName
  } : Re(e) ? {
    "@t": "promise"
  } : {
    "@t": "object",
    "@name": ((r = e.constructor) == null ? void 0 : r.name) ?? null
  } : typeof e == "function" ? {
    "@t": "function"
  } : C(e, {
    first: !1,
    linkReal: !0,
    store: t.store
  });
}
function re(e) {
  var t;
  if (e.length > 0 && typeof e[0] == "string") {
    const n = (t = e[0].match(/%\w/g)) == null ? void 0 : t.length;
    if (n) {
      const { length: r } = e;
      return [
        dt(
          e[0],
          ...e.slice(1, n + 1),
          ...r - 1 < n ? Array(n - (r - 1)).fill("%s") : []
        ),
        ...e.slice(n + 1)
      ];
    }
  }
  return e;
}
function vn(e) {
  if (!(e === null || typeof e != "object")) {
    if (de(e))
      return _e(e);
    if (Z(e))
      return Te(e);
    if (he(e))
      return Me(e);
    if (te(e))
      return Pe(e);
    if (me(e))
      return ae(e);
  }
}
function Le(e) {
  return Object.assign(
    ye(e),
    Object.getOwnPropertyDescriptors(e),
    vn(e)
    //   extendsPropertyDescriptors //data instanceof RegExp ? getOwnDescriptorsRegExp(data) : undefined
  );
}
function On(e) {
  return typeof (e == null ? void 0 : e.table) == "object";
}
const wn = {
  string: Gt,
  number: Ce,
  boolean: Ce,
  bigint: Wt,
  symbol: Ht,
  undefined: Kt,
  function: le,
  object: kn
};
function O(e, t) {
  var a;
  const n = typeof e == "function" ? e.name : ((a = e == null ? void 0 : e.constructor) == null ? void 0 : a.name) ?? null, r = t.query(e);
  if (r)
    return {
      "@t": "link",
      "@type": typeof e,
      "@link": r,
      "@name": n
    };
  const s = t.set(e);
  return {
    "@t": "link",
    "@type": typeof e,
    "@link": s,
    "@name": n
  };
}
function C(e, t) {
  return wn[typeof e](e, {
    first: !1,
    linkReal: !1,
    preview: !0,
    forceObject: !1,
    ...t
  });
}
function Cn(e, t) {
  const n = {}, r = /* @__PURE__ */ new Set();
  return W(Le(e)).forEach(([s, a]) => {
    s = s.toString();
    const { value: c } = a;
    let o;
    if (c !== null && typeof c == "object" && (!(o = Array.isArray(c)) || !Ut({ arr: c }))) {
      const f = n[s] = {};
      W(Le(c)).forEach(([m, h]) => {
        o && m === "length" || (m = m.toString(), r.add(m), f[m] = oe(h.value, t));
      });
    } else
      r.add("value"), n[s] = {
        value: oe(c, t)
      };
  }), {
    table: n,
    cols: Array.from(r.values()),
    "@location": t.deepLink === !1 ? void 0 : je(t.deepLink),
    "@collapse": S(e, {
      first: !1,
      store: t.store
    })
  };
}
function S(e, t) {
  return {
    ...C(e, {
      first: !0,
      linkReal: !0,
      ...t
    }),
    "@id": qt(e),
    "@location": t.deepLink === !1 ? void 0 : je(t.deepLink)
  };
}
function Or(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  return {
    encode: S,
    encodeArgs: (a, ...c) => {
      switch (a) {
        case "warn":
        case "info":
        case "debug":
        case "error":
        case "log":
          return {
            type: a,
            values: re(c).map((o) => S(o, {
              deepLink: 3,
              store: e
            }))
          };
        case "assert": {
          const [o, ...f] = c;
          if (!o)
            return f.unshift("Assertion failed: "), {
              type: "error",
              values: re(f).map((m) => S(m, {
                deepLink: 3,
                store: e
              }))
            };
        }
        case "table": {
          const o = c[0] || [];
          return typeof o == "object" ? {
            type: a,
            values: [Cn(o, {
              deepLink: 2,
              store: e
            })]
          } : {
            type: "log",
            values: [o]
          };
        }
        case "group":
        case "groupCollapsed":
        case "groupEnd": {
          const o = c[0] || "console-goup";
          return {
            type: a,
            values: [S(o, { deepLink: 2, store: e })]
          };
        }
        case "count": {
          const [o = "default"] = c || [];
          let f = t.get(o);
          f ? f++ : f = 1, t.set(o, f);
          const m = `${o}: ${f}`;
          return {
            type: "log",
            values: [S(m, { deepLink: 2, store: e })]
          };
        }
        case "countReset": {
          const [o = "default"] = c || [];
          return t.delete(o), null;
        }
        case "time": {
          const [o = "default"] = c || [];
          if (n.has(o)) {
            const f = `Timer '${o}' already exists`;
            return {
              type: "warn",
              values: [S(f, { deepLink: 2, store: e })]
            };
          } else
            return n.set(o, performance.now()), null;
        }
        case "timeLog": {
          const [o = "default", ...f] = c || [], m = n.get(o);
          if (!m) {
            const g = `Timer '${o}' does not exist`;
            return {
              type: "warn",
              values: [S(g, { deepLink: 2, store: e })]
            };
          }
          const h = `${o}: ${performance.now() - m} ms`;
          return {
            type: "log",
            values: [
              S(h, { deepLink: 2, store: e }),
              ...re(f).map((g) => S(g, {
                deepLink: 3,
                store: e
              }))
            ]
          };
        }
        case "timeEnd": {
          const [o = "default"] = c || [], f = n.get(o);
          if (!f) {
            const h = `Timer '${o}' does not exist`;
            return {
              type: "warn",
              values: [S(h, { deepLink: 2, store: e })]
            };
          }
          const m = `${o}: ${performance.now() - f} ms`;
          return n.delete(o), {
            type: "log",
            values: [S(m, { deepLink: 2, store: e })]
          };
        }
      }
    },
    clear: () => {
      n.clear(), t.clear();
    }
  };
}
class wr {
  // 自增计数器
  constructor(t = null) {
    P(this, "linkMap");
    P(this, "max");
    P(this, "accessOrder");
    // 用于跟踪访问顺序
    P(this, "count", 0);
    this.linkMap = /* @__PURE__ */ new Map(), this.max = t, this.accessOrder = [];
  }
  clear() {
    this.linkMap.clear(), this.accessOrder.splice(0), this.count = 0;
  }
  set(t) {
    this.count += 1;
    const n = `key-${this.count}`;
    return this.linkMap.set(n, t), this.accessOrder.push(n), this.max !== null && this.linkMap.size > this.max && this.evict(), n;
  }
  get(t) {
    const n = this.linkMap.get(t);
    return n && this.max !== null && this.moveToFront(t), n;
  }
  query(t) {
    for (const [n, r] of this.linkMap.entries())
      if (Object.is(r, t))
        return this.max !== null && this.moveToFront(n), n;
  }
  evict() {
    const t = this.accessOrder.shift();
    t !== void 0 && this.linkMap.delete(t);
  }
  moveToFront(t) {
    const n = this.accessOrder.indexOf(t);
    n > -1 && (this.accessOrder.splice(n, 1), this.accessOrder.push(t));
  }
}
const pe = Symbol("ConsoleLinkParser");
function An(e) {
  async function t(s) {
    const a = e.store.get(s["@link"]);
    return typeof a != "function" ? await {
      "@t": "error",
      "@first": !1,
      "@stack": "Error: this memory freed.",
      "@real": null
    } : await C(a(), {
      first: !1,
      linkReal: !0,
      store: e.store
    });
  }
  async function n(s) {
    const a = e.store.get(s["@link"]);
    return C(a, {
      first: !1,
      linkReal: !1,
      store: e.store
    });
  }
  async function r(s) {
    const a = e.store.get(s["@link"]);
    return typeof a != "function" ? {
      "@t": "error",
      "@first": !1,
      "@stack": "Error: this memory freed.",
      "@real": null
    } : C(a(), {
      first: !1,
      linkReal: !0,
      store: e.store
    });
  }
  return ue(pe, {
    _getListLinkAsync: t,
    readLinkObjectAsync: n,
    callFnLinkAsync: r,
    ...e
  });
}
function ge() {
  return J(pe);
}
function be() {
  const { render: e } = ge(), t = et();
  return e ?? t.anchor ?? "a";
}
const Ln = {
  level: 0
}, Fe = Symbol("ConsoleIndentLevel");
function Sn() {
  const { level: e } = qe();
  return ue(Fe, { level: e + 1 }), {
    level: e
  };
}
function qe() {
  return J(Fe, Ln);
}
function Ve() {
  return {
    paddingLeft: 0,
    indent: 12
  };
}
const Ue = Symbol("ConsoleTheme");
function Nn() {
  return ue(Ue, Ve());
}
function $n() {
  return J(Ue, Ve());
}
function En(e) {
  const { indent: t } = $n(), { level: n } = qe();
  return Ee(() => (e.paddingLeft ?? 0) + t * n);
}
function xn(e, t) {
  return typeof e == "function" ? Y("span", [e(t)]) : Y(
    e,
    {
      href: t.href,
      target: t.target,
      class: t.class
    },
    [t.text]
  );
}
function In(e) {
  e = e.slice(e.lastIndexOf("/") + 1);
  try {
    const t = new URL(e);
    return t.searchParams.delete("t"), t.href;
  } catch {
    return e;
  }
}
const jn = /(?:[^\s()]+):\/\/[^\s()]+/gi;
function Ge(e, t) {
  const n = t == null ? void 0 : t.minifyLink, r = (t == null ? void 0 : t.classes) ?? "", s = (t == null ? void 0 : t.component) ?? "a", a = [];
  let c = 0;
  for (const o of e.matchAll(jn))
    a.push(e.slice(c, o.index)), a.push(
      xn(s, {
        target: "_blank",
        href: o[0],
        class: r,
        get text() {
          return n ? In(o[0]) : o[0];
        }
      })
    ), c = o.index + o[0].length;
  return a.push(e.slice(c)), a;
}
const x = /* @__PURE__ */ y({
  name: "ConsoleValueStatic",
  inheritAttrs: !1,
  props: {
    data: {
      type: [String, Number, Object, Array, Symbol, Function],
      required: !0
    },
    hideNameObject: Boolean,
    full: Boolean,
    isLog: Boolean,
    first: Boolean
  },
  setup(e) {
    const t = R("console-value-static"), {
      data: n,
      hideNameObject: r,
      full: s,
      isLog: a,
      first: c
    } = e, o = be(), f = () => {
      let g;
      return c ? g = Y("span", Ge(n["@value"], {
        classes: "color-white",
        component: o
      })) : s ? g = `"${n["@value"].replace(/"/g, '\\"').replace(/\\n/g, `\\
`)}"` : g = `'${n["@value"].replace(/'/g, "\\'").replace(/\\n/g, `\\
`)}'`, l("span", {
        class: a ? void 0 : "string"
      }, [g]);
    }, m = () => {
      const g = [];
      return r || g.push(n["@name"]), g.push("{...}"), g;
    }, h = () => {
      const g = n["@t"];
      switch (g) {
        case "string":
          return l(f, null, null);
        case "number":
        case "bint":
        case "symbol":
        case "nill":
          return l("span", {
            class: t.e(g)
          }, [n["@value"]]);
        case "object":
          return l(m, null, null);
        case "error":
          return n["@stack"];
        case "regexp":
          return l("span", {
            class: g
          }, [n["@name"]]);
        case "collection":
        case "array":
        case "typedarray":
        case "buffer":
        case "dataview":
          return l(ce, {
            data: n
          }, null);
        case "function":
          return "ƒ";
        case "element":
          return l("span", {
            class: "element-tag"
          }, [n["@name"].toLowerCase().replace(/^#/, "")]);
        case "promise":
          return "Promise";
        case "date":
          return n["@value"];
        case "gs":
          return "(…)";
        default:
          return "nothing";
      }
    };
    return () => l("span", {
      class: t.b()
    }, [h()]);
  }
}), U = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "basic",
  props: {
    data: {
      type: Object,
      required: !0
    },
    flat: Boolean,
    isLog: Boolean
  },
  setup(e) {
    const t = tt();
    return (n, r) => (u(), d("div", nt(rt(i(t))), [
      L(n.$slots, "default"),
      l(i(x), {
        data: e.data,
        "is-log": e.isLog,
        full: "",
        first: e.data["@t"] === "string" ? e.data["@first"] : !1
      }, null, 8, ["data", "is-log", "first"])
    ], 16));
  }
}), z = /* @__PURE__ */ y({
  name: "PropName",
  inheritAttrs: !1,
  props: {
    hidden: Boolean,
    name: String,
    preview: Boolean
  },
  setup(e) {
    const t = R("console-prop-name");
    return () => {
      const n = [t.b(), e.hidden ? "propHidden" : "", e.name.startsWith("[[") ? "proto" : "", e.preview ? "propPreview" : ""].filter(Boolean).join(" ");
      return l("span", {
        class: n
      }, [e.name, l("span", {
        class: t.e("colon")
      }, [p(":")])]);
    };
  }
}), B = /* @__PURE__ */ y({
  name: "ConsoleValue",
  inheritAttrs: !1,
  props: {
    data: {
      type: Object,
      required: !0
    },
    hideNameObject: Boolean,
    flat: Boolean,
    isLog: Boolean
  },
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const r = R("console-value");
    return () => {
      const s = dr(e.data);
      return l("div", {
        class: r.b()
      }, [l(s, st(n, e), {
        ...t
      })]);
    };
  }
}), M = /* @__PURE__ */ y({
  name: "ConsoleLink",
  inheritAttrs: !1,
  props: {
    link: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = fe(), {
      readLinkObjectAsync: n
    } = ge();
    let r = !1;
    return at(() => {
      var s;
      e.link && !r && ((s = n(xe(e.link))) == null || s.then((a) => {
        t.value = a, r = !0;
      }));
    }), () => t.value ? l(B, {
      data: t.value,
      flat: !0
    }, null) : "loading...";
  }
}), Dn = { class: "array-size" }, Rn = { key: 0 }, Bn = { key: 1 }, _n = {
  key: 2,
  class: "comma"
}, Tn = { key: 0 }, Mn = { key: 1 }, Pn = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "collection",
  props: {
    data: {
      type: Object,
      required: !0
    },
    flat: Boolean
  },
  setup(e) {
    return (t, n) => (u(), A(i(N), { flat: e.flat }, {
      "summary-opened": k(() => [
        L(t.$slots, "default"),
        p(b(e.data["@name"]), 1),
        e.data["@size"] !== null ? (u(), d(v, { key: 0 }, [
          p("(" + b(e.data["@size"]) + ")", 1)
        ], 64)) : D("", !0)
      ]),
      content: k(() => [
        l(i(N), { show: "" }, {
          content: k(() => [
            (u(!0), d(v, null, T(e.data["@entries"], (r, s) => (u(), A(i(N), { key: s }, {
              content: k(() => [
                l(i(B), {
                  data: {
                    "@t": "object",
                    "@name": null,
                    "@first": !1,
                    "@des": null,
                    "@real": {
                      ...e.data["@name"].endsWith("Map") ? {
                        key: {
                          "@hidden": !1,
                          "@value": r[0]
                        }
                      } : {},
                      value: {
                        "@hidden": !1,
                        "@value": r[1]
                      }
                    }
                  },
                  flat: ""
                }, null, 8, ["data"])
              ]),
              default: k(() => [
                l(i(z), {
                  hidden: !1,
                  name: s + ""
                }, null, 8, ["name"]),
                e.data["@name"].endsWith("Map") ? (u(), d("span", Tn, [
                  p("{"),
                  l(i(x), {
                    data: r[0],
                    full: ""
                  }, null, 8, ["data"]),
                  p(" => "),
                  l(i(x), {
                    data: r[1],
                    full: ""
                  }, null, 8, ["data"]),
                  p("}")
                ])) : (u(), d("span", Mn, [
                  l(i(x), {
                    data: r[0],
                    full: ""
                  }, null, 8, ["data"])
                ]))
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          default: k(() => [
            l(i(z), {
              hidden: !1,
              name: "[[Entries]]"
            })
          ]),
          _: 1
        }),
        l(i(M), {
          link: e.data["@real"]
        }, null, 8, ["link"])
      ]),
      default: k(() => [
        L(t.$slots, "default"),
        w("span", Dn, [
          p(b(e.data["@name"]), 1),
          e.data["@size"] !== null ? (u(), d(v, { key: 0 }, [
            p("(" + b(e.data["@size"]) + ")", 1)
          ], 64)) : D("", !0)
        ]),
        e.data["@size"] === 0 ? (u(), d(v, { key: 0 }, [
          p(" {size: " + b(e.data["@size"]) + "} ", 1)
        ], 64)) : e.data["@size"] !== null ? (u(), d(v, { key: 1 }, [
          p("{"),
          (u(!0), d(v, null, T(e.data["@entries"], (r, s) => (u(), d("span", { key: s }, [
            e.data["@name"].endsWith("Map") ? (u(), d("span", Rn, [
              l(i(x), {
                data: r[0],
                "hide-name-object": ""
              }, null, 8, ["data"]),
              p(" => "),
              l(i(x), {
                data: r[1],
                "hide-name-object": ""
              }, null, 8, ["data"])
            ])) : (u(), d("span", Bn, [
              l(i(x), {
                data: r[0],
                "hide-name-object": ""
              }, null, 8, ["data"])
            ])),
            s < e.data["@size"] - 1 ? (u(), d("span", _n, ",")) : D("", !0)
          ]))), 128)),
          p("} ")
        ], 64)) : (u(), d(v, { key: 2 }, [
          p("{}")
        ], 64))
      ]),
      _: 3
    }, 8, ["flat"]));
  }
}), zn = { class: "function" }, Fn = { class: "char-f" }, qn = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "function",
  props: {
    data: {
      type: Object,
      required: !0
    },
    flat: Boolean
  },
  setup(e) {
    return (t, n) => e.data["@first"] ? (u(), d(v, { key: 0 }, [
      p(b(e.data["@code"]), 1)
    ], 64)) : (u(), A(i(N), {
      key: 1,
      flat: e.flat
    }, {
      content: k(() => [
        l(i(M), {
          link: e.data["@real"]
        }, null, 8, ["link"])
      ]),
      default: k(() => [
        L(t.$slots, "default"),
        w("span", zn, [
          e.data["@header"].typeFn !== 1 ? (u(), d(v, { key: 0 }, [
            w("span", Fn, b(e.data["@header"].isAsync ? "async " : "") + "ƒ" + b(e.data["@header"].isStar ? "*" : ""), 1),
            p(" " + b(e.data["@header"].name) + b(e.data["@header"].args), 1)
          ], 64)) : (u(), d(v, { key: 1 }, [
            p(b(e.data["@header"].args) + " => " + b(e.data["@header"].content ?? "…"), 1)
          ], 64))
        ])
      ]),
      _: 3
    }, 8, ["flat"]));
  }
}), Vn = { class: "regexp" }, Un = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "regexp",
  props: {
    data: {
      type: Object,
      required: !0
    },
    flat: Boolean
  },
  setup(e) {
    return (t, n) => (u(), A(i(N), {
      flat: e.flat,
      "only-btn": e.data["@first"]
    }, {
      content: k(() => [
        l(i(M), {
          link: e.data["@real"]
        }, null, 8, ["link"])
      ]),
      default: k(() => [
        L(t.$slots, "default"),
        w("span", Vn, b(e.data["@name"]), 1)
      ]),
      _: 3
    }, 8, ["flat", "only-btn"]));
  }
}), Gn = /* @__PURE__ */ y({
  name: "GetterField",
  inheritAttrs: !1,
  props: {
    getter: Object
  },
  setup(e) {
    const t = q(!1), n = fe(), {
      callFnLinkAsync: r
    } = ge();
    return X(t, () => {
      t.value = !0, r(e.getter).then((s) => {
        n.value = s;
      });
    }), () => !t.value || !n.value ? l("span", {
      onClick: () => t.value = !0
    }, [p("(…)")]) : l(B, {
      data: n.value,
      class: "inline !ml-0"
    }, null);
  }
}), Wn = {
  key: 0,
  class: "array-size"
}, Hn = {
  key: 0,
  class: "comma"
}, Kn = { class: "ml-4" }, Xn = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "object",
  props: {
    data: {
      type: Object,
      required: !0
    },
    flat: Boolean,
    hideNameObject: Boolean
  },
  setup(e) {
    return (t, n) => (u(), A(i(N), {
      flat: e.flat,
      "disable-magic": e.data["@first"],
      "force-magic": !e.data["@des"]
    }, {
      "summary-opened": k(() => [
        L(t.$slots, "default"),
        e.hideNameObject ? D("", !0) : (u(), d(v, { key: 0 }, [
          p(b(e.data["@name"]), 1)
        ], 64))
      ]),
      content: k(() => {
        var r;
        return [
          ((r = e.data["@real"]) == null ? void 0 : r["@t"]) === "link" ? (u(), A(i(M), {
            key: 0,
            link: e.data["@real"]
          }, null, 8, ["link"])) : (u(!0), d(v, { key: 1 }, T(e.data["@real"], (s, a) => {
            var c;
            return u(), d(v, { key: a }, [
              s["@value"]["@t"] === "gs" ? (u(), d(v, { key: 0 }, [
                w("div", Kn, [
                  l(i(z), {
                    hidden: s["@hidden"],
                    name: a + ""
                  }, null, 8, ["hidden", "name"]),
                  l(i(Gn), {
                    getter: s["@value"]["@value"],
                    class: "truncate"
                  }, null, 8, ["getter"])
                ]),
                (u(!0), d(v, null, T(s["@value"]["@at"], (o, f) => (u(), A(i(B), {
                  key: f,
                  data: o,
                  class: "truncate"
                }, {
                  default: k(() => [
                    l(i(z), {
                      hidden: "",
                      name: f + " " + a
                    }, null, 8, ["name"])
                  ]),
                  _: 2
                }, 1032, ["data"]))), 128))
              ], 64)) : (u(), A(i(B), {
                key: 1,
                data: s["@value"],
                "hide-name-object": typeof a == "string" && !(a != null && a.startsWith("[[")) && ((c = s["@value"]) == null ? void 0 : c["@name"]) === "Object"
              }, {
                default: k(() => [
                  l(i(z), {
                    hidden: s["@hidden"],
                    name: a + ""
                  }, null, 8, ["hidden", "name"])
                ]),
                _: 2
              }, 1032, ["data", "hide-name-object"]))
            ], 64);
          }), 128))
        ];
      }),
      default: k(() => {
        var r;
        return [
          L(t.$slots, "default"),
          e.hideNameObject ? D("", !0) : (u(), d("span", Wn, b(e.data["@name"]), 1)),
          p("{"),
          (u(!0), d(v, null, T((r = e.data["@des"]) == null ? void 0 : r["@value"], (s, a) => (u(), d(v, { key: a }, [
            l(i(z), {
              hidden: s["@hidden"],
              name: a + "",
              preview: ""
            }, null, 8, ["hidden", "name"]),
            l(i(x), {
              data: s["@value"],
              "hide-name-object": ""
            }, null, 8, ["data"]),
            a !== e.data["@des"]["@lastKey"] ? (u(), d("span", Hn, ",")) : D("", !0)
          ], 64))), 128)),
          p("} ")
        ];
      }),
      _: 3
    }, 8, ["flat", "disable-magic", "force-magic"]));
  }
}), Yn = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "error",
  props: {
    data: {
      type: Object,
      required: !0
    },
    flat: Boolean
  },
  setup(e) {
    const t = be();
    return (n, r) => (u(), A(i(N), {
      "only-btn": e.data["@first"]
    }, {
      content: k(() => [
        l(i(M), {
          link: e.data["@real"]
        }, null, 8, ["link"])
      ]),
      default: k(() => [
        L(n.$slots, "default"),
        (u(), A(lt(
          Y(
            "span",
            i(Ge)(e.data["@stack"], { minifyLink: !0, component: i(t) })
          )
        )))
      ]),
      _: 3
    }, 8, ["only-btn"]));
  }
}), Jn = { key: 0 }, ce = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "array-name",
  props: {
    data: {
      type: Object,
      required: !0
    },
    flat: Boolean,
    isLog: Boolean
  },
  setup(e) {
    return (t, n) => (u(), d("span", null, [
      p(b(e.data["@name"] || "Array"), 1),
      e.data["@size"] !== null ? (u(), d("span", Jn, "(" + b(e.data["@size"]) + ")", 1)) : D("", !0)
    ]));
  }
}), Qn = {
  key: 2,
  class: "comma"
}, Zn = /* @__PURE__ */ w("span", { class: "comma" }, ",", -1), Se = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "index",
  props: {
    data: {
      type: Object,
      required: !0
    },
    flat: Boolean
  },
  setup(e) {
    function t(n, r) {
      const s = [];
      let a = 0;
      for (let c = 0; c < r; c++) {
        if (!n[c]) {
          a++;
          continue;
        }
        a && (s.push({
          empty: !0,
          index: c,
          count: a
        }), a = 0), s.push({
          empty: !1,
          index: c,
          value: n[c]
        });
      }
      return a && (s.push({
        empty: !0,
        index: r - 1,
        count: a
      }), a = 0), s;
    }
    return (n, r) => (u(), A(i(N), {
      flat: e.flat,
      "disable-magic": e.data["@first"],
      "force-magic": !e.data["@des"]
    }, {
      "summary-opened": k(() => [
        L(n.$slots, "default"),
        l(ce, { data: e.data }, null, 8, ["data"])
      ]),
      content: k(() => [
        l(i(M), {
          link: e.data["@real"]
        }, null, 8, ["link"])
      ]),
      default: k(() => [
        L(n.$slots, "default"),
        l(ce, { data: e.data }, null, 8, ["data"]),
        p("["),
        (u(!0), d(v, null, T(t(e.data["@des"]["@value"], e.data["@size"]), (s, a) => (u(), d(v, { key: a }, [
          s.empty ? (u(), d("span", {
            class: "array-size mr-0",
            key: a
          }, "<empty> x " + b(s.count), 1)) : (u(), A(i(x), {
            key: 1,
            data: s.value["@value"],
            "hide-name-object": ""
          }, null, 8, ["data"])),
          e.data["@size"] - 1 > s.index ? (u(), d("span", Qn, ",")) : D("", !0)
        ], 64))), 128)),
        e.data["@t"] === "typedarray" ? (u(), d(v, { key: 0 }, [
          p(" , "),
          (u(!0), d(v, null, T(i(ze), (s) => (u(), d(v, { key: s }, [
            l(i(z), {
              hidden: e.data["@des"]["@value"][s.toString()]["@hidden"],
              name: s.toString(),
              preview: ""
            }, null, 8, ["hidden", "name"]),
            l(i(x), {
              data: e.data["@des"]["@value"][s.toString()]["@value"],
              "hide-name-object": ""
            }, null, 8, ["data"]),
            Zn
          ], 64))), 128))
        ], 64)) : D("", !0),
        p("] ")
      ]),
      _: 3
    }, 8, ["flat", "disable-magic", "force-magic"]));
  }
}), er = {
  key: 2,
  class: "element-comment"
}, tr = {
  key: 3,
  class: "element-doctype"
}, nr = { class: "element-tag" }, rr = { class: "element-propName" }, sr = { class: "element-propValue" }, ar = /* @__PURE__ */ w("span", { class: "element-propName" }, '"', -1), lr = { key: 0 }, or = { class: "element-tag" }, cr = { class: "element-tag" }, ir = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "element",
  props: {
    data: {
      type: Object,
      required: !0
    },
    flat: Boolean
  },
  setup(e) {
    const t = e, { data: n } = ie(t), r = fe(), { _getListLinkAsync: s } = J(pe);
    return X(() => n.value["@childs"], (a) => {
      var c;
      (c = s == null ? void 0 : s(xe(a))) == null || c.then((o) => {
        r.value = o;
      });
    }), (a, c) => i(n)["@first"] ? (u(), d(v, { key: 0 }, [
      i(n)["@name"] === "#text" ? (u(), d(v, { key: 0 }, [
        p(' "' + b(i(n)["@childs"]) + '" ', 1)
      ], 64)) : i(n)["@name"] === "#cdata-section" ? (u(), d(v, { key: 1 }, [
        p(b(i(n)["@childs"]), 1)
      ], 64)) : i(n)["@name"] === "#comment" ? (u(), d("span", er, b(i(n)["@childs"]), 1)) : i(n)["@name"] === "html" ? (u(), d("span", tr, b(i(n)["@childs"]), 1)) : i(n)["@name"].startsWith("#") ? (u(), A(i(N), {
        key: 4,
        "only-btn": i(n)["@real"] !== void 0
      }, {
        content: k(() => [
          l(i(M), {
            link: i(n)["@real"]
          }, null, 8, ["link"])
        ]),
        default: k(() => [
          p(b(i(n)["@name"]) + " ", 1)
        ]),
        _: 1
      }, 8, ["only-btn"])) : (u(), A(i(N), {
        key: 5,
        "only-btn": !i(n)["@childs"] || typeof i(n)["@childs"] == "string",
        "class-detail": "l7"
      }, {
        content: k(() => [
          l(i(B), { data: r.value }, null, 8, ["data"])
        ]),
        default: k(() => [
          w("span", nr, [
            p(" <" + b(i(n)["@name"].toLowerCase().replace(/^#/, "")), 1),
            (u(!0), d(v, null, T(i(n)["@attrs"], ([o, f], m) => (u(), d("span", {
              key: o,
              class: ot({
                "ml-1": m === 0,
                "mr-1": m < i(n)["@attrs"].length - 1
              })
            }, [
              w("span", rr, b(o) + '="', 1),
              w("span", sr, b(f), 1),
              ar
            ], 2))), 128)),
            p(">")
          ]),
          i(n)["@childs"] ? (u(), d("span", lr, b(typeof i(n)["@childs"] == "string" ? i(n)["@childs"] : "…"), 1)) : D("", !0),
          w("span", or, "</" + b(i(n)["@name"].toLowerCase().replace(/^#/, "")) + "> ", 1)
        ]),
        _: 1
      }, 8, ["only-btn"]))
    ], 64)) : (u(), A(i(N), {
      key: 1,
      flat: e.flat
    }, {
      content: k(() => [
        l(i(M), {
          link: i(n)["@real"]
        }, null, 8, ["link"])
      ]),
      default: k(() => [
        L(a.$slots, "default"),
        w("span", cr, b(i(n)["@name"].toLowerCase().replace(/^#/, "")), 1)
      ]),
      _: 3
    }, 8, ["flat"]));
  }
}), K = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "promise",
  props: {
    data: {
      type: Object,
      required: !0
    },
    flat: Boolean
  },
  setup(e) {
    return (t, n) => e.data["@first"] ? (u(), d(v, { key: 0 }, [
      L(t.$slots, "default"),
      p(b(e.data["@t"] === "promise" ? "Promise" : e.data["@value"]), 1)
    ], 64)) : (u(), A(i(B), {
      key: 1,
      data: {
        "@t": "object",
        "@first": !1,
        "@des": e.data["@des"],
        "@name": e.data["@t"] === "promise" ? "Promise" : e.data["@value"],
        "@real": e.data["@real"]
      },
      flat: e.flat
    }, {
      default: k(() => [
        L(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["data", "flat"]));
  }
}), ur = /* @__PURE__ */ y({
  inheritAttrs: !1,
  __name: "default",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (u(), d("span", null, [
      L(t.$slots, "default"),
      p(" Nothing " + b(e.data), 1)
    ]));
  }
}), fr = {
  string: U,
  number: U,
  bint: U,
  symbol: U,
  nill: U,
  function: qn,
  collection: Pn,
  object: Xn,
  error: Yn,
  regexp: Un,
  array: Se,
  typedarray: Se,
  element: ir,
  date: K,
  promise: K,
  buffer: K,
  // Ensure this is correct, previously was a mistake
  dataview: K
};
function dr(e) {
  return fr[e["@t"]] || ur;
}
q(!1);
const We = /* @__PURE__ */ y({
  name: "ConsoleLocation",
  inheritAttrs: !1,
  props: {
    location: String,
    Anchor: Object
  },
  setup() {
    return () => l("div", null, null);
  }
}), ke = /* @__PURE__ */ y({
  name: "ConsoleBlock",
  inheritAttrs: !1,
  props: {
    type: String
  },
  setup(e, {
    slots: t
  }) {
    const n = R("console-block"), {
      level: r
    } = Sn();
    return () => {
      var s, a, c;
      return l("div", {
        class: `${n.b()} ${n.m(e.type)}`
      }, [(r === 0 || t.icon) && l("div", {
        class: n.e("icon")
      }, [(s = t.icon) == null ? void 0 : s.call(t)]), l("div", {
        class: n.e("main")
      }, [(a = t.default) == null ? void 0 : a.call(t), l("div", {
        class: n.e("extra")
      }, [(c = t.extra) == null ? void 0 : c.call(t)])])]);
    };
  }
}), hr = /* @__PURE__ */ y({
  name: "ConsoleBadge",
  inheritAttrs: !1,
  props: {
    count: Number,
    type: String
  },
  setup(e) {
    const t = R("console-badge"), n = [t.b(), t.m(e.type)].join(" ");
    return () => l("div", {
      class: n
    }, [e.count]);
  }
}), Ne = /* @__PURE__ */ y({
  name: "ConsoleRow",
  setup(e, {
    slots: t
  }) {
    const n = R("console-row");
    return () => {
      var r;
      return l("div", {
        class: n.b()
      }, [(r = t.default) == null ? void 0 : r.call(t)]);
    };
  }
}), ve = /* @__PURE__ */ y({
  name: "ConsoleContent",
  inheritAttrs: !1,
  props: {
    data: {
      type: [Object, Array],
      required: !0
    },
    type: {
      type: String
    }
  },
  setup(e) {
    const {
      data: t,
      type: n
    } = e, r = R("console-content"), s = ft(r.b(), r.m(n)), a = () => Array.isArray(t) ? t.map((c, o) => l(Ne, {
      key: o
    }, {
      default: () => [l(B, {
        data: c,
        isLog: n !== void 0
      }, null)]
    })) : l(Ne, null, {
      default: () => [l(B, {
        data: t,
        isLog: n !== void 0
      }, null)]
    });
    return () => l("div", {
      class: s
    }, [a()]);
  }
}), He = /* @__PURE__ */ y({
  inheritAttrs: !1,
  props: {
    data: {
      type: [Object, Array],
      required: !0
    },
    count: {
      type: Number
    },
    type: {
      type: String
    },
    noLocation: {
      type: Boolean
    }
  },
  setup(e) {
    const {
      data: t,
      count: n,
      type: r,
      noLocation: s
    } = ie(e), a = be(), c = Ee(() => {
      var f;
      return s || (f = Array.isArray(t) ? t[0] : t) == null ? void 0 : f["@location"];
    }), o = () => {
      if (n.value > 1)
        return l(hr, {
          type: r.value,
          count: n.value
        }, null);
      switch (r.value) {
        case "debug":
          return l($t, null, null);
        case "error":
          return l(Rt, null, null);
        case "warn":
          return l(Ft, null, null);
        default:
          return null;
      }
    };
    return () => l(ke, {
      type: r.value
    }, {
      icon: o,
      default: () => l(ve, {
        type: r.value,
        data: t.value
      }, null),
      extra: () => l(We, {
        location: c.value,
        anchor: a
      }, null)
    });
  }
});
var _ = /* @__PURE__ */ function(e) {
  return e.ASC = "asc", e.DESC = "desc", e;
}(_ || {});
const $e = 20, se = Symbol("(index)"), Ke = /* @__PURE__ */ y({
  name: "ConsoleTable",
  inheritAttrs: !1,
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = R("console-table"), n = ct({}), r = q(se);
    function s(c) {
      switch (n[c]) {
        case void 0:
          n[c] = _.ASC;
          break;
        case _.ASC:
          n[c] = _.DESC;
          break;
        case _.DESC:
          delete n[c];
          break;
      }
      r.value = c;
    }
    function a(c) {
      const o = n[r.value];
      return o === void 0 ? Object.entries(c) : r.value === se ? Object.entries(c).sort((f, m) => (o === _.ASC ? 1 : -1) * (f[0].charCodeAt(0) - m[0].charCodeAt(0))) : Object.entries(c).sort((f, m) => {
        var E, Oe;
        const h = (E = f[1][r.value]) == null ? void 0 : E["@value"], g = (Oe = m[1][r.value]) == null ? void 0 : Oe["@value"];
        return h && g && !Number.isNaN(+h) && !Number.isNaN(+g) ? (o === _.ASC ? 1 : -1) * (+h - +g) : (o === _.ASC ? 1 : -1) * ((h == null ? void 0 : h.charCodeAt(0)) - (g == null ? void 0 : g.charCodeAt(0)));
      });
    }
    return () => {
      const c = e.data["@location"], o = e.data["@collapse"];
      return l(ke, {
        class: t.b()
      }, {
        extra: () => c && l(We, {
          location: c
        }, null),
        default: () => [l("table", {
          class: t.e("table")
        }, [l("tr", null, [l("th", {
          onClick: () => s(se)
        }, [p("(Index)")]), e.data.cols.slice(0, $e).map((f) => l("th", {
          key: f,
          onClick: () => s(f)
        }, [f]))]), a(e.data.table).map(([f, m]) => l("tr", {
          key: f
        }, [l("th", null, [f]), e.data.cols.slice(0, $e).map((h) => l("td", {
          key: h
        }, [m[h] && l(x, {
          "hide-name-object": !0,
          data: m[h]
        }, null)]))]))]), o && l(ve, {
          data: o
        }, null)]
      });
    };
  }
}), Xe = /* @__PURE__ */ y({
  name: "ConsoleGroup",
  inheritAttrs: !1,
  props: {
    data: {
      type: Object,
      required: !0
    },
    paddingLeft: {
      type: Number
    }
  },
  setup(e, {
    slots: t
  }) {
    const {
      data: n
    } = e, r = En(e), s = q(!n["@collapse"]), a = () => l(ve, {
      style: {
        fontWeight: "bold"
      },
      data: n["@key"],
      type: "log"
    }, null), c = () => n["@items"].map((o, f) => "@items" in o ? l(Xe, {
      data: o
    }, null) : o.type === "table" ? l(Ke, {
      data: o.data,
      style: {
        paddingLeft: r.value + "px"
      }
    }, null) : l(He, {
      data: o.data,
      count: o.count,
      type: o.type,
      style: {
        paddingLeft: r.value + "px"
      }
    }, null));
    return () => l(ke, null, {
      icon: () => l(Ie, {
        expand: s.value,
        onClick: () => s.value = !s.value
      }, null),
      default: () => l(N, {
        class: "su-console-group",
        show: s.value,
        showIcon: !1,
        "class-detail": "l0 line-throught",
        "class-summary": "svg-top",
        paddingLeft: r.value
      }, {
        summary: a,
        content: c
      })
    });
  }
}), mr = /* @__PURE__ */ y({
  name: "ConsoleWrapper",
  setup(e, {
    slots: t
  }) {
    const n = R("console-wrapper");
    return () => {
      var r;
      return l("div", {
        class: n.b()
      }, [(r = t.default) == null ? void 0 : r.call(t)]);
    };
  }
});
function G(e) {
  var t;
  return typeof ((t = e == null ? void 0 : e["@items"]) == null ? void 0 : t.length) == "number";
}
class Cr {
  constructor() {
    P(this, "values", ne([]));
    P(this, "lastItem");
  }
  isEqualData(t, n, r) {
    return !!(t && !G(t) && t.type === n && t.data.length === r.length && t.data.every(
      (s, a) => s["@id"] === r[a]["@id"]
    ));
  }
  basicMethod(t, ...n) {
    this.isEqualData(this.lastItem, t, n) ? this.lastItem.count++ : this.push({
      type: t,
      data: n,
      count: 1
    });
  }
  log(...t) {
    this.basicMethod("log", ...t);
  }
  warn(...t) {
    this.basicMethod("warn", ...t);
  }
  info(...t) {
    return this.basicMethod("info", ...t);
  }
  debug(...t) {
    return this.basicMethod("debug", ...t);
  }
  error(...t) {
    return this.basicMethod("error", ...t);
  }
  table(t) {
    On(t) && this.push({
      type: "table",
      data: t
    });
  }
  push(t) {
    if (!this.lastItem || !G(this.lastItem)) {
      this.lastItem = t, this.values.push(t);
      return;
    }
    if (this.lastItem["@end"]) {
      this.lastItem = t, this.values.push(t);
      return;
    }
    this.findLastActiveGroup(this.lastItem)["@items"].push(t);
  }
  findLastActiveGroup(t) {
    const n = t["@items"][t["@items"].length - 1];
    return n && G(n) && !n["@end"] ? this.findLastActiveGroup(n) : t;
  }
  group(t) {
    this.push({
      "@key": t,
      "@items": ne([]),
      "@end": !1,
      "@collapse": !1
    });
  }
  groupCollapsed(t) {
    this.push({
      "@key": t,
      "@items": ne([]),
      "@end": !1,
      "@collapse": !0
    });
  }
  groupEnd() {
    if (G(this.lastItem) && !this.lastItem["@end"]) {
      const t = this.findLastActiveGroup(this.lastItem);
      t["@end"] = !0;
    }
  }
  clear() {
    this.lastItem = null, this.values.splice(0);
  }
}
const yr = /* @__PURE__ */ y({
  name: "ConsoleDispatcher",
  inheritAttrs: !1,
  props: {
    item: Object
  },
  setup(e) {
    const t = it().vnode.key, {
      item: n
    } = e;
    return () => G(n) ? l(Xe, {
      key: t,
      data: n
    }, null) : n.type === "table" ? l(Ke, {
      key: t,
      data: n.data
    }, null) : l(He, {
      key: t,
      data: n.data,
      type: n.type,
      count: n.count
    }, null);
  }
});
function pr(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ut(e);
}
const Ar = /* @__PURE__ */ y({
  name: "Console",
  inheritAttrs: !1,
  props: {
    data: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    return () => {
      let t;
      return l(mr, null, pr(t = e.data.map((n, r) => l(yr, {
        item: n,
        key: r
      }, null))) ? t : {
        default: () => [t]
      });
    };
  }
}), Lr = /* @__PURE__ */ y({
  name: "ConsoleProvider",
  inheritAttrs: !1,
  props: {
    anchor: {
      type: Object
    },
    theme: {
      type: Object
    },
    store: {
      type: Object
    }
  },
  setup(e, {
    slots: t
  }) {
    return An(e), Nn(), () => t.default();
  }
});
export {
  N as Collapse,
  Ar as Console,
  Cr as ConsoleApi,
  Xe as ConsoleGroup,
  He as ConsoleItem,
  M as ConsoleLink,
  Lr as ConsoleProvider,
  Ke as ConsoleTable,
  B as ConsoleValue,
  x as ConsoleValueStatic,
  Gn as GetterField,
  wr as LinkStore,
  We as LocationConsole,
  z as PropName,
  Or as createEncoder,
  C as encode,
  G as isGroup
};
