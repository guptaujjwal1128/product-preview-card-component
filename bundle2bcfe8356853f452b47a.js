(() => {
  "use strict";
  var e,
    t,
    r,
    n,
    o,
    i,
    a,
    c,
    d,
    s,
    l,
    u,
    p,
    f,
    h = {
      664: (e, t, r) => {
        r.d(t, { A: () => c });
        var n = r(601),
          o = r.n(n),
          i = r(314),
          a = r.n(i)()(o());
        a.push([
          e.id,
          '*,*::before,*::after{box-sizing:border-box}*{margin:0}html,body{width:100%;height:100vh;line-height:1.5;-webkit-font-smoothing:antialiased}h1,h2,h3,h4,h5,h6,button,input,label{line-height:1.1}img,picture,video,canvas,svg{display:block;max-width:100%}input,button,textarea,select{font:inherit}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}html,body{display:flex;flex-direction:column;background-color:#f2ebe3;font-size:14px;font-family:"Montserrat",sans-serif;color:#16181d}main{flex-grow:1;display:flex;flex-direction:row;justify-content:center;align-items:center}.product-card{border-radius:.8rem;overflow:hidden;border-width:0;max-width:599px;display:flex;flex-direction:row;margin:2rem 1rem}.product-card_image{display:flex;flex:1 1 50%}.product-card_image img{width:100%;height:auto;object-fit:cover}.product-card_details{flex:1 1 50%;background-color:#fff;padding:2.5rem;display:flex;flex-direction:column;gap:2.5rem}.product-card_details_category{letter-spacing:.4rem;font-size:11px}.product-card_details_title{font-size:32px;color:#1c232b;font-weight:700;font-family:"Fraunces",sans-serif;line-height:32px}.product-card_details_description{line-height:1.5rem}.product-card_details_price{display:flex;flex-direction:row;align-items:center;gap:1.5rem}.product-card_details_price-new{font-size:32px;color:#3c8067;font-weight:700;font-family:"Fraunces",sans-serif;line-height:32px}.product-card_details_price-old{text-decoration:line-through}.product-card_details_btn{border-radius:.8rem;overflow:hidden;border-width:0;background-color:#3c8067;padding:1rem;display:flex;justify-content:center;align-items:center;gap:.5rem}.product-card_details_btn_text{font-size:14px;font-family:"Montserrat",sans-serif;font-weight:700;color:#fff}.product-card_details_btn:hover{background-color:#214538;transition:background-color 250ms ease-in-out;appearance:none;cursor:pointer}footer.attribution{font-size:11px;text-align:center;padding:1rem}footer.attribution a{color:#3e52a3}@media screen and (max-width: 599px){.product-card{flex-direction:column}.product-card_details{padding:1.5rem;gap:1.5rem}}',
          "",
        ]);
        const c = a;
      },
      314: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = "",
                  n = void 0 !== t[5];
                return (
                  t[4] && (r += "@supports (".concat(t[4], ") {")),
                  t[2] && (r += "@media ".concat(t[2], " {")),
                  n &&
                    (r += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (r += e(t)),
                  n && (r += "}"),
                  t[2] && (r += "}"),
                  t[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (t.i = function (e, r, n, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (n)
                for (var c = 0; c < this.length; c++) {
                  var d = this[c][0];
                  null != d && (a[d] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var l = [].concat(e[s]);
                (n && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  r &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = r))
                      : (l[2] = r)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        var t = [];
        function r(e) {
          for (var r = -1, n = 0; n < t.length; n++)
            if (t[n].identifier === e) {
              r = n;
              break;
            }
          return r;
        }
        function n(e, n) {
          for (var i = {}, a = [], c = 0; c < e.length; c++) {
            var d = e[c],
              s = n.base ? d[0] + n.base : d[0],
              l = i[s] || 0,
              u = "".concat(s, " ").concat(l);
            i[s] = l + 1;
            var p = r(u),
              f = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(f);
            else {
              var h = o(f, n);
              (n.byIndex = c),
                t.splice(c, 0, { identifier: u, updater: h, references: 1 });
            }
            a.push(u);
          }
          return a;
        }
        function o(e, t) {
          var r = t.domAPI(t);
          return (
            r.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                r.update((e = t));
              } else r.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = n((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var c = r(i[a]);
              t[c].references--;
            }
            for (var d = n(e, o), s = 0; s < i.length; s++) {
              var l = r(i[s]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            i = d;
          };
        };
      },
      659: (e) => {
        var t = {};
        e.exports = function (e, r) {
          var n = (function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              t[e] = r;
            }
            return t[e];
          })(e);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(r);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      56: (e, t, r) => {
        e.exports = function (e) {
          var t = r.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (r) {
              !(function (e, t, r) {
                var n = "";
                r.supports && (n += "@supports (".concat(r.supports, ") {")),
                  r.media && (n += "@media ".concat(r.media, " {"));
                var o = void 0 !== r.layer;
                o &&
                  (n += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (n += r.css),
                  o && (n += "}"),
                  r.media && (n += "}"),
                  r.supports && (n += "}");
                var i = r.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(n, e, t.options);
              })(t, e, r);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    m = {};
  function v(e) {
    var t = m[e];
    if (void 0 !== t) return t.exports;
    var r = (m[e] = { id: e, exports: {} });
    return h[e](r, r.exports, v), r.exports;
  }
  (v.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return v.d(t, { a: t }), t;
  }),
    (v.d = (e, t) => {
      for (var r in t)
        v.o(t, r) &&
          !v.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (v.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (v.nc = void 0),
    (e = v(72)),
    (t = v.n(e)),
    (r = v(825)),
    (n = v.n(r)),
    (o = v(659)),
    (i = v.n(o)),
    (a = v(56)),
    (c = v.n(a)),
    (d = v(540)),
    (s = v.n(d)),
    (l = v(113)),
    (u = v.n(l)),
    (p = v(664)),
    ((f = {}).styleTagTransform = u()),
    (f.setAttributes = c()),
    (f.insert = i().bind(null, "head")),
    (f.domAPI = n()),
    (f.insertStyleElement = s()),
    t()(p.A, f),
    p.A && p.A.locals && p.A.locals;
})();
