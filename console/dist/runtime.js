import { sprintf } from 'sprintf-js';
import { shallowReactive } from 'vue';

// src/core/getLocationCall.ts
function getLocationCall(deep = 0) {
  deep += 5;
  const lines = new Error().stack?.toString().split(" at ", deep);
  if (!lines)
    return;
  const mess = (lines[deep - 1] ?? lines[lines.length - 1])?.trim();
  if (!mess)
    return;
  if (mess.includes(")")) {
    const basename2 = mess.slice(
      mess.lastIndexOf("(") + 1,
      mess.lastIndexOf(")")
    );
    try {
      const url = new URL(basename2);
      url.searchParams.delete("t");
      return url.href;
    } catch {
      return basename2;
    }
  }
  const lastIndexSpaceOf = mess.indexOf(" ");
  const basename = mess.slice(lastIndexSpaceOf === -1 ? 0 : lastIndexSpaceOf);
  try {
    const url = new URL(basename);
    url.searchParams.delete("t");
    return url.href;
  } catch {
    return basename;
  }
}

// src/core/id-manager.ts
var store = /* @__PURE__ */ new Map();
function get(data) {
  const inStore = store.get(data);
  if (inStore)
    return inStore;
  const newKey = Math.random().toString(36);
  store.set(data, newKey);
  return newKey;
}

// src/utils/keys.ts
function keys(obj) {
  const keys7 = [
    ...Object.getOwnPropertyNames(obj),
    ...Object.getOwnPropertySymbols(obj)
  ];
  return keys7;
}

// src/utils/entries.ts
function entries(obj) {
  return keys(obj).map((name) => [name, obj[name]]);
}

// src/utils/isArrayEmpty.ts
function isArrayEmpty({ arr }) {
  for (const name in arr) {
    if (Number.isNaN(+name))
      return true;
    return false;
  }
  return true;
}

// src/core/encode/basic.ts
var encodeString = (data, opt) => {
  return {
    "@t": "string",
    "@first": opt.first,
    "@value": data
  };
};
var encodeNumber = (data) => {
  return {
    "@t": "number",
    "@value": data.toString()
  };
};
var encodeBigInt = (data) => {
  return {
    "@t": "bint",
    "@value": `${data.toString()}n`
  };
};
var encodeSymbol = (data) => {
  return {
    "@t": "symbol",
    "@value": `${data.toString()}`
  };
};
var encodeUndefined = () => {
  return {
    "@t": "nill",
    "@value": "undefined"
  };
};
var encodeNull = () => {
  return {
    "@t": "nill",
    "@value": "null"
  };
};

// src/core/getValue.ts
function getValue(data, name, receiver) {
  try {
    return Reflect.get(data, name, receiver);
  } catch (e) {
    return e;
  }
}

// src/utils/isBuffer.ts
function isBuffer(buff) {
  return buff instanceof ArrayBuffer;
}

// src/utils/getObjectName.ts
var { toString: toString2 } = Object.prototype;
function getObjectName(obj) {
  return toString2.call(obj).slice(8, -1);
}

// src/utils/isCollection.ts
function isCollection(data) {
  const type = getObjectName(data);
  return data !== null && typeof data === "object" && // なんで？わかない。ぼくわかない。
  Object.getPrototypeOf(data) === data.constructor?.prototype && (type === "Map" || type === "WeakMap" || type === "Set" || type === "WeakSet");
}

// src/utils/isDataView.ts
function isDataView(buff) {
  return buff instanceof DataView;
}

// src/utils/isDom.ts
function isDom(el) {
  try {
    if (el instanceof Node)
      return el.nodeName !== void 0;
    return false;
  } catch {
    return false;
  }
}

// src/utils/isList.ts
function isList(obj) {
  if (Array.isArray(obj))
    return true;
  return obj instanceof NodeList;
}

// src/utils/isPromise.ts
function isPromise(obj) {
  return typeof obj?.then === "function";
}

// src/utils/isRegExp.ts
function isRegExp(obj) {
  return obj instanceof RegExp;
}

// src/utils/isTypedArray.ts
var types = [
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
if (typeof BigInt64Array !== "undefined") {
  types.push(
    // eslint-disable-next-line n/no-unsupported-features/es-builtins
    BigInt64Array,
    // eslint-disable-next-line n/no-unsupported-features/es-builtins
    BigUint64Array
  );
}
function isTypedArray(arr) {
  return types.some((item) => arr instanceof item);
}

// src/core/getHeaderFn.ts
var r = /(?:^async(?:\s+function\s*)?\s*\*?\s*)|(?:^(?:function\s*)?\*?\s*)/;
var rStarSpaces = /^\*\s*/;
var rCommaSpaces = /,\s*/g;
var rSpaces = /\s+/g;
function getHeaderFn(code) {
  const prefix = r.exec(code)[0];
  const indexSp = code.indexOf("{");
  let indexArrow;
  const endHeader = indexSp === -1 ? indexArrow = (code.indexOf("=>") >>> 0) + 2 : indexSp;
  const header = code.slice(prefix.length, endHeader);
  const indexSlashOpen = header.indexOf("(");
  const indexSlashClose = header.indexOf(")");
  const isAsync = prefix.startsWith("async");
  const isStar = prefix.includes("*");
  const name = header.slice(0, indexSlashOpen).replace(rStarSpaces, "* ");
  const args = header.slice(name.length, indexSlashClose + 1).replace(rCommaSpaces, ", ");
  const typeFn = prefix.includes("function") ? 0 /* fn */ : header.includes("=>") ? 1 /* arrowFn */ : 2 /* propFn */;
  let content;
  if (typeFn === 1 /* arrowFn */) {
    if (indexSp > -1) {
      content = code.slice(indexSp, (code.lastIndexOf("}") >>> 0) + 1).replace(rSpaces, " ");
    } else {
      content = code.slice(indexArrow + 1, (code.lastIndexOf("}") >>> 0) + 1).replace(rSpaces, " ");
    }
    if (content.length > 52)
      content = void 0;
  }
  return { name, args, content, isAsync, isStar, typeFn };
}

// src/core/getOwnDescriptorsBuffer.ts
var keys2 = ["byteLength"];
function getOwnDescriptorsBuffer(typed) {
  const des = {};
  keys2.forEach((name) => {
    const value = getValue(typed, name, typed);
    const enumerable = false;
    if (typeof value !== "function") {
      des[name.toString()] = {
        value: typed[name],
        enumerable
      };
    }
  });
  return des;
}

// src/core/getOwnDescriptorsCollection.ts
var keys3 = ["size"];
function getOwnDescriptorsCollection(collection) {
  const des = {};
  const isFreeser = getObjectName(collection).startsWith("Weak");
  keys3.forEach((name) => {
    if (isFreeser && name === "size")
      return;
    const value = getValue(collection, name, collection);
    const enumerable = false;
    if (typeof value !== "function") {
      des[name.toString()] = {
        value: collection[name],
        enumerable
      };
    }
  });
  return des;
}

// src/core/getOwnDescriptorsDataView.ts
var keys4 = ["buffer", "byteLength", "byteOffset"];
function getOwnDescriptorsDataView(typed) {
  const des = {};
  keys4.forEach((name) => {
    const value = getValue(typed, name, typed);
    const enumerable = false;
    if (typeof value !== "function") {
      des[name.toString()] = {
        value: typed[name],
        enumerable
      };
    }
  });
  return des;
}

// src/core/getOwnDescriptorsIn.ts
function getOwnDescriptorsIn(obj) {
  const des = {};
  const list = isList(obj);
  for (const name in obj) {
    if (list && typeof name === "string" && name !== "length")
      continue;
    des[name] = {
      value: getValue(obj, name, obj),
      enumerable: true
    };
  }
  return des;
}

// src/core/getOwnDescriptorsRegExp.ts
var keys5 = entries(Object.getOwnPropertyDescriptors(RegExp.prototype));
function getOwnDescriptorsRegExp(reg) {
  const des = {};
  keys5.forEach(([name, meta]) => {
    const { value, enumerable } = meta;
    if (name === "lastIndex")
      return;
    if (typeof value !== "function") {
      des[name.toString()] = {
        value: reg[name],
        enumerable
      };
    }
  });
  return des;
}

// src/core/getOwnDescriptorsTypedArray.ts
var keys6 = [
  // "BYTES_PER_ELEMENT",
  "buffer",
  "byteLength",
  "byteOffset",
  "length",
  Symbol.toStringTag
];
function getOwnDescriptorsTypedArray(typed) {
  const des = {};
  keys6.forEach((name) => {
    const value = getValue(typed, name, typed);
    const enumerable = false;
    if (typeof value !== "function") {
      des[name.toString()] = {
        value: typed[name],
        enumerable
      };
    }
  });
  return des;
}

// src/core/shouldInline.ts
var TEXT_NODE_MAX_INLINE_CHARS = 80;
function shouldInline(data) {
  return data.childNodes.length === 0 || data.childNodes.length === 1 && (!data.textContent || data.childNodes[0].nodeType === Node.TEXT_NODE && data.textContent.length < TEXT_NODE_MAX_INLINE_CHARS);
}

// src/core/encode/common.ts
function createRealItem(value, hidden = false) {
  return {
    "@hidden": hidden,
    "@value": value
  };
}
function createFakeRecord(value, name = null) {
  return {
    "@t": "object",
    "@name": name,
    "@first": false,
    "@real": value,
    "@des": null
  };
}

// src/core/encode/object.ts
var encodeFunction = (data, opt) => {
  const { first, linkReal, store: store2 } = opt;
  if (linkReal) {
    const code = `${data}`;
    const header = getHeaderFn(code);
    return {
      "@t": "function",
      "@code": first ? data.toString() : "",
      "@header": header,
      "@first": first,
      "@real": first ? null : createLink(data, opt.store)
    };
  }
  return createFakeRecord(_encodeObject(data, { store: store2 }));
};
var encodeError = (data, opt) => {
  const { linkReal, first, store: store2 } = opt;
  if (linkReal) {
    return {
      "@t": "error",
      "@first": first,
      "@stack": data.stack ?? "",
      "@real": first ? null : createLink(data, opt.store)
    };
  }
  return createFakeRecord(_encodeObject(data, { store: store2 }));
};
var encodeRegExp = (data, opt) => {
  const { linkReal, first, store: store2 } = opt;
  if (linkReal) {
    return {
      "@t": "regexp",
      "@name": `${data}`,
      "@first": first,
      "@flags": data.flags,
      "@source": data.source,
      "@real": first ? null : createLink(data, store2)
    };
  }
  return createFakeRecord(
    _encodeObject(data, { store: store2 }, getOwnDescriptorsRegExp(data))
  );
};
var encodeDate = (data, opt) => {
  const { linkReal, first, store: store2 } = opt;
  if (linkReal) {
    return {
      "@t": "date",
      "@first": first,
      "@value": data.toString(),
      "@real": first ? null : createLink(data, store2),
      "@des": first ? null : createPreviewObject(data, { store: store2 })
    };
  }
  return createFakeRecord(_encodeObject(data, { store: store2 }));
};
var encodeArray = (data, opt) => {
  const { linkReal, first, store: store2 } = opt;
  if (linkReal) {
    const meta = {
      "@t": "array",
      "@first": first,
      "@size": data.length,
      "@name": data instanceof NodeList ? "NodeList" : null,
      "@des": createPreviewObject(data, { store: store2 }),
      "@real": createLink(data, store2)
    };
    return meta;
  }
  return createFakeRecord(_encodeObject(data, { store: store2 }));
};
function encodeTypedArray(data, opt) {
  const { linkReal, first, preview, store: store2 } = opt;
  if (linkReal) {
    const meta = {
      "@t": "typedarray",
      "@first": first,
      "@size": data.length,
      "@name": data[Symbol.toStringTag],
      "@des": preview ? createPreviewObject(data, { store: store2 }, getOwnDescriptorsTypedArray(data)) : null,
      "@real": createLink(data, store2)
    };
    return meta;
  }
  return createFakeRecord(
    _encodeObject(
      data,
      { store: store2 },
      getOwnDescriptorsTypedArray(data)
    )
  );
}
var encodeCollection = (data, opt) => {
  const { linkReal, store: store2 } = opt;
  if (linkReal) {
    const meta = {
      "@t": "collection",
      "@name": toString.call(data).slice(8, -1),
      "@size": data.size ?? null,
      "@entries": Array.from(
        data.entries?.() ?? []
      ).map(([key, val]) => [
        encode(key, {
          first: false,
          linkReal: true,
          store: store2
        }),
        encode(val, {
          first: false,
          linkReal: true,
          store: store2
        })
      ]),
      "@real": createLink(data, store2)
    };
    return meta;
  }
  return createFakeRecord(
    _encodeObject(data, { store: store2 }, getOwnDescriptorsCollection(data))
  );
};
var encodeBuffer = (data, opt) => {
  const { linkReal, first, store: store2 } = opt;
  if (linkReal) {
    const meta = {
      "@t": "buffer",
      "@first": first,
      "@size": data.byteLength,
      "@name": getObjectName(data),
      "@real": createLink(data, store2)
    };
    return meta;
  }
  return createFakeRecord({
    ..._encodeObject(data, { store: store2 }, getOwnDescriptorsBuffer(data)),
    "[[Int8Array]]": createRealItem(
      encode(new Int8Array(data), {
        first: false,
        linkReal: true,
        preview: false,
        store: store2
      }),
      true
    ),
    "[[Uint8Array]]": createRealItem(
      encode(new Uint8Array(data), {
        first: false,
        linkReal: true,
        preview: false,
        store: store2
      }),
      true
    ),
    "[[Int16Array]]": createRealItem(
      encode(new Int16Array(data, 0, ~~(data.byteLength / 2)), {
        first: false,
        linkReal: true,
        preview: false,
        store: store2
      }),
      true
    ),
    "[[Int32Array]]": createRealItem(
      encode(new Int32Array(data, 0, ~~(data.byteLength / 4)), {
        first: false,
        linkReal: true,
        preview: false,
        store: store2
      }),
      true
    ),
    "[[ArrayBufferByteLength]]": createRealItem(
      encode(data.byteLength, {
        first: false,
        linkReal: true,
        store: store2
      }),
      true
    )
  });
};
var encodeDataView = (data, opt) => {
  const { linkReal, first, store: store2 } = opt;
  if (linkReal) {
    const meta = {
      "@t": "dataview",
      "@name": "DataView",
      "@first": first,
      "@size": data.byteLength,
      "@real": createLink(data, store2)
    };
    return meta;
  }
  return createFakeRecord(
    _encodeObject(
      data,
      { store: store2 },
      getOwnDescriptorsDataView(data)
    )
  );
};
var encodePromise = (data, opt) => {
  const { linkReal, first, store: store2 } = opt;
  if (linkReal) {
    const meta = {
      "@t": "promise",
      "@first": first,
      "@state": "pending",
      "@real": createLink(data, store2),
      "@des": createPreviewObject(data, { store: store2 })
    };
    return meta;
  }
  return createFakeRecord(_encodeObject(data, { store: store2 }));
};
var nameByNodeType = {
  1: "ELEMENT_NODE",
  3: "TEXT_NODE",
  7: "PROCESSING_INSTRUCTION_NODE",
  8: "COMMENT_NODE",
  9: "DOCUMENT_NODE",
  10: "DOCUMENT_TYPE_NODE",
  11: "DOCUMENT_FRAGMENT_NODE"
};
var encodeDOM = (data, opt) => {
  const { linkReal, first, store: store2 } = opt;
  if (linkReal) {
    const attrs = first && data instanceof Element ? Array.from(data.attributes).map((item) => [
      item.name,
      item.value
    ]) : void 0;
    switch (data.nodeType) {
      case Node.ELEMENT_NODE: {
        return {
          "@t": "element",
          "@name": data.nodeName,
          "@first": first,
          "@attrs": attrs,
          "@real": first ? null : createLink(data, store2),
          "@childs": shouldInline(data) ? data.textContent : createLink(data.childNodes, store2)
        };
      }
      case Node.TEXT_NODE:
      case Node.CDATA_SECTION_NODE:
      case Node.COMMENT_NODE: {
        return {
          "@t": "element",
          "@name": data.nodeName,
          "@first": first,
          "@attrs": attrs,
          "@real": first ? null : createLink(data, store2),
          "@childs": data.textContent
        };
      }
      case Node.PROCESSING_INSTRUCTION_NODE:
        return {
          "@t": "element",
          "@name": data.nodeName,
          "@first": first,
          "@attrs": attrs,
          "@real": first ? null : createLink(data, store2)
        };
      case Node.DOCUMENT_TYPE_NODE:
        return {
          "@t": "element",
          "@name": data.nodeName,
          // html
          "@first": first,
          "@attrs": attrs,
          "@real": first ? null : createLink(data, store2),
          "@childs": `<!DOCTYPE ${data.name} ${data.publicId ? ` PUBLIC "${data.publicId}"` : ""} ${!data.publicId && data.systemId ? " SYSTEM" : ""} ${data.systemId ? ` "${data.systemId}"` : ""} >`
        };
      case Node.DOCUMENT_NODE:
        return {
          "@t": "element",
          "@name": data.nodeName,
          // #document
          "@first": first,
          "@attrs": attrs,
          "@real": first ? null : createLink(data, store2)
        };
      case Node.DOCUMENT_FRAGMENT_NODE:
        return {
          "@t": "element",
          "@name": data.nodeName,
          // #document-fragment
          "@first": first,
          "@attrs": attrs,
          "@real": null
        };
      default:
        return {
          "@t": "element",
          "@name": `#${nameByNodeType[data.nodeType]}` || "#unknown",
          "@first": first,
          "@real": first ? null : createLink(data, store2)
        };
    }
  }
  return createFakeRecord(_encodeObject(data, { store: store2 }));
};
var encodeObject = (data, opt) => {
  if (data === null)
    return encodeNull();
  if (data instanceof Error)
    return encodeError(data, opt);
  if (isRegExp(data))
    return encodeRegExp(data, opt);
  if (data instanceof Date)
    return encodeDate(data, opt);
  if (!opt.forceObject && isList(data))
    return encodeArray(data, opt);
  if (isTypedArray(data))
    return encodeTypedArray(data, opt);
  if (isCollection(data))
    return encodeCollection(data, opt);
  if (isBuffer(data))
    return encodeBuffer(data, opt);
  if (isDataView(data))
    return encodeDataView(data, opt);
  if (isPromise(data))
    return encodePromise(data, opt);
  if (isDom(data))
    return encodeDOM(data, opt);
  const { first, linkReal, preview } = opt;
  const meta = {
    "@t": "object",
    "@name": data.constructor?.name ?? null,
    "@first": first,
    "@real": linkReal ? createLink(data, opt.store) : _encodeObject(data, {
      store: opt.store
    }),
    "@des": linkReal && preview ? createPreviewObject(data, {
      store: opt.store
    }) : null
  };
  return meta;
};
function _encodeObject(data, option, extendsPropertyDescriptors, proto = Object.getPrototypeOf(data)) {
  const opt = {
    first: false,
    linkReal: true,
    store: option.store
  };
  const meta = Object.fromEntries(
    entries(
      Object.assign(
        getOwnDescriptorsIn(data),
        Object.getOwnPropertyDescriptors(data),
        extendsPropertyDescriptors
      )
    ).map(([name, meta2]) => {
      const { value } = meta2;
      if ("get" in meta2 || "set" in meta2) {
        const at = {};
        if (meta2.get)
          at.get = encodeFunction(meta2.get, opt);
        if (meta2.set)
          at.set = encodeFunction(meta2.set, opt);
        return [
          name.toString(),
          createRealItem(
            {
              "@t": "gs",
              "@value": createLink(() => getValue(data, name, data), opt.store),
              "@at": at
            },
            !meta2.enumerable
          )
        ];
      }
      if (value !== null && typeof value === "object" && !isRegExp(value) && !isCollection(value) && !(value instanceof Error) && !isList(value)) {
        return [
          name.toString(),
          createRealItem(
            encode(value, opt),
            !meta2.enumerable
          )
        ];
      }
      if (typeof value === "function") {
        return [
          name.toString(),
          createRealItem(
            encode(value, opt),
            !meta2.enumerable
          )
        ];
      }
      return [
        name.toString(),
        createRealItem(encode(value, opt), !meta2.enumerable)
      ];
    })
  );
  return Object.assign(meta, {
    "[[Prototype]]": createRealItem(
      encode(proto, {
        store: opt.store,
        first: false,
        linkReal: true,
        preview: false,
        forceObject: true
      })
    )
  });
}
function createPreviewObject(data, opt, extendsPropertyDescriptors) {
  let lastKey = "";
  const meta = Object.fromEntries(
    entries(
      Object.assign(
        getOwnDescriptorsIn(data),
        Object.getOwnPropertyDescriptors(data),
        extendsPropertyDescriptors
        // data instanceof RegExp ? getOwnDescriptorsRegExp(data) : undefined
      )
    ).map(([name, meta2]) => {
      name = name.toString();
      lastKey = name;
      const { value } = meta2;
      return [name, createRealItem(createPreviewValue(value, opt), !meta2.enumerable)];
    })
  );
  return {
    "@value": meta,
    "@lastKey": lastKey
  };
}
function createPreviewValue(value, opt) {
  if (value !== null && typeof value === "object") {
    if (value instanceof Error) {
      return {
        "@t": "error",
        "@stack": value.stack?.split("\n", 3).slice(0, 3).join("\n") ?? ""
      };
    }
    if (isRegExp(value)) {
      return {
        "@t": "regexp",
        "@name": `${value}`
      };
    }
    if (value instanceof Date) {
      return {
        "@t": "date",
        "@value": value.toString()
      };
    }
    if (isCollection(value)) {
      return {
        "@t": "collection",
        "@name": toString.call(value).slice(8, -1),
        "@size": value.size ?? null
      };
    }
    if (isList(value)) {
      return {
        "@t": "array",
        "@name": value instanceof NodeList ? "NodeList" : null,
        "@size": value.length
      };
    }
    if (isTypedArray(value)) {
      return {
        "@t": "typedarray",
        "@name": value[Symbol.toStringTag],
        "@size": value.length
      };
    }
    if (isBuffer(value)) {
      return {
        "@t": "buffer",
        "@name": getObjectName(value),
        "@size": value.byteLength
      };
    }
    if (isDataView(value)) {
      return {
        "@t": "dataview",
        "@name": "DataView",
        "@size": value.byteLength
      };
    }
    if (isDom(value)) {
      return {
        "@t": "element",
        "@name": value.nodeName
      };
    }
    if (isPromise(value)) {
      return {
        "@t": "promise"
      };
    }
    return {
      "@t": "object",
      "@name": value.constructor?.name ?? null
    };
  }
  if (typeof value === "function") {
    return {
      "@t": "function"
    };
  }
  return encode(value, {
    first: false,
    linkReal: true,
    store: opt.store
  });
}
function printfArgs(args) {
  if (args.length > 0 && typeof args[0] === "string") {
    const countParaments = args[0].match(/%\w/g)?.length;
    if (countParaments) {
      const { length } = args;
      return [
        sprintf(
          args[0],
          ...args.slice(1, countParaments + 1),
          ...length - 1 < countParaments ? Array(countParaments - (length - 1)).fill("%s") : []
        ),
        ...args.slice(countParaments + 1)
      ];
    }
  }
  return args;
}
function getExtendsPropertyDescriptors(data) {
  if (data === null || typeof data !== "object")
    return;
  if (isBuffer(data))
    return getOwnDescriptorsBuffer(data);
  if (isCollection(data))
    return getOwnDescriptorsCollection(data);
  if (isDataView(data))
    return getOwnDescriptorsDataView(data);
  if (isRegExp(data))
    return getOwnDescriptorsRegExp(data);
  if (isTypedArray(data))
    return getOwnDescriptorsTypedArray(data);
  return void 0;
}
function getDescriptors(data) {
  return Object.assign(
    getOwnDescriptorsIn(data),
    Object.getOwnPropertyDescriptors(data),
    getExtendsPropertyDescriptors(data)
    //   extendsPropertyDescriptors //data instanceof RegExp ? getOwnDescriptorsRegExp(data) : undefined
  );
}
function isTable(data) {
  return typeof data?.table === "object";
}

// src/core/encode/encode.ts
var encodeMap = {
  string: encodeString,
  number: encodeNumber,
  boolean: encodeNumber,
  bigint: encodeBigInt,
  symbol: encodeSymbol,
  undefined: encodeUndefined,
  function: encodeFunction,
  object: encodeObject
};
function createLink(obj, store2) {
  const name = typeof obj === "function" ? obj.name : obj?.constructor?.name ?? null;
  const link = store2.query(obj);
  if (link) {
    return {
      "@t": "link",
      "@type": typeof obj,
      "@link": link,
      "@name": name
    };
  }
  const uid = store2.set(obj);
  return {
    "@t": "link",
    "@type": typeof obj,
    "@link": uid,
    "@name": name
  };
}
function encode(data, option) {
  return encodeMap[typeof data](data, {
    first: false,
    linkReal: false,
    preview: true,
    forceObject: false,
    ...option
  });
}
function encodeTable(data, opt) {
  const table = {};
  const nameCols = /* @__PURE__ */ new Set();
  entries(getDescriptors(data)).forEach(([name, meta]) => {
    name = name.toString();
    const { value } = meta;
    let isArray;
    if (value !== null && typeof value === "object" && (!(isArray = Array.isArray(value)) || !isArrayEmpty({ arr: value }))) {
      const row = table[name] = {};
      entries(getDescriptors(value)).forEach(([propName, propMeta]) => {
        if (isArray && propName === "length")
          return;
        propName = propName.toString();
        nameCols.add(propName);
        row[propName] = createPreviewValue(propMeta.value, opt);
      });
    } else {
      nameCols.add("value");
      table[name] = {
        value: createPreviewValue(value, opt)
      };
    }
  });
  return {
    table,
    "cols": Array.from(nameCols.values()),
    "@location": opt.deepLink === false ? void 0 : getLocationCall(opt.deepLink),
    "@collapse": encodeFull(data, {
      first: false,
      store: opt.store
    })
  };
}
function encodeFull(data, opt) {
  return {
    ...encode(data, {
      first: true,
      linkReal: true,
      ...opt
    }),
    "@id": get(data),
    "@location": opt.deepLink === false ? void 0 : getLocationCall(opt.deepLink)
  };
}
function createEncoder(store2) {
  const counters = /* @__PURE__ */ new Map();
  const timers = /* @__PURE__ */ new Map();
  const encodeArgs = (type, ...args) => {
    switch (type) {
      case "warn":
      case "info":
      case "debug":
      case "error":
      case "log":
        return {
          type,
          values: printfArgs(args).map((item) => encodeFull(item, {
            deepLink: 3,
            store: store2
          }))
        };
      case "assert": {
        const [assertion, ...restArgs] = args;
        if (!assertion) {
          restArgs.unshift("Assertion failed: ");
          return {
            type: "error",
            values: printfArgs(restArgs).map((item) => encodeFull(item, {
              deepLink: 3,
              store: store2
            }))
          };
        }
      }
      case "table": {
        const data = args[0] || [];
        if (typeof data === "object") {
          return {
            type,
            values: [encodeTable(data, {
              deepLink: 2,
              store: store2
            })]
          };
        }
        return {
          type: "log",
          values: [data]
        };
      }
      case "group":
      case "groupCollapsed":
      case "groupEnd": {
        const key = args[0] || "console-goup";
        return {
          type,
          values: [encodeFull(key, { deepLink: 2, store: store2 })]
        };
      }
      case "count": {
        const [key = "default"] = args || [];
        let count = counters.get(key);
        if (count)
          count++;
        else
          count = 1;
        counters.set(key, count);
        const message = `${key}: ${count}`;
        return {
          type: "log",
          values: [encodeFull(message, { deepLink: 2, store: store2 })]
        };
      }
      case "countReset": {
        const [key = "default"] = args || [];
        counters.delete(key);
        return null;
      }
      case "time": {
        const [key = "default"] = args || [];
        if (timers.has(key)) {
          const message = `Timer '${key}' already exists`;
          return {
            type: "warn",
            values: [encodeFull(message, { deepLink: 2, store: store2 })]
          };
        } else {
          timers.set(key, performance.now());
          return null;
        }
      }
      case "timeLog": {
        const [key = "default", ...restArgs] = args || [];
        const timer = timers.get(key);
        if (!timer) {
          const message2 = `Timer '${key}' does not exist`;
          return {
            type: "warn",
            values: [encodeFull(message2, { deepLink: 2, store: store2 })]
          };
        }
        const message = `${key}: ${performance.now() - timer} ms`;
        return {
          type: "log",
          values: [
            encodeFull(message, { deepLink: 2, store: store2 }),
            ...printfArgs(restArgs).map((item) => encodeFull(item, {
              deepLink: 3,
              store: store2
            }))
          ]
        };
      }
      case "timeEnd": {
        const [key = "default"] = args || [];
        const timer = timers.get(key);
        if (!timer) {
          const message2 = `Timer '${key}' does not exist`;
          return {
            type: "warn",
            values: [encodeFull(message2, { deepLink: 2, store: store2 })]
          };
        }
        const message = `${key}: ${performance.now() - timer} ms`;
        timers.delete(key);
        return {
          type: "log",
          values: [encodeFull(message, { deepLink: 2, store: store2 })]
        };
      }
    }
  };
  const clear = () => {
    timers.clear();
    counters.clear();
  };
  return {
    encode: encodeFull,
    encodeArgs,
    clear
  };
}

// src/core/store/store.ts
var LinkStore = class {
  linkMap;
  max;
  accessOrder;
  // 用于跟踪访问顺序
  count = 0;
  // 自增计数器
  constructor(max = null) {
    this.linkMap = /* @__PURE__ */ new Map();
    this.max = max;
    this.accessOrder = [];
  }
  clear() {
    this.linkMap.clear();
    this.accessOrder.splice(0);
    this.count = 0;
  }
  set(obj) {
    this.count += 1;
    const key = `key-${this.count}`;
    this.linkMap.set(key, obj);
    this.accessOrder.push(key);
    if (this.max !== null && this.linkMap.size > this.max)
      this.evict();
    return key;
  }
  get(key) {
    const item = this.linkMap.get(key);
    if (item && this.max !== null)
      this.moveToFront(key);
    return item;
  }
  query(obj) {
    for (const [key, value] of this.linkMap.entries()) {
      if (Object.is(value, obj)) {
        if (this.max !== null)
          this.moveToFront(key);
        return key;
      }
    }
    return void 0;
  }
  evict() {
    const oldestKey = this.accessOrder.shift();
    if (oldestKey !== void 0)
      this.linkMap.delete(oldestKey);
  }
  moveToFront(key) {
    const index = this.accessOrder.indexOf(key);
    if (index > -1) {
      this.accessOrder.splice(index, 1);
      this.accessOrder.push(key);
    }
  }
};
function isGroup(data) {
  return typeof data?.["@items"]?.length === "number";
}
var ConsoleApi = class {
  values = shallowReactive([]);
  lastItem;
  constructor() {
  }
  isEqualData(target, type, data) {
    if (target && !isGroup(target) && target.type === type && target.data.length === data.length && target.data.every(
      (item, index) => item["@id"] === data[index]["@id"]
    ))
      return true;
    return false;
  }
  basicMethod(type, ...data) {
    if (this.isEqualData(this.lastItem, type, data)) {
      this.lastItem.count++;
    } else {
      this.push({
        type,
        data,
        count: 1
      });
    }
  }
  log(...data) {
    this.basicMethod("log", ...data);
  }
  warn(...data) {
    this.basicMethod("warn", ...data);
  }
  info(...data) {
    return this.basicMethod("info", ...data);
  }
  debug(...data) {
    return this.basicMethod("debug", ...data);
  }
  error(...data) {
    return this.basicMethod("error", ...data);
  }
  table(data) {
    if (isTable(data)) {
      this.push({
        type: "table",
        data
      });
    }
  }
  push(data) {
    if (!this.lastItem || !isGroup(this.lastItem)) {
      this.lastItem = data;
      this.values.push(data);
      return;
    }
    if (this.lastItem["@end"]) {
      this.lastItem = data;
      this.values.push(data);
      return;
    }
    const group = this.findLastActiveGroup(this.lastItem);
    group["@items"].push(data);
  }
  findLastActiveGroup(root) {
    const last = root["@items"][root["@items"].length - 1];
    if (last && isGroup(last) && !last["@end"])
      return this.findLastActiveGroup(last);
    return root;
  }
  group(key) {
    this.push({
      "@key": key,
      "@items": shallowReactive([]),
      "@end": false,
      "@collapse": false
    });
  }
  groupCollapsed(key) {
    this.push({
      "@key": key,
      "@items": shallowReactive([]),
      "@end": false,
      "@collapse": true
    });
  }
  groupEnd() {
    if (isGroup(this.lastItem) && !this.lastItem["@end"]) {
      const group = this.findLastActiveGroup(this.lastItem);
      group["@end"] = true;
    }
  }
  clear() {
    this.lastItem = null;
    this.values.splice(0);
  }
};

export { ConsoleApi, LinkStore, createEncoder, encode, isGroup };
