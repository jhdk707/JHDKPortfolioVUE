(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
	new MutationObserver((o) => {
		for (const s of o)
			if (s.type === "childList")
				for (const i of s.addedNodes)
					i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(o) {
		const s = {};
		return (
			o.integrity && (s.integrity = o.integrity),
			o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
			o.crossOrigin === "use-credentials"
				? (s.credentials = "include")
				: o.crossOrigin === "anonymous"
				? (s.credentials = "omit")
				: (s.credentials = "same-origin"),
			s
		);
	}
	function r(o) {
		if (o.ep) return;
		o.ep = !0;
		const s = n(o);
		fetch(o.href, s);
	}
})();
function Io(e, t) {
	const n = Object.create(null),
		r = e.split(",");
	for (let o = 0; o < r.length; o++) n[r[o]] = !0;
	return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const he = {},
	Xt = [],
	Ze = () => {},
	Qa = () => !1,
	Ja = /^on[^a-z]/,
	Pr = (e) => Ja.test(e),
	No = (e) => e.startsWith("onUpdate:"),
	Te = Object.assign,
	Ho = (e, t) => {
		const n = e.indexOf(t);
		n > -1 && e.splice(n, 1);
	},
	Ya = Object.prototype.hasOwnProperty,
	te = (e, t) => Ya.call(e, t),
	L = Array.isArray,
	en = (e) => Sr(e) === "[object Map]",
	ol = (e) => Sr(e) === "[object Set]",
	U = (e) => typeof e == "function",
	we = (e) => typeof e == "string",
	Er = (e) => typeof e == "symbol",
	ge = (e) => e !== null && typeof e == "object",
	sl = (e) => (ge(e) || U(e)) && U(e.then) && U(e.catch),
	il = Object.prototype.toString,
	Sr = (e) => il.call(e),
	Xa = (e) => Sr(e).slice(8, -1),
	ll = (e) => Sr(e) === "[object Object]",
	jo = (e) =>
		we(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
	sr = Io(
		",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
	),
	Tr = (e) => {
		const t = Object.create(null);
		return (n) => t[n] || (t[n] = e(n));
	},
	ec = /-(\w)/g,
	it = Tr((e) => e.replace(ec, (t, n) => (n ? n.toUpperCase() : ""))),
	tc = /\B([A-Z])/g,
	qt = Tr((e) => e.replace(tc, "-$1").toLowerCase()),
	Rr = Tr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
	Kr = Tr((e) => (e ? `on${Rr(e)}` : "")),
	Bt = (e, t) => !Object.is(e, t),
	ir = (e, t) => {
		for (let n = 0; n < e.length; n++) e[n](t);
	},
	pr = (e, t, n) => {
		Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
	},
	uo = (e) => {
		const t = parseFloat(e);
		return isNaN(t) ? e : t;
	};
let ks;
const fo = () =>
	ks ||
	(ks =
		typeof globalThis < "u"
			? globalThis
			: typeof self < "u"
			? self
			: typeof window < "u"
			? window
			: typeof global < "u"
			? global
			: {});
function jt(e) {
	if (L(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) {
			const r = e[n],
				o = we(r) ? sc(r) : jt(r);
			if (o) for (const s in o) t[s] = o[s];
		}
		return t;
	} else if (we(e) || ge(e)) return e;
}
const nc = /;(?![^(]*\))/g,
	rc = /:([^]+)/,
	oc = /\/\*[^]*?\*\//g;
function sc(e) {
	const t = {};
	return (
		e
			.replace(oc, "")
			.split(nc)
			.forEach((n) => {
				if (n) {
					const r = n.split(rc);
					r.length > 1 && (t[r[0].trim()] = r[1].trim());
				}
			}),
		t
	);
}
function Ne(e) {
	let t = "";
	if (we(e)) t = e;
	else if (L(e))
		for (let n = 0; n < e.length; n++) {
			const r = Ne(e[n]);
			r && (t += r + " ");
		}
	else if (ge(e)) for (const n in e) e[n] && (t += n + " ");
	return t.trim();
}
function al(e) {
	if (!e) return null;
	let { class: t, style: n } = e;
	return t && !we(t) && (e.class = Ne(t)), n && (e.style = jt(n)), e;
}
const ic =
		"itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
	lc = Io(ic);
function cl(e) {
	return !!e || e === "";
}
const Gr = (e) =>
		we(e)
			? e
			: e == null
			? ""
			: L(e) || (ge(e) && (e.toString === il || !U(e.toString)))
			? JSON.stringify(e, ul, 2)
			: String(e),
	ul = (e, t) =>
		t && t.__v_isRef
			? ul(e, t.value)
			: en(t)
			? {
					[`Map(${t.size})`]: [...t.entries()].reduce(
						(n, [r, o]) => ((n[`${r} =>`] = o), n),
						{}
					),
			  }
			: ol(t)
			? { [`Set(${t.size})`]: [...t.values()] }
			: ge(t) && !L(t) && !ll(t)
			? String(t)
			: t;
let Ve;
class fl {
	constructor(t = !1) {
		(this.detached = t),
			(this._active = !0),
			(this.effects = []),
			(this.cleanups = []),
			(this.parent = Ve),
			!t && Ve && (this.index = (Ve.scopes || (Ve.scopes = [])).push(this) - 1);
	}
	get active() {
		return this._active;
	}
	run(t) {
		if (this._active) {
			const n = Ve;
			try {
				return (Ve = this), t();
			} finally {
				Ve = n;
			}
		}
	}
	on() {
		Ve = this;
	}
	off() {
		Ve = this.parent;
	}
	stop(t) {
		if (this._active) {
			let n, r;
			for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
			for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
			if (this.scopes)
				for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
			if (!this.detached && this.parent && !t) {
				const o = this.parent.scopes.pop();
				o &&
					o !== this &&
					((this.parent.scopes[this.index] = o), (o.index = this.index));
			}
			(this.parent = void 0), (this._active = !1);
		}
	}
}
function ac(e) {
	return new fl(e);
}
function cc(e, t = Ve) {
	t && t.active && t.effects.push(e);
}
function uc() {
	return Ve;
}
const Fo = (e) => {
		const t = new Set(e);
		return (t.w = 0), (t.n = 0), t;
	},
	dl = (e) => (e.w & Pt) > 0,
	pl = (e) => (e.n & Pt) > 0,
	fc = ({ deps: e }) => {
		if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Pt;
	},
	dc = (e) => {
		const { deps: t } = e;
		if (t.length) {
			let n = 0;
			for (let r = 0; r < t.length; r++) {
				const o = t[r];
				dl(o) && !pl(o) ? o.delete(e) : (t[n++] = o),
					(o.w &= ~Pt),
					(o.n &= ~Pt);
			}
			t.length = n;
		}
	},
	hr = new WeakMap();
let kn = 0,
	Pt = 1;
const po = 30;
let qe;
const Ft = Symbol(""),
	ho = Symbol("");
class Lo {
	constructor(t, n = null, r) {
		(this.fn = t),
			(this.scheduler = n),
			(this.active = !0),
			(this.deps = []),
			(this.parent = void 0),
			cc(this, r);
	}
	run() {
		if (!this.active) return this.fn();
		let t = qe,
			n = xt;
		for (; t; ) {
			if (t === this) return;
			t = t.parent;
		}
		try {
			return (
				(this.parent = qe),
				(qe = this),
				(xt = !0),
				(Pt = 1 << ++kn),
				kn <= po ? fc(this) : Cs(this),
				this.fn()
			);
		} finally {
			kn <= po && dc(this),
				(Pt = 1 << --kn),
				(qe = this.parent),
				(xt = n),
				(this.parent = void 0),
				this.deferStop && this.stop();
		}
	}
	stop() {
		qe === this
			? (this.deferStop = !0)
			: this.active &&
			  (Cs(this), this.onStop && this.onStop(), (this.active = !1));
	}
}
function Cs(e) {
	const { deps: t } = e;
	if (t.length) {
		for (let n = 0; n < t.length; n++) t[n].delete(e);
		t.length = 0;
	}
}
let xt = !0;
const hl = [];
function dn() {
	hl.push(xt), (xt = !1);
}
function pn() {
	const e = hl.pop();
	xt = e === void 0 ? !0 : e;
}
function He(e, t, n) {
	if (xt && qe) {
		let r = hr.get(e);
		r || hr.set(e, (r = new Map()));
		let o = r.get(n);
		o || r.set(n, (o = Fo())), gl(o);
	}
}
function gl(e, t) {
	let n = !1;
	kn <= po ? pl(e) || ((e.n |= Pt), (n = !dl(e))) : (n = !e.has(qe)),
		n && (e.add(qe), qe.deps.push(e));
}
function ut(e, t, n, r, o, s) {
	const i = hr.get(e);
	if (!i) return;
	let l = [];
	if (t === "clear") l = [...i.values()];
	else if (n === "length" && L(e)) {
		const a = Number(r);
		i.forEach((c, u) => {
			(u === "length" || (!Er(u) && u >= a)) && l.push(c);
		});
	} else
		switch ((n !== void 0 && l.push(i.get(n)), t)) {
			case "add":
				L(e)
					? jo(n) && l.push(i.get("length"))
					: (l.push(i.get(Ft)), en(e) && l.push(i.get(ho)));
				break;
			case "delete":
				L(e) || (l.push(i.get(Ft)), en(e) && l.push(i.get(ho)));
				break;
			case "set":
				en(e) && l.push(i.get(Ft));
				break;
		}
	if (l.length === 1) l[0] && go(l[0]);
	else {
		const a = [];
		for (const c of l) c && a.push(...c);
		go(Fo(a));
	}
}
function go(e, t) {
	const n = L(e) ? e : [...e];
	for (const r of n) r.computed && $s(r);
	for (const r of n) r.computed || $s(r);
}
function $s(e, t) {
	(e !== qe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function pc(e, t) {
	var n;
	return (n = hr.get(e)) == null ? void 0 : n.get(t);
}
const hc = Io("__proto__,__v_isRef,__isVue"),
	ml = new Set(
		Object.getOwnPropertyNames(Symbol)
			.filter((e) => e !== "arguments" && e !== "caller")
			.map((e) => Symbol[e])
			.filter(Er)
	),
	Ps = gc();
function gc() {
	const e = {};
	return (
		["includes", "indexOf", "lastIndexOf"].forEach((t) => {
			e[t] = function (...n) {
				const r = re(this);
				for (let s = 0, i = this.length; s < i; s++) He(r, "get", s + "");
				const o = r[t](...n);
				return o === -1 || o === !1 ? r[t](...n.map(re)) : o;
			};
		}),
		["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
			e[t] = function (...n) {
				dn();
				const r = re(this)[t].apply(this, n);
				return pn(), r;
			};
		}),
		e
	);
}
function mc(e) {
	const t = re(this);
	return He(t, "has", e), t.hasOwnProperty(e);
}
class bl {
	constructor(t = !1, n = !1) {
		(this._isReadonly = t), (this._shallow = n);
	}
	get(t, n, r) {
		const o = this._isReadonly,
			s = this._shallow;
		if (n === "__v_isReactive") return !o;
		if (n === "__v_isReadonly") return o;
		if (n === "__v_isShallow") return s;
		if (n === "__v_raw" && r === (o ? (s ? Tc : wl) : s ? _l : yl).get(t))
			return t;
		const i = L(t);
		if (!o) {
			if (i && te(Ps, n)) return Reflect.get(Ps, n, r);
			if (n === "hasOwnProperty") return mc;
		}
		const l = Reflect.get(t, n, r);
		return (Er(n) ? ml.has(n) : hc(n)) || (o || He(t, "get", n), s)
			? l
			: Ee(l)
			? i && jo(n)
				? l
				: l.value
			: ge(l)
			? o
				? kl(l)
				: Un(l)
			: l;
	}
}
class vl extends bl {
	constructor(t = !1) {
		super(!1, t);
	}
	set(t, n, r, o) {
		let s = t[n];
		if (on(s) && Ee(s) && !Ee(r)) return !1;
		if (
			!this._shallow &&
			(!gr(r) && !on(r) && ((s = re(s)), (r = re(r))), !L(t) && Ee(s) && !Ee(r))
		)
			return (s.value = r), !0;
		const i = L(t) && jo(n) ? Number(n) < t.length : te(t, n),
			l = Reflect.set(t, n, r, o);
		return (
			t === re(o) && (i ? Bt(r, s) && ut(t, "set", n, r) : ut(t, "add", n, r)),
			l
		);
	}
	deleteProperty(t, n) {
		const r = te(t, n);
		t[n];
		const o = Reflect.deleteProperty(t, n);
		return o && r && ut(t, "delete", n, void 0), o;
	}
	has(t, n) {
		const r = Reflect.has(t, n);
		return (!Er(n) || !ml.has(n)) && He(t, "has", n), r;
	}
	ownKeys(t) {
		return He(t, "iterate", L(t) ? "length" : Ft), Reflect.ownKeys(t);
	}
}
class bc extends bl {
	constructor(t = !1) {
		super(!0, t);
	}
	set(t, n) {
		return !0;
	}
	deleteProperty(t, n) {
		return !0;
	}
}
const vc = new vl(),
	yc = new bc(),
	_c = new vl(!0),
	Do = (e) => e,
	Or = (e) => Reflect.getPrototypeOf(e);
function Gn(e, t, n = !1, r = !1) {
	e = e.__v_raw;
	const o = re(e),
		s = re(t);
	n || (Bt(t, s) && He(o, "get", t), He(o, "get", s));
	const { has: i } = Or(o),
		l = r ? Do : n ? Uo : An;
	if (i.call(o, t)) return l(e.get(t));
	if (i.call(o, s)) return l(e.get(s));
	e !== o && e.get(t);
}
function Zn(e, t = !1) {
	const n = this.__v_raw,
		r = re(n),
		o = re(e);
	return (
		t || (Bt(e, o) && He(r, "has", e), He(r, "has", o)),
		e === o ? n.has(e) : n.has(e) || n.has(o)
	);
}
function Qn(e, t = !1) {
	return (
		(e = e.__v_raw), !t && He(re(e), "iterate", Ft), Reflect.get(e, "size", e)
	);
}
function Es(e) {
	e = re(e);
	const t = re(this);
	return Or(t).has.call(t, e) || (t.add(e), ut(t, "add", e, e)), this;
}
function Ss(e, t) {
	t = re(t);
	const n = re(this),
		{ has: r, get: o } = Or(n);
	let s = r.call(n, e);
	s || ((e = re(e)), (s = r.call(n, e)));
	const i = o.call(n, e);
	return (
		n.set(e, t), s ? Bt(t, i) && ut(n, "set", e, t) : ut(n, "add", e, t), this
	);
}
function Ts(e) {
	const t = re(this),
		{ has: n, get: r } = Or(t);
	let o = n.call(t, e);
	o || ((e = re(e)), (o = n.call(t, e))), r && r.call(t, e);
	const s = t.delete(e);
	return o && ut(t, "delete", e, void 0), s;
}
function Rs() {
	const e = re(this),
		t = e.size !== 0,
		n = e.clear();
	return t && ut(e, "clear", void 0, void 0), n;
}
function Jn(e, t) {
	return function (r, o) {
		const s = this,
			i = s.__v_raw,
			l = re(i),
			a = t ? Do : e ? Uo : An;
		return (
			!e && He(l, "iterate", Ft), i.forEach((c, u) => r.call(o, a(c), a(u), s))
		);
	};
}
function Yn(e, t, n) {
	return function (...r) {
		const o = this.__v_raw,
			s = re(o),
			i = en(s),
			l = e === "entries" || (e === Symbol.iterator && i),
			a = e === "keys" && i,
			c = o[e](...r),
			u = n ? Do : t ? Uo : An;
		return (
			!t && He(s, "iterate", a ? ho : Ft),
			{
				next() {
					const { value: f, done: h } = c.next();
					return h
						? { value: f, done: h }
						: { value: l ? [u(f[0]), u(f[1])] : u(f), done: h };
				},
				[Symbol.iterator]() {
					return this;
				},
			}
		);
	};
}
function ht(e) {
	return function (...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function wc() {
	const e = {
			get(s) {
				return Gn(this, s);
			},
			get size() {
				return Qn(this);
			},
			has: Zn,
			add: Es,
			set: Ss,
			delete: Ts,
			clear: Rs,
			forEach: Jn(!1, !1),
		},
		t = {
			get(s) {
				return Gn(this, s, !1, !0);
			},
			get size() {
				return Qn(this);
			},
			has: Zn,
			add: Es,
			set: Ss,
			delete: Ts,
			clear: Rs,
			forEach: Jn(!1, !0),
		},
		n = {
			get(s) {
				return Gn(this, s, !0);
			},
			get size() {
				return Qn(this, !0);
			},
			has(s) {
				return Zn.call(this, s, !0);
			},
			add: ht("add"),
			set: ht("set"),
			delete: ht("delete"),
			clear: ht("clear"),
			forEach: Jn(!0, !1),
		},
		r = {
			get(s) {
				return Gn(this, s, !0, !0);
			},
			get size() {
				return Qn(this, !0);
			},
			has(s) {
				return Zn.call(this, s, !0);
			},
			add: ht("add"),
			set: ht("set"),
			delete: ht("delete"),
			clear: ht("clear"),
			forEach: Jn(!0, !0),
		};
	return (
		["keys", "values", "entries", Symbol.iterator].forEach((s) => {
			(e[s] = Yn(s, !1, !1)),
				(n[s] = Yn(s, !0, !1)),
				(t[s] = Yn(s, !1, !0)),
				(r[s] = Yn(s, !0, !0));
		}),
		[e, n, t, r]
	);
}
const [xc, kc, Cc, $c] = wc();
function Bo(e, t) {
	const n = t ? (e ? $c : Cc) : e ? kc : xc;
	return (r, o, s) =>
		o === "__v_isReactive"
			? !e
			: o === "__v_isReadonly"
			? e
			: o === "__v_raw"
			? r
			: Reflect.get(te(n, o) && o in r ? n : r, o, s);
}
const Pc = { get: Bo(!1, !1) },
	Ec = { get: Bo(!1, !0) },
	Sc = { get: Bo(!0, !1) },
	yl = new WeakMap(),
	_l = new WeakMap(),
	wl = new WeakMap(),
	Tc = new WeakMap();
function Rc(e) {
	switch (e) {
		case "Object":
		case "Array":
			return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet":
			return 2;
		default:
			return 0;
	}
}
function Oc(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Rc(Xa(e));
}
function Un(e) {
	return on(e) ? e : Vo(e, !1, vc, Pc, yl);
}
function xl(e) {
	return Vo(e, !1, _c, Ec, _l);
}
function kl(e) {
	return Vo(e, !0, yc, Sc, wl);
}
function Vo(e, t, n, r, o) {
	if (!ge(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
	const s = o.get(e);
	if (s) return s;
	const i = Oc(e);
	if (i === 0) return e;
	const l = new Proxy(e, i === 2 ? r : n);
	return o.set(e, l), l;
}
function tn(e) {
	return on(e) ? tn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function on(e) {
	return !!(e && e.__v_isReadonly);
}
function gr(e) {
	return !!(e && e.__v_isShallow);
}
function Cl(e) {
	return tn(e) || on(e);
}
function re(e) {
	const t = e && e.__v_raw;
	return t ? re(t) : e;
}
function qo(e) {
	return pr(e, "__v_skip", !0), e;
}
const An = (e) => (ge(e) ? Un(e) : e),
	Uo = (e) => (ge(e) ? kl(e) : e);
function $l(e) {
	xt && qe && ((e = re(e)), gl(e.dep || (e.dep = Fo())));
}
function Pl(e, t) {
	e = re(e);
	const n = e.dep;
	n && go(n);
}
function Ee(e) {
	return !!(e && e.__v_isRef === !0);
}
function Wo(e) {
	return El(e, !1);
}
function zc(e) {
	return El(e, !0);
}
function El(e, t) {
	return Ee(e) ? e : new Mc(e, t);
}
class Mc {
	constructor(t, n) {
		(this.__v_isShallow = n),
			(this.dep = void 0),
			(this.__v_isRef = !0),
			(this._rawValue = n ? t : re(t)),
			(this._value = n ? t : An(t));
	}
	get value() {
		return $l(this), this._value;
	}
	set value(t) {
		const n = this.__v_isShallow || gr(t) || on(t);
		(t = n ? t : re(t)),
			Bt(t, this._rawValue) &&
				((this._rawValue = t), (this._value = n ? t : An(t)), Pl(this));
	}
}
function ce(e) {
	return Ee(e) ? e.value : e;
}
const Ac = {
	get: (e, t, n) => ce(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		const o = e[t];
		return Ee(o) && !Ee(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
	},
};
function Sl(e) {
	return tn(e) ? e : new Proxy(e, Ac);
}
function mo(e) {
	const t = L(e) ? new Array(e.length) : {};
	for (const n in e) t[n] = Nc(e, n);
	return t;
}
class Ic {
	constructor(t, n, r) {
		(this._object = t),
			(this._key = n),
			(this._defaultValue = r),
			(this.__v_isRef = !0);
	}
	get value() {
		const t = this._object[this._key];
		return t === void 0 ? this._defaultValue : t;
	}
	set value(t) {
		this._object[this._key] = t;
	}
	get dep() {
		return pc(re(this._object), this._key);
	}
}
function Nc(e, t, n) {
	const r = e[t];
	return Ee(r) ? r : new Ic(e, t, n);
}
class Hc {
	constructor(t, n, r, o) {
		(this._setter = n),
			(this.dep = void 0),
			(this.__v_isRef = !0),
			(this.__v_isReadonly = !1),
			(this._dirty = !0),
			(this.effect = new Lo(t, () => {
				this._dirty || ((this._dirty = !0), Pl(this));
			})),
			(this.effect.computed = this),
			(this.effect.active = this._cacheable = !o),
			(this.__v_isReadonly = r);
	}
	get value() {
		const t = re(this);
		return (
			$l(t),
			(t._dirty || !t._cacheable) &&
				((t._dirty = !1), (t._value = t.effect.run())),
			t._value
		);
	}
	set value(t) {
		this._setter(t);
	}
}
function jc(e, t, n = !1) {
	let r, o;
	const s = U(e);
	return (
		s ? ((r = e), (o = Ze)) : ((r = e.get), (o = e.set)),
		new Hc(r, o, s || !o, n)
	);
}
function kt(e, t, n, r) {
	let o;
	try {
		o = r ? e(...r) : e();
	} catch (s) {
		zr(s, t, n);
	}
	return o;
}
function Qe(e, t, n, r) {
	if (U(e)) {
		const s = kt(e, t, n, r);
		return (
			s &&
				sl(s) &&
				s.catch((i) => {
					zr(i, t, n);
				}),
			s
		);
	}
	const o = [];
	for (let s = 0; s < e.length; s++) o.push(Qe(e[s], t, n, r));
	return o;
}
function zr(e, t, n, r = !0) {
	const o = t ? t.vnode : null;
	if (t) {
		let s = t.parent;
		const i = t.proxy,
			l = n;
		for (; s; ) {
			const c = s.ec;
			if (c) {
				for (let u = 0; u < c.length; u++) if (c[u](e, i, l) === !1) return;
			}
			s = s.parent;
		}
		const a = t.appContext.config.errorHandler;
		if (a) {
			kt(a, null, 10, [e, i, l]);
			return;
		}
	}
	Fc(e, n, o, r);
}
function Fc(e, t, n, r = !0) {
	console.error(e);
}
let In = !1,
	bo = !1;
const Oe = [];
let tt = 0;
const nn = [];
let ct = null,
	At = 0;
const Tl = Promise.resolve();
let Ko = null;
function Go(e) {
	const t = Ko || Tl;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Lc(e) {
	let t = tt + 1,
		n = Oe.length;
	for (; t < n; ) {
		const r = (t + n) >>> 1,
			o = Oe[r],
			s = Nn(o);
		s < e || (s === e && o.pre) ? (t = r + 1) : (n = r);
	}
	return t;
}
function Zo(e) {
	(!Oe.length || !Oe.includes(e, In && e.allowRecurse ? tt + 1 : tt)) &&
		(e.id == null ? Oe.push(e) : Oe.splice(Lc(e.id), 0, e), Rl());
}
function Rl() {
	!In && !bo && ((bo = !0), (Ko = Tl.then(zl)));
}
function Dc(e) {
	const t = Oe.indexOf(e);
	t > tt && Oe.splice(t, 1);
}
function Bc(e) {
	L(e)
		? nn.push(...e)
		: (!ct || !ct.includes(e, e.allowRecurse ? At + 1 : At)) && nn.push(e),
		Rl();
}
function Os(e, t = In ? tt + 1 : 0) {
	for (; t < Oe.length; t++) {
		const n = Oe[t];
		n && n.pre && (Oe.splice(t, 1), t--, n());
	}
}
function Ol(e) {
	if (nn.length) {
		const t = [...new Set(nn)];
		if (((nn.length = 0), ct)) {
			ct.push(...t);
			return;
		}
		for (ct = t, ct.sort((n, r) => Nn(n) - Nn(r)), At = 0; At < ct.length; At++)
			ct[At]();
		(ct = null), (At = 0);
	}
}
const Nn = (e) => (e.id == null ? 1 / 0 : e.id),
	Vc = (e, t) => {
		const n = Nn(e) - Nn(t);
		if (n === 0) {
			if (e.pre && !t.pre) return -1;
			if (t.pre && !e.pre) return 1;
		}
		return n;
	};
function zl(e) {
	(bo = !1), (In = !0), Oe.sort(Vc);
	const t = Ze;
	try {
		for (tt = 0; tt < Oe.length; tt++) {
			const n = Oe[tt];
			n && n.active !== !1 && kt(n, null, 14);
		}
	} finally {
		(tt = 0),
			(Oe.length = 0),
			Ol(),
			(In = !1),
			(Ko = null),
			(Oe.length || nn.length) && zl();
	}
}
function qc(e, t, ...n) {
	if (e.isUnmounted) return;
	const r = e.vnode.props || he;
	let o = n;
	const s = t.startsWith("update:"),
		i = s && t.slice(7);
	if (i && i in r) {
		const u = `${i === "modelValue" ? "model" : i}Modifiers`,
			{ number: f, trim: h } = r[u] || he;
		h && (o = n.map((g) => (we(g) ? g.trim() : g))), f && (o = n.map(uo));
	}
	let l,
		a = r[(l = Kr(t))] || r[(l = Kr(it(t)))];
	!a && s && (a = r[(l = Kr(qt(t)))]), a && Qe(a, e, 6, o);
	const c = r[l + "Once"];
	if (c) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[l]) return;
		(e.emitted[l] = !0), Qe(c, e, 6, o);
	}
}
function Ml(e, t, n = !1) {
	const r = t.emitsCache,
		o = r.get(e);
	if (o !== void 0) return o;
	const s = e.emits;
	let i = {},
		l = !1;
	if (!U(e)) {
		const a = (c) => {
			const u = Ml(c, t, !0);
			u && ((l = !0), Te(i, u));
		};
		!n && t.mixins.length && t.mixins.forEach(a),
			e.extends && a(e.extends),
			e.mixins && e.mixins.forEach(a);
	}
	return !s && !l
		? (ge(e) && r.set(e, null), null)
		: (L(s) ? s.forEach((a) => (i[a] = null)) : Te(i, s),
		  ge(e) && r.set(e, i),
		  i);
}
function Mr(e, t) {
	return !e || !Pr(t)
		? !1
		: ((t = t.slice(2).replace(/Once$/, "")),
		  te(e, t[0].toLowerCase() + t.slice(1)) || te(e, qt(t)) || te(e, t));
}
let Se = null,
	Ar = null;
function mr(e) {
	const t = Se;
	return (Se = e), (Ar = (e && e.type.__scopeId) || null), t;
}
function Qo(e) {
	Ar = e;
}
function Jo() {
	Ar = null;
}
const Uc = (e) => ae;
function ae(e, t = Se, n) {
	if (!t || e._n) return e;
	const r = (...o) => {
		r._d && Bs(-1);
		const s = mr(t);
		let i;
		try {
			i = e(...o);
		} finally {
			mr(s), r._d && Bs(1);
		}
		return i;
	};
	return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Zr(e) {
	const {
		type: t,
		vnode: n,
		proxy: r,
		withProxy: o,
		props: s,
		propsOptions: [i],
		slots: l,
		attrs: a,
		emit: c,
		render: u,
		renderCache: f,
		data: h,
		setupState: g,
		ctx: v,
		inheritAttrs: y,
	} = e;
	let P, C;
	const x = mr(e);
	try {
		if (n.shapeFlag & 4) {
			const R = o || r,
				V = R;
			(P = et(u.call(V, R, f, s, g, h, v))), (C = a);
		} else {
			const R = t;
			(P = et(
				R.length > 1 ? R(s, { attrs: a, slots: l, emit: c }) : R(s, null)
			)),
				(C = t.props ? a : Wc(a));
		}
	} catch (R) {
		(En.length = 0), zr(R, e, 1), (P = W(Et));
	}
	let M = P;
	if (C && y !== !1) {
		const R = Object.keys(C),
			{ shapeFlag: V } = M;
		R.length && V & 7 && (i && R.some(No) && (C = Kc(C, i)), (M = ln(M, C)));
	}
	return (
		n.dirs && ((M = ln(M)), (M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs)),
		n.transition && (M.transition = n.transition),
		(P = M),
		mr(x),
		P
	);
}
const Wc = (e) => {
		let t;
		for (const n in e)
			(n === "class" || n === "style" || Pr(n)) && ((t || (t = {}))[n] = e[n]);
		return t;
	},
	Kc = (e, t) => {
		const n = {};
		for (const r in e) (!No(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
		return n;
	};
function Gc(e, t, n) {
	const { props: r, children: o, component: s } = e,
		{ props: i, children: l, patchFlag: a } = t,
		c = s.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && a >= 0) {
		if (a & 1024) return !0;
		if (a & 16) return r ? zs(r, i, c) : !!i;
		if (a & 8) {
			const u = t.dynamicProps;
			for (let f = 0; f < u.length; f++) {
				const h = u[f];
				if (i[h] !== r[h] && !Mr(c, h)) return !0;
			}
		}
	} else
		return (o || l) && (!l || !l.$stable)
			? !0
			: r === i
			? !1
			: r
			? i
				? zs(r, i, c)
				: !0
			: !!i;
	return !1;
}
function zs(e, t, n) {
	const r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let o = 0; o < r.length; o++) {
		const s = r[o];
		if (t[s] !== e[s] && !Mr(n, s)) return !0;
	}
	return !1;
}
function Zc({ vnode: e, parent: t }, n) {
	for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Yo = "components";
function sn(e, t) {
	return Nl(Yo, e, !0, t) || e;
}
const Al = Symbol.for("v-ndc");
function Il(e) {
	return we(e) ? Nl(Yo, e, !1) || e : e || Al;
}
function Nl(e, t, n = !0, r = !1) {
	const o = Se || $e;
	if (o) {
		const s = o.type;
		if (e === Yo) {
			const l = Lu(s, !1);
			if (l && (l === t || l === it(t) || l === Rr(it(t)))) return s;
		}
		const i = Ms(o[e] || s[e], t) || Ms(o.appContext[e], t);
		return !i && r ? s : i;
	}
}
function Ms(e, t) {
	return e && (e[t] || e[it(t)] || e[Rr(it(t))]);
}
const Qc = (e) => e.__isSuspense;
function Jc(e, t) {
	t && t.pendingBranch
		? L(e)
			? t.effects.push(...e)
			: t.effects.push(e)
		: Bc(e);
}
const Xn = {};
function lr(e, t, n) {
	return Hl(e, t, n);
}
function Hl(
	e,
	t,
	{ immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = he
) {
	var l;
	const a = uc() === ((l = $e) == null ? void 0 : l.scope) ? $e : null;
	let c,
		u = !1,
		f = !1;
	if (
		(Ee(e)
			? ((c = () => e.value), (u = gr(e)))
			: tn(e)
			? ((c = () => e), (r = !0))
			: L(e)
			? ((f = !0),
			  (u = e.some((R) => tn(R) || gr(R))),
			  (c = () =>
					e.map((R) => {
						if (Ee(R)) return R.value;
						if (tn(R)) return Nt(R);
						if (U(R)) return kt(R, a, 2);
					})))
			: U(e)
			? t
				? (c = () => kt(e, a, 2))
				: (c = () => {
						if (!(a && a.isUnmounted)) return h && h(), Qe(e, a, 3, [g]);
				  })
			: (c = Ze),
		t && r)
	) {
		const R = c;
		c = () => Nt(R());
	}
	let h,
		g = (R) => {
			h = x.onStop = () => {
				kt(R, a, 4), (h = x.onStop = void 0);
			};
		},
		v;
	if (jn)
		if (
			((g = Ze),
			t ? n && Qe(t, a, 3, [c(), f ? [] : void 0, g]) : c(),
			o === "sync")
		) {
			const R = Vu();
			v = R.__watcherHandles || (R.__watcherHandles = []);
		} else return Ze;
	let y = f ? new Array(e.length).fill(Xn) : Xn;
	const P = () => {
		if (x.active)
			if (t) {
				const R = x.run();
				(r || u || (f ? R.some((V, D) => Bt(V, y[D])) : Bt(R, y))) &&
					(h && h(),
					Qe(t, a, 3, [R, y === Xn ? void 0 : f && y[0] === Xn ? [] : y, g]),
					(y = R));
			} else x.run();
	};
	P.allowRecurse = !!t;
	let C;
	o === "sync"
		? (C = P)
		: o === "post"
		? (C = () => Ae(P, a && a.suspense))
		: ((P.pre = !0), a && (P.id = a.uid), (C = () => Zo(P)));
	const x = new Lo(c, C);
	t
		? n
			? P()
			: (y = x.run())
		: o === "post"
		? Ae(x.run.bind(x), a && a.suspense)
		: x.run();
	const M = () => {
		x.stop(), a && a.scope && Ho(a.scope.effects, x);
	};
	return v && v.push(M), M;
}
function Yc(e, t, n) {
	const r = this.proxy,
		o = we(e) ? (e.includes(".") ? jl(r, e) : () => r[e]) : e.bind(r, r);
	let s;
	U(t) ? (s = t) : ((s = t.handler), (n = t));
	const i = $e;
	an(this);
	const l = Hl(o, s.bind(r), n);
	return i ? an(i) : Lt(), l;
}
function jl(e, t) {
	const n = t.split(".");
	return () => {
		let r = e;
		for (let o = 0; o < n.length && r; o++) r = r[n[o]];
		return r;
	};
}
function Nt(e, t) {
	if (!ge(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
	if ((t.add(e), Ee(e))) Nt(e.value, t);
	else if (L(e)) for (let n = 0; n < e.length; n++) Nt(e[n], t);
	else if (ol(e) || en(e))
		e.forEach((n) => {
			Nt(n, t);
		});
	else if (ll(e)) for (const n in e) Nt(e[n], t);
	return e;
}
function Qr(e, t) {
	const n = Se;
	if (n === null) return e;
	const r = jr(n) || n.proxy,
		o = e.dirs || (e.dirs = []);
	for (let s = 0; s < t.length; s++) {
		let [i, l, a, c = he] = t[s];
		i &&
			(U(i) && (i = { mounted: i, updated: i }),
			i.deep && Nt(l),
			o.push({
				dir: i,
				instance: r,
				value: l,
				oldValue: void 0,
				arg: a,
				modifiers: c,
			}));
	}
	return e;
}
function Rt(e, t, n, r) {
	const o = e.dirs,
		s = t && t.dirs;
	for (let i = 0; i < o.length; i++) {
		const l = o[i];
		s && (l.oldValue = s[i].value);
		let a = l.dir[r];
		a && (dn(), Qe(a, n, 8, [e.el, l, e, t]), pn());
	}
}
/*! #__NO_SIDE_EFFECTS__ */ function ft(e, t) {
	return U(e) ? (() => Te({ name: e.name }, t, { setup: e }))() : e;
}
const $n = (e) => !!e.type.__asyncLoader,
	Fl = (e) => e.type.__isKeepAlive;
function Xc(e, t) {
	Ll(e, "a", t);
}
function eu(e, t) {
	Ll(e, "da", t);
}
function Ll(e, t, n = $e) {
	const r =
		e.__wdc ||
		(e.__wdc = () => {
			let o = n;
			for (; o; ) {
				if (o.isDeactivated) return;
				o = o.parent;
			}
			return e();
		});
	if ((Ir(t, r, n), n)) {
		let o = n.parent;
		for (; o && o.parent; )
			Fl(o.parent.vnode) && tu(r, t, n, o), (o = o.parent);
	}
}
function tu(e, t, n, r) {
	const o = Ir(t, e, r, !0);
	Dl(() => {
		Ho(r[t], o);
	}, n);
}
function Ir(e, t, n = $e, r = !1) {
	if (n) {
		const o = n[e] || (n[e] = []),
			s =
				t.__weh ||
				(t.__weh = (...i) => {
					if (n.isUnmounted) return;
					dn(), an(n);
					const l = Qe(t, n, e, i);
					return Lt(), pn(), l;
				});
		return r ? o.unshift(s) : o.push(s), s;
	}
}
const dt =
		(e) =>
		(t, n = $e) =>
			(!jn || e === "sp") && Ir(e, (...r) => t(...r), n),
	nu = dt("bm"),
	ru = dt("m"),
	ou = dt("bu"),
	su = dt("u"),
	iu = dt("bum"),
	Dl = dt("um"),
	lu = dt("sp"),
	au = dt("rtg"),
	cu = dt("rtc");
function uu(e, t = $e) {
	Ir("ec", e, t);
}
function Ig(e, t, n, r) {
	let o;
	const s = n && n[r];
	if (L(e) || we(e)) {
		o = new Array(e.length);
		for (let i = 0, l = e.length; i < l; i++)
			o[i] = t(e[i], i, void 0, s && s[i]);
	} else if (typeof e == "number") {
		o = new Array(e);
		for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, s && s[i]);
	} else if (ge(e))
		if (e[Symbol.iterator])
			o = Array.from(e, (i, l) => t(i, l, void 0, s && s[l]));
		else {
			const i = Object.keys(e);
			o = new Array(i.length);
			for (let l = 0, a = i.length; l < a; l++) {
				const c = i[l];
				o[l] = t(e[c], c, l, s && s[l]);
			}
		}
	else o = [];
	return n && (n[r] = o), o;
}
function Fe(e, t, n = {}, r, o) {
	if (Se.isCE || (Se.parent && $n(Se.parent) && Se.parent.isCE))
		return t !== "default" && (n.name = t), W("slot", n, r && r());
	let s = e[t];
	s && s._c && (s._d = !1), ne();
	const i = s && Bl(s(n)),
		l = Ue(
			Ie,
			{ key: n.key || (i && i.key) || `_${t}` },
			i || (r ? r() : []),
			i && e._ === 1 ? 64 : -2
		);
	return (
		!o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
		s && s._c && (s._d = !0),
		l
	);
}
function Bl(e) {
	return e.some((t) =>
		yr(t) ? !(t.type === Et || (t.type === Ie && !Bl(t.children))) : !0
	)
		? e
		: null;
}
const vo = (e) => (e ? (ra(e) ? jr(e) || e.proxy : vo(e.parent)) : null),
	Pn = Te(Object.create(null), {
		$: (e) => e,
		$el: (e) => e.vnode.el,
		$data: (e) => e.data,
		$props: (e) => e.props,
		$attrs: (e) => e.attrs,
		$slots: (e) => e.slots,
		$refs: (e) => e.refs,
		$parent: (e) => vo(e.parent),
		$root: (e) => vo(e.root),
		$emit: (e) => e.emit,
		$options: (e) => Xo(e),
		$forceUpdate: (e) => e.f || (e.f = () => Zo(e.update)),
		$nextTick: (e) => e.n || (e.n = Go.bind(e.proxy)),
		$watch: (e) => Yc.bind(e),
	}),
	Jr = (e, t) => e !== he && !e.__isScriptSetup && te(e, t),
	fu = {
		get({ _: e }, t) {
			const {
				ctx: n,
				setupState: r,
				data: o,
				props: s,
				accessCache: i,
				type: l,
				appContext: a,
			} = e;
			let c;
			if (t[0] !== "$") {
				const g = i[t];
				if (g !== void 0)
					switch (g) {
						case 1:
							return r[t];
						case 2:
							return o[t];
						case 4:
							return n[t];
						case 3:
							return s[t];
					}
				else {
					if (Jr(r, t)) return (i[t] = 1), r[t];
					if (o !== he && te(o, t)) return (i[t] = 2), o[t];
					if ((c = e.propsOptions[0]) && te(c, t)) return (i[t] = 3), s[t];
					if (n !== he && te(n, t)) return (i[t] = 4), n[t];
					yo && (i[t] = 0);
				}
			}
			const u = Pn[t];
			let f, h;
			if (u) return t === "$attrs" && He(e, "get", t), u(e);
			if ((f = l.__cssModules) && (f = f[t])) return f;
			if (n !== he && te(n, t)) return (i[t] = 4), n[t];
			if (((h = a.config.globalProperties), te(h, t))) return h[t];
		},
		set({ _: e }, t, n) {
			const { data: r, setupState: o, ctx: s } = e;
			return Jr(o, t)
				? ((o[t] = n), !0)
				: r !== he && te(r, t)
				? ((r[t] = n), !0)
				: te(e.props, t) || (t[0] === "$" && t.slice(1) in e)
				? !1
				: ((s[t] = n), !0);
		},
		has(
			{
				_: {
					data: e,
					setupState: t,
					accessCache: n,
					ctx: r,
					appContext: o,
					propsOptions: s,
				},
			},
			i
		) {
			let l;
			return (
				!!n[i] ||
				(e !== he && te(e, i)) ||
				Jr(t, i) ||
				((l = s[0]) && te(l, i)) ||
				te(r, i) ||
				te(Pn, i) ||
				te(o.config.globalProperties, i)
			);
		},
		defineProperty(e, t, n) {
			return (
				n.get != null
					? (e._.accessCache[t] = 0)
					: te(n, "value") && this.set(e, t, n.value, null),
				Reflect.defineProperty(e, t, n)
			);
		},
	};
function du() {
	return Vl().slots;
}
function pu() {
	return Vl().attrs;
}
function Vl() {
	const e = Nu();
	return e.setupContext || (e.setupContext = sa(e));
}
function As(e) {
	return L(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let yo = !0;
function hu(e) {
	const t = Xo(e),
		n = e.proxy,
		r = e.ctx;
	(yo = !1), t.beforeCreate && Is(t.beforeCreate, e, "bc");
	const {
		data: o,
		computed: s,
		methods: i,
		watch: l,
		provide: a,
		inject: c,
		created: u,
		beforeMount: f,
		mounted: h,
		beforeUpdate: g,
		updated: v,
		activated: y,
		deactivated: P,
		beforeDestroy: C,
		beforeUnmount: x,
		destroyed: M,
		unmounted: R,
		render: V,
		renderTracked: D,
		renderTriggered: ie,
		errorCaptured: de,
		serverPrefetch: be,
		expose: Z,
		inheritAttrs: K,
		components: j,
		directives: q,
		filters: me,
	} = t;
	if ((c && gu(c, r, null), i))
		for (const J in i) {
			const G = i[J];
			U(G) && (r[J] = G.bind(n));
		}
	if (o) {
		const J = o.call(n, n);
		ge(J) && (e.data = Un(J));
	}
	if (((yo = !0), s))
		for (const J in s) {
			const G = s[J],
				Pe = U(G) ? G.bind(n, n) : U(G.get) ? G.get.bind(n, n) : Ze,
				Me = !U(G) && U(G.set) ? G.set.bind(n) : Ze,
				ke = fe({ get: Pe, set: Me });
			Object.defineProperty(r, J, {
				enumerable: !0,
				configurable: !0,
				get: () => ke.value,
				set: (_e) => (ke.value = _e),
			});
		}
	if (l) for (const J in l) ql(l[J], r, n, J);
	if (a) {
		const J = U(a) ? a.call(n) : a;
		Reflect.ownKeys(J).forEach((G) => {
			ar(G, J[G]);
		});
	}
	u && Is(u, e, "c");
	function Q(J, G) {
		L(G) ? G.forEach((Pe) => J(Pe.bind(n))) : G && J(G.bind(n));
	}
	if (
		(Q(nu, f),
		Q(ru, h),
		Q(ou, g),
		Q(su, v),
		Q(Xc, y),
		Q(eu, P),
		Q(uu, de),
		Q(cu, D),
		Q(au, ie),
		Q(iu, x),
		Q(Dl, R),
		Q(lu, be),
		L(Z))
	)
		if (Z.length) {
			const J = e.exposed || (e.exposed = {});
			Z.forEach((G) => {
				Object.defineProperty(J, G, {
					get: () => n[G],
					set: (Pe) => (n[G] = Pe),
				});
			});
		} else e.exposed || (e.exposed = {});
	V && e.render === Ze && (e.render = V),
		K != null && (e.inheritAttrs = K),
		j && (e.components = j),
		q && (e.directives = q);
}
function gu(e, t, n = Ze) {
	L(e) && (e = _o(e));
	for (const r in e) {
		const o = e[r];
		let s;
		ge(o)
			? "default" in o
				? (s = nt(o.from || r, o.default, !0))
				: (s = nt(o.from || r))
			: (s = nt(o)),
			Ee(s)
				? Object.defineProperty(t, r, {
						enumerable: !0,
						configurable: !0,
						get: () => s.value,
						set: (i) => (s.value = i),
				  })
				: (t[r] = s);
	}
}
function Is(e, t, n) {
	Qe(L(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ql(e, t, n, r) {
	const o = r.includes(".") ? jl(n, r) : () => n[r];
	if (we(e)) {
		const s = t[e];
		U(s) && lr(o, s);
	} else if (U(e)) lr(o, e.bind(n));
	else if (ge(e))
		if (L(e)) e.forEach((s) => ql(s, t, n, r));
		else {
			const s = U(e.handler) ? e.handler.bind(n) : t[e.handler];
			U(s) && lr(o, s, e);
		}
}
function Xo(e) {
	const t = e.type,
		{ mixins: n, extends: r } = t,
		{
			mixins: o,
			optionsCache: s,
			config: { optionMergeStrategies: i },
		} = e.appContext,
		l = s.get(t);
	let a;
	return (
		l
			? (a = l)
			: !o.length && !n && !r
			? (a = t)
			: ((a = {}), o.length && o.forEach((c) => br(a, c, i, !0)), br(a, t, i)),
		ge(t) && s.set(t, a),
		a
	);
}
function br(e, t, n, r = !1) {
	const { mixins: o, extends: s } = t;
	s && br(e, s, n, !0), o && o.forEach((i) => br(e, i, n, !0));
	for (const i in t)
		if (!(r && i === "expose")) {
			const l = mu[i] || (n && n[i]);
			e[i] = l ? l(e[i], t[i]) : t[i];
		}
	return e;
}
const mu = {
	data: Ns,
	props: Hs,
	emits: Hs,
	methods: Cn,
	computed: Cn,
	beforeCreate: ze,
	created: ze,
	beforeMount: ze,
	mounted: ze,
	beforeUpdate: ze,
	updated: ze,
	beforeDestroy: ze,
	beforeUnmount: ze,
	destroyed: ze,
	unmounted: ze,
	activated: ze,
	deactivated: ze,
	errorCaptured: ze,
	serverPrefetch: ze,
	components: Cn,
	directives: Cn,
	watch: vu,
	provide: Ns,
	inject: bu,
};
function Ns(e, t) {
	return t
		? e
			? function () {
					return Te(
						U(e) ? e.call(this, this) : e,
						U(t) ? t.call(this, this) : t
					);
			  }
			: t
		: e;
}
function bu(e, t) {
	return Cn(_o(e), _o(t));
}
function _o(e) {
	if (L(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function ze(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Cn(e, t) {
	return e ? Te(Object.create(null), e, t) : t;
}
function Hs(e, t) {
	return e
		? L(e) && L(t)
			? [...new Set([...e, ...t])]
			: Te(Object.create(null), As(e), As(t ?? {}))
		: t;
}
function vu(e, t) {
	if (!e) return t;
	if (!t) return e;
	const n = Te(Object.create(null), e);
	for (const r in t) n[r] = ze(e[r], t[r]);
	return n;
}
function Ul() {
	return {
		app: null,
		config: {
			isNativeTag: Qa,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {},
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: new WeakMap(),
		propsCache: new WeakMap(),
		emitsCache: new WeakMap(),
	};
}
let yu = 0;
function _u(e, t) {
	return function (r, o = null) {
		U(r) || (r = Te({}, r)), o != null && !ge(o) && (o = null);
		const s = Ul(),
			i = new WeakSet();
		let l = !1;
		const a = (s.app = {
			_uid: yu++,
			_component: r,
			_props: o,
			_container: null,
			_context: s,
			_instance: null,
			version: qu,
			get config() {
				return s.config;
			},
			set config(c) {},
			use(c, ...u) {
				return (
					i.has(c) ||
						(c && U(c.install)
							? (i.add(c), c.install(a, ...u))
							: U(c) && (i.add(c), c(a, ...u))),
					a
				);
			},
			mixin(c) {
				return s.mixins.includes(c) || s.mixins.push(c), a;
			},
			component(c, u) {
				return u ? ((s.components[c] = u), a) : s.components[c];
			},
			directive(c, u) {
				return u ? ((s.directives[c] = u), a) : s.directives[c];
			},
			mount(c, u, f) {
				if (!l) {
					const h = W(r, o);
					return (
						(h.appContext = s),
						u && t ? t(h, c) : e(h, c, f),
						(l = !0),
						(a._container = c),
						(c.__vue_app__ = a),
						jr(h.component) || h.component.proxy
					);
				}
			},
			unmount() {
				l && (e(null, a._container), delete a._container.__vue_app__);
			},
			provide(c, u) {
				return (s.provides[c] = u), a;
			},
			runWithContext(c) {
				vr = a;
				try {
					return c();
				} finally {
					vr = null;
				}
			},
		});
		return a;
	};
}
let vr = null;
function ar(e, t) {
	if ($e) {
		let n = $e.provides;
		const r = $e.parent && $e.parent.provides;
		r === n && (n = $e.provides = Object.create(r)), (n[e] = t);
	}
}
function nt(e, t, n = !1) {
	const r = $e || Se;
	if (r || vr) {
		const o = r
			? r.parent == null
				? r.vnode.appContext && r.vnode.appContext.provides
				: r.parent.provides
			: vr._context.provides;
		if (o && e in o) return o[e];
		if (arguments.length > 1) return n && U(t) ? t.call(r && r.proxy) : t;
	}
}
function wu(e, t, n, r = !1) {
	const o = {},
		s = {};
	pr(s, Hr, 1), (e.propsDefaults = Object.create(null)), Wl(e, t, o, s);
	for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
	n ? (e.props = r ? o : xl(o)) : e.type.props ? (e.props = o) : (e.props = s),
		(e.attrs = s);
}
function xu(e, t, n, r) {
	const {
			props: o,
			attrs: s,
			vnode: { patchFlag: i },
		} = e,
		l = re(o),
		[a] = e.propsOptions;
	let c = !1;
	if ((r || i > 0) && !(i & 16)) {
		if (i & 8) {
			const u = e.vnode.dynamicProps;
			for (let f = 0; f < u.length; f++) {
				let h = u[f];
				if (Mr(e.emitsOptions, h)) continue;
				const g = t[h];
				if (a)
					if (te(s, h)) g !== s[h] && ((s[h] = g), (c = !0));
					else {
						const v = it(h);
						o[v] = wo(a, l, v, g, e, !1);
					}
				else g !== s[h] && ((s[h] = g), (c = !0));
			}
		}
	} else {
		Wl(e, t, o, s) && (c = !0);
		let u;
		for (const f in l)
			(!t || (!te(t, f) && ((u = qt(f)) === f || !te(t, u)))) &&
				(a
					? n &&
					  (n[f] !== void 0 || n[u] !== void 0) &&
					  (o[f] = wo(a, l, f, void 0, e, !0))
					: delete o[f]);
		if (s !== l)
			for (const f in s) (!t || !te(t, f)) && (delete s[f], (c = !0));
	}
	c && ut(e, "set", "$attrs");
}
function Wl(e, t, n, r) {
	const [o, s] = e.propsOptions;
	let i = !1,
		l;
	if (t)
		for (let a in t) {
			if (sr(a)) continue;
			const c = t[a];
			let u;
			o && te(o, (u = it(a)))
				? !s || !s.includes(u)
					? (n[u] = c)
					: ((l || (l = {}))[u] = c)
				: Mr(e.emitsOptions, a) ||
				  ((!(a in r) || c !== r[a]) && ((r[a] = c), (i = !0)));
		}
	if (s) {
		const a = re(n),
			c = l || he;
		for (let u = 0; u < s.length; u++) {
			const f = s[u];
			n[f] = wo(o, a, f, c[f], e, !te(c, f));
		}
	}
	return i;
}
function wo(e, t, n, r, o, s) {
	const i = e[n];
	if (i != null) {
		const l = te(i, "default");
		if (l && r === void 0) {
			const a = i.default;
			if (i.type !== Function && !i.skipFactory && U(a)) {
				const { propsDefaults: c } = o;
				n in c ? (r = c[n]) : (an(o), (r = c[n] = a.call(null, t)), Lt());
			} else r = a;
		}
		i[0] &&
			(s && !l ? (r = !1) : i[1] && (r === "" || r === qt(n)) && (r = !0));
	}
	return r;
}
function Kl(e, t, n = !1) {
	const r = t.propsCache,
		o = r.get(e);
	if (o) return o;
	const s = e.props,
		i = {},
		l = [];
	let a = !1;
	if (!U(e)) {
		const u = (f) => {
			a = !0;
			const [h, g] = Kl(f, t, !0);
			Te(i, h), g && l.push(...g);
		};
		!n && t.mixins.length && t.mixins.forEach(u),
			e.extends && u(e.extends),
			e.mixins && e.mixins.forEach(u);
	}
	if (!s && !a) return ge(e) && r.set(e, Xt), Xt;
	if (L(s))
		for (let u = 0; u < s.length; u++) {
			const f = it(s[u]);
			js(f) && (i[f] = he);
		}
	else if (s)
		for (const u in s) {
			const f = it(u);
			if (js(f)) {
				const h = s[u],
					g = (i[f] = L(h) || U(h) ? { type: h } : Te({}, h));
				if (g) {
					const v = Ds(Boolean, g.type),
						y = Ds(String, g.type);
					(g[0] = v > -1),
						(g[1] = y < 0 || v < y),
						(v > -1 || te(g, "default")) && l.push(f);
				}
			}
		}
	const c = [i, l];
	return ge(e) && r.set(e, c), c;
}
function js(e) {
	return e[0] !== "$";
}
function Fs(e) {
	const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
	return t ? t[2] : e === null ? "null" : "";
}
function Ls(e, t) {
	return Fs(e) === Fs(t);
}
function Ds(e, t) {
	return L(t) ? t.findIndex((n) => Ls(n, e)) : U(t) && Ls(t, e) ? 0 : -1;
}
const Gl = (e) => e[0] === "_" || e === "$stable",
	es = (e) => (L(e) ? e.map(et) : [et(e)]),
	ku = (e, t, n) => {
		if (t._n) return t;
		const r = ae((...o) => es(t(...o)), n);
		return (r._c = !1), r;
	},
	Zl = (e, t, n) => {
		const r = e._ctx;
		for (const o in e) {
			if (Gl(o)) continue;
			const s = e[o];
			if (U(s)) t[o] = ku(o, s, r);
			else if (s != null) {
				const i = es(s);
				t[o] = () => i;
			}
		}
	},
	Ql = (e, t) => {
		const n = es(t);
		e.slots.default = () => n;
	},
	Cu = (e, t) => {
		if (e.vnode.shapeFlag & 32) {
			const n = t._;
			n ? ((e.slots = re(t)), pr(t, "_", n)) : Zl(t, (e.slots = {}));
		} else (e.slots = {}), t && Ql(e, t);
		pr(e.slots, Hr, 1);
	},
	$u = (e, t, n) => {
		const { vnode: r, slots: o } = e;
		let s = !0,
			i = he;
		if (r.shapeFlag & 32) {
			const l = t._;
			l
				? n && l === 1
					? (s = !1)
					: (Te(o, t), !n && l === 1 && delete o._)
				: ((s = !t.$stable), Zl(t, o)),
				(i = t);
		} else t && (Ql(e, t), (i = { default: 1 }));
		if (s) for (const l in o) !Gl(l) && i[l] == null && delete o[l];
	};
function xo(e, t, n, r, o = !1) {
	if (L(e)) {
		e.forEach((h, g) => xo(h, t && (L(t) ? t[g] : t), n, r, o));
		return;
	}
	if ($n(r) && !o) return;
	const s = r.shapeFlag & 4 ? jr(r.component) || r.component.proxy : r.el,
		i = o ? null : s,
		{ i: l, r: a } = e,
		c = t && t.r,
		u = l.refs === he ? (l.refs = {}) : l.refs,
		f = l.setupState;
	if (
		(c != null &&
			c !== a &&
			(we(c)
				? ((u[c] = null), te(f, c) && (f[c] = null))
				: Ee(c) && (c.value = null)),
		U(a))
	)
		kt(a, l, 12, [i, u]);
	else {
		const h = we(a),
			g = Ee(a);
		if (h || g) {
			const v = () => {
				if (e.f) {
					const y = h ? (te(f, a) ? f[a] : u[a]) : a.value;
					o
						? L(y) && Ho(y, s)
						: L(y)
						? y.includes(s) || y.push(s)
						: h
						? ((u[a] = [s]), te(f, a) && (f[a] = u[a]))
						: ((a.value = [s]), e.k && (u[e.k] = a.value));
				} else
					h
						? ((u[a] = i), te(f, a) && (f[a] = i))
						: g && ((a.value = i), e.k && (u[e.k] = i));
			};
			i ? ((v.id = -1), Ae(v, n)) : v();
		}
	}
}
const Ae = Jc;
function Pu(e) {
	return Eu(e);
}
function Eu(e, t) {
	const n = fo();
	n.__VUE__ = !0;
	const {
			insert: r,
			remove: o,
			patchProp: s,
			createElement: i,
			createText: l,
			createComment: a,
			setText: c,
			setElementText: u,
			parentNode: f,
			nextSibling: h,
			setScopeId: g = Ze,
			insertStaticContent: v,
		} = e,
		y = (
			d,
			p,
			m,
			b = null,
			w = null,
			k = null,
			O = !1,
			E = null,
			S = !!p.dynamicChildren
		) => {
			if (d === p) return;
			d && !bn(d, p) && ((b = _(d)), _e(d, w, k, !0), (d = null)),
				p.patchFlag === -2 && ((S = !1), (p.dynamicChildren = null));
			const { type: $, ref: N, shapeFlag: A } = p;
			switch ($) {
				case Nr:
					P(d, p, m, b);
					break;
				case Et:
					C(d, p, m, b);
					break;
				case cr:
					d == null && x(p, m, b, O);
					break;
				case Ie:
					j(d, p, m, b, w, k, O, E, S);
					break;
				default:
					A & 1
						? V(d, p, m, b, w, k, O, E, S)
						: A & 6
						? q(d, p, m, b, w, k, O, E, S)
						: (A & 64 || A & 128) && $.process(d, p, m, b, w, k, O, E, S, T);
			}
			N != null && w && xo(N, d && d.ref, k, p || d, !p);
		},
		P = (d, p, m, b) => {
			if (d == null) r((p.el = l(p.children)), m, b);
			else {
				const w = (p.el = d.el);
				p.children !== d.children && c(w, p.children);
			}
		},
		C = (d, p, m, b) => {
			d == null ? r((p.el = a(p.children || "")), m, b) : (p.el = d.el);
		},
		x = (d, p, m, b) => {
			[d.el, d.anchor] = v(d.children, p, m, b, d.el, d.anchor);
		},
		M = ({ el: d, anchor: p }, m, b) => {
			let w;
			for (; d && d !== p; ) (w = h(d)), r(d, m, b), (d = w);
			r(p, m, b);
		},
		R = ({ el: d, anchor: p }) => {
			let m;
			for (; d && d !== p; ) (m = h(d)), o(d), (d = m);
			o(p);
		},
		V = (d, p, m, b, w, k, O, E, S) => {
			(O = O || p.type === "svg"),
				d == null ? D(p, m, b, w, k, O, E, S) : be(d, p, w, k, O, E, S);
		},
		D = (d, p, m, b, w, k, O, E) => {
			let S, $;
			const { type: N, props: A, shapeFlag: H, transition: B, dirs: Y } = d;
			if (
				((S = d.el = i(d.type, k, A && A.is, A)),
				H & 8
					? u(S, d.children)
					: H & 16 &&
					  de(d.children, S, null, b, w, k && N !== "foreignObject", O, E),
				Y && Rt(d, null, b, "created"),
				ie(S, d, d.scopeId, O, b),
				A)
			) {
				for (const le in A)
					le !== "value" &&
						!sr(le) &&
						s(S, le, null, A[le], k, d.children, b, w, Re);
				"value" in A && s(S, "value", null, A.value),
					($ = A.onVnodeBeforeMount) && Xe($, b, d);
			}
			Y && Rt(d, null, b, "beforeMount");
			const ue = Su(w, B);
			ue && B.beforeEnter(S),
				r(S, p, m),
				(($ = A && A.onVnodeMounted) || ue || Y) &&
					Ae(() => {
						$ && Xe($, b, d), ue && B.enter(S), Y && Rt(d, null, b, "mounted");
					}, w);
		},
		ie = (d, p, m, b, w) => {
			if ((m && g(d, m), b)) for (let k = 0; k < b.length; k++) g(d, b[k]);
			if (w) {
				let k = w.subTree;
				if (p === k) {
					const O = w.vnode;
					ie(d, O, O.scopeId, O.slotScopeIds, w.parent);
				}
			}
		},
		de = (d, p, m, b, w, k, O, E, S = 0) => {
			for (let $ = S; $ < d.length; $++) {
				const N = (d[$] = E ? yt(d[$]) : et(d[$]));
				y(null, N, p, m, b, w, k, O, E);
			}
		},
		be = (d, p, m, b, w, k, O) => {
			const E = (p.el = d.el);
			let { patchFlag: S, dynamicChildren: $, dirs: N } = p;
			S |= d.patchFlag & 16;
			const A = d.props || he,
				H = p.props || he;
			let B;
			m && Ot(m, !1),
				(B = H.onVnodeBeforeUpdate) && Xe(B, m, p, d),
				N && Rt(p, d, m, "beforeUpdate"),
				m && Ot(m, !0);
			const Y = w && p.type !== "foreignObject";
			if (
				($
					? Z(d.dynamicChildren, $, E, m, b, Y, k)
					: O || G(d, p, E, null, m, b, Y, k, !1),
				S > 0)
			) {
				if (S & 16) K(E, p, A, H, m, b, w);
				else if (
					(S & 2 && A.class !== H.class && s(E, "class", null, H.class, w),
					S & 4 && s(E, "style", A.style, H.style, w),
					S & 8)
				) {
					const ue = p.dynamicProps;
					for (let le = 0; le < ue.length; le++) {
						const xe = ue[le],
							De = A[xe],
							Zt = H[xe];
						(Zt !== De || xe === "value") &&
							s(E, xe, De, Zt, w, d.children, m, b, Re);
					}
				}
				S & 1 && d.children !== p.children && u(E, p.children);
			} else !O && $ == null && K(E, p, A, H, m, b, w);
			((B = H.onVnodeUpdated) || N) &&
				Ae(() => {
					B && Xe(B, m, p, d), N && Rt(p, d, m, "updated");
				}, b);
		},
		Z = (d, p, m, b, w, k, O) => {
			for (let E = 0; E < p.length; E++) {
				const S = d[E],
					$ = p[E],
					N =
						S.el && (S.type === Ie || !bn(S, $) || S.shapeFlag & 70)
							? f(S.el)
							: m;
				y(S, $, N, null, b, w, k, O, !0);
			}
		},
		K = (d, p, m, b, w, k, O) => {
			if (m !== b) {
				if (m !== he)
					for (const E in m)
						!sr(E) && !(E in b) && s(d, E, m[E], null, O, p.children, w, k, Re);
				for (const E in b) {
					if (sr(E)) continue;
					const S = b[E],
						$ = m[E];
					S !== $ && E !== "value" && s(d, E, $, S, O, p.children, w, k, Re);
				}
				"value" in b && s(d, "value", m.value, b.value);
			}
		},
		j = (d, p, m, b, w, k, O, E, S) => {
			const $ = (p.el = d ? d.el : l("")),
				N = (p.anchor = d ? d.anchor : l(""));
			let { patchFlag: A, dynamicChildren: H, slotScopeIds: B } = p;
			B && (E = E ? E.concat(B) : B),
				d == null
					? (r($, m, b), r(N, m, b), de(p.children, m, N, w, k, O, E, S))
					: A > 0 && A & 64 && H && d.dynamicChildren
					? (Z(d.dynamicChildren, H, m, w, k, O, E),
					  (p.key != null || (w && p === w.subTree)) && Jl(d, p, !0))
					: G(d, p, m, N, w, k, O, E, S);
		},
		q = (d, p, m, b, w, k, O, E, S) => {
			(p.slotScopeIds = E),
				d == null
					? p.shapeFlag & 512
						? w.ctx.activate(p, m, b, O, S)
						: me(p, m, b, w, k, O, S)
					: ve(d, p, S);
		},
		me = (d, p, m, b, w, k, O) => {
			const E = (d.component = Iu(d, b, w));
			if ((Fl(d) && (E.ctx.renderer = T), Hu(E), E.asyncDep)) {
				if ((w && w.registerDep(E, Q), !d.el)) {
					const S = (E.subTree = W(Et));
					C(null, S, p, m);
				}
				return;
			}
			Q(E, d, p, m, w, k, O);
		},
		ve = (d, p, m) => {
			const b = (p.component = d.component);
			if (Gc(d, p, m))
				if (b.asyncDep && !b.asyncResolved) {
					J(b, p, m);
					return;
				} else (b.next = p), Dc(b.update), b.update();
			else (p.el = d.el), (b.vnode = p);
		},
		Q = (d, p, m, b, w, k, O) => {
			const E = () => {
					if (d.isMounted) {
						let { next: N, bu: A, u: H, parent: B, vnode: Y } = d,
							ue = N,
							le;
						Ot(d, !1),
							N ? ((N.el = Y.el), J(d, N, O)) : (N = Y),
							A && ir(A),
							(le = N.props && N.props.onVnodeBeforeUpdate) && Xe(le, B, N, Y),
							Ot(d, !0);
						const xe = Zr(d),
							De = d.subTree;
						(d.subTree = xe),
							y(De, xe, f(De.el), _(De), d, w, k),
							(N.el = xe.el),
							ue === null && Zc(d, xe.el),
							H && Ae(H, w),
							(le = N.props && N.props.onVnodeUpdated) &&
								Ae(() => Xe(le, B, N, Y), w);
					} else {
						let N;
						const { el: A, props: H } = p,
							{ bm: B, m: Y, parent: ue } = d,
							le = $n(p);
						if (
							(Ot(d, !1),
							B && ir(B),
							!le && (N = H && H.onVnodeBeforeMount) && Xe(N, ue, p),
							Ot(d, !0),
							A && oe)
						) {
							const xe = () => {
								(d.subTree = Zr(d)), oe(A, d.subTree, d, w, null);
							};
							le
								? p.type.__asyncLoader().then(() => !d.isUnmounted && xe())
								: xe();
						} else {
							const xe = (d.subTree = Zr(d));
							y(null, xe, m, b, d, w, k), (p.el = xe.el);
						}
						if ((Y && Ae(Y, w), !le && (N = H && H.onVnodeMounted))) {
							const xe = p;
							Ae(() => Xe(N, ue, xe), w);
						}
						(p.shapeFlag & 256 ||
							(ue && $n(ue.vnode) && ue.vnode.shapeFlag & 256)) &&
							d.a &&
							Ae(d.a, w),
							(d.isMounted = !0),
							(p = m = b = null);
					}
				},
				S = (d.effect = new Lo(E, () => Zo($), d.scope)),
				$ = (d.update = () => S.run());
			($.id = d.uid), Ot(d, !0), $();
		},
		J = (d, p, m) => {
			p.component = d;
			const b = d.vnode.props;
			(d.vnode = p),
				(d.next = null),
				xu(d, p.props, b, m),
				$u(d, p.children, m),
				dn(),
				Os(),
				pn();
		},
		G = (d, p, m, b, w, k, O, E, S = !1) => {
			const $ = d && d.children,
				N = d ? d.shapeFlag : 0,
				A = p.children,
				{ patchFlag: H, shapeFlag: B } = p;
			if (H > 0) {
				if (H & 128) {
					Me($, A, m, b, w, k, O, E, S);
					return;
				} else if (H & 256) {
					Pe($, A, m, b, w, k, O, E, S);
					return;
				}
			}
			B & 8
				? (N & 16 && Re($, w, k), A !== $ && u(m, A))
				: N & 16
				? B & 16
					? Me($, A, m, b, w, k, O, E, S)
					: Re($, w, k, !0)
				: (N & 8 && u(m, ""), B & 16 && de(A, m, b, w, k, O, E, S));
		},
		Pe = (d, p, m, b, w, k, O, E, S) => {
			(d = d || Xt), (p = p || Xt);
			const $ = d.length,
				N = p.length,
				A = Math.min($, N);
			let H;
			for (H = 0; H < A; H++) {
				const B = (p[H] = S ? yt(p[H]) : et(p[H]));
				y(d[H], B, m, null, w, k, O, E, S);
			}
			$ > N ? Re(d, w, k, !0, !1, A) : de(p, m, b, w, k, O, E, S, A);
		},
		Me = (d, p, m, b, w, k, O, E, S) => {
			let $ = 0;
			const N = p.length;
			let A = d.length - 1,
				H = N - 1;
			for (; $ <= A && $ <= H; ) {
				const B = d[$],
					Y = (p[$] = S ? yt(p[$]) : et(p[$]));
				if (bn(B, Y)) y(B, Y, m, null, w, k, O, E, S);
				else break;
				$++;
			}
			for (; $ <= A && $ <= H; ) {
				const B = d[A],
					Y = (p[H] = S ? yt(p[H]) : et(p[H]));
				if (bn(B, Y)) y(B, Y, m, null, w, k, O, E, S);
				else break;
				A--, H--;
			}
			if ($ > A) {
				if ($ <= H) {
					const B = H + 1,
						Y = B < N ? p[B].el : b;
					for (; $ <= H; )
						y(null, (p[$] = S ? yt(p[$]) : et(p[$])), m, Y, w, k, O, E, S), $++;
				}
			} else if ($ > H) for (; $ <= A; ) _e(d[$], w, k, !0), $++;
			else {
				const B = $,
					Y = $,
					ue = new Map();
				for ($ = Y; $ <= H; $++) {
					const je = (p[$] = S ? yt(p[$]) : et(p[$]));
					je.key != null && ue.set(je.key, $);
				}
				let le,
					xe = 0;
				const De = H - Y + 1;
				let Zt = !1,
					_s = 0;
				const mn = new Array(De);
				for ($ = 0; $ < De; $++) mn[$] = 0;
				for ($ = B; $ <= A; $++) {
					const je = d[$];
					if (xe >= De) {
						_e(je, w, k, !0);
						continue;
					}
					let Ye;
					if (je.key != null) Ye = ue.get(je.key);
					else
						for (le = Y; le <= H; le++)
							if (mn[le - Y] === 0 && bn(je, p[le])) {
								Ye = le;
								break;
							}
					Ye === void 0
						? _e(je, w, k, !0)
						: ((mn[Ye - Y] = $ + 1),
						  Ye >= _s ? (_s = Ye) : (Zt = !0),
						  y(je, p[Ye], m, null, w, k, O, E, S),
						  xe++);
				}
				const ws = Zt ? Tu(mn) : Xt;
				for (le = ws.length - 1, $ = De - 1; $ >= 0; $--) {
					const je = Y + $,
						Ye = p[je],
						xs = je + 1 < N ? p[je + 1].el : b;
					mn[$] === 0
						? y(null, Ye, m, xs, w, k, O, E, S)
						: Zt && (le < 0 || $ !== ws[le] ? ke(Ye, m, xs, 2) : le--);
				}
			}
		},
		ke = (d, p, m, b, w = null) => {
			const { el: k, type: O, transition: E, children: S, shapeFlag: $ } = d;
			if ($ & 6) {
				ke(d.component.subTree, p, m, b);
				return;
			}
			if ($ & 128) {
				d.suspense.move(p, m, b);
				return;
			}
			if ($ & 64) {
				O.move(d, p, m, T);
				return;
			}
			if (O === Ie) {
				r(k, p, m);
				for (let A = 0; A < S.length; A++) ke(S[A], p, m, b);
				r(d.anchor, p, m);
				return;
			}
			if (O === cr) {
				M(d, p, m);
				return;
			}
			if (b !== 2 && $ & 1 && E)
				if (b === 0) E.beforeEnter(k), r(k, p, m), Ae(() => E.enter(k), w);
				else {
					const { leave: A, delayLeave: H, afterLeave: B } = E,
						Y = () => r(k, p, m),
						ue = () => {
							A(k, () => {
								Y(), B && B();
							});
						};
					H ? H(k, Y, ue) : ue();
				}
			else r(k, p, m);
		},
		_e = (d, p, m, b = !1, w = !1) => {
			const {
				type: k,
				props: O,
				ref: E,
				children: S,
				dynamicChildren: $,
				shapeFlag: N,
				patchFlag: A,
				dirs: H,
			} = d;
			if ((E != null && xo(E, null, m, d, !0), N & 256)) {
				p.ctx.deactivate(d);
				return;
			}
			const B = N & 1 && H,
				Y = !$n(d);
			let ue;
			if ((Y && (ue = O && O.onVnodeBeforeUnmount) && Xe(ue, p, d), N & 6))
				Kn(d.component, m, b);
			else {
				if (N & 128) {
					d.suspense.unmount(m, b);
					return;
				}
				B && Rt(d, null, p, "beforeUnmount"),
					N & 64
						? d.type.remove(d, p, m, w, T, b)
						: $ && (k !== Ie || (A > 0 && A & 64))
						? Re($, p, m, !1, !0)
						: ((k === Ie && A & 384) || (!w && N & 16)) && Re(S, p, m),
					b && pt(d);
			}
			((Y && (ue = O && O.onVnodeUnmounted)) || B) &&
				Ae(() => {
					ue && Xe(ue, p, d), B && Rt(d, null, p, "unmounted");
				}, m);
		},
		pt = (d) => {
			const { type: p, el: m, anchor: b, transition: w } = d;
			if (p === Ie) {
				Gt(m, b);
				return;
			}
			if (p === cr) {
				R(d);
				return;
			}
			const k = () => {
				o(m), w && !w.persisted && w.afterLeave && w.afterLeave();
			};
			if (d.shapeFlag & 1 && w && !w.persisted) {
				const { leave: O, delayLeave: E } = w,
					S = () => O(m, k);
				E ? E(d.el, k, S) : S();
			} else k();
		},
		Gt = (d, p) => {
			let m;
			for (; d !== p; ) (m = h(d)), o(d), (d = m);
			o(p);
		},
		Kn = (d, p, m) => {
			const { bum: b, scope: w, update: k, subTree: O, um: E } = d;
			b && ir(b),
				w.stop(),
				k && ((k.active = !1), _e(O, d, p, m)),
				E && Ae(E, p),
				Ae(() => {
					d.isUnmounted = !0;
				}, p),
				p &&
					p.pendingBranch &&
					!p.isUnmounted &&
					d.asyncDep &&
					!d.asyncResolved &&
					d.suspenseId === p.pendingId &&
					(p.deps--, p.deps === 0 && p.resolve());
		},
		Re = (d, p, m, b = !1, w = !1, k = 0) => {
			for (let O = k; O < d.length; O++) _e(d[O], p, m, b, w);
		},
		_ = (d) =>
			d.shapeFlag & 6
				? _(d.component.subTree)
				: d.shapeFlag & 128
				? d.suspense.next()
				: h(d.anchor || d.el),
		z = (d, p, m) => {
			d == null
				? p._vnode && _e(p._vnode, null, null, !0)
				: y(p._vnode || null, d, p, null, null, null, m),
				Os(),
				Ol(),
				(p._vnode = d);
		},
		T = {
			p: y,
			um: _e,
			m: ke,
			r: pt,
			mt: me,
			mc: de,
			pc: G,
			pbc: Z,
			n: _,
			o: e,
		};
	let I, oe;
	return t && ([I, oe] = t(T)), { render: z, hydrate: I, createApp: _u(z, I) };
}
function Ot({ effect: e, update: t }, n) {
	e.allowRecurse = t.allowRecurse = n;
}
function Su(e, t) {
	return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Jl(e, t, n = !1) {
	const r = e.children,
		o = t.children;
	if (L(r) && L(o))
		for (let s = 0; s < r.length; s++) {
			const i = r[s];
			let l = o[s];
			l.shapeFlag & 1 &&
				!l.dynamicChildren &&
				((l.patchFlag <= 0 || l.patchFlag === 32) &&
					((l = o[s] = yt(o[s])), (l.el = i.el)),
				n || Jl(i, l)),
				l.type === Nr && (l.el = i.el);
		}
}
function Tu(e) {
	const t = e.slice(),
		n = [0];
	let r, o, s, i, l;
	const a = e.length;
	for (r = 0; r < a; r++) {
		const c = e[r];
		if (c !== 0) {
			if (((o = n[n.length - 1]), e[o] < c)) {
				(t[r] = o), n.push(r);
				continue;
			}
			for (s = 0, i = n.length - 1; s < i; )
				(l = (s + i) >> 1), e[n[l]] < c ? (s = l + 1) : (i = l);
			c < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), (n[s] = r));
		}
	}
	for (s = n.length, i = n[s - 1]; s-- > 0; ) (n[s] = i), (i = t[i]);
	return n;
}
const Ru = (e) => e.__isTeleport,
	Ie = Symbol.for("v-fgt"),
	Nr = Symbol.for("v-txt"),
	Et = Symbol.for("v-cmt"),
	cr = Symbol.for("v-stc"),
	En = [];
let Ge = null;
function ne(e = !1) {
	En.push((Ge = e ? null : []));
}
function Ou() {
	En.pop(), (Ge = En[En.length - 1] || null);
}
let Hn = 1;
function Bs(e) {
	Hn += e;
}
function Yl(e) {
	return (
		(e.dynamicChildren = Hn > 0 ? Ge || Xt : null),
		Ou(),
		Hn > 0 && Ge && Ge.push(e),
		e
	);
}
function ye(e, t, n, r, o, s) {
	return Yl(F(e, t, n, r, o, s, !0));
}
function Ue(e, t, n, r, o) {
	return Yl(W(e, t, n, r, o, !0));
}
function yr(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function bn(e, t) {
	return e.type === t.type && e.key === t.key;
}
const Hr = "__vInternal",
	Xl = ({ key: e }) => e ?? null,
	ur = ({ ref: e, ref_key: t, ref_for: n }) => (
		typeof e == "number" && (e = "" + e),
		e != null
			? we(e) || Ee(e) || U(e)
				? { i: Se, r: e, k: t, f: !!n }
				: e
			: null
	);
function F(
	e,
	t = null,
	n = null,
	r = 0,
	o = null,
	s = e === Ie ? 0 : 1,
	i = !1,
	l = !1
) {
	const a = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Xl(t),
		ref: t && ur(t),
		scopeId: Ar,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: s,
		patchFlag: r,
		dynamicProps: o,
		dynamicChildren: null,
		appContext: null,
		ctx: Se,
	};
	return (
		l
			? (ts(a, n), s & 128 && e.normalize(a))
			: n && (a.shapeFlag |= we(n) ? 8 : 16),
		Hn > 0 &&
			!i &&
			Ge &&
			(a.patchFlag > 0 || s & 6) &&
			a.patchFlag !== 32 &&
			Ge.push(a),
		a
	);
}
const W = zu;
function zu(e, t = null, n = null, r = 0, o = null, s = !1) {
	if (((!e || e === Al) && (e = Et), yr(e))) {
		const l = ln(e, t, !0);
		return (
			n && ts(l, n),
			Hn > 0 &&
				!s &&
				Ge &&
				(l.shapeFlag & 6 ? (Ge[Ge.indexOf(e)] = l) : Ge.push(l)),
			(l.patchFlag |= -2),
			l
		);
	}
	if ((Du(e) && (e = e.__vccOpts), t)) {
		t = ea(t);
		let { class: l, style: a } = t;
		l && !we(l) && (t.class = Ne(l)),
			ge(a) && (Cl(a) && !L(a) && (a = Te({}, a)), (t.style = jt(a)));
	}
	const i = we(e) ? 1 : Qc(e) ? 128 : Ru(e) ? 64 : ge(e) ? 4 : U(e) ? 2 : 0;
	return F(e, t, n, r, o, i, s, !0);
}
function ea(e) {
	return e ? (Cl(e) || Hr in e ? Te({}, e) : e) : null;
}
function ln(e, t, n = !1) {
	const { props: r, ref: o, patchFlag: s, children: i } = e,
		l = t ? na(r || {}, t) : r;
	return {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Xl(l),
		ref:
			t && t.ref ? (n && o ? (L(o) ? o.concat(ur(t)) : [o, ur(t)]) : ur(t)) : o,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: i,
		target: e.target,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== Ie ? (s === -1 ? 16 : s | 16) : s,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: e.transition,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && ln(e.ssContent),
		ssFallback: e.ssFallback && ln(e.ssFallback),
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
	};
}
function Ce(e = " ", t = 0) {
	return W(Nr, null, e, t);
}
function ta(e, t) {
	const n = W(cr, null, e);
	return (n.staticCount = t), n;
}
function wt(e = "", t = !1) {
	return t ? (ne(), Ue(Et, null, e)) : W(Et, null, e);
}
function et(e) {
	return e == null || typeof e == "boolean"
		? W(Et)
		: L(e)
		? W(Ie, null, e.slice())
		: typeof e == "object"
		? yt(e)
		: W(Nr, null, String(e));
}
function yt(e) {
	return (e.el === null && e.patchFlag !== -1) || e.memo ? e : ln(e);
}
function ts(e, t) {
	let n = 0;
	const { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (L(t)) n = 16;
	else if (typeof t == "object")
		if (r & 65) {
			const o = t.default;
			o && (o._c && (o._d = !1), ts(e, o()), o._c && (o._d = !0));
			return;
		} else {
			n = 32;
			const o = t._;
			!o && !(Hr in t)
				? (t._ctx = Se)
				: o === 3 &&
				  Se &&
				  (Se.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
		}
	else
		U(t)
			? ((t = { default: t, _ctx: Se }), (n = 32))
			: ((t = String(t)), r & 64 ? ((n = 16), (t = [Ce(t)])) : (n = 8));
	(e.children = t), (e.shapeFlag |= n);
}
function na(...e) {
	const t = {};
	for (let n = 0; n < e.length; n++) {
		const r = e[n];
		for (const o in r)
			if (o === "class")
				t.class !== r.class && (t.class = Ne([t.class, r.class]));
			else if (o === "style") t.style = jt([t.style, r.style]);
			else if (Pr(o)) {
				const s = t[o],
					i = r[o];
				i &&
					s !== i &&
					!(L(s) && s.includes(i)) &&
					(t[o] = s ? [].concat(s, i) : i);
			} else o !== "" && (t[o] = r[o]);
	}
	return t;
}
function Xe(e, t, n, r = null) {
	Qe(e, t, 7, [n, r]);
}
const Mu = Ul();
let Au = 0;
function Iu(e, t, n) {
	const r = e.type,
		o = (t ? t.appContext : e.appContext) || Mu,
		s = {
			uid: Au++,
			vnode: e,
			type: r,
			parent: t,
			appContext: o,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			scope: new fl(!0),
			render: null,
			proxy: null,
			exposed: null,
			exposeProxy: null,
			withProxy: null,
			provides: t ? t.provides : Object.create(o.provides),
			accessCache: null,
			renderCache: [],
			components: null,
			directives: null,
			propsOptions: Kl(r, o),
			emitsOptions: Ml(r, o),
			emit: null,
			emitted: null,
			propsDefaults: he,
			inheritAttrs: r.inheritAttrs,
			ctx: he,
			data: he,
			props: he,
			attrs: he,
			slots: he,
			refs: he,
			setupState: he,
			setupContext: null,
			attrsProxy: null,
			slotsProxy: null,
			suspense: n,
			suspenseId: n ? n.pendingId : 0,
			asyncDep: null,
			asyncResolved: !1,
			isMounted: !1,
			isUnmounted: !1,
			isDeactivated: !1,
			bc: null,
			c: null,
			bm: null,
			m: null,
			bu: null,
			u: null,
			um: null,
			bum: null,
			da: null,
			a: null,
			rtg: null,
			rtc: null,
			ec: null,
			sp: null,
		};
	return (
		(s.ctx = { _: s }),
		(s.root = t ? t.root : s),
		(s.emit = qc.bind(null, s)),
		e.ce && e.ce(s),
		s
	);
}
let $e = null;
const Nu = () => $e || Se;
let ns,
	Qt,
	Vs = "__VUE_INSTANCE_SETTERS__";
(Qt = fo()[Vs]) || (Qt = fo()[Vs] = []),
	Qt.push((e) => ($e = e)),
	(ns = (e) => {
		Qt.length > 1 ? Qt.forEach((t) => t(e)) : Qt[0](e);
	});
const an = (e) => {
		ns(e), e.scope.on();
	},
	Lt = () => {
		$e && $e.scope.off(), ns(null);
	};
function ra(e) {
	return e.vnode.shapeFlag & 4;
}
let jn = !1;
function Hu(e, t = !1) {
	jn = t;
	const { props: n, children: r } = e.vnode,
		o = ra(e);
	wu(e, n, o, t), Cu(e, r);
	const s = o ? ju(e, t) : void 0;
	return (jn = !1), s;
}
function ju(e, t) {
	const n = e.type;
	(e.accessCache = Object.create(null)), (e.proxy = qo(new Proxy(e.ctx, fu)));
	const { setup: r } = n;
	if (r) {
		const o = (e.setupContext = r.length > 1 ? sa(e) : null);
		an(e), dn();
		const s = kt(r, e, 0, [e.props, o]);
		if ((pn(), Lt(), sl(s))) {
			if ((s.then(Lt, Lt), t))
				return s
					.then((i) => {
						qs(e, i, t);
					})
					.catch((i) => {
						zr(i, e, 0);
					});
			e.asyncDep = s;
		} else qs(e, s, t);
	} else oa(e, t);
}
function qs(e, t, n) {
	U(t)
		? e.type.__ssrInlineRender
			? (e.ssrRender = t)
			: (e.render = t)
		: ge(t) && (e.setupState = Sl(t)),
		oa(e, n);
}
let Us;
function oa(e, t, n) {
	const r = e.type;
	if (!e.render) {
		if (!t && Us && !r.render) {
			const o = r.template || Xo(e).template;
			if (o) {
				const { isCustomElement: s, compilerOptions: i } = e.appContext.config,
					{ delimiters: l, compilerOptions: a } = r,
					c = Te(Te({ isCustomElement: s, delimiters: l }, i), a);
				r.render = Us(o, c);
			}
		}
		e.render = r.render || Ze;
	}
	{
		an(e), dn();
		try {
			hu(e);
		} finally {
			pn(), Lt();
		}
	}
}
function Fu(e) {
	return (
		e.attrsProxy ||
		(e.attrsProxy = new Proxy(e.attrs, {
			get(t, n) {
				return He(e, "get", "$attrs"), t[n];
			},
		}))
	);
}
function sa(e) {
	const t = (n) => {
		e.exposed = n || {};
	};
	return {
		get attrs() {
			return Fu(e);
		},
		slots: e.slots,
		emit: e.emit,
		expose: t,
	};
}
function jr(e) {
	if (e.exposed)
		return (
			e.exposeProxy ||
			(e.exposeProxy = new Proxy(Sl(qo(e.exposed)), {
				get(t, n) {
					if (n in t) return t[n];
					if (n in Pn) return Pn[n](e);
				},
				has(t, n) {
					return n in t || n in Pn;
				},
			}))
		);
}
function Lu(e, t = !0) {
	return U(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Du(e) {
	return U(e) && "__vccOpts" in e;
}
const fe = (e, t) => jc(e, t, jn);
function ia(e, t, n) {
	const r = arguments.length;
	return r === 2
		? ge(t) && !L(t)
			? yr(t)
				? W(e, null, [t])
				: W(e, t)
			: W(e, null, t)
		: (r > 3
				? (n = Array.prototype.slice.call(arguments, 2))
				: r === 3 && yr(n) && (n = [n]),
		  W(e, t, n));
}
const Bu = Symbol.for("v-scx"),
	Vu = () => nt(Bu),
	qu = "3.3.9",
	Uu = "http://www.w3.org/2000/svg",
	It = typeof document < "u" ? document : null,
	Ws = It && It.createElement("template"),
	Wu = {
		insert: (e, t, n) => {
			t.insertBefore(e, n || null);
		},
		remove: (e) => {
			const t = e.parentNode;
			t && t.removeChild(e);
		},
		createElement: (e, t, n, r) => {
			const o = t
				? It.createElementNS(Uu, e)
				: It.createElement(e, n ? { is: n } : void 0);
			return (
				e === "select" &&
					r &&
					r.multiple != null &&
					o.setAttribute("multiple", r.multiple),
				o
			);
		},
		createText: (e) => It.createTextNode(e),
		createComment: (e) => It.createComment(e),
		setText: (e, t) => {
			e.nodeValue = t;
		},
		setElementText: (e, t) => {
			e.textContent = t;
		},
		parentNode: (e) => e.parentNode,
		nextSibling: (e) => e.nextSibling,
		querySelector: (e) => It.querySelector(e),
		setScopeId(e, t) {
			e.setAttribute(t, "");
		},
		insertStaticContent(e, t, n, r, o, s) {
			const i = n ? n.previousSibling : t.lastChild;
			if (o && (o === s || o.nextSibling))
				for (
					;
					t.insertBefore(o.cloneNode(!0), n),
						!(o === s || !(o = o.nextSibling));

				);
			else {
				Ws.innerHTML = r ? `<svg>${e}</svg>` : e;
				const l = Ws.content;
				if (r) {
					const a = l.firstChild;
					for (; a.firstChild; ) l.appendChild(a.firstChild);
					l.removeChild(a);
				}
				t.insertBefore(l, n);
			}
			return [
				i ? i.nextSibling : t.firstChild,
				n ? n.previousSibling : t.lastChild,
			];
		},
	},
	Ku = Symbol("_vtc");
function Gu(e, t, n) {
	const r = e[Ku];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")),
		t == null
			? e.removeAttribute("class")
			: n
			? e.setAttribute("class", t)
			: (e.className = t);
}
const Zu = Symbol("_vod");
function Qu(e, t, n) {
	const r = e.style,
		o = we(n);
	if (n && !o) {
		if (t && !we(t)) for (const s in t) n[s] == null && ko(r, s, "");
		for (const s in n) ko(r, s, n[s]);
	} else {
		const s = r.display;
		o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"),
			Zu in e && (r.display = s);
	}
}
const Ks = /\s*!important$/;
function ko(e, t, n) {
	if (L(n)) n.forEach((r) => ko(e, t, r));
	else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
	else {
		const r = Ju(e, t);
		Ks.test(n)
			? e.setProperty(qt(r), n.replace(Ks, ""), "important")
			: (e[r] = n);
	}
}
const Gs = ["Webkit", "Moz", "ms"],
	Yr = {};
function Ju(e, t) {
	const n = Yr[t];
	if (n) return n;
	let r = it(t);
	if (r !== "filter" && r in e) return (Yr[t] = r);
	r = Rr(r);
	for (let o = 0; o < Gs.length; o++) {
		const s = Gs[o] + r;
		if (s in e) return (Yr[t] = s);
	}
	return t;
}
const Zs = "http://www.w3.org/1999/xlink";
function Yu(e, t, n, r, o) {
	if (r && t.startsWith("xlink:"))
		n == null
			? e.removeAttributeNS(Zs, t.slice(6, t.length))
			: e.setAttributeNS(Zs, t, n);
	else {
		const s = lc(t);
		n == null || (s && !cl(n))
			? e.removeAttribute(t)
			: e.setAttribute(t, s ? "" : n);
	}
}
function Xu(e, t, n, r, o, s, i) {
	if (t === "innerHTML" || t === "textContent") {
		r && i(r, o, s), (e[t] = n ?? "");
		return;
	}
	const l = e.tagName;
	if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
		e._value = n;
		const c = l === "OPTION" ? e.getAttribute("value") : e.value,
			u = n ?? "";
		c !== u && (e.value = u), n == null && e.removeAttribute(t);
		return;
	}
	let a = !1;
	if (n === "" || n == null) {
		const c = typeof e[t];
		c === "boolean"
			? (n = cl(n))
			: n == null && c === "string"
			? ((n = ""), (a = !0))
			: c === "number" && ((n = 0), (a = !0));
	}
	try {
		e[t] = n;
	} catch {}
	a && e.removeAttribute(t);
}
function Jt(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function ef(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
const Qs = Symbol("_vei");
function tf(e, t, n, r, o = null) {
	const s = e[Qs] || (e[Qs] = {}),
		i = s[t];
	if (r && i) i.value = r;
	else {
		const [l, a] = nf(t);
		if (r) {
			const c = (s[t] = sf(r, o));
			Jt(e, l, c, a);
		} else i && (ef(e, l, i, a), (s[t] = void 0));
	}
}
const Js = /(?:Once|Passive|Capture)$/;
function nf(e) {
	let t;
	if (Js.test(e)) {
		t = {};
		let r;
		for (; (r = e.match(Js)); )
			(e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
	}
	return [e[2] === ":" ? e.slice(3) : qt(e.slice(2)), t];
}
let Xr = 0;
const rf = Promise.resolve(),
	of = () => Xr || (rf.then(() => (Xr = 0)), (Xr = Date.now()));
function sf(e, t) {
	const n = (r) => {
		if (!r._vts) r._vts = Date.now();
		else if (r._vts <= n.attached) return;
		Qe(lf(r, n.value), t, 5, [r]);
	};
	return (n.value = e), (n.attached = of()), n;
}
function lf(e, t) {
	if (L(t)) {
		const n = e.stopImmediatePropagation;
		return (
			(e.stopImmediatePropagation = () => {
				n.call(e), (e._stopped = !0);
			}),
			t.map((r) => (o) => !o._stopped && r && r(o))
		);
	} else return t;
}
const Ys = /^on[a-z]/,
	af = (e, t, n, r, o = !1, s, i, l, a) => {
		t === "class"
			? Gu(e, r, o)
			: t === "style"
			? Qu(e, n, r)
			: Pr(t)
			? No(t) || tf(e, t, n, r, i)
			: (
					t[0] === "."
						? ((t = t.slice(1)), !0)
						: t[0] === "^"
						? ((t = t.slice(1)), !1)
						: cf(e, t, r, o)
			  )
			? Xu(e, t, r, s, i, l, a)
			: (t === "true-value"
					? (e._trueValue = r)
					: t === "false-value" && (e._falseValue = r),
			  Yu(e, t, r, o));
	};
function cf(e, t, n, r) {
	return r
		? !!(
				t === "innerHTML" ||
				t === "textContent" ||
				(t in e && Ys.test(t) && U(n))
		  )
		: t === "spellcheck" ||
		  t === "draggable" ||
		  t === "translate" ||
		  t === "form" ||
		  (t === "list" && e.tagName === "INPUT") ||
		  (t === "type" && e.tagName === "TEXTAREA") ||
		  (Ys.test(t) && we(n))
		? !1
		: t in e;
}
const Xs = (e) => {
	const t = e.props["onUpdate:modelValue"] || !1;
	return L(t) ? (n) => ir(t, n) : t;
};
function uf(e) {
	e.target.composing = !0;
}
function ei(e) {
	const t = e.target;
	t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const eo = Symbol("_assign"),
	to = {
		created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
			e[eo] = Xs(o);
			const s = r || (o.props && o.props.type === "number");
			Jt(e, t ? "change" : "input", (i) => {
				if (i.target.composing) return;
				let l = e.value;
				n && (l = l.trim()), s && (l = uo(l)), e[eo](l);
			}),
				n &&
					Jt(e, "change", () => {
						e.value = e.value.trim();
					}),
				t ||
					(Jt(e, "compositionstart", uf),
					Jt(e, "compositionend", ei),
					Jt(e, "change", ei));
		},
		mounted(e, { value: t }) {
			e.value = t ?? "";
		},
		beforeUpdate(
			e,
			{ value: t, modifiers: { lazy: n, trim: r, number: o } },
			s
		) {
			if (((e[eo] = Xs(s)), e.composing)) return;
			const i = o || e.type === "number" ? uo(e.value) : e.value,
				l = t ?? "";
			i !== l &&
				((document.activeElement === e &&
					e.type !== "range" &&
					(n || (r && e.value.trim() === l))) ||
					(e.value = l));
		},
	},
	ff = {
		esc: "escape",
		space: " ",
		up: "arrow-up",
		left: "arrow-left",
		right: "arrow-right",
		down: "arrow-down",
		delete: "backspace",
	},
	df = (e, t) => (n) => {
		if (!("key" in n)) return;
		const r = qt(n.key);
		if (t.some((o) => o === r || ff[o] === r)) return e(n);
	},
	pf = Te({ patchProp: af }, Wu);
let ti;
function hf() {
	return ti || (ti = Pu(pf));
}
const gf = (...e) => {
	const t = hf().createApp(...e),
		{ mount: n } = t;
	return (
		(t.mount = (r) => {
			const o = mf(r);
			if (!o) return;
			const s = t._component;
			!U(s) && !s.render && !s.template && (s.template = o.innerHTML),
				(o.innerHTML = "");
			const i = n(o, !1, o instanceof SVGElement);
			return (
				o instanceof Element &&
					(o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
				i
			);
		}),
		t
	);
};
function mf(e) {
	return we(e) ? document.querySelector(e) : e;
}
var bf = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const vf = Symbol();
var ni;
(function (e) {
	(e.direct = "direct"),
		(e.patchObject = "patch object"),
		(e.patchFunction = "patch function");
})(ni || (ni = {}));
function yf() {
	const e = ac(!0),
		t = e.run(() => Wo({}));
	let n = [],
		r = [];
	const o = qo({
		install(s) {
			(o._a = s),
				s.provide(vf, o),
				(s.config.globalProperties.$pinia = o),
				r.forEach((i) => n.push(i)),
				(r = []);
		},
		use(s) {
			return !this._a && !bf ? r.push(s) : n.push(s), this;
		},
		_p: n,
		_a: null,
		_e: e,
		_s: new Map(),
		state: t,
	});
	return o;
}
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Yt = typeof window < "u";
function _f(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const se = Object.assign;
function no(e, t) {
	const n = {};
	for (const r in t) {
		const o = t[r];
		n[r] = Je(o) ? o.map(e) : e(o);
	}
	return n;
}
const Sn = () => {},
	Je = Array.isArray,
	wf = /\/$/,
	xf = (e) => e.replace(wf, "");
function ro(e, t, n = "/") {
	let r,
		o = {},
		s = "",
		i = "";
	const l = t.indexOf("#");
	let a = t.indexOf("?");
	return (
		l < a && l >= 0 && (a = -1),
		a > -1 &&
			((r = t.slice(0, a)),
			(s = t.slice(a + 1, l > -1 ? l : t.length)),
			(o = e(s))),
		l > -1 && ((r = r || t.slice(0, l)), (i = t.slice(l, t.length))),
		(r = Pf(r ?? t, n)),
		{ fullPath: r + (s && "?") + s + i, path: r, query: o, hash: i }
	);
}
function kf(e, t) {
	const n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function ri(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase())
		? e
		: e.slice(t.length) || "/";
}
function Cf(e, t, n) {
	const r = t.matched.length - 1,
		o = n.matched.length - 1;
	return (
		r > -1 &&
		r === o &&
		cn(t.matched[r], n.matched[o]) &&
		la(t.params, n.params) &&
		e(t.query) === e(n.query) &&
		t.hash === n.hash
	);
}
function cn(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function la(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (const n in e) if (!$f(e[n], t[n])) return !1;
	return !0;
}
function $f(e, t) {
	return Je(e) ? oi(e, t) : Je(t) ? oi(t, e) : e === t;
}
function oi(e, t) {
	return Je(t)
		? e.length === t.length && e.every((n, r) => n === t[r])
		: e.length === 1 && e[0] === t;
}
function Pf(e, t) {
	if (e.startsWith("/")) return e;
	if (!e) return t;
	const n = t.split("/"),
		r = e.split("/"),
		o = r[r.length - 1];
	(o === ".." || o === ".") && r.push("");
	let s = n.length - 1,
		i,
		l;
	for (i = 0; i < r.length; i++)
		if (((l = r[i]), l !== "."))
			if (l === "..") s > 1 && s--;
			else break;
	return (
		n.slice(0, s).join("/") +
		"/" +
		r.slice(i - (i === r.length ? 1 : 0)).join("/")
	);
}
var Fn;
(function (e) {
	(e.pop = "pop"), (e.push = "push");
})(Fn || (Fn = {}));
var Tn;
(function (e) {
	(e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Tn || (Tn = {}));
function Ef(e) {
	if (!e)
		if (Yt) {
			const t = document.querySelector("base");
			(e = (t && t.getAttribute("href")) || "/"),
				(e = e.replace(/^\w+:\/\/[^\/]+/, ""));
		} else e = "/";
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), xf(e);
}
const Sf = /^[^#]+#/;
function Tf(e, t) {
	return e.replace(Sf, "#") + t;
}
function Rf(e, t) {
	const n = document.documentElement.getBoundingClientRect(),
		r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0),
	};
}
const Fr = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Of(e) {
	let t;
	if ("el" in e) {
		const n = e.el,
			r = typeof n == "string" && n.startsWith("#"),
			o =
				typeof n == "string"
					? r
						? document.getElementById(n.slice(1))
						: document.querySelector(n)
					: n;
		if (!o) return;
		t = Rf(o, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style
		? window.scrollTo(t)
		: window.scrollTo(
				t.left != null ? t.left : window.pageXOffset,
				t.top != null ? t.top : window.pageYOffset
		  );
}
function si(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
const Co = new Map();
function zf(e, t) {
	Co.set(e, t);
}
function Mf(e) {
	const t = Co.get(e);
	return Co.delete(e), t;
}
let Af = () => location.protocol + "//" + location.host;
function aa(e, t) {
	const { pathname: n, search: r, hash: o } = t,
		s = e.indexOf("#");
	if (s > -1) {
		let l = o.includes(e.slice(s)) ? e.slice(s).length : 1,
			a = o.slice(l);
		return a[0] !== "/" && (a = "/" + a), ri(a, "");
	}
	return ri(n, e) + r + o;
}
function If(e, t, n, r) {
	let o = [],
		s = [],
		i = null;
	const l = ({ state: h }) => {
		const g = aa(e, location),
			v = n.value,
			y = t.value;
		let P = 0;
		if (h) {
			if (((n.value = g), (t.value = h), i && i === v)) {
				i = null;
				return;
			}
			P = y ? h.position - y.position : 0;
		} else r(g);
		o.forEach((C) => {
			C(n.value, v, {
				delta: P,
				type: Fn.pop,
				direction: P ? (P > 0 ? Tn.forward : Tn.back) : Tn.unknown,
			});
		});
	};
	function a() {
		i = n.value;
	}
	function c(h) {
		o.push(h);
		const g = () => {
			const v = o.indexOf(h);
			v > -1 && o.splice(v, 1);
		};
		return s.push(g), g;
	}
	function u() {
		const { history: h } = window;
		h.state && h.replaceState(se({}, h.state, { scroll: Fr() }), "");
	}
	function f() {
		for (const h of s) h();
		(s = []),
			window.removeEventListener("popstate", l),
			window.removeEventListener("beforeunload", u);
	}
	return (
		window.addEventListener("popstate", l),
		window.addEventListener("beforeunload", u, { passive: !0 }),
		{ pauseListeners: a, listen: c, destroy: f }
	);
}
function ii(e, t, n, r = !1, o = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: o ? Fr() : null,
	};
}
function Nf(e) {
	const { history: t, location: n } = window,
		r = { value: aa(e, n) },
		o = { value: t.state };
	o.value ||
		s(
			r.value,
			{
				back: null,
				current: r.value,
				forward: null,
				position: t.length - 1,
				replaced: !0,
				scroll: null,
			},
			!0
		);
	function s(a, c, u) {
		const f = e.indexOf("#"),
			h =
				f > -1
					? (n.host && document.querySelector("base") ? e : e.slice(f)) + a
					: Af() + e + a;
		try {
			t[u ? "replaceState" : "pushState"](c, "", h), (o.value = c);
		} catch (g) {
			console.error(g), n[u ? "replace" : "assign"](h);
		}
	}
	function i(a, c) {
		const u = se({}, t.state, ii(o.value.back, a, o.value.forward, !0), c, {
			position: o.value.position,
		});
		s(a, u, !0), (r.value = a);
	}
	function l(a, c) {
		const u = se({}, o.value, t.state, { forward: a, scroll: Fr() });
		s(u.current, u, !0);
		const f = se({}, ii(r.value, a, null), { position: u.position + 1 }, c);
		s(a, f, !1), (r.value = a);
	}
	return { location: r, state: o, push: l, replace: i };
}
function Hf(e) {
	e = Ef(e);
	const t = Nf(e),
		n = If(e, t.state, t.location, t.replace);
	function r(s, i = !0) {
		i || n.pauseListeners(), history.go(s);
	}
	const o = se(
		{ location: "", base: e, go: r, createHref: Tf.bind(null, e) },
		t,
		n
	);
	return (
		Object.defineProperty(o, "location", {
			enumerable: !0,
			get: () => t.location.value,
		}),
		Object.defineProperty(o, "state", {
			enumerable: !0,
			get: () => t.state.value,
		}),
		o
	);
}
function jf(e) {
	return typeof e == "string" || (e && typeof e == "object");
}
function ca(e) {
	return typeof e == "string" || typeof e == "symbol";
}
const gt = {
		path: "/",
		name: void 0,
		params: {},
		query: {},
		hash: "",
		fullPath: "/",
		matched: [],
		meta: {},
		redirectedFrom: void 0,
	},
	ua = Symbol("");
var li;
(function (e) {
	(e[(e.aborted = 4)] = "aborted"),
		(e[(e.cancelled = 8)] = "cancelled"),
		(e[(e.duplicated = 16)] = "duplicated");
})(li || (li = {}));
function un(e, t) {
	return se(new Error(), { type: e, [ua]: !0 }, t);
}
function at(e, t) {
	return e instanceof Error && ua in e && (t == null || !!(e.type & t));
}
const ai = "[^/]+?",
	Ff = { sensitive: !1, strict: !1, start: !0, end: !0 },
	Lf = /[.+*?^${}()[\]/\\]/g;
function Df(e, t) {
	const n = se({}, Ff, t),
		r = [];
	let o = n.start ? "^" : "";
	const s = [];
	for (const c of e) {
		const u = c.length ? [] : [90];
		n.strict && !c.length && (o += "/");
		for (let f = 0; f < c.length; f++) {
			const h = c[f];
			let g = 40 + (n.sensitive ? 0.25 : 0);
			if (h.type === 0)
				f || (o += "/"), (o += h.value.replace(Lf, "\\$&")), (g += 40);
			else if (h.type === 1) {
				const { value: v, repeatable: y, optional: P, regexp: C } = h;
				s.push({ name: v, repeatable: y, optional: P });
				const x = C || ai;
				if (x !== ai) {
					g += 10;
					try {
						new RegExp(`(${x})`);
					} catch (R) {
						throw new Error(
							`Invalid custom RegExp for param "${v}" (${x}): ` + R.message
						);
					}
				}
				let M = y ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
				f || (M = P && c.length < 2 ? `(?:/${M})` : "/" + M),
					P && (M += "?"),
					(o += M),
					(g += 20),
					P && (g += -8),
					y && (g += -20),
					x === ".*" && (g += -50);
			}
			u.push(g);
		}
		r.push(u);
	}
	if (n.strict && n.end) {
		const c = r.length - 1;
		r[c][r[c].length - 1] += 0.7000000000000001;
	}
	n.strict || (o += "/?"), n.end ? (o += "$") : n.strict && (o += "(?:/|$)");
	const i = new RegExp(o, n.sensitive ? "" : "i");
	function l(c) {
		const u = c.match(i),
			f = {};
		if (!u) return null;
		for (let h = 1; h < u.length; h++) {
			const g = u[h] || "",
				v = s[h - 1];
			f[v.name] = g && v.repeatable ? g.split("/") : g;
		}
		return f;
	}
	function a(c) {
		let u = "",
			f = !1;
		for (const h of e) {
			(!f || !u.endsWith("/")) && (u += "/"), (f = !1);
			for (const g of h)
				if (g.type === 0) u += g.value;
				else if (g.type === 1) {
					const { value: v, repeatable: y, optional: P } = g,
						C = v in c ? c[v] : "";
					if (Je(C) && !y)
						throw new Error(
							`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`
						);
					const x = Je(C) ? C.join("/") : C;
					if (!x)
						if (P)
							h.length < 2 &&
								(u.endsWith("/") ? (u = u.slice(0, -1)) : (f = !0));
						else throw new Error(`Missing required param "${v}"`);
					u += x;
				}
		}
		return u || "/";
	}
	return { re: i, score: r, keys: s, parse: l, stringify: a };
}
function Bf(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length; ) {
		const r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length
		? e.length === 1 && e[0] === 40 + 40
			? -1
			: 1
		: e.length > t.length
		? t.length === 1 && t[0] === 40 + 40
			? 1
			: -1
		: 0;
}
function Vf(e, t) {
	let n = 0;
	const r = e.score,
		o = t.score;
	for (; n < r.length && n < o.length; ) {
		const s = Bf(r[n], o[n]);
		if (s) return s;
		n++;
	}
	if (Math.abs(o.length - r.length) === 1) {
		if (ci(r)) return 1;
		if (ci(o)) return -1;
	}
	return o.length - r.length;
}
function ci(e) {
	const t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
const qf = { type: 0, value: "" },
	Uf = /[a-zA-Z0-9_]/;
function Wf(e) {
	if (!e) return [[]];
	if (e === "/") return [[qf]];
	if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
	function t(g) {
		throw new Error(`ERR (${n})/"${c}": ${g}`);
	}
	let n = 0,
		r = n;
	const o = [];
	let s;
	function i() {
		s && o.push(s), (s = []);
	}
	let l = 0,
		a,
		c = "",
		u = "";
	function f() {
		c &&
			(n === 0
				? s.push({ type: 0, value: c })
				: n === 1 || n === 2 || n === 3
				? (s.length > 1 &&
						(a === "*" || a === "+") &&
						t(
							`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
						),
				  s.push({
						type: 1,
						value: c,
						regexp: u,
						repeatable: a === "*" || a === "+",
						optional: a === "*" || a === "?",
				  }))
				: t("Invalid state to consume buffer"),
			(c = ""));
	}
	function h() {
		c += a;
	}
	for (; l < e.length; ) {
		if (((a = e[l++]), a === "\\" && n !== 2)) {
			(r = n), (n = 4);
			continue;
		}
		switch (n) {
			case 0:
				a === "/" ? (c && f(), i()) : a === ":" ? (f(), (n = 1)) : h();
				break;
			case 4:
				h(), (n = r);
				break;
			case 1:
				a === "("
					? (n = 2)
					: Uf.test(a)
					? h()
					: (f(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--);
				break;
			case 2:
				a === ")"
					? u[u.length - 1] == "\\"
						? (u = u.slice(0, -1) + a)
						: (n = 3)
					: (u += a);
				break;
			case 3:
				f(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--, (u = "");
				break;
			default:
				t("Unknown state");
				break;
		}
	}
	return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), i(), o;
}
function Kf(e, t, n) {
	const r = Df(Wf(e.path), n),
		o = se(r, { record: e, parent: t, children: [], alias: [] });
	return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function Gf(e, t) {
	const n = [],
		r = new Map();
	t = di({ strict: !1, end: !0, sensitive: !1 }, t);
	function o(u) {
		return r.get(u);
	}
	function s(u, f, h) {
		const g = !h,
			v = Zf(u);
		v.aliasOf = h && h.record;
		const y = di(t, u),
			P = [v];
		if ("alias" in u) {
			const M = typeof u.alias == "string" ? [u.alias] : u.alias;
			for (const R of M)
				P.push(
					se({}, v, {
						components: h ? h.record.components : v.components,
						path: R,
						aliasOf: h ? h.record : v,
					})
				);
		}
		let C, x;
		for (const M of P) {
			const { path: R } = M;
			if (f && R[0] !== "/") {
				const V = f.record.path,
					D = V[V.length - 1] === "/" ? "" : "/";
				M.path = f.record.path + (R && D + R);
			}
			if (
				((C = Kf(M, f, y)),
				h
					? h.alias.push(C)
					: ((x = x || C),
					  x !== C && x.alias.push(C),
					  g && u.name && !fi(C) && i(u.name)),
				v.children)
			) {
				const V = v.children;
				for (let D = 0; D < V.length; D++) s(V[D], C, h && h.children[D]);
			}
			(h = h || C),
				((C.record.components && Object.keys(C.record.components).length) ||
					C.record.name ||
					C.record.redirect) &&
					a(C);
		}
		return x
			? () => {
					i(x);
			  }
			: Sn;
	}
	function i(u) {
		if (ca(u)) {
			const f = r.get(u);
			f &&
				(r.delete(u),
				n.splice(n.indexOf(f), 1),
				f.children.forEach(i),
				f.alias.forEach(i));
		} else {
			const f = n.indexOf(u);
			f > -1 &&
				(n.splice(f, 1),
				u.record.name && r.delete(u.record.name),
				u.children.forEach(i),
				u.alias.forEach(i));
		}
	}
	function l() {
		return n;
	}
	function a(u) {
		let f = 0;
		for (
			;
			f < n.length &&
			Vf(u, n[f]) >= 0 &&
			(u.record.path !== n[f].record.path || !fa(u, n[f]));

		)
			f++;
		n.splice(f, 0, u), u.record.name && !fi(u) && r.set(u.record.name, u);
	}
	function c(u, f) {
		let h,
			g = {},
			v,
			y;
		if ("name" in u && u.name) {
			if (((h = r.get(u.name)), !h)) throw un(1, { location: u });
			(y = h.record.name),
				(g = se(
					ui(
						f.params,
						h.keys.filter((x) => !x.optional).map((x) => x.name)
					),
					u.params &&
						ui(
							u.params,
							h.keys.map((x) => x.name)
						)
				)),
				(v = h.stringify(g));
		} else if ("path" in u)
			(v = u.path),
				(h = n.find((x) => x.re.test(v))),
				h && ((g = h.parse(v)), (y = h.record.name));
		else {
			if (((h = f.name ? r.get(f.name) : n.find((x) => x.re.test(f.path))), !h))
				throw un(1, { location: u, currentLocation: f });
			(y = h.record.name),
				(g = se({}, f.params, u.params)),
				(v = h.stringify(g));
		}
		const P = [];
		let C = h;
		for (; C; ) P.unshift(C.record), (C = C.parent);
		return { name: y, path: v, params: g, matched: P, meta: Jf(P) };
	}
	return (
		e.forEach((u) => s(u)),
		{
			addRoute: s,
			resolve: c,
			removeRoute: i,
			getRoutes: l,
			getRecordMatcher: o,
		}
	);
}
function ui(e, t) {
	const n = {};
	for (const r of t) r in e && (n[r] = e[r]);
	return n;
}
function Zf(e) {
	return {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: void 0,
		beforeEnter: e.beforeEnter,
		props: Qf(e),
		children: e.children || [],
		instances: {},
		leaveGuards: new Set(),
		updateGuards: new Set(),
		enterCallbacks: {},
		components:
			"components" in e
				? e.components || null
				: e.component && { default: e.component },
	};
}
function Qf(e) {
	const t = {},
		n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function fi(e) {
	for (; e; ) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function Jf(e) {
	return e.reduce((t, n) => se(t, n.meta), {});
}
function di(e, t) {
	const n = {};
	for (const r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
function fa(e, t) {
	return t.children.some((n) => n === e || fa(e, n));
}
const da = /#/g,
	Yf = /&/g,
	Xf = /\//g,
	ed = /=/g,
	td = /\?/g,
	pa = /\+/g,
	nd = /%5B/g,
	rd = /%5D/g,
	ha = /%5E/g,
	od = /%60/g,
	ga = /%7B/g,
	sd = /%7C/g,
	ma = /%7D/g,
	id = /%20/g;
function rs(e) {
	return encodeURI("" + e)
		.replace(sd, "|")
		.replace(nd, "[")
		.replace(rd, "]");
}
function ld(e) {
	return rs(e).replace(ga, "{").replace(ma, "}").replace(ha, "^");
}
function $o(e) {
	return rs(e)
		.replace(pa, "%2B")
		.replace(id, "+")
		.replace(da, "%23")
		.replace(Yf, "%26")
		.replace(od, "`")
		.replace(ga, "{")
		.replace(ma, "}")
		.replace(ha, "^");
}
function ad(e) {
	return $o(e).replace(ed, "%3D");
}
function cd(e) {
	return rs(e).replace(da, "%23").replace(td, "%3F");
}
function ud(e) {
	return e == null ? "" : cd(e).replace(Xf, "%2F");
}
function _r(e) {
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
function fd(e) {
	const t = {};
	if (e === "" || e === "?") return t;
	const r = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let o = 0; o < r.length; ++o) {
		const s = r[o].replace(pa, " "),
			i = s.indexOf("="),
			l = _r(i < 0 ? s : s.slice(0, i)),
			a = i < 0 ? null : _r(s.slice(i + 1));
		if (l in t) {
			let c = t[l];
			Je(c) || (c = t[l] = [c]), c.push(a);
		} else t[l] = a;
	}
	return t;
}
function pi(e) {
	let t = "";
	for (let n in e) {
		const r = e[n];
		if (((n = ad(n)), r == null)) {
			r !== void 0 && (t += (t.length ? "&" : "") + n);
			continue;
		}
		(Je(r) ? r.map((s) => s && $o(s)) : [r && $o(r)]).forEach((s) => {
			s !== void 0 &&
				((t += (t.length ? "&" : "") + n), s != null && (t += "=" + s));
		});
	}
	return t;
}
function dd(e) {
	const t = {};
	for (const n in e) {
		const r = e[n];
		r !== void 0 &&
			(t[n] = Je(r)
				? r.map((o) => (o == null ? null : "" + o))
				: r == null
				? r
				: "" + r);
	}
	return t;
}
const pd = Symbol(""),
	hi = Symbol(""),
	os = Symbol(""),
	ss = Symbol(""),
	Po = Symbol("");
function vn() {
	let e = [];
	function t(r) {
		return (
			e.push(r),
			() => {
				const o = e.indexOf(r);
				o > -1 && e.splice(o, 1);
			}
		);
	}
	function n() {
		e = [];
	}
	return { add: t, list: () => e.slice(), reset: n };
}
function _t(e, t, n, r, o) {
	const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
	return () =>
		new Promise((i, l) => {
			const a = (f) => {
					f === !1
						? l(un(4, { from: n, to: t }))
						: f instanceof Error
						? l(f)
						: jf(f)
						? l(un(2, { from: t, to: f }))
						: (s &&
								r.enterCallbacks[o] === s &&
								typeof f == "function" &&
								s.push(f),
						  i());
				},
				c = e.call(r && r.instances[o], t, n, a);
			let u = Promise.resolve(c);
			e.length < 3 && (u = u.then(a)), u.catch((f) => l(f));
		});
}
function oo(e, t, n, r) {
	const o = [];
	for (const s of e)
		for (const i in s.components) {
			let l = s.components[i];
			if (!(t !== "beforeRouteEnter" && !s.instances[i]))
				if (hd(l)) {
					const c = (l.__vccOpts || l)[t];
					c && o.push(_t(c, n, r, s, i));
				} else {
					let a = l();
					o.push(() =>
						a.then((c) => {
							if (!c)
								return Promise.reject(
									new Error(`Couldn't resolve component "${i}" at "${s.path}"`)
								);
							const u = _f(c) ? c.default : c;
							s.components[i] = u;
							const h = (u.__vccOpts || u)[t];
							return h && _t(h, n, r, s, i)();
						})
					);
				}
		}
	return o;
}
function hd(e) {
	return (
		typeof e == "object" ||
		"displayName" in e ||
		"props" in e ||
		"__vccOpts" in e
	);
}
function gi(e) {
	const t = nt(os),
		n = nt(ss),
		r = fe(() => t.resolve(ce(e.to))),
		o = fe(() => {
			const { matched: a } = r.value,
				{ length: c } = a,
				u = a[c - 1],
				f = n.matched;
			if (!u || !f.length) return -1;
			const h = f.findIndex(cn.bind(null, u));
			if (h > -1) return h;
			const g = mi(a[c - 2]);
			return c > 1 && mi(u) === g && f[f.length - 1].path !== g
				? f.findIndex(cn.bind(null, a[c - 2]))
				: h;
		}),
		s = fe(() => o.value > -1 && vd(n.params, r.value.params)),
		i = fe(
			() =>
				o.value > -1 &&
				o.value === n.matched.length - 1 &&
				la(n.params, r.value.params)
		);
	function l(a = {}) {
		return bd(a)
			? t[ce(e.replace) ? "replace" : "push"](ce(e.to)).catch(Sn)
			: Promise.resolve();
	}
	return {
		route: r,
		href: fe(() => r.value.href),
		isActive: s,
		isExactActive: i,
		navigate: l,
	};
}
const gd = ft({
		name: "RouterLink",
		compatConfig: { MODE: 3 },
		props: {
			to: { type: [String, Object], required: !0 },
			replace: Boolean,
			activeClass: String,
			exactActiveClass: String,
			custom: Boolean,
			ariaCurrentValue: { type: String, default: "page" },
		},
		useLink: gi,
		setup(e, { slots: t }) {
			const n = Un(gi(e)),
				{ options: r } = nt(os),
				o = fe(() => ({
					[bi(e.activeClass, r.linkActiveClass, "router-link-active")]:
						n.isActive,
					[bi(
						e.exactActiveClass,
						r.linkExactActiveClass,
						"router-link-exact-active"
					)]: n.isExactActive,
				}));
			return () => {
				const s = t.default && t.default(n);
				return e.custom
					? s
					: ia(
							"a",
							{
								"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
								href: n.href,
								onClick: n.navigate,
								class: o.value,
							},
							s
					  );
			};
		},
	}),
	md = gd;
function bd(e) {
	if (
		!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
		!e.defaultPrevented &&
		!(e.button !== void 0 && e.button !== 0)
	) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			const t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function vd(e, t) {
	for (const n in t) {
		const r = t[n],
			o = e[n];
		if (typeof r == "string") {
			if (r !== o) return !1;
		} else if (!Je(o) || o.length !== r.length || r.some((s, i) => s !== o[i]))
			return !1;
	}
	return !0;
}
function mi(e) {
	return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const bi = (e, t, n) => e ?? t ?? n,
	yd = ft({
		name: "RouterView",
		inheritAttrs: !1,
		props: { name: { type: String, default: "default" }, route: Object },
		compatConfig: { MODE: 3 },
		setup(e, { attrs: t, slots: n }) {
			const r = nt(Po),
				o = fe(() => e.route || r.value),
				s = nt(hi, 0),
				i = fe(() => {
					let c = ce(s);
					const { matched: u } = o.value;
					let f;
					for (; (f = u[c]) && !f.components; ) c++;
					return c;
				}),
				l = fe(() => o.value.matched[i.value]);
			ar(
				hi,
				fe(() => i.value + 1)
			),
				ar(pd, l),
				ar(Po, o);
			const a = Wo();
			return (
				lr(
					() => [a.value, l.value, e.name],
					([c, u, f], [h, g, v]) => {
						u &&
							((u.instances[f] = c),
							g &&
								g !== u &&
								c &&
								c === h &&
								(u.leaveGuards.size || (u.leaveGuards = g.leaveGuards),
								u.updateGuards.size || (u.updateGuards = g.updateGuards))),
							c &&
								u &&
								(!g || !cn(u, g) || !h) &&
								(u.enterCallbacks[f] || []).forEach((y) => y(c));
					},
					{ flush: "post" }
				),
				() => {
					const c = o.value,
						u = e.name,
						f = l.value,
						h = f && f.components[u];
					if (!h) return vi(n.default, { Component: h, route: c });
					const g = f.props[u],
						v = g
							? g === !0
								? c.params
								: typeof g == "function"
								? g(c)
								: g
							: null,
						P = ia(
							h,
							se({}, v, t, {
								onVnodeUnmounted: (C) => {
									C.component.isUnmounted && (f.instances[u] = null);
								},
								ref: a,
							})
						);
					return vi(n.default, { Component: P, route: c }) || P;
				}
			);
		},
	});
function vi(e, t) {
	if (!e) return null;
	const n = e(t);
	return n.length === 1 ? n[0] : n;
}
const ba = yd;
function _d(e) {
	const t = Gf(e.routes, e),
		n = e.parseQuery || fd,
		r = e.stringifyQuery || pi,
		o = e.history,
		s = vn(),
		i = vn(),
		l = vn(),
		a = zc(gt);
	let c = gt;
	Yt &&
		e.scrollBehavior &&
		"scrollRestoration" in history &&
		(history.scrollRestoration = "manual");
	const u = no.bind(null, (_) => "" + _),
		f = no.bind(null, ud),
		h = no.bind(null, _r);
	function g(_, z) {
		let T, I;
		return (
			ca(_) ? ((T = t.getRecordMatcher(_)), (I = z)) : (I = _), t.addRoute(I, T)
		);
	}
	function v(_) {
		const z = t.getRecordMatcher(_);
		z && t.removeRoute(z);
	}
	function y() {
		return t.getRoutes().map((_) => _.record);
	}
	function P(_) {
		return !!t.getRecordMatcher(_);
	}
	function C(_, z) {
		if (((z = se({}, z || a.value)), typeof _ == "string")) {
			const m = ro(n, _, z.path),
				b = t.resolve({ path: m.path }, z),
				w = o.createHref(m.fullPath);
			return se(m, b, {
				params: h(b.params),
				hash: _r(m.hash),
				redirectedFrom: void 0,
				href: w,
			});
		}
		let T;
		if ("path" in _) T = se({}, _, { path: ro(n, _.path, z.path).path });
		else {
			const m = se({}, _.params);
			for (const b in m) m[b] == null && delete m[b];
			(T = se({}, _, { params: f(m) })), (z.params = f(z.params));
		}
		const I = t.resolve(T, z),
			oe = _.hash || "";
		I.params = u(h(I.params));
		const d = kf(r, se({}, _, { hash: ld(oe), path: I.path })),
			p = o.createHref(d);
		return se(
			{ fullPath: d, hash: oe, query: r === pi ? dd(_.query) : _.query || {} },
			I,
			{ redirectedFrom: void 0, href: p }
		);
	}
	function x(_) {
		return typeof _ == "string" ? ro(n, _, a.value.path) : se({}, _);
	}
	function M(_, z) {
		if (c !== _) return un(8, { from: z, to: _ });
	}
	function R(_) {
		return ie(_);
	}
	function V(_) {
		return R(se(x(_), { replace: !0 }));
	}
	function D(_) {
		const z = _.matched[_.matched.length - 1];
		if (z && z.redirect) {
			const { redirect: T } = z;
			let I = typeof T == "function" ? T(_) : T;
			return (
				typeof I == "string" &&
					((I = I.includes("?") || I.includes("#") ? (I = x(I)) : { path: I }),
					(I.params = {})),
				se(
					{ query: _.query, hash: _.hash, params: "path" in I ? {} : _.params },
					I
				)
			);
		}
	}
	function ie(_, z) {
		const T = (c = C(_)),
			I = a.value,
			oe = _.state,
			d = _.force,
			p = _.replace === !0,
			m = D(T);
		if (m)
			return ie(
				se(x(m), {
					state: typeof m == "object" ? se({}, oe, m.state) : oe,
					force: d,
					replace: p,
				}),
				z || T
			);
		const b = T;
		b.redirectedFrom = z;
		let w;
		return (
			!d && Cf(r, I, T) && ((w = un(16, { to: b, from: I })), ke(I, I, !0, !1)),
			(w ? Promise.resolve(w) : Z(b, I))
				.catch((k) => (at(k) ? (at(k, 2) ? k : Me(k)) : G(k, b, I)))
				.then((k) => {
					if (k) {
						if (at(k, 2))
							return ie(
								se({ replace: p }, x(k.to), {
									state: typeof k.to == "object" ? se({}, oe, k.to.state) : oe,
									force: d,
								}),
								z || b
							);
					} else k = j(b, I, !0, p, oe);
					return K(b, I, k), k;
				})
		);
	}
	function de(_, z) {
		const T = M(_, z);
		return T ? Promise.reject(T) : Promise.resolve();
	}
	function be(_) {
		const z = Gt.values().next().value;
		return z && typeof z.runWithContext == "function"
			? z.runWithContext(_)
			: _();
	}
	function Z(_, z) {
		let T;
		const [I, oe, d] = wd(_, z);
		T = oo(I.reverse(), "beforeRouteLeave", _, z);
		for (const m of I)
			m.leaveGuards.forEach((b) => {
				T.push(_t(b, _, z));
			});
		const p = de.bind(null, _, z);
		return (
			T.push(p),
			Re(T)
				.then(() => {
					T = [];
					for (const m of s.list()) T.push(_t(m, _, z));
					return T.push(p), Re(T);
				})
				.then(() => {
					T = oo(oe, "beforeRouteUpdate", _, z);
					for (const m of oe)
						m.updateGuards.forEach((b) => {
							T.push(_t(b, _, z));
						});
					return T.push(p), Re(T);
				})
				.then(() => {
					T = [];
					for (const m of d)
						if (m.beforeEnter)
							if (Je(m.beforeEnter))
								for (const b of m.beforeEnter) T.push(_t(b, _, z));
							else T.push(_t(m.beforeEnter, _, z));
					return T.push(p), Re(T);
				})
				.then(
					() => (
						_.matched.forEach((m) => (m.enterCallbacks = {})),
						(T = oo(d, "beforeRouteEnter", _, z)),
						T.push(p),
						Re(T)
					)
				)
				.then(() => {
					T = [];
					for (const m of i.list()) T.push(_t(m, _, z));
					return T.push(p), Re(T);
				})
				.catch((m) => (at(m, 8) ? m : Promise.reject(m)))
		);
	}
	function K(_, z, T) {
		l.list().forEach((I) => be(() => I(_, z, T)));
	}
	function j(_, z, T, I, oe) {
		const d = M(_, z);
		if (d) return d;
		const p = z === gt,
			m = Yt ? history.state : {};
		T &&
			(I || p
				? o.replace(_.fullPath, se({ scroll: p && m && m.scroll }, oe))
				: o.push(_.fullPath, oe)),
			(a.value = _),
			ke(_, z, T, p),
			Me();
	}
	let q;
	function me() {
		q ||
			(q = o.listen((_, z, T) => {
				if (!Kn.listening) return;
				const I = C(_),
					oe = D(I);
				if (oe) {
					ie(se(oe, { replace: !0 }), I).catch(Sn);
					return;
				}
				c = I;
				const d = a.value;
				Yt && zf(si(d.fullPath, T.delta), Fr()),
					Z(I, d)
						.catch((p) =>
							at(p, 12)
								? p
								: at(p, 2)
								? (ie(p.to, I)
										.then((m) => {
											at(m, 20) &&
												!T.delta &&
												T.type === Fn.pop &&
												o.go(-1, !1);
										})
										.catch(Sn),
								  Promise.reject())
								: (T.delta && o.go(-T.delta, !1), G(p, I, d))
						)
						.then((p) => {
							(p = p || j(I, d, !1)),
								p &&
									(T.delta && !at(p, 8)
										? o.go(-T.delta, !1)
										: T.type === Fn.pop && at(p, 20) && o.go(-1, !1)),
								K(I, d, p);
						})
						.catch(Sn);
			}));
	}
	let ve = vn(),
		Q = vn(),
		J;
	function G(_, z, T) {
		Me(_);
		const I = Q.list();
		return (
			I.length ? I.forEach((oe) => oe(_, z, T)) : console.error(_),
			Promise.reject(_)
		);
	}
	function Pe() {
		return J && a.value !== gt
			? Promise.resolve()
			: new Promise((_, z) => {
					ve.add([_, z]);
			  });
	}
	function Me(_) {
		return (
			J ||
				((J = !_),
				me(),
				ve.list().forEach(([z, T]) => (_ ? T(_) : z())),
				ve.reset()),
			_
		);
	}
	function ke(_, z, T, I) {
		const { scrollBehavior: oe } = e;
		if (!Yt || !oe) return Promise.resolve();
		const d =
			(!T && Mf(si(_.fullPath, 0))) ||
			((I || !T) && history.state && history.state.scroll) ||
			null;
		return Go()
			.then(() => oe(_, z, d))
			.then((p) => p && Of(p))
			.catch((p) => G(p, _, z));
	}
	const _e = (_) => o.go(_);
	let pt;
	const Gt = new Set(),
		Kn = {
			currentRoute: a,
			listening: !0,
			addRoute: g,
			removeRoute: v,
			hasRoute: P,
			getRoutes: y,
			resolve: C,
			options: e,
			push: R,
			replace: V,
			go: _e,
			back: () => _e(-1),
			forward: () => _e(1),
			beforeEach: s.add,
			beforeResolve: i.add,
			afterEach: l.add,
			onError: Q.add,
			isReady: Pe,
			install(_) {
				const z = this;
				_.component("RouterLink", md),
					_.component("RouterView", ba),
					(_.config.globalProperties.$router = z),
					Object.defineProperty(_.config.globalProperties, "$route", {
						enumerable: !0,
						get: () => ce(a),
					}),
					Yt &&
						!pt &&
						a.value === gt &&
						((pt = !0), R(o.location).catch((oe) => {}));
				const T = {};
				for (const oe in gt)
					Object.defineProperty(T, oe, {
						get: () => a.value[oe],
						enumerable: !0,
					});
				_.provide(os, z), _.provide(ss, xl(T)), _.provide(Po, a);
				const I = _.unmount;
				Gt.add(_),
					(_.unmount = function () {
						Gt.delete(_),
							Gt.size < 1 &&
								((c = gt),
								q && q(),
								(q = null),
								(a.value = gt),
								(pt = !1),
								(J = !1)),
							I();
					});
			},
		};
	function Re(_) {
		return _.reduce((z, T) => z.then(() => be(T)), Promise.resolve());
	}
	return Kn;
}
function wd(e, t) {
	const n = [],
		r = [],
		o = [],
		s = Math.max(t.matched.length, e.matched.length);
	for (let i = 0; i < s; i++) {
		const l = t.matched[i];
		l && (e.matched.find((c) => cn(c, l)) ? r.push(l) : n.push(l));
		const a = e.matched[i];
		a && (t.matched.find((c) => cn(c, a)) || o.push(a));
	}
	return [n, r, o];
}
function xd() {
	return nt(ss);
}
const lt = (e, t) => {
		const n = e.__vccOpts || e;
		for (const [r, o] of t) n[r] = o;
		return n;
	},
	va = (e) => (Qo("data-v-88b5f432"), (e = e()), Jo(), e),
	kd = { class: "greetings" },
	Cd = va(() =>
		F(
			"h1",
			{ class: "text-5xl font-extrabold dark:text-white" },
			"Jesse Hudak",
			-1
		)
	),
	$d = va(() =>
		F(
			"h2",
			{ class: "text-3xl font-extrabold dark:text-gray" },
			"Full Stack Web Developer",
			-1
		)
	),
	Pd = [Cd, $d],
	Ed = {
		__name: "MainPage",
		props: { msg: { type: String, required: !0 } },
		setup(e) {
			return (t, n) => (ne(), ye("div", kd, Pd));
		},
	},
	Sd = lt(Ed, [["__scopeId", "data-v-88b5f432"]]);
const Td = {
		__name: "CustomNavbar",
		setup(e) {
			const t = xd(),
				n = (r) => t.path === r;
			return (r, o) => {
				const s = sn("router-link");
				return (
					ne(),
					ye("nav", null, [
						W(
							s,
							{ to: "/" },
							{
								default: ae(() => [
									F(
										"a",
										{ class: Ne({ "router-link-exact-active": n("/") }) },
										"Home",
										2
									),
								]),
								_: 1,
							}
						),
						W(
							s,
							{ to: "/about" },
							{
								default: ae(() => [
									F(
										"a",
										{ class: Ne({ "router-link-exact-active": n("/about") }) },
										"About",
										2
									),
								]),
								_: 1,
							}
						),
						W(
							s,
							{ to: "/projects" },
							{
								default: ae(() => [
									F(
										"a",
										{
											class: Ne({ "router-link-exact-active": n("/projects") }),
										},
										"Projects",
										2
									),
								]),
								_: 1,
							}
						),
						W(
							s,
							{ to: "/tech" },
							{
								default: ae(() => [
									F(
										"a",
										{ class: Ne({ "router-link-exact-active": n("/tech") }) },
										"Technologies",
										2
									),
								]),
								_: 1,
							}
						),
					])
				);
			};
		},
	},
	Rd = lt(Td, [["__scopeId", "data-v-905629e1"]]);
const Od = { class: "wrapper" },
	zd = {
		__name: "App",
		setup(e) {
			return (t, n) => (
				ne(),
				ye(
					Ie,
					null,
					[F("header", null, [F("div", Od, [W(Sd), W(Rd)])]), W(ce(ba))],
					64
				)
			);
		},
	},
	Md = lt(zd, [["__scopeId", "data-v-2427e050"]]),
	Ad = "modulepreload",
	Id = function (e) {
		return "/JHDKPortfolioVUE/" + e;
	},
	yi = {},
	so = function (t, n, r) {
		if (!n || n.length === 0) return t();
		const o = document.getElementsByTagName("link");
		return Promise.all(
			n.map((s) => {
				if (((s = Id(s)), s in yi)) return;
				yi[s] = !0;
				const i = s.endsWith(".css"),
					l = i ? '[rel="stylesheet"]' : "";
				if (!!r)
					for (let u = o.length - 1; u >= 0; u--) {
						const f = o[u];
						if (f.href === s && (!i || f.rel === "stylesheet")) return;
					}
				else if (document.querySelector(`link[href="${s}"]${l}`)) return;
				const c = document.createElement("link");
				if (
					((c.rel = i ? "stylesheet" : Ad),
					i || ((c.as = "script"), (c.crossOrigin = "")),
					(c.href = s),
					document.head.appendChild(c),
					i)
				)
					return new Promise((u, f) => {
						c.addEventListener("load", u),
							c.addEventListener("error", () =>
								f(new Error(`Unable to preload CSS for ${s}`))
							);
					});
			})
		)
			.then(() => t())
			.catch((s) => {
				const i = new Event("vite:preloadError", { cancelable: !0 });
				if (((i.payload = s), window.dispatchEvent(i), !i.defaultPrevented))
					throw s;
			});
	};
const Nd = {},
	Hd = { class: "item" },
	jd = { class: "details" };
function Fd(e, t) {
	return (
		ne(),
		ye("div", Hd, [
			F("i", null, [Fe(e.$slots, "icon", {}, void 0, !0)]),
			F("div", jd, [
				F("h3", null, [Fe(e.$slots, "heading", {}, void 0, !0)]),
				Fe(e.$slots, "default", {}, void 0, !0),
			]),
		])
	);
}
const er = lt(Nd, [
		["render", Fd],
		["__scopeId", "data-v-40a5c0e5"],
	]),
	Ld = {},
	Dd = {
		fill: "rgba(235, 235, 235, 0.64)",
		width: "25",
		height: "25",
		version: "1.1",
		id: "Capa_1",
		xmlns: "http://www.w3.org/2000/svg",
		"xmlns:xlink": "http://www.w3.org/1999/xlink",
		viewBox: "0 0 297.703 297.703",
		"xml:space": "preserve",
		stroke: "#000000",
		"stroke-width": "0.00297703",
	},
	Bd = ta(
		'<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#000000" stroke-width="4.167842"><g><path d="M40.16,77.084c0-20.462,16.646-37.108,37.108-37.108c3.313,0,6-2.687,6-6c0-3.313-2.687-6-6-6 c-27.078,0-49.108,22.03-49.108,49.108c0,3.313,2.687,6,6,6C37.473,83.084,40.16,80.397,40.16,77.084z"></path> <path d="M77.268,12c3.313,0,6-2.686,6-6c0-3.313-2.687-6-6-6C34.764,0,0.184,34.58,0.184,77.084c0,3.313,2.687,6,6,6s6-2.687,6-6 C12.184,41.196,41.38,12,77.268,12z"></path> <path d="M220.435,27.976c-3.314,0-6,2.687-6,6c0,3.313,2.686,6,6,6c20.462,0,37.108,16.646,37.108,37.108c0,3.313,2.686,6,6,6 s6-2.687,6-6C269.543,50.006,247.513,27.976,220.435,27.976z"></path> <path d="M220.435,0c-3.314,0-6,2.687-6,6c0,3.314,2.686,6,6,6c35.888,0,65.084,29.196,65.084,65.084c0,3.313,2.686,6,6,6 c3.313,0,6-2.687,6-6C297.519,34.58,262.939,0,220.435,0z"></path> <path d="M227.513,80.603c-0.985,0-1.801,0.058-2.784,0.172c-4.218,0.491-8.21,2.021-11.21,4.319v-5.199 c0-13.116-9.63-24.128-22.409-25.614c-0.983-0.115-1.979-0.173-2.966-0.173c-5.229-0.001-10.219,1.579-14.435,4.514 c-0.923-12.218-10.215-22.164-22.337-23.574c-0.983-0.114-1.971-0.137-2.957-0.137h-0.005h-0.004 c-6.765,0-13.136,2.607-17.938,7.409c-4.424,4.424-7.017,10.162-7.396,16.332c-3.311-2.319-7.203-3.869-11.442-4.362 c-0.983-0.115-1.982-0.177-2.968-0.177c-6.765-0.001-13.516,2.641-18.318,7.442c-4.801,4.802-7.827,11.169-7.827,17.934v86.04 l-5.524-5.577c-4.742-4.67-10.834-7.239-17.522-7.239c-6.754,0-12.998,2.621-17.757,7.379c-9.619,9.619-9.791,25.133-0.611,35.021 l53.878,71.029l1.16,15.265c0.687,9.139,8.409,16.297,17.573,16.297l98.471-0.078c8.805-0.011,16.306-6.598,17.452-15.323 l2.388-18.182c7.557-12.231,12.779-28.446,16.272-48.228c3.051-17.273,4.221-37.775,4.221-60.934v-48.976 C252.518,91.988,241.509,80.603,227.513,80.603z M217.74,280.739c-0.366,2.793-2.745,4.986-5.562,4.989l-98.451,0.182 c-0.003,0-0.005,0-0.008,0c-2.938,0-5.38-2.369-5.601-5.3l-1.411-18.831c-0.001-0.01-0.004-0.045-0.011-0.053l-56.401-74.402 c-5.152-5.152-5.152-13.59,0-18.741c2.576-2.576,5.972-3.868,9.367-3.868c3.396,0,6.792,1.287,9.368,3.863l15.874,14.988 c1.237,1.168,2.344,1.691,3.802,1.691c3.167,0,5.811-2.47,5.811-6.165V79.488c0-7.359,6.402-13.382,13.762-13.381 c0.521,0,0.977,0.03,1.51,0.092c6.811,0.793,11.728,6.838,11.728,13.695v68.615c0,3.562,2.897,6.449,6.46,6.449 c3.606,0,6.54-2.924,6.54-6.53V60.22c0-7.36,6.274-13.382,13.633-13.382c0.52,0,1.042,0.03,1.574,0.093 c6.811,0.792,11.793,6.838,11.793,13.694v87.796c0,3.61,2.938,6.538,6.548,6.538c3.558,0,6.452-2.885,6.452-6.442V79.488 c0-7.359,6.145-13.382,13.505-13.381c0.52,0,1.105,0.03,1.637,0.092c6.811,0.793,11.857,6.838,11.857,13.695v68.376 c0,3.694,3.005,6.64,6.698,6.64h0.111c3.413,0,6.19-2.719,6.19-6.132v-42.39c0-6.856,4.985-12.901,11.795-13.694 c0.532-0.062,0.681-0.092,1.202-0.092c7.359,0,13.003,6.021,13.003,13.381v48.976c0,41.828-4.698,80.477-19.716,103.867 c-0.456,0.711-0.57,1.506-0.68,2.344L217.74,280.739z"></path></g></g><g id="SVGRepo_iconCarrier"><g><path d="M40.16,77.084c0-20.462,16.646-37.108,37.108-37.108c3.313,0,6-2.687,6-6c0-3.313-2.687-6-6-6 c-27.078,0-49.108,22.03-49.108,49.108c0,3.313,2.687,6,6,6C37.473,83.084,40.16,80.397,40.16,77.084z"></path> <path d="M77.268,12c3.313,0,6-2.686,6-6c0-3.313-2.687-6-6-6C34.764,0,0.184,34.58,0.184,77.084c0,3.313,2.687,6,6,6s6-2.687,6-6 C12.184,41.196,41.38,12,77.268,12z"></path> <path d="M220.435,27.976c-3.314,0-6,2.687-6,6c0,3.313,2.686,6,6,6c20.462,0,37.108,16.646,37.108,37.108c0,3.313,2.686,6,6,6 s6-2.687,6-6C269.543,50.006,247.513,27.976,220.435,27.976z"></path> <path d="M220.435,0c-3.314,0-6,2.687-6,6c0,3.314,2.686,6,6,6c35.888,0,65.084,29.196,65.084,65.084c0,3.313,2.686,6,6,6 c3.313,0,6-2.687,6-6C297.519,34.58,262.939,0,220.435,0z"></path> <path d="M227.513,80.603c-0.985,0-1.801,0.058-2.784,0.172c-4.218,0.491-8.21,2.021-11.21,4.319v-5.199 c0-13.116-9.63-24.128-22.409-25.614c-0.983-0.115-1.979-0.173-2.966-0.173c-5.229-0.001-10.219,1.579-14.435,4.514 c-0.923-12.218-10.215-22.164-22.337-23.574c-0.983-0.114-1.971-0.137-2.957-0.137h-0.005h-0.004 c-6.765,0-13.136,2.607-17.938,7.409c-4.424,4.424-7.017,10.162-7.396,16.332c-3.311-2.319-7.203-3.869-11.442-4.362 c-0.983-0.115-1.982-0.177-2.968-0.177c-6.765-0.001-13.516,2.641-18.318,7.442c-4.801,4.802-7.827,11.169-7.827,17.934v86.04 l-5.524-5.577c-4.742-4.67-10.834-7.239-17.522-7.239c-6.754,0-12.998,2.621-17.757,7.379c-9.619,9.619-9.791,25.133-0.611,35.021 l53.878,71.029l1.16,15.265c0.687,9.139,8.409,16.297,17.573,16.297l98.471-0.078c8.805-0.011,16.306-6.598,17.452-15.323 l2.388-18.182c7.557-12.231,12.779-28.446,16.272-48.228c3.051-17.273,4.221-37.775,4.221-60.934v-48.976 C252.518,91.988,241.509,80.603,227.513,80.603z M217.74,280.739c-0.366,2.793-2.745,4.986-5.562,4.989l-98.451,0.182 c-0.003,0-0.005,0-0.008,0c-2.938,0-5.38-2.369-5.601-5.3l-1.411-18.831c-0.001-0.01-0.004-0.045-0.011-0.053l-56.401-74.402 c-5.152-5.152-5.152-13.59,0-18.741c2.576-2.576,5.972-3.868,9.367-3.868c3.396,0,6.792,1.287,9.368,3.863l15.874,14.988 c1.237,1.168,2.344,1.691,3.802,1.691c3.167,0,5.811-2.47,5.811-6.165V79.488c0-7.359,6.402-13.382,13.762-13.381 c0.521,0,0.977,0.03,1.51,0.092c6.811,0.793,11.728,6.838,11.728,13.695v68.615c0,3.562,2.897,6.449,6.46,6.449 c3.606,0,6.54-2.924,6.54-6.53V60.22c0-7.36,6.274-13.382,13.633-13.382c0.52,0,1.042,0.03,1.574,0.093 c6.811,0.792,11.793,6.838,11.793,13.694v87.796c0,3.61,2.938,6.538,6.548,6.538c3.558,0,6.452-2.885,6.452-6.442V79.488 c0-7.359,6.145-13.382,13.505-13.381c0.52,0,1.105,0.03,1.637,0.092c6.811,0.793,11.857,6.838,11.857,13.695v68.376 c0,3.694,3.005,6.64,6.698,6.64h0.111c3.413,0,6.19-2.719,6.19-6.132v-42.39c0-6.856,4.985-12.901,11.795-13.694 c0.532-0.062,0.681-0.092,1.202-0.092c7.359,0,13.003,6.021,13.003,13.381v48.976c0,41.828-4.698,80.477-19.716,103.867 c-0.456,0.711-0.57,1.506-0.68,2.344L217.74,280.739z"></path></g></g>',
		3
	),
	Vd = [Bd];
function qd(e, t) {
	return ne(), ye("svg", Dd, Vd);
}
const Ud = lt(Ld, [["render", qd]]),
	Wd = {},
	Kd = {
		fill: "rgba(235, 235, 235, 0.64)",
		width: "25",
		height: "25",
		viewBox: "0 -45.84 304.86 304.86",
		xmlns: "http://www.w3.org/2000/svg",
	},
	Gd = ta(
		'<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><path class="a" d="M36.062,115.325c-.013-32.511-.03-75.6-.04-103.111a9.738,9.738,0,0,1,9.742-9.743C87.74,2.458,209.372,2.417,259.143,2.4a9.744,9.744,0,0,1,9.75,9.746c0,36.9.016,96.835.03,135.018,7.708,10.832,24.245,33.628,32.332,47.437a8.931,8.931,0,0,1,1.219,4.525c0,1.409-.03,3.115-.03,4.876a6.766,6.766,0,0,1-6.765,6.757H8.148a5.641,5.641,0,0,1-5.642-5.639c0-8.7-.032,2.554-.032-5.982A8.984,8.984,0,0,1,3.7,194.593c8.175-13.959,24.778-37.473,32.378-48.142C36.071,138.581,36.067,127.722,36.062,115.325Z"></path><path class="a" d="M107.656,114.938c-.012-12.632-.027-73.765-.027-76.492h94.892v.8c0,2.861.028,56.644.04,75.69"></path><path class="b" d="M38.462,115.325q-.012-29.748-.023-59.5-.006-14.342-.011-28.683,0-6.3,0-12.6c0-1.826-.135-3.645.636-5.353a7.448,7.448,0,0,1,3.68-3.68c2.29-1.041,5.181-.639,7.645-.639l7.513,0,17.841,0,43.706-.015,49.066-.016,47.308-.017L254.412,4.8c2.867,0,6.054-.454,8.606,1.1a7.262,7.262,0,0,1,3.1,3.913,17.132,17.132,0,0,1,.376,5.331q0,12.561,0,25.121,0,28.685.013,57.368,0,13.972.008,27.947,0,6.425,0,12.849,0,3.012,0,6.025c0,.895-.062,1.816,0,2.708a5.291,5.291,0,0,0,1.359,2.657c9.7,13.6,19.586,27.132,28.453,41.3.968,1.546,1.964,3.091,2.847,4.687,1.281,2.315.882,5.055.863,7.6a4.647,4.647,0,0,1-2.166,4.347,5.894,5.894,0,0,1-3.155.595H10.837c-1.414,0-3.2.274-4.433-.507-2.158-1.368-1.355-4.111-1.5-6.257-.18-2.548-4.105-3.438-4.715-.638a15.373,15.373,0,0,0-.1,1.6h4.8a13.308,13.308,0,0,1,.454-5.888c1.056-2.627,2.987-5.121,4.494-7.509,3.495-5.541,7.131-10.993,10.813-16.412q5.466-8.044,11.071-15.994,2.354-3.35,4.725-6.688a11.487,11.487,0,0,0,1.95-2.974c.415-1.507.084-3.552.084-5.1q-.006-13.332-.011-26.663c0-3.089-4.8-3.094-4.8,0q.006,15.562.013,31.126L34,145.239c-10.594,14.877-21.258,29.805-30.75,45.419-1.483,2.439-2.9,4.762-3.14,7.684a23.7,23.7,0,0,0-.03,4.212,2.4,2.4,0,0,0,4.8,0c.046-.4.2-1.572-.069-.322L.1,201.594c.062.886.007,1.794.007,2.681a8.873,8.873,0,0,0,2.1,6.252c2.078,2.319,4.858,2.631,7.76,2.631h282.4a20.511,20.511,0,0,0,5.938-.382,9.368,9.368,0,0,0,5.186-3.99c1.366-2.2,1.346-4.579,1.367-7.079.026-2.964-.049-5.66-1.529-8.319-.95-1.708-2.015-3.362-3.054-5.017-2.333-3.716-4.754-7.376-7.209-11.011-5.177-7.666-10.517-15.221-15.888-22.752q-3.087-4.329-6.18-8.656l.327,1.211q-.009-26.334-.017-52.668-.007-28.235-.012-56.47,0-12.289,0-24.579c0-4.2-1.159-8.069-4.571-10.774C263.617.212,260.165,0,256.376,0L219.1.013l-46.28.016L124.232.046,80.033.06,46.814.071c-3.886,0-7.529,1.1-10.157,4.12-2.951,3.393-3.035,7.281-3.034,11.541q.006,13.26.01,26.52l.024,59.469q0,6.8.005,13.6C33.663,118.414,38.463,118.419,38.462,115.325Z"></path><path class="b" d="M279.088,192.945H34.58c-3.3,0-6.61-.059-9.912,0-.144,0-.288,0-.433,0-3.088,0-3.094,4.8,0,4.8H268.743c3.3,0,6.61.059,9.912,0,.144,0,.288,0,.433,0,3.088,0,3.094-4.8,0-4.8Z"></path><path class="b" d="M47.037,20.676q.006,16.754.013,33.508.008,19.428.016,38.857.007,16.5.014,33.01,0,2.955,0,5.908a31.814,31.814,0,0,0,.172,5.785,8.374,8.374,0,0,0,6.894,6.6,40.293,40.293,0,0,0,5.929.122l26.571-.01,33.952-.012,37.3-.012,36.556-.012,32.214-.01,13.186,0h5.6a27.9,27.9,0,0,0,6.043-.235,8.458,8.458,0,0,0,6.388-7.635c.239-3.133.021-6.365.019-9.508q0-10.554-.008-21.107l-.018-45.077q-.009-19.611-.017-39.22c0-3.5-1.266-6.867-4.614-8.486a13.024,13.024,0,0,0-5.931-.894l-8.782,0-24.833.008-31.792.01-35.049.012-34.692.01-30.6.01-23.186.007c-1.891,0-3.905-.177-5.71.468a8.512,8.512,0,0,0-5.635,7.9c-.085,3.09,4.715,3.088,4.8,0,.067-2.443,2.007-3.569,4.229-3.57h4.483l10.677,0L98.7,17.094l32.707-.011,34.561-.011,33.035-.01,28.134-.009,19.853-.007c1.334,0,2.906-.224,4.12.383,2.488,1.242,1.953,4.257,1.953,6.559q0,9.209.008,18.415.009,21.5.017,43l.018,42.508,0,4.642a19.948,19.948,0,0,1-.1,4.326c-.56,2.414-2.755,2.73-4.837,2.731l-10.915,0-28.628.009-34.506.012-36.7.012-35.216.012-30.048.01-11.984,0a50.65,50.65,0,0,1-5.066,0c-2.45-.251-3.223-2.353-3.224-4.484q-.006-13.2-.011-26.41-.009-18.483-.016-36.967l-.015-36.689q0-7.221,0-14.442C51.835,17.588,47.035,17.582,47.037,20.676Z"></path><path class="b" d="M110.056,114.938q-.014-15.267-.014-30.532-.006-18.432-.011-36.863,0-4.548,0-9.1l-2.4,2.4h94.892l-2.4-2.4q0,10.883.01,21.765.009,18.951.02,37.9,0,8.414.01,16.826c0,3.088,4.8,3.093,4.8,0q-.011-16.686-.019-33.37-.009-17.223-.017-34.446,0-4.338,0-8.676a2.435,2.435,0,0,0-2.4-2.4H107.629a2.435,2.435,0,0,0-2.4,2.4q0,11.733.006,23.466,0,19.42.013,38.841,0,7.092.008,14.185c0,3.088,4.8,3.093,4.8,0Z"></path><path class="c" d="M143.846,114.939h22.192v-35.3H143.846v35.3"></path><path class="b" d="M168.438,114.605V78.626c0-3.088-4.8-3.094-4.8,0v35.979c0,3.088,4.8,3.093,4.8,0Z"></path><path class="d" d="M143.846,79.634H104.038c.052,11.938-.01,26.205-.01,35.3h39.818V80.329"></path><path class="b" d="M114.913,79.041q0,15.2,0,30.4v5.167c0,3.088,4.8,3.093,4.8,0q0-15.068,0-30.135,0-2.713,0-5.429c0-3.089-4.8-3.094-4.8,0Z"></path><path class="b" d="M128.178,79.041v35.564c0,3.088,4.8,3.093,4.8,0V79.041c0-3.089-4.8-3.094-4.8,0Z"></path><path class="b" d="M101.635,79.041c.055,11.966-.007,23.932-.007,35.9,0,3.089,4.8,3.094,4.8,0,0-11.966.062-23.932.007-35.9-.014-3.088-4.814-3.094-4.8,0Z"></path><path class="b" d="M181.6,112.539H104.028c-3.089,0-3.094,4.8,0,4.8H181.6c3.089,0,3.094-4.8,0-4.8Z"></path><path class="e" d="M180.907,105.531a6.2,6.2,0,0,1,.457-5.7c1.017-1.394,2.841-2.595,6.073-2.595h16.108c3.9,0,5.471,1.613,6.263,3.388a7.065,7.065,0,0,1-.233,4.91"></path><path class="b" d="M183.221,104.893c-1-2.8.083-4.716,2.861-5.171a27.277,27.277,0,0,1,4.346-.089h10.48a17.546,17.546,0,0,1,4.672.237c.091.025.558.186.569.192.119.055.788.508.613.362a2.147,2.147,0,0,1,.777,1c.239.444-.026-.3.094.24a2.686,2.686,0,0,1,.1.651,4.52,4.52,0,0,1-.227,2,2.476,2.476,0,0,0,.861,3.284,2.419,2.419,0,0,0,3.284-.861,8.578,8.578,0,0,0-.908-9.1c-2.255-2.679-5.723-2.813-8.961-2.813H191.471c-3.19,0-6.617-.332-9.5,1.307a8.172,8.172,0,0,0-3.378,10.029,2.461,2.461,0,0,0,2.952,1.677,2.421,2.421,0,0,0,1.676-2.953Z"></path><path class="a" d="M179.826,114.939v-9.407h30.315v9.407"></path><path class="b" d="M182.226,114.939v-9.407l-2.4,2.4h30.315l-2.4-2.4v9.407l2.4-2.4H179.826c-3.088,0-3.094,4.8,0,4.8h30.315a2.435,2.435,0,0,0,2.4-2.4v-9.407a2.435,2.435,0,0,0-2.4-2.4H179.826a2.435,2.435,0,0,0-2.4,2.4v9.407C177.426,118.028,182.226,118.033,182.226,114.939Z"></path><path class="c" d="M193.425,54.025c-.958,0-20.662.019-22.262.019V69.228h22.218C193.381,67.521,193.425,54.508,193.425,54.025Z"></path><path class="b" d="M195.781,69.228c0-5.068.04-10.135.044-15.2a2.435,2.435,0,0,0-2.4-2.4q-9.464,0-18.927.017l-3.335,0a2.435,2.435,0,0,0-2.4,2.4V69.228c0,3.089,4.8,3.094,4.8,0V54.044l-2.4,2.4q9.63,0,19.259-.017l3,0-2.4-2.4c0,5.068-.043,10.135-.044,15.2,0,3.089,4.8,3.094,4.8,0Z"></path><path class="b" d="M179.894,54.044V71.949a2.4,2.4,0,0,0,4.8,0V69.228a2.4,2.4,0,1,0-4.8,0v2.721a2.4,2.4,0,0,0,4.8,0v-17.9a2.4,2.4,0,1,0-4.8,0Z"></path><path class="f" d="M104.035,68.634H206.5v11H104.035Z"></path><path class="b" d="M104.035,71.034H206.5l-2.4-2.4v11l2.4-2.4H104.035l2.4,2.4v-11c0-3.088-4.8-3.093-4.8,0v11a2.435,2.435,0,0,0,2.4,2.4H206.5a2.435,2.435,0,0,0,2.4-2.4v-11a2.435,2.435,0,0,0-2.4-2.4H104.035C100.947,66.234,100.941,71.034,104.035,71.034Z"></path><path class="b" d="M146.246,114.939V80.329c0-3.089-4.8-3.094-4.8,0v34.61c0,3.089,4.8,3.094,4.8,0Z"></path></g>',
		3
	),
	Zd = [Gd];
function Qd(e, t) {
	return ne(), ye("svg", Kd, Zd);
}
const Jd = lt(Wd, [["render", Qd]]),
	Yd = {},
	Xd = {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "rgba(235, 235, 235, 0.64)",
		width: "20",
		height: "20",
	},
	e0 = F(
		"path",
		{
			d: "M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z",
		},
		null,
		-1
	),
	t0 = [e0];
function n0(e, t) {
	return ne(), ye("svg", Xd, t0);
}
const r0 = lt(Yd, [["render", n0]]),
	o0 = {},
	s0 = {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "rgba(235, 235, 235, 0.64)",
		width: "20",
		height: "20",
	},
	i0 = F(
		"path",
		{
			d: "M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z",
		},
		null,
		-1
	),
	l0 = [i0];
function a0(e, t) {
	return ne(), ye("svg", s0, l0);
}
const c0 = lt(o0, [["render", a0]]),
	Ln = { _origin: "https://api.emailjs.com" },
	u0 = (e, t = "https://api.emailjs.com") => {
		(Ln._userID = e), (Ln._origin = t);
	},
	ya = (e, t, n) => {
		if (!e)
			throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
		if (!t)
			throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
		if (!n)
			throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
		return !0;
	};
class _i {
	constructor(t) {
		(this.status = t ? t.status : 0),
			(this.text = t ? t.responseText : "Network Error");
	}
}
const _a = (e, t, n = {}) =>
		new Promise((r, o) => {
			const s = new XMLHttpRequest();
			s.addEventListener("load", ({ target: i }) => {
				const l = new _i(i);
				l.status === 200 || l.text === "OK" ? r(l) : o(l);
			}),
				s.addEventListener("error", ({ target: i }) => {
					o(new _i(i));
				}),
				s.open("POST", Ln._origin + e, !0),
				Object.keys(n).forEach((i) => {
					s.setRequestHeader(i, n[i]);
				}),
				s.send(t);
		}),
	f0 = (e, t, n, r) => {
		const o = r || Ln._userID;
		return (
			ya(o, e, t),
			_a(
				"/api/v1.0/email/send",
				JSON.stringify({
					lib_version: "3.11.0",
					user_id: o,
					service_id: e,
					template_id: t,
					template_params: n,
				}),
				{ "Content-type": "application/json" }
			)
		);
	},
	d0 = (e) => {
		let t;
		if (
			(typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
			!t || t.nodeName !== "FORM")
		)
			throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
		return t;
	},
	p0 = (e, t, n, r) => {
		const o = r || Ln._userID,
			s = d0(n);
		ya(o, e, t);
		const i = new FormData(s);
		return (
			i.append("lib_version", "3.11.0"),
			i.append("service_id", e),
			i.append("template_id", t),
			i.append("user_id", o),
			_a("/api/v1.0/email/send-form", i)
		);
	},
	h0 = { init: u0, send: f0, sendForm: p0 };
const g0 = "service_l56qw5o",
	m0 = "template_hsg31yy",
	b0 = "Vc7UiEAGTRzOCP8H7",
	v0 = {
		data() {
			return {
				formData: { user_name: "", user_email: "", message: "" },
				isSubmitting: !1,
			};
		},
		methods: {
			async submitForm(e) {
				e.preventDefault();
				const t = this.$refs.formRef;
				if (t.checkValidity()) {
					this.isSubmitting = !0;
					try {
						await this.sendEmail(t),
							console.log("Email sent successfully!"),
							(this.formData.user_name = ""),
							(this.formData.user_email = ""),
							(this.formData.message = "");
					} catch (n) {
						console.error("Failed to send email:", n);
					} finally {
						this.isSubmitting = !1;
					}
				} else console.warn("Form is not valid");
			},
			sendEmail(e) {
				return h0
					.sendForm(g0, m0, e, b0)
					.then((t) => {
						console.log("SUCCESS!", t.text);
					})
					.catch((t) => {
						throw (console.log("FAILED...", t.text), t);
					});
			},
		},
	},
	is = (e) => (Qo("data-v-9dec127e"), (e = e()), Jo(), e),
	y0 = { class: "emailform max-w-lg mx-auto" },
	_0 = { class: "relative z-0 w-full mb-5 group" },
	w0 = is(() =>
		F(
			"label",
			{
				for: "user_name",
				class:
					"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
			},
			" Name ",
			-1
		)
	),
	x0 = { class: "relative z-0 w-full mb-5 group" },
	k0 = is(() =>
		F(
			"label",
			{
				for: "user_email",
				class:
					"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
			},
			" Email ",
			-1
		)
	),
	C0 = { class: "relative z-0 w-full mb-5 group" },
	$0 = is(() =>
		F(
			"label",
			{
				for: "message",
				class:
					"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
			},
			" Message ",
			-1
		)
	),
	P0 = ["disabled"],
	E0 = { key: 0 };
function S0(e, t, n, r, o, s) {
	return (
		ne(),
		ye("div", y0, [
			F(
				"form",
				{
					onSubmit:
						t[3] || (t[3] = (...i) => s.submitForm && s.submitForm(...i)),
					ref: "formRef",
				},
				[
					F("div", _0, [
						w0,
						Qr(
							F(
								"input",
								{
									"onUpdate:modelValue":
										t[0] || (t[0] = (i) => (o.formData.user_name = i)),
									type: "text",
									id: "user_name",
									name: "user_name",
									class:
										"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
									required: "",
								},
								null,
								512
							),
							[[to, o.formData.user_name]]
						),
					]),
					F("div", x0, [
						k0,
						Qr(
							F(
								"input",
								{
									"onUpdate:modelValue":
										t[1] || (t[1] = (i) => (o.formData.user_email = i)),
									type: "email",
									id: "user_email",
									name: "user_email",
									class:
										"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
									required: "",
								},
								null,
								512
							),
							[[to, o.formData.user_email]]
						),
					]),
					F("div", C0, [
						$0,
						Qr(
							F(
								"textarea",
								{
									"onUpdate:modelValue":
										t[2] || (t[2] = (i) => (o.formData.message = i)),
									id: "message",
									name: "message",
									class:
										"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
									required: "",
								},
								null,
								512
							),
							[[to, o.formData.message]]
						),
					]),
					F(
						"button",
						{
							type: "submit",
							disabled: o.isSubmitting,
							class:
								"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
						},
						" Send ",
						8,
						P0
					),
					o.isSubmitting ? (ne(), ye("span", E0, "Sending...")) : wt("", !0),
				],
				544
			),
		])
	);
}
const T0 = lt(v0, [
	["render", S0],
	["__scopeId", "data-v-9dec127e"],
]);
const R0 = {
		props: { isOpen: Boolean },
		methods: {
			closeModal() {
				this.$emit("close");
			},
			handleFormSubmit(e) {
				console.log("Form data submitted:", e), this.closeModal();
			},
		},
		components: { ContactMeForm: T0 },
	},
	O0 = { key: 0, class: "modal-overlay" },
	z0 = { class: "modal" };
function M0(e, t, n, r, o, s) {
	const i = sn("ContactMeForm");
	return n.isOpen
		? (ne(),
		  ye("div", O0, [
				F("div", z0, [
					F(
						"button",
						{
							onClick:
								t[0] || (t[0] = (...l) => s.closeModal && s.closeModal(...l)),
							class: "close-button",
						},
						"×"
					),
					W(i, { onSubmit: s.handleFormSubmit }, null, 8, ["onSubmit"]),
				]),
		  ]))
		: wt("", !0);
}
const A0 = lt(R0, [
	["render", M0],
	["__scopeId", "data-v-d08ca2cb"],
]);
Un({});
function I0() {
	for (var e = 0, t, n, r = ""; e < arguments.length; )
		(t = arguments[e++]) && (n = wa(t)) && (r && (r += " "), (r += n));
	return r;
}
function wa(e) {
	if (typeof e == "string") return e;
	for (var t, n = "", r = 0; r < e.length; r++)
		e[r] && (t = wa(e[r])) && (n && (n += " "), (n += t));
	return n;
}
var ls = "-";
function N0(e) {
	var t = j0(e),
		n = e.conflictingClassGroups,
		r = e.conflictingClassGroupModifiers,
		o = r === void 0 ? {} : r;
	function s(l) {
		var a = l.split(ls);
		return a[0] === "" && a.length !== 1 && a.shift(), xa(a, t) || H0(l);
	}
	function i(l, a) {
		var c = n[l] || [];
		return a && o[l] ? [].concat(c, o[l]) : c;
	}
	return { getClassGroupId: s, getConflictingClassGroupIds: i };
}
function xa(e, t) {
	var i;
	if (e.length === 0) return t.classGroupId;
	var n = e[0],
		r = t.nextPart.get(n),
		o = r ? xa(e.slice(1), r) : void 0;
	if (o) return o;
	if (t.validators.length !== 0) {
		var s = e.join(ls);
		return (i = t.validators.find(function (l) {
			var a = l.validator;
			return a(s);
		})) == null
			? void 0
			: i.classGroupId;
	}
}
var wi = /^\[(.+)\]$/;
function H0(e) {
	if (wi.test(e)) {
		var t = wi.exec(e)[1],
			n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
		if (n) return "arbitrary.." + n;
	}
}
function j0(e) {
	var t = e.theme,
		n = e.prefix,
		r = { nextPart: new Map(), validators: [] },
		o = L0(Object.entries(e.classGroups), n);
	return (
		o.forEach(function (s) {
			var i = s[0],
				l = s[1];
			Eo(l, r, i, t);
		}),
		r
	);
}
function Eo(e, t, n, r) {
	e.forEach(function (o) {
		if (typeof o == "string") {
			var s = o === "" ? t : xi(t, o);
			s.classGroupId = n;
			return;
		}
		if (typeof o == "function") {
			if (F0(o)) {
				Eo(o(r), t, n, r);
				return;
			}
			t.validators.push({ validator: o, classGroupId: n });
			return;
		}
		Object.entries(o).forEach(function (i) {
			var l = i[0],
				a = i[1];
			Eo(a, xi(t, l), n, r);
		});
	});
}
function xi(e, t) {
	var n = e;
	return (
		t.split(ls).forEach(function (r) {
			n.nextPart.has(r) ||
				n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
				(n = n.nextPart.get(r));
		}),
		n
	);
}
function F0(e) {
	return e.isThemeGetter;
}
function L0(e, t) {
	return t
		? e.map(function (n) {
				var r = n[0],
					o = n[1],
					s = o.map(function (i) {
						return typeof i == "string"
							? t + i
							: typeof i == "object"
							? Object.fromEntries(
									Object.entries(i).map(function (l) {
										var a = l[0],
											c = l[1];
										return [t + a, c];
									})
							  )
							: i;
					});
				return [r, s];
		  })
		: e;
}
function D0(e) {
	if (e < 1) return { get: function () {}, set: function () {} };
	var t = 0,
		n = new Map(),
		r = new Map();
	function o(s, i) {
		n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
	}
	return {
		get: function (s) {
			var i = n.get(s);
			if (i !== void 0) return i;
			if ((i = r.get(s)) !== void 0) return o(s, i), i;
		},
		set: function (s, i) {
			n.has(s) ? n.set(s, i) : o(s, i);
		},
	};
}
var ka = "!";
function B0(e) {
	var t = e.separator || ":",
		n = t.length === 1,
		r = t[0],
		o = t.length;
	return function (s) {
		for (var i = [], l = 0, a = 0, c, u = 0; u < s.length; u++) {
			var f = s[u];
			if (l === 0) {
				if (f === r && (n || s.slice(u, u + o) === t)) {
					i.push(s.slice(a, u)), (a = u + o);
					continue;
				}
				if (f === "/") {
					c = u;
					continue;
				}
			}
			f === "[" ? l++ : f === "]" && l--;
		}
		var h = i.length === 0 ? s : s.substring(a),
			g = h.startsWith(ka),
			v = g ? h.substring(1) : h,
			y = c && c > a ? c - a : void 0;
		return {
			modifiers: i,
			hasImportantModifier: g,
			baseClassName: v,
			maybePostfixModifierPosition: y,
		};
	};
}
function V0(e) {
	if (e.length <= 1) return e;
	var t = [],
		n = [];
	return (
		e.forEach(function (r) {
			var o = r[0] === "[";
			o ? (t.push.apply(t, n.sort().concat([r])), (n = [])) : n.push(r);
		}),
		t.push.apply(t, n.sort()),
		t
	);
}
function q0(e) {
	return { cache: D0(e.cacheSize), splitModifiers: B0(e), ...N0(e) };
}
var U0 = /\s+/;
function W0(e, t) {
	var n = t.splitModifiers,
		r = t.getClassGroupId,
		o = t.getConflictingClassGroupIds,
		s = new Set();
	return e
		.trim()
		.split(U0)
		.map(function (i) {
			var l = n(i),
				a = l.modifiers,
				c = l.hasImportantModifier,
				u = l.baseClassName,
				f = l.maybePostfixModifierPosition,
				h = r(f ? u.substring(0, f) : u),
				g = !!f;
			if (!h) {
				if (!f) return { isTailwindClass: !1, originalClassName: i };
				if (((h = r(u)), !h))
					return { isTailwindClass: !1, originalClassName: i };
				g = !1;
			}
			var v = V0(a).join(":"),
				y = c ? v + ka : v;
			return {
				isTailwindClass: !0,
				modifierId: y,
				classGroupId: h,
				originalClassName: i,
				hasPostfixModifier: g,
			};
		})
		.reverse()
		.filter(function (i) {
			if (!i.isTailwindClass) return !0;
			var l = i.modifierId,
				a = i.classGroupId,
				c = i.hasPostfixModifier,
				u = l + a;
			return s.has(u)
				? !1
				: (s.add(u),
				  o(a, c).forEach(function (f) {
						return s.add(l + f);
				  }),
				  !0);
		})
		.reverse()
		.map(function (i) {
			return i.originalClassName;
		})
		.join(" ");
}
function K0() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n];
	var r,
		o,
		s,
		i = l;
	function l(c) {
		var u = t[0],
			f = t.slice(1),
			h = f.reduce(function (g, v) {
				return v(g);
			}, u());
		return (r = q0(h)), (o = r.cache.get), (s = r.cache.set), (i = a), a(c);
	}
	function a(c) {
		var u = o(c);
		if (u) return u;
		var f = W0(c, r);
		return s(c, f), f;
	}
	return function () {
		return i(I0.apply(null, arguments));
	};
}
function pe(e) {
	var t = function (n) {
		return n[e] || [];
	};
	return (t.isThemeGetter = !0), t;
}
var Ca = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	G0 = /^\d+\/\d+$/,
	Z0 = new Set(["px", "full", "screen"]),
	Q0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	J0 =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	Y0 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Be(e) {
	return Ht(e) || Z0.has(e) || G0.test(e) || So(e);
}
function So(e) {
	return Ut(e, "length", op);
}
function X0(e) {
	return Ut(e, "size", $a);
}
function ep(e) {
	return Ut(e, "position", $a);
}
function tp(e) {
	return Ut(e, "url", sp);
}
function tr(e) {
	return Ut(e, "number", Ht);
}
function Ht(e) {
	return !Number.isNaN(Number(e));
}
function np(e) {
	return e.endsWith("%") && Ht(e.slice(0, -1));
}
function yn(e) {
	return ki(e) || Ut(e, "number", ki);
}
function X(e) {
	return Ca.test(e);
}
function _n() {
	return !0;
}
function mt(e) {
	return Q0.test(e);
}
function rp(e) {
	return Ut(e, "", ip);
}
function Ut(e, t, n) {
	var r = Ca.exec(e);
	return r ? (r[1] ? r[1] === t : n(r[2])) : !1;
}
function op(e) {
	return J0.test(e);
}
function $a() {
	return !1;
}
function sp(e) {
	return e.startsWith("url(");
}
function ki(e) {
	return Number.isInteger(Number(e));
}
function ip(e) {
	return Y0.test(e);
}
function lp() {
	var e = pe("colors"),
		t = pe("spacing"),
		n = pe("blur"),
		r = pe("brightness"),
		o = pe("borderColor"),
		s = pe("borderRadius"),
		i = pe("borderSpacing"),
		l = pe("borderWidth"),
		a = pe("contrast"),
		c = pe("grayscale"),
		u = pe("hueRotate"),
		f = pe("invert"),
		h = pe("gap"),
		g = pe("gradientColorStops"),
		v = pe("gradientColorStopPositions"),
		y = pe("inset"),
		P = pe("margin"),
		C = pe("opacity"),
		x = pe("padding"),
		M = pe("saturate"),
		R = pe("scale"),
		V = pe("sepia"),
		D = pe("skew"),
		ie = pe("space"),
		de = pe("translate"),
		be = function () {
			return ["auto", "contain", "none"];
		},
		Z = function () {
			return ["auto", "hidden", "clip", "visible", "scroll"];
		},
		K = function () {
			return ["auto", X, t];
		},
		j = function () {
			return [X, t];
		},
		q = function () {
			return ["", Be];
		},
		me = function () {
			return ["auto", Ht, X];
		},
		ve = function () {
			return [
				"bottom",
				"center",
				"left",
				"left-bottom",
				"left-top",
				"right",
				"right-bottom",
				"right-top",
				"top",
			];
		},
		Q = function () {
			return ["solid", "dashed", "dotted", "double", "none"];
		},
		J = function () {
			return [
				"normal",
				"multiply",
				"screen",
				"overlay",
				"darken",
				"lighten",
				"color-dodge",
				"color-burn",
				"hard-light",
				"soft-light",
				"difference",
				"exclusion",
				"hue",
				"saturation",
				"color",
				"luminosity",
				"plus-lighter",
			];
		},
		G = function () {
			return [
				"start",
				"end",
				"center",
				"between",
				"around",
				"evenly",
				"stretch",
			];
		},
		Pe = function () {
			return ["", "0", X];
		},
		Me = function () {
			return [
				"auto",
				"avoid",
				"all",
				"avoid-page",
				"page",
				"left",
				"right",
				"column",
			];
		},
		ke = function () {
			return [Ht, tr];
		},
		_e = function () {
			return [Ht, X];
		};
	return {
		cacheSize: 500,
		theme: {
			colors: [_n],
			spacing: [Be],
			blur: ["none", "", mt, X],
			brightness: ke(),
			borderColor: [e],
			borderRadius: ["none", "", "full", mt, X],
			borderSpacing: j(),
			borderWidth: q(),
			contrast: ke(),
			grayscale: Pe(),
			hueRotate: _e(),
			invert: Pe(),
			gap: j(),
			gradientColorStops: [e],
			gradientColorStopPositions: [np, So],
			inset: K(),
			margin: K(),
			opacity: ke(),
			padding: j(),
			saturate: ke(),
			scale: ke(),
			sepia: Pe(),
			skew: _e(),
			space: j(),
			translate: j(),
		},
		classGroups: {
			aspect: [{ aspect: ["auto", "square", "video", X] }],
			container: ["container"],
			columns: [{ columns: [mt] }],
			"break-after": [{ "break-after": Me() }],
			"break-before": [{ "break-before": Me() }],
			"break-inside": [
				{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
			],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden",
			],
			float: [{ float: ["right", "left", "none"] }],
			clear: [{ clear: ["left", "right", "both", "none"] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [
				{ object: ["contain", "cover", "fill", "none", "scale-down"] },
			],
			"object-position": [{ object: [].concat(ve(), [X]) }],
			overflow: [{ overflow: Z() }],
			"overflow-x": [{ "overflow-x": Z() }],
			"overflow-y": [{ "overflow-y": Z() }],
			overscroll: [{ overscroll: be() }],
			"overscroll-x": [{ "overscroll-x": be() }],
			"overscroll-y": [{ "overscroll-y": be() }],
			position: ["static", "fixed", "absolute", "relative", "sticky"],
			inset: [{ inset: [y] }],
			"inset-x": [{ "inset-x": [y] }],
			"inset-y": [{ "inset-y": [y] }],
			start: [{ start: [y] }],
			end: [{ end: [y] }],
			top: [{ top: [y] }],
			right: [{ right: [y] }],
			bottom: [{ bottom: [y] }],
			left: [{ left: [y] }],
			visibility: ["visible", "invisible", "collapse"],
			z: [{ z: ["auto", yn] }],
			basis: [{ basis: K() }],
			"flex-direction": [
				{ flex: ["row", "row-reverse", "col", "col-reverse"] },
			],
			"flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
			flex: [{ flex: ["1", "auto", "initial", "none", X] }],
			grow: [{ grow: Pe() }],
			shrink: [{ shrink: Pe() }],
			order: [{ order: ["first", "last", "none", yn] }],
			"grid-cols": [{ "grid-cols": [_n] }],
			"col-start-end": [{ col: ["auto", { span: ["full", yn] }, X] }],
			"col-start": [{ "col-start": me() }],
			"col-end": [{ "col-end": me() }],
			"grid-rows": [{ "grid-rows": [_n] }],
			"row-start-end": [{ row: ["auto", { span: [yn] }, X] }],
			"row-start": [{ "row-start": me() }],
			"row-end": [{ "row-end": me() }],
			"grid-flow": [
				{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
			],
			"auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", X] }],
			"auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", X] }],
			gap: [{ gap: [h] }],
			"gap-x": [{ "gap-x": [h] }],
			"gap-y": [{ "gap-y": [h] }],
			"justify-content": [{ justify: ["normal"].concat(G()) }],
			"justify-items": [
				{ "justify-items": ["start", "end", "center", "stretch"] },
			],
			"justify-self": [
				{ "justify-self": ["auto", "start", "end", "center", "stretch"] },
			],
			"align-content": [{ content: ["normal"].concat(G(), ["baseline"]) }],
			"align-items": [
				{ items: ["start", "end", "center", "baseline", "stretch"] },
			],
			"align-self": [
				{ self: ["auto", "start", "end", "center", "stretch", "baseline"] },
			],
			"place-content": [{ "place-content": [].concat(G(), ["baseline"]) }],
			"place-items": [
				{ "place-items": ["start", "end", "center", "baseline", "stretch"] },
			],
			"place-self": [
				{ "place-self": ["auto", "start", "end", "center", "stretch"] },
			],
			p: [{ p: [x] }],
			px: [{ px: [x] }],
			py: [{ py: [x] }],
			ps: [{ ps: [x] }],
			pe: [{ pe: [x] }],
			pt: [{ pt: [x] }],
			pr: [{ pr: [x] }],
			pb: [{ pb: [x] }],
			pl: [{ pl: [x] }],
			m: [{ m: [P] }],
			mx: [{ mx: [P] }],
			my: [{ my: [P] }],
			ms: [{ ms: [P] }],
			me: [{ me: [P] }],
			mt: [{ mt: [P] }],
			mr: [{ mr: [P] }],
			mb: [{ mb: [P] }],
			ml: [{ ml: [P] }],
			"space-x": [{ "space-x": [ie] }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": [ie] }],
			"space-y-reverse": ["space-y-reverse"],
			w: [{ w: ["auto", "min", "max", "fit", X, t] }],
			"min-w": [{ "min-w": ["min", "max", "fit", X, Be] }],
			"max-w": [
				{
					"max-w": [
						"0",
						"none",
						"full",
						"min",
						"max",
						"fit",
						"prose",
						{ screen: [mt] },
						mt,
						X,
					],
				},
			],
			h: [{ h: [X, t, "auto", "min", "max", "fit"] }],
			"min-h": [{ "min-h": ["min", "max", "fit", X, Be] }],
			"max-h": [{ "max-h": [X, t, "min", "max", "fit"] }],
			"font-size": [{ text: ["base", mt, So] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [
				{
					font: [
						"thin",
						"extralight",
						"light",
						"normal",
						"medium",
						"semibold",
						"bold",
						"extrabold",
						"black",
						tr,
					],
				},
			],
			"font-family": [{ font: [_n] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
			tracking: [
				{
					tracking: [
						"tighter",
						"tight",
						"normal",
						"wide",
						"wider",
						"widest",
						X,
					],
				},
			],
			"line-clamp": [{ "line-clamp": ["none", Ht, tr] }],
			leading: [
				{
					leading: [
						"none",
						"tight",
						"snug",
						"normal",
						"relaxed",
						"loose",
						X,
						Be,
					],
				},
			],
			"list-image": [{ "list-image": ["none", X] }],
			"list-style-type": [{ list: ["none", "disc", "decimal", X] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"placeholder-color": [{ placeholder: [e] }],
			"placeholder-opacity": [{ "placeholder-opacity": [C] }],
			"text-alignment": [
				{ text: ["left", "center", "right", "justify", "start", "end"] },
			],
			"text-color": [{ text: [e] }],
			"text-opacity": [{ "text-opacity": [C] }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline",
			],
			"text-decoration-style": [{ decoration: [].concat(Q(), ["wavy"]) }],
			"text-decoration-thickness": [{ decoration: ["auto", "from-font", Be] }],
			"underline-offset": [{ "underline-offset": ["auto", X, Be] }],
			"text-decoration-color": [{ decoration: [e] }],
			"text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
			"text-overflow": ["truncate", "text-ellipsis", "text-clip"],
			indent: [{ indent: j() }],
			"vertical-align": [
				{
					align: [
						"baseline",
						"top",
						"middle",
						"bottom",
						"text-top",
						"text-bottom",
						"sub",
						"super",
						X,
					],
				},
			],
			whitespace: [
				{
					whitespace: [
						"normal",
						"nowrap",
						"pre",
						"pre-line",
						"pre-wrap",
						"break-spaces",
					],
				},
			],
			break: [{ break: ["normal", "words", "all", "keep"] }],
			hyphens: [{ hyphens: ["none", "manual", "auto"] }],
			content: [{ content: ["none", X] }],
			"bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
			"bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
			"bg-opacity": [{ "bg-opacity": [C] }],
			"bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
			"bg-position": [{ bg: [].concat(ve(), [ep]) }],
			"bg-repeat": [
				{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
			],
			"bg-size": [{ bg: ["auto", "cover", "contain", X0] }],
			"bg-image": [
				{
					bg: [
						"none",
						{ "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
						tp,
					],
				},
			],
			"bg-color": [{ bg: [e] }],
			"gradient-from-pos": [{ from: [v] }],
			"gradient-via-pos": [{ via: [v] }],
			"gradient-to-pos": [{ to: [v] }],
			"gradient-from": [{ from: [g] }],
			"gradient-via": [{ via: [g] }],
			"gradient-to": [{ to: [g] }],
			rounded: [{ rounded: [s] }],
			"rounded-s": [{ "rounded-s": [s] }],
			"rounded-e": [{ "rounded-e": [s] }],
			"rounded-t": [{ "rounded-t": [s] }],
			"rounded-r": [{ "rounded-r": [s] }],
			"rounded-b": [{ "rounded-b": [s] }],
			"rounded-l": [{ "rounded-l": [s] }],
			"rounded-ss": [{ "rounded-ss": [s] }],
			"rounded-se": [{ "rounded-se": [s] }],
			"rounded-ee": [{ "rounded-ee": [s] }],
			"rounded-es": [{ "rounded-es": [s] }],
			"rounded-tl": [{ "rounded-tl": [s] }],
			"rounded-tr": [{ "rounded-tr": [s] }],
			"rounded-br": [{ "rounded-br": [s] }],
			"rounded-bl": [{ "rounded-bl": [s] }],
			"border-w": [{ border: [l] }],
			"border-w-x": [{ "border-x": [l] }],
			"border-w-y": [{ "border-y": [l] }],
			"border-w-s": [{ "border-s": [l] }],
			"border-w-e": [{ "border-e": [l] }],
			"border-w-t": [{ "border-t": [l] }],
			"border-w-r": [{ "border-r": [l] }],
			"border-w-b": [{ "border-b": [l] }],
			"border-w-l": [{ "border-l": [l] }],
			"border-opacity": [{ "border-opacity": [C] }],
			"border-style": [{ border: [].concat(Q(), ["hidden"]) }],
			"divide-x": [{ "divide-x": [l] }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": [l] }],
			"divide-y-reverse": ["divide-y-reverse"],
			"divide-opacity": [{ "divide-opacity": [C] }],
			"divide-style": [{ divide: Q() }],
			"border-color": [{ border: [o] }],
			"border-color-x": [{ "border-x": [o] }],
			"border-color-y": [{ "border-y": [o] }],
			"border-color-t": [{ "border-t": [o] }],
			"border-color-r": [{ "border-r": [o] }],
			"border-color-b": [{ "border-b": [o] }],
			"border-color-l": [{ "border-l": [o] }],
			"divide-color": [{ divide: [o] }],
			"outline-style": [{ outline: [""].concat(Q()) }],
			"outline-offset": [{ "outline-offset": [X, Be] }],
			"outline-w": [{ outline: [Be] }],
			"outline-color": [{ outline: [e] }],
			"ring-w": [{ ring: q() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: [e] }],
			"ring-opacity": [{ "ring-opacity": [C] }],
			"ring-offset-w": [{ "ring-offset": [Be] }],
			"ring-offset-color": [{ "ring-offset": [e] }],
			shadow: [{ shadow: ["", "inner", "none", mt, rp] }],
			"shadow-color": [{ shadow: [_n] }],
			opacity: [{ opacity: [C] }],
			"mix-blend": [{ "mix-blend": J() }],
			"bg-blend": [{ "bg-blend": J() }],
			filter: [{ filter: ["", "none"] }],
			blur: [{ blur: [n] }],
			brightness: [{ brightness: [r] }],
			contrast: [{ contrast: [a] }],
			"drop-shadow": [{ "drop-shadow": ["", "none", mt, X] }],
			grayscale: [{ grayscale: [c] }],
			"hue-rotate": [{ "hue-rotate": [u] }],
			invert: [{ invert: [f] }],
			saturate: [{ saturate: [M] }],
			sepia: [{ sepia: [V] }],
			"backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
			"backdrop-blur": [{ "backdrop-blur": [n] }],
			"backdrop-brightness": [{ "backdrop-brightness": [r] }],
			"backdrop-contrast": [{ "backdrop-contrast": [a] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
			"backdrop-invert": [{ "backdrop-invert": [f] }],
			"backdrop-opacity": [{ "backdrop-opacity": [C] }],
			"backdrop-saturate": [{ "backdrop-saturate": [M] }],
			"backdrop-sepia": [{ "backdrop-sepia": [V] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": [i] }],
			"border-spacing-x": [{ "border-spacing-x": [i] }],
			"border-spacing-y": [{ "border-spacing-y": [i] }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [
				{
					transition: [
						"none",
						"all",
						"",
						"colors",
						"opacity",
						"shadow",
						"transform",
						X,
					],
				},
			],
			duration: [{ duration: _e() }],
			ease: [{ ease: ["linear", "in", "out", "in-out", X] }],
			delay: [{ delay: _e() }],
			animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", X] }],
			transform: [{ transform: ["", "gpu", "none"] }],
			scale: [{ scale: [R] }],
			"scale-x": [{ "scale-x": [R] }],
			"scale-y": [{ "scale-y": [R] }],
			rotate: [{ rotate: [yn, X] }],
			"translate-x": [{ "translate-x": [de] }],
			"translate-y": [{ "translate-y": [de] }],
			"skew-x": [{ "skew-x": [D] }],
			"skew-y": [{ "skew-y": [D] }],
			"transform-origin": [
				{
					origin: [
						"center",
						"top",
						"top-right",
						"right",
						"bottom-right",
						"bottom",
						"bottom-left",
						"left",
						"top-left",
						X,
					],
				},
			],
			accent: [{ accent: ["auto", e] }],
			appearance: ["appearance-none"],
			cursor: [
				{
					cursor: [
						"auto",
						"default",
						"pointer",
						"wait",
						"text",
						"move",
						"help",
						"not-allowed",
						"none",
						"context-menu",
						"progress",
						"cell",
						"crosshair",
						"vertical-text",
						"alias",
						"copy",
						"no-drop",
						"grab",
						"grabbing",
						"all-scroll",
						"col-resize",
						"row-resize",
						"n-resize",
						"e-resize",
						"s-resize",
						"w-resize",
						"ne-resize",
						"nw-resize",
						"se-resize",
						"sw-resize",
						"ew-resize",
						"ns-resize",
						"nesw-resize",
						"nwse-resize",
						"zoom-in",
						"zoom-out",
						X,
					],
				},
			],
			"caret-color": [{ caret: [e] }],
			"pointer-events": [{ "pointer-events": ["none", "auto"] }],
			resize: [{ resize: ["none", "y", "x", ""] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scroll-m": [{ "scroll-m": j() }],
			"scroll-mx": [{ "scroll-mx": j() }],
			"scroll-my": [{ "scroll-my": j() }],
			"scroll-ms": [{ "scroll-ms": j() }],
			"scroll-me": [{ "scroll-me": j() }],
			"scroll-mt": [{ "scroll-mt": j() }],
			"scroll-mr": [{ "scroll-mr": j() }],
			"scroll-mb": [{ "scroll-mb": j() }],
			"scroll-ml": [{ "scroll-ml": j() }],
			"scroll-p": [{ "scroll-p": j() }],
			"scroll-px": [{ "scroll-px": j() }],
			"scroll-py": [{ "scroll-py": j() }],
			"scroll-ps": [{ "scroll-ps": j() }],
			"scroll-pe": [{ "scroll-pe": j() }],
			"scroll-pt": [{ "scroll-pt": j() }],
			"scroll-pr": [{ "scroll-pr": j() }],
			"scroll-pb": [{ "scroll-pb": j() }],
			"scroll-pl": [{ "scroll-pl": j() }],
			"snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: ["none", "x", "y", "both"] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [
				{
					touch: [
						"auto",
						"none",
						"pinch-zoom",
						"manipulation",
						{ pan: ["x", "left", "right", "y", "up", "down"] },
					],
				},
			],
			select: [{ select: ["none", "text", "all", "auto"] }],
			"will-change": [
				{ "will-change": ["auto", "scroll", "contents", "transform", X] },
			],
			fill: [{ fill: [e, "none"] }],
			"stroke-w": [{ stroke: [Be, tr] }],
			stroke: [{ stroke: [e, "none"] }],
			sr: ["sr-only", "not-sr-only"],
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left",
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: ["basis", "grow", "shrink"],
			gap: ["gap-x", "gap-y"],
			p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction",
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl",
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-s",
				"border-w-e",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l",
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l",
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml",
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl",
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
	};
}
var To = K0(lp);
function ap(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var Pa = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
	(function () {
		var t = {}.hasOwnProperty;
		function n() {
			for (var r = [], o = 0; o < arguments.length; o++) {
				var s = arguments[o];
				if (s) {
					var i = typeof s;
					if (i === "string" || i === "number") r.push(s);
					else if (Array.isArray(s)) {
						if (s.length) {
							var l = n.apply(null, s);
							l && r.push(l);
						}
					} else if (i === "object") {
						if (
							s.toString !== Object.prototype.toString &&
							!s.toString.toString().includes("[native code]")
						) {
							r.push(s.toString());
							continue;
						}
						for (var a in s) t.call(s, a) && s[a] && r.push(a);
					}
				}
			}
			return r.join(" ");
		}
		e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
	})();
})(Pa);
var cp = Pa.exports;
const up = ap(cp),
	Ci = (e) => To(e),
	fp = {
		0: "w-0 h-0",
		0.5: "w-0.5 h-0.5",
		1: "w-1 h-1",
		1.5: "w-1.5 h-1.5",
		10: "w-10 h-10",
		11: "w-11 h-11",
		12: "w-12 h-12",
		2: "w-2 h-2",
		2.5: "w-2.5 h-2.5",
		3: "w-3 h-3",
		4: "w-4 h-4",
		5: "w-5 h-5",
		6: "w-6 h-6",
		7: "w-7 h-7",
		8: "w-8 h-8",
		9: "w-9 h-9",
	},
	dp = {
		blue: "fill-blue-600",
		gray: "fill-gray-600 dark:fill-gray-300",
		green: "fill-green-500",
		pink: "fill-pink-600",
		purple: "fill-purple-600",
		red: "fill-red-600",
		white: "fill-white",
		yellow: "fill-yellow-400",
	};
function pp(e) {
	const t = fe(() => fp[e.size.value]),
		n = fe(() => dp[e.color.value]),
		r = fe(() => "text-gray-200 dark:text-gray-600"),
		o = fe(() => "animate-spin");
	return { spinnerClasses: fe(() => up(o.value, r.value, n.value, t.value)) };
}
const hp = F(
		"path",
		{
			d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
			fill: "currentColor",
		},
		null,
		-1
	),
	gp = F(
		"path",
		{
			d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
			fill: "currentFill",
		},
		null,
		-1
	),
	mp = [hp, gp],
	nr = ft({
		__name: "FwbSpinner",
		props: { color: { default: "blue" }, size: { default: "4" } },
		setup(e) {
			const t = e,
				{ spinnerClasses: n } = pp(mo(t));
			return (r, o) => (
				ne(),
				ye(
					"svg",
					{
						class: Ne(ce(n)),
						fill: "none",
						role: "status",
						viewBox: "0 0 100 101",
						xmlns: "http://www.w3.org/2000/svg",
					},
					mp,
					2
				)
			);
		},
	}),
	$i = {
		default: {
			default:
				"text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800",
			blue: "text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800",
			alternative:
				"font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600",
			dark: "text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700",
			light:
				"text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700",
			green:
				"focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800",
			red: "focus:outline-none text-white bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg dark:bg-red-600 dark:focus:ring-red-900",
			yellow:
				"focus:outline-none text-white bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg dark:focus:ring-yellow-900",
			purple:
				"focus:outline-none text-white bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg dark:bg-purple-600 dark:focus:ring-purple-900",
			pink: "focus:outline-none text-white bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg dark:bg-pink-600 dark:focus:ring-pink-900",
		},
		hover: {
			default: "hover:bg-blue-800 dark:hover:bg-blue-700",
			blue: "hover:bg-blue-800 dark:hover:bg-blue-700",
			alternative:
				"hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700",
			dark: "hover:bg-gray-900 dark:hover:bg-gray-700",
			light: "hover:bg-gray-100 dark:hover:border-gray-600",
			green: "hover:bg-green-800 dark:hover:bg-green-700",
			red: "hover:bg-red-800 dark:hover:bg-red-700",
			yellow: "hover:bg-yellow-500",
			purple: "hover:bg-purple-800 dark:hover:bg-purple-700",
			pink: "hover:bg-pink-800 dark:hover:bg-pink-700",
		},
	},
	Pi = {
		default: {
			dark: "text-gray-900 border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center dark:border-gray-600 dark:text-gray-400 dark:focus:ring-gray-800",
			default:
				"text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800",
			blue: "text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800",
			green:
				"text-green-700 border border-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:border-green-500 dark:text-green-500 dark:focus:ring-green-800",
			purple:
				"text-purple-700 border border-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm text-center dark:border-purple-400 dark:text-purple-400 dark:focus:ring-purple-900",
			pink: "text-pink-700 border border-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm text-center dark:border-pink-400 dark:text-pink-400 dark:focus:ring-pink-900",
			red: "text-red-700 border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center dark:border-red-500 dark:text-red-500 dark:focus:ring-red-900",
			yellow:
				"text-yellow-400 border border-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm text-center dark:border-yellow-300 dark:text-yellow-300 dark:focus:ring-yellow-900",
		},
		hover: {
			dark: "hover:text-white hover:bg-gray-900 dark:hover:text-white dark:hover:bg-gray-600",
			default:
				"hover:text-white hover:bg-blue-800 dark:hover:text-white dark:hover:bg-blue-600",
			blue: "hover:text-white hover:bg-blue-800 dark:hover:text-white dark:hover:bg-blue-600",
			green:
				"hover:text-white hover:bg-green-800 dark:hover:text-white dark:hover:bg-green-600",
			purple:
				"hover:text-white hover:bg-purple-800 dark:hover:text-white dark:hover:bg-purple-500",
			pink: "hover:text-white hover:bg-pink-800 dark:hover:text-white dark:hover:bg-pink-500",
			red: "hover:text-white hover:bg-red-800 dark:hover:text-white dark:hover:bg-red-600",
			yellow:
				"hover:text-white hover:bg-yellow-500 dark:hover:text-white dark:hover:bg-yellow-400",
		},
	},
	Ei = {
		hover: {
			"cyan-blue": "hover:bg-gradient-to-bl",
			"green-blue": "hover:bg-gradient-to-bl",
			"pink-orange": "hover:bg-gradient-to-bl",
			"purple-blue": "hover:bg-gradient-to-bl",
			"purple-pink": "hover:bg-gradient-to-l",
			"red-yellow": "hover:bg-gradient-to-bl",
			"teal-lime":
				"hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200",
			blue: "hover:bg-gradient-to-br",
			cyan: "hover:bg-gradient-to-br",
			green: "hover:bg-gradient-to-br",
			lime: "hover:bg-gradient-to-br",
			pink: "hover:bg-gradient-to-br",
			purple: "hover:bg-gradient-to-br",
			red: "hover:bg-gradient-to-br",
			teal: "hover:bg-gradient-to-br",
		},
		default: {
			"cyan-blue":
				"text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg",
			"green-blue":
				"text-white bg-gradient-to-br from-green-400 to-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg",
			"pink-orange":
				"text-white bg-gradient-to-br from-pink-500 to-orange-400 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg",
			"purple-blue":
				"text-white bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg",
			"purple-pink":
				"text-white bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg",
			"red-yellow":
				"text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg",
			"teal-lime":
				"text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg",
			blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg",
			cyan: "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg",
			green:
				"text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg",
			lime: "text-gray-900 bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg",
			pink: "text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg",
			purple:
				"text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg",
			red: "text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg",
			teal: "text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 rounded-lg",
		},
	},
	Si = {
		default: {
			"cyan-blue":
				"relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800",
			"green-blue":
				"relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
			"pink-orange":
				"relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800",
			"purple-blue":
				"relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
			"purple-pink":
				"relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800",
			"red-yellow":
				"relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 dark:text-white focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400",
			"teal-lime":
				"relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 dark:text-white focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800",
		},
		hover: {
			"cyan-blue":
				"group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white",
			"green-blue":
				"group-hover:from-green-400 group-hover:to-blue-600 hover:text-white",
			"pink-orange":
				"group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white",
			"purple-blue":
				"group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white",
			"purple-pink":
				"group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white",
			"red-yellow":
				"group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:hover:text-gray-900",
			"teal-lime":
				"group-hover:from-teal-300 group-hover:to-lime-300 dark:hover:text-gray-900",
		},
	},
	bp = {
		xs: "text-xs px-2 py-1",
		sm: "text-sm px-3 py-1.5",
		md: "text-sm px-4 py-2",
		lg: "text-base px-5 py-2.5",
		xl: "text-base px-6 py-3",
	},
	vp = {
		xs: "text-xs p-1",
		sm: "text-sm p-1.5",
		md: "text-sm p-2",
		lg: "text-base p-2.5",
		xl: "text-base p-3",
	},
	Ti = {
		blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
		cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
		green:
			"shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
		lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
		pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
		purple:
			"shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80",
		red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80",
		teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80",
	},
	io = ["blue", "green", "cyan", "teal", "lime", "red", "pink", "purple"],
	yp = ["alternative", "light"];
function _p(e) {
	const t = du(),
		n = fe(() => (e.square.value ? vp[e.size.value] : bp[e.size.value])),
		r = fe(() => {
			const s = !!e.gradient.value,
				i = !!e.color.value,
				l = e.outline.value;
			let a = "",
				c = "";
			if (s && l)
				io.includes(e.gradient.value)
					? console.warn(
							`cannot use outline prop with "${e.gradient.value}" gradient`
					  )
					: ((c = Si.default[e.gradient.value]),
					  e.disabled.value || (a = Si.hover[e.gradient.value]));
			else if (s)
				(c = Ei.default[e.gradient.value]),
					e.disabled.value || (a = Ei.hover[e.gradient.value]);
			else if (i && l)
				if (yp.includes(e.color.value))
					console.warn(`cannot use outline prop with "${e.color.value}" color`);
				else {
					const f = e.color.value;
					(c = Pi.default[f]), e.disabled.value || (a = Pi.hover[f]);
				}
			else {
				const f = e.color.value;
				(c = $i.default[f]), e.disabled.value || (a = $i.hover[f]);
			}
			let u = "";
			return (
				e.shadow.value === ""
					? e.gradient.value &&
					  io.includes(e.gradient.value) &&
					  (u = Ti[e.gradient.value])
					: typeof e.shadow.value == "string" &&
					  io.includes(e.shadow.value) &&
					  (u = Ti[e.shadow.value]),
				[
					c,
					a,
					u,
					e.pill.value && "!rounded-full",
					e.disabled.value && "cursor-not-allowed opacity-50",
					s && l ? "p-0.5" : n.value,
					(t.prefix || t.suffix || e.loading.value) &&
						"inline-flex items-center",
					e.class.value,
				]
					.filter((f) => f)
					.join(" ")
			);
		}),
		o = fe(() =>
			e.gradient.value && e.outline.value
				? [
						"relative bg-white dark:bg-gray-900 rounded-md inline-flex items-center",
						n.value,
						e.disabled.value
							? ""
							: "group-hover:bg-opacity-0 transition-all ease-in duration-75",
				  ]
						.filter((s) => s)
						.join(" ")
				: ""
		);
	return { wrapperClasses: r.value, spanClasses: o.value };
}
function wp(e) {
	const t = { xs: "2.5", sm: "3", md: "4", lg: "5", xl: "6" },
		n = fe(() => t[e.size.value]);
	return {
		color: fe(() =>
			e.outline.value
				? e.gradient.value
					? e.gradient.value.includes("purple")
						? "purple"
						: e.gradient.value.includes("blue")
						? "blue"
						: e.gradient.value.includes("pink")
						? "pink"
						: e.gradient.value.includes("red")
						? "red"
						: "white"
					: ["alternative", "dark", "light"].includes(e.color.value)
					? "white"
					: e.color.value === "default"
					? "blue"
					: e.color.value
				: "white"
		),
		size: n,
	};
}
const xp = { key: 0, class: "mr-2" },
	kp = { key: 0, class: "mr-2" },
	Cp = { key: 1, class: "ml-2" },
	$p = { key: 1, class: "ml-2" },
	wn = ft({
		__name: "FwbButton",
		props: {
			class: { default: "" },
			color: { default: "default" },
			gradient: { default: null },
			size: { default: "md" },
			shadow: { default: null },
			pill: { type: Boolean, default: !1 },
			square: { type: Boolean, default: !1 },
			outline: { type: Boolean, default: !1 },
			loading: { type: Boolean, default: !1 },
			loadingPosition: { default: "prefix" },
			disabled: { type: Boolean, default: !1 },
			href: { default: "" },
			tag: { default: "a" },
		},
		setup(e) {
			const t = e,
				n = _p(mo(t)),
				r = fe(() => Ci(n.wrapperClasses)),
				o = fe(() => Ci(n.spanClasses)),
				s = fe(() => t.outline && t.gradient),
				i = fe(() => t.loading && t.loadingPosition === "prefix"),
				l = fe(() => t.loading && t.loadingPosition === "suffix"),
				{ color: a, size: c } = wp(mo(t)),
				u = t.tag !== "a" ? sn(t.tag) : "a",
				f = t.href ? u : "button",
				h = t.tag === "router-link" || t.tag === "nuxt-link" ? "to" : "href";
			return (g, v) => (
				ne(),
				Ue(
					Il(ce(f)),
					al({
						class: r.value,
						[ce(h) || ""]: g.href,
						disabled: ce(f) === "button" && g.disabled,
					}),
					{
						default: ae(() => [
							!s.value && (g.$slots.prefix || i.value)
								? (ne(),
								  ye("div", xp, [
										i.value
											? (ne(),
											  Ue(nr, { key: 0, color: ce(a), size: ce(c) }, null, 8, [
													"color",
													"size",
											  ]))
											: Fe(g.$slots, "prefix", { key: 1 }),
								  ]))
								: wt("", !0),
							F(
								"span",
								{ class: Ne(o.value) },
								[
									s.value && (g.$slots.prefix || i.value)
										? (ne(),
										  ye("span", kp, [
												i.value
													? (ne(),
													  Ue(
															nr,
															{ key: 0, color: ce(a), size: ce(c) },
															null,
															8,
															["color", "size"]
													  ))
													: Fe(g.$slots, "prefix", { key: 1 }),
										  ]))
										: wt("", !0),
									Fe(g.$slots, "default"),
									s.value && (g.$slots.suffix || l.value)
										? (ne(),
										  ye("span", Cp, [
												l.value
													? (ne(),
													  Ue(
															nr,
															{ key: 0, color: ce(a), size: ce(c) },
															null,
															8,
															["color", "size"]
													  ))
													: Fe(g.$slots, "suffix", { key: 1 }),
										  ]))
										: wt("", !0),
								],
								2
							),
							!s.value && (g.$slots.suffix || l.value)
								? (ne(),
								  ye("div", $p, [
										l.value
											? (ne(),
											  Ue(nr, { key: 0, color: ce(a), size: ce(c) }, null, 8, [
													"color",
													"size",
											  ]))
											: Fe(g.$slots, "suffix", { key: 1 }),
								  ]))
								: wt("", !0),
						]),
						_: 3,
					},
					16,
					["class", "disabled"]
				)
			);
		},
	});
var Ri;
const Pp = typeof window < "u";
Pp &&
	(Ri = window == null ? void 0 : window.navigator) != null &&
	Ri.userAgent &&
	/iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ep(e) {
	return e;
}
const Oi =
		typeof globalThis < "u"
			? globalThis
			: typeof window < "u"
			? window
			: typeof global < "u"
			? global
			: typeof self < "u"
			? self
			: {},
	zi = "__vueuse_ssr_handlers__";
Oi[zi] = Oi[zi] || {};
var Mi;
(function (e) {
	(e.UP = "UP"),
		(e.RIGHT = "RIGHT"),
		(e.DOWN = "DOWN"),
		(e.LEFT = "LEFT"),
		(e.NONE = "NONE");
})(Mi || (Mi = {}));
var Sp = Object.defineProperty,
	Ai = Object.getOwnPropertySymbols,
	Tp = Object.prototype.hasOwnProperty,
	Rp = Object.prototype.propertyIsEnumerable,
	Ii = (e, t, n) =>
		t in e
			? Sp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
			: (e[t] = n),
	Op = (e, t) => {
		for (var n in t || (t = {})) Tp.call(t, n) && Ii(e, n, t[n]);
		if (Ai) for (var n of Ai(t)) Rp.call(t, n) && Ii(e, n, t[n]);
		return e;
	};
const zp = {
	easeInSine: [0.12, 0, 0.39, 0],
	easeOutSine: [0.61, 1, 0.88, 1],
	easeInOutSine: [0.37, 0, 0.63, 1],
	easeInQuad: [0.11, 0, 0.5, 0],
	easeOutQuad: [0.5, 1, 0.89, 1],
	easeInOutQuad: [0.45, 0, 0.55, 1],
	easeInCubic: [0.32, 0, 0.67, 0],
	easeOutCubic: [0.33, 1, 0.68, 1],
	easeInOutCubic: [0.65, 0, 0.35, 1],
	easeInQuart: [0.5, 0, 0.75, 0],
	easeOutQuart: [0.25, 1, 0.5, 1],
	easeInOutQuart: [0.76, 0, 0.24, 1],
	easeInQuint: [0.64, 0, 0.78, 0],
	easeOutQuint: [0.22, 1, 0.36, 1],
	easeInOutQuint: [0.83, 0, 0.17, 1],
	easeInExpo: [0.7, 0, 0.84, 0],
	easeOutExpo: [0.16, 1, 0.3, 1],
	easeInOutExpo: [0.87, 0, 0.13, 1],
	easeInCirc: [0.55, 0, 1, 0.45],
	easeOutCirc: [0, 0.55, 0.45, 1],
	easeInOutCirc: [0.85, 0, 0.15, 1],
	easeInBack: [0.36, 0, 0.66, -0.56],
	easeOutBack: [0.34, 1.56, 0.64, 1],
	easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
Op({ linear: Ep }, zp);
var Mp =
	typeof global == "object" && global && global.Object === Object && global;
const Ap = Mp;
var Ip = typeof self == "object" && self && self.Object === Object && self,
	Np = Ap || Ip || Function("return this")();
const as = Np;
var Hp = as.Symbol;
const St = Hp;
var Ea = Object.prototype,
	jp = Ea.hasOwnProperty,
	Fp = Ea.toString,
	xn = St ? St.toStringTag : void 0;
function Lp(e) {
	var t = jp.call(e, xn),
		n = e[xn];
	try {
		e[xn] = void 0;
		var r = !0;
	} catch {}
	var o = Fp.call(e);
	return r && (t ? (e[xn] = n) : delete e[xn]), o;
}
var Dp = Object.prototype,
	Bp = Dp.toString;
function Vp(e) {
	return Bp.call(e);
}
var qp = "[object Null]",
	Up = "[object Undefined]",
	Ni = St ? St.toStringTag : void 0;
function cs(e) {
	return e == null
		? e === void 0
			? Up
			: qp
		: Ni && Ni in Object(e)
		? Lp(e)
		: Vp(e);
}
function us(e) {
	return e != null && typeof e == "object";
}
var Wp = "[object Symbol]";
function fs(e) {
	return typeof e == "symbol" || (us(e) && cs(e) == Wp);
}
function Kp(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
		o[n] = t(e[n], n, e);
	return o;
}
var Gp = Array.isArray;
const Wn = Gp;
var Zp = 1 / 0,
	Hi = St ? St.prototype : void 0,
	ji = Hi ? Hi.toString : void 0;
function Sa(e) {
	if (typeof e == "string") return e;
	if (Wn(e)) return Kp(e, Sa) + "";
	if (fs(e)) return ji ? ji.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -Zp ? "-0" : t;
}
function wr(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
function Qp(e) {
	return e;
}
var Jp = "[object AsyncFunction]",
	Yp = "[object Function]",
	Xp = "[object GeneratorFunction]",
	eh = "[object Proxy]";
function th(e) {
	if (!wr(e)) return !1;
	var t = cs(e);
	return t == Yp || t == Xp || t == Jp || t == eh;
}
var nh = as["__core-js_shared__"];
const lo = nh;
var Fi = (function () {
	var e = /[^.]+$/.exec((lo && lo.keys && lo.keys.IE_PROTO) || "");
	return e ? "Symbol(src)_1." + e : "";
})();
function rh(e) {
	return !!Fi && Fi in e;
}
var oh = Function.prototype,
	sh = oh.toString;
function ih(e) {
	if (e != null) {
		try {
			return sh.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
var lh = /[\\^$.*+?()[\]{}|]/g,
	ah = /^\[object .+?Constructor\]$/,
	ch = Function.prototype,
	uh = Object.prototype,
	fh = ch.toString,
	dh = uh.hasOwnProperty,
	ph = RegExp(
		"^" +
			fh
				.call(dh)
				.replace(lh, "\\$&")
				.replace(
					/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
					"$1.*?"
				) +
			"$"
	);
function hh(e) {
	if (!wr(e) || rh(e)) return !1;
	var t = th(e) ? ph : ah;
	return t.test(ih(e));
}
function gh(e, t) {
	return e == null ? void 0 : e[t];
}
function ds(e, t) {
	var n = gh(e, t);
	return hh(n) ? n : void 0;
}
function mh(e, t, n) {
	switch (n.length) {
		case 0:
			return e.call(t);
		case 1:
			return e.call(t, n[0]);
		case 2:
			return e.call(t, n[0], n[1]);
		case 3:
			return e.call(t, n[0], n[1], n[2]);
	}
	return e.apply(t, n);
}
var bh = 800,
	vh = 16,
	yh = Date.now;
function _h(e) {
	var t = 0,
		n = 0;
	return function () {
		var r = yh(),
			o = vh - (r - n);
		if (((n = r), o > 0)) {
			if (++t >= bh) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
function wh(e) {
	return function () {
		return e;
	};
}
var xh = (function () {
	try {
		var e = ds(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
})();
const xr = xh;
var kh = xr
	? function (e, t) {
			return xr(e, "toString", {
				configurable: !0,
				enumerable: !1,
				value: wh(t),
				writable: !0,
			});
	  }
	: Qp;
const Ch = kh;
var $h = _h(Ch);
const Ph = $h;
var Eh = 9007199254740991,
	Sh = /^(?:0|[1-9]\d*)$/;
function Ta(e, t) {
	var n = typeof e;
	return (
		(t = t ?? Eh),
		!!t &&
			(n == "number" || (n != "symbol" && Sh.test(e))) &&
			e > -1 &&
			e % 1 == 0 &&
			e < t
	);
}
function Th(e, t, n) {
	t == "__proto__" && xr
		? xr(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
		: (e[t] = n);
}
function Ra(e, t) {
	return e === t || (e !== e && t !== t);
}
var Rh = Object.prototype,
	Oh = Rh.hasOwnProperty;
function zh(e, t, n) {
	var r = e[t];
	(!(Oh.call(e, t) && Ra(r, n)) || (n === void 0 && !(t in e))) && Th(e, t, n);
}
var Li = Math.max;
function Mh(e, t, n) {
	return (
		(t = Li(t === void 0 ? e.length - 1 : t, 0)),
		function () {
			for (
				var r = arguments, o = -1, s = Li(r.length - t, 0), i = Array(s);
				++o < s;

			)
				i[o] = r[t + o];
			o = -1;
			for (var l = Array(t + 1); ++o < t; ) l[o] = r[o];
			return (l[t] = n(i)), mh(e, this, l);
		}
	);
}
var Ah = 9007199254740991;
function Ih(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ah;
}
var Nh = "[object Arguments]";
function Di(e) {
	return us(e) && cs(e) == Nh;
}
var Oa = Object.prototype,
	Hh = Oa.hasOwnProperty,
	jh = Oa.propertyIsEnumerable,
	Fh = Di(
		(function () {
			return arguments;
		})()
	)
		? Di
		: function (e) {
				return us(e) && Hh.call(e, "callee") && !jh.call(e, "callee");
		  };
const za = Fh;
var Lh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	Dh = /^\w*$/;
function Bh(e, t) {
	if (Wn(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || fs(e)
		? !0
		: Dh.test(e) || !Lh.test(e) || (t != null && e in Object(t));
}
var Vh = ds(Object, "create");
const Dn = Vh;
function qh() {
	(this.__data__ = Dn ? Dn(null) : {}), (this.size = 0);
}
function Uh(e) {
	var t = this.has(e) && delete this.__data__[e];
	return (this.size -= t ? 1 : 0), t;
}
var Wh = "__lodash_hash_undefined__",
	Kh = Object.prototype,
	Gh = Kh.hasOwnProperty;
function Zh(e) {
	var t = this.__data__;
	if (Dn) {
		var n = t[e];
		return n === Wh ? void 0 : n;
	}
	return Gh.call(t, e) ? t[e] : void 0;
}
var Qh = Object.prototype,
	Jh = Qh.hasOwnProperty;
function Yh(e) {
	var t = this.__data__;
	return Dn ? t[e] !== void 0 : Jh.call(t, e);
}
var Xh = "__lodash_hash_undefined__";
function e1(e, t) {
	var n = this.__data__;
	return (
		(this.size += this.has(e) ? 0 : 1),
		(n[e] = Dn && t === void 0 ? Xh : t),
		this
	);
}
function Vt(e) {
	var t = -1,
		n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n; ) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Vt.prototype.clear = qh;
Vt.prototype.delete = Uh;
Vt.prototype.get = Zh;
Vt.prototype.has = Yh;
Vt.prototype.set = e1;
function t1() {
	(this.__data__ = []), (this.size = 0);
}
function Lr(e, t) {
	for (var n = e.length; n--; ) if (Ra(e[n][0], t)) return n;
	return -1;
}
var n1 = Array.prototype,
	r1 = n1.splice;
function o1(e) {
	var t = this.__data__,
		n = Lr(t, e);
	if (n < 0) return !1;
	var r = t.length - 1;
	return n == r ? t.pop() : r1.call(t, n, 1), --this.size, !0;
}
function s1(e) {
	var t = this.__data__,
		n = Lr(t, e);
	return n < 0 ? void 0 : t[n][1];
}
function i1(e) {
	return Lr(this.__data__, e) > -1;
}
function l1(e, t) {
	var n = this.__data__,
		r = Lr(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
function hn(e) {
	var t = -1,
		n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n; ) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
hn.prototype.clear = t1;
hn.prototype.delete = o1;
hn.prototype.get = s1;
hn.prototype.has = i1;
hn.prototype.set = l1;
var a1 = ds(as, "Map");
const c1 = a1;
function u1() {
	(this.size = 0),
		(this.__data__ = {
			hash: new Vt(),
			map: new (c1 || hn)(),
			string: new Vt(),
		});
}
function f1(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean"
		? e !== "__proto__"
		: e === null;
}
function Dr(e, t) {
	var n = e.__data__;
	return f1(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function d1(e) {
	var t = Dr(this, e).delete(e);
	return (this.size -= t ? 1 : 0), t;
}
function p1(e) {
	return Dr(this, e).get(e);
}
function h1(e) {
	return Dr(this, e).has(e);
}
function g1(e, t) {
	var n = Dr(this, e),
		r = n.size;
	return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
function Wt(e) {
	var t = -1,
		n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n; ) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Wt.prototype.clear = u1;
Wt.prototype.delete = d1;
Wt.prototype.get = p1;
Wt.prototype.has = h1;
Wt.prototype.set = g1;
var m1 = "Expected a function";
function ps(e, t) {
	if (typeof e != "function" || (t != null && typeof t != "function"))
		throw new TypeError(m1);
	var n = function () {
		var r = arguments,
			o = t ? t.apply(this, r) : r[0],
			s = n.cache;
		if (s.has(o)) return s.get(o);
		var i = e.apply(this, r);
		return (n.cache = s.set(o, i) || s), i;
	};
	return (n.cache = new (ps.Cache || Wt)()), n;
}
ps.Cache = Wt;
var b1 = 500;
function v1(e) {
	var t = ps(e, function (r) {
			return n.size === b1 && n.clear(), r;
		}),
		n = t.cache;
	return t;
}
var y1 =
		/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
	_1 = /\\(\\)?/g,
	w1 = v1(function (e) {
		var t = [];
		return (
			e.charCodeAt(0) === 46 && t.push(""),
			e.replace(y1, function (n, r, o, s) {
				t.push(o ? s.replace(_1, "$1") : r || n);
			}),
			t
		);
	});
const x1 = w1;
function k1(e) {
	return e == null ? "" : Sa(e);
}
function Br(e, t) {
	return Wn(e) ? e : Bh(e, t) ? [e] : x1(k1(e));
}
var C1 = 1 / 0;
function hs(e) {
	if (typeof e == "string" || fs(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -C1 ? "-0" : t;
}
function $1(e, t) {
	t = Br(t, e);
	for (var n = 0, r = t.length; e != null && n < r; ) e = e[hs(t[n++])];
	return n && n == r ? e : void 0;
}
function P1(e, t) {
	for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
	return e;
}
var Bi = St ? St.isConcatSpreadable : void 0;
function E1(e) {
	return Wn(e) || za(e) || !!(Bi && e && e[Bi]);
}
function Ma(e, t, n, r, o) {
	var s = -1,
		i = e.length;
	for (n || (n = E1), o || (o = []); ++s < i; ) {
		var l = e[s];
		t > 0 && n(l)
			? t > 1
				? Ma(l, t - 1, n, r, o)
				: P1(o, l)
			: r || (o[o.length] = l);
	}
	return o;
}
function S1(e) {
	var t = e == null ? 0 : e.length;
	return t ? Ma(e, 1) : [];
}
function T1(e) {
	return Ph(Mh(e, void 0, S1), e + "");
}
function R1(e, t) {
	return e != null && t in Object(e);
}
function O1(e, t, n) {
	t = Br(t, e);
	for (var r = -1, o = t.length, s = !1; ++r < o; ) {
		var i = hs(t[r]);
		if (!(s = e != null && n(e, i))) break;
		e = e[i];
	}
	return s || ++r != o
		? s
		: ((o = e == null ? 0 : e.length),
		  !!o && Ih(o) && Ta(i, o) && (Wn(e) || za(e)));
}
function z1(e, t) {
	return e != null && O1(e, t, R1);
}
function M1(e, t, n, r) {
	if (!wr(e)) return e;
	t = Br(t, e);
	for (var o = -1, s = t.length, i = s - 1, l = e; l != null && ++o < s; ) {
		var a = hs(t[o]),
			c = n;
		if (a === "__proto__" || a === "constructor" || a === "prototype") return e;
		if (o != i) {
			var u = l[a];
			(c = r ? r(u, a, l) : void 0),
				c === void 0 && (c = wr(u) ? u : Ta(t[o + 1]) ? [] : {});
		}
		zh(l, a, c), (l = l[a]);
	}
	return e;
}
function A1(e, t, n) {
	for (var r = -1, o = t.length, s = {}; ++r < o; ) {
		var i = t[r],
			l = $1(e, i);
		n(l, i) && M1(s, Br(i, e), l);
	}
	return s;
}
function I1(e, t) {
	return A1(e, t, function (n, r) {
		return z1(e, r);
	});
}
T1(function (e, t) {
	return e == null ? {} : I1(e, t);
});
new Date().getFullYear();
function We(e) {
	return e.split("-")[1];
}
function gs(e) {
	return e === "y" ? "height" : "width";
}
function rt(e) {
	return e.split("-")[0];
}
function gn(e) {
	return ["top", "bottom"].includes(rt(e)) ? "x" : "y";
}
function Vi(e, t, n) {
	let { reference: r, floating: o } = e;
	const s = r.x + r.width / 2 - o.width / 2,
		i = r.y + r.height / 2 - o.height / 2,
		l = gn(t),
		a = gs(l),
		c = r[a] / 2 - o[a] / 2,
		u = l === "x";
	let f;
	switch (rt(t)) {
		case "top":
			f = { x: s, y: r.y - o.height };
			break;
		case "bottom":
			f = { x: s, y: r.y + r.height };
			break;
		case "right":
			f = { x: r.x + r.width, y: i };
			break;
		case "left":
			f = { x: r.x - o.width, y: i };
			break;
		default:
			f = { x: r.x, y: r.y };
	}
	switch (We(t)) {
		case "start":
			f[l] -= c * (n && u ? -1 : 1);
			break;
		case "end":
			f[l] += c * (n && u ? -1 : 1);
	}
	return f;
}
const N1 = async (e, t, n) => {
	const {
			placement: r = "bottom",
			strategy: o = "absolute",
			middleware: s = [],
			platform: i,
		} = n,
		l = s.filter(Boolean),
		a = await (i.isRTL == null ? void 0 : i.isRTL(t));
	let c = await i.getElementRects({ reference: e, floating: t, strategy: o }),
		{ x: u, y: f } = Vi(c, r, a),
		h = r,
		g = {},
		v = 0;
	for (let y = 0; y < l.length; y++) {
		const { name: P, fn: C } = l[y],
			{
				x,
				y: M,
				data: R,
				reset: V,
			} = await C({
				x: u,
				y: f,
				initialPlacement: r,
				placement: h,
				strategy: o,
				middlewareData: g,
				rects: c,
				platform: i,
				elements: { reference: e, floating: t },
			});
		(u = x ?? u),
			(f = M ?? f),
			(g = { ...g, [P]: { ...g[P], ...R } }),
			V &&
				v <= 50 &&
				(v++,
				typeof V == "object" &&
					(V.placement && (h = V.placement),
					V.rects &&
						(c =
							V.rects === !0
								? await i.getElementRects({
										reference: e,
										floating: t,
										strategy: o,
								  })
								: V.rects),
					({ x: u, y: f } = Vi(c, h, a))),
				(y = -1));
	}
	return { x: u, y: f, placement: h, strategy: o, middlewareData: g };
};
function Kt(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Aa(e) {
	return typeof e != "number"
		? (function (t) {
				return { top: 0, right: 0, bottom: 0, left: 0, ...t };
		  })(e)
		: { top: e, right: e, bottom: e, left: e };
}
function Rn(e) {
	return {
		...e,
		top: e.y,
		left: e.x,
		right: e.x + e.width,
		bottom: e.y + e.height,
	};
}
async function Vr(e, t) {
	var n;
	t === void 0 && (t = {});
	const { x: r, y: o, platform: s, rects: i, elements: l, strategy: a } = e,
		{
			boundary: c = "clippingAncestors",
			rootBoundary: u = "viewport",
			elementContext: f = "floating",
			altBoundary: h = !1,
			padding: g = 0,
		} = Kt(t, e),
		v = Aa(g),
		y = l[h ? (f === "floating" ? "reference" : "floating") : f],
		P = Rn(
			await s.getClippingRect({
				element:
					(n = await (s.isElement == null ? void 0 : s.isElement(y))) == null ||
					n
						? y
						: y.contextElement ||
						  (await (s.getDocumentElement == null
								? void 0
								: s.getDocumentElement(l.floating))),
				boundary: c,
				rootBoundary: u,
				strategy: a,
			})
		),
		C = f === "floating" ? { ...i.floating, x: r, y: o } : i.reference,
		x = await (s.getOffsetParent == null
			? void 0
			: s.getOffsetParent(l.floating)),
		M = ((await (s.isElement == null ? void 0 : s.isElement(x))) &&
			(await (s.getScale == null ? void 0 : s.getScale(x)))) || { x: 1, y: 1 },
		R = Rn(
			s.convertOffsetParentRelativeRectToViewportRelativeRect
				? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
						rect: C,
						offsetParent: x,
						strategy: a,
				  })
				: C
		);
	return {
		top: (P.top - R.top + v.top) / M.y,
		bottom: (R.bottom - P.bottom + v.bottom) / M.y,
		left: (P.left - R.left + v.left) / M.x,
		right: (R.right - P.right + v.right) / M.x,
	};
}
const Bn = Math.min,
	Mt = Math.max;
function Ro(e, t, n) {
	return Mt(e, Bn(t, n));
}
const H1 = (e) => ({
		name: "arrow",
		options: e,
		async fn(t) {
			const {
					x: n,
					y: r,
					placement: o,
					rects: s,
					platform: i,
					elements: l,
				} = t,
				{ element: a, padding: c = 0 } = Kt(e, t) || {};
			if (a == null) return {};
			const u = Aa(c),
				f = { x: n, y: r },
				h = gn(o),
				g = gs(h),
				v = await i.getDimensions(a),
				y = h === "y",
				P = y ? "top" : "left",
				C = y ? "bottom" : "right",
				x = y ? "clientHeight" : "clientWidth",
				M = s.reference[g] + s.reference[h] - f[h] - s.floating[g],
				R = f[h] - s.reference[h],
				V = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a));
			let D = V ? V[x] : 0;
			(D && (await (i.isElement == null ? void 0 : i.isElement(V)))) ||
				(D = l.floating[x] || s.floating[g]);
			const ie = M / 2 - R / 2,
				de = D / 2 - v[g] / 2 - 1,
				be = Bn(u[P], de),
				Z = Bn(u[C], de),
				K = be,
				j = D - v[g] - Z,
				q = D / 2 - v[g] / 2 + ie,
				me = Ro(K, q, j),
				ve =
					We(o) != null &&
					q != me &&
					s.reference[g] / 2 - (q < K ? be : Z) - v[g] / 2 < 0
						? q < K
							? K - q
							: j - q
						: 0;
			return { [h]: f[h] - ve, data: { [h]: me, centerOffset: q - me + ve } };
		},
	}),
	j1 = ["top", "right", "bottom", "left"],
	qi = j1.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
	F1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function kr(e) {
	return e.replace(/left|right|bottom|top/g, (t) => F1[t]);
}
function Ia(e, t, n) {
	n === void 0 && (n = !1);
	const r = We(e),
		o = gn(e),
		s = gs(o);
	let i =
		o === "x"
			? r === (n ? "end" : "start")
				? "right"
				: "left"
			: r === "start"
			? "bottom"
			: "top";
	return (
		t.reference[s] > t.floating[s] && (i = kr(i)), { main: i, cross: kr(i) }
	);
}
const L1 = { start: "end", end: "start" };
function fr(e) {
	return e.replace(/start|end/g, (t) => L1[t]);
}
const D1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: "autoPlacement",
				options: e,
				async fn(t) {
					var n, r, o;
					const {
							rects: s,
							middlewareData: i,
							placement: l,
							platform: a,
							elements: c,
						} = t,
						{
							crossAxis: u = !1,
							alignment: f,
							allowedPlacements: h = qi,
							autoAlignment: g = !0,
							...v
						} = Kt(e, t),
						y =
							f !== void 0 || h === qi
								? (function (Z, K, j) {
										return (
											Z
												? [
														...j.filter((q) => We(q) === Z),
														...j.filter((q) => We(q) !== Z),
												  ]
												: j.filter((q) => rt(q) === q)
										).filter((q) => !Z || We(q) === Z || (!!K && fr(q) !== q));
								  })(f || null, g, h)
								: h,
						P = await Vr(t, v),
						C = ((n = i.autoPlacement) == null ? void 0 : n.index) || 0,
						x = y[C];
					if (x == null) return {};
					const { main: M, cross: R } = Ia(
						x,
						s,
						await (a.isRTL == null ? void 0 : a.isRTL(c.floating))
					);
					if (l !== x) return { reset: { placement: y[0] } };
					const V = [P[rt(x)], P[M], P[R]],
						D = [
							...(((r = i.autoPlacement) == null ? void 0 : r.overflows) || []),
							{ placement: x, overflows: V },
						],
						ie = y[C + 1];
					if (ie)
						return {
							data: { index: C + 1, overflows: D },
							reset: { placement: ie },
						};
					const de = D.map((Z) => {
							const K = We(Z.placement);
							return [
								Z.placement,
								K && u
									? Z.overflows.slice(0, 2).reduce((j, q) => j + q, 0)
									: Z.overflows[0],
								Z.overflows,
							];
						}).sort((Z, K) => Z[1] - K[1]),
						be =
							((o = de.filter((Z) =>
								Z[2].slice(0, We(Z[0]) ? 2 : 3).every((K) => K <= 0)
							)[0]) == null
								? void 0
								: o[0]) || de[0][0];
					return be !== l
						? { data: { index: C + 1, overflows: D }, reset: { placement: be } }
						: {};
				},
			}
		);
	},
	B1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: "flip",
				options: e,
				async fn(t) {
					var n;
					const {
							placement: r,
							middlewareData: o,
							rects: s,
							initialPlacement: i,
							platform: l,
							elements: a,
						} = t,
						{
							mainAxis: c = !0,
							crossAxis: u = !0,
							fallbackPlacements: f,
							fallbackStrategy: h = "bestFit",
							fallbackAxisSideDirection: g = "none",
							flipAlignment: v = !0,
							...y
						} = Kt(e, t),
						P = rt(r),
						C = rt(i) === i,
						x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)),
						M =
							f ||
							(C || !v
								? [kr(i)]
								: (function (K) {
										const j = kr(K);
										return [fr(K), j, fr(j)];
								  })(i));
					f ||
						g === "none" ||
						M.push(
							...(function (K, j, q, me) {
								const ve = We(K);
								let Q = (function (J, G, Pe) {
									const Me = ["left", "right"],
										ke = ["right", "left"],
										_e = ["top", "bottom"],
										pt = ["bottom", "top"];
									switch (J) {
										case "top":
										case "bottom":
											return Pe ? (G ? ke : Me) : G ? Me : ke;
										case "left":
										case "right":
											return G ? _e : pt;
										default:
											return [];
									}
								})(rt(K), q === "start", me);
								return (
									ve &&
										((Q = Q.map((J) => J + "-" + ve)),
										j && (Q = Q.concat(Q.map(fr)))),
									Q
								);
							})(i, v, g, x)
						);
					const R = [i, ...M],
						V = await Vr(t, y),
						D = [];
					let ie = ((n = o.flip) == null ? void 0 : n.overflows) || [];
					if ((c && D.push(V[P]), u)) {
						const { main: K, cross: j } = Ia(r, s, x);
						D.push(V[K], V[j]);
					}
					if (
						((ie = [...ie, { placement: r, overflows: D }]),
						!D.every((K) => K <= 0))
					) {
						var de, be;
						const K = (((de = o.flip) == null ? void 0 : de.index) || 0) + 1,
							j = R[K];
						if (j)
							return {
								data: { index: K, overflows: ie },
								reset: { placement: j },
							};
						let q =
							(be = ie
								.filter((me) => me.overflows[0] <= 0)
								.sort((me, ve) => me.overflows[1] - ve.overflows[1])[0]) == null
								? void 0
								: be.placement;
						if (!q)
							switch (h) {
								case "bestFit": {
									var Z;
									const me =
										(Z = ie
											.map((ve) => [
												ve.placement,
												ve.overflows
													.filter((Q) => Q > 0)
													.reduce((Q, J) => Q + J, 0),
											])
											.sort((ve, Q) => ve[1] - Q[1])[0]) == null
											? void 0
											: Z[0];
									me && (q = me);
									break;
								}
								case "initialPlacement":
									q = i;
							}
						if (r !== q) return { reset: { placement: q } };
					}
					return {};
				},
			}
		);
	},
	V1 = function (e) {
		return (
			e === void 0 && (e = 0),
			{
				name: "offset",
				options: e,
				async fn(t) {
					const { x: n, y: r } = t,
						o = await (async function (s, i) {
							const { placement: l, platform: a, elements: c } = s,
								u = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)),
								f = rt(l),
								h = We(l),
								g = gn(l) === "x",
								v = ["left", "top"].includes(f) ? -1 : 1,
								y = u && g ? -1 : 1,
								P = Kt(i, s);
							let {
								mainAxis: C,
								crossAxis: x,
								alignmentAxis: M,
							} = typeof P == "number"
								? { mainAxis: P, crossAxis: 0, alignmentAxis: null }
								: { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...P };
							return (
								h && typeof M == "number" && (x = h === "end" ? -1 * M : M),
								g ? { x: x * y, y: C * v } : { x: C * v, y: x * y }
							);
						})(t, e);
					return { x: n + o.x, y: r + o.y, data: o };
				},
			}
		);
	};
function q1(e) {
	return e === "x" ? "y" : "x";
}
const U1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: "shift",
				options: e,
				async fn(t) {
					const { x: n, y: r, placement: o } = t,
						{
							mainAxis: s = !0,
							crossAxis: i = !1,
							limiter: l = {
								fn: (P) => {
									let { x: C, y: x } = P;
									return { x: C, y: x };
								},
							},
							...a
						} = Kt(e, t),
						c = { x: n, y: r },
						u = await Vr(t, a),
						f = gn(rt(o)),
						h = q1(f);
					let g = c[f],
						v = c[h];
					if (s) {
						const P = f === "y" ? "bottom" : "right";
						g = Ro(g + u[f === "y" ? "top" : "left"], g, g - u[P]);
					}
					if (i) {
						const P = h === "y" ? "bottom" : "right";
						v = Ro(v + u[h === "y" ? "top" : "left"], v, v - u[P]);
					}
					const y = l.fn({ ...t, [f]: g, [h]: v });
					return { ...y, data: { x: y.x - n, y: y.y - r } };
				},
			}
		);
	},
	W1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: "size",
				options: e,
				async fn(t) {
					const { placement: n, rects: r, platform: o, elements: s } = t,
						{ apply: i = () => {}, ...l } = Kt(e, t),
						a = await Vr(t, l),
						c = rt(n),
						u = We(n),
						f = gn(n) === "x",
						{ width: h, height: g } = r.floating;
					let v, y;
					c === "top" || c === "bottom"
						? ((v = c),
						  (y =
								u ===
								((await (o.isRTL == null ? void 0 : o.isRTL(s.floating)))
									? "start"
									: "end")
									? "left"
									: "right"))
						: ((y = c), (v = u === "end" ? "top" : "bottom"));
					const P = g - a[v],
						C = h - a[y],
						x = !t.middlewareData.shift;
					let M = P,
						R = C;
					if (f) {
						const D = h - a.left - a.right;
						R = u || x ? Bn(C, D) : D;
					} else {
						const D = g - a.top - a.bottom;
						M = u || x ? Bn(P, D) : D;
					}
					if (x && !u) {
						const D = Mt(a.left, 0),
							ie = Mt(a.right, 0),
							de = Mt(a.top, 0),
							be = Mt(a.bottom, 0);
						f
							? (R =
									h - 2 * (D !== 0 || ie !== 0 ? D + ie : Mt(a.left, a.right)))
							: (M =
									g -
									2 * (de !== 0 || be !== 0 ? de + be : Mt(a.top, a.bottom)));
					}
					await i({ ...t, availableWidth: R, availableHeight: M });
					const V = await o.getDimensions(s.floating);
					return h !== V.width || g !== V.height
						? { reset: { rects: !0 } }
						: {};
				},
			}
		);
	};
function Le(e) {
	var t;
	return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ot(e) {
	return Le(e).getComputedStyle(e);
}
const Ui = Math.min,
	On = Math.max,
	Cr = Math.round;
function Na(e) {
	const t = ot(e);
	let n = parseFloat(t.width),
		r = parseFloat(t.height);
	const o = e.offsetWidth,
		s = e.offsetHeight,
		i = Cr(n) !== o || Cr(r) !== s;
	return i && ((n = o), (r = s)), { width: n, height: r, fallback: i };
}
function Tt(e) {
	return ja(e) ? (e.nodeName || "").toLowerCase() : "";
}
let rr;
function Ha() {
	if (rr) return rr;
	const e = navigator.userAgentData;
	return e && Array.isArray(e.brands)
		? ((rr = e.brands.map((t) => t.brand + "/" + t.version).join(" ")), rr)
		: navigator.userAgent;
}
function st(e) {
	return e instanceof Le(e).HTMLElement;
}
function Ct(e) {
	return e instanceof Le(e).Element;
}
function ja(e) {
	return e instanceof Le(e).Node;
}
function Wi(e) {
	return typeof ShadowRoot > "u"
		? !1
		: e instanceof Le(e).ShadowRoot || e instanceof ShadowRoot;
}
function qr(e) {
	const { overflow: t, overflowX: n, overflowY: r, display: o } = ot(e);
	return (
		/auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
		!["inline", "contents"].includes(o)
	);
}
function K1(e) {
	return ["table", "td", "th"].includes(Tt(e));
}
function Oo(e) {
	const t = /firefox/i.test(Ha()),
		n = ot(e),
		r = n.backdropFilter || n.WebkitBackdropFilter;
	return (
		n.transform !== "none" ||
		n.perspective !== "none" ||
		(!!r && r !== "none") ||
		(t && n.willChange === "filter") ||
		(t && !!n.filter && n.filter !== "none") ||
		["transform", "perspective"].some((o) => n.willChange.includes(o)) ||
		["paint", "layout", "strict", "content"].some((o) => {
			const s = n.contain;
			return s != null && s.includes(o);
		})
	);
}
function Fa() {
	return !/^((?!chrome|android).)*safari/i.test(Ha());
}
function ms(e) {
	return ["html", "body", "#document"].includes(Tt(e));
}
function La(e) {
	return Ct(e) ? e : e.contextElement;
}
const Da = { x: 1, y: 1 };
function rn(e) {
	const t = La(e);
	if (!st(t)) return Da;
	const n = t.getBoundingClientRect(),
		{ width: r, height: o, fallback: s } = Na(t);
	let i = (s ? Cr(n.width) : n.width) / r,
		l = (s ? Cr(n.height) : n.height) / o;
	return (
		(i && Number.isFinite(i)) || (i = 1),
		(l && Number.isFinite(l)) || (l = 1),
		{ x: i, y: l }
	);
}
function Vn(e, t, n, r) {
	var o, s;
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	const i = e.getBoundingClientRect(),
		l = La(e);
	let a = Da;
	t && (r ? Ct(r) && (a = rn(r)) : (a = rn(e)));
	const c = l ? Le(l) : window,
		u = !Fa() && n;
	let f =
			(i.left +
				((u && ((o = c.visualViewport) == null ? void 0 : o.offsetLeft)) ||
					0)) /
			a.x,
		h =
			(i.top +
				((u && ((s = c.visualViewport) == null ? void 0 : s.offsetTop)) || 0)) /
			a.y,
		g = i.width / a.x,
		v = i.height / a.y;
	if (l) {
		const y = Le(l),
			P = r && Ct(r) ? Le(r) : r;
		let C = y.frameElement;
		for (; C && r && P !== y; ) {
			const x = rn(C),
				M = C.getBoundingClientRect(),
				R = getComputedStyle(C);
			(M.x += (C.clientLeft + parseFloat(R.paddingLeft)) * x.x),
				(M.y += (C.clientTop + parseFloat(R.paddingTop)) * x.y),
				(f *= x.x),
				(h *= x.y),
				(g *= x.x),
				(v *= x.y),
				(f += M.x),
				(h += M.y),
				(C = Le(C).frameElement);
		}
	}
	return {
		width: g,
		height: v,
		top: h,
		right: f + g,
		bottom: h + v,
		left: f,
		x: f,
		y: h,
	};
}
function $t(e) {
	return ((ja(e) ? e.ownerDocument : e.document) || window.document)
		.documentElement;
}
function Ur(e) {
	return Ct(e)
		? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
		: { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ba(e) {
	return Vn($t(e)).left + Ur(e).scrollLeft;
}
function qn(e) {
	if (Tt(e) === "html") return e;
	const t = e.assignedSlot || e.parentNode || (Wi(e) && e.host) || $t(e);
	return Wi(t) ? t.host : t;
}
function Va(e) {
	const t = qn(e);
	return ms(t) ? t.ownerDocument.body : st(t) && qr(t) ? t : Va(t);
}
function $r(e, t) {
	var n;
	t === void 0 && (t = []);
	const r = Va(e),
		o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
		s = Le(r);
	return o
		? t.concat(s, s.visualViewport || [], qr(r) ? r : [])
		: t.concat(r, $r(r));
}
function Ki(e, t, n) {
	return t === "viewport"
		? Rn(
				(function (r, o) {
					const s = Le(r),
						i = $t(r),
						l = s.visualViewport;
					let a = i.clientWidth,
						c = i.clientHeight,
						u = 0,
						f = 0;
					if (l) {
						(a = l.width), (c = l.height);
						const h = Fa();
						(h || (!h && o === "fixed")) &&
							((u = l.offsetLeft), (f = l.offsetTop));
					}
					return { width: a, height: c, x: u, y: f };
				})(e, n)
		  )
		: Ct(t)
		? Rn(
				(function (r, o) {
					const s = Vn(r, !0, o === "fixed"),
						i = s.top + r.clientTop,
						l = s.left + r.clientLeft,
						a = st(r) ? rn(r) : { x: 1, y: 1 };
					return {
						width: r.clientWidth * a.x,
						height: r.clientHeight * a.y,
						x: l * a.x,
						y: i * a.y,
					};
				})(t, n)
		  )
		: Rn(
				(function (r) {
					const o = $t(r),
						s = Ur(r),
						i = r.ownerDocument.body,
						l = On(o.scrollWidth, o.clientWidth, i.scrollWidth, i.clientWidth),
						a = On(
							o.scrollHeight,
							o.clientHeight,
							i.scrollHeight,
							i.clientHeight
						);
					let c = -s.scrollLeft + Ba(r);
					const u = -s.scrollTop;
					return (
						ot(i).direction === "rtl" &&
							(c += On(o.clientWidth, i.clientWidth) - l),
						{ width: l, height: a, x: c, y: u }
					);
				})($t(e))
		  );
}
function Gi(e) {
	return st(e) && ot(e).position !== "fixed" ? e.offsetParent : null;
}
function Zi(e) {
	const t = Le(e);
	let n = Gi(e);
	for (; n && K1(n) && ot(n).position === "static"; ) n = Gi(n);
	return n &&
		(Tt(n) === "html" ||
			(Tt(n) === "body" && ot(n).position === "static" && !Oo(n)))
		? t
		: n ||
				(function (r) {
					let o = qn(r);
					for (; st(o) && !ms(o); ) {
						if (Oo(o)) return o;
						o = qn(o);
					}
					return null;
				})(e) ||
				t;
}
function G1(e, t, n) {
	const r = st(t),
		o = $t(t),
		s = Vn(e, !0, n === "fixed", t);
	let i = { scrollLeft: 0, scrollTop: 0 };
	const l = { x: 0, y: 0 };
	if (r || (!r && n !== "fixed"))
		if (((Tt(t) !== "body" || qr(o)) && (i = Ur(t)), st(t))) {
			const a = Vn(t, !0);
			(l.x = a.x + t.clientLeft), (l.y = a.y + t.clientTop);
		} else o && (l.x = Ba(o));
	return {
		x: s.left + i.scrollLeft - l.x,
		y: s.top + i.scrollTop - l.y,
		width: s.width,
		height: s.height,
	};
}
const Z1 = {
		getClippingRect: function (e) {
			let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
			const s =
					n === "clippingAncestors"
						? (function (c, u) {
								const f = u.get(c);
								if (f) return f;
								let h = $r(c).filter((P) => Ct(P) && Tt(P) !== "body"),
									g = null;
								const v = ot(c).position === "fixed";
								let y = v ? qn(c) : c;
								for (; Ct(y) && !ms(y); ) {
									const P = ot(y),
										C = Oo(y);
									(
										v
											? C || g
											: C ||
											  P.position !== "static" ||
											  !g ||
											  !["absolute", "fixed"].includes(g.position)
									)
										? (g = P)
										: (h = h.filter((x) => x !== y)),
										(y = qn(y));
								}
								return u.set(c, h), h;
						  })(t, this._c)
						: [].concat(n),
				i = [...s, r],
				l = i[0],
				a = i.reduce((c, u) => {
					const f = Ki(t, u, o);
					return (
						(c.top = On(f.top, c.top)),
						(c.right = Ui(f.right, c.right)),
						(c.bottom = Ui(f.bottom, c.bottom)),
						(c.left = On(f.left, c.left)),
						c
					);
				}, Ki(t, l, o));
			return {
				width: a.right - a.left,
				height: a.bottom - a.top,
				x: a.left,
				y: a.top,
			};
		},
		convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
			let { rect: t, offsetParent: n, strategy: r } = e;
			const o = st(n),
				s = $t(n);
			if (n === s) return t;
			let i = { scrollLeft: 0, scrollTop: 0 },
				l = { x: 1, y: 1 };
			const a = { x: 0, y: 0 };
			if (
				(o || (!o && r !== "fixed")) &&
				((Tt(n) !== "body" || qr(s)) && (i = Ur(n)), st(n))
			) {
				const c = Vn(n);
				(l = rn(n)), (a.x = c.x + n.clientLeft), (a.y = c.y + n.clientTop);
			}
			return {
				width: t.width * l.x,
				height: t.height * l.y,
				x: t.x * l.x - i.scrollLeft * l.x + a.x,
				y: t.y * l.y - i.scrollTop * l.y + a.y,
			};
		},
		isElement: Ct,
		getDimensions: function (e) {
			return st(e) ? Na(e) : e.getBoundingClientRect();
		},
		getOffsetParent: Zi,
		getDocumentElement: $t,
		getScale: rn,
		async getElementRects(e) {
			let { reference: t, floating: n, strategy: r } = e;
			const o = this.getOffsetParent || Zi,
				s = this.getDimensions;
			return {
				reference: G1(t, await o(n), r),
				floating: { x: 0, y: 0, ...(await s(n)) },
			};
		},
		getClientRects: (e) => Array.from(e.getClientRects()),
		isRTL: (e) => ot(e).direction === "rtl",
	},
	Q1 = (e, t, n) => {
		const r = new Map(),
			o = { platform: Z1, ...n },
			s = { ...o.platform, _c: r };
		return N1(e, t, { ...o, platform: s });
	},
	Dt = {
		disabled: !1,
		distance: 5,
		skidding: 0,
		container: "body",
		boundary: void 0,
		instantMove: !1,
		disposeTimeout: 5e3,
		popperTriggers: [],
		strategy: "absolute",
		preventOverflow: !0,
		flip: !0,
		shift: !0,
		overflowPadding: 0,
		arrowPadding: 0,
		arrowOverflow: !0,
		themes: {
			tooltip: {
				placement: "top",
				triggers: ["hover", "focus", "touch"],
				hideTriggers: (e) => [...e, "click"],
				delay: { show: 200, hide: 0 },
				handleResize: !1,
				html: !1,
				loadingContent: "...",
			},
			dropdown: {
				placement: "bottom",
				triggers: ["click"],
				delay: 0,
				handleResize: !0,
				autoHide: !0,
			},
			menu: {
				$extend: "dropdown",
				triggers: ["hover", "focus"],
				popperTriggers: ["hover", "focus"],
				delay: { show: 0, hide: 400 },
			},
		},
	};
function zo(e, t) {
	let n = Dt.themes[e] || {},
		r;
	do
		(r = n[t]),
			typeof r > "u"
				? n.$extend
					? (n = Dt.themes[n.$extend] || {})
					: ((n = null), (r = Dt[t]))
				: (n = null);
	while (n);
	return r;
}
function J1(e) {
	const t = [e];
	let n = Dt.themes[e] || {};
	do
		n.$extend && !n.$resetCss
			? (t.push(n.$extend), (n = Dt.themes[n.$extend] || {}))
			: (n = null);
	while (n);
	return t.map((r) => `v-popper--theme-${r}`);
}
function Qi(e) {
	const t = [e];
	let n = Dt.themes[e] || {};
	do
		n.$extend
			? (t.push(n.$extend), (n = Dt.themes[n.$extend] || {}))
			: (n = null);
	while (n);
	return t;
}
let fn = !1;
if (typeof window < "u") {
	fn = !1;
	try {
		const e = Object.defineProperty({}, "passive", {
			get() {
				fn = !0;
			},
		});
		window.addEventListener("test", null, e);
	} catch {}
}
let qa = !1;
typeof window < "u" &&
	typeof navigator < "u" &&
	(qa = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Y1 = ["auto", "top", "bottom", "left", "right"].reduce(
		(e, t) => e.concat([t, `${t}-start`, `${t}-end`]),
		[]
	),
	Ji = {
		hover: "mouseenter",
		focus: "focus",
		click: "click",
		touch: "touchstart",
		pointer: "pointerdown",
	},
	Yi = {
		hover: "mouseleave",
		focus: "blur",
		click: "click",
		touch: "touchend",
		pointer: "pointerup",
	};
function Xi(e, t) {
	const n = e.indexOf(t);
	n !== -1 && e.splice(n, 1);
}
function ao() {
	return new Promise((e) =>
		requestAnimationFrame(() => {
			requestAnimationFrame(e);
		})
	);
}
const Ke = [];
let zt = null;
const el = {};
function tl(e) {
	let t = el[e];
	return t || (t = el[e] = []), t;
}
let Mo = function () {};
typeof window < "u" && (Mo = window.Element);
function ee(e) {
	return function (t) {
		return zo(t.theme, e);
	};
}
const co = "__floating-vue__popper",
	Ua = () =>
		ft({
			name: "VPopper",
			provide() {
				return { [co]: { parentPopper: this } };
			},
			inject: { [co]: { default: null } },
			props: {
				theme: { type: String, required: !0 },
				targetNodes: { type: Function, required: !0 },
				referenceNode: { type: Function, default: null },
				popperNode: { type: Function, required: !0 },
				shown: { type: Boolean, default: !1 },
				showGroup: { type: String, default: null },
				ariaId: { default: null },
				disabled: { type: Boolean, default: ee("disabled") },
				positioningDisabled: {
					type: Boolean,
					default: ee("positioningDisabled"),
				},
				placement: {
					type: String,
					default: ee("placement"),
					validator: (e) => Y1.includes(e),
				},
				delay: { type: [String, Number, Object], default: ee("delay") },
				distance: { type: [Number, String], default: ee("distance") },
				skidding: { type: [Number, String], default: ee("skidding") },
				triggers: { type: Array, default: ee("triggers") },
				showTriggers: { type: [Array, Function], default: ee("showTriggers") },
				hideTriggers: { type: [Array, Function], default: ee("hideTriggers") },
				popperTriggers: { type: Array, default: ee("popperTriggers") },
				popperShowTriggers: {
					type: [Array, Function],
					default: ee("popperShowTriggers"),
				},
				popperHideTriggers: {
					type: [Array, Function],
					default: ee("popperHideTriggers"),
				},
				container: {
					type: [String, Object, Mo, Boolean],
					default: ee("container"),
				},
				boundary: { type: [String, Mo], default: ee("boundary") },
				strategy: {
					type: String,
					validator: (e) => ["absolute", "fixed"].includes(e),
					default: ee("strategy"),
				},
				autoHide: { type: [Boolean, Function], default: ee("autoHide") },
				handleResize: { type: Boolean, default: ee("handleResize") },
				instantMove: { type: Boolean, default: ee("instantMove") },
				eagerMount: { type: Boolean, default: ee("eagerMount") },
				popperClass: {
					type: [String, Array, Object],
					default: ee("popperClass"),
				},
				computeTransformOrigin: {
					type: Boolean,
					default: ee("computeTransformOrigin"),
				},
				autoMinSize: { type: Boolean, default: ee("autoMinSize") },
				autoSize: { type: [Boolean, String], default: ee("autoSize") },
				autoMaxSize: { type: Boolean, default: ee("autoMaxSize") },
				autoBoundaryMaxSize: {
					type: Boolean,
					default: ee("autoBoundaryMaxSize"),
				},
				preventOverflow: { type: Boolean, default: ee("preventOverflow") },
				overflowPadding: {
					type: [Number, String],
					default: ee("overflowPadding"),
				},
				arrowPadding: { type: [Number, String], default: ee("arrowPadding") },
				arrowOverflow: { type: Boolean, default: ee("arrowOverflow") },
				flip: { type: Boolean, default: ee("flip") },
				shift: { type: Boolean, default: ee("shift") },
				shiftCrossAxis: { type: Boolean, default: ee("shiftCrossAxis") },
				noAutoFocus: { type: Boolean, default: ee("noAutoFocus") },
				disposeTimeout: { type: Number, default: ee("disposeTimeout") },
			},
			emits: [
				"show",
				"hide",
				"update:shown",
				"apply-show",
				"apply-hide",
				"close-group",
				"close-directive",
				"auto-hide",
				"resize",
				"dispose",
			],
			data() {
				return {
					isShown: !1,
					isMounted: !1,
					skipTransition: !1,
					classes: { showFrom: !1, showTo: !1, hideFrom: !1, hideTo: !0 },
					result: {
						x: 0,
						y: 0,
						placement: "",
						strategy: this.strategy,
						arrow: { x: 0, y: 0, centerOffset: 0 },
						transformOrigin: null,
					},
					shownChildren: new Set(),
					lastAutoHide: !0,
				};
			},
			computed: {
				popperId() {
					return this.ariaId != null ? this.ariaId : this.randomId;
				},
				shouldMountContent() {
					return this.eagerMount || this.isMounted;
				},
				slotData() {
					return {
						popperId: this.popperId,
						isShown: this.isShown,
						shouldMountContent: this.shouldMountContent,
						skipTransition: this.skipTransition,
						autoHide:
							typeof this.autoHide == "function"
								? this.lastAutoHide
								: this.autoHide,
						show: this.show,
						hide: this.hide,
						handleResize: this.handleResize,
						onResize: this.onResize,
						classes: { ...this.classes, popperClass: this.popperClass },
						result: this.positioningDisabled ? null : this.result,
						attrs: this.$attrs,
					};
				},
				parentPopper() {
					var e;
					return (e = this[co]) == null ? void 0 : e.parentPopper;
				},
				hasPopperShowTriggerHover() {
					var e, t;
					return (
						((e = this.popperTriggers) == null
							? void 0
							: e.includes("hover")) ||
						((t = this.popperShowTriggers) == null
							? void 0
							: t.includes("hover"))
					);
				},
			},
			watch: {
				shown: "$_autoShowHide",
				disabled(e) {
					e ? this.dispose() : this.init();
				},
				async container() {
					this.isShown &&
						(this.$_ensureTeleport(), await this.$_computePosition());
				},
				...["triggers", "positioningDisabled"].reduce(
					(e, t) => ((e[t] = "$_refreshListeners"), e),
					{}
				),
				...[
					"placement",
					"distance",
					"skidding",
					"boundary",
					"strategy",
					"overflowPadding",
					"arrowPadding",
					"preventOverflow",
					"shift",
					"shiftCrossAxis",
					"flip",
				].reduce((e, t) => ((e[t] = "$_computePosition"), e), {}),
			},
			created() {
				(this.$_isDisposed = !0),
					(this.randomId = `popper_${[Math.random(), Date.now()]
						.map((e) => e.toString(36).substring(2, 10))
						.join("_")}`),
					this.autoMinSize &&
						console.warn(
							'[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'
						),
					this.autoMaxSize &&
						console.warn(
							"[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead."
						);
			},
			mounted() {
				this.init(), this.$_detachPopperNode();
			},
			activated() {
				this.$_autoShowHide();
			},
			deactivated() {
				this.hide();
			},
			beforeUnmount() {
				this.dispose();
			},
			methods: {
				show({ event: e = null, skipDelay: t = !1, force: n = !1 } = {}) {
					var r, o;
					((r = this.parentPopper) != null &&
						r.lockedChild &&
						this.parentPopper.lockedChild !== this) ||
						((this.$_pendingHide = !1),
						(n || !this.disabled) &&
							(((o = this.parentPopper) == null ? void 0 : o.lockedChild) ===
								this && (this.parentPopper.lockedChild = null),
							this.$_scheduleShow(e, t),
							this.$emit("show"),
							(this.$_showFrameLocked = !0),
							requestAnimationFrame(() => {
								this.$_showFrameLocked = !1;
							})),
						this.$emit("update:shown", !0));
				},
				hide({ event: e = null, skipDelay: t = !1 } = {}) {
					var n;
					if (!this.$_hideInProgress) {
						if (this.shownChildren.size > 0) {
							this.$_pendingHide = !0;
							return;
						}
						if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
							this.parentPopper &&
								((this.parentPopper.lockedChild = this),
								clearTimeout(this.parentPopper.lockedChildTimer),
								(this.parentPopper.lockedChildTimer = setTimeout(() => {
									this.parentPopper.lockedChild === this &&
										(this.parentPopper.lockedChild.hide({ skipDelay: t }),
										(this.parentPopper.lockedChild = null));
								}, 1e3)));
							return;
						}
						((n = this.parentPopper) == null ? void 0 : n.lockedChild) ===
							this && (this.parentPopper.lockedChild = null),
							(this.$_pendingHide = !1),
							this.$_scheduleHide(e, t),
							this.$emit("hide"),
							this.$emit("update:shown", !1);
					}
				},
				init() {
					var e;
					this.$_isDisposed &&
						((this.$_isDisposed = !1),
						(this.isMounted = !1),
						(this.$_events = []),
						(this.$_preventShow = !1),
						(this.$_referenceNode =
							((e = this.referenceNode) == null ? void 0 : e.call(this)) ??
							this.$el),
						(this.$_targetNodes = this.targetNodes().filter(
							(t) => t.nodeType === t.ELEMENT_NODE
						)),
						(this.$_popperNode = this.popperNode()),
						(this.$_innerNode =
							this.$_popperNode.querySelector(".v-popper__inner")),
						(this.$_arrowNode = this.$_popperNode.querySelector(
							".v-popper__arrow-container"
						)),
						this.$_swapTargetAttrs("title", "data-original-title"),
						this.$_detachPopperNode(),
						this.triggers.length && this.$_addEventListeners(),
						this.shown && this.show());
				},
				dispose() {
					this.$_isDisposed ||
						((this.$_isDisposed = !0),
						this.$_removeEventListeners(),
						this.hide({ skipDelay: !0 }),
						this.$_detachPopperNode(),
						(this.isMounted = !1),
						(this.isShown = !1),
						this.$_updateParentShownChildren(!1),
						this.$_swapTargetAttrs("data-original-title", "title"),
						this.$emit("dispose"));
				},
				async onResize() {
					this.isShown &&
						(await this.$_computePosition(), this.$emit("resize"));
				},
				async $_computePosition() {
					if (this.$_isDisposed || this.positioningDisabled) return;
					const e = { strategy: this.strategy, middleware: [] };
					(this.distance || this.skidding) &&
						e.middleware.push(
							V1({ mainAxis: this.distance, crossAxis: this.skidding })
						);
					const t = this.placement.startsWith("auto");
					if (
						(t
							? e.middleware.push(
									D1({ alignment: this.placement.split("-")[1] ?? "" })
							  )
							: (e.placement = this.placement),
						this.preventOverflow &&
							(this.shift &&
								e.middleware.push(
									U1({
										padding: this.overflowPadding,
										boundary: this.boundary,
										crossAxis: this.shiftCrossAxis,
									})
								),
							!t &&
								this.flip &&
								e.middleware.push(
									B1({ padding: this.overflowPadding, boundary: this.boundary })
								)),
						e.middleware.push(
							H1({ element: this.$_arrowNode, padding: this.arrowPadding })
						),
						this.arrowOverflow &&
							e.middleware.push({
								name: "arrowOverflow",
								fn: ({ placement: r, rects: o, middlewareData: s }) => {
									let i;
									const { centerOffset: l } = s.arrow;
									return (
										r.startsWith("top") || r.startsWith("bottom")
											? (i = Math.abs(l) > o.reference.width / 2)
											: (i = Math.abs(l) > o.reference.height / 2),
										{ data: { overflow: i } }
									);
								},
							}),
						this.autoMinSize || this.autoSize)
					) {
						const r = this.autoSize
							? this.autoSize
							: this.autoMinSize
							? "min"
							: null;
						e.middleware.push({
							name: "autoSize",
							fn: ({ rects: o, placement: s, middlewareData: i }) => {
								var l;
								if ((l = i.autoSize) != null && l.skip) return {};
								let a, c;
								return (
									s.startsWith("top") || s.startsWith("bottom")
										? (a = o.reference.width)
										: (c = o.reference.height),
									(this.$_innerNode.style[
										r === "min"
											? "minWidth"
											: r === "max"
											? "maxWidth"
											: "width"
									] = a != null ? `${a}px` : null),
									(this.$_innerNode.style[
										r === "min"
											? "minHeight"
											: r === "max"
											? "maxHeight"
											: "height"
									] = c != null ? `${c}px` : null),
									{ data: { skip: !0 }, reset: { rects: !0 } }
								);
							},
						});
					}
					(this.autoMaxSize || this.autoBoundaryMaxSize) &&
						((this.$_innerNode.style.maxWidth = null),
						(this.$_innerNode.style.maxHeight = null),
						e.middleware.push(
							W1({
								boundary: this.boundary,
								padding: this.overflowPadding,
								apply: ({ availableWidth: r, availableHeight: o }) => {
									(this.$_innerNode.style.maxWidth =
										r != null ? `${r}px` : null),
										(this.$_innerNode.style.maxHeight =
											o != null ? `${o}px` : null);
								},
							})
						));
					const n = await Q1(this.$_referenceNode, this.$_popperNode, e);
					Object.assign(this.result, {
						x: n.x,
						y: n.y,
						placement: n.placement,
						strategy: n.strategy,
						arrow: {
							...n.middlewareData.arrow,
							...n.middlewareData.arrowOverflow,
						},
					});
				},
				$_scheduleShow(e = null, t = !1) {
					if (
						(this.$_updateParentShownChildren(!0),
						(this.$_hideInProgress = !1),
						clearTimeout(this.$_scheduleTimer),
						zt &&
							this.instantMove &&
							zt.instantMove &&
							zt !== this.parentPopper)
					) {
						zt.$_applyHide(!0), this.$_applyShow(!0);
						return;
					}
					t
						? this.$_applyShow()
						: (this.$_scheduleTimer = setTimeout(
								this.$_applyShow.bind(this),
								this.$_computeDelay("show")
						  ));
				},
				$_scheduleHide(e = null, t = !1) {
					if (this.shownChildren.size > 0) {
						this.$_pendingHide = !0;
						return;
					}
					this.$_updateParentShownChildren(!1),
						(this.$_hideInProgress = !0),
						clearTimeout(this.$_scheduleTimer),
						this.isShown && (zt = this),
						t
							? this.$_applyHide()
							: (this.$_scheduleTimer = setTimeout(
									this.$_applyHide.bind(this),
									this.$_computeDelay("hide")
							  ));
				},
				$_computeDelay(e) {
					const t = this.delay;
					return parseInt((t && t[e]) || t || 0);
				},
				async $_applyShow(e = !1) {
					clearTimeout(this.$_disposeTimer),
						clearTimeout(this.$_scheduleTimer),
						(this.skipTransition = e),
						!this.isShown &&
							(this.$_ensureTeleport(),
							await ao(),
							await this.$_computePosition(),
							await this.$_applyShowEffect(),
							this.positioningDisabled ||
								this.$_registerEventListeners(
									[...$r(this.$_referenceNode), ...$r(this.$_popperNode)],
									"scroll",
									() => {
										this.$_computePosition();
									}
								));
				},
				async $_applyShowEffect() {
					if (this.$_hideInProgress) return;
					if (this.computeTransformOrigin) {
						const t = this.$_referenceNode.getBoundingClientRect(),
							n = this.$_popperNode.querySelector(".v-popper__wrapper"),
							r = n.parentNode.getBoundingClientRect(),
							o = t.x + t.width / 2 - (r.left + n.offsetLeft),
							s = t.y + t.height / 2 - (r.top + n.offsetTop);
						this.result.transformOrigin = `${o}px ${s}px`;
					}
					(this.isShown = !0),
						this.$_applyAttrsToTarget({
							"aria-describedby": this.popperId,
							"data-popper-shown": "",
						});
					const e = this.showGroup;
					if (e) {
						let t;
						for (let n = 0; n < Ke.length; n++)
							(t = Ke[n]),
								t.showGroup !== e && (t.hide(), t.$emit("close-group"));
					}
					Ke.push(this), document.body.classList.add("v-popper--some-open");
					for (const t of Qi(this.theme))
						tl(t).push(this),
							document.body.classList.add(`v-popper--some-open--${t}`);
					this.$emit("apply-show"),
						(this.classes.showFrom = !0),
						(this.classes.showTo = !1),
						(this.classes.hideFrom = !1),
						(this.classes.hideTo = !1),
						await ao(),
						(this.classes.showFrom = !1),
						(this.classes.showTo = !0),
						this.noAutoFocus || this.$_popperNode.focus();
				},
				async $_applyHide(e = !1) {
					if (this.shownChildren.size > 0) {
						(this.$_pendingHide = !0), (this.$_hideInProgress = !1);
						return;
					}
					if ((clearTimeout(this.$_scheduleTimer), !this.isShown)) return;
					(this.skipTransition = e),
						Xi(Ke, this),
						Ke.length === 0 &&
							document.body.classList.remove("v-popper--some-open");
					for (const n of Qi(this.theme)) {
						const r = tl(n);
						Xi(r, this),
							r.length === 0 &&
								document.body.classList.remove(`v-popper--some-open--${n}`);
					}
					zt === this && (zt = null),
						(this.isShown = !1),
						this.$_applyAttrsToTarget({
							"aria-describedby": void 0,
							"data-popper-shown": void 0,
						}),
						clearTimeout(this.$_disposeTimer);
					const t = this.disposeTimeout;
					t !== null &&
						(this.$_disposeTimer = setTimeout(() => {
							this.$_popperNode &&
								(this.$_detachPopperNode(), (this.isMounted = !1));
						}, t)),
						this.$_removeEventListeners("scroll"),
						this.$emit("apply-hide"),
						(this.classes.showFrom = !1),
						(this.classes.showTo = !1),
						(this.classes.hideFrom = !0),
						(this.classes.hideTo = !1),
						await ao(),
						(this.classes.hideFrom = !1),
						(this.classes.hideTo = !0);
				},
				$_autoShowHide() {
					this.shown ? this.show() : this.hide();
				},
				$_ensureTeleport() {
					if (this.$_isDisposed) return;
					let e = this.container;
					if (
						(typeof e == "string"
							? (e = window.document.querySelector(e))
							: e === !1 && (e = this.$_targetNodes[0].parentNode),
						!e)
					)
						throw new Error("No container for popover: " + this.container);
					e.appendChild(this.$_popperNode), (this.isMounted = !0);
				},
				$_addEventListeners() {
					const e = (n) => {
						(this.isShown && !this.$_hideInProgress) ||
							((n.usedByTooltip = !0),
							!this.$_preventShow && this.show({ event: n }));
					};
					this.$_registerTriggerListeners(
						this.$_targetNodes,
						Ji,
						this.triggers,
						this.showTriggers,
						e
					),
						this.$_registerTriggerListeners(
							[this.$_popperNode],
							Ji,
							this.popperTriggers,
							this.popperShowTriggers,
							e
						);
					const t = (n) => {
						n.usedByTooltip || this.hide({ event: n });
					};
					this.$_registerTriggerListeners(
						this.$_targetNodes,
						Yi,
						this.triggers,
						this.hideTriggers,
						t
					),
						this.$_registerTriggerListeners(
							[this.$_popperNode],
							Yi,
							this.popperTriggers,
							this.popperHideTriggers,
							t
						);
				},
				$_registerEventListeners(e, t, n) {
					this.$_events.push({ targetNodes: e, eventType: t, handler: n }),
						e.forEach((r) =>
							r.addEventListener(t, n, fn ? { passive: !0 } : void 0)
						);
				},
				$_registerTriggerListeners(e, t, n, r, o) {
					let s = n;
					r != null && (s = typeof r == "function" ? r(s) : r),
						s.forEach((i) => {
							const l = t[i];
							l && this.$_registerEventListeners(e, l, o);
						});
				},
				$_removeEventListeners(e) {
					const t = [];
					this.$_events.forEach((n) => {
						const { targetNodes: r, eventType: o, handler: s } = n;
						!e || e === o
							? r.forEach((i) => i.removeEventListener(o, s))
							: t.push(n);
					}),
						(this.$_events = t);
				},
				$_refreshListeners() {
					this.$_isDisposed ||
						(this.$_removeEventListeners(), this.$_addEventListeners());
				},
				$_handleGlobalClose(e, t = !1) {
					this.$_showFrameLocked ||
						(this.hide({ event: e }),
						e.closePopover
							? this.$emit("close-directive")
							: this.$emit("auto-hide"),
						t &&
							((this.$_preventShow = !0),
							setTimeout(() => {
								this.$_preventShow = !1;
							}, 300)));
				},
				$_detachPopperNode() {
					this.$_popperNode.parentNode &&
						this.$_popperNode.parentNode.removeChild(this.$_popperNode);
				},
				$_swapTargetAttrs(e, t) {
					for (const n of this.$_targetNodes) {
						const r = n.getAttribute(e);
						r && (n.removeAttribute(e), n.setAttribute(t, r));
					}
				},
				$_applyAttrsToTarget(e) {
					for (const t of this.$_targetNodes)
						for (const n in e) {
							const r = e[n];
							r == null ? t.removeAttribute(n) : t.setAttribute(n, r);
						}
				},
				$_updateParentShownChildren(e) {
					let t = this.parentPopper;
					for (; t; )
						e
							? t.shownChildren.add(this.randomId)
							: (t.shownChildren.delete(this.randomId),
							  t.$_pendingHide && t.hide()),
							(t = t.parentPopper);
				},
				$_isAimingPopper() {
					const e = this.$_referenceNode.getBoundingClientRect();
					if (zn >= e.left && zn <= e.right && Mn >= e.top && Mn <= e.bottom) {
						const t = this.$_popperNode.getBoundingClientRect(),
							n = zn - bt,
							r = Mn - vt,
							o =
								t.left +
								t.width / 2 -
								bt +
								(t.top + t.height / 2) -
								vt +
								t.width +
								t.height,
							s = bt + n * o,
							i = vt + r * o;
						return (
							or(bt, vt, s, i, t.left, t.top, t.left, t.bottom) ||
							or(bt, vt, s, i, t.left, t.top, t.right, t.top) ||
							or(bt, vt, s, i, t.right, t.top, t.right, t.bottom) ||
							or(bt, vt, s, i, t.left, t.bottom, t.right, t.bottom)
						);
					}
					return !1;
				},
			},
			render() {
				return this.$slots.default(this.slotData);
			},
		});
typeof document < "u" &&
	typeof window < "u" &&
	(qa
		? (document.addEventListener(
				"touchstart",
				nl,
				fn ? { passive: !0, capture: !0 } : !0
		  ),
		  document.addEventListener(
				"touchend",
				eg,
				fn ? { passive: !0, capture: !0 } : !0
		  ))
		: (window.addEventListener("mousedown", nl, !0),
		  window.addEventListener("click", X1, !0)),
	window.addEventListener("resize", rg));
function nl(e) {
	for (let t = 0; t < Ke.length; t++) {
		const n = Ke[t];
		try {
			const r = n.popperNode();
			n.$_mouseDownContains = r.contains(e.target);
		} catch {}
	}
}
function X1(e) {
	Wa(e);
}
function eg(e) {
	Wa(e, !0);
}
function Wa(e, t = !1) {
	const n = {};
	for (let r = Ke.length - 1; r >= 0; r--) {
		const o = Ke[r];
		try {
			const s = (o.$_containsGlobalTarget = tg(o, e));
			(o.$_pendingHide = !1),
				requestAnimationFrame(() => {
					if (((o.$_pendingHide = !1), !n[o.randomId] && rl(o, s, e))) {
						if (
							(o.$_handleGlobalClose(e, t),
							!e.closeAllPopover && e.closePopover && s)
						) {
							let l = o.parentPopper;
							for (; l; ) (n[l.randomId] = !0), (l = l.parentPopper);
							return;
						}
						let i = o.parentPopper;
						for (; i && rl(i, i.$_containsGlobalTarget, e); )
							i.$_handleGlobalClose(e, t), (i = i.parentPopper);
					}
				});
		} catch {}
	}
}
function tg(e, t) {
	const n = e.popperNode();
	return e.$_mouseDownContains || n.contains(t.target);
}
function rl(e, t, n) {
	return n.closeAllPopover || (n.closePopover && t) || (ng(e, n) && !t);
}
function ng(e, t) {
	if (typeof e.autoHide == "function") {
		const n = e.autoHide(t);
		return (e.lastAutoHide = n), n;
	}
	return e.autoHide;
}
function rg(e) {
	for (let t = 0; t < Ke.length; t++) Ke[t].$_computePosition(e);
}
let bt = 0,
	vt = 0,
	zn = 0,
	Mn = 0;
typeof window < "u" &&
	window.addEventListener(
		"mousemove",
		(e) => {
			(bt = zn), (vt = Mn), (zn = e.clientX), (Mn = e.clientY);
		},
		fn ? { passive: !0 } : void 0
	);
function or(e, t, n, r, o, s, i, l) {
	const a =
			((i - o) * (t - s) - (l - s) * (e - o)) /
			((l - s) * (n - e) - (i - o) * (r - t)),
		c =
			((n - e) * (t - s) - (r - t) * (e - o)) /
			((l - s) * (n - e) - (i - o) * (r - t));
	return a >= 0 && a <= 1 && c >= 0 && c <= 1;
}
const og = { extends: Ua() },
	bs = (e, t) => {
		const n = e.__vccOpts || e;
		for (const [r, o] of t) n[r] = o;
		return n;
	};
function sg(e, t, n, r, o, s) {
	return (
		ne(),
		ye(
			"div",
			{
				ref: "reference",
				class: Ne(["v-popper", { "v-popper--shown": e.slotData.isShown }]),
			},
			[Fe(e.$slots, "default", al(ea(e.slotData)))],
			2
		)
	);
}
const ig = bs(og, [["render", sg]]);
function lg() {
	var e = window.navigator.userAgent,
		t = e.indexOf("MSIE ");
	if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
	var n = e.indexOf("Trident/");
	if (n > 0) {
		var r = e.indexOf("rv:");
		return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10);
	}
	var o = e.indexOf("Edge/");
	return o > 0 ? parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) : -1;
}
let dr;
function Ao() {
	Ao.init || ((Ao.init = !0), (dr = lg() !== -1));
}
var Wr = {
	name: "ResizeObserver",
	props: {
		emitOnMount: { type: Boolean, default: !1 },
		ignoreWidth: { type: Boolean, default: !1 },
		ignoreHeight: { type: Boolean, default: !1 },
	},
	emits: ["notify"],
	mounted() {
		Ao(),
			Go(() => {
				(this._w = this.$el.offsetWidth),
					(this._h = this.$el.offsetHeight),
					this.emitOnMount && this.emitSize();
			});
		const e = document.createElement("object");
		(this._resizeObject = e),
			e.setAttribute("aria-hidden", "true"),
			e.setAttribute("tabindex", -1),
			(e.onload = this.addResizeHandlers),
			(e.type = "text/html"),
			dr && this.$el.appendChild(e),
			(e.data = "about:blank"),
			dr || this.$el.appendChild(e);
	},
	beforeUnmount() {
		this.removeResizeHandlers();
	},
	methods: {
		compareAndNotify() {
			((!this.ignoreWidth && this._w !== this.$el.offsetWidth) ||
				(!this.ignoreHeight && this._h !== this.$el.offsetHeight)) &&
				((this._w = this.$el.offsetWidth),
				(this._h = this.$el.offsetHeight),
				this.emitSize());
		},
		emitSize() {
			this.$emit("notify", { width: this._w, height: this._h });
		},
		addResizeHandlers() {
			this._resizeObject.contentDocument.defaultView.addEventListener(
				"resize",
				this.compareAndNotify
			),
				this.compareAndNotify();
		},
		removeResizeHandlers() {
			this._resizeObject &&
				this._resizeObject.onload &&
				(!dr &&
					this._resizeObject.contentDocument &&
					this._resizeObject.contentDocument.defaultView.removeEventListener(
						"resize",
						this.compareAndNotify
					),
				this.$el.removeChild(this._resizeObject),
				(this._resizeObject.onload = null),
				(this._resizeObject = null));
		},
	},
};
const ag = Uc();
Qo("data-v-b329ee4c");
const cg = { class: "resize-observer", tabindex: "-1" };
Jo();
const ug = ag((e, t, n, r, o, s) => (ne(), Ue("div", cg)));
Wr.render = ug;
Wr.__scopeId = "data-v-b329ee4c";
Wr.__file = "src/components/ResizeObserver.vue";
const Ka = (e = "theme") => ({
		computed: {
			themeClass() {
				return J1(this[e]);
			},
		},
	}),
	fg = ft({
		name: "VPopperContent",
		components: { ResizeObserver: Wr },
		mixins: [Ka()],
		props: {
			popperId: String,
			theme: String,
			shown: Boolean,
			mounted: Boolean,
			skipTransition: Boolean,
			autoHide: Boolean,
			handleResize: Boolean,
			classes: Object,
			result: Object,
		},
		emits: ["hide", "resize"],
		methods: {
			toPx(e) {
				return e != null && !isNaN(e) ? `${e}px` : null;
			},
		},
	}),
	dg = ["id", "aria-hidden", "tabindex", "data-popper-placement"],
	pg = { ref: "inner", class: "v-popper__inner" },
	hg = F("div", { class: "v-popper__arrow-outer" }, null, -1),
	gg = F("div", { class: "v-popper__arrow-inner" }, null, -1),
	mg = [hg, gg];
function bg(e, t, n, r, o, s) {
	const i = sn("ResizeObserver");
	return (
		ne(),
		ye(
			"div",
			{
				id: e.popperId,
				ref: "popover",
				class: Ne([
					"v-popper__popper",
					[
						e.themeClass,
						e.classes.popperClass,
						{
							"v-popper__popper--shown": e.shown,
							"v-popper__popper--hidden": !e.shown,
							"v-popper__popper--show-from": e.classes.showFrom,
							"v-popper__popper--show-to": e.classes.showTo,
							"v-popper__popper--hide-from": e.classes.hideFrom,
							"v-popper__popper--hide-to": e.classes.hideTo,
							"v-popper__popper--skip-transition": e.skipTransition,
							"v-popper__popper--arrow-overflow":
								e.result && e.result.arrow.overflow,
							"v-popper__popper--no-positioning": !e.result,
						},
					],
				]),
				style: jt(
					e.result
						? {
								position: e.result.strategy,
								transform: `translate3d(${Math.round(
									e.result.x
								)}px,${Math.round(e.result.y)}px,0)`,
						  }
						: void 0
				),
				"aria-hidden": e.shown ? "false" : "true",
				tabindex: e.autoHide ? 0 : void 0,
				"data-popper-placement": e.result ? e.result.placement : void 0,
				onKeyup:
					t[2] || (t[2] = df((l) => e.autoHide && e.$emit("hide"), ["esc"])),
			},
			[
				F("div", {
					class: "v-popper__backdrop",
					onClick: t[0] || (t[0] = (l) => e.autoHide && e.$emit("hide")),
				}),
				F(
					"div",
					{
						class: "v-popper__wrapper",
						style: jt(
							e.result ? { transformOrigin: e.result.transformOrigin } : void 0
						),
					},
					[
						F(
							"div",
							pg,
							[
								e.mounted
									? (ne(),
									  ye(
											Ie,
											{ key: 0 },
											[
												F("div", null, [Fe(e.$slots, "default")]),
												e.handleResize
													? (ne(),
													  Ue(i, {
															key: 0,
															onNotify:
																t[1] || (t[1] = (l) => e.$emit("resize", l)),
													  }))
													: wt("", !0),
											],
											64
									  ))
									: wt("", !0),
							],
							512
						),
						F(
							"div",
							{
								ref: "arrow",
								class: "v-popper__arrow-container",
								style: jt(
									e.result
										? {
												left: e.toPx(e.result.arrow.x),
												top: e.toPx(e.result.arrow.y),
										  }
										: void 0
								),
							},
							mg,
							4
						),
					],
					4
				),
			],
			46,
			dg
		)
	);
}
const Ga = bs(fg, [["render", bg]]),
	Za = {
		methods: {
			show(...e) {
				return this.$refs.popper.show(...e);
			},
			hide(...e) {
				return this.$refs.popper.hide(...e);
			},
			dispose(...e) {
				return this.$refs.popper.dispose(...e);
			},
			onResize(...e) {
				return this.$refs.popper.onResize(...e);
			},
		},
	},
	vg = ft({
		name: "VPopperWrapper",
		components: { Popper: ig, PopperContent: Ga },
		mixins: [Za, Ka("finalTheme")],
		props: { theme: { type: String, default: null } },
		computed: {
			finalTheme() {
				return this.theme ?? this.$options.vPopperTheme;
			},
		},
		methods: {
			getTargetNodes() {
				return Array.from(this.$el.children).filter(
					(e) => e !== this.$refs.popperContent.$el
				);
			},
		},
	});
function yg(e, t, n, r, o, s) {
	const i = sn("PopperContent"),
		l = sn("Popper");
	return (
		ne(),
		Ue(
			l,
			{
				ref: "popper",
				theme: e.finalTheme,
				"target-nodes": e.getTargetNodes,
				"popper-node": () => e.$refs.popperContent.$el,
				class: Ne([e.themeClass]),
			},
			{
				default: ae(
					({
						popperId: a,
						isShown: c,
						shouldMountContent: u,
						skipTransition: f,
						autoHide: h,
						show: g,
						hide: v,
						handleResize: y,
						onResize: P,
						classes: C,
						result: x,
					}) => [
						Fe(e.$slots, "default", { shown: c, show: g, hide: v }),
						W(
							i,
							{
								ref: "popperContent",
								"popper-id": a,
								theme: e.finalTheme,
								shown: c,
								mounted: u,
								"skip-transition": f,
								"auto-hide": h,
								"handle-resize": y,
								classes: C,
								result: x,
								onHide: v,
								onResize: P,
							},
							{
								default: ae(() => [
									Fe(e.$slots, "popper", { shown: c, hide: v }),
								]),
								_: 2,
							},
							1032,
							[
								"popper-id",
								"theme",
								"shown",
								"mounted",
								"skip-transition",
								"auto-hide",
								"handle-resize",
								"classes",
								"result",
								"onHide",
								"onResize",
							]
						),
					]
				),
				_: 3,
			},
			8,
			["theme", "target-nodes", "popper-node", "class"]
		)
	);
}
const vs = bs(vg, [["render", yg]]);
({ ...vs });
({ ...vs });
({ ...vs });
Ua();
const _g = F(
		"a",
		{
			href: "https://vitejs.dev/",
			target: "_blank",
			rel: "noopener",
			class: "green-link",
		},
		"Vite",
		-1
	),
	wg = F(
		"a",
		{
			href: "https://vuejs.org/",
			target: "_blank",
			rel: "noopener",
			class: "green-link",
		},
		"Vue 3",
		-1
	),
	xg = F(
		"a",
		{
			href: "https://create-react-app.dev/",
			target: "_blank",
			rel: "noopener",
			class: "green-link",
		},
		"Create-React-App",
		-1
	),
	kg = F(
		"a",
		{
			href: "https://nextjs.org/",
			target: "_blank",
			rel: "noopener",
			class: "green-link",
		},
		"Next.js",
		-1
	),
	Cg = F(
		"a",
		{
			href: "https://www.python.org/",
			target: "_blank",
			rel: "noopener",
			class: "green-link",
		},
		"Python",
		-1
	),
	$g = F(
		"a",
		{
			href: "https://github.com/jhdk707",
			target: "_blank",
			rel: "noopener",
			class: "button-link",
		},
		" GitHub ",
		-1
	),
	Pg = F("br", null, null, -1),
	Eg = F(
		"a",
		{
			href: "https://www.linkedin.com/in/jesse-h-085117272/",
			target: "_blank",
			rel: "noopener",
		},
		"LinkedIn",
		-1
	),
	Sg = F("br", null, null, -1),
	Tg = F(
		"p",
		null,
		" Download links for my Resume and Certificates that I have acquired ",
		-1
	),
	Rg = F("br", null, null, -1),
	Og = {
		methods: {
			downloadResume() {
				const e = "/JHDKPortfolioVUE/src/assets/Resume.pdf";
				window.open(e, "_blank");
			},
			downloadUcbcert() {
				const e = "/JHDKPortfolioVUE/src/assets/UCBCert.pdf";
				window.open(e, "_blank");
			},
		},
	},
	zg = Object.assign(Og, {
		__name: "WelcomePage",
		setup(e) {
			const t = Wo(!1),
				n = () => {
					t.value = !0;
				},
				r = () => {
					t.value = !1;
				};
			return (o, s) => (
				ne(),
				ye(
					Ie,
					null,
					[
						W(er, null, {
							icon: ae(() => [W(Ud)]),
							heading: ae(() => [Ce("Welcome to my portfolio!")]),
							default: ae(() => [
								Ce(
									" This portfolio is where I like to keep record of accomplishments, showcase my work, certificates, and anything else I wish to share! I will constantly keep updating this page as I learn more. It is built with "
								),
								_g,
								Ce(" + "),
								wg,
								Ce(", and migrated from my original portfolio built with "),
								xg,
								Ce(". "),
							]),
							_: 1,
						}),
						W(er, null, {
							icon: ae(() => [W(Jd)]),
							heading: ae(() => [Ce("Technologies")]),
							default: ae(() => [
								Ce(
									" I graduated from a 6 month Cohort through UC Berkeley Extenstion program in May of 2023. We focused on MERN Stack development with Javascript basis. I have since started learning other JS based frameworks, such as "
								),
								kg,
								Ce(", and Vue/Vite. I am studying "),
								Cg,
								Ce(
									", and intend to learn Java/C languages and learn more software development aswell. Visit the Technologies tab to see what else I've learned! "
								),
							]),
							_: 1,
						}),
						W(er, null, {
							icon: ae(() => [W(c0)]),
							heading: ae(() => [Ce("Contact Me")]),
							default: ae(() => [
								W(
									ce(wn),
									{ color: "yellow", size: "xs", outline: "" },
									{ default: ae(() => [$g]), _: 1 }
								),
								Pg,
								W(
									ce(wn),
									{ color: "yellow", size: "xs", outline: "" },
									{ default: ae(() => [Eg]), _: 1 }
								),
								Sg,
								F("div", null, [
									W(
										ce(wn),
										{ color: "yellow", size: "xs", outline: "", onClick: n },
										{ default: ae(() => [Ce("Email Me")]), _: 1 }
									),
									W(A0, { isOpen: t.value, onClose: r }, null, 8, ["isOpen"]),
								]),
							]),
							_: 1,
						}),
						W(er, null, {
							icon: ae(() => [W(r0)]),
							heading: ae(() => [Ce(" Resume & Certificates ")]),
							default: ae(() => [
								Tg,
								W(
									ce(wn),
									{
										color: "yellow",
										size: "xs",
										outline: "",
										onClick: o.downloadResume,
									},
									{ default: ae(() => [Ce("Resume")]), _: 1 },
									8,
									["onClick"]
								),
								Rg,
								W(
									ce(wn),
									{
										color: "yellow",
										size: "xs",
										outline: "",
										onClick: o.downloadUcbcert,
									},
									{
										default: ae(() => [Ce("UCB Web Full-Stack Certificate")]),
										_: 1,
									},
									8,
									["onClick"]
								),
							]),
							_: 1,
						}),
					],
					64
				)
			);
		},
	}),
	Mg = {
		__name: "HomeView",
		setup(e) {
			return (t, n) => (ne(), ye("main", null, [W(zg)]));
		},
	},
	Ag = _d({
		history: Hf("/JHDKPortfolioVUE/"),
		routes: [
			{ path: "/", name: "home", component: Mg },
			{
				path: "/projects",
				name: "projects",
				component: () =>
					so(
						() => import("./ProjectPage-1f7efe8a.js"),
						[
							"assets/ProjectPage-1f7efe8a.js",
							"assets/ProjectPage-dbce9f49.css",
						]
					),
			},
			{
				path: "/tech",
				name: "tech",
				component: () =>
					so(
						() => import("./TechPage-3ca2b3aa.js"),
						["assets/TechPage-3ca2b3aa.js", "assets/TechPage-ef8753e6.css"]
					),
			},
			{
				path: "/about",
				name: "about",
				component: () =>
					so(
						() => import("./AboutMe-85014c96.js"),
						["assets/AboutMe-85014c96.js", "assets/AboutMe-e8ab136b.css"]
					),
			},
		],
	}),
	ys = gf(Md);
ys.use(yf());
ys.use(Ag);
ys.mount("#app");
export {
	Ie as F,
	lt as _,
	F as a,
	Ce as b,
	ye as c,
	ta as d,
	Jo as e,
	ne as o,
	Qo as p,
	Ig as r,
	Gr as t,
};
