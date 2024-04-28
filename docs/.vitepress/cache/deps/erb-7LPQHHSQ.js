import {
  ruby
} from "./chunk-RZTU227C.js";
import "./chunk-LBVXTFW5.js";
import "./chunk-4SM4DCKN.js";
import "./chunk-TMEXIBF4.js";
import "./chunk-FD6HLQV3.js";
import "./chunk-JERJOFXJ.js";
import {
  html
} from "./chunk-XERGCYM2.js";
import "./chunk-N3PN3MW6.js";
import "./chunk-6C2M7LIJ.js";
import "./chunk-NLFATCOM.js";
import "./chunk-624QZG55.js";

// ../node_modules/.pnpm/shiki@1.3.0/node_modules/shiki/dist/langs/erb.mjs
var lang = Object.freeze({ "displayName": "ERB", "fileTypes": ["erb", "rhtml", "html.erb"], "injections": { "text.html.erb - (meta.embedded.block.erb | meta.embedded.line.erb | comment)": { "patterns": [{ "begin": "(^\\s*)(?=<%+#(?![^%]*%>))", "beginCaptures": { "0": { "name": "punctuation.whitespace.comment.leading.erb" } }, "end": "(?!\\G)(\\s*$\\n)?", "endCaptures": { "0": { "name": "punctuation.whitespace.comment.trailing.erb" } }, "patterns": [{ "include": "#comment" }] }, { "begin": "(^\\s*)(?=<%(?![^%]*%>))", "beginCaptures": { "0": { "name": "punctuation.whitespace.embedded.leading.erb" } }, "end": "(?!\\G)(\\s*$\\n)?", "endCaptures": { "0": { "name": "punctuation.whitespace.embedded.trailing.erb" } }, "patterns": [{ "include": "#tags" }] }, { "include": "#comment" }, { "include": "#tags" }] } }, "name": "erb", "patterns": [{ "include": "text.html.basic" }], "repository": { "comment": { "patterns": [{ "begin": "<%+#", "beginCaptures": { "0": { "name": "punctuation.definition.comment.begin.erb" } }, "end": "%>", "endCaptures": { "0": { "name": "punctuation.definition.comment.end.erb" } }, "name": "comment.block.erb" }] }, "tags": { "patterns": [{ "begin": "<%+(?!>)[-=]?(?![^%]*%>)", "beginCaptures": { "0": { "name": "punctuation.section.embedded.begin.erb" } }, "contentName": "source.ruby", "end": "(-?%)>", "endCaptures": { "0": { "name": "punctuation.section.embedded.end.erb" }, "1": { "name": "source.ruby" } }, "name": "meta.embedded.block.erb", "patterns": [{ "captures": { "1": { "name": "punctuation.definition.comment.erb" } }, "match": "(#).*?(?=-?%>)", "name": "comment.line.number-sign.erb" }, { "include": "source.ruby" }] }, { "begin": "<%+(?!>)[-=]?", "beginCaptures": { "0": { "name": "punctuation.section.embedded.begin.erb" } }, "contentName": "source.ruby", "end": "(-?%)>", "endCaptures": { "0": { "name": "punctuation.section.embedded.end.erb" }, "1": { "name": "source.ruby" } }, "name": "meta.embedded.line.erb", "patterns": [{ "captures": { "1": { "name": "punctuation.definition.comment.erb" } }, "match": "(#).*?(?=-?%>)", "name": "comment.line.number-sign.erb" }, { "include": "source.ruby" }] }] } }, "scopeName": "text.html.erb", "embeddedLangs": ["html", "ruby"] });
var erb = [
  ...html,
  ...ruby,
  lang
];
export {
  erb as default
};
//# sourceMappingURL=erb-7LPQHHSQ.js.map
