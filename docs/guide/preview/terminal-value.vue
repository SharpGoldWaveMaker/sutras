<script setup lang="ts">

const dom = document.createElement('div')
dom.style.color = 'red'
dom.dir = 'ltr'
dom.innerHTML = '<span>Hello<span>Sutras</span></span>'

const regExp = /script/

const emptyArray = new Array(99)
const promise = Promise.resolve()
const uint = new Uint8Array([312, 432, 5435])
const asyncFunction = async function asn(arg1, arg2, ...restArgs) {}

const value = {
  dom,
  nodeList: dom.childNodes,
  regExp,
  emptyArray,
  promise,
  uint,
  asyncFunction,
  *generator() {},
  arrowFunction: () => {
    alert
    window
  },
  getter: () => 12423543,
  buffer: new Uint8Array([312, 432, 5435]).buffer,
  dataView: new DataView(new Uint8Array([312, 432, 5435]).buffer),
  date: new Date(),
  [Symbol('aafe')]: [3124],
  set: new Set([2, 54, 65, [123], () => 2]),
  anyArray: [
    /script/,
    new WeakMap(),
    new Map([[45, [789, 89]]]),
    1,
    2,
    alert,
    [432, 53, 76, 23],
    { a: 34 }
  ],
  foo: { x: 245, y: 843 },
  year: 10,
  name: 'Sutras',
  b: 129n,
  err: new Error('this message error'),
  symbol: Symbol('a'),
  map: new Map([[45, [789, 89]]]),
  //@ts-ignore
  anyMap: new Map([
    [45, [789, 89]],
    ['user', { name: 'Shin' }],
  ]),
  weakMap: new WeakMap(),
  get lusa() {
    return this.year ** 2
  },
  matcher: /<script\s+>/,
  increment: function increment(value = 56) {
    this.year++
  },
  abort: new AbortController(),
}

console.log(value)

</script>

<template></template>

<docs lang="md">
---
defaultPreviewMode: 'terminal'
---
</docs>