var EntryPoint = function(A) {
	function M(g) {
		if(I[g]) return I[g].exports;
		var T = I[g] = {
			i: g,
			l: !1,
			exports: {}
		};
		return A[g].call(T.exports, T, T.exports, M), T.l = !0, T.exports
	}
	var I = {};
	return M.m = A, M.c = I, M.d = function(A, I, g) {
		M.o(A, I) || Object.defineProperty(A, I, {
			configurable: !1,
			enumerable: !0,
			get: g
		})
	}, M.n = function(A) {
		var I = A && A.__esModule ? function() {
			return A.default
		} : function() {
			return A
		};
		return M.d(I, "a", I), I
	}, M.o = function(A, M) {
		return Object.prototype.hasOwnProperty.call(A, M)
	}, M.p = "", M(M.s = 7)
}([function(A, M, I) {
	var g, T;
	! function(M, I) {
		"use strict";
		"object" == typeof A && "object" == typeof A.exports ? A.exports = M.document ? I(M, !0) : function(A) {
			if(!A.document) throw new Error("jQuery requires a window with a document");
			return I(A)
		} : I(M)
	}("undefined" != typeof window ? window : this, function(I, N) {
		"use strict";

		function E(A, M) {
			var I = (M = M || _).createElement("script");
			I.text = A, M.head.appendChild(I).parentNode.removeChild(I)
		}

		function C(A) {
			var M = !!A && "length" in A && A.length,
				I = QA.type(A);
			return "function" !== I && !QA.isWindow(A) && ("array" === I || 0 === M || "number" == typeof M && M > 0 && M - 1 in A)
		}

		function t(A, M) {
			return A.nodeName && A.nodeName.toLowerCase() === M.toLowerCase()
		}

		function D(A, M, I) {
			return QA.isFunction(M) ? QA.grep(A, function(A, g) {
				return !!M.call(A, g, A) !== I
			}) : M.nodeType ? QA.grep(A, function(A) {
				return A === M !== I
			}) : "string" != typeof M ? QA.grep(A, function(A) {
				return TA.call(M, A) > -1 !== I
			}) : yA.test(M) ? QA.filter(M, A, I) : (M = QA.filter(M, A), QA.grep(A, function(A) {
				return TA.call(M, A) > -1 !== I && 1 === A.nodeType
			}))
		}

		function B(A, M) {
			for(;
				(A = A[M]) && 1 !== A.nodeType;);
			return A
		}

		function Q(A) {
			return A
		}

		function i(A) {
			throw A
		}

		function n(A, M, I, g) {
			var T;
			try {
				A && QA.isFunction(T = A.promise) ? T.call(A).done(M).fail(I) : A && QA.isFunction(T = A.then) ? T.call(A, M, I) : M.apply(void 0, [A].slice(g))
			} catch(A) {
				I.apply(void 0, [A])
			}
		}

		function w() {
			_.removeEventListener("DOMContentLoaded", w), I.removeEventListener("load", w), QA.ready()
		}

		function c() {
			this.expando = QA.expando + c.uid++
		}

		function o(A, M, I) {
			var g;
			if(void 0 === I && 1 === A.nodeType)
				if(g = "data-" + M.replace(uA, "-$&").toLowerCase(), "string" == typeof(I = A.getAttribute(g))) {
					try {
						I = function(A) {
							return "true" === A || "false" !== A && ("null" === A ? null : A === +A + "" ? +A : FA.test(A) ? JSON.parse(A) : A)
						}(I)
					} catch(A) {}
					OA.set(A, M, I)
				} else I = void 0;
			return I
		}

		function j(A, M, I, g) {
			var T, N = 1,
				E = 20,
				C = g ? function() {
					return g.cur()
				} : function() {
					return QA.css(A, M, "")
				},
				t = C(),
				D = I && I[3] || (QA.cssNumber[M] ? "" : "px"),
				B = (QA.cssNumber[M] || "px" !== D && +t) && RA.exec(QA.css(A, M));
			if(B && B[3] !== D) {
				D = D || B[3], I = I || [], B = +t || 1;
				do {
					B /= N = N || ".5", QA.style(A, M, B + D)
				} while (N !== (N = C() / t) && 1 !== N && --E)
			}
			return I && (B = +B || +t || 0, T = I[1] ? B + (I[1] + 1) * I[2] : +I[2], g && (g.unit = D, g.start = B, g.end = T)), T
		}

		function x(A) {
			var M, I = A.ownerDocument,
				g = A.nodeName,
				T = bA[g];
			return T || (M = I.body.appendChild(I.createElement(g)), T = QA.css(M, "display"), M.parentNode.removeChild(M), "none" === T && (T = "block"), bA[g] = T, T)
		}

		function L(A, M) {
			for(var I, g, T = [], N = 0, E = A.length; N < E; N++)(g = A[N]).style && (I = g.style.display, M ? ("none" === I && (T[N] = rA.get(g, "display") || null, T[N] || (g.style.display = "")), "" === g.style.display && kA(g) && (T[N] = x(g))) : "none" !== I && (T[N] = "none", rA.set(g, "display", I)));
			for(N = 0; N < E; N++) null != T[N] && (A[N].style.display = T[N]);
			return A
		}

		function e(A, M) {
			var I;
			return I = void 0 !== A.getElementsByTagName ? A.getElementsByTagName(M || "*") : void 0 !== A.querySelectorAll ? A.querySelectorAll(M || "*") : [], void 0 === M || M && t(A, M) ? QA.merge([A], I) : I
		}

		function y(A, M) {
			for(var I = 0, g = A.length; I < g; I++) rA.set(A[I], "globalEval", !M || rA.get(M[I], "globalEval"))
		}

		function Y(A, M, I, g, T) {
			for(var N, E, C, t, D, B, Q = M.createDocumentFragment(), i = [], n = 0, w = A.length; n < w; n++)
				if((N = A[n]) || 0 === N)
					if("object" === QA.type(N)) QA.merge(i, N.nodeType ? [N] : N);
					else if(JA.test(N)) {
				for(E = E || Q.appendChild(M.createElement("div")), C = (fA.exec(N) || ["", ""])[1].toLowerCase(), t = VA[C] || VA._default, E.innerHTML = t[1] + QA.htmlPrefilter(N) + t[2], B = t[0]; B--;) E = E.lastChild;
				QA.merge(i, E.childNodes), (E = Q.firstChild).textContent = ""
			} else i.push(M.createTextNode(N));
			for(Q.textContent = "", n = 0; N = i[n++];)
				if(g && QA.inArray(N, g) > -1) T && T.push(N);
				else if(D = QA.contains(N.ownerDocument, N), E = e(Q.appendChild(N), "script"), D && y(E), I)
				for(B = 0; N = E[B++];) XA.test(N.type || "") && I.push(N);
			return Q
		}

		function z() {
			return !0
		}

		function U() {
			return !1
		}

		function a() {
			try {
				return _.activeElement
			} catch(A) {}
		}

		function d(A, M, I, g, T, N) {
			var E, C;
			if("object" == typeof M) {
				"string" != typeof I && (g = g || I, I = void 0);
				for(C in M) d(A, C, I, g, M[C], N);
				return A
			}
			if(null == g && null == T ? (T = I, g = I = void 0) : null == T && ("string" == typeof I ? (T = g, g = void 0) : (T = g, g = I, I = void 0)), !1 === T) T = U;
			else if(!T) return A;
			return 1 === N && (E = T, (T = function(A) {
				return QA().off(A), E.apply(this, arguments)
			}).guid = E.guid || (E.guid = QA.guid++)), A.each(function() {
				QA.event.add(this, M, T, g, I)
			})
		}

		function S(A, M) {
			return t(A, "table") && t(11 !== M.nodeType ? M : M.firstChild, "tr") ? QA(">tbody", A)[0] || A : A
		}

		function s(A) {
			return A.type = (null !== A.getAttribute("type")) + "/" + A.type, A
		}

		function h(A) {
			var M = _A.exec(A.type);
			return M ? A.type = M[1] : A.removeAttribute("type"), A
		}

		function l(A, M) {
			var I, g, T, N, E, C, t, D;
			if(1 === M.nodeType) {
				if(rA.hasData(A) && (N = rA.access(A), E = rA.set(M, N), D = N.events)) {
					delete E.handle, E.events = {};
					for(T in D)
						for(I = 0, g = D[T].length; I < g; I++) QA.event.add(M, T, D[T][I])
				}
				OA.hasData(A) && (C = OA.access(A), t = QA.extend({}, C), OA.set(M, t))
			}
		}

		function r(A, M) {
			var I = M.nodeName.toLowerCase();
			"input" === I && mA.test(A.type) ? M.checked = A.checked : "input" !== I && "textarea" !== I || (M.defaultValue = A.defaultValue)
		}

		function O(A, M, I, g) {
			M = IA.apply([], M);
			var T, N, C, t, D, B, Q = 0,
				i = A.length,
				n = i - 1,
				w = M[0],
				c = QA.isFunction(w);
			if(c || i > 1 && "string" == typeof w && !BA.checkClone && $A.test(w)) return A.each(function(T) {
				var N = A.eq(T);
				c && (M[0] = w.call(this, T, N.html())), O(N, M, I, g)
			});
			if(i && (T = Y(M, A[0].ownerDocument, !1, A, g), N = T.firstChild, 1 === T.childNodes.length && (T = N), N || g)) {
				for(t = (C = QA.map(e(T, "script"), s)).length; Q < i; Q++) D = T, Q !== n && (D = QA.clone(D, !0, !0), t && QA.merge(C, e(D, "script"))), I.call(A[Q], D, Q);
				if(t)
					for(B = C[C.length - 1].ownerDocument, QA.map(C, h), Q = 0; Q < t; Q++) D = C[Q], XA.test(D.type || "") && !rA.access(D, "globalEval") && QA.contains(B, D) && (D.src ? QA._evalUrl && QA._evalUrl(D.src) : E(D.textContent.replace(AM, ""), B))
			}
			return A
		}

		function F(A, M, I) {
			for(var g, T = M ? QA.filter(M, A) : A, N = 0; null != (g = T[N]); N++) I || 1 !== g.nodeType || QA.cleanData(e(g)), g.parentNode && (I && QA.contains(g.ownerDocument, g) && y(e(g, "script")), g.parentNode.removeChild(g));
			return A
		}

		function u(A, M, I) {
			var g, T, N, E, C = A.style;
			return(I = I || gM(A)) && ("" !== (E = I.getPropertyValue(M) || I[M]) || QA.contains(A.ownerDocument, A) || (E = QA.style(A, M)), !BA.pixelMarginRight() && IM.test(E) && MM.test(M) && (g = C.width, T = C.minWidth, N = C.maxWidth, C.minWidth = C.maxWidth = C.width = E, E = I.width, C.width = g, C.minWidth = T, C.maxWidth = N)), void 0 !== E ? E + "" : E
		}

		function H(A, M) {
			return {
				get: function() {
					if(!A()) return(this.get = M).apply(this, arguments);
					delete this.get
				}
			}
		}

		function R(A) {
			var M = QA.cssProps[A];
			return M || (M = QA.cssProps[A] = function(A) {
				if(A in DM) return A;
				for(var M = A[0].toUpperCase() + A.slice(1), I = tM.length; I--;)
					if((A = tM[I] + M) in DM) return A
			}(A) || A), M
		}

		function G(A, M, I) {
			var g = RA.exec(M);
			return g ? Math.max(0, g[2] - (I || 0)) + (g[3] || "px") : M
		}

		function k(A, M, I, g, T) {
			var N, E = 0;
			for(N = I === (g ? "border" : "content") ? 4 : "width" === M ? 1 : 0; N < 4; N += 2) "margin" === I && (E += QA.css(A, I + GA[N], !0, T)), g ? ("content" === I && (E -= QA.css(A, "padding" + GA[N], !0, T)), "margin" !== I && (E -= QA.css(A, "border" + GA[N] + "Width", !0, T))) : (E += QA.css(A, "padding" + GA[N], !0, T), "padding" !== I && (E += QA.css(A, "border" + GA[N] + "Width", !0, T)));
			return E
		}

		function p(A, M, I) {
			var g, T = gM(A),
				N = u(A, M, T),
				E = "border-box" === QA.css(A, "boxSizing", !1, T);
			return IM.test(N) ? N : (g = E && (BA.boxSizingReliable() || N === A.style[M]), "auto" === N && (N = A["offset" + M[0].toUpperCase() + M.slice(1)]), (N = parseFloat(N) || 0) + k(A, M, I || (E ? "border" : "content"), g, T) + "px")
		}

		function b(A, M, I, g, T) {
			return new b.prototype.init(A, M, I, g, T)
		}

		function m() {
			QM && (!1 === _.hidden && I.requestAnimationFrame ? I.requestAnimationFrame(m) : I.setTimeout(m, QA.fx.interval), QA.fx.tick())
		}

		function f() {
			return I.setTimeout(function() {
				BM = void 0
			}), BM = QA.now()
		}

		function X(A, M) {
			var I, g = 0,
				T = {
					height: A
				};
			for(M = M ? 1 : 0; g < 4; g += 2 - M) T["margin" + (I = GA[g])] = T["padding" + I] = A;
			return M && (T.opacity = T.width = A), T
		}

		function V(A, M, I) {
			for(var g, T = (J.tweeners[M] || []).concat(J.tweeners["*"]), N = 0, E = T.length; N < E; N++)
				if(g = T[N].call(I, M, A)) return g
		}

		function J(A, M, I) {
			var g, T, N = 0,
				E = J.prefilters.length,
				C = QA.Deferred().always(function() {
					delete t.elem
				}),
				t = function() {
					if(T) return !1;
					for(var M = BM || f(), I = Math.max(0, D.startTime + D.duration - M), g = 1 - (I / D.duration || 0), N = 0, E = D.tweens.length; N < E; N++) D.tweens[N].run(g);
					return C.notifyWith(A, [D, g, I]), g < 1 && E ? I : (E || C.notifyWith(A, [D, 1, 0]), C.resolveWith(A, [D]), !1)
				},
				D = C.promise({
					elem: A,
					props: QA.extend({}, M),
					opts: QA.extend(!0, {
						specialEasing: {},
						easing: QA.easing._default
					}, I),
					originalProperties: M,
					originalOptions: I,
					startTime: BM || f(),
					duration: I.duration,
					tweens: [],
					createTween: function(M, I) {
						var g = QA.Tween(A, D.opts, M, I, D.opts.specialEasing[M] || D.opts.easing);
						return D.tweens.push(g), g
					},
					stop: function(M) {
						var I = 0,
							g = M ? D.tweens.length : 0;
						if(T) return this;
						for(T = !0; I < g; I++) D.tweens[I].run(1);
						return M ? (C.notifyWith(A, [D, 1, 0]), C.resolveWith(A, [D, M])) : C.rejectWith(A, [D, M]), this
					}
				}),
				B = D.props;
			for(! function(A, M) {
					var I, g, T, N, E;
					for(I in A)
						if(g = QA.camelCase(I), T = M[g], N = A[I], Array.isArray(N) && (T = N[1], N = A[I] = N[0]), I !== g && (A[g] = N, delete A[I]), (E = QA.cssHooks[g]) && "expand" in E) {
							N = E.expand(N), delete A[g];
							for(I in N) I in A || (A[I] = N[I], M[I] = T)
						} else M[g] = T
				}(B, D.opts.specialEasing); N < E; N++)
				if(g = J.prefilters[N].call(D, A, B, D.opts)) return QA.isFunction(g.stop) && (QA._queueHooks(D.elem, D.opts.queue).stop = QA.proxy(g.stop, g)), g;
			return QA.map(B, V, D), QA.isFunction(D.opts.start) && D.opts.start.call(A, D), D.progress(D.opts.progress).done(D.opts.done, D.opts.complete).fail(D.opts.fail).always(D.opts.always), QA.fx.timer(QA.extend(t, {
				elem: A,
				anim: D,
				queue: D.opts.queue
			})), D
		}

		function W(A) {
			return(A.match(dA) || []).join(" ")
		}

		function v(A) {
			return A.getAttribute && A.getAttribute("class") || ""
		}

		function P(A, M, I, g) {
			var T;
			if(Array.isArray(M)) QA.each(M, function(M, T) {
				I || zM.test(A) ? g(A, T) : P(A + "[" + ("object" == typeof T && null != T ? M : "") + "]", T, I, g)
			});
			else if(I || "object" !== QA.type(M)) g(A, M);
			else
				for(T in M) P(A + "[" + T + "]", M[T], I, g)
		}

		function Z(A) {
			return function(M, I) {
				"string" != typeof M && (I = M, M = "*");
				var g, T = 0,
					N = M.toLowerCase().match(dA) || [];
				if(QA.isFunction(I))
					for(; g = N[T++];) "+" === g[0] ? (g = g.slice(1) || "*", (A[g] = A[g] || []).unshift(I)) : (A[g] = A[g] || []).push(I)
			}
		}

		function K(A, M, I, g) {
			function T(C) {
				var t;
				return N[C] = !0, QA.each(A[C] || [], function(A, C) {
					var D = C(M, I, g);
					return "string" != typeof D || E || N[D] ? E ? !(t = D) : void 0 : (M.dataTypes.unshift(D), T(D), !1)
				}), t
			}
			var N = {},
				E = A === uM;
			return T(M.dataTypes[0]) || !N["*"] && T("*")
		}

		function q(A, M) {
			var I, g, T = QA.ajaxSettings.flatOptions || {};
			for(I in M) void 0 !== M[I] && ((T[I] ? A : g || (g = {}))[I] = M[I]);
			return g && QA.extend(!0, A, g), A
		}
		var $ = [],
			_ = I.document,
			AA = Object.getPrototypeOf,
			MA = $.slice,
			IA = $.concat,
			gA = $.push,
			TA = $.indexOf,
			NA = {},
			EA = NA.toString,
			CA = NA.hasOwnProperty,
			tA = CA.toString,
			DA = tA.call(Object),
			BA = {},
			QA = function(A, M) {
				return new QA.fn.init(A, M)
			},
			iA = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			nA = /^-ms-/,
			wA = /-([a-z])/g,
			cA = function(A, M) {
				return M.toUpperCase()
			};
		QA.fn = QA.prototype = {
			jquery: "3.2.1",
			constructor: QA,
			length: 0,
			toArray: function() {
				return MA.call(this)
			},
			get: function(A) {
				return null == A ? MA.call(this) : A < 0 ? this[A + this.length] : this[A]
			},
			pushStack: function(A) {
				var M = QA.merge(this.constructor(), A);
				return M.prevObject = this, M
			},
			each: function(A) {
				return QA.each(this, A)
			},
			map: function(A) {
				return this.pushStack(QA.map(this, function(M, I) {
					return A.call(M, I, M)
				}))
			},
			slice: function() {
				return this.pushStack(MA.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(A) {
				var M = this.length,
					I = +A + (A < 0 ? M : 0);
				return this.pushStack(I >= 0 && I < M ? [this[I]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor()
			},
			push: gA,
			sort: $.sort,
			splice: $.splice
		}, QA.extend = QA.fn.extend = function() {
			var A, M, I, g, T, N, E = arguments[0] || {},
				C = 1,
				t = arguments.length,
				D = !1;
			for("boolean" == typeof E && (D = E, E = arguments[C] || {}, C++), "object" == typeof E || QA.isFunction(E) || (E = {}), C === t && (E = this, C--); C < t; C++)
				if(null != (A = arguments[C]))
					for(M in A) I = E[M], E !== (g = A[M]) && (D && g && (QA.isPlainObject(g) || (T = Array.isArray(g))) ? (T ? (T = !1, N = I && Array.isArray(I) ? I : []) : N = I && QA.isPlainObject(I) ? I : {}, E[M] = QA.extend(D, N, g)) : void 0 !== g && (E[M] = g));
			return E
		}, QA.extend({
			expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(A) {
				throw new Error(A)
			},
			noop: function() {},
			isFunction: function(A) {
				return "function" === QA.type(A)
			},
			isWindow: function(A) {
				return null != A && A === A.window
			},
			isNumeric: function(A) {
				var M = QA.type(A);
				return("number" === M || "string" === M) && !isNaN(A - parseFloat(A))
			},
			isPlainObject: function(A) {
				var M, I;
				return !(!A || "[object Object]" !== EA.call(A)) && (!(M = AA(A)) || "function" == typeof(I = CA.call(M, "constructor") && M.constructor) && tA.call(I) === DA)
			},
			isEmptyObject: function(A) {
				var M;
				for(M in A) return !1;
				return !0
			},
			type: function(A) {
				return null == A ? A + "" : "object" == typeof A || "function" == typeof A ? NA[EA.call(A)] || "object" : typeof A
			},
			globalEval: function(A) {
				E(A)
			},
			camelCase: function(A) {
				return A.replace(nA, "ms-").replace(wA, cA)
			},
			each: function(A, M) {
				var I, g = 0;
				if(C(A))
					for(I = A.length; g < I && !1 !== M.call(A[g], g, A[g]); g++);
				else
					for(g in A)
						if(!1 === M.call(A[g], g, A[g])) break;
				return A
			},
			trim: function(A) {
				return null == A ? "" : (A + "").replace(iA, "")
			},
			makeArray: function(A, M) {
				var I = M || [];
				return null != A && (C(Object(A)) ? QA.merge(I, "string" == typeof A ? [A] : A) : gA.call(I, A)), I
			},
			inArray: function(A, M, I) {
				return null == M ? -1 : TA.call(M, A, I)
			},
			merge: function(A, M) {
				for(var I = +M.length, g = 0, T = A.length; g < I; g++) A[T++] = M[g];
				return A.length = T, A
			},
			grep: function(A, M, I) {
				for(var g = [], T = 0, N = A.length, E = !I; T < N; T++) !M(A[T], T) !== E && g.push(A[T]);
				return g
			},
			map: function(A, M, I) {
				var g, T, N = 0,
					E = [];
				if(C(A))
					for(g = A.length; N < g; N++) null != (T = M(A[N], N, I)) && E.push(T);
				else
					for(N in A) null != (T = M(A[N], N, I)) && E.push(T);
				return IA.apply([], E)
			},
			guid: 1,
			proxy: function(A, M) {
				var I, g, T;
				if("string" == typeof M && (I = A[M], M = A, A = I), QA.isFunction(A)) return g = MA.call(arguments, 2), T = function() {
					return A.apply(M || this, g.concat(MA.call(arguments)))
				}, T.guid = A.guid = A.guid || QA.guid++, T
			},
			now: Date.now,
			support: BA
		}), "function" == typeof Symbol && (QA.fn[Symbol.iterator] = $[Symbol.iterator]), QA.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(A, M) {
			NA["[object " + M + "]"] = M.toLowerCase()
		});
		var oA = function(A) {
			function M(A, M, I, g) {
				var T, N, E, C, t, D, B, i = M && M.ownerDocument,
					w = M ? M.nodeType : 9;
				if(I = I || [], "string" != typeof A || !A || 1 !== w && 9 !== w && 11 !== w) return I;
				if(!g && ((M ? M.ownerDocument || M : p) !== r && l(M), M = M || r, F)) {
					if(11 !== w && (t = cA.exec(A)))
						if(T = t[1]) {
							if(9 === w) {
								if(!(E = M.getElementById(T))) return I;
								if(E.id === T) return I.push(E), I
							} else if(i && (E = i.getElementById(T)) && G(M, E) && E.id === T) return I.push(E), I
						} else {
							if(t[2]) return K.apply(I, M.getElementsByTagName(A)), I;
							if((T = t[3]) && e.getElementsByClassName && M.getElementsByClassName) return K.apply(I, M.getElementsByClassName(T)), I
						}
					if(e.qsa && !V[A + " "] && (!u || !u.test(A))) {
						if(1 !== w) i = M, B = A;
						else if("object" !== M.nodeName.toLowerCase()) {
							for((C = M.getAttribute("id")) ? C = C.replace(LA, eA) : M.setAttribute("id", C = k), N = (D = U(A)).length; N--;) D[N] = "#" + C + " " + n(D[N]);
							B = D.join(","), i = oA.test(A) && Q(M.parentNode) || M
						}
						if(B) try {
							return K.apply(I, i.querySelectorAll(B)), I
						} catch(A) {} finally {
							C === k && M.removeAttribute("id")
						}
					}
				}
				return d(A.replace(NA, "$1"), M, I, g)
			}

			function I() {
				function A(I, g) {
					return M.push(I + " ") > y.cacheLength && delete A[M.shift()], A[I + " "] = g
				}
				var M = [];
				return A
			}

			function g(A) {
				return A[k] = !0, A
			}

			function T(A) {
				var M = r.createElement("fieldset");
				try {
					return !!A(M)
				} catch(A) {
					return !1
				} finally {
					M.parentNode && M.parentNode.removeChild(M), M = null
				}
			}

			function N(A, M) {
				for(var I = A.split("|"), g = I.length; g--;) y.attrHandle[I[g]] = M
			}

			function E(A, M) {
				var I = M && A,
					g = I && 1 === A.nodeType && 1 === M.nodeType && A.sourceIndex - M.sourceIndex;
				if(g) return g;
				if(I)
					for(; I = I.nextSibling;)
						if(I === M) return -1;
				return A ? 1 : -1
			}

			function C(A) {
				return function(M) {
					return "input" === M.nodeName.toLowerCase() && M.type === A
				}
			}

			function t(A) {
				return function(M) {
					var I = M.nodeName.toLowerCase();
					return("input" === I || "button" === I) && M.type === A
				}
			}

			function D(A) {
				return function(M) {
					return "form" in M ? M.parentNode && !1 === M.disabled ? "label" in M ? "label" in M.parentNode ? M.parentNode.disabled === A : M.disabled === A : M.isDisabled === A || M.isDisabled !== !A && YA(M) === A : M.disabled === A : "label" in M && M.disabled === A
				}
			}

			function B(A) {
				return g(function(M) {
					return M = +M, g(function(I, g) {
						for(var T, N = A([], I.length, M), E = N.length; E--;) I[T = N[E]] && (I[T] = !(g[T] = I[T]))
					})
				})
			}

			function Q(A) {
				return A && void 0 !== A.getElementsByTagName && A
			}

			function i() {}

			function n(A) {
				for(var M = 0, I = A.length, g = ""; M < I; M++) g += A[M].value;
				return g
			}

			function w(A, M, I) {
				var g = M.dir,
					T = M.next,
					N = T || g,
					E = I && "parentNode" === N,
					C = m++;
				return M.first ? function(M, I, T) {
					for(; M = M[g];)
						if(1 === M.nodeType || E) return A(M, I, T);
					return !1
				} : function(M, I, t) {
					var D, B, Q, i = [b, C];
					if(t) {
						for(; M = M[g];)
							if((1 === M.nodeType || E) && A(M, I, t)) return !0
					} else
						for(; M = M[g];)
							if(1 === M.nodeType || E)
								if(Q = M[k] || (M[k] = {}), B = Q[M.uniqueID] || (Q[M.uniqueID] = {}), T && T === M.nodeName.toLowerCase()) M = M[g] || M;
								else {
									if((D = B[N]) && D[0] === b && D[1] === C) return i[2] = D[2];
									if(B[N] = i, i[2] = A(M, I, t)) return !0
								} return !1
				}
			}

			function c(A) {
				return A.length > 1 ? function(M, I, g) {
					for(var T = A.length; T--;)
						if(!A[T](M, I, g)) return !1;
					return !0
				} : A[0]
			}

			function o(A, M, I, g, T) {
				for(var N, E = [], C = 0, t = A.length, D = null != M; C < t; C++)(N = A[C]) && (I && !I(N, g, T) || (E.push(N), D && M.push(C)));
				return E
			}

			function j(A, I, T, N, E, C) {
				return N && !N[k] && (N = j(N)), E && !E[k] && (E = j(E, C)), g(function(g, C, t, D) {
					var B, Q, i, n = [],
						w = [],
						c = C.length,
						j = g || function(A, I, g) {
							for(var T = 0, N = I.length; T < N; T++) M(A, I[T], g);
							return g
						}(I || "*", t.nodeType ? [t] : t, []),
						x = !A || !g && I ? j : o(j, n, A, t, D),
						L = T ? E || (g ? A : c || N) ? [] : C : x;
					if(T && T(x, L, t, D), N)
						for(B = o(L, w), N(B, [], t, D), Q = B.length; Q--;)(i = B[Q]) && (L[w[Q]] = !(x[w[Q]] = i));
					if(g) {
						if(E || A) {
							if(E) {
								for(B = [], Q = L.length; Q--;)(i = L[Q]) && B.push(x[Q] = i);
								E(null, L = [], B, D)
							}
							for(Q = L.length; Q--;)(i = L[Q]) && (B = E ? $(g, i) : n[Q]) > -1 && (g[B] = !(C[B] = i))
						}
					} else L = o(L === C ? L.splice(c, L.length) : L), E ? E(null, C, L, D) : K.apply(C, L)
				})
			}

			function x(A) {
				for(var M, I, g, T = A.length, N = y.relative[A[0].type], E = N || y.relative[" "], C = N ? 1 : 0, t = w(function(A) {
						return A === M
					}, E, !0), D = w(function(A) {
						return $(M, A) > -1
					}, E, !0), B = [function(A, I, g) {
						var T = !N && (g || I !== S) || ((M = I).nodeType ? t(A, I, g) : D(A, I, g));
						return M = null, T
					}]; C < T; C++)
					if(I = y.relative[A[C].type]) B = [w(c(B), I)];
					else {
						if((I = y.filter[A[C].type].apply(null, A[C].matches))[k]) {
							for(g = ++C; g < T && !y.relative[A[g].type]; g++);
							return j(C > 1 && c(B), C > 1 && n(A.slice(0, C - 1).concat({
								value: " " === A[C - 2].type ? "*" : ""
							})).replace(NA, "$1"), I, C < g && x(A.slice(C, g)), g < T && x(A = A.slice(g)), g < T && n(A))
						}
						B.push(I)
					}
				return c(B)
			}
			var L, e, y, Y, z, U, a, d, S, s, h, l, r, O, F, u, H, R, G, k = "sizzle" + 1 * new Date,
				p = A.document,
				b = 0,
				m = 0,
				f = I(),
				X = I(),
				V = I(),
				J = function(A, M) {
					return A === M && (h = !0), 0
				},
				W = {}.hasOwnProperty,
				v = [],
				P = v.pop,
				Z = v.push,
				K = v.push,
				q = v.slice,
				$ = function(A, M) {
					for(var I = 0, g = A.length; I < g; I++)
						if(A[I] === M) return I;
					return -1
				},
				_ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				AA = "[\\x20\\t\\r\\n\\f]",
				MA = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
				IA = "\\[" + AA + "*(" + MA + ")(?:" + AA + "*([*^$|!~]?=)" + AA + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + MA + "))|)" + AA + "*\\]",
				gA = ":(" + MA + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + IA + ")*)|.*)\\)|)",
				TA = new RegExp(AA + "+", "g"),
				NA = new RegExp("^" + AA + "+|((?:^|[^\\\\])(?:\\\\.)*)" + AA + "+$", "g"),
				EA = new RegExp("^" + AA + "*," + AA + "*"),
				CA = new RegExp("^" + AA + "*([>+~]|" + AA + ")" + AA + "*"),
				tA = new RegExp("=" + AA + "*([^\\]'\"]*?)" + AA + "*\\]", "g"),
				DA = new RegExp(gA),
				BA = new RegExp("^" + MA + "$"),
				QA = {
					ID: new RegExp("^#(" + MA + ")"),
					CLASS: new RegExp("^\\.(" + MA + ")"),
					TAG: new RegExp("^(" + MA + "|[*])"),
					ATTR: new RegExp("^" + IA),
					PSEUDO: new RegExp("^" + gA),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + AA + "*(even|odd|(([+-]|)(\\d*)n|)" + AA + "*(?:([+-]|)" + AA + "*(\\d+)|))" + AA + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + _ + ")$", "i"),
					needsContext: new RegExp("^" + AA + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + AA + "*((?:-\\d)?\\d*)" + AA + "*\\)|)(?=[^-]|$)", "i")
				},
				iA = /^(?:input|select|textarea|button)$/i,
				nA = /^h\d$/i,
				wA = /^[^{]+\{\s*\[native \w/,
				cA = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				oA = /[+~]/,
				jA = new RegExp("\\\\([\\da-f]{1,6}" + AA + "?|(" + AA + ")|.)", "ig"),
				xA = function(A, M, I) {
					var g = "0x" + M - 65536;
					return g != g || I ? M : g < 0 ? String.fromCharCode(g + 65536) : String.fromCharCode(g >> 10 | 55296, 1023 & g | 56320)
				},
				LA = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				eA = function(A, M) {
					return M ? "\0" === A ? "�" : A.slice(0, -1) + "\\" + A.charCodeAt(A.length - 1).toString(16) + " " : "\\" + A
				},
				yA = function() {
					l()
				},
				YA = w(function(A) {
					return !0 === A.disabled && ("form" in A || "label" in A)
				}, {
					dir: "parentNode",
					next: "legend"
				});
			try {
				K.apply(v = q.call(p.childNodes), p.childNodes), v[p.childNodes.length].nodeType
			} catch(A) {
				K = {
					apply: v.length ? function(A, M) {
						Z.apply(A, q.call(M))
					} : function(A, M) {
						for(var I = A.length, g = 0; A[I++] = M[g++];);
						A.length = I - 1
					}
				}
			}
			e = M.support = {}, z = M.isXML = function(A) {
				var M = A && (A.ownerDocument || A).documentElement;
				return !!M && "HTML" !== M.nodeName
			}, l = M.setDocument = function(A) {
				var M, I, g = A ? A.ownerDocument || A : p;
				return g !== r && 9 === g.nodeType && g.documentElement ? (r = g, O = r.documentElement, F = !z(r), p !== r && (I = r.defaultView) && I.top !== I && (I.addEventListener ? I.addEventListener("unload", yA, !1) : I.attachEvent && I.attachEvent("onunload", yA)), e.attributes = T(function(A) {
					return A.className = "i", !A.getAttribute("className")
				}), e.getElementsByTagName = T(function(A) {
					return A.appendChild(r.createComment("")), !A.getElementsByTagName("*").length
				}), e.getElementsByClassName = wA.test(r.getElementsByClassName), e.getById = T(function(A) {
					return O.appendChild(A).id = k, !r.getElementsByName || !r.getElementsByName(k).length
				}), e.getById ? (y.filter.ID = function(A) {
					var M = A.replace(jA, xA);
					return function(A) {
						return A.getAttribute("id") === M
					}
				}, y.find.ID = function(A, M) {
					if(void 0 !== M.getElementById && F) {
						var I = M.getElementById(A);
						return I ? [I] : []
					}
				}) : (y.filter.ID = function(A) {
					var M = A.replace(jA, xA);
					return function(A) {
						var I = void 0 !== A.getAttributeNode && A.getAttributeNode("id");
						return I && I.value === M
					}
				}, y.find.ID = function(A, M) {
					if(void 0 !== M.getElementById && F) {
						var I, g, T, N = M.getElementById(A);
						if(N) {
							if((I = N.getAttributeNode("id")) && I.value === A) return [N];
							for(T = M.getElementsByName(A), g = 0; N = T[g++];)
								if((I = N.getAttributeNode("id")) && I.value === A) return [N]
						}
						return []
					}
				}), y.find.TAG = e.getElementsByTagName ? function(A, M) {
					return void 0 !== M.getElementsByTagName ? M.getElementsByTagName(A) : e.qsa ? M.querySelectorAll(A) : void 0
				} : function(A, M) {
					var I, g = [],
						T = 0,
						N = M.getElementsByTagName(A);
					if("*" === A) {
						for(; I = N[T++];) 1 === I.nodeType && g.push(I);
						return g
					}
					return N
				}, y.find.CLASS = e.getElementsByClassName && function(A, M) {
					if(void 0 !== M.getElementsByClassName && F) return M.getElementsByClassName(A)
				}, H = [], u = [], (e.qsa = wA.test(r.querySelectorAll)) && (T(function(A) {
					O.appendChild(A).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", A.querySelectorAll("[msallowcapture^='']").length && u.push("[*^$]=" + AA + "*(?:''|\"\")"), A.querySelectorAll("[selected]").length || u.push("\\[" + AA + "*(?:value|" + _ + ")"), A.querySelectorAll("[id~=" + k + "-]").length || u.push("~="), A.querySelectorAll(":checked").length || u.push(":checked"), A.querySelectorAll("a#" + k + "+*").length || u.push(".#.+[+~]")
				}), T(function(A) {
					A.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var M = r.createElement("input");
					M.setAttribute("type", "hidden"), A.appendChild(M).setAttribute("name", "D"), A.querySelectorAll("[name=d]").length && u.push("name" + AA + "*[*^$|!~]?="), 2 !== A.querySelectorAll(":enabled").length && u.push(":enabled", ":disabled"), O.appendChild(A).disabled = !0, 2 !== A.querySelectorAll(":disabled").length && u.push(":enabled", ":disabled"), A.querySelectorAll("*,:x"), u.push(",.*:")
				})), (e.matchesSelector = wA.test(R = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && T(function(A) {
					e.disconnectedMatch = R.call(A, "*"), R.call(A, "[s!='']:x"), H.push("!=", gA)
				}), u = u.length && new RegExp(u.join("|")), H = H.length && new RegExp(H.join("|")), M = wA.test(O.compareDocumentPosition), G = M || wA.test(O.contains) ? function(A, M) {
					var I = 9 === A.nodeType ? A.documentElement : A,
						g = M && M.parentNode;
					return A === g || !(!g || 1 !== g.nodeType || !(I.contains ? I.contains(g) : A.compareDocumentPosition && 16 & A.compareDocumentPosition(g)))
				} : function(A, M) {
					if(M)
						for(; M = M.parentNode;)
							if(M === A) return !0;
					return !1
				}, J = M ? function(A, M) {
					if(A === M) return h = !0, 0;
					var I = !A.compareDocumentPosition - !M.compareDocumentPosition;
					return I || (1 & (I = (A.ownerDocument || A) === (M.ownerDocument || M) ? A.compareDocumentPosition(M) : 1) || !e.sortDetached && M.compareDocumentPosition(A) === I ? A === r || A.ownerDocument === p && G(p, A) ? -1 : M === r || M.ownerDocument === p && G(p, M) ? 1 : s ? $(s, A) - $(s, M) : 0 : 4 & I ? -1 : 1)
				} : function(A, M) {
					if(A === M) return h = !0, 0;
					var I, g = 0,
						T = A.parentNode,
						N = M.parentNode,
						C = [A],
						t = [M];
					if(!T || !N) return A === r ? -1 : M === r ? 1 : T ? -1 : N ? 1 : s ? $(s, A) - $(s, M) : 0;
					if(T === N) return E(A, M);
					for(I = A; I = I.parentNode;) C.unshift(I);
					for(I = M; I = I.parentNode;) t.unshift(I);
					for(; C[g] === t[g];) g++;
					return g ? E(C[g], t[g]) : C[g] === p ? -1 : t[g] === p ? 1 : 0
				}, r) : r
			}, M.matches = function(A, I) {
				return M(A, null, null, I)
			}, M.matchesSelector = function(A, I) {
				if((A.ownerDocument || A) !== r && l(A), I = I.replace(tA, "='$1']"), e.matchesSelector && F && !V[I + " "] && (!H || !H.test(I)) && (!u || !u.test(I))) try {
					var g = R.call(A, I);
					if(g || e.disconnectedMatch || A.document && 11 !== A.document.nodeType) return g
				} catch(A) {}
				return M(I, r, null, [A]).length > 0
			}, M.contains = function(A, M) {
				return(A.ownerDocument || A) !== r && l(A), G(A, M)
			}, M.attr = function(A, M) {
				(A.ownerDocument || A) !== r && l(A);
				var I = y.attrHandle[M.toLowerCase()],
					g = I && W.call(y.attrHandle, M.toLowerCase()) ? I(A, M, !F) : void 0;
				return void 0 !== g ? g : e.attributes || !F ? A.getAttribute(M) : (g = A.getAttributeNode(M)) && g.specified ? g.value : null
			}, M.escape = function(A) {
				return(A + "").replace(LA, eA)
			}, M.error = function(A) {
				throw new Error("Syntax error, unrecognized expression: " + A)
			}, M.uniqueSort = function(A) {
				var M, I = [],
					g = 0,
					T = 0;
				if(h = !e.detectDuplicates, s = !e.sortStable && A.slice(0), A.sort(J), h) {
					for(; M = A[T++];) M === A[T] && (g = I.push(T));
					for(; g--;) A.splice(I[g], 1)
				}
				return s = null, A
			}, Y = M.getText = function(A) {
				var M, I = "",
					g = 0,
					T = A.nodeType;
				if(T) {
					if(1 === T || 9 === T || 11 === T) {
						if("string" == typeof A.textContent) return A.textContent;
						for(A = A.firstChild; A; A = A.nextSibling) I += Y(A)
					} else if(3 === T || 4 === T) return A.nodeValue
				} else
					for(; M = A[g++];) I += Y(M);
				return I
			}, (y = M.selectors = {
				cacheLength: 50,
				createPseudo: g,
				match: QA,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(A) {
						return A[1] = A[1].replace(jA, xA), A[3] = (A[3] || A[4] || A[5] || "").replace(jA, xA), "~=" === A[2] && (A[3] = " " + A[3] + " "), A.slice(0, 4)
					},
					CHILD: function(A) {
						return A[1] = A[1].toLowerCase(), "nth" === A[1].slice(0, 3) ? (A[3] || M.error(A[0]), A[4] = +(A[4] ? A[5] + (A[6] || 1) : 2 * ("even" === A[3] || "odd" === A[3])), A[5] = +(A[7] + A[8] || "odd" === A[3])) : A[3] && M.error(A[0]), A
					},
					PSEUDO: function(A) {
						var M, I = !A[6] && A[2];
						return QA.CHILD.test(A[0]) ? null : (A[3] ? A[2] = A[4] || A[5] || "" : I && DA.test(I) && (M = U(I, !0)) && (M = I.indexOf(")", I.length - M) - I.length) && (A[0] = A[0].slice(0, M), A[2] = I.slice(0, M)), A.slice(0, 3))
					}
				},
				filter: {
					TAG: function(A) {
						var M = A.replace(jA, xA).toLowerCase();
						return "*" === A ? function() {
							return !0
						} : function(A) {
							return A.nodeName && A.nodeName.toLowerCase() === M
						}
					},
					CLASS: function(A) {
						var M = f[A + " "];
						return M || (M = new RegExp("(^|" + AA + ")" + A + "(" + AA + "|$)")) && f(A, function(A) {
							return M.test("string" == typeof A.className && A.className || void 0 !== A.getAttribute && A.getAttribute("class") || "")
						})
					},
					ATTR: function(A, I, g) {
						return function(T) {
							var N = M.attr(T, A);
							return null == N ? "!=" === I : !I || (N += "", "=" === I ? N === g : "!=" === I ? N !== g : "^=" === I ? g && 0 === N.indexOf(g) : "*=" === I ? g && N.indexOf(g) > -1 : "$=" === I ? g && N.slice(-g.length) === g : "~=" === I ? (" " + N.replace(TA, " ") + " ").indexOf(g) > -1 : "|=" === I && (N === g || N.slice(0, g.length + 1) === g + "-"))
						}
					},
					CHILD: function(A, M, I, g, T) {
						var N = "nth" !== A.slice(0, 3),
							E = "last" !== A.slice(-4),
							C = "of-type" === M;
						return 1 === g && 0 === T ? function(A) {
							return !!A.parentNode
						} : function(M, I, t) {
							var D, B, Q, i, n, w, c = N !== E ? "nextSibling" : "previousSibling",
								o = M.parentNode,
								j = C && M.nodeName.toLowerCase(),
								x = !t && !C,
								L = !1;
							if(o) {
								if(N) {
									for(; c;) {
										for(i = M; i = i[c];)
											if(C ? i.nodeName.toLowerCase() === j : 1 === i.nodeType) return !1;
										w = c = "only" === A && !w && "nextSibling"
									}
									return !0
								}
								if(w = [E ? o.firstChild : o.lastChild], E && x) {
									for(L = (n = (D = (B = (Q = (i = o)[k] || (i[k] = {}))[i.uniqueID] || (Q[i.uniqueID] = {}))[A] || [])[0] === b && D[1]) && D[2], i = n && o.childNodes[n]; i = ++n && i && i[c] || (L = n = 0) || w.pop();)
										if(1 === i.nodeType && ++L && i === M) {
											B[A] = [b, n, L];
											break
										}
								} else if(x && (L = n = (D = (B = (Q = (i = M)[k] || (i[k] = {}))[i.uniqueID] || (Q[i.uniqueID] = {}))[A] || [])[0] === b && D[1]), !1 === L)
									for(;
										(i = ++n && i && i[c] || (L = n = 0) || w.pop()) && ((C ? i.nodeName.toLowerCase() !== j : 1 !== i.nodeType) || !++L || (x && ((B = (Q = i[k] || (i[k] = {}))[i.uniqueID] || (Q[i.uniqueID] = {}))[A] = [b, L]), i !== M)););
								return(L -= T) === g || L % g == 0 && L / g >= 0
							}
						}
					},
					PSEUDO: function(A, I) {
						var T, N = y.pseudos[A] || y.setFilters[A.toLowerCase()] || M.error("unsupported pseudo: " + A);
						return N[k] ? N(I) : N.length > 1 ? (T = [A, A, "", I], y.setFilters.hasOwnProperty(A.toLowerCase()) ? g(function(A, M) {
							for(var g, T = N(A, I), E = T.length; E--;) A[g = $(A, T[E])] = !(M[g] = T[E])
						}) : function(A) {
							return N(A, 0, T)
						}) : N
					}
				},
				pseudos: {
					not: g(function(A) {
						var M = [],
							I = [],
							T = a(A.replace(NA, "$1"));
						return T[k] ? g(function(A, M, I, g) {
							for(var N, E = T(A, null, g, []), C = A.length; C--;)(N = E[C]) && (A[C] = !(M[C] = N))
						}) : function(A, g, N) {
							return M[0] = A, T(M, null, N, I), M[0] = null, !I.pop()
						}
					}),
					has: g(function(A) {
						return function(I) {
							return M(A, I).length > 0
						}
					}),
					contains: g(function(A) {
						return A = A.replace(jA, xA),
							function(M) {
								return(M.textContent || M.innerText || Y(M)).indexOf(A) > -1
							}
					}),
					lang: g(function(A) {
						return BA.test(A || "") || M.error("unsupported lang: " + A), A = A.replace(jA, xA).toLowerCase(),
							function(M) {
								var I;
								do {
									if(I = F ? M.lang : M.getAttribute("xml:lang") || M.getAttribute("lang")) return(I = I.toLowerCase()) === A || 0 === I.indexOf(A + "-")
								} while ((M = M.parentNode) && 1 === M.nodeType);
								return !1
							}
					}),
					target: function(M) {
						var I = A.location && A.location.hash;
						return I && I.slice(1) === M.id
					},
					root: function(A) {
						return A === O
					},
					focus: function(A) {
						return A === r.activeElement && (!r.hasFocus || r.hasFocus()) && !!(A.type || A.href || ~A.tabIndex)
					},
					enabled: D(!1),
					disabled: D(!0),
					checked: function(A) {
						var M = A.nodeName.toLowerCase();
						return "input" === M && !!A.checked || "option" === M && !!A.selected
					},
					selected: function(A) {
						return A.parentNode && A.parentNode.selectedIndex, !0 === A.selected
					},
					empty: function(A) {
						for(A = A.firstChild; A; A = A.nextSibling)
							if(A.nodeType < 6) return !1;
						return !0
					},
					parent: function(A) {
						return !y.pseudos.empty(A)
					},
					header: function(A) {
						return nA.test(A.nodeName)
					},
					input: function(A) {
						return iA.test(A.nodeName)
					},
					button: function(A) {
						var M = A.nodeName.toLowerCase();
						return "input" === M && "button" === A.type || "button" === M
					},
					text: function(A) {
						var M;
						return "input" === A.nodeName.toLowerCase() && "text" === A.type && (null == (M = A.getAttribute("type")) || "text" === M.toLowerCase())
					},
					first: B(function() {
						return [0]
					}),
					last: B(function(A, M) {
						return [M - 1]
					}),
					eq: B(function(A, M, I) {
						return [I < 0 ? I + M : I]
					}),
					even: B(function(A, M) {
						for(var I = 0; I < M; I += 2) A.push(I);
						return A
					}),
					odd: B(function(A, M) {
						for(var I = 1; I < M; I += 2) A.push(I);
						return A
					}),
					lt: B(function(A, M, I) {
						for(var g = I < 0 ? I + M : I; --g >= 0;) A.push(g);
						return A
					}),
					gt: B(function(A, M, I) {
						for(var g = I < 0 ? I + M : I; ++g < M;) A.push(g);
						return A
					})
				}
			}).pseudos.nth = y.pseudos.eq;
			for(L in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) y.pseudos[L] = C(L);
			for(L in {
					submit: !0,
					reset: !0
				}) y.pseudos[L] = t(L);
			return i.prototype = y.filters = y.pseudos, y.setFilters = new i, U = M.tokenize = function(A, I) {
				var g, T, N, E, C, t, D, B = X[A + " "];
				if(B) return I ? 0 : B.slice(0);
				for(C = A, t = [], D = y.preFilter; C;) {
					g && !(T = EA.exec(C)) || (T && (C = C.slice(T[0].length) || C), t.push(N = [])), g = !1, (T = CA.exec(C)) && (g = T.shift(), N.push({
						value: g,
						type: T[0].replace(NA, " ")
					}), C = C.slice(g.length));
					for(E in y.filter) !(T = QA[E].exec(C)) || D[E] && !(T = D[E](T)) || (g = T.shift(), N.push({
						value: g,
						type: E,
						matches: T
					}), C = C.slice(g.length));
					if(!g) break
				}
				return I ? C.length : C ? M.error(A) : X(A, t).slice(0)
			}, a = M.compile = function(A, I) {
				var T, N = [],
					E = [],
					C = V[A + " "];
				if(!C) {
					for(I || (I = U(A)), T = I.length; T--;)(C = x(I[T]))[k] ? N.push(C) : E.push(C);
					(C = V(A, function(A, I) {
						var T = I.length > 0,
							N = A.length > 0,
							E = function(g, E, C, t, D) {
								var B, Q, i, n = 0,
									w = "0",
									c = g && [],
									j = [],
									x = S,
									L = g || N && y.find.TAG("*", D),
									e = b += null == x ? 1 : Math.random() || .1,
									Y = L.length;
								for(D && (S = E === r || E || D); w !== Y && null != (B = L[w]); w++) {
									if(N && B) {
										for(Q = 0, E || B.ownerDocument === r || (l(B), C = !F); i = A[Q++];)
											if(i(B, E || r, C)) {
												t.push(B);
												break
											}
										D && (b = e)
									}
									T && ((B = !i && B) && n--, g && c.push(B))
								}
								if(n += w, T && w !== n) {
									for(Q = 0; i = I[Q++];) i(c, j, E, C);
									if(g) {
										if(n > 0)
											for(; w--;) c[w] || j[w] || (j[w] = P.call(t));
										j = o(j)
									}
									K.apply(t, j), D && !g && j.length > 0 && n + I.length > 1 && M.uniqueSort(t)
								}
								return D && (b = e, S = x), c
							};
						return T ? g(E) : E
					}(E, N))).selector = A
				}
				return C
			}, d = M.select = function(A, M, I, g) {
				var T, N, E, C, t, D = "function" == typeof A && A,
					B = !g && U(A = D.selector || A);
				if(I = I || [], 1 === B.length) {
					if((N = B[0] = B[0].slice(0)).length > 2 && "ID" === (E = N[0]).type && 9 === M.nodeType && F && y.relative[N[1].type]) {
						if(!(M = (y.find.ID(E.matches[0].replace(jA, xA), M) || [])[0])) return I;
						D && (M = M.parentNode), A = A.slice(N.shift().value.length)
					}
					for(T = QA.needsContext.test(A) ? 0 : N.length; T-- && (E = N[T], !y.relative[C = E.type]);)
						if((t = y.find[C]) && (g = t(E.matches[0].replace(jA, xA), oA.test(N[0].type) && Q(M.parentNode) || M))) {
							if(N.splice(T, 1), !(A = g.length && n(N))) return K.apply(I, g), I;
							break
						}
				}
				return(D || a(A, B))(g, M, !F, I, !M || oA.test(A) && Q(M.parentNode) || M), I
			}, e.sortStable = k.split("").sort(J).join("") === k, e.detectDuplicates = !!h, l(), e.sortDetached = T(function(A) {
				return 1 & A.compareDocumentPosition(r.createElement("fieldset"))
			}), T(function(A) {
				return A.innerHTML = "<a href='#'></a>", "#" === A.firstChild.getAttribute("href")
			}) || N("type|href|height|width", function(A, M, I) {
				if(!I) return A.getAttribute(M, "type" === M.toLowerCase() ? 1 : 2)
			}), e.attributes && T(function(A) {
				return A.innerHTML = "<input/>", A.firstChild.setAttribute("value", ""), "" === A.firstChild.getAttribute("value")
			}) || N("value", function(A, M, I) {
				if(!I && "input" === A.nodeName.toLowerCase()) return A.defaultValue
			}), T(function(A) {
				return null == A.getAttribute("disabled")
			}) || N(_, function(A, M, I) {
				var g;
				if(!I) return !0 === A[M] ? M.toLowerCase() : (g = A.getAttributeNode(M)) && g.specified ? g.value : null
			}), M
		}(I);
		QA.find = oA, QA.expr = oA.selectors, QA.expr[":"] = QA.expr.pseudos, QA.uniqueSort = QA.unique = oA.uniqueSort, QA.text = oA.getText, QA.isXMLDoc = oA.isXML, QA.contains = oA.contains, QA.escapeSelector = oA.escape;
		var jA = function(A, M, I) {
				for(var g = [], T = void 0 !== I;
					(A = A[M]) && 9 !== A.nodeType;)
					if(1 === A.nodeType) {
						if(T && QA(A).is(I)) break;
						g.push(A)
					}
				return g
			},
			xA = function(A, M) {
				for(var I = []; A; A = A.nextSibling) 1 === A.nodeType && A !== M && I.push(A);
				return I
			},
			LA = QA.expr.match.needsContext,
			eA = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
			yA = /^.[^:#\[\.,]*$/;
		QA.filter = function(A, M, I) {
			var g = M[0];
			return I && (A = ":not(" + A + ")"), 1 === M.length && 1 === g.nodeType ? QA.find.matchesSelector(g, A) ? [g] : [] : QA.find.matches(A, QA.grep(M, function(A) {
				return 1 === A.nodeType
			}))
		}, QA.fn.extend({
			find: function(A) {
				var M, I, g = this.length,
					T = this;
				if("string" != typeof A) return this.pushStack(QA(A).filter(function() {
					for(M = 0; M < g; M++)
						if(QA.contains(T[M], this)) return !0
				}));
				for(I = this.pushStack([]), M = 0; M < g; M++) QA.find(A, T[M], I);
				return g > 1 ? QA.uniqueSort(I) : I
			},
			filter: function(A) {
				return this.pushStack(D(this, A || [], !1))
			},
			not: function(A) {
				return this.pushStack(D(this, A || [], !0))
			},
			is: function(A) {
				return !!D(this, "string" == typeof A && LA.test(A) ? QA(A) : A || [], !1).length
			}
		});
		var YA, zA = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
		(QA.fn.init = function(A, M, I) {
			var g, T;
			if(!A) return this;
			if(I = I || YA, "string" == typeof A) {
				if(!(g = "<" === A[0] && ">" === A[A.length - 1] && A.length >= 3 ? [null, A, null] : zA.exec(A)) || !g[1] && M) return !M || M.jquery ? (M || I).find(A) : this.constructor(M).find(A);
				if(g[1]) {
					if(M = M instanceof QA ? M[0] : M, QA.merge(this, QA.parseHTML(g[1], M && M.nodeType ? M.ownerDocument || M : _, !0)), eA.test(g[1]) && QA.isPlainObject(M))
						for(g in M) QA.isFunction(this[g]) ? this[g](M[g]) : this.attr(g, M[g]);
					return this
				}
				return(T = _.getElementById(g[2])) && (this[0] = T, this.length = 1), this
			}
			return A.nodeType ? (this[0] = A, this.length = 1, this) : QA.isFunction(A) ? void 0 !== I.ready ? I.ready(A) : A(QA) : QA.makeArray(A, this)
		}).prototype = QA.fn, YA = QA(_);
		var UA = /^(?:parents|prev(?:Until|All))/,
			aA = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		QA.fn.extend({
			has: function(A) {
				var M = QA(A, this),
					I = M.length;
				return this.filter(function() {
					for(var A = 0; A < I; A++)
						if(QA.contains(this, M[A])) return !0
				})
			},
			closest: function(A, M) {
				var I, g = 0,
					T = this.length,
					N = [],
					E = "string" != typeof A && QA(A);
				if(!LA.test(A))
					for(; g < T; g++)
						for(I = this[g]; I && I !== M; I = I.parentNode)
							if(I.nodeType < 11 && (E ? E.index(I) > -1 : 1 === I.nodeType && QA.find.matchesSelector(I, A))) {
								N.push(I);
								break
							}
				return this.pushStack(N.length > 1 ? QA.uniqueSort(N) : N)
			},
			index: function(A) {
				return A ? "string" == typeof A ? TA.call(QA(A), this[0]) : TA.call(this, A.jquery ? A[0] : A) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(A, M) {
				return this.pushStack(QA.uniqueSort(QA.merge(this.get(), QA(A, M))))
			},
			addBack: function(A) {
				return this.add(null == A ? this.prevObject : this.prevObject.filter(A))
			}
		}), QA.each({
			parent: function(A) {
				var M = A.parentNode;
				return M && 11 !== M.nodeType ? M : null
			},
			parents: function(A) {
				return jA(A, "parentNode")
			},
			parentsUntil: function(A, M, I) {
				return jA(A, "parentNode", I)
			},
			next: function(A) {
				return B(A, "nextSibling")
			},
			prev: function(A) {
				return B(A, "previousSibling")
			},
			nextAll: function(A) {
				return jA(A, "nextSibling")
			},
			prevAll: function(A) {
				return jA(A, "previousSibling")
			},
			nextUntil: function(A, M, I) {
				return jA(A, "nextSibling", I)
			},
			prevUntil: function(A, M, I) {
				return jA(A, "previousSibling", I)
			},
			siblings: function(A) {
				return xA((A.parentNode || {}).firstChild, A)
			},
			children: function(A) {
				return xA(A.firstChild)
			},
			contents: function(A) {
				return t(A, "iframe") ? A.contentDocument : (t(A, "template") && (A = A.content || A), QA.merge([], A.childNodes))
			}
		}, function(A, M) {
			QA.fn[A] = function(I, g) {
				var T = QA.map(this, M, I);
				return "Until" !== A.slice(-5) && (g = I), g && "string" == typeof g && (T = QA.filter(g, T)), this.length > 1 && (aA[A] || QA.uniqueSort(T), UA.test(A) && T.reverse()), this.pushStack(T)
			}
		});
		var dA = /[^\x20\t\r\n\f]+/g;
		QA.Callbacks = function(A) {
			A = "string" == typeof A ? function(A) {
				var M = {};
				return QA.each(A.match(dA) || [], function(A, I) {
					M[I] = !0
				}), M
			}(A) : QA.extend({}, A);
			var M, I, g, T, N = [],
				E = [],
				C = -1,
				t = function() {
					for(T = T || A.once, g = M = !0; E.length; C = -1)
						for(I = E.shift(); ++C < N.length;) !1 === N[C].apply(I[0], I[1]) && A.stopOnFalse && (C = N.length, I = !1);
					A.memory || (I = !1), M = !1, T && (N = I ? [] : "")
				},
				D = {
					add: function() {
						return N && (I && !M && (C = N.length - 1, E.push(I)), function M(I) {
							QA.each(I, function(I, g) {
								QA.isFunction(g) ? A.unique && D.has(g) || N.push(g) : g && g.length && "string" !== QA.type(g) && M(g)
							})
						}(arguments), I && !M && t()), this
					},
					remove: function() {
						return QA.each(arguments, function(A, M) {
							for(var I;
								(I = QA.inArray(M, N, I)) > -1;) N.splice(I, 1), I <= C && C--
						}), this
					},
					has: function(A) {
						return A ? QA.inArray(A, N) > -1 : N.length > 0
					},
					empty: function() {
						return N && (N = []), this
					},
					disable: function() {
						return T = E = [], N = I = "", this
					},
					disabled: function() {
						return !N
					},
					lock: function() {
						return T = E = [], I || M || (N = I = ""), this
					},
					locked: function() {
						return !!T
					},
					fireWith: function(A, I) {
						return T || (I = [A, (I = I || []).slice ? I.slice() : I], E.push(I), M || t()), this
					},
					fire: function() {
						return D.fireWith(this, arguments), this
					},
					fired: function() {
						return !!g
					}
				};
			return D
		}, QA.extend({
			Deferred: function(A) {
				var M = [
						["notify", "progress", QA.Callbacks("memory"), QA.Callbacks("memory"), 2],
						["resolve", "done", QA.Callbacks("once memory"), QA.Callbacks("once memory"), 0, "resolved"],
						["reject", "fail", QA.Callbacks("once memory"), QA.Callbacks("once memory"), 1, "rejected"]
					],
					g = "pending",
					T = {
						state: function() {
							return g
						},
						always: function() {
							return N.done(arguments).fail(arguments), this
						},
						catch: function(A) {
							return T.then(null, A)
						},
						pipe: function() {
							var A = arguments;
							return QA.Deferred(function(I) {
								QA.each(M, function(M, g) {
									var T = QA.isFunction(A[g[4]]) && A[g[4]];
									N[g[1]](function() {
										var A = T && T.apply(this, arguments);
										A && QA.isFunction(A.promise) ? A.promise().progress(I.notify).done(I.resolve).fail(I.reject) : I[g[0] + "With"](this, T ? [A] : arguments)
									})
								}), A = null
							}).promise()
						},
						then: function(A, g, T) {
							function N(A, M, g, T) {
								return function() {
									var C = this,
										t = arguments,
										D = function() {
											var I, D;
											if(!(A < E)) {
												if((I = g.apply(C, t)) === M.promise()) throw new TypeError("Thenable self-resolution");
												D = I && ("object" == typeof I || "function" == typeof I) && I.then, QA.isFunction(D) ? T ? D.call(I, N(E, M, Q, T), N(E, M, i, T)) : (E++, D.call(I, N(E, M, Q, T), N(E, M, i, T), N(E, M, Q, M.notifyWith))) : (g !== Q && (C = void 0, t = [I]), (T || M.resolveWith)(C, t))
											}
										},
										B = T ? D : function() {
											try {
												D()
											} catch(I) {
												QA.Deferred.exceptionHook && QA.Deferred.exceptionHook(I, B.stackTrace), A + 1 >= E && (g !== i && (C = void 0, t = [I]), M.rejectWith(C, t))
											}
										};
									A ? B() : (QA.Deferred.getStackHook && (B.stackTrace = QA.Deferred.getStackHook()), I.setTimeout(B))
								}
							}
							var E = 0;
							return QA.Deferred(function(I) {
								M[0][3].add(N(0, I, QA.isFunction(T) ? T : Q, I.notifyWith)), M[1][3].add(N(0, I, QA.isFunction(A) ? A : Q)), M[2][3].add(N(0, I, QA.isFunction(g) ? g : i))
							}).promise()
						},
						promise: function(A) {
							return null != A ? QA.extend(A, T) : T
						}
					},
					N = {};
				return QA.each(M, function(A, I) {
					var E = I[2],
						C = I[5];
					T[I[1]] = E.add, C && E.add(function() {
						g = C
					}, M[3 - A][2].disable, M[0][2].lock), E.add(I[3].fire), N[I[0]] = function() {
						return N[I[0] + "With"](this === N ? void 0 : this, arguments), this
					}, N[I[0] + "With"] = E.fireWith
				}), T.promise(N), A && A.call(N, N), N
			},
			when: function(A) {
				var M = arguments.length,
					I = M,
					g = Array(I),
					T = MA.call(arguments),
					N = QA.Deferred(),
					E = function(A) {
						return function(I) {
							g[A] = this, T[A] = arguments.length > 1 ? MA.call(arguments) : I, --M || N.resolveWith(g, T)
						}
					};
				if(M <= 1 && (n(A, N.done(E(I)).resolve, N.reject, !M), "pending" === N.state() || QA.isFunction(T[I] && T[I].then))) return N.then();
				for(; I--;) n(T[I], E(I), N.reject);
				return N.promise()
			}
		});
		var SA = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		QA.Deferred.exceptionHook = function(A, M) {
			I.console && I.console.warn && A && SA.test(A.name) && I.console.warn("jQuery.Deferred exception: " + A.message, A.stack, M)
		}, QA.readyException = function(A) {
			I.setTimeout(function() {
				throw A
			})
		};
		var sA = QA.Deferred();
		QA.fn.ready = function(A) {
			return sA.then(A).catch(function(A) {
				QA.readyException(A)
			}), this
		}, QA.extend({
			isReady: !1,
			readyWait: 1,
			ready: function(A) {
				(!0 === A ? --QA.readyWait : QA.isReady) || (QA.isReady = !0, !0 !== A && --QA.readyWait > 0 || sA.resolveWith(_, [QA]))
			}
		}), QA.ready.then = sA.then, "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? I.setTimeout(QA.ready) : (_.addEventListener("DOMContentLoaded", w), I.addEventListener("load", w));
		var hA = function(A, M, I, g, T, N, E) {
				var C = 0,
					t = A.length,
					D = null == I;
				if("object" === QA.type(I)) {
					T = !0;
					for(C in I) hA(A, M, C, I[C], !0, N, E)
				} else if(void 0 !== g && (T = !0, QA.isFunction(g) || (E = !0), D && (E ? (M.call(A, g), M = null) : (D = M, M = function(A, M, I) {
						return D.call(QA(A), I)
					})), M))
					for(; C < t; C++) M(A[C], I, E ? g : g.call(A[C], C, M(A[C], I)));
				return T ? A : D ? M.call(A) : t ? M(A[0], I) : N
			},
			lA = function(A) {
				return 1 === A.nodeType || 9 === A.nodeType || !+A.nodeType
			};
		c.uid = 1, c.prototype = {
			cache: function(A) {
				var M = A[this.expando];
				return M || (M = {}, lA(A) && (A.nodeType ? A[this.expando] = M : Object.defineProperty(A, this.expando, {
					value: M,
					configurable: !0
				}))), M
			},
			set: function(A, M, I) {
				var g, T = this.cache(A);
				if("string" == typeof M) T[QA.camelCase(M)] = I;
				else
					for(g in M) T[QA.camelCase(g)] = M[g];
				return T
			},
			get: function(A, M) {
				return void 0 === M ? this.cache(A) : A[this.expando] && A[this.expando][QA.camelCase(M)]
			},
			access: function(A, M, I) {
				return void 0 === M || M && "string" == typeof M && void 0 === I ? this.get(A, M) : (this.set(A, M, I), void 0 !== I ? I : M)
			},
			remove: function(A, M) {
				var I, g = A[this.expando];
				if(void 0 !== g) {
					if(void 0 !== M) {
						I = (M = Array.isArray(M) ? M.map(QA.camelCase) : (M = QA.camelCase(M)) in g ? [M] : M.match(dA) || []).length;
						for(; I--;) delete g[M[I]]
					}(void 0 === M || QA.isEmptyObject(g)) && (A.nodeType ? A[this.expando] = void 0 : delete A[this.expando])
				}
			},
			hasData: function(A) {
				var M = A[this.expando];
				return void 0 !== M && !QA.isEmptyObject(M)
			}
		};
		var rA = new c,
			OA = new c,
			FA = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			uA = /[A-Z]/g;
		QA.extend({
			hasData: function(A) {
				return OA.hasData(A) || rA.hasData(A)
			},
			data: function(A, M, I) {
				return OA.access(A, M, I)
			},
			removeData: function(A, M) {
				OA.remove(A, M)
			},
			_data: function(A, M, I) {
				return rA.access(A, M, I)
			},
			_removeData: function(A, M) {
				rA.remove(A, M)
			}
		}), QA.fn.extend({
			data: function(A, M) {
				var I, g, T, N = this[0],
					E = N && N.attributes;
				if(void 0 === A) {
					if(this.length && (T = OA.get(N), 1 === N.nodeType && !rA.get(N, "hasDataAttrs"))) {
						for(I = E.length; I--;) E[I] && 0 === (g = E[I].name).indexOf("data-") && (g = QA.camelCase(g.slice(5)), o(N, g, T[g]));
						rA.set(N, "hasDataAttrs", !0)
					}
					return T
				}
				return "object" == typeof A ? this.each(function() {
					OA.set(this, A)
				}) : hA(this, function(M) {
					var I;
					if(N && void 0 === M) {
						if(void 0 !== (I = OA.get(N, A))) return I;
						if(void 0 !== (I = o(N, A))) return I
					} else this.each(function() {
						OA.set(this, A, M)
					})
				}, null, M, arguments.length > 1, null, !0)
			},
			removeData: function(A) {
				return this.each(function() {
					OA.remove(this, A)
				})
			}
		}), QA.extend({
			queue: function(A, M, I) {
				var g;
				if(A) return M = (M || "fx") + "queue", g = rA.get(A, M), I && (!g || Array.isArray(I) ? g = rA.access(A, M, QA.makeArray(I)) : g.push(I)), g || []
			},
			dequeue: function(A, M) {
				M = M || "fx";
				var I = QA.queue(A, M),
					g = I.length,
					T = I.shift(),
					N = QA._queueHooks(A, M),
					E = function() {
						QA.dequeue(A, M)
					};
				"inprogress" === T && (T = I.shift(), g--), T && ("fx" === M && I.unshift("inprogress"), delete N.stop, T.call(A, E, N)), !g && N && N.empty.fire()
			},
			_queueHooks: function(A, M) {
				var I = M + "queueHooks";
				return rA.get(A, I) || rA.access(A, I, {
					empty: QA.Callbacks("once memory").add(function() {
						rA.remove(A, [M + "queue", I])
					})
				})
			}
		}), QA.fn.extend({
			queue: function(A, M) {
				var I = 2;
				return "string" != typeof A && (M = A, A = "fx", I--), arguments.length < I ? QA.queue(this[0], A) : void 0 === M ? this : this.each(function() {
					var I = QA.queue(this, A, M);
					QA._queueHooks(this, A), "fx" === A && "inprogress" !== I[0] && QA.dequeue(this, A)
				})
			},
			dequeue: function(A) {
				return this.each(function() {
					QA.dequeue(this, A)
				})
			},
			clearQueue: function(A) {
				return this.queue(A || "fx", [])
			},
			promise: function(A, M) {
				var I, g = 1,
					T = QA.Deferred(),
					N = this,
					E = this.length,
					C = function() {
						--g || T.resolveWith(N, [N])
					};
				for("string" != typeof A && (M = A, A = void 0), A = A || "fx"; E--;)(I = rA.get(N[E], A + "queueHooks")) && I.empty && (g++, I.empty.add(C));
				return C(), T.promise(M)
			}
		});
		var HA = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			RA = new RegExp("^(?:([+-])=|)(" + HA + ")([a-z%]*)$", "i"),
			GA = ["Top", "Right", "Bottom", "Left"],
			kA = function(A, M) {
				return "none" === (A = M || A).style.display || "" === A.style.display && QA.contains(A.ownerDocument, A) && "none" === QA.css(A, "display")
			},
			pA = function(A, M, I, g) {
				var T, N, E = {};
				for(N in M) E[N] = A.style[N], A.style[N] = M[N];
				T = I.apply(A, g || []);
				for(N in M) A.style[N] = E[N];
				return T
			},
			bA = {};
		QA.fn.extend({
			show: function() {
				return L(this, !0)
			},
			hide: function() {
				return L(this)
			},
			toggle: function(A) {
				return "boolean" == typeof A ? A ? this.show() : this.hide() : this.each(function() {
					kA(this) ? QA(this).show() : QA(this).hide()
				})
			}
		});
		var mA = /^(?:checkbox|radio)$/i,
			fA = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
			XA = /^$|\/(?:java|ecma)script/i,
			VA = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
		VA.optgroup = VA.option, VA.tbody = VA.tfoot = VA.colgroup = VA.caption = VA.thead, VA.th = VA.td;
		var JA = /<|&#?\w+;/;
		! function() {
			var A = _.createDocumentFragment().appendChild(_.createElement("div")),
				M = _.createElement("input");
			M.setAttribute("type", "radio"), M.setAttribute("checked", "checked"), M.setAttribute("name", "t"), A.appendChild(M), BA.checkClone = A.cloneNode(!0).cloneNode(!0).lastChild.checked, A.innerHTML = "<textarea>x</textarea>", BA.noCloneChecked = !!A.cloneNode(!0).lastChild.defaultValue
		}();
		var WA = _.documentElement,
			vA = /^key/,
			PA = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			ZA = /^([^.]*)(?:\.(.+)|)/;
		QA.event = {
			global: {},
			add: function(A, M, I, g, T) {
				var N, E, C, t, D, B, Q, i, n, w, c, o = rA.get(A);
				if(o)
					for(I.handler && (I = (N = I).handler, T = N.selector), T && QA.find.matchesSelector(WA, T), I.guid || (I.guid = QA.guid++), (t = o.events) || (t = o.events = {}), (E = o.handle) || (E = o.handle = function(M) {
							return void 0 !== QA && QA.event.triggered !== M.type ? QA.event.dispatch.apply(A, arguments) : void 0
						}), D = (M = (M || "").match(dA) || [""]).length; D--;) n = c = (C = ZA.exec(M[D]) || [])[1], w = (C[2] || "").split(".").sort(), n && (Q = QA.event.special[n] || {}, n = (T ? Q.delegateType : Q.bindType) || n, Q = QA.event.special[n] || {}, B = QA.extend({
						type: n,
						origType: c,
						data: g,
						handler: I,
						guid: I.guid,
						selector: T,
						needsContext: T && QA.expr.match.needsContext.test(T),
						namespace: w.join(".")
					}, N), (i = t[n]) || ((i = t[n] = []).delegateCount = 0, Q.setup && !1 !== Q.setup.call(A, g, w, E) || A.addEventListener && A.addEventListener(n, E)), Q.add && (Q.add.call(A, B), B.handler.guid || (B.handler.guid = I.guid)), T ? i.splice(i.delegateCount++, 0, B) : i.push(B), QA.event.global[n] = !0)
			},
			remove: function(A, M, I, g, T) {
				var N, E, C, t, D, B, Q, i, n, w, c, o = rA.hasData(A) && rA.get(A);
				if(o && (t = o.events)) {
					for(D = (M = (M || "").match(dA) || [""]).length; D--;)
						if(C = ZA.exec(M[D]) || [], n = c = C[1], w = (C[2] || "").split(".").sort(), n) {
							for(Q = QA.event.special[n] || {}, i = t[n = (g ? Q.delegateType : Q.bindType) || n] || [], C = C[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), E = N = i.length; N--;) B = i[N], !T && c !== B.origType || I && I.guid !== B.guid || C && !C.test(B.namespace) || g && g !== B.selector && ("**" !== g || !B.selector) || (i.splice(N, 1), B.selector && i.delegateCount--, Q.remove && Q.remove.call(A, B));
							E && !i.length && (Q.teardown && !1 !== Q.teardown.call(A, w, o.handle) || QA.removeEvent(A, n, o.handle), delete t[n])
						} else
							for(n in t) QA.event.remove(A, n + M[D], I, g, !0);
					QA.isEmptyObject(t) && rA.remove(A, "handle events")
				}
			},
			dispatch: function(A) {
				var M, I, g, T, N, E, C = QA.event.fix(A),
					t = new Array(arguments.length),
					D = (rA.get(this, "events") || {})[C.type] || [],
					B = QA.event.special[C.type] || {};
				for(t[0] = C, M = 1; M < arguments.length; M++) t[M] = arguments[M];
				if(C.delegateTarget = this, !B.preDispatch || !1 !== B.preDispatch.call(this, C)) {
					for(E = QA.event.handlers.call(this, C, D), M = 0;
						(T = E[M++]) && !C.isPropagationStopped();)
						for(C.currentTarget = T.elem, I = 0;
							(N = T.handlers[I++]) && !C.isImmediatePropagationStopped();) C.rnamespace && !C.rnamespace.test(N.namespace) || (C.handleObj = N, C.data = N.data, void 0 !== (g = ((QA.event.special[N.origType] || {}).handle || N.handler).apply(T.elem, t)) && !1 === (C.result = g) && (C.preventDefault(), C.stopPropagation()));
					return B.postDispatch && B.postDispatch.call(this, C), C.result
				}
			},
			handlers: function(A, M) {
				var I, g, T, N, E, C = [],
					t = M.delegateCount,
					D = A.target;
				if(t && D.nodeType && !("click" === A.type && A.button >= 1))
					for(; D !== this; D = D.parentNode || this)
						if(1 === D.nodeType && ("click" !== A.type || !0 !== D.disabled)) {
							for(N = [], E = {}, I = 0; I < t; I++) void 0 === E[T = (g = M[I]).selector + " "] && (E[T] = g.needsContext ? QA(T, this).index(D) > -1 : QA.find(T, this, null, [D]).length), E[T] && N.push(g);
							N.length && C.push({
								elem: D,
								handlers: N
							})
						}
				return D = this, t < M.length && C.push({
					elem: D,
					handlers: M.slice(t)
				}), C
			},
			addProp: function(A, M) {
				Object.defineProperty(QA.Event.prototype, A, {
					enumerable: !0,
					configurable: !0,
					get: QA.isFunction(M) ? function() {
						if(this.originalEvent) return M(this.originalEvent)
					} : function() {
						if(this.originalEvent) return this.originalEvent[A]
					},
					set: function(M) {
						Object.defineProperty(this, A, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: M
						})
					}
				})
			},
			fix: function(A) {
				return A[QA.expando] ? A : new QA.Event(A)
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						if(this !== a() && this.focus) return this.focus(), !1
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						if(this === a() && this.blur) return this.blur(), !1
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						if("checkbox" === this.type && this.click && t(this, "input")) return this.click(), !1
					},
					_default: function(A) {
						return t(A.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(A) {
						void 0 !== A.result && A.originalEvent && (A.originalEvent.returnValue = A.result)
					}
				}
			}
		}, QA.removeEvent = function(A, M, I) {
			A.removeEventListener && A.removeEventListener(M, I)
		}, QA.Event = function(A, M) {
			if(!(this instanceof QA.Event)) return new QA.Event(A, M);
			A && A.type ? (this.originalEvent = A, this.type = A.type, this.isDefaultPrevented = A.defaultPrevented || void 0 === A.defaultPrevented && !1 === A.returnValue ? z : U, this.target = A.target && 3 === A.target.nodeType ? A.target.parentNode : A.target, this.currentTarget = A.currentTarget, this.relatedTarget = A.relatedTarget) : this.type = A, M && QA.extend(this, M), this.timeStamp = A && A.timeStamp || QA.now(), this[QA.expando] = !0
		}, QA.Event.prototype = {
			constructor: QA.Event,
			isDefaultPrevented: U,
			isPropagationStopped: U,
			isImmediatePropagationStopped: U,
			isSimulated: !1,
			preventDefault: function() {
				var A = this.originalEvent;
				this.isDefaultPrevented = z, A && !this.isSimulated && A.preventDefault()
			},
			stopPropagation: function() {
				var A = this.originalEvent;
				this.isPropagationStopped = z, A && !this.isSimulated && A.stopPropagation()
			},
			stopImmediatePropagation: function() {
				var A = this.originalEvent;
				this.isImmediatePropagationStopped = z, A && !this.isSimulated && A.stopImmediatePropagation(), this.stopPropagation()
			}
		}, QA.each({
			altKey: !0,
			bubbles: !0,
			cancelable: !0,
			changedTouches: !0,
			ctrlKey: !0,
			detail: !0,
			eventPhase: !0,
			metaKey: !0,
			pageX: !0,
			pageY: !0,
			shiftKey: !0,
			view: !0,
			char: !0,
			charCode: !0,
			key: !0,
			keyCode: !0,
			button: !0,
			buttons: !0,
			clientX: !0,
			clientY: !0,
			offsetX: !0,
			offsetY: !0,
			pointerId: !0,
			pointerType: !0,
			screenX: !0,
			screenY: !0,
			targetTouches: !0,
			toElement: !0,
			touches: !0,
			which: function(A) {
				var M = A.button;
				return null == A.which && vA.test(A.type) ? null != A.charCode ? A.charCode : A.keyCode : !A.which && void 0 !== M && PA.test(A.type) ? 1 & M ? 1 : 2 & M ? 3 : 4 & M ? 2 : 0 : A.which
			}
		}, QA.event.addProp), QA.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(A, M) {
			QA.event.special[A] = {
				delegateType: M,
				bindType: M,
				handle: function(A) {
					var I, g = A.relatedTarget,
						T = A.handleObj;
					return g && (g === this || QA.contains(this, g)) || (A.type = T.origType, I = T.handler.apply(this, arguments), A.type = M), I
				}
			}
		}), QA.fn.extend({
			on: function(A, M, I, g) {
				return d(this, A, M, I, g)
			},
			one: function(A, M, I, g) {
				return d(this, A, M, I, g, 1)
			},
			off: function(A, M, I) {
				var g, T;
				if(A && A.preventDefault && A.handleObj) return g = A.handleObj, QA(A.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler), this;
				if("object" == typeof A) {
					for(T in A) this.off(T, M, A[T]);
					return this
				}
				return !1 !== M && "function" != typeof M || (I = M, M = void 0), !1 === I && (I = U), this.each(function() {
					QA.event.remove(this, A, I, M)
				})
			}
		});
		var KA = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
			qA = /<script|<style|<link/i,
			$A = /checked\s*(?:[^=]|=\s*.checked.)/i,
			_A = /^true\/(.*)/,
			AM = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
		QA.extend({
			htmlPrefilter: function(A) {
				return A.replace(KA, "<$1></$2>")
			},
			clone: function(A, M, I) {
				var g, T, N, E, C = A.cloneNode(!0),
					t = QA.contains(A.ownerDocument, A);
				if(!(BA.noCloneChecked || 1 !== A.nodeType && 11 !== A.nodeType || QA.isXMLDoc(A)))
					for(E = e(C), g = 0, T = (N = e(A)).length; g < T; g++) r(N[g], E[g]);
				if(M)
					if(I)
						for(N = N || e(A), E = E || e(C), g = 0, T = N.length; g < T; g++) l(N[g], E[g]);
					else l(A, C);
				return(E = e(C, "script")).length > 0 && y(E, !t && e(A, "script")), C
			},
			cleanData: function(A) {
				for(var M, I, g, T = QA.event.special, N = 0; void 0 !== (I = A[N]); N++)
					if(lA(I)) {
						if(M = I[rA.expando]) {
							if(M.events)
								for(g in M.events) T[g] ? QA.event.remove(I, g) : QA.removeEvent(I, g, M.handle);
							I[rA.expando] = void 0
						}
						I[OA.expando] && (I[OA.expando] = void 0)
					}
			}
		}), QA.fn.extend({
			detach: function(A) {
				return F(this, A, !0)
			},
			remove: function(A) {
				return F(this, A)
			},
			text: function(A) {
				return hA(this, function(A) {
					return void 0 === A ? QA.text(this) : this.empty().each(function() {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = A)
					})
				}, null, A, arguments.length)
			},
			append: function() {
				return O(this, arguments, function(A) {
					if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						S(this, A).appendChild(A)
					}
				})
			},
			prepend: function() {
				return O(this, arguments, function(A) {
					if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var M = S(this, A);
						M.insertBefore(A, M.firstChild)
					}
				})
			},
			before: function() {
				return O(this, arguments, function(A) {
					this.parentNode && this.parentNode.insertBefore(A, this)
				})
			},
			after: function() {
				return O(this, arguments, function(A) {
					this.parentNode && this.parentNode.insertBefore(A, this.nextSibling)
				})
			},
			empty: function() {
				for(var A, M = 0; null != (A = this[M]); M++) 1 === A.nodeType && (QA.cleanData(e(A, !1)), A.textContent = "");
				return this
			},
			clone: function(A, M) {
				return A = null != A && A, M = null == M ? A : M, this.map(function() {
					return QA.clone(this, A, M)
				})
			},
			html: function(A) {
				return hA(this, function(A) {
					var M = this[0] || {},
						I = 0,
						g = this.length;
					if(void 0 === A && 1 === M.nodeType) return M.innerHTML;
					if("string" == typeof A && !qA.test(A) && !VA[(fA.exec(A) || ["", ""])[1].toLowerCase()]) {
						A = QA.htmlPrefilter(A);
						try {
							for(; I < g; I++) 1 === (M = this[I] || {}).nodeType && (QA.cleanData(e(M, !1)), M.innerHTML = A);
							M = 0
						} catch(A) {}
					}
					M && this.empty().append(A)
				}, null, A, arguments.length)
			},
			replaceWith: function() {
				var A = [];
				return O(this, arguments, function(M) {
					var I = this.parentNode;
					QA.inArray(this, A) < 0 && (QA.cleanData(e(this)), I && I.replaceChild(M, this))
				}, A)
			}
		}), QA.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(A, M) {
			QA.fn[A] = function(A) {
				for(var I, g = [], T = QA(A), N = T.length - 1, E = 0; E <= N; E++) I = E === N ? this : this.clone(!0), QA(T[E])[M](I), gA.apply(g, I.get());
				return this.pushStack(g)
			}
		});
		var MM = /^margin/,
			IM = new RegExp("^(" + HA + ")(?!px)[a-z%]+$", "i"),
			gM = function(A) {
				var M = A.ownerDocument.defaultView;
				return M && M.opener || (M = I), M.getComputedStyle(A)
			};
		! function() {
			function A() {
				if(C) {
					C.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", C.innerHTML = "", WA.appendChild(E);
					var A = I.getComputedStyle(C);
					M = "1%" !== A.top, N = "2px" === A.marginLeft, g = "4px" === A.width, C.style.marginRight = "50%", T = "4px" === A.marginRight, WA.removeChild(E), C = null
				}
			}
			var M, g, T, N, E = _.createElement("div"),
				C = _.createElement("div");
			C.style && (C.style.backgroundClip = "content-box", C.cloneNode(!0).style.backgroundClip = "", BA.clearCloneStyle = "content-box" === C.style.backgroundClip, E.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", E.appendChild(C), QA.extend(BA, {
				pixelPosition: function() {
					return A(), M
				},
				boxSizingReliable: function() {
					return A(), g
				},
				pixelMarginRight: function() {
					return A(), T
				},
				reliableMarginLeft: function() {
					return A(), N
				}
			}))
		}();
		var TM = /^(none|table(?!-c[ea]).+)/,
			NM = /^--/,
			EM = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			CM = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			tM = ["Webkit", "Moz", "ms"],
			DM = _.createElement("div").style;
		QA.extend({
			cssHooks: {
				opacity: {
					get: function(A, M) {
						if(M) {
							var I = u(A, "opacity");
							return "" === I ? "1" : I
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				float: "cssFloat"
			},
			style: function(A, M, I, g) {
				if(A && 3 !== A.nodeType && 8 !== A.nodeType && A.style) {
					var T, N, E, C = QA.camelCase(M),
						t = NM.test(M),
						D = A.style;
					if(t || (M = R(C)), E = QA.cssHooks[M] || QA.cssHooks[C], void 0 === I) return E && "get" in E && void 0 !== (T = E.get(A, !1, g)) ? T : D[M];
					"string" == (N = typeof I) && (T = RA.exec(I)) && T[1] && (I = j(A, M, T), N = "number"), null != I && I == I && ("number" === N && (I += T && T[3] || (QA.cssNumber[C] ? "" : "px")), BA.clearCloneStyle || "" !== I || 0 !== M.indexOf("background") || (D[M] = "inherit"), E && "set" in E && void 0 === (I = E.set(A, I, g)) || (t ? D.setProperty(M, I) : D[M] = I))
				}
			},
			css: function(A, M, I, g) {
				var T, N, E, C = QA.camelCase(M);
				return NM.test(M) || (M = R(C)), (E = QA.cssHooks[M] || QA.cssHooks[C]) && "get" in E && (T = E.get(A, !0, I)), void 0 === T && (T = u(A, M, g)), "normal" === T && M in CM && (T = CM[M]), "" === I || I ? (N = parseFloat(T), !0 === I || isFinite(N) ? N || 0 : T) : T
			}
		}), QA.each(["height", "width"], function(A, M) {
			QA.cssHooks[M] = {
				get: function(A, I, g) {
					if(I) return !TM.test(QA.css(A, "display")) || A.getClientRects().length && A.getBoundingClientRect().width ? p(A, M, g) : pA(A, EM, function() {
						return p(A, M, g)
					})
				},
				set: function(A, I, g) {
					var T, N = g && gM(A),
						E = g && k(A, M, g, "border-box" === QA.css(A, "boxSizing", !1, N), N);
					return E && (T = RA.exec(I)) && "px" !== (T[3] || "px") && (A.style[M] = I, I = QA.css(A, M)), G(0, I, E)
				}
			}
		}), QA.cssHooks.marginLeft = H(BA.reliableMarginLeft, function(A, M) {
			if(M) return(parseFloat(u(A, "marginLeft")) || A.getBoundingClientRect().left - pA(A, {
				marginLeft: 0
			}, function() {
				return A.getBoundingClientRect().left
			})) + "px"
		}), QA.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(A, M) {
			QA.cssHooks[A + M] = {
				expand: function(I) {
					for(var g = 0, T = {}, N = "string" == typeof I ? I.split(" ") : [I]; g < 4; g++) T[A + GA[g] + M] = N[g] || N[g - 2] || N[0];
					return T
				}
			}, MM.test(A) || (QA.cssHooks[A + M].set = G)
		}), QA.fn.extend({
			css: function(A, M) {
				return hA(this, function(A, M, I) {
					var g, T, N = {},
						E = 0;
					if(Array.isArray(M)) {
						for(g = gM(A), T = M.length; E < T; E++) N[M[E]] = QA.css(A, M[E], !1, g);
						return N
					}
					return void 0 !== I ? QA.style(A, M, I) : QA.css(A, M)
				}, A, M, arguments.length > 1)
			}
		}), QA.Tween = b, (b.prototype = {
			constructor: b,
			init: function(A, M, I, g, T, N) {
				this.elem = A, this.prop = I, this.easing = T || QA.easing._default, this.options = M, this.start = this.now = this.cur(), this.end = g, this.unit = N || (QA.cssNumber[I] ? "" : "px")
			},
			cur: function() {
				var A = b.propHooks[this.prop];
				return A && A.get ? A.get(this) : b.propHooks._default.get(this)
			},
			run: function(A) {
				var M, I = b.propHooks[this.prop];
				return this.options.duration ? this.pos = M = QA.easing[this.easing](A, this.options.duration * A, 0, 1, this.options.duration) : this.pos = M = A, this.now = (this.end - this.start) * M + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), I && I.set ? I.set(this) : b.propHooks._default.set(this), this
			}
		}).init.prototype = b.prototype, (b.propHooks = {
			_default: {
				get: function(A) {
					var M;
					return 1 !== A.elem.nodeType || null != A.elem[A.prop] && null == A.elem.style[A.prop] ? A.elem[A.prop] : (M = QA.css(A.elem, A.prop, "")) && "auto" !== M ? M : 0
				},
				set: function(A) {
					QA.fx.step[A.prop] ? QA.fx.step[A.prop](A) : 1 !== A.elem.nodeType || null == A.elem.style[QA.cssProps[A.prop]] && !QA.cssHooks[A.prop] ? A.elem[A.prop] = A.now : QA.style(A.elem, A.prop, A.now + A.unit)
				}
			}
		}).scrollTop = b.propHooks.scrollLeft = {
			set: function(A) {
				A.elem.nodeType && A.elem.parentNode && (A.elem[A.prop] = A.now)
			}
		}, QA.easing = {
			linear: function(A) {
				return A
			},
			swing: function(A) {
				return .5 - Math.cos(A * Math.PI) / 2
			},
			_default: "swing"
		}, QA.fx = b.prototype.init, QA.fx.step = {};
		var BM, QM, iM = /^(?:toggle|show|hide)$/,
			nM = /queueHooks$/;
		QA.Animation = QA.extend(J, {
				tweeners: {
					"*": [function(A, M) {
						var I = this.createTween(A, M);
						return j(I.elem, A, RA.exec(M), I), I
					}]
				},
				tweener: function(A, M) {
					QA.isFunction(A) ? (M = A, A = ["*"]) : A = A.match(dA);
					for(var I, g = 0, T = A.length; g < T; g++) I = A[g], J.tweeners[I] = J.tweeners[I] || [], J.tweeners[I].unshift(M)
				},
				prefilters: [function(A, M, I) {
					var g, T, N, E, C, t, D, B, Q = "width" in M || "height" in M,
						i = this,
						n = {},
						w = A.style,
						c = A.nodeType && kA(A),
						o = rA.get(A, "fxshow");
					I.queue || (null == (E = QA._queueHooks(A, "fx")).unqueued && (E.unqueued = 0, C = E.empty.fire, E.empty.fire = function() {
						E.unqueued || C()
					}), E.unqueued++, i.always(function() {
						i.always(function() {
							E.unqueued--, QA.queue(A, "fx").length || E.empty.fire()
						})
					}));
					for(g in M)
						if(T = M[g], iM.test(T)) {
							if(delete M[g], N = N || "toggle" === T, T === (c ? "hide" : "show")) {
								if("show" !== T || !o || void 0 === o[g]) continue;
								c = !0
							}
							n[g] = o && o[g] || QA.style(A, g)
						}
					if((t = !QA.isEmptyObject(M)) || !QA.isEmptyObject(n)) {
						Q && 1 === A.nodeType && (I.overflow = [w.overflow, w.overflowX, w.overflowY], null == (D = o && o.display) && (D = rA.get(A, "display")), "none" === (B = QA.css(A, "display")) && (D ? B = D : (L([A], !0), D = A.style.display || D, B = QA.css(A, "display"), L([A]))), ("inline" === B || "inline-block" === B && null != D) && "none" === QA.css(A, "float") && (t || (i.done(function() {
							w.display = D
						}), null == D && (B = w.display, D = "none" === B ? "" : B)), w.display = "inline-block")), I.overflow && (w.overflow = "hidden", i.always(function() {
							w.overflow = I.overflow[0], w.overflowX = I.overflow[1], w.overflowY = I.overflow[2]
						})), t = !1;
						for(g in n) t || (o ? "hidden" in o && (c = o.hidden) : o = rA.access(A, "fxshow", {
							display: D
						}), N && (o.hidden = !c), c && L([A], !0), i.done(function() {
							c || L([A]), rA.remove(A, "fxshow");
							for(g in n) QA.style(A, g, n[g])
						})), t = V(c ? o[g] : 0, g, i), g in o || (o[g] = t.start, c && (t.end = t.start, t.start = 0))
					}
				}],
				prefilter: function(A, M) {
					M ? J.prefilters.unshift(A) : J.prefilters.push(A)
				}
			}), QA.speed = function(A, M, I) {
				var g = A && "object" == typeof A ? QA.extend({}, A) : {
					complete: I || !I && M || QA.isFunction(A) && A,
					duration: A,
					easing: I && M || M && !QA.isFunction(M) && M
				};
				return QA.fx.off ? g.duration = 0 : "number" != typeof g.duration && (g.duration in QA.fx.speeds ? g.duration = QA.fx.speeds[g.duration] : g.duration = QA.fx.speeds._default), null != g.queue && !0 !== g.queue || (g.queue = "fx"), g.old = g.complete, g.complete = function() {
					QA.isFunction(g.old) && g.old.call(this), g.queue && QA.dequeue(this, g.queue)
				}, g
			}, QA.fn.extend({
				fadeTo: function(A, M, I, g) {
					return this.filter(kA).css("opacity", 0).show().end().animate({
						opacity: M
					}, A, I, g)
				},
				animate: function(A, M, I, g) {
					var T = QA.isEmptyObject(A),
						N = QA.speed(M, I, g),
						E = function() {
							var M = J(this, QA.extend({}, A), N);
							(T || rA.get(this, "finish")) && M.stop(!0)
						};
					return E.finish = E, T || !1 === N.queue ? this.each(E) : this.queue(N.queue, E)
				},
				stop: function(A, M, I) {
					var g = function(A) {
						var M = A.stop;
						delete A.stop, M(I)
					};
					return "string" != typeof A && (I = M, M = A, A = void 0), M && !1 !== A && this.queue(A || "fx", []), this.each(function() {
						var M = !0,
							T = null != A && A + "queueHooks",
							N = QA.timers,
							E = rA.get(this);
						if(T) E[T] && E[T].stop && g(E[T]);
						else
							for(T in E) E[T] && E[T].stop && nM.test(T) && g(E[T]);
						for(T = N.length; T--;) N[T].elem !== this || null != A && N[T].queue !== A || (N[T].anim.stop(I), M = !1, N.splice(T, 1));
						!M && I || QA.dequeue(this, A)
					})
				},
				finish: function(A) {
					return !1 !== A && (A = A || "fx"), this.each(function() {
						var M, I = rA.get(this),
							g = I[A + "queue"],
							T = I[A + "queueHooks"],
							N = QA.timers,
							E = g ? g.length : 0;
						for(I.finish = !0, QA.queue(this, A, []), T && T.stop && T.stop.call(this, !0), M = N.length; M--;) N[M].elem === this && N[M].queue === A && (N[M].anim.stop(!0), N.splice(M, 1));
						for(M = 0; M < E; M++) g[M] && g[M].finish && g[M].finish.call(this);
						delete I.finish
					})
				}
			}), QA.each(["toggle", "show", "hide"], function(A, M) {
				var I = QA.fn[M];
				QA.fn[M] = function(A, g, T) {
					return null == A || "boolean" == typeof A ? I.apply(this, arguments) : this.animate(X(M, !0), A, g, T)
				}
			}), QA.each({
				slideDown: X("show"),
				slideUp: X("hide"),
				slideToggle: X("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function(A, M) {
				QA.fn[A] = function(A, I, g) {
					return this.animate(M, A, I, g)
				}
			}), QA.timers = [], QA.fx.tick = function() {
				var A, M = 0,
					I = QA.timers;
				for(BM = QA.now(); M < I.length; M++)(A = I[M])() || I[M] !== A || I.splice(M--, 1);
				I.length || QA.fx.stop(), BM = void 0
			}, QA.fx.timer = function(A) {
				QA.timers.push(A), QA.fx.start()
			}, QA.fx.interval = 13, QA.fx.start = function() {
				QM || (QM = !0, m())
			}, QA.fx.stop = function() {
				QM = null
			}, QA.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, QA.fn.delay = function(A, M) {
				return A = QA.fx ? QA.fx.speeds[A] || A : A, M = M || "fx", this.queue(M, function(M, g) {
					var T = I.setTimeout(M, A);
					g.stop = function() {
						I.clearTimeout(T)
					}
				})
			},
			function() {
				var A = _.createElement("input"),
					M = _.createElement("select").appendChild(_.createElement("option"));
				A.type = "checkbox", BA.checkOn = "" !== A.value, BA.optSelected = M.selected, (A = _.createElement("input")).value = "t", A.type = "radio", BA.radioValue = "t" === A.value
			}();
		var wM, cM = QA.expr.attrHandle;
		QA.fn.extend({
			attr: function(A, M) {
				return hA(this, QA.attr, A, M, arguments.length > 1)
			},
			removeAttr: function(A) {
				return this.each(function() {
					QA.removeAttr(this, A)
				})
			}
		}), QA.extend({
			attr: function(A, M, I) {
				var g, T, N = A.nodeType;
				if(3 !== N && 8 !== N && 2 !== N) return void 0 === A.getAttribute ? QA.prop(A, M, I) : (1 === N && QA.isXMLDoc(A) || (T = QA.attrHooks[M.toLowerCase()] || (QA.expr.match.bool.test(M) ? wM : void 0)), void 0 !== I ? null === I ? void QA.removeAttr(A, M) : T && "set" in T && void 0 !== (g = T.set(A, I, M)) ? g : (A.setAttribute(M, I + ""), I) : T && "get" in T && null !== (g = T.get(A, M)) ? g : null == (g = QA.find.attr(A, M)) ? void 0 : g)
			},
			attrHooks: {
				type: {
					set: function(A, M) {
						if(!BA.radioValue && "radio" === M && t(A, "input")) {
							var I = A.value;
							return A.setAttribute("type", M), I && (A.value = I), M
						}
					}
				}
			},
			removeAttr: function(A, M) {
				var I, g = 0,
					T = M && M.match(dA);
				if(T && 1 === A.nodeType)
					for(; I = T[g++];) A.removeAttribute(I)
			}
		}), wM = {
			set: function(A, M, I) {
				return !1 === M ? QA.removeAttr(A, I) : A.setAttribute(I, I), I
			}
		}, QA.each(QA.expr.match.bool.source.match(/\w+/g), function(A, M) {
			var I = cM[M] || QA.find.attr;
			cM[M] = function(A, M, g) {
				var T, N, E = M.toLowerCase();
				return g || (N = cM[E], cM[E] = T, T = null != I(A, M, g) ? E : null, cM[E] = N), T
			}
		});
		var oM = /^(?:input|select|textarea|button)$/i,
			jM = /^(?:a|area)$/i;
		QA.fn.extend({
			prop: function(A, M) {
				return hA(this, QA.prop, A, M, arguments.length > 1)
			},
			removeProp: function(A) {
				return this.each(function() {
					delete this[QA.propFix[A] || A]
				})
			}
		}), QA.extend({
			prop: function(A, M, I) {
				var g, T, N = A.nodeType;
				if(3 !== N && 8 !== N && 2 !== N) return 1 === N && QA.isXMLDoc(A) || (M = QA.propFix[M] || M, T = QA.propHooks[M]), void 0 !== I ? T && "set" in T && void 0 !== (g = T.set(A, I, M)) ? g : A[M] = I : T && "get" in T && null !== (g = T.get(A, M)) ? g : A[M]
			},
			propHooks: {
				tabIndex: {
					get: function(A) {
						var M = QA.find.attr(A, "tabindex");
						return M ? parseInt(M, 10) : oM.test(A.nodeName) || jM.test(A.nodeName) && A.href ? 0 : -1
					}
				}
			},
			propFix: {
				for: "htmlFor",
				class: "className"
			}
		}), BA.optSelected || (QA.propHooks.selected = {
			get: function(A) {
				var M = A.parentNode;
				return M && M.parentNode && M.parentNode.selectedIndex, null
			},
			set: function(A) {
				var M = A.parentNode;
				M && (M.selectedIndex, M.parentNode && M.parentNode.selectedIndex)
			}
		}), QA.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			QA.propFix[this.toLowerCase()] = this
		}), QA.fn.extend({
			addClass: function(A) {
				var M, I, g, T, N, E, C, t = 0;
				if(QA.isFunction(A)) return this.each(function(M) {
					QA(this).addClass(A.call(this, M, v(this)))
				});
				if("string" == typeof A && A)
					for(M = A.match(dA) || []; I = this[t++];)
						if(T = v(I), g = 1 === I.nodeType && " " + W(T) + " ") {
							for(E = 0; N = M[E++];) g.indexOf(" " + N + " ") < 0 && (g += N + " ");
							T !== (C = W(g)) && I.setAttribute("class", C)
						}
				return this
			},
			removeClass: function(A) {
				var M, I, g, T, N, E, C, t = 0;
				if(QA.isFunction(A)) return this.each(function(M) {
					QA(this).removeClass(A.call(this, M, v(this)))
				});
				if(!arguments.length) return this.attr("class", "");
				if("string" == typeof A && A)
					for(M = A.match(dA) || []; I = this[t++];)
						if(T = v(I), g = 1 === I.nodeType && " " + W(T) + " ") {
							for(E = 0; N = M[E++];)
								for(; g.indexOf(" " + N + " ") > -1;) g = g.replace(" " + N + " ", " ");
							T !== (C = W(g)) && I.setAttribute("class", C)
						}
				return this
			},
			toggleClass: function(A, M) {
				var I = typeof A;
				return "boolean" == typeof M && "string" === I ? M ? this.addClass(A) : this.removeClass(A) : QA.isFunction(A) ? this.each(function(I) {
					QA(this).toggleClass(A.call(this, I, v(this), M), M)
				}) : this.each(function() {
					var M, g, T, N;
					if("string" === I)
						for(g = 0, T = QA(this), N = A.match(dA) || []; M = N[g++];) T.hasClass(M) ? T.removeClass(M) : T.addClass(M);
					else void 0 !== A && "boolean" !== I || ((M = v(this)) && rA.set(this, "__className__", M), this.setAttribute && this.setAttribute("class", M || !1 === A ? "" : rA.get(this, "__className__") || ""))
				})
			},
			hasClass: function(A) {
				var M, I, g = 0;
				for(M = " " + A + " "; I = this[g++];)
					if(1 === I.nodeType && (" " + W(v(I)) + " ").indexOf(M) > -1) return !0;
				return !1
			}
		});
		var xM = /\r/g;
		QA.fn.extend({
			val: function(A) {
				var M, I, g, T = this[0];
				if(arguments.length) return g = QA.isFunction(A), this.each(function(I) {
					var T;
					1 === this.nodeType && (null == (T = g ? A.call(this, I, QA(this).val()) : A) ? T = "" : "number" == typeof T ? T += "" : Array.isArray(T) && (T = QA.map(T, function(A) {
						return null == A ? "" : A + ""
					})), (M = QA.valHooks[this.type] || QA.valHooks[this.nodeName.toLowerCase()]) && "set" in M && void 0 !== M.set(this, T, "value") || (this.value = T))
				});
				if(T) return(M = QA.valHooks[T.type] || QA.valHooks[T.nodeName.toLowerCase()]) && "get" in M && void 0 !== (I = M.get(T, "value")) ? I : "string" == typeof(I = T.value) ? I.replace(xM, "") : null == I ? "" : I
			}
		}), QA.extend({
			valHooks: {
				option: {
					get: function(A) {
						var M = QA.find.attr(A, "value");
						return null != M ? M : W(QA.text(A))
					}
				},
				select: {
					get: function(A) {
						var M, I, g, T = A.options,
							N = A.selectedIndex,
							E = "select-one" === A.type,
							C = E ? null : [],
							D = E ? N + 1 : T.length;
						for(g = N < 0 ? D : E ? N : 0; g < D; g++)
							if(((I = T[g]).selected || g === N) && !I.disabled && (!I.parentNode.disabled || !t(I.parentNode, "optgroup"))) {
								if(M = QA(I).val(), E) return M;
								C.push(M)
							}
						return C
					},
					set: function(A, M) {
						for(var I, g, T = A.options, N = QA.makeArray(M), E = T.length; E--;)((g = T[E]).selected = QA.inArray(QA.valHooks.option.get(g), N) > -1) && (I = !0);
						return I || (A.selectedIndex = -1), N
					}
				}
			}
		}), QA.each(["radio", "checkbox"], function() {
			QA.valHooks[this] = {
				set: function(A, M) {
					if(Array.isArray(M)) return A.checked = QA.inArray(QA(A).val(), M) > -1
				}
			}, BA.checkOn || (QA.valHooks[this].get = function(A) {
				return null === A.getAttribute("value") ? "on" : A.value
			})
		});
		var LM = /^(?:focusinfocus|focusoutblur)$/;
		QA.extend(QA.event, {
			trigger: function(A, M, g, T) {
				var N, E, C, t, D, B, Q, i = [g || _],
					n = CA.call(A, "type") ? A.type : A,
					w = CA.call(A, "namespace") ? A.namespace.split(".") : [];
				if(E = C = g = g || _, 3 !== g.nodeType && 8 !== g.nodeType && !LM.test(n + QA.event.triggered) && (n.indexOf(".") > -1 && (n = (w = n.split(".")).shift(), w.sort()), D = n.indexOf(":") < 0 && "on" + n, A = A[QA.expando] ? A : new QA.Event(n, "object" == typeof A && A), A.isTrigger = T ? 2 : 3, A.namespace = w.join("."), A.rnamespace = A.namespace ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, A.result = void 0, A.target || (A.target = g), M = null == M ? [A] : QA.makeArray(M, [A]), Q = QA.event.special[n] || {}, T || !Q.trigger || !1 !== Q.trigger.apply(g, M))) {
					if(!T && !Q.noBubble && !QA.isWindow(g)) {
						for(t = Q.delegateType || n, LM.test(t + n) || (E = E.parentNode); E; E = E.parentNode) i.push(E), C = E;
						C === (g.ownerDocument || _) && i.push(C.defaultView || C.parentWindow || I)
					}
					for(N = 0;
						(E = i[N++]) && !A.isPropagationStopped();) A.type = N > 1 ? t : Q.bindType || n, (B = (rA.get(E, "events") || {})[A.type] && rA.get(E, "handle")) && B.apply(E, M), (B = D && E[D]) && B.apply && lA(E) && (A.result = B.apply(E, M), !1 === A.result && A.preventDefault());
					return A.type = n, T || A.isDefaultPrevented() || Q._default && !1 !== Q._default.apply(i.pop(), M) || !lA(g) || D && QA.isFunction(g[n]) && !QA.isWindow(g) && ((C = g[D]) && (g[D] = null), QA.event.triggered = n, g[n](), QA.event.triggered = void 0, C && (g[D] = C)), A.result
				}
			},
			simulate: function(A, M, I) {
				var g = QA.extend(new QA.Event, I, {
					type: A,
					isSimulated: !0
				});
				QA.event.trigger(g, null, M)
			}
		}), QA.fn.extend({
			trigger: function(A, M) {
				return this.each(function() {
					QA.event.trigger(A, M, this)
				})
			},
			triggerHandler: function(A, M) {
				var I = this[0];
				if(I) return QA.event.trigger(A, M, I, !0)
			}
		}), QA.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(A, M) {
			QA.fn[M] = function(A, I) {
				return arguments.length > 0 ? this.on(M, null, A, I) : this.trigger(M)
			}
		}), QA.fn.extend({
			hover: function(A, M) {
				return this.mouseenter(A).mouseleave(M || A)
			}
		}), BA.focusin = "onfocusin" in I, BA.focusin || QA.each({
			focus: "focusin",
			blur: "focusout"
		}, function(A, M) {
			var I = function(A) {
				QA.event.simulate(M, A.target, QA.event.fix(A))
			};
			QA.event.special[M] = {
				setup: function() {
					var g = this.ownerDocument || this,
						T = rA.access(g, M);
					T || g.addEventListener(A, I, !0), rA.access(g, M, (T || 0) + 1)
				},
				teardown: function() {
					var g = this.ownerDocument || this,
						T = rA.access(g, M) - 1;
					T ? rA.access(g, M, T) : (g.removeEventListener(A, I, !0), rA.remove(g, M))
				}
			}
		});
		var eM = I.location,
			yM = QA.now(),
			YM = /\?/;
		QA.parseXML = function(A) {
			var M;
			if(!A || "string" != typeof A) return null;
			try {
				M = (new I.DOMParser).parseFromString(A, "text/xml")
			} catch(A) {
				M = void 0
			}
			return M && !M.getElementsByTagName("parsererror").length || QA.error("Invalid XML: " + A), M
		};
		var zM = /\[\]$/,
			UM = /\r?\n/g,
			aM = /^(?:submit|button|image|reset|file)$/i,
			dM = /^(?:input|select|textarea|keygen)/i;
		QA.param = function(A, M) {
			var I, g = [],
				T = function(A, M) {
					var I = QA.isFunction(M) ? M() : M;
					g[g.length] = encodeURIComponent(A) + "=" + encodeURIComponent(null == I ? "" : I)
				};
			if(Array.isArray(A) || A.jquery && !QA.isPlainObject(A)) QA.each(A, function() {
				T(this.name, this.value)
			});
			else
				for(I in A) P(I, A[I], M, T);
			return g.join("&")
		}, QA.fn.extend({
			serialize: function() {
				return QA.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var A = QA.prop(this, "elements");
					return A ? QA.makeArray(A) : this
				}).filter(function() {
					var A = this.type;
					return this.name && !QA(this).is(":disabled") && dM.test(this.nodeName) && !aM.test(A) && (this.checked || !mA.test(A))
				}).map(function(A, M) {
					var I = QA(this).val();
					return null == I ? null : Array.isArray(I) ? QA.map(I, function(A) {
						return {
							name: M.name,
							value: A.replace(UM, "\r\n")
						}
					}) : {
						name: M.name,
						value: I.replace(UM, "\r\n")
					}
				}).get()
			}
		});
		var SM = /%20/g,
			sM = /#.*$/,
			hM = /([?&])_=[^&]*/,
			lM = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			rM = /^(?:GET|HEAD)$/,
			OM = /^\/\//,
			FM = {},
			uM = {},
			HM = "*/".concat("*"),
			RM = _.createElement("a");
		RM.href = eM.href, QA.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: eM.href,
				type: "GET",
				isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(eM.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": HM,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": JSON.parse,
					"text xml": QA.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(A, M) {
				return M ? q(q(A, QA.ajaxSettings), M) : q(QA.ajaxSettings, A)
			},
			ajaxPrefilter: Z(FM),
			ajaxTransport: Z(uM),
			ajax: function(A, M) {
				function g(A, M, g, C) {
					var D, i, n, e, y, Y = M;
					B || (B = !0, t && I.clearTimeout(t), T = void 0, E = C || "", z.readyState = A > 0 ? 4 : 0, D = A >= 200 && A < 300 || 304 === A, g && (e = function(A, M, I) {
						for(var g, T, N, E, C = A.contents, t = A.dataTypes;
							"*" === t[0];) t.shift(), void 0 === g && (g = A.mimeType || M.getResponseHeader("Content-Type"));
						if(g)
							for(T in C)
								if(C[T] && C[T].test(g)) {
									t.unshift(T);
									break
								}
						if(t[0] in I) N = t[0];
						else {
							for(T in I) {
								if(!t[0] || A.converters[T + " " + t[0]]) {
									N = T;
									break
								}
								E || (E = T)
							}
							N = N || E
						}
						if(N) return N !== t[0] && t.unshift(N), I[N]
					}(w, z, g)), e = function(A, M, I, g) {
						var T, N, E, C, t, D = {},
							B = A.dataTypes.slice();
						if(B[1])
							for(E in A.converters) D[E.toLowerCase()] = A.converters[E];
						for(N = B.shift(); N;)
							if(A.responseFields[N] && (I[A.responseFields[N]] = M), !t && g && A.dataFilter && (M = A.dataFilter(M, A.dataType)), t = N, N = B.shift())
								if("*" === N) N = t;
								else if("*" !== t && t !== N) {
							if(!(E = D[t + " " + N] || D["* " + N]))
								for(T in D)
									if((C = T.split(" "))[1] === N && (E = D[t + " " + C[0]] || D["* " + C[0]])) {
										!0 === E ? E = D[T] : !0 !== D[T] && (N = C[0], B.unshift(C[1]));
										break
									}
							if(!0 !== E)
								if(E && A.throws) M = E(M);
								else try {
									M = E(M)
								} catch(A) {
									return {
										state: "parsererror",
										error: E ? A : "No conversion from " + t + " to " + N
									}
								}
						}
						return {
							state: "success",
							data: M
						}
					}(w, e, z, D), D ? (w.ifModified && ((y = z.getResponseHeader("Last-Modified")) && (QA.lastModified[N] = y), (y = z.getResponseHeader("etag")) && (QA.etag[N] = y)), 204 === A || "HEAD" === w.type ? Y = "nocontent" : 304 === A ? Y = "notmodified" : (Y = e.state, i = e.data, D = !(n = e.error))) : (n = Y, !A && Y || (Y = "error", A < 0 && (A = 0))), z.status = A, z.statusText = (M || Y) + "", D ? j.resolveWith(c, [i, Y, z]) : j.rejectWith(c, [z, Y, n]), z.statusCode(L), L = void 0, Q && o.trigger(D ? "ajaxSuccess" : "ajaxError", [z, w, D ? i : n]), x.fireWith(c, [z, Y]), Q && (o.trigger("ajaxComplete", [z, w]), --QA.active || QA.event.trigger("ajaxStop")))
				}
				"object" == typeof A && (M = A, A = void 0), M = M || {};
				var T, N, E, C, t, D, B, Q, i, n, w = QA.ajaxSetup({}, M),
					c = w.context || w,
					o = w.context && (c.nodeType || c.jquery) ? QA(c) : QA.event,
					j = QA.Deferred(),
					x = QA.Callbacks("once memory"),
					L = w.statusCode || {},
					e = {},
					y = {},
					Y = "canceled",
					z = {
						readyState: 0,
						getResponseHeader: function(A) {
							var M;
							if(B) {
								if(!C)
									for(C = {}; M = lM.exec(E);) C[M[1].toLowerCase()] = M[2];
								M = C[A.toLowerCase()]
							}
							return null == M ? null : M
						},
						getAllResponseHeaders: function() {
							return B ? E : null
						},
						setRequestHeader: function(A, M) {
							return null == B && (A = y[A.toLowerCase()] = y[A.toLowerCase()] || A, e[A] = M), this
						},
						overrideMimeType: function(A) {
							return null == B && (w.mimeType = A), this
						},
						statusCode: function(A) {
							var M;
							if(A)
								if(B) z.always(A[z.status]);
								else
									for(M in A) L[M] = [L[M], A[M]];
							return this
						},
						abort: function(A) {
							var M = A || Y;
							return T && T.abort(M), g(0, M), this
						}
					};
				if(j.promise(z), w.url = ((A || w.url || eM.href) + "").replace(OM, eM.protocol + "//"), w.type = M.method || M.type || w.method || w.type, w.dataTypes = (w.dataType || "*").toLowerCase().match(dA) || [""], null == w.crossDomain) {
					D = _.createElement("a");
					try {
						D.href = w.url, D.href = D.href, w.crossDomain = RM.protocol + "//" + RM.host != D.protocol + "//" + D.host
					} catch(A) {
						w.crossDomain = !0
					}
				}
				if(w.data && w.processData && "string" != typeof w.data && (w.data = QA.param(w.data, w.traditional)), K(FM, w, M, z), B) return z;
				(Q = QA.event && w.global) && 0 == QA.active++ && QA.event.trigger("ajaxStart"), w.type = w.type.toUpperCase(), w.hasContent = !rM.test(w.type), N = w.url.replace(sM, ""), w.hasContent ? w.data && w.processData && 0 === (w.contentType || "").indexOf("application/x-www-form-urlencoded") && (w.data = w.data.replace(SM, "+")) : (n = w.url.slice(N.length), w.data && (N += (YM.test(N) ? "&" : "?") + w.data, delete w.data), !1 === w.cache && (N = N.replace(hM, "$1"), n = (YM.test(N) ? "&" : "?") + "_=" + yM++ + n), w.url = N + n), w.ifModified && (QA.lastModified[N] && z.setRequestHeader("If-Modified-Since", QA.lastModified[N]), QA.etag[N] && z.setRequestHeader("If-None-Match", QA.etag[N])), (w.data && w.hasContent && !1 !== w.contentType || M.contentType) && z.setRequestHeader("Content-Type", w.contentType), z.setRequestHeader("Accept", w.dataTypes[0] && w.accepts[w.dataTypes[0]] ? w.accepts[w.dataTypes[0]] + ("*" !== w.dataTypes[0] ? ", " + HM + "; q=0.01" : "") : w.accepts["*"]);
				for(i in w.headers) z.setRequestHeader(i, w.headers[i]);
				if(w.beforeSend && (!1 === w.beforeSend.call(c, z, w) || B)) return z.abort();
				if(Y = "abort", x.add(w.complete), z.done(w.success), z.fail(w.error), T = K(uM, w, M, z)) {
					if(z.readyState = 1, Q && o.trigger("ajaxSend", [z, w]), B) return z;
					w.async && w.timeout > 0 && (t = I.setTimeout(function() {
						z.abort("timeout")
					}, w.timeout));
					try {
						B = !1, T.send(e, g)
					} catch(A) {
						if(B) throw A;
						g(-1, A)
					}
				} else g(-1, "No Transport");
				return z
			},
			getJSON: function(A, M, I) {
				return QA.get(A, M, I, "json")
			},
			getScript: function(A, M) {
				return QA.get(A, void 0, M, "script")
			}
		}), QA.each(["get", "post"], function(A, M) {
			QA[M] = function(A, I, g, T) {
				return QA.isFunction(I) && (T = T || g, g = I, I = void 0), QA.ajax(QA.extend({
					url: A,
					type: M,
					dataType: T,
					data: I,
					success: g
				}, QA.isPlainObject(A) && A))
			}
		}), QA._evalUrl = function(A) {
			return QA.ajax({
				url: A,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				throws: !0
			})
		}, QA.fn.extend({
			wrapAll: function(A) {
				var M;
				return this[0] && (QA.isFunction(A) && (A = A.call(this[0])), M = QA(A, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && M.insertBefore(this[0]), M.map(function() {
					for(var A = this; A.firstElementChild;) A = A.firstElementChild;
					return A
				}).append(this)), this
			},
			wrapInner: function(A) {
				return QA.isFunction(A) ? this.each(function(M) {
					QA(this).wrapInner(A.call(this, M))
				}) : this.each(function() {
					var M = QA(this),
						I = M.contents();
					I.length ? I.wrapAll(A) : M.append(A)
				})
			},
			wrap: function(A) {
				var M = QA.isFunction(A);
				return this.each(function(I) {
					QA(this).wrapAll(M ? A.call(this, I) : A)
				})
			},
			unwrap: function(A) {
				return this.parent(A).not("body").each(function() {
					QA(this).replaceWith(this.childNodes)
				}), this
			}
		}), QA.expr.pseudos.hidden = function(A) {
			return !QA.expr.pseudos.visible(A)
		}, QA.expr.pseudos.visible = function(A) {
			return !!(A.offsetWidth || A.offsetHeight || A.getClientRects().length)
		}, QA.ajaxSettings.xhr = function() {
			try {
				return new I.XMLHttpRequest
			} catch(A) {}
		};
		var GM = {
				0: 200,
				1223: 204
			},
			kM = QA.ajaxSettings.xhr();
		BA.cors = !!kM && "withCredentials" in kM, BA.ajax = kM = !!kM, QA.ajaxTransport(function(A) {
			var M, g;
			if(BA.cors || kM && !A.crossDomain) return {
				send: function(T, N) {
					var E, C = A.xhr();
					if(C.open(A.type, A.url, A.async, A.username, A.password), A.xhrFields)
						for(E in A.xhrFields) C[E] = A.xhrFields[E];
					A.mimeType && C.overrideMimeType && C.overrideMimeType(A.mimeType), A.crossDomain || T["X-Requested-With"] || (T["X-Requested-With"] = "XMLHttpRequest");
					for(E in T) C.setRequestHeader(E, T[E]);
					M = function(A) {
						return function() {
							M && (M = g = C.onload = C.onerror = C.onabort = C.onreadystatechange = null, "abort" === A ? C.abort() : "error" === A ? "number" != typeof C.status ? N(0, "error") : N(C.status, C.statusText) : N(GM[C.status] || C.status, C.statusText, "text" !== (C.responseType || "text") || "string" != typeof C.responseText ? {
								binary: C.response
							} : {
								text: C.responseText
							}, C.getAllResponseHeaders()))
						}
					}, C.onload = M(), g = C.onerror = M("error"), void 0 !== C.onabort ? C.onabort = g : C.onreadystatechange = function() {
						4 === C.readyState && I.setTimeout(function() {
							M && g()
						})
					}, M = M("abort");
					try {
						C.send(A.hasContent && A.data || null)
					} catch(A) {
						if(M) throw A
					}
				},
				abort: function() {
					M && M()
				}
			}
		}), QA.ajaxPrefilter(function(A) {
			A.crossDomain && (A.contents.script = !1)
		}), QA.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function(A) {
					return QA.globalEval(A), A
				}
			}
		}), QA.ajaxPrefilter("script", function(A) {
			void 0 === A.cache && (A.cache = !1), A.crossDomain && (A.type = "GET")
		}), QA.ajaxTransport("script", function(A) {
			if(A.crossDomain) {
				var M, I;
				return {
					send: function(g, T) {
						M = QA("<script>").prop({
							charset: A.scriptCharset,
							src: A.url
						}).on("load error", I = function(A) {
							M.remove(), I = null, A && T("error" === A.type ? 404 : 200, A.type)
						}), _.head.appendChild(M[0])
					},
					abort: function() {
						I && I()
					}
				}
			}
		});
		var pM = [],
			bM = /(=)\?(?=&|$)|\?\?/;
		QA.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var A = pM.pop() || QA.expando + "_" + yM++;
				return this[A] = !0, A
			}
		}), QA.ajaxPrefilter("json jsonp", function(A, M, g) {
			var T, N, E, C = !1 !== A.jsonp && (bM.test(A.url) ? "url" : "string" == typeof A.data && 0 === (A.contentType || "").indexOf("application/x-www-form-urlencoded") && bM.test(A.data) && "data");
			if(C || "jsonp" === A.dataTypes[0]) return T = A.jsonpCallback = QA.isFunction(A.jsonpCallback) ? A.jsonpCallback() : A.jsonpCallback, C ? A[C] = A[C].replace(bM, "$1" + T) : !1 !== A.jsonp && (A.url += (YM.test(A.url) ? "&" : "?") + A.jsonp + "=" + T), A.converters["script json"] = function() {
				return E || QA.error(T + " was not called"), E[0]
			}, A.dataTypes[0] = "json", N = I[T], I[T] = function() {
				E = arguments
			}, g.always(function() {
				void 0 === N ? QA(I).removeProp(T) : I[T] = N, A[T] && (A.jsonpCallback = M.jsonpCallback, pM.push(T)), E && QA.isFunction(N) && N(E[0]), E = N = void 0
			}), "script"
		}), BA.createHTMLDocument = function() {
			var A = _.implementation.createHTMLDocument("").body;
			return A.innerHTML = "<form></form><form></form>", 2 === A.childNodes.length
		}(), QA.parseHTML = function(A, M, I) {
			if("string" != typeof A) return [];
			"boolean" == typeof M && (I = M, M = !1);
			var g, T, N;
			return M || (BA.createHTMLDocument ? ((g = (M = _.implementation.createHTMLDocument("")).createElement("base")).href = _.location.href, M.head.appendChild(g)) : M = _), T = eA.exec(A), N = !I && [], T ? [M.createElement(T[1])] : (T = Y([A], M, N), N && N.length && QA(N).remove(), QA.merge([], T.childNodes))
		}, QA.fn.load = function(A, M, I) {
			var g, T, N, E = this,
				C = A.indexOf(" ");
			return C > -1 && (g = W(A.slice(C)), A = A.slice(0, C)), QA.isFunction(M) ? (I = M, M = void 0) : M && "object" == typeof M && (T = "POST"), E.length > 0 && QA.ajax({
				url: A,
				type: T || "GET",
				dataType: "html",
				data: M
			}).done(function(A) {
				N = arguments, E.html(g ? QA("<div>").append(QA.parseHTML(A)).find(g) : A)
			}).always(I && function(A, M) {
				E.each(function() {
					I.apply(this, N || [A.responseText, M, A])
				})
			}), this
		}, QA.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(A, M) {
			QA.fn[M] = function(A) {
				return this.on(M, A)
			}
		}), QA.expr.pseudos.animated = function(A) {
			return QA.grep(QA.timers, function(M) {
				return A === M.elem
			}).length
		}, QA.offset = {
			setOffset: function(A, M, I) {
				var g, T, N, E, C, t, D = QA.css(A, "position"),
					B = QA(A),
					Q = {};
				"static" === D && (A.style.position = "relative"), C = B.offset(), N = QA.css(A, "top"), t = QA.css(A, "left"), ("absolute" === D || "fixed" === D) && (N + t).indexOf("auto") > -1 ? (E = (g = B.position()).top, T = g.left) : (E = parseFloat(N) || 0, T = parseFloat(t) || 0), QA.isFunction(M) && (M = M.call(A, I, QA.extend({}, C))), null != M.top && (Q.top = M.top - C.top + E), null != M.left && (Q.left = M.left - C.left + T), "using" in M ? M.using.call(A, Q) : B.css(Q)
			}
		}, QA.fn.extend({
			offset: function(A) {
				if(arguments.length) return void 0 === A ? this : this.each(function(M) {
					QA.offset.setOffset(this, A, M)
				});
				var M, I, g, T, N = this[0];
				if(N) return N.getClientRects().length ? (g = N.getBoundingClientRect(), M = N.ownerDocument, I = M.documentElement, T = M.defaultView, {
					top: g.top + T.pageYOffset - I.clientTop,
					left: g.left + T.pageXOffset - I.clientLeft
				}) : {
					top: 0,
					left: 0
				}
			},
			position: function() {
				if(this[0]) {
					var A, M, I = this[0],
						g = {
							top: 0,
							left: 0
						};
					return "fixed" === QA.css(I, "position") ? M = I.getBoundingClientRect() : (A = this.offsetParent(), M = this.offset(), t(A[0], "html") || (g = A.offset()), g = {
						top: g.top + QA.css(A[0], "borderTopWidth", !0),
						left: g.left + QA.css(A[0], "borderLeftWidth", !0)
					}), {
						top: M.top - g.top - QA.css(I, "marginTop", !0),
						left: M.left - g.left - QA.css(I, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for(var A = this.offsetParent; A && "static" === QA.css(A, "position");) A = A.offsetParent;
					return A || WA
				})
			}
		}), QA.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(A, M) {
			var I = "pageYOffset" === M;
			QA.fn[A] = function(g) {
				return hA(this, function(A, g, T) {
					var N;
					if(QA.isWindow(A) ? N = A : 9 === A.nodeType && (N = A.defaultView), void 0 === T) return N ? N[M] : A[g];
					N ? N.scrollTo(I ? N.pageXOffset : T, I ? T : N.pageYOffset) : A[g] = T
				}, A, g, arguments.length)
			}
		}), QA.each(["top", "left"], function(A, M) {
			QA.cssHooks[M] = H(BA.pixelPosition, function(A, I) {
				if(I) return I = u(A, M), IM.test(I) ? QA(A).position()[M] + "px" : I
			})
		}), QA.each({
			Height: "height",
			Width: "width"
		}, function(A, M) {
			QA.each({
				padding: "inner" + A,
				content: M,
				"": "outer" + A
			}, function(I, g) {
				QA.fn[g] = function(T, N) {
					var E = arguments.length && (I || "boolean" != typeof T),
						C = I || (!0 === T || !0 === N ? "margin" : "border");
					return hA(this, function(M, I, T) {
						var N;
						return QA.isWindow(M) ? 0 === g.indexOf("outer") ? M["inner" + A] : M.document.documentElement["client" + A] : 9 === M.nodeType ? (N = M.documentElement, Math.max(M.body["scroll" + A], N["scroll" + A], M.body["offset" + A], N["offset" + A], N["client" + A])) : void 0 === T ? QA.css(M, I, C) : QA.style(M, I, T, C)
					}, M, E ? T : void 0, E)
				}
			})
		}), QA.fn.extend({
			bind: function(A, M, I) {
				return this.on(A, null, M, I)
			},
			unbind: function(A, M) {
				return this.off(A, null, M)
			},
			delegate: function(A, M, I, g) {
				return this.on(M, A, I, g)
			},
			undelegate: function(A, M, I) {
				return 1 === arguments.length ? this.off(A, "**") : this.off(M, A || "**", I)
			}
		}), QA.holdReady = function(A) {
			A ? QA.readyWait++ : QA.ready(!0)
		}, QA.isArray = Array.isArray, QA.parseJSON = JSON.parse, QA.nodeName = t, void 0 === (T = function() {
			return QA
		}.apply(M, g = [])) || (A.exports = T);
		var mM = I.jQuery,
			fM = I.$;
		return QA.noConflict = function(A) {
			return I.$ === QA && (I.$ = fM), A && I.jQuery === QA && (I.jQuery = mM), QA
		}, N || (I.jQuery = I.$ = QA), QA
	})
}, function(A, M, I) {
	"use strict";
	Object.defineProperty(M, "__esModule", {
		value: !0
	}), M.default = function(A) {
		var M = ("; " + document.cookie).split("; " + A + "=");
		if(2 == M.length) return M.pop().split(";").shift()
	}
}, function(A, M) {
	A.exports = "A9IEaYJg"
}, function(A, M) {
	A.exports = ""
}, function(A, M) {
	A.exports = ""
}, function(A, M, I) {
	"use strict";

	function g(A) {
		return A && A.__esModule ? A : {
			default: A
		}
	}
	Object.defineProperty(M, "__esModule", {
		value: !0
	});
	var T = g(I(0)),
		N = g(I(6));
	M.default = function(A, M, I) {
		(0, T.default)("." + A).prop("Counter", M).animate({
			Counter: I
		}, {
			duration: 4e3,
			easing: "linear",
			step: function(A) {
				(0, T.default)(this).text((0, N.default)(Math.ceil(A)))
			}
		})
	}
}, function(A, M, I) {
	"use strict";
	Object.defineProperty(M, "__esModule", {
		value: !0
	}), M.default = function(A) {
		return("" + A).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, function(A) {
			return A + ","
		})
	}
}, function(A, M, I) {
	"use strict";
	(function(A, M) {
		I(9), I(26), I(27), I(28), M.jQuery = A, M.$ = A;
		var g = {
			"logo.svg": I(4),
			"bankera_vision.png": I(45),
			"about/2-1.png": I(46),
			"about/pre-ico.png": I(47),
			"about/phone.png": I(48),
			"about/hand.png": I(49),
			"about/bank.png": I(50),
			"about/investments.png": I(51),
			"about/newmoney.png": I(52),
			"about/exchange.png": I(53),
			"hand.png": I(54),
			"mail.png": I(55),
			"bg_pattern.png": I(3),
			"b1.png": I(56),
			"b2.png": I(57),
			"team/vytautas-karalevicius.jpg": I(58),
			"team/mantas-mockevicius.jpg": I(59),
			"team/justas-dobiliauskas.jpg": I(60),
			"team/craig-grant.jpg": I(61),
			"team/susana-wessling.jpg": I(62),
			"team/egle-eidimtaite.jpg": I(63),
			"team/ruta-cizinauskaite.jpg": I(64),
			"team/team-members.jpg": I(65),
			"team/tse-hsin-lu.jpg": I(66),
			"advisors/lon-wong.jpg": I(67),
			"advisors/antanas-guoga.jpg": I(68),
			"advisors/eva-kaili.jpg": I(69),
			"advisors/audrius-ziugzda.jpg": I(70),
			"advisors/martin-hilaire.jpg": I(71),
			"advisors/modestas-kaseliauskas.jpg": I(72),
			"advisors/marc-kenigsberg.jpg": I(73),
			"advisors/jochen-de-weerdt.jpg": I(74),
			"advisors/damon-rasheed.jpg": I(75),
			"advisors/warren-lush.jpg": I(76),
			"advisors/eugene-dubossarsky.jpg": I(77),
			"publications/bloomberg.png": I(78),
			"publications/bitcoinx.png": I(79),
			"publications/econotimes.png": I(80),
			"publications/financefeeds.png": I(81),
			"publications/coinidol.png": I(82),
			"publications/yourpfpro.png": I(83),
			"publications/businessinsider.png": I(84),
			"publications/cointelegraph.png": I(85),
			"publications/financemagnates.png": I(86),
			"publications/observer.png": I(87),
			"publications/crowdfundinsider.png": I(88),
			"publications/thenextweb.png": I(89),
			"publications/btcmanager.png": I(90),
			"publications/investing.png": I(91),
			"bounties/palm.png": I(92),
			"bounties/1.png": I(93),
			"bounties/2.png": I(94)
		};
		A(function() {
			for(var M in g) {
				A('img[data-src="img/' + M + '"]').attr("src", g[M])
			}
		})
	}).call(M, I(0), I(8))
}, function(A, M) {
	var I;
	I = function() {
		return this
	}();
	try {
		I = I || Function("return this")() || (0, eval)("this")
	} catch(A) {
		"object" == typeof window && (I = window)
	}
	A.exports = I
}, function(A, M, I) {
	var g = I(10);
	"string" == typeof g && (g = [
		[A.i, g, ""]
	]);
	var T = {
		hmr: !0
	};
	T.transform = void 0;
	I(24)(g, T);
	g.locals && (A.exports = g.locals)
}, function(A, M, I) {
	(A.exports = I(11)(void 0)).push([A.i, "@charset \"UTF-8\";\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + I(12) + ");\n  src: url(" + I(13) + '?#iefix&v=4.7.0) format("embedded-opentype"), url(' + I(14) + ') format("woff2"), url(' + I(15) + ') format("woff"), url(' + I(16) + ') format("truetype"), url(' + I(17) + '#fontawesomeregular) format("svg");\n  font-weight: normal;\n  font-style: normal; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -15%; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-fw {\n  width: 1.28571em;\n  text-align: center; }\n\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14286em;\n  list-style-type: none; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  position: absolute;\n  left: -2.14286em;\n  width: 2.14286em;\n  top: 0.14286em;\n  text-align: center; }\n  .fa-li.fa-lg {\n    left: -1.85714em; }\n\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eee;\n  border-radius: .1em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right {\n  margin-left: .3em; }\n\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right; }\n\n.pull-left {\n  float: left; }\n\n.fa.pull-left {\n  margin-right: .3em; }\n\n.fa.pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none; }\n\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle; }\n\n.fa-stack-1x, .fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center; }\n\n.fa-stack-1x {\n  line-height: inherit; }\n\n.fa-stack-2x {\n  font-size: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: "\\F000"; }\n\n.fa-music:before {\n  content: "\\F001"; }\n\n.fa-search:before {\n  content: "\\F002"; }\n\n.fa-envelope-o:before {\n  content: "\\F003"; }\n\n.fa-heart:before {\n  content: "\\F004"; }\n\n.fa-star:before {\n  content: "\\F005"; }\n\n.fa-star-o:before {\n  content: "\\F006"; }\n\n.fa-user:before {\n  content: "\\F007"; }\n\n.fa-film:before {\n  content: "\\F008"; }\n\n.fa-th-large:before {\n  content: "\\F009"; }\n\n.fa-th:before {\n  content: "\\F00A"; }\n\n.fa-th-list:before {\n  content: "\\F00B"; }\n\n.fa-check:before {\n  content: "\\F00C"; }\n\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: "\\F00D"; }\n\n.fa-search-plus:before {\n  content: "\\F00E"; }\n\n.fa-search-minus:before {\n  content: "\\F010"; }\n\n.fa-power-off:before {\n  content: "\\F011"; }\n\n.fa-signal:before {\n  content: "\\F012"; }\n\n.fa-gear:before,\n.fa-cog:before {\n  content: "\\F013"; }\n\n.fa-trash-o:before {\n  content: "\\F014"; }\n\n.fa-home:before {\n  content: "\\F015"; }\n\n.fa-file-o:before {\n  content: "\\F016"; }\n\n.fa-clock-o:before {\n  content: "\\F017"; }\n\n.fa-road:before {\n  content: "\\F018"; }\n\n.fa-download:before {\n  content: "\\F019"; }\n\n.fa-arrow-circle-o-down:before {\n  content: "\\F01A"; }\n\n.fa-arrow-circle-o-up:before {\n  content: "\\F01B"; }\n\n.fa-inbox:before {\n  content: "\\F01C"; }\n\n.fa-play-circle-o:before {\n  content: "\\F01D"; }\n\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: "\\F01E"; }\n\n.fa-refresh:before {\n  content: "\\F021"; }\n\n.fa-list-alt:before {\n  content: "\\F022"; }\n\n.fa-lock:before {\n  content: "\\F023"; }\n\n.fa-flag:before {\n  content: "\\F024"; }\n\n.fa-headphones:before {\n  content: "\\F025"; }\n\n.fa-volume-off:before {\n  content: "\\F026"; }\n\n.fa-volume-down:before {\n  content: "\\F027"; }\n\n.fa-volume-up:before {\n  content: "\\F028"; }\n\n.fa-qrcode:before {\n  content: "\\F029"; }\n\n.fa-barcode:before {\n  content: "\\F02A"; }\n\n.fa-tag:before {\n  content: "\\F02B"; }\n\n.fa-tags:before {\n  content: "\\F02C"; }\n\n.fa-book:before {\n  content: "\\F02D"; }\n\n.fa-bookmark:before {\n  content: "\\F02E"; }\n\n.fa-print:before {\n  content: "\\F02F"; }\n\n.fa-camera:before {\n  content: "\\F030"; }\n\n.fa-font:before {\n  content: "\\F031"; }\n\n.fa-bold:before {\n  content: "\\F032"; }\n\n.fa-italic:before {\n  content: "\\F033"; }\n\n.fa-text-height:before {\n  content: "\\F034"; }\n\n.fa-text-width:before {\n  content: "\\F035"; }\n\n.fa-align-left:before {\n  content: "\\F036"; }\n\n.fa-align-center:before {\n  content: "\\F037"; }\n\n.fa-align-right:before {\n  content: "\\F038"; }\n\n.fa-align-justify:before {\n  content: "\\F039"; }\n\n.fa-list:before {\n  content: "\\F03A"; }\n\n.fa-dedent:before,\n.fa-outdent:before {\n  content: "\\F03B"; }\n\n.fa-indent:before {\n  content: "\\F03C"; }\n\n.fa-video-camera:before {\n  content: "\\F03D"; }\n\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: "\\F03E"; }\n\n.fa-pencil:before {\n  content: "\\F040"; }\n\n.fa-map-marker:before {\n  content: "\\F041"; }\n\n.fa-adjust:before {\n  content: "\\F042"; }\n\n.fa-tint:before {\n  content: "\\F043"; }\n\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: "\\F044"; }\n\n.fa-share-square-o:before {\n  content: "\\F045"; }\n\n.fa-check-square-o:before {\n  content: "\\F046"; }\n\n.fa-arrows:before {\n  content: "\\F047"; }\n\n.fa-step-backward:before {\n  content: "\\F048"; }\n\n.fa-fast-backward:before {\n  content: "\\F049"; }\n\n.fa-backward:before {\n  content: "\\F04A"; }\n\n.fa-play:before {\n  content: "\\F04B"; }\n\n.fa-pause:before {\n  content: "\\F04C"; }\n\n.fa-stop:before {\n  content: "\\F04D"; }\n\n.fa-forward:before {\n  content: "\\F04E"; }\n\n.fa-fast-forward:before {\n  content: "\\F050"; }\n\n.fa-step-forward:before {\n  content: "\\F051"; }\n\n.fa-eject:before {\n  content: "\\F052"; }\n\n.fa-chevron-left:before {\n  content: "\\F053"; }\n\n.fa-chevron-right:before {\n  content: "\\F054"; }\n\n.fa-plus-circle:before {\n  content: "\\F055"; }\n\n.fa-minus-circle:before {\n  content: "\\F056"; }\n\n.fa-times-circle:before {\n  content: "\\F057"; }\n\n.fa-check-circle:before {\n  content: "\\F058"; }\n\n.fa-question-circle:before {\n  content: "\\F059"; }\n\n.fa-info-circle:before {\n  content: "\\F05A"; }\n\n.fa-crosshairs:before {\n  content: "\\F05B"; }\n\n.fa-times-circle-o:before {\n  content: "\\F05C"; }\n\n.fa-check-circle-o:before {\n  content: "\\F05D"; }\n\n.fa-ban:before {\n  content: "\\F05E"; }\n\n.fa-arrow-left:before {\n  content: "\\F060"; }\n\n.fa-arrow-right:before {\n  content: "\\F061"; }\n\n.fa-arrow-up:before {\n  content: "\\F062"; }\n\n.fa-arrow-down:before {\n  content: "\\F063"; }\n\n.fa-mail-forward:before,\n.fa-share:before {\n  content: "\\F064"; }\n\n.fa-expand:before {\n  content: "\\F065"; }\n\n.fa-compress:before {\n  content: "\\F066"; }\n\n.fa-plus:before {\n  content: "\\F067"; }\n\n.fa-minus:before {\n  content: "\\F068"; }\n\n.fa-asterisk:before {\n  content: "\\F069"; }\n\n.fa-exclamation-circle:before {\n  content: "\\F06A"; }\n\n.fa-gift:before {\n  content: "\\F06B"; }\n\n.fa-leaf:before {\n  content: "\\F06C"; }\n\n.fa-fire:before {\n  content: "\\F06D"; }\n\n.fa-eye:before {\n  content: "\\F06E"; }\n\n.fa-eye-slash:before {\n  content: "\\F070"; }\n\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: "\\F071"; }\n\n.fa-plane:before {\n  content: "\\F072"; }\n\n.fa-calendar:before {\n  content: "\\F073"; }\n\n.fa-random:before {\n  content: "\\F074"; }\n\n.fa-comment:before {\n  content: "\\F075"; }\n\n.fa-magnet:before {\n  content: "\\F076"; }\n\n.fa-chevron-up:before {\n  content: "\\F077"; }\n\n.fa-chevron-down:before {\n  content: "\\F078"; }\n\n.fa-retweet:before {\n  content: "\\F079"; }\n\n.fa-shopping-cart:before {\n  content: "\\F07A"; }\n\n.fa-folder:before {\n  content: "\\F07B"; }\n\n.fa-folder-open:before {\n  content: "\\F07C"; }\n\n.fa-arrows-v:before {\n  content: "\\F07D"; }\n\n.fa-arrows-h:before {\n  content: "\\F07E"; }\n\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: "\\F080"; }\n\n.fa-twitter-square:before {\n  content: "\\F081"; }\n\n.fa-facebook-square:before {\n  content: "\\F082"; }\n\n.fa-camera-retro:before {\n  content: "\\F083"; }\n\n.fa-key:before {\n  content: "\\F084"; }\n\n.fa-gears:before,\n.fa-cogs:before {\n  content: "\\F085"; }\n\n.fa-comments:before {\n  content: "\\F086"; }\n\n.fa-thumbs-o-up:before {\n  content: "\\F087"; }\n\n.fa-thumbs-o-down:before {\n  content: "\\F088"; }\n\n.fa-star-half:before {\n  content: "\\F089"; }\n\n.fa-heart-o:before {\n  content: "\\F08A"; }\n\n.fa-sign-out:before {\n  content: "\\F08B"; }\n\n.fa-linkedin-square:before {\n  content: "\\F08C"; }\n\n.fa-thumb-tack:before {\n  content: "\\F08D"; }\n\n.fa-external-link:before {\n  content: "\\F08E"; }\n\n.fa-sign-in:before {\n  content: "\\F090"; }\n\n.fa-trophy:before {\n  content: "\\F091"; }\n\n.fa-github-square:before {\n  content: "\\F092"; }\n\n.fa-upload:before {\n  content: "\\F093"; }\n\n.fa-lemon-o:before {\n  content: "\\F094"; }\n\n.fa-phone:before {\n  content: "\\F095"; }\n\n.fa-square-o:before {\n  content: "\\F096"; }\n\n.fa-bookmark-o:before {\n  content: "\\F097"; }\n\n.fa-phone-square:before {\n  content: "\\F098"; }\n\n.fa-twitter:before {\n  content: "\\F099"; }\n\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: "\\F09A"; }\n\n.fa-github:before {\n  content: "\\F09B"; }\n\n.fa-unlock:before {\n  content: "\\F09C"; }\n\n.fa-credit-card:before {\n  content: "\\F09D"; }\n\n.fa-feed:before,\n.fa-rss:before {\n  content: "\\F09E"; }\n\n.fa-hdd-o:before {\n  content: "\\F0A0"; }\n\n.fa-bullhorn:before {\n  content: "\\F0A1"; }\n\n.fa-bell:before {\n  content: "\\F0F3"; }\n\n.fa-certificate:before {\n  content: "\\F0A3"; }\n\n.fa-hand-o-right:before {\n  content: "\\F0A4"; }\n\n.fa-hand-o-left:before {\n  content: "\\F0A5"; }\n\n.fa-hand-o-up:before {\n  content: "\\F0A6"; }\n\n.fa-hand-o-down:before {\n  content: "\\F0A7"; }\n\n.fa-arrow-circle-left:before {\n  content: "\\F0A8"; }\n\n.fa-arrow-circle-right:before {\n  content: "\\F0A9"; }\n\n.fa-arrow-circle-up:before {\n  content: "\\F0AA"; }\n\n.fa-arrow-circle-down:before {\n  content: "\\F0AB"; }\n\n.fa-globe:before {\n  content: "\\F0AC"; }\n\n.fa-wrench:before {\n  content: "\\F0AD"; }\n\n.fa-tasks:before {\n  content: "\\F0AE"; }\n\n.fa-filter:before {\n  content: "\\F0B0"; }\n\n.fa-briefcase:before {\n  content: "\\F0B1"; }\n\n.fa-arrows-alt:before {\n  content: "\\F0B2"; }\n\n.fa-group:before,\n.fa-users:before {\n  content: "\\F0C0"; }\n\n.fa-chain:before,\n.fa-link:before {\n  content: "\\F0C1"; }\n\n.fa-cloud:before {\n  content: "\\F0C2"; }\n\n.fa-flask:before {\n  content: "\\F0C3"; }\n\n.fa-cut:before,\n.fa-scissors:before {\n  content: "\\F0C4"; }\n\n.fa-copy:before,\n.fa-files-o:before {\n  content: "\\F0C5"; }\n\n.fa-paperclip:before {\n  content: "\\F0C6"; }\n\n.fa-save:before,\n.fa-floppy-o:before {\n  content: "\\F0C7"; }\n\n.fa-square:before {\n  content: "\\F0C8"; }\n\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: "\\F0C9"; }\n\n.fa-list-ul:before {\n  content: "\\F0CA"; }\n\n.fa-list-ol:before {\n  content: "\\F0CB"; }\n\n.fa-strikethrough:before {\n  content: "\\F0CC"; }\n\n.fa-underline:before {\n  content: "\\F0CD"; }\n\n.fa-table:before {\n  content: "\\F0CE"; }\n\n.fa-magic:before {\n  content: "\\F0D0"; }\n\n.fa-truck:before {\n  content: "\\F0D1"; }\n\n.fa-pinterest:before {\n  content: "\\F0D2"; }\n\n.fa-pinterest-square:before {\n  content: "\\F0D3"; }\n\n.fa-google-plus-square:before {\n  content: "\\F0D4"; }\n\n.fa-google-plus:before {\n  content: "\\F0D5"; }\n\n.fa-money:before {\n  content: "\\F0D6"; }\n\n.fa-caret-down:before {\n  content: "\\F0D7"; }\n\n.fa-caret-up:before {\n  content: "\\F0D8"; }\n\n.fa-caret-left:before {\n  content: "\\F0D9"; }\n\n.fa-caret-right:before {\n  content: "\\F0DA"; }\n\n.fa-columns:before {\n  content: "\\F0DB"; }\n\n.fa-unsorted:before,\n.fa-sort:before {\n  content: "\\F0DC"; }\n\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: "\\F0DD"; }\n\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: "\\F0DE"; }\n\n.fa-envelope:before {\n  content: "\\F0E0"; }\n\n.fa-linkedin:before {\n  content: "\\F0E1"; }\n\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: "\\F0E2"; }\n\n.fa-legal:before,\n.fa-gavel:before {\n  content: "\\F0E3"; }\n\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: "\\F0E4"; }\n\n.fa-comment-o:before {\n  content: "\\F0E5"; }\n\n.fa-comments-o:before {\n  content: "\\F0E6"; }\n\n.fa-flash:before,\n.fa-bolt:before {\n  content: "\\F0E7"; }\n\n.fa-sitemap:before {\n  content: "\\F0E8"; }\n\n.fa-umbrella:before {\n  content: "\\F0E9"; }\n\n.fa-paste:before,\n.fa-clipboard:before {\n  content: "\\F0EA"; }\n\n.fa-lightbulb-o:before {\n  content: "\\F0EB"; }\n\n.fa-exchange:before {\n  content: "\\F0EC"; }\n\n.fa-cloud-download:before {\n  content: "\\F0ED"; }\n\n.fa-cloud-upload:before {\n  content: "\\F0EE"; }\n\n.fa-user-md:before {\n  content: "\\F0F0"; }\n\n.fa-stethoscope:before {\n  content: "\\F0F1"; }\n\n.fa-suitcase:before {\n  content: "\\F0F2"; }\n\n.fa-bell-o:before {\n  content: "\\F0A2"; }\n\n.fa-coffee:before {\n  content: "\\F0F4"; }\n\n.fa-cutlery:before {\n  content: "\\F0F5"; }\n\n.fa-file-text-o:before {\n  content: "\\F0F6"; }\n\n.fa-building-o:before {\n  content: "\\F0F7"; }\n\n.fa-hospital-o:before {\n  content: "\\F0F8"; }\n\n.fa-ambulance:before {\n  content: "\\F0F9"; }\n\n.fa-medkit:before {\n  content: "\\F0FA"; }\n\n.fa-fighter-jet:before {\n  content: "\\F0FB"; }\n\n.fa-beer:before {\n  content: "\\F0FC"; }\n\n.fa-h-square:before {\n  content: "\\F0FD"; }\n\n.fa-plus-square:before {\n  content: "\\F0FE"; }\n\n.fa-angle-double-left:before {\n  content: "\\F100"; }\n\n.fa-angle-double-right:before {\n  content: "\\F101"; }\n\n.fa-angle-double-up:before {\n  content: "\\F102"; }\n\n.fa-angle-double-down:before {\n  content: "\\F103"; }\n\n.fa-angle-left:before {\n  content: "\\F104"; }\n\n.fa-angle-right:before {\n  content: "\\F105"; }\n\n.fa-angle-up:before {\n  content: "\\F106"; }\n\n.fa-angle-down:before {\n  content: "\\F107"; }\n\n.fa-desktop:before {\n  content: "\\F108"; }\n\n.fa-laptop:before {\n  content: "\\F109"; }\n\n.fa-tablet:before {\n  content: "\\F10A"; }\n\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: "\\F10B"; }\n\n.fa-circle-o:before {\n  content: "\\F10C"; }\n\n.fa-quote-left:before {\n  content: "\\F10D"; }\n\n.fa-quote-right:before {\n  content: "\\F10E"; }\n\n.fa-spinner:before {\n  content: "\\F110"; }\n\n.fa-circle:before {\n  content: "\\F111"; }\n\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: "\\F112"; }\n\n.fa-github-alt:before {\n  content: "\\F113"; }\n\n.fa-folder-o:before {\n  content: "\\F114"; }\n\n.fa-folder-open-o:before {\n  content: "\\F115"; }\n\n.fa-smile-o:before {\n  content: "\\F118"; }\n\n.fa-frown-o:before {\n  content: "\\F119"; }\n\n.fa-meh-o:before {\n  content: "\\F11A"; }\n\n.fa-gamepad:before {\n  content: "\\F11B"; }\n\n.fa-keyboard-o:before {\n  content: "\\F11C"; }\n\n.fa-flag-o:before {\n  content: "\\F11D"; }\n\n.fa-flag-checkered:before {\n  content: "\\F11E"; }\n\n.fa-terminal:before {\n  content: "\\F120"; }\n\n.fa-code:before {\n  content: "\\F121"; }\n\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: "\\F122"; }\n\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: "\\F123"; }\n\n.fa-location-arrow:before {\n  content: "\\F124"; }\n\n.fa-crop:before {\n  content: "\\F125"; }\n\n.fa-code-fork:before {\n  content: "\\F126"; }\n\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: "\\F127"; }\n\n.fa-question:before {\n  content: "\\F128"; }\n\n.fa-info:before {\n  content: "\\F129"; }\n\n.fa-exclamation:before {\n  content: "\\F12A"; }\n\n.fa-superscript:before {\n  content: "\\F12B"; }\n\n.fa-subscript:before {\n  content: "\\F12C"; }\n\n.fa-eraser:before {\n  content: "\\F12D"; }\n\n.fa-puzzle-piece:before {\n  content: "\\F12E"; }\n\n.fa-microphone:before {\n  content: "\\F130"; }\n\n.fa-microphone-slash:before {\n  content: "\\F131"; }\n\n.fa-shield:before {\n  content: "\\F132"; }\n\n.fa-calendar-o:before {\n  content: "\\F133"; }\n\n.fa-fire-extinguisher:before {\n  content: "\\F134"; }\n\n.fa-rocket:before {\n  content: "\\F135"; }\n\n.fa-maxcdn:before {\n  content: "\\F136"; }\n\n.fa-chevron-circle-left:before {\n  content: "\\F137"; }\n\n.fa-chevron-circle-right:before {\n  content: "\\F138"; }\n\n.fa-chevron-circle-up:before {\n  content: "\\F139"; }\n\n.fa-chevron-circle-down:before {\n  content: "\\F13A"; }\n\n.fa-html5:before {\n  content: "\\F13B"; }\n\n.fa-css3:before {\n  content: "\\F13C"; }\n\n.fa-anchor:before {\n  content: "\\F13D"; }\n\n.fa-unlock-alt:before {\n  content: "\\F13E"; }\n\n.fa-bullseye:before {\n  content: "\\F140"; }\n\n.fa-ellipsis-h:before {\n  content: "\\F141"; }\n\n.fa-ellipsis-v:before {\n  content: "\\F142"; }\n\n.fa-rss-square:before {\n  content: "\\F143"; }\n\n.fa-play-circle:before {\n  content: "\\F144"; }\n\n.fa-ticket:before {\n  content: "\\F145"; }\n\n.fa-minus-square:before {\n  content: "\\F146"; }\n\n.fa-minus-square-o:before {\n  content: "\\F147"; }\n\n.fa-level-up:before {\n  content: "\\F148"; }\n\n.fa-level-down:before {\n  content: "\\F149"; }\n\n.fa-check-square:before {\n  content: "\\F14A"; }\n\n.fa-pencil-square:before {\n  content: "\\F14B"; }\n\n.fa-external-link-square:before {\n  content: "\\F14C"; }\n\n.fa-share-square:before {\n  content: "\\F14D"; }\n\n.fa-compass:before {\n  content: "\\F14E"; }\n\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: "\\F150"; }\n\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: "\\F151"; }\n\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: "\\F152"; }\n\n.fa-euro:before,\n.fa-eur:before {\n  content: "\\F153"; }\n\n.fa-gbp:before {\n  content: "\\F154"; }\n\n.fa-dollar:before,\n.fa-usd:before {\n  content: "\\F155"; }\n\n.fa-rupee:before,\n.fa-inr:before {\n  content: "\\F156"; }\n\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: "\\F157"; }\n\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: "\\F158"; }\n\n.fa-won:before,\n.fa-krw:before {\n  content: "\\F159"; }\n\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: "\\F15A"; }\n\n.fa-file:before {\n  content: "\\F15B"; }\n\n.fa-file-text:before {\n  content: "\\F15C"; }\n\n.fa-sort-alpha-asc:before {\n  content: "\\F15D"; }\n\n.fa-sort-alpha-desc:before {\n  content: "\\F15E"; }\n\n.fa-sort-amount-asc:before {\n  content: "\\F160"; }\n\n.fa-sort-amount-desc:before {\n  content: "\\F161"; }\n\n.fa-sort-numeric-asc:before {\n  content: "\\F162"; }\n\n.fa-sort-numeric-desc:before {\n  content: "\\F163"; }\n\n.fa-thumbs-up:before {\n  content: "\\F164"; }\n\n.fa-thumbs-down:before {\n  content: "\\F165"; }\n\n.fa-youtube-square:before {\n  content: "\\F166"; }\n\n.fa-youtube:before {\n  content: "\\F167"; }\n\n.fa-xing:before {\n  content: "\\F168"; }\n\n.fa-xing-square:before {\n  content: "\\F169"; }\n\n.fa-youtube-play:before {\n  content: "\\F16A"; }\n\n.fa-dropbox:before {\n  content: "\\F16B"; }\n\n.fa-stack-overflow:before {\n  content: "\\F16C"; }\n\n.fa-instagram:before {\n  content: "\\F16D"; }\n\n.fa-flickr:before {\n  content: "\\F16E"; }\n\n.fa-adn:before {\n  content: "\\F170"; }\n\n.fa-bitbucket:before {\n  content: "\\F171"; }\n\n.fa-bitbucket-square:before {\n  content: "\\F172"; }\n\n.fa-tumblr:before {\n  content: "\\F173"; }\n\n.fa-tumblr-square:before {\n  content: "\\F174"; }\n\n.fa-long-arrow-down:before {\n  content: "\\F175"; }\n\n.fa-long-arrow-up:before {\n  content: "\\F176"; }\n\n.fa-long-arrow-left:before {\n  content: "\\F177"; }\n\n.fa-long-arrow-right:before {\n  content: "\\F178"; }\n\n.fa-apple:before {\n  content: "\\F179"; }\n\n.fa-windows:before {\n  content: "\\F17A"; }\n\n.fa-android:before {\n  content: "\\F17B"; }\n\n.fa-linux:before {\n  content: "\\F17C"; }\n\n.fa-dribbble:before {\n  content: "\\F17D"; }\n\n.fa-skype:before {\n  content: "\\F17E"; }\n\n.fa-foursquare:before {\n  content: "\\F180"; }\n\n.fa-trello:before {\n  content: "\\F181"; }\n\n.fa-female:before {\n  content: "\\F182"; }\n\n.fa-male:before {\n  content: "\\F183"; }\n\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: "\\F184"; }\n\n.fa-sun-o:before {\n  content: "\\F185"; }\n\n.fa-moon-o:before {\n  content: "\\F186"; }\n\n.fa-archive:before {\n  content: "\\F187"; }\n\n.fa-bug:before {\n  content: "\\F188"; }\n\n.fa-vk:before {\n  content: "\\F189"; }\n\n.fa-weibo:before {\n  content: "\\F18A"; }\n\n.fa-renren:before {\n  content: "\\F18B"; }\n\n.fa-pagelines:before {\n  content: "\\F18C"; }\n\n.fa-stack-exchange:before {\n  content: "\\F18D"; }\n\n.fa-arrow-circle-o-right:before {\n  content: "\\F18E"; }\n\n.fa-arrow-circle-o-left:before {\n  content: "\\F190"; }\n\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: "\\F191"; }\n\n.fa-dot-circle-o:before {\n  content: "\\F192"; }\n\n.fa-wheelchair:before {\n  content: "\\F193"; }\n\n.fa-vimeo-square:before {\n  content: "\\F194"; }\n\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: "\\F195"; }\n\n.fa-plus-square-o:before {\n  content: "\\F196"; }\n\n.fa-space-shuttle:before {\n  content: "\\F197"; }\n\n.fa-slack:before {\n  content: "\\F198"; }\n\n.fa-envelope-square:before {\n  content: "\\F199"; }\n\n.fa-wordpress:before {\n  content: "\\F19A"; }\n\n.fa-openid:before {\n  content: "\\F19B"; }\n\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: "\\F19C"; }\n\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: "\\F19D"; }\n\n.fa-yahoo:before {\n  content: "\\F19E"; }\n\n.fa-google:before {\n  content: "\\F1A0"; }\n\n.fa-reddit:before {\n  content: "\\F1A1"; }\n\n.fa-reddit-square:before {\n  content: "\\F1A2"; }\n\n.fa-stumbleupon-circle:before {\n  content: "\\F1A3"; }\n\n.fa-stumbleupon:before {\n  content: "\\F1A4"; }\n\n.fa-delicious:before {\n  content: "\\F1A5"; }\n\n.fa-digg:before {\n  content: "\\F1A6"; }\n\n.fa-pied-piper-pp:before {\n  content: "\\F1A7"; }\n\n.fa-pied-piper-alt:before {\n  content: "\\F1A8"; }\n\n.fa-drupal:before {\n  content: "\\F1A9"; }\n\n.fa-joomla:before {\n  content: "\\F1AA"; }\n\n.fa-language:before {\n  content: "\\F1AB"; }\n\n.fa-fax:before {\n  content: "\\F1AC"; }\n\n.fa-building:before {\n  content: "\\F1AD"; }\n\n.fa-child:before {\n  content: "\\F1AE"; }\n\n.fa-paw:before {\n  content: "\\F1B0"; }\n\n.fa-spoon:before {\n  content: "\\F1B1"; }\n\n.fa-cube:before {\n  content: "\\F1B2"; }\n\n.fa-cubes:before {\n  content: "\\F1B3"; }\n\n.fa-behance:before {\n  content: "\\F1B4"; }\n\n.fa-behance-square:before {\n  content: "\\F1B5"; }\n\n.fa-steam:before {\n  content: "\\F1B6"; }\n\n.fa-steam-square:before {\n  content: "\\F1B7"; }\n\n.fa-recycle:before {\n  content: "\\F1B8"; }\n\n.fa-automobile:before,\n.fa-car:before {\n  content: "\\F1B9"; }\n\n.fa-cab:before,\n.fa-taxi:before {\n  content: "\\F1BA"; }\n\n.fa-tree:before {\n  content: "\\F1BB"; }\n\n.fa-spotify:before {\n  content: "\\F1BC"; }\n\n.fa-deviantart:before {\n  content: "\\F1BD"; }\n\n.fa-soundcloud:before {\n  content: "\\F1BE"; }\n\n.fa-database:before {\n  content: "\\F1C0"; }\n\n.fa-file-pdf-o:before {\n  content: "\\F1C1"; }\n\n.fa-file-word-o:before {\n  content: "\\F1C2"; }\n\n.fa-file-excel-o:before {\n  content: "\\F1C3"; }\n\n.fa-file-powerpoint-o:before {\n  content: "\\F1C4"; }\n\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: "\\F1C5"; }\n\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: "\\F1C6"; }\n\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: "\\F1C7"; }\n\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: "\\F1C8"; }\n\n.fa-file-code-o:before {\n  content: "\\F1C9"; }\n\n.fa-vine:before {\n  content: "\\F1CA"; }\n\n.fa-codepen:before {\n  content: "\\F1CB"; }\n\n.fa-jsfiddle:before {\n  content: "\\F1CC"; }\n\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: "\\F1CD"; }\n\n.fa-circle-o-notch:before {\n  content: "\\F1CE"; }\n\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: "\\F1D0"; }\n\n.fa-ge:before,\n.fa-empire:before {\n  content: "\\F1D1"; }\n\n.fa-git-square:before {\n  content: "\\F1D2"; }\n\n.fa-git:before {\n  content: "\\F1D3"; }\n\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: "\\F1D4"; }\n\n.fa-tencent-weibo:before {\n  content: "\\F1D5"; }\n\n.fa-qq:before {\n  content: "\\F1D6"; }\n\n.fa-wechat:before,\n.fa-weixin:before {\n  content: "\\F1D7"; }\n\n.fa-send:before,\n.fa-paper-plane:before {\n  content: "\\F1D8"; }\n\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: "\\F1D9"; }\n\n.fa-history:before {\n  content: "\\F1DA"; }\n\n.fa-circle-thin:before {\n  content: "\\F1DB"; }\n\n.fa-header:before {\n  content: "\\F1DC"; }\n\n.fa-paragraph:before {\n  content: "\\F1DD"; }\n\n.fa-sliders:before {\n  content: "\\F1DE"; }\n\n.fa-share-alt:before {\n  content: "\\F1E0"; }\n\n.fa-share-alt-square:before {\n  content: "\\F1E1"; }\n\n.fa-bomb:before {\n  content: "\\F1E2"; }\n\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: "\\F1E3"; }\n\n.fa-tty:before {\n  content: "\\F1E4"; }\n\n.fa-binoculars:before {\n  content: "\\F1E5"; }\n\n.fa-plug:before {\n  content: "\\F1E6"; }\n\n.fa-slideshare:before {\n  content: "\\F1E7"; }\n\n.fa-twitch:before {\n  content: "\\F1E8"; }\n\n.fa-yelp:before {\n  content: "\\F1E9"; }\n\n.fa-newspaper-o:before {\n  content: "\\F1EA"; }\n\n.fa-wifi:before {\n  content: "\\F1EB"; }\n\n.fa-calculator:before {\n  content: "\\F1EC"; }\n\n.fa-paypal:before {\n  content: "\\F1ED"; }\n\n.fa-google-wallet:before {\n  content: "\\F1EE"; }\n\n.fa-cc-visa:before {\n  content: "\\F1F0"; }\n\n.fa-cc-mastercard:before {\n  content: "\\F1F1"; }\n\n.fa-cc-discover:before {\n  content: "\\F1F2"; }\n\n.fa-cc-amex:before {\n  content: "\\F1F3"; }\n\n.fa-cc-paypal:before {\n  content: "\\F1F4"; }\n\n.fa-cc-stripe:before {\n  content: "\\F1F5"; }\n\n.fa-bell-slash:before {\n  content: "\\F1F6"; }\n\n.fa-bell-slash-o:before {\n  content: "\\F1F7"; }\n\n.fa-trash:before {\n  content: "\\F1F8"; }\n\n.fa-copyright:before {\n  content: "\\F1F9"; }\n\n.fa-at:before {\n  content: "\\F1FA"; }\n\n.fa-eyedropper:before {\n  content: "\\F1FB"; }\n\n.fa-paint-brush:before {\n  content: "\\F1FC"; }\n\n.fa-birthday-cake:before {\n  content: "\\F1FD"; }\n\n.fa-area-chart:before {\n  content: "\\F1FE"; }\n\n.fa-pie-chart:before {\n  content: "\\F200"; }\n\n.fa-line-chart:before {\n  content: "\\F201"; }\n\n.fa-lastfm:before {\n  content: "\\F202"; }\n\n.fa-lastfm-square:before {\n  content: "\\F203"; }\n\n.fa-toggle-off:before {\n  content: "\\F204"; }\n\n.fa-toggle-on:before {\n  content: "\\F205"; }\n\n.fa-bicycle:before {\n  content: "\\F206"; }\n\n.fa-bus:before {\n  content: "\\F207"; }\n\n.fa-ioxhost:before {\n  content: "\\F208"; }\n\n.fa-angellist:before {\n  content: "\\F209"; }\n\n.fa-cc:before {\n  content: "\\F20A"; }\n\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: "\\F20B"; }\n\n.fa-meanpath:before {\n  content: "\\F20C"; }\n\n.fa-buysellads:before {\n  content: "\\F20D"; }\n\n.fa-connectdevelop:before {\n  content: "\\F20E"; }\n\n.fa-dashcube:before {\n  content: "\\F210"; }\n\n.fa-forumbee:before {\n  content: "\\F211"; }\n\n.fa-leanpub:before {\n  content: "\\F212"; }\n\n.fa-sellsy:before {\n  content: "\\F213"; }\n\n.fa-shirtsinbulk:before {\n  content: "\\F214"; }\n\n.fa-simplybuilt:before {\n  content: "\\F215"; }\n\n.fa-skyatlas:before {\n  content: "\\F216"; }\n\n.fa-cart-plus:before {\n  content: "\\F217"; }\n\n.fa-cart-arrow-down:before {\n  content: "\\F218"; }\n\n.fa-diamond:before {\n  content: "\\F219"; }\n\n.fa-ship:before {\n  content: "\\F21A"; }\n\n.fa-user-secret:before {\n  content: "\\F21B"; }\n\n.fa-motorcycle:before {\n  content: "\\F21C"; }\n\n.fa-street-view:before {\n  content: "\\F21D"; }\n\n.fa-heartbeat:before {\n  content: "\\F21E"; }\n\n.fa-venus:before {\n  content: "\\F221"; }\n\n.fa-mars:before {\n  content: "\\F222"; }\n\n.fa-mercury:before {\n  content: "\\F223"; }\n\n.fa-intersex:before,\n.fa-transgender:before {\n  content: "\\F224"; }\n\n.fa-transgender-alt:before {\n  content: "\\F225"; }\n\n.fa-venus-double:before {\n  content: "\\F226"; }\n\n.fa-mars-double:before {\n  content: "\\F227"; }\n\n.fa-venus-mars:before {\n  content: "\\F228"; }\n\n.fa-mars-stroke:before {\n  content: "\\F229"; }\n\n.fa-mars-stroke-v:before {\n  content: "\\F22A"; }\n\n.fa-mars-stroke-h:before {\n  content: "\\F22B"; }\n\n.fa-neuter:before {\n  content: "\\F22C"; }\n\n.fa-genderless:before {\n  content: "\\F22D"; }\n\n.fa-facebook-official:before {\n  content: "\\F230"; }\n\n.fa-pinterest-p:before {\n  content: "\\F231"; }\n\n.fa-whatsapp:before {\n  content: "\\F232"; }\n\n.fa-server:before {\n  content: "\\F233"; }\n\n.fa-user-plus:before {\n  content: "\\F234"; }\n\n.fa-user-times:before {\n  content: "\\F235"; }\n\n.fa-hotel:before,\n.fa-bed:before {\n  content: "\\F236"; }\n\n.fa-viacoin:before {\n  content: "\\F237"; }\n\n.fa-train:before {\n  content: "\\F238"; }\n\n.fa-subway:before {\n  content: "\\F239"; }\n\n.fa-medium:before {\n  content: "\\F23A"; }\n\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: "\\F23B"; }\n\n.fa-optin-monster:before {\n  content: "\\F23C"; }\n\n.fa-opencart:before {\n  content: "\\F23D"; }\n\n.fa-expeditedssl:before {\n  content: "\\F23E"; }\n\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: "\\F240"; }\n\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: "\\F241"; }\n\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: "\\F242"; }\n\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: "\\F243"; }\n\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: "\\F244"; }\n\n.fa-mouse-pointer:before {\n  content: "\\F245"; }\n\n.fa-i-cursor:before {\n  content: "\\F246"; }\n\n.fa-object-group:before {\n  content: "\\F247"; }\n\n.fa-object-ungroup:before {\n  content: "\\F248"; }\n\n.fa-sticky-note:before {\n  content: "\\F249"; }\n\n.fa-sticky-note-o:before {\n  content: "\\F24A"; }\n\n.fa-cc-jcb:before {\n  content: "\\F24B"; }\n\n.fa-cc-diners-club:before {\n  content: "\\F24C"; }\n\n.fa-clone:before {\n  content: "\\F24D"; }\n\n.fa-balance-scale:before {\n  content: "\\F24E"; }\n\n.fa-hourglass-o:before {\n  content: "\\F250"; }\n\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: "\\F251"; }\n\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: "\\F252"; }\n\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: "\\F253"; }\n\n.fa-hourglass:before {\n  content: "\\F254"; }\n\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: "\\F255"; }\n\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: "\\F256"; }\n\n.fa-hand-scissors-o:before {\n  content: "\\F257"; }\n\n.fa-hand-lizard-o:before {\n  content: "\\F258"; }\n\n.fa-hand-spock-o:before {\n  content: "\\F259"; }\n\n.fa-hand-pointer-o:before {\n  content: "\\F25A"; }\n\n.fa-hand-peace-o:before {\n  content: "\\F25B"; }\n\n.fa-trademark:before {\n  content: "\\F25C"; }\n\n.fa-registered:before {\n  content: "\\F25D"; }\n\n.fa-creative-commons:before {\n  content: "\\F25E"; }\n\n.fa-gg:before {\n  content: "\\F260"; }\n\n.fa-gg-circle:before {\n  content: "\\F261"; }\n\n.fa-tripadvisor:before {\n  content: "\\F262"; }\n\n.fa-odnoklassniki:before {\n  content: "\\F263"; }\n\n.fa-odnoklassniki-square:before {\n  content: "\\F264"; }\n\n.fa-get-pocket:before {\n  content: "\\F265"; }\n\n.fa-wikipedia-w:before {\n  content: "\\F266"; }\n\n.fa-safari:before {\n  content: "\\F267"; }\n\n.fa-chrome:before {\n  content: "\\F268"; }\n\n.fa-firefox:before {\n  content: "\\F269"; }\n\n.fa-opera:before {\n  content: "\\F26A"; }\n\n.fa-internet-explorer:before {\n  content: "\\F26B"; }\n\n.fa-tv:before,\n.fa-television:before {\n  content: "\\F26C"; }\n\n.fa-contao:before {\n  content: "\\F26D"; }\n\n.fa-500px:before {\n  content: "\\F26E"; }\n\n.fa-amazon:before {\n  content: "\\F270"; }\n\n.fa-calendar-plus-o:before {\n  content: "\\F271"; }\n\n.fa-calendar-minus-o:before {\n  content: "\\F272"; }\n\n.fa-calendar-times-o:before {\n  content: "\\F273"; }\n\n.fa-calendar-check-o:before {\n  content: "\\F274"; }\n\n.fa-industry:before {\n  content: "\\F275"; }\n\n.fa-map-pin:before {\n  content: "\\F276"; }\n\n.fa-map-signs:before {\n  content: "\\F277"; }\n\n.fa-map-o:before {\n  content: "\\F278"; }\n\n.fa-map:before {\n  content: "\\F279"; }\n\n.fa-commenting:before {\n  content: "\\F27A"; }\n\n.fa-commenting-o:before {\n  content: "\\F27B"; }\n\n.fa-houzz:before {\n  content: "\\F27C"; }\n\n.fa-vimeo:before {\n  content: "\\F27D"; }\n\n.fa-black-tie:before {\n  content: "\\F27E"; }\n\n.fa-fonticons:before {\n  content: "\\F280"; }\n\n.fa-reddit-alien:before {\n  content: "\\F281"; }\n\n.fa-edge:before {\n  content: "\\F282"; }\n\n.fa-credit-card-alt:before {\n  content: "\\F283"; }\n\n.fa-codiepie:before {\n  content: "\\F284"; }\n\n.fa-modx:before {\n  content: "\\F285"; }\n\n.fa-fort-awesome:before {\n  content: "\\F286"; }\n\n.fa-usb:before {\n  content: "\\F287"; }\n\n.fa-product-hunt:before {\n  content: "\\F288"; }\n\n.fa-mixcloud:before {\n  content: "\\F289"; }\n\n.fa-scribd:before {\n  content: "\\F28A"; }\n\n.fa-pause-circle:before {\n  content: "\\F28B"; }\n\n.fa-pause-circle-o:before {\n  content: "\\F28C"; }\n\n.fa-stop-circle:before {\n  content: "\\F28D"; }\n\n.fa-stop-circle-o:before {\n  content: "\\F28E"; }\n\n.fa-shopping-bag:before {\n  content: "\\F290"; }\n\n.fa-shopping-basket:before {\n  content: "\\F291"; }\n\n.fa-hashtag:before {\n  content: "\\F292"; }\n\n.fa-bluetooth:before {\n  content: "\\F293"; }\n\n.fa-bluetooth-b:before {\n  content: "\\F294"; }\n\n.fa-percent:before {\n  content: "\\F295"; }\n\n.fa-gitlab:before {\n  content: "\\F296"; }\n\n.fa-wpbeginner:before {\n  content: "\\F297"; }\n\n.fa-wpforms:before {\n  content: "\\F298"; }\n\n.fa-envira:before {\n  content: "\\F299"; }\n\n.fa-universal-access:before {\n  content: "\\F29A"; }\n\n.fa-wheelchair-alt:before {\n  content: "\\F29B"; }\n\n.fa-question-circle-o:before {\n  content: "\\F29C"; }\n\n.fa-blind:before {\n  content: "\\F29D"; }\n\n.fa-audio-description:before {\n  content: "\\F29E"; }\n\n.fa-volume-control-phone:before {\n  content: "\\F2A0"; }\n\n.fa-braille:before {\n  content: "\\F2A1"; }\n\n.fa-assistive-listening-systems:before {\n  content: "\\F2A2"; }\n\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: "\\F2A3"; }\n\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: "\\F2A4"; }\n\n.fa-glide:before {\n  content: "\\F2A5"; }\n\n.fa-glide-g:before {\n  content: "\\F2A6"; }\n\n.fa-signing:before,\n.fa-sign-language:before {\n  content: "\\F2A7"; }\n\n.fa-low-vision:before {\n  content: "\\F2A8"; }\n\n.fa-viadeo:before {\n  content: "\\F2A9"; }\n\n.fa-viadeo-square:before {\n  content: "\\F2AA"; }\n\n.fa-snapchat:before {\n  content: "\\F2AB"; }\n\n.fa-snapchat-ghost:before {\n  content: "\\F2AC"; }\n\n.fa-snapchat-square:before {\n  content: "\\F2AD"; }\n\n.fa-pied-piper:before {\n  content: "\\F2AE"; }\n\n.fa-first-order:before {\n  content: "\\F2B0"; }\n\n.fa-yoast:before {\n  content: "\\F2B1"; }\n\n.fa-themeisle:before {\n  content: "\\F2B2"; }\n\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: "\\F2B3"; }\n\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: "\\F2B4"; }\n\n.fa-handshake-o:before {\n  content: "\\F2B5"; }\n\n.fa-envelope-open:before {\n  content: "\\F2B6"; }\n\n.fa-envelope-open-o:before {\n  content: "\\F2B7"; }\n\n.fa-linode:before {\n  content: "\\F2B8"; }\n\n.fa-address-book:before {\n  content: "\\F2B9"; }\n\n.fa-address-book-o:before {\n  content: "\\F2BA"; }\n\n.fa-vcard:before,\n.fa-address-card:before {\n  content: "\\F2BB"; }\n\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: "\\F2BC"; }\n\n.fa-user-circle:before {\n  content: "\\F2BD"; }\n\n.fa-user-circle-o:before {\n  content: "\\F2BE"; }\n\n.fa-user-o:before {\n  content: "\\F2C0"; }\n\n.fa-id-badge:before {\n  content: "\\F2C1"; }\n\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: "\\F2C2"; }\n\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: "\\F2C3"; }\n\n.fa-quora:before {\n  content: "\\F2C4"; }\n\n.fa-free-code-camp:before {\n  content: "\\F2C5"; }\n\n.fa-telegram:before {\n  content: "\\F2C6"; }\n\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: "\\F2C7"; }\n\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: "\\F2C8"; }\n\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: "\\F2C9"; }\n\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: "\\F2CA"; }\n\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: "\\F2CB"; }\n\n.fa-shower:before {\n  content: "\\F2CC"; }\n\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: "\\F2CD"; }\n\n.fa-podcast:before {\n  content: "\\F2CE"; }\n\n.fa-window-maximize:before {\n  content: "\\F2D0"; }\n\n.fa-window-minimize:before {\n  content: "\\F2D1"; }\n\n.fa-window-restore:before {\n  content: "\\F2D2"; }\n\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: "\\F2D3"; }\n\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: "\\F2D4"; }\n\n.fa-bandcamp:before {\n  content: "\\F2D5"; }\n\n.fa-grav:before {\n  content: "\\F2D6"; }\n\n.fa-etsy:before {\n  content: "\\F2D7"; }\n\n.fa-imdb:before {\n  content: "\\F2D8"; }\n\n.fa-ravelry:before {\n  content: "\\F2D9"; }\n\n.fa-eercast:before {\n  content: "\\F2DA"; }\n\n.fa-microchip:before {\n  content: "\\F2DB"; }\n\n.fa-snowflake-o:before {\n  content: "\\F2DC"; }\n\n.fa-superpowers:before {\n  content: "\\F2DD"; }\n\n.fa-wpexplorer:before {\n  content: "\\F2DE"; }\n\n.fa-meetup:before {\n  content: "\\F2E0"; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type="button"],\ninput[type="reset"],\ninput[type="submit"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type="checkbox"],\ninput[type="radio"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type="number"]::-webkit-inner-spin-button,\ninput[type="number"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type="search"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: " (" attr(href) ")"; }\n  abbr[title]:after {\n    content: " (" attr(title) ")"; }\n  a[href^="#"]:after,\n  a[href^="javascript:"]:after {\n    content: ""; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\n@font-face {\n  font-family: \'Glyphicons Halflings\';\n  src: url(' + I(2) + ");\n  src: url(" + I(2) + '?#iefix) format("embedded-opentype"), url(' + I(18) + ') format("woff2"), url(' + I(19) + ') format("woff"), url(' + I(20) + ') format("truetype"), url(' + I(21) + '#glyphicons_halflingsregular) format("svg"); }\n\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: \'Glyphicons Halflings\';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.glyphicon-asterisk:before {\n  content: "*"; }\n\n.glyphicon-plus:before {\n  content: "+"; }\n\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: "\\20AC"; }\n\n.glyphicon-minus:before {\n  content: "\\2212"; }\n\n.glyphicon-cloud:before {\n  content: "\\2601"; }\n\n.glyphicon-envelope:before {\n  content: "\\2709"; }\n\n.glyphicon-pencil:before {\n  content: "\\270F"; }\n\n.glyphicon-glass:before {\n  content: "\\E001"; }\n\n.glyphicon-music:before {\n  content: "\\E002"; }\n\n.glyphicon-search:before {\n  content: "\\E003"; }\n\n.glyphicon-heart:before {\n  content: "\\E005"; }\n\n.glyphicon-star:before {\n  content: "\\E006"; }\n\n.glyphicon-star-empty:before {\n  content: "\\E007"; }\n\n.glyphicon-user:before {\n  content: "\\E008"; }\n\n.glyphicon-film:before {\n  content: "\\E009"; }\n\n.glyphicon-th-large:before {\n  content: "\\E010"; }\n\n.glyphicon-th:before {\n  content: "\\E011"; }\n\n.glyphicon-th-list:before {\n  content: "\\E012"; }\n\n.glyphicon-ok:before {\n  content: "\\E013"; }\n\n.glyphicon-remove:before {\n  content: "\\E014"; }\n\n.glyphicon-zoom-in:before {\n  content: "\\E015"; }\n\n.glyphicon-zoom-out:before {\n  content: "\\E016"; }\n\n.glyphicon-off:before {\n  content: "\\E017"; }\n\n.glyphicon-signal:before {\n  content: "\\E018"; }\n\n.glyphicon-cog:before {\n  content: "\\E019"; }\n\n.glyphicon-trash:before {\n  content: "\\E020"; }\n\n.glyphicon-home:before {\n  content: "\\E021"; }\n\n.glyphicon-file:before {\n  content: "\\E022"; }\n\n.glyphicon-time:before {\n  content: "\\E023"; }\n\n.glyphicon-road:before {\n  content: "\\E024"; }\n\n.glyphicon-download-alt:before {\n  content: "\\E025"; }\n\n.glyphicon-download:before {\n  content: "\\E026"; }\n\n.glyphicon-upload:before {\n  content: "\\E027"; }\n\n.glyphicon-inbox:before {\n  content: "\\E028"; }\n\n.glyphicon-play-circle:before {\n  content: "\\E029"; }\n\n.glyphicon-repeat:before {\n  content: "\\E030"; }\n\n.glyphicon-refresh:before {\n  content: "\\E031"; }\n\n.glyphicon-list-alt:before {\n  content: "\\E032"; }\n\n.glyphicon-lock:before {\n  content: "\\E033"; }\n\n.glyphicon-flag:before {\n  content: "\\E034"; }\n\n.glyphicon-headphones:before {\n  content: "\\E035"; }\n\n.glyphicon-volume-off:before {\n  content: "\\E036"; }\n\n.glyphicon-volume-down:before {\n  content: "\\E037"; }\n\n.glyphicon-volume-up:before {\n  content: "\\E038"; }\n\n.glyphicon-qrcode:before {\n  content: "\\E039"; }\n\n.glyphicon-barcode:before {\n  content: "\\E040"; }\n\n.glyphicon-tag:before {\n  content: "\\E041"; }\n\n.glyphicon-tags:before {\n  content: "\\E042"; }\n\n.glyphicon-book:before {\n  content: "\\E043"; }\n\n.glyphicon-bookmark:before {\n  content: "\\E044"; }\n\n.glyphicon-print:before {\n  content: "\\E045"; }\n\n.glyphicon-camera:before {\n  content: "\\E046"; }\n\n.glyphicon-font:before {\n  content: "\\E047"; }\n\n.glyphicon-bold:before {\n  content: "\\E048"; }\n\n.glyphicon-italic:before {\n  content: "\\E049"; }\n\n.glyphicon-text-height:before {\n  content: "\\E050"; }\n\n.glyphicon-text-width:before {\n  content: "\\E051"; }\n\n.glyphicon-align-left:before {\n  content: "\\E052"; }\n\n.glyphicon-align-center:before {\n  content: "\\E053"; }\n\n.glyphicon-align-right:before {\n  content: "\\E054"; }\n\n.glyphicon-align-justify:before {\n  content: "\\E055"; }\n\n.glyphicon-list:before {\n  content: "\\E056"; }\n\n.glyphicon-indent-left:before {\n  content: "\\E057"; }\n\n.glyphicon-indent-right:before {\n  content: "\\E058"; }\n\n.glyphicon-facetime-video:before {\n  content: "\\E059"; }\n\n.glyphicon-picture:before {\n  content: "\\E060"; }\n\n.glyphicon-map-marker:before {\n  content: "\\E062"; }\n\n.glyphicon-adjust:before {\n  content: "\\E063"; }\n\n.glyphicon-tint:before {\n  content: "\\E064"; }\n\n.glyphicon-edit:before {\n  content: "\\E065"; }\n\n.glyphicon-share:before {\n  content: "\\E066"; }\n\n.glyphicon-check:before {\n  content: "\\E067"; }\n\n.glyphicon-move:before {\n  content: "\\E068"; }\n\n.glyphicon-step-backward:before {\n  content: "\\E069"; }\n\n.glyphicon-fast-backward:before {\n  content: "\\E070"; }\n\n.glyphicon-backward:before {\n  content: "\\E071"; }\n\n.glyphicon-play:before {\n  content: "\\E072"; }\n\n.glyphicon-pause:before {\n  content: "\\E073"; }\n\n.glyphicon-stop:before {\n  content: "\\E074"; }\n\n.glyphicon-forward:before {\n  content: "\\E075"; }\n\n.glyphicon-fast-forward:before {\n  content: "\\E076"; }\n\n.glyphicon-step-forward:before {\n  content: "\\E077"; }\n\n.glyphicon-eject:before {\n  content: "\\E078"; }\n\n.glyphicon-chevron-left:before {\n  content: "\\E079"; }\n\n.glyphicon-chevron-right:before {\n  content: "\\E080"; }\n\n.glyphicon-plus-sign:before {\n  content: "\\E081"; }\n\n.glyphicon-minus-sign:before {\n  content: "\\E082"; }\n\n.glyphicon-remove-sign:before {\n  content: "\\E083"; }\n\n.glyphicon-ok-sign:before {\n  content: "\\E084"; }\n\n.glyphicon-question-sign:before {\n  content: "\\E085"; }\n\n.glyphicon-info-sign:before {\n  content: "\\E086"; }\n\n.glyphicon-screenshot:before {\n  content: "\\E087"; }\n\n.glyphicon-remove-circle:before {\n  content: "\\E088"; }\n\n.glyphicon-ok-circle:before {\n  content: "\\E089"; }\n\n.glyphicon-ban-circle:before {\n  content: "\\E090"; }\n\n.glyphicon-arrow-left:before {\n  content: "\\E091"; }\n\n.glyphicon-arrow-right:before {\n  content: "\\E092"; }\n\n.glyphicon-arrow-up:before {\n  content: "\\E093"; }\n\n.glyphicon-arrow-down:before {\n  content: "\\E094"; }\n\n.glyphicon-share-alt:before {\n  content: "\\E095"; }\n\n.glyphicon-resize-full:before {\n  content: "\\E096"; }\n\n.glyphicon-resize-small:before {\n  content: "\\E097"; }\n\n.glyphicon-exclamation-sign:before {\n  content: "\\E101"; }\n\n.glyphicon-gift:before {\n  content: "\\E102"; }\n\n.glyphicon-leaf:before {\n  content: "\\E103"; }\n\n.glyphicon-fire:before {\n  content: "\\E104"; }\n\n.glyphicon-eye-open:before {\n  content: "\\E105"; }\n\n.glyphicon-eye-close:before {\n  content: "\\E106"; }\n\n.glyphicon-warning-sign:before {\n  content: "\\E107"; }\n\n.glyphicon-plane:before {\n  content: "\\E108"; }\n\n.glyphicon-calendar:before {\n  content: "\\E109"; }\n\n.glyphicon-random:before {\n  content: "\\E110"; }\n\n.glyphicon-comment:before {\n  content: "\\E111"; }\n\n.glyphicon-magnet:before {\n  content: "\\E112"; }\n\n.glyphicon-chevron-up:before {\n  content: "\\E113"; }\n\n.glyphicon-chevron-down:before {\n  content: "\\E114"; }\n\n.glyphicon-retweet:before {\n  content: "\\E115"; }\n\n.glyphicon-shopping-cart:before {\n  content: "\\E116"; }\n\n.glyphicon-folder-close:before {\n  content: "\\E117"; }\n\n.glyphicon-folder-open:before {\n  content: "\\E118"; }\n\n.glyphicon-resize-vertical:before {\n  content: "\\E119"; }\n\n.glyphicon-resize-horizontal:before {\n  content: "\\E120"; }\n\n.glyphicon-hdd:before {\n  content: "\\E121"; }\n\n.glyphicon-bullhorn:before {\n  content: "\\E122"; }\n\n.glyphicon-bell:before {\n  content: "\\E123"; }\n\n.glyphicon-certificate:before {\n  content: "\\E124"; }\n\n.glyphicon-thumbs-up:before {\n  content: "\\E125"; }\n\n.glyphicon-thumbs-down:before {\n  content: "\\E126"; }\n\n.glyphicon-hand-right:before {\n  content: "\\E127"; }\n\n.glyphicon-hand-left:before {\n  content: "\\E128"; }\n\n.glyphicon-hand-up:before {\n  content: "\\E129"; }\n\n.glyphicon-hand-down:before {\n  content: "\\E130"; }\n\n.glyphicon-circle-arrow-right:before {\n  content: "\\E131"; }\n\n.glyphicon-circle-arrow-left:before {\n  content: "\\E132"; }\n\n.glyphicon-circle-arrow-up:before {\n  content: "\\E133"; }\n\n.glyphicon-circle-arrow-down:before {\n  content: "\\E134"; }\n\n.glyphicon-globe:before {\n  content: "\\E135"; }\n\n.glyphicon-wrench:before {\n  content: "\\E136"; }\n\n.glyphicon-tasks:before {\n  content: "\\E137"; }\n\n.glyphicon-filter:before {\n  content: "\\E138"; }\n\n.glyphicon-briefcase:before {\n  content: "\\E139"; }\n\n.glyphicon-fullscreen:before {\n  content: "\\E140"; }\n\n.glyphicon-dashboard:before {\n  content: "\\E141"; }\n\n.glyphicon-paperclip:before {\n  content: "\\E142"; }\n\n.glyphicon-heart-empty:before {\n  content: "\\E143"; }\n\n.glyphicon-link:before {\n  content: "\\E144"; }\n\n.glyphicon-phone:before {\n  content: "\\E145"; }\n\n.glyphicon-pushpin:before {\n  content: "\\E146"; }\n\n.glyphicon-usd:before {\n  content: "\\E148"; }\n\n.glyphicon-gbp:before {\n  content: "\\E149"; }\n\n.glyphicon-sort:before {\n  content: "\\E150"; }\n\n.glyphicon-sort-by-alphabet:before {\n  content: "\\E151"; }\n\n.glyphicon-sort-by-alphabet-alt:before {\n  content: "\\E152"; }\n\n.glyphicon-sort-by-order:before {\n  content: "\\E153"; }\n\n.glyphicon-sort-by-order-alt:before {\n  content: "\\E154"; }\n\n.glyphicon-sort-by-attributes:before {\n  content: "\\E155"; }\n\n.glyphicon-sort-by-attributes-alt:before {\n  content: "\\E156"; }\n\n.glyphicon-unchecked:before {\n  content: "\\E157"; }\n\n.glyphicon-expand:before {\n  content: "\\E158"; }\n\n.glyphicon-collapse-down:before {\n  content: "\\E159"; }\n\n.glyphicon-collapse-up:before {\n  content: "\\E160"; }\n\n.glyphicon-log-in:before {\n  content: "\\E161"; }\n\n.glyphicon-flash:before {\n  content: "\\E162"; }\n\n.glyphicon-log-out:before {\n  content: "\\E163"; }\n\n.glyphicon-new-window:before {\n  content: "\\E164"; }\n\n.glyphicon-record:before {\n  content: "\\E165"; }\n\n.glyphicon-save:before {\n  content: "\\E166"; }\n\n.glyphicon-open:before {\n  content: "\\E167"; }\n\n.glyphicon-saved:before {\n  content: "\\E168"; }\n\n.glyphicon-import:before {\n  content: "\\E169"; }\n\n.glyphicon-export:before {\n  content: "\\E170"; }\n\n.glyphicon-send:before {\n  content: "\\E171"; }\n\n.glyphicon-floppy-disk:before {\n  content: "\\E172"; }\n\n.glyphicon-floppy-saved:before {\n  content: "\\E173"; }\n\n.glyphicon-floppy-remove:before {\n  content: "\\E174"; }\n\n.glyphicon-floppy-save:before {\n  content: "\\E175"; }\n\n.glyphicon-floppy-open:before {\n  content: "\\E176"; }\n\n.glyphicon-credit-card:before {\n  content: "\\E177"; }\n\n.glyphicon-transfer:before {\n  content: "\\E178"; }\n\n.glyphicon-cutlery:before {\n  content: "\\E179"; }\n\n.glyphicon-header:before {\n  content: "\\E180"; }\n\n.glyphicon-compressed:before {\n  content: "\\E181"; }\n\n.glyphicon-earphone:before {\n  content: "\\E182"; }\n\n.glyphicon-phone-alt:before {\n  content: "\\E183"; }\n\n.glyphicon-tower:before {\n  content: "\\E184"; }\n\n.glyphicon-stats:before {\n  content: "\\E185"; }\n\n.glyphicon-sd-video:before {\n  content: "\\E186"; }\n\n.glyphicon-hd-video:before {\n  content: "\\E187"; }\n\n.glyphicon-subtitles:before {\n  content: "\\E188"; }\n\n.glyphicon-sound-stereo:before {\n  content: "\\E189"; }\n\n.glyphicon-sound-dolby:before {\n  content: "\\E190"; }\n\n.glyphicon-sound-5-1:before {\n  content: "\\E191"; }\n\n.glyphicon-sound-6-1:before {\n  content: "\\E192"; }\n\n.glyphicon-sound-7-1:before {\n  content: "\\E193"; }\n\n.glyphicon-copyright-mark:before {\n  content: "\\E194"; }\n\n.glyphicon-registration-mark:before {\n  content: "\\E195"; }\n\n.glyphicon-cloud-download:before {\n  content: "\\E197"; }\n\n.glyphicon-cloud-upload:before {\n  content: "\\E198"; }\n\n.glyphicon-tree-conifer:before {\n  content: "\\E199"; }\n\n.glyphicon-tree-deciduous:before {\n  content: "\\E200"; }\n\n.glyphicon-cd:before {\n  content: "\\E201"; }\n\n.glyphicon-save-file:before {\n  content: "\\E202"; }\n\n.glyphicon-open-file:before {\n  content: "\\E203"; }\n\n.glyphicon-level-up:before {\n  content: "\\E204"; }\n\n.glyphicon-copy:before {\n  content: "\\E205"; }\n\n.glyphicon-paste:before {\n  content: "\\E206"; }\n\n.glyphicon-alert:before {\n  content: "\\E209"; }\n\n.glyphicon-equalizer:before {\n  content: "\\E210"; }\n\n.glyphicon-king:before {\n  content: "\\E211"; }\n\n.glyphicon-queen:before {\n  content: "\\E212"; }\n\n.glyphicon-pawn:before {\n  content: "\\E213"; }\n\n.glyphicon-bishop:before {\n  content: "\\E214"; }\n\n.glyphicon-knight:before {\n  content: "\\E215"; }\n\n.glyphicon-baby-formula:before {\n  content: "\\E216"; }\n\n.glyphicon-tent:before {\n  content: "\\26FA"; }\n\n.glyphicon-blackboard:before {\n  content: "\\E218"; }\n\n.glyphicon-bed:before {\n  content: "\\E219"; }\n\n.glyphicon-apple:before {\n  content: "\\F8FF"; }\n\n.glyphicon-erase:before {\n  content: "\\E221"; }\n\n.glyphicon-hourglass:before {\n  content: "\\231B"; }\n\n.glyphicon-lamp:before {\n  content: "\\E223"; }\n\n.glyphicon-duplicate:before {\n  content: "\\E224"; }\n\n.glyphicon-piggy-bank:before {\n  content: "\\E225"; }\n\n.glyphicon-scissors:before {\n  content: "\\E226"; }\n\n.glyphicon-bitcoin:before {\n  content: "\\E227"; }\n\n.glyphicon-btc:before {\n  content: "\\E227"; }\n\n.glyphicon-xbt:before {\n  content: "\\E227"; }\n\n.glyphicon-yen:before {\n  content: "\\A5"; }\n\n.glyphicon-jpy:before {\n  content: "\\A5"; }\n\n.glyphicon-ruble:before {\n  content: "\\20BD"; }\n\n.glyphicon-rub:before {\n  content: "\\20BD"; }\n\n.glyphicon-scale:before {\n  content: "\\E230"; }\n\n.glyphicon-ice-lolly:before {\n  content: "\\E231"; }\n\n.glyphicon-ice-lolly-tasted:before {\n  content: "\\E232"; }\n\n.glyphicon-education:before {\n  content: "\\E233"; }\n\n.glyphicon-option-horizontal:before {\n  content: "\\E234"; }\n\n.glyphicon-option-vertical:before {\n  content: "\\E235"; }\n\n.glyphicon-menu-hamburger:before {\n  content: "\\E236"; }\n\n.glyphicon-modal-window:before {\n  content: "\\E237"; }\n\n.glyphicon-oil:before {\n  content: "\\E238"; }\n\n.glyphicon-grain:before {\n  content: "\\E239"; }\n\n.glyphicon-sunglasses:before {\n  content: "\\E240"; }\n\n.glyphicon-text-size:before {\n  content: "\\E241"; }\n\n.glyphicon-text-color:before {\n  content: "\\E242"; }\n\n.glyphicon-text-background:before {\n  content: "\\E243"; }\n\n.glyphicon-object-align-top:before {\n  content: "\\E244"; }\n\n.glyphicon-object-align-bottom:before {\n  content: "\\E245"; }\n\n.glyphicon-object-align-horizontal:before {\n  content: "\\E246"; }\n\n.glyphicon-object-align-left:before {\n  content: "\\E247"; }\n\n.glyphicon-object-align-vertical:before {\n  content: "\\E248"; }\n\n.glyphicon-object-align-right:before {\n  content: "\\E249"; }\n\n.glyphicon-triangle-right:before {\n  content: "\\E250"; }\n\n.glyphicon-triangle-left:before {\n  content: "\\E251"; }\n\n.glyphicon-triangle-bottom:before {\n  content: "\\E252"; }\n\n.glyphicon-triangle-top:before {\n  content: "\\E253"; }\n\n.glyphicon-console:before {\n  content: "\\E254"; }\n\n.glyphicon-superscript:before {\n  content: "\\E255"; }\n\n.glyphicon-subscript:before {\n  content: "\\E256"; }\n\n.glyphicon-menu-left:before {\n  content: "\\E257"; }\n\n.glyphicon-menu-right:before {\n  content: "\\E258"; }\n\n.glyphicon-menu-down:before {\n  content: "\\E259"; }\n\n.glyphicon-menu-up:before {\n  content: "\\E260"; }\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\na {\n  color: #337ab7;\n  text-decoration: none; }\n  a:hover, a:focus {\n    color: #23527c;\n    text-decoration: underline; }\n  a:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  vertical-align: middle; }\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.img-rounded {\n  border-radius: 6px; }\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.img-circle {\n  border-radius: 50%; }\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n[role="button"] {\n  cursor: pointer; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n  h1 small,\n  h1 .small, h2 small,\n  h2 .small, h3 small,\n  h3 .small, h4 small,\n  h4 .small, h5 small,\n  h5 .small, h6 small,\n  h6 .small,\n  .h1 small,\n  .h1 .small, .h2 small,\n  .h2 .small, .h3 small,\n  .h3 .small, .h4 small,\n  .h4 .small, .h5 small,\n  .h5 .small, .h6 small,\n  .h6 .small {\n    font-weight: normal;\n    line-height: 1;\n    color: #777777; }\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: 20px;\n  margin-bottom: 10px; }\n  h1 small,\n  h1 .small, .h1 small,\n  .h1 .small,\n  h2 small,\n  h2 .small, .h2 small,\n  .h2 .small,\n  h3 small,\n  h3 .small, .h3 small,\n  .h3 .small {\n    font-size: 65%; }\n\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  h4 small,\n  h4 .small, .h4 small,\n  .h4 .small,\n  h5 small,\n  h5 .small, .h5 small,\n  .h5 .small,\n  h6 small,\n  h6 .small, .h6 small,\n  .h6 .small {\n    font-size: 75%; }\n\nh1, .h1 {\n  font-size: 36px; }\n\nh2, .h2 {\n  font-size: 30px; }\n\nh3, .h3 {\n  font-size: 24px; }\n\nh4, .h4 {\n  font-size: 18px; }\n\nh5, .h5 {\n  font-size: 14px; }\n\nh6, .h6 {\n  font-size: 12px; }\n\np {\n  margin: 0 0 10px; }\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4; }\n  @media (min-width: 768px) {\n    .lead {\n      font-size: 21px; } }\n\nsmall,\n.small {\n  font-size: 85%; }\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase, .initialism {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.text-muted {\n  color: #777777; }\n\n.text-primary {\n  color: #337ab7; }\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090; }\n\n.text-success {\n  color: #3c763d; }\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c; }\n\n.text-info {\n  color: #31708f; }\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269; }\n\n.text-warning {\n  color: #8a6d3b; }\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c; }\n\n.text-danger {\n  color: #a94442; }\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534; }\n\n.bg-primary {\n  color: #fff; }\n\n.bg-primary {\n  background-color: #337ab7; }\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090; }\n\n.bg-success {\n  background-color: #dff0d8; }\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3; }\n\n.bg-info {\n  background-color: #d9edf7; }\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee; }\n\n.bg-warning {\n  background-color: #fcf8e3; }\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5; }\n\n.bg-danger {\n  background-color: #f2dede; }\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9; }\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee; }\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px; }\n  ul ul,\n  ul ol,\n  ol ul,\n  ol ol {\n    margin-bottom: 0; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px; }\n  .list-inline > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px; }\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px; }\n\ndt,\ndd {\n  line-height: 1.42857; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-left: 0; }\n\n.dl-horizontal dd:before, .dl-horizontal dd:after {\n  content: " ";\n  display: table; }\n\n.dl-horizontal dd:after {\n  clear: both; }\n\n@media (min-width: 992px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .dl-horizontal dd {\n    margin-left: 180px; } }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777; }\n\n.initialism {\n  font-size: 90%; }\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee; }\n  blockquote p:last-child,\n  blockquote ul:last-child,\n  blockquote ol:last-child {\n    margin-bottom: 0; }\n  blockquote footer,\n  blockquote small,\n  blockquote .small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857;\n    color: #777777; }\n    blockquote footer:before,\n    blockquote small:before,\n    blockquote .small:before {\n      content: \'\\2014   \\A0\'; }\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right; }\n  .blockquote-reverse footer:before,\n  .blockquote-reverse small:before,\n  .blockquote-reverse .small:before,\n  blockquote.pull-right footer:before,\n  blockquote.pull-right small:before,\n  blockquote.pull-right .small:before {\n    content: \'\'; }\n  .blockquote-reverse footer:after,\n  .blockquote-reverse small:after,\n  .blockquote-reverse .small:after,\n  blockquote.pull-right footer:after,\n  blockquote.pull-right small:after,\n  blockquote.pull-right .small:after {\n    content: \'\\A0   \\2014\'; }\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, "Courier New", monospace; }\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px; }\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25); }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none; }\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container:before, .container:after {\n    content: " ";\n    display: table; }\n  .container:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .container {\n      width: 750px; } }\n  @media (min-width: 992px) {\n    .container {\n      width: 970px; } }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1170px; } }\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container-fluid:before, .container-fluid:after {\n    content: " ";\n    display: table; }\n  .container-fluid:after {\n    clear: both; }\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .row:before, .row:after {\n    content: " ";\n    display: table; }\n  .row:after {\n    clear: both; }\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left; }\n\nth {\n  text-align: left; }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px; }\n  .table > thead > tr > th,\n  .table > thead > tr > td,\n  .table > tbody > tr > th,\n  .table > tbody > tr > td,\n  .table > tfoot > tr > th,\n  .table > tfoot > tr > td {\n    padding: 8px;\n    line-height: 1.42857;\n    vertical-align: top;\n    border-top: 1px solid #ddd; }\n  .table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ddd; }\n  .table > caption + thead > tr:first-child > th,\n  .table > caption + thead > tr:first-child > td,\n  .table > colgroup + thead > tr:first-child > th,\n  .table > colgroup + thead > tr:first-child > td,\n  .table > thead:first-child > tr:first-child > th,\n  .table > thead:first-child > tr:first-child > td {\n    border-top: 0; }\n  .table > tbody + tbody {\n    border-top: 2px solid #ddd; }\n  .table .table {\n    background-color: #fff; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px; }\n\n.table-bordered {\n  border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > th,\n  .table-bordered > tbody > tr > td,\n  .table-bordered > tfoot > tr > th,\n  .table-bordered > tfoot > tr > td {\n    border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td {\n    border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5; }\n\ntable col[class*="col-"] {\n  position: static;\n  float: none;\n  display: table-column; }\n\ntable td[class*="col-"],\ntable th[class*="col-"] {\n  position: static;\n  float: none;\n  display: table-cell; }\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5; }\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8; }\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8; }\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6; }\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7; }\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3; }\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3; }\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc; }\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede; }\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc; }\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; }\n  @media screen and (max-width: 767px) {\n    .table-responsive {\n      width: 100%;\n      margin-bottom: 15px;\n      overflow-y: hidden;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      border: 1px solid #ddd; }\n      .table-responsive > .table {\n        margin-bottom: 0; }\n        .table-responsive > .table > thead > tr > th,\n        .table-responsive > .table > thead > tr > td,\n        .table-responsive > .table > tbody > tr > th,\n        .table-responsive > .table > tbody > tr > td,\n        .table-responsive > .table > tfoot > tr > th,\n        .table-responsive > .table > tfoot > tr > td {\n          white-space: nowrap; }\n      .table-responsive > .table-bordered {\n        border: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:first-child,\n        .table-responsive > .table-bordered > thead > tr > td:first-child,\n        .table-responsive > .table-bordered > tbody > tr > th:first-child,\n        .table-responsive > .table-bordered > tbody > tr > td:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n          border-left: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:last-child,\n        .table-responsive > .table-bordered > thead > tr > td:last-child,\n        .table-responsive > .table-bordered > tbody > tr > th:last-child,\n        .table-responsive > .table-bordered > tbody > tr > td:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n          border-right: 0; }\n        .table-responsive > .table-bordered > tbody > tr:last-child > th,\n        .table-responsive > .table-bordered > tbody > tr:last-child > td,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n          border-bottom: 0; } }\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold; }\n\ninput[type="search"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\ninput[type="radio"],\ninput[type="checkbox"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal; }\n\ninput[type="file"] {\n  display: block; }\n\ninput[type="range"] {\n  display: block;\n  width: 100%; }\n\nselect[multiple],\nselect[size] {\n  height: auto; }\n\ninput[type="file"]:focus,\ninput[type="radio"]:focus,\ninput[type="checkbox"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n  .form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n  .form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #999; }\n  .form-control::-webkit-input-placeholder {\n    color: #999; }\n  .form-control::-ms-expand {\n    border: 0;\n    background-color: transparent; }\n  .form-control[disabled], .form-control[readonly],\n  fieldset[disabled] .form-control {\n    background-color: #eeeeee;\n    opacity: 1; }\n  .form-control[disabled],\n  fieldset[disabled] .form-control {\n    cursor: not-allowed; }\n\ntextarea.form-control {\n  height: auto; }\n\ninput[type="search"] {\n  -webkit-appearance: none; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type="date"].form-control,\n  input[type="time"].form-control,\n  input[type="datetime-local"].form-control,\n  input[type="month"].form-control {\n    line-height: 34px; }\n  input[type="date"].input-sm, .input-group-sm > input[type="date"].form-control,\n  .input-group-sm > input[type="date"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type="date"].btn,\n  .input-group-sm input[type="date"],\n  input[type="time"].input-sm,\n  .input-group-sm > input[type="time"].form-control,\n  .input-group-sm > input[type="time"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type="time"].btn,\n  .input-group-sm\n  input[type="time"],\n  input[type="datetime-local"].input-sm,\n  .input-group-sm > input[type="datetime-local"].form-control,\n  .input-group-sm > input[type="datetime-local"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type="datetime-local"].btn,\n  .input-group-sm\n  input[type="datetime-local"],\n  input[type="month"].input-sm,\n  .input-group-sm > input[type="month"].form-control,\n  .input-group-sm > input[type="month"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type="month"].btn,\n  .input-group-sm\n  input[type="month"] {\n    line-height: 30px; }\n  input[type="date"].input-lg, .input-group-lg > input[type="date"].form-control,\n  .input-group-lg > input[type="date"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type="date"].btn,\n  .input-group-lg input[type="date"],\n  input[type="time"].input-lg,\n  .input-group-lg > input[type="time"].form-control,\n  .input-group-lg > input[type="time"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type="time"].btn,\n  .input-group-lg\n  input[type="time"],\n  input[type="datetime-local"].input-lg,\n  .input-group-lg > input[type="datetime-local"].form-control,\n  .input-group-lg > input[type="datetime-local"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type="datetime-local"].btn,\n  .input-group-lg\n  input[type="datetime-local"],\n  input[type="month"].input-lg,\n  .input-group-lg > input[type="month"].form-control,\n  .input-group-lg > input[type="month"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type="month"].btn,\n  .input-group-lg\n  input[type="month"] {\n    line-height: 46px; } }\n\n.form-group {\n  margin-bottom: 15px; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  .radio label,\n  .checkbox label {\n    min-height: 20px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n\n.radio input[type="radio"],\n.radio-inline input[type="radio"],\n.checkbox input[type="checkbox"],\n.checkbox-inline input[type="checkbox"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; }\n\ninput[type="radio"][disabled], input[type="radio"].disabled,\nfieldset[disabled] input[type="radio"],\ninput[type="checkbox"][disabled],\ninput[type="checkbox"].disabled,\nfieldset[disabled]\ninput[type="checkbox"] {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed; }\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed; }\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px; }\n  .form-control-static.input-lg, .input-group-lg > .form-control-static.form-control,\n  .input-group-lg > .form-control-static.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-static.btn, .form-control-static.input-sm, .input-group-sm > .form-control-static.form-control,\n  .input-group-sm > .form-control-static.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-static.btn {\n    padding-left: 0;\n    padding-right: 0; }\n\n.input-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\nselect.input-sm, .input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 30px;\n  line-height: 30px; }\n\ntextarea.input-sm, .input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px; }\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto; }\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.input-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\nselect.input-lg, .input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 46px;\n  line-height: 46px; }\n\ntextarea.input-lg, .input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px; }\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto; }\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.has-feedback {\n  position: relative; }\n  .has-feedback .form-control {\n    padding-right: 42.5px; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none; }\n\n.input-lg + .form-control-feedback, .input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px; }\n\n.input-sm + .form-control-feedback, .input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px; }\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d; }\n\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-success .form-control:focus {\n    border-color: #2b542c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168; }\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8; }\n\n.has-success .form-control-feedback {\n  color: #3c763d; }\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b; }\n\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-warning .form-control:focus {\n    border-color: #66512c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b; }\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3; }\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b; }\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442; }\n\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-error .form-control:focus {\n    border-color: #843534;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483; }\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede; }\n\n.has-error .form-control-feedback {\n  color: #a94442; }\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px; }\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0; }\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type="radio"],\n  .form-inline .checkbox input[type="checkbox"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px; }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px; }\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .form-horizontal .form-group:before, .form-horizontal .form-group:after {\n    content: " ";\n    display: table; }\n  .form-horizontal .form-group:after {\n    clear: both; }\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px; } }\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px; }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px; } }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px; } }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:hover, .btn:focus, .btn.focus {\n    color: #333;\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    outline: 0;\n    background-image: none;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn.disabled, .btn[disabled],\n  fieldset[disabled] .btn {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-default:focus, .btn-default.focus {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #8c8c8c; }\n  .btn-default:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n    .btn-default:active:hover, .btn-default:active:focus, .btn-default:active.focus, .btn-default.active:hover, .btn-default.active:focus, .btn-default.active.focus,\n    .open > .btn-default.dropdown-toggle:hover,\n    .open > .btn-default.dropdown-toggle:focus,\n    .open > .btn-default.dropdown-toggle.focus {\n      color: #333;\n      background-color: #d4d4d4;\n      border-color: #8c8c8c; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    background-image: none; }\n  .btn-default.disabled:hover, .btn-default.disabled:focus, .btn-default.disabled.focus, .btn-default[disabled]:hover, .btn-default[disabled]:focus, .btn-default[disabled].focus,\n  fieldset[disabled] .btn-default:hover,\n  fieldset[disabled] .btn-default:focus,\n  fieldset[disabled] .btn-default.focus {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-default .badge {\n    color: #fff;\n    background-color: #333; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #204d74;\n      border-color: #122b40; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    background-image: none; }\n  .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus {\n    background-color: #337ab7;\n    border-color: #2e6da4; }\n  .btn-primary .badge {\n    color: #337ab7;\n    background-color: #fff; }\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #398439;\n      border-color: #255625; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    background-image: none; }\n  .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus {\n    background-color: #5cb85c;\n    border-color: #4cae4c; }\n  .btn-success .badge {\n    color: #5cb85c;\n    background-color: #fff; }\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #1b6d85; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #269abc;\n      border-color: #1b6d85; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    background-image: none; }\n  .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus {\n    background-color: #5bc0de;\n    border-color: #46b8da; }\n  .btn-info .badge {\n    color: #5bc0de;\n    background-color: #fff; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #985f0d; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #985f0d; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    background-image: none; }\n  .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus {\n    background-color: #f0ad4e;\n    border-color: #eea236; }\n  .btn-warning .badge {\n    color: #f0ad4e;\n    background-color: #fff; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #761c19; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #ac2925;\n      border-color: #761c19; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    background-image: none; }\n  .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus {\n    background-color: #d9534f;\n    border-color: #d43f3a; }\n  .btn-danger .badge {\n    color: #d9534f;\n    background-color: #fff; }\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link[disabled],\n  fieldset[disabled] .btn-link {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  .btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover, .btn-link:focus {\n    color: #23527c;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link[disabled]:hover, .btn-link[disabled]:focus,\n  fieldset[disabled] .btn-link:hover,\n  fieldset[disabled] .btn-link:focus {\n    color: #777777;\n    text-decoration: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-xs, .btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type="submit"].btn-block,\ninput[type="reset"].btn-block,\ninput[type="button"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\ntr.collapse.in {\n  display: table-row; }\n\ntbody.collapse.in {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease; }\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box; }\n  .dropdown-menu.pull-right {\n    right: 0;\n    left: auto; }\n  .dropdown-menu .divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857;\n    color: #333333;\n    white-space: nowrap; }\n\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5; }\n\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7; }\n\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  color: #777777; }\n\n.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0; }\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #777777;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: ""; }\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n\n@media (min-width: 992px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto; }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto; } }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    float: left; }\n    .btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:hover,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.btn-toolbar {\n  margin-left: -5px; }\n  .btn-toolbar:before, .btn-toolbar:after {\n    content: " ";\n    display: table; }\n  .btn-toolbar:after {\n    clear: both; }\n  .btn-toolbar .btn,\n  .btn-toolbar .btn-group,\n  .btn-toolbar .input-group {\n    float: left; }\n  .btn-toolbar > .btn,\n  .btn-toolbar > .btn-group,\n  .btn-toolbar > .input-group {\n    margin-left: 5px; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0; }\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-group.open .dropdown-toggle.btn-link {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.btn .caret {\n  margin-left: 0; }\n\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0; }\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px; }\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n\n.btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after {\n  content: " ";\n  display: table; }\n\n.btn-group-vertical > .btn-group:after {\n  clear: both; }\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none; }\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate; }\n  .btn-group-justified > .btn,\n  .btn-group-justified > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%; }\n  .btn-group-justified > .btn-group .btn {\n    width: 100%; }\n  .btn-group-justified > .btn-group .dropdown-menu {\n    left: auto; }\n\n[data-toggle="buttons"] > .btn input[type="radio"],\n[data-toggle="buttons"] > .btn input[type="checkbox"],\n[data-toggle="buttons"] > .btn-group > .btn input[type="radio"],\n[data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group[class*="col-"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  .input-group-addon.input-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 5px 10px;\n    font-size: 12px;\n    border-radius: 3px; }\n  .input-group-addon.input-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 10px 16px;\n    font-size: 18px;\n    border-radius: 6px; }\n  .input-group-addon input[type="radio"],\n  .input-group-addon input[type="checkbox"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:hover, .input-group-btn > .btn:focus, .input-group-btn > .btn:active {\n      z-index: 2; }\n  .input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none; }\n  .nav:before, .nav:after {\n    content: " ";\n    display: table; }\n  .nav:after {\n    clear: both; }\n  .nav > li {\n    position: relative;\n    display: block; }\n    .nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n      .nav > li > a:hover, .nav > li > a:focus {\n        text-decoration: none;\n        background-color: #eeeeee; }\n    .nav > li.disabled > a {\n      color: #777777; }\n      .nav > li.disabled > a:hover, .nav > li.disabled > a:focus {\n        color: #777777;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: not-allowed; }\n  .nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n    background-color: #eeeeee;\n    border-color: #337ab7; }\n  .nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .nav > li > a > img {\n    max-width: none; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs > li {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0; }\n      .nav-tabs > li > a:hover {\n        border-color: #eeeeee #eeeeee #ddd; }\n    .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n      color: #555555;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n      cursor: default; }\n\n.nav-pills > li {\n  float: left; }\n  .nav-pills > li > a {\n    border-radius: 4px; }\n  .nav-pills > li + li {\n    margin-left: 2px; }\n  .nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #337ab7; }\n\n.nav-stacked > li {\n  float: none; }\n  .nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0; }\n\n.nav-justified, .nav-tabs.nav-justified {\n  width: 100%; }\n  .nav-justified > li, .nav-tabs.nav-justified > li {\n    float: none; }\n    .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px; }\n  .nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto; }\n  @media (min-width: 768px) {\n    .nav-justified > li, .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%; }\n      .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0; } }\n\n.nav-tabs-justified, .nav-tabs.nav-justified {\n  border-bottom: 0; }\n  .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px; }\n  .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ddd; }\n  @media (min-width: 768px) {\n    .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ddd;\n      border-radius: 4px 4px 0 0; }\n    .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n    .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n    .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff; } }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent; }\n  .navbar:before, .navbar:after {\n    content: " ";\n    display: table; }\n  .navbar:after {\n    clear: both; }\n  @media (min-width: 992px) {\n    .navbar {\n      border-radius: 4px; } }\n\n.navbar-header:before, .navbar-header:after {\n  content: " ";\n  display: table; }\n\n.navbar-header:after {\n  clear: both; }\n\n@media (min-width: 992px) {\n  .navbar-header {\n    float: left; } }\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch; }\n  .navbar-collapse:before, .navbar-collapse:after {\n    content: " ";\n    display: table; }\n  .navbar-collapse:after {\n    clear: both; }\n  .navbar-collapse.in {\n    overflow-y: auto; }\n  @media (min-width: 992px) {\n    .navbar-collapse {\n      width: auto;\n      border-top: 0;\n      box-shadow: none; }\n      .navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important; }\n      .navbar-collapse.in {\n        overflow-y: visible; }\n      .navbar-fixed-top .navbar-collapse,\n      .navbar-static-top .navbar-collapse,\n      .navbar-fixed-bottom .navbar-collapse {\n        padding-left: 0;\n        padding-right: 0; } }\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px; }\n  @media (max-device-width: 480px) and (orientation: landscape) {\n    .navbar-fixed-top .navbar-collapse,\n    .navbar-fixed-bottom .navbar-collapse {\n      max-height: 200px; } }\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px; }\n  @media (min-width: 992px) {\n    .container > .navbar-header,\n    .container > .navbar-collapse,\n    .container-fluid > .navbar-header,\n    .container-fluid > .navbar-collapse {\n      margin-right: 0;\n      margin-left: 0; } }\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px; }\n  @media (min-width: 992px) {\n    .navbar-static-top {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 992px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px; }\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0; }\n\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px; }\n  .navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n  @media (min-width: 992px) {\n    .navbar > .container .navbar-brand,\n    .navbar > .container-fluid .navbar-brand {\n      margin-left: -15px; } }\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .navbar-toggle:focus {\n    outline: 0; }\n  .navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px; }\n  .navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px; }\n  @media (min-width: 992px) {\n    .navbar-toggle {\n      display: none; } }\n\n.navbar-nav {\n  margin: 7.5px -15px; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 20px; }\n  @media (max-width: 991px) {\n    .navbar-nav .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none; }\n      .navbar-nav .open .dropdown-menu > li > a,\n      .navbar-nav .open .dropdown-menu .dropdown-header {\n        padding: 5px 15px 5px 25px; }\n      .navbar-nav .open .dropdown-menu > li > a {\n        line-height: 20px; }\n        .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus {\n          background-image: none; } }\n  @media (min-width: 992px) {\n    .navbar-nav {\n      float: left;\n      margin: 0; }\n      .navbar-nav > li {\n        float: left; }\n        .navbar-nav > li > a {\n          padding-top: 15px;\n          padding-bottom: 15px; } }\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  @media (min-width: 768px) {\n    .navbar-form .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .navbar-form .form-control-static {\n      display: inline-block; }\n    .navbar-form .input-group {\n      display: inline-table;\n      vertical-align: middle; }\n      .navbar-form .input-group .input-group-addon,\n      .navbar-form .input-group .input-group-btn,\n      .navbar-form .input-group .form-control {\n        width: auto; }\n    .navbar-form .input-group > .form-control {\n      width: 100%; }\n    .navbar-form .control-label {\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .radio,\n    .navbar-form .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle; }\n      .navbar-form .radio label,\n      .navbar-form .checkbox label {\n        padding-left: 0; }\n    .navbar-form .radio input[type="radio"],\n    .navbar-form .checkbox input[type="checkbox"] {\n      position: relative;\n      margin-left: 0; }\n    .navbar-form .has-feedback .form-control-feedback {\n      top: 0; } }\n  @media (max-width: 991px) {\n    .navbar-form .form-group {\n      margin-bottom: 5px; }\n      .navbar-form .form-group:last-child {\n        margin-bottom: 0; } }\n  @media (min-width: 992px) {\n    .navbar-form {\n      width: auto;\n      border: 0;\n      margin-left: 0;\n      margin-right: 0;\n      padding-top: 0;\n      padding-bottom: 0;\n      -webkit-box-shadow: none;\n      box-shadow: none; } }\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  .navbar-btn.btn-sm, .btn-group-sm > .navbar-btn.btn {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .navbar-btn.btn-xs, .btn-group-xs > .navbar-btn.btn {\n    margin-top: 14px;\n    margin-bottom: 14px; }\n\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n  @media (min-width: 992px) {\n    .navbar-text {\n      float: left;\n      margin-left: 15px;\n      margin-right: 15px; } }\n\n@media (min-width: 992px) {\n  .navbar-left {\n    float: left !important; }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px; }\n    .navbar-right ~ .navbar-right {\n      margin-right: 0; } }\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7; }\n  .navbar-default .navbar-brand {\n    color: #777; }\n    .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n      color: #5e5e5e;\n      background-color: transparent; }\n  .navbar-default .navbar-text {\n    color: #777; }\n  .navbar-default .navbar-nav > li > a {\n    color: #777; }\n    .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n      color: #333;\n      background-color: transparent; }\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent; }\n  .navbar-default .navbar-toggle {\n    border-color: #ddd; }\n    .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: #ddd; }\n    .navbar-default .navbar-toggle .icon-bar {\n      background-color: #888; }\n  .navbar-default .navbar-collapse,\n  .navbar-default .navbar-form {\n    border-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    background-color: #e7e7e7;\n    color: #555; }\n  @media (max-width: 991px) {\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n      color: #777; }\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #333;\n        background-color: transparent; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #555;\n      background-color: #e7e7e7; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #ccc;\n      background-color: transparent; } }\n  .navbar-default .navbar-link {\n    color: #777; }\n    .navbar-default .navbar-link:hover {\n      color: #333; }\n  .navbar-default .btn-link {\n    color: #777; }\n    .navbar-default .btn-link:hover, .navbar-default .btn-link:focus {\n      color: #333; }\n    .navbar-default .btn-link[disabled]:hover, .navbar-default .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-default .btn-link:hover,\n    fieldset[disabled] .navbar-default .btn-link:focus {\n      color: #ccc; }\n\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909; }\n  .navbar-inverse .navbar-brand {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-text {\n    color: #9d9d9d; }\n  .navbar-inverse .navbar-nav > li > a {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #090909; }\n  .navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus {\n    color: #444;\n    background-color: transparent; }\n  .navbar-inverse .navbar-toggle {\n    border-color: #333; }\n    .navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus {\n      background-color: #333; }\n    .navbar-inverse .navbar-toggle .icon-bar {\n      background-color: #fff; }\n  .navbar-inverse .navbar-collapse,\n  .navbar-inverse .navbar-form {\n    border-color: #101010; }\n  .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {\n    background-color: #090909;\n    color: #fff; }\n  @media (max-width: 991px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n      border-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n      color: #9d9d9d; }\n      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #fff;\n        background-color: transparent; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #444;\n      background-color: transparent; } }\n  .navbar-inverse .navbar-link {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-link:hover {\n      color: #fff; }\n  .navbar-inverse .btn-link {\n    color: #9d9d9d; }\n    .navbar-inverse .btn-link:hover, .navbar-inverse .btn-link:focus {\n      color: #fff; }\n    .navbar-inverse .btn-link[disabled]:hover, .navbar-inverse .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-inverse .btn-link:hover,\n    fieldset[disabled] .navbar-inverse .btn-link:focus {\n      color: #444; }\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px; }\n  .breadcrumb > li {\n    display: inline-block; }\n    .breadcrumb > li + li:before {\n      content: "/\\A0";\n      padding: 0 5px;\n      color: #ccc; }\n  .breadcrumb > .active {\n    color: #777777; }\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px; }\n  .pagination > li {\n    display: inline; }\n    .pagination > li > a,\n    .pagination > li > span {\n      position: relative;\n      float: left;\n      padding: 6px 12px;\n      line-height: 1.42857;\n      text-decoration: none;\n      color: #337ab7;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      margin-left: -1px; }\n    .pagination > li:first-child > a,\n    .pagination > li:first-child > span {\n      margin-left: 0;\n      border-bottom-left-radius: 4px;\n      border-top-left-radius: 4px; }\n    .pagination > li:last-child > a,\n    .pagination > li:last-child > span {\n      border-bottom-right-radius: 4px;\n      border-top-right-radius: 4px; }\n  .pagination > li > a:hover, .pagination > li > a:focus,\n  .pagination > li > span:hover,\n  .pagination > li > span:focus {\n    z-index: 2;\n    color: #23527c;\n    background-color: #eeeeee;\n    border-color: #ddd; }\n  .pagination > .active > a, .pagination > .active > a:hover, .pagination > .active > a:focus,\n  .pagination > .active > span,\n  .pagination > .active > span:hover,\n  .pagination > .active > span:focus {\n    z-index: 3;\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7;\n    cursor: default; }\n  .pagination > .disabled > span,\n  .pagination > .disabled > span:hover,\n  .pagination > .disabled > span:focus,\n  .pagination > .disabled > a,\n  .pagination > .disabled > a:hover,\n  .pagination > .disabled > a:focus {\n    color: #777777;\n    background-color: #fff;\n    border-color: #ddd;\n    cursor: not-allowed; }\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px; }\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center; }\n  .pager:before, .pager:after {\n    content: " ";\n    display: table; }\n  .pager:after {\n    clear: both; }\n  .pager li {\n    display: inline; }\n    .pager li > a,\n    .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 15px; }\n    .pager li > a:hover,\n    .pager li > a:focus {\n      text-decoration: none;\n      background-color: #eeeeee; }\n  .pager .next > a,\n  .pager .next > span {\n    float: right; }\n  .pager .previous > a,\n  .pager .previous > span {\n    float: left; }\n  .pager .disabled > a,\n  .pager .disabled > a:hover,\n  .pager .disabled > a:focus,\n  .pager .disabled > span {\n    color: #777777;\n    background-color: #fff;\n    cursor: not-allowed; }\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em; }\n  .label:empty {\n    display: none; }\n  .btn .label {\n    position: relative;\n    top: -1px; }\n\na.label:hover, a.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-default {\n  background-color: #777777; }\n  .label-default[href]:hover, .label-default[href]:focus {\n    background-color: #5e5e5e; }\n\n.label-primary {\n  background-color: #337ab7; }\n  .label-primary[href]:hover, .label-primary[href]:focus {\n    background-color: #286090; }\n\n.label-success {\n  background-color: #5cb85c; }\n  .label-success[href]:hover, .label-success[href]:focus {\n    background-color: #449d44; }\n\n.label-info {\n  background-color: #5bc0de; }\n  .label-info[href]:hover, .label-info[href]:focus {\n    background-color: #31b0d5; }\n\n.label-warning {\n  background-color: #f0ad4e; }\n  .label-warning[href]:hover, .label-warning[href]:focus {\n    background-color: #ec971f; }\n\n.label-danger {\n  background-color: #d9534f; }\n  .label-danger[href]:hover, .label-danger[href]:focus {\n    background-color: #c9302c; }\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px; }\n  .badge:empty {\n    display: none; }\n  .btn .badge {\n    position: relative;\n    top: -1px; }\n  .btn-xs .badge, .btn-group-xs > .btn .badge,\n  .btn-group-xs > .btn .badge {\n    top: 0;\n    padding: 1px 5px; }\n  .list-group-item.active > .badge,\n  .nav-pills > .active > a > .badge {\n    color: #337ab7;\n    background-color: #fff; }\n  .list-group-item > .badge {\n    float: right; }\n  .list-group-item > .badge + .badge {\n    margin-right: 5px; }\n  .nav-pills > li > a > .badge {\n    margin-left: 3px; }\n\na.badge:hover, a.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee; }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    color: inherit; }\n  .jumbotron p {\n    margin-bottom: 15px;\n    font-size: 21px;\n    font-weight: 200; }\n  .jumbotron > hr {\n    border-top-color: #d5d5d5; }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    border-radius: 6px;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .jumbotron .container {\n    max-width: 100%; }\n  @media screen and (min-width: 768px) {\n    .jumbotron {\n      padding-top: 48px;\n      padding-bottom: 48px; }\n      .container .jumbotron,\n      .container-fluid .jumbotron {\n        padding-left: 60px;\n        padding-right: 60px; }\n      .jumbotron h1,\n      .jumbotron .h1 {\n        font-size: 63px; } }\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out; }\n  .thumbnail > img,\n  .thumbnail a > img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto; }\n  .thumbnail .caption {\n    padding: 9px;\n    color: #333333; }\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7; }\n\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .alert h4 {\n    margin-top: 0;\n    color: inherit; }\n  .alert .alert-link {\n    font-weight: bold; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissable .close,\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d; }\n  .alert-success hr {\n    border-top-color: #c9e2b3; }\n  .alert-success .alert-link {\n    color: #2b542c; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f; }\n  .alert-info hr {\n    border-top-color: #a6e1ec; }\n  .alert-info .alert-link {\n    color: #245269; }\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b; }\n  .alert-warning hr {\n    border-top-color: #f7e1b5; }\n  .alert-warning .alert-link {\n    color: #66512c; }\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442; }\n  .alert-danger hr {\n    border-top-color: #e4b9c0; }\n  .alert-danger .alert-link {\n    color: #843534; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease; }\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px; }\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite; }\n\n.progress-bar-success {\n  background-color: #5cb85c; }\n  .progress-striped .progress-bar-success {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-info {\n  background-color: #5bc0de; }\n  .progress-striped .progress-bar-info {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-warning {\n  background-color: #f0ad4e; }\n  .progress-striped .progress-bar-warning {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-danger {\n  background-color: #d9534f; }\n  .progress-striped .progress-bar-danger {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.media {\n  margin-top: 15px; }\n  .media:first-child {\n    margin-top: 0; }\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden; }\n\n.media-body {\n  width: 10000px; }\n\n.media-object {\n  display: block; }\n  .media-object.img-thumbnail {\n    max-width: none; }\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px; }\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .list-group-item:first-child {\n    border-top-right-radius: 4px;\n    border-top-left-radius: 4px; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px; }\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:hover, a.list-group-item:focus,\n  button.list-group-item:hover,\n  button.list-group-item:focus {\n    text-decoration: none;\n    color: #555;\n    background-color: #f5f5f5; }\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left; }\n\n.list-group-item.disabled, .list-group-item.disabled:hover, .list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text {\n    color: #777777; }\n\n.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:hover .list-group-item-text, .list-group-item.active:focus .list-group-item-text {\n    color: #c7ddef; }\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:hover, a.list-group-item-success:focus,\n  button.list-group-item-success:hover,\n  button.list-group-item-success:focus {\n    color: #3c763d;\n    background-color: #d0e9c6; }\n  a.list-group-item-success.active, a.list-group-item-success.active:hover, a.list-group-item-success.active:focus,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:hover,\n  button.list-group-item-success.active:focus {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d; }\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:hover, a.list-group-item-info:focus,\n  button.list-group-item-info:hover,\n  button.list-group-item-info:focus {\n    color: #31708f;\n    background-color: #c4e3f3; }\n  a.list-group-item-info.active, a.list-group-item-info.active:hover, a.list-group-item-info.active:focus,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:hover,\n  button.list-group-item-info.active:focus {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f; }\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:hover, a.list-group-item-warning:focus,\n  button.list-group-item-warning:hover,\n  button.list-group-item-warning:focus {\n    color: #8a6d3b;\n    background-color: #faf2cc; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active:focus {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b; }\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:hover, a.list-group-item-danger:focus,\n  button.list-group-item-danger:hover,\n  button.list-group-item-danger:focus {\n    color: #a94442;\n    background-color: #ebcccc; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active:focus {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n\n.panel-body {\n  padding: 15px; }\n  .panel-body:before, .panel-body:after {\n    content: " ";\n    display: table; }\n  .panel-body:after {\n    clear: both; }\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel-heading > .dropdown .dropdown-toggle {\n    color: inherit; }\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit; }\n  .panel-title > a,\n  .panel-title > small,\n  .panel-title > .small,\n  .panel-title > small > a,\n  .panel-title > .small > a {\n    color: inherit; }\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0; }\n  .panel > .list-group .list-group-item,\n  .panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0; }\n  .panel > .list-group:first-child .list-group-item:first-child,\n  .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px; }\n  .panel > .list-group:last-child .list-group-item:last-child,\n  .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px; }\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0; }\n\n.list-group + .panel-footer {\n  border-top-width: 0; }\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0; }\n  .panel > .table caption,\n  .panel > .table-responsive > .table caption,\n  .panel > .panel-collapse > .table caption {\n    padding-left: 15px;\n    padding-right: 15px; }\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table:first-child > tbody:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n      border-top-left-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n      border-top-right-radius: 3px; }\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n  .panel > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table:last-child > tfoot:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n      border-bottom-left-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n      border-bottom-right-radius: 3px; }\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd; }\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0; }\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0; }\n  .panel > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-bordered > tfoot > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0; }\n  .panel > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-bordered > tfoot > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0; }\n  .panel > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-bordered > tbody > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n    border-bottom: 0; }\n  .panel > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-bordered > tfoot > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0; }\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0; }\n\n.panel-group {\n  margin-bottom: 20px; }\n  .panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 4px; }\n    .panel-group .panel + .panel {\n      margin-top: 5px; }\n  .panel-group .panel-heading {\n    border-bottom: 0; }\n    .panel-group .panel-heading + .panel-collapse > .panel-body,\n    .panel-group .panel-heading + .panel-collapse > .list-group {\n      border-top: 1px solid #ddd; }\n  .panel-group .panel-footer {\n    border-top: 0; }\n    .panel-group .panel-footer + .panel-collapse .panel-body {\n      border-bottom: 1px solid #ddd; }\n\n.panel-default {\n  border-color: #ddd; }\n  .panel-default > .panel-heading {\n    color: #333333;\n    background-color: #f5f5f5;\n    border-color: #ddd; }\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ddd; }\n    .panel-default > .panel-heading .badge {\n      color: #f5f5f5;\n      background-color: #333333; }\n  .panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ddd; }\n\n.panel-primary {\n  border-color: #337ab7; }\n  .panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7; }\n    .panel-primary > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #337ab7; }\n    .panel-primary > .panel-heading .badge {\n      color: #337ab7;\n      background-color: #fff; }\n  .panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #337ab7; }\n\n.panel-success {\n  border-color: #d6e9c6; }\n  .panel-success > .panel-heading {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #d6e9c6; }\n    .panel-success > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #d6e9c6; }\n    .panel-success > .panel-heading .badge {\n      color: #dff0d8;\n      background-color: #3c763d; }\n  .panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #d6e9c6; }\n\n.panel-info {\n  border-color: #bce8f1; }\n  .panel-info > .panel-heading {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1; }\n    .panel-info > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #bce8f1; }\n    .panel-info > .panel-heading .badge {\n      color: #d9edf7;\n      background-color: #31708f; }\n  .panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #bce8f1; }\n\n.panel-warning {\n  border-color: #faebcc; }\n  .panel-warning > .panel-heading {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc; }\n    .panel-warning > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #faebcc; }\n    .panel-warning > .panel-heading .badge {\n      color: #fcf8e3;\n      background-color: #8a6d3b; }\n  .panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #faebcc; }\n\n.panel-danger {\n  border-color: #ebccd1; }\n  .panel-danger > .panel-heading {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1; }\n    .panel-danger > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ebccd1; }\n    .panel-danger > .panel-heading .badge {\n      color: #f2dede;\n      background-color: #a94442; }\n  .panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ebccd1; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n  .well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, 0.15); }\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px; }\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px; }\n\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20); }\n  .close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n  .modal.fade .modal-dialog {\n    -webkit-transform: translate(0, -25%);\n    -ms-transform: translate(0, -25%);\n    -o-transform: translate(0, -25%);\n    transform: translate(0, -25%);\n    -webkit-transition: -webkit-transform 0.3s ease-out;\n    -moz-transition: -moz-transform 0.3s ease-out;\n    -o-transition: -o-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out; }\n  .modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0;\n    filter: alpha(opacity=0); }\n  .modal-backdrop.in {\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  .modal-header:before, .modal-header:after {\n    content: " ";\n    display: table; }\n  .modal-header:after {\n    clear: both; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857; }\n\n.modal-body {\n  position: relative;\n  padding: 15px; }\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n  .modal-footer:before, .modal-footer:after {\n    content: " ";\n    display: table; }\n  .modal-footer:after {\n    clear: both; }\n  .modal-footer .btn + .btn {\n    margin-left: 5px;\n    margin-bottom: 0; }\n  .modal-footer .btn-group .btn + .btn {\n    margin-left: -1px; }\n  .modal-footer .btn-block + .btn-block {\n    margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n  .tooltip.in {\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .tooltip.top {\n    margin-top: -3px;\n    padding: 5px 0; }\n  .tooltip.right {\n    margin-left: 3px;\n    padding: 0 5px; }\n  .tooltip.bottom {\n    margin-top: 3px;\n    padding: 5px 0; }\n  .tooltip.left {\n    margin-left: -3px;\n    padding: 0 5px; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px; }\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }\n  .popover.top {\n    margin-top: -10px; }\n  .popover.right {\n    margin-left: 10px; }\n  .popover.bottom {\n    margin-top: 10px; }\n  .popover.left {\n    margin-left: -10px; }\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover > .arrow, .popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover > .arrow {\n  border-width: 11px; }\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: ""; }\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px; }\n  .popover.top > .arrow:after {\n    content: " ";\n    bottom: 1px;\n    margin-left: -10px;\n    border-bottom-width: 0;\n    border-top-color: #fff; }\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25); }\n  .popover.right > .arrow:after {\n    content: " ";\n    left: 1px;\n    bottom: -10px;\n    border-left-width: 0;\n    border-right-color: #fff; }\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px; }\n  .popover.bottom > .arrow:after {\n    content: " ";\n    top: 1px;\n    margin-left: -10px;\n    border-top-width: 0;\n    border-bottom-color: #fff; }\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25); }\n  .popover.left > .arrow:after {\n    content: " ";\n    right: 1px;\n    border-right-width: 0;\n    border-left-color: #fff;\n    bottom: -10px; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%; }\n  .carousel-inner > .item {\n    display: none;\n    position: relative;\n    -webkit-transition: 0.6s ease-in-out left;\n    -o-transition: 0.6s ease-in-out left;\n    transition: 0.6s ease-in-out left; }\n    .carousel-inner > .item > img,\n    .carousel-inner > .item > a > img {\n      display: block;\n      max-width: 100%;\n      height: auto;\n      line-height: 1; }\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-inner > .item {\n        -webkit-transition: -webkit-transform 0.6s ease-in-out;\n        -moz-transition: -moz-transform 0.6s ease-in-out;\n        -o-transition: -o-transform 0.6s ease-in-out;\n        transition: transform 0.6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        -moz-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        -moz-perspective: 1000px;\n        perspective: 1000px; }\n        .carousel-inner > .item.next, .carousel-inner > .item.active.right {\n          -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.prev, .carousel-inner > .item.active.left {\n          -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.next.left, .carousel-inner > .item.prev.right, .carousel-inner > .item.active {\n          -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n          left: 0; } }\n  .carousel-inner > .active,\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    display: block; }\n  .carousel-inner > .active {\n    left: 0; }\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .carousel-inner > .next {\n    left: 100%; }\n  .carousel-inner > .prev {\n    left: -100%; }\n  .carousel-inner > .next.left,\n  .carousel-inner > .prev.right {\n    left: 0; }\n  .carousel-inner > .active.left {\n    left: -100%; }\n  .carousel-inner > .active.right {\n    left: 100%; }\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent; }\n  .carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#80000000\', endColorstr=\'#00000000\', GradientType=1); }\n  .carousel-control.right {\n    left: auto;\n    right: 0;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#00000000\', endColorstr=\'#80000000\', GradientType=1); }\n  .carousel-control:hover, .carousel-control:focus {\n    outline: 0;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block; }\n  .carousel-control .icon-prev,\n  .carousel-control .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px; }\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px; }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif; }\n  .carousel-control .icon-prev:before {\n    content: \'\\2039\'; }\n  .carousel-control .icon-next:before {\n    content: \'\\203A\'; }\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center; }\n  .carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid #fff;\n    border-radius: 10px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: transparent; }\n  .carousel-indicators .active {\n    margin: 0;\n    width: 12px;\n    height: 12px;\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n  .carousel-caption .btn {\n    text-shadow: none; }\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px; }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px; }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px; }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px; }\n  .carousel-indicators {\n    bottom: 20px; } }\n\n.clearfix:before, .clearfix:after {\n  content: " ";\n  display: table; }\n\n.clearfix:after {\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.invisible {\n  visibility: hidden; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.hidden {\n  display: none !important; }\n\n.affix {\n  position: fixed; }\n\n@-ms-viewport {\n  width: device-width; }\n\n.visible-xs {\n  display: none !important; }\n\n.visible-sm {\n  display: none !important; }\n\n.visible-md {\n  display: none !important; }\n\n.visible-lg {\n  display: none !important; }\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important; }\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important; }\n  table.visible-xs {\n    display: table !important; }\n  tr.visible-xs {\n    display: table-row !important; }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important; }\n  table.visible-sm {\n    display: table !important; }\n  tr.visible-sm {\n    display: table-row !important; }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important; }\n  table.visible-md {\n    display: table !important; }\n  tr.visible-md {\n    display: table-row !important; }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important; }\n  table.visible-lg {\n    display: table !important; }\n  tr.visible-lg {\n    display: table-row !important; }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important; } }\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important; } }\n\n.visible-print {\n  display: none !important; }\n\n@media print {\n  .visible-print {\n    display: block !important; }\n  table.visible-print {\n    display: table !important; }\n  tr.visible-print {\n    display: table-row !important; }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important; } }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n\n@font-face {\n  font-family: \'Proxima Nova\';\n  font-style: normal;\n  font-weight: normal;\n  src: url(' + I(22) + ") format(\"opentype\"); }\n\n@font-face {\n  font-family: 'Proxima Nova';\n  font-style: normal;\n  font-weight: bold;\n  src: url(" + I(23) + ') format("opentype"); }\n\n/* cyrillic-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://fonts.gstatic.com/s/montserrat/v12/rBHvpRWBkgyW99dXT88n7yEAvth_LlrfE80CYdSH47w.woff2") format("woff2");\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; }\n\n/* cyrillic */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://fonts.gstatic.com/s/montserrat/v12/NX1NravqaXESu9fFv7KuqiEAvth_LlrfE80CYdSH47w.woff2") format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }\n\n/* vietnamese */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://fonts.gstatic.com/s/montserrat/v12/SKK6Nusyv8QPNMtI4j9J2yEAvth_LlrfE80CYdSH47w.woff2") format("woff2");\n  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB; }\n\n/* latin-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://fonts.gstatic.com/s/montserrat/v12/gFXtEMCp1m_YzxsBpKl68iEAvth_LlrfE80CYdSH47w.woff2") format("woff2");\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://fonts.gstatic.com/s/montserrat/v12/zhcz-_WihjSQC0oHJ9TCYPk_vArhqVIZ0nv9q090hN8.woff2") format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }\n\n/* cyrillic-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 700;\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://fonts.gstatic.com/s/montserrat/v12/IQHow_FEYlDC4Gzy_m8fcude9INZm0R8ZMJUtfOsxrw.woff2") format("woff2");\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; }\n\n/* cyrillic */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 700;\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://fonts.gstatic.com/s/montserrat/v12/IQHow_FEYlDC4Gzy_m8fcrpHcMS0zZe4mIYvDKG2oeM.woff2") format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }\n\n/* vietnamese */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 700;\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://fonts.gstatic.com/s/montserrat/v12/IQHow_FEYlDC4Gzy_m8fcjh33M2A-6X0bdu871ruAGs.woff2") format("woff2");\n  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB; }\n\n/* latin-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 700;\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://fonts.gstatic.com/s/montserrat/v12/IQHow_FEYlDC4Gzy_m8fchHJTnCUrjaAm2S9z52xC3Y.woff2") format("woff2");\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 700;\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://fonts.gstatic.com/s/montserrat/v12/IQHow_FEYlDC4Gzy_m8fcoWiMMZ7xLd792ULpGE4W_Y.woff2") format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }\n\n/* cyrillic-ext */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 100;\n  src: local("Roboto Slab Thin"), local("RobotoSlab-Thin"), url("https://fonts.gstatic.com/s/robotoslab/v7/MEz38VLIFL-t46JUtkIEgHcHpeTo4zNkUa02-F9r1VE.woff2") format("woff2");\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; }\n\n/* cyrillic */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 100;\n  src: local("Roboto Slab Thin"), local("RobotoSlab-Thin"), url("https://fonts.gstatic.com/s/robotoslab/v7/MEz38VLIFL-t46JUtkIEgJHDipyzW3oxlM2ogtcJE3o.woff2") format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }\n\n/* greek-ext */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 100;\n  src: local("Roboto Slab Thin"), local("RobotoSlab-Thin"), url("https://fonts.gstatic.com/s/robotoslab/v7/MEz38VLIFL-t46JUtkIEgArQu7msDD1BXoJWeH_ykbQ.woff2") format("woff2");\n  unicode-range: U+1F00-1FFF; }\n\n/* greek */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 100;\n  src: local("Roboto Slab Thin"), local("RobotoSlab-Thin"), url("https://fonts.gstatic.com/s/robotoslab/v7/MEz38VLIFL-t46JUtkIEgD_9YuvR6BbpvcNvv-P7CJ0.woff2") format("woff2");\n  unicode-range: U+0370-03FF; }\n\n/* vietnamese */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 100;\n  src: local("Roboto Slab Thin"), local("RobotoSlab-Thin"), url("https://fonts.gstatic.com/s/robotoslab/v7/MEz38VLIFL-t46JUtkIEgCGQb_MN5JCwpvZt9ko0I5U.woff2") format("woff2");\n  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB; }\n\n/* latin-ext */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 100;\n  src: local("Roboto Slab Thin"), local("RobotoSlab-Thin"), url("https://fonts.gstatic.com/s/robotoslab/v7/MEz38VLIFL-t46JUtkIEgLr6l97bd_cX8oZCLqDvOn0.woff2") format("woff2");\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 100;\n  src: local("Roboto Slab Thin"), local("RobotoSlab-Thin"), url("https://fonts.gstatic.com/s/robotoslab/v7/MEz38VLIFL-t46JUtkIEgNFPPhm6yPYYGACxOp9LMJ4.woff2") format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }\n\n/* cyrillic-ext */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 300;\n  src: local("Roboto Slab Light"), local("RobotoSlab-Light"), url("https://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJRgVThLs8Y7ETJzDCYFCSLE.woff2") format("woff2");\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; }\n\n/* cyrillic */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 300;\n  src: local("Roboto Slab Light"), local("RobotoSlab-Light"), url("https://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJZiMaisvaUVUsYyVzOmndek.woff2") format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }\n\n/* greek-ext */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 300;\n  src: local("Roboto Slab Light"), local("RobotoSlab-Light"), url("https://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJbBAWGjcah5Ky0jbCgIwDB8.woff2") format("woff2");\n  unicode-range: U+1F00-1FFF; }\n\n/* greek */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 300;\n  src: local("Roboto Slab Light"), local("RobotoSlab-Light"), url("https://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJf14vlcfyPYlAcQy2UfDRm4.woff2") format("woff2");\n  unicode-range: U+0370-03FF; }\n\n/* vietnamese */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 300;\n  src: local("Roboto Slab Light"), local("RobotoSlab-Light"), url("https://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJafJul7RR1X4poJgi27uS4w.woff2") format("woff2");\n  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB; }\n\n/* latin-ext */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 300;\n  src: local("Roboto Slab Light"), local("RobotoSlab-Light"), url("https://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJavyPXdneeGd26m9EmFSSWg.woff2") format("woff2");\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 300;\n  src: local("Roboto Slab Light"), local("RobotoSlab-Light"), url("https://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJUo2lTMeWA_kmIyWrkNCwPc.woff2") format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }\n\n/* cyrillic-ext */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 400;\n  src: local("Roboto Slab Regular"), local("RobotoSlab-Regular"), url("https://fonts.gstatic.com/s/robotoslab/v7/y7lebkjgREBJK96VQi37ZjTOQ_MqJVwkKsUn0wKzc2I.woff2") format("woff2");\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; }\n\n/* cyrillic */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 400;\n  src: local("Roboto Slab Regular"), local("RobotoSlab-Regular"), url("https://fonts.gstatic.com/s/robotoslab/v7/y7lebkjgREBJK96VQi37ZjUj_cnvWIuuBMVgbX098Mw.woff2") format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }\n\n/* greek-ext */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 400;\n  src: local("Roboto Slab Regular"), local("RobotoSlab-Regular"), url("https://fonts.gstatic.com/s/robotoslab/v7/y7lebkjgREBJK96VQi37ZkbcKLIaa1LC45dFaAfauRA.woff2") format("woff2");\n  unicode-range: U+1F00-1FFF; }\n\n/* greek */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 400;\n  src: local("Roboto Slab Regular"), local("RobotoSlab-Regular"), url("https://fonts.gstatic.com/s/robotoslab/v7/y7lebkjgREBJK96VQi37Zmo_sUJ8uO4YLWRInS22T3Y.woff2") format("woff2");\n  unicode-range: U+0370-03FF; }\n\n/* vietnamese */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 400;\n  src: local("Roboto Slab Regular"), local("RobotoSlab-Regular"), url("https://fonts.gstatic.com/s/robotoslab/v7/y7lebkjgREBJK96VQi37Zr6up8jxqWt8HVA3mDhkV_0.woff2") format("woff2");\n  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB; }\n\n/* latin-ext */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 400;\n  src: local("Roboto Slab Regular"), local("RobotoSlab-Regular"), url("https://fonts.gstatic.com/s/robotoslab/v7/y7lebkjgREBJK96VQi37ZiYE0-AqJ3nfInTTiDXDjU4.woff2") format("woff2");\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 400;\n  src: local("Roboto Slab Regular"), local("RobotoSlab-Regular"), url("https://fonts.gstatic.com/s/robotoslab/v7/y7lebkjgREBJK96VQi37Zo4P5ICox8Kq3LLUNMylGO4.woff2") format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }\n\n/* cyrillic-ext */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 700;\n  src: local("Roboto Slab Bold"), local("RobotoSlab-Bold"), url("https://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJZ6iIh_FvlUHQwED9Yt5Kbw.woff2") format("woff2");\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; }\n\n/* cyrillic */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 700;\n  src: local("Roboto Slab Bold"), local("RobotoSlab-Bold"), url("https://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJS_vZmeiCMnoWNN9rHBYaTc.woff2") format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }\n\n/* greek-ext */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 700;\n  src: local("Roboto Slab Bold"), local("RobotoSlab-Bold"), url("https://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJSFaMxiho_5XQnyRZzQsrZs.woff2") format("woff2");\n  unicode-range: U+1F00-1FFF; }\n\n/* greek */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 700;\n  src: local("Roboto Slab Bold"), local("RobotoSlab-Bold"), url("https://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJQalQocB-__pDVGhF3uS2Ks.woff2") format("woff2");\n  unicode-range: U+0370-03FF; }\n\n/* vietnamese */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 700;\n  src: local("Roboto Slab Bold"), local("RobotoSlab-Bold"), url("https://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJWhQUTDJGru-0vvUpABgH8I.woff2") format("woff2");\n  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB; }\n\n/* latin-ext */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 700;\n  src: local("Roboto Slab Bold"), local("RobotoSlab-Bold"), url("https://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJejkDdvhIIFj_YMdgqpnSB0.woff2") format("woff2");\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF; }\n\n/* latin */\n@font-face {\n  font-family: \'Roboto Slab\';\n  font-style: normal;\n  font-weight: 700;\n  src: local("Roboto Slab Bold"), local("RobotoSlab-Bold"), url("https://fonts.gstatic.com/s/robotoslab/v7/dazS1PrQQuCxC3iOAJFEJYlIZu-HDpmDIZMigmsroc4.woff2") format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }\n\n/* latin */\n@font-face {\n  font-family: \'Droid Serif\';\n  font-style: italic;\n  font-weight: 400;\n  src: local("Droid Serif Italic"), local("DroidSerif-Italic"), url("https://fonts.gstatic.com/s/droidserif/v8/cj2hUnSRBhwmSPr9kS5898u2Q0OS-KeTAWjgkS85mDg.woff2") format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }\n\n/* latin */\n@font-face {\n  font-family: \'Droid Serif\';\n  font-style: italic;\n  font-weight: 700;\n  src: local("Droid Serif Bold Italic"), local("DroidSerif-BoldItalic"), url("https://fonts.gstatic.com/s/droidserif/v8/c92rD_x0V1LslSFt3-QEpo9ObOXPY1wUIXqKtDjSdsY.woff2") format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }\n\n/* latin */\n@font-face {\n  font-family: \'Droid Serif\';\n  font-style: normal;\n  font-weight: 400;\n  src: local("Droid Serif Regular"), local("DroidSerif-Regular"), url("https://fonts.gstatic.com/s/droidserif/v8/0AKsP294HTD-nvJgucYTaI4P5ICox8Kq3LLUNMylGO4.woff2") format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }\n\n/* latin */\n@font-face {\n  font-family: \'Droid Serif\';\n  font-style: normal;\n  font-weight: 700;\n  src: local("Droid Serif Bold"), local("DroidSerif-Bold"), url("https://fonts.gstatic.com/s/droidserif/v8/QQt14e8dY39u-eYBZmppwYlIZu-HDpmDIZMigmsroc4.woff2") format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }\n\nbody {\n  overflow-x: hidden;\n  font-family: "Proxima Nova", "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  position: relative;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  transition: all 0.3s; }\n\np {\n  font-size: 16px;\n  line-height: 1.5; }\n\np.large {\n  font-size: 16px; }\n\na,\na.active,\na:active,\na:focus,\na:hover {\n  outline: none; }\n\na {\n  color: black; }\n\na.active,\na:active,\na:focus,\na:hover {\n  color: #222222; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  font-weight: 700; }\n\nstrong {\n  color: #333; }\n\n.img-centered {\n  margin: 0 auto; }\n\n.vtable {\n  display: table;\n  width: 100%;\n  height: 100vh;\n  table-layout: fixed; }\n\n.vcell {\n  display: table-cell;\n  vertical-align: middle; }\n\n.mt15 {\n  margin-top: 15px !important; }\n\n.mt20 {\n  margin-top: 20px !important; }\n\n.mt25 {\n  margin-top: 25px !important; }\n\n.mt30 {\n  margin-top: 30px !important; }\n\n.mt50 {\n  margin-top: 50px !important; }\n\n.mb30 {\n  margin-bottom: 30px !important; }\n\n.mb60 {\n  margin-bottom: 60px !important; }\n\n.justify {\n  text-align: justify; }\n\n#vision {\n  text-align: justify; }\n\n.btn-xl {\n  color: #333333;\n  background-color: white;\n  border-color: white;\n  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  -webkit-transition: all 400ms ease-in-out;\n  -moz-transition: all 400ms ease-in-out;\n  -o-transition: all 400ms ease-in-out;\n  transition: all 400ms ease-in-out;\n  font-weight: 700;\n  border-radius: 3px;\n  font-size: 18px;\n  text-align: center;\n  line-height: 1;\n  padding: 10px 25px; }\n  .btn-xl:focus, .btn-xl.focus {\n    color: #333333;\n    background-color: #e6e6e6;\n    border-color: #bfbfbf; }\n  .btn-xl:hover {\n    color: #333333;\n    background-color: #e6e6e6;\n    border-color: #e0e0e0; }\n  .btn-xl:active, .btn-xl.active,\n  .open > .btn-xl.dropdown-toggle {\n    color: #333333;\n    background-color: #e6e6e6;\n    border-color: #e0e0e0; }\n    .btn-xl:active:hover, .btn-xl:active:focus, .btn-xl:active.focus, .btn-xl.active:hover, .btn-xl.active:focus, .btn-xl.active.focus,\n    .open > .btn-xl.dropdown-toggle:hover,\n    .open > .btn-xl.dropdown-toggle:focus,\n    .open > .btn-xl.dropdown-toggle.focus {\n      color: #333333;\n      background-color: #d4d4d4;\n      border-color: #bfbfbf; }\n  .btn-xl:active, .btn-xl.active,\n  .open > .btn-xl.dropdown-toggle {\n    background-image: none; }\n  .btn-xl.disabled:hover, .btn-xl.disabled:focus, .btn-xl.disabled.focus, .btn-xl[disabled]:hover, .btn-xl[disabled]:focus, .btn-xl[disabled].focus,\n  fieldset[disabled] .btn-xl:hover,\n  fieldset[disabled] .btn-xl:focus,\n  fieldset[disabled] .btn-xl.focus {\n    background-color: white;\n    border-color: white; }\n  .btn-xl .badge {\n    color: white;\n    background-color: #333333; }\n\n.navbar-custom {\n  background-color: transparent;\n  border-color: transparent; }\n  .navbar-custom .navbar-brand {\n    display: inline-block;\n    padding: 9px 0 0 15px; }\n    .navbar-custom .navbar-brand > img {\n      width: 200px;\n      height: 48px; }\n  .navbar-custom .navbar-collapse {\n    border-color: rgba(255, 255, 255, 0.98);\n    max-height: initial;\n    background-color: #64D3B2; }\n  .navbar-custom .navbar-toggle {\n    background-color: white;\n    border-color: white;\n    font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    text-transform: uppercase;\n    color: #333333;\n    font-size: 12px;\n    margin-top: 14px;\n    margin-bottom: 13px; }\n    .navbar-custom .navbar-toggle:focus, .navbar-custom .navbar-toggle:hover {\n      background-color: white; }\n  .navbar-custom .nav .dropdown .dropdown-menu li a,\n  .navbar-custom .nav li a {\n    -webkit-transition: all 200ms ease-in-out;\n    -moz-transition: all 200ms ease-in-out;\n    -o-transition: all 200ms ease-in-out;\n    transition: all 200ms ease-in-out;\n    font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    text-transform: uppercase;\n    font-weight: 400;\n    letter-spacing: 1px;\n    color: white; }\n    .navbar-custom .nav .dropdown .dropdown-menu li a:focus, .navbar-custom .nav .dropdown .dropdown-menu li a:hover,\n    .navbar-custom .nav li a:focus,\n    .navbar-custom .nav li a:hover {\n      color: #333333;\n      outline: none; }\n  .navbar-custom ul.dropdown-menu.scroll-menu {\n    overflow-x: auto;\n    max-height: 100px;\n    background-color: #64D3B2;\n    -webkit-overflow-scrolling: touch;\n    -moz-overflow-scrolling: touch;\n    -ms-overflow-scrolling: touch;\n    -o-overflow-scrolling: touch;\n    overflow-scrolling: touch; }\n    .navbar-custom ul.dropdown-menu.scroll-menu::-webkit-scrollbar {\n      width: 6px; }\n    .navbar-custom ul.dropdown-menu.scroll-menu::-webkit-scrollbar-thumb {\n      background-color: #f1f1f1; }\n  .navbar-custom .navbar-nav > .active a {\n    border-radius: 0;\n    color: #333333;\n    background-color: white; }\n    .navbar-custom .navbar-nav > .active a:focus, .navbar-custom .navbar-nav > .active a:hover {\n      color: #333333;\n      background-color: #fff; }\n  .navbar-custom .navbar-nav > .open > a:focus,\n  .navbar-custom .navbar-nav > .open > a:hover,\n  .navbar-custom .navbar-nav > .open > a {\n    color: #333333;\n    background-color: transparent; }\n\n@media (min-width: 992px) {\n  .navbar-custom {\n    background-color: transparent;\n    padding: 25px 0;\n    -webkit-transition: padding 0.3s;\n    -moz-transition: padding 0.3s;\n    transition: padding 0.3s;\n    border: none; }\n    .navbar-custom .navbar-brand {\n      font-size: 2em;\n      -webkit-transition: all 0.3s;\n      -moz-transition: all 0.3s;\n      transition: all 0.3s;\n      padding: 2px 0 0; }\n      .navbar-custom .navbar-brand > img {\n        width: initial; }\n    .navbar-custom .navbar-collapse {\n      background-color: transparent; }\n    .navbar-custom ul.dropdown-menu {\n      background-color: transparent;\n      min-width: auto;\n      right: 0; }\n      .navbar-custom ul.dropdown-menu a:focus,\n      .navbar-custom ul.dropdown-menu a:hover {\n        background-color: transparent; }\n    .navbar-custom ul.dropdown-menu.scroll-menu {\n      max-height: 140px; } }\n\n@media (max-width: 991px) {\n  .navbar-custom.affix {\n    background-color: #64D3B2; }\n    .navbar-custom.affix .navbar-toggle {\n      margin-top: 8px;\n      margin-bottom: 7px; }\n    .navbar-custom.affix .navbar-brand {\n      padding: 2px 0 0 15px; } }\n\n@media (min-width: 992px) {\n  .navbar-custom.affix {\n    background-color: #64D3B2;\n    padding: 0; }\n    .navbar-custom.affix .navbar-brand {\n      font-size: 1.5em; }\n    .navbar-custom.affix ul.dropdown-menu {\n      background-color: #64D3B2; } }\n\n#particles {\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\nheader {\n  position: relative;\n  background: -webkit-linear-gradient(#64D3B2, #0C9EBD);\n  /* For Safari 5.1 to 6.0 */\n  background: -o-linear-gradient(#64D3B2, #0C9EBD);\n  /* For Opera 11.1 to 12.0 */\n  background: -moz-linear-gradient(#64D3B2, #0C9EBD);\n  /* For Firefox 3.6 to 15 */\n  background: linear-gradient(#64D3B2, #0C9EBD);\n  /* Standard syntax */\n  text-align: center;\n  min-height: 100vh;\n  color: white; }\n  header .intro {\n    padding-top: 100px;\n    padding-bottom: 50px; }\n    header .intro .intro-text {\n      padding-bottom: 40px; }\n      header .intro .intro-text .intro-heading {\n        font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;\n        text-transform: uppercase;\n        font-weight: 700;\n        font-size: 40px;\n        line-height: 40px;\n        margin-bottom: 25px; }\n      header .intro .intro-text .intro-sub-heading {\n        font-style: italic;\n        font-size: 18px;\n        line-height: 18px;\n        margin-bottom: 25px; }\n      header .intro .intro-text .intro-button {\n        margin: 3px; }\n    header .intro .intro-video {\n      position: relative;\n      padding-bottom: 56.25%;\n      height: 0;\n      overflow: hidden;\n      max-width: 100%; }\n      header .intro .intro-video iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: none; }\n\n#dateCountdown {\n  height: 125px;\n  margin-left: 20px; }\n\n@media (min-width: 360px) {\n  header .intro .intro-text .intro-heading {\n    font-weight: 700;\n    font-size: 50px;\n    line-height: 50px; }\n  header .intro .intro-text .intro-sub-heading {\n    font-size: 22px;\n    line-height: 22px; } }\n\n@media (min-width: 768px) {\n  header .intro {\n    padding-top: 150px; }\n    header .intro .intro-text .intro-heading {\n      font-weight: 700;\n      font-size: 50px;\n      line-height: 50px; }\n    header .intro .intro-text .intro-sub-heading {\n      font-size: 22px;\n      line-height: 22px; } }\n\n@media (min-width: 992px) {\n  header .intro {\n    padding-top: 150px;\n    padding-bottom: 150px; }\n    header .intro .intro-text {\n      padding-bottom: 0; }\n      header .intro .intro-text .intro-heading {\n        font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;\n        text-transform: uppercase;\n        font-weight: 700;\n        font-size: 60px;\n        line-height: 60px;\n        margin-bottom: 35px; }\n      header .intro .intro-text .intro-sub-heading {\n        font-style: italic;\n        font-size: 32px;\n        line-height: 32px;\n        margin-bottom: 25px; } }\n\nsection {\n  padding: 25px 0;\n  border-bottom: 1px solid #ebebeb;\n  color: #777; }\n  section b,\n  section h1,\n  section h2,\n  section h3,\n  section h4,\n  section h5,\n  section h6 {\n    color: #333333; }\n  section h2.section-heading {\n    font-size: 40px;\n    margin-top: 0;\n    margin-bottom: 50px; }\n\n@media (min-width: 768px) {\n  section {\n    padding: 50px 0; } }\n\n.timeline {\n  list-style: none;\n  padding: 0;\n  position: relative; }\n  .timeline > li {\n    padding-bottom: 50px;\n    position: relative;\n    min-height: 50px; }\n    .timeline > li:after, .timeline > li:before {\n      content: " ";\n      display: table; }\n    .timeline > li:after {\n      clear: both; }\n    .timeline > li .timeline-panel {\n      width: 100%;\n      float: right;\n      padding: 0 20px 0 100px;\n      position: relative;\n      text-align: left; }\n      .timeline > li .timeline-panel:before {\n        border-left-width: 0;\n        border-right-width: 15px;\n        left: -15px;\n        right: auto; }\n      .timeline > li .timeline-panel:after {\n        border-left-width: 0;\n        border-right-width: 14px;\n        left: -14px;\n        right: auto; }\n    .timeline > li .timeline-image {\n      left: 0;\n      margin-left: 0;\n      width: 80px;\n      height: 80px;\n      position: absolute;\n      z-index: 100;\n      background-color: #eeeeee;\n      border-radius: 100%;\n      border: 7px solid #eeeeee;\n      text-align: center;\n      -webkit-transition: all 400ms ease-in-out;\n      -moz-transition: all 400ms ease-in-out;\n      -o-transition: all 400ms ease-in-out;\n      transition: all 400ms ease-in-out; }\n      .timeline > li .timeline-image:hover {\n        border-color: #0C9EBD; }\n      .timeline > li .timeline-image h4 {\n        font-size: 10px;\n        margin-top: 12px;\n        line-height: 14px; }\n    .timeline > li.timeline-inverted > .timeline-panel {\n      float: right;\n      text-align: left;\n      padding: 0 20px 0 100px; }\n      .timeline > li.timeline-inverted > .timeline-panel:before {\n        border-left-width: 0;\n        border-right-width: 15px;\n        left: -15px;\n        right: auto; }\n      .timeline > li.timeline-inverted > .timeline-panel:after {\n        border-left-width: 0;\n        border-right-width: 14px;\n        left: -14px;\n        right: auto; }\n    .timeline > li.timeline-done .timeline-image {\n      border: 7px solid #0C9EBD; }\n    .timeline > li .timeline-road {\n      top: 0;\n      bottom: 0;\n      position: absolute;\n      content: "";\n      width: 2px;\n      background-color: #eeeeee;\n      left: 40px;\n      margin-left: -1.5px; }\n      .timeline > li .timeline-road.timeline-moved, .timeline > li .timeline-road.timeline-moving {\n        background-color: #0C9EBD; }\n      .timeline > li .timeline-road.timeline-moving:before {\n        top: 60%;\n        bottom: 0;\n        position: absolute;\n        content: "";\n        width: 2px;\n        background: -webkit-linear-gradient(#0C9EBD, #eeeeee);\n        /* For Safari 5.1 to 6.0 */\n        background: -o-linear-gradient(#0C9EBD, #eeeeee);\n        /* For Opera 11.1 to 12.0 */\n        background: -moz-linear-gradient(#0C9EBD, #eeeeee);\n        /* For Firefox 3.6 to 15 */\n        background: linear-gradient(#0C9EBD, #eeeeee);\n        /* Standard syntax */ }\n    .timeline > li:last-child {\n      margin-bottom: 0; }\n  .timeline .timeline-heading h4 {\n    margin-top: 0; }\n    .timeline .timeline-heading h4.subheading {\n      text-transform: none; }\n  .timeline .timeline-body > ul,\n  .timeline .timeline-body > p {\n    margin-bottom: 0; }\n    .timeline .timeline-body > ul a,\n    .timeline .timeline-body > p a {\n      color: #0C9EBD;\n      -webkit-transition: all 400ms ease-in-out;\n      -moz-transition: all 400ms ease-in-out;\n      -o-transition: all 400ms ease-in-out;\n      transition: all 400ms ease-in-out;\n      text-decoration: none; }\n      .timeline .timeline-body > ul a:hover,\n      .timeline .timeline-body > p a:hover {\n        color: #64D3B2; }\n\n@media (min-width: 768px) {\n  .timeline > li {\n    padding-bottom: 50px;\n    min-height: 100px; }\n    .timeline > li .timeline-panel {\n      width: 41%;\n      float: left;\n      padding: 0 20px 20px 30px;\n      text-align: right; }\n    .timeline > li .timeline-image {\n      width: 100px;\n      height: 100px;\n      left: 50%;\n      margin-left: -50px; }\n      .timeline > li .timeline-image h4 {\n        font-size: 13px;\n        margin-top: 16px;\n        line-height: 18px; }\n    .timeline > li.timeline-inverted > .timeline-panel {\n      float: right;\n      text-align: left;\n      padding: 0 30px 20px 20px; }\n    .timeline > li .timeline-road {\n      left: 50%; } }\n\n@media (min-width: 992px) {\n  .timeline > li {\n    min-height: 150px; }\n    .timeline > li .timeline-panel {\n      padding: 0 20px 20px; }\n    .timeline > li .timeline-image {\n      width: 150px;\n      height: 150px;\n      margin-left: -75px; }\n      .timeline > li .timeline-image h4 {\n        font-size: 18px;\n        margin-top: 30px;\n        line-height: 26px; }\n    .timeline > li.timeline-inverted > .timeline-panel {\n      padding: 0 20px 20px; } }\n\n@media (min-width: 1200px) {\n  .timeline > li {\n    min-height: 170px; }\n    .timeline > li .timeline-panel {\n      padding: 0 20px 20px 100px; }\n    .timeline > li .timeline-image {\n      width: 170px;\n      height: 170px;\n      margin-left: -85px; }\n      .timeline > li .timeline-image h4 {\n        margin-top: 40px; }\n    .timeline > li.timeline-inverted > .timeline-panel {\n      padding: 0 100px 20px 20px; } }\n\n#ico table {\n  text-align: center;\n  width: 100%;\n  border-collapse: collapse;\n  border-style: hidden; }\n  #ico table tbody tr {\n    -webkit-transition: all 200ms ease-in-out;\n    -moz-transition: all 200ms ease-in-out;\n    -o-transition: all 200ms ease-in-out;\n    transition: all 200ms ease-in-out;\n    cursor: pointer; }\n    #ico table tbody tr td {\n      padding: 3px 0; }\n      #ico table tbody tr td i {\n        font-size: 18px;\n        font-style: normal;\n        letter-spacing: 1.5px; }\n    #ico table tbody tr:hover {\n      background-color: #64D3B2; }\n      #ico table tbody tr:hover td i {\n        color: #fff; }\n    #ico table tbody tr:first-child:hover, #ico table tbody tr:last-child:hover {\n      background-color: transparent; }\n\n#ico tr {\n  border: 1px solid #777; }\n\n#ico th {\n  color: #333333;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: top; }\n\n.team-member {\n  text-align: center;\n  margin-bottom: 50px; }\n  .team-member img {\n    margin: 0 auto;\n    max-width: 215px; }\n  .team-member h4 {\n    margin-top: 25px;\n    margin-bottom: 0;\n    text-transform: none; }\n  .team-member p {\n    margin-top: 0; }\n\n.subscribe-with-footer {\n  background: -webkit-linear-gradient(#64D3B2, #0C9EBD);\n  /* For Safari 5.1 to 6.0 */\n  background: -o-linear-gradient(#64D3B2, #0C9EBD);\n  /* For Opera 11.1 to 12.0 */\n  background: -moz-linear-gradient(#64D3B2, #0C9EBD);\n  /* For Firefox 3.6 to 15 */\n  background: linear-gradient(#64D3B2, #0C9EBD);\n  /* Standard syntax */ }\n\nsection#publications {\n  text-align: center; }\n  section#publications a {\n    max-width: 200px;\n    text-decoration: none;\n    display: inline-block;\n    margin: 15px;\n    border-bottom: 2px solid transparent; }\n  section#publications a img {\n    -webkit-transition: all 200ms ease-in-out;\n    -moz-transition: all 200ms ease-in-out;\n    -o-transition: all 200ms ease-in-out;\n    transition: all 200ms ease-in-out;\n    filter: grayscale(100%);\n    -webkit-filter: grayscale(100%);\n    -moz-filter: grayscale(100%);\n    -ms-filter: grayscale(100%);\n    -o-filter: grayscale(100%);\n    max-width: 200px;\n    width: 100%; }\n  section#publications a:hover {\n    -webkit-transition: all 200ms ease-in-out;\n    -moz-transition: all 200ms ease-in-out;\n    -o-transition: all 200ms ease-in-out;\n    transition: all 200ms ease-in-out;\n    border-bottom: 2px solid #64D3B2; }\n\nsection#subscribe #subscribeSuccessRow p,\nsection#subscribe .section-heading {\n  color: white; }\n\nsection#subscribe input.form-control {\n  height: auto;\n  padding: 8px 20px;\n  width: 100%; }\n\nsection#subscribe .text-danger {\n  color: #96352b; }\n\nsection#subscribe .subscribe-button {\n  width: 100%; }\n\nsection#subscribe .form-control:focus {\n  border-color: #0C9EBD;\n  box-shadow: none; }\n\nsection#subscribe ::-webkit-input-placeholder {\n  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #777777; }\n\nsection#subscribe :-moz-placeholder {\n  /* Firefox 18- */\n  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #777777; }\n\nsection#subscribe ::-moz-placeholder {\n  /* Firefox 19+ */\n  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #777777; }\n\nsection#subscribe :-ms-input-placeholder {\n  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #777777; }\n\nfooter {\n  padding: 25px 0;\n  text-align: center; }\n  footer div.terms-and-conditions,\n  footer span.copyright {\n    line-height: 40px;\n    font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    text-transform: uppercase;\n    text-transform: none; }\n  footer div.terms-and-conditions a {\n    color: #333; }\n  footer ul.quicklinks {\n    margin-bottom: 0;\n    line-height: 40px;\n    font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;\n    text-transform: uppercase;\n    text-transform: none; }\n\nul.social-buttons {\n  margin-bottom: 0; }\n  ul.social-buttons li a {\n    display: block;\n    background-color: #222222;\n    height: 40px;\n    width: 40px;\n    border-radius: 100%;\n    font-size: 20px;\n    line-height: 40px;\n    color: white;\n    outline: none;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n    -webkit-transition: all 200ms ease-in-out;\n    -moz-transition: all 200ms ease-in-out;\n    -o-transition: all 200ms ease-in-out;\n    transition: all 200ms ease-in-out; }\n    ul.social-buttons li a:active, ul.social-buttons li a:focus, ul.social-buttons li a:hover {\n      background-color: #64D3B2; }\n\n.btn.active,\n.btn:active,\n.btn:active:focus,\n.btn:focus {\n  outline: none; }\n\n::-moz-selection {\n  text-shadow: none;\n  background: #0C9EBD; }\n\n::selection {\n  text-shadow: none;\n  background: #0C9EBD; }\n\nimg::selection {\n  background: transparent; }\n\nimg::-moz-selection {\n  background: transparent; }\n\nbody {\n  webkit-tap-highlight-color: #0C9EBD; }\n\n.intro-text ul.social-buttons {\n  margin-top: 20px; }\n\n.faq-question {\n  margin-top: 40px; }\n\n.faq-question-first {\n  margin-top: 0; }\n\n.faq-question h3 {\n  text-transform: none; }\n\n.faq-question::before {\n  content: "";\n  display: block;\n  height: 64px;\n  /* fixed header height*/\n  margin: -64px 0 0;\n  /* negative fixed header height */ }\n\n.faq-question:target {\n  text-decoration: underline; }\n\ndiv.faq-anwser p {\n  text-align: justify; }\n\n.popup-overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  transition: opacity 500ms;\n  z-index: 2020;\n  overflow-y: auto;\n  height: 100%; }\n\ndiv.container.popup {\n  margin: 100px auto; }\n\n.popup-content {\n  padding: 60px 40px 40px;\n  border-radius: 5px;\n  background: #fff; }\n\n.popup .popup-close {\n  transition: all 200ms;\n  font-size: 40px;\n  font-weight: bold;\n  text-decoration: none;\n  color: #333;\n  position: absolute;\n  right: 5px;\n  top: 0; }\n\n.popup .popup-close:hover {\n  color: #64D3B2; }\n\n.popup p {\n  text-align: justify;\n  font-size: 14px; }\n\n.no-scroll {\n  overflow: hidden; }\n\n.progressBars {\n  font-style: normal;\n  padding: 20px 20px 0;\n  border-radius: 3px; }\n\n.raisedEur,\n.soldBnk {\n  display: inline-block;\n  width: 110px;\n  text-align: left;\n  margin-right: -5px; }\n\n.maxBnk,\n.maxEur {\n  margin-left: 4px; }\n\n.raisedEur {\n  width: 90px; }\n\n.eurProgressBar {\n  position: relative;\n  width: 100%;\n  height: 3px;\n  margin-top: 20px;\n  background-color: #fff; }\n  .eurProgressBar .eurProgress {\n    position: absolute;\n    background-color: #fff;\n    height: 20px;\n    width: 0;\n    bottom: 0;\n    left: 0;\n    transition: all 0.4s ease;\n    border: 1px solid #fff; }\n\n.contributors {\n  display: block;\n  font-style: normal; }\n  .contributors .flip-counter {\n    display: inline-block;\n    font-size: 16px;\n    color: #fff;\n    width: 80px;\n    text-align: left;\n    font-weight: bold;\n    transition: all 0.4 ease;\n    letter-spacing: 1.2px; }\n  .contributors p {\n    display: inline-block;\n    text-transform: capitalize;\n    font-size: 16px; }\n\n.price {\n  font-size: 24px;\n  text-transform: uppercase; }\n\n.modal-open {\n  overflow: visible; }\n\n.modal {\n  background: rgba(100, 211, 178, 0.2); }\n  .modal .modal-dialog {\n    margin: 150px auto;\n    position: relative; }\n    .modal .modal-dialog .close-btn {\n      position: absolute;\n      top: -20px;\n      right: -20px;\n      z-index: 10;\n      cursor: pointer; }\n      .modal .modal-dialog .close-btn i {\n        font-size: 36px;\n        color: #000;\n        -webkit-transition: all 0.3s;\n        -moz-transition: all 0.3s;\n        transition: all 0.3s; }\n    .modal .modal-dialog .modal-content {\n      border-radius: 3px;\n      padding: 20px;\n      background-color: #6f6f6f;\n      background-image: url(' + I(3) + ");\n      background-repeat: repeat;\n      position: relative; }\n      .modal .modal-dialog .modal-content .modal-logo {\n        width: 100%;\n        height: 71px;\n        display: block;\n        background-position: left;\n        background-image: url(" + I(4) + ");\n        background-size: 300px auto;\n        background-repeat: no-repeat; }\n      .modal .modal-dialog .modal-content .mail-logo {\n        text-align: center; }\n        .modal .modal-dialog .modal-content .mail-logo img {\n          margin: 25px auto; }\n      .modal .modal-dialog .modal-content .loading,\n      .modal .modal-dialog .modal-content .primary {\n        color: #333333;\n        background-color: white;\n        border-color: white;\n        font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        text-transform: uppercase;\n        -webkit-transition: all 400ms ease-in-out;\n        -moz-transition: all 400ms ease-in-out;\n        -o-transition: all 400ms ease-in-out;\n        transition: all 400ms ease-in-out;\n        font-weight: 700;\n        border-radius: 3px;\n        font-size: 18px;\n        text-align: center;\n        line-height: 1;\n        padding: 10px 25px;\n        border: none;\n        display: block;\n        margin: 0 auto; }\n        .modal .modal-dialog .modal-content .loading:focus, .modal .modal-dialog .modal-content .loading.focus,\n        .modal .modal-dialog .modal-content .primary:focus,\n        .modal .modal-dialog .modal-content .primary.focus {\n          color: #333333;\n          background-color: #e6e6e6;\n          border-color: #bfbfbf; }\n        .modal .modal-dialog .modal-content .loading:hover,\n        .modal .modal-dialog .modal-content .primary:hover {\n          color: #333333;\n          background-color: #e6e6e6;\n          border-color: #e0e0e0; }\n        .modal .modal-dialog .modal-content .loading:active, .modal .modal-dialog .modal-content .loading.active,\n        .open > .modal .modal-dialog .modal-content .loading.dropdown-toggle,\n        .modal .modal-dialog .modal-content .primary:active,\n        .modal .modal-dialog .modal-content .primary.active,\n        .open >\n        .modal .modal-dialog .modal-content .primary.dropdown-toggle {\n          color: #333333;\n          background-color: #e6e6e6;\n          border-color: #e0e0e0; }\n          .modal .modal-dialog .modal-content .loading:active:hover, .modal .modal-dialog .modal-content .loading:active:focus, .modal .modal-dialog .modal-content .loading:active.focus, .modal .modal-dialog .modal-content .loading.active:hover, .modal .modal-dialog .modal-content .loading.active:focus, .modal .modal-dialog .modal-content .loading.active.focus,\n          .open > .modal .modal-dialog .modal-content .loading.dropdown-toggle:hover,\n          .open > .modal .modal-dialog .modal-content .loading.dropdown-toggle:focus,\n          .open > .modal .modal-dialog .modal-content .loading.dropdown-toggle.focus,\n          .modal .modal-dialog .modal-content .primary:active:hover,\n          .modal .modal-dialog .modal-content .primary:active:focus,\n          .modal .modal-dialog .modal-content .primary:active.focus,\n          .modal .modal-dialog .modal-content .primary.active:hover,\n          .modal .modal-dialog .modal-content .primary.active:focus,\n          .modal .modal-dialog .modal-content .primary.active.focus,\n          .open >\n          .modal .modal-dialog .modal-content .primary.dropdown-toggle:hover,\n          .open >\n          .modal .modal-dialog .modal-content .primary.dropdown-toggle:focus,\n          .open >\n          .modal .modal-dialog .modal-content .primary.dropdown-toggle.focus {\n            color: #333333;\n            background-color: #d4d4d4;\n            border-color: #bfbfbf; }\n        .modal .modal-dialog .modal-content .loading:active, .modal .modal-dialog .modal-content .loading.active,\n        .open > .modal .modal-dialog .modal-content .loading.dropdown-toggle,\n        .modal .modal-dialog .modal-content .primary:active,\n        .modal .modal-dialog .modal-content .primary.active,\n        .open >\n        .modal .modal-dialog .modal-content .primary.dropdown-toggle {\n          background-image: none; }\n        .modal .modal-dialog .modal-content .loading.disabled:hover, .modal .modal-dialog .modal-content .loading.disabled:focus, .modal .modal-dialog .modal-content .loading.disabled.focus, .modal .modal-dialog .modal-content .loading[disabled]:hover, .modal .modal-dialog .modal-content .loading[disabled]:focus, .modal .modal-dialog .modal-content .loading[disabled].focus,\n        fieldset[disabled] .modal .modal-dialog .modal-content .loading:hover,\n        fieldset[disabled] .modal .modal-dialog .modal-content .loading:focus,\n        fieldset[disabled] .modal .modal-dialog .modal-content .loading.focus,\n        .modal .modal-dialog .modal-content .primary.disabled:hover,\n        .modal .modal-dialog .modal-content .primary.disabled:focus,\n        .modal .modal-dialog .modal-content .primary.disabled.focus,\n        .modal .modal-dialog .modal-content .primary[disabled]:hover,\n        .modal .modal-dialog .modal-content .primary[disabled]:focus,\n        .modal .modal-dialog .modal-content .primary[disabled].focus,\n        fieldset[disabled]\n        .modal .modal-dialog .modal-content .primary:hover,\n        fieldset[disabled]\n        .modal .modal-dialog .modal-content .primary:focus,\n        fieldset[disabled]\n        .modal .modal-dialog .modal-content .primary.focus {\n          background-color: white;\n          border-color: white; }\n        .modal .modal-dialog .modal-content .loading .badge,\n        .modal .modal-dialog .modal-content .primary .badge {\n          color: white;\n          background-color: #333333; }\n      .modal .modal-dialog .modal-content .loading {\n        background-color: #eeeeee; }\n      .modal .modal-dialog .modal-content h4 {\n        margin-top: 25px;\n        margin-bottom: 0;\n        font-size: 36px;\n        text-transform: uppercase;\n        text-align: center;\n        color: #fff; }\n      .modal .modal-dialog .modal-content p {\n        text-align: center;\n        color: #fff;\n        font-weight: bold;\n        text-transform: uppercase;\n        font-size: 36px; }\n      .modal .modal-dialog .modal-content h4, .modal .modal-dialog .modal-content p {\n        text-shadow: 0 0 1px #333; }\n      .modal .modal-dialog .modal-content input {\n        height: 38px;\n        margin-bottom: 25px; }\n\n.slick-slider {\n  position: relative;\n  display: block;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -khtml-user-select: none;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent; }\n\n.slick-list {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  margin: 0;\n  padding: 0; }\n  .slick-list:focus {\n    outline: none; }\n  .slick-list.dragging {\n    cursor: pointer;\n    cursor: hand; }\n\n.slick-slider .slick-track, .slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.slick-track {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block; }\n  .slick-track:before {\n    display: table;\n    content: ''; }\n  .slick-track:after {\n    display: table;\n    content: '';\n    clear: both; }\n\n.slick-loading .slick-track {\n  visibility: hidden; }\n\n.slick-slide {\n  display: none;\n  float: left;\n  height: 100%;\n  min-height: 1px; }\n\n[dir='rtl'] .slick-slide {\n  float: right; }\n\n.slick-slide img {\n  display: block; }\n\n.slick-slide.slick-loading img {\n  display: none; }\n\n.slick-slide.dragging img {\n  pointer-events: none; }\n\n.slick-initialized .slick-slide {\n  display: block; }\n\n.slick-loading .slick-slide {\n  visibility: hidden; }\n\n.slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n  border: 1px solid transparent; }\n\n.slick-arrow.slick-hidden {\n  display: none; }\n\n.video-slider {\n  position: relative; }\n  .video-slider:after {\n    position: absolute;\n    right: 0;\n    top: 0;\n    height: 170px;\n    width: 180px;\n    content: '';\n    z-index: 10;\n    background: transparent;\n    background: -webkit-linear-gradient(left, transparent, #fff);\n    background: -o-linear-gradient(right, transparent, #fff);\n    background: -moz-linear-gradient(right, transparent, #fff);\n    background: linear-gradient(to right, transparent, #fff); }\n  .video-slider:before {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 170px;\n    width: 180px;\n    content: '';\n    z-index: 10;\n    background: transparent;\n    background: -webkit-linear-gradient(left, #fff, transparent);\n    background: -o-linear-gradient(right, #fff, transparent);\n    background: -moz-linear-gradient(right, #fff, transparent);\n    background: linear-gradient(to right, #fff, transparent); }\n\n.youtube {\n  background-color: #000;\n  margin-bottom: 30px;\n  position: relative;\n  padding-top: 56.25%;\n  overflow: hidden;\n  cursor: pointer; }\n  .youtube img {\n    width: 100%;\n    top: -16.84%;\n    left: 0; }\n  .youtube .play-button {\n    width: 90px;\n    height: 60px;\n    background-color: #333;\n    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);\n    z-index: 1;\n    opacity: 0.8;\n    border-radius: 6px; }\n    .youtube .play-button:before {\n      content: \"\";\n      border-style: solid;\n      border-width: 15px 0 15px 26.0px;\n      border-color: transparent transparent transparent #fff; }\n  .youtube img,\n  .youtube .play-button {\n    cursor: pointer; }\n  .youtube img,\n  .youtube iframe,\n  .youtube .play-button,\n  .youtube .play-button:before {\n    position: absolute; }\n  .youtube .play-button,\n  .youtube .play-button:before {\n    top: 50%;\n    left: 50%;\n    transform: translate3d(-50%, -50%, 0); }\n  .youtube iframe {\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0; }\n", ""])
}, function(A, M) {
	function I(A, M) {
		var I = A[1] || "",
			g = A[3];
		if(!g) return I;
		if(M && "function" == typeof btoa) {
			var T = function(A) {
					return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(A)))) + " */"
				}(g),
				N = g.sources.map(function(A) {
					return "/*# sourceURL=" + g.sourceRoot + A + " */"
				});
			return [I].concat(N).concat([T]).join("\n")
		}
		return [I].join("\n")
	}
	A.exports = function(A) {
		var M = [];
		return M.toString = function() {
			return this.map(function(M) {
				var g = I(M, A);
				return M[2] ? "@media " + M[2] + "{" + g + "}" : g
			}).join("")
		}, M.i = function(A, I) {
			"string" == typeof A && (A = [
				[null, A, ""]
			]);
			for(var g = {}, T = 0; T < this.length; T++) {
				var N = this[T][0];
				"number" == typeof N && (g[N] = !0)
			}
			for(T = 0; T < A.length; T++) {
				var E = A[T];
				"number" == typeof E[0] && g[E[0]] || (I && !E[2] ? E[2] = I : I && (E[2] = "(" + E[2] + ") and (" + I + ")"), M.push(E))
			}
		}, M
	}
}, function(A, M) {
	A.exports = ""
}, function(A, M) {
	A.exports = ""
}, function(A, M) {
	A.exports = ""
}, function(A, M) {
	A.exports = ""
}, function(A, M) {
	A.exports = ""
}, function(A, M) {
	A.exports = ""
}, function(A, M) {
	A.exports = ""
}, function(A, M) {
	A.exports = ""
}, function(A, M) {
	A.exports = ""
}, function(A, M) {
	A.exports = ""
}, function(A, M) {
	A.exports = ""
}, function(A, M) {
	A.exports = ""
}, function(A, M, I) {
	function g(A, M) {
		for(var I = 0; I < A.length; I++) {
			var g = A[I],
				T = Q[g.id];
			if(T) {
				T.refs++;
				for(var N = 0; N < T.parts.length; N++) T.parts[N](g.parts[N]);
				for(; N < g.parts.length; N++) T.parts.push(D(g.parts[N], M))
			} else {
				var E = [];
				for(N = 0; N < g.parts.length; N++) E.push(D(g.parts[N], M));
				Q[g.id] = {
					id: g.id,
					refs: 1,
					parts: E
				}
			}
		}
	}

	function T(A, M) {
		for(var I = [], g = {}, T = 0; T < A.length; T++) {
			var N = A[T],
				E = M.base ? N[0] + M.base : N[0],
				C = {
					css: N[1],
					media: N[2],
					sourceMap: N[3]
				};
			g[E] ? g[E].parts.push(C) : I.push(g[E] = {
				id: E,
				parts: [C]
			})
		}
		return I
	}

	function N(A, M) {
		var I = n(A.insertInto);
		if(!I) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		var g = o[o.length - 1];
		if("top" === A.insertAt) g ? g.nextSibling ? I.insertBefore(M, g.nextSibling) : I.appendChild(M) : I.insertBefore(M, I.firstChild), o.push(M);
		else if("bottom" === A.insertAt) I.appendChild(M);
		else {
			if("object" != typeof A.insertAt || !A.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
			var T = n(A.insertInto + " " + A.insertAt.before);
			I.insertBefore(M, T)
		}
	}

	function E(A) {
		if(null === A.parentNode) return !1;
		A.parentNode.removeChild(A);
		var M = o.indexOf(A);
		M >= 0 && o.splice(M, 1)
	}

	function C(A) {
		var M = document.createElement("style");
		return A.attrs.type = "text/css", t(M, A.attrs), N(A, M), M
	}

	function t(A, M) {
		Object.keys(M).forEach(function(I) {
			A.setAttribute(I, M[I])
		})
	}

	function D(A, M) {
		var I, g, T, D;
		if(M.transform && A.css) {
			if(!(D = M.transform(A.css))) return function() {};
			A.css = D
		}
		if(M.singleton) {
			var Q = c++;
			I = w || (w = C(M)), g = B.bind(null, I, Q, !1), T = B.bind(null, I, Q, !0)
		} else A.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (I = function(A) {
			var M = document.createElement("link");
			return A.attrs.type = "text/css", A.attrs.rel = "stylesheet", t(M, A.attrs), N(A, M), M
		}(M), g = function(A, M, I) {
			var g = I.css,
				T = I.sourceMap,
				N = void 0 === M.convertToAbsoluteUrls && T;
			(M.convertToAbsoluteUrls || N) && (g = j(g));
			T && (g += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(T)))) + " */");
			var E = new Blob([g], {
					type: "text/css"
				}),
				C = A.href;
			A.href = URL.createObjectURL(E), C && URL.revokeObjectURL(C)
		}.bind(null, I, M), T = function() {
			E(I), I.href && URL.revokeObjectURL(I.href)
		}) : (I = C(M), g = function(A, M) {
			var I = M.css,
				g = M.media;
			g && A.setAttribute("media", g);
			if(A.styleSheet) A.styleSheet.cssText = I;
			else {
				for(; A.firstChild;) A.removeChild(A.firstChild);
				A.appendChild(document.createTextNode(I))
			}
		}.bind(null, I), T = function() {
			E(I)
		});
		return g(A),
			function(M) {
				if(M) {
					if(M.css === A.css && M.media === A.media && M.sourceMap === A.sourceMap) return;
					g(A = M)
				} else T()
			}
	}

	function B(A, M, I, g) {
		var T = I ? "" : g.css;
		if(A.styleSheet) A.styleSheet.cssText = x(M, T);
		else {
			var N = document.createTextNode(T),
				E = A.childNodes;
			E[M] && A.removeChild(E[M]), E.length ? A.insertBefore(N, E[M]) : A.appendChild(N)
		}
	}
	var Q = {},
		i = function(A) {
			var M;
			return function() {
				return void 0 === M && (M = A.apply(this, arguments)), M
			}
		}(function() {
			return window && document && document.all && !window.atob
		}),
		n = function(A) {
			var M = {};
			return function(A) {
				if(void 0 === M[A]) {
					var I = function(A) {
						return document.querySelector(A)
					}.call(this, A);
					if(I instanceof window.HTMLIFrameElement) try {
						I = I.contentDocument.head
					} catch(A) {
						I = null
					}
					M[A] = I
				}
				return M[A]
			}
		}(),
		w = null,
		c = 0,
		o = [],
		j = I(25);
	A.exports = function(A, M) {
		if("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
		(M = M || {}).attrs = "object" == typeof M.attrs ? M.attrs : {}, M.singleton || (M.singleton = i()), M.insertInto || (M.insertInto = "head"), M.insertAt || (M.insertAt = "bottom");
		var I = T(A, M);
		return g(I, M),
			function(A) {
				for(var N = [], E = 0; E < I.length; E++) {
					var C = I[E];
					(t = Q[C.id]).refs--, N.push(t)
				}
				if(A) {
					g(T(A, M), M)
				}
				for(E = 0; E < N.length; E++) {
					var t;
					if(0 === (t = N[E]).refs) {
						for(var D = 0; D < t.parts.length; D++) t.parts[D]();
						delete Q[t.id]
					}
				}
			}
	};
	var x = function() {
		var A = [];
		return function(M, I) {
			return A[M] = I, A.filter(Boolean).join("\n")
		}
	}()
}, function(A, M) {
	A.exports = function(A) {
		var M = "undefined" != typeof window && window.location;
		if(!M) throw new Error("fixUrls requires window.location");
		if(!A || "string" != typeof A) return A;
		var I = M.protocol + "//" + M.host,
			g = I + M.pathname.replace(/\/[^\/]*$/, "/");
		return A.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(A, M) {
			var T = M.trim().replace(/^"(.*)"$/, function(A, M) {
				return M
			}).replace(/^'(.*)'$/, function(A, M) {
				return M
			});
			if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(T)) return A;
			var N;
			return N = 0 === T.indexOf("//") ? T : 0 === T.indexOf("/") ? I + T : g + T.replace(/^\.\//, ""), "url(" + JSON.stringify(N) + ")"
		})
	}
}, function(A, M, I) {
	var g, T;
	! function(N) {
		g = [I(0)], void 0 === (T = function(A) {
			return N(A)
		}.apply(M, g)) || (A.exports = T)
	}(function(A) {
		function M(A) {
			return A < 1 / 2.75 ? 7.5625 * A * A : A < 2 / 2.75 ? 7.5625 * (A -= 1.5 / 2.75) * A + .75 : A < 2.5 / 2.75 ? 7.5625 * (A -= 2.25 / 2.75) * A + .9375 : 7.5625 * (A -= 2.625 / 2.75) * A + .984375
		}
		A.easing.jswing = A.easing.swing;
		var I = Math.pow,
			g = Math.sqrt,
			T = Math.sin,
			N = Math.cos,
			E = Math.PI,
			C = 2 * E / 3,
			t = 2 * E / 4.5;
		A.extend(A.easing, {
			def: "easeOutQuad",
			swing: function(M) {
				return A.easing[A.easing.def](M)
			},
			easeInQuad: function(A) {
				return A * A
			},
			easeOutQuad: function(A) {
				return 1 - (1 - A) * (1 - A)
			},
			easeInOutQuad: function(A) {
				return A < .5 ? 2 * A * A : 1 - I(-2 * A + 2, 2) / 2
			},
			easeInCubic: function(A) {
				return A * A * A
			},
			easeOutCubic: function(A) {
				return 1 - I(1 - A, 3)
			},
			easeInOutCubic: function(A) {
				return A < .5 ? 4 * A * A * A : 1 - I(-2 * A + 2, 3) / 2
			},
			easeInQuart: function(A) {
				return A * A * A * A
			},
			easeOutQuart: function(A) {
				return 1 - I(1 - A, 4)
			},
			easeInOutQuart: function(A) {
				return A < .5 ? 8 * A * A * A * A : 1 - I(-2 * A + 2, 4) / 2
			},
			easeInQuint: function(A) {
				return A * A * A * A * A
			},
			easeOutQuint: function(A) {
				return 1 - I(1 - A, 5)
			},
			easeInOutQuint: function(A) {
				return A < .5 ? 16 * A * A * A * A * A : 1 - I(-2 * A + 2, 5) / 2
			},
			easeInSine: function(A) {
				return 1 - N(A * E / 2)
			},
			easeOutSine: function(A) {
				return T(A * E / 2)
			},
			easeInOutSine: function(A) {
				return -(N(E * A) - 1) / 2
			},
			easeInExpo: function(A) {
				return 0 === A ? 0 : I(2, 10 * A - 10)
			},
			easeOutExpo: function(A) {
				return 1 === A ? 1 : 1 - I(2, -10 * A)
			},
			easeInOutExpo: function(A) {
				return 0 === A ? 0 : 1 === A ? 1 : A < .5 ? I(2, 20 * A - 10) / 2 : (2 - I(2, -20 * A + 10)) / 2
			},
			easeInCirc: function(A) {
				return 1 - g(1 - I(A, 2))
			},
			easeOutCirc: function(A) {
				return g(1 - I(A - 1, 2))
			},
			easeInOutCirc: function(A) {
				return A < .5 ? (1 - g(1 - I(2 * A, 2))) / 2 : (g(1 - I(-2 * A + 2, 2)) + 1) / 2
			},
			easeInElastic: function(A) {
				return 0 === A ? 0 : 1 === A ? 1 : -I(2, 10 * A - 10) * T((10 * A - 10.75) * C)
			},
			easeOutElastic: function(A) {
				return 0 === A ? 0 : 1 === A ? 1 : I(2, -10 * A) * T((10 * A - .75) * C) + 1
			},
			easeInOutElastic: function(A) {
				return 0 === A ? 0 : 1 === A ? 1 : A < .5 ? -I(2, 20 * A - 10) * T((20 * A - 11.125) * t) / 2 : I(2, -20 * A + 10) * T((20 * A - 11.125) * t) / 2 + 1
			},
			easeInBack: function(A) {
				return 2.70158 * A * A * A - 1.70158 * A * A
			},
			easeOutBack: function(A) {
				return 1 + 2.70158 * I(A - 1, 3) + 1.70158 * I(A - 1, 2)
			},
			easeInOutBack: function(A) {
				return A < .5 ? I(2 * A, 2) * (7.189819 * A - 2.5949095) / 2 : (I(2 * A - 2, 2) * (3.5949095 * (2 * A - 2) + 2.5949095) + 2) / 2
			},
			easeInBounce: function(A) {
				return 1 - M(1 - A)
			},
			easeOutBounce: M,
			easeInOutBounce: function(A) {
				return A < .5 ? (1 - M(1 - 2 * A)) / 2 : (1 + M(2 * A - 1)) / 2
			}
		})
	})
}, function(A, M, I) {
	(function(A) {
		if(void 0 === A) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(M) {
			"use strict";
			var I = A.fn.jquery.split(" ")[0].split(".");
			if(I[0] < 2 && I[1] < 9 || 1 == I[0] && 9 == I[1] && I[2] < 1 || I[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
		}(),
		function(A) {
			"use strict";
			A.fn.emulateTransitionEnd = function(M) {
				var I = !1,
					g = this;
				A(this).one("bsTransitionEnd", function() {
					I = !0
				});
				return setTimeout(function() {
					I || A(g).trigger(A.support.transition.end)
				}, M), this
			}, A(function() {
				A.support.transition = function() {
					var A = document.createElement("bootstrap"),
						M = {
							WebkitTransition: "webkitTransitionEnd",
							MozTransition: "transitionend",
							OTransition: "oTransitionEnd otransitionend",
							transition: "transitionend"
						};
					for(var I in M)
						if(void 0 !== A.style[I]) return {
							end: M[I]
						};
					return !1
				}(), A.support.transition && (A.event.special.bsTransitionEnd = {
					bindType: A.support.transition.end,
					delegateType: A.support.transition.end,
					handle: function(M) {
						if(A(M.target).is(this)) return M.handleObj.handler.apply(this, arguments)
					}
				})
			})
		}(A),
		function(A) {
			"use strict";
			var M = '[data-dismiss="alert"]',
				I = function(I) {
					A(I).on("click", M, this.close)
				};
			I.VERSION = "3.3.7", I.TRANSITION_DURATION = 150, I.prototype.close = function(M) {
				function g() {
					E.detach().trigger("closed.bs.alert").remove()
				}
				var T = A(this),
					N = T.attr("data-target");
				N || (N = (N = T.attr("href")) && N.replace(/.*(?=#[^\s]*$)/, ""));
				var E = A("#" === N ? [] : N);
				M && M.preventDefault(), E.length || (E = T.closest(".alert")), E.trigger(M = A.Event("close.bs.alert")), M.isDefaultPrevented() || (E.removeClass("in"), A.support.transition && E.hasClass("fade") ? E.one("bsTransitionEnd", g).emulateTransitionEnd(I.TRANSITION_DURATION) : g())
			};
			var g = A.fn.alert;
			A.fn.alert = function(M) {
				return this.each(function() {
					var g = A(this),
						T = g.data("bs.alert");
					T || g.data("bs.alert", T = new I(this)), "string" == typeof M && T[M].call(g)
				})
			}, A.fn.alert.Constructor = I, A.fn.alert.noConflict = function() {
				return A.fn.alert = g, this
			}, A(document).on("click.bs.alert.data-api", M, I.prototype.close)
		}(A),
		function(A) {
			"use strict";

			function M(M) {
				return this.each(function() {
					var g = A(this),
						T = g.data("bs.button"),
						N = "object" == typeof M && M;
					T || g.data("bs.button", T = new I(this, N)), "toggle" == M ? T.toggle() : M && T.setState(M)
				})
			}
			var I = function(M, g) {
				this.$element = A(M), this.options = A.extend({}, I.DEFAULTS, g), this.isLoading = !1
			};
			I.VERSION = "3.3.7", I.DEFAULTS = {
				loadingText: "loading..."
			}, I.prototype.setState = function(M) {
				var I = "disabled",
					g = this.$element,
					T = g.is("input") ? "val" : "html",
					N = g.data();
				M += "Text", null == N.resetText && g.data("resetText", g[T]()), setTimeout(A.proxy(function() {
					g[T](null == N[M] ? this.options[M] : N[M]), "loadingText" == M ? (this.isLoading = !0, g.addClass(I).attr(I, I).prop(I, !0)) : this.isLoading && (this.isLoading = !1, g.removeClass(I).removeAttr(I).prop(I, !1))
				}, this), 0)
			}, I.prototype.toggle = function() {
				var A = !0,
					M = this.$element.closest('[data-toggle="buttons"]');
				if(M.length) {
					var I = this.$element.find("input");
					"radio" == I.prop("type") ? (I.prop("checked") && (A = !1), M.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == I.prop("type") && (I.prop("checked") !== this.$element.hasClass("active") && (A = !1), this.$element.toggleClass("active")), I.prop("checked", this.$element.hasClass("active")), A && I.trigger("change")
				} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
			};
			var g = A.fn.button;
			A.fn.button = M, A.fn.button.Constructor = I, A.fn.button.noConflict = function() {
				return A.fn.button = g, this
			}, A(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(I) {
				var g = A(I.target).closest(".btn");
				M.call(g, "toggle"), A(I.target).is('input[type="radio"], input[type="checkbox"]') || (I.preventDefault(), g.is("input,button") ? g.trigger("focus") : g.find("input:visible,button:visible").first().trigger("focus"))
			}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(M) {
				A(M.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(M.type))
			})
		}(A),
		function(A) {
			"use strict";

			function M(M) {
				return this.each(function() {
					var g = A(this),
						T = g.data("bs.carousel"),
						N = A.extend({}, I.DEFAULTS, g.data(), "object" == typeof M && M),
						E = "string" == typeof M ? M : N.slide;
					T || g.data("bs.carousel", T = new I(this, N)), "number" == typeof M ? T.to(M) : E ? T[E]() : N.interval && T.pause().cycle()
				})
			}
			var I = function(M, I) {
				this.$element = A(M), this.$indicators = this.$element.find(".carousel-indicators"), this.options = I, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", A.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", A.proxy(this.pause, this)).on("mouseleave.bs.carousel", A.proxy(this.cycle, this))
			};
			I.VERSION = "3.3.7", I.TRANSITION_DURATION = 600, I.DEFAULTS = {
				interval: 5e3,
				pause: "hover",
				wrap: !0,
				keyboard: !0
			}, I.prototype.keydown = function(A) {
				if(!/input|textarea/i.test(A.target.tagName)) {
					switch(A.which) {
						case 37:
							this.prev();
							break;
						case 39:
							this.next();
							break;
						default:
							return
					}
					A.preventDefault()
				}
			}, I.prototype.cycle = function(M) {
				return M || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(A.proxy(this.next, this), this.options.interval)), this
			}, I.prototype.getItemIndex = function(A) {
				return this.$items = A.parent().children(".item"), this.$items.index(A || this.$active)
			}, I.prototype.getItemForDirection = function(A, M) {
				var I = this.getItemIndex(M);
				if(("prev" == A && 0 === I || "next" == A && I == this.$items.length - 1) && !this.options.wrap) return M;
				var g = (I + ("prev" == A ? -1 : 1)) % this.$items.length;
				return this.$items.eq(g)
			}, I.prototype.to = function(A) {
				var M = this,
					I = this.getItemIndex(this.$active = this.$element.find(".item.active"));
				if(!(A > this.$items.length - 1 || A < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
					M.to(A)
				}) : I == A ? this.pause().cycle() : this.slide(A > I ? "next" : "prev", this.$items.eq(A))
			}, I.prototype.pause = function(M) {
				return M || (this.paused = !0), this.$element.find(".next, .prev").length && A.support.transition && (this.$element.trigger(A.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
			}, I.prototype.next = function() {
				if(!this.sliding) return this.slide("next")
			}, I.prototype.prev = function() {
				if(!this.sliding) return this.slide("prev")
			}, I.prototype.slide = function(M, g) {
				var T = this.$element.find(".item.active"),
					N = g || this.getItemForDirection(M, T),
					E = this.interval,
					C = "next" == M ? "left" : "right",
					t = this;
				if(N.hasClass("active")) return this.sliding = !1;
				var D = N[0],
					B = A.Event("slide.bs.carousel", {
						relatedTarget: D,
						direction: C
					});
				if(this.$element.trigger(B), !B.isDefaultPrevented()) {
					if(this.sliding = !0, E && this.pause(), this.$indicators.length) {
						this.$indicators.find(".active").removeClass("active");
						var Q = A(this.$indicators.children()[this.getItemIndex(N)]);
						Q && Q.addClass("active")
					}
					var i = A.Event("slid.bs.carousel", {
						relatedTarget: D,
						direction: C
					});
					return A.support.transition && this.$element.hasClass("slide") ? (N.addClass(M), N[0].offsetWidth, T.addClass(C), N.addClass(C), T.one("bsTransitionEnd", function() {
						N.removeClass([M, C].join(" ")).addClass("active"), T.removeClass(["active", C].join(" ")), t.sliding = !1, setTimeout(function() {
							t.$element.trigger(i)
						}, 0)
					}).emulateTransitionEnd(I.TRANSITION_DURATION)) : (T.removeClass("active"), N.addClass("active"), this.sliding = !1, this.$element.trigger(i)), E && this.cycle(), this
				}
			};
			var g = A.fn.carousel;
			A.fn.carousel = M, A.fn.carousel.Constructor = I, A.fn.carousel.noConflict = function() {
				return A.fn.carousel = g, this
			};
			var T = function(I) {
				var g, T = A(this),
					N = A(T.attr("data-target") || (g = T.attr("href")) && g.replace(/.*(?=#[^\s]+$)/, ""));
				if(N.hasClass("carousel")) {
					var E = A.extend({}, N.data(), T.data()),
						C = T.attr("data-slide-to");
					C && (E.interval = !1), M.call(N, E), C && N.data("bs.carousel").to(C), I.preventDefault()
				}
			};
			A(document).on("click.bs.carousel.data-api", "[data-slide]", T).on("click.bs.carousel.data-api", "[data-slide-to]", T), A(window).on("load", function() {
				A('[data-ride="carousel"]').each(function() {
					var I = A(this);
					M.call(I, I.data())
				})
			})
		}(A),
		function(A) {
			"use strict";

			function M(M) {
				var I, g = M.attr("data-target") || (I = M.attr("href")) && I.replace(/.*(?=#[^\s]+$)/, "");
				return A(g)
			}

			function I(M) {
				return this.each(function() {
					var I = A(this),
						T = I.data("bs.collapse"),
						N = A.extend({}, g.DEFAULTS, I.data(), "object" == typeof M && M);
					!T && N.toggle && /show|hide/.test(M) && (N.toggle = !1), T || I.data("bs.collapse", T = new g(this, N)), "string" == typeof M && T[M]()
				})
			}
			var g = function(M, I) {
				this.$element = A(M), this.options = A.extend({}, g.DEFAULTS, I), this.$trigger = A('[data-toggle="collapse"][href="#' + M.id + '"],[data-toggle="collapse"][data-target="#' + M.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
			};
			g.VERSION = "3.3.7", g.TRANSITION_DURATION = 350, g.DEFAULTS = {
				toggle: !0
			}, g.prototype.dimension = function() {
				return this.$element.hasClass("width") ? "width" : "height"
			}, g.prototype.show = function() {
				if(!this.transitioning && !this.$element.hasClass("in")) {
					var M, T = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
					if(!(T && T.length && (M = T.data("bs.collapse")) && M.transitioning)) {
						var N = A.Event("show.bs.collapse");
						if(this.$element.trigger(N), !N.isDefaultPrevented()) {
							T && T.length && (I.call(T, "hide"), M || T.data("bs.collapse", null));
							var E = this.dimension();
							this.$element.removeClass("collapse").addClass("collapsing")[E](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
							var C = function() {
								this.$element.removeClass("collapsing").addClass("collapse in")[E](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
							};
							if(!A.support.transition) return C.call(this);
							var t = A.camelCase(["scroll", E].join("-"));
							this.$element.one("bsTransitionEnd", A.proxy(C, this)).emulateTransitionEnd(g.TRANSITION_DURATION)[E](this.$element[0][t])
						}
					}
				}
			}, g.prototype.hide = function() {
				if(!this.transitioning && this.$element.hasClass("in")) {
					var M = A.Event("hide.bs.collapse");
					if(this.$element.trigger(M), !M.isDefaultPrevented()) {
						var I = this.dimension();
						this.$element[I](this.$element[I]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
						var T = function() {
							this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
						};
						if(!A.support.transition) return T.call(this);
						this.$element[I](0).one("bsTransitionEnd", A.proxy(T, this)).emulateTransitionEnd(g.TRANSITION_DURATION)
					}
				}
			}, g.prototype.toggle = function() {
				this[this.$element.hasClass("in") ? "hide" : "show"]()
			}, g.prototype.getParent = function() {
				return A(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(A.proxy(function(I, g) {
					var T = A(g);
					this.addAriaAndCollapsedClass(M(T), T)
				}, this)).end()
			}, g.prototype.addAriaAndCollapsedClass = function(A, M) {
				var I = A.hasClass("in");
				A.attr("aria-expanded", I), M.toggleClass("collapsed", !I).attr("aria-expanded", I)
			};
			var T = A.fn.collapse;
			A.fn.collapse = I, A.fn.collapse.Constructor = g, A.fn.collapse.noConflict = function() {
				return A.fn.collapse = T, this
			}, A(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(g) {
				var T = A(this);
				T.attr("data-target") || g.preventDefault();
				var N = M(T),
					E = N.data("bs.collapse") ? "toggle" : T.data();
				I.call(N, E)
			})
		}(A),
		function(A) {
			"use strict";

			function M(M) {
				var I = M.attr("data-target");
				I || (I = (I = M.attr("href")) && /#[A-Za-z]/.test(I) && I.replace(/.*(?=#[^\s]*$)/, ""));
				var g = I && A(I);
				return g && g.length ? g : M.parent()
			}

			function I(I) {
				I && 3 === I.which || (A(g).remove(), A(T).each(function() {
					var g = A(this),
						T = M(g),
						N = {
							relatedTarget: this
						};
					T.hasClass("open") && (I && "click" == I.type && /input|textarea/i.test(I.target.tagName) && A.contains(T[0], I.target) || (T.trigger(I = A.Event("hide.bs.dropdown", N)), I.isDefaultPrevented() || (g.attr("aria-expanded", "false"), T.removeClass("open").trigger(A.Event("hidden.bs.dropdown", N)))))
				}))
			}
			var g = ".dropdown-backdrop",
				T = '[data-toggle="dropdown"]',
				N = function(M) {
					A(M).on("click.bs.dropdown", this.toggle)
				};
			N.VERSION = "3.3.7", N.prototype.toggle = function(g) {
				var T = A(this);
				if(!T.is(".disabled, :disabled")) {
					var N = M(T),
						E = N.hasClass("open");
					if(I(), !E) {
						"ontouchstart" in document.documentElement && !N.closest(".navbar-nav").length && A(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(A(this)).on("click", I);
						var C = {
							relatedTarget: this
						};
						if(N.trigger(g = A.Event("show.bs.dropdown", C)), g.isDefaultPrevented()) return;
						T.trigger("focus").attr("aria-expanded", "true"), N.toggleClass("open").trigger(A.Event("shown.bs.dropdown", C))
					}
					return !1
				}
			}, N.prototype.keydown = function(I) {
				if(/(38|40|27|32)/.test(I.which) && !/input|textarea/i.test(I.target.tagName)) {
					var g = A(this);
					if(I.preventDefault(), I.stopPropagation(), !g.is(".disabled, :disabled")) {
						var N = M(g),
							E = N.hasClass("open");
						if(!E && 27 != I.which || E && 27 == I.which) return 27 == I.which && N.find(T).trigger("focus"), g.trigger("click");
						var C = N.find(".dropdown-menu li:not(.disabled):visible a");
						if(C.length) {
							var t = C.index(I.target);
							38 == I.which && t > 0 && t--, 40 == I.which && t < C.length - 1 && t++, ~t || (t = 0), C.eq(t).trigger("focus")
						}
					}
				}
			};
			var E = A.fn.dropdown;
			A.fn.dropdown = function(M) {
				return this.each(function() {
					var I = A(this),
						g = I.data("bs.dropdown");
					g || I.data("bs.dropdown", g = new N(this)), "string" == typeof M && g[M].call(I)
				})
			}, A.fn.dropdown.Constructor = N, A.fn.dropdown.noConflict = function() {
				return A.fn.dropdown = E, this
			}, A(document).on("click.bs.dropdown.data-api", I).on("click.bs.dropdown.data-api", ".dropdown form", function(A) {
				A.stopPropagation()
			}).on("click.bs.dropdown.data-api", T, N.prototype.toggle).on("keydown.bs.dropdown.data-api", T, N.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", N.prototype.keydown)
		}(A),
		function(A) {
			"use strict";

			function M(M, g) {
				return this.each(function() {
					var T = A(this),
						N = T.data("bs.modal"),
						E = A.extend({}, I.DEFAULTS, T.data(), "object" == typeof M && M);
					N || T.data("bs.modal", N = new I(this, E)), "string" == typeof M ? N[M](g) : E.show && N.show(g)
				})
			}
			var I = function(M, I) {
				this.options = I, this.$body = A(document.body), this.$element = A(M), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, A.proxy(function() {
					this.$element.trigger("loaded.bs.modal")
				}, this))
			};
			I.VERSION = "3.3.7", I.TRANSITION_DURATION = 300, I.BACKDROP_TRANSITION_DURATION = 150, I.DEFAULTS = {
				backdrop: !0,
				keyboard: !0,
				show: !0
			}, I.prototype.toggle = function(A) {
				return this.isShown ? this.hide() : this.show(A)
			}, I.prototype.show = function(M) {
				var g = this,
					T = A.Event("show.bs.modal", {
						relatedTarget: M
					});
				this.$element.trigger(T), this.isShown || T.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', A.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
					g.$element.one("mouseup.dismiss.bs.modal", function(M) {
						A(M.target).is(g.$element) && (g.ignoreBackdropClick = !0)
					})
				}), this.backdrop(function() {
					var T = A.support.transition && g.$element.hasClass("fade");
					g.$element.parent().length || g.$element.appendTo(g.$body), g.$element.show().scrollTop(0), g.adjustDialog(), T && g.$element[0].offsetWidth, g.$element.addClass("in"), g.enforceFocus();
					var N = A.Event("shown.bs.modal", {
						relatedTarget: M
					});
					T ? g.$dialog.one("bsTransitionEnd", function() {
						g.$element.trigger("focus").trigger(N)
					}).emulateTransitionEnd(I.TRANSITION_DURATION) : g.$element.trigger("focus").trigger(N)
				}))
			}, I.prototype.hide = function(M) {
				M && M.preventDefault(), M = A.Event("hide.bs.modal"), this.$element.trigger(M), this.isShown && !M.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), A(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), A.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", A.proxy(this.hideModal, this)).emulateTransitionEnd(I.TRANSITION_DURATION) : this.hideModal())
			}, I.prototype.enforceFocus = function() {
				A(document).off("focusin.bs.modal").on("focusin.bs.modal", A.proxy(function(A) {
					document === A.target || this.$element[0] === A.target || this.$element.has(A.target).length || this.$element.trigger("focus")
				}, this))
			}, I.prototype.escape = function() {
				this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", A.proxy(function(A) {
					27 == A.which && this.hide()
				}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
			}, I.prototype.resize = function() {
				this.isShown ? A(window).on("resize.bs.modal", A.proxy(this.handleUpdate, this)) : A(window).off("resize.bs.modal")
			}, I.prototype.hideModal = function() {
				var A = this;
				this.$element.hide(), this.backdrop(function() {
					A.$body.removeClass("modal-open"), A.resetAdjustments(), A.resetScrollbar(), A.$element.trigger("hidden.bs.modal")
				})
			}, I.prototype.removeBackdrop = function() {
				this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
			}, I.prototype.backdrop = function(M) {
				var g = this,
					T = this.$element.hasClass("fade") ? "fade" : "";
				if(this.isShown && this.options.backdrop) {
					var N = A.support.transition && T;
					if(this.$backdrop = A(document.createElement("div")).addClass("modal-backdrop " + T).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", A.proxy(function(A) {
							this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : A.target === A.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
						}, this)), N && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !M) return;
					N ? this.$backdrop.one("bsTransitionEnd", M).emulateTransitionEnd(I.BACKDROP_TRANSITION_DURATION) : M()
				} else if(!this.isShown && this.$backdrop) {
					this.$backdrop.removeClass("in");
					var E = function() {
						g.removeBackdrop(), M && M()
					};
					A.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", E).emulateTransitionEnd(I.BACKDROP_TRANSITION_DURATION) : E()
				} else M && M()
			}, I.prototype.handleUpdate = function() {
				this.adjustDialog()
			}, I.prototype.adjustDialog = function() {
				var A = this.$element[0].scrollHeight > document.documentElement.clientHeight;
				this.$element.css({
					paddingLeft: !this.bodyIsOverflowing && A ? this.scrollbarWidth : "",
					paddingRight: this.bodyIsOverflowing && !A ? this.scrollbarWidth : ""
				})
			}, I.prototype.resetAdjustments = function() {
				this.$element.css({
					paddingLeft: "",
					paddingRight: ""
				})
			}, I.prototype.checkScrollbar = function() {
				var A = window.innerWidth;
				if(!A) {
					var M = document.documentElement.getBoundingClientRect();
					A = M.right - Math.abs(M.left)
				}
				this.bodyIsOverflowing = document.body.clientWidth < A, this.scrollbarWidth = this.measureScrollbar()
			}, I.prototype.setScrollbar = function() {
				var A = parseInt(this.$body.css("padding-right") || 0, 10);
				this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", A + this.scrollbarWidth)
			}, I.prototype.resetScrollbar = function() {
				this.$body.css("padding-right", this.originalBodyPad)
			}, I.prototype.measureScrollbar = function() {
				var A = document.createElement("div");
				A.className = "modal-scrollbar-measure", this.$body.append(A);
				var M = A.offsetWidth - A.clientWidth;
				return this.$body[0].removeChild(A), M
			};
			var g = A.fn.modal;
			A.fn.modal = M, A.fn.modal.Constructor = I, A.fn.modal.noConflict = function() {
				return A.fn.modal = g, this
			}, A(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(I) {
				var g = A(this),
					T = g.attr("href"),
					N = A(g.attr("data-target") || T && T.replace(/.*(?=#[^\s]+$)/, "")),
					E = N.data("bs.modal") ? "toggle" : A.extend({
						remote: !/#/.test(T) && T
					}, N.data(), g.data());
				g.is("a") && I.preventDefault(), N.one("show.bs.modal", function(A) {
					A.isDefaultPrevented() || N.one("hidden.bs.modal", function() {
						g.is(":visible") && g.trigger("focus")
					})
				}), M.call(N, E, this)
			})
		}(A),
		function(A) {
			"use strict";
			var M = function(A, M) {
				this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", A, M)
			};
			M.VERSION = "3.3.7", M.TRANSITION_DURATION = 150, M.DEFAULTS = {
				animation: !0,
				placement: "top",
				selector: !1,
				template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
				trigger: "hover focus",
				title: "",
				delay: 0,
				html: !1,
				container: !1,
				viewport: {
					selector: "body",
					padding: 0
				}
			}, M.prototype.init = function(M, I, g) {
				if(this.enabled = !0, this.type = M, this.$element = A(I), this.options = this.getOptions(g), this.$viewport = this.options.viewport && A(A.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
						click: !1,
						hover: !1,
						focus: !1
					}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
				for(var T = this.options.trigger.split(" "), N = T.length; N--;) {
					var E = T[N];
					if("click" == E) this.$element.on("click." + this.type, this.options.selector, A.proxy(this.toggle, this));
					else if("manual" != E) {
						var C = "hover" == E ? "mouseenter" : "focusin",
							t = "hover" == E ? "mouseleave" : "focusout";
						this.$element.on(C + "." + this.type, this.options.selector, A.proxy(this.enter, this)), this.$element.on(t + "." + this.type, this.options.selector, A.proxy(this.leave, this))
					}
				}
				this.options.selector ? this._options = A.extend({}, this.options, {
					trigger: "manual",
					selector: ""
				}) : this.fixTitle()
			}, M.prototype.getDefaults = function() {
				return M.DEFAULTS
			}, M.prototype.getOptions = function(M) {
				return(M = A.extend({}, this.getDefaults(), this.$element.data(), M)).delay && "number" == typeof M.delay && (M.delay = {
					show: M.delay,
					hide: M.delay
				}), M
			}, M.prototype.getDelegateOptions = function() {
				var M = {},
					I = this.getDefaults();
				return this._options && A.each(this._options, function(A, g) {
					I[A] != g && (M[A] = g)
				}), M
			}, M.prototype.enter = function(M) {
				var I = M instanceof this.constructor ? M : A(M.currentTarget).data("bs." + this.type);
				if(I || (I = new this.constructor(M.currentTarget, this.getDelegateOptions()), A(M.currentTarget).data("bs." + this.type, I)), M instanceof A.Event && (I.inState["focusin" == M.type ? "focus" : "hover"] = !0), I.tip().hasClass("in") || "in" == I.hoverState) I.hoverState = "in";
				else {
					if(clearTimeout(I.timeout), I.hoverState = "in", !I.options.delay || !I.options.delay.show) return I.show();
					I.timeout = setTimeout(function() {
						"in" == I.hoverState && I.show()
					}, I.options.delay.show)
				}
			}, M.prototype.isInStateTrue = function() {
				for(var A in this.inState)
					if(this.inState[A]) return !0;
				return !1
			}, M.prototype.leave = function(M) {
				var I = M instanceof this.constructor ? M : A(M.currentTarget).data("bs." + this.type);
				if(I || (I = new this.constructor(M.currentTarget, this.getDelegateOptions()), A(M.currentTarget).data("bs." + this.type, I)), M instanceof A.Event && (I.inState["focusout" == M.type ? "focus" : "hover"] = !1), !I.isInStateTrue()) {
					if(clearTimeout(I.timeout), I.hoverState = "out", !I.options.delay || !I.options.delay.hide) return I.hide();
					I.timeout = setTimeout(function() {
						"out" == I.hoverState && I.hide()
					}, I.options.delay.hide)
				}
			}, M.prototype.show = function() {
				var I = A.Event("show.bs." + this.type);
				if(this.hasContent() && this.enabled) {
					this.$element.trigger(I);
					var g = A.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
					if(I.isDefaultPrevented() || !g) return;
					var T = this,
						N = this.tip(),
						E = this.getUID(this.type);
					this.setContent(), N.attr("id", E), this.$element.attr("aria-describedby", E), this.options.animation && N.addClass("fade");
					var C = "function" == typeof this.options.placement ? this.options.placement.call(this, N[0], this.$element[0]) : this.options.placement,
						t = /\s?auto?\s?/i,
						D = t.test(C);
					D && (C = C.replace(t, "") || "top"), N.detach().css({
						top: 0,
						left: 0,
						display: "block"
					}).addClass(C).data("bs." + this.type, this), this.options.container ? N.appendTo(this.options.container) : N.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
					var B = this.getPosition(),
						Q = N[0].offsetWidth,
						i = N[0].offsetHeight;
					if(D) {
						var n = C,
							w = this.getPosition(this.$viewport);
						C = "bottom" == C && B.bottom + i > w.bottom ? "top" : "top" == C && B.top - i < w.top ? "bottom" : "right" == C && B.right + Q > w.width ? "left" : "left" == C && B.left - Q < w.left ? "right" : C, N.removeClass(n).addClass(C)
					}
					var c = this.getCalculatedOffset(C, B, Q, i);
					this.applyPlacement(c, C);
					var o = function() {
						var A = T.hoverState;
						T.$element.trigger("shown.bs." + T.type), T.hoverState = null, "out" == A && T.leave(T)
					};
					A.support.transition && this.$tip.hasClass("fade") ? N.one("bsTransitionEnd", o).emulateTransitionEnd(M.TRANSITION_DURATION) : o()
				}
			}, M.prototype.applyPlacement = function(M, I) {
				var g = this.tip(),
					T = g[0].offsetWidth,
					N = g[0].offsetHeight,
					E = parseInt(g.css("margin-top"), 10),
					C = parseInt(g.css("margin-left"), 10);
				isNaN(E) && (E = 0), isNaN(C) && (C = 0), M.top += E, M.left += C, A.offset.setOffset(g[0], A.extend({
					using: function(A) {
						g.css({
							top: Math.round(A.top),
							left: Math.round(A.left)
						})
					}
				}, M), 0), g.addClass("in");
				var t = g[0].offsetWidth,
					D = g[0].offsetHeight;
				"top" == I && D != N && (M.top = M.top + N - D);
				var B = this.getViewportAdjustedDelta(I, M, t, D);
				B.left ? M.left += B.left : M.top += B.top;
				var Q = /top|bottom/.test(I),
					i = Q ? 2 * B.left - T + t : 2 * B.top - N + D,
					n = Q ? "offsetWidth" : "offsetHeight";
				g.offset(M), this.replaceArrow(i, g[0][n], Q)
			}, M.prototype.replaceArrow = function(A, M, I) {
				this.arrow().css(I ? "left" : "top", 50 * (1 - A / M) + "%").css(I ? "top" : "left", "")
			}, M.prototype.setContent = function() {
				var A = this.tip(),
					M = this.getTitle();
				A.find(".tooltip-inner")[this.options.html ? "html" : "text"](M), A.removeClass("fade in top bottom left right")
			}, M.prototype.hide = function(I) {
				function g() {
					"in" != T.hoverState && N.detach(), T.$element && T.$element.removeAttr("aria-describedby").trigger("hidden.bs." + T.type), I && I()
				}
				var T = this,
					N = A(this.$tip),
					E = A.Event("hide.bs." + this.type);
				if(this.$element.trigger(E), !E.isDefaultPrevented()) return N.removeClass("in"), A.support.transition && N.hasClass("fade") ? N.one("bsTransitionEnd", g).emulateTransitionEnd(M.TRANSITION_DURATION) : g(), this.hoverState = null, this
			}, M.prototype.fixTitle = function() {
				var A = this.$element;
				(A.attr("title") || "string" != typeof A.attr("data-original-title")) && A.attr("data-original-title", A.attr("title") || "").attr("title", "")
			}, M.prototype.hasContent = function() {
				return this.getTitle()
			}, M.prototype.getPosition = function(M) {
				var I = (M = M || this.$element)[0],
					g = "BODY" == I.tagName,
					T = I.getBoundingClientRect();
				null == T.width && (T = A.extend({}, T, {
					width: T.right - T.left,
					height: T.bottom - T.top
				}));
				var N = window.SVGElement && I instanceof window.SVGElement,
					E = g ? {
						top: 0,
						left: 0
					} : N ? null : M.offset(),
					C = {
						scroll: g ? document.documentElement.scrollTop || document.body.scrollTop : M.scrollTop()
					},
					t = g ? {
						width: A(window).width(),
						height: A(window).height()
					} : null;
				return A.extend({}, T, C, t, E)
			}, M.prototype.getCalculatedOffset = function(A, M, I, g) {
				return "bottom" == A ? {
					top: M.top + M.height,
					left: M.left + M.width / 2 - I / 2
				} : "top" == A ? {
					top: M.top - g,
					left: M.left + M.width / 2 - I / 2
				} : "left" == A ? {
					top: M.top + M.height / 2 - g / 2,
					left: M.left - I
				} : {
					top: M.top + M.height / 2 - g / 2,
					left: M.left + M.width
				}
			}, M.prototype.getViewportAdjustedDelta = function(A, M, I, g) {
				var T = {
					top: 0,
					left: 0
				};
				if(!this.$viewport) return T;
				var N = this.options.viewport && this.options.viewport.padding || 0,
					E = this.getPosition(this.$viewport);
				if(/right|left/.test(A)) {
					var C = M.top - N - E.scroll,
						t = M.top + N - E.scroll + g;
					C < E.top ? T.top = E.top - C : t > E.top + E.height && (T.top = E.top + E.height - t)
				} else {
					var D = M.left - N,
						B = M.left + N + I;
					D < E.left ? T.left = E.left - D : B > E.right && (T.left = E.left + E.width - B)
				}
				return T
			}, M.prototype.getTitle = function() {
				var A = this.$element,
					M = this.options;
				return A.attr("data-original-title") || ("function" == typeof M.title ? M.title.call(A[0]) : M.title)
			}, M.prototype.getUID = function(A) {
				do {
					A += ~~(1e6 * Math.random())
				} while (document.getElementById(A));
				return A
			}, M.prototype.tip = function() {
				if(!this.$tip && (this.$tip = A(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
				return this.$tip
			}, M.prototype.arrow = function() {
				return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
			}, M.prototype.enable = function() {
				this.enabled = !0
			}, M.prototype.disable = function() {
				this.enabled = !1
			}, M.prototype.toggleEnabled = function() {
				this.enabled = !this.enabled
			}, M.prototype.toggle = function(M) {
				var I = this;
				M && ((I = A(M.currentTarget).data("bs." + this.type)) || (I = new this.constructor(M.currentTarget, this.getDelegateOptions()), A(M.currentTarget).data("bs." + this.type, I))), M ? (I.inState.click = !I.inState.click, I.isInStateTrue() ? I.enter(I) : I.leave(I)) : I.tip().hasClass("in") ? I.leave(I) : I.enter(I)
			}, M.prototype.destroy = function() {
				var A = this;
				clearTimeout(this.timeout), this.hide(function() {
					A.$element.off("." + A.type).removeData("bs." + A.type), A.$tip && A.$tip.detach(), A.$tip = null, A.$arrow = null, A.$viewport = null, A.$element = null
				})
			};
			var I = A.fn.tooltip;
			A.fn.tooltip = function(I) {
				return this.each(function() {
					var g = A(this),
						T = g.data("bs.tooltip"),
						N = "object" == typeof I && I;
					!T && /destroy|hide/.test(I) || (T || g.data("bs.tooltip", T = new M(this, N)), "string" == typeof I && T[I]())
				})
			}, A.fn.tooltip.Constructor = M, A.fn.tooltip.noConflict = function() {
				return A.fn.tooltip = I, this
			}
		}(A),
		function(A) {
			"use strict";
			var M = function(A, M) {
				this.init("popover", A, M)
			};
			if(!A.fn.tooltip) throw new Error("Popover requires tooltip.js");
			M.VERSION = "3.3.7", M.DEFAULTS = A.extend({}, A.fn.tooltip.Constructor.DEFAULTS, {
				placement: "right",
				trigger: "click",
				content: "",
				template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
			}), M.prototype = A.extend({}, A.fn.tooltip.Constructor.prototype), M.prototype.constructor = M, M.prototype.getDefaults = function() {
				return M.DEFAULTS
			}, M.prototype.setContent = function() {
				var A = this.tip(),
					M = this.getTitle(),
					I = this.getContent();
				A.find(".popover-title")[this.options.html ? "html" : "text"](M), A.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof I ? "html" : "append" : "text"](I), A.removeClass("fade top bottom left right in"), A.find(".popover-title").html() || A.find(".popover-title").hide()
			}, M.prototype.hasContent = function() {
				return this.getTitle() || this.getContent()
			}, M.prototype.getContent = function() {
				var A = this.$element,
					M = this.options;
				return A.attr("data-content") || ("function" == typeof M.content ? M.content.call(A[0]) : M.content)
			}, M.prototype.arrow = function() {
				return this.$arrow = this.$arrow || this.tip().find(".arrow")
			};
			var I = A.fn.popover;
			A.fn.popover = function(I) {
				return this.each(function() {
					var g = A(this),
						T = g.data("bs.popover"),
						N = "object" == typeof I && I;
					!T && /destroy|hide/.test(I) || (T || g.data("bs.popover", T = new M(this, N)), "string" == typeof I && T[I]())
				})
			}, A.fn.popover.Constructor = M, A.fn.popover.noConflict = function() {
				return A.fn.popover = I, this
			}
		}(A),
		function(A) {
			"use strict";

			function M(I, g) {
				this.$body = A(document.body), this.$scrollElement = A(A(I).is(document.body) ? window : I), this.options = A.extend({}, M.DEFAULTS, g), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", A.proxy(this.process, this)), this.refresh(), this.process()
			}

			function I(I) {
				return this.each(function() {
					var g = A(this),
						T = g.data("bs.scrollspy"),
						N = "object" == typeof I && I;
					T || g.data("bs.scrollspy", T = new M(this, N)), "string" == typeof I && T[I]()
				})
			}
			M.VERSION = "3.3.7", M.DEFAULTS = {
				offset: 10
			}, M.prototype.getScrollHeight = function() {
				return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
			}, M.prototype.refresh = function() {
				var M = this,
					I = "offset",
					g = 0;
				this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), A.isWindow(this.$scrollElement[0]) || (I = "position", g = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
					var M = A(this),
						T = M.data("target") || M.attr("href"),
						N = /^#./.test(T) && A(T);
					return N && N.length && N.is(":visible") && [
						[N[I]().top + g, T]
					] || null
				}).sort(function(A, M) {
					return A[0] - M[0]
				}).each(function() {
					M.offsets.push(this[0]), M.targets.push(this[1])
				})
			}, M.prototype.process = function() {
				var A, M = this.$scrollElement.scrollTop() + this.options.offset,
					I = this.getScrollHeight(),
					g = this.options.offset + I - this.$scrollElement.height(),
					T = this.offsets,
					N = this.targets,
					E = this.activeTarget;
				if(this.scrollHeight != I && this.refresh(), M >= g) return E != (A = N[N.length - 1]) && this.activate(A);
				if(E && M < T[0]) return this.activeTarget = null, this.clear();
				for(A = T.length; A--;) E != N[A] && M >= T[A] && (void 0 === T[A + 1] || M < T[A + 1]) && this.activate(N[A])
			}, M.prototype.activate = function(M) {
				this.activeTarget = M, this.clear();
				var I = this.selector + '[data-target="' + M + '"],' + this.selector + '[href="' + M + '"]',
					g = A(I).parents("li").addClass("active");
				g.parent(".dropdown-menu").length && (g = g.closest("li.dropdown").addClass("active")), g.trigger("activate.bs.scrollspy")
			}, M.prototype.clear = function() {
				A(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
			};
			var g = A.fn.scrollspy;
			A.fn.scrollspy = I, A.fn.scrollspy.Constructor = M, A.fn.scrollspy.noConflict = function() {
				return A.fn.scrollspy = g, this
			}, A(window).on("load.bs.scrollspy.data-api", function() {
				A('[data-spy="scroll"]').each(function() {
					var M = A(this);
					I.call(M, M.data())
				})
			})
		}(A),
		function(A) {
			"use strict";

			function M(M) {
				return this.each(function() {
					var g = A(this),
						T = g.data("bs.tab");
					T || g.data("bs.tab", T = new I(this)), "string" == typeof M && T[M]()
				})
			}
			var I = function(M) {
				this.element = A(M)
			};
			I.VERSION = "3.3.7", I.TRANSITION_DURATION = 150, I.prototype.show = function() {
				var M = this.element,
					I = M.closest("ul:not(.dropdown-menu)"),
					g = M.data("target");
				if(g || (g = (g = M.attr("href")) && g.replace(/.*(?=#[^\s]*$)/, "")), !M.parent("li").hasClass("active")) {
					var T = I.find(".active:last a"),
						N = A.Event("hide.bs.tab", {
							relatedTarget: M[0]
						}),
						E = A.Event("show.bs.tab", {
							relatedTarget: T[0]
						});
					if(T.trigger(N), M.trigger(E), !E.isDefaultPrevented() && !N.isDefaultPrevented()) {
						var C = A(g);
						this.activate(M.closest("li"), I), this.activate(C, C.parent(), function() {
							T.trigger({
								type: "hidden.bs.tab",
								relatedTarget: M[0]
							}), M.trigger({
								type: "shown.bs.tab",
								relatedTarget: T[0]
							})
						})
					}
				}
			}, I.prototype.activate = function(M, g, T) {
				function N() {
					E.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), M.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), C ? (M[0].offsetWidth, M.addClass("in")) : M.removeClass("fade"), M.parent(".dropdown-menu").length && M.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), T && T()
				}
				var E = g.find("> .active"),
					C = T && A.support.transition && (E.length && E.hasClass("fade") || !!g.find("> .fade").length);
				E.length && C ? E.one("bsTransitionEnd", N).emulateTransitionEnd(I.TRANSITION_DURATION) : N(), E.removeClass("in")
			};
			var g = A.fn.tab;
			A.fn.tab = M, A.fn.tab.Constructor = I, A.fn.tab.noConflict = function() {
				return A.fn.tab = g, this
			};
			var T = function(I) {
				I.preventDefault(), M.call(A(this), "show")
			};
			A(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', T).on("click.bs.tab.data-api", '[data-toggle="pill"]', T)
		}(A),
		function(A) {
			"use strict";

			function M(M) {
				return this.each(function() {
					var g = A(this),
						T = g.data("bs.affix"),
						N = "object" == typeof M && M;
					T || g.data("bs.affix", T = new I(this, N)), "string" == typeof M && T[M]()
				})
			}
			var I = function(M, g) {
				this.options = A.extend({}, I.DEFAULTS, g), this.$target = A(this.options.target).on("scroll.bs.affix.data-api", A.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", A.proxy(this.checkPositionWithEventLoop, this)), this.$element = A(M), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
			};
			I.VERSION = "3.3.7", I.RESET = "affix affix-top affix-bottom", I.DEFAULTS = {
				offset: 0,
				target: window
			}, I.prototype.getState = function(A, M, I, g) {
				var T = this.$target.scrollTop(),
					N = this.$element.offset(),
					E = this.$target.height();
				if(null != I && "top" == this.affixed) return T < I && "top";
				if("bottom" == this.affixed) return null != I ? !(T + this.unpin <= N.top) && "bottom" : !(T + E <= A - g) && "bottom";
				var C = null == this.affixed,
					t = C ? T : N.top;
				return null != I && T <= I ? "top" : null != g && t + (C ? E : M) >= A - g && "bottom"
			}, I.prototype.getPinnedOffset = function() {
				if(this.pinnedOffset) return this.pinnedOffset;
				this.$element.removeClass(I.RESET).addClass("affix");
				var A = this.$target.scrollTop(),
					M = this.$element.offset();
				return this.pinnedOffset = M.top - A
			}, I.prototype.checkPositionWithEventLoop = function() {
				setTimeout(A.proxy(this.checkPosition, this), 1)
			}, I.prototype.checkPosition = function() {
				if(this.$element.is(":visible")) {
					var M = this.$element.height(),
						g = this.options.offset,
						T = g.top,
						N = g.bottom,
						E = Math.max(A(document).height(), A(document.body).height());
					"object" != typeof g && (N = T = g), "function" == typeof T && (T = g.top(this.$element)), "function" == typeof N && (N = g.bottom(this.$element));
					var C = this.getState(E, M, T, N);
					if(this.affixed != C) {
						null != this.unpin && this.$element.css("top", "");
						var t = "affix" + (C ? "-" + C : ""),
							D = A.Event(t + ".bs.affix");
						if(this.$element.trigger(D), D.isDefaultPrevented()) return;
						this.affixed = C, this.unpin = "bottom" == C ? this.getPinnedOffset() : null, this.$element.removeClass(I.RESET).addClass(t).trigger(t.replace("affix", "affixed") + ".bs.affix")
					}
					"bottom" == C && this.$element.offset({
						top: E - M - N
					})
				}
			};
			var g = A.fn.affix;
			A.fn.affix = M, A.fn.affix.Constructor = I, A.fn.affix.noConflict = function() {
				return A.fn.affix = g, this
			}, A(window).on("load", function() {
				A('[data-spy="affix"]').each(function() {
					var I = A(this),
						g = I.data();
					g.offset = g.offset || {}, null != g.offsetBottom && (g.offset.bottom = g.offsetBottom), null != g.offsetTop && (g.offset.top = g.offsetTop), M.call(I, g)
				})
			})
		}(A)
	}).call(M, I(0))
}, function(A, M, I) {
	"use strict";
	(function(A) {
		function M(A) {
			return A && A.__esModule ? A : {
				default: A
			}
		}
		var g = M(I(29)),
			T = M(I(30)),
			N = M(I(31)),
			E = M(I(33)),
			C = M(I(34)),
			t = M(I(35)),
			D = M(I(37)),
			B = M(I(44));
		A(document).ready(function() {
			(0, g.default)(), (0, T.default)(), (0, N.default)(), (0, E.default)(), (0, C.default)(), (0, t.default)(), (0, B.default)(), setInterval((0, D.default)(), 3e5)
		})
	}).call(M, I(0))
}, function(A, M, I) {
	"use strict";

	function g(A) {
		return A && A.__esModule ? A : {
			default: A
		}
	}
	Object.defineProperty(M, "__esModule", {
		value: !0
	});
	var T = g(I(0)),
		N = g(I(1));
	M.default = function() {
		function A() {
			var A = (0, T.default)(' <button class="popup-close btn btn-link" >&times;</button> ');
			A.bind("click", function() {
				(0, T.default)("#warn-popup").remove(), (0, T.default)("body").removeClass("no-scroll"), document.cookie = "allowed=1"
			});
			var M = (0, T.default)(' <div class="col-md-10 col-md-offset-1 popup-content"> ');
			M.append(A), M.append(" <p></p> ");
			var I = (0, T.default)(' <div class="row"> ');
			I.append(M);
			var g = (0, T.default)(' <div class="container popup"> ');
			g.append(I);
			var N = (0, T.default)(' <div id="warn-popup" class="popup-overlay"> ');
			N.append(g), (0, T.default)("body").append(N), (0, T.default)("body").addClass("no-scroll")
		}
		var M = (0, N.default)("allowed");
		M ? "0" === M && A() : T.default.getJSON("").done(function(M) {
			"LT" === M.country_code || "US" === M.country_code ? (document.cookie = "allowed=0", A()) : document.cookie = "allowed=1"
		})
	}
}, function(A, M, I) {
	"use strict";
	Object.defineProperty(M, "__esModule", {
		value: !0
	});
	var g = function(A) {
		return A && A.__esModule ? A : {
			default: A
		}
	}(I(0));
	M.default = function() {
		(0, g.default)("a.page-scroll").bind("click", function(A) {
			var M = (0, g.default)(this);
			(0, g.default)("html, body").stop().animate({
				scrollTop: (0, g.default)(M.attr("href")).offset().top - 50
			}, 1250, "easeInOutExpo"), A.preventDefault()
		}), (0, g.default)("body").scrollspy({
			target: ".navbar-fixed-top",
			offset: 51
		}), (0, g.default)(".navbar-collapse ul li a").not(".dropdown-toggle").click(function() {
			(0, g.default)(".navbar-toggle:visible").click()
		}), (0, g.default)("#mainNav").affix({
			offset: {
				top: 50
			}
		})
	}
}, function(A, M, I) {
	"use strict";
	Object.defineProperty(M, "__esModule", {
		value: !0
	});
	! function(A) {
		A && A.__esModule
	}(I(0));
	I(32), M.default = function() {
		particlesJS("particles", {
			particles: {
				number: {
					value: 40,
					density: {
						enable: !0,
						value_area: 800
					}
				},
				color: {
					value: "#ffffff"
				},
				shape: {
					type: "circle",
					stroke: {
						width: 0,
						color: "#000000"
					},
					polygon: {
						nb_sides: 5
					},
					image: {
						src: "img/github.svg",
						width: 100,
						height: 100
					}
				},
				opacity: {
					value: .5,
					random: !1,
					anim: {
						enable: !1,
						speed: 1,
						opacity_min: .1,
						sync: !1
					}
				},
				size: {
					value: 5,
					random: !0,
					anim: {
						enable: !1,
						speed: 40,
						size_min: .1,
						sync: !1
					}
				},
				line_linked: {
					enable: !0,
					distance: 150,
					color: "#ffffff",
					opacity: .4,
					width: 1
				},
				move: {
					enable: !0,
					speed: 6,
					direction: "none",
					random: !1,
					straight: !1,
					out_mode: "out",
					attract: {
						enable: !1,
						rotateX: 600,
						rotateY: 1200
					}
				}
			},
			interactivity: {
				detect_on: "canvas",
				events: {
					onhover: {
						enable: !1,
						mode: "repulse"
					},
					onclick: {
						enable: !1,
						mode: "push"
					},
					resize: !0
				},
				modes: {
					grab: {
						distance: 400,
						line_linked: {
							opacity: 1
						}
					},
					bubble: {
						distance: 400,
						size: 40,
						duration: 2,
						opacity: 8,
						speed: 3
					},
					repulse: {
						distance: 200
					},
					push: {
						particles_nb: 4
					},
					remove: {
						particles_nb: 2
					}
				}
			},
			retina_detect: !0,
			config_demo: {
				hide_card: !1,
				background_color: "#b61924",
				background_image: "",
				background_position: "50% 50%",
				background_repeat: "no-repeat",
				background_size: "cover"
			}
		})
	}
}, function(A, M) {
	function I(A) {
		A = A.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(A, M, I, g) {
			return M + M + I + I + g + g
		});
		var M = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(A);
		return M ? {
			r: parseInt(M[1], 16),
			g: parseInt(M[2], 16),
			b: parseInt(M[3], 16)
		} : null
	}

	function g(A, M) {
		return M.indexOf(A) > -1
	}
	var T = function(A, M) {
		var T = document.querySelector("#" + A + " > .particles-js-canvas-el");
		this.pJS = {
			canvas: {
				el: T,
				w: T.offsetWidth,
				h: T.offsetHeight
			},
			particles: {
				number: {
					value: 400,
					density: {
						enable: !0,
						value_area: 800
					}
				},
				color: {
					value: "#fff"
				},
				shape: {
					type: "circle",
					stroke: {
						width: 0,
						color: "#ff0000"
					},
					polygon: {
						nb_sides: 5
					},
					image: {
						src: "",
						width: 100,
						height: 100
					}
				},
				opacity: {
					value: 1,
					random: !1,
					anim: {
						enable: !1,
						speed: 2,
						opacity_min: 0,
						sync: !1
					}
				},
				size: {
					value: 20,
					random: !1,
					anim: {
						enable: !1,
						speed: 20,
						size_min: 0,
						sync: !1
					}
				},
				line_linked: {
					enable: !0,
					distance: 100,
					color: "#fff",
					opacity: 1,
					width: 1
				},
				move: {
					enable: !0,
					speed: 2,
					direction: "none",
					random: !1,
					straight: !1,
					out_mode: "out",
					bounce: !1,
					attract: {
						enable: !1,
						rotateX: 3e3,
						rotateY: 3e3
					}
				},
				array: []
			},
			interactivity: {
				detect_on: "canvas",
				events: {
					onhover: {
						enable: !0,
						mode: "grab"
					},
					onclick: {
						enable: !0,
						mode: "push"
					},
					resize: !0
				},
				modes: {
					grab: {
						distance: 100,
						line_linked: {
							opacity: 1
						}
					},
					bubble: {
						distance: 200,
						size: 80,
						duration: .4
					},
					repulse: {
						distance: 200,
						duration: .4
					},
					push: {
						particles_nb: 4
					},
					remove: {
						particles_nb: 2
					}
				},
				mouse: {}
			},
			retina_detect: !1,
			fn: {
				interact: {},
				modes: {},
				vendors: {}
			},
			tmp: {}
		};
		var N = this.pJS;
		M && Object.deepExtend(N, M), N.tmp.obj = {
			size_value: N.particles.size.value,
			size_anim_speed: N.particles.size.anim.speed,
			move_speed: N.particles.move.speed,
			line_linked_distance: N.particles.line_linked.distance,
			line_linked_width: N.particles.line_linked.width,
			mode_grab_distance: N.interactivity.modes.grab.distance,
			mode_bubble_distance: N.interactivity.modes.bubble.distance,
			mode_bubble_size: N.interactivity.modes.bubble.size,
			mode_repulse_distance: N.interactivity.modes.repulse.distance
		}, N.fn.retinaInit = function() {
			N.retina_detect && window.devicePixelRatio > 1 ? (N.canvas.pxratio = window.devicePixelRatio, N.tmp.retina = !0) : (N.canvas.pxratio = 1, N.tmp.retina = !1), N.canvas.w = N.canvas.el.offsetWidth * N.canvas.pxratio, N.canvas.h = N.canvas.el.offsetHeight * N.canvas.pxratio, N.particles.size.value = N.tmp.obj.size_value * N.canvas.pxratio, N.particles.size.anim.speed = N.tmp.obj.size_anim_speed * N.canvas.pxratio, N.particles.move.speed = N.tmp.obj.move_speed * N.canvas.pxratio, N.particles.line_linked.distance = N.tmp.obj.line_linked_distance * N.canvas.pxratio, N.interactivity.modes.grab.distance = N.tmp.obj.mode_grab_distance * N.canvas.pxratio, N.interactivity.modes.bubble.distance = N.tmp.obj.mode_bubble_distance * N.canvas.pxratio, N.particles.line_linked.width = N.tmp.obj.line_linked_width * N.canvas.pxratio, N.interactivity.modes.bubble.size = N.tmp.obj.mode_bubble_size * N.canvas.pxratio, N.interactivity.modes.repulse.distance = N.tmp.obj.mode_repulse_distance * N.canvas.pxratio
		}, N.fn.canvasInit = function() {
			N.canvas.ctx = N.canvas.el.getContext("2d")
		}, N.fn.canvasSize = function() {
			N.canvas.el.width = N.canvas.w, N.canvas.el.height = N.canvas.h, N && N.interactivity.events.resize && window.addEventListener("resize", function() {
				N.canvas.w = N.canvas.el.offsetWidth, N.canvas.h = N.canvas.el.offsetHeight, N.tmp.retina && (N.canvas.w *= N.canvas.pxratio, N.canvas.h *= N.canvas.pxratio), N.canvas.el.width = N.canvas.w, N.canvas.el.height = N.canvas.h, N.particles.move.enable || (N.fn.particlesEmpty(), N.fn.particlesCreate(), N.fn.particlesDraw(), N.fn.vendors.densityAutoParticles()), N.fn.vendors.densityAutoParticles()
			})
		}, N.fn.canvasPaint = function() {
			N.canvas.ctx.fillRect(0, 0, N.canvas.w, N.canvas.h)
		}, N.fn.canvasClear = function() {
			N.canvas.ctx.clearRect(0, 0, N.canvas.w, N.canvas.h)
		}, N.fn.particle = function(A, M, g) {
			if(this.radius = (N.particles.size.random ? Math.random() : 1) * N.particles.size.value, N.particles.size.anim.enable && (this.size_status = !1, this.vs = N.particles.size.anim.speed / 100, N.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = g ? g.x : Math.random() * N.canvas.w, this.y = g ? g.y : Math.random() * N.canvas.h, this.x > N.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > N.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), N.particles.move.bounce && N.fn.vendors.checkOverlap(this, g), this.color = {}, "object" == typeof A.value)
				if(A.value instanceof Array) {
					var T = A.value[Math.floor(Math.random() * N.particles.color.value.length)];
					this.color.rgb = I(T)
				} else void 0 != A.value.r && void 0 != A.value.g && void 0 != A.value.b && (this.color.rgb = {
					r: A.value.r,
					g: A.value.g,
					b: A.value.b
				}), void 0 != A.value.h && void 0 != A.value.s && void 0 != A.value.l && (this.color.hsl = {
					h: A.value.h,
					s: A.value.s,
					l: A.value.l
				});
			else "random" == A.value ? this.color.rgb = {
				r: Math.floor(256 * Math.random()) + 0,
				g: Math.floor(256 * Math.random()) + 0,
				b: Math.floor(256 * Math.random()) + 0
			} : "string" == typeof A.value && (this.color = A, this.color.rgb = I(this.color.value));
			this.opacity = (N.particles.opacity.random ? Math.random() : 1) * N.particles.opacity.value, N.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = N.particles.opacity.anim.speed / 100, N.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
			var E = {};
			switch(N.particles.move.direction) {
				case "top":
					E = {
						x: 0,
						y: -1
					};
					break;
				case "top-right":
					E = {
						x: .5,
						y: -.5
					};
					break;
				case "right":
					E = {
						x: 1,
						y: -0
					};
					break;
				case "bottom-right":
					E = {
						x: .5,
						y: .5
					};
					break;
				case "bottom":
					E = {
						x: 0,
						y: 1
					};
					break;
				case "bottom-left":
					E = {
						x: -.5,
						y: 1
					};
					break;
				case "left":
					E = {
						x: -1,
						y: 0
					};
					break;
				case "top-left":
					E = {
						x: -.5,
						y: -.5
					};
					break;
				default:
					E = {
						x: 0,
						y: 0
					}
			}
			N.particles.move.straight ? (this.vx = E.x, this.vy = E.y, N.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = E.x + Math.random() - .5, this.vy = E.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
			var C = N.particles.shape.type;
			if("object" == typeof C) {
				if(C instanceof Array) {
					var t = C[Math.floor(Math.random() * C.length)];
					this.shape = t
				}
			} else this.shape = C;
			if("image" == this.shape) {
				var D = N.particles.shape;
				this.img = {
					src: D.image.src,
					ratio: D.image.width / D.image.height
				}, this.img.ratio || (this.img.ratio = 1), "svg" == N.tmp.img_type && void 0 != N.tmp.source_svg && (N.fn.vendors.createSvgImg(this), N.tmp.pushing && (this.img.loaded = !1))
			}
		}, N.fn.particle.prototype.draw = function() {
			var A = this;
			if(void 0 != A.radius_bubble) var M = A.radius_bubble;
			else M = A.radius;
			if(void 0 != A.opacity_bubble) var I = A.opacity_bubble;
			else I = A.opacity;
			if(A.color.rgb) var g = "rgba(" + A.color.rgb.r + "," + A.color.rgb.g + "," + A.color.rgb.b + "," + I + ")";
			else g = "hsla(" + A.color.hsl.h + "," + A.color.hsl.s + "%," + A.color.hsl.l + "%," + I + ")";
			switch(N.canvas.ctx.fillStyle = g, N.canvas.ctx.beginPath(), A.shape) {
				case "circle":
					N.canvas.ctx.arc(A.x, A.y, M, 0, 2 * Math.PI, !1);
					break;
				case "edge":
					N.canvas.ctx.rect(A.x - M, A.y - M, 2 * M, 2 * M);
					break;
				case "triangle":
					N.fn.vendors.drawShape(N.canvas.ctx, A.x - M, A.y + M / 1.66, 2 * M, 3, 2);
					break;
				case "polygon":
					N.fn.vendors.drawShape(N.canvas.ctx, A.x - M / (N.particles.shape.polygon.nb_sides / 3.5), A.y - M / .76, 2.66 * M / (N.particles.shape.polygon.nb_sides / 3), N.particles.shape.polygon.nb_sides, 1);
					break;
				case "star":
					N.fn.vendors.drawShape(N.canvas.ctx, A.x - 2 * M / (N.particles.shape.polygon.nb_sides / 4), A.y - M / 1.52, 2 * M * 2.66 / (N.particles.shape.polygon.nb_sides / 3), N.particles.shape.polygon.nb_sides, 2);
					break;
				case "image":
					;
					if("svg" == N.tmp.img_type) var T = A.img.obj;
					else T = N.tmp.img_obj;
					T && N.canvas.ctx.drawImage(T, A.x - M, A.y - M, 2 * M, 2 * M / A.img.ratio)
			}
			N.canvas.ctx.closePath(), N.particles.shape.stroke.width > 0 && (N.canvas.ctx.strokeStyle = N.particles.shape.stroke.color, N.canvas.ctx.lineWidth = N.particles.shape.stroke.width, N.canvas.ctx.stroke()), N.canvas.ctx.fill()
		}, N.fn.particlesCreate = function() {
			for(var A = 0; A < N.particles.number.value; A++) N.particles.array.push(new N.fn.particle(N.particles.color, N.particles.opacity.value))
		}, N.fn.particlesUpdate = function() {
			for(var A = 0; A < N.particles.array.length; A++) {
				var M = N.particles.array[A];
				if(N.particles.move.enable) {
					var I = N.particles.move.speed / 2;
					M.x += M.vx * I, M.y += M.vy * I
				}
				if(N.particles.opacity.anim.enable && (1 == M.opacity_status ? (M.opacity >= N.particles.opacity.value && (M.opacity_status = !1), M.opacity += M.vo) : (M.opacity <= N.particles.opacity.anim.opacity_min && (M.opacity_status = !0), M.opacity -= M.vo), M.opacity < 0 && (M.opacity = 0)), N.particles.size.anim.enable && (1 == M.size_status ? (M.radius >= N.particles.size.value && (M.size_status = !1), M.radius += M.vs) : (M.radius <= N.particles.size.anim.size_min && (M.size_status = !0), M.radius -= M.vs), M.radius < 0 && (M.radius = 0)), "bounce" == N.particles.move.out_mode) var T = {
					x_left: M.radius,
					x_right: N.canvas.w,
					y_top: M.radius,
					y_bottom: N.canvas.h
				};
				else T = {
					x_left: -M.radius,
					x_right: N.canvas.w + M.radius,
					y_top: -M.radius,
					y_bottom: N.canvas.h + M.radius
				};
				switch(M.x - M.radius > N.canvas.w ? (M.x = T.x_left, M.y = Math.random() * N.canvas.h) : M.x + M.radius < 0 && (M.x = T.x_right, M.y = Math.random() * N.canvas.h), M.y - M.radius > N.canvas.h ? (M.y = T.y_top, M.x = Math.random() * N.canvas.w) : M.y + M.radius < 0 && (M.y = T.y_bottom, M.x = Math.random() * N.canvas.w), N.particles.move.out_mode) {
					case "bounce":
						M.x + M.radius > N.canvas.w ? M.vx = -M.vx : M.x - M.radius < 0 && (M.vx = -M.vx), M.y + M.radius > N.canvas.h ? M.vy = -M.vy : M.y - M.radius < 0 && (M.vy = -M.vy)
				}
				if(g("grab", N.interactivity.events.onhover.mode) && N.fn.modes.grabParticle(M), (g("bubble", N.interactivity.events.onhover.mode) || g("bubble", N.interactivity.events.onclick.mode)) && N.fn.modes.bubbleParticle(M), (g("repulse", N.interactivity.events.onhover.mode) || g("repulse", N.interactivity.events.onclick.mode)) && N.fn.modes.repulseParticle(M), N.particles.line_linked.enable || N.particles.move.attract.enable)
					for(var E = A + 1; E < N.particles.array.length; E++) {
						var C = N.particles.array[E];
						N.particles.line_linked.enable && N.fn.interact.linkParticles(M, C), N.particles.move.attract.enable && N.fn.interact.attractParticles(M, C), N.particles.move.bounce && N.fn.interact.bounceParticles(M, C)
					}
			}
		}, N.fn.particlesDraw = function() {
			N.canvas.ctx.clearRect(0, 0, N.canvas.w, N.canvas.h), N.fn.particlesUpdate();
			for(var A = 0; A < N.particles.array.length; A++) {
				N.particles.array[A].draw()
			}
		}, N.fn.particlesEmpty = function() {
			N.particles.array = []
		}, N.fn.particlesRefresh = function() {
			cancelRequestAnimFrame(N.fn.checkAnimFrame), cancelRequestAnimFrame(N.fn.drawAnimFrame), N.tmp.source_svg = void 0, N.tmp.img_obj = void 0, N.tmp.count_svg = 0, N.fn.particlesEmpty(), N.fn.canvasClear(), N.fn.vendors.start()
		}, N.fn.interact.linkParticles = function(A, M) {
			var I = A.x - M.x,
				g = A.y - M.y,
				T = Math.sqrt(I * I + g * g);
			if(T <= N.particles.line_linked.distance) {
				var E = N.particles.line_linked.opacity - T / (1 / N.particles.line_linked.opacity) / N.particles.line_linked.distance;
				if(E > 0) {
					var C = N.particles.line_linked.color_rgb_line;
					N.canvas.ctx.strokeStyle = "rgba(" + C.r + "," + C.g + "," + C.b + "," + E + ")", N.canvas.ctx.lineWidth = N.particles.line_linked.width, N.canvas.ctx.beginPath(), N.canvas.ctx.moveTo(A.x, A.y), N.canvas.ctx.lineTo(M.x, M.y), N.canvas.ctx.stroke(), N.canvas.ctx.closePath()
				}
			}
		}, N.fn.interact.attractParticles = function(A, M) {
			var I = A.x - M.x,
				g = A.y - M.y;
			if(Math.sqrt(I * I + g * g) <= N.particles.line_linked.distance) {
				var T = I / (1e3 * N.particles.move.attract.rotateX),
					E = g / (1e3 * N.particles.move.attract.rotateY);
				A.vx -= T, A.vy -= E, M.vx += T, M.vy += E
			}
		}, N.fn.interact.bounceParticles = function(A, M) {
			var I = A.x - M.x,
				g = A.y - M.y;
			Math.sqrt(I * I + g * g) <= A.radius + M.radius && (A.vx = -A.vx, A.vy = -A.vy, M.vx = -M.vx, M.vy = -M.vy)
		}, N.fn.modes.pushParticles = function(A, M) {
			N.tmp.pushing = !0;
			for(var I = 0; I < A; I++) N.particles.array.push(new N.fn.particle(N.particles.color, N.particles.opacity.value, {
				x: M ? M.pos_x : Math.random() * N.canvas.w,
				y: M ? M.pos_y : Math.random() * N.canvas.h
			})), I == A - 1 && (N.particles.move.enable || N.fn.particlesDraw(), N.tmp.pushing = !1)
		}, N.fn.modes.removeParticles = function(A) {
			N.particles.array.splice(0, A), N.particles.move.enable || N.fn.particlesDraw()
		}, N.fn.modes.bubbleParticle = function(A) {
			if(N.interactivity.events.onhover.enable && g("bubble", N.interactivity.events.onhover.mode)) {
				var M = A.x - N.interactivity.mouse.pos_x,
					I = A.y - N.interactivity.mouse.pos_y,
					T = 1 - (B = Math.sqrt(M * M + I * I)) / N.interactivity.modes.bubble.distance;

				function E() {
					A.opacity_bubble = A.opacity, A.radius_bubble = A.radius
				}
				if(B <= N.interactivity.modes.bubble.distance) {
					if(T >= 0 && "mousemove" == N.interactivity.status) {
						if(N.interactivity.modes.bubble.size != N.particles.size.value)
							if(N.interactivity.modes.bubble.size > N.particles.size.value) {
								(t = A.radius + N.interactivity.modes.bubble.size * T) >= 0 && (A.radius_bubble = t)
							} else {
								var C = A.radius - N.interactivity.modes.bubble.size,
									t = A.radius - C * T;
								A.radius_bubble = t > 0 ? t : 0
							}
						if(N.interactivity.modes.bubble.opacity != N.particles.opacity.value)
							if(N.interactivity.modes.bubble.opacity > N.particles.opacity.value) {
								(D = N.interactivity.modes.bubble.opacity * T) > A.opacity && D <= N.interactivity.modes.bubble.opacity && (A.opacity_bubble = D)
							} else {
								var D;
								(D = A.opacity - (N.particles.opacity.value - N.interactivity.modes.bubble.opacity) * T) < A.opacity && D >= N.interactivity.modes.bubble.opacity && (A.opacity_bubble = D)
							}
					}
				} else E();
				"mouseleave" == N.interactivity.status && E()
			} else if(N.interactivity.events.onclick.enable && g("bubble", N.interactivity.events.onclick.mode)) {
				if(N.tmp.bubble_clicking) {
					M = A.x - N.interactivity.mouse.click_pos_x, I = A.y - N.interactivity.mouse.click_pos_y;
					var B = Math.sqrt(M * M + I * I),
						Q = ((new Date).getTime() - N.interactivity.mouse.click_time) / 1e3;
					Q > N.interactivity.modes.bubble.duration && (N.tmp.bubble_duration_end = !0), Q > 2 * N.interactivity.modes.bubble.duration && (N.tmp.bubble_clicking = !1, N.tmp.bubble_duration_end = !1)
				}

				function i(M, I, g, T, E) {
					if(M != I)
						if(N.tmp.bubble_duration_end) {
							if(void 0 != g) {
								t = M + (M - (T - Q * (T - M) / N.interactivity.modes.bubble.duration)), "size" == E && (A.radius_bubble = t), "opacity" == E && (A.opacity_bubble = t)
							}
						} else if(B <= N.interactivity.modes.bubble.distance) {
						if(void 0 != g) var C = g;
						else C = T;
						if(C != M) {
							var t = T - Q * (T - M) / N.interactivity.modes.bubble.duration;
							"size" == E && (A.radius_bubble = t), "opacity" == E && (A.opacity_bubble = t)
						}
					} else "size" == E && (A.radius_bubble = void 0), "opacity" == E && (A.opacity_bubble = void 0)
				}
				N.tmp.bubble_clicking && (i(N.interactivity.modes.bubble.size, N.particles.size.value, A.radius_bubble, A.radius, "size"), i(N.interactivity.modes.bubble.opacity, N.particles.opacity.value, A.opacity_bubble, A.opacity, "opacity"))
			}
		}, N.fn.modes.repulseParticle = function(A) {
			if(N.interactivity.events.onhover.enable && g("repulse", N.interactivity.events.onhover.mode) && "mousemove" == N.interactivity.status) {
				var M = A.x - N.interactivity.mouse.pos_x,
					I = A.y - N.interactivity.mouse.pos_y,
					T = Math.sqrt(M * M + I * I),
					E = {
						x: M / T,
						y: I / T
					},
					C = function(A, M, I) {
						return Math.min(Math.max(A, M), I)
					}(1 / (D = N.interactivity.modes.repulse.distance) * (-1 * Math.pow(T / D, 2) + 1) * D * 100, 0, 50),
					t = {
						x: A.x + E.x * C,
						y: A.y + E.y * C
					};
				"bounce" == N.particles.move.out_mode ? (t.x - A.radius > 0 && t.x + A.radius < N.canvas.w && (A.x = t.x), t.y - A.radius > 0 && t.y + A.radius < N.canvas.h && (A.y = t.y)) : (A.x = t.x, A.y = t.y)
			} else if(N.interactivity.events.onclick.enable && g("repulse", N.interactivity.events.onclick.mode))
				if(N.tmp.repulse_finish || (N.tmp.repulse_count++, N.tmp.repulse_count == N.particles.array.length && (N.tmp.repulse_finish = !0)), N.tmp.repulse_clicking) {
					var D = Math.pow(N.interactivity.modes.repulse.distance / 6, 3),
						B = N.interactivity.mouse.click_pos_x - A.x,
						Q = N.interactivity.mouse.click_pos_y - A.y,
						i = B * B + Q * Q,
						n = -D / i * 1;
					i <= D && function() {
						var M = Math.atan2(Q, B);
						if(A.vx = n * Math.cos(M), A.vy = n * Math.sin(M), "bounce" == N.particles.move.out_mode) {
							var I = {
								x: A.x + A.vx,
								y: A.y + A.vy
							};
							I.x + A.radius > N.canvas.w ? A.vx = -A.vx : I.x - A.radius < 0 && (A.vx = -A.vx), I.y + A.radius > N.canvas.h ? A.vy = -A.vy : I.y - A.radius < 0 && (A.vy = -A.vy)
						}
					}()
				} else 0 == N.tmp.repulse_clicking && (A.vx = A.vx_i, A.vy = A.vy_i)
		}, N.fn.modes.grabParticle = function(A) {
			if(N.interactivity.events.onhover.enable && "mousemove" == N.interactivity.status) {
				var M = A.x - N.interactivity.mouse.pos_x,
					I = A.y - N.interactivity.mouse.pos_y,
					g = Math.sqrt(M * M + I * I);
				if(g <= N.interactivity.modes.grab.distance) {
					var T = N.interactivity.modes.grab.line_linked.opacity - g / (1 / N.interactivity.modes.grab.line_linked.opacity) / N.interactivity.modes.grab.distance;
					if(T > 0) {
						var E = N.particles.line_linked.color_rgb_line;
						N.canvas.ctx.strokeStyle = "rgba(" + E.r + "," + E.g + "," + E.b + "," + T + ")", N.canvas.ctx.lineWidth = N.particles.line_linked.width, N.canvas.ctx.beginPath(), N.canvas.ctx.moveTo(A.x, A.y), N.canvas.ctx.lineTo(N.interactivity.mouse.pos_x, N.interactivity.mouse.pos_y), N.canvas.ctx.stroke(), N.canvas.ctx.closePath()
					}
				}
			}
		}, N.fn.vendors.eventsListeners = function() {
			"window" == N.interactivity.detect_on ? N.interactivity.el = window : N.interactivity.el = N.canvas.el, (N.interactivity.events.onhover.enable || N.interactivity.events.onclick.enable) && (N.interactivity.el.addEventListener("mousemove", function(A) {
				if(N.interactivity.el == window) var M = A.clientX,
					I = A.clientY;
				else M = A.offsetX || A.clientX, I = A.offsetY || A.clientY;
				N.interactivity.mouse.pos_x = M, N.interactivity.mouse.pos_y = I, N.tmp.retina && (N.interactivity.mouse.pos_x *= N.canvas.pxratio, N.interactivity.mouse.pos_y *= N.canvas.pxratio), N.interactivity.status = "mousemove"
			}), N.interactivity.el.addEventListener("mouseleave", function(A) {
				N.interactivity.mouse.pos_x = null, N.interactivity.mouse.pos_y = null, N.interactivity.status = "mouseleave"
			})), N.interactivity.events.onclick.enable && N.interactivity.el.addEventListener("click", function() {
				if(N.interactivity.mouse.click_pos_x = N.interactivity.mouse.pos_x, N.interactivity.mouse.click_pos_y = N.interactivity.mouse.pos_y, N.interactivity.mouse.click_time = (new Date).getTime(), N.interactivity.events.onclick.enable) switch(N.interactivity.events.onclick.mode) {
					case "push":
						N.particles.move.enable ? N.fn.modes.pushParticles(N.interactivity.modes.push.particles_nb, N.interactivity.mouse) : 1 == N.interactivity.modes.push.particles_nb ? N.fn.modes.pushParticles(N.interactivity.modes.push.particles_nb, N.interactivity.mouse) : N.interactivity.modes.push.particles_nb > 1 && N.fn.modes.pushParticles(N.interactivity.modes.push.particles_nb);
						break;
					case "remove":
						N.fn.modes.removeParticles(N.interactivity.modes.remove.particles_nb);
						break;
					case "bubble":
						N.tmp.bubble_clicking = !0;
						break;
					case "repulse":
						N.tmp.repulse_clicking = !0, N.tmp.repulse_count = 0, N.tmp.repulse_finish = !1, setTimeout(function() {
							N.tmp.repulse_clicking = !1
						}, 1e3 * N.interactivity.modes.repulse.duration)
				}
			})
		}, N.fn.vendors.densityAutoParticles = function() {
			if(N.particles.number.density.enable) {
				var A = N.canvas.el.width * N.canvas.el.height / 1e3;
				N.tmp.retina && (A /= 2 * N.canvas.pxratio);
				var M = A * N.particles.number.value / N.particles.number.density.value_area,
					I = N.particles.array.length - M;
				I < 0 ? N.fn.modes.pushParticles(Math.abs(I)) : N.fn.modes.removeParticles(I)
			}
		}, N.fn.vendors.checkOverlap = function(A, M) {
			for(var I = 0; I < N.particles.array.length; I++) {
				var g = N.particles.array[I],
					T = A.x - g.x,
					E = A.y - g.y;
				Math.sqrt(T * T + E * E) <= A.radius + g.radius && (A.x = M ? M.x : Math.random() * N.canvas.w, A.y = M ? M.y : Math.random() * N.canvas.h, N.fn.vendors.checkOverlap(A))
			}
		}, N.fn.vendors.createSvgImg = function(A) {
			var M = N.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function(M, I, g, T) {
					if(A.color.rgb) var N = "rgba(" + A.color.rgb.r + "," + A.color.rgb.g + "," + A.color.rgb.b + "," + A.opacity + ")";
					else N = "hsla(" + A.color.hsl.h + "," + A.color.hsl.s + "%," + A.color.hsl.l + "%," + A.opacity + ")";
					return N
				}),
				I = new Blob([M], {
					type: "image/svg+xml;charset=utf-8"
				}),
				g = window.URL || window.webkitURL || window,
				T = g.createObjectURL(I),
				E = new Image;
			E.addEventListener("load", function() {
				A.img.obj = E, A.img.loaded = !0, g.revokeObjectURL(T), N.tmp.count_svg++
			}), E.src = T
		}, N.fn.vendors.destroypJS = function() {
			cancelAnimationFrame(N.fn.drawAnimFrame), T.remove(), pJSDom = null
		}, N.fn.vendors.drawShape = function(A, M, I, g, T, N) {
			var E = T * N,
				C = T / N,
				t = 180 * (C - 2) / C,
				D = Math.PI - Math.PI * t / 180;
			A.save(), A.beginPath(), A.translate(M, I), A.moveTo(0, 0);
			for(var B = 0; B < E; B++) A.lineTo(g, 0), A.translate(g, 0), A.rotate(D);
			A.fill(), A.restore()
		}, N.fn.vendors.exportImg = function() {
			window.open(N.canvas.el.toDataURL("image/png"), "_blank")
		}, N.fn.vendors.loadImg = function(A) {
			if(N.tmp.img_error = void 0, "" != N.particles.shape.image.src)
				if("svg" == A) {
					var M = new XMLHttpRequest;
					M.open("GET", N.particles.shape.image.src), M.onreadystatechange = function(A) {
						4 == M.readyState && (200 == M.status ? (N.tmp.source_svg = A.currentTarget.response, N.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), N.tmp.img_error = !0))
					}, M.send()
				} else {
					var I = new Image;
					I.addEventListener("load", function() {
						N.tmp.img_obj = I, N.fn.vendors.checkBeforeDraw()
					}), I.src = N.particles.shape.image.src
				}
			else console.log("Error pJS - No image.src"), N.tmp.img_error = !0
		}, N.fn.vendors.draw = function() {
			"image" == N.particles.shape.type ? "svg" == N.tmp.img_type ? N.tmp.count_svg >= N.particles.number.value ? (N.fn.particlesDraw(), N.particles.move.enable ? N.fn.drawAnimFrame = requestAnimFrame(N.fn.vendors.draw) : cancelRequestAnimFrame(N.fn.drawAnimFrame)) : N.tmp.img_error || (N.fn.drawAnimFrame = requestAnimFrame(N.fn.vendors.draw)) : void 0 != N.tmp.img_obj ? (N.fn.particlesDraw(), N.particles.move.enable ? N.fn.drawAnimFrame = requestAnimFrame(N.fn.vendors.draw) : cancelRequestAnimFrame(N.fn.drawAnimFrame)) : N.tmp.img_error || (N.fn.drawAnimFrame = requestAnimFrame(N.fn.vendors.draw)) : (N.fn.particlesDraw(), N.particles.move.enable ? N.fn.drawAnimFrame = requestAnimFrame(N.fn.vendors.draw) : cancelRequestAnimFrame(N.fn.drawAnimFrame))
		}, N.fn.vendors.checkBeforeDraw = function() {
			"image" == N.particles.shape.type ? "svg" == N.tmp.img_type && void 0 == N.tmp.source_svg ? N.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(N.tmp.checkAnimFrame), N.tmp.img_error || (N.fn.vendors.init(), N.fn.vendors.draw())) : (N.fn.vendors.init(), N.fn.vendors.draw())
		}, N.fn.vendors.init = function() {
			N.fn.retinaInit(), N.fn.canvasInit(), N.fn.canvasSize(), N.fn.canvasPaint(), N.fn.particlesCreate(), N.fn.vendors.densityAutoParticles(), N.particles.line_linked.color_rgb_line = I(N.particles.line_linked.color)
		}, N.fn.vendors.start = function() {
			g("image", N.particles.shape.type) ? (N.tmp.img_type = N.particles.shape.image.src.substr(N.particles.shape.image.src.length - 3), N.fn.vendors.loadImg(N.tmp.img_type)) : N.fn.vendors.checkBeforeDraw()
		}, N.fn.vendors.eventsListeners(), N.fn.vendors.start()
	};
	Object.deepExtend = function(A, M) {
		for(var I in M) M[I] && M[I].constructor && M[I].constructor === Object ? (A[I] = A[I] || {}, arguments.callee(A[I], M[I])) : A[I] = M[I];
		return A
	}, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(A) {
		window.setTimeout(A, 1e3 / 60)
	}, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function(A, M) {
		"string" != typeof A && (M = A, A = "particles-js"), A || (A = "particles-js");
		var I = document.getElementById(A),
			g = "particles-js-canvas-el",
			N = I.getElementsByClassName(g);
		if(N.length)
			for(; N.length > 0;) I.removeChild(N[0]);
		var E = document.createElement("canvas");
		E.className = g, E.style.width = "100%", E.style.height = "100%";
		null != document.getElementById(A).appendChild(E) && pJSDom.push(new T(A, M))
	}, window.particlesJS.load = function(A, M, I) {
		var g = new XMLHttpRequest;
		g.open("GET", M), g.onreadystatechange = function(M) {
			if(4 == g.readyState)
				if(200 == g.status) {
					var T = JSON.parse(M.currentTarget.response);
					window.particlesJS(A, T), I && I()
				} else console.log("Error pJS - XMLHttpRequest status: " + g.status), console.log("Error pJS - File config not found")
		}, g.send()
	}
}, function(A, M, I) {
	"use strict";
	Object.defineProperty(M, "__esModule", {
		value: !0
	});
	var g = function(A) {
		return A && A.__esModule ? A : {
			default: A
		}
	}(I(0));
	M.default = function() {
		function A(A) {
			var M = (0, g.default)("#subscribeForm .subscribeError");
			M.text(A), M.parent().show()
		}(0, g.default)("#subscribeForm").bind("submit", function(M) {
			var I = (0, g.default)(this);
			if(M.preventDefault(), I.data("loading")) return !1;
			var T = (0, g.default)("#subscribeEmail"),
				N = T.data("error-message");
			if(!/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]){2,40}$/.test(T.val().trim())) return A(N), !1;
			! function() {
				var A = (0, g.default)("#subscribeForm .subscribeError");
				A.text(""), A.parent().hide()
			}();
			var E = (0, g.default)("#subscribeForm .subscribe-button"),
				C = E.html();
			E.html('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>');
			var t = I.serialize() + "&ml-submit=1&ajax=1";
			I.data("loading", !0), g.default.ajax({
				type: "GET",
				url: "//app.mailerlite.com/webforms/submit/b1a4b4",
				data: t,
				dataType: "jsonp",
				success: function(M) {
					I.data("loading", !1), E.html(C), M.success ? ((0, g.default)("#subscribeRow").hide(), (0, g.default)("#subscribeSuccessRow").show(), "function" == typeof fbq && fbq("trackCustom", "Subscribe")) : void 0 !== M.errors && void 0 !== M.errors.fields && void 0 !== M.errors.fields.email ? A(N) : void 0 !== M.errors && void 0 !== M.errors.fatal ? A(M.errors.fatal) : alert("Something went wrong")
				},
				error: function(A, M, g) {
					I.data("loading", !1), E.html(C), alert("Something went wrong")
				}
			}), (new Image).src = "https://track.mailerlite.com/webforms/o/479901/b1a4b4?v" + Math.floor(Date.now() / 1e3)
		})
	}
}, function(A, M, I) {
	"use strict";

	function g(A) {
		return A && A.__esModule ? A : {
			default: A
		}
	}
	Object.defineProperty(M, "__esModule", {
		value: !0
	});
	var T = g(I(0)),
		N = g(I(1));
	M.default = function() {
		(0, T.default)("body").append('<script type="text/javascript" src="https://static.mailerlite.com/js/w/webforms.min.js?v3772b61f1ec61c541c401d4eadfdd02f"><\/script>'),
			function(A, M, I) {
				A.addEventListener ? A.addEventListener(M, I, !1) : A.attachEvent && A.attachEvent("on" + M, I)
			}(document, "mouseout", function(A) {
				var M = (A = A || window.event).relatedTarget || A.toElement;
				if(!M || "HTML" == M.nodeName) {
					var I = (0, N.default)("mailer_subscribed"),
						g = (0, N.default)("mail_closed");
					"true" === I || "true" === g || (0, T.default)("#mailerSubscribe").modal("show")
				}
			});
		var A = (0, T.default)("#mailerSubscribe .primary"),
			M = (0, T.default)("#mailerSubscribe .close-btn");
		A.click(function() {
			var A = new MutationObserver(function(A) {
					A.forEach(function(A) {
						setTimeout(function() {
							document.cookie = "mailer_subscribed=true", (0, T.default)("#mailerSubscribe").modal("hide")
						}, 1500)
					})
				}),
				M = document.getElementById("ml-block-success");
			A.observe(M, {
				attributes: !0,
				attributeFilter: ["style"]
			})
		}), M.click(function() {
			document.cookie = "mail_closed=true;max-age=86400"
		})
	}
}, function(A, M, I) {
	"use strict";

	function g(A) {
		return A && A.__esModule ? A : {
			default: A
		}
	}
	Object.defineProperty(M, "__esModule", {
		value: !0
	});
	var T = g(I(0));
	g(I(36));
	M.default = function() {
		var A = (0, T.default)("#videoSlider");
		A.slick({
			lazyLoad: "ondemand",
			autoplay: !0,
			autoplaySpeed: 2e3,
			arrows: !1,
			slidesToShow: 4,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 775,
				settings: {
					slidesToShow: 2
				}
			}]
		});
		"rtl" === (0, T.default)("html").attr("dir") && A.slick("slickSetOption", "rtl", !0, !0)
	}
}, function(A, M, I) {
	var g, T, N;
	! function(E) {
		"use strict";
		T = [I(0)], void 0 === (N = "function" == typeof(g = E) ? g.apply(M, T) : g) || (A.exports = N)
	}(function(A) {
		"use strict";
		var M = window.Slick || {};
		(M = function() {
			var M = 0;
			return function(I, g) {
				var T;
				this.defaults = {
					accessibility: !0,
					adaptiveHeight: !1,
					appendArrows: A(I),
					appendDots: A(I),
					arrows: !0,
					asNavFor: null,
					prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
					nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
					autoplay: !1,
					autoplaySpeed: 3e3,
					centerMode: !1,
					centerPadding: "50px",
					cssEase: "ease",
					customPaging: function(M, I) {
						return A('<button type="button" />').text(I + 1)
					},
					dots: !1,
					dotsClass: "slick-dots",
					draggable: !0,
					easing: "linear",
					edgeFriction: .35,
					fade: !1,
					focusOnSelect: !1,
					focusOnChange: !1,
					infinite: !0,
					initialSlide: 0,
					lazyLoad: "ondemand",
					mobileFirst: !1,
					pauseOnHover: !0,
					pauseOnFocus: !0,
					pauseOnDotsHover: !1,
					respondTo: "window",
					responsive: null,
					rows: 1,
					rtl: !1,
					slide: "",
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 500,
					swipe: !0,
					swipeToSlide: !1,
					touchMove: !0,
					touchThreshold: 5,
					useCSS: !0,
					useTransform: !0,
					variableWidth: !1,
					vertical: !1,
					verticalSwiping: !1,
					waitForAnimate: !0,
					zIndex: 1e3
				}, this.initials = {
					animating: !1,
					dragging: !1,
					autoPlayTimer: null,
					currentDirection: 0,
					currentLeft: null,
					currentSlide: 0,
					direction: 1,
					$dots: null,
					listWidth: null,
					listHeight: null,
					loadIndex: 0,
					$nextArrow: null,
					$prevArrow: null,
					scrolling: !1,
					slideCount: null,
					slideWidth: null,
					$slideTrack: null,
					$slides: null,
					sliding: !1,
					slideOffset: 0,
					swipeLeft: null,
					swiping: !1,
					$list: null,
					touchObject: {},
					transformsEnabled: !1,
					unslicked: !1
				}, A.extend(this, this.initials), this.activeBreakpoint = null, this.animType = null, this.animProp = null, this.breakpoints = [], this.breakpointSettings = [], this.cssTransitions = !1, this.focussed = !1, this.interrupted = !1, this.hidden = "hidden", this.paused = !0, this.positionProp = null, this.respondTo = null, this.rowCount = 1, this.shouldClick = !0, this.$slider = A(I), this.$slidesCache = null, this.transformType = null, this.transitionType = null, this.visibilityChange = "visibilitychange", this.windowWidth = 0, this.windowTimer = null, T = A(I).data("slick") || {}, this.options = A.extend({}, this.defaults, g, T), this.currentSlide = this.options.initialSlide, this.originalSettings = this.options, void 0 !== document.mozHidden ? (this.hidden = "mozHidden", this.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (this.hidden = "webkitHidden", this.visibilityChange = "webkitvisibilitychange"), this.autoPlay = A.proxy(this.autoPlay, this), this.autoPlayClear = A.proxy(this.autoPlayClear, this), this.autoPlayIterator = A.proxy(this.autoPlayIterator, this), this.changeSlide = A.proxy(this.changeSlide, this), this.clickHandler = A.proxy(this.clickHandler, this), this.selectHandler = A.proxy(this.selectHandler, this), this.setPosition = A.proxy(this.setPosition, this), this.swipeHandler = A.proxy(this.swipeHandler, this), this.dragHandler = A.proxy(this.dragHandler, this), this.keyHandler = A.proxy(this.keyHandler, this), this.instanceUid = M++, this.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, this.registerBreakpoints(), this.init(!0)
			}
		}()).prototype.activateADA = function() {
			this.$slideTrack.find(".slick-active").attr({
				"aria-hidden": "false"
			}).find("a, input, button, select").attr({
				tabindex: "0"
			})
		}, M.prototype.addSlide = M.prototype.slickAdd = function(M, I, g) {
			if("boolean" == typeof I) g = I, I = null;
			else if(I < 0 || I >= this.slideCount) return !1;
			this.unload(), "number" == typeof I ? 0 === I && 0 === this.$slides.length ? A(M).appendTo(this.$slideTrack) : g ? A(M).insertBefore(this.$slides.eq(I)) : A(M).insertAfter(this.$slides.eq(I)) : !0 === g ? A(M).prependTo(this.$slideTrack) : A(M).appendTo(this.$slideTrack), this.$slides = this.$slideTrack.children(this.options.slide), this.$slideTrack.children(this.options.slide).detach(), this.$slideTrack.append(this.$slides), this.$slides.each(function(M, I) {
				A(I).attr("data-slick-index", M)
			}), this.$slidesCache = this.$slides, this.reinit()
		}, M.prototype.animateHeight = function() {
			if(1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
				var A = this.$slides.eq(this.currentSlide).outerHeight(!0);
				this.$list.animate({
					height: A
				}, this.options.speed)
			}
		}, M.prototype.animateSlide = function(M, I) {
			var g = {},
				T = this;
			T.animateHeight(), !0 === T.options.rtl && !1 === T.options.vertical && (M = -M), !1 === T.transformsEnabled ? !1 === T.options.vertical ? T.$slideTrack.animate({
				left: M
			}, T.options.speed, T.options.easing, I) : T.$slideTrack.animate({
				top: M
			}, T.options.speed, T.options.easing, I) : !1 === T.cssTransitions ? (!0 === T.options.rtl && (T.currentLeft = -T.currentLeft), A({
				animStart: T.currentLeft
			}).animate({
				animStart: M
			}, {
				duration: T.options.speed,
				easing: T.options.easing,
				step: function(A) {
					A = Math.ceil(A), !1 === T.options.vertical ? (g[T.animType] = "translate(" + A + "px, 0px)", T.$slideTrack.css(g)) : (g[T.animType] = "translate(0px," + A + "px)", T.$slideTrack.css(g))
				},
				complete: function() {
					I && I.call()
				}
			})) : (T.applyTransition(), M = Math.ceil(M), !1 === T.options.vertical ? g[T.animType] = "translate3d(" + M + "px, 0px, 0px)" : g[T.animType] = "translate3d(0px," + M + "px, 0px)", T.$slideTrack.css(g), I && setTimeout(function() {
				T.disableTransition(), I.call()
			}, T.options.speed))
		}, M.prototype.getNavTarget = function() {
			var M = this.options.asNavFor;
			return M && null !== M && (M = A(M).not(this.$slider)), M
		}, M.prototype.asNavFor = function(M) {
			var I = this.getNavTarget();
			null !== I && "object" == typeof I && I.each(function() {
				var I = A(this).slick("getSlick");
				I.unslicked || I.slideHandler(M, !0)
			})
		}, M.prototype.applyTransition = function(A) {
			var M = {};
			!1 === this.options.fade ? M[this.transitionType] = this.transformType + " " + this.options.speed + "ms " + this.options.cssEase : M[this.transitionType] = "opacity " + this.options.speed + "ms " + this.options.cssEase, !1 === this.options.fade ? this.$slideTrack.css(M) : this.$slides.eq(A).css(M)
		}, M.prototype.autoPlay = function() {
			this.autoPlayClear(), this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed))
		}, M.prototype.autoPlayClear = function() {
			this.autoPlayTimer && clearInterval(this.autoPlayTimer)
		}, M.prototype.autoPlayIterator = function() {
			var A = this.currentSlide + this.options.slidesToScroll;
			this.paused || this.interrupted || this.focussed || (!1 === this.options.infinite && (1 === this.direction && this.currentSlide + 1 === this.slideCount - 1 ? this.direction = 0 : 0 === this.direction && (A = this.currentSlide - this.options.slidesToScroll, this.currentSlide - 1 == 0 && (this.direction = 1))), this.slideHandler(A))
		}, M.prototype.buildArrows = function() {
			!0 === this.options.arrows && (this.$prevArrow = A(this.options.prevArrow).addClass("slick-arrow"), this.$nextArrow = A(this.options.nextArrow).addClass("slick-arrow"), this.slideCount > this.options.slidesToShow ? (this.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), this.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.prependTo(this.options.appendArrows), this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.appendTo(this.options.appendArrows), !0 !== this.options.infinite && this.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : this.$prevArrow.add(this.$nextArrow).addClass("slick-hidden").attr({
				"aria-disabled": "true",
				tabindex: "-1"
			}))
		}, M.prototype.buildDots = function() {
			var M, I;
			if(!0 === this.options.dots && this.slideCount > this.options.slidesToShow) {
				for(this.$slider.addClass("slick-dotted"), I = A("<ul />").addClass(this.options.dotsClass), M = 0; M <= this.getDotCount(); M += 1) I.append(A("<li />").append(this.options.customPaging.call(this, this, M)));
				this.$dots = I.appendTo(this.options.appendDots), this.$dots.find("li").first().addClass("slick-active")
			}
		}, M.prototype.buildOut = function() {
			this.$slides = this.$slider.children(this.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), this.slideCount = this.$slides.length, this.$slides.each(function(M, I) {
				A(I).attr("data-slick-index", M).data("originalStyling", A(I).attr("style") || "")
			}), this.$slider.addClass("slick-slider"), this.$slideTrack = 0 === this.slideCount ? A('<div class="slick-track"/>').appendTo(this.$slider) : this.$slides.wrapAll('<div class="slick-track"/>').parent(), this.$list = this.$slideTrack.wrap('<div class="slick-list"/>').parent(), this.$slideTrack.css("opacity", 0), !0 !== this.options.centerMode && !0 !== this.options.swipeToSlide || (this.options.slidesToScroll = 1), A("img[data-lazy]", this.$slider).not("[src]").addClass("slick-loading"), this.setupInfinite(), this.buildArrows(), this.buildDots(), this.updateDots(), this.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), !0 === this.options.draggable && this.$list.addClass("draggable")
		}, M.prototype.buildRows = function() {
			var A, M, I, g, T, N, E;
			if(g = document.createDocumentFragment(), N = this.$slider.children(), this.options.rows > 0) {
				for(E = this.options.slidesPerRow * this.options.rows, T = Math.ceil(N.length / E), A = 0; A < T; A++) {
					var C = document.createElement("div");
					for(M = 0; M < this.options.rows; M++) {
						var t = document.createElement("div");
						for(I = 0; I < this.options.slidesPerRow; I++) {
							var D = A * E + (M * this.options.slidesPerRow + I);
							N.get(D) && t.appendChild(N.get(D))
						}
						C.appendChild(t)
					}
					g.appendChild(C)
				}
				this.$slider.empty().append(g), this.$slider.children().children().children().css({
					width: 100 / this.options.slidesPerRow + "%",
					display: "inline-block"
				})
			}
		}, M.prototype.checkResponsive = function(M, I) {
			var g, T, N, E = !1,
				C = this.$slider.width(),
				t = window.innerWidth || A(window).width();
			if("window" === this.respondTo ? N = t : "slider" === this.respondTo ? N = C : "min" === this.respondTo && (N = Math.min(t, C)), this.options.responsive && this.options.responsive.length && null !== this.options.responsive) {
				T = null;
				for(g in this.breakpoints) this.breakpoints.hasOwnProperty(g) && (!1 === this.originalSettings.mobileFirst ? N < this.breakpoints[g] && (T = this.breakpoints[g]) : N > this.breakpoints[g] && (T = this.breakpoints[g]));
				null !== T ? null !== this.activeBreakpoint ? (T !== this.activeBreakpoint || I) && (this.activeBreakpoint = T, "unslick" === this.breakpointSettings[T] ? this.unslick(T) : (this.options = A.extend({}, this.originalSettings, this.breakpointSettings[T]), !0 === M && (this.currentSlide = this.options.initialSlide), this.refresh(M)), E = T) : (this.activeBreakpoint = T, "unslick" === this.breakpointSettings[T] ? this.unslick(T) : (this.options = A.extend({}, this.originalSettings, this.breakpointSettings[T]), !0 === M && (this.currentSlide = this.options.initialSlide), this.refresh(M)), E = T) : null !== this.activeBreakpoint && (this.activeBreakpoint = null, this.options = this.originalSettings, !0 === M && (this.currentSlide = this.options.initialSlide), this.refresh(M), E = T), M || !1 === E || this.$slider.trigger("breakpoint", [this, E])
			}
		}, M.prototype.changeSlide = function(M, I) {
			var g, T, N, E = A(M.currentTarget);
			switch(E.is("a") && M.preventDefault(), E.is("li") || (E = E.closest("li")), N = this.slideCount % this.options.slidesToScroll != 0, g = N ? 0 : (this.slideCount - this.currentSlide) % this.options.slidesToScroll, M.data.message) {
				case "previous":
					T = 0 === g ? this.options.slidesToScroll : this.options.slidesToShow - g, this.slideCount > this.options.slidesToShow && this.slideHandler(this.currentSlide - T, !1, I);
					break;
				case "next":
					T = 0 === g ? this.options.slidesToScroll : g, this.slideCount > this.options.slidesToShow && this.slideHandler(this.currentSlide + T, !1, I);
					break;
				case "index":
					var C = 0 === M.data.index ? 0 : M.data.index || E.index() * this.options.slidesToScroll;
					this.slideHandler(this.checkNavigable(C), !1, I), E.children().trigger("focus");
					break;
				default:
					return
			}
		}, M.prototype.checkNavigable = function(A) {
			var M, I;
			if(M = this.getNavigableIndexes(), I = 0, A > M[M.length - 1]) A = M[M.length - 1];
			else
				for(var g in M) {
					if(A < M[g]) {
						A = I;
						break
					}
					I = M[g]
				}
			return A
		}, M.prototype.cleanUpEvents = function() {
			this.options.dots && null !== this.$dots && (A("li", this.$dots).off("click.slick", this.changeSlide).off("mouseenter.slick", A.proxy(this.interrupt, this, !0)).off("mouseleave.slick", A.proxy(this.interrupt, this, !1)), !0 === this.options.accessibility && this.$dots.off("keydown.slick", this.keyHandler)), this.$slider.off("focus.slick blur.slick"), !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow && this.$prevArrow.off("click.slick", this.changeSlide), this.$nextArrow && this.$nextArrow.off("click.slick", this.changeSlide), !0 === this.options.accessibility && (this.$prevArrow && this.$prevArrow.off("keydown.slick", this.keyHandler), this.$nextArrow && this.$nextArrow.off("keydown.slick", this.keyHandler))), this.$list.off("touchstart.slick mousedown.slick", this.swipeHandler), this.$list.off("touchmove.slick mousemove.slick", this.swipeHandler), this.$list.off("touchend.slick mouseup.slick", this.swipeHandler), this.$list.off("touchcancel.slick mouseleave.slick", this.swipeHandler), this.$list.off("click.slick", this.clickHandler), A(document).off(this.visibilityChange, this.visibility), this.cleanUpSlideEvents(), !0 === this.options.accessibility && this.$list.off("keydown.slick", this.keyHandler), !0 === this.options.focusOnSelect && A(this.$slideTrack).children().off("click.slick", this.selectHandler), A(window).off("orientationchange.slick.slick-" + this.instanceUid, this.orientationChange), A(window).off("resize.slick.slick-" + this.instanceUid, this.resize), A("[draggable!=true]", this.$slideTrack).off("dragstart", this.preventDefault), A(window).off("load.slick.slick-" + this.instanceUid, this.setPosition)
		}, M.prototype.cleanUpSlideEvents = function() {
			this.$list.off("mouseenter.slick", A.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", A.proxy(this.interrupt, this, !1))
		}, M.prototype.cleanUpRows = function() {
			var A;
			this.options.rows > 0 && ((A = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(A))
		}, M.prototype.clickHandler = function(A) {
			!1 === this.shouldClick && (A.stopImmediatePropagation(), A.stopPropagation(), A.preventDefault())
		}, M.prototype.destroy = function(M) {
			this.autoPlayClear(), this.touchObject = {}, this.cleanUpEvents(), A(".slick-cloned", this.$slider).detach(), this.$dots && this.$dots.remove(), this.$prevArrow && this.$prevArrow.length && (this.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.remove()), this.$nextArrow && this.$nextArrow.length && (this.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.remove()), this.$slides && (this.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
				A(this).attr("style", A(this).data("originalStyling"))
			}), this.$slideTrack.children(this.options.slide).detach(), this.$slideTrack.detach(), this.$list.detach(), this.$slider.append(this.$slides)), this.cleanUpRows(), this.$slider.removeClass("slick-slider"), this.$slider.removeClass("slick-initialized"), this.$slider.removeClass("slick-dotted"), this.unslicked = !0, M || this.$slider.trigger("destroy", [this])
		}, M.prototype.disableTransition = function(A) {
			var M = {};
			M[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(M) : this.$slides.eq(A).css(M)
		}, M.prototype.fadeSlide = function(A, M) {
			var I = this;
			!1 === I.cssTransitions ? (I.$slides.eq(A).css({
				zIndex: I.options.zIndex
			}), I.$slides.eq(A).animate({
				opacity: 1
			}, I.options.speed, I.options.easing, M)) : (I.applyTransition(A), I.$slides.eq(A).css({
				opacity: 1,
				zIndex: I.options.zIndex
			}), M && setTimeout(function() {
				I.disableTransition(A), M.call()
			}, I.options.speed))
		}, M.prototype.fadeSlideOut = function(A) {
			!1 === this.cssTransitions ? this.$slides.eq(A).animate({
				opacity: 0,
				zIndex: this.options.zIndex - 2
			}, this.options.speed, this.options.easing) : (this.applyTransition(A), this.$slides.eq(A).css({
				opacity: 0,
				zIndex: this.options.zIndex - 2
			}))
		}, M.prototype.filterSlides = M.prototype.slickFilter = function(A) {
			null !== A && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(A).appendTo(this.$slideTrack), this.reinit())
		}, M.prototype.focusHandler = function() {
			var M = this;
			M.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(I) {
				I.stopImmediatePropagation();
				var g = A(this);
				setTimeout(function() {
					M.options.pauseOnFocus && (M.focussed = g.is(":focus"), M.autoPlay())
				}, 0)
			})
		}, M.prototype.getCurrent = M.prototype.slickCurrentSlide = function() {
			return this.currentSlide
		}, M.prototype.getDotCount = function() {
			var A = 0,
				M = 0,
				I = 0;
			if(!0 === this.options.infinite)
				if(this.slideCount <= this.options.slidesToShow) ++I;
				else
					for(; A < this.slideCount;) ++I, A = M + this.options.slidesToScroll, M += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
			else if(!0 === this.options.centerMode) I = this.slideCount;
			else if(this.options.asNavFor)
				for(; A < this.slideCount;) ++I, A = M + this.options.slidesToScroll, M += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
			else I = 1 + Math.ceil((this.slideCount - this.options.slidesToShow) / this.options.slidesToScroll);
			return I - 1
		}, M.prototype.getLeft = function(A) {
			var M, I, g, T, N = 0;
			return this.slideOffset = 0, I = this.$slides.first().outerHeight(!0), !0 === this.options.infinite ? (this.slideCount > this.options.slidesToShow && (this.slideOffset = this.slideWidth * this.options.slidesToShow * -1, T = -1, !0 === this.options.vertical && !0 === this.options.centerMode && (2 === this.options.slidesToShow ? T = -1.5 : 1 === this.options.slidesToShow && (T = -2)), N = I * this.options.slidesToShow * T), this.slideCount % this.options.slidesToScroll != 0 && A + this.options.slidesToScroll > this.slideCount && this.slideCount > this.options.slidesToShow && (A > this.slideCount ? (this.slideOffset = (this.options.slidesToShow - (A - this.slideCount)) * this.slideWidth * -1, N = (this.options.slidesToShow - (A - this.slideCount)) * I * -1) : (this.slideOffset = this.slideCount % this.options.slidesToScroll * this.slideWidth * -1, N = this.slideCount % this.options.slidesToScroll * I * -1))) : A + this.options.slidesToShow > this.slideCount && (this.slideOffset = (A + this.options.slidesToShow - this.slideCount) * this.slideWidth, N = (A + this.options.slidesToShow - this.slideCount) * I), this.slideCount <= this.options.slidesToShow && (this.slideOffset = 0, N = 0), !0 === this.options.centerMode && this.slideCount <= this.options.slidesToShow ? this.slideOffset = this.slideWidth * Math.floor(this.options.slidesToShow) / 2 - this.slideWidth * this.slideCount / 2 : !0 === this.options.centerMode && !0 === this.options.infinite ? this.slideOffset += this.slideWidth * Math.floor(this.options.slidesToShow / 2) - this.slideWidth : !0 === this.options.centerMode && (this.slideOffset = 0, this.slideOffset += this.slideWidth * Math.floor(this.options.slidesToShow / 2)), M = !1 === this.options.vertical ? A * this.slideWidth * -1 + this.slideOffset : A * I * -1 + N, !0 === this.options.variableWidth && (g = this.slideCount <= this.options.slidesToShow || !1 === this.options.infinite ? this.$slideTrack.children(".slick-slide").eq(A) : this.$slideTrack.children(".slick-slide").eq(A + this.options.slidesToShow), M = !0 === this.options.rtl ? g[0] ? -1 * (this.$slideTrack.width() - g[0].offsetLeft - g.width()) : 0 : g[0] ? -1 * g[0].offsetLeft : 0, !0 === this.options.centerMode && (g = this.slideCount <= this.options.slidesToShow || !1 === this.options.infinite ? this.$slideTrack.children(".slick-slide").eq(A) : this.$slideTrack.children(".slick-slide").eq(A + this.options.slidesToShow + 1), M = !0 === this.options.rtl ? g[0] ? -1 * (this.$slideTrack.width() - g[0].offsetLeft - g.width()) : 0 : g[0] ? -1 * g[0].offsetLeft : 0, M += (this.$list.width() - g.outerWidth()) / 2)), M
		}, M.prototype.getOption = M.prototype.slickGetOption = function(A) {
			return this.options[A]
		}, M.prototype.getNavigableIndexes = function() {
			var A, M = 0,
				I = 0,
				g = [];
			for(!1 === this.options.infinite ? A = this.slideCount : (M = -1 * this.options.slidesToScroll, I = -1 * this.options.slidesToScroll, A = 2 * this.slideCount); M < A;) g.push(M), M = I + this.options.slidesToScroll, I += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
			return g
		}, M.prototype.getSlick = function() {
			return this
		}, M.prototype.getSlideCount = function() {
			var M, I, g = this;
			return I = !0 === g.options.centerMode ? g.slideWidth * Math.floor(g.options.slidesToShow / 2) : 0, !0 === g.options.swipeToSlide ? (g.$slideTrack.find(".slick-slide").each(function(T, N) {
				if(N.offsetLeft - I + A(N).outerWidth() / 2 > -1 * g.swipeLeft) return M = N, !1
			}), Math.abs(A(M).attr("data-slick-index") - g.currentSlide) || 1) : g.options.slidesToScroll
		}, M.prototype.goTo = M.prototype.slickGoTo = function(A, M) {
			this.changeSlide({
				data: {
					message: "index",
					index: parseInt(A)
				}
			}, M)
		}, M.prototype.init = function(M) {
			A(this.$slider).hasClass("slick-initialized") || (A(this.$slider).addClass("slick-initialized"), this.buildRows(), this.buildOut(), this.setProps(), this.startLoad(), this.loadSlider(), this.initializeEvents(), this.updateArrows(), this.updateDots(), this.checkResponsive(!0), this.focusHandler()), M && this.$slider.trigger("init", [this]), !0 === this.options.accessibility && this.initADA(), this.options.autoplay && (this.paused = !1, this.autoPlay())
		}, M.prototype.initADA = function() {
			var M = this,
				I = Math.ceil(M.slideCount / M.options.slidesToShow),
				g = M.getNavigableIndexes().filter(function(A) {
					return A >= 0 && A < M.slideCount
				});
			M.$slides.add(M.$slideTrack.find(".slick-cloned")).attr({
				"aria-hidden": "true",
				tabindex: "-1"
			}).find("a, input, button, select").attr({
				tabindex: "-1"
			}), null !== M.$dots && (M.$slides.not(M.$slideTrack.find(".slick-cloned")).each(function(I) {
				var T = g.indexOf(I);
				if(A(this).attr({
						role: "tabpanel",
						id: "slick-slide" + M.instanceUid + I,
						tabindex: -1
					}), -1 !== T) {
					var N = "slick-slide-control" + M.instanceUid + T;
					A("#" + N).length && A(this).attr({
						"aria-describedby": N
					})
				}
			}), M.$dots.attr("role", "tablist").find("li").each(function(T) {
				var N = g[T];
				A(this).attr({
					role: "presentation"
				}), A(this).find("button").first().attr({
					role: "tab",
					id: "slick-slide-control" + M.instanceUid + T,
					"aria-controls": "slick-slide" + M.instanceUid + N,
					"aria-label": T + 1 + " of " + I,
					"aria-selected": null,
					tabindex: "-1"
				})
			}).eq(M.currentSlide).find("button").attr({
				"aria-selected": "true",
				tabindex: "0"
			}).end());
			for(var T = M.currentSlide, N = T + M.options.slidesToShow; T < N; T++) M.options.focusOnChange ? M.$slides.eq(T).attr({
				tabindex: "0"
			}) : M.$slides.eq(T).removeAttr("tabindex");
			M.activateADA()
		}, M.prototype.initArrowEvents = function() {
			!0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.off("click.slick").on("click.slick", {
				message: "previous"
			}, this.changeSlide), this.$nextArrow.off("click.slick").on("click.slick", {
				message: "next"
			}, this.changeSlide), !0 === this.options.accessibility && (this.$prevArrow.on("keydown.slick", this.keyHandler), this.$nextArrow.on("keydown.slick", this.keyHandler)))
		}, M.prototype.initDotEvents = function() {
			!0 === this.options.dots && this.slideCount > this.options.slidesToShow && (A("li", this.$dots).on("click.slick", {
				message: "index"
			}, this.changeSlide), !0 === this.options.accessibility && this.$dots.on("keydown.slick", this.keyHandler)), !0 === this.options.dots && !0 === this.options.pauseOnDotsHover && this.slideCount > this.options.slidesToShow && A("li", this.$dots).on("mouseenter.slick", A.proxy(this.interrupt, this, !0)).on("mouseleave.slick", A.proxy(this.interrupt, this, !1))
		}, M.prototype.initSlideEvents = function() {
			this.options.pauseOnHover && (this.$list.on("mouseenter.slick", A.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", A.proxy(this.interrupt, this, !1)))
		}, M.prototype.initializeEvents = function() {
			this.initArrowEvents(), this.initDotEvents(), this.initSlideEvents(), this.$list.on("touchstart.slick mousedown.slick", {
				action: "start"
			}, this.swipeHandler), this.$list.on("touchmove.slick mousemove.slick", {
				action: "move"
			}, this.swipeHandler), this.$list.on("touchend.slick mouseup.slick", {
				action: "end"
			}, this.swipeHandler), this.$list.on("touchcancel.slick mouseleave.slick", {
				action: "end"
			}, this.swipeHandler), this.$list.on("click.slick", this.clickHandler), A(document).on(this.visibilityChange, A.proxy(this.visibility, this)), !0 === this.options.accessibility && this.$list.on("keydown.slick", this.keyHandler), !0 === this.options.focusOnSelect && A(this.$slideTrack).children().on("click.slick", this.selectHandler), A(window).on("orientationchange.slick.slick-" + this.instanceUid, A.proxy(this.orientationChange, this)), A(window).on("resize.slick.slick-" + this.instanceUid, A.proxy(this.resize, this)), A("[draggable!=true]", this.$slideTrack).on("dragstart", this.preventDefault), A(window).on("load.slick.slick-" + this.instanceUid, this.setPosition), A(this.setPosition)
		}, M.prototype.initUI = function() {
			!0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show()
		}, M.prototype.keyHandler = function(A) {
			A.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === A.keyCode && !0 === this.options.accessibility ? this.changeSlide({
				data: {
					message: !0 === this.options.rtl ? "next" : "previous"
				}
			}) : 39 === A.keyCode && !0 === this.options.accessibility && this.changeSlide({
				data: {
					message: !0 === this.options.rtl ? "previous" : "next"
				}
			}))
		}, M.prototype.lazyLoad = function() {
			function M(M) {
				A("img[data-lazy]", M).each(function() {
					var M = A(this),
						I = A(this).attr("data-lazy"),
						g = A(this).attr("data-srcset"),
						T = A(this).attr("data-sizes") || N.$slider.attr("data-sizes"),
						E = document.createElement("img");
					E.onload = function() {
						M.animate({
							opacity: 0
						}, 100, function() {
							g && (M.attr("srcset", g), T && M.attr("sizes", T)), M.attr("src", I).animate({
								opacity: 1
							}, 200, function() {
								M.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
							}), N.$slider.trigger("lazyLoaded", [N, M, I])
						})
					}, E.onerror = function() {
						M.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), N.$slider.trigger("lazyLoadError", [N, M, I])
					}, E.src = I
				})
			}
			var I, g, T, N = this;
			if(!0 === N.options.centerMode ? !0 === N.options.infinite ? T = (g = N.currentSlide + (N.options.slidesToShow / 2 + 1)) + N.options.slidesToShow + 2 : (g = Math.max(0, N.currentSlide - (N.options.slidesToShow / 2 + 1)), T = N.options.slidesToShow / 2 + 1 + 2 + N.currentSlide) : (g = N.options.infinite ? N.options.slidesToShow + N.currentSlide : N.currentSlide, T = Math.ceil(g + N.options.slidesToShow), !0 === N.options.fade && (g > 0 && g--, T <= N.slideCount && T++)), I = N.$slider.find(".slick-slide").slice(g, T), "anticipated" === N.options.lazyLoad)
				for(var E = g - 1, C = T, t = N.$slider.find(".slick-slide"), D = 0; D < N.options.slidesToScroll; D++) E < 0 && (E = N.slideCount - 1), I = (I = I.add(t.eq(E))).add(t.eq(C)), E--, C++;
			M(I), N.slideCount <= N.options.slidesToShow ? M(N.$slider.find(".slick-slide")) : N.currentSlide >= N.slideCount - N.options.slidesToShow ? M(N.$slider.find(".slick-cloned").slice(0, N.options.slidesToShow)) : 0 === N.currentSlide && M(N.$slider.find(".slick-cloned").slice(-1 * N.options.slidesToShow))
		}, M.prototype.loadSlider = function() {
			this.setPosition(), this.$slideTrack.css({
				opacity: 1
			}), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
		}, M.prototype.next = M.prototype.slickNext = function() {
			this.changeSlide({
				data: {
					message: "next"
				}
			})
		}, M.prototype.orientationChange = function() {
			this.checkResponsive(), this.setPosition()
		}, M.prototype.pause = M.prototype.slickPause = function() {
			this.autoPlayClear(), this.paused = !0
		}, M.prototype.play = M.prototype.slickPlay = function() {
			this.autoPlay(), this.options.autoplay = !0, this.paused = !1, this.focussed = !1, this.interrupted = !1
		}, M.prototype.postSlide = function(M) {
			if(!this.unslicked && (this.$slider.trigger("afterChange", [this, M]), this.animating = !1, this.slideCount > this.options.slidesToShow && this.setPosition(), this.swipeLeft = null, this.options.autoplay && this.autoPlay(), !0 === this.options.accessibility && (this.initADA(), this.options.focusOnChange))) {
				A(this.$slides.get(this.currentSlide)).attr("tabindex", 0).focus()
			}
		}, M.prototype.prev = M.prototype.slickPrev = function() {
			this.changeSlide({
				data: {
					message: "previous"
				}
			})
		}, M.prototype.preventDefault = function(A) {
			A.preventDefault()
		}, M.prototype.progressiveLazyLoad = function(M) {
			M = M || 1;
			var I, g, T, N, E, C = this,
				t = A("img[data-lazy]", C.$slider);
			t.length ? (I = t.first(), g = I.attr("data-lazy"), T = I.attr("data-srcset"), N = I.attr("data-sizes") || C.$slider.attr("data-sizes"), (E = document.createElement("img")).onload = function() {
				T && (I.attr("srcset", T), N && I.attr("sizes", N)), I.attr("src", g).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === C.options.adaptiveHeight && C.setPosition(), C.$slider.trigger("lazyLoaded", [C, I, g]), C.progressiveLazyLoad()
			}, E.onerror = function() {
				M < 3 ? setTimeout(function() {
					C.progressiveLazyLoad(M + 1)
				}, 500) : (I.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), C.$slider.trigger("lazyLoadError", [C, I, g]), C.progressiveLazyLoad())
			}, E.src = g) : C.$slider.trigger("allImagesLoaded", [C])
		}, M.prototype.refresh = function(M) {
			var I, g;
			g = this.slideCount - this.options.slidesToShow, !this.options.infinite && this.currentSlide > g && (this.currentSlide = g), this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0), I = this.currentSlide, this.destroy(!0), A.extend(this, this.initials, {
				currentSlide: I
			}), this.init(), M || this.changeSlide({
				data: {
					message: "index",
					index: I
				}
			}, !1)
		}, M.prototype.registerBreakpoints = function() {
			var M, I, g, T = this,
				N = T.options.responsive || null;
			if("array" === A.type(N) && N.length) {
				T.respondTo = T.options.respondTo || "window";
				for(M in N)
					if(g = T.breakpoints.length - 1, N.hasOwnProperty(M)) {
						for(I = N[M].breakpoint; g >= 0;) T.breakpoints[g] && T.breakpoints[g] === I && T.breakpoints.splice(g, 1), g--;
						T.breakpoints.push(I), T.breakpointSettings[I] = N[M].settings
					}
				T.breakpoints.sort(function(A, M) {
					return T.options.mobileFirst ? A - M : M - A
				})
			}
		}, M.prototype.reinit = function() {
			this.$slides = this.$slideTrack.children(this.options.slide).addClass("slick-slide"), this.slideCount = this.$slides.length, this.currentSlide >= this.slideCount && 0 !== this.currentSlide && (this.currentSlide = this.currentSlide - this.options.slidesToScroll), this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0), this.registerBreakpoints(), this.setProps(), this.setupInfinite(), this.buildArrows(), this.updateArrows(), this.initArrowEvents(), this.buildDots(), this.updateDots(), this.initDotEvents(), this.cleanUpSlideEvents(), this.initSlideEvents(), this.checkResponsive(!1, !0), !0 === this.options.focusOnSelect && A(this.$slideTrack).children().on("click.slick", this.selectHandler), this.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), this.setPosition(), this.focusHandler(), this.paused = !this.options.autoplay, this.autoPlay(), this.$slider.trigger("reInit", [this])
		}, M.prototype.resize = function() {
			var M = this;
			A(window).width() !== M.windowWidth && (clearTimeout(M.windowDelay), M.windowDelay = window.setTimeout(function() {
				M.windowWidth = A(window).width(), M.checkResponsive(), M.unslicked || M.setPosition()
			}, 50))
		}, M.prototype.removeSlide = M.prototype.slickRemove = function(A, M, I) {
			if(A = "boolean" == typeof A ? !0 === (M = A) ? 0 : this.slideCount - 1 : !0 === M ? --A : A, this.slideCount < 1 || A < 0 || A > this.slideCount - 1) return !1;
			this.unload(), !0 === I ? this.$slideTrack.children().remove() : this.$slideTrack.children(this.options.slide).eq(A).remove(), this.$slides = this.$slideTrack.children(this.options.slide), this.$slideTrack.children(this.options.slide).detach(), this.$slideTrack.append(this.$slides), this.$slidesCache = this.$slides, this.reinit()
		}, M.prototype.setCSS = function(A) {
			var M, I, g = {};
			!0 === this.options.rtl && (A = -A), M = "left" == this.positionProp ? Math.ceil(A) + "px" : "0px", I = "top" == this.positionProp ? Math.ceil(A) + "px" : "0px", g[this.positionProp] = A, !1 === this.transformsEnabled ? this.$slideTrack.css(g) : (g = {}, !1 === this.cssTransitions ? (g[this.animType] = "translate(" + M + ", " + I + ")", this.$slideTrack.css(g)) : (g[this.animType] = "translate3d(" + M + ", " + I + ", 0px)", this.$slideTrack.css(g)))
		}, M.prototype.setDimensions = function() {
			!1 === this.options.vertical ? !0 === this.options.centerMode && this.$list.css({
				padding: "0px " + this.options.centerPadding
			}) : (this.$list.height(this.$slides.first().outerHeight(!0) * this.options.slidesToShow), !0 === this.options.centerMode && this.$list.css({
				padding: this.options.centerPadding + " 0px"
			})), this.listWidth = this.$list.width(), this.listHeight = this.$list.height(), !1 === this.options.vertical && !1 === this.options.variableWidth ? (this.slideWidth = Math.ceil(this.listWidth / this.options.slidesToShow), this.$slideTrack.width(Math.ceil(this.slideWidth * this.$slideTrack.children(".slick-slide").length))) : !0 === this.options.variableWidth ? this.$slideTrack.width(5e3 * this.slideCount) : (this.slideWidth = Math.ceil(this.listWidth), this.$slideTrack.height(Math.ceil(this.$slides.first().outerHeight(!0) * this.$slideTrack.children(".slick-slide").length)));
			var A = this.$slides.first().outerWidth(!0) - this.$slides.first().width();
			!1 === this.options.variableWidth && this.$slideTrack.children(".slick-slide").width(this.slideWidth - A)
		}, M.prototype.setFade = function() {
			var M, I = this;
			I.$slides.each(function(g, T) {
				M = I.slideWidth * g * -1, !0 === I.options.rtl ? A(T).css({
					position: "relative",
					right: M,
					top: 0,
					zIndex: I.options.zIndex - 2,
					opacity: 0
				}) : A(T).css({
					position: "relative",
					left: M,
					top: 0,
					zIndex: I.options.zIndex - 2,
					opacity: 0
				})
			}), I.$slides.eq(I.currentSlide).css({
				zIndex: I.options.zIndex - 1,
				opacity: 1
			})
		}, M.prototype.setHeight = function() {
			if(1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
				var A = this.$slides.eq(this.currentSlide).outerHeight(!0);
				this.$list.css("height", A)
			}
		}, M.prototype.setOption = M.prototype.slickSetOption = function() {
			var M, I, g, T, N, E = this,
				C = !1;
			if("object" === A.type(arguments[0]) ? (g = arguments[0], C = arguments[1], N = "multiple") : "string" === A.type(arguments[0]) && (g = arguments[0], T = arguments[1], C = arguments[2], "responsive" === arguments[0] && "array" === A.type(arguments[1]) ? N = "responsive" : void 0 !== arguments[1] && (N = "single")), "single" === N) E.options[g] = T;
			else if("multiple" === N) A.each(g, function(A, M) {
				E.options[A] = M
			});
			else if("responsive" === N)
				for(I in T)
					if("array" !== A.type(E.options.responsive)) E.options.responsive = [T[I]];
					else {
						for(M = E.options.responsive.length - 1; M >= 0;) E.options.responsive[M].breakpoint === T[I].breakpoint && E.options.responsive.splice(M, 1), M--;
						E.options.responsive.push(T[I])
					}
			C && (E.unload(), E.reinit())
		}, M.prototype.setPosition = function() {
			this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this])
		}, M.prototype.setProps = function() {
			var A = document.body.style;
			this.positionProp = !0 === this.options.vertical ? "top" : "left", "top" === this.positionProp ? this.$slider.addClass("slick-vertical") : this.$slider.removeClass("slick-vertical"), void 0 === A.WebkitTransition && void 0 === A.MozTransition && void 0 === A.msTransition || !0 === this.options.useCSS && (this.cssTransitions = !0), this.options.fade && ("number" == typeof this.options.zIndex ? this.options.zIndex < 3 && (this.options.zIndex = 3) : this.options.zIndex = this.defaults.zIndex), void 0 !== A.OTransform && (this.animType = "OTransform", this.transformType = "-o-transform", this.transitionType = "OTransition", void 0 === A.perspectiveProperty && void 0 === A.webkitPerspective && (this.animType = !1)), void 0 !== A.MozTransform && (this.animType = "MozTransform", this.transformType = "-moz-transform", this.transitionType = "MozTransition", void 0 === A.perspectiveProperty && void 0 === A.MozPerspective && (this.animType = !1)), void 0 !== A.webkitTransform && (this.animType = "webkitTransform", this.transformType = "-webkit-transform", this.transitionType = "webkitTransition", void 0 === A.perspectiveProperty && void 0 === A.webkitPerspective && (this.animType = !1)), void 0 !== A.msTransform && (this.animType = "msTransform", this.transformType = "-ms-transform", this.transitionType = "msTransition", void 0 === A.msTransform && (this.animType = !1)), void 0 !== A.transform && !1 !== this.animType && (this.animType = "transform", this.transformType = "transform", this.transitionType = "transition"), this.transformsEnabled = this.options.useTransform && null !== this.animType && !1 !== this.animType
		}, M.prototype.setSlideClasses = function(A) {
			var M, I, g, T;
			if(I = this.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), this.$slides.eq(A).addClass("slick-current"), !0 === this.options.centerMode) {
				var N = this.options.slidesToShow % 2 == 0 ? 1 : 0;
				M = Math.floor(this.options.slidesToShow / 2), !0 === this.options.infinite && (A >= M && A <= this.slideCount - 1 - M ? this.$slides.slice(A - M + N, A + M + 1).addClass("slick-active").attr("aria-hidden", "false") : (g = this.options.slidesToShow + A, I.slice(g - M + 1 + N, g + M + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === A ? I.eq(I.length - 1 - this.options.slidesToShow).addClass("slick-center") : A === this.slideCount - 1 && I.eq(this.options.slidesToShow).addClass("slick-center")), this.$slides.eq(A).addClass("slick-center")
			} else A >= 0 && A <= this.slideCount - this.options.slidesToShow ? this.$slides.slice(A, A + this.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : I.length <= this.options.slidesToShow ? I.addClass("slick-active").attr("aria-hidden", "false") : (T = this.slideCount % this.options.slidesToShow, g = !0 === this.options.infinite ? this.options.slidesToShow + A : A, this.options.slidesToShow == this.options.slidesToScroll && this.slideCount - A < this.options.slidesToShow ? I.slice(g - (this.options.slidesToShow - T), g + T).addClass("slick-active").attr("aria-hidden", "false") : I.slice(g, g + this.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
			"ondemand" !== this.options.lazyLoad && "anticipated" !== this.options.lazyLoad || this.lazyLoad()
		}, M.prototype.setupInfinite = function() {
			var M, I, g;
			if(!0 === this.options.fade && (this.options.centerMode = !1), !0 === this.options.infinite && !1 === this.options.fade && (I = null, this.slideCount > this.options.slidesToShow)) {
				for(g = !0 === this.options.centerMode ? this.options.slidesToShow + 1 : this.options.slidesToShow, M = this.slideCount; M > this.slideCount - g; M -= 1) I = M - 1, A(this.$slides[I]).clone(!0).attr("id", "").attr("data-slick-index", I - this.slideCount).prependTo(this.$slideTrack).addClass("slick-cloned");
				for(M = 0; M < g + this.slideCount; M += 1) I = M, A(this.$slides[I]).clone(!0).attr("id", "").attr("data-slick-index", I + this.slideCount).appendTo(this.$slideTrack).addClass("slick-cloned");
				this.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
					A(this).attr("id", "")
				})
			}
		}, M.prototype.interrupt = function(A) {
			A || this.autoPlay(), this.interrupted = A
		}, M.prototype.selectHandler = function(M) {
			var I = A(M.target).is(".slick-slide") ? A(M.target) : A(M.target).parents(".slick-slide"),
				g = parseInt(I.attr("data-slick-index"));
			g || (g = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(g, !1, !0) : this.slideHandler(g)
		}, M.prototype.slideHandler = function(A, M, I) {
			var g, T, N, E, C, t = null,
				D = this;
			if(M = M || !1, !(!0 === D.animating && !0 === D.options.waitForAnimate || !0 === D.options.fade && D.currentSlide === A))
				if(!1 === M && D.asNavFor(A), g = A, t = D.getLeft(g), E = D.getLeft(D.currentSlide), D.currentLeft = null === D.swipeLeft ? E : D.swipeLeft, !1 === D.options.infinite && !1 === D.options.centerMode && (A < 0 || A > D.getDotCount() * D.options.slidesToScroll)) !1 === D.options.fade && (g = D.currentSlide, !0 !== I && D.slideCount > D.options.slidesToShow ? D.animateSlide(E, function() {
					D.postSlide(g)
				}) : D.postSlide(g));
				else if(!1 === D.options.infinite && !0 === D.options.centerMode && (A < 0 || A > D.slideCount - D.options.slidesToScroll)) !1 === D.options.fade && (g = D.currentSlide, !0 !== I && D.slideCount > D.options.slidesToShow ? D.animateSlide(E, function() {
				D.postSlide(g)
			}) : D.postSlide(g));
			else {
				if(D.options.autoplay && clearInterval(D.autoPlayTimer), T = g < 0 ? D.slideCount % D.options.slidesToScroll != 0 ? D.slideCount - D.slideCount % D.options.slidesToScroll : D.slideCount + g : g >= D.slideCount ? D.slideCount % D.options.slidesToScroll != 0 ? 0 : g - D.slideCount : g, D.animating = !0, D.$slider.trigger("beforeChange", [D, D.currentSlide, T]), N = D.currentSlide, D.currentSlide = T, D.setSlideClasses(D.currentSlide), D.options.asNavFor && (C = (C = D.getNavTarget()).slick("getSlick")).slideCount <= C.options.slidesToShow && C.setSlideClasses(D.currentSlide), D.updateDots(), D.updateArrows(), !0 === D.options.fade) return !0 !== I ? (D.fadeSlideOut(N), D.fadeSlide(T, function() {
					D.postSlide(T)
				})) : D.postSlide(T), void D.animateHeight();
				!0 !== I && D.slideCount > D.options.slidesToShow ? D.animateSlide(t, function() {
					D.postSlide(T)
				}) : D.postSlide(T)
			}
		}, M.prototype.startLoad = function() {
			!0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.hide(), this.$nextArrow.hide()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.hide(), this.$slider.addClass("slick-loading")
		}, M.prototype.swipeDirection = function() {
			var A, M, I, g;
			return A = this.touchObject.startX - this.touchObject.curX, M = this.touchObject.startY - this.touchObject.curY, I = Math.atan2(M, A), (g = Math.round(180 * I / Math.PI)) < 0 && (g = 360 - Math.abs(g)), g <= 45 && g >= 0 ? !1 === this.options.rtl ? "left" : "right" : g <= 360 && g >= 315 ? !1 === this.options.rtl ? "left" : "right" : g >= 135 && g <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? g >= 35 && g <= 135 ? "down" : "up" : "vertical"
		}, M.prototype.swipeEnd = function(A) {
			var M, I;
			if(this.dragging = !1, this.swiping = !1, this.scrolling) return this.scrolling = !1, !1;
			if(this.interrupted = !1, this.shouldClick = !(this.touchObject.swipeLength > 10), void 0 === this.touchObject.curX) return !1;
			if(!0 === this.touchObject.edgeHit && this.$slider.trigger("edge", [this, this.swipeDirection()]), this.touchObject.swipeLength >= this.touchObject.minSwipe) {
				switch(I = this.swipeDirection()) {
					case "left":
					case "down":
						M = this.options.swipeToSlide ? this.checkNavigable(this.currentSlide + this.getSlideCount()) : this.currentSlide + this.getSlideCount(), this.currentDirection = 0;
						break;
					case "right":
					case "up":
						M = this.options.swipeToSlide ? this.checkNavigable(this.currentSlide - this.getSlideCount()) : this.currentSlide - this.getSlideCount(), this.currentDirection = 1
				}
				"vertical" != I && (this.slideHandler(M), this.touchObject = {}, this.$slider.trigger("swipe", [this, I]))
			} else this.touchObject.startX !== this.touchObject.curX && (this.slideHandler(this.currentSlide), this.touchObject = {})
		}, M.prototype.swipeHandler = function(A) {
			if(!(!1 === this.options.swipe || "ontouchend" in document && !1 === this.options.swipe || !1 === this.options.draggable && -1 !== A.type.indexOf("mouse"))) switch(this.touchObject.fingerCount = A.originalEvent && void 0 !== A.originalEvent.touches ? A.originalEvent.touches.length : 1, this.touchObject.minSwipe = this.listWidth / this.options.touchThreshold, !0 === this.options.verticalSwiping && (this.touchObject.minSwipe = this.listHeight / this.options.touchThreshold), A.data.action) {
				case "start":
					this.swipeStart(A);
					break;
				case "move":
					this.swipeMove(A);
					break;
				case "end":
					this.swipeEnd(A)
			}
		}, M.prototype.swipeMove = function(A) {
			var M, I, g, T, N, E;
			return N = void 0 !== A.originalEvent ? A.originalEvent.touches : null, !(!this.dragging || this.scrolling || N && 1 !== N.length) && (M = this.getLeft(this.currentSlide), this.touchObject.curX = void 0 !== N ? N[0].pageX : A.clientX, this.touchObject.curY = void 0 !== N ? N[0].pageY : A.clientY, this.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(this.touchObject.curX - this.touchObject.startX, 2))), E = Math.round(Math.sqrt(Math.pow(this.touchObject.curY - this.touchObject.startY, 2))), !this.options.verticalSwiping && !this.swiping && E > 4 ? (this.scrolling = !0, !1) : (!0 === this.options.verticalSwiping && (this.touchObject.swipeLength = E), I = this.swipeDirection(), void 0 !== A.originalEvent && this.touchObject.swipeLength > 4 && (this.swiping = !0, A.preventDefault()), T = (!1 === this.options.rtl ? 1 : -1) * (this.touchObject.curX > this.touchObject.startX ? 1 : -1), !0 === this.options.verticalSwiping && (T = this.touchObject.curY > this.touchObject.startY ? 1 : -1), g = this.touchObject.swipeLength, this.touchObject.edgeHit = !1, !1 === this.options.infinite && (0 === this.currentSlide && "right" === I || this.currentSlide >= this.getDotCount() && "left" === I) && (g = this.touchObject.swipeLength * this.options.edgeFriction, this.touchObject.edgeHit = !0), !1 === this.options.vertical ? this.swipeLeft = M + g * T : this.swipeLeft = M + g * (this.$list.height() / this.listWidth) * T, !0 === this.options.verticalSwiping && (this.swipeLeft = M + g * T), !0 !== this.options.fade && !1 !== this.options.touchMove && (!0 === this.animating ? (this.swipeLeft = null, !1) : void this.setCSS(this.swipeLeft))))
		}, M.prototype.swipeStart = function(A) {
			var M;
			if(this.interrupted = !0, 1 !== this.touchObject.fingerCount || this.slideCount <= this.options.slidesToShow) return this.touchObject = {}, !1;
			void 0 !== A.originalEvent && void 0 !== A.originalEvent.touches && (M = A.originalEvent.touches[0]), this.touchObject.startX = this.touchObject.curX = void 0 !== M ? M.pageX : A.clientX, this.touchObject.startY = this.touchObject.curY = void 0 !== M ? M.pageY : A.clientY, this.dragging = !0
		}, M.prototype.unfilterSlides = M.prototype.slickUnfilter = function() {
			null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit())
		}, M.prototype.unload = function() {
			A(".slick-cloned", this.$slider).remove(), this.$dots && this.$dots.remove(), this.$prevArrow && this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.remove(), this.$nextArrow && this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.remove(), this.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
		}, M.prototype.unslick = function(A) {
			this.$slider.trigger("unslick", [this, A]), this.destroy()
		}, M.prototype.updateArrows = function() {
			Math.floor(this.options.slidesToShow / 2), !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && !this.options.infinite && (this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), this.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === this.currentSlide ? (this.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), this.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : this.currentSlide >= this.slideCount - this.options.slidesToShow && !1 === this.options.centerMode ? (this.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : this.currentSlide >= this.slideCount - 1 && !0 === this.options.centerMode && (this.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
		}, M.prototype.updateDots = function() {
			null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").end(), this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active"))
		}, M.prototype.visibility = function() {
			this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
		}, A.fn.slick = function() {
			var A, I, g = arguments[0],
				T = Array.prototype.slice.call(arguments, 1),
				N = this.length;
			for(A = 0; A < N; A++)
				if("object" == typeof g || void 0 === g ? this[A].slick = new M(this[A], g) : I = this[A].slick[g].apply(this[A].slick, T), void 0 !== I) return I;
			return this
		}
	})
}, function(A, M, I) {
	"use strict";

	function g(A) {
		return A && A.__esModule ? A : {
			default: A
		}
	}
	Object.defineProperty(M, "__esModule", {
		value: !0
	});
	var T = g(I(0)),
		N = g(I(1)),
		E = g(I(38));
	M.default = function() {
		var A = parseInt((0, N.default)("lastTotalToken")),
			M = parseInt((0, N.default)("lastContributors"));
		T.default.getJSON("cnt/total.json").done(function(I) {
			var g = I.last - 25e8,
				T = I.total - 25e8,
				N = I.lastContributors,
				C = I.contributors;
			isNaN(A) || isNaN(M) ? (0, E.default)(g, T, N, C) : M > N && A + 25e8 > g ? (g = A, N = M, (0, E.default)(g, T, N, C)) : (0, E.default)(g, T, N, C)
		}).fail(function() {
			var A = (0, N.default)("totalToken"),
				M = (0, N.default)("lastTotalToken"),
				I = (0, N.default)("lastContributors"),
				g = (0, N.default)("contributors");
			A && (0, E.default)(M, A, I, g)
		})
	}
}, function(A, M, I) {
	"use strict";

	function g(A) {
		return A && A.__esModule ? A : {
			default: A
		}
	}
	Object.defineProperty(M, "__esModule", {
		value: !0
	});
	g(I(0));
	var T = g(I(5)),
		N = g(I(39)),
		E = g(I(43));
	M.default = function(A, M, I, g) {
		(0, T.default)("flip-counter", I, I), (0, T.default)("soldBnk", A, A), (0, N.default)(A, A);
		var C = g - I;
		0 !== C && function() {
			var t = [];
			do {
				var D = (0, E.default)(0, C);
				C -= D, t.push(D)
			} while (0 !== C);
			var B = 3e5,
				Q = [],
				i = t.length;
			do {
				var n = (0, E.default)(0, B);
				B -= n += 1, Q.push(n), i--
			} while (0 !== i);
			var w = M - A,
				c = [],
				o = t.length;
			do {
				var j = (0, E.default)(0, w);
				w -= j += 1, c.push(j), o--
			} while (0 !== o);
			for(var x = I, L = A, e = function(A) {
					setTimeout(function() {
						var I = x,
							E = L;
						x = parseInt(x) + parseInt(t[A]), L = parseInt(L) + parseInt(c[A]), (0, T.default)("flip-counter", I, x), (0, T.default)("soldBnk", E, L), (0, N.default)(E, L), document.cookie = "totalToken=" + M + ";max-age=31104000", document.cookie = "lastTotalToken=" + L + ";max-age=31104000", document.cookie = "contributors=" + g + ";max-age=31104000", document.cookie = "lastContributors=" + x + ";max-age=31104000"
					}, Q[A])
				}, y = 0; y < Q.length; y++) e(y)
		}()
	}
}, function(A, M, I) {
	"use strict";
	Object.defineProperty(M, "__esModule", {
		value: !0
	});
	var g = function(A) {
		return A && A.__esModule ? A : {
			default: A
		}
	}(I(40));
	M.default = function(A, M) {
		if(A <= 1e9) {
			var I = .017 * M + 25e6,
				T = .017 * A + 25e6;
			return I = Math.floor(I), T = Math.floor(T), (0, g.default)("bnkPrice", .017, A, 1e9, M, I, T)
		}
		if(A > 1e9 && A <= 2e9) {
			var N = 17e6 + .018 * (M - 1e9) + 25e6,
				E = 17e6 + .018 * (A - 1e9) + 25e6;
			return N = Math.floor(N), E = Math.floor(E), (0, g.default)("bnkPrice", .018, A, 2e9, M, N, E)
		}
		if(A > 2e9 && A <= 3e9) {
			var C = 35e6 + .019 * (M - 2e9) + 25e6,
				t = 35e6 + .019 * (A - 2e9) + 25e6;
			return C = Math.floor(C), t = Math.floor(t), (0, g.default)("bnkPrice", .019, A, 3e9, M, C, t)
		}
		if(A > 3e9 && A <= 4e9) {
			var D = 54e6 + .02 * (M - 3e9) + 25e6,
				B = 54e6 + .02 * (A - 3e9) + 25e6;
			return console.log(B), D = Math.floor(D), B = Math.floor(B), (0, g.default)("bnkPrice", .02, A, 4e9, M, D, B)
		}
		if(A > 4e9 && A <= 5e9) {
			var Q = 74e6 + .021 * (M - 4e9) + 25e6,
				i = 74e6 + .021 * (A - 4e9) + 25e6;
			return Q = Math.floor(Q), i = Math.floor(i), (0, g.default)("bnkPrice", .021, A, 5e9, M, Q, i)
		}
		if(A > 5e9 && A <= 6e9) {
			var n = 95e6 + .022 * (M - 5e9) + 25e6,
				w = 95e6 + .022 * (A - 5e9) + 25e6;
			return n = Math.floor(n), w = Math.floor(w), (0, g.default)("bnkPrice", .022, A, 6e9, M, n, w)
		}
		if(A > 6e9 && A <= 7e9) {
			var c = 117e6 + .023 * (M - 6e9) + 25e6,
				o = 117e6 + .023 * (A - 6e9) + 25e6;
			return c = Math.floor(c), o = Math.floor(o), (0, g.default)("bnkPrice", .023, A, 7e9, M, c, o)
		}
		if(A > 7e9 && A <= 75e8) {
			var j = 14e7 + .024 * (M - 7e9) + 25e6,
				x = 14e7 + .024 * (A - 7e9) + 25e6;
			return j = Math.floor(j), x = Math.floor(x), (0, g.default)("bnkPrice", .024, A, 75e8, M, j, x)
		}
	}
}, function(A, M, I) {
	"use strict";

	function g(A) {
		return A && A.__esModule ? A : {
			default: A
		}
	}
	Object.defineProperty(M, "__esModule", {
		value: !0
	});
	var T = g(I(0)),
		N = g(I(6)),
		E = g(I(5)),
		C = g(I(41));
	M.default = function(A, M, I, g, t, D, B) {
		(0, T.default)(".maxBnk").text((0, N.default)(g)), (0, T.default)("." + A).prop("Counter", 0).animate({
			Counter: M
		}, {
			duration: 300,
			easing: "linear",
			step: function(A) {
				(0, T.default)(this).text((0, N.default)(A.toFixed(3)))
			}
		}), (0, C.default)("myBnkBar", I, g, t), (0, C.default)("myEurBar", B, 177e6, D), (0, E.default)("raisedEur", B, D)
	}
}, function(A, M, I) {
	"use strict";
	Object.defineProperty(M, "__esModule", {
		value: !0
	});
	var g = function(A) {
		return A && A.__esModule ? A : {
			default: A
		}
	}(I(42));
	M.default = function(A, M, I, T) {
		function N(A, M) {
			var I = 100 * parseFloat(M) / parseFloat(A);
			return parseFloat(I)
		}
		var E = N(I, M);
		E = Math.round(E);
		var C = N(I, T);
		C = Math.round(C), (0, g.default)(A, E, C)
	}
}, function(A, M, I) {
	"use strict";
	(function(A) {
		Object.defineProperty(M, "__esModule", {
			value: !0
		}), M.default = function(M, I, g) {
			A("#" + M).prop("Counter", g).animate({
				Counter: I
			}, {
				duration: 1e3,
				easing: "swing",
				step: function(M) {
					A(this).css({
						width: M + "%"
					})
				}
			})
		}
	}).call(M, I(0))
}, function(A, M, I) {
	"use strict";
	Object.defineProperty(M, "__esModule", {
		value: !0
	}), M.default = function(A, M) {
		var I = Math.floor((Math.random() * (M - A) + A) / 3) + 1;
		return 0 === I && (I += 1), I
	}
}, function(A, M, I) {
	"use strict";
	Object.defineProperty(M, "__esModule", {
		value: !0
	}), M.default = function() {
		for(var A = document.querySelectorAll(".youtube"), M = function(M) {
				var I = "https://img.youtube.com/vi/" + A[M].dataset.embed + "/sddefault.jpg",
					g = new Image;
				g.src = I, g.addEventListener("load", void A[M].appendChild(g)), A[M].addEventListener("click", function() {
					var A = document.createElement("iframe");
					A.setAttribute("frameborder", "0"), A.setAttribute("allowfullscreen", ""), A.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1"), this.innerHTML = "", this.appendChild(A)
				})
			}, I = 0; I < A.length; I++) M(I)
	}
}]).default;