var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (d, r, q) {
              d != Array.prototype && d != Object.prototype && (d[r] = q.value);
          };
$jscomp.getGlobal = function (d) {
    return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (d, r, q, n) {
    if (r) {
        q = $jscomp.global;
        d = d.split(".");
        for (n = 0; n < d.length - 1; n++) {
            var u = d[n];
            u in q || (q[u] = {});
            q = q[u];
        }
        d = d[d.length - 1];
        n = q[d];
        r = r(n);
        r != n && null != r && $jscomp.defineProperty(q, d, { configurable: !0, writable: !0, value: r });
    }
};
$jscomp.polyfill(
    "Object.setPrototypeOf",
    function (d) {
        return d
            ? d
            : "object" != typeof "".__proto__
            ? null
            : function (d, q) {
                  d.__proto__ = q;
                  if (d.__proto__ !== q) throw new TypeError(d + " is not extensible");
                  return d;
              };
    },
    "es6",
    "es5"
);
$jscomp.objectCreate =
    $jscomp.ASSUME_ES5 || "function" == typeof Object.create
        ? Object.create
        : function (d) {
              var r = function () {};
              r.prototype = d;
              return new r();
          };
$jscomp.construct =
    ("undefined" != typeof Reflect && Reflect.construct) ||
    function (d, r, q) {
        void 0 === q && (q = d);
        q = $jscomp.objectCreate(q.prototype || Object.prototype);
        return Function.prototype.apply.call(d, q, r) || q;
    };
$jscomp.polyfill(
    "Reflect.construct",
    function (d) {
        return d || $jscomp.construct;
    },
    "es6",
    "es3"
);
(function (d) {
    "object" === typeof exports && "undefined" !== typeof module ? (module.exports = d()) : "function" === typeof define && define.amd ? define([], d) : (("undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : this).jsmediatags = d());
})(function () {
    return (function () {
        function d(r, q, n) {
            function u(e, b) {
                if (!q[e]) {
                    if (!r[e]) {
                        var h = "function" == typeof require && require;
                        if (!b && h) return h(e, !0);
                        if (v) return v(e, !0);
                        b = Error("Cannot find module '" + e + "'");
                        throw ((b.code = "MODULE_NOT_FOUND"), b);
                    }
                    b = q[e] = { exports: {} };
                    r[e][0].call(
                        b.exports,
                        function (b) {
                            return u(r[e][1][b] || b);
                        },
                        b,
                        b.exports,
                        d,
                        r,
                        q,
                        n
                    );
                }
                return q[e].exports;
            }
            for (var v = "function" == typeof require && require, p = 0; p < n.length; p++) u(n[p]);
            return u;
        }
        return d;
    })()(
        {
            1: [function (d, r, q) {}, {}],
            2: [
                function (d, r, q) {
                    r.exports = XMLHttpRequest;
                },
                {},
            ],
            3: [
                function (d, r, q) {
                    function n(f) {
                        "@babel/helpers - typeof";
                        n =
                            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                                ? function (a) {
                                      return typeof a;
                                  }
                                : function (a) {
                                      return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
                                  };
                        return n(f);
                    }
                    function u(f, a) {
                        for (var c = 0; c < a.length; c++) {
                            var k = a[c];
                            k.enumerable = k.enumerable || !1;
                            k.configurable = !0;
                            "value" in k && (k.writable = !0);
                            Object.defineProperty(f, k.key, k);
                        }
                    }
                    function v(f, a, c) {
                        a && u(f.prototype, a);
                        c && u(f, c);
                        return f;
                    }
                    function p(f, a) {
                        if ("function" !== typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                        f.prototype = Object.create(a && a.prototype, { constructor: { value: f, writable: !0, configurable: !0 } });
                        a && e(f, a);
                    }
                    function e(f, a) {
                        e =
                            Object.setPrototypeOf ||
                            function (a, k) {
                                a.__proto__ = k;
                                return a;
                            };
                        return e(f, a);
                    }
                    function b(f) {
                        var a = l();
                        return function () {
                            var c = t(f);
                            if (a) {
                                var k = t(this).constructor;
                                c = Reflect.construct(c, arguments, k);
                            } else c = c.apply(this, arguments);
                            c = !c || ("object" !== n(c) && "function" !== typeof c) ? h(this) : c;
                            return c;
                        };
                    }
                    function h(f) {
                        if (void 0 === f) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return f;
                    }
                    function l() {
                        if ("undefined" === typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" === typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch (f) {
                            return !1;
                        }
                    }
                    function t(f) {
                        t = Object.setPrototypeOf
                            ? Object.getPrototypeOf
                            : function (a) {
                                  return a.__proto__ || Object.getPrototypeOf(a);
                              };
                        return t(f);
                    }
                    function m(f, a, c) {
                        a in f ? Object.defineProperty(f, a, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : (f[a] = c);
                        return f;
                    }
                    d = (function (f) {
                        function a(k) {
                            if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
                            var g = c.call(this);
                            m(h(g), "_array", void 0);
                            m(h(g), "_size", void 0);
                            g._array = k;
                            g._size = k.length;
                            g._isInitialized = !0;
                            return g;
                        }
                        p(a, f);
                        var c = b(a);
                        v(
                            a,
                            [
                                {
                                    key: "init",
                                    value: function (a) {
                                        setTimeout(a.onSuccess, 0);
                                    },
                                },
                                {
                                    key: "loadRange",
                                    value: function (a, g) {
                                        setTimeout(g.onSuccess, 0);
                                    },
                                },
                                {
                                    key: "getByteAt",
                                    value: function (a) {
                                        if (a >= this._array.length) throw Error("Offset " + a + " hasn't been loaded yet.");
                                        return this._array[a];
                                    },
                                },
                            ],
                            [
                                {
                                    key: "canReadFile",
                                    value: function (a) {
                                        return Array.isArray(a) || ("function" === typeof Buffer && Buffer.isBuffer(a));
                                    },
                                },
                            ]
                        );
                        return a;
                    })(d("./MediaFileReader"));
                    r.exports = d;
                },
                { "./MediaFileReader": 11 },
            ],
            4: [
                function (d, r, q) {
                    function n(a) {
                        "@babel/helpers - typeof";
                        n =
                            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                                ? function (a) {
                                      return typeof a;
                                  }
                                : function (a) {
                                      return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
                                  };
                        return n(a);
                    }
                    function u(a, c) {
                        for (var k = 0; k < c.length; k++) {
                            var g = c[k];
                            g.enumerable = g.enumerable || !1;
                            g.configurable = !0;
                            "value" in g && (g.writable = !0);
                            Object.defineProperty(a, g.key, g);
                        }
                    }
                    function v(a, c, k) {
                        c && u(a.prototype, c);
                        k && u(a, k);
                        return a;
                    }
                    function p(a, c) {
                        if ("function" !== typeof c && null !== c) throw new TypeError("Super expression must either be null or a function");
                        a.prototype = Object.create(c && c.prototype, { constructor: { value: a, writable: !0, configurable: !0 } });
                        c && e(a, c);
                    }
                    function e(a, c) {
                        e =
                            Object.setPrototypeOf ||
                            function (a, g) {
                                a.__proto__ = g;
                                return a;
                            };
                        return e(a, c);
                    }
                    function b(a) {
                        var c = l();
                        return function () {
                            var k = t(a);
                            if (c) {
                                var g = t(this).constructor;
                                k = Reflect.construct(k, arguments, g);
                            } else k = k.apply(this, arguments);
                            k = !k || ("object" !== n(k) && "function" !== typeof k) ? h(this) : k;
                            return k;
                        };
                    }
                    function h(a) {
                        if (void 0 === a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return a;
                    }
                    function l() {
                        if ("undefined" === typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" === typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch (a) {
                            return !1;
                        }
                    }
                    function t(a) {
                        t = Object.setPrototypeOf
                            ? Object.getPrototypeOf
                            : function (a) {
                                  return a.__proto__ || Object.getPrototypeOf(a);
                              };
                        return t(a);
                    }
                    function m(a, c, k) {
                        c in a ? Object.defineProperty(a, c, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : (a[c] = k);
                        return a;
                    }
                    var f = d("./ChunkedFileData");
                    d = (function (a) {
                        function c(a) {
                            if (!(this instanceof c)) throw new TypeError("Cannot call a class as a function");
                            var g = k.call(this);
                            m(h(g), "_blob", void 0);
                            m(h(g), "_fileData", void 0);
                            g._blob = a;
                            g._fileData = new f();
                            return g;
                        }
                        p(c, a);
                        var k = b(c);
                        v(
                            c,
                            [
                                {
                                    key: "_init",
                                    value: function (a) {
                                        this._size = this._blob.size;
                                        setTimeout(a.onSuccess, 1);
                                    },
                                },
                                {
                                    key: "loadRange",
                                    value: function (a, c) {
                                        var g = this,
                                            k = (this._blob.slice || this._blob.mozSlice || this._blob.webkitSlice).call(this._blob, a[0], a[1] + 1),
                                            f = new FileReader();
                                        f.onloadend = function (k) {
                                            k = new Uint8Array(f.result);
                                            g._fileData.addData(a[0], k);
                                            c.onSuccess();
                                        };
                                        f.onerror = f.onabort = function (a) {
                                            if (c.onError) c.onError({ type: "blob", info: f.error });
                                        };
                                        f.readAsArrayBuffer(k);
                                    },
                                },
                                {
                                    key: "getByteAt",
                                    value: function (a) {
                                        return this._fileData.getByteAt(a);
                                    },
                                },
                            ],
                            [
                                {
                                    key: "canReadFile",
                                    value: function (a) {
                                        return ("undefined" !== typeof Blob && a instanceof Blob) || ("undefined" !== typeof File && a instanceof File);
                                    },
                                },
                            ]
                        );
                        return c;
                    })(d("./MediaFileReader"));
                    r.exports = d;
                },
                { "./ChunkedFileData": 5, "./MediaFileReader": 11 },
            ],
            5: [
                function (d, r, q) {
                    function n(d, p) {
                        for (var e = 0; e < p.length; e++) {
                            var b = p[e];
                            b.enumerable = b.enumerable || !1;
                            b.configurable = !0;
                            "value" in b && (b.writable = !0);
                            Object.defineProperty(d, b.key, b);
                        }
                    }
                    function u(d, p, e) {
                        p && n(d.prototype, p);
                        e && n(d, e);
                        return d;
                    }
                    d = (function () {
                        function d() {
                            if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
                            "_fileData" in this ? Object.defineProperty(this, "_fileData", { value: void 0, enumerable: !0, configurable: !0, writable: !0 }) : (this._fileData = void 0);
                            this._fileData = [];
                        }
                        u(
                            d,
                            [
                                {
                                    key: "addData",
                                    value: function (d, e) {
                                        var b = d + e.length - 1,
                                            h = this._getChunkRange(d, b);
                                        if (-1 === h.startIx) this._fileData.splice(h.insertIx || 0, 0, { offset: d, data: e });
                                        else {
                                            var l = this._fileData[h.startIx],
                                                p = this._fileData[h.endIx];
                                            b = b < p.offset + p.data.length - 1;
                                            var m = { offset: Math.min(d, l.offset), data: e };
                                            d > l.offset && ((d = this._sliceData(l.data, 0, d - l.offset)), (m.data = this._concatData(d, e)));
                                            b && ((d = this._sliceData(m.data, 0, p.offset - m.offset)), (m.data = this._concatData(d, p.data)));
                                            this._fileData.splice(h.startIx, h.endIx - h.startIx + 1, m);
                                        }
                                    },
                                },
                                {
                                    key: "_concatData",
                                    value: function (d, e) {
                                        if ("undefined" !== typeof ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(d)) {
                                            var b = new d.constructor(d.length + e.length);
                                            b.set(d, 0);
                                            b.set(e, d.length);
                                            return b;
                                        }
                                        return d.concat(e);
                                    },
                                },
                                {
                                    key: "_sliceData",
                                    value: function (d, e, b) {
                                        return d.slice ? d.slice(e, b) : d.subarray(e, b);
                                    },
                                },
                                {
                                    key: "_getChunkRange",
                                    value: function (d, e) {
                                        for (var b, h, l = -1, t = -1, m = 0, f = 0; f < this._fileData.length; f++, m = f) {
                                            h = this._fileData[f].offset;
                                            b = h + this._fileData[f].data.length;
                                            if (e < h - 1) break;
                                            if (d <= b + 1 && e >= h - 1) {
                                                l = f;
                                                break;
                                            }
                                        }
                                        if (-1 === l) return { startIx: -1, endIx: -1, insertIx: m };
                                        for (f = l; f < this._fileData.length && !((h = this._fileData[f].offset), (b = h + this._fileData[f].data.length), e >= h - 1 && (t = f), e <= b + 1); f++);
                                        -1 === t && (t = l);
                                        return { startIx: l, endIx: t };
                                    },
                                },
                                {
                                    key: "hasDataRange",
                                    value: function (d, e) {
                                        for (var b = 0; b < this._fileData.length; b++) {
                                            var h = this._fileData[b];
                                            if (e < h.offset) break;
                                            if (d >= h.offset && e < h.offset + h.data.length) return !0;
                                        }
                                        return !1;
                                    },
                                },
                                {
                                    key: "getByteAt",
                                    value: function (d) {
                                        for (var e, b = 0; b < this._fileData.length; b++) {
                                            var h = this._fileData[b].offset,
                                                l = h + this._fileData[b].data.length - 1;
                                            if (d >= h && d <= l) {
                                                e = this._fileData[b];
                                                break;
                                            }
                                        }
                                        if (e) return e.data[d - e.offset];
                                        throw Error("Offset " + d + " hasn't been loaded yet.");
                                    },
                                },
                            ],
                            [
                                {
                                    key: "NOT_FOUND",
                                    get: function () {
                                        return -1;
                                    },
                                },
                            ]
                        );
                        return d;
                    })();
                    r.exports = d;
                },
                {},
            ],
            6: [
                function (d, r, q) {
                    function n(a) {
                        "@babel/helpers - typeof";
                        n =
                            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                                ? function (a) {
                                      return typeof a;
                                  }
                                : function (a) {
                                      return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
                                  };
                        return n(a);
                    }
                    function u(a, g) {
                        for (var c = 0; c < g.length; c++) {
                            var k = g[c];
                            k.enumerable = k.enumerable || !1;
                            k.configurable = !0;
                            "value" in k && (k.writable = !0);
                            Object.defineProperty(a, k.key, k);
                        }
                    }
                    function v(a, g, c) {
                        g && u(a.prototype, g);
                        c && u(a, c);
                        return a;
                    }
                    function p(a, c) {
                        if ("function" !== typeof c && null !== c) throw new TypeError("Super expression must either be null or a function");
                        a.prototype = Object.create(c && c.prototype, { constructor: { value: a, writable: !0, configurable: !0 } });
                        c && e(a, c);
                    }
                    function e(a, c) {
                        e =
                            Object.setPrototypeOf ||
                            function (a, c) {
                                a.__proto__ = c;
                                return a;
                            };
                        return e(a, c);
                    }
                    function b(a) {
                        var c = l();
                        return function () {
                            var g = t(a);
                            if (c) {
                                var k = t(this).constructor;
                                g = Reflect.construct(g, arguments, k);
                            } else g = g.apply(this, arguments);
                            g = !g || ("object" !== n(g) && "function" !== typeof g) ? h(this) : g;
                            return g;
                        };
                    }
                    function h(a) {
                        if (void 0 === a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return a;
                    }
                    function l() {
                        if ("undefined" === typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" === typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch (k) {
                            return !1;
                        }
                    }
                    function t(a) {
                        t = Object.setPrototypeOf
                            ? Object.getPrototypeOf
                            : function (a) {
                                  return a.__proto__ || Object.getPrototypeOf(a);
                              };
                        return t(a);
                    }
                    function m(a, c, f) {
                        c in a ? Object.defineProperty(a, c, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : (a[c] = f);
                        return a;
                    }
                    var f = [4, 132],
                        a = [6, 134],
                        c = "Other;32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. label side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(";");
                    d = (function (k) {
                        function g() {
                            if (!(this instanceof g)) throw new TypeError("Cannot call a class as a function");
                            var a = arguments.length;
                            for (var c = Array(a), f = 0; f < a; f++) c[f] = arguments[f];
                            a = w.call.apply(w, [this].concat(c));
                            m(h(a), "_commentOffset", void 0);
                            m(h(a), "_pictureOffset", void 0);
                            return a;
                        }
                        p(g, k);
                        var w = b(g);
                        v(
                            g,
                            [
                                {
                                    key: "_loadData",
                                    value: function (a, c) {
                                        var g = this;
                                        a.loadRange([4, 7], {
                                            onSuccess: function () {
                                                g._loadBlock(a, 4, c);
                                            },
                                        });
                                    },
                                },
                                {
                                    key: "_loadBlock",
                                    value: function (c, g, k) {
                                        var b = this,
                                            m = c.getByteAt(g),
                                            w = c.getInteger24At(g + 1, !0);
                                        if (-1 !== f.indexOf(m)) {
                                            var e = g + 4;
                                            c.loadRange([e, e + w], {
                                                onSuccess: function () {
                                                    b._commentOffset = e;
                                                    b._nextBlock(c, g, m, w, k);
                                                },
                                            });
                                        } else
                                            -1 !== a.indexOf(m)
                                                ? ((e = g + 4),
                                                  c.loadRange([e, e + w], {
                                                      onSuccess: function () {
                                                          b._pictureOffset = e;
                                                          b._nextBlock(c, g, m, w, k);
                                                      },
                                                  }))
                                                : b._nextBlock(c, g, m, w, k);
                                    },
                                },
                                {
                                    key: "_nextBlock",
                                    value: function (a, c, g, f, k) {
                                        var b = this;
                                        if (127 < g)
                                            if (b._commentOffset) k.onSuccess();
                                            else k.onError({ type: "loadData", info: "Comment block could not be found." });
                                        else
                                            a.loadRange([c + 4 + f, c + 4 + 4 + f], {
                                                onSuccess: function () {
                                                    b._loadBlock(a, c + 4 + f, k);
                                                },
                                            });
                                    },
                                },
                                {
                                    key: "_parseData",
                                    value: function (a, g) {
                                        var f = a.getLongAt(this._commentOffset, !1) + (this._commentOffset + 4);
                                        g = a.getLongAt(f, !1);
                                        f += 4;
                                        for (var k, b, m, w, e, d, h = 0; h < g; h++) {
                                            var x = a.getLongAt(f, !1),
                                                l = a.getStringWithCharsetAt(f + 4, x, "utf-8").toString(),
                                                y = l.indexOf("=");
                                            l = [l.slice(0, y), l.slice(y + 1)];
                                            switch (l[0].toUpperCase()) {
                                                case "TITLE":
                                                    k = l[1];
                                                    break;
                                                case "ARTIST":
                                                    b = l[1];
                                                    break;
                                                case "ALBUM":
                                                    m = l[1];
                                                    break;
                                                case "TRACKNUMBER":
                                                    w = l[1];
                                                    break;
                                                case "GENRE":
                                                    e = l[1];
                                            }
                                            f += 4 + x;
                                        }
                                        this._pictureOffset && ((d = a.getLongAt(this._pictureOffset, !0)), (g = this._pictureOffset + 4), (f = a.getLongAt(g, !0)), (h = g + 4), (g = a.getStringAt(h, f)), (f = h + f), (h = a.getLongAt(f, !0)), (x = f + 4), (f = a.getStringWithCharsetAt(x, h, "utf-8").toString()), (h = x + h + 16), (x = a.getLongAt(h, !0)), (a = a.getBytesAt(h + 4, x, !0)), (d = { format: g, type: c[d], description: f, data: a }));
                                        return { type: "FLAC", version: "1", tags: { title: k, artist: b, album: m, track: w, genre: e, picture: d } };
                                    },
                                },
                            ],
                            [
                                {
                                    key: "getTagIdentifierByteRange",
                                    value: function () {
                                        return { offset: 0, length: 4 };
                                    },
                                },
                                {
                                    key: "canReadTagFormat",
                                    value: function (a) {
                                        return "fLaC" === String.fromCharCode.apply(String, a.slice(0, 4));
                                    },
                                },
                            ]
                        );
                        return g;
                    })(d("./MediaTagReader"));
                    r.exports = d;
                },
                { "./MediaTagReader": 12 },
            ],
            7: [
                function (d, r, q) {
                    function n(b) {
                        "@babel/helpers - typeof";
                        n =
                            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                                ? function (f) {
                                      return typeof f;
                                  }
                                : function (f) {
                                      return f && "function" === typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
                                  };
                        return n(b);
                    }
                    function u(b, f) {
                        for (var a = 0; a < f.length; a++) {
                            var c = f[a];
                            c.enumerable = c.enumerable || !1;
                            c.configurable = !0;
                            "value" in c && (c.writable = !0);
                            Object.defineProperty(b, c.key, c);
                        }
                    }
                    function v(b, f, a) {
                        f && u(b.prototype, f);
                        a && u(b, a);
                        return b;
                    }
                    function p(b, f) {
                        if ("function" !== typeof f && null !== f) throw new TypeError("Super expression must either be null or a function");
                        b.prototype = Object.create(f && f.prototype, { constructor: { value: b, writable: !0, configurable: !0 } });
                        f && e(b, f);
                    }
                    function e(b, f) {
                        e =
                            Object.setPrototypeOf ||
                            function (a, c) {
                                a.__proto__ = c;
                                return a;
                            };
                        return e(b, f);
                    }
                    function b(b) {
                        var f = h();
                        return function () {
                            var a = l(b);
                            if (f) {
                                var c = l(this).constructor;
                                a = Reflect.construct(a, arguments, c);
                            } else a = a.apply(this, arguments);
                            if (!a || ("object" !== n(a) && "function" !== typeof a)) {
                                if (void 0 === this) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                a = this;
                            }
                            return a;
                        };
                    }
                    function h() {
                        if ("undefined" === typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" === typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch (m) {
                            return !1;
                        }
                    }
                    function l(b) {
                        l = Object.setPrototypeOf
                            ? Object.getPrototypeOf
                            : function (f) {
                                  return f.__proto__ || Object.getPrototypeOf(f);
                              };
                        return l(b);
                    }
                    q = d("./MediaTagReader");
                    d("./MediaFileReader");
                    d = (function (m) {
                        function f() {
                            if (!(this instanceof f)) throw new TypeError("Cannot call a class as a function");
                            return a.apply(this, arguments);
                        }
                        p(f, m);
                        var a = b(f);
                        v(
                            f,
                            [
                                {
                                    key: "_loadData",
                                    value: function (a, f) {
                                        var c = a.getSize();
                                        a.loadRange([c - 128, c - 1], f);
                                    },
                                },
                                {
                                    key: "_parseData",
                                    value: function (a, f) {
                                        var c = a.getSize() - 128,
                                            b = a.getStringWithCharsetAt(c + 3, 30).toString(),
                                            k = a.getStringWithCharsetAt(c + 33, 30).toString(),
                                            m = a.getStringWithCharsetAt(c + 63, 30).toString(),
                                            e = a.getStringWithCharsetAt(c + 93, 4).toString();
                                        var d = a.getByteAt(c + 97 + 28);
                                        f = a.getByteAt(c + 97 + 29);
                                        if (0 == d && 0 != f) {
                                            var h = "1.1";
                                            d = a.getStringWithCharsetAt(c + 97, 28).toString();
                                        } else (h = "1.0"), (d = a.getStringWithCharsetAt(c + 97, 30).toString()), (f = 0);
                                        a = a.getByteAt(c + 97 + 30);
                                        a = { type: "ID3", version: h, tags: { title: b, artist: k, album: m, year: e, comment: d, genre: 255 > a ? t[a] : "" } };
                                        f && (a.tags.track = f);
                                        return a;
                                    },
                                },
                            ],
                            [
                                {
                                    key: "getTagIdentifierByteRange",
                                    value: function () {
                                        return { offset: -128, length: 128 };
                                    },
                                },
                                {
                                    key: "canReadTagFormat",
                                    value: function (a) {
                                        return "TAG" === String.fromCharCode.apply(String, a.slice(0, 3));
                                    },
                                },
                            ]
                        );
                        return f;
                    })(q);
                    var t =
                        "Blues;Classic Rock;Country;Dance;Disco;Funk;Grunge;Hip-Hop;Jazz;Metal;New Age;Oldies;Other;Pop;R&B;Rap;Reggae;Rock;Techno;Industrial;Alternative;Ska;Death Metal;Pranks;Soundtrack;Euro-Techno;Ambient;Trip-Hop;Vocal;Jazz+Funk;Fusion;Trance;Classical;Instrumental;Acid;House;Game;Sound Clip;Gospel;Noise;AlternRock;Bass;Soul;Punk;Space;Meditative;Instrumental Pop;Instrumental Rock;Ethnic;Gothic;Darkwave;Techno-Industrial;Electronic;Pop-Folk;Eurodance;Dream;Southern Rock;Comedy;Cult;Gangsta;Top 40;Christian Rap;Pop/Funk;Jungle;Native American;Cabaret;New Wave;Psychadelic;Rave;Showtunes;Trailer;Lo-Fi;Tribal;Acid Punk;Acid Jazz;Polka;Retro;Musical;Rock & Roll;Hard Rock;Folk;Folk-Rock;National Folk;Swing;Fast Fusion;Bebob;Latin;Revival;Celtic;Bluegrass;Avantgarde;Gothic Rock;Progressive Rock;Psychedelic Rock;Symphonic Rock;Slow Rock;Big Band;Chorus;Easy Listening;Acoustic;Humour;Speech;Chanson;Opera;Chamber Music;Sonata;Symphony;Booty Bass;Primus;Porn Groove;Satire;Slow Jam;Club;Tango;Samba;Folklore;Ballad;Power Ballad;Rhythmic Soul;Freestyle;Duet;Punk Rock;Drum Solo;Acapella;Euro-House;Dance Hall".split(
                            ";"
                        );
                    r.exports = d;
                },
                { "./MediaFileReader": 11, "./MediaTagReader": 12 },
            ],
            8: [
                function (d, r, q) {
                    function n(b, f) {
                        for (var a = 0; a < f.length; a++) {
                            var c = f[a];
                            c.enumerable = c.enumerable || !1;
                            c.configurable = !0;
                            "value" in c && (c.writable = !0);
                            Object.defineProperty(b, c.key, c);
                        }
                    }
                    function u(b, f, a) {
                        f && n(b.prototype, f);
                        a && n(b, a);
                        return b;
                    }
                    function v(b) {
                        switch (b) {
                            case 0:
                                b = "iso-8859-1";
                                break;
                            case 1:
                                b = "utf-16";
                                break;
                            case 2:
                                b = "utf-16be";
                                break;
                            case 3:
                                b = "utf-8";
                                break;
                            default:
                                b = "iso-8859-1";
                        }
                        return b;
                    }
                    function p(b, f, a, c) {
                        var k = a.getStringWithCharsetAt(b + 1, f - 1, c);
                        b = a.getStringWithCharsetAt(b + 1 + k.bytesReadCount, f - 1 - k.bytesReadCount, c);
                        return { user_description: k.toString(), data: b.toString() };
                    }
                    d("./MediaFileReader");
                    var e = d("./StringUtils"),
                        b = d("./ArrayFileReader"),
                        h = {
                            BUF: "Recommended buffer size",
                            CNT: "Play counter",
                            COM: "Comments",
                            CRA: "Audio encryption",
                            CRM: "Encrypted meta frame",
                            ETC: "Event timing codes",
                            EQU: "Equalization",
                            GEO: "General encapsulated object",
                            IPL: "Involved people list",
                            LNK: "Linked information",
                            MCI: "Music CD Identifier",
                            MLL: "MPEG location lookup table",
                            PIC: "Attached picture",
                            POP: "Popularimeter",
                            REV: "Reverb",
                            RVA: "Relative volume adjustment",
                            SLT: "Synchronized lyric/text",
                            STC: "Synced tempo codes",
                            TAL: "Album/Movie/Show title",
                            TBP: "BPM (Beats Per Minute)",
                            TCM: "Composer",
                            TCO: "Content type",
                            TCR: "Copyright message",
                            TDA: "Date",
                            TDY: "Playlist delay",
                            TEN: "Encoded by",
                            TFT: "File type",
                            TIM: "Time",
                            TKE: "Initial key",
                            TLA: "Language(s)",
                            TLE: "Length",
                            TMT: "Media type",
                            TOA: "Original artist(s)/performer(s)",
                            TOF: "Original filename",
                            TOL: "Original Lyricist(s)/text writer(s)",
                            TOR: "Original release year",
                            TOT: "Original album/Movie/Show title",
                            TP1: "Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",
                            TP2: "Band/Orchestra/Accompaniment",
                            TP3: "Conductor/Performer refinement",
                            TP4: "Interpreted, remixed, or otherwise modified by",
                            TPA: "Part of a set",
                            TPB: "Publisher",
                            TRC: "ISRC (International Standard Recording Code)",
                            TRD: "Recording dates",
                            TRK: "Track number/Position in set",
                            TSI: "Size",
                            TSS: "Software/hardware and settings used for encoding",
                            TT1: "Content group description",
                            TT2: "Title/Songname/Content description",
                            TT3: "Subtitle/Description refinement",
                            TXT: "Lyricist/text writer",
                            TXX: "User defined text information frame",
                            TYE: "Year",
                            UFI: "Unique file identifier",
                            ULT: "Unsychronized lyric/text transcription",
                            WAF: "Official audio file webpage",
                            WAR: "Official artist/performer webpage",
                            WAS: "Official audio source webpage",
                            WCM: "Commercial information",
                            WCP: "Copyright/Legal information",
                            WPB: "Publishers official webpage",
                            WXX: "User defined URL link frame",
                            AENC: "Audio encryption",
                            APIC: "Attached picture",
                            ASPI: "Audio seek point index",
                            CHAP: "Chapter",
                            CTOC: "Table of contents",
                            COMM: "Comments",
                            COMR: "Commercial frame",
                            ENCR: "Encryption method registration",
                            EQU2: "Equalisation (2)",
                            EQUA: "Equalization",
                            ETCO: "Event timing codes",
                            GEOB: "General encapsulated object",
                            GRID: "Group identification registration",
                            IPLS: "Involved people list",
                            LINK: "Linked information",
                            MCDI: "Music CD identifier",
                            MLLT: "MPEG location lookup table",
                            OWNE: "Ownership frame",
                            PRIV: "Private frame",
                            PCNT: "Play counter",
                            POPM: "Popularimeter",
                            POSS: "Position synchronisation frame",
                            RBUF: "Recommended buffer size",
                            RVA2: "Relative volume adjustment (2)",
                            RVAD: "Relative volume adjustment",
                            RVRB: "Reverb",
                            SEEK: "Seek frame",
                            SYLT: "Synchronized lyric/text",
                            SYTC: "Synchronized tempo codes",
                            TALB: "Album/Movie/Show title",
                            TBPM: "BPM (beats per minute)",
                            TCOM: "Composer",
                            TCON: "Content type",
                            TCOP: "Copyright message",
                            TDAT: "Date",
                            TDLY: "Playlist delay",
                            TDRC: "Recording time",
                            TDRL: "Release time",
                            TDTG: "Tagging time",
                            TENC: "Encoded by",
                            TEXT: "Lyricist/Text writer",
                            TFLT: "File type",
                            TIME: "Time",
                            TIPL: "Involved people list",
                            TIT1: "Content group description",
                            TIT2: "Title/songname/content description",
                            TIT3: "Subtitle/Description refinement",
                            TKEY: "Initial key",
                            TLAN: "Language(s)",
                            TLEN: "Length",
                            TMCL: "Musician credits list",
                            TMED: "Media type",
                            TMOO: "Mood",
                            TOAL: "Original album/movie/show title",
                            TOFN: "Original filename",
                            TOLY: "Original lyricist(s)/text writer(s)",
                            TOPE: "Original artist(s)/performer(s)",
                            TORY: "Original release year",
                            TOWN: "File owner/licensee",
                            TPE1: "Lead performer(s)/Soloist(s)",
                            TPE2: "Band/orchestra/accompaniment",
                            TPE3: "Conductor/performer refinement",
                            TPE4: "Interpreted, remixed, or otherwise modified by",
                            TPOS: "Part of a set",
                            TPRO: "Produced notice",
                            TPUB: "Publisher",
                            TRCK: "Track number/Position in set",
                            TRDA: "Recording dates",
                            TRSN: "Internet radio station name",
                            TRSO: "Internet radio station owner",
                            TSOA: "Album sort order",
                            TSOP: "Performer sort order",
                            TSOT: "Title sort order",
                            TSIZ: "Size",
                            TSRC: "ISRC (international standard recording code)",
                            TSSE: "Software/Hardware and settings used for encoding",
                            TSST: "Set subtitle",
                            TYER: "Year",
                            TXXX: "User defined text information frame",
                            UFID: "Unique file identifier",
                            USER: "Terms of use",
                            USLT: "Unsychronized lyric/text transcription",
                            WCOM: "Commercial information",
                            WCOP: "Copyright/Legal information",
                            WOAF: "Official audio file webpage",
                            WOAR: "Official artist/performer webpage",
                            WOAS: "Official audio source webpage",
                            WORS: "Official internet radio station homepage",
                            WPAY: "Payment",
                            WPUB: "Publishers official webpage",
                            WXXX: "User defined URL link frame",
                        };
                    d = (function () {
                        function e() {
                            if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                        }
                        u(e, null, [
                            {
                                key: "getFrameReaderFunction",
                                value: function (b) {
                                    return b in l ? l[b] : "T" === b[0] ? l["T*"] : "W" === b[0] ? l["W*"] : null;
                                },
                            },
                            {
                                key: "readFrames",
                                value: function (b, a, c, k, g) {
                                    for (var f = {}, d = this._getFrameHeaderSize(k); b < a - d; ) {
                                        var h = this._readFrameHeader(c, b, k),
                                            m = h.id;
                                        if (!m) break;
                                        var l = h.flags,
                                            t = h.size,
                                            p = b + h.headerSize,
                                            n = c;
                                        b += h.headerSize + h.size;
                                        if (!g || -1 !== g.indexOf(m)) {
                                            if ("MP3e" === m || "\x00MP3" === m || "\x00\x00MP" === m || " MP3" === m) break;
                                            l && l.format.unsynchronisation && !k.flags.unsynchronisation && ((n = this.getUnsyncFileReader(n, p, t)), (p = 0), (t = n.getSize()));
                                            l && l.format.data_length_indicator && ((p += 4), (t -= 4));
                                            l = (h = e.getFrameReaderFunction(m)) ? h.apply(this, [p, t, n, l, k]) : null;
                                            p = this._getFrameDescription(m);
                                            t = { id: m, size: t, description: p, data: l };
                                            m in f ? (f[m].id && (f[m] = [f[m]]), f[m].push(t)) : (f[m] = t);
                                        }
                                    }
                                    return f;
                                },
                            },
                            {
                                key: "_getFrameHeaderSize",
                                value: function (b) {
                                    b = b.major;
                                    return 2 == b ? 6 : 3 == b || 4 == b ? 10 : 0;
                                },
                            },
                            {
                                key: "_readFrameHeader",
                                value: function (b, a, c) {
                                    var f = c.major,
                                        g = null;
                                    c = this._getFrameHeaderSize(c);
                                    switch (f) {
                                        case 2:
                                            var e = b.getStringAt(a, 3);
                                            var m = b.getInteger24At(a + 3, !0);
                                            break;
                                        case 3:
                                            e = b.getStringAt(a, 4);
                                            m = b.getLongAt(a + 4, !0);
                                            break;
                                        case 4:
                                            (e = b.getStringAt(a, 4)), (m = b.getSynchsafeInteger32At(a + 4));
                                    }
                                    if (e == String.fromCharCode(0, 0, 0) || e == String.fromCharCode(0, 0, 0, 0)) e = "";
                                    e && 2 < f && (g = this._readFrameFlags(b, a + 8));
                                    return { id: e || "", size: m || 0, headerSize: c || 0, flags: g };
                                },
                            },
                            {
                                key: "_readFrameFlags",
                                value: function (b, a) {
                                    return { message: { tag_alter_preservation: b.isBitSetAt(a, 6), file_alter_preservation: b.isBitSetAt(a, 5), read_only: b.isBitSetAt(a, 4) }, format: { grouping_identity: b.isBitSetAt(a + 1, 7), compression: b.isBitSetAt(a + 1, 3), encryption: b.isBitSetAt(a + 1, 2), unsynchronisation: b.isBitSetAt(a + 1, 1), data_length_indicator: b.isBitSetAt(a + 1, 0) } };
                                },
                            },
                            {
                                key: "_getFrameDescription",
                                value: function (b) {
                                    return b in h ? h[b] : "Unknown";
                                },
                            },
                            {
                                key: "getUnsyncFileReader",
                                value: function (f, a, c) {
                                    f = f.getBytesAt(a, c);
                                    for (a = 0; a < f.length - 1; a++) 255 === f[a] && 0 === f[a + 1] && f.splice(a + 1, 1);
                                    return new b(f);
                                },
                            },
                        ]);
                        return e;
                    })();
                    var l = {
                        APIC: function (b, f, a, c, k) {
                            c = b;
                            var g = v(a.getByteAt(b));
                            switch (k && k.major) {
                                case 2:
                                    k = a.getStringAt(b + 1, 3);
                                    b += 4;
                                    break;
                                case 3:
                                case 4:
                                    k = a.getStringWithCharsetAt(b + 1, f - 1);
                                    b += 1 + k.bytesReadCount;
                                    break;
                                default:
                                    throw Error("Couldn't read ID3v2 major version.");
                            }
                            var e = a.getByteAt(b);
                            e = t[e];
                            g = a.getStringWithCharsetAt(b + 1, f - (b - c) - 1, g);
                            b += 1 + g.bytesReadCount;
                            return { format: k.toString(), type: e, description: g.toString(), data: a.getBytesAt(b, c + f - b) };
                        },
                        CHAP: function (b, f, a, c, k) {
                            c = b;
                            var g = {},
                                h = e.readNullTerminatedString(a.getBytesAt(b, f));
                            g.id = h.toString();
                            b += h.bytesReadCount;
                            g.startTime = a.getLongAt(b, !0);
                            b += 4;
                            g.endTime = a.getLongAt(b, !0);
                            b += 4;
                            g.startOffset = a.getLongAt(b, !0);
                            b += 4;
                            g.endOffset = a.getLongAt(b, !0);
                            b += 4;
                            g.subFrames = this.readFrames(b, b + (f - (b - c)), a, k);
                            return g;
                        },
                        CTOC: function (b, f, a, c, k) {
                            c = b;
                            var g = { childElementIds: [], id: void 0, topLevel: void 0, ordered: void 0, entryCount: void 0, subFrames: void 0 },
                                h = e.readNullTerminatedString(a.getBytesAt(b, f));
                            g.id = h.toString();
                            b += h.bytesReadCount;
                            g.topLevel = a.isBitSetAt(b, 1);
                            g.ordered = a.isBitSetAt(b, 0);
                            b++;
                            g.entryCount = a.getByteAt(b);
                            b++;
                            for (h = 0; h < g.entryCount; h++) {
                                var d = e.readNullTerminatedString(a.getBytesAt(b, f - (b - c)));
                                g.childElementIds.push(d.toString());
                                b += d.bytesReadCount;
                            }
                            g.subFrames = this.readFrames(b, b + (f - (b - c)), a, k);
                            return g;
                        },
                        COMM: function (b, f, a, c, k) {
                            var g = b,
                                e = v(a.getByteAt(b));
                            c = a.getStringAt(b + 1, 3);
                            k = a.getStringWithCharsetAt(b + 4, f - 4, e);
                            b += 4 + k.bytesReadCount;
                            b = a.getStringWithCharsetAt(b, g + f - b, e);
                            return { language: c, short_description: k.toString(), text: b.toString() };
                        },
                    };
                    l.COM = l.COMM;
                    l.PIC = function (b, f, a, c, k) {
                        return l.APIC(b, f, a, c, k);
                    };
                    l.PCNT = function (b, f, a, c, k) {
                        return a.getLongAt(b, !1);
                    };
                    l.CNT = l.PCNT;
                    l["T*"] = function (b, f, a, c, k) {
                        c = v(a.getByteAt(b));
                        return a.getStringWithCharsetAt(b + 1, f - 1, c).toString();
                    };
                    l.TXXX = function (b, f, a, c, k) {
                        c = v(a.getByteAt(b));
                        return p(b, f, a, c);
                    };
                    l.WXXX = function (b, f, a, c, k) {
                        if (0 === f) return null;
                        c = v(a.getByteAt(b));
                        return p(b, f, a, c);
                    };
                    l["W*"] = function (b, f, a, c, k) {
                        return 0 === f ? null : a.getStringWithCharsetAt(b, f, "iso-8859-1").toString();
                    };
                    l.TCON = function (b, f, a, c) {
                        return l["T*"].apply(this, arguments).replace(/^\(\d+\)/, "");
                    };
                    l.TCO = l.TCON;
                    l.USLT = function (b, f, a, c, k) {
                        var g = b,
                            e = v(a.getByteAt(b));
                        c = a.getStringAt(b + 1, 3);
                        k = a.getStringWithCharsetAt(b + 4, f - 4, e);
                        b += 4 + k.bytesReadCount;
                        b = a.getStringWithCharsetAt(b, g + f - b, e);
                        return { language: c, descriptor: k.toString(), lyrics: b.toString() };
                    };
                    l.ULT = l.USLT;
                    l.UFID = function (b, f, a, c, k) {
                        c = e.readNullTerminatedString(a.getBytesAt(b, f));
                        b += c.bytesReadCount;
                        b = a.getBytesAt(b, f - c.bytesReadCount);
                        return { ownerIdentifier: c.toString(), identifier: b };
                    };
                    var t = "Other;32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. label side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(";");
                    r.exports = d;
                },
                { "./ArrayFileReader": 3, "./MediaFileReader": 11, "./StringUtils": 13 },
            ],
            9: [
                function (d, r, q) {
                    function n(b) {
                        "@babel/helpers - typeof";
                        n =
                            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                                ? function (a) {
                                      return typeof a;
                                  }
                                : function (a) {
                                      return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
                                  };
                        return n(b);
                    }
                    function u(b, a) {
                        for (var c = 0; c < a.length; c++) {
                            var f = a[c];
                            f.enumerable = f.enumerable || !1;
                            f.configurable = !0;
                            "value" in f && (f.writable = !0);
                            Object.defineProperty(b, f.key, f);
                        }
                    }
                    function v(b, a, c) {
                        a && u(b.prototype, a);
                        c && u(b, c);
                        return b;
                    }
                    function p(b, a) {
                        if ("function" !== typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                        b.prototype = Object.create(a && a.prototype, { constructor: { value: b, writable: !0, configurable: !0 } });
                        a && e(b, a);
                    }
                    function e(b, a) {
                        e =
                            Object.setPrototypeOf ||
                            function (a, b) {
                                a.__proto__ = b;
                                return a;
                            };
                        return e(b, a);
                    }
                    function b(b) {
                        var a = h();
                        return function () {
                            var c = l(b);
                            if (a) {
                                var f = l(this).constructor;
                                c = Reflect.construct(c, arguments, f);
                            } else c = c.apply(this, arguments);
                            if (!c || ("object" !== n(c) && "function" !== typeof c)) {
                                if (void 0 === this) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                c = this;
                            }
                            return c;
                        };
                    }
                    function h() {
                        if ("undefined" === typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" === typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch (f) {
                            return !1;
                        }
                    }
                    function l(b) {
                        l = Object.setPrototypeOf
                            ? Object.getPrototypeOf
                            : function (a) {
                                  return a.__proto__ || Object.getPrototypeOf(a);
                              };
                        return l(b);
                    }
                    q = d("./MediaTagReader");
                    d("./MediaFileReader");
                    var t = d("./ID3v2FrameReader");
                    d = (function (f) {
                        function a() {
                            if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
                            return c.apply(this, arguments);
                        }
                        p(a, f);
                        var c = b(a);
                        v(
                            a,
                            [
                                {
                                    key: "_loadData",
                                    value: function (a, b) {
                                        a.loadRange([6, 9], {
                                            onSuccess: function () {
                                                a.loadRange([0, 10 + a.getSynchsafeInteger32At(6) - 1], b);
                                            },
                                            onError: b.onError,
                                        });
                                    },
                                },
                                {
                                    key: "_parseData",
                                    value: function (a, b) {
                                        var c,
                                            g = 0,
                                            f = a.getByteAt(g + 3);
                                        if (4 < f) return { type: "ID3", version: ">2.4", tags: {} };
                                        var e = a.getByteAt(g + 4),
                                            k = a.isBitSetAt(g + 5, 7),
                                            h = a.isBitSetAt(g + 5, 6),
                                            d = a.isBitSetAt(g + 5, 5),
                                            l = a.getSynchsafeInteger32At(g + 6);
                                        g += 10;
                                        if (h)
                                            if (4 === f) {
                                                var p = a.getSynchsafeInteger32At(g);
                                                g += p;
                                            } else (p = a.getLongAt(g, !0)), (g += p + 4);
                                        p = { type: "ID3", version: "2." + f + "." + e, major: f, revision: e, flags: { unsynchronisation: k, extended_header: h, experimental_indicator: d, footer_present: !1 }, size: l, tags: {} };
                                        b && (c = this._expandShortcutTags(b));
                                        b = l + 10;
                                        p.flags.unsynchronisation && ((a = t.getUnsyncFileReader(a, g, l)), (g = 0), (b = a.getSize()));
                                        a = t.readFrames(g, b, a, p, c);
                                        for (var n in m) m.hasOwnProperty(n) && (c = this._getFrameData(a, m[n])) && (p.tags[n] = c);
                                        for (var q in a) a.hasOwnProperty(q) && (p.tags[q] = a[q]);
                                        return p;
                                    },
                                },
                                {
                                    key: "_getFrameData",
                                    value: function (a, b) {
                                        for (var c = 0, g; (g = b[c]); c++) if (g in a) return (a = a[g] instanceof Array ? a[g][0] : a[g]), a.data;
                                    },
                                },
                                {
                                    key: "getShortcuts",
                                    value: function () {
                                        return m;
                                    },
                                },
                            ],
                            [
                                {
                                    key: "getTagIdentifierByteRange",
                                    value: function () {
                                        return { offset: 0, length: 10 };
                                    },
                                },
                                {
                                    key: "canReadTagFormat",
                                    value: function (a) {
                                        return "ID3" === String.fromCharCode.apply(String, a.slice(0, 3));
                                    },
                                },
                            ]
                        );
                        return a;
                    })(q);
                    var m = { title: ["TIT2", "TT2"], artist: ["TPE1", "TP1"], album: ["TALB", "TAL"], year: ["TYER", "TYE"], comment: ["COMM", "COM"], track: ["TRCK", "TRK"], genre: ["TCON", "TCO"], picture: ["APIC", "PIC"], lyrics: ["USLT", "ULT"] };
                    r.exports = d;
                },
                { "./ID3v2FrameReader": 8, "./MediaFileReader": 11, "./MediaTagReader": 12 },
            ],
            10: [
                function (d, r, q) {
                    function n(a) {
                        "@babel/helpers - typeof";
                        n =
                            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                                ? function (a) {
                                      return typeof a;
                                  }
                                : function (a) {
                                      return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
                                  };
                        return n(a);
                    }
                    function u(a, b) {
                        for (var c = 0; c < b.length; c++) {
                            var g = b[c];
                            g.enumerable = g.enumerable || !1;
                            g.configurable = !0;
                            "value" in g && (g.writable = !0);
                            Object.defineProperty(a, g.key, g);
                        }
                    }
                    function v(a, b, f) {
                        b && u(a.prototype, b);
                        f && u(a, f);
                        return a;
                    }
                    function p(a, b) {
                        if ("function" !== typeof b && null !== b) throw new TypeError("Super expression must either be null or a function");
                        a.prototype = Object.create(b && b.prototype, { constructor: { value: a, writable: !0, configurable: !0 } });
                        b && e(a, b);
                    }
                    function e(a, b) {
                        e =
                            Object.setPrototypeOf ||
                            function (a, b) {
                                a.__proto__ = b;
                                return a;
                            };
                        return e(a, b);
                    }
                    function b(a) {
                        var b = h();
                        return function () {
                            var c = l(a);
                            if (b) {
                                var g = l(this).constructor;
                                c = Reflect.construct(c, arguments, g);
                            } else c = c.apply(this, arguments);
                            if (!c || ("object" !== n(c) && "function" !== typeof c)) {
                                if (void 0 === this) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                c = this;
                            }
                            return c;
                        };
                    }
                    function h() {
                        if ("undefined" === typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" === typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch (a) {
                            return !1;
                        }
                    }
                    function l(a) {
                        l = Object.setPrototypeOf
                            ? Object.getPrototypeOf
                            : function (a) {
                                  return a.__proto__ || Object.getPrototypeOf(a);
                              };
                        return l(a);
                    }
                    q = d("./MediaTagReader");
                    d("./MediaFileReader");
                    d = (function (a) {
                        function c() {
                            if (!(this instanceof c)) throw new TypeError("Cannot call a class as a function");
                            return e.apply(this, arguments);
                        }
                        p(c, a);
                        var e = b(c);
                        v(
                            c,
                            [
                                {
                                    key: "_loadData",
                                    value: function (a, b) {
                                        var c = this;
                                        a.loadRange([0, 16], {
                                            onSuccess: function () {
                                                c._loadAtom(a, 0, "", b);
                                            },
                                            onError: b.onError,
                                        });
                                    },
                                },
                                {
                                    key: "_loadAtom",
                                    value: function (a, b, c, f) {
                                        if (b >= a.getSize()) f.onSuccess();
                                        else {
                                            var g = this,
                                                e = a.getLongAt(b, !0);
                                            if (0 == e || isNaN(e)) f.onSuccess();
                                            else {
                                                var h = a.getStringAt(b + 4, 4);
                                                if (this._isContainerAtom(h)) {
                                                    "meta" == h && (b += 4);
                                                    var d = (c ? c + "." : "") + h;
                                                    "moov.udta.meta.ilst" === d
                                                        ? a.loadRange([b, b + e], f)
                                                        : a.loadRange([b + 8, b + 8 + 8], {
                                                              onSuccess: function () {
                                                                  g._loadAtom(a, b + 8, d, f);
                                                              },
                                                              onError: f.onError,
                                                          });
                                                } else
                                                    a.loadRange([b + e, b + e + 8], {
                                                        onSuccess: function () {
                                                            g._loadAtom(a, b + e, c, f);
                                                        },
                                                        onError: f.onError,
                                                    });
                                            }
                                        }
                                    },
                                },
                                {
                                    key: "_isContainerAtom",
                                    value: function (a) {
                                        return 0 <= ["moov", "udta", "meta", "ilst"].indexOf(a);
                                    },
                                },
                                {
                                    key: "_canReadAtom",
                                    value: function (a) {
                                        return "----" !== a;
                                    },
                                },
                                {
                                    key: "_parseData",
                                    value: function (a, b) {
                                        var c = {};
                                        b = this._expandShortcutTags(b);
                                        this._readAtom(c, a, 0, a.getSize(), b);
                                        for (var g in f) f.hasOwnProperty(g) && (b = c[f[g]]) && (c[g] = "track" === g ? b.data.track : b.data);
                                        return { type: "MP4", ftyp: a.getStringAt(8, 4), version: a.getLongAt(12, !0), tags: c };
                                    },
                                },
                                {
                                    key: "_readAtom",
                                    value: function (a, b, c, f, e, h, d) {
                                        d = void 0 === d ? "" : d + "  ";
                                        for (var g = c; g < c + f; ) {
                                            var l = b.getLongAt(g, !0);
                                            if (0 == l) break;
                                            var k = b.getStringAt(g + 4, 4);
                                            if (this._isContainerAtom(k)) {
                                                "meta" == k && (g += 4);
                                                this._readAtom(a, b, g + 8, l - 8, e, (h ? h + "." : "") + k, d);
                                                break;
                                            }
                                            (!e || 0 <= e.indexOf(k)) && "moov.udta.meta.ilst" === h && this._canReadAtom(k) && (a[k] = this._readMetadataAtom(b, g));
                                            g += l;
                                        }
                                    },
                                },
                                {
                                    key: "_readMetadataAtom",
                                    value: function (a, b) {
                                        var c = a.getLongAt(b, !0),
                                            g = a.getStringAt(b + 4, 4),
                                            f = a.getInteger24At(b + 16 + 1, !0);
                                        f = t[f];
                                        if ("trkn" == g) var e = { track: a.getShortAt(b + 16 + 10, !0), total: a.getShortAt(b + 16 + 14, !0) };
                                        else if ("disk" == g) e = { disk: a.getShortAt(b + 16 + 10, !0), total: a.getShortAt(b + 16 + 14, !0) };
                                        else {
                                            b += 24;
                                            var h = c - 24;
                                            "covr" === g && "uint8" === f && (f = "jpeg");
                                            switch (f) {
                                                case "text":
                                                    e = a.getStringWithCharsetAt(b, h, "utf-8").toString();
                                                    break;
                                                case "uint8":
                                                    e = a.getShortAt(b, !1);
                                                    break;
                                                case "int":
                                                case "uint":
                                                    e = ("int" == f ? (1 == h ? a.getSByteAt : 2 == h ? a.getSShortAt : 4 == h ? a.getSLongAt : a.getLongAt) : 1 == h ? a.getByteAt : 2 == h ? a.getShortAt : a.getLongAt).call(a, b + (8 == h ? 4 : 0), !0);
                                                    break;
                                                case "jpeg":
                                                case "png":
                                                    e = { format: "image/" + f, data: a.getBytesAt(b, h) };
                                            }
                                        }
                                        return { id: g, size: c, description: m[g] || "Unknown", data: e };
                                    },
                                },
                                {
                                    key: "getShortcuts",
                                    value: function () {
                                        return f;
                                    },
                                },
                            ],
                            [
                                {
                                    key: "getTagIdentifierByteRange",
                                    value: function () {
                                        return { offset: 0, length: 16 };
                                    },
                                },
                                {
                                    key: "canReadTagFormat",
                                    value: function (a) {
                                        return "ftyp" === String.fromCharCode.apply(String, a.slice(4, 8));
                                    },
                                },
                            ]
                        );
                        return c;
                    })(q);
                    var t = { 0: "uint8", 1: "text", 13: "jpeg", 14: "png", 21: "int", 22: "uint" },
                        m = {
                            "\u00a9alb": "Album",
                            "\u00a9ART": "Artist",
                            aART: "Album Artist",
                            "\u00a9day": "Release Date",
                            "\u00a9nam": "Title",
                            "\u00a9gen": "Genre",
                            gnre: "Genre",
                            trkn: "Track Number",
                            "\u00a9wrt": "Composer",
                            "\u00a9too": "Encoding Tool",
                            "\u00a9enc": "Encoded By",
                            cprt: "Copyright",
                            covr: "Cover Art",
                            "\u00a9grp": "Grouping",
                            keyw: "Keywords",
                            "\u00a9lyr": "Lyrics",
                            "\u00a9cmt": "Comment",
                            tmpo: "Tempo",
                            cpil: "Compilation",
                            disk: "Disc Number",
                            tvsh: "TV Show Name",
                            tven: "TV Episode ID",
                            tvsn: "TV Season",
                            tves: "TV Episode",
                            tvnn: "TV Network",
                            desc: "Description",
                            ldes: "Long Description",
                            sonm: "Sort Name",
                            soar: "Sort Artist",
                            soaa: "Sort Album",
                            soco: "Sort Composer",
                            sosn: "Sort Show",
                            purd: "Purchase Date",
                            pcst: "Podcast",
                            purl: "Podcast URL",
                            catg: "Category",
                            hdvd: "HD Video",
                            stik: "Media Type",
                            rtng: "Content Rating",
                            pgap: "Gapless Playback",
                            apID: "Purchase Account",
                            sfID: "Country Code",
                            atID: "Artist ID",
                            cnID: "Catalog ID",
                            plID: "Collection ID",
                            geID: "Genre ID",
                            "xid ": "Vendor Information",
                            flvr: "Codec Flavor",
                        },
                        f = { title: "\u00a9nam", artist: "\u00a9ART", album: "\u00a9alb", year: "\u00a9day", comment: "\u00a9cmt", track: "trkn", genre: "\u00a9gen", picture: "covr", lyrics: "\u00a9lyr" };
                    r.exports = d;
                },
                { "./MediaFileReader": 11, "./MediaTagReader": 12 },
            ],
            11: [
                function (d, r, q) {
                    function n(e, b) {
                        for (var h = 0; h < b.length; h++) {
                            var d = b[h];
                            d.enumerable = d.enumerable || !1;
                            d.configurable = !0;
                            "value" in d && (d.writable = !0);
                            Object.defineProperty(e, d.key, d);
                        }
                    }
                    function u(e, b, h) {
                        b && n(e.prototype, b);
                        h && n(e, h);
                        return e;
                    }
                    function v(e, b, h) {
                        b in e ? Object.defineProperty(e, b, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : (e[b] = h);
                        return e;
                    }
                    var p = d("./StringUtils");
                    d = (function () {
                        function e(b) {
                            if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                            v(this, "_isInitialized", void 0);
                            v(this, "_size", void 0);
                            this._isInitialized = !1;
                            this._size = 0;
                        }
                        u(
                            e,
                            [
                                {
                                    key: "init",
                                    value: function (b) {
                                        var e = this;
                                        if (this._isInitialized) setTimeout(b.onSuccess, 1);
                                        else
                                            return this._init({
                                                onSuccess: function () {
                                                    e._isInitialized = !0;
                                                    b.onSuccess();
                                                },
                                                onError: b.onError,
                                            });
                                    },
                                },
                                {
                                    key: "_init",
                                    value: function (b) {
                                        throw Error("Must implement init function");
                                    },
                                },
                                {
                                    key: "loadRange",
                                    value: function (b, e) {
                                        throw Error("Must implement loadRange function");
                                    },
                                },
                                {
                                    key: "getSize",
                                    value: function () {
                                        if (!this._isInitialized) throw Error("init() must be called first.");
                                        return this._size;
                                    },
                                },
                                {
                                    key: "getByteAt",
                                    value: function (b) {
                                        throw Error("Must implement getByteAt function");
                                    },
                                },
                                {
                                    key: "getBytesAt",
                                    value: function (b, e) {
                                        for (var h = Array(e), d = 0; d < e; d++) h[d] = this.getByteAt(b + d);
                                        return h;
                                    },
                                },
                                {
                                    key: "isBitSetAt",
                                    value: function (b, e) {
                                        return 0 != (this.getByteAt(b) & (1 << e));
                                    },
                                },
                                {
                                    key: "getSByteAt",
                                    value: function (b) {
                                        b = this.getByteAt(b);
                                        return 127 < b ? b - 256 : b;
                                    },
                                },
                                {
                                    key: "getShortAt",
                                    value: function (b, e) {
                                        b = e ? (this.getByteAt(b) << 8) + this.getByteAt(b + 1) : (this.getByteAt(b + 1) << 8) + this.getByteAt(b);
                                        0 > b && (b += 65536);
                                        return b;
                                    },
                                },
                                {
                                    key: "getSShortAt",
                                    value: function (b, e) {
                                        b = this.getShortAt(b, e);
                                        return 32767 < b ? b - 65536 : b;
                                    },
                                },
                                {
                                    key: "getLongAt",
                                    value: function (b, e) {
                                        var d = this.getByteAt(b),
                                            h = this.getByteAt(b + 1),
                                            m = this.getByteAt(b + 2);
                                        b = this.getByteAt(b + 3);
                                        e = e ? (((((d << 8) + h) << 8) + m) << 8) + b : (((((b << 8) + m) << 8) + h) << 8) + d;
                                        0 > e && (e += 4294967296);
                                        return e;
                                    },
                                },
                                {
                                    key: "getSLongAt",
                                    value: function (b, e) {
                                        b = this.getLongAt(b, e);
                                        return 2147483647 < b ? b - 4294967296 : b;
                                    },
                                },
                                {
                                    key: "getInteger24At",
                                    value: function (b, e) {
                                        var d = this.getByteAt(b),
                                            h = this.getByteAt(b + 1);
                                        b = this.getByteAt(b + 2);
                                        e = e ? (((d << 8) + h) << 8) + b : (((b << 8) + h) << 8) + d;
                                        0 > e && (e += 16777216);
                                        return e;
                                    },
                                },
                                {
                                    key: "getStringAt",
                                    value: function (b, e) {
                                        for (var d = [], h = b, m = 0; h < b + e; h++, m++) d[m] = String.fromCharCode(this.getByteAt(h));
                                        return d.join("");
                                    },
                                },
                                {
                                    key: "getStringWithCharsetAt",
                                    value: function (b, e, d) {
                                        b = this.getBytesAt(b, e);
                                        switch ((d || "").toLowerCase()) {
                                            case "utf-16":
                                            case "utf-16le":
                                            case "utf-16be":
                                                d = p.readUTF16String(b, "utf-16be" === d);
                                                break;
                                            case "utf-8":
                                                d = p.readUTF8String(b);
                                                break;
                                            default:
                                                d = p.readNullTerminatedString(b);
                                        }
                                        return d;
                                    },
                                },
                                {
                                    key: "getCharAt",
                                    value: function (b) {
                                        return String.fromCharCode(this.getByteAt(b));
                                    },
                                },
                                {
                                    key: "getSynchsafeInteger32At",
                                    value: function (b) {
                                        var e = this.getByteAt(b),
                                            d = this.getByteAt(b + 1),
                                            p = this.getByteAt(b + 2);
                                        return (this.getByteAt(b + 3) & 127) | ((p & 127) << 7) | ((d & 127) << 14) | ((e & 127) << 21);
                                    },
                                },
                            ],
                            [
                                {
                                    key: "canReadFile",
                                    value: function (b) {
                                        throw Error("Must implement canReadFile function");
                                    },
                                },
                            ]
                        );
                        return e;
                    })();
                    r.exports = d;
                },
                { "./StringUtils": 13 },
            ],
            12: [
                function (d, r, q) {
                    function n(d, e) {
                        for (var b = 0; b < e.length; b++) {
                            var h = e[b];
                            h.enumerable = h.enumerable || !1;
                            h.configurable = !0;
                            "value" in h && (h.writable = !0);
                            Object.defineProperty(d, h.key, h);
                        }
                    }
                    function u(d, e, b) {
                        e && n(d.prototype, e);
                        b && n(d, b);
                        return d;
                    }
                    function v(d, e, b) {
                        e in d ? Object.defineProperty(d, e, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : (d[e] = b);
                        return d;
                    }
                    d("./MediaFileReader");
                    d = (function () {
                        function d(e) {
                            if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
                            v(this, "_mediaFileReader", void 0);
                            v(this, "_tags", void 0);
                            this._mediaFileReader = e;
                            this._tags = null;
                        }
                        u(
                            d,
                            [
                                {
                                    key: "setTagsToRead",
                                    value: function (e) {
                                        this._tags = e;
                                        return this;
                                    },
                                },
                                {
                                    key: "read",
                                    value: function (e) {
                                        var b = this;
                                        this._mediaFileReader.init({
                                            onSuccess: function () {
                                                b._loadData(b._mediaFileReader, {
                                                    onSuccess: function () {
                                                        try {
                                                            var d = b._parseData(b._mediaFileReader, b._tags);
                                                        } catch (l) {
                                                            if (e.onError) {
                                                                e.onError({ type: "parseData", info: l.message });
                                                                return;
                                                            }
                                                        }
                                                        e.onSuccess(d);
                                                    },
                                                    onError: e.onError,
                                                });
                                            },
                                            onError: e.onError,
                                        });
                                    },
                                },
                                {
                                    key: "getShortcuts",
                                    value: function () {
                                        return {};
                                    },
                                },
                                {
                                    key: "_loadData",
                                    value: function (e, b) {
                                        throw Error("Must implement _loadData function");
                                    },
                                },
                                {
                                    key: "_parseData",
                                    value: function (e, b) {
                                        throw Error("Must implement _parseData function");
                                    },
                                },
                                {
                                    key: "_expandShortcutTags",
                                    value: function (e) {
                                        if (!e) return null;
                                        for (var b = [], d = this.getShortcuts(), l = 0, n; (n = e[l]); l++) b = b.concat(d[n] || [n]);
                                        return b;
                                    },
                                },
                            ],
                            [
                                {
                                    key: "getTagIdentifierByteRange",
                                    value: function () {
                                        throw Error("Must implement");
                                    },
                                },
                                {
                                    key: "canReadTagFormat",
                                    value: function (e) {
                                        throw Error("Must implement");
                                    },
                                },
                            ]
                        );
                        return d;
                    })();
                    r.exports = d;
                },
                { "./MediaFileReader": 11 },
            ],
            13: [
                function (d, r, q) {
                    function n(e, b) {
                        for (var d = 0; d < b.length; d++) {
                            var l = b[d];
                            l.enumerable = l.enumerable || !1;
                            l.configurable = !0;
                            "value" in l && (l.writable = !0);
                            Object.defineProperty(e, l.key, l);
                        }
                    }
                    function u(e, b, d) {
                        b && n(e.prototype, b);
                        d && n(e, d);
                        return e;
                    }
                    function v(e, b, d) {
                        b in e ? Object.defineProperty(e, b, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : (e[b] = d);
                        return e;
                    }
                    var p = (function () {
                        function e(b, d) {
                            if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
                            v(this, "_value", void 0);
                            v(this, "bytesReadCount", void 0);
                            v(this, "length", void 0);
                            this._value = b;
                            this.bytesReadCount = d;
                            this.length = b.length;
                        }
                        u(e, [
                            {
                                key: "toString",
                                value: function () {
                                    return this._value;
                                },
                            },
                        ]);
                        return e;
                    })();
                    r.exports = {
                        readUTF16String: function (e, b, d) {
                            var h = 0,
                                n = 1,
                                m = 0;
                            d = Math.min(d || e.length, e.length);
                            254 == e[0] && 255 == e[1] ? ((b = !0), (h = 2)) : 255 == e[0] && 254 == e[1] && ((b = !1), (h = 2));
                            b && ((n = 0), (m = 1));
                            b = [];
                            for (var f = 0; h < d; f++) {
                                var a = e[h + n],
                                    c = (a << 8) + e[h + m];
                                h += 2;
                                if (0 == c) break;
                                else 216 > a || 224 <= a ? (b[f] = String.fromCharCode(c)) : ((a = (e[h + n] << 8) + e[h + m]), (h += 2), (b[f] = String.fromCharCode(c, a)));
                            }
                            return new p(b.join(""), h);
                        },
                        readUTF8String: function (e, b) {
                            var d = 0;
                            b = Math.min(b || e.length, e.length);
                            239 == e[0] && 187 == e[1] && 191 == e[2] && (d = 3);
                            for (var l = [], n = 0; d < b; n++) {
                                var m = e[d++];
                                if (0 == m) break;
                                else if (128 > m) l[n] = String.fromCharCode(m);
                                else if (194 <= m && 224 > m) {
                                    var f = e[d++];
                                    l[n] = String.fromCharCode(((m & 31) << 6) + (f & 63));
                                } else if (224 <= m && 240 > m) {
                                    f = e[d++];
                                    var a = e[d++];
                                    l[n] = String.fromCharCode(((m & 255) << 12) + ((f & 63) << 6) + (a & 63));
                                } else if (240 <= m && 245 > m) {
                                    f = e[d++];
                                    a = e[d++];
                                    var c = e[d++];
                                    a = ((m & 7) << 18) + ((f & 63) << 12) + ((a & 63) << 6) + (c & 63) - 65536;
                                    l[n] = String.fromCharCode((a >> 10) + 55296, (a & 1023) + 56320);
                                }
                            }
                            return new p(l.join(""), d);
                        },
                        readNullTerminatedString: function (e, b) {
                            var d = [];
                            b = b || e.length;
                            for (var l = 0; l < b; ) {
                                var n = e[l++];
                                if (0 == n) break;
                                d[l - 1] = String.fromCharCode(n);
                            }
                            return new p(d.join(""), l);
                        },
                    };
                },
                {},
            ],
            14: [
                function (d, r, q) {
                    function n(a) {
                        "@babel/helpers - typeof";
                        n =
                            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                                ? function (a) {
                                      return typeof a;
                                  }
                                : function (a) {
                                      return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
                                  };
                        return n(a);
                    }
                    function u(a, b) {
                        for (var c = 0; c < b.length; c++) {
                            var d = b[c];
                            d.enumerable = d.enumerable || !1;
                            d.configurable = !0;
                            "value" in d && (d.writable = !0);
                            Object.defineProperty(a, d.key, d);
                        }
                    }
                    function v(a, b, d) {
                        b && u(a.prototype, b);
                        d && u(a, d);
                        return a;
                    }
                    function p(a, b) {
                        if ("function" !== typeof b && null !== b) throw new TypeError("Super expression must either be null or a function");
                        a.prototype = Object.create(b && b.prototype, { constructor: { value: a, writable: !0, configurable: !0 } });
                        b && e(a, b);
                    }
                    function e(a, b) {
                        e =
                            Object.setPrototypeOf ||
                            function (a, b) {
                                a.__proto__ = b;
                                return a;
                            };
                        return e(a, b);
                    }
                    function b(a) {
                        var b = l();
                        return function () {
                            var c = t(a);
                            if (b) {
                                var d = t(this).constructor;
                                c = Reflect.construct(c, arguments, d);
                            } else c = c.apply(this, arguments);
                            c = !c || ("object" !== n(c) && "function" !== typeof c) ? h(this) : c;
                            return c;
                        };
                    }
                    function h(a) {
                        if (void 0 === a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return a;
                    }
                    function l() {
                        if ("undefined" === typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" === typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                        } catch (a) {
                            return !1;
                        }
                    }
                    function t(a) {
                        t = Object.setPrototypeOf
                            ? Object.getPrototypeOf
                            : function (a) {
                                  return a.__proto__ || Object.getPrototypeOf(a);
                              };
                        return t(a);
                    }
                    function m(a, b, d) {
                        b in a ? Object.defineProperty(a, b, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : (a[b] = d);
                        return a;
                    }
                    var f = d("./ChunkedFileData");
                    q = (function (a) {
                        function c(a) {
                            if (!(this instanceof c)) throw new TypeError("Cannot call a class as a function");
                            var b = e.call(this);
                            m(h(b), "_url", void 0);
                            m(h(b), "_fileData", void 0);
                            b._url = a;
                            b._fileData = new f();
                            return b;
                        }
                        p(c, a);
                        var e = b(c);
                        v(
                            c,
                            [
                                {
                                    key: "_init",
                                    value: function (a) {
                                        c._config.avoidHeadRequests ? this._fetchSizeWithGetRequest(a) : this._fetchSizeWithHeadRequest(a);
                                    },
                                },
                                {
                                    key: "_fetchSizeWithHeadRequest",
                                    value: function (a) {
                                        var b = this;
                                        this._makeXHRRequest("HEAD", null, {
                                            onSuccess: function (c) {
                                                (c = b._parseContentLength(c)) ? ((b._size = c), a.onSuccess()) : b._fetchSizeWithGetRequest(a);
                                            },
                                            onError: a.onError,
                                        });
                                    },
                                },
                                {
                                    key: "_fetchSizeWithGetRequest",
                                    value: function (a) {
                                        var b = this,
                                            c = this._roundRangeToChunkMultiple([0, 0]);
                                        this._makeXHRRequest("GET", c, {
                                            onSuccess: function (c) {
                                                var d = b._parseContentRange(c);
                                                c = b._getXhrResponseContent(c);
                                                if (d) {
                                                    if (null == d.instanceLength) {
                                                        b._fetchEntireFile(a);
                                                        return;
                                                    }
                                                    b._size = d.instanceLength;
                                                } else b._size = c.length;
                                                b._fileData.addData(0, c);
                                                a.onSuccess();
                                            },
                                            onError: a.onError,
                                        });
                                    },
                                },
                                {
                                    key: "_fetchEntireFile",
                                    value: function (a) {
                                        var b = this;
                                        this._makeXHRRequest("GET", null, {
                                            onSuccess: function (c) {
                                                c = b._getXhrResponseContent(c);
                                                b._size = c.length;
                                                b._fileData.addData(0, c);
                                                a.onSuccess();
                                            },
                                            onError: a.onError,
                                        });
                                    },
                                },
                                {
                                    key: "_getXhrResponseContent",
                                    value: function (a) {
                                        return a.responseBody || a.responseText || "";
                                    },
                                },
                                {
                                    key: "_parseContentLength",
                                    value: function (a) {
                                        a = this._getResponseHeader(a, "Content-Length");
                                        return null == a ? a : parseInt(a, 10);
                                    },
                                },
                                {
                                    key: "_parseContentRange",
                                    value: function (a) {
                                        if ((a = this._getResponseHeader(a, "Content-Range"))) {
                                            var b = a.match(/bytes (\d+)-(\d+)\/(?:(\d+)|\*)/i);
                                            if (!b) throw Error("FIXME: Unknown Content-Range syntax: " + a);
                                            return { firstBytePosition: parseInt(b[1], 10), lastBytePosition: parseInt(b[2], 10), instanceLength: b[3] ? parseInt(b[3], 10) : null };
                                        }
                                        return null;
                                    },
                                },
                                {
                                    key: "loadRange",
                                    value: function (a, b) {
                                        var c = this;
                                        c._fileData.hasDataRange(a[0], Math.min(c._size, a[1]))
                                            ? setTimeout(b.onSuccess, 1)
                                            : ((a = this._roundRangeToChunkMultiple(a)),
                                              (a[1] = Math.min(c._size, a[1])),
                                              this._makeXHRRequest("GET", a, {
                                                  onSuccess: function (d) {
                                                      d = c._getXhrResponseContent(d);
                                                      c._fileData.addData(a[0], d);
                                                      b.onSuccess();
                                                  },
                                                  onError: b.onError,
                                              }));
                                    },
                                },
                                {
                                    key: "_roundRangeToChunkMultiple",
                                    value: function (a) {
                                        return [a[0], a[0] + 1024 * Math.ceil((a[1] - a[0] + 1) / 1024) - 1];
                                    },
                                },
                                {
                                    key: "_makeXHRRequest",
                                    value: function (a, b, d) {
                                        var e = this._createXHRObject();
                                        e.open(a, this._url);
                                        var f = function () {
                                            if (200 === e.status || 206 === e.status) d.onSuccess(e);
                                            else if (d.onError) d.onError({ type: "xhr", info: "Unexpected HTTP status " + e.status + ".", xhr: e });
                                            e = null;
                                        };
                                        "undefined" !== typeof e.onload
                                            ? ((e.onload = f),
                                              (e.onerror = function () {
                                                  if (d.onError) d.onError({ type: "xhr", info: "Generic XHR error, check xhr object.", xhr: e });
                                              }))
                                            : (e.onreadystatechange = function () {
                                                  4 === e.readyState && f();
                                              });
                                        c._config.timeoutInSec &&
                                            ((e.timeout = 1e3 * c._config.timeoutInSec),
                                            (e.ontimeout = function () {
                                                if (d.onError) d.onError({ type: "xhr", info: "Timeout after " + e.timeout / 1e3 + "s. Use jsmediatags.Config.setXhrTimeout to override.", xhr: e });
                                            }));
                                        e.overrideMimeType("text/plain; charset=x-user-defined");
                                        b && this._setRequestHeader(e, "Range", "bytes=" + b[0] + "-" + b[1]);
                                        this._setRequestHeader(e, "If-Modified-Since", "Sat, 01 Jan 1970 00:00:00 GMT");
                                        e.send(null);
                                    },
                                },
                                {
                                    key: "_setRequestHeader",
                                    value: function (a, b, d) {
                                        0 > c._config.disallowedXhrHeaders.indexOf(b.toLowerCase()) && a.setRequestHeader(b, d);
                                    },
                                },
                                {
                                    key: "_hasResponseHeader",
                                    value: function (a, b) {
                                        a = a.getAllResponseHeaders();
                                        if (!a) return !1;
                                        a = a.split("\r\n");
                                        for (var c = [], d = 0; d < a.length; d++) c[d] = a[d].split(":")[0].toLowerCase();
                                        return 0 <= c.indexOf(b.toLowerCase());
                                    },
                                },
                                {
                                    key: "_getResponseHeader",
                                    value: function (a, b) {
                                        return this._hasResponseHeader(a, b) ? a.getResponseHeader(b) : null;
                                    },
                                },
                                {
                                    key: "getByteAt",
                                    value: function (a) {
                                        return this._fileData.getByteAt(a).charCodeAt(0) & 255;
                                    },
                                },
                                {
                                    key: "_isWebWorker",
                                    value: function () {
                                        return "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
                                    },
                                },
                                {
                                    key: "_createXHRObject",
                                    value: function () {
                                        if ("undefined" === typeof window && !this._isWebWorker()) return new (d("xhr2").XMLHttpRequest)();
                                        if ("undefined" !== typeof XMLHttpRequest) return new XMLHttpRequest();
                                        throw Error("XMLHttpRequest is not supported");
                                    },
                                },
                            ],
                            [
                                {
                                    key: "canReadFile",
                                    value: function (a) {
                                        return "string" === typeof a && /^[a-z]+:\/\//i.test(a);
                                    },
                                },
                                {
                                    key: "setConfig",
                                    value: function (a) {
                                        for (var b in a) a.hasOwnProperty(b) && (this._config[b] = a[b]);
                                        a = this._config.disallowedXhrHeaders;
                                        for (b = 0; b < a.length; b++) a[b] = a[b].toLowerCase();
                                    },
                                },
                            ]
                        );
                        return c;
                    })(d("./MediaFileReader"));
                    m(q, "_config", void 0);
                    q._config = { avoidHeadRequests: !1, disallowedXhrHeaders: [], timeoutInSec: 30 };
                    r.exports = q;
                },
                { "./ChunkedFileData": 5, "./MediaFileReader": 11, xhr2: 2 },
            ],
            15: [
                function (d, r, q) {
                    function n(a, b) {
                        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
                    }
                    function u(a, b) {
                        for (var c = 0; c < b.length; c++) {
                            var d = b[c];
                            d.enumerable = d.enumerable || !1;
                            d.configurable = !0;
                            "value" in d && (d.writable = !0);
                            Object.defineProperty(a, d.key, d);
                        }
                    }
                    function v(a, b, c) {
                        b && u(a.prototype, b);
                        c && u(a, c);
                        return a;
                    }
                    function p(a, b, c) {
                        b in a ? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : (a[b] = c);
                        return a;
                    }
                    function e(a, b) {
                        var c = 0 > a.offset && (-a.offset > b || 0 < a.offset + a.length);
                        return !((0 <= a.offset && a.offset + a.length >= b) || c);
                    }
                    d("./MediaFileReader");
                    var b = d("./XhrFileReader"),
                        h = d("./BlobFileReader"),
                        l = d("./ArrayFileReader");
                    d("./MediaTagReader");
                    var t = d("./ID3v1TagReader"),
                        m = d("./ID3v2TagReader"),
                        f = d("./MP4TagReader"),
                        a = d("./FLACTagReader"),
                        c = [],
                        k = [],
                        g = (function () {
                            function a(b) {
                                n(this, a);
                                p(this, "_file", void 0);
                                p(this, "_tagsToRead", void 0);
                                p(this, "_fileReader", void 0);
                                p(this, "_tagReader", void 0);
                                this._file = b;
                            }
                            v(a, [
                                {
                                    key: "setTagsToRead",
                                    value: function (a) {
                                        this._tagsToRead = a;
                                        return this;
                                    },
                                },
                                {
                                    key: "setFileReader",
                                    value: function (a) {
                                        this._fileReader = a;
                                        return this;
                                    },
                                },
                                {
                                    key: "setTagReader",
                                    value: function (a) {
                                        this._tagReader = a;
                                        return this;
                                    },
                                },
                                {
                                    key: "read",
                                    value: function (a) {
                                        var b = new (this._getFileReader())(this._file),
                                            c = this;
                                        b.init({
                                            onSuccess: function () {
                                                c._getTagReader(b, {
                                                    onSuccess: function (d) {
                                                        new d(b).setTagsToRead(c._tagsToRead).read(a);
                                                    },
                                                    onError: a.onError,
                                                });
                                            },
                                            onError: a.onError,
                                        });
                                    },
                                },
                                {
                                    key: "_getFileReader",
                                    value: function () {
                                        return this._fileReader ? this._fileReader : this._findFileReader();
                                    },
                                },
                                {
                                    key: "_findFileReader",
                                    value: function () {
                                        for (var a = 0; a < c.length; a++) if (c[a].canReadFile(this._file)) return c[a];
                                        throw Error("No suitable file reader found for " + this._file);
                                    },
                                },
                                {
                                    key: "_getTagReader",
                                    value: function (a, b) {
                                        if (this._tagReader) {
                                            var c = this._tagReader;
                                            setTimeout(function () {
                                                b.onSuccess(c);
                                            }, 1);
                                        } else this._findTagReader(a, b);
                                    },
                                },
                                {
                                    key: "_findTagReader",
                                    value: function (a, b) {
                                        for (var c = [], d = [], f = a.getSize(), g = 0; g < k.length; g++) {
                                            var h = k[g].getTagIdentifierByteRange();
                                            e(h, f) && ((0 <= h.offset && h.offset < f / 2) || (0 > h.offset && h.offset < -f / 2) ? c.push(k[g]) : d.push(k[g]));
                                        }
                                        var l = !1;
                                        g = {
                                            onSuccess: function () {
                                                if (l) {
                                                    for (var c = 0; c < k.length; c++) {
                                                        var d = k[c].getTagIdentifierByteRange();
                                                        if (e(d, f)) {
                                                            try {
                                                                var g = a.getBytesAt(0 <= d.offset ? d.offset : d.offset + f, d.length);
                                                            } catch (z) {
                                                                if (b.onError) b.onError({ type: "fileReader", info: z.message });
                                                                return;
                                                            }
                                                            if (k[c].canReadTagFormat(g)) {
                                                                b.onSuccess(k[c]);
                                                                return;
                                                            }
                                                        }
                                                    }
                                                    if (b.onError) b.onError({ type: "tagFormat", info: "No suitable tag reader found" });
                                                } else l = !0;
                                            },
                                            onError: b.onError,
                                        };
                                        this._loadTagIdentifierRanges(a, c, g);
                                        this._loadTagIdentifierRanges(a, d, g);
                                    },
                                },
                                {
                                    key: "_loadTagIdentifierRanges",
                                    value: function (a, b, c) {
                                        if (0 === b.length) setTimeout(c.onSuccess, 1);
                                        else {
                                            for (var d = [Number.MAX_VALUE, 0], e = a.getSize(), f = 0; f < b.length; f++) {
                                                var g = b[f].getTagIdentifierByteRange(),
                                                    h = 0 <= g.offset ? g.offset : g.offset + e;
                                                g = h + g.length - 1;
                                                d[0] = Math.min(h, d[0]);
                                                d[1] = Math.max(g, d[1]);
                                            }
                                            a.loadRange(d, c);
                                        }
                                    },
                                },
                            ]);
                            return a;
                        })();
                    q = (function () {
                        function a() {
                            n(this, a);
                        }
                        v(a, null, [
                            {
                                key: "addFileReader",
                                value: function (b) {
                                    c.push(b);
                                    return a;
                                },
                            },
                            {
                                key: "addTagReader",
                                value: function (b) {
                                    k.push(b);
                                    return a;
                                },
                            },
                            {
                                key: "removeTagReader",
                                value: function (b) {
                                    b = k.indexOf(b);
                                    0 <= b && k.splice(b, 1);
                                    return a;
                                },
                            },
                            {
                                key: "EXPERIMENTAL_avoidHeadRequests",
                                value: function () {
                                    b.setConfig({ avoidHeadRequests: !0 });
                                },
                            },
                            {
                                key: "setDisallowedXhrHeaders",
                                value: function (a) {
                                    b.setConfig({ disallowedXhrHeaders: a });
                                },
                            },
                            {
                                key: "setXhrTimeoutInSec",
                                value: function (a) {
                                    b.setConfig({ timeoutInSec: a });
                                },
                            },
                        ]);
                        return a;
                    })();
                    q.addFileReader(b).addFileReader(h).addFileReader(l).addTagReader(m).addTagReader(t).addTagReader(f).addTagReader(a);
                    "undefined" === typeof process || process.browser || ((d = "undefined" !== typeof navigator && "ReactNative" === navigator.product ? d("./ReactNativeFileReader") : d("./NodeFileReader")), q.addFileReader(d));
                    r.exports = {
                        read: function (a, b) {
                            new g(a).read(b);
                        },
                        Reader: g,
                        Config: q,
                    };
                },
                { "./ArrayFileReader": 3, "./BlobFileReader": 4, "./FLACTagReader": 6, "./ID3v1TagReader": 7, "./ID3v2TagReader": 9, "./MP4TagReader": 10, "./MediaFileReader": 11, "./MediaTagReader": 12, "./NodeFileReader": 1, "./ReactNativeFileReader": 1, "./XhrFileReader": 14 },
            ],
        },
        {},
        [15]
    )(15);
});
