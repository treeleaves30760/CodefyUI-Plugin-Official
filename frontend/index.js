(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".cdui-example{width:240px;padding:12px 14px;background:#1e1e1e;color:#e6e6e6;border:1px solid #333;border-radius:8px;font:13px/1.5 system-ui,-apple-system,sans-serif;box-shadow:0 6px 20px #0006}.cdui-example__title{font-weight:600;margin-bottom:8px;color:#2dd4bf}.cdui-example__row{margin:2px 0;color:#b8b8b8}.cdui-example__row b{color:#e6e6e6}.cdui-example__btn{margin-top:10px;width:100%;padding:6px 10px;background:#0d9488;color:#fff;border:0;border-radius:6px;cursor:pointer;font-weight:600}.cdui-example__btn:hover{background:#0f766e}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
function Wm(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
var fi = { exports: {} }, ze = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h1;
function $m() {
  if (h1) return ze;
  h1 = 1;
  var _ = Symbol.for("react.transitional.element"), al = Symbol.for("react.fragment");
  function Z(o, vl, dl) {
    var Al = null;
    if (dl !== void 0 && (Al = "" + dl), vl.key !== void 0 && (Al = "" + vl.key), "key" in vl) {
      dl = {};
      for (var Ml in vl)
        Ml !== "key" && (dl[Ml] = vl[Ml]);
    } else dl = vl;
    return vl = dl.ref, {
      $$typeof: _,
      type: o,
      key: Al,
      ref: vl !== void 0 ? vl : null,
      props: dl
    };
  }
  return ze.Fragment = al, ze.jsx = Z, ze.jsxs = Z, ze;
}
var o1;
function Fm() {
  return o1 || (o1 = 1, fi.exports = $m()), fi.exports;
}
var St = Fm(), ci = { exports: {} }, C = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S1;
function km() {
  if (S1) return C;
  S1 = 1;
  var _ = Symbol.for("react.transitional.element"), al = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), vl = Symbol.for("react.profiler"), dl = Symbol.for("react.consumer"), Al = Symbol.for("react.context"), Ml = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), il = Symbol.iterator;
  function wl(v) {
    return v === null || typeof v != "object" ? null : (v = il && v[il] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var Bl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ql = Object.assign, Ut = {};
  function Wl(v, E, M) {
    this.props = v, this.context = E, this.refs = Ut, this.updater = M || Bl;
  }
  Wl.prototype.isReactComponent = {}, Wl.prototype.setState = function(v, E) {
    if (typeof v != "object" && typeof v != "function" && v != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, v, E, "setState");
  }, Wl.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function Wt() {
  }
  Wt.prototype = Wl.prototype;
  function Nl(v, E, M) {
    this.props = v, this.context = E, this.refs = Ut, this.updater = M || Bl;
  }
  var nt = Nl.prototype = new Wt();
  nt.constructor = Nl, ql(nt, Wl.prototype), nt.isPureReactComponent = !0;
  var Et = Array.isArray;
  function Gl() {
  }
  var L = { H: null, A: null, T: null, S: null }, jl = Object.prototype.hasOwnProperty;
  function At(v, E, M) {
    var D = M.ref;
    return {
      $$typeof: _,
      type: v,
      key: E,
      ref: D !== void 0 ? D : null,
      props: M
    };
  }
  function Zu(v, E) {
    return At(v.type, E, v.props);
  }
  function _t(v) {
    return typeof v == "object" && v !== null && v.$$typeof === _;
  }
  function Xl(v) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(M) {
      return E[M];
    });
  }
  var Eu = /\/+/g;
  function pt(v, E) {
    return typeof v == "object" && v !== null && v.key != null ? Xl("" + v.key) : E.toString(36);
  }
  function gt(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(Gl, Gl) : (v.status = "pending", v.then(
          function(E) {
            v.status === "pending" && (v.status = "fulfilled", v.value = E);
          },
          function(E) {
            v.status === "pending" && (v.status = "rejected", v.reason = E);
          }
        )), v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function b(v, E, M, D, Y) {
    var j = typeof v;
    (j === "undefined" || j === "boolean") && (v = null);
    var F = !1;
    if (v === null) F = !0;
    else
      switch (j) {
        case "bigint":
        case "string":
        case "number":
          F = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case _:
            case al:
              F = !0;
              break;
            case $:
              return F = v._init, b(
                F(v._payload),
                E,
                M,
                D,
                Y
              );
          }
      }
    if (F)
      return Y = Y(v), F = D === "" ? "." + pt(v, 0) : D, Et(Y) ? (M = "", F != null && (M = F.replace(Eu, "$&/") + "/"), b(Y, E, M, "", function(ra) {
        return ra;
      })) : Y != null && (_t(Y) && (Y = Zu(
        Y,
        M + (Y.key == null || v && v.key === Y.key ? "" : ("" + Y.key).replace(
          Eu,
          "$&/"
        ) + "/") + F
      )), E.push(Y)), 1;
    F = 0;
    var Cl = D === "" ? "." : D + ":";
    if (Et(v))
      for (var hl = 0; hl < v.length; hl++)
        D = v[hl], j = Cl + pt(D, hl), F += b(
          D,
          E,
          M,
          j,
          Y
        );
    else if (hl = wl(v), typeof hl == "function")
      for (v = hl.call(v), hl = 0; !(D = v.next()).done; )
        D = D.value, j = Cl + pt(D, hl++), F += b(
          D,
          E,
          M,
          j,
          Y
        );
    else if (j === "object") {
      if (typeof v.then == "function")
        return b(
          gt(v),
          E,
          M,
          D,
          Y
        );
      throw E = String(v), Error(
        "Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return F;
  }
  function O(v, E, M) {
    if (v == null) return v;
    var D = [], Y = 0;
    return b(v, D, "", "", function(j) {
      return E.call(M, j, Y++);
    }), D;
  }
  function q(v) {
    if (v._status === -1) {
      var E = v._result;
      E = E(), E.then(
        function(M) {
          (v._status === 0 || v._status === -1) && (v._status = 1, v._result = M);
        },
        function(M) {
          (v._status === 0 || v._status === -1) && (v._status = 2, v._result = M);
        }
      ), v._status === -1 && (v._status = 0, v._result = E);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var P = typeof reportError == "function" ? reportError : function(v) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
        error: v
      });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", v);
      return;
    }
    console.error(v);
  }, el = {
    map: O,
    forEach: function(v, E, M) {
      O(
        v,
        function() {
          E.apply(this, arguments);
        },
        M
      );
    },
    count: function(v) {
      var E = 0;
      return O(v, function() {
        E++;
      }), E;
    },
    toArray: function(v) {
      return O(v, function(E) {
        return E;
      }) || [];
    },
    only: function(v) {
      if (!_t(v))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return v;
    }
  };
  return C.Activity = R, C.Children = el, C.Component = Wl, C.Fragment = Z, C.Profiler = vl, C.PureComponent = Nl, C.StrictMode = o, C.Suspense = H, C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L, C.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(v) {
      return L.H.useMemoCache(v);
    }
  }, C.cache = function(v) {
    return function() {
      return v.apply(null, arguments);
    };
  }, C.cacheSignal = function() {
    return null;
  }, C.cloneElement = function(v, E, M) {
    if (v == null)
      throw Error(
        "The argument must be a React element, but you passed " + v + "."
      );
    var D = ql({}, v.props), Y = v.key;
    if (E != null)
      for (j in E.key !== void 0 && (Y = "" + E.key), E)
        !jl.call(E, j) || j === "key" || j === "__self" || j === "__source" || j === "ref" && E.ref === void 0 || (D[j] = E[j]);
    var j = arguments.length - 2;
    if (j === 1) D.children = M;
    else if (1 < j) {
      for (var F = Array(j), Cl = 0; Cl < j; Cl++)
        F[Cl] = arguments[Cl + 2];
      D.children = F;
    }
    return At(v.type, Y, D);
  }, C.createContext = function(v) {
    return v = {
      $$typeof: Al,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: dl,
      _context: v
    }, v;
  }, C.createElement = function(v, E, M) {
    var D, Y = {}, j = null;
    if (E != null)
      for (D in E.key !== void 0 && (j = "" + E.key), E)
        jl.call(E, D) && D !== "key" && D !== "__self" && D !== "__source" && (Y[D] = E[D]);
    var F = arguments.length - 2;
    if (F === 1) Y.children = M;
    else if (1 < F) {
      for (var Cl = Array(F), hl = 0; hl < F; hl++)
        Cl[hl] = arguments[hl + 2];
      Y.children = Cl;
    }
    if (v && v.defaultProps)
      for (D in F = v.defaultProps, F)
        Y[D] === void 0 && (Y[D] = F[D]);
    return At(v, j, Y);
  }, C.createRef = function() {
    return { current: null };
  }, C.forwardRef = function(v) {
    return { $$typeof: Ml, render: v };
  }, C.isValidElement = _t, C.lazy = function(v) {
    return {
      $$typeof: $,
      _payload: { _status: -1, _result: v },
      _init: q
    };
  }, C.memo = function(v, E) {
    return {
      $$typeof: A,
      type: v,
      compare: E === void 0 ? null : E
    };
  }, C.startTransition = function(v) {
    var E = L.T, M = {};
    L.T = M;
    try {
      var D = v(), Y = L.S;
      Y !== null && Y(M, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(Gl, P);
    } catch (j) {
      P(j);
    } finally {
      E !== null && M.types !== null && (E.types = M.types), L.T = E;
    }
  }, C.unstable_useCacheRefresh = function() {
    return L.H.useCacheRefresh();
  }, C.use = function(v) {
    return L.H.use(v);
  }, C.useActionState = function(v, E, M) {
    return L.H.useActionState(v, E, M);
  }, C.useCallback = function(v, E) {
    return L.H.useCallback(v, E);
  }, C.useContext = function(v) {
    return L.H.useContext(v);
  }, C.useDebugValue = function() {
  }, C.useDeferredValue = function(v, E) {
    return L.H.useDeferredValue(v, E);
  }, C.useEffect = function(v, E) {
    return L.H.useEffect(v, E);
  }, C.useEffectEvent = function(v) {
    return L.H.useEffectEvent(v);
  }, C.useId = function() {
    return L.H.useId();
  }, C.useImperativeHandle = function(v, E, M) {
    return L.H.useImperativeHandle(v, E, M);
  }, C.useInsertionEffect = function(v, E) {
    return L.H.useInsertionEffect(v, E);
  }, C.useLayoutEffect = function(v, E) {
    return L.H.useLayoutEffect(v, E);
  }, C.useMemo = function(v, E) {
    return L.H.useMemo(v, E);
  }, C.useOptimistic = function(v, E) {
    return L.H.useOptimistic(v, E);
  }, C.useReducer = function(v, E, M) {
    return L.H.useReducer(v, E, M);
  }, C.useRef = function(v) {
    return L.H.useRef(v);
  }, C.useState = function(v) {
    return L.H.useState(v);
  }, C.useSyncExternalStore = function(v, E, M) {
    return L.H.useSyncExternalStore(
      v,
      E,
      M
    );
  }, C.useTransition = function() {
    return L.H.useTransition();
  }, C.version = "19.2.7", C;
}
var g1;
function mi() {
  return g1 || (g1 = 1, ci.exports = km()), ci.exports;
}
var Im = mi();
const Tu = /* @__PURE__ */ Wm(Im);
var ii = { exports: {} }, Te = {}, yi = { exports: {} }, vi = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b1;
function Pm() {
  return b1 || (b1 = 1, (function(_) {
    function al(b, O) {
      var q = b.length;
      b.push(O);
      l: for (; 0 < q; ) {
        var P = q - 1 >>> 1, el = b[P];
        if (0 < vl(el, O))
          b[P] = O, b[q] = el, q = P;
        else break l;
      }
    }
    function Z(b) {
      return b.length === 0 ? null : b[0];
    }
    function o(b) {
      if (b.length === 0) return null;
      var O = b[0], q = b.pop();
      if (q !== O) {
        b[0] = q;
        l: for (var P = 0, el = b.length, v = el >>> 1; P < v; ) {
          var E = 2 * (P + 1) - 1, M = b[E], D = E + 1, Y = b[D];
          if (0 > vl(M, q))
            D < el && 0 > vl(Y, M) ? (b[P] = Y, b[D] = q, P = D) : (b[P] = M, b[E] = q, P = E);
          else if (D < el && 0 > vl(Y, q))
            b[P] = Y, b[D] = q, P = D;
          else break l;
        }
      }
      return O;
    }
    function vl(b, O) {
      var q = b.sortIndex - O.sortIndex;
      return q !== 0 ? q : b.id - O.id;
    }
    if (_.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var dl = performance;
      _.unstable_now = function() {
        return dl.now();
      };
    } else {
      var Al = Date, Ml = Al.now();
      _.unstable_now = function() {
        return Al.now() - Ml;
      };
    }
    var H = [], A = [], $ = 1, R = null, il = 3, wl = !1, Bl = !1, ql = !1, Ut = !1, Wl = typeof setTimeout == "function" ? setTimeout : null, Wt = typeof clearTimeout == "function" ? clearTimeout : null, Nl = typeof setImmediate < "u" ? setImmediate : null;
    function nt(b) {
      for (var O = Z(A); O !== null; ) {
        if (O.callback === null) o(A);
        else if (O.startTime <= b)
          o(A), O.sortIndex = O.expirationTime, al(H, O);
        else break;
        O = Z(A);
      }
    }
    function Et(b) {
      if (ql = !1, nt(b), !Bl)
        if (Z(H) !== null)
          Bl = !0, Gl || (Gl = !0, Xl());
        else {
          var O = Z(A);
          O !== null && gt(Et, O.startTime - b);
        }
    }
    var Gl = !1, L = -1, jl = 5, At = -1;
    function Zu() {
      return Ut ? !0 : !(_.unstable_now() - At < jl);
    }
    function _t() {
      if (Ut = !1, Gl) {
        var b = _.unstable_now();
        At = b;
        var O = !0;
        try {
          l: {
            Bl = !1, ql && (ql = !1, Wt(L), L = -1), wl = !0;
            var q = il;
            try {
              t: {
                for (nt(b), R = Z(H); R !== null && !(R.expirationTime > b && Zu()); ) {
                  var P = R.callback;
                  if (typeof P == "function") {
                    R.callback = null, il = R.priorityLevel;
                    var el = P(
                      R.expirationTime <= b
                    );
                    if (b = _.unstable_now(), typeof el == "function") {
                      R.callback = el, nt(b), O = !0;
                      break t;
                    }
                    R === Z(H) && o(H), nt(b);
                  } else o(H);
                  R = Z(H);
                }
                if (R !== null) O = !0;
                else {
                  var v = Z(A);
                  v !== null && gt(
                    Et,
                    v.startTime - b
                  ), O = !1;
                }
              }
              break l;
            } finally {
              R = null, il = q, wl = !1;
            }
            O = void 0;
          }
        } finally {
          O ? Xl() : Gl = !1;
        }
      }
    }
    var Xl;
    if (typeof Nl == "function")
      Xl = function() {
        Nl(_t);
      };
    else if (typeof MessageChannel < "u") {
      var Eu = new MessageChannel(), pt = Eu.port2;
      Eu.port1.onmessage = _t, Xl = function() {
        pt.postMessage(null);
      };
    } else
      Xl = function() {
        Wl(_t, 0);
      };
    function gt(b, O) {
      L = Wl(function() {
        b(_.unstable_now());
      }, O);
    }
    _.unstable_IdlePriority = 5, _.unstable_ImmediatePriority = 1, _.unstable_LowPriority = 4, _.unstable_NormalPriority = 3, _.unstable_Profiling = null, _.unstable_UserBlockingPriority = 2, _.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, _.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : jl = 0 < b ? Math.floor(1e3 / b) : 5;
    }, _.unstable_getCurrentPriorityLevel = function() {
      return il;
    }, _.unstable_next = function(b) {
      switch (il) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = il;
      }
      var q = il;
      il = O;
      try {
        return b();
      } finally {
        il = q;
      }
    }, _.unstable_requestPaint = function() {
      Ut = !0;
    }, _.unstable_runWithPriority = function(b, O) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var q = il;
      il = b;
      try {
        return O();
      } finally {
        il = q;
      }
    }, _.unstable_scheduleCallback = function(b, O, q) {
      var P = _.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? P + q : P) : q = P, b) {
        case 1:
          var el = -1;
          break;
        case 2:
          el = 250;
          break;
        case 5:
          el = 1073741823;
          break;
        case 4:
          el = 1e4;
          break;
        default:
          el = 5e3;
      }
      return el = q + el, b = {
        id: $++,
        callback: O,
        priorityLevel: b,
        startTime: q,
        expirationTime: el,
        sortIndex: -1
      }, q > P ? (b.sortIndex = q, al(A, b), Z(H) === null && b === Z(A) && (ql ? (Wt(L), L = -1) : ql = !0, gt(Et, q - P))) : (b.sortIndex = el, al(H, b), Bl || wl || (Bl = !0, Gl || (Gl = !0, Xl()))), b;
    }, _.unstable_shouldYield = Zu, _.unstable_wrapCallback = function(b) {
      var O = il;
      return function() {
        var q = il;
        il = O;
        try {
          return b.apply(this, arguments);
        } finally {
          il = q;
        }
      };
    };
  })(vi)), vi;
}
var z1;
function ld() {
  return z1 || (z1 = 1, yi.exports = Pm()), yi.exports;
}
var si = { exports: {} }, Rl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var T1;
function td() {
  if (T1) return Rl;
  T1 = 1;
  var _ = mi();
  function al(H) {
    var A = "https://react.dev/errors/" + H;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var $ = 2; $ < arguments.length; $++)
        A += "&args[]=" + encodeURIComponent(arguments[$]);
    }
    return "Minified React error #" + H + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Z() {
  }
  var o = {
    d: {
      f: Z,
      r: function() {
        throw Error(al(522));
      },
      D: Z,
      C: Z,
      L: Z,
      m: Z,
      X: Z,
      S: Z,
      M: Z
    },
    p: 0,
    findDOMNode: null
  }, vl = Symbol.for("react.portal");
  function dl(H, A, $) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: vl,
      key: R == null ? null : "" + R,
      children: H,
      containerInfo: A,
      implementation: $
    };
  }
  var Al = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Ml(H, A) {
    if (H === "font") return "";
    if (typeof A == "string")
      return A === "use-credentials" ? A : "";
  }
  return Rl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Rl.createPortal = function(H, A) {
    var $ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
      throw Error(al(299));
    return dl(H, A, null, $);
  }, Rl.flushSync = function(H) {
    var A = Al.T, $ = o.p;
    try {
      if (Al.T = null, o.p = 2, H) return H();
    } finally {
      Al.T = A, o.p = $, o.d.f();
    }
  }, Rl.preconnect = function(H, A) {
    typeof H == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, o.d.C(H, A));
  }, Rl.prefetchDNS = function(H) {
    typeof H == "string" && o.d.D(H);
  }, Rl.preinit = function(H, A) {
    if (typeof H == "string" && A && typeof A.as == "string") {
      var $ = A.as, R = Ml($, A.crossOrigin), il = typeof A.integrity == "string" ? A.integrity : void 0, wl = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
      $ === "style" ? o.d.S(
        H,
        typeof A.precedence == "string" ? A.precedence : void 0,
        {
          crossOrigin: R,
          integrity: il,
          fetchPriority: wl
        }
      ) : $ === "script" && o.d.X(H, {
        crossOrigin: R,
        integrity: il,
        fetchPriority: wl,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0
      });
    }
  }, Rl.preinitModule = function(H, A) {
    if (typeof H == "string")
      if (typeof A == "object" && A !== null) {
        if (A.as == null || A.as === "script") {
          var $ = Ml(
            A.as,
            A.crossOrigin
          );
          o.d.M(H, {
            crossOrigin: $,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
            nonce: typeof A.nonce == "string" ? A.nonce : void 0
          });
        }
      } else A == null && o.d.M(H);
  }, Rl.preload = function(H, A) {
    if (typeof H == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
      var $ = A.as, R = Ml($, A.crossOrigin);
      o.d.L(H, $, {
        crossOrigin: R,
        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0,
        type: typeof A.type == "string" ? A.type : void 0,
        fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
        referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
        imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
        imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
        media: typeof A.media == "string" ? A.media : void 0
      });
    }
  }, Rl.preloadModule = function(H, A) {
    if (typeof H == "string")
      if (A) {
        var $ = Ml(A.as, A.crossOrigin);
        o.d.m(H, {
          as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
          crossOrigin: $,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0
        });
      } else o.d.m(H);
  }, Rl.requestFormReset = function(H) {
    o.d.r(H);
  }, Rl.unstable_batchedUpdates = function(H, A) {
    return H(A);
  }, Rl.useFormState = function(H, A, $) {
    return Al.H.useFormState(H, A, $);
  }, Rl.useFormStatus = function() {
    return Al.H.useHostTransitionStatus();
  }, Rl.version = "19.2.7", Rl;
}
var E1;
function ud() {
  if (E1) return si.exports;
  E1 = 1;
  function _() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (al) {
        console.error(al);
      }
  }
  return _(), si.exports = td(), si.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A1;
function ad() {
  if (A1) return Te;
  A1 = 1;
  var _ = ld(), al = mi(), Z = ud();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function vl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function dl(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function Al(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ml(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function H(l) {
    if (dl(l) !== l)
      throw Error(o(188));
  }
  function A(l) {
    var t = l.alternate;
    if (!t) {
      if (t = dl(l), t === null) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return H(e), l;
          if (n === a) return H(e), t;
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (u.alternate !== a) throw Error(o(190));
    }
    if (u.tag !== 3) throw Error(o(188));
    return u.stateNode.current === u ? l : t;
  }
  function $(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = $(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign, il = Symbol.for("react.element"), wl = Symbol.for("react.transitional.element"), Bl = Symbol.for("react.portal"), ql = Symbol.for("react.fragment"), Ut = Symbol.for("react.strict_mode"), Wl = Symbol.for("react.profiler"), Wt = Symbol.for("react.consumer"), Nl = Symbol.for("react.context"), nt = Symbol.for("react.forward_ref"), Et = Symbol.for("react.suspense"), Gl = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), jl = Symbol.for("react.lazy"), At = Symbol.for("react.activity"), Zu = Symbol.for("react.memo_cache_sentinel"), _t = Symbol.iterator;
  function Xl(l) {
    return l === null || typeof l != "object" ? null : (l = _t && l[_t] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Eu = Symbol.for("react.client.reference");
  function pt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Eu ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case Wl:
        return "Profiler";
      case Ut:
        return "StrictMode";
      case Et:
        return "Suspense";
      case Gl:
        return "SuspenseList";
      case At:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Bl:
          return "Portal";
        case Nl:
          return l.displayName || "Context";
        case Wt:
          return (l._context.displayName || "Context") + ".Consumer";
        case nt:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case L:
          return t = l.displayName || null, t !== null ? t : pt(l.type) || "Memo";
        case jl:
          t = l._payload, l = l._init;
          try {
            return pt(l(t));
          } catch {
          }
      }
    return null;
  }
  var gt = Array.isArray, b = al.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = Z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, P = [], el = -1;
  function v(l) {
    return { current: l };
  }
  function E(l) {
    0 > el || (l.current = P[el], P[el] = null, el--);
  }
  function M(l, t) {
    el++, P[el] = l.current, l.current = t;
  }
  var D = v(null), Y = v(null), j = v(null), F = v(null);
  function Cl(l, t) {
    switch (M(j, t), M(Y, l), M(D, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Gv(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Gv(t), l = jv(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    E(D), M(D, l);
  }
  function hl() {
    E(D), E(Y), E(j);
  }
  function ra(l) {
    l.memoizedState !== null && M(F, l);
    var t = D.current, u = jv(t, l.type);
    t !== u && (M(Y, l), M(D, u));
  }
  function Ee(l) {
    Y.current === l && (E(D), E(Y)), F.current === l && (E(F), oe._currentValue = q);
  }
  var Zn, di;
  function Au(l) {
    if (Zn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Zn = t && t[1] || "", di = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Zn + l + di;
  }
  var xn = !1;
  function Vn(l, t) {
    if (!l || xn) return "";
    xn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var T = function() {
                throw Error();
              };
              if (Object.defineProperty(T.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(T, []);
                } catch (S) {
                  var h = S;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (S) {
                  h = S;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (S) {
                h = S;
              }
              (T = l()) && typeof T.catch == "function" && T.catch(function() {
              });
            }
          } catch (S) {
            if (S && h && typeof S.stack == "string")
              return [S.stack, h.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), d = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < d.length && !d[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === i.length || e === d.length)
          for (a = i.length - 1, e = d.length - 1; 1 <= a && 0 <= e && i[a] !== d[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== d[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || i[a] !== d[e]) {
                  var g = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      xn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Au(u) : "";
  }
  function M1(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Au(l.type);
      case 16:
        return Au("Lazy");
      case 13:
        return l.child !== t && t !== null ? Au("Suspense Fallback") : Au("Suspense");
      case 19:
        return Au("SuspenseList");
      case 0:
      case 15:
        return Vn(l.type, !1);
      case 11:
        return Vn(l.type.render, !1);
      case 1:
        return Vn(l.type, !0);
      case 31:
        return Au("Activity");
      default:
        return "";
    }
  }
  function hi(l) {
    try {
      var t = "", u = null;
      do
        t += M1(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ln = Object.prototype.hasOwnProperty, Kn = _.unstable_scheduleCallback, Jn = _.unstable_cancelCallback, r1 = _.unstable_shouldYield, D1 = _.unstable_requestPaint, $l = _.unstable_now, U1 = _.unstable_getCurrentPriorityLevel, oi = _.unstable_ImmediatePriority, Si = _.unstable_UserBlockingPriority, Ae = _.unstable_NormalPriority, p1 = _.unstable_LowPriority, gi = _.unstable_IdlePriority, H1 = _.log, N1 = _.unstable_setDisableYieldValue, Da = null, Fl = null;
  function $t(l) {
    if (typeof H1 == "function" && N1(l), Fl && typeof Fl.setStrictMode == "function")
      try {
        Fl.setStrictMode(Da, l);
      } catch {
      }
  }
  var kl = Math.clz32 ? Math.clz32 : C1, R1 = Math.log, q1 = Math.LN2;
  function C1(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (R1(l) / q1 | 0) | 0;
  }
  var _e = 256, Oe = 262144, Me = 4194304;
  function _u(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function re(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = _u(a) : (f &= c, f !== 0 ? e = _u(f) : u || (u = c & ~l, u !== 0 && (e = _u(u))))) : (c = a & ~n, c !== 0 ? e = _u(c) : f !== 0 ? e = _u(f) : u || (u = a & ~l, u !== 0 && (e = _u(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Ua(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Y1(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bi() {
    var l = Me;
    return Me <<= 1, (Me & 62914560) === 0 && (Me = 4194304), l;
  }
  function wn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function pa(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function B1(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, d = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var g = 31 - kl(u), T = 1 << g;
      c[g] = 0, i[g] = -1;
      var h = d[g];
      if (h !== null)
        for (d[g] = null, g = 0; g < h.length; g++) {
          var S = h[g];
          S !== null && (S.lane &= -536870913);
        }
      u &= ~T;
    }
    a !== 0 && zi(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function zi(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - kl(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function Ti(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - kl(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Ei(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : Wn(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function Wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function $n(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ai() {
    var l = O.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : c1(l.type));
  }
  function _i(l, t) {
    var u = O.p;
    try {
      return O.p = l, t();
    } finally {
      O.p = u;
    }
  }
  var Ft = Math.random().toString(36).slice(2), rl = "__reactFiber$" + Ft, Ql = "__reactProps$" + Ft, xu = "__reactContainer$" + Ft, Fn = "__reactEvents$" + Ft, G1 = "__reactListeners$" + Ft, j1 = "__reactHandles$" + Ft, Oi = "__reactResources$" + Ft, Ha = "__reactMarker$" + Ft;
  function kn(l) {
    delete l[rl], delete l[Ql], delete l[Fn], delete l[G1], delete l[j1];
  }
  function Vu(l) {
    var t = l[rl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[xu] || u[rl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Kv(l); l !== null; ) {
            if (u = l[rl]) return u;
            l = Kv(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Lu(l) {
    if (l = l[rl] || l[xu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Na(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function Ku(l) {
    var t = l[Oi];
    return t || (t = l[Oi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function _l(l) {
    l[Ha] = !0;
  }
  var Mi = /* @__PURE__ */ new Set(), ri = {};
  function Ou(l, t) {
    Ju(l, t), Ju(l + "Capture", t);
  }
  function Ju(l, t) {
    for (ri[l] = t, l = 0; l < t.length; l++)
      Mi.add(t[l]);
  }
  var X1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Di = {}, Ui = {};
  function Q1(l) {
    return Ln.call(Ui, l) ? !0 : Ln.call(Di, l) ? !1 : X1.test(l) ? Ui[l] = !0 : (Di[l] = !0, !1);
  }
  function De(l, t, u) {
    if (Q1(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function Ue(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Ht(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  function ft(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function pi(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Z1(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          u = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(f) {
          u = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function In(l) {
    if (!l._valueTracker) {
      var t = pi(l) ? "checked" : "value";
      l._valueTracker = Z1(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Hi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = pi(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function pe(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var x1 = /[\n"\\]/g;
  function ct(l) {
    return l.replace(
      x1,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pn(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ft(t)) : l.value !== "" + ft(t) && (l.value = "" + ft(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? lf(l, f, ft(t)) : u != null ? lf(l, f, ft(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ft(c) : l.removeAttribute("name");
  }
  function Ni(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        In(l);
        return;
      }
      u = u != null ? "" + ft(u) : "", t = t != null ? "" + ft(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), In(l);
  }
  function lf(l, t, u) {
    t === "number" && pe(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function wu(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ft(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ri(l, t, u) {
    if (t != null && (t = "" + ft(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + ft(u) : "";
  }
  function qi(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(o(92));
        if (gt(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = ft(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), In(l);
  }
  function Wu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var V1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ci(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || V1.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Yi(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && Ci(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Ci(l, n, t[n]);
  }
  function tf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var L1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), K1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function He(l) {
    return K1.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Nt() {
  }
  var uf = null;
  function af(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var $u = null, Fu = null;
  function Bi(l) {
    var t = Lu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Ql] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Pn(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + ct(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Ql] || null;
                if (!e) throw Error(o(90));
                Pn(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && Hi(a);
          }
          break l;
        case "textarea":
          Ri(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && wu(l, !!u.multiple, t, !1);
      }
    }
  }
  var ef = !1;
  function Gi(l, t, u) {
    if (ef) return l(t, u);
    ef = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (ef = !1, ($u !== null || Fu !== null) && (bn(), $u && (t = $u, l = Fu, Fu = $u = null, Bi(t), l)))
        for (t = 0; t < l.length; t++) Bi(l[t]);
    }
  }
  function Ra(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Ql] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        o(231, t, typeof u)
      );
    return u;
  }
  var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nf = !1;
  if (Rt)
    try {
      var qa = {};
      Object.defineProperty(qa, "passive", {
        get: function() {
          nf = !0;
        }
      }), window.addEventListener("test", qa, qa), window.removeEventListener("test", qa, qa);
    } catch {
      nf = !1;
    }
  var kt = null, ff = null, Ne = null;
  function ji() {
    if (Ne) return Ne;
    var l, t = ff, u = t.length, a, e = "value" in kt ? kt.value : kt.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return Ne = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function qe() {
    return !0;
  }
  function Xi() {
    return !1;
  }
  function Zl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? qe : Xi, this.isPropagationStopped = Xi, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = qe);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = qe);
      },
      persist: function() {
      },
      isPersistent: qe
    }), t;
  }
  var Mu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ce = Zl(Mu), Ca = R({}, Mu, { view: 0, detail: 0 }), J1 = Zl(Ca), cf, yf, Ya, Ye = R({}, Ca, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: sf,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ya && (Ya && l.type === "mousemove" ? (cf = l.screenX - Ya.screenX, yf = l.screenY - Ya.screenY) : yf = cf = 0, Ya = l), cf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : yf;
    }
  }), Qi = Zl(Ye), w1 = R({}, Ye, { dataTransfer: 0 }), W1 = Zl(w1), $1 = R({}, Ca, { relatedTarget: 0 }), vf = Zl($1), F1 = R({}, Mu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), k1 = Zl(F1), I1 = R({}, Mu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), P1 = Zl(I1), ls = R({}, Mu, { data: 0 }), Zi = Zl(ls), ts = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, us = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, as = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function es(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = as[l]) ? !!t[l] : !1;
  }
  function sf() {
    return es;
  }
  var ns = R({}, Ca, {
    key: function(l) {
      if (l.key) {
        var t = ts[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? us[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sf,
    charCode: function(l) {
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), fs = Zl(ns), cs = R({}, Ye, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), xi = Zl(cs), is = R({}, Ca, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sf
  }), ys = Zl(is), vs = R({}, Mu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ss = Zl(vs), ms = R({}, Ye, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ds = Zl(ms), hs = R({}, Mu, {
    newState: 0,
    oldState: 0
  }), os = Zl(hs), Ss = [9, 13, 27, 32], mf = Rt && "CompositionEvent" in window, Ba = null;
  Rt && "documentMode" in document && (Ba = document.documentMode);
  var gs = Rt && "TextEvent" in window && !Ba, Vi = Rt && (!mf || Ba && 8 < Ba && 11 >= Ba), Li = " ", Ki = !1;
  function Ji(l, t) {
    switch (l) {
      case "keyup":
        return Ss.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ku = !1;
  function bs(l, t) {
    switch (l) {
      case "compositionend":
        return wi(t);
      case "keypress":
        return t.which !== 32 ? null : (Ki = !0, Li);
      case "textInput":
        return l = t.data, l === Li && Ki ? null : l;
      default:
        return null;
    }
  }
  function zs(l, t) {
    if (ku)
      return l === "compositionend" || !mf && Ji(l, t) ? (l = ji(), Ne = ff = kt = null, ku = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Vi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ts = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Wi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Ts[l.type] : t === "textarea";
  }
  function $i(l, t, u, a) {
    $u ? Fu ? Fu.push(a) : Fu = [a] : $u = a, t = Mn(t, "onChange"), 0 < t.length && (u = new Ce(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Ga = null, ja = null;
  function Es(l) {
    Nv(l, 0);
  }
  function Be(l) {
    var t = Na(l);
    if (Hi(t)) return l;
  }
  function Fi(l, t) {
    if (l === "change") return t;
  }
  var ki = !1;
  if (Rt) {
    var df;
    if (Rt) {
      var hf = "oninput" in document;
      if (!hf) {
        var Ii = document.createElement("div");
        Ii.setAttribute("oninput", "return;"), hf = typeof Ii.oninput == "function";
      }
      df = hf;
    } else df = !1;
    ki = df && (!document.documentMode || 9 < document.documentMode);
  }
  function Pi() {
    Ga && (Ga.detachEvent("onpropertychange", l0), ja = Ga = null);
  }
  function l0(l) {
    if (l.propertyName === "value" && Be(ja)) {
      var t = [];
      $i(
        t,
        ja,
        l,
        af(l)
      ), Gi(Es, t);
    }
  }
  function As(l, t, u) {
    l === "focusin" ? (Pi(), Ga = t, ja = u, Ga.attachEvent("onpropertychange", l0)) : l === "focusout" && Pi();
  }
  function _s(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Be(ja);
  }
  function Os(l, t) {
    if (l === "click") return Be(t);
  }
  function Ms(l, t) {
    if (l === "input" || l === "change")
      return Be(t);
  }
  function rs(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Il = typeof Object.is == "function" ? Object.is : rs;
  function Xa(l, t) {
    if (Il(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Ln.call(t, e) || !Il(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function t0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function u0(l, t) {
    var u = t0(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = t0(u);
    }
  }
  function a0(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? a0(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function e0(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = pe(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = pe(l.document);
    }
    return t;
  }
  function of(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Ds = Rt && "documentMode" in document && 11 >= document.documentMode, Iu = null, Sf = null, Qa = null, gf = !1;
  function n0(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    gf || Iu == null || Iu !== pe(a) || (a = Iu, "selectionStart" in a && of(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Qa && Xa(Qa, a) || (Qa = a, a = Mn(Sf, "onSelect"), 0 < a.length && (t = new Ce(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Iu)));
  }
  function ru(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Pu = {
    animationend: ru("Animation", "AnimationEnd"),
    animationiteration: ru("Animation", "AnimationIteration"),
    animationstart: ru("Animation", "AnimationStart"),
    transitionrun: ru("Transition", "TransitionRun"),
    transitionstart: ru("Transition", "TransitionStart"),
    transitioncancel: ru("Transition", "TransitionCancel"),
    transitionend: ru("Transition", "TransitionEnd")
  }, bf = {}, f0 = {};
  Rt && (f0 = document.createElement("div").style, "AnimationEvent" in window || (delete Pu.animationend.animation, delete Pu.animationiteration.animation, delete Pu.animationstart.animation), "TransitionEvent" in window || delete Pu.transitionend.transition);
  function Du(l) {
    if (bf[l]) return bf[l];
    if (!Pu[l]) return l;
    var t = Pu[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in f0)
        return bf[l] = t[u];
    return l;
  }
  var c0 = Du("animationend"), i0 = Du("animationiteration"), y0 = Du("animationstart"), Us = Du("transitionrun"), ps = Du("transitionstart"), Hs = Du("transitioncancel"), v0 = Du("transitionend"), s0 = /* @__PURE__ */ new Map(), zf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  zf.push("scrollEnd");
  function bt(l, t) {
    s0.set(l, t), Ou(t, [l]);
  }
  var Ge = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, it = [], la = 0, Tf = 0;
  function je() {
    for (var l = la, t = Tf = la = 0; t < l; ) {
      var u = it[t];
      it[t++] = null;
      var a = it[t];
      it[t++] = null;
      var e = it[t];
      it[t++] = null;
      var n = it[t];
      if (it[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && m0(u, e, n);
    }
  }
  function Xe(l, t, u, a) {
    it[la++] = l, it[la++] = t, it[la++] = u, it[la++] = a, Tf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Ef(l, t, u, a) {
    return Xe(l, t, u, a), Qe(l);
  }
  function Uu(l, t) {
    return Xe(l, null, null, t), Qe(l);
  }
  function m0(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - kl(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Qe(l) {
    if (50 < ie)
      throw ie = 0, Hc = null, Error(o(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ta = {};
  function Ns(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pl(l, t, u, a) {
    return new Ns(l, t, u, a);
  }
  function Af(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function qt(l, t) {
    var u = l.alternate;
    return u === null ? (u = Pl(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function d0(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Ze(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") Af(l) && (f = 1);
    else if (typeof l == "string")
      f = Bm(
        l,
        u,
        D.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case At:
          return l = Pl(31, u, t, e), l.elementType = At, l.lanes = n, l;
        case ql:
          return pu(u.children, e, n, t);
        case Ut:
          f = 8, e |= 24;
          break;
        case Wl:
          return l = Pl(12, u, t, e | 2), l.elementType = Wl, l.lanes = n, l;
        case Et:
          return l = Pl(13, u, t, e), l.elementType = Et, l.lanes = n, l;
        case Gl:
          return l = Pl(19, u, t, e), l.elementType = Gl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Nl:
                f = 10;
                break l;
              case Wt:
                f = 9;
                break l;
              case nt:
                f = 11;
                break l;
              case L:
                f = 14;
                break l;
              case jl:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            o(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = Pl(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function pu(l, t, u, a) {
    return l = Pl(7, l, a, t), l.lanes = u, l;
  }
  function _f(l, t, u) {
    return l = Pl(6, l, null, t), l.lanes = u, l;
  }
  function h0(l) {
    var t = Pl(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Of(l, t, u) {
    return t = Pl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var o0 = /* @__PURE__ */ new WeakMap();
  function yt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = o0.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: hi(t)
      }, o0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: hi(t)
    };
  }
  var ua = [], aa = 0, xe = null, Za = 0, vt = [], st = 0, It = null, Ot = 1, Mt = "";
  function Ct(l, t) {
    ua[aa++] = Za, ua[aa++] = xe, xe = l, Za = t;
  }
  function S0(l, t, u) {
    vt[st++] = Ot, vt[st++] = Mt, vt[st++] = It, It = l;
    var a = Ot;
    l = Mt;
    var e = 32 - kl(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - kl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Ot = 1 << 32 - kl(t) + e | u << e | a, Mt = n + l;
    } else
      Ot = 1 << n | u << e | a, Mt = l;
  }
  function Mf(l) {
    l.return !== null && (Ct(l, 1), S0(l, 1, 0));
  }
  function rf(l) {
    for (; l === xe; )
      xe = ua[--aa], ua[aa] = null, Za = ua[--aa], ua[aa] = null;
    for (; l === It; )
      It = vt[--st], vt[st] = null, Mt = vt[--st], vt[st] = null, Ot = vt[--st], vt[st] = null;
  }
  function g0(l, t) {
    vt[st++] = Ot, vt[st++] = Mt, vt[st++] = It, Ot = t.id, Mt = t.overflow, It = l;
  }
  var Dl = null, fl = null, K = !1, Pt = null, mt = !1, Df = Error(o(519));
  function lu(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw xa(yt(t, l)), Df;
  }
  function b0(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[rl] = l, t[Ql] = a, u) {
      case "dialog":
        Q("cancel", t), Q("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Q("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ve.length; u++)
          Q(ve[u], t);
        break;
      case "source":
        Q("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Q("error", t), Q("load", t);
        break;
      case "details":
        Q("toggle", t);
        break;
      case "input":
        Q("invalid", t), Ni(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        Q("invalid", t);
        break;
      case "textarea":
        Q("invalid", t), qi(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || Yv(t.textContent, u) ? (a.popover != null && (Q("beforetoggle", t), Q("toggle", t)), a.onScroll != null && Q("scroll", t), a.onScrollEnd != null && Q("scrollend", t), a.onClick != null && (t.onclick = Nt), t = !0) : t = !1, t || lu(l, !0);
  }
  function z0(l) {
    for (Dl = l.return; Dl; )
      switch (Dl.tag) {
        case 5:
        case 31:
        case 13:
          mt = !1;
          return;
        case 27:
        case 3:
          mt = !0;
          return;
        default:
          Dl = Dl.return;
      }
  }
  function ea(l) {
    if (l !== Dl) return !1;
    if (!K) return z0(l), K = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Kc(l.type, l.memoizedProps)), u = !u), u && fl && lu(l), z0(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      fl = Lv(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      fl = Lv(l);
    } else
      t === 27 ? (t = fl, hu(l.type) ? (l = Fc, Fc = null, fl = l) : fl = t) : fl = Dl ? ht(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Hu() {
    fl = Dl = null, K = !1;
  }
  function Uf() {
    var l = Pt;
    return l !== null && (Kl === null ? Kl = l : Kl.push.apply(
      Kl,
      l
    ), Pt = null), l;
  }
  function xa(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var pf = v(null), Nu = null, Yt = null;
  function tu(l, t, u) {
    M(pf, t._currentValue), t._currentValue = u;
  }
  function Bt(l) {
    l._currentValue = pf.current, E(pf);
  }
  function Hf(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Nf(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), Hf(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(o(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Hf(f, u, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function na(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(o(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          Il(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === F.current) {
        if (f = e.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(oe) : l = [oe]);
      }
      e = e.return;
    }
    l !== null && Nf(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Ve(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Il(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ru(l) {
    Nu = l, Yt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ul(l) {
    return T0(Nu, l);
  }
  function Le(l, t) {
    return Nu === null && Ru(l), T0(l, t);
  }
  function T0(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Yt === null) {
      if (l === null) throw Error(o(308));
      Yt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Yt = Yt.next = t;
    return u;
  }
  var Rs = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, qs = _.unstable_scheduleCallback, Cs = _.unstable_NormalPriority, gl = {
    $$typeof: Nl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Rf() {
    return {
      controller: new Rs(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Va(l) {
    l.refCount--, l.refCount === 0 && qs(Cs, function() {
      l.controller.abort();
    });
  }
  var La = null, qf = 0, fa = 0, ca = null;
  function Ys(l, t) {
    if (La === null) {
      var u = La = [];
      qf = 0, fa = Bc(), ca = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return qf++, t.then(E0, E0), t;
  }
  function E0() {
    if (--qf === 0 && La !== null) {
      ca !== null && (ca.status = "fulfilled");
      var l = La;
      La = null, fa = 0, ca = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Bs(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var A0 = b.S;
  b.S = function(l, t) {
    nv = $l(), typeof t == "object" && t !== null && typeof t.then == "function" && Ys(l, t), A0 !== null && A0(l, t);
  };
  var qu = v(null);
  function Cf() {
    var l = qu.current;
    return l !== null ? l : nl.pooledCache;
  }
  function Ke(l, t) {
    t === null ? M(qu, qu.current) : M(qu, t.pool);
  }
  function _0() {
    var l = Cf();
    return l === null ? null : { parent: gl._currentValue, pool: l };
  }
  var ia = Error(o(460)), Yf = Error(o(474)), Je = Error(o(542)), we = { then: function() {
  } };
  function O0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function M0(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Nt, Nt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, D0(l), l;
      default:
        if (typeof t.status == "string") t.then(Nt, Nt);
        else {
          if (l = nl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(o(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, D0(l), l;
        }
        throw Yu = t, ia;
    }
  }
  function Cu(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Yu = u, ia) : u;
    }
  }
  var Yu = null;
  function r0() {
    if (Yu === null) throw Error(o(459));
    var l = Yu;
    return Yu = null, l;
  }
  function D0(l) {
    if (l === ia || l === Je)
      throw Error(o(483));
  }
  var ya = null, Ka = 0;
  function We(l) {
    var t = Ka;
    return Ka += 1, ya === null && (ya = []), M0(ya, l, t);
  }
  function Ja(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $e(l, t) {
    throw t.$$typeof === il ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(
      o(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function U0(l) {
    function t(s, y) {
      if (l) {
        var m = s.deletions;
        m === null ? (s.deletions = [y], s.flags |= 16) : m.push(y);
      }
    }
    function u(s, y) {
      if (!l) return null;
      for (; y !== null; )
        t(s, y), y = y.sibling;
      return null;
    }
    function a(s) {
      for (var y = /* @__PURE__ */ new Map(); s !== null; )
        s.key !== null ? y.set(s.key, s) : y.set(s.index, s), s = s.sibling;
      return y;
    }
    function e(s, y) {
      return s = qt(s, y), s.index = 0, s.sibling = null, s;
    }
    function n(s, y, m) {
      return s.index = m, l ? (m = s.alternate, m !== null ? (m = m.index, m < y ? (s.flags |= 67108866, y) : m) : (s.flags |= 67108866, y)) : (s.flags |= 1048576, y);
    }
    function f(s) {
      return l && s.alternate === null && (s.flags |= 67108866), s;
    }
    function c(s, y, m, z) {
      return y === null || y.tag !== 6 ? (y = _f(m, s.mode, z), y.return = s, y) : (y = e(y, m), y.return = s, y);
    }
    function i(s, y, m, z) {
      var p = m.type;
      return p === ql ? g(
        s,
        y,
        m.props.children,
        z,
        m.key
      ) : y !== null && (y.elementType === p || typeof p == "object" && p !== null && p.$$typeof === jl && Cu(p) === y.type) ? (y = e(y, m.props), Ja(y, m), y.return = s, y) : (y = Ze(
        m.type,
        m.key,
        m.props,
        null,
        s.mode,
        z
      ), Ja(y, m), y.return = s, y);
    }
    function d(s, y, m, z) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== m.containerInfo || y.stateNode.implementation !== m.implementation ? (y = Of(m, s.mode, z), y.return = s, y) : (y = e(y, m.children || []), y.return = s, y);
    }
    function g(s, y, m, z, p) {
      return y === null || y.tag !== 7 ? (y = pu(
        m,
        s.mode,
        z,
        p
      ), y.return = s, y) : (y = e(y, m), y.return = s, y);
    }
    function T(s, y, m) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = _f(
          "" + y,
          s.mode,
          m
        ), y.return = s, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case wl:
            return m = Ze(
              y.type,
              y.key,
              y.props,
              null,
              s.mode,
              m
            ), Ja(m, y), m.return = s, m;
          case Bl:
            return y = Of(
              y,
              s.mode,
              m
            ), y.return = s, y;
          case jl:
            return y = Cu(y), T(s, y, m);
        }
        if (gt(y) || Xl(y))
          return y = pu(
            y,
            s.mode,
            m,
            null
          ), y.return = s, y;
        if (typeof y.then == "function")
          return T(s, We(y), m);
        if (y.$$typeof === Nl)
          return T(
            s,
            Le(s, y),
            m
          );
        $e(s, y);
      }
      return null;
    }
    function h(s, y, m, z) {
      var p = y !== null ? y.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return p !== null ? null : c(s, y, "" + m, z);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case wl:
            return m.key === p ? i(s, y, m, z) : null;
          case Bl:
            return m.key === p ? d(s, y, m, z) : null;
          case jl:
            return m = Cu(m), h(s, y, m, z);
        }
        if (gt(m) || Xl(m))
          return p !== null ? null : g(s, y, m, z, null);
        if (typeof m.then == "function")
          return h(
            s,
            y,
            We(m),
            z
          );
        if (m.$$typeof === Nl)
          return h(
            s,
            y,
            Le(s, m),
            z
          );
        $e(s, m);
      }
      return null;
    }
    function S(s, y, m, z, p) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return s = s.get(m) || null, c(y, s, "" + z, p);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case wl:
            return s = s.get(
              z.key === null ? m : z.key
            ) || null, i(y, s, z, p);
          case Bl:
            return s = s.get(
              z.key === null ? m : z.key
            ) || null, d(y, s, z, p);
          case jl:
            return z = Cu(z), S(
              s,
              y,
              m,
              z,
              p
            );
        }
        if (gt(z) || Xl(z))
          return s = s.get(m) || null, g(y, s, z, p, null);
        if (typeof z.then == "function")
          return S(
            s,
            y,
            m,
            We(z),
            p
          );
        if (z.$$typeof === Nl)
          return S(
            s,
            y,
            m,
            Le(y, z),
            p
          );
        $e(y, z);
      }
      return null;
    }
    function r(s, y, m, z) {
      for (var p = null, J = null, U = y, G = y = 0, V = null; U !== null && G < m.length; G++) {
        U.index > G ? (V = U, U = null) : V = U.sibling;
        var w = h(
          s,
          U,
          m[G],
          z
        );
        if (w === null) {
          U === null && (U = V);
          break;
        }
        l && U && w.alternate === null && t(s, U), y = n(w, y, G), J === null ? p = w : J.sibling = w, J = w, U = V;
      }
      if (G === m.length)
        return u(s, U), K && Ct(s, G), p;
      if (U === null) {
        for (; G < m.length; G++)
          U = T(s, m[G], z), U !== null && (y = n(
            U,
            y,
            G
          ), J === null ? p = U : J.sibling = U, J = U);
        return K && Ct(s, G), p;
      }
      for (U = a(U); G < m.length; G++)
        V = S(
          U,
          s,
          G,
          m[G],
          z
        ), V !== null && (l && V.alternate !== null && U.delete(
          V.key === null ? G : V.key
        ), y = n(
          V,
          y,
          G
        ), J === null ? p = V : J.sibling = V, J = V);
      return l && U.forEach(function(zu) {
        return t(s, zu);
      }), K && Ct(s, G), p;
    }
    function N(s, y, m, z) {
      if (m == null) throw Error(o(151));
      for (var p = null, J = null, U = y, G = y = 0, V = null, w = m.next(); U !== null && !w.done; G++, w = m.next()) {
        U.index > G ? (V = U, U = null) : V = U.sibling;
        var zu = h(s, U, w.value, z);
        if (zu === null) {
          U === null && (U = V);
          break;
        }
        l && U && zu.alternate === null && t(s, U), y = n(zu, y, G), J === null ? p = zu : J.sibling = zu, J = zu, U = V;
      }
      if (w.done)
        return u(s, U), K && Ct(s, G), p;
      if (U === null) {
        for (; !w.done; G++, w = m.next())
          w = T(s, w.value, z), w !== null && (y = n(w, y, G), J === null ? p = w : J.sibling = w, J = w);
        return K && Ct(s, G), p;
      }
      for (U = a(U); !w.done; G++, w = m.next())
        w = S(U, s, G, w.value, z), w !== null && (l && w.alternate !== null && U.delete(w.key === null ? G : w.key), y = n(w, y, G), J === null ? p = w : J.sibling = w, J = w);
      return l && U.forEach(function(wm) {
        return t(s, wm);
      }), K && Ct(s, G), p;
    }
    function ul(s, y, m, z) {
      if (typeof m == "object" && m !== null && m.type === ql && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case wl:
            l: {
              for (var p = m.key; y !== null; ) {
                if (y.key === p) {
                  if (p = m.type, p === ql) {
                    if (y.tag === 7) {
                      u(
                        s,
                        y.sibling
                      ), z = e(
                        y,
                        m.props.children
                      ), z.return = s, s = z;
                      break l;
                    }
                  } else if (y.elementType === p || typeof p == "object" && p !== null && p.$$typeof === jl && Cu(p) === y.type) {
                    u(
                      s,
                      y.sibling
                    ), z = e(y, m.props), Ja(z, m), z.return = s, s = z;
                    break l;
                  }
                  u(s, y);
                  break;
                } else t(s, y);
                y = y.sibling;
              }
              m.type === ql ? (z = pu(
                m.props.children,
                s.mode,
                z,
                m.key
              ), z.return = s, s = z) : (z = Ze(
                m.type,
                m.key,
                m.props,
                null,
                s.mode,
                z
              ), Ja(z, m), z.return = s, s = z);
            }
            return f(s);
          case Bl:
            l: {
              for (p = m.key; y !== null; ) {
                if (y.key === p)
                  if (y.tag === 4 && y.stateNode.containerInfo === m.containerInfo && y.stateNode.implementation === m.implementation) {
                    u(
                      s,
                      y.sibling
                    ), z = e(y, m.children || []), z.return = s, s = z;
                    break l;
                  } else {
                    u(s, y);
                    break;
                  }
                else t(s, y);
                y = y.sibling;
              }
              z = Of(m, s.mode, z), z.return = s, s = z;
            }
            return f(s);
          case jl:
            return m = Cu(m), ul(
              s,
              y,
              m,
              z
            );
        }
        if (gt(m))
          return r(
            s,
            y,
            m,
            z
          );
        if (Xl(m)) {
          if (p = Xl(m), typeof p != "function") throw Error(o(150));
          return m = p.call(m), N(
            s,
            y,
            m,
            z
          );
        }
        if (typeof m.then == "function")
          return ul(
            s,
            y,
            We(m),
            z
          );
        if (m.$$typeof === Nl)
          return ul(
            s,
            y,
            Le(s, m),
            z
          );
        $e(s, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, y !== null && y.tag === 6 ? (u(s, y.sibling), z = e(y, m), z.return = s, s = z) : (u(s, y), z = _f(m, s.mode, z), z.return = s, s = z), f(s)) : u(s, y);
    }
    return function(s, y, m, z) {
      try {
        Ka = 0;
        var p = ul(
          s,
          y,
          m,
          z
        );
        return ya = null, p;
      } catch (U) {
        if (U === ia || U === Je) throw U;
        var J = Pl(29, U, null, s.mode);
        return J.lanes = z, J.return = s, J;
      } finally {
      }
    };
  }
  var Bu = U0(!0), p0 = U0(!1), uu = !1;
  function Bf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Gf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function au(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function eu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (W & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Qe(l), m0(l, null, u), t;
    }
    return Xe(l, a, t, u), Qe(l);
  }
  function wa(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Ti(l, u);
    }
  }
  function jf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Xf = !1;
  function Wa() {
    if (Xf) {
      var l = ca;
      if (l !== null) throw l;
    }
  }
  function $a(l, t, u, a) {
    Xf = !1;
    var e = l.updateQueue;
    uu = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, d = i.next;
      i.next = null, f === null ? n = d : f.next = d, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = d : c.next = d, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e.baseState;
      f = 0, g = d = i = null, c = n;
      do {
        var h = c.lane & -536870913, S = h !== c.lane;
        if (S ? (x & h) === h : (a & h) === h) {
          h !== 0 && h === fa && (Xf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var r = l, N = c;
            h = t;
            var ul = u;
            switch (N.tag) {
              case 1:
                if (r = N.payload, typeof r == "function") {
                  T = r.call(ul, T, h);
                  break l;
                }
                T = r;
                break l;
              case 3:
                r.flags = r.flags & -65537 | 128;
              case 0:
                if (r = N.payload, h = typeof r == "function" ? r.call(ul, T, h) : r, h == null) break l;
                T = R({}, T, h);
                break l;
              case 2:
                uu = !0;
            }
          }
          h = c.callback, h !== null && (l.flags |= 64, S && (l.flags |= 8192), S = e.callbacks, S === null ? e.callbacks = [h] : S.push(h));
        } else
          S = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, g === null ? (d = g = S, i = T) : g = g.next = S, f |= h;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          S = c, c = S.next, S.next = null, e.lastBaseUpdate = S, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = T), e.baseState = i, e.firstBaseUpdate = d, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), yu |= f, l.lanes = f, l.memoizedState = T;
    }
  }
  function H0(l, t) {
    if (typeof l != "function")
      throw Error(o(191, l));
    l.call(t);
  }
  function N0(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        H0(u[l], t);
  }
  var va = v(null), Fe = v(0);
  function R0(l, t) {
    l = Kt, M(Fe, l), M(va, t), Kt = l | t.baseLanes;
  }
  function Qf() {
    M(Fe, Kt), M(va, va.current);
  }
  function Zf() {
    Kt = Fe.current, E(va), E(Fe);
  }
  var lt = v(null), dt = null;
  function nu(l) {
    var t = l.alternate;
    M(ol, ol.current & 1), M(lt, l), dt === null && (t === null || va.current !== null || t.memoizedState !== null) && (dt = l);
  }
  function xf(l) {
    M(ol, ol.current), M(lt, l), dt === null && (dt = l);
  }
  function q0(l) {
    l.tag === 22 ? (M(ol, ol.current), M(lt, l), dt === null && (dt = l)) : fu();
  }
  function fu() {
    M(ol, ol.current), M(lt, lt.current);
  }
  function tt(l) {
    E(lt), dt === l && (dt = null), E(ol);
  }
  var ol = v(0);
  function ke(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Wc(u) || $c(u)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Gt = 0, B = null, ll = null, bl = null, Ie = !1, sa = !1, Gu = !1, Pe = 0, Fa = 0, ma = null, Gs = 0;
  function sl() {
    throw Error(o(321));
  }
  function Vf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!Il(l[u], t[u])) return !1;
    return !0;
  }
  function Lf(l, t, u, a, e, n) {
    return Gt = n, B = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? Sy : nc, Gu = !1, n = u(a, e), Gu = !1, sa && (n = Y0(
      t,
      u,
      a,
      e
    )), C0(l), n;
  }
  function C0(l) {
    b.H = Pa;
    var t = ll !== null && ll.next !== null;
    if (Gt = 0, bl = ll = B = null, Ie = !1, Fa = 0, ma = null, t) throw Error(o(300));
    l === null || zl || (l = l.dependencies, l !== null && Ve(l) && (zl = !0));
  }
  function Y0(l, t, u, a) {
    B = l;
    var e = 0;
    do {
      if (sa && (ma = null), Fa = 0, sa = !1, 25 <= e) throw Error(o(301));
      if (e += 1, bl = ll = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      b.H = gy, n = t(u, a);
    } while (sa);
    return n;
  }
  function js() {
    var l = b.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? ka(t) : t, l = l.useState()[0], (ll !== null ? ll.memoizedState : null) !== l && (B.flags |= 1024), t;
  }
  function Kf() {
    var l = Pe !== 0;
    return Pe = 0, l;
  }
  function Jf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function wf(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ie = !1;
    }
    Gt = 0, bl = ll = B = null, sa = !1, Fa = Pe = 0, ma = null;
  }
  function Yl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return bl === null ? B.memoizedState = bl = l : bl = bl.next = l, bl;
  }
  function Sl() {
    if (ll === null) {
      var l = B.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ll.next;
    var t = bl === null ? B.memoizedState : bl.next;
    if (t !== null)
      bl = t, ll = l;
    else {
      if (l === null)
        throw B.alternate === null ? Error(o(467)) : Error(o(310));
      ll = l, l = {
        memoizedState: ll.memoizedState,
        baseState: ll.baseState,
        baseQueue: ll.baseQueue,
        queue: ll.queue,
        next: null
      }, bl === null ? B.memoizedState = bl = l : bl = bl.next = l;
    }
    return bl;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ka(l) {
    var t = Fa;
    return Fa += 1, ma === null && (ma = []), l = M0(ma, l, t), t = B, (bl === null ? t.memoizedState : bl.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? Sy : nc), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ka(l);
      if (l.$$typeof === Nl) return Ul(l);
    }
    throw Error(o(438, String(l)));
  }
  function Wf(l) {
    var t = null, u = B.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = B.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = ln(), B.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = Zu;
    return t.index++, u;
  }
  function jt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function un(l) {
    var t = Sl();
    return $f(t, ll, l);
  }
  function $f(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, d = t, g = !1;
      do {
        var T = d.lane & -536870913;
        if (T !== d.lane ? (x & T) === T : (Gt & T) === T) {
          var h = d.revertLane;
          if (h === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }), T === fa && (g = !0);
          else if ((Gt & h) === h) {
            d = d.next, h === fa && (g = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: d.revertLane,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }, i === null ? (c = i = T, f = n) : i = i.next = T, B.lanes |= h, yu |= h;
          T = d.action, Gu && u(n, T), n = d.hasEagerState ? d.eagerState : u(n, T);
        } else
          h = {
            lane: T,
            revertLane: d.revertLane,
            gesture: d.gesture,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          }, i === null ? (c = i = h, f = n) : i = i.next = h, B.lanes |= T, yu |= T;
        d = d.next;
      } while (d !== null && d !== t);
      if (i === null ? f = n : i.next = c, !Il(n, l.memoizedState) && (zl = !0, g && (u = ca, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Ff(l) {
    var t = Sl(), u = t.queue;
    if (u === null) throw Error(o(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Il(n, t.memoizedState) || (zl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function B0(l, t, u) {
    var a = B, e = Sl(), n = K;
    if (n) {
      if (u === void 0) throw Error(o(407));
      u = u();
    } else u = t();
    var f = !Il(
      (ll || e).memoizedState,
      u
    );
    if (f && (e.memoizedState = u, zl = !0), e = e.queue, Pf(X0.bind(null, a, e, l), [
      l
    ]), e.getSnapshot !== t || f || bl !== null && bl.memoizedState.tag & 1) {
      if (a.flags |= 2048, da(
        9,
        { destroy: void 0 },
        j0.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), nl === null) throw Error(o(349));
      n || (Gt & 127) !== 0 || G0(a, t, u);
    }
    return u;
  }
  function G0(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = B.updateQueue, t === null ? (t = ln(), B.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function j0(l, t, u, a) {
    t.value = u, t.getSnapshot = a, Q0(t) && Z0(l);
  }
  function X0(l, t, u) {
    return u(function() {
      Q0(t) && Z0(l);
    });
  }
  function Q0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !Il(l, u);
    } catch {
      return !0;
    }
  }
  function Z0(l) {
    var t = Uu(l, 2);
    t !== null && Jl(t, l, 2);
  }
  function kf(l) {
    var t = Yl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Gu) {
        $t(!0);
        try {
          u();
        } finally {
          $t(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jt,
      lastRenderedState: l
    }, t;
  }
  function x0(l, t, u, a) {
    return l.baseState = u, $f(
      l,
      ll,
      typeof a == "function" ? a : jt
    );
  }
  function Xs(l, t, u, a, e) {
    if (nn(l)) throw Error(o(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      b.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, V0(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function V0(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = b.T, f = {};
      b.T = f;
      try {
        var c = u(e, a), i = b.S;
        i !== null && i(f, c), L0(l, t, c);
      } catch (d) {
        If(l, t, d);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), b.T = n;
      }
    } else
      try {
        n = u(e, a), L0(l, t, n);
      } catch (d) {
        If(l, t, d);
      }
  }
  function L0(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        K0(l, t, a);
      },
      function(a) {
        return If(l, t, a);
      }
    ) : K0(l, t, u);
  }
  function K0(l, t, u) {
    t.status = "fulfilled", t.value = u, J0(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, V0(l, u)));
  }
  function If(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, J0(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function J0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function w0(l, t) {
    return t;
  }
  function W0(l, t) {
    if (K) {
      var u = nl.formState;
      if (u !== null) {
        l: {
          var a = B;
          if (K) {
            if (fl) {
              t: {
                for (var e = fl, n = mt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = ht(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                fl = ht(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            lu(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = Yl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: w0,
      lastRenderedState: t
    }, u.queue = a, u = dy.bind(
      null,
      B,
      a
    ), a.dispatch = u, a = kf(!1), n = ec.bind(
      null,
      B,
      !1,
      a.queue
    ), a = Yl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Xs.bind(
      null,
      B,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function $0(l) {
    var t = Sl();
    return F0(t, ll, l);
  }
  function F0(l, t, u) {
    if (t = $f(
      l,
      t,
      w0
    )[0], l = un(jt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = ka(t);
      } catch (f) {
        throw f === ia ? Je : f;
      }
    else a = t;
    t = Sl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (B.flags |= 2048, da(
      9,
      { destroy: void 0 },
      Qs.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Qs(l, t) {
    l.action = t;
  }
  function k0(l) {
    var t = Sl(), u = ll;
    if (u !== null)
      return F0(t, u, l);
    Sl(), t = t.memoizedState, u = Sl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function da(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = B.updateQueue, t === null && (t = ln(), B.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function I0() {
    return Sl().memoizedState;
  }
  function an(l, t, u, a) {
    var e = Yl();
    B.flags |= l, e.memoizedState = da(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function en(l, t, u, a) {
    var e = Sl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    ll !== null && a !== null && Vf(a, ll.memoizedState.deps) ? e.memoizedState = da(t, n, u, a) : (B.flags |= l, e.memoizedState = da(
      1 | t,
      n,
      u,
      a
    ));
  }
  function P0(l, t) {
    an(8390656, 8, l, t);
  }
  function Pf(l, t) {
    en(2048, 8, l, t);
  }
  function Zs(l) {
    B.flags |= 4;
    var t = B.updateQueue;
    if (t === null)
      t = ln(), B.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function ly(l) {
    var t = Sl().memoizedState;
    return Zs({ ref: t, nextImpl: l }), function() {
      if ((W & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function ty(l, t) {
    return en(4, 2, l, t);
  }
  function uy(l, t) {
    return en(4, 4, l, t);
  }
  function ay(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function ey(l, t, u) {
    u = u != null ? u.concat([l]) : null, en(4, 4, ay.bind(null, t, l), u);
  }
  function lc() {
  }
  function ny(l, t) {
    var u = Sl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Vf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function fy(l, t) {
    var u = Sl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Vf(t, a[1]))
      return a[0];
    if (a = l(), Gu) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function tc(l, t, u) {
    return u === void 0 || (Gt & 1073741824) !== 0 && (x & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = cv(), B.lanes |= l, yu |= l, u);
  }
  function cy(l, t, u, a) {
    return Il(u, t) ? u : va.current !== null ? (l = tc(l, u, a), Il(l, t) || (zl = !0), l) : (Gt & 42) === 0 || (Gt & 1073741824) !== 0 && (x & 261930) === 0 ? (zl = !0, l.memoizedState = u) : (l = cv(), B.lanes |= l, yu |= l, t);
  }
  function iy(l, t, u, a, e) {
    var n = O.p;
    O.p = n !== 0 && 8 > n ? n : 8;
    var f = b.T, c = {};
    b.T = c, ec(l, !1, t, u);
    try {
      var i = e(), d = b.S;
      if (d !== null && d(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Bs(
          i,
          a
        );
        Ia(
          l,
          t,
          g,
          et(l)
        );
      } else
        Ia(
          l,
          t,
          a,
          et(l)
        );
    } catch (T) {
      Ia(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: T },
        et()
      );
    } finally {
      O.p = n, f !== null && c.types !== null && (f.types = c.types), b.T = f;
    }
  }
  function xs() {
  }
  function uc(l, t, u, a) {
    if (l.tag !== 5) throw Error(o(476));
    var e = yy(l).queue;
    iy(
      l,
      e,
      t,
      q,
      u === null ? xs : function() {
        return vy(l), u(a);
      }
    );
  }
  function yy(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: q
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function vy(l) {
    var t = yy(l);
    t.next === null && (t = l.alternate.memoizedState), Ia(
      l,
      t.next.queue,
      {},
      et()
    );
  }
  function ac() {
    return Ul(oe);
  }
  function sy() {
    return Sl().memoizedState;
  }
  function my() {
    return Sl().memoizedState;
  }
  function Vs(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = et();
          l = au(u);
          var a = eu(t, l, u);
          a !== null && (Jl(a, t, u), wa(a, t, u)), t = { cache: Rf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ls(l, t, u) {
    var a = et();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? hy(t, u) : (u = Ef(l, t, u, a), u !== null && (Jl(u, l, a), oy(u, t, a)));
  }
  function dy(l, t, u) {
    var a = et();
    Ia(l, t, u, a);
  }
  function Ia(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nn(l)) hy(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, Il(c, f))
            return Xe(l, t, e, 0), nl === null && je(), !1;
        } catch {
        } finally {
        }
      if (u = Ef(l, t, e, a), u !== null)
        return Jl(u, l, a), oy(u, t, a), !0;
    }
    return !1;
  }
  function ec(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Bc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(o(479));
    } else
      t = Ef(
        l,
        u,
        a,
        2
      ), t !== null && Jl(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === B || t !== null && t === B;
  }
  function hy(l, t) {
    sa = Ie = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function oy(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Ti(l, u);
    }
  }
  var Pa = {
    readContext: Ul,
    use: tn,
    useCallback: sl,
    useContext: sl,
    useEffect: sl,
    useImperativeHandle: sl,
    useLayoutEffect: sl,
    useInsertionEffect: sl,
    useMemo: sl,
    useReducer: sl,
    useRef: sl,
    useState: sl,
    useDebugValue: sl,
    useDeferredValue: sl,
    useTransition: sl,
    useSyncExternalStore: sl,
    useId: sl,
    useHostTransitionStatus: sl,
    useFormState: sl,
    useActionState: sl,
    useOptimistic: sl,
    useMemoCache: sl,
    useCacheRefresh: sl
  };
  Pa.useEffectEvent = sl;
  var Sy = {
    readContext: Ul,
    use: tn,
    useCallback: function(l, t) {
      return Yl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Ul,
    useEffect: P0,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, an(
        4194308,
        4,
        ay.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return an(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      an(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Yl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Gu) {
        $t(!0);
        try {
          l();
        } finally {
          $t(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = Yl();
      if (u !== void 0) {
        var e = u(t);
        if (Gu) {
          $t(!0);
          try {
            u(t);
          } finally {
            $t(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = Ls.bind(
        null,
        B,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Yl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = kf(l);
      var t = l.queue, u = dy.bind(null, B, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var u = Yl();
      return tc(u, l, t);
    },
    useTransition: function() {
      var l = kf(!1);
      return l = iy.bind(
        null,
        B,
        l.queue,
        !0,
        !1
      ), Yl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = B, e = Yl();
      if (K) {
        if (u === void 0)
          throw Error(o(407));
        u = u();
      } else {
        if (u = t(), nl === null)
          throw Error(o(349));
        (x & 127) !== 0 || G0(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, P0(X0.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, da(
        9,
        { destroy: void 0 },
        j0.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Yl(), t = nl.identifierPrefix;
      if (K) {
        var u = Mt, a = Ot;
        u = (a & ~(1 << 32 - kl(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = Pe++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = Gs++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: ac,
    useFormState: W0,
    useActionState: W0,
    useOptimistic: function(l) {
      var t = Yl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = ec.bind(
        null,
        B,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Wf,
    useCacheRefresh: function() {
      return Yl().memoizedState = Vs.bind(
        null,
        B
      );
    },
    useEffectEvent: function(l) {
      var t = Yl(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((W & 2) !== 0)
          throw Error(o(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, nc = {
    readContext: Ul,
    use: tn,
    useCallback: ny,
    useContext: Ul,
    useEffect: Pf,
    useImperativeHandle: ey,
    useInsertionEffect: ty,
    useLayoutEffect: uy,
    useMemo: fy,
    useReducer: un,
    useRef: I0,
    useState: function() {
      return un(jt);
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var u = Sl();
      return cy(
        u,
        ll.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = un(jt)[0], t = Sl().memoizedState;
      return [
        typeof l == "boolean" ? l : ka(l),
        t
      ];
    },
    useSyncExternalStore: B0,
    useId: sy,
    useHostTransitionStatus: ac,
    useFormState: $0,
    useActionState: $0,
    useOptimistic: function(l, t) {
      var u = Sl();
      return x0(u, ll, l, t);
    },
    useMemoCache: Wf,
    useCacheRefresh: my
  };
  nc.useEffectEvent = ly;
  var gy = {
    readContext: Ul,
    use: tn,
    useCallback: ny,
    useContext: Ul,
    useEffect: Pf,
    useImperativeHandle: ey,
    useInsertionEffect: ty,
    useLayoutEffect: uy,
    useMemo: fy,
    useReducer: Ff,
    useRef: I0,
    useState: function() {
      return Ff(jt);
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var u = Sl();
      return ll === null ? tc(u, l, t) : cy(
        u,
        ll.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Ff(jt)[0], t = Sl().memoizedState;
      return [
        typeof l == "boolean" ? l : ka(l),
        t
      ];
    },
    useSyncExternalStore: B0,
    useId: sy,
    useHostTransitionStatus: ac,
    useFormState: k0,
    useActionState: k0,
    useOptimistic: function(l, t) {
      var u = Sl();
      return ll !== null ? x0(u, ll, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Wf,
    useCacheRefresh: my
  };
  gy.useEffectEvent = ly;
  function fc(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : R({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var cc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = et(), e = au(a);
      e.payload = t, u != null && (e.callback = u), t = eu(l, e, a), t !== null && (Jl(t, l, a), wa(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = et(), e = au(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = eu(l, e, a), t !== null && (Jl(t, l, a), wa(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = et(), a = au(u);
      a.tag = 2, t != null && (a.callback = t), t = eu(l, a, u), t !== null && (Jl(t, l, u), wa(t, l, u));
    }
  };
  function by(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Xa(u, a) || !Xa(e, n) : !0;
  }
  function zy(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && cc.enqueueReplaceState(t, t.state, null);
  }
  function ju(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = R({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function Ty(l) {
    Ge(l);
  }
  function Ey(l) {
    console.error(l);
  }
  function Ay(l) {
    Ge(l);
  }
  function fn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function _y(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ic(l, t, u) {
    return u = au(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      fn(l, t);
    }, u;
  }
  function Oy(l) {
    return l = au(l), l.tag = 3, l;
  }
  function My(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        _y(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      _y(t, u, a), typeof e != "function" && (vu === null ? vu = /* @__PURE__ */ new Set([this]) : vu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Ks(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && na(
        t,
        u,
        e,
        !0
      ), u = lt.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return dt === null ? zn() : u.alternate === null && ml === 0 && (ml = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === we ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), qc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === we ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), qc(l, a, e)), !1;
        }
        throw Error(o(435, u.tag));
      }
      return qc(l, a, e), zn(), !1;
    }
    if (K)
      return t = lt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Df && (l = Error(o(422), { cause: a }), xa(yt(l, u)))) : (a !== Df && (t = Error(o(423), {
        cause: a
      }), xa(
        yt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = yt(a, u), e = ic(
        l.stateNode,
        a,
        e
      ), jf(l, e), ml !== 4 && (ml = 2)), !1;
    var n = Error(o(520), { cause: a });
    if (n = yt(n, u), ce === null ? ce = [n] : ce.push(n), ml !== 4 && (ml = 2), t === null) return !0;
    a = yt(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = ic(u.stateNode, a, l), jf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (vu === null || !vu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = Oy(e), My(
              e,
              l,
              u,
              a
            ), jf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var yc = Error(o(461)), zl = !1;
  function pl(l, t, u, a) {
    t.child = l === null ? p0(t, null, u, a) : Bu(
      t,
      l.child,
      u,
      a
    );
  }
  function ry(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Ru(t), a = Lf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Kf(), l !== null && !zl ? (Jf(l, t, e), Xt(l, t, e)) : (K && c && Mf(t), t.flags |= 1, pl(l, t, a, e), t.child);
  }
  function Dy(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Af(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, Uy(
        l,
        t,
        n,
        a,
        e
      )) : (l = Ze(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !gc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Xa, u(f, a) && l.ref === t.ref)
        return Xt(l, t, e);
    }
    return t.flags |= 1, l = qt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Uy(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Xa(n, a) && l.ref === t.ref)
        if (zl = !1, t.pendingProps = a = n, gc(l, e))
          (l.flags & 131072) !== 0 && (zl = !0);
        else
          return t.lanes = l.lanes, Xt(l, t, e);
    }
    return vc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function py(l, t, u, a) {
    var e = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, e = 0; a !== null; )
            e = e | a.lanes | a.childLanes, a = a.sibling;
          a = e & ~n;
        } else a = 0, t.child = null;
        return Hy(
          l,
          t,
          n,
          u,
          a
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ke(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? R0(t, n) : Qf(), q0(t);
      else
        return a = t.lanes = 536870912, Hy(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          a
        );
    } else
      n !== null ? (Ke(t, n.cachePool), R0(t, n), fu(), t.memoizedState = null) : (l !== null && Ke(t, null), Qf(), fu());
    return pl(l, t, e, u), t.child;
  }
  function le(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Hy(l, t, u, a, e) {
    var n = Cf();
    return n = n === null ? null : { parent: gl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && Ke(t, null), Qf(), q0(t), l !== null && na(l, t, a, !0), t.childLanes = e, null;
  }
  function cn(l, t) {
    return t = vn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Ny(l, t, u) {
    return Bu(t, l.child, null, u), l = cn(t, t.pendingProps), l.flags |= 2, tt(t), t.memoizedState = null, l;
  }
  function Js(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (K) {
        if (a.mode === "hidden")
          return l = cn(t, a), t.lanes = 536870912, le(null, l);
        if (xf(t), (l = fl) ? (l = Vv(
          l,
          mt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: Ot, overflow: Mt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = h0(l), u.return = t, t.child = u, Dl = t, fl = null)) : l = null, l === null) throw lu(t);
        return t.lanes = 536870912, null;
      }
      return cn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (xf(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = Ny(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (zl || na(l, t, u, !1), e = (u & l.childLanes) !== 0, zl || e) {
        if (a = nl, a !== null && (f = Ei(a, u), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, Uu(l, f), Jl(a, l, f), yc;
        zn(), t = Ny(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, fl = ht(f.nextSibling), Dl = t, K = !0, Pt = null, mt = !1, l !== null && g0(t, l), t = cn(t, a), t.flags |= 4096;
      return t;
    }
    return l = qt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function yn(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(o(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function vc(l, t, u, a, e) {
    return Ru(t), u = Lf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Kf(), l !== null && !zl ? (Jf(l, t, e), Xt(l, t, e)) : (K && a && Mf(t), t.flags |= 1, pl(l, t, u, e), t.child);
  }
  function Ry(l, t, u, a, e, n) {
    return Ru(t), t.updateQueue = null, u = Y0(
      t,
      a,
      u,
      e
    ), C0(l), a = Kf(), l !== null && !zl ? (Jf(l, t, n), Xt(l, t, n)) : (K && a && Mf(t), t.flags |= 1, pl(l, t, u, n), t.child);
  }
  function qy(l, t, u, a, e) {
    if (Ru(t), t.stateNode === null) {
      var n = ta, f = u.contextType;
      typeof f == "object" && f !== null && (n = Ul(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = cc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Bf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Ul(f) : ta, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (fc(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && cc.enqueueReplaceState(n, n.state, null), $a(t, a, n, e), Wa(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = ju(u, c);
      n.props = i;
      var d = n.context, g = u.contextType;
      f = ta, typeof g == "object" && g !== null && (f = Ul(g));
      var T = u.getDerivedStateFromProps;
      g = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || d !== f) && zy(
        t,
        n,
        a,
        f
      ), uu = !1;
      var h = t.memoizedState;
      n.state = h, $a(t, a, n, e), Wa(), d = t.memoizedState, c || h !== d || uu ? (typeof T == "function" && (fc(
        t,
        u,
        T,
        a
      ), d = t.memoizedState), (i = uu || by(
        t,
        u,
        i,
        a,
        h,
        d,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = d), n.props = a, n.state = d, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Gf(l, t), f = t.memoizedProps, g = ju(u, f), n.props = g, T = t.pendingProps, h = n.context, d = u.contextType, i = ta, typeof d == "object" && d !== null && (i = Ul(d)), c = u.getDerivedStateFromProps, (d = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || h !== i) && zy(
        t,
        n,
        a,
        i
      ), uu = !1, h = t.memoizedState, n.state = h, $a(t, a, n, e), Wa();
      var S = t.memoizedState;
      f !== T || h !== S || uu || l !== null && l.dependencies !== null && Ve(l.dependencies) ? (typeof c == "function" && (fc(
        t,
        u,
        c,
        a
      ), S = t.memoizedState), (g = uu || by(
        t,
        u,
        g,
        a,
        h,
        S,
        i
      ) || l !== null && l.dependencies !== null && Ve(l.dependencies)) ? (d || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, S, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        S,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = S), n.props = a, n.state = S, n.context = i, a = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, yn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Bu(
      t,
      l.child,
      null,
      e
    ), t.child = Bu(
      t,
      null,
      u,
      e
    )) : pl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Xt(
      l,
      t,
      e
    ), l;
  }
  function Cy(l, t, u, a) {
    return Hu(), t.flags |= 256, pl(l, t, u, a), t.child;
  }
  var sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function mc(l) {
    return { baseLanes: l, cachePool: _0() };
  }
  function dc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= at), l;
  }
  function Yy(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (ol.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (K) {
        if (e ? nu(t) : fu(), (l = fl) ? (l = Vv(
          l,
          mt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: Ot, overflow: Mt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = h0(l), u.return = t, t.child = u, Dl = t, fl = null)) : l = null, l === null) throw lu(t);
        return $c(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, e ? (fu(), e = t.mode, c = vn(
        { mode: "hidden", children: c },
        e
      ), a = pu(
        a,
        e,
        u,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = mc(u), a.childLanes = dc(
        l,
        f,
        u
      ), t.memoizedState = sc, le(null, a)) : (nu(t), hc(t, c));
    }
    var i = l.memoizedState;
    if (i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (nu(t), t.flags &= -257, t = oc(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (fu(), t.child = l.child, t.flags |= 128, t = null) : (fu(), c = a.fallback, e = t.mode, a = vn(
          { mode: "visible", children: a.children },
          e
        ), c = pu(
          c,
          e,
          u,
          null
        ), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, Bu(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = mc(u), a.childLanes = dc(
          l,
          f,
          u
        ), t.memoizedState = sc, t = le(null, a));
      else if (nu(t), $c(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var d = f.dgst;
        f = d, a = Error(o(419)), a.stack = "", a.digest = f, xa({ value: a, source: null, stack: null }), t = oc(
          l,
          t,
          u
        );
      } else if (zl || na(l, t, u, !1), f = (u & l.childLanes) !== 0, zl || f) {
        if (f = nl, f !== null && (a = Ei(f, u), a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, Uu(l, a), Jl(f, l, a), yc;
        Wc(c) || zn(), t = oc(
          l,
          t,
          u
        );
      } else
        Wc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, fl = ht(
          c.nextSibling
        ), Dl = t, K = !0, Pt = null, mt = !1, l !== null && g0(t, l), t = hc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (fu(), c = a.fallback, e = t.mode, i = l.child, d = i.sibling, a = qt(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, d !== null ? c = qt(
      d,
      c
    ) : (c = pu(
      c,
      e,
      u,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, le(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = mc(u) : (e = c.cachePool, e !== null ? (i = gl._currentValue, e = e.parent !== i ? { parent: i, pool: i } : e) : e = _0(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: e
    }), a.memoizedState = c, a.childLanes = dc(
      l,
      f,
      u
    ), t.memoizedState = sc, le(l.child, a)) : (nu(t), u = l.child, l = u.sibling, u = qt(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function hc(l, t) {
    return t = vn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function vn(l, t) {
    return l = Pl(22, l, null, t), l.lanes = 0, l;
  }
  function oc(l, t, u) {
    return Bu(t, l.child, null, u), l = hc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function By(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Hf(l.return, t, u);
  }
  function Sc(l, t, u, a, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = u, f.tailMode = e, f.treeForkCount = n);
  }
  function Gy(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    a = a.children;
    var f = ol.current, c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, M(ol, f), pl(l, t, a, u), a = K ? Za : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && By(l, u, t);
        else if (l.tag === 19)
          By(l, u, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && ke(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), Sc(
          t,
          !1,
          e,
          u,
          n,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && ke(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        Sc(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "together":
        Sc(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), yu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (na(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (l = t.child, u = qt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = qt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function gc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ve(l)));
  }
  function ws(l, t, u) {
    switch (t.tag) {
      case 3:
        Cl(t, t.stateNode.containerInfo), tu(t, gl, l.memoizedState.cache), Hu();
        break;
      case 27:
      case 5:
        ra(t);
        break;
      case 4:
        Cl(t, t.stateNode.containerInfo);
        break;
      case 10:
        tu(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, xf(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (nu(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? Yy(l, t, u) : (nu(t), l = Xt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        nu(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (na(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return Gy(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), M(ol, ol.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, py(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        tu(t, gl, l.memoizedState.cache);
    }
    return Xt(l, t, u);
  }
  function jy(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        zl = !0;
      else {
        if (!gc(l, u) && (t.flags & 128) === 0)
          return zl = !1, ws(
            l,
            t,
            u
          );
        zl = (l.flags & 131072) !== 0;
      }
    else
      zl = !1, K && (t.flags & 1048576) !== 0 && S0(t, Za, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Cu(t.elementType), t.type = l, typeof l == "function")
            Af(l) ? (a = ju(l, a), t.tag = 1, t = qy(
              null,
              t,
              l,
              a,
              u
            )) : (t.tag = 0, t = vc(
              null,
              t,
              l,
              a,
              u
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === nt) {
                t.tag = 11, t = ry(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === L) {
                t.tag = 14, t = Dy(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              }
            }
            throw t = pt(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return vc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = ju(
          a,
          t.pendingProps
        ), qy(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (Cl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(o(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Gf(l, t), $a(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, tu(t, gl, a), a !== n.cache && Nf(
            t,
            [gl],
            u,
            !0
          ), Wa(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Cy(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = yt(
                Error(o(424)),
                t
              ), xa(e), t = Cy(
                l,
                t,
                a,
                u
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (fl = ht(l.firstChild), Dl = t, K = !0, Pt = null, mt = !0, u = p0(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Hu(), a === e) {
              t = Xt(
                l,
                t,
                u
              );
              break l;
            }
            pl(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return yn(l, t), l === null ? (u = $v(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : K || (u = t.type, l = t.pendingProps, a = rn(
          j.current
        ).createElement(u), a[rl] = t, a[Ql] = l, Hl(a, u, l), _l(a), t.stateNode = a) : t.memoizedState = $v(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ra(t), l === null && K && (a = t.stateNode = Jv(
          t.type,
          t.pendingProps,
          j.current
        ), Dl = t, mt = !0, e = fl, hu(t.type) ? (Fc = e, fl = ht(a.firstChild)) : fl = e), pl(
          l,
          t,
          t.pendingProps.children,
          u
        ), yn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && K && ((e = a = fl) && (a = _m(
          a,
          t.type,
          t.pendingProps,
          mt
        ), a !== null ? (t.stateNode = a, Dl = t, fl = ht(a.firstChild), mt = !1, e = !0) : e = !1), e || lu(t)), ra(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Kc(e, n) ? a = null : f !== null && Kc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Lf(
          l,
          t,
          js,
          null,
          null,
          u
        ), oe._currentValue = e), yn(l, t), pl(l, t, a, u), t.child;
      case 6:
        return l === null && K && ((l = u = fl) && (u = Om(
          u,
          t.pendingProps,
          mt
        ), u !== null ? (t.stateNode = u, Dl = t, fl = null, l = !0) : l = !1), l || lu(t)), null;
      case 13:
        return Yy(l, t, u);
      case 4:
        return Cl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Bu(
          t,
          null,
          a,
          u
        ) : pl(l, t, a, u), t.child;
      case 11:
        return ry(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return pl(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return pl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return pl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, tu(t, t.type, a.value), pl(l, t, a.children, u), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Ru(t), e = Ul(e), a = a(e), t.flags |= 1, pl(l, t, a, u), t.child;
      case 14:
        return Dy(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return Uy(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return Gy(l, t, u);
      case 31:
        return Js(l, t, u);
      case 22:
        return py(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return Ru(t), a = Ul(gl), l === null ? (e = Cf(), e === null && (e = nl, n = Rf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Bf(t), tu(t, gl, e)) : ((l.lanes & u) !== 0 && (Gf(l, t), $a(t, null, null, u), Wa()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), tu(t, gl, a)) : (a = n.cache, tu(t, gl, a), a !== e.cache && Nf(
          t,
          [gl],
          u,
          !0
        ))), pl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Qt(l) {
    l.flags |= 4;
  }
  function bc(l, t, u, a, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (sv()) l.flags |= 8192;
        else
          throw Yu = we, Yf;
    } else l.flags &= -16777217;
  }
  function Xy(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !l1(t))
      if (sv()) l.flags |= 8192;
      else
        throw Yu = we, Yf;
  }
  function sn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? bi() : 536870912, l.lanes |= t, ga |= t);
  }
  function te(l, t) {
    if (!K)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function cl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Ws(l, t, u) {
    var a = t.pendingProps;
    switch (rf(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return cl(t), null;
      case 1:
        return cl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Bt(gl), hl(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ea(t) ? Qt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Uf())), cl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Qt(t), n !== null ? (cl(t), Xy(t, n)) : (cl(t), bc(
          t,
          e,
          null,
          a,
          u
        ))) : n ? n !== l.memoizedState ? (Qt(t), cl(t), Xy(t, n)) : (cl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Qt(t), cl(t), bc(
          t,
          e,
          l,
          a,
          u
        )), null;
      case 27:
        if (Ee(t), u = j.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return cl(t), null;
          }
          l = D.current, ea(t) ? b0(t) : (l = Jv(e, a, u), t.stateNode = l, Qt(t));
        }
        return cl(t), null;
      case 5:
        if (Ee(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return cl(t), null;
          }
          if (n = D.current, ea(t))
            b0(t);
          else {
            var f = rn(
              j.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? f.createElement(e, { is: a.is }) : f.createElement(e);
                }
            }
            n[rl] = t, n[Ql] = a;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (Hl(n, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Qt(t);
          }
        }
        return cl(t), bc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (l = j.current, ea(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Dl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[rl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || Yv(l.nodeValue, u)), l || lu(t, !0);
          } else
            l = rn(l).createTextNode(
              a
            ), l[rl] = t, t.stateNode = l;
        }
        return cl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = ea(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[rl] = t;
            } else
              Hu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            cl(t), l = !1;
          } else
            u = Uf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (tt(t), t) : (tt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return cl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = ea(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
              e[rl] = t;
            } else
              Hu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            cl(t), e = !1;
          } else
            e = Uf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (tt(t), t) : (tt(t), null);
        }
        return tt(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), sn(t, t.updateQueue), cl(t), null);
      case 4:
        return hl(), l === null && Qc(t.stateNode.containerInfo), cl(t), null;
      case 10:
        return Bt(t.type), cl(t), null;
      case 19:
        if (E(ol), a = t.memoizedState, a === null) return cl(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (e) te(a, !1);
          else {
            if (ml !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = ke(l), n !== null) {
                  for (t.flags |= 128, te(a, !1), l = n.updateQueue, t.updateQueue = l, sn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    d0(u, l), u = u.sibling;
                  return M(
                    ol,
                    ol.current & 1 | 2
                  ), K && Ct(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && $l() > Sn && (t.flags |= 128, e = !0, te(a, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = ke(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, sn(t, l), te(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !K)
                return cl(t), null;
            } else
              2 * $l() - a.renderingStartTime > Sn && u !== 536870912 && (t.flags |= 128, e = !0, te(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = $l(), l.sibling = null, u = ol.current, M(
          ol,
          e ? u & 1 | 2 : u & 1
        ), K && Ct(t, a.treeForkCount), l) : (cl(t), null);
      case 22:
      case 23:
        return tt(t), Zf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (cl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : cl(t), u = t.updateQueue, u !== null && sn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && E(qu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Bt(gl), cl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function $s(l, t) {
    switch (rf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Bt(gl), hl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ee(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (tt(t), t.alternate === null)
            throw Error(o(340));
          Hu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (tt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Hu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return E(ol), null;
      case 4:
        return hl(), null;
      case 10:
        return Bt(t.type), null;
      case 22:
      case 23:
        return tt(t), Zf(), l !== null && E(qu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Bt(gl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qy(l, t) {
    switch (rf(t), t.tag) {
      case 3:
        Bt(gl), hl();
        break;
      case 26:
      case 27:
      case 5:
        Ee(t);
        break;
      case 4:
        hl();
        break;
      case 31:
        t.memoizedState !== null && tt(t);
        break;
      case 13:
        tt(t);
        break;
      case 19:
        E(ol);
        break;
      case 10:
        Bt(t.type);
        break;
      case 22:
      case 23:
        tt(t), Zf(), l !== null && E(qu);
        break;
      case 24:
        Bt(gl);
    }
  }
  function ue(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      I(t, t.return, c);
    }
  }
  function cu(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, d = c;
              try {
                d();
              } catch (g) {
                I(
                  e,
                  i,
                  g
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (g) {
      I(t, t.return, g);
    }
  }
  function Zy(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        N0(t, u);
      } catch (a) {
        I(l, l.return, a);
      }
    }
  }
  function xy(l, t, u) {
    u.props = ju(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      I(l, t, a);
    }
  }
  function ae(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      I(l, t, e);
    }
  }
  function rt(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          I(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          I(l, t, e);
        }
      else u.current = null;
  }
  function Vy(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      I(l, l.return, e);
    }
  }
  function zc(l, t, u) {
    try {
      var a = l.stateNode;
      gm(a, l.type, u, t), a[Ql] = t;
    } catch (e) {
      I(l, l.return, e);
    }
  }
  function Ly(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && hu(l.type) || l.tag === 4;
  }
  function Tc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Ly(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && hu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ec(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Nt));
    else if (a !== 4 && (a === 27 && hu(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (Ec(l, t, u), l = l.sibling; l !== null; )
        Ec(l, t, u), l = l.sibling;
  }
  function mn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && hu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (mn(l, t, u), l = l.sibling; l !== null; )
        mn(l, t, u), l = l.sibling;
  }
  function Ky(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Hl(t, a, u), t[rl] = l, t[Ql] = u;
    } catch (n) {
      I(l, l.return, n);
    }
  }
  var Zt = !1, Tl = !1, Ac = !1, Jy = typeof WeakSet == "function" ? WeakSet : Set, Ol = null;
  function Fs(l, t) {
    if (l = l.containerInfo, Vc = qn, l = e0(l), of(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0, c = -1, i = -1, d = 0, g = 0, T = l, h = null;
            t: for (; ; ) {
              for (var S; T !== u || e !== 0 && T.nodeType !== 3 || (c = f + e), T !== n || a !== 0 && T.nodeType !== 3 || (i = f + a), T.nodeType === 3 && (f += T.nodeValue.length), (S = T.firstChild) !== null; )
                h = T, T = S;
              for (; ; ) {
                if (T === l) break t;
                if (h === u && ++d === e && (c = f), h === n && ++g === a && (i = f), (S = T.nextSibling) !== null) break;
                T = h, h = T.parentNode;
              }
              T = S;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Lc = { focusedElem: l, selectionRange: u }, qn = !1, Ol = t; Ol !== null; )
      if (t = Ol, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Ol = l;
      else
        for (; Ol !== null; ) {
          switch (t = Ol, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  e = l[u], e.ref.impl = e.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var r = ju(
                    u.type,
                    e
                  );
                  l = a.getSnapshotBeforeUpdate(
                    r,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (N) {
                  I(
                    u,
                    u.return,
                    N
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  wc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      wc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(o(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Ol = l;
            break;
          }
          Ol = t.return;
        }
  }
  function wy(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Vt(l, u), a & 4 && ue(5, u);
        break;
      case 1:
        if (Vt(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              I(u, u.return, f);
            }
          else {
            var e = ju(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              I(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && Zy(u), a & 512 && ae(u, u.return);
        break;
      case 3:
        if (Vt(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            N0(l, t);
          } catch (f) {
            I(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Ky(u);
      case 26:
      case 5:
        Vt(l, u), t === null && a & 4 && Vy(u), a & 512 && ae(u, u.return);
        break;
      case 12:
        Vt(l, u);
        break;
      case 31:
        Vt(l, u), a & 4 && Fy(l, u);
        break;
      case 13:
        Vt(l, u), a & 4 && ky(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = nm.bind(
          null,
          u
        ), Mm(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Zt, !a) {
          t = t !== null && t.memoizedState !== null || Tl, e = Zt;
          var n = Tl;
          Zt = a, (Tl = t) && !n ? Lt(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Vt(l, u), Zt = e, Tl = n;
        }
        break;
      case 30:
        break;
      default:
        Vt(l, u);
    }
  }
  function Wy(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Wy(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && kn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var yl = null, xl = !1;
  function xt(l, t, u) {
    for (u = u.child; u !== null; )
      $y(l, t, u), u = u.sibling;
  }
  function $y(l, t, u) {
    if (Fl && typeof Fl.onCommitFiberUnmount == "function")
      try {
        Fl.onCommitFiberUnmount(Da, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Tl || rt(u, t), xt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Tl || rt(u, t);
        var a = yl, e = xl;
        hu(u.type) && (yl = u.stateNode, xl = !1), xt(
          l,
          t,
          u
        ), me(u.stateNode), yl = a, xl = e;
        break;
      case 5:
        Tl || rt(u, t);
      case 6:
        if (a = yl, e = xl, yl = null, xt(
          l,
          t,
          u
        ), yl = a, xl = e, yl !== null)
          if (xl)
            try {
              (yl.nodeType === 9 ? yl.body : yl.nodeName === "HTML" ? yl.ownerDocument.body : yl).removeChild(u.stateNode);
            } catch (n) {
              I(
                u,
                t,
                n
              );
            }
          else
            try {
              yl.removeChild(u.stateNode);
            } catch (n) {
              I(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        yl !== null && (xl ? (l = yl, Zv(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Ma(l)) : Zv(yl, u.stateNode));
        break;
      case 4:
        a = yl, e = xl, yl = u.stateNode.containerInfo, xl = !0, xt(
          l,
          t,
          u
        ), yl = a, xl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        cu(2, u, t), Tl || cu(4, u, t), xt(
          l,
          t,
          u
        );
        break;
      case 1:
        Tl || (rt(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && xy(
          u,
          t,
          a
        )), xt(
          l,
          t,
          u
        );
        break;
      case 21:
        xt(
          l,
          t,
          u
        );
        break;
      case 22:
        Tl = (a = Tl) || u.memoizedState !== null, xt(
          l,
          t,
          u
        ), Tl = a;
        break;
      default:
        xt(
          l,
          t,
          u
        );
    }
  }
  function Fy(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ma(l);
      } catch (u) {
        I(t, t.return, u);
      }
    }
  }
  function ky(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ma(l);
      } catch (u) {
        I(t, t.return, u);
      }
  }
  function ks(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Jy()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Jy()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function dn(l, t) {
    var u = ks(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = fm.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function Vl(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (hu(c.type)) {
                yl = c.stateNode, xl = !1;
                break l;
              }
              break;
            case 5:
              yl = c.stateNode, xl = !1;
              break l;
            case 3:
            case 4:
              yl = c.stateNode.containerInfo, xl = !0;
              break l;
          }
          c = c.return;
        }
        if (yl === null) throw Error(o(160));
        $y(n, f, e), yl = null, xl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Iy(t, l), t = t.sibling;
  }
  var zt = null;
  function Iy(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Vl(t, l), Ll(l), a & 4 && (cu(3, l, l.return), ue(3, l), cu(5, l, l.return));
        break;
      case 1:
        Vl(t, l), Ll(l), a & 512 && (Tl || u === null || rt(u, u.return)), a & 64 && Zt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = zt;
        if (Vl(t, l), Ll(l), a & 512 && (Tl || u === null || rt(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Ha] || n[rl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Hl(n, a, u), n[rl] = l, _l(n), a = n;
                      break l;
                    case "link":
                      var f = Iv(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Hl(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Iv(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Hl(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  n[rl] = l, _l(n), a = n;
                }
                l.stateNode = a;
              } else
                Pv(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = kv(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Pv(
              e,
              l.type,
              l.stateNode
            ) : kv(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && zc(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Vl(t, l), Ll(l), a & 512 && (Tl || u === null || rt(u, u.return)), u !== null && a & 4 && zc(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Vl(t, l), Ll(l), a & 512 && (Tl || u === null || rt(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Wu(e, "");
          } catch (r) {
            I(l, l.return, r);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, zc(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (Ac = !0);
        break;
      case 6:
        if (Vl(t, l), Ll(l), a & 4) {
          if (l.stateNode === null)
            throw Error(o(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (r) {
            I(l, l.return, r);
          }
        }
        break;
      case 3:
        if (pn = null, e = zt, zt = Dn(t.containerInfo), Vl(t, l), zt = e, Ll(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Ma(t.containerInfo);
          } catch (r) {
            I(l, l.return, r);
          }
        Ac && (Ac = !1, Py(l));
        break;
      case 4:
        a = zt, zt = Dn(
          l.stateNode.containerInfo
        ), Vl(t, l), Ll(l), zt = a;
        break;
      case 12:
        Vl(t, l), Ll(l);
        break;
      case 31:
        Vl(t, l), Ll(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 13:
        Vl(t, l), Ll(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (on = $l()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, d = Zt, g = Tl;
        if (Zt = d || e, Tl = g || i, Vl(t, l), Tl = g, Zt = d, Ll(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Zt || Tl || Xu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var T = i.memoizedProps.style, h = T != null && T.hasOwnProperty("display") ? T.display : null;
                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (r) {
                  I(i, i.return, r);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (r) {
                  I(i, i.return, r);
                }
              }
            } else if (t.tag === 18) {
              if (u === null) {
                i = t;
                try {
                  var S = i.stateNode;
                  e ? xv(S, !0) : xv(i.stateNode, !1);
                } catch (r) {
                  I(i, i.return, r);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), t = t.return;
            }
            u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, dn(l, u))));
        break;
      case 19:
        Vl(t, l), Ll(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Vl(t, l), Ll(l);
    }
  }
  function Ll(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (Ly(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(o(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = Tc(l);
            mn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Wu(f, ""), u.flags &= -33);
            var c = Tc(l);
            mn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, d = Tc(l);
            Ec(
              l,
              d,
              i
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (g) {
        I(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Py(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Py(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        wy(l, t.alternate, t), t = t.sibling;
  }
  function Xu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          cu(4, t, t.return), Xu(t);
          break;
        case 1:
          rt(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && xy(
            t,
            t.return,
            u
          ), Xu(t);
          break;
        case 27:
          me(t.stateNode);
        case 26:
        case 5:
          rt(t, t.return), Xu(t);
          break;
        case 22:
          t.memoizedState === null && Xu(t);
          break;
        case 30:
          Xu(t);
          break;
        default:
          Xu(t);
      }
      l = l.sibling;
    }
  }
  function Lt(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Lt(
            e,
            n,
            u
          ), ue(4, n);
          break;
        case 1:
          if (Lt(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (d) {
              I(a, a.return, d);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  H0(i[e], c);
            } catch (d) {
              I(a, a.return, d);
            }
          }
          u && f & 64 && Zy(n), ae(n, n.return);
          break;
        case 27:
          Ky(n);
        case 26:
        case 5:
          Lt(
            e,
            n,
            u
          ), u && a === null && f & 4 && Vy(n), ae(n, n.return);
          break;
        case 12:
          Lt(
            e,
            n,
            u
          );
          break;
        case 31:
          Lt(
            e,
            n,
            u
          ), u && f & 4 && Fy(e, n);
          break;
        case 13:
          Lt(
            e,
            n,
            u
          ), u && f & 4 && ky(e, n);
          break;
        case 22:
          n.memoizedState === null && Lt(
            e,
            n,
            u
          ), ae(n, n.return);
          break;
        case 30:
          break;
        default:
          Lt(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function _c(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Va(u));
  }
  function Oc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Va(l));
  }
  function Tt(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        lv(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function lv(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Tt(
          l,
          t,
          u,
          a
        ), e & 2048 && ue(9, t);
        break;
      case 1:
        Tt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        Tt(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Va(l)));
        break;
      case 12:
        if (e & 2048) {
          Tt(
            l,
            t,
            u,
            a
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            I(t, t.return, i);
          }
        } else
          Tt(
            l,
            t,
            u,
            a
          );
        break;
      case 31:
        Tt(
          l,
          t,
          u,
          a
        );
        break;
      case 13:
        Tt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Tt(
          l,
          t,
          u,
          a
        ) : ee(l, t) : n._visibility & 2 ? Tt(
          l,
          t,
          u,
          a
        ) : (n._visibility |= 2, ha(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), e & 2048 && _c(f, t);
        break;
      case 24:
        Tt(
          l,
          t,
          u,
          a
        ), e & 2048 && Oc(t.alternate, t);
        break;
      default:
        Tt(
          l,
          t,
          u,
          a
        );
    }
  }
  function ha(l, t, u, a, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, d = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ha(
            n,
            f,
            c,
            i,
            e
          ), ue(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? ha(
            n,
            f,
            c,
            i,
            e
          ) : ee(
            n,
            f
          ) : (g._visibility |= 2, ha(
            n,
            f,
            c,
            i,
            e
          )), e && d & 2048 && _c(
            f.alternate,
            f
          );
          break;
        case 24:
          ha(
            n,
            f,
            c,
            i,
            e
          ), e && d & 2048 && Oc(f.alternate, f);
          break;
        default:
          ha(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function ee(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            ee(u, a), e & 2048 && _c(
              a.alternate,
              a
            );
            break;
          case 24:
            ee(u, a), e & 2048 && Oc(a.alternate, a);
            break;
          default:
            ee(u, a);
        }
        t = t.sibling;
      }
  }
  var ne = 8192;
  function oa(l, t, u) {
    if (l.subtreeFlags & ne)
      for (l = l.child; l !== null; )
        tv(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function tv(l, t, u) {
    switch (l.tag) {
      case 26:
        oa(
          l,
          t,
          u
        ), l.flags & ne && l.memoizedState !== null && Gm(
          u,
          zt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        oa(
          l,
          t,
          u
        );
        break;
      case 3:
      case 4:
        var a = zt;
        zt = Dn(l.stateNode.containerInfo), oa(
          l,
          t,
          u
        ), zt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ne, ne = 16777216, oa(
          l,
          t,
          u
        ), ne = a) : oa(
          l,
          t,
          u
        ));
        break;
      default:
        oa(
          l,
          t,
          u
        );
    }
  }
  function uv(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function fe(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ol = a, ev(
            a,
            l
          );
        }
      uv(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        av(l), l = l.sibling;
  }
  function av(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fe(l), l.flags & 2048 && cu(9, l, l.return);
        break;
      case 3:
        fe(l);
        break;
      case 12:
        fe(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, hn(l)) : fe(l);
        break;
      default:
        fe(l);
    }
  }
  function hn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ol = a, ev(
            a,
            l
          );
        }
      uv(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          cu(8, t, t.return), hn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, hn(t));
          break;
        default:
          hn(t);
      }
      l = l.sibling;
    }
  }
  function ev(l, t) {
    for (; Ol !== null; ) {
      var u = Ol;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          cu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Va(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Ol = a;
      else
        l: for (u = l; Ol !== null; ) {
          a = Ol;
          var e = a.sibling, n = a.return;
          if (Wy(a), a === u) {
            Ol = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Ol = e;
            break l;
          }
          Ol = n;
        }
    }
  }
  var Is = {
    getCacheForType: function(l) {
      var t = Ul(gl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Ul(gl).controller.signal;
    }
  }, Ps = typeof WeakMap == "function" ? WeakMap : Map, W = 0, nl = null, X = null, x = 0, k = 0, ut = null, iu = !1, Sa = !1, Mc = !1, Kt = 0, ml = 0, yu = 0, Qu = 0, rc = 0, at = 0, ga = 0, ce = null, Kl = null, Dc = !1, on = 0, nv = 0, Sn = 1 / 0, gn = null, vu = null, El = 0, su = null, ba = null, Jt = 0, Uc = 0, pc = null, fv = null, ie = 0, Hc = null;
  function et() {
    return (W & 2) !== 0 && x !== 0 ? x & -x : b.T !== null ? Bc() : Ai();
  }
  function cv() {
    if (at === 0)
      if ((x & 536870912) === 0 || K) {
        var l = Oe;
        Oe <<= 1, (Oe & 3932160) === 0 && (Oe = 262144), at = l;
      } else at = 536870912;
    return l = lt.current, l !== null && (l.flags |= 32), at;
  }
  function Jl(l, t, u) {
    (l === nl && (k === 2 || k === 9) || l.cancelPendingCommit !== null) && (za(l, 0), mu(
      l,
      x,
      at,
      !1
    )), pa(l, u), ((W & 2) === 0 || l !== nl) && (l === nl && ((W & 2) === 0 && (Qu |= u), ml === 4 && mu(
      l,
      x,
      at,
      !1
    )), Dt(l));
  }
  function iv(l, t, u) {
    if ((W & 6) !== 0) throw Error(o(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ua(l, t), e = a ? um(l, t) : Rc(l, t, !0), n = a;
    do {
      if (e === 0) {
        Sa && !a && mu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !lm(u)) {
          e = Rc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ce;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (za(c, f).flags |= 256), f = Rc(
                c,
                f,
                !1
              ), f !== 2) {
                if (Mc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Qu |= n, e = 4;
                  break l;
                }
                n = Kl, Kl = e, n !== null && (Kl === null ? Kl = n : Kl.push.apply(
                  Kl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          za(l, 0), mu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              mu(
                a,
                t,
                at,
                !iu
              );
              break l;
            case 2:
              Kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (e = on + 300 - $l(), 10 < e)) {
            if (mu(
              a,
              t,
              at,
              !iu
            ), re(a, 0, !0) !== 0) break l;
            Jt = t, a.timeoutHandle = Xv(
              yv.bind(
                null,
                a,
                u,
                Kl,
                gn,
                Dc,
                t,
                at,
                Qu,
                ga,
                iu,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          yv(
            a,
            u,
            Kl,
            gn,
            Dc,
            t,
            at,
            Qu,
            ga,
            iu,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Dt(l);
  }
  function yv(l, t, u, a, e, n, f, c, i, d, g, T, h, S) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, T & 8192 || (T & 16785408) === 16785408) {
      T = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Nt
      }, tv(
        t,
        n,
        T
      );
      var r = (n & 62914560) === n ? on - $l() : (n & 4194048) === n ? nv - $l() : 0;
      if (r = jm(
        T,
        r
      ), r !== null) {
        Jt = n, l.cancelPendingCommit = r(
          gv.bind(
            null,
            l,
            t,
            n,
            u,
            a,
            e,
            f,
            c,
            i,
            g,
            T,
            null,
            h,
            S
          )
        ), mu(l, n, f, !d);
        return;
      }
    }
    gv(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      c,
      i
    );
  }
  function lm(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Il(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function mu(l, t, u, a) {
    t &= ~rc, t &= ~Qu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - kl(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && zi(l, u, t);
  }
  function bn() {
    return (W & 6) === 0 ? (ye(0), !1) : !0;
  }
  function Nc() {
    if (X !== null) {
      if (k === 0)
        var l = X.return;
      else
        l = X, Yt = Nu = null, wf(l), ya = null, Ka = 0, l = X;
      for (; l !== null; )
        Qy(l.alternate, l), l = l.return;
      X = null;
    }
  }
  function za(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Tm(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Jt = 0, Nc(), nl = l, X = u = qt(l.current, null), x = t, k = 0, ut = null, iu = !1, Sa = Ua(l, t), Mc = !1, ga = at = rc = Qu = yu = ml = 0, Kl = ce = null, Dc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - kl(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Kt = t, je(), u;
  }
  function vv(l, t) {
    B = null, b.H = Pa, t === ia || t === Je ? (t = r0(), k = 3) : t === Yf ? (t = r0(), k = 4) : k = t === yc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ut = t, X === null && (ml = 1, fn(
      l,
      yt(t, l.current)
    ));
  }
  function sv() {
    var l = lt.current;
    return l === null ? !0 : (x & 4194048) === x ? dt === null : (x & 62914560) === x || (x & 536870912) !== 0 ? l === dt : !1;
  }
  function mv() {
    var l = b.H;
    return b.H = Pa, l === null ? Pa : l;
  }
  function dv() {
    var l = b.A;
    return b.A = Is, l;
  }
  function zn() {
    ml = 4, iu || (x & 4194048) !== x && lt.current !== null || (Sa = !0), (yu & 134217727) === 0 && (Qu & 134217727) === 0 || nl === null || mu(
      nl,
      x,
      at,
      !1
    );
  }
  function Rc(l, t, u) {
    var a = W;
    W |= 2;
    var e = mv(), n = dv();
    (nl !== l || x !== t) && (gn = null, za(l, t)), t = !1;
    var f = ml;
    l: do
      try {
        if (k !== 0 && X !== null) {
          var c = X, i = ut;
          switch (k) {
            case 8:
              Nc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              lt.current === null && (t = !0);
              var d = k;
              if (k = 0, ut = null, Ta(l, c, i, d), u && Sa) {
                f = 0;
                break l;
              }
              break;
            default:
              d = k, k = 0, ut = null, Ta(l, c, i, d);
          }
        }
        tm(), f = ml;
        break;
      } catch (g) {
        vv(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Yt = Nu = null, W = a, b.H = e, b.A = n, X === null && (nl = null, x = 0, je()), f;
  }
  function tm() {
    for (; X !== null; ) hv(X);
  }
  function um(l, t) {
    var u = W;
    W |= 2;
    var a = mv(), e = dv();
    nl !== l || x !== t ? (gn = null, Sn = $l() + 500, za(l, t)) : Sa = Ua(
      l,
      t
    );
    l: do
      try {
        if (k !== 0 && X !== null) {
          t = X;
          var n = ut;
          t: switch (k) {
            case 1:
              k = 0, ut = null, Ta(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (O0(n)) {
                k = 0, ut = null, ov(t);
                break;
              }
              t = function() {
                k !== 2 && k !== 9 || nl !== l || (k = 7), Dt(l);
              }, n.then(t, t);
              break l;
            case 3:
              k = 7;
              break l;
            case 4:
              k = 5;
              break l;
            case 7:
              O0(n) ? (k = 0, ut = null, ov(t)) : (k = 0, ut = null, Ta(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (X.tag) {
                case 26:
                  f = X.memoizedState;
                case 5:
                case 27:
                  var c = X;
                  if (f ? l1(f) : c.stateNode.complete) {
                    k = 0, ut = null;
                    var i = c.sibling;
                    if (i !== null) X = i;
                    else {
                      var d = c.return;
                      d !== null ? (X = d, Tn(d)) : X = null;
                    }
                    break t;
                  }
              }
              k = 0, ut = null, Ta(l, t, n, 5);
              break;
            case 6:
              k = 0, ut = null, Ta(l, t, n, 6);
              break;
            case 8:
              Nc(), ml = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        am();
        break;
      } catch (g) {
        vv(l, g);
      }
    while (!0);
    return Yt = Nu = null, b.H = a, b.A = e, W = u, X !== null ? 0 : (nl = null, x = 0, je(), ml);
  }
  function am() {
    for (; X !== null && !r1(); )
      hv(X);
  }
  function hv(l) {
    var t = jy(l.alternate, l, Kt);
    l.memoizedProps = l.pendingProps, t === null ? Tn(l) : X = t;
  }
  function ov(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ry(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          x
        );
        break;
      case 11:
        t = Ry(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          x
        );
        break;
      case 5:
        wf(t);
      default:
        Qy(u, t), t = X = d0(t, Kt), t = jy(u, t, Kt);
    }
    l.memoizedProps = l.pendingProps, t === null ? Tn(l) : X = t;
  }
  function Ta(l, t, u, a) {
    Yt = Nu = null, wf(t), ya = null, Ka = 0;
    var e = t.return;
    try {
      if (Ks(
        l,
        e,
        t,
        u,
        x
      )) {
        ml = 1, fn(
          l,
          yt(u, l.current)
        ), X = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw X = e, n;
      ml = 1, fn(
        l,
        yt(u, l.current)
      ), X = null;
      return;
    }
    t.flags & 32768 ? (K || a === 1 ? l = !0 : Sa || (x & 536870912) !== 0 ? l = !1 : (iu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = lt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Sv(t, l)) : Tn(t);
  }
  function Tn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Sv(
          t,
          iu
        );
        return;
      }
      l = t.return;
      var u = Ws(
        t.alternate,
        t,
        Kt
      );
      if (u !== null) {
        X = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        X = t;
        return;
      }
      X = t = l;
    } while (t !== null);
    ml === 0 && (ml = 5);
  }
  function Sv(l, t) {
    do {
      var u = $s(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, X = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        X = l;
        return;
      }
      X = l = u;
    } while (l !== null);
    ml = 6, X = null;
  }
  function gv(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      En();
    while (El !== 0);
    if ((W & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (n = t.lanes | t.childLanes, n |= Tf, B1(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === nl && (X = nl = null, x = 0), ba = t, su = l, Jt = u, Uc = n, pc = e, fv = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, cm(Ae, function() {
        return Av(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null, e = O.p, O.p = 2, f = W, W |= 4;
        try {
          Fs(l, t, u);
        } finally {
          W = f, O.p = e, b.T = a;
        }
      }
      El = 1, bv(), zv(), Tv();
    }
  }
  function bv() {
    if (El === 1) {
      El = 0;
      var l = su, t = ba, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = b.T, b.T = null;
        var a = O.p;
        O.p = 2;
        var e = W;
        W |= 4;
        try {
          Iy(t, l);
          var n = Lc, f = e0(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && a0(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && of(c)) {
              var d = i.start, g = i.end;
              if (g === void 0 && (g = d), "selectionStart" in c)
                c.selectionStart = d, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var T = c.ownerDocument || document, h = T && T.defaultView || window;
                if (h.getSelection) {
                  var S = h.getSelection(), r = c.textContent.length, N = Math.min(i.start, r), ul = i.end === void 0 ? N : Math.min(i.end, r);
                  !S.extend && N > ul && (f = ul, ul = N, N = f);
                  var s = u0(
                    c,
                    N
                  ), y = u0(
                    c,
                    ul
                  );
                  if (s && y && (S.rangeCount !== 1 || S.anchorNode !== s.node || S.anchorOffset !== s.offset || S.focusNode !== y.node || S.focusOffset !== y.offset)) {
                    var m = T.createRange();
                    m.setStart(s.node, s.offset), S.removeAllRanges(), N > ul ? (S.addRange(m), S.extend(y.node, y.offset)) : (m.setEnd(y.node, y.offset), S.addRange(m));
                  }
                }
              }
            }
            for (T = [], S = c; S = S.parentNode; )
              S.nodeType === 1 && T.push({
                element: S,
                left: S.scrollLeft,
                top: S.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var z = T[c];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          qn = !!Vc, Lc = Vc = null;
        } finally {
          W = e, O.p = a, b.T = u;
        }
      }
      l.current = t, El = 2;
    }
  }
  function zv() {
    if (El === 2) {
      El = 0;
      var l = su, t = ba, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = b.T, b.T = null;
        var a = O.p;
        O.p = 2;
        var e = W;
        W |= 4;
        try {
          wy(l, t.alternate, t);
        } finally {
          W = e, O.p = a, b.T = u;
        }
      }
      El = 3;
    }
  }
  function Tv() {
    if (El === 4 || El === 3) {
      El = 0, D1();
      var l = su, t = ba, u = Jt, a = fv;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? El = 5 : (El = 0, ba = su = null, Ev(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (vu = null), $n(u), t = t.stateNode, Fl && typeof Fl.onCommitFiberRoot == "function")
        try {
          Fl.onCommitFiberRoot(
            Da,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = b.T, e = O.p, O.p = 2, b.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          b.T = t, O.p = e;
        }
      }
      (Jt & 3) !== 0 && En(), Dt(l), e = l.pendingLanes, (u & 261930) !== 0 && (e & 42) !== 0 ? l === Hc ? ie++ : (ie = 0, Hc = l) : ie = 0, ye(0);
    }
  }
  function Ev(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Va(t)));
  }
  function En() {
    return bv(), zv(), Tv(), Av();
  }
  function Av() {
    if (El !== 5) return !1;
    var l = su, t = Uc;
    Uc = 0;
    var u = $n(Jt), a = b.T, e = O.p;
    try {
      O.p = 32 > u ? 32 : u, b.T = null, u = pc, pc = null;
      var n = su, f = Jt;
      if (El = 0, ba = su = null, Jt = 0, (W & 6) !== 0) throw Error(o(331));
      var c = W;
      if (W |= 4, av(n.current), lv(
        n,
        n.current,
        f,
        u
      ), W = c, ye(0, !1), Fl && typeof Fl.onPostCommitFiberRoot == "function")
        try {
          Fl.onPostCommitFiberRoot(Da, n);
        } catch {
        }
      return !0;
    } finally {
      O.p = e, b.T = a, Ev(l, t);
    }
  }
  function _v(l, t, u) {
    t = yt(u, t), t = ic(l.stateNode, t, 2), l = eu(l, t, 2), l !== null && (pa(l, 2), Dt(l));
  }
  function I(l, t, u) {
    if (l.tag === 3)
      _v(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _v(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (vu === null || !vu.has(a))) {
            l = yt(u, l), u = Oy(2), a = eu(t, u, 2), a !== null && (My(
              u,
              a,
              t,
              l
            ), pa(a, 2), Dt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function qc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Ps();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (Mc = !0, e.add(u), l = em.bind(null, l, t, u), t.then(l, l));
  }
  function em(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, nl === l && (x & u) === u && (ml === 4 || ml === 3 && (x & 62914560) === x && 300 > $l() - on ? (W & 2) === 0 && za(l, 0) : rc |= u, ga === x && (ga = 0)), Dt(l);
  }
  function Ov(l, t) {
    t === 0 && (t = bi()), l = Uu(l, t), l !== null && (pa(l, t), Dt(l));
  }
  function nm(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), Ov(l, u);
  }
  function fm(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(t), Ov(l, u);
  }
  function cm(l, t) {
    return Kn(l, t);
  }
  var An = null, Ea = null, Cc = !1, _n = !1, Yc = !1, du = 0;
  function Dt(l) {
    l !== Ea && l.next === null && (Ea === null ? An = Ea = l : Ea = Ea.next = l), _n = !0, Cc || (Cc = !0, ym());
  }
  function ye(l, t) {
    if (!Yc && _n) {
      Yc = !0;
      do
        for (var u = !1, a = An; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - kl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, Uv(a, n));
          } else
            n = x, n = re(
              a,
              a === nl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ua(a, n) || (u = !0, Uv(a, n));
          a = a.next;
        }
      while (u);
      Yc = !1;
    }
  }
  function im() {
    Mv();
  }
  function Mv() {
    _n = Cc = !1;
    var l = 0;
    du !== 0 && zm() && (l = du);
    for (var t = $l(), u = null, a = An; a !== null; ) {
      var e = a.next, n = rv(a, t);
      n === 0 ? (a.next = null, u === null ? An = e : u.next = e, e === null && (Ea = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (_n = !0)), a = e;
    }
    El !== 0 && El !== 5 || ye(l), du !== 0 && (du = 0);
  }
  function rv(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - kl(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = Y1(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = nl, u = x, u = re(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (k === 2 || k === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Jn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ua(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Jn(a), $n(u)) {
        case 2:
        case 8:
          u = Si;
          break;
        case 32:
          u = Ae;
          break;
        case 268435456:
          u = gi;
          break;
        default:
          u = Ae;
      }
      return a = Dv.bind(null, l), u = Kn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Jn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Dv(l, t) {
    if (El !== 0 && El !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (En() && l.callbackNode !== u)
      return null;
    var a = x;
    return a = re(
      l,
      l === nl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (iv(l, a, t), rv(l, $l()), l.callbackNode != null && l.callbackNode === u ? Dv.bind(null, l) : null);
  }
  function Uv(l, t) {
    if (En()) return null;
    iv(l, t, !0);
  }
  function ym() {
    Em(function() {
      (W & 6) !== 0 ? Kn(
        oi,
        im
      ) : Mv();
    });
  }
  function Bc() {
    if (du === 0) {
      var l = fa;
      l === 0 && (l = _e, _e <<= 1, (_e & 261888) === 0 && (_e = 256)), du = l;
    }
    return du;
  }
  function pv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : He("" + l);
  }
  function Hv(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function vm(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = pv(
        (e[Ql] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Ql] || null) ? pv(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new Ce(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (du !== 0) {
                  var i = f ? Hv(e, f) : new FormData(e);
                  uc(
                    u,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? Hv(e, f) : new FormData(e), uc(
                  u,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Gc = 0; Gc < zf.length; Gc++) {
    var jc = zf[Gc], sm = jc.toLowerCase(), mm = jc[0].toUpperCase() + jc.slice(1);
    bt(
      sm,
      "on" + mm
    );
  }
  bt(c0, "onAnimationEnd"), bt(i0, "onAnimationIteration"), bt(y0, "onAnimationStart"), bt("dblclick", "onDoubleClick"), bt("focusin", "onFocus"), bt("focusout", "onBlur"), bt(Us, "onTransitionRun"), bt(ps, "onTransitionStart"), bt(Hs, "onTransitionCancel"), bt(v0, "onTransitionEnd"), Ju("onMouseEnter", ["mouseout", "mouseover"]), Ju("onMouseLeave", ["mouseout", "mouseover"]), Ju("onPointerEnter", ["pointerout", "pointerover"]), Ju("onPointerLeave", ["pointerout", "pointerover"]), Ou(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ou(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ou("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ou(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ou(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ou(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ve = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), dm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ve)
  );
  function Nv(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f], i = c.instance, d = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = d;
            try {
              n(e);
            } catch (g) {
              Ge(g);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, d = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = d;
            try {
              n(e);
            } catch (g) {
              Ge(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function Q(l, t) {
    var u = t[Fn];
    u === void 0 && (u = t[Fn] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Rv(t, l, 2, !1), u.add(a));
  }
  function Xc(l, t, u) {
    var a = 0;
    t && (a |= 4), Rv(
      u,
      l,
      a,
      t
    );
  }
  var On = "_reactListening" + Math.random().toString(36).slice(2);
  function Qc(l) {
    if (!l[On]) {
      l[On] = !0, Mi.forEach(function(u) {
        u !== "selectionchange" && (dm.has(u) || Xc(u, !1, l), Xc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[On] || (t[On] = !0, Xc("selectionchange", !1, t));
    }
  }
  function Rv(l, t, u, a) {
    switch (c1(t)) {
      case 2:
        var e = Zm;
        break;
      case 8:
        e = xm;
        break;
      default:
        e = ti;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !nf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function Zc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = Vu(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Gi(function() {
      var d = n, g = af(u), T = [];
      l: {
        var h = s0.get(l);
        if (h !== void 0) {
          var S = Ce, r = l;
          switch (l) {
            case "keypress":
              if (Re(u) === 0) break l;
            case "keydown":
            case "keyup":
              S = fs;
              break;
            case "focusin":
              r = "focus", S = vf;
              break;
            case "focusout":
              r = "blur", S = vf;
              break;
            case "beforeblur":
            case "afterblur":
              S = vf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = Qi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = W1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = ys;
              break;
            case c0:
            case i0:
            case y0:
              S = k1;
              break;
            case v0:
              S = ss;
              break;
            case "scroll":
            case "scrollend":
              S = J1;
              break;
            case "wheel":
              S = ds;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = P1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = xi;
              break;
            case "toggle":
            case "beforetoggle":
              S = os;
          }
          var N = (t & 4) !== 0, ul = !N && (l === "scroll" || l === "scrollend"), s = N ? h !== null ? h + "Capture" : null : h;
          N = [];
          for (var y = d, m; y !== null; ) {
            var z = y;
            if (m = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || m === null || s === null || (z = Ra(y, s), z != null && N.push(
              se(y, z, m)
            )), ul) break;
            y = y.return;
          }
          0 < N.length && (h = new S(
            h,
            r,
            null,
            u,
            g
          ), T.push({ event: h, listeners: N }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", S = l === "mouseout" || l === "pointerout", h && u !== uf && (r = u.relatedTarget || u.fromElement) && (Vu(r) || r[xu]))
            break l;
          if ((S || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, S ? (r = u.relatedTarget || u.toElement, S = d, r = r ? Vu(r) : null, r !== null && (ul = dl(r), N = r.tag, r !== ul || N !== 5 && N !== 27 && N !== 6) && (r = null)) : (S = null, r = d), S !== r)) {
            if (N = Qi, z = "onMouseLeave", s = "onMouseEnter", y = "mouse", (l === "pointerout" || l === "pointerover") && (N = xi, z = "onPointerLeave", s = "onPointerEnter", y = "pointer"), ul = S == null ? h : Na(S), m = r == null ? h : Na(r), h = new N(
              z,
              y + "leave",
              S,
              u,
              g
            ), h.target = ul, h.relatedTarget = m, z = null, Vu(g) === d && (N = new N(
              s,
              y + "enter",
              r,
              u,
              g
            ), N.target = m, N.relatedTarget = ul, z = N), ul = z, S && r)
              t: {
                for (N = hm, s = S, y = r, m = 0, z = s; z; z = N(z))
                  m++;
                z = 0;
                for (var p = y; p; p = N(p))
                  z++;
                for (; 0 < m - z; )
                  s = N(s), m--;
                for (; 0 < z - m; )
                  y = N(y), z--;
                for (; m--; ) {
                  if (s === y || y !== null && s === y.alternate) {
                    N = s;
                    break t;
                  }
                  s = N(s), y = N(y);
                }
                N = null;
              }
            else N = null;
            S !== null && qv(
              T,
              h,
              S,
              N,
              !1
            ), r !== null && ul !== null && qv(
              T,
              ul,
              r,
              N,
              !0
            );
          }
        }
        l: {
          if (h = d ? Na(d) : window, S = h.nodeName && h.nodeName.toLowerCase(), S === "select" || S === "input" && h.type === "file")
            var J = Fi;
          else if (Wi(h))
            if (ki)
              J = Ms;
            else {
              J = _s;
              var U = As;
            }
          else
            S = h.nodeName, !S || S.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? d && tf(d.elementType) && (J = Fi) : J = Os;
          if (J && (J = J(l, d))) {
            $i(
              T,
              J,
              u,
              g
            );
            break l;
          }
          U && U(l, h, d), l === "focusout" && d && h.type === "number" && d.memoizedProps.value != null && lf(h, "number", h.value);
        }
        switch (U = d ? Na(d) : window, l) {
          case "focusin":
            (Wi(U) || U.contentEditable === "true") && (Iu = U, Sf = d, Qa = null);
            break;
          case "focusout":
            Qa = Sf = Iu = null;
            break;
          case "mousedown":
            gf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gf = !1, n0(T, u, g);
            break;
          case "selectionchange":
            if (Ds) break;
          case "keydown":
          case "keyup":
            n0(T, u, g);
        }
        var G;
        if (mf)
          l: {
            switch (l) {
              case "compositionstart":
                var V = "onCompositionStart";
                break l;
              case "compositionend":
                V = "onCompositionEnd";
                break l;
              case "compositionupdate":
                V = "onCompositionUpdate";
                break l;
            }
            V = void 0;
          }
        else
          ku ? Ji(l, u) && (V = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (V = "onCompositionStart");
        V && (Vi && u.locale !== "ko" && (ku || V !== "onCompositionStart" ? V === "onCompositionEnd" && ku && (G = ji()) : (kt = g, ff = "value" in kt ? kt.value : kt.textContent, ku = !0)), U = Mn(d, V), 0 < U.length && (V = new Zi(
          V,
          l,
          null,
          u,
          g
        ), T.push({ event: V, listeners: U }), G ? V.data = G : (G = wi(u), G !== null && (V.data = G)))), (G = gs ? bs(l, u) : zs(l, u)) && (V = Mn(d, "onBeforeInput"), 0 < V.length && (U = new Zi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          g
        ), T.push({
          event: U,
          listeners: V
        }), U.data = G)), vm(
          T,
          l,
          d,
          u,
          g
        );
      }
      Nv(T, t);
    });
  }
  function se(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Mn(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ra(l, u), e != null && a.unshift(
        se(l, e, n)
      ), e = Ra(l, t), e != null && a.push(
        se(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function hm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function qv(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, d = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || d === null || (i = d, e ? (d = Ra(u, n), d != null && f.unshift(
        se(u, d, i)
      )) : e || (d = Ra(u, n), d != null && f.push(
        se(u, d, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var om = /\r\n?/g, Sm = /\u0000|\uFFFD/g;
  function Cv(l) {
    return (typeof l == "string" ? l : "" + l).replace(om, `
`).replace(Sm, "");
  }
  function Yv(l, t) {
    return t = Cv(t), Cv(l) === t;
  }
  function tl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Wu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Wu(l, "" + a);
        break;
      case "className":
        Ue(l, "class", a);
        break;
      case "tabIndex":
        Ue(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ue(l, u, a);
        break;
      case "style":
        Yi(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Ue(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = He("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && tl(l, t, "name", e.name, e, null), tl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), tl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), tl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (tl(l, t, "encType", e.encType, e, null), tl(l, t, "method", e.method, e, null), tl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = He("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Nt);
        break;
      case "onScroll":
        a != null && Q("scroll", l);
        break;
      case "onScrollEnd":
        a != null && Q("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = He("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        Q("beforetoggle", l), Q("toggle", l), De(l, "popover", a);
        break;
      case "xlinkActuate":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        De(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = L1.get(u) || u, De(l, u, a));
    }
  }
  function xc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Yi(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Wu(l, a) : (typeof a == "number" || typeof a == "bigint") && Wu(l, "" + a);
        break;
      case "onScroll":
        a != null && Q("scroll", l);
        break;
      case "onScrollEnd":
        a != null && Q("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Nt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ri.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Ql] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : De(l, u, a);
          }
    }
  }
  function Hl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Q("error", l), Q("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  tl(l, t, n, f, u, null);
              }
          }
        e && tl(l, t, "srcSet", u.srcSet, u, null), a && tl(l, t, "src", u.src, u, null);
        return;
      case "input":
        Q("invalid", l);
        var c = n = f = e = null, i = null, d = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var g = u[a];
            if (g != null)
              switch (a) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  d = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(o(137, t));
                  break;
                default:
                  tl(l, t, a, g, u, null);
              }
          }
        Ni(
          l,
          n,
          c,
          i,
          d,
          f,
          e,
          !1
        );
        return;
      case "select":
        Q("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (c = u[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                tl(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? wu(l, !!a, t, !1) : u != null && wu(l, !!a, u, !0);
        return;
      case "textarea":
        Q("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(o(91));
                break;
              default:
                tl(l, t, f, c, u, null);
            }
        qi(l, a, e, n);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                tl(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        Q("beforetoggle", l), Q("toggle", l), Q("cancel", l), Q("close", l);
        break;
      case "iframe":
      case "object":
        Q("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ve.length; a++)
          Q(ve[a], l);
        break;
      case "image":
        Q("error", l), Q("load", l);
        break;
      case "details":
        Q("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Q("error", l), Q("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d in u)
          if (u.hasOwnProperty(d) && (a = u[d], a != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                tl(l, t, d, a, u, null);
            }
        return;
      default:
        if (tf(t)) {
          for (g in u)
            u.hasOwnProperty(g) && (a = u[g], a !== void 0 && xc(
              l,
              t,
              g,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && tl(l, t, c, a, u, null));
  }
  function gm(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, d = null, g = null;
        for (S in u) {
          var T = u[S];
          if (u.hasOwnProperty(S) && T != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                a.hasOwnProperty(S) || tl(l, t, S, null, a, T);
            }
        }
        for (var h in a) {
          var S = a[h];
          if (T = u[h], a.hasOwnProperty(h) && (S != null || T != null))
            switch (h) {
              case "type":
                n = S;
                break;
              case "name":
                e = S;
                break;
              case "checked":
                d = S;
                break;
              case "defaultChecked":
                g = S;
                break;
              case "value":
                f = S;
                break;
              case "defaultValue":
                c = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(o(137, t));
                break;
              default:
                S !== T && tl(
                  l,
                  t,
                  h,
                  S,
                  a,
                  T
                );
            }
        }
        Pn(
          l,
          f,
          c,
          i,
          d,
          g,
          n,
          e
        );
        return;
      case "select":
        S = f = c = h = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                S = i;
              default:
                a.hasOwnProperty(n) || tl(
                  l,
                  t,
                  n,
                  null,
                  a,
                  i
                );
            }
        for (e in a)
          if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && tl(
                  l,
                  t,
                  e,
                  n,
                  a,
                  i
                );
            }
        t = c, u = f, a = S, h != null ? wu(l, !!u, h, !1) : !!a != !!u && (t != null ? wu(l, !!u, t, !0) : wu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        S = h = null;
        for (c in u)
          if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                tl(l, t, c, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                h = e;
                break;
              case "defaultValue":
                S = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(o(91));
                break;
              default:
                e !== n && tl(l, t, f, e, a, n);
            }
        Ri(l, h, S);
        return;
      case "option":
        for (var r in u)
          if (h = u[r], u.hasOwnProperty(r) && h != null && !a.hasOwnProperty(r))
            switch (r) {
              case "selected":
                l.selected = !1;
                break;
              default:
                tl(
                  l,
                  t,
                  r,
                  null,
                  a,
                  h
                );
            }
        for (i in a)
          if (h = a[i], S = u[i], a.hasOwnProperty(i) && h !== S && (h != null || S != null))
            switch (i) {
              case "selected":
                l.selected = h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                tl(
                  l,
                  t,
                  i,
                  h,
                  a,
                  S
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var N in u)
          h = u[N], u.hasOwnProperty(N) && h != null && !a.hasOwnProperty(N) && tl(l, t, N, null, a, h);
        for (d in a)
          if (h = a[d], S = u[d], a.hasOwnProperty(d) && h !== S && (h != null || S != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(o(137, t));
                break;
              default:
                tl(
                  l,
                  t,
                  d,
                  h,
                  a,
                  S
                );
            }
        return;
      default:
        if (tf(t)) {
          for (var ul in u)
            h = u[ul], u.hasOwnProperty(ul) && h !== void 0 && !a.hasOwnProperty(ul) && xc(
              l,
              t,
              ul,
              void 0,
              a,
              h
            );
          for (g in a)
            h = a[g], S = u[g], !a.hasOwnProperty(g) || h === S || h === void 0 && S === void 0 || xc(
              l,
              t,
              g,
              h,
              a,
              S
            );
          return;
        }
    }
    for (var s in u)
      h = u[s], u.hasOwnProperty(s) && h != null && !a.hasOwnProperty(s) && tl(l, t, s, null, a, h);
    for (T in a)
      h = a[T], S = u[T], !a.hasOwnProperty(T) || h === S || h == null && S == null || tl(l, t, T, h, a, S);
  }
  function Bv(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function bm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && Bv(f)) {
          for (f = 0, c = e.responseEnd, a += 1; a < u.length; a++) {
            var i = u[a], d = i.startTime;
            if (d > c) break;
            var g = i.transferSize, T = i.initiatorType;
            g && Bv(T) && (i = i.responseEnd, f += g * (i < c ? 1 : (c - d) / (i - d)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Vc = null, Lc = null;
  function rn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Gv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function jv(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Kc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Jc = null;
  function zm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Jc ? !1 : (Jc = l, !0) : (Jc = null, !1);
  }
  var Xv = typeof setTimeout == "function" ? setTimeout : void 0, Tm = typeof clearTimeout == "function" ? clearTimeout : void 0, Qv = typeof Promise == "function" ? Promise : void 0, Em = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qv < "u" ? function(l) {
    return Qv.resolve(null).then(l).catch(Am);
  } : Xv;
  function Am(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function hu(l) {
    return l === "head";
  }
  function Zv(l, t) {
    var u = t, a = 0;
    do {
      var e = u.nextSibling;
      if (l.removeChild(u), e && e.nodeType === 8)
        if (u = e.data, u === "/$" || u === "/&") {
          if (a === 0) {
            l.removeChild(e), Ma(t);
            return;
          }
          a--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          a++;
        else if (u === "html")
          me(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, me(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, c = n.nodeName;
            n[Ha] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && me(l.ownerDocument.body);
      u = e;
    } while (u);
    Ma(t);
  }
  function xv(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8)
        if (u = a.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function wc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          wc(u), kn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function _m(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Ha])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = ht(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Om(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function Vv(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function Wc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function $c(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Mm(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function ht(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var Fc = null;
  function Lv(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0)
            return ht(l.nextSibling);
          t--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Kv(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Jv(l, t, u) {
    switch (t = rn(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(o(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(o(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function me(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    kn(l);
  }
  var ot = /* @__PURE__ */ new Map(), wv = /* @__PURE__ */ new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var wt = O.d;
  O.d = {
    f: rm,
    r: Dm,
    D: Um,
    C: pm,
    L: Hm,
    m: Nm,
    X: qm,
    S: Rm,
    M: Cm
  };
  function rm() {
    var l = wt.f(), t = bn();
    return l || t;
  }
  function Dm(l) {
    var t = Lu(l);
    t !== null && t.tag === 5 && t.type === "form" ? vy(t) : wt.r(l);
  }
  var Aa = typeof document > "u" ? null : document;
  function Wv(l, t, u) {
    var a = Aa;
    if (a && typeof t == "string" && t) {
      var e = ct(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), wv.has(e) || (wv.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Hl(t, "link", l), _l(t), a.head.appendChild(t)));
    }
  }
  function Um(l) {
    wt.D(l), Wv("dns-prefetch", l, null);
  }
  function pm(l, t) {
    wt.C(l, t), Wv("preconnect", l, t);
  }
  function Hm(l, t, u) {
    wt.L(l, t, u);
    var a = Aa;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + ct(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + ct(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + ct(
        u.imageSizes
      ) + '"]')) : e += '[href="' + ct(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = _a(l);
          break;
        case "script":
          n = Oa(l);
      }
      ot.has(n) || (l = R(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), ot.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(de(n)) || t === "script" && a.querySelector(he(n)) || (t = a.createElement("link"), Hl(t, "link", l), _l(t), a.head.appendChild(t)));
    }
  }
  function Nm(l, t) {
    wt.m(l, t);
    var u = Aa;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + ct(a) + '"][href="' + ct(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Oa(l);
      }
      if (!ot.has(n) && (l = R({ rel: "modulepreload", href: l }, t), ot.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(he(n)))
              return;
        }
        a = u.createElement("link"), Hl(a, "link", l), _l(a), u.head.appendChild(a);
      }
    }
  }
  function Rm(l, t, u) {
    wt.S(l, t, u);
    var a = Aa;
    if (a && l) {
      var e = Ku(a).hoistableStyles, n = _a(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          de(n)
        ))
          c.loading = 5;
        else {
          l = R(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = ot.get(n)) && kc(l, u);
          var i = f = a.createElement("link");
          _l(i), Hl(i, "link", l), i._p = new Promise(function(d, g) {
            i.onload = d, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Un(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function qm(l, t) {
    wt.X(l, t);
    var u = Aa;
    if (u && l) {
      var a = Ku(u).hoistableScripts, e = Oa(l), n = a.get(e);
      n || (n = u.querySelector(he(e)), n || (l = R({ src: l, async: !0 }, t), (t = ot.get(e)) && Ic(l, t), n = u.createElement("script"), _l(n), Hl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Cm(l, t) {
    wt.M(l, t);
    var u = Aa;
    if (u && l) {
      var a = Ku(u).hoistableScripts, e = Oa(l), n = a.get(e);
      n || (n = u.querySelector(he(e)), n || (l = R({ src: l, async: !0, type: "module" }, t), (t = ot.get(e)) && Ic(l, t), n = u.createElement("script"), _l(n), Hl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function $v(l, t, u, a) {
    var e = (e = j.current) ? Dn(e) : null;
    if (!e) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = _a(u.href), u = Ku(
          e
        ).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = _a(u.href);
          var n = Ku(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            de(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), ot.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, ot.set(l, u), n || Ym(
            e,
            l,
            u,
            f.state
          ))), t && a === null)
            throw Error(o(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Oa(u), u = Ku(
          e
        ).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, l));
    }
  }
  function _a(l) {
    return 'href="' + ct(l) + '"';
  }
  function de(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Fv(l) {
    return R({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Ym(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Hl(t, "link", u), _l(t), l.head.appendChild(t));
  }
  function Oa(l) {
    return '[src="' + ct(l) + '"]';
  }
  function he(l) {
    return "script[async]" + l;
  }
  function kv(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + ct(u.href) + '"]'
          );
          if (a)
            return t.instance = a, _l(a), a;
          var e = R({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), _l(a), Hl(a, "style", e), Un(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = _a(u.href);
          var n = l.querySelector(
            de(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, _l(n), n;
          a = Fv(u), (e = ot.get(e)) && kc(a, e), n = (l.ownerDocument || l).createElement("link"), _l(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Hl(n, "link", a), t.state.loading |= 4, Un(n, u.precedence, l), t.instance = n;
        case "script":
          return n = Oa(u.src), (e = l.querySelector(
            he(n)
          )) ? (t.instance = e, _l(e), e) : (a = u, (e = ot.get(n)) && (a = R({}, u), Ic(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), _l(e), Hl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Un(a, u.precedence, l));
    return t.instance;
  }
  function Un(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function kc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Ic(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var pn = null;
  function Iv(l, t, u) {
    if (pn === null) {
      var a = /* @__PURE__ */ new Map(), e = pn = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = pn, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Ha] || n[rl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Pv(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Bm(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function l1(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Gm(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = _a(a.href), n = t.querySelector(
          de(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Hn.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, _l(n);
          return;
        }
        n = t.ownerDocument || t, a = Fv(a), (e = ot.get(e)) && kc(a, e), n = n.createElement("link"), _l(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Hl(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Hn.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Pc = 0;
  function jm(l, t) {
    return l.stylesheets && l.count === 0 && Rn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Pc === 0 && (Pc = 62500 * bm());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Pc ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e);
      };
    } : null;
  }
  function Hn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Rn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Nn = null;
  function Rn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Nn = /* @__PURE__ */ new Map(), t.forEach(Xm, l), Nn = null, Hn.call(l));
  }
  function Xm(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Nn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Nn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Hn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var oe = {
    $$typeof: Nl,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0
  };
  function Qm(l, t, u, a, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wn(0), this.hiddenUpdates = wn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function t1(l, t, u, a, e, n, f, c, i, d, g, T) {
    return l = new Qm(
      l,
      t,
      u,
      f,
      i,
      d,
      g,
      T,
      c
    ), t = 1, n === !0 && (t |= 24), n = Pl(3, null, null, t), l.current = n, n.stateNode = l, t = Rf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Bf(n), l;
  }
  function u1(l) {
    return l ? (l = ta, l) : ta;
  }
  function a1(l, t, u, a, e, n) {
    e = u1(e), a.context === null ? a.context = e : a.pendingContext = e, a = au(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = eu(l, a, t), u !== null && (Jl(u, l, t), wa(u, l, t));
  }
  function e1(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function li(l, t) {
    e1(l, t), (l = l.alternate) && e1(l, t);
  }
  function n1(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Uu(l, 67108864);
      t !== null && Jl(t, l, 67108864), li(l, 67108864);
    }
  }
  function f1(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = et();
      t = Wn(t);
      var u = Uu(l, t);
      u !== null && Jl(u, l, t), li(l, t);
    }
  }
  var qn = !0;
  function Zm(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = O.p;
    try {
      O.p = 2, ti(l, t, u, a);
    } finally {
      O.p = n, b.T = e;
    }
  }
  function xm(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = O.p;
    try {
      O.p = 8, ti(l, t, u, a);
    } finally {
      O.p = n, b.T = e;
    }
  }
  function ti(l, t, u, a) {
    if (qn) {
      var e = ui(a);
      if (e === null)
        Zc(
          l,
          t,
          a,
          Cn,
          u
        ), i1(l, a);
      else if (Lm(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (i1(l, a), t & 4 && -1 < Vm.indexOf(l)) {
        for (; e !== null; ) {
          var n = Lu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = _u(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - kl(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Dt(n), (W & 6) === 0 && (Sn = $l() + 500, ye(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Uu(n, 2), c !== null && Jl(c, n, 2), bn(), li(n, 2);
            }
          if (n = ui(a), n === null && Zc(
            l,
            t,
            a,
            Cn,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        Zc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function ui(l) {
    return l = af(l), ai(l);
  }
  var Cn = null;
  function ai(l) {
    if (Cn = null, l = Vu(l), l !== null) {
      var t = dl(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = Al(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = Ml(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Cn = l, null;
  }
  function c1(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (U1()) {
          case oi:
            return 2;
          case Si:
            return 8;
          case Ae:
          case p1:
            return 32;
          case gi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ei = !1, ou = null, Su = null, gu = null, Se = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), bu = [], Vm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function i1(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ou = null;
        break;
      case "dragenter":
      case "dragleave":
        Su = null;
        break;
      case "mouseover":
      case "mouseout":
        gu = null;
        break;
      case "pointerover":
      case "pointerout":
        Se.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ge.delete(t.pointerId);
    }
  }
  function be(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Lu(t), t !== null && n1(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Lm(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return ou = be(
          ou,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return Su = be(
          Su,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return gu = be(
          gu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return Se.set(
          n,
          be(
            Se.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ge.set(
          n,
          be(
            ge.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function y1(l) {
    var t = Vu(l.target);
    if (t !== null) {
      var u = dl(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = Al(u), t !== null) {
            l.blockedOn = t, _i(l.priority, function() {
              f1(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Ml(u), t !== null) {
            l.blockedOn = t, _i(l.priority, function() {
              f1(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Yn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = ui(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        uf = a, u.target.dispatchEvent(a), uf = null;
      } else
        return t = Lu(u), t !== null && n1(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function v1(l, t, u) {
    Yn(l) && u.delete(t);
  }
  function Km() {
    ei = !1, ou !== null && Yn(ou) && (ou = null), Su !== null && Yn(Su) && (Su = null), gu !== null && Yn(gu) && (gu = null), Se.forEach(v1), ge.forEach(v1);
  }
  function Bn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, ei || (ei = !0, _.unstable_scheduleCallback(
      _.unstable_NormalPriority,
      Km
    )));
  }
  var Gn = null;
  function s1(l) {
    Gn !== l && (Gn = l, _.unstable_scheduleCallback(
      _.unstable_NormalPriority,
      function() {
        Gn === l && (Gn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (ai(a || u) === null)
              continue;
            break;
          }
          var n = Lu(u);
          n !== null && (l.splice(t, 3), t -= 3, uc(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function Ma(l) {
    function t(i) {
      return Bn(i, l);
    }
    ou !== null && Bn(ou, l), Su !== null && Bn(Su, l), gu !== null && Bn(gu, l), Se.forEach(t), ge.forEach(t);
    for (var u = 0; u < bu.length; u++) {
      var a = bu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < bu.length && (u = bu[0], u.blockedOn === null); )
      y1(u), u.blockedOn === null && bu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Ql] || null;
        if (typeof n == "function")
          f || s1(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Ql] || null)
              c = f.formAction;
            else if (ai(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), s1(u);
        }
      }
  }
  function m1() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function ni(l) {
    this._internalRoot = l;
  }
  jn.prototype.render = ni.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var u = t.current, a = et();
    a1(u, a, l, t, null, null);
  }, jn.prototype.unmount = ni.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      a1(l.current, 2, null, l, null, null), bn(), t[xu] = null;
    }
  };
  function jn(l) {
    this._internalRoot = l;
  }
  jn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Ai();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < bu.length && t !== 0 && t < bu[u].priority; u++) ;
      bu.splice(u, 0, l), u === 0 && y1(l);
    }
  };
  var d1 = al.version;
  if (d1 !== "19.2.7")
    throw Error(
      o(
        527,
        d1,
        "19.2.7"
      )
    );
  O.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = A(t), l = l !== null ? $(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Jm = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xn.isDisabled && Xn.supportsFiber)
      try {
        Da = Xn.inject(
          Jm
        ), Fl = Xn;
      } catch {
      }
  }
  return Te.createRoot = function(l, t) {
    if (!vl(l)) throw Error(o(299));
    var u = !1, a = "", e = Ty, n = Ey, f = Ay;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = t1(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      null,
      e,
      n,
      f,
      m1
    ), l[xu] = t.current, Qc(l), new ni(t);
  }, Te.hydrateRoot = function(l, t, u) {
    if (!vl(l)) throw Error(o(299));
    var a = !1, e = "", n = Ty, f = Ey, c = Ay, i = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.formState !== void 0 && (i = u.formState)), t = t1(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      i,
      n,
      f,
      c,
      m1
    ), t.context = u1(null), u = t.current, a = et(), a = Wn(a), e = au(a), e.callback = null, eu(u, e, a), u = a, t.current.lanes = u, pa(t, u), Dt(t), l[xu] = t.current, Qc(l), new jn(t);
  }, Te.version = "19.2.7", Te;
}
var _1;
function ed() {
  if (_1) return ii.exports;
  _1 = 1;
  function _() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (al) {
        console.error(al);
      }
  }
  return _(), ii.exports = ad(), ii.exports;
}
var nd = ed();
const O1 = Tu.createContext(null);
function Qn() {
  const _ = Tu.useContext(O1);
  if (!_)
    throw new Error(
      "CodefyUI hooks must be used inside a component mounted by defineTool()."
    );
  return _;
}
function fd(_, al) {
  return (Z) => {
    const o = Z.ui.addFloatingWidget({ id: _.id });
    _.title && o.setAttribute("aria-label", _.title), nd.createRoot(o).render(
      /* @__PURE__ */ St.jsx(Tu.StrictMode, { children: /* @__PURE__ */ St.jsx(O1.Provider, { value: Z, children: /* @__PURE__ */ St.jsx(al, { api: Z }) }) })
    );
  };
}
function cd() {
  const _ = Qn(), [al, Z] = Tu.useState(() => _.graph.getGraph());
  return Tu.useEffect(
    () => _.graph.onGraphChanged(() => Z(_.graph.getGraph())),
    [_]
  ), al;
}
function id() {
  const _ = Qn();
  return Tu.useMemo(() => _.graph.getNodeDefinitions(), [_]);
}
function yd() {
  const _ = Qn();
  return Tu.useCallback((al) => _.graph.applyOperations(al), [_]);
}
function vd() {
  const _ = Qn();
  return Tu.useCallback((al, Z) => _.ui.toast(al, Z), [_]);
}
function sd({ api: _ }) {
  const al = cd(), Z = id(), o = vd(), vl = yd(), dl = () => {
    vl([
      { op: "add_node", node_type: "Linear", position: { x: 240, y: 200 } }
    ]).results.every((Ml) => Ml.ok) ? o("Added a Linear node", "success") : o('Could not add node — is the "Linear" type installed?', "warning");
  };
  return /* @__PURE__ */ St.jsxs("div", { className: "cdui-example", "data-testid": "official-template-panel", children: [
    /* @__PURE__ */ St.jsx("div", { className: "cdui-example__title", children: "Official Template (React)" }),
    /* @__PURE__ */ St.jsxs("div", { className: "cdui-example__row", children: [
      "plugin: ",
      /* @__PURE__ */ St.jsx("b", { children: _.pluginId }),
      " · API v",
      _.apiVersion
    ] }),
    /* @__PURE__ */ St.jsxs("div", { className: "cdui-example__row", children: [
      "nodes on canvas: ",
      /* @__PURE__ */ St.jsx("b", { "data-testid": "node-count", children: al.nodes.length })
    ] }),
    /* @__PURE__ */ St.jsxs("div", { className: "cdui-example__row", children: [
      "node types available: ",
      /* @__PURE__ */ St.jsx("b", { children: Z.length })
    ] }),
    /* @__PURE__ */ St.jsx("button", { className: "cdui-example__btn", onClick: dl, children: "Add a Linear node" })
  ] });
}
const md = fd({ id: "official-template-panel", title: "Official Template" }, sd);
export {
  md as default
};
