"use strict";
(self.webpackChunkpwb_website_base = self.webpackChunkpwb_website_base || []).push([[462], {
    2546: (e, t, n) => {
        n.d(t, {
            D: () => r,
            x: () => i
        });
        var o = function(e, t, n, o) {
            return new (n || (n = Promise))((function(i, r) {
                function s(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(s, a)
                }
                c((o = o.apply(e, t || [])).next())
            }
            ))
        };
        function i(e) {
            return o(this, void 0, void 0, (function*() {
                if (!window._pwLoadFileFromCache)
                    throw new Error("Load file from cache function missing.");
                return yield window._pwLoadFileFromCache(e)
            }
            ))
        }
        function r(e, t) {
            window._pwSetFileCache && window._pwSetFileCache(e, t)
        }
    }
    ,
    8949: (e, t, n) => {
        n.d(t, {
            W: () => i,
            b: () => r
        });
        const o = {
            disposePageCallbacks: []
        };
        function i(e) {
            o.disposePageCallbacks.push(e)
        }
        function r() {
            const e = o.disposePageCallbacks;
            for (o.disposePageCallbacks = []; e.length > 0; ) {
                const t = e.pop();
                if (t)
                    try {
                        t()
                    } catch (e) {
                        console.error("Router page dispose callback error:", e)
                    }
            }
        }
    }
    ,
    2462: (e, t, n) => {
        var o, i, r;
        n.r(t),
        n.d(t, {
            currentPath: () => cr,
            currentSectionHash: () => lr,
            default: () => yr,
            navigateTo: () => mr
        }),
        function(e) {
            e.Position = "position",
            e.Spacing = "spacing",
            e.Size = "size",
            e.Layout = "layout",
            e.Style = "style",
            e.Font = "font",
            e.Image = "image",
            e.Video = "video",
            e.Link = "link",
            e.Scene = "scene",
            e.ScrollSection = "scrollSection",
            e.Effects = "effects",
            e.Audio = "audio",
            e.AudioStyle = "audioStyle",
            e.Interactions = "interactions",
            e.RelativeOverlay = "relativeOverlay",
            e.LoadingBar = "loadingBar",
            e.States = "states",
            e.Anchor = "anchor",
            e.Embed = "embed"
        }(o || (o = {})),
        function(e) {
            e.Wrapper = "wrapper",
            e.Text = "text",
            e.TextNode = "textnode",
            e.Block = "block",
            e.Rows = "rows",
            e.Columns = "columns",
            e.Grid = "grid",
            e.Image = "image",
            e.Video = "video",
            e.Scene = "scene",
            e.LinkBox = "link",
            e.Audio = "audio",
            e.RelativeOverlay = "relativeOverlay",
            e.LoadingBar = "loadingBar",
            e.Anchor = "anchor",
            e.Embed = "embed"
        }(i || (i = {})),
        function(e) {
            e.Auto = "",
            e.Eager = "eager",
            e.Lazy = "lazy"
        }(r || (r = {}));
        const s = "pwb-loading-wrap"
          , a = "pwb-body-wrap"
          , c = "pwb-error-page-wrap";
        var l = n(6615)
          , u = n(7615)
          , d = n(3664)
          , f = n(5454)
          , p = n(2546)
          , h = function(e, t, n, o) {
            return new (n || (n = Promise))((function(i, r) {
                function s(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(s, a)
                }
                c((o = o.apply(e, t || [])).next())
            }
            ))
        };
        const m = (e, t, n="/") => h(void 0, void 0, void 0, (function*() {
            const o = `${(0,
            d.gZ)(n)}${e}`
              , i = yield(0,
            p.x)(o);
            if (!i)
                throw new Error(`Failed to fetch "${o}".`);
            const r = yield fetch(i)
              , s = r.headers.get("content-type") || "";
            if (!s.includes(t))
                throw new Error(`Unexpected content type "${s}" for file "${o}".`);
            return r
        }
        ))
          , g = (e, t) => h(void 0, void 0, void 0, (function*() {
            const n = t => {
                var n, o;
                const i = null === (n = e.devices[t]) || void 0 === n ? void 0 : n.canvases;
                if (i)
                    return null === (o = Object.values(i)[0]) || void 0 === o ? void 0 : o.sceneId
            }
            ;
            let o = n(t);
            for (; t !== u.SN.Desktop && void 0 === o; )
                t === u.SN.Mobile ? t = u.SN.Tablet : t === u.SN.Tablet && (t = u.SN.Desktop),
                o = n(t);
            if (!o || "None" === o)
                return null;
            const i = yield m(`${f.lx.SceneState}/${o}.json`, "application/json");
            return yield i.json()
        }
        ))
          , y = e => h(void 0, void 0, void 0, (function*() {
            const t = yield m(`${f.lx.UIState}`, "application/json", e);
            return yield t.json()
        }
        ))
          , v = e => h(void 0, void 0, void 0, (function*() {
            try {
                const t = yield m(f.lx.PageVisualScript, "application/json", e);
                return yield t.json()
            } catch (e) {
                return
            }
        }
        ))
          , b = e => h(void 0, void 0, void 0, (function*() {
            const t = yield m(f.lx.Index, "text/html", e);
            return yield t.text()
        }
        ))
          , w = e => h(void 0, void 0, void 0, (function*() {
            const t = yield m(f.lx.Styles, "text/css", e);
            return yield t.text()
        }
        ))
          , _ = () => h(void 0, void 0, void 0, (function*() {
            const e = yield m(f.lx.ErrorPage, "text/html");
            return yield e.text()
        }
        ))
          , S = () => h(void 0, void 0, void 0, (function*() {
            const e = yield m(f.lx.ErrorPageStyles, "text/css");
            return yield e.text()
        }
        ));
        var E = n(5062)
          , O = n(385)
          , P = n(8938)
          , T = n(4441);
        const M = new WeakMap
          , R = new WeakMap
          , x = Symbol("pointerMeta")
          , A = {
            get(e, t) {
                if (t === x)
                    return M.get(e);
                let n = R.get(e);
                n || (n = new Map,
                R.set(e, n));
                const o = n.get(t);
                if (void 0 !== o)
                    return o;
                const i = M.get(e)
                  , r = k({
                    root: i.root,
                    path: [...i.path, t]
                });
                return n.set(t, r),
                r
            }
        }
          , C = e => e[x]
          , D = e => {
            const {root: t, path: n} = C(e);
            return {
                root: t,
                path: n
            }
        }
        ;
        function k(e) {
            var t;
            const n = {
                root: e.root,
                path: null !== (t = e.path) && void 0 !== t ? t : []
            }
              , o = {};
            return M.set(o, n),
            new Proxy(o,A)
        }
        const I = k
          , j = e => e && !!C(e);
        const N = (e, t, n) => {
            if (0 === t.length)
                return n(e);
            if (Array.isArray(e)) {
                let[o,...i] = t;
                o = parseInt(String(o), 10),
                isNaN(o) && (o = 0);
                const r = e[o]
                  , s = N(r, i, n);
                if (r === s)
                    return e;
                const a = [...e];
                return a.splice(o, 1, s),
                a
            }
            if ("object" == typeof e && null !== e) {
                const [o,...i] = t
                  , r = e[o]
                  , s = N(r, i, n);
                if (r === s)
                    return e;
                return Object.assign(Object.assign({}, e), {
                    [o]: s
                })
            }
            {
                const [e,...o] = t;
                return {
                    [e]: N(void 0, o, n)
                }
            }
        }
        ;
        class L {
            constructor() {
                this._head = void 0
            }
            peek() {
                return this._head && this._head.data
            }
            pop() {
                const e = this._head;
                if (e)
                    return this._head = e.next,
                    e.data
            }
            push(e) {
                const t = {
                    next: this._head,
                    data: e
                };
                this._head = t
            }
        }
        function B() {
            const e = new L
              , t = () => {}
            ;
            return {
                type: "Dataverse_discoveryMechanism",
                startIgnoringDependencies: () => {
                    e.push(t)
                }
                ,
                stopIgnoringDependencies: () => {
                    e.peek() !== t || e.pop()
                }
                ,
                reportResolutionStart: n => {
                    const o = e.peek();
                    o && o(n),
                    e.push(t)
                }
                ,
                reportResolutionEnd: t => {
                    e.pop()
                }
                ,
                pushCollector: t => {
                    e.push(t)
                }
                ,
                popCollector: t => {
                    if (e.peek() !== t)
                        throw new Error("Popped collector is not on top of the stack");
                    e.pop()
                }
            }
        }
        const {startIgnoringDependencies: F, stopIgnoringDependencies: U, reportResolutionEnd: V, reportResolutionStart: H, pushCollector: W, popCollector: z} = function() {
            const e = "__dataverse_discoveryMechanism_sharedStack"
              , t = "undefined" != typeof window ? window : void 0 !== n.g ? n.g : {};
            if (t) {
                const n = t[e];
                if (n && "object" == typeof n && "Dataverse_discoveryMechanism" === n.type)
                    return n;
                {
                    const n = B();
                    return t[e] = n,
                    n
                }
            }
            return B()
        }()
          , $ = () => {}
        ;
        class G {
            constructor(e, t) {
                this._fn = e,
                this._prismInstance = t,
                this._didMarkDependentsAsStale = !1,
                this._isFresh = !1,
                this._cacheOfDendencyValues = new Map,
                this._dependents = new Set,
                this._dependencies = new Set,
                this._possiblyStaleDeps = new Set,
                this._scope = new J(this),
                this._lastValue = void 0,
                this._forciblySetToStale = !1,
                this._reactToDependencyGoingStale = e => {
                    this._possiblyStaleDeps.add(e),
                    this._markAsStale()
                }
                ;
                for (const e of this._dependencies)
                    e._addDependent(this._reactToDependencyGoingStale);
                F(),
                this.getValue(),
                U()
            }
            get hasDependents() {
                return this._dependents.size > 0
            }
            removeDependent(e) {
                this._dependents.delete(e)
            }
            addDependent(e) {
                this._dependents.add(e)
            }
            destroy() {
                for (const e of this._dependencies)
                    e._removeDependent(this._reactToDependencyGoingStale);
                Y(this._scope)
            }
            getValue() {
                if (!this._isFresh) {
                    const e = this._recalculate();
                    this._lastValue = e,
                    this._isFresh = !0,
                    this._didMarkDependentsAsStale = !1,
                    this._forciblySetToStale = !1
                }
                return this._lastValue
            }
            _recalculate() {
                let e;
                if (!this._forciblySetToStale && this._possiblyStaleDeps.size > 0) {
                    let e = !1;
                    F();
                    for (const t of this._possiblyStaleDeps)
                        if (this._cacheOfDendencyValues.get(t) !== t.getValue()) {
                            e = !0;
                            break
                        }
                    if (U(),
                    this._possiblyStaleDeps.clear(),
                    !e)
                        return this._lastValue
                }
                const t = new Set;
                this._cacheOfDendencyValues.clear();
                const n = e => {
                    t.add(e),
                    this._addDependency(e)
                }
                ;
                W(n),
                Q.push(this._scope);
                try {
                    e = this._fn()
                } catch (e) {
                    console.error(e)
                } finally {
                    Q.pop() !== this._scope && console.warn("The Prism hook stack has slipped. This is a bug.")
                }
                z(n);
                for (const e of this._dependencies)
                    t.has(e) || this._removeDependency(e);
                this._dependencies = t,
                F();
                for (const e of t)
                    this._cacheOfDendencyValues.set(e, e.getValue());
                return U(),
                e
            }
            forceStale() {
                this._forciblySetToStale = !0,
                this._markAsStale()
            }
            _markAsStale() {
                if (!this._didMarkDependentsAsStale) {
                    this._didMarkDependentsAsStale = !0,
                    this._isFresh = !1;
                    for (const e of this._dependents)
                        e(this._prismInstance)
                }
            }
            _addDependency(e) {
                this._dependencies.has(e) || (this._dependencies.add(e),
                e._addDependent(this._reactToDependencyGoingStale))
            }
            _removeDependency(e) {
                this._dependencies.has(e) && (this._dependencies.delete(e),
                e._removeDependent(this._reactToDependencyGoingStale))
            }
        }
        const q = {};
        class X {
            constructor(e) {
                this._fn = e,
                this.isPrism = !0,
                this._state = {
                    hot: !1,
                    handle: void 0
                }
            }
            get isHot() {
                return this._state.hot
            }
            onChange(e, t, n=!1) {
                const o = () => {
                    e.onThisOrNextTick(r)
                }
                ;
                let i = q;
                const r = () => {
                    const e = this.getValue();
                    e !== i && (i = e,
                    t(e))
                }
                ;
                this._addDependent(o),
                n && (i = this.getValue(),
                t(i));
                return () => {
                    this._removeDependent(o),
                    e.offThisOrNextTick(r),
                    e.offNextTick(r)
                }
            }
            onStale(e) {
                const t = () => e();
                return this._addDependent(t),
                () => {
                    this._removeDependent(t)
                }
            }
            keepHot() {
                return this.onStale(( () => {}
                ))
            }
            _addDependent(e) {
                this._state.hot || this._goHot(),
                this._state.handle.addDependent(e)
            }
            _goHot() {
                const e = new G(this._fn,this);
                this._state = {
                    hot: !0,
                    handle: e
                }
            }
            _removeDependent(e) {
                const t = this._state;
                if (!t.hot)
                    return;
                const n = t.handle;
                n.removeDependent(e),
                n.hasDependents || (this._state = {
                    hot: !1,
                    handle: void 0
                },
                n.destroy())
            }
            getValue() {
                H(this);
                const e = this._state;
                let t;
                return t = e.hot ? e.handle.getValue() : function(e) {
                    const t = new ne;
                    let n;
                    Q.push(t);
                    try {
                        n = e()
                    } catch (e) {
                        console.error(e)
                    } finally {
                        Q.pop() !== t && console.warn("The Prism hook stack has slipped. This is a bug.")
                    }
                    return n
                }(this._fn),
                V(this),
                t
            }
        }
        class J {
            constructor(e) {
                this._hotHandle = e,
                this._refs = new Map,
                this.isPrismScope = !0,
                this.subs = {},
                this.effects = new Map,
                this.memos = new Map
            }
            ref(e, t) {
                const n = this._refs.get(e);
                if (void 0 !== n)
                    return n;
                {
                    const n = {
                        current: t
                    };
                    return this._refs.set(e, n),
                    n
                }
            }
            effect(e, t, n) {
                let o = this.effects.get(e);
                void 0 === o && (o = {
                    cleanup: $,
                    deps: void 0
                },
                this.effects.set(e, o)),
                Z(o.deps, n) && (o.cleanup(),
                F(),
                o.cleanup = K(t, $).value,
                U(),
                o.deps = n)
            }
            memo(e, t, n) {
                let o = this.memos.get(e);
                return void 0 === o && (o = {
                    cachedValue: null,
                    deps: void 0
                },
                this.memos.set(e, o)),
                Z(o.deps, n) && (F(),
                o.cachedValue = K(t, void 0).value,
                U(),
                o.deps = n),
                o.cachedValue
            }
            state(e, t) {
                const {value: n, setValue: o} = this.memo("state/" + e, ( () => {
                    const e = {
                        current: t
                    };
                    return {
                        value: e,
                        setValue: t => {
                            e.current = t,
                            this._hotHandle.forceStale()
                        }
                    }
                }
                ), []);
                return [n.current, o]
            }
            sub(e) {
                return this.subs[e] || (this.subs[e] = new J(this._hotHandle)),
                this.subs[e]
            }
            cleanupEffects() {
                for (const e of this.effects.values())
                    K(e.cleanup, void 0);
                this.effects.clear()
            }
            source(e, t) {
                return this.effect("$$source/blah", ( () => e(( () => {
                    this._hotHandle.forceStale()
                }
                ))), [e]),
                t()
            }
        }
        function Y(e) {
            for (const t of Object.values(e.subs))
                Y(t);
            e.cleanupEffects()
        }
        function K(e, t) {
            try {
                return {
                    value: e(),
                    ok: !0
                }
            } catch (e) {
                return setTimeout((function() {
                    throw e
                }
                )),
                {
                    value: t,
                    ok: !1
                }
            }
        }
        const Q = new L;
        function Z(e, t) {
            if (void 0 === e || void 0 === t)
                return !0;
            const n = e.length;
            if (n !== t.length)
                return !0;
            for (let o = 0; o < n; o++)
                if (e[o] !== t[o])
                    return !0;
            return !1
        }
        function ee(e, t, n) {
            const o = Q.peek();
            if (!o)
                throw new Error("prism.memo() is called outside of a prism() call.");
            return o.memo(e, t, n)
        }
        const te = e => new X(e);
        class ne {
            effect(e, t, n) {
                console.warn("prism.effect() does not run in cold prisms")
            }
            memo(e, t, n) {
                return t()
            }
            state(e, t) {
                return [t, () => {}
                ]
            }
            ref(e, t) {
                return {
                    current: t
                }
            }
            sub(e) {
                return new ne
            }
            source(e, t) {
                return t()
            }
        }
        te.ref = function(e, t) {
            const n = Q.peek();
            if (!n)
                throw new Error("prism.ref() is called outside of a prism() call.");
            return n.ref(e, t)
        }
        ,
        te.effect = function(e, t, n) {
            const o = Q.peek();
            if (!o)
                throw new Error("prism.effect() is called outside of a prism() call.");
            return o.effect(e, t, n)
        }
        ,
        te.memo = ee,
        te.ensurePrism = function() {
            if (!Q.peek())
                throw new Error("The parent function is called outside of a prism() call.")
        }
        ,
        te.state = function(e, t) {
            const n = Q.peek();
            if (!n)
                throw new Error("prism.state() is called outside of a prism() call.");
            return n.state(e, t)
        }
        ,
        te.scope = function(e, t) {
            const n = Q.peek();
            if (!n)
                throw new Error("prism.scope() is called outside of a prism() call.");
            const o = n.sub(e);
            Q.push(o);
            const i = K(t, void 0).value;
            return Q.pop(),
            i
        }
        ,
        te.sub = function(e, t, n) {
            return ee(e, ( () => te(t)), n).getValue()
        }
        ,
        te.inPrism = function() {
            return !!Q.peek()
        }
        ,
        te.source = function(e, t) {
            const n = Q.peek();
            if (!n)
                throw new Error("prism.source() is called outside of a prism() call.");
            return n.source(e, t)
        }
        ;
        const oe = te;
        var ie;
        !function(e) {
            e[e.Dict = 0] = "Dict",
            e[e.Array = 1] = "Array",
            e[e.Other = 2] = "Other"
        }(ie || (ie = {}));
        const re = e => Array.isArray(e) ? ie.Array : (0,
        P.A)(e) ? ie.Dict : ie.Other
          , se = (e, t, n=re(e)) => n === ie.Dict && "string" == typeof t || n === ie.Array && ae(t) ? e[t] : void 0
          , ae = e => {
            const t = "number" == typeof e ? e : parseInt(e, 10);
            return !isNaN(t) && t >= 0 && t < 1 / 0 && (0 | t) === t
        }
        ;
        class ce {
            constructor(e, t) {
                this._parent = e,
                this._path = t,
                this.children = new Map,
                this.identityChangeListeners = new Set
            }
            addIdentityChangeListener(e) {
                this.identityChangeListeners.add(e)
            }
            removeIdentityChangeListener(e) {
                this.identityChangeListeners.delete(e),
                this._checkForGC()
            }
            removeChild(e) {
                this.children.delete(e),
                this._checkForGC()
            }
            getChild(e) {
                return this.children.get(e)
            }
            getOrCreateChild(e) {
                let t = this.children.get(e);
                return t || (t = t = new ce(this,this._path.concat([e])),
                this.children.set(e, t)),
                t
            }
            _checkForGC() {
                this.identityChangeListeners.size > 0 || this.children.size > 0 || this._parent && this._parent.removeChild((0,
                T.A)(this._path))
            }
        }
        class le {
            constructor(e) {
                this.$$isPointerToPrismProvider = !0,
                this.pointer = I({
                    root: this,
                    path: []
                }),
                this.prism = this.pointerToPrism(this.pointer),
                this.onChangeByPointer = (e, t) => {
                    const n = j(e) ? e : e(this.pointer)
                      , {path: o} = D(n)
                      , i = this._getOrCreateScopeForPath(o);
                    i.identityChangeListeners.add(t);
                    return () => {
                        i.identityChangeListeners.delete(t)
                    }
                }
                ,
                this._currentState = e,
                this._rootScope = new ce(void 0,[])
            }
            set(e) {
                const t = this._currentState;
                this._currentState = e,
                this._checkUpdates(this._rootScope, t, e)
            }
            get() {
                return this._currentState
            }
            getByPointer(e) {
                const t = j(e) ? e : e(this.pointer)
                  , n = D(t).path;
                return this._getIn(n)
            }
            _getIn(e) {
                return 0 === e.length ? this.get() : (0,
                O.A)(this.get(), e)
            }
            reduce(e) {
                this.set(e(this.get()))
            }
            reduceByPointer(e, t) {
                const n = j(e) ? e : e(this.pointer)
                  , o = D(n).path
                  , i = function(e, t, n) {
                    return 0 === t.length ? n(e) : N(e, t, n)
                }(this.get(), o, t);
                this.set(i)
            }
            setByPointer(e, t) {
                this.reduceByPointer(e, ( () => t))
            }
            _checkUpdates(e, t, n) {
                if (t === n)
                    return;
                for (const t of e.identityChangeListeners)
                    t(n);
                if (0 === e.children.size)
                    return;
                const o = re(t)
                  , i = re(n);
                if (o !== ie.Other || o !== i)
                    for (const [r,s] of e.children) {
                        const e = se(t, r, o)
                          , a = se(n, r, i);
                        this._checkUpdates(s, e, a)
                    }
            }
            _getOrCreateScopeForPath(e) {
                let t = this._rootScope;
                for (const n of e)
                    t = t.getOrCreateChild(n);
                return t
            }
            onChange(e) {
                return this.onChangeByPointer(this.pointer, e)
            }
            pointerToPrism(e) {
                const {path: t} = D(e)
                  , n = t => this.onChangeByPointer(e, t)
                  , o = () => this._getIn(t);
                return oe(( () => oe.source(n, o)))
            }
        }
        function ue(e) {
            return !(!e || !e.isPrism || !0 !== e.isPrism)
        }
        const de = new WeakMap;
        const fe = e => {
            const t = C(e);
            let n = de.get(t);
            if (!n) {
                const o = t.root;
                if (!function(e) {
                    return "object" == typeof e && null !== e && !0 === e.$$isPointerToPrismProvider
                }(o))
                    throw new Error("Cannot run pointerToPrism() on a pointer whose root is not an PointerToPrismProvider");
                n = o.pointerToPrism(e),
                de.set(t, n)
            }
            return n
        }
          , pe = e => j(e) ? fe(e).getValue() : ue(e) ? e.getValue() : e;
        class he {
            get dormant() {
                return this._dormant
            }
            constructor(e) {
                this._conf = e,
                this._ticking = !1,
                this._dormant = !0,
                this._numberOfDormantTicks = 0,
                this.__ticks = 0,
                this._scheduledForThisOrNextTick = new Set,
                this._scheduledForNextTick = new Set,
                this._timeAtCurrentTick = 0
            }
            onThisOrNextTick(e) {
                this._scheduledForThisOrNextTick.add(e),
                this._dormant && this._goActive()
            }
            onNextTick(e) {
                this._scheduledForNextTick.add(e),
                this._dormant && this._goActive()
            }
            offThisOrNextTick(e) {
                this._scheduledForThisOrNextTick.delete(e)
            }
            offNextTick(e) {
                this._scheduledForNextTick.delete(e)
            }
            get time() {
                return this._ticking ? this._timeAtCurrentTick : performance.now()
            }
            _goActive() {
                var e, t;
                this._dormant && (this._dormant = !1,
                null === (t = null === (e = this._conf) || void 0 === e ? void 0 : e.onActive) || void 0 === t || t.call(e))
            }
            _goDormant() {
                var e, t;
                this._dormant || (this._dormant = !0,
                this._numberOfDormantTicks = 0,
                null === (t = null === (e = this._conf) || void 0 === e ? void 0 : e.onDormant) || void 0 === t || t.call(e))
            }
            tick(e=performance.now()) {
                if (this.__ticks++,
                !this._dormant && 0 === this._scheduledForNextTick.size && 0 === this._scheduledForThisOrNextTick.size && (this._numberOfDormantTicks++,
                this._numberOfDormantTicks >= 180))
                    this._goDormant();
                else {
                    this._ticking = !0,
                    this._timeAtCurrentTick = e;
                    for (const e of this._scheduledForNextTick)
                        this._scheduledForThisOrNextTick.add(e);
                    this._scheduledForNextTick.clear(),
                    this._tick(0),
                    this._ticking = !1
                }
            }
            _tick(e) {
                const t = this.time;
                if (e > 10 && console.warn("_tick() recursing for 10 times"),
                e > 100)
                    throw new Error("Maximum recursion limit for _tick()");
                const n = this._scheduledForThisOrNextTick;
                this._scheduledForThisOrNextTick = new Set;
                for (const e of n)
                    e(t);
                if (this._scheduledForThisOrNextTick.size > 0)
                    return this._tick(e + 1)
            }
        }
        class me {
            constructor(e) {
                this.$$isPointerToPrismProvider = !0,
                this._currentPointerBox = new le(e),
                this.pointer = I({
                    root: this,
                    path: []
                })
            }
            setPointer(e) {
                this._currentPointerBox.set(e)
            }
            pointerToPrism(e) {
                const {path: t} = C(e);
                return oe(( () => {
                    const e = this._currentPointerBox.prism.getValue()
                      , n = t.reduce(( (e, t) => e[t]), e);
                    return pe(n)
                }
                ))
            }
        }
        const ge = new class {
            constructor() {
                this.atom = new le({
                    projects: {}
                })
            }
            add(e, t) {
                this.atom.setByPointer((t => t.projects[e]), t)
            }
            get(e) {
                return this.atom.get().projects[e]
            }
            has(e) {
                return !!this.get(e)
            }
        }
          , ye = new WeakMap;
        function ve(e) {
            return ye.get(e)
        }
        function be(e, t) {
            ye.set(e, t)
        }
        const we = [];
        function _e(e, t) {
            return 0 === t.length ? e : (0,
            O.A)(e, t)
        }
        class Se {
            constructor() {
                this._values = {}
            }
            get(e, t) {
                if (this.has(e))
                    return this._values[e];
                {
                    const n = t();
                    return this._values[e] = n,
                    n
                }
            }
            has(e) {
                return this._values.hasOwnProperty(e)
            }
        }
        var Ee = n(6822);
        const Oe = new WeakMap;
        function Pe(e) {
            if (Oe.has(e))
                return Oe.get(e);
            const t = "compound" === e.type ? function(e) {
                const t = {};
                for (const [n,o] of Object.entries(e.props))
                    t[n] = Pe(o);
                return t
            }(e) : "enum" === e.type ? function(e) {
                const t = {
                    $case: e.defaultCase
                };
                for (const [n,o] of Object.entries(e.cases))
                    t[n] = Pe(o);
                return t
            }(e) : e.default;
            return Oe.set(e, t),
            t
        }
        var Te = n(5314)
          , Me = n.n(Te)
          , Re = n(7853);
        function xe(e) {
            const t = new Map;
            return n => (t.has(n) || t.set(n, e(n)),
            t.get(n))
        }
        var Ae;
        function Ce(e, t, n) {
            return oe(( () => {
                const o = pe(t)
                  , i = oe.memo("driver", ( () => o ? "BasicKeyframedTrack" === o.type ? function(e, t, n) {
                    return oe(( () => {
                        const e = oe.ref("state", {
                            started: !1
                        });
                        let o = e.current;
                        const i = n.getValue();
                        return (!o.started || i < o.validFrom || o.validTo <= i) && (e.current = o = function(e, t, n) {
                            const o = Ae.getSortedKeyframesCached(n.keyframes)
                              , i = t.getValue();
                            if (0 === o.length)
                                return {
                                    started: !0,
                                    validFrom: -1 / 0,
                                    validTo: 1 / 0,
                                    der: De
                                };
                            let r = 0;
                            for (; ; ) {
                                const e = o[r];
                                if (!e)
                                    return ke.error;
                                const n = r === o.length - 1;
                                if (i < e.position)
                                    return 0 === r ? ke.beforeFirstKeyframe(e) : ke.error;
                                if (e.position === i)
                                    return n ? ke.lastKeyframe(e) : ke.between(e, o[r + 1], t);
                                if (r === o.length - 1)
                                    return ke.lastKeyframe(e);
                                {
                                    const n = r + 1;
                                    if (o[n].position <= i) {
                                        r = n;
                                        continue
                                    }
                                    return ke.between(e, o[r + 1], t)
                                }
                            }
                        }(0, n, t)),
                        o.der.getValue()
                    }
                    ))
                }(0, o, n) : (e.logger.error("Track type not yet supported."),
                oe(( () => {}
                ))) : oe(( () => {}
                ))), [o]);
                return i.getValue()
            }
            ))
        }
        !function(e) {
            e.getSortedKeyframes = e => {
                const t = Object.values(e.byId);
                return t.sort(( (e, t) => e.position - t.position)),
                (0,
                Re.A)(t)
            }
            ,
            e.getSortedKeyframesCached = xe(e.getSortedKeyframes),
            e.fromArray = e => {
                const t = {}
                  , n = {};
                for (const o of e)
                    t[o.id] = o,
                    n[o.id] = !0;
                return (0,
                Re.A)({
                    byId: t,
                    allIds: n
                })
            }
            ,
            e.fromSortedKeyframesCached = xe(e.fromArray)
        }(Ae || (Ae = {}));
        const De = oe(( () => {}
        ));
        const ke = {
            beforeFirstKeyframe: e => ({
                started: !0,
                validFrom: -1 / 0,
                validTo: e.position,
                der: oe(( () => ({
                    left: e.value,
                    progression: 0
                })))
            }),
            lastKeyframe: e => ({
                started: !0,
                validFrom: e.position,
                validTo: 1 / 0,
                der: oe(( () => ({
                    left: e.value,
                    progression: 0
                })))
            }),
            between(e, t, n) {
                if (!e.connectedRight)
                    return {
                        started: !0,
                        validFrom: e.position,
                        validTo: t.position,
                        der: oe(( () => ({
                            left: e.value,
                            progression: 0
                        })))
                    };
                const o = n => (n - e.position) / (t.position - e.position);
                if (!e.type || "bezier" === e.type) {
                    const i = new (Me())(e.handles[2],e.handles[3],t.handles[0],t.handles[1])
                      , r = oe(( () => {
                        const r = o(n.getValue())
                          , s = i.solveSimple(r);
                        return {
                            left: e.value,
                            right: t.value,
                            progression: s
                        }
                    }
                    ));
                    return {
                        started: !0,
                        validFrom: e.position,
                        validTo: t.position,
                        der: r
                    }
                }
                const i = oe(( () => {
                    const i = o(n.getValue())
                      , r = Math.floor(i);
                    return {
                        left: e.value,
                        right: t.value,
                        progression: r
                    }
                }
                ));
                return {
                    started: !0,
                    validFrom: e.position,
                    validTo: t.position,
                    der: i
                }
            },
            error: {
                started: !0,
                validFrom: -1 / 0,
                validTo: 1 / 0,
                der: De
            }
        };
        function Ie(e, t, n) {
            const o = n.get(e);
            if (o && o.override === t)
                return o.merged;
            const i = Object.assign({}, e);
            for (const o of Object.keys(t)) {
                const r = t[o]
                  , s = e[o];
                i[o] = "object" == typeof r && "object" == typeof s ? Ie(s, r, n) : void 0 === r ? s : r
            }
            return n.set(e, {
                override: t,
                merged: i
            }),
            i
        }
        function je(e, t) {
            let n = e;
            for (const e of t)
                n = n[e];
            return n
        }
        var Ne = n(7028);
        class Le {
            get type() {
                return "Theatre_SheetObject_PublicAPI"
            }
            constructor(e) {
                this._cache = new Se,
                this._keepHotUntapDebounce = void 0,
                be(this, e)
            }
            get props() {
                return ve(this).propsP
            }
            get sheet() {
                return ve(this).sheet.publicApi
            }
            get project() {
                return ve(this).sheet.project.publicApi
            }
            get address() {
                return Object.assign({}, ve(this).address)
            }
            _valuesPrism() {
                return this._cache.get("_valuesPrism", ( () => {
                    const e = ve(this);
                    return oe(( () => pe(e.getValues().getValue())))
                }
                ))
            }
            onValuesChange(e, t) {
                return function(e, t, n) {
                    const o = n ? ve(n).ticker : Rt();
                    if (j(e)) {
                        return fe(e).onChange(o, t, !0)
                    }
                    if (ue(e))
                        return e.onChange(o, t, !0);
                    throw new Error("Called onChange(p) where p is neither a pointer nor a prism.")
                }(this._valuesPrism(), e, t)
            }
            get value() {
                const e = this._valuesPrism();
                if (!e.isHot) {
                    null != this._keepHotUntapDebounce && this._keepHotUntapDebounce.flush();
                    const t = e.keepHot();
                    this._keepHotUntapDebounce = (0,
                    Ne.A)(( () => {
                        t(),
                        this._keepHotUntapDebounce = void 0
                    }
                    ), 5e3)
                }
                return this._keepHotUntapDebounce && this._keepHotUntapDebounce(),
                e.getValue()
            }
            set initialValue(e) {
                ve(this).setInitialValue(e)
            }
        }
        function Be(e) {
            return "compound" === e.type || "enum" === e.type
        }
        function Fe(e, t) {
            if (!e)
                return;
            const [n,...o] = t;
            if (void 0 === n)
                return e;
            if (!Be(e))
                return;
            return Fe("enum" === e.type ? e.cases[n] : e.props[n], o)
        }
        const Ue = xe((e => {
            if ("enum" === e.type)
                throw new Error("Not implemented yet for enums");
            for (const t in e.props) {
                const n = e.props[t];
                if (!Be(n))
                    return !0;
                if (Ue(n))
                    return !0
            }
            return !1
        }
        ));
        class Ve {
            get type() {
                return "Theatre_SheetObject"
            }
            constructor(e, t, n) {
                this.sheet = e,
                this.template = t,
                this.nativeObject = n,
                this.$$isPointerToPrismProvider = !0,
                this._initialValue = new le({}),
                this._cache = new Se,
                this._logger = e._logger.named("SheetObject", t.address.objectKey),
                this._logger._trace("creating object"),
                this._internalUtilCtx = {
                    logger: this._logger.utilFor.internal()
                },
                this.address = Object.assign(Object.assign({}, t.address), {
                    sheetInstanceId: e.address.sheetInstanceId
                }),
                this.publicApi = new Le(this)
            }
            getValues() {
                return this._cache.get("getValues()", ( () => oe(( () => {
                    const e = Ie(pe(this.template.getDefaultValues()), pe(this._initialValue.pointer), oe.memo("withInitialCache", ( () => new WeakMap), []));
                    let t, n = Ie(e, pe(this.template.getStaticValues()), oe.memo("withStatics", ( () => new WeakMap), []));
                    {
                        const e = oe.memo("seq", ( () => this.getSequencedValues()), [])
                          , o = oe.memo("withSeqsCache", ( () => new WeakMap), []);
                        t = pe(pe(e));
                        n = Ie(n, t, o)
                    }
                    return ( (e, t) => {
                        const n = oe.memo(e, ( () => new le(t)), []);
                        return n.set(t),
                        n
                    }
                    )("finalAtom", n).pointer
                }
                ))))
            }
            getValueByPointer(e) {
                const t = pe(this.getValues())
                  , {path: n} = D(e);
                return pe(je(t, n))
            }
            pointerToPrism(e) {
                const {path: t} = D(e);
                return oe(( () => {
                    const e = pe(this.getValues());
                    return pe(je(e, t))
                }
                ))
            }
            getSequencedValues() {
                return oe(( () => {
                    const e = oe.memo("tracksToProcess", ( () => this.template.getArrayOfValidSequenceTracks()), [])
                      , t = pe(e)
                      , n = new le({})
                      , o = pe(this.template.configPointer);
                    return oe.effect("processTracks", ( () => {
                        const e = [];
                        for (const {trackId: i, pathToProp: r} of t) {
                            const t = this._trackIdToPrism(i)
                              , s = Fe(o, r)
                              , a = s.deserializeAndSanitize
                              , c = s.interpolate
                              , l = () => {
                                const e = t.getValue();
                                if (!e)
                                    return n.setByPointer((e => je(e, r)), void 0);
                                const o = a(e.left)
                                  , i = void 0 === o ? s.default : o;
                                if (void 0 === e.right)
                                    return n.setByPointer((e => je(e, r)), i);
                                const l = a(e.right)
                                  , u = void 0 === l ? s.default : l;
                                return n.setByPointer((e => je(e, r)), c(i, u, e.progression))
                            }
                              , u = t.onStale(l);
                            l(),
                            e.push(u)
                        }
                        return () => {
                            for (const t of e)
                                t()
                        }
                    }
                    ), [o, ...t]),
                    n.pointer
                }
                ))
            }
            _trackIdToPrism(e) {
                const t = this.template.project.pointers.historic.sheetsById[this.address.sheetId].sequence.tracksByObject[this.address.objectKey].trackData[e]
                  , n = this.sheet.getSequence().positionPrism;
                return Ce(this._internalUtilCtx, t, n)
            }
            get propsP() {
                return this._cache.get("propsP", ( () => I({
                    root: this,
                    path: []
                })))
            }
            validateValue(e, t) {}
            setInitialValue(e) {
                this.validateValue(this.propsP, e),
                this._initialValue.set(e)
            }
        }
        function He(e) {
            return function(t, n) {
                return e(t, n())
            }
        }
        var We, ze, $e, Ge;
        !function(e) {
            e[e.GENERAL = 1] = "GENERAL",
            e[e.TODO = 2] = "TODO",
            e[e.TROUBLESHOOTING = 4] = "TROUBLESHOOTING"
        }(We || (We = {})),
        function(e) {
            e[e.INTERNAL = 8] = "INTERNAL",
            e[e.DEV = 16] = "DEV",
            e[e.PUBLIC = 32] = "PUBLIC"
        }(ze || (ze = {})),
        function(e) {
            e[e.TRACE = 64] = "TRACE",
            e[e.DEBUG = 128] = "DEBUG",
            e[e.WARN = 256] = "WARN",
            e[e.ERROR = 512] = "ERROR"
        }($e || ($e = {})),
        function(e) {
            e[e.ERROR_PUBLIC = 545] = "ERROR_PUBLIC",
            e[e.ERROR_DEV = 529] = "ERROR_DEV",
            e[e._HMM = 524] = "_HMM",
            e[e._TODO = 522] = "_TODO",
            e[e._ERROR = 521] = "_ERROR",
            e[e.WARN_PUBLIC = 289] = "WARN_PUBLIC",
            e[e.WARN_DEV = 273] = "WARN_DEV",
            e[e._KAPOW = 268] = "_KAPOW",
            e[e._WARN = 265] = "_WARN",
            e[e.DEBUG_DEV = 145] = "DEBUG_DEV",
            e[e._DEBUG = 137] = "_DEBUG",
            e[e.TRACE_DEV = 81] = "TRACE_DEV",
            e[e._TRACE = 73] = "_TRACE"
        }(Ge || (Ge = {}));
        const qe = {
            _hmm: Xe(Ge._HMM),
            _todo: Xe(Ge._TODO),
            _error: Xe(Ge._ERROR),
            errorDev: Xe(Ge.ERROR_DEV),
            errorPublic: Xe(Ge.ERROR_PUBLIC),
            _kapow: Xe(Ge._KAPOW),
            _warn: Xe(Ge._WARN),
            warnDev: Xe(Ge.WARN_DEV),
            warnPublic: Xe(Ge.WARN_PUBLIC),
            _debug: Xe(Ge._DEBUG),
            debugDev: Xe(Ge.DEBUG_DEV),
            _trace: Xe(Ge._TRACE),
            traceDev: Xe(Ge.TRACE_DEV)
        };
        function Xe(e) {
            return Object.freeze({
                audience: Je(e, ze.INTERNAL) ? "internal" : Je(e, ze.DEV) ? "dev" : "public",
                category: Je(e, We.TROUBLESHOOTING) ? "troubleshooting" : Je(e, We.TODO) ? "todo" : "general",
                level: Je(e, $e.ERROR) ? $e.ERROR : Je(e, $e.WARN) ? $e.WARN : Je(e, $e.DEBUG) ? $e.DEBUG : $e.TRACE
            })
        }
        function Je(e, t) {
            return (e & t) === t
        }
        function Ye(e, t) {
            return ((t & ze.PUBLIC) === ze.PUBLIC || ((t & ze.DEV) === ze.DEV ? e.dev : (t & ze.INTERNAL) === ze.INTERNAL && e.internal)) && e.min <= t
        }
        const Ke = {
            loggingConsoleStyle: !0,
            loggerConsoleStyle: !0,
            includes: Object.freeze({
                internal: !1,
                dev: !1,
                min: $e.WARN
            }),
            filtered: function() {},
            include: function() {
                return {}
            },
            create: null,
            creatExt: null,
            named(e, t, n) {
                return this.create({
                    names: [...e.names, {
                        name: t,
                        key: n
                    }]
                })
            },
            style: {
                bold: void 0,
                italic: void 0,
                cssMemo: new Map([["", ""]]),
                collapseOnRE: /[a-z- ]+/g,
                color: void 0,
                collapsed(e) {
                    if (e.length < 5)
                        return e;
                    const t = e.replace(this.collapseOnRE, "");
                    return this.cssMemo.has(t) || this.cssMemo.set(t, this.css(e)),
                    t
                },
                css(e) {
                    var t, n, o, i;
                    const r = this.cssMemo.get(e);
                    if (r)
                        return r;
                    let s = `color:${null !== (n = null === (t = this.color) || void 0 === t ? void 0 : t.call(this, e)) && void 0 !== n ? n : `hsl(${(e.charCodeAt(0) + e.charCodeAt(e.length - 1)) % 360}, 100%, 60%)`}`;
                    return (null === (o = this.bold) || void 0 === o ? void 0 : o.test(e)) && (s += ";font-weight:600"),
                    (null === (i = this.italic) || void 0 === i ? void 0 : i.test(e)) && (s += ";font-style:italic"),
                    this.cssMemo.set(e, s),
                    s
                }
            }
        };
        function Qe(e=console, t={}) {
            const n = Object.assign(Object.assign({}, Ke), {
                includes: Object.assign({}, Ke.includes)
            })
              , o = {
                styled: tt.bind(n, e),
                noStyle: nt.bind(n, e)
            }
              , i = et.bind(n);
            function r() {
                return n.loggingConsoleStyle && n.loggerConsoleStyle ? o.styled : o.noStyle
            }
            return n.create = r(),
            {
                configureLogger(e) {
                    var t;
                    "console" === e ? (n.loggerConsoleStyle = Ke.loggerConsoleStyle,
                    n.create = r()) : "console" === e.type ? (n.loggerConsoleStyle = null !== (t = e.style) && void 0 !== t ? t : Ke.loggerConsoleStyle,
                    n.create = r()) : "keyed" === e.type ? (n.creatExt = t => e.keyed(t.names),
                    n.create = i) : "named" === e.type && (n.creatExt = Ze.bind(null, e.named),
                    n.create = i)
                },
                configureLogging(e) {
                    var t, o, i, s, a;
                    n.includes.dev = null !== (t = e.dev) && void 0 !== t ? t : Ke.includes.dev,
                    n.includes.internal = null !== (o = e.internal) && void 0 !== o ? o : Ke.includes.internal,
                    n.includes.min = null !== (i = e.min) && void 0 !== i ? i : Ke.includes.min,
                    n.include = null !== (s = e.include) && void 0 !== s ? s : Ke.include,
                    n.loggingConsoleStyle = null !== (a = e.consoleStyle) && void 0 !== a ? a : Ke.loggingConsoleStyle,
                    n.create = r()
                },
                getLogger: () => n.create({
                    names: []
                })
            }
        }
        function Ze(e, t) {
            const n = [];
            for (let {name: e, key: o} of t.names)
                n.push(null == o ? e : `${e} (${o})`);
            return e(n)
        }
        function et(e) {
            const t = Object.assign(Object.assign({}, this.includes), this.include(e))
              , n = this.filtered
              , o = this.named.bind(this, e)
              , i = this.creatExt(e)
              , r = Ye(t, Ge._HMM)
              , s = Ye(t, Ge._TODO)
              , a = Ye(t, Ge._ERROR)
              , c = Ye(t, Ge.ERROR_DEV)
              , l = Ye(t, Ge.ERROR_PUBLIC)
              , u = Ye(t, Ge._WARN)
              , d = Ye(t, Ge._KAPOW)
              , f = Ye(t, Ge.WARN_DEV)
              , p = Ye(t, Ge.WARN_PUBLIC)
              , h = Ye(t, Ge._DEBUG)
              , m = Ye(t, Ge.DEBUG_DEV)
              , g = Ye(t, Ge._TRACE)
              , y = Ye(t, Ge.TRACE_DEV)
              , v = r ? i.error.bind(i, qe._hmm) : n.bind(e, Ge._HMM)
              , b = s ? i.error.bind(i, qe._todo) : n.bind(e, Ge._TODO)
              , w = a ? i.error.bind(i, qe._error) : n.bind(e, Ge._ERROR)
              , _ = c ? i.error.bind(i, qe.errorDev) : n.bind(e, Ge.ERROR_DEV)
              , S = l ? i.error.bind(i, qe.errorPublic) : n.bind(e, Ge.ERROR_PUBLIC)
              , E = d ? i.warn.bind(i, qe._kapow) : n.bind(e, Ge._KAPOW)
              , O = u ? i.warn.bind(i, qe._warn) : n.bind(e, Ge._WARN)
              , P = f ? i.warn.bind(i, qe.warnDev) : n.bind(e, Ge.WARN_DEV)
              , T = p ? i.warn.bind(i, qe.warnPublic) : n.bind(e, Ge.WARN_DEV)
              , M = h ? i.debug.bind(i, qe._debug) : n.bind(e, Ge._DEBUG)
              , R = m ? i.debug.bind(i, qe.debugDev) : n.bind(e, Ge.DEBUG_DEV)
              , x = g ? i.trace.bind(i, qe._trace) : n.bind(e, Ge._TRACE)
              , A = y ? i.trace.bind(i, qe.traceDev) : n.bind(e, Ge.TRACE_DEV)
              , C = {
                _hmm: v,
                _todo: b,
                _error: w,
                errorDev: _,
                errorPublic: S,
                _kapow: E,
                _warn: O,
                warnDev: P,
                warnPublic: T,
                _debug: M,
                debugDev: R,
                _trace: x,
                traceDev: A,
                lazy: {
                    _hmm: r ? He(v) : v,
                    _todo: s ? He(b) : b,
                    _error: a ? He(w) : w,
                    errorDev: c ? He(_) : _,
                    errorPublic: l ? He(S) : S,
                    _kapow: d ? He(E) : E,
                    _warn: u ? He(O) : O,
                    warnDev: f ? He(P) : P,
                    warnPublic: p ? He(T) : T,
                    _debug: h ? He(M) : M,
                    debugDev: m ? He(R) : R,
                    _trace: g ? He(x) : x,
                    traceDev: y ? He(A) : A
                },
                named: o,
                utilFor: {
                    internal: () => ({
                        debug: C._debug,
                        error: C._error,
                        warn: C._warn,
                        trace: C._trace,
                        named: (e, t) => C.named(e, t).utilFor.internal()
                    }),
                    dev: () => ({
                        debug: C.debugDev,
                        error: C.errorDev,
                        warn: C.warnDev,
                        trace: C.traceDev,
                        named: (e, t) => C.named(e, t).utilFor.dev()
                    }),
                    public: () => ({
                        error: C.errorPublic,
                        warn: C.warnPublic,
                        debug(e, t) {
                            C._warn(`(public "debug" filtered out) ${e}`, t)
                        },
                        trace(e, t) {
                            C._warn(`(public "trace" filtered out) ${e}`, t)
                        },
                        named: (e, t) => C.named(e, t).utilFor.public()
                    })
                }
            };
            return C
        }
        function tt(e, t) {
            const n = Object.assign(Object.assign({}, this.includes), this.include(t))
              , o = [];
            let i = "";
            for (let e = 0; e < t.names.length; e++) {
                const {name: n, key: r} = t.names[e];
                if (i += ` %c${n}`,
                o.push(this.style.css(n)),
                null != r) {
                    const e = `%c#${r}`;
                    i += e,
                    o.push(this.style.css(e))
                }
            }
            const r = this.filtered
              , s = this.named.bind(this, t)
              , a = [i, ...o];
            return ot(r, t, n, e, a, function(e) {
                const t = e.slice(0);
                for (let e = 1; e < t.length; e++)
                    t[e] += ";background-color:#e0005a;padding:2px;color:white";
                return t
            }(a), s)
        }
        function nt(e, t) {
            const n = Object.assign(Object.assign({}, this.includes), this.include(t));
            let o = "";
            for (let e = 0; e < t.names.length; e++) {
                const {name: n, key: i} = t.names[e];
                o += ` ${n}`,
                null != i && (o += `#${i}`)
            }
            const i = [o];
            return ot(this.filtered, t, n, e, i, i, this.named.bind(this, t))
        }
        function ot(e, t, n, o, i, r, s) {
            const a = Ye(n, Ge._HMM)
              , c = Ye(n, Ge._TODO)
              , l = Ye(n, Ge._ERROR)
              , u = Ye(n, Ge.ERROR_DEV)
              , d = Ye(n, Ge.ERROR_PUBLIC)
              , f = Ye(n, Ge._WARN)
              , p = Ye(n, Ge._KAPOW)
              , h = Ye(n, Ge.WARN_DEV)
              , m = Ye(n, Ge.WARN_PUBLIC)
              , g = Ye(n, Ge._DEBUG)
              , y = Ye(n, Ge.DEBUG_DEV)
              , v = Ye(n, Ge._TRACE)
              , b = Ye(n, Ge.TRACE_DEV)
              , w = a ? o.error.bind(o, ...i) : e.bind(t, Ge._HMM)
              , _ = c ? o.error.bind(o, ...i) : e.bind(t, Ge._TODO)
              , S = l ? o.error.bind(o, ...i) : e.bind(t, Ge._ERROR)
              , E = u ? o.error.bind(o, ...i) : e.bind(t, Ge.ERROR_DEV)
              , O = d ? o.error.bind(o, ...i) : e.bind(t, Ge.ERROR_PUBLIC)
              , P = p ? o.warn.bind(o, ...r) : e.bind(t, Ge._KAPOW)
              , T = f ? o.warn.bind(o, ...i) : e.bind(t, Ge._WARN)
              , M = h ? o.warn.bind(o, ...i) : e.bind(t, Ge.WARN_DEV)
              , R = m ? o.warn.bind(o, ...i) : e.bind(t, Ge.WARN_DEV)
              , x = g ? o.info.bind(o, ...i) : e.bind(t, Ge._DEBUG)
              , A = y ? o.info.bind(o, ...i) : e.bind(t, Ge.DEBUG_DEV)
              , C = v ? o.debug.bind(o, ...i) : e.bind(t, Ge._TRACE)
              , D = b ? o.debug.bind(o, ...i) : e.bind(t, Ge.TRACE_DEV)
              , k = {
                _hmm: w,
                _todo: _,
                _error: S,
                errorDev: E,
                errorPublic: O,
                _kapow: P,
                _warn: T,
                warnDev: M,
                warnPublic: R,
                _debug: x,
                debugDev: A,
                _trace: C,
                traceDev: D,
                lazy: {
                    _hmm: a ? He(w) : w,
                    _todo: c ? He(_) : _,
                    _error: l ? He(S) : S,
                    errorDev: u ? He(E) : E,
                    errorPublic: d ? He(O) : O,
                    _kapow: p ? He(P) : P,
                    _warn: f ? He(T) : T,
                    warnDev: h ? He(M) : M,
                    warnPublic: m ? He(R) : R,
                    _debug: g ? He(x) : x,
                    debugDev: y ? He(A) : A,
                    _trace: v ? He(C) : C,
                    traceDev: b ? He(D) : D
                },
                named: s,
                utilFor: {
                    internal: () => ({
                        debug: k._debug,
                        error: k._error,
                        warn: k._warn,
                        trace: k._trace,
                        named: (e, t) => k.named(e, t).utilFor.internal()
                    }),
                    dev: () => ({
                        debug: k.debugDev,
                        error: k.errorDev,
                        warn: k.warnDev,
                        trace: k.traceDev,
                        named: (e, t) => k.named(e, t).utilFor.dev()
                    }),
                    public: () => ({
                        error: k.errorPublic,
                        warn: k.warnPublic,
                        debug(e, t) {
                            k._warn(`(public "debug" filtered out) ${e}`, t)
                        },
                        trace(e, t) {
                            k._warn(`(public "trace" filtered out) ${e}`, t)
                        },
                        named: (e, t) => k.named(e, t).utilFor.public()
                    })
                }
            };
            return k
        }
        const it = Qe(console, {
            _debug: function() {},
            _error: function() {}
        });
        it.configureLogging({
            dev: !0,
            min: $e.TRACE
        });
        const rt = it.getLogger().named("Theatre.js (default logger)").utilFor.dev()
          , st = new WeakMap;
        function at(e, t, n) {
            for (const [o,i] of Object.entries(t.props))
                if (!Be(i)) {
                    const t = [...e, o];
                    n.set(JSON.stringify(t), n.size),
                    ct(t, i, n)
                }
            for (const [o,i] of Object.entries(t.props))
                if (Be(i)) {
                    const t = [...e, o];
                    n.set(JSON.stringify(t), n.size),
                    ct(t, i, n)
                }
        }
        function ct(e, t, n) {
            if ("compound" === t.type)
                at(e, t, n);
            else {
                if ("enum" === t.type)
                    throw new Error("Enums aren't supported yet");
                n.set(JSON.stringify(e), n.size)
            }
        }
        var lt = n(2190);
        function ut(e) {
            return "object" == typeof e && null !== e && 0 === Object.keys(e).length
        }
        class dt {
            get staticConfig() {
                return this._config.get()
            }
            get configPointer() {
                return this._config.pointer
            }
            get _temp_actions() {
                return this._temp_actions_atom.get()
            }
            get _temp_actionsPointer() {
                return this._temp_actions_atom.pointer
            }
            constructor(e, t, n, o, i) {
                this.sheetTemplate = e,
                this.type = "Theatre_SheetObjectTemplate",
                this._cache = new Se,
                this.address = Object.assign(Object.assign({}, e.address), {
                    objectKey: t
                }),
                this._config = new le(o),
                this._temp_actions_atom = new le(i),
                this.project = e.project,
                this.pointerToSheetState = this.sheetTemplate.project.pointers.historic.sheetsById[this.address.sheetId],
                this.pointerToStaticOverrides = this.pointerToSheetState.staticOverrides.byObject[this.address.objectKey]
            }
            createInstance(e, t, n) {
                return this._config.set(n),
                new Ve(e,this,t)
            }
            reconfigure(e) {
                this._config.set(e)
            }
            _temp_setActions(e) {
                this._temp_actions_atom.set(e)
            }
            getDefaultValues() {
                return this._cache.get("getDefaultValues()", ( () => oe(( () => function(e) {
                    return Pe(e)
                }(pe(this.configPointer))))))
            }
            getStaticValues() {
                return this._cache.get("getStaticValues", ( () => oe(( () => {
                    var e;
                    const t = null !== (e = pe(this.pointerToStaticOverrides)) && void 0 !== e ? e : {};
                    return pe(this.configPointer).deserializeAndSanitize(t) || {}
                }
                ))))
            }
            getArrayOfValidSequenceTracks() {
                return this._cache.get("getArrayOfValidSequenceTracks", ( () => oe(( () => {
                    const e = this.project.pointers.historic.sheetsById[this.address.sheetId]
                      , t = pe(e.sequence.tracksByObject[this.address.objectKey].trackIdByPropPath);
                    if (!t)
                        return we;
                    const n = [];
                    if (!t)
                        return we;
                    const o = pe(this.configPointer)
                      , i = Object.entries(t);
                    for (const [e,t] of i) {
                        const i = ft(e);
                        if (!i)
                            continue;
                        const r = Fe(o, i);
                        r && !Be(r) && n.push({
                            pathToProp: i,
                            trackId: t
                        })
                    }
                    const r = function(e) {
                        const t = st.get(e);
                        if (t)
                            return t;
                        const n = new Map;
                        return st.set(e, n),
                        at([], e, n),
                        n
                    }(o);
                    return n.sort(( (e, t) => {
                        const n = e.pathToProp
                          , o = t.pathToProp;
                        return r.get(JSON.stringify(n)) > r.get(JSON.stringify(o)) ? 1 : -1
                    }
                    )),
                    0 === n.length ? we : n
                }
                ))))
            }
            getMapOfValidSequenceTracks_forStudio() {
                return this._cache.get("getMapOfValidSequenceTracks_forStudio", ( () => oe(( () => {
                    const e = pe(this.getArrayOfValidSequenceTracks())
                      , t = {};
                    for (const {pathToProp: n, trackId: o} of e)
                        (0,
                        Ee.A)(t, n, o);
                    return t
                }
                ))))
            }
            getStaticButNotSequencedOverrides() {
                return this._cache.get("getStaticButNotSequencedOverrides", ( () => oe(( () => {
                    const e = pe(this.getStaticValues())
                      , t = pe(this.getArrayOfValidSequenceTracks())
                      , n = (0,
                    Re.A)(e);
                    for (const {pathToProp: e} of t) {
                        (0,
                        lt.A)(n, e);
                        let t = e.slice(0, -1);
                        for (; t.length > 0; ) {
                            if (!ut(_e(n, t)))
                                break;
                            (0,
                            lt.A)(n, t),
                            t = t.slice(0, -1)
                        }
                    }
                    return ut(n) ? void 0 : n
                }
                ))))
            }
            getDefaultsAtPointer(e) {
                const {path: t} = D(e);
                return _e(this.getDefaultValues().getValue(), t)
            }
        }
        function ft(e) {
            try {
                return JSON.parse(e)
            } catch (t) {
                return void rt.warn(`property ${JSON.stringify(e)} cannot be parsed. Skipping.`)
            }
        }
        const pt = xe((e => JSON.stringify(e)));
        xe((e => JSON.parse(e)));
        n(2722);
        class ht extends Error {
        }
        class mt extends ht {
        }
        var gt = n(4225);
        function yt() {
            let e, t;
            const n = new Promise(( (n, i) => {
                e = e => {
                    n(e),
                    o.status = "resolved"
                }
                ,
                t = e => {
                    i(e),
                    o.status = "rejected"
                }
            }
            ))
              , o = {
                resolve: e,
                reject: t,
                promise: n,
                status: "pending"
            };
            return o
        }
        const vt = () => {}
        ;
        class bt {
            constructor() {
                this._stopPlayCallback = vt,
                this._state = new le({
                    position: 0,
                    playing: !1
                }),
                this.statePointer = this._state.pointer
            }
            destroy() {}
            pause() {
                this._stopPlayCallback(),
                this.playing = !1,
                this._stopPlayCallback = vt
            }
            gotoPosition(e) {
                this._updatePositionInState(e)
            }
            _updatePositionInState(e) {
                this._state.setByPointer((e => e.position), e)
            }
            getCurrentPosition() {
                return this._state.get().position
            }
            get playing() {
                return this._state.get().playing
            }
            set playing(e) {
                this._state.setByPointer((e => e.playing), e)
            }
            play(e, t, n, o, i) {
                this.playing && this.pause(),
                this.playing = !0;
                const r = t[1] - t[0];
                {
                    const e = this.getCurrentPosition();
                    e < t[0] || e > t[1] ? "normal" === o || "alternate" === o ? this._updatePositionInState(t[0]) : "reverse" !== o && "alternateReverse" !== o || this._updatePositionInState(t[1]) : "normal" === o || "alternate" === o ? e === t[1] && this._updatePositionInState(t[0]) : e === t[0] && this._updatePositionInState(t[1])
                }
                const s = yt()
                  , a = i.time
                  , c = r * e;
                let l = this.getCurrentPosition() - t[0];
                "reverse" !== o && "alternateReverse" !== o || (l = t[1] - this.getCurrentPosition());
                const u = i => {
                    const u = Math.max(i - a, 0) / 1e3
                      , f = Math.min(u * n + l, c);
                    if (f !== c) {
                        const e = Math.floor(f / r);
                        let n = f / r % 1 * r;
                        if ("normal" !== o)
                            if ("reverse" === o)
                                n = r - n;
                            else {
                                const t = e % 2 == 0;
                                "alternate" === o ? t || (n = r - n) : t && (n = r - n)
                            }
                        this._updatePositionInState(n + t[0]),
                        d()
                    } else {
                        if ("normal" === o)
                            this._updatePositionInState(t[1]);
                        else if ("reverse" === o)
                            this._updatePositionInState(t[0]);
                        else {
                            const n = (e - 1) % 2 == 0;
                            "alternate" === o ? n ? this._updatePositionInState(t[1]) : this._updatePositionInState(t[0]) : n ? this._updatePositionInState(t[0]) : this._updatePositionInState(t[1])
                        }
                        this.playing = !1,
                        s.resolve(!0)
                    }
                }
                ;
                this._stopPlayCallback = () => {
                    i.offThisOrNextTick(u),
                    i.offNextTick(u),
                    this.playing && s.resolve(!1)
                }
                ;
                const d = () => i.onNextTick(u);
                return i.onThisOrNextTick(u),
                s.promise
            }
            playDynamicRange(e, t) {
                this.playing && this.pause(),
                this.playing = !0;
                const n = yt()
                  , o = e.keepHot();
                n.promise.then(o, o);
                let i = t.time;
                const r = t => {
                    const n = Math.max(t - i, 0);
                    i = t;
                    const o = n / 1e3
                      , r = this.getCurrentPosition()
                      , a = e.getValue();
                    if (r < a[0] || r > a[1])
                        this.gotoPosition(a[0]);
                    else {
                        let e = r + o;
                        e > a[1] && (e = a[0] + (e - a[1])),
                        this.gotoPosition(e)
                    }
                    s()
                }
                ;
                this._stopPlayCallback = () => {
                    t.offThisOrNextTick(r),
                    t.offNextTick(r),
                    n.resolve(!1)
                }
                ;
                const s = () => t.onNextTick(r);
                return t.onThisOrNextTick(r),
                n.promise
            }
        }
        const wt = "__TheatreJS_CoreBundle"
          , _t = e => (...t) => {
            var n;
            switch (e) {
            case "success":
            case "info":
                rt.debug(t.slice(0, 2).join("\n"));
                break;
            case "warning":
                rt.warn(t.slice(0, 2).join("\n"))
            }
            return "undefined" != typeof window ? null === (n = window.__TheatreJS_Notifications) || void 0 === n ? void 0 : n.notify[e](...t) : void 0
        }
          , St = {
            warning: _t("warning"),
            success: _t("success"),
            info: _t("info"),
            error: _t("error")
        };
        "undefined" != typeof window && (window.addEventListener("error", (e => {
            St.error("An error occurred", `<pre>${e.message}</pre>\n\nSee **console** for details.`)
        }
        )),
        window.addEventListener("unhandledrejection", (e => {
            St.error("An error occurred", `<pre>${e.reason}</pre>\n\nSee **console** for details.`)
        }
        )));
        class Et {
            constructor(e, t, n) {
                this._decodedBuffer = e,
                this._audioContext = t,
                this._nodeDestination = n,
                this._state = new le({
                    position: 0,
                    playing: !1
                }),
                this._stopPlayCallback = vt,
                this.statePointer = this._state.pointer,
                this._mainGain = this._audioContext.createGain(),
                this._mainGain.connect(this._nodeDestination)
            }
            playDynamicRange(e, t) {
                const n = yt();
                let o;
                this._playing && this.pause(),
                this._playing = !0;
                const i = () => {
                    null == o || o(),
                    o = this._loopInRange(e.getValue(), t).stop
                }
                  , r = e.onStale(i);
                return i(),
                this._stopPlayCallback = () => {
                    null == o || o(),
                    r(),
                    n.resolve(!1)
                }
                ,
                n.promise
            }
            _loopInRange(e, t) {
                let n = this.getCurrentPosition();
                const o = e[1] - e[0];
                (n < e[0] || n > e[1] || n === e[1]) && this._updatePositionInState(e[0]),
                n = this.getCurrentPosition();
                const i = this._audioContext.createBufferSource();
                i.buffer = this._decodedBuffer,
                i.connect(this._mainGain),
                i.playbackRate.value = 1,
                i.loop = !0,
                i.loopStart = e[0],
                i.loopEnd = e[1];
                const r = t.time;
                let s = n - e[0];
                i.start(0, n);
                const a = t => {
                    let n = (1 * (Math.max(t - r, 0) / 1e3) + s) / o % 1 * o;
                    this._updatePositionInState(n + e[0]),
                    c()
                }
                  , c = () => t.onNextTick(a);
                t.onThisOrNextTick(a);
                return {
                    stop: () => {
                        i.stop(),
                        i.disconnect(),
                        t.offThisOrNextTick(a),
                        t.offNextTick(a)
                    }
                }
            }
            get _playing() {
                return this._state.get().playing
            }
            set _playing(e) {
                this._state.setByPointer((e => e.playing), e)
            }
            destroy() {}
            pause() {
                this._stopPlayCallback(),
                this._playing = !1,
                this._stopPlayCallback = vt
            }
            gotoPosition(e) {
                this._updatePositionInState(e)
            }
            _updatePositionInState(e) {
                this._state.reduce((t => Object.assign(Object.assign({}, t), {
                    position: e
                })))
            }
            getCurrentPosition() {
                return this._state.get().position
            }
            play(e, t, n, o, i) {
                this._playing && this.pause(),
                this._playing = !0;
                let r = this.getCurrentPosition();
                const s = t[1] - t[0];
                if ("normal" !== o)
                    throw new mt(`Audio-controlled sequences can only be played in the "normal" direction. '${o}' given.`);
                (r < t[0] || r > t[1] || r === t[1]) && this._updatePositionInState(t[0]),
                r = this.getCurrentPosition();
                const a = yt()
                  , c = this._audioContext.createBufferSource();
                c.buffer = this._decodedBuffer,
                c.connect(this._mainGain),
                c.playbackRate.value = n,
                e > 1e3 && (St.warning("Can't play sequences with audio more than 1000 times", `The sequence will still play, but only 1000 times. The \`iterationCount: ${e}\` provided to \`sequence.play()\`\nis too high for a sequence with audio.\n\nTo fix this, either set \`iterationCount\` to a lower value, or remove the audio from the sequence.`, [{
                    url: "https://www.theatrejs.com/docs/latest/manual/audio",
                    title: "Using Audio"
                }, {
                    url: "https://www.theatrejs.com/docs/latest/api/core#sequence.attachaudio",
                    title: "Audio API"
                }]),
                e = 1e3),
                e > 1 && (c.loop = !0,
                c.loopStart = t[0],
                c.loopEnd = t[1]);
                const l = i.time;
                let u = r - t[0];
                const d = s * e;
                c.start(0, r, d - u);
                const f = e => {
                    const o = Math.max(e - l, 0) / 1e3
                      , i = Math.min(o * n + u, d);
                    if (i !== d) {
                        let e = i / s % 1 * s;
                        this._updatePositionInState(e + t[0]),
                        h()
                    } else
                        this._updatePositionInState(t[1]),
                        this._playing = !1,
                        p(),
                        a.resolve(!0)
                }
                  , p = () => {
                    c.stop(),
                    c.disconnect()
                }
                ;
                this._stopPlayCallback = () => {
                    p(),
                    i.offThisOrNextTick(f),
                    i.offNextTick(f),
                    this._playing && a.resolve(!1)
                }
                ;
                const h = () => i.onNextTick(f);
                return i.onThisOrNextTick(f),
                a.promise
            }
        }
        let Ot, Pt = 0;
        function Tt() {
            let e = null;
            const t = function(e) {
                var t;
                const n = new he({
                    onActive() {
                        var t;
                        null === (t = null == e ? void 0 : e.start) || void 0 === t || t.call(e)
                    },
                    onDormant() {
                        var t;
                        null === (t = null == e ? void 0 : e.stop) || void 0 === t || t.call(e)
                    }
                })
                  , o = {
                    tick: e => {
                        n.tick(e)
                    }
                    ,
                    id: Pt++,
                    name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : `CustomRafDriver-${Pt}`,
                    type: "Theatre_RafDriver_PublicAPI"
                };
                return be(o, {
                    type: "Theatre_RafDriver_PrivateAPI",
                    publicApi: o,
                    ticker: n,
                    start: null == e ? void 0 : e.start,
                    stop: null == e ? void 0 : e.stop
                }),
                o
            }({
                name: "DefaultCoreRafDriver",
                start: () => {
                    if ("undefined" != typeof window) {
                        const n = o => {
                            t.tick(o),
                            e = window.requestAnimationFrame(n)
                        }
                        ;
                        e = window.requestAnimationFrame(n)
                    } else
                        t.tick(0),
                        setTimeout(( () => t.tick(1)), 0)
                }
                ,
                stop: () => {
                    "undefined" != typeof window && null !== e && window.cancelAnimationFrame(e)
                }
            });
            return t
        }
        function Mt() {
            return Ot || function(e) {
                if (Ot)
                    throw new Error("`setCoreRafDriver()` is already called.");
                const t = ve(e);
                Ot = t
            }(Tt()),
            Ot
        }
        function Rt() {
            return Mt().ticker
        }
        var xt = function(e, t, n, o) {
            return new (n || (n = Promise))((function(i, r) {
                function s(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(s, a)
                }
                c((o = o.apply(e, t || [])).next())
            }
            ))
        };
        class At {
            get type() {
                return "Theatre_Sequence_PublicAPI"
            }
            constructor(e) {
                be(this, e)
            }
            play(e) {
                const t = ve(this);
                if (t._project.isReady()) {
                    const n = (null == e ? void 0 : e.rafDriver) ? ve(e.rafDriver).ticker : Rt();
                    return t.play(null != e ? e : {}, n)
                }
                {
                    0;
                    const e = yt();
                    return e.resolve(!0),
                    e.promise
                }
            }
            pause() {
                ve(this).pause()
            }
            get position() {
                return ve(this).position
            }
            set position(e) {
                ve(this).position = e
            }
            __experimental_getKeyframes(e) {
                return ve(this).getKeyframesOfSimpleProp(e)
            }
            attachAudio(e) {
                return xt(this, void 0, void 0, (function*() {
                    const {audioContext: t, destinationNode: n, decodedBuffer: o, gainNode: i} = yield function(e) {
                        return xt(this, void 0, void 0, (function*() {
                            function t() {
                                if (e.audioContext)
                                    return Promise.resolve(e.audioContext);
                                const t = new AudioContext;
                                return "running" === t.state || "undefined" == typeof window ? Promise.resolve(t) : new Promise((e => {
                                    const n = () => {
                                        t.resume().catch((e => {
                                            console.error(e)
                                        }
                                        ))
                                    }
                                      , o = ["mousedown", "keydown", "touchstart"]
                                      , i = {
                                        capture: !0,
                                        passive: !1
                                    };
                                    o.forEach((e => {
                                        window.addEventListener(e, n, i)
                                    }
                                    )),
                                    t.addEventListener("statechange", ( () => {
                                        "running" === t.state && (o.forEach((e => {
                                            window.removeEventListener(e, n, i)
                                        }
                                        )),
                                        e(t))
                                    }
                                    ))
                                }
                                ))
                            }
                            function n() {
                                return xt(this, void 0, void 0, (function*() {
                                    if (e.source instanceof AudioBuffer)
                                        return e.source;
                                    const t = yt();
                                    if ("string" != typeof e.source)
                                        throw new Error("Error validating arguments to sequence.attachAudio(). args.source must either be a string or an instance of AudioBuffer.");
                                    let n, i;
                                    try {
                                        n = yield fetch(e.source)
                                    } catch (t) {
                                        throw console.error(t),
                                        new Error(`Could not fetch '${e.source}'. Network error logged above.`)
                                    }
                                    try {
                                        i = yield n.arrayBuffer()
                                    } catch (t) {
                                        throw console.error(t),
                                        new Error(`Could not read '${e.source}' as an arrayBuffer.`)
                                    }
                                    let r;
                                    (yield o).decodeAudioData(i, t.resolve, t.reject);
                                    try {
                                        r = yield t.promise
                                    } catch (t) {
                                        throw console.error(t),
                                        new Error(`Could not decode ${e.source} as an audio file.`)
                                    }
                                    return r
                                }
                                ))
                            }
                            const o = t()
                              , i = n()
                              , [r,s] = yield Promise.all([o, i])
                              , a = e.destinationNode || r.destination
                              , c = r.createGain();
                            return c.connect(a),
                            {
                                audioContext: r,
                                decodedBuffer: s,
                                gainNode: c,
                                destinationNode: a
                            }
                        }
                        ))
                    }(e)
                      , r = new Et(o,t,i);
                    return ve(this).replacePlaybackController(r),
                    {
                        audioContext: t,
                        destinationNode: n,
                        decodedBuffer: o,
                        gainNode: i
                    }
                }
                ))
            }
            get pointer() {
                return ve(this).pointer
            }
        }
        Dt("Theatre_Project"),
        Dt("Theatre_Sheet"),
        Dt("Theatre_SheetTemplate");
        const Ct = Dt("Theatre_SheetObject");
        Dt("Theatre_SheetObjectTemplate"),
        Dt("Theatre_Project_PublicAPI"),
        Dt("Theatre_Sheet_PublicAPI"),
        Dt("Theatre_SheetObject_PublicAPI");
        function Dt(e) {
            return t => "object" == typeof t && !!t && t.type === e
        }
        var kt = function(e, t, n, o) {
            return new (n || (n = Promise))((function(i, r) {
                function s(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(s, a)
                }
                c((o = o.apply(e, t || [])).next())
            }
            ))
        };
        class It {
            constructor(e, t, n, o, i) {
                this._project = e,
                this._sheet = t,
                this._lengthD = n,
                this._subUnitsPerUnitD = o,
                this.pointer = I({
                    root: this,
                    path: []
                }),
                this.$$isPointerToPrismProvider = !0,
                this.closestGridPosition = e => {
                    const t = 1 / this.subUnitsPerUnit;
                    return parseFloat((Math.round(e / t) * t).toFixed(3))
                }
                ,
                this._logger = e._logger.named("Sheet", t.address.sheetId).named("Instance", t.address.sheetInstanceId),
                this.address = Object.assign(Object.assign({}, this._sheet.address), {
                    sequenceName: "default"
                }),
                this.publicApi = new At(this),
                this._playbackControllerBox = new le(null != i ? i : new bt),
                this._prismOfStatePointer = oe(( () => this._playbackControllerBox.prism.getValue().statePointer)),
                this._positionD = oe(( () => {
                    const e = this._prismOfStatePointer.getValue();
                    return pe(e.position)
                }
                )),
                this._positionFormatterD = oe(( () => {
                    const e = pe(this._subUnitsPerUnitD);
                    return new jt(e)
                }
                ))
            }
            pointerToPrism(e) {
                const {path: t} = D(e);
                if (0 === t.length)
                    return oe(( () => ({
                        length: pe(this.pointer.length),
                        playing: pe(this.pointer.playing),
                        position: pe(this.pointer.position)
                    })));
                if (t.length > 1)
                    return oe(( () => {}
                    ));
                const [n] = t;
                return "length" === n ? this._lengthD : "position" === n ? this._positionD : oe("playing" === n ? () => pe(this._prismOfStatePointer.getValue().playing) : () => {}
                )
            }
            getKeyframesOfSimpleProp(e) {
                const {path: t, root: n} = D(e);
                if (!Ct(n))
                    throw new mt("Argument prop must be a pointer to a SheetObject property");
                const o = pe(this._project.pointers.historic.sheetsById[this._sheet.address.sheetId].sequence.tracksByObject[n.address.objectKey]);
                if (!o)
                    return [];
                const {trackData: i, trackIdByPropPath: r} = o
                  , s = r[pt(t)];
                if (!s)
                    return [];
                const a = i[s];
                return a ? Ae.getSortedKeyframesCached(a.keyframes) : []
            }
            get positionFormatter() {
                return this._positionFormatterD.getValue()
            }
            get prismOfStatePointer() {
                return this._prismOfStatePointer
            }
            get length() {
                return this._lengthD.getValue()
            }
            get positionPrism() {
                return this._positionD
            }
            get position() {
                return this._playbackControllerBox.get().getCurrentPosition()
            }
            get subUnitsPerUnit() {
                return this._subUnitsPerUnitD.getValue()
            }
            get positionSnappedToGrid() {
                return this.closestGridPosition(this.position)
            }
            set position(e) {
                let t = e;
                this.pause(),
                t > this.length && (t = this.length);
                const n = this.length;
                this._playbackControllerBox.get().gotoPosition(t > n ? n : t)
            }
            getDurationCold() {
                return this._lengthD.getValue()
            }
            get playing() {
                return pe(this._playbackControllerBox.get().statePointer.playing)
            }
            _makeRangeFromSequenceTemplate() {
                return oe(( () => [0, pe(this._lengthD)]))
            }
            playDynamicRange(e, t) {
                return this._playbackControllerBox.get().playDynamicRange(e, t)
            }
            play(e, t) {
                return kt(this, void 0, void 0, (function*() {
                    const n = this.length
                      , o = e && e.range ? e.range : [0, n];
                    const i = e && "number" == typeof e.iterationCount ? e.iterationCount : 1;
                    const r = e && void 0 !== e.rate ? e.rate : 1;
                    const s = e && e.direction ? e.direction : "normal";
                    return yield this._play(i, [o[0], o[1]], r, s, t)
                }
                ))
            }
            _play(e, t, n, o, i) {
                return this._playbackControllerBox.get().play(e, t, n, o, i)
            }
            pause() {
                this._playbackControllerBox.get().pause()
            }
            replacePlaybackController(e) {
                this.pause();
                const t = this._playbackControllerBox.get();
                this._playbackControllerBox.set(e);
                const n = t.getCurrentPosition();
                t.destroy(),
                e.gotoPosition(n)
            }
        }
        class jt {
            constructor(e) {
                this._fps = e
            }
            formatSubUnitForGrid(e) {
                const t = e % 1
                  , n = 1 / this._fps;
                return Math.round(t / n) + "f"
            }
            formatFullUnitForGrid(e) {
                let t = e
                  , n = "";
                if (t >= Bt) {
                    n += Math.floor(t / Bt) + "h",
                    t %= Bt
                }
                if (t >= Lt) {
                    n += Math.floor(t / Lt) + "m",
                    t %= Lt
                }
                if (t >= Nt) {
                    n += Math.floor(t / Nt) + "s",
                    t %= Nt
                }
                const o = 1 / this._fps;
                if (t >= o) {
                    n += Math.floor(t / o) + "f",
                    t %= o
                }
                return 0 === n.length ? "0s" : n
            }
            formatForPlayhead(e) {
                let t = e
                  , n = "";
                if (t >= Bt) {
                    const e = Math.floor(t / Bt);
                    n += (0,
                    gt.A)(e.toString(), 2, "0") + "h",
                    t %= Bt
                }
                if (t >= Lt) {
                    const e = Math.floor(t / Lt);
                    n += (0,
                    gt.A)(e.toString(), 2, "0") + "m",
                    t %= Lt
                } else
                    n.length > 0 && (n += "00m");
                if (t >= Nt) {
                    const e = Math.floor(t / Nt);
                    n += (0,
                    gt.A)(e.toString(), 2, "0") + "s",
                    t %= Nt
                } else
                    n += "00s";
                const o = 1 / this._fps;
                if (t >= o) {
                    const e = Math.round(t / o);
                    n += (0,
                    gt.A)(e.toString(), 2, "0") + "f",
                    t %= o
                } else if (t / o > .98) {
                    const e = 1;
                    n += (0,
                    gt.A)(e.toString(), 2, "0") + "f",
                    t %= o
                } else
                    n += "00f";
                return 0 === n.length ? "00s00f" : n
            }
            formatBasic(e) {
                return e.toFixed(2) + "s"
            }
        }
        const Nt = 1
          , Lt = 60 * Nt
          , Bt = 60 * Lt;
        var Ft = n(5434);
        function Ut(e, {removeAlphaIfOpaque: t=!1}={}) {
            const n = (255 * e.a | 256).toString(16).slice(1);
            return `#${(255 * e.r | 256).toString(16).slice(1) + (255 * e.g | 256).toString(16).slice(1) + (255 * e.b | 256).toString(16).slice(1) + (t && "ff" === n ? "" : n)}`
        }
        const Vt = xe((e => {
            const t = Object.assign({}, e);
            return Object.defineProperty(t, "toString", {
                value: () => Ut(e),
                enumerable: !1,
                writable: !1,
                configurable: !1
            }),
            t
        }
        ));
        function Ht(e) {
            function t(e) {
                return e >= .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e
            }
            return function(e) {
                return Object.fromEntries(Object.entries(e).map(( ([e,t]) => [e, (0,
                Ft.A)(t, 0, 1)])))
            }({
                r: t(e.r),
                g: t(e.g),
                b: t(e.b),
                a: e.a
            })
        }
        function Wt(e) {
            function t(e) {
                return e >= .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92
            }
            return {
                r: t(e.r),
                g: t(e.g),
                b: t(e.b),
                a: e.a
            }
        }
        function zt(e) {
            let t = .4122214708 * e.r + .5363325363 * e.g + .0514459929 * e.b
              , n = .2119034982 * e.r + .6806995451 * e.g + .1073969566 * e.b
              , o = .0883024619 * e.r + .2817188376 * e.g + .6299787005 * e.b
              , i = Math.cbrt(t)
              , r = Math.cbrt(n)
              , s = Math.cbrt(o);
            return {
                L: .2104542553 * i + .793617785 * r - .0040720468 * s,
                a: 1.9779984951 * i - 2.428592205 * r + .4505937099 * s,
                b: .0259040371 * i + .7827717662 * r - .808675766 * s,
                alpha: e.a
            }
        }
        var $t = n(2854);
        function Gt(e, t) {
            return e.length <= t ? e : e.substr(0, t - 3) + "..."
        }
        const qt = e => "string" == typeof e ? `string("${Gt(e, 10)}")` : "number" == typeof e ? `number(${Gt(String(e), 10)})` : null === e ? "null" : void 0 === e ? "undefined" : "boolean" == typeof e ? String(e) : Array.isArray(e) ? "array" : "object" == typeof e ? "object" : "unknown"
          , Xt = Symbol("TheatrePropType_Basic");
        function Jt(e) {
            return "object" == typeof e && !!e && "TheatrePropType" === e[Xt]
        }
        function Yt(e) {
            if ("number" == typeof e)
                return Qt(e);
            if ("boolean" == typeof e)
                return sn(e);
            if ("string" == typeof e)
                return ln(e);
            if ("object" == typeof e && e) {
                if (Jt(e))
                    return e;
                if ((0,
                P.A)(e))
                    return Kt(e);
                throw new mt(`This value is not a valid prop type: ${qt(e)}`)
            }
            throw new mt(`This value is not a valid prop type: ${qt(e)}`)
        }
        const Kt = (e, t={}) => {
            const n = function(e) {
                const t = {};
                for (const n of Object.keys(e)) {
                    const o = e[n];
                    Jt(o) ? t[n] = o : t[n] = Yt(o)
                }
                return t
            }(e)
              , o = new WeakMap;
            return {
                type: "compound",
                props: n,
                valueType: null,
                [Xt]: "TheatrePropType",
                label: t.label,
                default: (0,
                $t.A)(n, (e => e.default)),
                deserializeAndSanitize: e => {
                    if ("object" != typeof e || !e)
                        return;
                    if (o.has(e))
                        return o.get(e);
                    const t = {};
                    let i = !1;
                    for (const [o,r] of Object.entries(n))
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            const n = r.deserializeAndSanitize(e[o]);
                            null != n && (i = !0,
                            t[o] = n)
                        }
                    return o.set(e, t),
                    i ? t : void 0
                }
            }
        }
          , Qt = (e, t={}) => {
            var n;
            return Object.assign(Object.assign({
                type: "number",
                valueType: 0,
                default: e,
                [Xt]: "TheatrePropType"
            }, t || {}), {
                label: t.label,
                nudgeFn: null !== (n = t.nudgeFn) && void 0 !== n ? n : dn,
                nudgeMultiplier: "number" == typeof t.nudgeMultiplier ? t.nudgeMultiplier : void 0,
                interpolate: tn,
                deserializeAndSanitize: Zt(t.range)
            })
        }
          , Zt = e => e ? t => {
            if ("number" == typeof t && isFinite(t))
                return (0,
                Ft.A)(t, e[0], e[1])
        }
        : en
          , en = e => "number" == typeof e && isFinite(e) ? e : void 0
          , tn = (e, t, n) => e + n * (t - e)
          , nn = (e={
            r: 0,
            g: 0,
            b: 0,
            a: 1
        }, t={}) => {
            const n = {};
            for (const t of ["r", "g", "b", "a"])
                n[t] = Math.min(Math.max(e[t], 0), 1);
            return {
                type: "rgba",
                valueType: null,
                default: Vt(n),
                [Xt]: "TheatrePropType",
                label: t.label,
                interpolate: rn,
                deserializeAndSanitize: on
            }
        }
          , on = e => {
            if (!e)
                return;
            let t = !0;
            for (const n of ["r", "g", "b", "a"])
                Object.prototype.hasOwnProperty.call(e, n) && "number" == typeof e[n] || (t = !1);
            if (!t)
                return;
            const n = {};
            for (const t of ["r", "g", "b", "a"])
                n[t] = Math.min(Math.max(e[t], 0), 1);
            return Vt(n)
        }
          , rn = (e, t, n) => {
            const o = zt(Wt(e))
              , i = zt(Wt(t))
              , r = Ht(function(e) {
                let t = e.L + .3963377774 * e.a + .2158037573 * e.b
                  , n = e.L - .1055613458 * e.a - .0638541728 * e.b
                  , o = e.L - .0894841775 * e.a - 1.291485548 * e.b
                  , i = t * t * t
                  , r = n * n * n
                  , s = o * o * o;
                return {
                    r: 4.0767416621 * i - 3.3077115913 * r + .2309699292 * s,
                    g: -1.2684380046 * i + 2.6097574011 * r - .3413193965 * s,
                    b: -.0041960863 * i - .7034186147 * r + 1.707614701 * s,
                    a: e.alpha
                }
            }({
                L: (1 - n) * o.L + n * i.L,
                a: (1 - n) * o.a + n * i.a,
                b: (1 - n) * o.b + n * i.b,
                alpha: (1 - n) * o.alpha + n * i.alpha
            }));
            return Vt(r)
        }
          , sn = (e, t={}) => {
            var n;
            return {
                type: "boolean",
                default: e,
                valueType: null,
                [Xt]: "TheatrePropType",
                label: t.label,
                interpolate: null !== (n = t.interpolate) && void 0 !== n ? n : cn,
                deserializeAndSanitize: an
            }
        }
          , an = e => "boolean" == typeof e ? e : void 0;
        function cn(e) {
            return e
        }
        const ln = (e, t={}) => {
            var n;
            return {
                type: "string",
                default: e,
                valueType: null,
                [Xt]: "TheatrePropType",
                label: t.label,
                interpolate: null !== (n = t.interpolate) && void 0 !== n ? n : cn,
                deserializeAndSanitize: un
            }
        }
        ;
        function un(e) {
            return "string" == typeof e ? e : void 0
        }
        const dn = ({config: e, deltaX: t, deltaFraction: n, magnitude: o}) => {
            var i;
            const {range: r} = e;
            return e.nudgeMultiplier || !r || r.includes(1 / 0) || r.includes(-1 / 0) ? t * o * (null !== (i = e.nudgeMultiplier) && void 0 !== i ? i : 1) : n * (r[1] - r[0]) * o
        }
        ;
        function fn(e, t, n) {
            const o = e.replace(/^[\s\/]*/, "").replace(/[\s\/]*$/, "").replace(/\s*\/\s*/g, " / ");
            return o
        }
        new WeakMap;
        class pn {
            get type() {
                return "Theatre_Sheet_PublicAPI"
            }
            constructor(e) {
                be(this, e)
            }
            object(e, t, n) {
                const o = ve(this)
                  , i = fn(e, 0, St.warning)
                  , r = o.getObject(i)
                  , s = null == n ? void 0 : n.__actions__THIS_API_IS_UNSTABLE_AND_WILL_CHANGE_IN_THE_NEXT_VERSION;
                if (r)
                    return s && r.template._temp_setActions(s),
                    r.publicApi;
                {
                    const e = Kt(t);
                    return o.createObject(i, null, e, s).publicApi
                }
            }
            get sequence() {
                return ve(this).getSequence().publicApi
            }
            get project() {
                return ve(this).project.publicApi
            }
            get address() {
                return Object.assign({}, ve(this).address)
            }
            detachObject(e) {
                const t = ve(this)
                  , n = fn(e, 0, St.warning);
                if (!t.getObject(n))
                    return St.warning(`Couldn't delete object "${n}"`, `There is no object with key "${n}".\n\nTo fix this, make sure you are calling \`sheet.deleteObject("${n}")\` with the correct key.`),
                    void console.warn(`Object key "${n}" does not exist.`);
                t.deleteObject(n)
            }
        }
        var hn = n(2727);
        class mn {
            constructor(e, t) {
                this.template = e,
                this.instanceId = t,
                this._objects = new le({}),
                this.objectsP = this._objects.pointer,
                this.type = "Theatre_Sheet",
                this._logger = e.project._logger.named("Sheet", t),
                this._logger._trace("creating sheet"),
                this.project = e.project,
                this.address = Object.assign(Object.assign({}, e.address), {
                    sheetInstanceId: this.instanceId
                }),
                this.publicApi = new pn(this)
            }
            createObject(e, t, n, o={}) {
                const i = this.template.getObjectTemplate(e, t, n, o).createInstance(this, t, n);
                return this._objects.setByPointer((t => t[e]), i),
                i
            }
            getObject(e) {
                return this._objects.get()[e]
            }
            deleteObject(e) {
                this._objects.reduce((t => {
                    const n = Object.assign({}, t);
                    return delete n[e],
                    n
                }
                ))
            }
            getSequence() {
                if (!this._sequence) {
                    const e = oe(( () => {
                        const e = pe(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.length);
                        return gn(e)
                    }
                    ))
                      , t = oe(( () => {
                        const e = pe(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.subUnitsPerUnit);
                        return yn(e)
                    }
                    ));
                    this._sequence = new It(this.template.project,this,e,t)
                }
                return this._sequence
            }
        }
        const gn = e => "number" == typeof e && isFinite(e) && e > 0 ? e : 10
          , yn = e => "number" == typeof e && (0,
        hn.A)(e) && e >= 1 && e <= 1e3 ? e : 30;
        class vn {
            constructor(e, t) {
                this.project = e,
                this.type = "Theatre_SheetTemplate",
                this._instances = new le({}),
                this.instancesP = this._instances.pointer,
                this._objectTemplates = new le({}),
                this.objectTemplatesP = this._objectTemplates.pointer,
                this.address = Object.assign(Object.assign({}, e.address), {
                    sheetId: t
                })
            }
            getInstance(e) {
                let t = this._instances.get()[e];
                return t || (t = new mn(this,e),
                this._instances.setByPointer((t => t[e]), t)),
                t
            }
            getObjectTemplate(e, t, n, o) {
                let i = this._objectTemplates.get()[e];
                return i || (i = new dt(this,e,t,n,o),
                this._objectTemplates.setByPointer((t => t[e]), i)),
                i
            }
        }
        const bn = {
            currentProjectStateDefinitionVersion: "0.4.0"
        };
        function wn() {}
        function _n(e) {
            var t, n;
            const o = (null === (t = null == e ? void 0 : e.logging) || void 0 === t ? void 0 : t.internal) ? null !== (n = e.logging.min) && void 0 !== n ? n : $e.WARN : 1 / 0
              , i = o <= $e.DEBUG
              , r = o <= $e.ERROR
              , s = Qe(void 0, {
                _debug: i ? console.debug.bind(console, "_coreLogger(TheatreInternalLogger) debug") : wn,
                _error: r ? console.error.bind(console, "_coreLogger(TheatreInternalLogger) error") : wn
            });
            if (e) {
                const {logger: t, logging: n} = e;
                t && s.configureLogger(t),
                n ? s.configureLogging(n) : s.configureLogging({
                    dev: !1
                })
            }
            return s.getLogger().named("Theatre")
        }
        class Sn {
            constructor(e, t={}, n) {
                var o;
                this.config = t,
                this.publicApi = n,
                this._sheetTemplates = new le({}),
                this.sheetTemplatesP = this._sheetTemplates.pointer,
                this.type = "Theatre_Project",
                this._logger = _n({
                    logging: {
                        dev: !0
                    }
                }).named("Project", e),
                this._logger.traceDev("creating project"),
                this.address = {
                    projectId: e
                };
                const i = new le({
                    loadingState: {
                        type: "loaded"
                    },
                    lastExportedObject: null
                });
                t.state && Object.values(t.state.sheetsById).forEach((e => Object.values(e.sequence.tracksByObject).forEach((e => Object.values(e.trackData).forEach((e => {
                    e.keyframes = Ae.fromArray(e.keyframes)
                }
                ))))));
                const r = new le({
                    historic: null !== (o = t.state) && void 0 !== o ? o : {
                        sheetsById: {},
                        definitionVersion: bn.currentProjectStateDefinitionVersion,
                        revisionHistory: []
                    }
                });
                this.diskStateAtom = r,
                this._assetStorageReadyDeferred = yt(),
                this.assetStorage = {
                    getAssetUrl: e => {
                        var n;
                        return `${null === (n = t.assets) || void 0 === n ? void 0 : n.baseUrl}/${e}`
                    }
                    ,
                    createAsset: () => {
                        throw new Error("Please wait for Project.ready to use assets.")
                    }
                },
                this._pointerProxies = {
                    historic: new me(r.pointer.historic),
                    ephemeral: new me(i.pointer)
                },
                this.pointers = {
                    historic: this._pointerProxies.historic.pointer,
                    ephemeral: this._pointerProxies.ephemeral.pointer
                },
                ge.add(e, this),
                this._studioReadyDeferred = yt(),
                this._studioReadyDeferred.resolve(void 0),
                this._assetStorageReadyDeferred.resolve(void 0),
                this._readyPromise = Promise.all([this._studioReadyDeferred.promise, this._assetStorageReadyDeferred.promise]).then(( () => {}
                )),
                t.state || "undefined" == typeof window && console.error(`Argument config.state in Theatre.getProject("${e}", config) is empty. You can safely ignore this message if you're developing a Next.js/Remix project in development mode. But if you are shipping to your end-users, then you need to set config.state, otherwise your project's state will be empty and nothing will animate. Learn more at https://www.theatrejs.com/docs/latest/manual/projects#state`)
            }
            attachToStudio() {
                throw new Error("Studio has been removed! This function should not be called anymore")
            }
            get isAttachedToStudio() {
                return console.error("Studio has been removed! This function shouldn't be called anymore"),
                !1
            }
            get ready() {
                return this._readyPromise
            }
            isReady() {
                return "resolved" === this._studioReadyDeferred.status && "resolved" === this._assetStorageReadyDeferred.status
            }
            getOrCreateSheet(e, t="default") {
                let n = this._sheetTemplates.get()[e];
                return n || (n = new vn(this,e),
                this._sheetTemplates.reduce((t => Object.assign(Object.assign({}, t), {
                    [e]: n
                })))),
                n.getInstance(t)
            }
        }
        class En {
            get type() {
                return "Theatre_Project_PublicAPI"
            }
            constructor(e, t={}) {
                be(this, new Sn(e,t,this))
            }
            get ready() {
                return ve(this).ready
            }
            get isReady() {
                return ve(this).isReady()
            }
            get address() {
                return Object.assign({}, ve(this).address)
            }
            getAssetUrl(e) {
                if (this.isReady)
                    return e.id ? ve(this).assetStorage.getAssetUrl(e.id) : void 0;
                console.error("Calling `project.getAssetUrl()` before `project.ready` is resolved, will always return `undefined`. Either use `project.ready.then(() => project.getAssetUrl())` or `await project.ready` before calling `project.getAssetUrl()`.")
            }
            sheet(e, t="default") {
                const n = fn(e, 0, St.warning);
                return ve(this).getOrCreateSheet(n, t).publicApi
            }
            setState(e) {
                ve(this).diskStateAtom.setByPointer(ve(this).diskStateAtom.pointer.historic.sheetsById, e)
            }
        }
        n(8792);
        const On = (e, t) => {
            ( (e, t) => {
                if (Array.isArray(t) || null == t || t.definitionVersion !== bn.currentProjectStateDefinitionVersion)
                    throw new mt(`Error validating conf.state in Theatre.getProject(${JSON.stringify(e)}, conf). The state seems to be formatted in a way that is unreadable to Theatre.js. Read more at https://www.theatrejs.com/docs/latest/manual/projects#state`)
            }
            )(e, t)
        }
        ;
        class Pn {
            constructor() {}
            get type() {
                return "Theatre_CoreBundle"
            }
            get version() {
                return process.env.THEATRE_VERSION
            }
            getBitsForStudio(e, t) {
                throw new Error("Studio has been removed! This function shouldn't be called anymore")
            }
        }
        function Tn(e) {
            return `${e.uuid}`
        }
        !function() {
            if ("undefined" == typeof window && !0 !== n.g.__THEATREJS__FORCE_CONNECT_CORE_AND_STUDIO)
                return;
            const e = "undefined" != typeof window ? window : n.g
              , t = e[wt];
            if (void 0 !== t) {
                if ("object" == typeof t && t && "string" == typeof t.version)
                    throw new Error("It seems that the module '@theatre-local/core' is loaded more than once. This could have two possible causes:\n1. You might have two separate versions of Theatre.js in node_modules.\n2. Or this might be a bundling misconfiguration, in case you're using a bundler like Webpack/ESBuild/Rollup.\n\nNote that it **is okay** to import '@theatre-local/core' multiple times. But those imports should point to the same module.");
                console.warn(`The variable window.${wt} seems to be already set by a module other than @theatre-local/core.`)
            }
            const o = new Pn;
            e[wt] = o
        }();
        const Mn = 10
          , Rn = ["color", "emissive", "specular", "specularColor", "attenuationColor", "sheenColor"]
          , xn = -911231231231232
          , An = {
            r: -1,
            g: -1,
            b: -1,
            a: .5
        };
        function Cn(e, t) {
            let n = !0;
            const o = function(e, t={}) {
                const n = ge.get(e);
                if (n)
                    return n.publicApi;
                const o = _n().named("Project", e);
                return t.state ? (On(e, t.state),
                o._debug("deep validated config.state on disk")) : o._debug("no config.state"),
                new En(e,t)
            }(e, {
                state: t
            })
              , i = new Map;
            return {
                getAnimation: function(e) {
                    const t = o.sheet(e);
                    return {
                        play: function() {
                            t.sequence.play({
                                rate: 1 / Mn
                            })
                        },
                        pause: function() {
                            t.sequence.pause()
                        },
                        setPosition: function(e) {
                            t.sequence.position = e
                        },
                        animateObject3D: function(e) {
                            if (i.has(e.uuid))
                                return;
                            function o(e, t) {
                                t.x !== xn && (e.x = t.x),
                                t.y !== xn && (e.y = t.y),
                                t.z !== xn && (e.z = t.z)
                            }
                            const r = t.object(Tn(e), {
                                position: Kt({
                                    x: Qt(xn),
                                    y: Qt(xn),
                                    z: Qt(xn)
                                }),
                                rotation: Kt({
                                    x: Qt(xn),
                                    y: Qt(xn),
                                    z: Qt(xn)
                                }),
                                scale: Kt({
                                    x: Qt(xn),
                                    y: Qt(xn),
                                    z: Qt(xn)
                                })
                            }).onValuesChange((t => {
                                n && (o(e.position, t.position),
                                o(e.rotation, t.rotation),
                                o(e.scale, t.scale))
                            }
                            ));
                            i.set(e.uuid, r)
                        },
                        animateMaterial: function(e) {
                            if (i.has(e.uuid))
                                return;
                            const o = l.RL[e.type]
                              , r = l.LX[o]
                              , s = {};
                            r.forEach((e => {
                                Rn.includes(e) ? s[e] = nn(An) : s[e] = Qt(xn)
                            }
                            ));
                            const a = t.object(Tn(e), s, {
                                reconfigure: !0
                            }).onValuesChange((t => {
                                if (n)
                                    for (const e in t)
                                        Rn.includes(e) ? i(e) : o(e);
                                function o(n, o) {
                                    t[n] !== xn && void 0 !== e[n] && (e[n] = o || t[n],
                                    "attenuationDistance" === n && 0 === e[n] && (e[n] = 1 / 0))
                                }
                                function i(e) {
                                    t[e].a !== An.a && o(e, new E.Q1f(String(Ut(t[e])).slice(0, -2)))
                                }
                            }
                            ));
                            i.set(e.uuid, a)
                        },
                        removeObjectAnimation: function(e) {
                            const n = i.get(e.uuid);
                            n && (n(),
                            t.detachObject(Tn(e)),
                            i.delete(e.uuid))
                        },
                        animationSheet: t
                    }
                },
                setState: function(e) {
                    o.setState(e)
                },
                setActive: function(e) {
                    if (n = e,
                    e) {
                        const e = o.sheet(l.H0).sequence.position;
                        o.sheet(l.H0).sequence.position += e > 1e-5 ? -1e-5 : 1e-5,
                        setTimeout(( () => {
                            o.sheet(l.H0).sequence.position = e
                        }
                        ))
                    }
                }
            }
        }
        var Dn = n(490)
          , kn = n(4277)
          , In = n(8949)
          , jn = n(5803);
        const Nn = Math.pow
          , Ln = Math.sqrt
          , Bn = Math.sin
          , Fn = Math.cos
          , Un = Math.PI
          , Vn = 1.70158
          , Hn = 1.525 * Vn
          , Wn = Vn + 1
          , zn = 2 * Un / 3
          , $n = 2 * Un / 4.5
          , Gn = function(e) {
            const t = 7.5625
              , n = 2.75;
            return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        }
          , qn = {
            lenisDefault: e => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
            linear: e => e,
            easeInQuad: function(e) {
                return e * e
            },
            easeOutQuad: function(e) {
                return 1 - (1 - e) * (1 - e)
            },
            easeInOutQuad: function(e) {
                return e < .5 ? 2 * e * e : 1 - Nn(-2 * e + 2, 2) / 2
            },
            easeInCubic: function(e) {
                return e * e * e
            },
            easeOutCubic: function(e) {
                return 1 - Nn(1 - e, 3)
            },
            easeInOutCubic: function(e) {
                return e < .5 ? 4 * e * e * e : 1 - Nn(-2 * e + 2, 3) / 2
            },
            easeInQuart: function(e) {
                return e * e * e * e
            },
            easeOutQuart: function(e) {
                return 1 - Nn(1 - e, 4)
            },
            easeInOutQuart: function(e) {
                return e < .5 ? 8 * e * e * e * e : 1 - Nn(-2 * e + 2, 4) / 2
            },
            easeInQuint: function(e) {
                return e * e * e * e * e
            },
            easeOutQuint: function(e) {
                return 1 - Nn(1 - e, 5)
            },
            easeInOutQuint: function(e) {
                return e < .5 ? 16 * e * e * e * e * e : 1 - Nn(-2 * e + 2, 5) / 2
            },
            easeInSine: function(e) {
                return 1 - Fn(e * Un / 2)
            },
            easeOutSine: function(e) {
                return Bn(e * Un / 2)
            },
            easeInOutSine: function(e) {
                return -(Fn(Un * e) - 1) / 2
            },
            easeInExpo: function(e) {
                return 0 === e ? 0 : Nn(2, 10 * e - 10)
            },
            easeOutExpo: function(e) {
                return 1 === e ? 1 : 1 - Nn(2, -10 * e)
            },
            easeInOutExpo: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Nn(2, 20 * e - 10) / 2 : (2 - Nn(2, -20 * e + 10)) / 2
            },
            easeInCirc: function(e) {
                return 1 - Ln(1 - Nn(e, 2))
            },
            easeOutCirc: function(e) {
                return Ln(1 - Nn(e - 1, 2))
            },
            easeInOutCirc: function(e) {
                return e < .5 ? (1 - Ln(1 - Nn(2 * e, 2))) / 2 : (Ln(1 - Nn(-2 * e + 2, 2)) + 1) / 2
            },
            easeInBack: function(e) {
                return Wn * e * e * e - Vn * e * e
            },
            easeOutBack: function(e) {
                return 1 + Wn * Nn(e - 1, 3) + Vn * Nn(e - 1, 2)
            },
            easeInOutBack: function(e) {
                return e < .5 ? Nn(2 * e, 2) * (7.189819 * e - Hn) / 2 : (Nn(2 * e - 2, 2) * ((Hn + 1) * (2 * e - 2) + Hn) + 2) / 2
            },
            easeInElastic: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : -Nn(2, 10 * e - 10) * Bn((10 * e - 10.75) * zn)
            },
            easeOutElastic: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : Nn(2, -10 * e) * Bn((10 * e - .75) * zn) + 1
            },
            easeInOutElastic: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Nn(2, 20 * e - 10) * Bn((20 * e - 11.125) * $n) / 2 : Nn(2, -20 * e + 10) * Bn((20 * e - 11.125) * $n) / 2 + 1
            },
            easeInBounce: function(e) {
                return 1 - Gn(1 - e)
            },
            easeOutBounce: Gn,
            easeInOutBounce: function(e) {
                return e < .5 ? (1 - Gn(1 - 2 * e)) / 2 : (1 + Gn(2 * e - 1)) / 2
            }
        };
        var Xn = n(3631);
        const Jn = new class {
            constructor() {
                this.lenis = null,
                this.rafId = null,
                this.attachScrollListener = e => {
                    this.listeners.add(e)
                }
                ,
                this.detachScrollListener = e => {
                    this.listeners.delete(e)
                }
                ,
                this.onScroll = () => {
                    const e = this.listeners;
                    for (const t of e)
                        try {
                            t()
                        } catch (e) {
                            console.error("Scroll listener callback error:", e)
                        }
                }
                ,
                this.overrideLenisSetScrollFunction = e => {
                    e.setScroll = t => {
                        const n = e.velocity
                          , o = e.rootElement
                          , i = n > 0 ? Math.ceil(t) : n < 0 ? Math.floor(t) : Math.round(t);
                        e.isHorizontal ? o.scrollLeft = Math.round(i) : o.scrollTop = Math.round(i)
                    }
                }
                ,
                this.prepareLenisConfig = e => {
                    const t = {
                        syncTouch: !kn.PG,
                        duration: 1.2,
                        easing: qn.lenisDefault
                    }
                      , n = null == e ? void 0 : e.easing;
                    n in qn && (t.easing = qn[n]);
                    const o = (0,
                    Xn.eB)((null == e ? void 0 : e.duration) / 1e3, 3);
                    o >= 0 && (t.duration = o);
                    const i = (0,
                    Xn.eB)(+e.speed / 100, 2);
                    i > 0 && (t.wheelMultiplier = i,
                    t.touchMultiplier = i),
                    t.infinite = !!(null == e ? void 0 : e.isInfinite),
                    this.lenisConfig = t
                }
                ,
                this.prepareLenisRaf = () => {
                    const e = t => {
                        this.lenis.raf(t),
                        this.rafId = requestAnimationFrame(e)
                    }
                    ;
                    this.rafId = requestAnimationFrame(e)
                }
                ,
                this.reinitialize = e => {
                    var t, n;
                    const o = this.getDeviceSize()
                      , i = null === (n = null === (t = null == e ? void 0 : e.devices) || void 0 === t ? void 0 : t[o]) || void 0 === n ? void 0 : n.scrollSettings;
                    window.scrollTo(0, 0),
                    (null == i ? void 0 : i.type) === u.J.Smooth ? (this.type = u.J.Smooth,
                    this.prepareLenisConfig(i),
                    this.lenis = new jn.A(this.lenisConfig),
                    this.overrideLenisSetScrollFunction(this.lenis),
                    this.lenis.on("scroll", this.onScroll),
                    this.prepareLenisRaf()) : (this.type = u.J.Native,
                    window.addEventListener("scroll", this.onScroll)),
                    (0,
                    In.W)(( () => {
                        this.lenis && (this.lenis.destroy(),
                        this.lenis = null),
                        this.rafId && cancelAnimationFrame(this.rafId),
                        window.removeEventListener("scroll", this.onScroll)
                    }
                    ))
                }
                ,
                this.getDeviceSize = () => {
                    const e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    return e < l.mq ? u.SN.Mobile : e < l.g4 ? u.SN.Tablet : u.SN.Desktop
                }
                ,
                this.getScrollParameters = () => {
                    let e, t, n;
                    if (this.type === u.J.Smooth && this.lenis)
                        ({height: e, scrollHeight: t} = this.lenis.dimensions),
                        n = this.lenis.scroll;
                    else {
                        e = window.innerHeight,
                        t = document.documentElement.scrollHeight;
                        const o = document.body.getBoundingClientRect();
                        n = Math.max(0, 0 - o.y)
                    }
                    return {
                        height: e,
                        scrollHeight: t,
                        scrolled: n
                    }
                }
                ,
                this.scrollToElement = (e, t, n) => {
                    if (e)
                        if (this.type === u.J.Smooth) {
                            if (!this.lenis)
                                return;
                            this.lenis.scrollTo(e, {
                                offset: t,
                                immediate: n
                            })
                        } else {
                            const o = e.getBoundingClientRect().top + t + window.scrollY;
                            window.scrollTo({
                                top: o,
                                behavior: n ? "auto" : "smooth"
                            })
                        }
                }
                ,
                this.type = u.J.Native,
                this.listeners = new Set
            }
        }
          , Yn = "pwb-anchor";
        o.Anchor,
        o.Position,
        o.ScrollSection;
        var Kn = function(e, t, n, o) {
            return new (n || (n = Promise))((function(i, r) {
                function s(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(s, a)
                }
                c((o = o.apply(e, t || [])).next())
            }
            ))
        };
        const Qn = {};
        function Zn(e, t, n) {
            return Kn(this, void 0, void 0, (function*() {
                if (!e)
                    return;
                const o = document.getElementsByClassName("pwb-scene")[0];
                if (!o)
                    return;
                const i = document.createElement("canvas");
                o.appendChild(i);
                const r = (0,
                Dn.Vy)(i, e.autoResolutionSettings);
                Qn.builder = r;
                const {pwObjects: s, pwMaterials: a, parents: c, children: l, effects: u, pwObjectsUsingPwMaterial: d, sharedMaterials: f} = e
                  , p = Object.assign(Object.assign({}, e), {
                    pwObjects: new Map(Object.entries(s)),
                    pwMaterials: new Map(Object.entries(a)),
                    parents: new Map(Object.entries(c)),
                    children: new Map(Object.entries(l)),
                    effects: new Map(Object.entries(u || {})),
                    pwObjectsUsingPwMaterial: new Map(Object.entries(d || {})),
                    sharedMaterials: new Set(f)
                });
                let h;
                const m = new Promise((e => {
                    h = e
                }
                ));
                return r.listenTo(Dn.bd.SceneReady, ( () => {
                    null == h || h(void 0)
                }
                )),
                r.initializeClient(p, t, n),
                yield m,
                kn.MR && r.showStatsPanel(document.body),
                (0,
                In.W)(( () => {
                    var e;
                    null === (e = Qn.builder) || void 0 === e || e.dispose(),
                    Qn.builder = void 0
                }
                )),
                r
            }
            ))
        }
        function eo(e, t) {
            return Kn(this, void 0, void 0, (function*() {
                if (!e)
                    return;
                const {builder: n} = Qn;
                if (!n)
                    return;
                window.scrollTo(0, 0),
                Qn.anchors = t[u.BX.Anchors] || {};
                const o = Cn("default project");
                o.setState(e.sheetsById);
                const i = o.getAnimation(l.H0)
                  , r = e.sheetsById[l.H0].sequence;
                if (!r)
                    return void console.error("No animation sheet state found!");
                const {tracksByObject: s={}, unitType: a, lengthInUnits: c} = r;
                Object.keys(s).forEach((e => {
                    const t = n.getMaterial(e);
                    if (t)
                        return void i.animateMaterial(t);
                    const o = n.getObject(e);
                    o && i.animateObject3D(o)
                }
                ));
                const d = Array.from(document.getElementsByClassName(Yn));
                function f() {
                    const {height: e, scrollHeight: t, scrolled: n} = Jn.getScrollParameters();
                    if ("percentage" === a) {
                        return function(e, t, n, o) {
                            const i = t + n
                              , r = o.filter((e => e.position > t)).sort(( (e, t) => e.position - t.position));
                            let s, a;
                            for (const e of r) {
                                if (!(e.position <= i)) {
                                    s = e;
                                    break
                                }
                                a = e
                            }
                            let c = a ? a.position : t;
                            c = Math.max(c, t);
                            const l = a ? null == a ? void 0 : a.percentage : 0
                              , u = s ? s.position : e
                              , d = s ? null == s ? void 0 : s.percentage : 1;
                            return c === u ? l : E.cj9.mapLinear(i, c, u, l, d)
                        }(t, e, n, d.map((e => {
                            var t, n;
                            return {
                                position: e.offsetTop,
                                percentage: (null === (n = null === (t = Qn.anchors) || void 0 === t ? void 0 : t[e.id]) || void 0 === n ? void 0 : n.percentage) || 0
                            }
                        }
                        )))
                    }
                    return "dynamicViewPort" === a ? n / e * 100 / c : (console.error(`Animation unit type: <${a}> not supported.`),
                    0)
                }
                const p = () => {
                    const e = f();
                    i.setPosition(e)
                }
                ;
                Jn.attachScrollListener(p),
                (0,
                In.W)(( () => {
                    Jn.detachScrollListener(p)
                }
                ))
            }
            ))
        }
        var to, no, oo, io;
        function ro(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }
        function so(e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        }
        !function(e) {
            e.UIOverlay = "uiOverlay",
            e.UIAudio = "uiAudio"
        }(to || (to = {})),
        function(e) {
            e.Play = "play",
            e.Pause = "pause",
            e.Stop = "stop",
            e.TogglePlayPause = "toggle_play_pause",
            e.TogglePlayStop = "toggle_play_stop"
        }(no || (no = {})),
        function(e) {
            e.Open = "open",
            e.Close = "close",
            e.ToggleOpenClose = "toggle_open_close"
        }(oo || (oo = {})),
        function(e) {
            e.MouseClick = "mouseClick",
            e.MouseEnter = "mouseEnter",
            e.MouseLeave = "mouseLeave"
        }(io || (io = {}));
        const ao = {
            listeners: {
                [to.UIOverlay]: new Set,
                [to.UIAudio]: new Set
            }
        };
        function co(e, t) {
            ao.listeners[e].add(t)
        }
        function lo(e, t) {
            ao.listeners[e].delete(t)
        }
        function uo(e, t) {
            !function(e, t, n) {
                const o = ao.listeners[e];
                for (const e of o)
                    try {
                        e((i = t,
                        JSON.parse(JSON.stringify(i))), n)
                    } catch (e) {
                        console.error("Interaction error:", e)
                    }
                var i
            }(e.type, e, t)
        }
        function fo(e) {
            return [to.UIAudio, to.UIOverlay].includes(e.type) && !!e.id
        }
        function po(e) {
            return `pwb-ignore-click-ui-overlay-interaction-${e}`
        }
        const ho = {
            [io.MouseClick]: function(e) {
                const {el: t} = e
                  , {actions: n, mouseCursor: o} = e.interaction;
                !function(e) {
                    const {el: t} = e
                      , {actions: n} = e.interaction
                      , o = new Set;
                    for (const e of n) {
                        if (e.type !== to.UIOverlay)
                            return;
                        if (!e.id)
                            return;
                        o.add(po(e.id))
                    }
                    for (const e of o)
                        t.classList.add(e)
                }(e),
                o === f.si.Pointer && (t.style.cursor = "pointer"),
                t.addEventListener("click", (e => {
                    ro(e),
                    so(e);
                    for (const e of n)
                        uo(e, io.MouseClick)
                }
                ))
            },
            [io.MouseEnter]: function(e) {
                const {el: t} = e
                  , {actions: n} = e.interaction;
                t.addEventListener("mouseenter", ( () => {
                    for (const e of n)
                        uo(e, io.MouseEnter)
                }
                ))
            },
            [io.MouseLeave]: function(e) {
                const {el: t} = e
                  , {actions: n} = e.interaction;
                t.addEventListener("mouseleave", ( () => {
                    for (const e of n)
                        uo(e, io.MouseLeave)
                }
                ))
            }
        };
        function mo(e) {
            const t = function(e) {
                const t = [];
                if (!e)
                    return t;
                const n = e[u.BX.Interactions] || {};
                return Object.entries(n).forEach(( ([e,n]) => {
                    if (!n)
                        return;
                    const o = document.getElementById(e);
                    if (o)
                        for (const e of n) {
                            const n = e.actions.filter((e => fo(e)));
                            n.length <= 0 || t.push({
                                el: o,
                                interaction: {
                                    triggerType: e.triggerType,
                                    mouseCursor: e.mouseCursor,
                                    actions: n
                                }
                            })
                        }
                }
                )),
                t
            }(e);
            for (const e of t)
                ho[e.interaction.triggerType](e)
        }
        const go = {};
        function yo() {
            if (go.scrollSections)
                return go.scrollSections;
            throw new Error("ScrollSectionsModule needs to be initialized before the findAllScrollSections function can be called.")
        }
        function vo(e) {
            go.scrollSections = function(e) {
                const t = new Map;
                if (!e)
                    return t;
                const n = e.sections || {};
                return Object.entries(n).forEach(( ([e,n]) => {
                    if (!(null == n ? void 0 : n.hash))
                        return;
                    const o = document.getElementById(e);
                    if (!o)
                        return;
                    const {hash: i, offsetY: r} = n;
                    t.set(e, {
                        id: e,
                        hash: i,
                        offsetY: r || 0,
                        el: o
                    })
                }
                )),
                t
            }(e)
        }
        function bo(e, t) {
            const n = new Map;
            if (!e)
                return n;
            const o = e.links || {};
            return Object.entries(o).forEach(( ([e,o]) => {
                if (!o)
                    return;
                const i = function(e, t) {
                    if (e.type === u.Pc.External) {
                        if ("string" != typeof e.url)
                            return;
                        const t = e.url.trim();
                        if (!t)
                            return;
                        return {
                            type: u.Pc.External,
                            url: (0,
                            d.Pc)(t),
                            newTab: !!e.newTab
                        }
                    }
                    if (e.type === u.Pc.Internal) {
                        if (!e.pageId)
                            return;
                        if (!e.pagePath)
                            return;
                        const n = !!e.newTab
                          , o = e.sectionId ? t.get(e.sectionId) : void 0;
                        return {
                            type: u.Pc.Internal,
                            pageId: e.pageId,
                            pagePath: e.pagePath,
                            sectionId: e.sectionId,
                            sectionHash: e.sectionHash,
                            sectionEl: null == o ? void 0 : o.el,
                            sectionOffsetY: (null == o ? void 0 : o.offsetY) || 0,
                            newTab: n,
                            smoothScroll: !n && !!e.smoothScroll
                        }
                    }
                }(o, t);
                i && n.set(e, i)
            }
            )),
            n
        }
        function wo(e) {
            const t = window;
            return n => {
                ro(n),
                so(n);
                const o = e.url;
                n.ctrlKey || n.metaKey || e.newTab || kn.kr ? t.open(o, "_blank") : n.shiftKey ? t.open(o) : t.location.href = o
            }
        }
        function _o(e) {
            const t = window;
            return n => {
                ro(n),
                so(n);
                const o = e.newTab && kn.kr;
                if (e.newTab && !o) {
                    const n = window.location.href
                      , o = (0,
                    d.sh)(n, e.pagePath, e.sectionHash);
                    return void t.open(o, "_blank")
                }
                if (cr() !== e.pagePath)
                    return void mr(e.pagePath, e.sectionHash);
                const i = !e.smoothScroll && !o;
                Jn.scrollToElement(e.sectionEl, e.sectionOffsetY, i)
            }
        }
        function So(e) {
            const t = yo()
              , n = bo(e, t);
            for (const [e,t] of n) {
                const n = document.getElementById(e);
                if (!n)
                    continue;
                const o = t.type === u.Pc.External ? wo(t) : _o(t);
                n.style.cursor = "pointer",
                n.addEventListener("click", o)
            }
            !function(e) {
                const t = lr();
                if (!t)
                    return;
                const n = Array.from(e.values()).find((e => e.hash === t));
                n && Jn.scrollToElement(n.el, n.offsetY, !0)
            }(t)
        }
        var Eo, Oo, Po, To, Mo, Ro, xo, Ao, Co = n(9314), Do = n(2407), ko = n(5450);
        function Io(e, t) {
            const n = t === Eo.ScrollTransform;
            return {
                type: e,
                delay: 0,
                duration: 300,
                stiffness: n ? 500 : 400,
                damping: n ? 60 : 30,
                mass: 1
            }
        }
        function jo(e) {
            const t = {
                opacity: 1,
                scale: 1,
                rotateType: Oo.Rotate2D,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                offsetX: 0,
                offsetY: 0
            };
            switch (e) {
            case Ao.Fade:
                return Object.assign(Object.assign({}, t), {
                    opacity: 0
                });
            case Ao.Scale:
                return Object.assign(Object.assign({}, t), {
                    scale: .5
                });
            case Ao.ScaleBottom:
                return Object.assign(Object.assign({}, t), {
                    scale: .5,
                    offsetY: 50
                });
            case Ao.FlipHorizontal:
                return Object.assign(Object.assign({}, t), {
                    rotateType: Oo.Rotate3D,
                    rotateY: -180
                });
            case Ao.FlipVertical:
                return Object.assign(Object.assign({}, t), {
                    rotateType: Oo.Rotate3D,
                    rotateX: -180
                });
            case Ao.SlideTop:
                return Object.assign(Object.assign({}, t), {
                    opacity: 0,
                    offsetY: -150
                });
            case Ao.SlideLeft:
                return Object.assign(Object.assign({}, t), {
                    opacity: 0,
                    offsetX: -150
                });
            case Ao.SlideRight:
                return Object.assign(Object.assign({}, t), {
                    opacity: 0,
                    offsetX: 150
                });
            case Ao.SlideBottom:
                return Object.assign(Object.assign({}, t), {
                    opacity: 0,
                    offsetY: 150
                });
            default:
                return t
            }
        }
        !function(e) {
            e.ScrollAnimation = "ScrollAnimation",
            e.ScrollTransform = "ScrollTransform"
        }(Eo || (Eo = {})),
        function(e) {
            e.Rotate2D = "2d",
            e.Rotate3D = "3d"
        }(Oo || (Oo = {})),
        function(e) {
            e.Linear = "linear",
            e.EaseIn = "easeIn",
            e.EaseOut = "easeOut",
            e.EaseInOut = "easeInOut",
            e.CircIn = "circIn",
            e.CircOut = "circOut",
            e.CircInOut = "circInOut",
            e.BackIn = "backIn",
            e.BackOut = "backOut",
            e.BackInOut = "backInOut",
            e.Anticipate = "anticipate"
        }(Po || (Po = {})),
        function(e) {
            e.Spring = "spring"
        }(To || (To = {})),
        function(e) {
            e.OnAppear = "appear",
            e.OnScroll = "scroll",
            e.ElementInView = "element",
            e.SectionInView = "section"
        }(Mo || (Mo = {})),
        function(e) {
            e.Down = "down",
            e.Up = "up"
        }(Ro || (Ro = {})),
        function(e) {
            e.Top = "top",
            e.Center = "center",
            e.Bottom = "bottom"
        }(xo || (xo = {})),
        function(e) {
            e.Fade = "fade",
            e.Scale = "scale",
            e.ScaleBottom = "scale_bottom",
            e.FlipHorizontal = "flip_horizontal",
            e.FlipVertical = "flip_vertical",
            e.SlideTop = "slide_top",
            e.SlideLeft = "slide_left",
            e.SlideRight = "slide_right",
            e.SlideBottom = "slide_bottom",
            e.Custom = "custom"
        }(Ao || (Ao = {}));
        Mo.ElementInView,
        Ao.Scale;
        var No;
        !function(e) {
            e.Initial = "initial",
            e.Entered = "entered",
            e.Exited = "exited"
        }(No || (No = {}));
        const Lo = Object.values(Ao)
          , Bo = {
            lastScrollDirection: void 0
        };
        function Fo(e) {
            const t = e.rotateType === Oo.Rotate3D;
            return {
                opacity: e.opacity,
                scale: e.scale,
                rotateX: t ? e.rotateX : 0,
                rotateY: t ? e.rotateY : 0,
                rotateZ: e.rotateZ,
                x: e.offsetX,
                y: e.offsetY
            }
        }
        function Uo(e) {
            return parseFloat((e / 1e3).toFixed(3))
        }
        function Vo(e) {
            if (!e)
                return;
            const t = function(e) {
                return {
                    keyframe: jo(e),
                    transition: Io(To.Spring, Eo.ScrollAnimation)
                }
            }(Lo.find((t => t === e)) || Ao.Custom)
              , n = "object" == typeof e ? {
                keyframe: Object.assign(Object.assign({}, t.keyframe), e.keyframe),
                transition: Object.assign(Object.assign({}, t.transition), e.transition)
            } : t;
            return {
                keyframe: Fo(n.keyframe),
                transition: (o = n.transition,
                o.type === To.Spring ? {
                    type: "spring",
                    delay: Uo(o.delay),
                    stiffness: o.stiffness,
                    damping: o.damping,
                    mass: o.mass
                } : {
                    type: "tween",
                    ease: o.type,
                    delay: Uo(o.delay),
                    duration: Uo(o.duration)
                })
            };
            var o
        }
        function Ho(e) {
            if (!e.type)
                return;
            const t = function(e) {
                return {
                    type: e,
                    direction: Ro.Down,
                    start: xo.Top,
                    replay: !0,
                    clickThrough: !0
                }
            }(e.type)
              , n = Object.assign(Object.assign({}, t), e)
              , o = n.type;
            if (o === Mo.OnAppear) {
                const e = Vo(n.effectA);
                if (!e)
                    return;
                return {
                    type: Mo.OnAppear,
                    effectA: e,
                    clickThrough: n.clickThrough
                }
            }
            if (o === Mo.OnScroll) {
                const e = Vo(n.effectA);
                if (!e)
                    return;
                return {
                    type: Mo.OnScroll,
                    direction: n.direction,
                    replay: n.replay,
                    effectA: e,
                    clickThrough: n.clickThrough
                }
            }
            if (o === Mo.ElementInView) {
                const e = Vo(n.effectA)
                  , t = Vo(n.effectB);
                if (!e && !t)
                    return;
                return {
                    type: Mo.ElementInView,
                    start: n.start,
                    replay: n.replay,
                    effectA: e,
                    effectB: t,
                    clickThrough: n.clickThrough
                }
            }
            if (o === Mo.SectionInView) {
                const e = yo()
                  , t = n.sectionId ? e.get(n.sectionId) : void 0;
                if (!t)
                    return;
                const o = Vo(n.effectA)
                  , i = Vo(n.effectB);
                if (!o && !i)
                    return;
                return {
                    type: Mo.SectionInView,
                    section: t,
                    start: n.start,
                    replay: n.replay,
                    effectA: o,
                    effectB: i,
                    clickThrough: n.clickThrough
                }
            }
        }
        function Wo(e) {
            const t = parseFloat(window.getComputedStyle(e).getPropertyValue("opacity"))
              , n = e.style.transform;
            let o = 1
              , i = 1
              , r = 0
              , s = 0
              , a = 0
              , c = 0
              , l = 0;
            isNaN(t) || (o *= t);
            const u = n.match(/(scale|rotateX|rotateY|rotateZ|translateX|translateY)\((.*?)\)/g);
            return u && u.forEach((e => {
                const [t,n] = e.split("(")
                  , o = parseFloat(n);
                switch (t) {
                case "scale":
                    i *= o;
                    break;
                case "rotateX":
                    r += o;
                    break;
                case "rotateY":
                    s += o;
                    break;
                case "rotateZ":
                    a += o;
                    break;
                case "translateX":
                    c += o;
                    break;
                case "translateY":
                    l += o
                }
            }
            )),
            {
                opacity: o,
                scale: i,
                rotateX: r,
                rotateY: s,
                rotateZ: a,
                x: c,
                y: l
            }
        }
        function zo(e, t) {
            const {animation: n, state: o} = e
              , {currentState: i} = o;
            switch (n.type) {
            case Mo.OnAppear:
                if (t === No.Entered)
                    return {
                        keyframe: o.defaultKeyframe,
                        transition: n.effectA.transition
                    };
                break;
            case Mo.OnScroll:
                if (t === No.Entered)
                    return {
                        keyframe: n.effectA.keyframe,
                        transition: n.effectA.transition
                    };
                if (t === No.Initial)
                    return {
                        keyframe: o.defaultKeyframe,
                        transition: n.effectA.transition
                    };
                break;
            case Mo.ElementInView:
            case Mo.SectionInView:
                {
                    const e = t === No.Exited || i === No.Exited ? n.effectB : n.effectA;
                    if (e) {
                        return {
                            keyframe: t === No.Entered ? o.defaultKeyframe : e.keyframe,
                            transition: e.transition
                        }
                    }
                    break
                }
            }
        }
        function $o(e) {
            const {state: t} = e
              , {currentState: n, desiredState: o} = t;
            if (n === o)
                return;
            const i = function(e, t) {
                const n = [No.Initial, No.Entered, No.Exited]
                  , o = n.indexOf(e)
                  , i = n.indexOf(t);
                return i < o ? n[o - 1] : i > o ? n[o + 1] : e
            }(n, o);
            return n !== i ? {
                nextState: i,
                effect: zo(e, i)
            } : void 0
        }
        const Go = e => (t, n, o) => {
            e && n.opacity >= Number.EPSILON && (t.style.pointerEvents = "auto");
            const i = (0,
            Co.i)(t, n, o);
            return i.then(( () => {
                e && n.opacity < Number.EPSILON && (t.style.pointerEvents = "none")
            }
            )),
            i
        }
        ;
        function qo(e) {
            const {state: t} = e
              , n = $o(e);
            if (!n)
                return;
            const {nextState: o, effect: i} = n;
            if (!i)
                return t.currentState = o,
                t.animationInProgress = !1,
                void qo(e);
            t.animationInProgress = !0;
            const r = t.isFirstAnimation ? Object.assign(Object.assign({}, i.transition), {
                velocity: 0
            }) : i.transition;
            t.isFirstAnimation = !1;
            const {el: s} = t
              , {keyframe: a} = i;
            Go(e.animation.clickThrough)(s, a, r).then(( () => {
                t.currentState = o,
                t.animationInProgress = !1,
                qo(e)
            }
            ))
        }
        function Xo(e) {
            const {state: t} = e;
            t.animationInProgress || qo(e)
        }
        function Jo(e) {
            const {animation: t, state: n} = e
              , {el: o} = n;
            o.style.opacity = `${t.effectA.keyframe.opacity}`,
            Go(t.clickThrough)(o, t.effectA.keyframe, {
                duration: 0
            }),
            (0,
            Do.l)(o, ( () => {
                n.desiredState = No.Entered,
                Xo(e)
            }
            ))
        }
        function Yo(e) {
            switch (e) {
            case xo.Top:
                return 0;
            case xo.Center:
                return .5;
            case xo.Bottom:
                return 1;
            default:
                return .5
            }
        }
        function Ko(e) {
            return (e.top + e.bottom) / 2
        }
        function Qo(e) {
            const {animation: t, state: n} = e
              , {el: o} = n;
            t.effectA && (o.style.opacity = `${t.effectA.keyframe.opacity}`,
            Go(t.clickThrough)(o, t.effectA.keyframe, {
                duration: 0
            }));
            const i = (0,
            Do.l)(o, (o => {
                const r = Ko(o.boundingClientRect);
                return t.effectA && !t.replay && i(),
                n.desiredState = No.Entered,
                Xo(e),
                o => {
                    t.replay || i();
                    const s = Ko(o.boundingClientRect) <= r;
                    n.desiredState = s ? No.Exited : No.Initial,
                    Xo(e)
                }
            }
            ), {
                amount: Yo(t.start)
            })
        }
        function Zo(e) {
            switch (e) {
            case xo.Top:
                return "0px 0px -100% 0px";
            case xo.Center:
                return "-50% 0px -50% 0px";
            case xo.Bottom:
                return "-100% 0px 0px 0px";
            default:
                return "-50% 0px -50% 0px"
            }
        }
        function ei(e) {
            const {animation: t, state: n} = e
              , {el: o} = n;
            t.effectA && (o.style.opacity = `${t.effectA.keyframe.opacity}`,
            Go(t.clickThrough)(o, t.effectA.keyframe, {
                duration: 0
            }));
            const i = t.section.el
              , r = (0,
            Do.l)(i, (o => {
                const i = Ko(o.boundingClientRect);
                return t.effectA && !t.replay && r(),
                n.desiredState = No.Entered,
                Xo(e),
                o => {
                    t.replay || r();
                    const s = Ko(o.boundingClientRect) <= i;
                    n.desiredState = s ? No.Exited : No.Initial,
                    Xo(e)
                }
            }
            ), {
                amount: "some",
                root: document,
                margin: Zo(t.start)
            })
        }
        function ti(e, t) {
            e.effectA && (e.effectA.keyframe.opacity *= t.defaultKeyframe.opacity),
            e.type !== Mo.ElementInView && e.type !== Mo.SectionInView || e.effectB && (e.effectB.keyframe.opacity *= t.defaultKeyframe.opacity)
        }
        function ni(e) {
            const t = function(e) {
                const t = new Map;
                if (!e)
                    return t;
                const n = e.scrollAnimations || {};
                return Object.entries(n).forEach(( ([e,n]) => {
                    if (!n)
                        return;
                    const o = Ho(n);
                    o && t.set(e, o)
                }
                )),
                t
            }(e)
              , n = function(e) {
                const t = new Map;
                for (const [n] of e) {
                    const e = document.getElementById(n);
                    if (!e)
                        continue;
                    const o = Wo(e)
                      , i = {
                        isFirstAnimation: !0,
                        animationInProgress: !1,
                        desiredState: No.Initial,
                        currentState: No.Initial,
                        el: e,
                        defaultKeyframe: o
                    };
                    t.set(n, i)
                }
                return t
            }(t)
              , o = new Map;
            for (const [e,i] of t) {
                const t = n.get(e);
                if (t)
                    switch (ti(i, t),
                    i.type) {
                    case Mo.OnAppear:
                        Jo({
                            animation: i,
                            state: t
                        });
                        break;
                    case Mo.OnScroll:
                        o.set(e, {
                            animation: i,
                            state: t
                        });
                        break;
                    case Mo.ElementInView:
                        Qo({
                            animation: i,
                            state: t
                        });
                        break;
                    case Mo.SectionInView:
                        ei({
                            animation: i,
                            state: t
                        })
                    }
            }
            let i;
            const r = (0,
            ko.W)((e => {
                const t = i;
                if (i = e,
                void 0 === t)
                    return;
                const n = Bo.lastScrollDirection;
                e > t ? Bo.lastScrollDirection = Ro.Down : e < t && (Bo.lastScrollDirection = Ro.Up),
                Bo.lastScrollDirection && Bo.lastScrollDirection !== n && function(e, t) {
                    const n = [];
                    for (const [o,i] of t) {
                        const {animation: t, state: r} = i
                          , s = t.direction === e
                          , a = r.desiredState === No.Initial;
                        s && a ? (r.desiredState = No.Entered,
                        Xo(i),
                        t.replay || n.push(o)) : s || a || (r.desiredState = No.Initial,
                        Xo(i))
                    }
                    for (const e of n)
                        t.delete(e)
                }(Bo.lastScrollDirection, o)
            }
            ));
            (0,
            In.W)(( () => {
                r(),
                Bo.lastScrollDirection = void 0
            }
            ))
        }
        var oi, ii, ri, si = n(8683);
        !function(e) {
            e.Upload = "upload",
            e.URL = "url"
        }(oi || (oi = {})),
        function(e) {
            e.Pause = "pause",
            e.Continue = "continue"
        }(ii || (ii = {})),
        function(e) {
            e.None = "none",
            e.PlayPause = "play_pause",
            e.Waveform = "waveform",
            e.Speaker = "speaker",
            e.Custom = "custom"
        }(ri || (ri = {}));
        const ai = oi.Upload
          , ci = ri.Waveform
          , li = f.si.Pointer
          , ui = "#252627";
        ri.PlayPause,
        ri.Waveform,
        ri.Speaker,
        ri.PlayPause,
        ri.Waveform,
        ri.Speaker;
        function di(e) {
            return e.playIconType || ci
        }
        function fi(e) {
            if (di(e) !== ri.None)
                return e.iconPlayUrl
        }
        function pi(e) {
            if (di(e) !== ri.None)
                return e.iconPauseUrl
        }
        function hi(e, t) {
            const n = document.createElement("div");
            n.style.width = "100%",
            n.style.height = "100%";
            return di(t) === ri.Custom ? (n.style.backgroundImage = `url("${encodeURI(e)}")`,
            n.style.backgroundSize = "contain",
            n.style.backgroundPosition = "center",
            n.style.backgroundRepeat = "no-repeat") : (n.style.backgroundColor = function(e) {
                return e.playIconColor || ui
            }(t),
            n.style.maskImage = `url("${encodeURI(e)}")`,
            n.style.maskSize = "contain",
            n.style.maskPosition = "center",
            n.style.maskRepeat = "no-repeat"),
            n
        }
        var mi = function(e, t, n, o) {
            return new (n || (n = Promise))((function(i, r) {
                function s(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(s, a)
                }
                c((o = o.apply(e, t || [])).next())
            }
            ))
        };
        let gi = {
            loadPromise: void 0,
            loadingDone: !1,
            audios: void 0,
            onLeavePauseAudios: [],
            tabFocus: !0,
            documentVisibility: !0,
            audioFadeOut: !1
        };
        function yi(e, t) {
            var n;
            const o = (null === (n = null == e ? void 0 : e.audio) || void 0 === n ? void 0 : n[t]) || {}
              , i = function(e) {
                return {
                    sourceType: e,
                    src: "",
                    autoplay: !1,
                    loop: !1,
                    progress: 0,
                    volume: .25,
                    onLeave: ii.Pause
                }
            }((null == o ? void 0 : o.sourceType) || ai);
            return Object.assign(Object.assign({}, i), o)
        }
        function vi(e, t) {
            var n;
            const o = (null === (n = null == e ? void 0 : e.audioStyle) || void 0 === n ? void 0 : n[t]) || {}
              , i = {
                playCursor: li,
                playIconType: ci,
                playIconColor: ui,
                iconPlayUrl: "",
                iconPauseUrl: ""
            };
            return Object.assign(Object.assign({}, i), o)
        }
        function bi(e) {
            var t, n;
            null === (t = e.iconDivEl) || void 0 === t || t.remove(),
            e.iconDivEl = void 0;
            const o = !!(null === (n = e.howl) || void 0 === n ? void 0 : n.playing());
            o && (e.playedOnce = !0);
            const i = o ? e.iconPauseBlobUrl : e.iconPlayBlobUrl;
            if (!i)
                return;
            const r = hi(i, e.style);
            e.el.prepend(r),
            e.iconDivEl = r
        }
        function wi(e) {
            var t, n;
            !!(null === (t = e.howl) || void 0 === t ? void 0 : t.playing()) || null === (n = e.howl) || void 0 === n || n.play()
        }
        function _i(e) {
            return mi(this, void 0, void 0, (function*() {
                e.iconPlayBlobUrl = yield(0,
                p.x)(fi(e.style))
            }
            ))
        }
        function Si(e) {
            return mi(this, void 0, void 0, (function*() {
                e.iconPauseBlobUrl = yield(0,
                p.x)(pi(e.style))
            }
            ))
        }
        function Ei(e) {
            return mi(this, void 0, void 0, (function*() {
                const t = function(e) {
                    const t = new Map
                      , n = document.getElementsByClassName("pwb-audio");
                    for (let o = 0; o < n.length; o++) {
                        const i = n[o].id;
                        if (!i)
                            continue;
                        const r = document.getElementById(i);
                        r && t.set(i, {
                            el: r,
                            attrs: yi(e, i),
                            style: vi(e, i),
                            playedOnce: !1,
                            isUnlocked: !1,
                            wasFadedOut: !1,
                            wasPausedByFadeOut: !1
                        })
                    }
                    return t
                }(e);
                gi.audios = t;
                const n = [];
                Array.from(t.values()).forEach((e => {
                    n.push(function(e) {
                        return mi(this, void 0, void 0, (function*() {
                            yield Promise.all([_i(e), Si(e)])
                        }
                        ))
                    }(e))
                }
                )),
                yield Promise.all(n),
                gi.loadingDone = !0
            }
            ))
        }
        function Oi(e) {
            return mi(this, void 0, void 0, (function*() {
                gi.loadPromise || (gi.loadPromise = Ei(e)),
                yield gi.loadPromise
            }
            ))
        }
        function Pi(e) {
            if (!e)
                return;
            const t = (0,
            d.wj)(e).toLowerCase();
            return ["mp3", "opus", "ogg", "wav", "aac", "m4a", "m4b", "mp4", "webm"].includes(t) ? [t] : void 0
        }
        function Ti(e) {
            var t, n;
            if (bi(e),
            !e.playedOnce) {
                if (e.attrs.progress > 0) {
                    const o = ((null === (t = e.howl) || void 0 === t ? void 0 : t.duration()) || 0) * e.attrs.progress;
                    null === (n = e.howl) || void 0 === n || n.seek(o)
                }
                e.attrs.autoplay && wi(e)
            }
        }
        function Mi(e) {
            if (bi(e),
            e.attrs.src) {
                const t = new si.Howl({
                    src: [e.attrs.src],
                    format: Pi(e.attrs.src),
                    html5: !0,
                    loop: e.attrs.loop,
                    volume: e.attrs.volume,
                    onplay: () => bi(e),
                    onplayerror: () => bi(e),
                    onend: () => bi(e),
                    onpause: () => bi(e),
                    onstop: () => bi(e),
                    onload: () => {
                        Ti(e)
                    }
                    ,
                    onunlock: () => {
                        Ti(e),
                        e.isUnlocked = !0
                    }
                    ,
                    onfade: () => {
                        var t, n, o;
                        const i = (null === (t = e.howl) || void 0 === t ? void 0 : t.volume()) || 0
                          , r = !!(null === (n = e.howl) || void 0 === n ? void 0 : n.playing());
                        i <= 0 && r && e.wasFadedOut && (e.wasPausedByFadeOut = !0,
                        null === (o = e.howl) || void 0 === o || o.pause())
                    }
                });
                e.howl = t,
                e.attrs.onLeave === ii.Pause && gi.onLeavePauseAudios.push(e)
            }
            const t = function(e) {
                return t => {
                    var n, o;
                    ro(t),
                    so(t),
                    (!e.attrs.autoplay || e.playedOnce) && ((null === (n = e.howl) || void 0 === n ? void 0 : n.playing()) ? null === (o = e.howl) || void 0 === o || o.pause() : wi(e))
                }
            }(e)
              , {el: n} = e;
            e.style.playCursor === f.si.Pointer && (n.style.cursor = "pointer"),
            n.addEventListener("click", t)
        }
        function Ri() {
            const e = !gi.documentVisibility;
            if (gi.audioFadeOut !== e)
                if (gi.audioFadeOut = e,
                gi.audioFadeOut)
                    for (const e of gi.onLeavePauseAudios) {
                        e.wasFadedOut = !1,
                        e.wasPausedByFadeOut = !1;
                        const t = e.howl;
                        if (!t)
                            continue;
                        t.playing() && (e.wasFadedOut = !0,
                        t.fade(t.volume(), 0, 1e3))
                    }
                else
                    for (const e of gi.onLeavePauseAudios) {
                        if (!e.wasFadedOut)
                            continue;
                        e.wasFadedOut = !1;
                        const t = e.howl;
                        t && (t.fade(t.volume(), e.attrs.volume, 1e3),
                        e.wasPausedByFadeOut && wi(e))
                    }
        }
        function xi(e) {
            gi.tabFocus = e,
            Ri()
        }
        function Ai(e, t) {
            if (!e.id)
                return;
            const {audios: n} = gi;
            if (!n)
                return;
            const o = n.get(e.id);
            if (!o)
                return;
            if (!o.howl)
                return;
            if (!o.isUnlocked && t !== io.MouseClick)
                return;
            if (e.event !== no.Pause && e.event !== no.Stop || (o.attrs.autoplay = !1),
            o.attrs.autoplay && !o.playedOnce)
                return;
            const i = !!o.howl.playing()
              , r = function(e, t) {
                return e === no.TogglePlayPause ? t ? no.Pause : no.Play : e === no.TogglePlayStop ? t ? no.Stop : no.Play : e
            }(e.event, i);
            i ? r === no.Pause ? o.howl.pause() : r === no.Stop && o.howl.stop() : r === no.Play ? o.howl.play() : r === no.Stop && o.howl.stop()
        }
        function Ci() {
            const {loadingDone: e, audios: t} = gi;
            if (!e || !t)
                throw new Error("UIAudioModule needs to be loaded before it can be initialized.");
            Array.from(t.values()).forEach((e => {
                Mi(e)
            }
            ));
            const n = () => xi(!0)
              , o = () => xi(!1);
            window.addEventListener("focus", n),
            window.addEventListener("blur", o),
            xi(!!document.hasFocus());
            const i = () => {
                return e = !document.hidden,
                gi.documentVisibility = e,
                void Ri();
                var e
            }
            ;
            document.addEventListener("visibilitychange", i),
            i(),
            co(to.UIAudio, Ai);
            (0,
            In.W)(( () => {
                var e;
                lo(to.UIAudio, Ai),
                document.removeEventListener("visibilitychange", i),
                window.removeEventListener("blur", o),
                window.removeEventListener("focus", n);
                const t = Array.from(gi.audios ? gi.audios.values() : []);
                for (const n of t)
                    null === (e = n.howl) || void 0 === e || e.unload();
                gi = {
                    loadPromise: void 0,
                    loadingDone: !1,
                    audios: void 0,
                    onLeavePauseAudios: [],
                    tabFocus: !0,
                    documentVisibility: !0,
                    audioFadeOut: !1
                }
            }
            ))
        }
        var Di, ki, Ii, ji = n(2777);
        !function(e) {
            e.Top = "top",
            e.Right = "right",
            e.Bottom = "bottom",
            e.Left = "left"
        }(Di || (Di = {})),
        function(e) {
            e.Start = "start",
            e.Center = "center",
            e.End = "end"
        }(ki || (ki = {})),
        function(e) {
            e.Auto = "auto",
            e.Click = "click",
            e.None = "none"
        }(Ii || (Ii = {}));
        const Ni = {
            [Di.Top]: Di.Bottom,
            [Di.Bottom]: Di.Top,
            [Di.Left]: Di.Right,
            [Di.Right]: Di.Left
        };
        function Li(e) {
            const {position: t, align: n} = e
              , o = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto",
                transform: "none"
            };
            o[Ni[t]] = "100%";
            const i = [Di.Left, Di.Right].includes(t);
            let r = i ? Di.Top : Di.Left;
            n === ki.End && (r = Ni[r]);
            const s = n === ki.Center ? "50%" : "0px";
            o[r] = s;
            const a = [];
            n === ki.Center && a.push(i ? "translateY(-50%)" : "translateX(-50%)");
            const c = function(e) {
                const {position: t, offsetOrthogonal: n, offsetParallel: o} = e
                  , i = [Di.Top, Di.Left].includes(t) ? -1 : 1
                  , r = [Di.Top, Di.Bottom].includes(t)
                  , s = [n * i, o];
                r && s.reverse();
                return {
                    x: s[0],
                    y: s[1]
                }
            }(e);
            return c.x && a.push(`translateX(${c.x}px)`),
            c.y && a.push(`translateY(${c.y}px)`),
            a.length > 0 && (o.transform = a.join(" ")),
            o
        }
        function Bi(e, t, n) {
            const o = (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
            return 0 === o ? 0 : o > 0 ? 1 : 2
        }
        function Fi(e, t) {
            const n = t.x - e.x
              , o = t.y - e.y;
            return Math.sqrt(n * n + o * o)
        }
        function Ui(e, t, n) {
            return (t.x - e.x) * (n.y - e.y) - (n.x - e.x) * (t.y - e.y)
        }
        function Vi(e, t) {
            return 0 !== function(e, t) {
                let n = 0;
                for (let o = 0; o < t.length; o++) {
                    const i = t[o]
                      , r = t[(o + 1) % t.length];
                    i.y <= e.y ? r.y > e.y && Ui(i, r, e) > 0 && n++ : r.y <= e.y && Ui(i, r, e) < 0 && n--
                }
                return n
            }(e, t)
        }
        var Hi, Wi, zi = function(e, t, n, o) {
            return new (n || (n = Promise))((function(i, r) {
                function s(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(s, a)
                }
                c((o = o.apply(e, t || [])).next())
            }
            ))
        };
        !function(e) {
            e.Relative = "relative",
            e.Fixed = "fixed"
        }(Hi || (Hi = {})),
        function(e) {
            e.Closed = "closed",
            e.Open = "open"
        }(Wi || (Wi = {}));
        const $i = {
            [Wi.Closed]: Wi.Open,
            [Wi.Open]: Wi.Closed
        }
          , Gi = {
            overlays: new Map
        };
        function qi(e) {
            const t = [];
            if (!e)
                return t;
            const n = e[u.BX.RelativeOverlays] || {};
            return Object.entries(n).forEach(( ([e,n]) => {
                if (!n)
                    return;
                const o = document.getElementById(e);
                if (!o)
                    return;
                const i = {
                    position: Di.Bottom,
                    align: ki.Center,
                    offsetOrthogonal: 8,
                    offsetParallel: 0,
                    dismissType: Ii.Auto
                }
                  , r = Object.assign(Object.assign({}, i), n);
                t.push({
                    id: e,
                    el: o,
                    type: Hi.Relative,
                    desiredState: Wi.Closed,
                    currentState: Wi.Closed,
                    isAnimating: !1,
                    isDisposed: !1,
                    overlay: r
                })
            }
            )),
            t
        }
        function Xi(e) {
            return [{
                x: e.left,
                y: e.top
            }, {
                x: e.right,
                y: e.top
            }, {
                x: e.right,
                y: e.bottom
            }, {
                x: e.left,
                y: e.bottom
            }]
        }
        function Ji(e) {
            const {el: t} = e
              , n = t.parentElement;
            if (!n)
                return;
            const o = (0,
            ji.A)((o => {
                const r = function(e) {
                    if (e.length < 3)
                        return;
                    const t = [];
                    let n = 0;
                    for (let t = 1; t < e.length; t++)
                        (e[t].x < e[n].x || e[t].x === e[n].x && e[t].y < e[n].y) && (n = t);
                    let o, i = n;
                    do {
                        t.push(e[i]),
                        o = (i + 1) % e.length;
                        for (let t = 0; t < e.length; t++) {
                            const n = Bi(e[i], e[t], e[o]);
                            (2 == n || 0 == n && Fi(e[i], e[t]) > Fi(e[i], e[o])) && (o = t)
                        }
                        i = o
                    } while (i != n);
                    return t
                }([...Xi(t.getBoundingClientRect()), ...Xi(n.getBoundingClientRect())]);
                if (!r)
                    return;
                Vi({
                    x: o.clientX,
                    y: o.clientY
                }, r) || (e.desiredState = Wi.Closed,
                er(e),
                i())
            }
            ), 200, {
                leading: !0,
                trailing: !0
            })
              , i = () => {
                document.removeEventListener("mousemove", o),
                e.disposeMouseMoveListenerCb = void 0
            }
            ;
            return document.addEventListener("mousemove", o),
            i
        }
        function Yi(e, t) {
            return !!t && (!!t.classList.contains(e) || Yi(e, t.parentElement))
        }
        function Ki(e) {
            const {el: t} = e
              , n = t.parentElement;
            if (!n)
                return;
            const o = po(e.id)
              , i = () => {
                e.desiredState = Wi.Closed,
                er(e),
                a()
            }
              , r = e => {
                const t = e.target;
                n.contains(t) || Yi(o, t) || i()
            }
              , s = e => {
                "Escape" !== e.key && "Esc" !== e.key || i()
            }
              , a = () => {
                document.removeEventListener("mousedown", r),
                document.removeEventListener("touchstart", r),
                document.removeEventListener("keydown", s),
                e.disposeClickAwayListenerCb = void 0
            }
            ;
            return document.addEventListener("mousedown", r),
            document.addEventListener("touchstart", r),
            document.addEventListener("keydown", s),
            a
        }
        function Qi(e) {
            var t, n;
            null === (t = e.disposeMouseMoveListenerCb) || void 0 === t || t.call(e),
            null === (n = e.disposeClickAwayListenerCb) || void 0 === n || n.call(e)
        }
        function Zi(e) {
            return zi(this, void 0, void 0, (function*() {
                e.isAnimating = !0;
                const {el: t, desiredState: n} = e;
                n === Wi.Open ? (t.style.display = "block",
                e.type === Hi.Relative && function(e) {
                    var t, n;
                    e.overlay.dismissType === Ii.Auto && (null === (t = e.disposeMouseMoveListenerCb) || void 0 === t || t.call(e),
                    e.disposeMouseMoveListenerCb = Ji(e)),
                    [Ii.Auto, Ii.Click].includes(e.overlay.dismissType) && (null === (n = e.disposeClickAwayListenerCb) || void 0 === n || n.call(e),
                    e.disposeClickAwayListenerCb = Ki(e))
                }(e),
                yield(0,
                Co.i)(t, {
                    opacity: 1
                }, {
                    type: "tween",
                    ease: Po.EaseInOut,
                    delay: 0,
                    duration: .3
                }),
                e.currentState = Wi.Open) : (e.type === Hi.Relative && Qi(e),
                yield(0,
                Co.i)(t, {
                    opacity: 0
                }, {
                    type: "tween",
                    ease: Po.EaseInOut,
                    delay: 0,
                    duration: .3
                }),
                t.style.display = "none",
                e.currentState = Wi.Closed),
                e.isAnimating = !1,
                er(e)
            }
            ))
        }
        function er(e) {
            e.isAnimating || e.isDisposed || e.desiredState !== e.currentState && Zi(e)
        }
        function tr(e) {
            const {el: t, overlay: n} = e;
            t.style.display = "none",
            t.style.opacity = "0",
            function(e, t) {
                const n = Li(t);
                for (const [t,o] of Object.entries(n))
                    e.style[t] = o
            }(t, n);
            const o = t.parentElement;
            o && (o.style.cursor = "pointer",
            t.style.cursor || (t.style.cursor = "auto"),
            o.addEventListener("click", (t => {
                ro(t),
                so(t),
                e.desiredState = Wi.Open,
                er(e)
            }
            )),
            Gi.overlays.set(e.id, e))
        }
        function nr(e) {
            const {overlays: t} = Gi
              , n = t.get(e.id);
            if (n) {
                switch (e.event) {
                case oo.Open:
                    n.desiredState = Wi.Open;
                    break;
                case oo.Close:
                    n.desiredState = Wi.Closed;
                    break;
                case oo.ToggleOpenClose:
                    n.desiredState = $i[n.desiredState]
                }
                er(n)
            }
        }
        function or(e) {
            Jn.reinitialize(e),
            vo(e),
            mo(e),
            function(e) {
                const t = qi(e);
                for (const e of t)
                    tr(e);
                co(to.UIOverlay, nr),
                (0,
                In.W)(( () => {
                    lo(to.UIOverlay, nr);
                    const e = Array.from(Gi.overlays.values());
                    for (const t of e)
                        t.isDisposed = !0,
                        t.type === Hi.Relative && Qi(t);
                    Gi.overlays = new Map
                }
                ))
            }(e),
            So(e),
            ni(e),
            Ci()
        }
        function ir(e) {
            const t = document.getElementById(a);
            t.replaceWith(...t.childNodes);
            document.querySelector(`div#${s}`).remove(),
            or(e)
        }
        var rr = function(e, t, n, o) {
            return new (n || (n = Promise))((function(i, r) {
                function s(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(s, a)
                }
                c((o = o.apply(e, t || [])).next())
            }
            ))
        };
        function sr() {
            return Promise.all([n.e(707), n.e(606)]).then(n.bind(n, 6606))
        }
        const ar = {
            isInitialized: !1,
            isNavigating: !1,
            styleLoadedPaths: new Set
        };
        function cr() {
            const {isInitialized: e, isNavigating: t} = ar;
            if (e && !t)
                return ar.currentPath
        }
        function lr() {
            return ar.currentSectionHash
        }
        function ur(e, t, n=!1) {
            ar.currentPath = e,
            ar.currentSectionHash = t || void 0,
            n || kn.kr || history.pushState({}, "", `${e}${t ? `#${t}` : ""}`)
        }
        function dr() {
            return rr(this, void 0, void 0, (function*() {
                try {
                    const [e,t] = yield Promise.all([_(), S()])
                      , n = (new DOMParser).parseFromString(e, "text/html")
                      , o = n.getElementById(c);
                    if (!o)
                        throw new Error("Error page wrap not found.");
                    (0,
                    In.b)(),
                    document.body.replaceChildren(o),
                    document.title = n.title,
                    Array.from(document.body.attributes).forEach((e => {
                        document.body.removeAttribute(e.name)
                    }
                    ));
                    const i = document.createElement("style");
                    i.textContent = t,
                    document.head.append(i)
                } catch (e) {
                    console.error("Load error page error:", e)
                }
            }
            ))
        }
        const fr = () => window.innerWidth < l.mq ? u.SN.Mobile : window.innerWidth < l.g4 ? u.SN.Tablet : u.SN.Desktop;
        function pr(e) {
            return rr(this, void 0, void 0, (function*() {
                const t = yield b(e);
                return (new DOMParser).parseFromString(t, "text/html")
            }
            ))
        }
        function hr(e, t) {
            return rr(this, void 0, void 0, (function*() {
                const n = t.querySelector('meta[name="pw:has-visual-script"]');
                if (!(!!n && n instanceof HTMLMetaElement && "true" === n.content))
                    return;
                const o = yield v(e);
                return o && sr(),
                o
            }
            ))
        }
        function mr(e, t, n) {
            const {isInitialized: o, isNavigating: i} = ar;
            o && !i ? (ar.isNavigating = !0,
            ur(e, t, n),
            function() {
                return rr(this, void 0, void 0, (function*() {
                    const e = ar.currentPath;
                    if (!e)
                        return;
                    const [t,n,o] = yield Promise.all([pr(e), w(e), y(e)])
                      , i = fr()
                      , [r,c] = yield Promise.all([g(o, i), hr(e, t)]);
                    (0,
                    In.b)();
                    const l = t.getElementById(a);
                    if (!l)
                        throw new Error("Failed loading a new page: page body wrap not found.");
                    const u = t.getElementById(s);
                    if (!u)
                        throw new Error("Failed loading a new page: page loading wrap not found.");
                    if (document.body.replaceChildren(l, u),
                    document.title = t.title,
                    window._pwExecLoadingPageJavascript(),
                    Array.from(document.body.attributes).forEach((e => {
                        document.body.removeAttribute(e.name)
                    }
                    )),
                    Array.from(t.body.attributes).forEach((e => {
                        document.body.setAttribute(e.name, e.value)
                    }
                    )),
                    !ar.styleLoadedPaths.has(e)) {
                        ar.styleLoadedPaths.add(e);
                        const t = document.createElement("style");
                        t.textContent = n,
                        document.head.append(t)
                    }
                    const d = Oi(o);
                    if (r) {
                        const {engineState: e, animations: t} = r
                          , n = Zn(e, o, i)
                          , s = vr(n, c);
                        yield Promise.all([d, n, s]),
                        eo(t, o)
                    } else
                        yield d;
                    ir(o)
                }
                ))
            }().then(( () => {
                ar.isNavigating = !1,
                gr()
            }
            )).catch((e => {
                console.error("Router navigation error:", e),
                dr().finally(( () => {
                    ar.isNavigating = !1,
                    gr()
                }
                ))
            }
            ))) : ar.nextNavigateTo = {
                path: e,
                sectionHash: t,
                omitHistoryPush: n
            }
        }
        function gr() {
            if (!ar.nextNavigateTo)
                return;
            const {path: e, sectionHash: t} = ar.nextNavigateTo;
            ar.nextNavigateTo = void 0,
            mr(e, t)
        }
        function yr() {
            const e = kn.xB
              , t = (0,
            d.f9)(window.location.hash, "#")
              , n = document.location.search || "";
            kn.kr || history.replaceState({}, "", `${e}${t ? `#${t}` : ""}${n}`),
            ur(e, t, !0),
            function() {
                return rr(this, void 0, void 0, (function*() {
                    const e = ar.currentPath;
                    if (!e)
                        return;
                    ar.styleLoadedPaths.add(e);
                    const t = yield y(e)
                      , n = Oi(t)
                      , o = fr()
                      , [i,r] = yield Promise.all([g(t, o), hr(e, document)]);
                    if (i) {
                        const {engineState: e, animations: s} = i
                          , a = Zn(e, t, o)
                          , c = vr(a, r);
                        yield Promise.all([n, a, c]),
                        eo(s, t)
                    } else
                        yield n;
                    ir(t)
                }
                ))
            }().then(( () => {
                ar.isInitialized = !0,
                gr()
            }
            )).catch((e => {
                console.error("Router initialization error:", e),
                dr().finally(( () => {
                    ar.isInitialized = !0,
                    gr()
                }
                ))
            }
            )),
            window.addEventListener("popstate", ( () => {
                mr(window.location.pathname, (0,
                d.f9)(window.location.hash, "#"), !0)
            }
            ))
        }
        function vr(e, t) {
            return rr(this, void 0, void 0, (function*() {
                if (t) {
                    (0,
                    (yield sr()).default)(t, yield e)
                }
            }
            ))
        }
    }
    ,
    6615: (e, t, n) => {
        n.d(t, {
            DS: () => r,
            EZ: () => u,
            H0: () => p,
            LX: () => c,
            RL: () => l,
            g4: () => f,
            j4: () => s,
            mq: () => d
        });
        var o = n(5062)
          , i = n(4151);
        const r = !1
          , s = "imported_texture"
          , a = (i.lV.Group,
        i.lV.Water,
        i.lV.Scene,
        i.lV.Mesh,
        i.OS.Box,
        i.OS.Plane,
        i.OS.Sphere,
        i.OS.Cylinder,
        i.OS.Cone,
        i.OS.Torus,
        i.lV.Camera,
        i.Fn.Perspective,
        i.Fn.Orthographic,
        i.lV.Light,
        i.g5.Ambient,
        i.g5.Directional,
        i.g5.Point,
        i.g5.Spot,
        ["opacity", "color", "aoMapIntensity"])
          , c = {
            [i.J8.Unlit]: [...a, "reflectivity"],
            [i.J8.Lit]: [...a, "emissive", "roughness", "metalness", "displacementScale", "emissiveIntensity"],
            [i.J8.Physical]: [...a, "emissive", "roughness", "metalness", "displacementScale", "emissiveIntensity", "attenuationDistance", "attenuationColor", "clearcoat", "clearcoatRoughness", "dispersion", "thickness", "transmission", "ior", "iridescence", "iridescenceIOR", "reflectivity", "specularIntensity", "specularColor", "sheen", "sheenColor", "sheenRoughness"],
            [i.J8.Phong]: [...a, "emissive", "reflectivity", "displacementScale", "bumpScale", "emissive", "refractionRatio", "shininess", "specular", "emissiveIntensity"]
        }
          , l = (i.J8.Unlit,
        new Set(c[i.J8.Unlit]),
        i.J8.Phong,
        new Set(c[i.J8.Phong]),
        i.J8.Lit,
        new Set(c[i.J8.Lit]),
        i.J8.Physical,
        new Set(c[i.J8.Physical]),
        {
            MeshStandardMaterial: i.J8.Lit,
            MeshPhysicalMaterial: i.J8.Physical,
            MeshBasicMaterial: i.J8.Unlit,
            MeshPhongMaterial: i.J8.Phong
        })
          , u = {
            [i.Ps.Clamp]: o.ghU,
            [i.Ps.Repeat]: o.GJx,
            [i.Ps.MirroredRepeat]: o.kTW
        }
          , d = 768
          , f = 992
          , p = "DEFAULT_ANIMATION_SHEET_NAME"
    }
    ,
    5454: (e, t, n) => {
        var o, i;
        n.d(t, {
            lx: () => i,
            si: () => o
        }),
        function(e) {
            e.Default = "default",
            e.Pointer = "pointer"
        }(o || (o = {})),
        function(e) {
            e.SceneState = "scene-state",
            e.UIState = "ui-state.json",
            e.PageVisualScript = "pageVs.json",
            e.Index = "index.html",
            e.Styles = "styles.css",
            e.Favicon = "favicon.ico",
            e.MetaImage = "meta-image.jpg",
            e.ErrorPage = "error-page.html",
            e.ErrorPageStyles = "error-page-styles.css",
            e.Sitemap = "sitemap.xml",
            e.Robots = "robots.txt"
        }(i || (i = {}));
        i.Index,
        i.Styles,
        i.UIState,
        i.Favicon,
        i.MetaImage;
        var r;
        !function(e) {
            e.CUSTOM_DOMAIN_IS_MISSING = "CUSTOM_DOMAIN_IS_MISSING",
            e.DNS_RECORD_A_IS_MISSING = "DNS_RECORD_A_IS_MISSING",
            e.DNS_RECORD_CNAME_IS_MISSING = "DNS_RECORD_CNAME_IS_MISSING",
            e.DNS_RECORD_TXT_IS_MISSING = "DNS_RECORD_TXT_IS_MISSING",
            e.EXTRA_DNS_RECORD_IS_FOUND = "EXTRA_DNS_RECORD_IS_FOUND"
        }(r || (r = {}))
    }
    ,
    4151: (e, t, n) => {
        var o, i, r, s, a, c, l, u, d, f, p, h, m, g;
        n.d(t, {
            Fn: () => c,
            GI: () => m,
            J8: () => u,
            OS: () => a,
            Ps: () => h,
            X6: () => o,
            ap: () => f,
            bN: () => g,
            g5: () => l,
            lV: () => s,
            sc: () => d
        }),
        function(e) {
            e[e.Raycast = 1] = "Raycast",
            e[e.Helpers = 2] = "Helpers",
            e[e.HelpersRaycast = 3] = "HelpersRaycast"
        }(o || (o = {})),
        function(e) {
            e[e.Low = 512] = "Low",
            e[e.Normal = 1024] = "Normal",
            e[e.High = 2048] = "High"
        }(i || (i = {})),
        function(e) {
            e[e.Low = 256] = "Low",
            e[e.Normal = 512] = "Normal",
            e[e.High = 1024] = "High"
        }(r || (r = {})),
        function(e) {
            e.Imported = "IMPORTED",
            e.Scene = "SCENE",
            e.Mesh = "MESH",
            e.Group = " GROUP",
            e.Light = "LIGHT",
            e.Camera = "CAMERA",
            e.Water = "Water",
            e.Html = "HTML"
        }(s || (s = {})),
        function(e) {
            e.Plane = "PLANE",
            e.Box = "BOX",
            e.Sphere = "SPHERE",
            e.Cylinder = "CYLINDER",
            e.Cone = "CONE",
            e.Torus = "TORUS"
        }(a || (a = {})),
        function(e) {
            e.Perspective = "PERSPECTIVE",
            e.Orthographic = "ORTHOGRAPHIC"
        }(c || (c = {})),
        function(e) {
            e.Directional = "DIRECTIONAL",
            e.Ambient = "AMBIENT",
            e.Spot = "SPOT",
            e.Point = "POINT"
        }(l || (l = {})),
        function(e) {
            e.Unlit = "UNLIT",
            e.Lit = "LIT",
            e.Physical = "PHYSICAL",
            e.Phong = "PHONG"
        }(u || (u = {})),
        function(e) {
            e.Front = "FRONT",
            e.Back = "BACK",
            e.Double = "DOUBLE"
        }(d || (d = {})),
        function(e) {
            e.Gltf = "GLTF",
            e.FBX = "FBX",
            e.Obj = "OBJ",
            e.Texture = "TEXTURE",
            e.VideoTexture = "VIDEO_TEXTURE",
            e.EXRTexture = "EXR_TEXTURE",
            e.HDRTexture = "HDR_TEXTURE",
            e.Environment = "ENVIRONMENT"
        }(f || (f = {})),
        function(e) {
            e[e.Low = 256] = "Low",
            e[e.Normal = 512] = "Normal",
            e[e.High = 1024] = "High"
        }(p || (p = {})),
        function(e) {
            e.Clamp = "Clamp",
            e.Repeat = "Repeat",
            e.MirroredRepeat = "MirroredRepeat"
        }(h || (h = {})),
        function(e) {
            e.Absolute = "ABSOLUTE",
            e.Relative = "RELATIVE"
        }(m || (m = {})),
        function(e) {
            e.Tilt = "TILT",
            e.Pan = "PAN"
        }(g || (g = {}))
    }
    ,
    7615: (e, t, n) => {
        var o, i, r, s, a;
        n.d(t, {
            BX: () => r,
            J: () => a,
            Pc: () => o,
            SN: () => s
        }),
        function(e) {
            e.External = "external",
            e.Internal = "internal"
        }(o || (o = {})),
        function(e) {
            e.Canvases = "canvases",
            e.Sections = "sections",
            e.Links = "links",
            e.ScrollAnimations = "scrollAnimations",
            e.Audio = "audio",
            e.AudioStyle = "audioStyle",
            e.Anchor = "anchor"
        }(i || (i = {})),
        function(e) {
            e.Interactions = "interactions",
            e.RelativeOverlays = "relativeOverlays",
            e.Anchors = "anchors"
        }(r || (r = {})),
        function(e) {
            e.Mobile = "mobile",
            e.Tablet = "tablet",
            e.Desktop = "desktop"
        }(s || (s = {})),
        function(e) {
            e.Native = "native",
            e.Smooth = "smooth"
        }(a || (a = {}))
    }
    ,
    3631: (e, t, n) => {
        function o(e, t) {
            const n = Math.pow(10, t)
              , o = Math.round(e * n) / n;
            return parseFloat(o.toFixed(Math.max(0, t)))
        }
        function i(e, t) {
            return Array.isArray(e) ? e : [e, ...t]
        }
        function r(e, ...t) {
            const n = i(e, t);
            if (0 === n.length)
                throw new Error("Cannot calculate the mean of an empty array");
            return function(e, ...t) {
                return i(e, t).reduce(( (e, t) => e + t), 0)
            }(n) / n.length
        }
        n.d(t, {
            eB: () => o,
            i2: () => r
        })
    }
    ,
    4074: (e, t, n) => {
        n.d(t, {
            lk: () => r
        });
        var o = n(5062)
          , i = n(4151);
        function r() {
            return o.cj9.generateUUID()
        }
        i.g5.Ambient,
        i.g5.Directional,
        i.g5.Point,
        i.g5.Spot;
        o.hB5,
        i.sc.Front,
        o.hsX,
        i.sc.Back,
        o.$EB,
        i.sc.Double,
        o.ghU,
        i.Ps.Clamp,
        o.GJx,
        i.Ps.Repeat,
        o.kTW,
        i.Ps.MirroredRepeat;
        i.J8.Lit,
        i.J8.Physical,
        i.J8.Unlit,
        i.J8.Phong
    }
    ,
    490: (e, t, n) => {
        var o, i, r;
        function s(e, t) {
            return {
                set: (n, o, i) => {
                    const r = n[o] !== i
                      , s = Reflect.set(n, o, i);
                    return e.includes(o) && r && t(o),
                    s
                }
            }
        }
        function a(e) {
            const t = e;
            function n(e, n) {
                const o = t[e]
                  , i = new Proxy(o,s(["x", "y", "z", "_x", "_y", "_z"], (e => {
                    t.dispatchEvent({
                        type: n,
                        target: t,
                        property: e
                    })
                }
                )));
                !function(e, t, n) {
                    Reflect.deleteProperty(e, t),
                    Reflect.defineProperty(e, t, {
                        value: n,
                        configurable: !1,
                        enumerable: !0,
                        writable: !1
                    })
                }(t, e, i)
            }
            return n("position", i.UpdatePosition),
            n("rotation", i.UpdateRotation),
            n("scale", i.UpdateScale),
            t
        }
        n.d(t, {
            bd: () => o,
            Vy: () => ct
        }),
        function(e) {
            e.MouseDown = "MOUSE_DOWN",
            e.MouseUp = "MOUSE_UP",
            e.MouseMove = "MOUSE_MOVE",
            e.Loaded = "LOADED",
            e.ResourcesLoaded = "RESOURCES_LOADED",
            e.SceneReady = "SCENE_READY"
        }(o || (o = {})),
        function(e) {
            e.UpdatePosition = "UPDATE_POSITION",
            e.UpdateRotation = "UPDATE_ROTATION",
            e.UpdateScale = "UPDATE_SCALE"
        }(i || (i = {})),
        function(e) {
            e.Update = "UPDATE"
        }(r || (r = {}));
        var c = n(4151);
        function l(e) {
            return e.type === c.lV.Light
        }
        function u(e) {
            return e.type === c.lV.Mesh
        }
        function d(e) {
            return e.type === c.lV.Scene
        }
        function f(e) {
            return e.type === c.lV.Imported
        }
        function p(e) {
            return e.type === c.lV.Water
        }
        function h(e) {
            return (null == e ? void 0 : e.assetType) === c.ap.VideoTexture
        }
        function m(e) {
            return e.type === c.J8.Physical
        }
        function g(e) {
            return e.type === c.lV.Camera
        }
        function y(e) {
            return e.cameraType === c.Fn.Perspective
        }
        function v(e) {
            return e.cameraType === c.Fn.Orthographic
        }
        function b(e) {
            return e.lightType === c.g5.Point
        }
        function w(e) {
            return e.lightType === c.g5.Directional
        }
        function _(e) {
            return e.lightType === c.g5.Ambient
        }
        function S(e) {
            return e.lightType === c.g5.Spot
        }
        function E(e) {
            return "MeshBasicMaterial" === e.type
        }
        function O(e) {
            return "MeshPhongMaterial" === e.type
        }
        function P(e) {
            return "MeshPhysicalMaterial" === e.type
        }
        var T = n(5062)
          , M = n(6615);
        function R(e) {
            Array.isArray(e) ? e.forEach((e => R(e))) : (Object.keys(e).forEach((t => {
                const n = e[t];
                !!n && "object" == typeof n && "dispose"in n && "function" == typeof n.dispose && n.dispose()
            }
            )),
            e.dispose())
        }
        function x(e) {
            return e ? e.userData.isPwObject ? e : x(e.parent) : null
        }
        function A(e, t) {
            return t ? e.set(t.x, t.y, t.z) : e.set(0, 0, 0)
        }
        function C(e, t, n) {
            e.wrapS = M.EZ[t.wrapS],
            e.wrapT = M.EZ[t.wrapT],
            e.repeat.set(t.repeat.x, t.repeat.y),
            e.offset.set(t.offset.x, t.offset.y),
            e.center.set(t.center.x, t.center.y),
            e.image && (e.needsUpdate = !0),
            h(t) && (n && h(n) && n.loop === t.loop || e.source.data.play(),
            e.source.data.loop = t.loop)
        }
        const D = new T.Pq0;
        function k(e) {
            const t = new Map;
            return e.traverse((e => {
                (e instanceof T.eaF || e instanceof T.I46 || e instanceof T.ZLX) && (Array.isArray(e.material) ? e.material.forEach((e => {
                    t.set(e.uuid, e)
                }
                )) : t.set(e.material.uuid, e.material))
            }
            )),
            Array.from(t.values())
        }
        new T.NRn;
        var I = function(e, t, n, o) {
            return new (n || (n = Promise))((function(i, r) {
                function s(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function a(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(s, a)
                }
                c((o = o.apply(e, t || [])).next())
            }
            ))
        };
        class j {
            constructor(e, t) {
                this.usedBy = new Set;
                const {assetType: n, assetUrl: o} = e;
                this.loaded = !1,
                this.assetUrl = o,
                this.assetType = n === c.ap.Environment ? e.environmentAssetType : n,
                this.loader = t
            }
            getData() {
                return I(this, void 0, void 0, (function*() {
                    if (this.loaded && this.data)
                        return this.data;
                    const e = yield this.loadAssetData(this.assetType, this.assetUrl);
                    return this.data = e,
                    this.loaded = !0,
                    this.data
                }
                ))
            }
            loadAssetData(e, t) {
                return I(this, void 0, void 0, (function*() {
                    return yield this.loader.loadAsync(e, t)
                }
                ))
            }
            dispose() {
                if (this.data)
                    switch (this.assetType) {
                    case c.ap.Texture:
                    case c.ap.HDRTexture:
                    case c.ap.EXRTexture:
                        this.data.dispose();
                        break;
                    case c.ap.Gltf:
                        this.data.scenes.forEach((e => {
                            e.traverse((function(e) {
                                e instanceof T.eaF && (e.geometry.dispose(),
                                R(e.material))
                            }
                            ))
                        }
                        ));
                        break;
                    case c.ap.FBX:
                    case c.ap.Obj:
                        this.data.traverse((function(e) {
                            e instanceof T.eaF && (e.geometry.dispose(),
                            R(e.material))
                        }
                        ))
                    }
            }
        }
        var N = n(1358);
        const L = {
            [c.Ps.Clamp]: T.ghU,
            [c.Ps.Repeat]: T.GJx,
            [c.Ps.MirroredRepeat]: T.kTW
        }
          , B = [c.ap.Environment, c.ap.Texture, c.ap.HDRTexture, c.ap.EXRTexture, c.ap.Gltf, c.ap.Obj, c.ap.FBX, c.ap.VideoTexture];
        class F {
            constructor(e, t) {
                const {uuid: n, assetUrl: o} = e;
                if (this.uuid = n,
                this.assetUrl = o,
                t.usedBy.add(n),
                !B.includes(e.assetType))
                    throw new Error(`Asset type ${e.assetType} is not supported!`);
                this.assetInstance = t.getData().then((t => {
                    switch (e.assetType) {
                    case c.ap.HDRTexture:
                    case c.ap.EXRTexture:
                    case c.ap.Texture:
                        {
                            const {center: n, offset: o, repeat: i, wrapS: r=c.Ps.Clamp, wrapT: s=c.Ps.Clamp} = e
                              , a = t.clone();
                            return a.center = new T.I9Y(n.x,n.y),
                            a.offset = new T.I9Y(o.x,o.y),
                            a.repeat = new T.I9Y(i.x,i.y),
                            a.wrapS = L[r],
                            a.wrapT = L[s],
                            a.colorSpace = T.er$,
                            a.needsUpdate = !0,
                            a
                        }
                    case c.ap.VideoTexture:
                        {
                            const {center: t, offset: n, repeat: i, wrapS: r=c.Ps.Clamp, wrapT: s=c.Ps.Clamp, loop: a} = e
                              , l = document.createElement("video");
                            l.setAttribute("id", "video"),
                            l.crossOrigin = "anonymous",
                            l.style.display = "none",
                            l.playsInline = !0,
                            l.autoplay = !0,
                            l.muted = !0,
                            l.loop = a,
                            l.src = o,
                            document.body.append(l),
                            l.load(),
                            l.preload = "auto",
                            l.play();
                            const u = new T.Nv2(l);
                            return u.center = new T.I9Y(t.x,t.y),
                            u.offset = new T.I9Y(n.x,n.y),
                            u.repeat = new T.I9Y(i.x,i.y),
                            u.wrapS = L[r],
                            u.wrapT = L[s],
                            u.colorSpace = T.er$,
                            u.needsUpdate = !0,
                            new Promise((e => {
                                l.oncanplay = () => {
                                    e(u)
                                }
                            }
                            ))
                        }
                    case c.ap.Environment:
                        {
                            const e = t.clone();
                            e.mapping = T.wfO;
                            const n = t.clone();
                            return n.mapping = T.uV5,
                            e.needsUpdate = !0,
                            {
                                reflection: e,
                                refraction: n
                            }
                        }
                    case c.ap.Gltf:
                        {
                            const e = new T.YJl
                              , n = t;
                            return n.scenes.forEach((t => {
                                e.add(N.o8(t))
                            }
                            )),
                            e.userData = {
                                isGLTF: !0
                            },
                            {
                                model: e,
                                animations: n.animations.map((e => e.clone())),
                                materials: k(e)
                            }
                        }
                    case c.ap.Obj:
                        {
                            const e = t.clone();
                            return {
                                model: e,
                                materials: k(e)
                            }
                        }
                    case c.ap.FBX:
                        {
                            const e = N.o8(t);
                            return {
                                model: e,
                                materials: k(e)
                            }
                        }
                    default:
                        throw new Error("Resource type should be checked before the async code, otherwise error can't be caught!")
                    }
                }
                ))
            }
            dispose() {
                this.assetInstance.then((e => {
                    if (e instanceof T.Nv2 && (document.body.removeChild(e.source.data),
                    e.dispose()),
                    e instanceof T.gPd && e.dispose(),
                    e instanceof T.YJl) {
                        e.traverse((function(e) {
                            e instanceof T.eaF && (e.geometry.dispose(),
                            R(e.material))
                        }
                        ))
                    }
                }
                ))
            }
        }
        function U(e, t) {
            const n = new Map
              , i = new Map
              , r = new Set;
            let s = !1;
            function a() {
                r.size > 0 || s || (s = !0,
                t.dispatchEvent({
                    type: o.ResourcesLoaded
                }))
            }
            function c(t) {
                const o = new j(t,e);
                return n.set(t.assetUrl, o),
                o
            }
            return {
                createResource: function(e) {
                    const t = new F(e,n.get(e.assetUrl) || c(e));
                    return r.add(t),
                    i.set(e.uuid, t),
                    t.assetInstance.finally(( () => {
                        r.delete(t),
                        a()
                    }
                    )),
                    t
                },
                createAsset: c,
                getAsset: n.get.bind(n),
                deleteResource: function(e) {
                    const t = i.get(e);
                    if (!t)
                        return;
                    t.dispose(),
                    i.delete(e);
                    const o = n.get(t.assetUrl);
                    o && (o.usedBy.delete(t.uuid),
                    0 === o.usedBy.size && (n.delete(t.assetUrl),
                    o.dispose()))
                },
                dispose: function() {
                    n.forEach((e => {
                        e.dispose()
                    }
                    )),
                    i.forEach((e => {
                        e.dispose()
                    }
                    )),
                    i.clear(),
                    n.clear()
                },
                getResource: i.get.bind(i),
                checkIfResourceLoadingFinished: a
            }
        }
        var V = n(8087)
          , H = n(9511)
          , W = n(3206)
          , z = n(2701)
          , $ = n(5837)
          , G = n(8003)
          , q = n(9174)
          , X = n(9167);
        class J extends T.aHM {
            loadAsync() {
                return Promise.resolve()
            }
            load() {}
        }
        var Y, K = n(7469);
        !function(e) {
            e.DepthOfField = "DOF",
            e.Bloom = "BLOOM",
            e.Vignette = "VIGNETTE",
            e.Pixelation = "PIXELATION",
            e.BrightnessContrast = "BRIGHTNESS_CONTRAST",
            e.HueSaturation = "HUE_SATURATION",
            e.Noise = "NOISE",
            e.ColorDepth = "COLOR_DEPTH",
            e.ToneMapping = "TONE_MAPPING",
            e.SMAA = "SMAA",
            e.SSAO = "SSAO"
        }(Y || (Y = {}));
        const Q = [Y.SMAA, Y.SSAO, Y.DepthOfField, Y.Bloom, Y.Vignette, Y.ToneMapping, Y.BrightnessContrast, Y.HueSaturation, Y.ColorDepth, Y.Noise, Y.Pixelation];
        const Z = function() {
            const e = new Map;
            return Q.forEach(( (t, n) => {
                e.set(t, n)
            }
            )),
            e
        }();
        function ee(e) {
            return e.type === Y.Bloom
        }
        function te(e) {
            return e.type === Y.Vignette
        }
        function ne(e) {
            return e.type === Y.Noise
        }
        function oe(e) {
            return e.type === Y.SMAA
        }
        function ie(e) {
            return e.type === Y.SSAO
        }
        function re(e) {
            return e.type === Y.DepthOfField
        }
        function se(e) {
            return e.type === Y.Pixelation
        }
        function ae(e) {
            return e.type === Y.HueSaturation
        }
        function ce(e) {
            return e.type === Y.ColorDepth
        }
        function le(e) {
            return e.type === Y.BrightnessContrast
        }
        function ue(e) {
            return e.type === Y.ToneMapping
        }
        function de(e, t) {
            function n(e, t) {
                const {blendFunction: n, opacity: o, bits: i} = t;
                e.bitDepth = i,
                e.blendMode.blendFunction = n,
                e.blendMode.setOpacity(o)
            }
            return {
                updateEffect: function(o) {
                    var i;
                    const {type: r} = o
                      , s = null === (i = e.get(r)) || void 0 === i ? void 0 : i.effect;
                    if (!s)
                        throw new Error("Effect that you are trying to update doesn't exist!");
                    ee(o) && function(e, t) {
                        const {blendFunction: n, filter: o, intensity: i, luminanceSmoothing: r, luminanceThreshold: s, opacity: a, radius: c} = t;
                        e.luminanceMaterial.threshold = s,
                        e.luminanceMaterial.smoothing = r,
                        e.blendMode.blendFunction = n,
                        e.blendMode.setOpacity(a),
                        e.mipmapBlurPass.radius = c,
                        e.intensity = i,
                        e.luminancePass.enabled = o,
                        e.luminanceMaterial.needsUpdate = !0
                    }(s, o),
                    te(o) && function(e, t) {
                        const {blendFunction: n, technique: o, offset: i, opacity: r, darkness: s} = t;
                        e.darkness = s,
                        e.offset = i,
                        e.technique = o,
                        e.blendMode.blendFunction = n,
                        e.blendMode.setOpacity(r)
                    }(s, o),
                    re(o) && function(e, t) {
                        const {bokehScale: n, focusRange: o, focusDistance: i, resolutionScale: r, blendFunction: s, opacity: a} = t;
                        e.bokehScale = n,
                        e.resolution.scale = r,
                        e.cocMaterial.focusDistance = i,
                        e.cocMaterial.focusRange = o,
                        e.cocMaterial.needsUpdate = !0,
                        e.blendMode.blendFunction = s,
                        e.blendMode.setOpacity(a)
                    }(s, o),
                    se(o) && function(e, t) {
                        const {granularity: n} = t;
                        e.granularity = n
                    }(s, o),
                    ae(o) && function(e, t) {
                        const {blendFunction: n, opacity: o, hue: i, saturation: r} = t;
                        e.hue = i,
                        e.saturation = r,
                        e.blendMode.blendFunction = n,
                        e.blendMode.setOpacity(o)
                    }(s, o),
                    ce(o) && n(s, o),
                    le(o) && function(e, t) {
                        const {blendFunction: n, opacity: o, contrast: i, brightness: r} = t;
                        e.contrast = i,
                        e.brightness = r,
                        e.blendMode.blendFunction = n,
                        e.blendMode.setOpacity(o)
                    }(s, o),
                    ne(o) && function(e, t) {
                        const {blendFunction: n, opacity: o} = t;
                        e.blendMode.blendFunction = n,
                        e.blendMode.setOpacity(o)
                    }(s, o),
                    ce(o) && n(s, o),
                    oe(o) && function(e, t) {
                        const {edgeContrastFactor: n, edgeMode: o, edgeThreshold: i, predicationMode: r, predicationScale: s, predicationStrength: a, predicationThreshold: c, preset: l} = t;
                        e.applyPreset(l);
                        const u = e.edgeDetectionMaterial;
                        u.edgeDetectionMode = Number(o),
                        u.predicationMode = Number(r),
                        u.predicationScale = s,
                        u.predicationStrength = a,
                        u.predicationThreshold = c,
                        u.edgeDetectionThreshold = i,
                        u.localContrastAdaptationFactor = n,
                        u.needsUpdate = !0
                    }(s, o),
                    ie(o) && function(e, t) {
                        var n;
                        const {bias: o, blendFunction: i, depthAwareUpsampling: r, distanceFalloff: s, distanceThreshold: a, intensity: c, fade: l, luminanceInfluence: u, minRadiusScale: d, opacity: f, radius: p, proximityFalloff: h, proximityThreshold: m, resolutionScale: g, rings: y, samples: v, color: b} = t;
                        e.radius = p,
                        e.resolution.scale = g,
                        e.samples = v,
                        e.rings = y,
                        e.color = new T.Q1f(b),
                        e.depthAwareUpsampling = r,
                        e.intensity = c,
                        e.luminanceInfluence = u,
                        e.blendMode.blendFunction = i,
                        e.blendMode.setOpacity(f);
                        const w = e.ssaoMaterial;
                        w.minRadiusScale = d;
                        const _ = (null === (n = w.uniforms.cameraFar) || void 0 === n ? void 0 : n.value) || 2e3;
                        w.distanceFalloff = s / _,
                        w.distanceThreshold = a / _,
                        w.proximityFalloff = h / _,
                        w.proximityThreshold = m / _,
                        w.bias = o,
                        w.fade = l,
                        w.needsUpdate = !0
                    }(s, o),
                    ue(o) && function(e, n) {
                        const {adaptationRate: o, averageLuminance: i, exposure: r, middleGrey: s, minLuminance: a, mode: c, whitePoint: l, resolution: u, blendFunction: d, opacity: f} = n;
                        e.resolution = u,
                        e.mode = Number(c),
                        e.adaptationRate = o,
                        e.uniforms.get("averageLuminance") && (e.uniforms.get("averageLuminance").value = i),
                        e.uniforms.get("middleGrey") && (e.uniforms.get("middleGrey").value = s),
                        e.uniforms.get("whitePoint") && (e.uniforms.get("whitePoint").value = l),
                        e.adaptiveLuminanceMaterial.minLuminance = a,
                        t.getRenderer().toneMappingExposure = r,
                        e.blendMode.blendFunction = d,
                        e.blendMode.setOpacity(f)
                    }(s, o)
                }
            }
        }
        function fe(e, t, n) {
            const {updateEffect: o} = de(e, t);
            return {
                updateEffect: o,
                createEffect: function(i) {
                    var r;
                    const {type: s, opacity: a} = i;
                    if (null === (r = e.get(s)) || void 0 === r ? void 0 : r.effect)
                        throw Error(`Trying to create an effect that's already added ${s}`);
                    let c;
                    if (ee(i) && (c = function(e) {
                        const {filter: t, intensity: n, luminanceSmoothing: o, luminanceThreshold: i, radius: r, blendFunction: s} = e
                          , a = new K.bv({
                            luminanceSmoothing: o,
                            luminanceThreshold: i,
                            intensity: n,
                            blendFunction: s,
                            mipmapBlur: !0,
                            radius: r
                        });
                        return a.luminancePass.enabled = !!t,
                        a
                    }(i)),
                    te(i) && (c = function(e) {
                        const {offset: t, darkness: n, technique: o, blendFunction: i} = e;
                        return new K.K1({
                            offset: t,
                            darkness: n,
                            technique: o,
                            blendFunction: i
                        })
                    }(i)),
                    ne(i) && (c = function(e) {
                        const {blendFunction: t} = e;
                        return new K.i({
                            blendFunction: t
                        })
                    }(i)),
                    re(i) && (c = function(e) {
                        const {bokehScale: t, focusRange: n, focusDistance: o, resolutionScale: i, blendFunction: r} = e;
                        return new K.kt(void 0,{
                            bokehScale: t,
                            focusRange: n,
                            focusDistance: o,
                            resolutionScale: i,
                            blendFunction: r
                        })
                    }(i)),
                    se(i) && (c = function(e) {
                        const {granularity: t} = e;
                        return new K.jz(t)
                    }(i)),
                    ae(i) && (c = function(e) {
                        const {hue: t, saturation: n, blendFunction: o} = e;
                        return new K.Ql({
                            blendFunction: o,
                            hue: t,
                            saturation: n
                        })
                    }(i)),
                    ce(i) && (c = function(e) {
                        const {bits: t, blendFunction: n} = e;
                        return new K.ei({
                            blendFunction: n,
                            bits: t
                        })
                    }(i)),
                    le(i) && (c = function(e) {
                        const {brightness: t, contrast: n, blendFunction: o} = e;
                        return new K.lq({
                            blendFunction: o,
                            brightness: t,
                            contrast: n
                        })
                    }(i)),
                    oe(i) && (c = function(e) {
                        const {edgeMode: t, predicationMode: n, preset: o} = e;
                        return new K.eF({
                            edgeDetectionMode: Number(t),
                            predicationMode: Number(n),
                            preset: o
                        })
                    }(i)),
                    ie(i) && (c = function(e) {
                        const {bias: t, blendFunction: n, color: o, depthAwareUpsampling: i, distanceFalloff: r, distanceThreshold: s, fade: a, luminanceInfluence: c, intensity: l, minRadiusScale: u, radius: d, resolutionScale: f, rings: p, samples: h} = e;
                        return new K.w2(void 0,void 0,{
                            bias: t,
                            blendFunction: n,
                            color: new T.Q1f(o),
                            depthAwareUpsampling: i,
                            distanceFalloff: r,
                            distanceThreshold: s,
                            fade: a,
                            luminanceInfluence: c,
                            intensity: l,
                            minRadiusScale: u,
                            radius: d,
                            resolutionScale: f,
                            rings: p,
                            samples: h
                        })
                    }(i)),
                    ue(i) && (c = function(e) {
                        const {mode: n, adaptationRate: o, averageLuminance: i, middleGrey: r, minLuminance: s, resolution: a, whitePoint: c, exposure: l} = e
                          , u = new K.i4({
                            mode: Number(n),
                            adaptationRate: o,
                            averageLuminance: i,
                            middleGrey: r,
                            minLuminance: s,
                            resolution: a,
                            whitePoint: c
                        });
                        return t.getRenderer().toneMappingExposure = l,
                        u
                    }(i)),
                    !c)
                        throw new Error(`Object type <${s}> is not supported!`);
                    c.blendMode.setOpacity(a),
                    c.initialize(t.getRenderer(), !0, T.ix0),
                    e.set(s, {
                        order: Z.get(s),
                        effect: c
                    }),
                    o(i),
                    n()
                },
                deleteEffect: function(o) {
                    var i;
                    const r = null === (i = e.get(o)) || void 0 === i ? void 0 : i.effect;
                    if (!r)
                        throw Error(`Trying to delete an effect that doesn't exist ${o}`);
                    o === Y.ToneMapping && (t.getRenderer().toneMappingExposure = 1),
                    e.delete(o),
                    r.dispose(),
                    n()
                }
            }
        }
        class pe extends K.Vu {
            disposeWithoutDisposingEffects() {
                for (const e of Object.keys(this)) {
                    const t = this[e];
                    (t instanceof T.nWS || t instanceof T.imn || t instanceof T.gPd || t instanceof K.oF) && this[e].dispose()
                }
                this.setEffects([])
            }
        }
        var he;
        !function(e) {
            e[e.PWObjects = 0] = "PWObjects",
            e[e.Normal = 1] = "Normal",
            e[e.Effects = 2] = "Effects",
            e[e.Copy = 3] = "Copy",
            e[e.Helpers = 4] = "Helpers"
        }(he || (he = {}));
        const me = function() {
            const e = [he.PWObjects, he.Normal, he.Effects, he.Copy, he.Helpers]
              , t = new Map;
            return e.forEach(( (e, n) => {
                t.set(e, n)
            }
            )),
            t
        }()
          , ge = [Y.SMAA];
        function ye(e, t, n, o, i) {
            let r = at
              , s = 1
              , a = !1;
            const l = new K.s0(e,{
                alpha: !0,
                depthBuffer: !0,
                stencilBuffer: !0,
                frameBufferType: T.ix0
            })
              , u = new K.AH;
            u.renderToScreen = !0;
            const d = new K.Xe;
            d.enabled = !1;
            const f = []
              , p = e => me.get(e) > me.get(he.Effects) ? me.get(e) + f.length - 1 : me.get(e)
              , h = (e, t) => {
                l.addPass(e, p(t))
            }
            ;
            if (h(u, he.PWObjects),
            h(d, he.Normal),
            at) {
                const e = new K.AH;
                e.selection = new K.LN(void 0,c.X6.Helpers),
                e.clearPass.enabled = !1,
                e.ignoreBackground = !0,
                e.skipShadowMapUpdate = !0;
                const t = new K.nV;
                u.renderToScreen = !1,
                t.renderToScreen = !0,
                e.renderToScreen = !0,
                h(e, he.Helpers),
                h(t, he.Copy)
            }
            const m = new Map
              , {createEffect: g, updateEffect: y, deleteEffect: v} = fe(m, l, b);
            function b() {
                f.forEach((e => {
                    l.removePass(e),
                    e.disposeWithoutDisposingEffects()
                }
                )),
                f.length = 0;
                const [t,i] = [...m.entries()].sort(( (e, t) => e[1].order - t[1].order)).reduce(( (e, t) => (e[ge.includes(t[0]) ? 0 : 1].push(t[1].effect),
                e)), [[], []])
                  , s = t.length > 0;
                if (s && (l.multisampling = 0),
                0 === i.length && 0 === t.length || !e.getContext().getContextAttributes())
                    return;
                const c = [[]];
                if (s && t.forEach((e => c[0].push(e))),
                a && i.length > 0) {
                    let e = !1
                      , t = !1;
                    s && c.push([]);
                    const n = l.passes[p(he.Normal)];
                    n.enabled = !1,
                    i.forEach((o => {
                        const i = o.getFragmentShader()
                          , r = void 0 !== i && /mainUv/.test(i)
                          , s = !!(o.getAttributes() & K.IF.CONVOLUTION)
                          , a = () => {
                            c.push([o]),
                            t = !1,
                            e = !1
                        }
                        ;
                        (t || e) && s || t && r ? a() : c[c.length - 1].push(o),
                        o instanceof K.w2 && (n.enabled = !0,
                        o.normalBuffer = l.passes[p(he.Normal)].texture,
                        o.ssaoMaterial.needsUpdate = !0),
                        e = e || r,
                        t = t || s
                    }
                    ))
                }
                c.forEach((e => {
                    const t = new pe(void 0,...e);
                    t.mainCamera = n(),
                    t.mainScene = o(),
                    h(t, he.Effects),
                    f.push(t)
                }
                )),
                w(r)
            }
            function w(e) {
                r = e,
                at && (l.passes[p(he.Helpers)].enabled = r,
                l.passes[p(he.Copy)].enabled = r),
                f.length > 0 ? (l.passes[p(he.PWObjects)].renderToScreen = !1,
                l.passes[p(he.Effects) + f.length - 1].renderToScreen = !r) : l.passes[p(he.PWObjects)].renderToScreen = !r
            }
            function _() {
                const e = i()
                  , o = n();
                if ((null == e ? void 0 : e.camera) && e.camera !== o) {
                    const t = e.htmlElement.clientWidth / e.htmlElement.clientHeight;
                    e.camera instanceof T.ubm && (e.camera.aspect = t,
                    e.camera.updateProjectionMatrix()),
                    e.camera instanceof T.qUd && (e.camera.left = -t,
                    e.camera.right = t,
                    e.camera.updateProjectionMatrix())
                }
                if (o) {
                    const e = t.x / t.y;
                    o instanceof T.ubm && (o.aspect = e,
                    o.updateProjectionMatrix()),
                    o instanceof T.qUd && (o.left = -e,
                    o.right = e,
                    o.updateProjectionMatrix())
                }
            }
            return {
                createEffect: g,
                deleteEffect: v,
                updateEffect: y,
                setMainCamera: function(e) {
                    l.setMainCamera(e)
                },
                setMainScene: function(e) {
                    l.setMainScene(e)
                },
                setUsePostProcessing: function(e) {
                    a = e,
                    a || ge.find((e => m.has(e))) ? b() : (f.forEach((e => {
                        l.removePass(e),
                        e.disposeWithoutDisposingEffects()
                    }
                    )),
                    f.length = 0)
                },
                render: function(o) {
                    const a = i()
                      , c = n()
                      , u = e.domElement;
                    if (!u)
                        throw new Error("Canvas parent element is not found! Cannot update canvas size");
                    var d, f, p;
                    if (d = u.clientWidth,
                    f = u.clientHeight,
                    p = e.getPixelRatio(),
                    d === t.x && f === t.y && s === p || (t.set(d, f),
                    s = p,
                    l.setSize(d, f, !1),
                    _()),
                    a && a.camera !== c) {
                        const t = a.htmlElement.getBoundingClientRect()
                          , n = u.getBoundingClientRect();
                        l.render(o);
                        const {width: i, height: s} = t
                          , d = t.x - n.x
                          , f = n.height - (t.y - n.y) - s;
                        e.setViewport(d, f, i, s),
                        e.setScissorTest(!0),
                        e.setScissor(d, f, i, s);
                        const p = r;
                        w(!1),
                        l.setMainCamera(a.camera),
                        l.render(o),
                        e.setViewport(0, 0, n.width, n.height),
                        e.setScissorTest(!1),
                        w(p),
                        l.setMainCamera(c)
                    } else
                        l.render(o)
                },
                effects: m,
                dispose: function() {
                    m.clear(),
                    l.dispose(),
                    f.forEach((e => e.dispose())),
                    f.length = 0
                },
                updateCameraProjectionMatrix: _,
                setMultiSampling: function(t) {
                    l.multisampling = Math.min(t, e.capabilities.maxSamples)
                },
                setRenderHelpers: w
            }
        }
        var ve = n(2052)
          , be = n.n(ve)
          , we = n(7629)
          , _e = n(20);
        function Se(e, t, n) {
            const o = new T.I9Y
              , {easingDuration: i} = n
              , r = we.Ay.quickTo(o, "x", {
                ease: "power2.out",
                duration: i
            });
            window.addEventListener("mousemove", a);
            const s = we.Ay.quickTo(o, "y", {
                ease: "power2.out",
                duration: i,
                onUpdate: () => {
                    if (n.type === c.bN.Pan) {
                        const {maxDistance: e} = n;
                        t.position.set(o.x * e.x, o.y * e.y, 0)
                    }
                    if (function(e) {
                        return e.type === c.bN.Tilt
                    }(n)) {
                        const {maxRotation: e} = n;
                        t.rotation.order = "YXZ",
                        t.rotation.set(o.y * e.x, -o.x * e.y, 0)
                    }
                }
            });
            function a(t) {
                const n = e.getBoundingClientRect()
                  , o = (0,
                _e.qE)((t.clientX - n.x) / n.width, 0, 1)
                  , i = (0,
                _e.qE)((t.clientY - n.y) / n.height, 0, 1);
                r(2 * o - 1),
                s(2 * -i + 1)
            }
            return {
                dispose: function() {
                    r.tween.kill(),
                    s.tween.kill(),
                    t.rotation.order = "XYZ",
                    window.removeEventListener("mousemove", a)
                }
            }
        }
        class Ee extends T.Qev {
            hasTypeListener(e) {
                var t;
                const n = this._listeners;
                return !!n && !!(null === (t = n[e]) || void 0 === t ? void 0 : t.length)
            }
        }
        function Oe(e) {
            let t, n = !1;
            const i = function(e) {
                const t = new T.JeP({
                    canvas: e,
                    powerPreference: "high-performance",
                    antialias: !0,
                    depth: !0,
                    alpha: !0
                });
                return t.debug.checkShaderErrors = M.DS,
                t.setSize(e.clientWidth, e.clientHeight, !1),
                t.shadowMap.enabled = !0,
                t.shadowMap.type = T.Wk7,
                t
            }(e)
              , r = function(e) {
                const t = new T.BdL(e);
                t.compileCubemapShader();
                const n = new T.Z58
                  , o = new T.$p8
                  , i = new T.eaF(new T.Gu$(1).scale(1, 1, -1),new T.G_z({
                    transparent: !0,
                    depthTest: !1
                }))
                  , r = new T.eaF(new T.Gu$(1).scale(1, 1, -1),new T.G_z({
                    depthTest: !1
                }));
                return n.add(r),
                n.add(i),
                n.add(o),
                {
                    generateEnvironment: function(e, s, a, c, l, u) {
                        return r.material.color.set(a),
                        o.intensity = l,
                        i.material.map = e,
                        i.material.opacity = c,
                        i.rotation.y = s,
                        t.fromScene(n, u).texture
                    }
                }
            }(i)
              , s = new T.I9Y;
            i.getSize(s);
            const a = new Map
              , l = new Map;
            let u, d, f = !1;
            const p = new Ee;
            let h, m;
            const {effects: g, render: y, setMainCamera: v, setMainScene: b, createEffect: w, updateEffect: _, deleteEffect: S, setUsePostProcessing: E, setMultiSampling: O, updateCameraProjectionMatrix: P, setRenderHelpers: R} = ye(i, s, Y, F, (function() {
                return h
            }
            ));
            const x = function(e) {
                const t = new T.Tap
                  , n = new W.Y
                  , o = new z.H
                  , i = new J
                  , r = at || "srcdoc" === window.location.pathname ? "/_next/static/" : ""
                  , s = (new V.Z).setDecoderPath(`${r}/draco/`)
                  , a = (new q.p).setTranscoderPath(`${r}/basis/`);
                a.detectSupport(e);
                const l = (new H.B).setCrossOrigin("anonymous").setDRACOLoader(s).setKTX2Loader(a).setMeshoptDecoder(X.f)
                  , u = new $.L
                  , d = new G.w
                  , f = {
                    [c.ap.Gltf]: l,
                    [c.ap.Texture]: t,
                    [c.ap.HDRTexture]: n,
                    [c.ap.EXRTexture]: o,
                    [c.ap.Obj]: u,
                    [c.ap.FBX]: d,
                    [c.ap.VideoTexture]: i,
                    [c.ap.Environment]: i
                };
                return {
                    load: function(e, t, n=( () => {}
                    )) {
                        const o = f[e];
                        if (!o)
                            throw new Error(`No loader for this asset type ${e}`);
                        return o.load(t, n)
                    },
                    loadAsync: (e, t) => {
                        const n = f[e];
                        if (!n)
                            throw new Error(`No loader for this asset type ${e}`);
                        return n.loadAsync(t)
                    }
                    ,
                    dispose: function() {
                        s.dispose(),
                        a.dispose()
                    }
                }
            }(i)
              , {load: A, loadAsync: C} = x
              , D = U(x, p)
              , k = new Set
              , I = new Set
              , j = new T.zD7;
            function N() {
                if (!u || !d || !i)
                    return void console.error("Trying to render with uninitalized objects", {
                        activeScene: u,
                        activeCamera: d,
                        renderer: i
                    });
                n && (null == t || t.update());
                const e = j.getDelta()
                  , o = j.getElapsedTime();
                k.forEach((t => t(u, d, e, o))),
                y(e),
                I.forEach((t => t(u, d, e, o)))
            }
            function L() {
                if (!i)
                    throw Error("Renderer is undefined");
                i.setAnimationLoop(null)
            }
            function B(e) {
                k.delete(e)
            }
            function F() {
                return u
            }
            function Y() {
                return d
            }
            const K = ["SpotLightHelper", "PointLightHelper", "DirectionalLightHelper", "CameraHelper"];
            function Q(e) {
                e.traverse((e => {
                    if (!K.includes(e.type) && e instanceof T.eaF) {
                        const t = e
                          , n = e => {
                            e.wireframe = f,
                            e.transparent = !f && e.userData.isTransparent
                        }
                        ;
                        Array.isArray(t.material) ? t.material.forEach((e => {
                            n(e)
                        }
                        )) : n(t.material)
                    }
                }
                ))
            }
            return {
                objects: a,
                materials: l,
                renderer: i,
                canvas: e,
                canvasSize: s,
                effects: g,
                eventDispatcher: p,
                environmentGenerator: r,
                load: A,
                loadAsync: C,
                getActiveScene: F,
                setActiveScene: function(e) {
                    u = e,
                    b(e)
                },
                getActiveCamera: Y,
                setActiveCamera: function(t) {
                    if (d = t,
                    v(t),
                    d && d instanceof T.ubm && P(),
                    !at) {
                        null == m || m.dispose();
                        const n = t.userData.controls;
                        n && (m = Se(e, t, n))
                    }
                },
                setCameraPreview: function(e) {
                    h = e,
                    h && h.camera instanceof T.ubm && P()
                },
                resourceManager: D,
                getResource: D.getResource,
                addOnRenderCallback: function(e) {
                    return k.add(e),
                    () => B(e)
                },
                removeOnRenderCallback: B,
                addAfterRenderCallback: function(e) {
                    return I.add(e),
                    () => function(e) {
                        I.delete(e)
                    }(e)
                },
                createEffect: w,
                deleteEffect: S,
                updateEffect: _,
                start: function(e=!0) {
                    if (!i)
                        throw Error("Renderer is undefined");
                    e && p.dispatchEvent({
                        type: o.Loaded
                    }),
                    i.setAnimationLoop(N)
                },
                stop: L,
                render: N,
                dispose: function() {
                    L(),
                    x.dispose(),
                    D.dispose(),
                    a.forEach((e => {
                        e.isMesh && e.geometry.dispose()
                    }
                    )),
                    i.dispose()
                },
                setWireframe: function(e) {
                    f = e,
                    a.forEach((e => {
                        Q(e)
                    }
                    ))
                },
                setUsePostProcessing: E,
                setWireframeOnObject: Q,
                setRenderHelpers: R,
                showStatsPanel: function(e) {
                    n = !0,
                    t || (t = new (be()),
                    t.dom.style.position = "fixed"),
                    t.begin(),
                    t.showPanel(0),
                    e.appendChild(t.dom)
                },
                hideStatsPanel: function() {
                    var e;
                    n = !1,
                    t && (t.end(),
                    null === (e = t.dom.parentElement) || void 0 === e || e.removeChild(t.dom))
                },
                setMultiSampling: O,
                attachToDOM: function(e) {
                    e.appendChild(i.domElement),
                    s.set(0, 0)
                }
            }
        }
        var Pe = n(7028)
          , Te = n(387);
        const Me = 30;
        T.eaF.prototype.raycast = Te.zQ,
        T.I46.prototype.raycast = Te.zQ,
        T.ZLX.prototype.raycast = Te.zQ,
        T.LoY.prototype.computeBoundsTree = Te.LO,
        T.LoY.prototype.disposeBoundsTree = Te.je;
        const Re = {
            [o.MouseDown]: "mousedown",
            [o.MouseUp]: "mouseup",
            [o.MouseMove]: "mousemove"
        };
        function xe(e) {
            const {canvas: t, eventDispatcher: n, getActiveCamera: i, getActiveScene: r} = e
              , s = t.parentElement
              , a = new T.tBo;
            a.layers.set(c.X6.Raycast),
            a.firstHitOnly = !0;
            const l = (0,
            Pe.A)((function(e) {
                const t = {
                    type: o.MouseMove,
                    data: d(e),
                    mouseEvent: e
                };
                n.dispatchEvent(t)
            }
            ), Me, {
                maxWait: Me,
                leading: !0
            });
            const u = new T.I9Y;
            function d(e) {
                const n = i()
                  , o = r();
                if (!o || !n)
                    return {
                        distance: 0,
                        object: null,
                        x: 0,
                        y: 0,
                        point: null,
                        ray: a.ray
                    };
                const l = s.getBoundingClientRect();
                u.x = (e.clientX - l.left) / t.clientWidth * 2 - 1,
                u.y = -(e.clientY - l.top) / t.clientHeight * 2 + 1,
                a.setFromCamera(u, n);
                let d = [];
                if (at ? (a.layers.set(c.X6.HelpersRaycast),
                d = a.intersectObject(o),
                d.length || (a.layers.set(c.X6.Raycast),
                d = a.intersectObject(o))) : (a.layers.set(c.X6.Raycast),
                d = a.intersectObject(o)),
                !d.length)
                    return {
                        distance: 0,
                        object: null,
                        x: u.x,
                        y: u.y,
                        point: null,
                        ray: a.ray
                    };
                const f = d[0];
                return {
                    distance: f.distance,
                    object: f.object,
                    point: f.point,
                    ray: a.ray,
                    x: u.x,
                    y: u.y
                }
            }
            const f = new T.kn4
              , p = new T.PPD
              , h = new Set
              , m = new T.NRn;
            const g = {
                [o.MouseDown]: function(e) {
                    if (4 === (void 0 !== e.buttons ? e.buttons : e.which))
                        return;
                    const t = {
                        type: o.MouseDown,
                        data: d(e),
                        mouseEvent: e
                    };
                    n.dispatchEvent(t)
                },
                [o.MouseUp]: function(e) {
                    const t = {
                        type: o.MouseUp,
                        data: d(e),
                        mouseEvent: e
                    };
                    n.dispatchEvent(t)
                },
                [o.MouseMove]: l
            };
            return {
                dispose: function() {
                    Object.keys(g).forEach((e => t.removeEventListener(Re[e], g[e])))
                },
                addEventListener: function(e) {
                    t.addEventListener(Re[e], g[e])
                },
                removeEventListener: function(e) {
                    t.removeEventListener(Re[e], g[e])
                },
                getObjectPositionOnScreen: function(e) {
                    const t = i()
                      , n = new T.Pq0;
                    return e.getWorldPosition(n),
                    n.project(t)
                },
                getObjectIntersectionAtPointer: function(e, t, n, o) {
                    o ? a.layers.set(o) : a.layers.enableAll();
                    const r = i();
                    if (a.setFromCamera(t, r),
                    a.intersectObject(e, n).length > 0)
                        return a.intersectObject(e)[0]
                },
                getObjectsInScreenView: function(e, t) {
                    const n = i()
                      , o = r();
                    return n instanceof T.ubm && function(n) {
                        const {near: o, far: i, fov: r, aspect: s, zoom: a} = n;
                        let c = o * Math.tan(.5 * T.cj9.DEG2RAD * r) / a
                          , l = 2 * c
                          , u = s * l
                          , d = -.5 * u;
                        c = -(e.y - .5) * l,
                        l *= t.y - e.y,
                        d = (e.x - .5) * u,
                        u *= t.x - e.x,
                        f.makePerspective(d, d + u, c, c - l, o, i)
                    }(n),
                    n instanceof T.qUd && function(n) {
                        const {near: o, far: i, left: r, right: s, top: a, bottom: c, zoom: l} = n
                          , u = (s - r) / (2 * l)
                          , d = (a - c) / (2 * l)
                          , p = (s + r) / 2
                          , h = (a + c) / 2;
                        let m = p - u
                          , g = p + u
                          , y = h + d
                          , v = h - d;
                        const b = y - v
                          , w = g - m;
                        y -= e.y * b,
                        v += (1 - t.y) * b,
                        m += e.x * w,
                        g -= (1 - t.x) * w,
                        f.makeOrthographic(m, g, y, v, o, i)
                    }(n),
                    f.multiply(n.matrixWorldInverse),
                    p.setFromProjectionMatrix(f),
                    h.clear(),
                    o.traverseVisible((e => {
                        if (!e.userData.isCollider)
                            return;
                        if (!e.layers.isEnabled(c.X6.Raycast))
                            return;
                        const t = e;
                        if (null === t.geometry.boundingBox && t.geometry.computeBoundingBox(),
                        m.copy(t.geometry.boundingBox).applyMatrix4(t.matrixWorld),
                        p.intersectsBox(m)) {
                            const t = x(e);
                            if (!t)
                                return;
                            h.has(t.uuid) || h.add(t.uuid)
                        }
                    }
                    )),
                    [...h]
                }
            }
        }
        var Ae = n(4074)
          , Ce = n(2853);
        function De(e, t, n) {
            if (!t)
                return;
            const o = e.userData.lastSync;
            return t.then((t => {
                e.userData.lastSync === o && n(t)
            }
            )).catch((e => {
                console.error("Error in safeAsyncUpdate:", e)
            }
            ))
        }
        const ke = {
            [c.sc.Front]: T.hB5,
            [c.sc.Back]: T.hsX,
            [c.sc.Double]: T.$EB
        }
          , Ie = {
            [c.J8.Lit]: T._4j,
            [c.J8.Unlit]: T.V9B,
            [c.J8.Phong]: T.tXL,
            [c.J8.Physical]: T.uSd
        };
        function je(e) {
            const {resourceManager: t, materials: n, objects: o, getActiveScene: i, environmentGenerator: a} = e;
            function l(e) {
                return n.get(e)
            }
            function u(e) {
                const t = Ie[e.type];
                if (!t)
                    throw Error("Material type not supported");
                const o = function(e, t) {
                    const n = e;
                    return new Proxy(e,s(Array.from(M.LX[t]), (e => n.dispatchEvent({
                        type: r.Update,
                        property: e,
                        target: n
                    }))))
                }(new t, e.type);
                return o.uuid = e.uuid,
                n.set(e.uuid, o),
                d(e)
            }
            function d(t, o, r=!1) {
                var s, l, u, d, p, h, g, y, v;
                const {name: b, side: w, color: _, opacity: S, transparent: M, alphaTest: R, envMap: x, aoMapIntensity: A} = t
                  , C = n.get(t.uuid);
                if (!C)
                    throw Error(`Material with ${t.uuid} does not exist`);
                C.userData.lastSync = Date.now(),
                r || (C.color.set(_),
                C.opacity = S,
                C.aoMapIntensity = A),
                C.name = b || "",
                C.side = ke[w],
                C.transparent = M,
                C.userData.isTransparent = M,
                C.alphaTest = R;
                const D = [f(t, "map", null == o ? void 0 : o.map), f(t, "alphaMap", null == o ? void 0 : o.alphaMap), f(t, "aoMap", null == o ? void 0 : o.aoMap)];
                if ((null == o ? void 0 : o.envMap) && o.envMap.uuid !== (null == x ? void 0 : x.uuid) && e.resourceManager.deleteResource(o.envMap.uuid),
                x ? De(C, (e.resourceManager.getResource(x.uuid) || e.resourceManager.createResource(x)).assetInstance, (e => {
                    var t;
                    const n = e;
                    if (C.userData.hasEnvMap = !0,
                    E(C))
                        C.envMap = n.reflection;
                    else if (O(C))
                        C.envMap = C.userData.useRefraction ? n.refraction : n.reflection;
                    else {
                        const {intensity: e, rotation: o, opacity: i, blurriness: r} = x;
                        null === (t = C.envMap) || void 0 === t || t.dispose();
                        const s = a.generateEnvironment(n.reflection, o, "white", i, e, r);
                        C.envMap = s
                    }
                }
                )) : (null === (s = C.envMap) || void 0 === s || s.dispose(),
                C.envMap = null,
                C.userData.hasEnvMap = !1),
                t.type === c.J8.Unlit) {
                    if (!(C instanceof T.V9B))
                        throw Error("Material type mismatch");
                    if (r || (C.reflectivity = t.reflectivity),
                    D.push(f(t, "specularMap", null == o ? void 0 : o.specularMap)),
                    !x) {
                        const t = null === (d = null === (u = null === (l = i()) || void 0 === l ? void 0 : l.environment) || void 0 === u ? void 0 : u.userData) || void 0 === d ? void 0 : d.originalTextureUuid;
                        t && De(C, null === (p = e.resourceManager.getResource(t)) || void 0 === p ? void 0 : p.assetInstance, (e => {
                            const t = e.reflection;
                            C.envMap = t
                        }
                        ))
                    }
                }
                if (function(e) {
                    return e.type === c.J8.Lit
                }(t) || m(t)) {
                    if (!function(e) {
                        return "MeshStandardMaterial" === e.type
                    }(C) && !P(C))
                        throw Error("Material type mismatch");
                    const {flatShading: e, roughness: n, displacementScale: i, emissive: s, emissiveIntensity: a, metalness: c} = t;
                    if (r || (C.metalness = c,
                    C.roughness = n,
                    C.emissiveIntensity = a,
                    C.displacementScale = i,
                    C.emissive.set(s)),
                    C.flatShading = e,
                    D.push(f(t, "metalnessMap", null == o ? void 0 : o.metalnessMap), f(t, "emissiveMap", null == o ? void 0 : o.emissiveMap), f(t, "normalMap", null == o ? void 0 : o.normalMap), f(t, "roughnessMap", null == o ? void 0 : o.roughnessMap), f(t, "displacementMap", null == o ? void 0 : o.displacementMap)),
                    m(t) && P(C)) {
                        const {ior: e, reflectivity: n, iridescence: i, iridescenceIOR: s, sheen: a, sheenColor: c, sheenRoughness: l, clearcoat: u, clearcoatRoughness: d, transmission: p, dispersion: h, thickness: m, attenuationColor: g, attenuationDistance: y, specularIntensity: v, specularColor: b} = t;
                        r || (C.ior = e,
                        C.reflectivity = n,
                        C.iridescence = i,
                        C.iridescenceIOR = s,
                        C.sheen = a,
                        C.sheenRoughness = l,
                        C.sheenColor.set(c),
                        C.clearcoat = u,
                        C.clearcoatRoughness = d,
                        C.transmission = p,
                        C.dispersion = h,
                        C.thickness = m,
                        C.attenuationColor.set(g),
                        C.attenuationDistance = 0 === y ? 1 / 0 : y,
                        C.specularColor.set(b),
                        C.specularIntensity = v),
                        D.push(f(t, "iridescenceMap", null == o ? void 0 : o.iridescenceMap))
                    }
                }
                if (function(e) {
                    return e.type === c.J8.Phong
                }(t)) {
                    if (!(C instanceof T.tXL))
                        throw Error("Material type mismatch");
                    const {flatShading: n, bumpScale: s, displacementScale: a, emissive: c, emissiveIntensity: l, refractionRatio: u, useRefraction: d, shininess: p, reflectivity: m, specular: b} = t;
                    if (r || (C.bumpScale = s,
                    C.reflectivity = m,
                    C.emissiveIntensity = l,
                    C.displacementScale = a,
                    C.emissive.set(c),
                    C.specular.set(b),
                    C.refractionRatio = u,
                    C.shininess = p),
                    C.userData.useRefraction = d,
                    C.flatShading = n,
                    D.push(f(t, "specularMap", null == o ? void 0 : o.specularMap), f(t, "emissiveMap", null == o ? void 0 : o.emissiveMap), f(t, "normalMap", null == o ? void 0 : o.normalMap), f(t, "bumpMap", null == o ? void 0 : o.bumpMap), f(t, "displacementMap", null == o ? void 0 : o.displacementMap)),
                    !x) {
                        const t = null === (y = null === (g = null === (h = i()) || void 0 === h ? void 0 : h.environment) || void 0 === g ? void 0 : g.userData) || void 0 === y ? void 0 : y.originalTextureUuid;
                        t && De(C, null === (v = e.resourceManager.getResource(t)) || void 0 === v ? void 0 : v.assetInstance, (e => {
                            const t = e;
                            C.envMap = d ? t.refraction : t.reflection
                        }
                        ))
                    }
                }
                return C.needsUpdate = !0,
                Promise.all(D)
            }
            const f = (e, i, r) => {
                var s, a;
                const c = e[i]
                  , l = n.get(e.uuid);
                if (!l)
                    throw new Error(`Material with ${e.uuid} does not exist`);
                if (r && r.uuid !== (null == c ? void 0 : c.uuid) && t.deleteResource(r.uuid),
                (0,
                Ce.A)(c, r))
                    return;
                if (!c)
                    return void (l[i] = null);
                const u = e => {
                    e ? (C(e, c, r),
                    l[i] = e,
                    l.needsUpdate = !0) : l[i] = null
                }
                ;
                if (c) {
                    if (c.assetUrl !== M.j4)
                        return De(l, null === (a = t.getResource(c.uuid) || t.createResource(c)) || void 0 === a ? void 0 : a.assetInstance, (e => {
                            u(e)
                        }
                        ));
                    {
                        const t = null === (s = o.get(e.overrideObjectId)) || void 0 === s ? void 0 : s.userData;
                        if (!t)
                            return;
                        u(t.originalMaps[e.overrideMaterialIndex][i])
                    }
                }
            }
            ;
            return {
                dispose: function() {
                    n.forEach((e => R(e)))
                },
                createMaterial: u,
                updateMaterial: d,
                getMaterial: l,
                deleteMaterial: function(e) {
                    const t = n.get(e);
                    if (!t)
                        throw new Error(`Cannot delete material that does not exist! ${e}`);
                    t.dispose(),
                    n.delete(e)
                },
                replaceMaterial: function(e, t) {
                    const o = n.get(t.uuid);
                    if (!o)
                        return;
                    o.uuid = (0,
                    Ae.lk)();
                    const r = i();
                    u(e);
                    const s = l(e.uuid);
                    r.traverse((e => {
                        ("Mesh" === e.type || function(e) {
                            return "SkinnedMesh" === e.type
                        }(e)) && (Array.isArray(e.material) ? e.material.forEach(( (t, n) => {
                            t.uuid === o.uuid && (e.material[n] = s)
                        }
                        )) : e.material.uuid === o.uuid && (e.material = s))
                    }
                    )),
                    o.dispose()
                }
            }
        }
        function Ne(e) {
            return e === o.MouseDown || e === o.MouseUp || e === o.MouseMove
        }
        function Le(e) {
            let t = null;
            if (function(e) {
                return e.type === c.OS.Plane
            }(e)) {
                const {width: n, height: o, widthSegments: i, heightSegments: r} = e;
                t = new T.bdM(n,o,i,r)
            }
            if (function(e) {
                return e.type === c.OS.Box
            }(e)) {
                const {width: n, height: o, depth: i, widthSegments: r, heightSegments: s, depthSegments: a} = e;
                t = new T.iNn(n,o,i,r,s,a)
            }
            if (function(e) {
                return e.type === c.OS.Sphere
            }(e)) {
                const {radius: n, widthSegments: o, heightSegments: i, phiStart: r, phiLength: s, thetaStart: a, thetaLength: c} = e;
                t = new T.Gu$(n,o,i,r,s,a,c)
            }
            if (function(e) {
                return e.type === c.OS.Cylinder
            }(e)) {
                const {radiusTop: n, radiusBottom: o, height: i, radialSegments: r, heightSegments: s, openEnded: a, thetaStart: c, thetaLength: l} = e;
                t = new T.Ho_(n,o,i,r,s,a,c,l)
            }
            if (function(e) {
                return e.type === c.OS.Torus
            }(e)) {
                const {radius: n, tube: o, radialSegments: i, tubularSegments: r, arc: s} = e;
                t = new T.O3Y(n,o,i,r,s)
            }
            if (function(e) {
                return e.type === c.OS.Cone
            }(e)) {
                const {radius: n, height: o, radialSegments: i, heightSegments: r, openEnded: s, thetaStart: a, thetaLength: c} = e;
                t = new T.qFE(n,o,i,r,s,a,c)
            }
            if (!t)
                throw new Error("Unknown geometry type!");
            return t.uuid = e.uuid,
            t
        }
        const Be = {
            maxLeafTris: 5,
            strategy: n(4428).Q7,
            maxDepth: 18
        }
          , Fe = 10;
        function Ue(e, t) {
            const {environmentGenerator: n} = e;
            function o(t, n, o) {
                var i;
                const {intensity: r, color: s, castShadow: a, shadowQuality: c} = n;
                if (t.intensity = r,
                t.color.set(s),
                a && (t.shadow && (t.shadow.mapSize.width = Number(c),
                t.shadow.mapSize.height = Number(c),
                null === (i = t.shadow.map) || void 0 === i || i.dispose(),
                t.shadow.map = null,
                t.shadow.normalBias = .03,
                t.shadow.isDirectionalLightShadow && (t.shadow.camera.top = Fe,
                t.shadow.camera.right = Fe,
                t.shadow.camera.left = -Fe,
                t.shadow.camera.bottom = -Fe),
                t.shadow.needsUpdate = !0),
                _(n) && (t.castShadow = !1)),
                b(n)) {
                    const e = t
                      , {decay: o, distance: i} = n;
                    void 0 !== o && (e.decay = o),
                    void 0 !== i && (e.distance = i)
                }
                if (S(n)) {
                    const i = t
                      , {decay: r, distance: s, penumbra: a, angle: c, map: l} = n;
                    void 0 !== r && (i.decay = r),
                    void 0 !== s && (i.distance = s),
                    void 0 !== a && (i.penumbra = a),
                    void 0 !== c && (i.angle = c),
                    o && S(o) && o.map && o.map.uuid !== (null == l ? void 0 : l.uuid) && e.resourceManager.deleteResource(o.map.uuid),
                    l ? De(i, (e.resourceManager.getResource(l.uuid) || e.resourceManager.createResource(l)).assetInstance, (e => {
                        const t = e;
                        C(t, l, null == o ? void 0 : o.map),
                        i.map = t
                    }
                    )) : i.map = null
                }
                if (w(n)) {
                    const e = t
                      , {target: o} = n;
                    o && A(e.target.position, o)
                }
            }
            function i(e, t) {
                var n, o;
                A(e.position, t.position),
                A(e.scale, t.scale),
                n = e.rotation,
                o = t.rotation,
                n.setFromVector3(A(D, o))
            }
            return {
                updateObject: function(r, s, a=!1) {
                    const h = e.objects.get(r.uuid);
                    if (!h)
                        throw new Error("Objects that you are trying to update doesn't exist!");
                    h.userData.lastSync = Date.now(),
                    h.name = r.name,
                    h.visible = r.visible,
                    h.castShadow = r.castShadow,
                    h.receiveShadow = r.receiveShadow,
                    a || i(h, r),
                    f(r) && function(n, o, i) {
                        var r;
                        const {uuid: s, object: a, animation: l, castShadow: u, receiveShadow: d} = o;
                        if (i && i.castShadow === u && i.receiveShadow === d || n.traverse((e => {
                            e.castShadow = o.castShadow,
                            e.receiveShadow = o.receiveShadow
                        }
                        )),
                        (0,
                        Ce.A)(null == i ? void 0 : i.animation, l))
                            return;
                        const {clipName: f} = l;
                        f ? De(n, null === (r = e.getResource(a.uuid)) || void 0 === r ? void 0 : r.assetInstance, (e => {
                            var o;
                            if (a.assetType !== c.ap.Gltf)
                                return;
                            const r = e.animations;
                            (null == i ? void 0 : i.animation.clipName) && i.animation.clipName !== f && t.removeAnimation(i.uuid, i.animation.clipName);
                            const u = t.getAnimation(s, f);
                            if (u)
                                t.updateAnimation(s, l),
                                u.play();
                            else {
                                const e = r.find((e => e.name === f))
                                  , i = null === (o = n.children.find((e => !!e.userData.isGLTF))) || void 0 === o ? void 0 : o.children[0];
                                if (!e || !i)
                                    throw Error(`No animation clip with this name ${f} or root ${n}`);
                                t.createAnimation(i, s, e, l).play()
                            }
                        }
                        )) : (null == i ? void 0 : i.animation.clipName) && t.removeAnimation(i.uuid, i.animation.clipName)
                    }(h, r, s),
                    l(r) && o(h, r, s),
                    p(r) && function(e, t, n) {
                        const {flowDirectionX: o, flowDirectionY: i, flowSpeed: r, color: s, quality: a, useRefraction: c, waveScale: l, reflectivity: u} = t;
                        n && c !== n.useRefraction && e.setUseRefraction(c),
                        n && a !== n.quality && e.setResolution(t.quality),
                        n && s !== n.color && e.material.uniforms.color.value.set(s),
                        e.material.uniforms.flowDirection.value.x = o,
                        e.material.uniforms.flowDirection.value.y = i,
                        e.material.uniforms.flowDirection.value.normalize(),
                        e.material.uniforms.reflectivity.value = u,
                        e.material.uniforms.config.value.w = l,
                        e.flowSpeed = r,
                        e.material.needsUpdate = !0
                    }(h, r, s),
                    d(r) && function(t, i, r) {
                        var s;
                        const {background: a, environment: c, ambientLight: l, fog: u, useEnvironmentAsBackground: d, backgroundBlurriness: f, backgroundTransparent: p, multisampling: h} = i;
                        if (t.backgroundBlurriness = f,
                        (null == r ? void 0 : r.environment) && r.environment.uuid !== (null == c ? void 0 : c.uuid) && e.resourceManager.deleteResource(r.environment.uuid),
                        c ? De(t, (e.resourceManager.getResource(c.uuid) || e.resourceManager.createResource(c)).assetInstance, (o => {
                            var i;
                            const r = o
                              , {intensity: s, rotation: l, opacity: u, blurriness: f} = c;
                            null === (i = t.environment) || void 0 === i || i.dispose();
                            const h = n.generateEnvironment(r.reflection, l, "string" == typeof a ? a : "white", u, s, f);
                            t.environment = h,
                            h.userData.originalTextureUuid = c.uuid,
                            d && !p && (t.background = r.reflection),
                            e.materials.forEach((e => {
                                E(e) && !e.userData.hasEnvMap && (e.envMap = r.reflection),
                                O(e) && !e.userData.hasEnvMap && (e.envMap = e.userData.useRefraction ? r.refraction : r.reflection)
                            }
                            ))
                        }
                        )) : (t.environment = null,
                        e.materials.forEach((e => {
                            !E(e) && !O(e) || e.userData.hasEnvMap || (e.envMap = null)
                        }
                        ))),
                        (null == r ? void 0 : r.background) && "string" != typeof r.background && r.background.uuid !== a.uuid && e.resourceManager.deleteResource(r.background.uuid),
                        p || !a)
                            t.background = null;
                        else if (!d || !c)
                            if ("string" == typeof a) {
                                const e = t.background;
                                (null == e ? void 0 : e.isColor) ? e.set(a) : t.background = new T.Q1f(a)
                            } else
                                De(t, null === (s = e.resourceManager.getResource(a.uuid) || e.resourceManager.createResource(a)) || void 0 === s ? void 0 : s.assetInstance, (e => {
                                    t.background = e
                                }
                                ));
                        const m = e.objects.get(l.uuid);
                        m && (m.visible = l.visible,
                        o(m, l)),
                        (null == h ? void 0 : h.enabled) ? e.setMultiSampling(h.samples) : e.setMultiSampling(0),
                        (null == u ? void 0 : u.enabled) ? t.fog = new T.jUj(u.useBackgroundColor ? "string" == typeof i.background ? i.background : "#FFFFFF" : u.color,u.near,u.far) : (null == u ? void 0 : u.enabled) || (t.fog = null)
                    }(h, r, s),
                    u(r) && function(t, n, o) {
                        var i;
                        const {geometry: r} = n;
                        if ((null == o ? void 0 : o.geometry) && r !== (null == o ? void 0 : o.geometry)) {
                            const e = !!(null === (i = n.raycastConfig) || void 0 === i ? void 0 : i.enabled);
                            t.geometry = Le(r),
                            e && t.geometry.computeBoundsTree(Be)
                        }
                        if (n.materialId !== (null == o ? void 0 : o.materialId)) {
                            const o = e.materials.get(n.materialId);
                            if (!o)
                                throw Error(`Material with ${n.materialId} does not exist!`);
                            t.material = o
                        }
                    }(h, r, s),
                    g(r) && function(t, n) {
                        if (y(n)) {
                            const {zoom: e, near: o, far: i, fov: r} = n
                              , s = t;
                            s.zoom = e,
                            s.near = o,
                            s.far = i,
                            s.fov = r,
                            s.updateProjectionMatrix()
                        }
                        if (v(n)) {
                            const {zoom: o, near: i, far: r} = n
                              , s = t;
                            s.zoom = o,
                            s.near = i,
                            s.far = r;
                            const a = e.canvasSize.x / e.canvasSize.y;
                            s.left = -a,
                            s.right = a,
                            s.updateProjectionMatrix()
                        }
                    }(h.camera, r)
                }
            }
        }
        var Ve = n(2445)
          , He = n(739);
        const We = .15
          , ze = .075;
        class $e extends T.eaF {
            constructor(e, t) {
                var n;
                super(e),
                this.isWater = !0,
                this.textureMatrix = new T.kn4,
                this.clock = new T.zD7,
                this.useRefraction = !1,
                this.clipBias = 0,
                this.textureHeight = 512,
                this.textureWidth = 512,
                this.isWater = !0;
                const {flowSpeed: o=.03, textureHeight: i=512, textureWidth: r=512, clipBias: s=0, flowDirection: a=new T.I9Y(1,0), reflectivity: c=.02, scale: l=1, flowMap: u, normalMap0: d, normalMap1: f, useRefraction: p=!1} = t;
                this.flowSpeed = o,
                this.useRefraction = p;
                const h = new T.Q1f(t.color)
                  , m = Ge;
                this.clipBias = s,
                this.textureWidth = r,
                this.textureHeight = i,
                this.reflector = new He.J(e,{
                    textureWidth: r,
                    textureHeight: i,
                    clipBias: s
                }),
                this.reflector.matrixAutoUpdate = !1,
                this.useRefraction && (this.refractor = new Ve.N(e,{
                    textureWidth: r,
                    textureHeight: i,
                    clipBias: s
                }),
                this.refractor.matrixAutoUpdate = !1),
                this.material = new T.BKk({
                    uniforms: T.LlO.merge([T.fCn.fog, m.uniforms]),
                    vertexShader: m.vertexShader,
                    fragmentShader: m.fragmentShader,
                    transparent: !0,
                    fog: !0
                }),
                void 0 !== u ? (this.material.defines.USE_FLOWMAP = "",
                this.material.uniforms.tFlowMap = new T.nc$(u)) : this.material.uniforms.flowDirection = new T.nc$(a),
                this.useRefraction && (this.material.defines.USE_REFRACTION = "",
                this.material.uniforms.tRefractionMap.value = null === (n = this.refractor) || void 0 === n ? void 0 : n.getRenderTarget().texture),
                d.wrapS = d.wrapT = T.GJx,
                f.wrapS = f.wrapT = T.GJx,
                this.material.uniforms.tReflectionMap.value = this.reflector.getRenderTarget().texture,
                this.material.uniforms.tNormalMap0.value = d,
                this.material.uniforms.tNormalMap1.value = f,
                this.material.uniforms.color.value = h,
                this.material.uniforms.reflectivity.value = c,
                this.material.uniforms.textureMatrix.value = this.textureMatrix,
                this.material.uniforms.config.value.x = 0,
                this.material.uniforms.config.value.y = ze,
                this.material.uniforms.config.value.z = ze,
                this.material.uniforms.config.value.w = l,
                this.onBeforeRender = function(e, t, n, o, i, r) {
                    var s, a;
                    this.updateTextureMatrix(n),
                    this.updateFlow(),
                    this.visible = !1,
                    this.reflector.matrixWorld.copy(this.matrixWorld),
                    this.reflector.onBeforeRender(e, t, n, o, i, r),
                    this.useRefraction && (null === (s = this.refractor) || void 0 === s || s.onBeforeRender(e, t, n, o, i, r),
                    null === (a = this.refractor) || void 0 === a || a.matrixWorld.copy(this.matrixWorld)),
                    this.visible = !0
                }
            }
            updateTextureMatrix(e) {
                this.textureMatrix.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
                this.textureMatrix.multiply(e.projectionMatrix),
                this.textureMatrix.multiply(e.matrixWorldInverse),
                this.textureMatrix.multiply(this.matrixWorld)
            }
            setUseRefraction(e) {
                var t, n;
                this.useRefraction !== e && (this.useRefraction ? (this.material.defines.USE_REFRACTION = !1,
                null === (t = this.refractor) || void 0 === t || t.dispose()) : (this.refractor = new Ve.N(this.geometry,{
                    textureWidth: this.textureWidth,
                    textureHeight: this.textureHeight,
                    clipBias: this.clipBias
                }),
                this.refractor.matrixAutoUpdate = !1,
                this.material.defines.USE_REFRACTION = "",
                this.material.uniforms.tRefractionMap.value = null === (n = this.refractor) || void 0 === n ? void 0 : n.getRenderTarget().texture),
                this.useRefraction = e)
            }
            updateFlow() {
                const e = this.clock.getDelta()
                  , t = this.material.uniforms.config;
                t.value.x += this.flowSpeed * e,
                t.value.y = t.value.x + ze,
                t.value.x >= We ? (t.value.x = 0,
                t.value.y = ze) : t.value.y >= We && (t.value.y = t.value.y - We)
            }
            setResolution(e) {
                var t;
                this.reflector.getRenderTarget().setSize(e, e),
                null === (t = this.refractor) || void 0 === t || t.getRenderTarget().setSize(e, e)
            }
            dispose() {
                var e, t, n, o, i, r, s;
                this.reflector.dispose(),
                null === (e = this.refractor) || void 0 === e || e.dispose(),
                null === (n = null === (t = this.material.uniforms.tNormalMap0) || void 0 === t ? void 0 : t.value) || void 0 === n || n.dispose(),
                null === (i = null === (o = this.material.uniforms.tNormalMap1) || void 0 === o ? void 0 : o.value) || void 0 === i || i.dispose(),
                this.material.dispose(),
                null === (s = (r = this.geometry).disposeBoundsTree) || void 0 === s || s.call(r),
                this.geometry.dispose()
            }
        }
        const Ge = {
            uniforms: {
                color: {
                    type: "c",
                    value: null
                },
                reflectivity: {
                    type: "f",
                    value: 0
                },
                tReflectionMap: {
                    type: "t",
                    value: null
                },
                tRefractionMap: {
                    type: "t",
                    value: null
                },
                tNormalMap0: {
                    type: "t",
                    value: null
                },
                tNormalMap1: {
                    type: "t",
                    value: null
                },
                textureMatrix: {
                    type: "m4",
                    value: null
                },
                config: {
                    type: "v4",
                    value: new T.IUQ
                }
            },
            vertexShader: "#define GLSLIFY 1\n#include <common>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n\nuniform mat4 textureMatrix;\n\nvarying vec4 vCoord;\nvarying vec2 vUv;\nvarying vec3 vToEye;\n\nvoid main() {\n    vUv = uv;\n    vCoord = textureMatrix * vec4(position, 1.0);\n\n    vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n    vToEye = cameraPosition - worldPosition.xyz;\n\n    vec4 mvPosition = viewMatrix * worldPosition; // used in fog_vertex\n    gl_Position = projectionMatrix * mvPosition;\n\n    #include <logdepthbuf_vertex>\n    #include <fog_vertex>\n\n}",
            fragmentShader: "#define GLSLIFY 1\n#include <common>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n\nuniform sampler2D tReflectionMap;\n    #ifdef USE_REFRACTION\nuniform sampler2D tRefractionMap;\n    #endif\nuniform sampler2D tNormalMap0;\nuniform sampler2D tNormalMap1;\n\n\t\t#ifdef USE_FLOWMAP\nuniform sampler2D tFlowMap;\n\t\t#else\nuniform vec2 flowDirection;\n\t\t#endif\n\nuniform vec3 color;\nuniform float reflectivity;\nuniform vec4 config;\n\nvarying vec4 vCoord;\nvarying vec2 vUv;\nvarying vec3 vToEye;\n\nvoid main() {\n\n  #include <logdepthbuf_fragment>\n\n  float flowMapOffset0 = config.x;\n  float flowMapOffset1 = config.y;\n  float halfCycle = config.z;\n  float scale = config.w;\n\n  vec3 toEye = normalize(vToEye);\n\n\t\t\t// determine flow direction\n  vec2 flow;\n\t\t\t#ifdef USE_FLOWMAP\n  flow = texture2D(tFlowMap, vUv).rg * 2.0 - 1.0;\n\t\t\t#else\n  flow = flowDirection;\n\t\t\t#endif\n  flow.x *= -1.0;\n\n\t\t\t// sample normal maps (distort uvs with flowdata)\n  vec4 normalColor0 = texture2D(tNormalMap0, (vUv * scale) + flow * flowMapOffset0);\n  vec4 normalColor1 = texture2D(tNormalMap1, (vUv * scale) + flow * flowMapOffset1);\n\n\t\t\t// linear interpolate to get the final normal color\n  float flowLerp = abs(halfCycle - flowMapOffset0) / halfCycle;\n  vec4 normalColor = mix(normalColor0, normalColor1, flowLerp);\n\n\t\t\t// calculate normal vector\n  vec3 normal = normalize(vec3(normalColor.r * 2.0 - 1.0, normalColor.b, normalColor.g * 2.0 - 1.0));\n\n\t\t\t// calculate the fresnel term to blend reflection and refraction maps\n  float theta = max(dot(toEye, normal), 0.0);\n  float reflectance = reflectivity + (1.0 - reflectivity) * pow((1.0 - theta), 5.0);     \n\n\t\t\t// calculate final uv coords\n  vec3 coord = vCoord.xyz / vCoord.w;\n  vec2 uv = coord.xy + coord.z * normal.xz * 0.05;\n\n  vec4 reflectColor = texture2D(tReflectionMap, vec2(1.0 - uv.x, uv.y));\n      #ifdef USE_REFRACTION\n  vec4 refractColor = texture2D(tRefractionMap, uv);\n      #endif\n\n\t\t\t// multiply water color with the mix of both textures\n      #ifdef USE_REFRACTION\n  gl_FragColor = vec4(color, 1.0) * mix(refractColor, reflectColor, reflectance);\n      #else\n  gl_FragColor = vec4(color, reflectance) * reflectColor;\n      #endif\n\n  #include <tonemapping_fragment>\n  #include <tonemapping_fragment>\n  #include <fog_fragment>\n}\n"
        };
        class qe extends T.YJl {
            constructor(e) {
                return super(),
                this.isCameraWrapper = !0,
                this.camera = e,
                this.add(this.camera),
                this
            }
        }
        const Xe = "https://files.peachworlds.com"
          , Je = `${Xe}/static/textures/water_normal_data_1_v_0_23_1.webp`
          , Ye = `${Xe}/static/textures/water_normal_data_2_v_0_23_1.webp`;
        function Ke(e, t) {
            const {updateObject: n} = Ue(e, t)
              , {materials: o, objects: i} = e;
            function r(e, t) {
                var n;
                const o = i.get(e)
                  , r = i.get(t);
                if (!o)
                    throw new Error("Cannot set parent relationship!");
                r ? r.add(o) : null === (n = o.parent) || void 0 === n || n.remove(o)
            }
            return {
                updateObject: n,
                createObject: function t(s, h) {
                    var m;
                    let E = null;
                    if (!s.uuid)
                        throw new Error("Object must have a uuid!");
                    if (i.has(s.uuid))
                        throw new Error("Object already exists!");
                    if (function(e) {
                        return e.type === c.lV.Group
                    }(s) && (E = new T.YJl),
                    p(s) && (E = function(t) {
                        const {flowDirectionX: n, flowDirectionY: o, flowSpeed: i, color: r, waveScale: s, quality: a} = t
                          , l = new T.bdM(1,1);
                        return new $e(l,{
                            normalMap0: e.load(c.ap.Texture, Je),
                            normalMap1: e.load(c.ap.Texture, Ye),
                            scale: s,
                            flowDirection: new T.I9Y(n,o),
                            flowSpeed: i,
                            textureHeight: a,
                            textureWidth: a,
                            color: r
                        })
                    }(s)),
                    l(s) && (E = function(e) {
                        if (b(e))
                            return new T.HiM;
                        if (w(e))
                            return new T.ZyN;
                        if (_(e))
                            return new T.$p8;
                        if (S(e)) {
                            const e = new T.B69
                              , t = new T.nCl;
                            return t.add(e),
                            e.position.set(0, -1, 0),
                            t.target = e,
                            t
                        }
                        throw new Error("Light type is not supported!")
                    }(s)),
                    u(s) && (E = function(e) {
                        const {geometry: t, materialId: n} = e;
                        if (!o.has(n))
                            throw new Error(`Material with uuid ${n} doesn't exist`);
                        const i = Le(t)
                          , r = new T.eaF;
                        return r.geometry = i,
                        r.material = o.get(n),
                        r
                    }(s)),
                    f(s) && (E = function(t) {
                        const {object: o} = t
                          , i = e.resourceManager.createResource(o);
                        switch (o.assetType) {
                        case c.ap.Gltf:
                        case c.ap.Obj:
                        case c.ap.FBX:
                            {
                                const e = new T.YJl;
                                return i.assetInstance.then((o => {
                                    var i;
                                    const {model: r, materials: s} = o;
                                    e.userData.originalMaps = s.map((e => {
                                        const t = e;
                                        return {
                                            alphaMap: t.alphaMap,
                                            aoMap: t.aoMap,
                                            envMap: t.envMap,
                                            metalnessMap: t.metalnessMap,
                                            map: t.map,
                                            emissiveMap: t.emissiveMap,
                                            normalMap: t.normalMap,
                                            roughnessMap: t.roughnessMap,
                                            displacementMap: t.displacementMap
                                        }
                                    }
                                    )),
                                    e.add(r),
                                    (null === (i = t.raycastConfig) || void 0 === i ? void 0 : i.enabled) && Qe(e),
                                    r.getObjectsByProperty("isLight", !0).forEach((e => {
                                        e.removeFromParent()
                                    }
                                    )),
                                    n(t)
                                }
                                )),
                                e
                            }
                        default:
                            throw Error(`No imported object of this type ${o.assetType}`)
                        }
                    }(s)),
                    d(s) && (E = new T.Z58),
                    g(s) && (E = function(t) {
                        let n;
                        if (y(t) && (n = new T.ubm,
                        n.aspect = e.canvasSize.x / e.canvasSize.y),
                        v(t) && (n = new T.qUd),
                        !n)
                            throw new Error("Camera type is not supported!");
                        const o = new qe(n);
                        return n.updateProjectionMatrix(),
                        n.userData.controls = t.controls,
                        o
                    }(s)),
                    !E)
                        throw new Error(`Object type <${s.type}> is not supported!`);
                    const {name: O, uuid: P, visible: M=!0} = s;
                    E.uuid = P,
                    E.visible = M,
                    E.userData = Object.assign(Object.assign({}, E.userData), {
                        name: O,
                        isPwObject: !0
                    }),
                    (null === (m = s.raycastConfig) || void 0 === m ? void 0 : m.enabled) && Qe(E);
                    const R = a(E);
                    i.set(s.uuid, R),
                    n(s),
                    h && r(s.uuid, h),
                    d(s) && t(s.ambientLight, s.uuid),
                    e.setWireframeOnObject(E)
                },
                setParentRelationship: r,
                deleteObject: function(e) {
                    var n, o;
                    const r = i.get(e);
                    if (!r)
                        throw new Error(`Cannot delete object that does not exist! ${e}`);
                    null === (n = r.parent) || void 0 === n || n.remove(r),
                    r.dispose && r.dispose(),
                    r instanceof T.Z58 && (null === (o = r.environment) || void 0 === o || o.dispose()),
                    t.removeObjectAnimations(r.uuid),
                    i.delete(e)
                },
                getObject: function(e) {
                    return i.get(e)
                },
                getAllObjects: () => i
            }
        }
        function Qe(e) {
            e.traverse((e => {
                if (!(e instanceof T.eaF || e instanceof T.I46))
                    return;
                e.updateMatrixWorld(!0),
                e.geometry.computeBoundsTree(Be),
                e.layers.enable(c.X6.Raycast);
                e.userData = Object.assign(Object.assign({}, e.userData), {
                    isCollider: !0
                })
            }
            ))
        }
        var Ze = n(7615);
        function et(e, t, n, o) {
            var i;
            const r = function(e, t) {
                var n, o;
                const i = {};
                if (!e || !t)
                    return i;
                const r = Object.values(Ze.SN);
                for (const s of r) {
                    const r = null === (o = null === (n = e.devices[s]) || void 0 === n ? void 0 : n.canvases) || void 0 === o ? void 0 : o[t];
                    r && (i[s] = r.cameraId)
                }
                return i
            }(e, null === (i = t.parentElement) || void 0 === i ? void 0 : i.id)
              , s = n.find((e => e === r.desktop)) || o
              , a = n.find((e => e === r.tablet)) || s;
            return {
                [Ze.SN.Desktop]: s,
                [Ze.SN.Tablet]: a,
                [Ze.SN.Mobile]: n.find((e => e === r.mobile)) || a
            }
        }
        function tt() {
            const e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            return e < M.mq ? Ze.SN.Mobile : e < M.g4 ? Ze.SN.Tablet : Ze.SN.Desktop
        }
        function nt(e, t, n, o, i, r) {
            var s, a, l;
            const {pwObjects: u, defaultCameraId: d} = t
              , f = et(n, e, function(e) {
                return e.filter((e => g(e))).map((e => e.uuid))
            }(Array.from(u.values())), d);
            let p, h = o(d);
            h || u.forEach((e => {
                h || e.type !== c.lV.Camera || (h = o(e.uuid))
            }
            ));
            const m = {
                desktop: null === (s = o(f[Ze.SN.Desktop]) || o(f[r]) || h) || void 0 === s ? void 0 : s.camera,
                tablet: null === (a = o(f[Ze.SN.Tablet]) || o(f[r]) || h) || void 0 === a ? void 0 : a.camera,
                mobile: null === (l = o(f[Ze.SN.Mobile]) || o(f[r]) || h) || void 0 === l ? void 0 : l.camera
            }
              , y = () => {
                const e = tt();
                if (p === e)
                    return;
                p = e;
                const t = m[e];
                i.getActiveCamera() !== t && i.setActiveCamera(t)
            }
            ;
            y(),
            window.addEventListener("resize", y);
            return {
                dispose: () => {
                    window.removeEventListener("resize", y)
                }
                ,
                updateResponsiveCanvasCamera: y
            }
        }
        var ot = n(3631);
        const it = "RESOLUTION_FACTOR"
          , rt = [60, 75, 90, 120, 144, 165, 240];
        function st(e, {iterations: t=15, ms: n=1e3, threshold: o=.75, flipflops: i=1 / 0, bounds: r=(e => e > 100 ? [60, 100] : [40, 60]), minResolutionFactor: s=.2, memoizeResolutionFactor: a=!0}) {
            const c = {
                fps: 0,
                index: 0,
                flipped: 0,
                refreshrate: rt[0],
                fallback: !1,
                frames: [],
                averages: [],
                subscriptions: new Map,
                subscribe: e => {
                    const t = Symbol();
                    return c.subscriptions.set(t, e.current),
                    () => {
                        c.subscriptions.delete(t)
                    }
                }
            };
            if (e.addOnRenderCallback(l),
            a) {
                const t = Number(window.localStorage.getItem(it));
                !Number.isNaN(t) && t > s && e.renderer.setPixelRatio(t)
            }
            function l() {
                const {frames: a, averages: l} = c;
                if (c.fallback)
                    return;
                if (l.length >= t)
                    return void (M.DS && console.error("PerformanceMonitorModule: averages.length >= iterations"));
                a.push(performance.now());
                const f = a[a.length - 1] - a[0];
                if (f < n)
                    return;
                if (c.fps = Math.round(1e3 / (f / a.length)),
                c.frames = [],
                l[c.index++ % t] = c.fps,
                l.length < t)
                    return;
                const [p,h] = r(c.refreshrate)
                  , m = l.filter((e => e >= h))
                  , g = l.filter((e => e < p))
                  , y = (0,
                ot.i2)(p, h)
                  , v = (0,
                ot.i2)(l);
                v > c.refreshrate && (c.refreshrate = function(e) {
                    const t = rt.findIndex((t => t >= e));
                    if (-1 === t)
                        return rt[rt.length - 1];
                    if (0 === t)
                        return rt[0];
                    const n = rt[t]
                      , o = rt[t - 1];
                    return Math.abs(o - e) >= Math.abs(n - e) || 1.1 * o <= e ? n : o
                }(v));
                const b = Math.sqrt(v / y);
                m.length > t * o && v > y && (c.flipped++,
                function(t) {
                    if (t < 1)
                        throw new Error("fpsDeltaFromTargetNorm should be greater than 1 when onIncline is called");
                    if (d() >= window.devicePixelRatio)
                        return;
                    const n = Math.min(window.devicePixelRatio, e.renderer.getPixelRatio() * t);
                    u(n)
                }(b),
                c.subscriptions.forEach((e => e.onIncline && e.onIncline(c)))),
                g.length > t * o && (c.flipped++,
                function(t) {
                    if (Math.sign(t) < 1)
                        throw new Error("fpsDeltaFromTargetNorm should less than 1 when onDecline is called");
                    if (d() <= s)
                        return;
                    const n = Math.max(s, e.renderer.getPixelRatio() * t);
                    u(n)
                }(b),
                c.subscriptions.forEach((e => e.onDecline && e.onDecline(c)))),
                c.flipped > i && !c.fallback && (c.fallback = !0,
                c.subscriptions.forEach((e => e.onFallback && e.onFallback(c))),
                M.DS && console.warn("Auto-resolution system disabled: max flipflops reached")),
                c.averages = []
            }
            function u(t) {
                e.renderer.setPixelRatio(t),
                a && window.localStorage.setItem(it, t.toString())
            }
            function d() {
                return e.renderer.getPixelRatio()
            }
            return {
                api: c,
                dispose: function() {
                    e.removeOnRenderCallback(l)
                }
            }
        }
        let at = !1;
        function ct(e, t, n=!1) {
            at = n;
            const i = Oe(e)
              , r = xe(i)
              , s = function(e) {
                const {getActiveScene: t} = e
                  , n = new T.Iw4(t())
                  , o = new Map;
                function i(e, t) {
                    var n;
                    const {clipName: i, loop: r, speed: s} = t;
                    if (!i)
                        return;
                    const a = null === (n = o.get(e)) || void 0 === n ? void 0 : n.get(i);
                    if (!a)
                        throw Error(`Animation with name ${i} and object id ${e} does not exist`);
                    a.setLoop(r ? T.aMy : T.G3T, 1 / 0),
                    a.reset(),
                    a.timeScale = s
                }
                function r(e, t) {
                    var i, r;
                    const s = null === (i = o.get(e)) || void 0 === i ? void 0 : i.get(t);
                    s && (s.enabled = !1,
                    s.stop(),
                    s.reset(),
                    n.uncacheRoot(s.getRoot()),
                    n.uncacheClip(s.getClip()),
                    null === (r = o.get(e)) || void 0 === r || r.delete(t))
                }
                return {
                    createAnimation: function(e, t, r, s) {
                        const a = n.clipAction(r, e);
                        return a.clampWhenFinished = !0,
                        a.blendMode = T.Ke9,
                        o.has(t) || o.set(t, new Map),
                        o.get(t).set(r.name, a),
                        i(t, s),
                        a
                    },
                    removeAnimation: r,
                    removeObjectAnimations: function(e) {
                        var t;
                        null === (t = o.get(e)) || void 0 === t || t.forEach(( (t, n) => r(e, n)))
                    },
                    updateAnimation: i,
                    getAnimation: function(e, t) {
                        var n;
                        return null === (n = o.get(e)) || void 0 === n ? void 0 : n.get(t)
                    },
                    update: function(e) {
                        n.update(e)
                    },
                    dispose: function() {
                        n.stopAllAction(),
                        n.getRoot() && n.uncacheRoot(n.getRoot())
                    }
                }
            }(i)
              , a = je(i);
            let l;
            if (!n && (null == t ? void 0 : t.isReductionEnabled)) {
                const {fpsThresholdAbsolute: e=60, minResolution: n=.1, fpsThresholdMode: o} = t || {}
                  , r = window.location !== window.parent.location
                  , s = o === c.GI.Absolute ? e : 60;
                l = st(i, {
                    memoizeResolutionFactor: !r,
                    minResolutionFactor: .01 * (n || 100),
                    flipflops: 8,
                    threshold: .85,
                    iterations: 5,
                    ms: 1e3,
                    bounds: e => {
                        const t = Math.min(s, e);
                        return [.9 * t, 1.2 * t]
                    }
                })
            }
            const {start: u, stop: d, eventDispatcher: p, addOnRenderCallback: h, removeOnRenderCallback: m, renderer: g, effects: y, setActiveCamera: v, setActiveScene: b, getActiveCamera: w, getActiveScene: _, setCameraPreview: S, setWireframe: E, setUsePostProcessing: O, createEffect: P, updateEffect: M, deleteEffect: R, getResource: x, resourceManager: A, showStatsPanel: C, hideStatsPanel: D, addAfterRenderCallback: k, attachToDOM: I, setRenderHelpers: j} = i
              , {getMaterial: N, updateMaterial: L, createMaterial: B, deleteMaterial: F, replaceMaterial: U} = a;
            h(( (e, t, n) => s.update(n)));
            const {updateObject: V, createObject: H, getObject: W, getAllObjects: z, deleteObject: $, setParentRelationship: G} = Ke(i, s)
              , {getObjectIntersectionAtPointer: q, getObjectPositionOnScreen: X, getObjectsInScreenView: J} = r
              , {getAnimation: Y} = s;
            function K(e, t, n) {
                const o = W(e);
                n.forEach((e => L(e, void 0, !0)));
                const i = o => {
                    if (!o.userData.isPwObject || o.uuid === e) {
                        if (o instanceof T.eaF || o instanceof T.ZLX)
                            if (Array.isArray(o.material))
                                o.material.forEach(( (e, i) => {
                                    const r = t.findIndex((t => e.uuid === t));
                                    -1 !== i && (o.material[i] = N(n[r].uuid))
                                }
                                ));
                            else {
                                const e = t.findIndex((e => o.material.uuid === e));
                                -1 !== e && (o.material = N(n[e].uuid))
                            }
                        o.children.forEach(i)
                    }
                }
                ;
                o && i(o)
            }
            const Q = (e, t) => (Ne(e) && !p.hasTypeListener(e) && r.addEventListener(e),
            p.addEventListener(e, t),
            () => {
                p.removeEventListener(e, t),
                Ne(e) && !p.hasTypeListener(e) && r.removeEventListener(e)
            }
            );
            return {
                renderer: g,
                effects: y,
                core: i,
                setActiveCamera: v,
                setActiveScene: b,
                getActiveCamera: w,
                getActiveScene: _,
                setCameraPreview: S,
                initializeClient: function(t, n, r) {
                    const {pwObjects: s, pwMaterials: a, parents: l, usePostProcessing: u, effects: d} = t;
                    a.forEach((e => B(e))),
                    s.forEach((e => H(e))),
                    Array.from(l.entries()).forEach(( ([e,t]) => {
                        G(e, t)
                    }
                    )),
                    nt(e, t, n, W, i, r),
                    s.forEach((e => {
                        i.getActiveScene() || e.type !== c.lV.Scene || i.setActiveScene(W(e.uuid))
                    }
                    )),
                    s.forEach((e => {
                        f(e) && e.materials && x(e.object.uuid).assetInstance.then((t => {
                            var n;
                            e.materials && K(e.uuid, t.materials.map((e => e.uuid)), null === (n = e.materials) || void 0 === n ? void 0 : n.map((e => a.get(e))))
                        }
                        ))
                    }
                    ));
                    let h = !1;
                    d.forEach((e => {
                        e.enabled && (h = h || e.enabled,
                        P(e))
                    }
                    )),
                    O(h && u),
                    Q(o.ResourcesLoaded, ( () => {
                        i.getActiveScene().traverse((e => {
                            e.frustumCulled = !1
                        }
                        ));
                        const e = i.canvasSize.x
                          , t = i.canvasSize.y;
                        i.renderer.setSize(1, 1, !1),
                        i.render(),
                        i.getActiveScene().traverse((e => {
                            e.frustumCulled = !0
                        }
                        )),
                        i.renderer.setSize(e, t, !1),
                        i.start(),
                        p.dispatchEvent({
                            type: o.SceneReady
                        }),
                        document.location.search.includes("debug") && C(document.body)
                    }
                    )),
                    A.checkIfResourceLoadingFinished()
                },
                listenTo: Q,
                start: u,
                stop: d,
                dispose: function() {
                    i.dispose(),
                    r.dispose(),
                    s.dispose(),
                    a.dispose(),
                    null == l || l.dispose()
                },
                updateObject: V,
                getObject: W,
                getAllObjects: z,
                getResource: x,
                createEffect: P,
                updateEffect: M,
                deleteEffect: R,
                createObject: H,
                deleteObject: $,
                createMaterial: B,
                updateMaterial: L,
                deleteMaterial: F,
                replaceMaterial: U,
                replaceImportedMaterials: K,
                getImportedAnimation: Y,
                setParentRelationship: G,
                addOnRenderCallback: h,
                removeOnRenderCallback: m,
                getObjectIntersectionAtPointer: q,
                getObjectPositionOnScreen: X,
                setWireframe: E,
                setUsePostProcessing: O,
                getMaterial: N,
                showStatsPanel: C,
                hideStatsPanel: D,
                addAfterRenderCallback: k,
                getObjectsInScreenView: J,
                attachToDOM: I,
                setRenderHelpers: j
            }
        }
    }
}]);
