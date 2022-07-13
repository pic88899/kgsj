var __reflect = this && this.__reflect || function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
}
  , __extends = this && this.__extends || function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var n in e)
        e.hasOwnProperty(n) && (t[n] = e[n]);
    i.prototype = e.prototype,
    t.prototype = new i
}
  , __awaiter = this && this.__awaiter || function(t, e, i, n) {
    return new (i || (i = Promise))(function(r, o) {
        function s(t) {
            try {
                h(n.next(t))
            } catch (e) {
                o(e)
            }
        }
        function a(t) {
            try {
                h(n["throw"](t))
            } catch (e) {
                o(e)
            }
        }
        function h(t) {
            t.done ? r(t.value) : new i(function(e) {
                e(t.value)
            }
            ).then(s, a)
        }
        h((n = n.apply(t, e || [])).next())
    }
    )
}
  , __generator = this && this.__generator || function(t, e) {
    function i(t) {
        return function(e) {
            return n([t, e])
        }
    }
    function n(i) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; h; )
            try {
                if (r = 1,
                o && (s = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(o, i[1])).done)
                    return s;
                switch (o = 0,
                s && (i = [0, s.value]),
                i[0]) {
                case 0:
                case 1:
                    s = i;
                    break;
                case 4:
                    return h.label++,
                    {
                        value: i[1],
                        done: !1
                    };
                case 5:
                    h.label++,
                    o = i[1],
                    i = [0];
                    continue;
                case 7:
                    i = h.ops.pop(),
                    h.trys.pop();
                    continue;
                default:
                    if (s = h.trys,
                    !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                        h = 0;
                        continue
                    }
                    if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                        h.label = i[1];
                        break
                    }
                    if (6 === i[0] && h.label < s[1]) {
                        h.label = s[1],
                        s = i;
                        break
                    }
                    if (s && h.label < s[2]) {
                        h.label = s[2],
                        h.ops.push(i);
                        break
                    }
                    s[2] && h.ops.pop(),
                    h.trys.pop();
                    continue
                }
                i = e.call(t, h)
            } catch (n) {
                i = [6, n],
                o = 0
            } finally {
                r = s = 0
            }
        if (5 & i[0])
            throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var r, o, s, a, h = {
        label: 0,
        sent: function() {
            if (1 & s[0])
                throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this
    }
    ),
    a
}
  , DComponent = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.setAnchor = function(t, e) {
        void 0 === t && (t = 0),
        void 0 === e && (e = 0),
        this.anchorOffsetX = t,
        this.anchorOffsetY = e
    }
    ,
    e.prototype.setPosition = function(t, e) {
        void 0 === t && (t = 0),
        void 0 === e && (e = 0),
        this.x = t,
        this.y = e
    }
    ,
    e.prototype.destroy = function() {
        this.removeChildren()
    }
    ,
    e
}(eui.Component);
__reflect(DComponent.prototype, "DComponent");
var HashMap = function() {
    function t() {
        this._dict = null,
        this._keyList = null,
        this._dict = {},
        this._keyList = []
    }
    return t.prototype.put = function(t, e) {
        null != t ? (-1 == this._keyList.indexOf(t) && this._keyList.push(t),
        this._dict[t] = e) : console.log("HashMap::Cannot put a value with undefined or null key!")
    }
    ,
    t.prototype.remove = function(t) {
        var e = this._keyList.indexOf(t);
        return this._dict[t] && delete this._dict[t],
        this._keyList.splice(e, 1)
    }
    ,
    t.prototype.clear = function() {
        this._keyList.length = 0,
        this._keyList = [];
        for (var t in this._dict)
            delete this._dict[t]
    }
    ,
    t.prototype.get = function(t) {
        return this._dict[t]
    }
    ,
    Object.defineProperty(t.prototype, "keys", {
        get: function() {
            return this._keyList
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.values = function() {
        for (var t = this.keys.length, e = [], i = 0; t > i; i++)
            e = e.concat(this.get(this.keys[i]));
        return e
    }
    ,
    t.prototype.indexOf = function(t) {
        var e = 0;
        for (var i in this._dict) {
            if (this._dict[this._dict[i]] == t)
                return e;
            e++
        }
        return -1
    }
    ,
    t.prototype.size = function() {
        return this._keyList.length
    }
    ,
    t.prototype.isEmpty = function() {
        return 0 == this._keyList.length
    }
    ,
    t.prototype.clone = function() {
        var e = new t;
        for (var i in this._keyList)
            e.keys.push(this._keyList[i]),
            e.put(this._keyList[i], this._dict[this._keyList[i]]);
        return e
    }
    ,
    t.prototype.containsKey = function(t) {
        for (var e in this._keyList)
            if (this._keyList[e] === t)
                return !0;
        return !1
    }
    ,
    t.prototype.containsValue = function(t) {
        for (var e in this._dict)
            if (this._dict[e] === t)
                return !0;
        return !1
    }
    ,
    t.prototype.toString = function() {
        var t = "HashMap Content:\n";
        for (var e in this._keyList)
            t += e + " -> " + this._dict[this._keyList[e]] + "\n";
        return t
    }
    ,
    t
}();
__reflect(HashMap.prototype, "HashMap");
var BaseController = function() {
    function t() {
        this._messages = {}
    }
    return t.prototype.registerFunc = function(t, e, i) {
        this._messages[t] = [e, i]
    }
    ,
    t.prototype.applyFunc = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
        var n = this._messages[t];
        return n ? n[0].apply(n[1], e) : (Log.trace("消息" + t + "不存在侦听"),
        null)
    }
    ,
    t.prototype.applyControllerFunc = function(t, e) {
        for (var i = [], n = 2; n < arguments.length; n++)
            i[n - 2] = arguments[n];
        return App.ControllerManager.applyFunc.apply(App.ControllerManager, arguments)
    }
    ,
    t.prototype.setModel = function(t) {
        this._model = t
    }
    ,
    t.prototype.getModel = function() {
        return this._model
    }
    ,
    t.prototype.getControllerModel = function(t) {
        return App.ControllerManager.getControllerModel(t)
    }
    ,
    t
}();
__reflect(BaseController.prototype, "BaseController");
var BaseEuiView = function(t) {
    function e(e, i) {
        var n = t.call(this) || this;
        return n._resources = null,
        n._controller = e,
        n._myParent = i,
        n._isInit = !1,
        n.allbindButton = {},
        n.addEventListener(eui.UIEvent.COMPLETE, n.onUIComplete, n),
        n
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.percentHeight = 100,
        this.percentWidth = 100
    }
    ,
    e.prototype.onUIComplete = function() {
        this.initUI(),
        this.initData()
    }
    ,
    Object.defineProperty(e.prototype, "myParent", {
        get: function() {
            return this._myParent
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.setResources = function(t) {
        this._resources = t
    }
    ,
    e.prototype.isInit = function() {
        return this._isInit
    }
    ,
    e.prototype.applyFunc = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
        return this._controller.applyFunc.apply(this._controller, arguments)
    }
    ,
    e.prototype.applyControllerFunc = function(t, e) {
        for (var i = [], n = 2; n < arguments.length; n++)
            i[n - 2] = arguments[n];
        return this._controller.applyControllerFunc.apply(this._controller, arguments)
    }
    ,
    e.prototype.isShow = function() {
        return null != this.stage && this.visible
    }
    ,
    e.prototype.addToParent = function() {
        this._myParent.addChild(this)
    }
    ,
    e.prototype.removeFromParent = function() {
        App.DisplayUtils.removeFromParent(this)
    }
    ,
    e.prototype.initUI = function() {
        this._isInit = !0
    }
    ,
    e.prototype.initData = function() {}
    ,
    e.prototype.destroy = function() {
        this._controller = null,
        this._myParent = null,
        this._resources = null
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e]
    }
    ,
    e.prototype.close = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        App.ViewManager.closeView(this)
    }
    ,
    e.prototype.unbindButton = function(t, e) {
        void 0 === e && (e = !0),
        t && (t.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this),
        e && this.allbindButton && delete this.allbindButton[t.hashCode])
    }
    ,
    e.prototype.bindButton = function(t, e) {
        void 0 === e && (e = !1),
        t && (t.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this),
        e && (t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this),
        t.addEventListener(egret.TouchEvent.TOUCH_END, this.touchRelease, this),
        t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchRelease, this)),
        this.allbindButton[t.hashCode] = t)
    }
    ,
    e.prototype.dispose = function() {
        for (var t in this.allbindButton)
            this.unbindButton(this.allbindButton[t], !1);
        this.allbindButton = {}
    }
    ,
    e.prototype.touchHandler = function(t) {
        var e = t.currentTarget;
        this.touchBindButtonHandler(e)
    }
    ,
    e.prototype.bindButtons = function(t, e) {
        void 0 === e && (e = !1);
        for (var i = t.length, n = 0; i > n; n++)
            this.bindButton(t[n], e)
    }
    ,
    e.prototype.touchBegin = function(t) {
        var e = t.currentTarget;
        e.scaleX = e.scaleY = .9
    }
    ,
    e.prototype.touchRelease = function(t) {
        var e = t.currentTarget;
        e.scaleX = e.scaleY = 1
    }
    ,
    e.prototype.touchBindButtonHandler = function(t) {}
    ,
    e.prototype.loadResource = function(t, e) {
        this._resources && this._resources.length > 0 ? this.once(eui.UIEvent.CREATION_COMPLETE, e, this) : (t(),
        e())
    }
    ,
    e.prototype.setVisible = function(t) {
        this.visible = t
    }
    ,
    e
}(eui.Component);
__reflect(BaseEuiView.prototype, "BaseEuiView", ["IBaseView"]);
var ByteArrayMsg = function() {
    function t() {
        this._sid = 0,
        this._msgBuffer = new egret.ByteArray,
        this.actionArray = []
    }
    return t.prototype.receive = function(t) {
        t.readBytes(this._msgBuffer);
        var e = this.decode(this._msgBuffer);
        e && e.sid > 0 && App.MessageCenter.dispatch("ssid_" + e.sid, [e.sid, e.id, e.body]),
        0 == this._msgBuffer.bytesAvailable && this._msgBuffer.clear()
    }
    ,
    t.prototype.send = function(t, e, i, n) {
        this._sid++,
        0 == this._sid && this._sid++;
        var r = this.encode(e);
        r && (r.position = 0,
        t.writeBytes(r, 0, r.bytesAvailable),
        this.actionArray[this._sid] = [i, n],
        App.MessageCenter.addListener("ssid_" + this._sid, this.handlerSessionMsg, this))
    }
    ,
    t.prototype.handlerSessionMsg = function(t) {
        var e = t[0]
          , i = t[1]
          , n = t[2]
          , r = this.actionArray[e];
        r ? r[0].apply(r[1], [i, n]) : Log.trace("sessionId 没有action"),
        App.MessageCenter.removeListener("ssid_" + e, this.handlerSessionMsg, this)
    }
    ,
    t.prototype.decode = function(t) {
        return Log.trace("decode需要子类重写，根据项目的协议结构解析"),
        null
    }
    ,
    t.prototype.encode = function(t) {
        return Log.trace("encode需要子类重写，根据项目的协议结构解析"),
        null
    }
    ,
    t.prototype.resetSid = function() {
        this._sid = 0
    }
    ,
    t.prototype.getSid = function() {
        return this._sid
    }
    ,
    t
}();
__reflect(ByteArrayMsg.prototype, "ByteArrayMsg", ["BaseMsg"]);
var UTFMsg = function() {
    function t() {
        this._sid = 0
    }
    return t.prototype.receive = function(t) {
        var e = t.readUTF()
          , i = this.decode(e);
        if (console.log("receive socket message", i, (new Date).getTime()),
        i) {
            var n = i.cmd
              , r = i.status
              , e = i.message
              , o = i.data;
            if (r == SocketConst.NORMAL) {
                if (null != o) {
                    var s = i.gameId;
                    if (Log.trace("gameId from server, gameId = " + s),
                    GameApp.gameId != s && s > 0)
                        return;
                    App.MessageCenter.dispatch(n.toString(), n, o)
                } else
                    SystemTips.show("服务器维护中，请稍后再试【命令" + n + "】");
                if (n == SocketConst.LOGIN_INVALID)
                    return AlertView.getInstance().setConfirmCallBack(this.gotoLogin, this),
                    void AlertView.getInstance().show("登录失效，请重新登录", AlertView.CONFIRM_MODE)
            } else
                null != n && SystemTips.show(e)
        }
    }
    ,
    t.prototype.gotoLogin = function() {
        GameEventManager.dispatchEvent(GameEventManager.BACK_TO_LOGIN)
    }
    ,
    t.prototype.send = function(t, e) {
        this._sid++,
        0 == this._sid && this._sid++;
        var i = this.encode(e);
        i && (t.type = egret.WebSocket.TYPE_STRING,
        t.writeUTF(i))
    }
    ,
    t.prototype.decode = function(t) {
        return Log.trace("decode需要子类重写，根据项目的协议结构解析"),
        null
    }
    ,
    t.prototype.encode = function(t) {
        return Log.trace("encode需要子类重写，根据项目的协议结构解析"),
        null
    }
    ,
    t.prototype.resetSid = function() {
        this._sid = 0
    }
    ,
    t.prototype.getSid = function() {
        return this._sid
    }
    ,
    t
}();
__reflect(UTFMsg.prototype, "UTFMsg", ["BaseMsg"]);
var BaseClass = function() {
    function t() {}
    return t.getInstance = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var i = this;
        if (!i._instance) {
            var n = t.length;
            0 == n ? i._instance = new i : 1 == n ? i._instance = new i(t[0]) : 2 == n ? i._instance = new i(t[0],t[1]) : 3 == n ? i._instance = new i(t[0],t[1],t[2]) : 4 == n ? i._instance = new i(t[0],t[1],t[2],t[3]) : 5 == n && (i._instance = new i(t[0],t[1],t[2],t[3],t[4]))
        }
        return i._instance
    }
    ,
    t
}();
__reflect(BaseClass.prototype, "BaseClass");
var BaseScene = function() {
    function t() {
        this._layers = new Array
    }
    return t.prototype.onEnter = function() {}
    ,
    t.prototype.onExit = function() {
        App.ViewManager.closeAll(),
        this.removeAllLayer()
    }
    ,
    t.prototype.addLayer = function(t) {
        t instanceof BaseSpriteLayer ? (App.StageUtils.getStage().addChild(t),
        this._layers.push(t)) : t instanceof BaseEuiLayer && (App.StageUtils.getUIStage().addChild(t),
        this._layers.push(t))
    }
    ,
    t.prototype.addLayerAt = function(t, e) {
        t instanceof BaseSpriteLayer ? (App.StageUtils.getStage().addChildAt(t, e),
        this._layers.push(t)) : t instanceof BaseEuiLayer && (App.StageUtils.getUIStage().addChildAt(t, e),
        this._layers.push(t))
    }
    ,
    t.prototype.removeLayer = function(t) {
        t instanceof BaseSpriteLayer ? (App.StageUtils.getStage().removeChild(t),
        this._layers.splice(this._layers.indexOf(t), 1)) : t instanceof BaseEuiLayer && (App.StageUtils.getUIStage().removeChild(t),
        this._layers.splice(this._layers.indexOf(t), 1))
    }
    ,
    t.prototype.layerRemoveAllChild = function(t) {
        t instanceof BaseSpriteLayer ? t.removeChildren() : t instanceof BaseEuiLayer && t.removeChildren()
    }
    ,
    t.prototype.removeAllLayer = function() {
        for (; this._layers.length; ) {
            var t = this._layers[0];
            this.layerRemoveAllChild(t),
            this.removeLayer(t)
        }
    }
    ,
    t
}();
__reflect(BaseScene.prototype, "BaseScene");
var BaseEuiLayer = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.percentWidth = 100,
        e.percentHeight = 100,
        e.touchEnabled = !1,
        e
    }
    return __extends(e, t),
    e
}(eui.Group);
__reflect(BaseEuiLayer.prototype, "BaseEuiLayer");
var ObjectPool = function() {
    function t() {
        this._objTable = new HashMap
    }
    return t.prototype.getObject = function(t) {
        var e = this._objTable.get(egret.getQualifiedClassName(t));
        return null == e || 0 == e.length ? new t : e.pop()
    }
    ,
    t.prototype.putObject = function(t) {
        var e = egret.getQualifiedClassName(t)
          , i = this._objTable.get(e);
        null == i && this._objTable.put(e, i = new Array),
        i.push(t)
    }
    ,
    t.prototype.putMultiObjects = function(t) {
        for (var e = t.length, i = 0; e > i; i++)
            this.putObject(t[i])
    }
    ,
    t
}();
__reflect(ObjectPool.prototype, "ObjectPool");
var BaseItemClickRenderer = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.touchCache = {},
        e.SCALE_ROAT = 1.1,
        e.once(eui.UIEvent.CREATION_COMPLETE, e.onCreateComplete, e),
        e
    }
    return __extends(e, t),
    e.prototype.onCreateComplete = function(t) {
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.itemTouchBegin, this),
        this.setLanguage()
    }
    ,
    e.prototype.setLanguage = function() {}
    ,
    e.prototype.addButton = function(t, e) {
        void 0 === e && (e = !1),
        this.touchCache[t.hashCode] || (this.touchCache[t.hashCode] = [t.x, t.y, t.scaleX, t.scaleY, e])
    }
    ,
    e.prototype.removeButton = function(t) {
        this.touchCache[t.hashCode] && delete this.touchCache[t.hashCode]
    }
    ,
    e.prototype.itemTouchBegin = function(t) {
        this.startx = t.stageX,
        this.starty = t.stageY;
        var e = t.target
          , i = this.touchCache[e.hashCode];
        i && (this.addEventListener(egret.TouchEvent.TOUCH_END, this.itemTouchEnd, this),
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.itemTouchCancel, this),
        i[4] && (e.scaleX = i[2] * this.SCALE_ROAT,
        e.scaleY = i[3] * this.SCALE_ROAT,
        e.x = i[0] - ((this.SCALE_ROAT - 1) * e.width >> 1),
        e.y = i[1] - ((this.SCALE_ROAT - 1) * e.height >> 1)))
    }
    ,
    e.prototype.itemTouchEnd = function(t) {
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.itemTouchEnd, this);
        var e = this.startx - t.stageX
          , i = this.starty - t.stageY
          , n = t.target
          , r = this.touchCache[n.hashCode];
        r && (r[4] && (n.x = r[0],
        n.y = r[1],
        n.scaleX = r[2],
        n.scaleY = r[3]),
        20 > e && e > -20 && 20 > i && i > -20 && this.click(n))
    }
    ,
    e.prototype.itemTouchCancel = function(t) {
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.itemTouchCancel, this);
        var e = (this.startx - t.stageX,
        this.starty - t.stageY,
        t.target)
          , i = this.touchCache[e.hashCode];
        i && i[4] && (e.x = i[0],
        e.y = i[1],
        e.scaleX = i[2],
        e.scaleY = i[3])
    }
    ,
    e.prototype.click = function(t) {}
    ,
    e
}(eui.ItemRenderer);
__reflect(BaseItemClickRenderer.prototype, "BaseItemClickRenderer");
var BaseUIComponent = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.initialized = !1,
        e.once(eui.UIEvent.COMPLETE, e.createComplete, e),
        e.allbindButton = {},
        e
    }
    return __extends(e, t),
    e.prototype.resize = function() {}
    ,
    e.prototype.childrenCreated = function() {}
    ,
    e.prototype.createComplete = function(t) {
        this.width = App.stageW,
        this.height = App.stageH,
        this.initialized = !0,
        this.setLanguage()
    }
    ,
    e.prototype.setLanguage = function() {}
    ,
    e.prototype.unbindButton = function(t, e) {
        void 0 === e && (e = !0),
        t && (t.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this),
        e && this.allbindButton && delete this.allbindButton[t.hashCode])
    }
    ,
    e.prototype.bindButton = function(t, e) {
        void 0 === e && (e = !1),
        t && (t.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this),
        e && (t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this),
        t.addEventListener(egret.TouchEvent.TOUCH_END, this.touchRelease, this),
        t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchRelease, this)),
        this.allbindButton[t.hashCode] = t)
    }
    ,
    e.prototype.bindButtons = function(t, e) {
        void 0 === e && (e = !1);
        for (var i = t.length, n = 0; i > n; n++)
            this.bindButton(t[n], e)
    }
    ,
    e.prototype.touchBegin = function(t) {
        var e = t.currentTarget;
        e.scaleX = e.scaleY = .9
    }
    ,
    e.prototype.touchRelease = function(t) {
        var e = t.currentTarget;
        e.scaleX = e.scaleY = 1
    }
    ,
    e.prototype.touchBindButtonHandler = function(t) {}
    ,
    e.prototype.removeFromParent = function(t) {
        void 0 === t && (t = !1),
        this.parent && this.parent.removeChild(this),
        t && this.dispose()
    }
    ,
    e.prototype.touchHandler = function(t) {
        var e = t.currentTarget;
        this.touchBindButtonHandler(e)
    }
    ,
    e.prototype.dispose = function() {
        for (var t in this.allbindButton)
            this.unbindButton(this.allbindButton[t], !1);
        this.allbindButton = {},
        this.removeEventListener(eui.UIEvent.COMPLETE, this.createComplete, this)
    }
    ,
    e
}(DComponent);
__reflect(BaseUIComponent.prototype, "BaseUIComponent", ["IResize"]);
var ViewConst;
!function(t) {
    t[t.Loading = 1e4] = "Loading",
    t[t.Login = 10001] = "Login",
    t[t.Register = 10002] = "Register",
    t[t.BindTixian = 10003] = "BindTixian",
    t[t.BindTixian2 = 10004] = "BindTixian2",
    t[t.BindMobile = 10005] = "BindMobile",
    t[t.TixianRecord = 10006] = "TixianRecord",
    t[t.RechargeRecord = 10007] = "RechargeRecord",
    t[t.Tlkaijiang = 10008] = "Tlkaijiang",
    t[t.redpackInfoWithdraw = 10009] = "redpackInfoWithdraw",
    t[t.Home = 10010] = "Home",
    t[t.Test = 10011] = "Test",
    t[t.Xiazhu = 10012] = "Xiazhu",
    t[t.Xiazhu2 = 10013] = "Xiazhu2",
    t[t.Xiazhu3 = 10014] = "Xiazhu3",
    t[t.Xiazhu4 = 10015] = "Xiazhu4",
    t[t.Tzrecord = 10016] = "Tzrecord",
    t[t.Tjrecord = 10017] = "Tjrecord",
    t[t.Select = 10018] = "Select",
    t[t.Index = 10019] = "Index",
    t[t.Index2 = 10020] = "Index2",
    t[t.Index3 = 10021] = "Index3",
    t[t.Index4 = 10022] = "Index4",
    t[t.Touzhu = 10023] = "Touzhu",
    t[t.Feichuan = 10024] = "Feichuan",
    t[t.Jingong = 10025] = "Jingong",
    t[t.Activity = 10026] = "Activity",
    t[t.RechargeActivity = 10027] = "RechargeActivity",
    t[t.SelectArea = 10028] = "SelectArea",
    t[t.Me = 10029] = "Me",
    t[t.Recharge = 10030] = "Recharge",
    t[t.RechargeInfo = 10031] = "RechargeInfo",
    t[t.RechargeInfo2 = 10032] = "RechargeInfo2",
    t[t.Tixian = 10033] = "Tixian",
    t[t.XiaJiZhuanZhang = 10034] = "XiaJiZhuanZhang",
    t[t.Result = 10035] = "Result",
    t[t.GerenReport = 10036] = "GerenReport",
    t[t.ModifyRate = 10037] = "ModifyRate",
    t[t.ModifyFenhong = 10038] = "ModifyFenhong",
    t[t.Report = 10039] = "Report",
    t[t.ZiJinMiMa = 10040] = "ZiJinMiMa",
    t[t.DengLuMiMa = 10041] = "DengLuMiMa",
    t[t.XiazhuRecord = 10042] = "XiazhuRecord",
    t[t.XiaoFeiJiLu = 10043] = "XiaoFeiJiLu",
    t[t.TanXianJiLu = 10044] = "TanXianJiLu",
    t[t.ZhangBianMingXi = 10045] = "ZhangBianMingXi",
    t[t.GameGuiZe = 10046] = "GameGuiZe",
    t[t.XiaoXiList = 10047] = "XiaoXiList",
    t[t.XiaoXiDetail = 10048] = "XiaoXiDetail",
    t[t.Tuiguang = 10049] = "Tuiguang",
    t[t.Add_huiyuan = 10050] = "Add_huiyuan",
    t[t.Add_daili = 10051] = "Add_daili",
    t[t.Daili_fenhong = 10052] = "Daili_fenhong",
    t[t.Select_date = 10053] = "Select_date",
    t[t.Select_Face = 10054] = "Select_Face",
    t[t.ACCOUNT_INFO = 10055] = "ACCOUNT_INFO",
    t[t.ACCOUNT_INFO2 = 10056] = "ACCOUNT_INFO2",
    t[t.Game = 10057] = "Game",
    t[t.Kj34Time = 10058] = "Kj34Time",
    t[t.Rule = 10059] = "Rule"
}(ViewConst || (ViewConst = {}));
var LayerManager = function() {
    function t() {}
    return t.UI_Main = new BaseEuiLayer,
    t.UI_Popup = new BaseEuiLayer,
    t
}();
__reflect(LayerManager.prototype, "LayerManager");
var CookieManager = function() {
    function t() {}
    return t.write = function(e, i) {
        var n = t.COOKIE_NAME + e.toString();
        egret.localStorage.setItem(n, i.toString())
    }
    ,
    t.read = function(e) {
        var i = t.COOKIE_NAME + e.toString();
        return egret.localStorage.getItem(i)
    }
    ,
    t.remove = function(e) {
        var i = t.COOKIE_NAME + e.toString();
        egret.localStorage.removeItem(i)
    }
    ,
    t.clear = function() {
        egret.localStorage.clear()
    }
    ,
    t.getBoolean = function(e) {
        var i = t.read(e);
        return i ? "true" == i ? !0 : !1 : null
    }
    ,
    t.getNumber = function(e) {
        var i = t.read(e);
        return i ? Number(i) : null
    }
    ,
    t.COOKIE_NAME = "kugou",
    t
}();
__reflect(CookieManager.prototype, "CookieManager");
var GameEventManager = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }
    return __extends(e, t),
    e.getInstance = function() {
        return this._instance || (this._instance = new e)
    }
    ,
    e.addEvent = function(t, i, n) {
        e.getInstance().addEventListener(t, i, n)
    }
    ,
    e.removeEvent = function(t, i, n) {
        e.getInstance().removeEventListener(t, i, n)
    }
    ,
    e.dispatchEvent = function(t, i) {
        void 0 === i && (i = null),
        e.getInstance().dispatchEvent(new DEvent(t,i))
    }
    ,
    e._instance = null,
    e.COMPLETE = "complete",
    e.SELECTED = "selected",
    e.UPDATE_USER_AVATAR = "UPDATE_USER_AVATAR",
    e.UPDATE_USER_GOLD = "update_user_gold",
    e.UPDATE_USER_DIAMOND = "update_user_diamond",
    e.UPDATE_USER_LEVEL = "update_user_level",
    e.UPDATE_USER_NAME = "update_user_name",
    e.UPDATE_USER_CASHOUT = "UPDATE_USER_CASHOUT",
    e.SOCKET_CONNECTED = "socket_connected",
    e.LOGIN_SUCCESS = "login_success",
    e.BIND_OK = "BIND_OK",
    e.CHANGE_ACCOUNT = "change_account",
    e.BACK_TO_LOGIN = "back_to_login",
    e.SELECT_MONTH = "SELECT_MONTH",
    e.SELECT_DATE = "SELECT_DATE",
    e.SELECT_BANK = "SELECT_BANK",
    e.UPDATE_RATE = "UPDATE_RATE",
    e.SHOW_MEMBER_LIST = "SHOW_MEMBER_LIST",
    e.SHOW_MEMBER_LIST2 = "SHOW_MEMBER_LIST2",
    e.UPDATE_USER_AMTPROFIT = "UPDATE_USER_AMTPROFIT",
    e.UPDATE_ALIPAY = "UPDATE_ALIPAY",
    e.GO_HALL = "gohall",
    e.UPDATE_Fenhong = "UPDATE_Fenhong",
    e
}(egret.EventDispatcher);
__reflect(GameEventManager.prototype, "GameEventManager");
var NativeManager = function() {
    function t() {}
    return t.init = function() {
        egret.ExternalInterface.addCallback("sendToJS", this.sendToJSResponse)
    }
    ,
    t.sendToJSResponse = function(t) {
        var e = JSON.parse(t)
          , i = e.type
          , n = e.data;
        switch (Log.trace("message from native::type = " + i + "data=" + n),
        Number(i)) {
        case 6:
            break;
        case 7:
            break;
        case 4:
        }
    }
    ,
    t.shock = function() {
        var t = 2;
        egret.ExternalInterface.call("shakePhone", t.toString())
    }
    ,
    t.openurl = function(t) {}
    ,
    t.nativeCall = function(t, e) {
        void 0 === e && (e = null);
        var i = {
            type: t,
            data: null == e ? "" : e
        };
        egret.ExternalInterface.call("sendToNative", JSON.stringify(i))
    }
    ,
    t.call = function(t, e) {
        egret.ExternalInterface.call(t, e)
    }
    ,
    t.callJs = function(t) {
        if (null == window[t])
            return null;
        var e = window[t]();
        return e
    }
    ,
    t
}();
__reflect(NativeManager.prototype, "NativeManager");
var SoundManager = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._isMusicOn = !0,
        e._isSoundOn = !0,
        e._bgmVoice = .5,
        e._currentSoundChannel = null,
        e._currentSoundName = "",
        e._soundVoice = .5,
        e._soundChannels = [],
        e
    }
    return __extends(e, t),
    Object.defineProperty(e, "instance", {
        get: function() {
            return null == this._instance && (this._instance = new e),
            this._instance
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "musicVolume", {
        get: function() {
            return this._bgmVoice
        },
        set: function(t) {
            this._bgmVoice = t,
            0 >= t ? this.isMusicOn = !1 : this.isMusicOn = !0
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "soundVolume", {
        get: function() {
            return this._soundVoice
        },
        set: function(t) {
            this._soundVoice = t,
            0 >= t ? this.isSoundOn = !1 : this.isSoundOn = !0
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.playMusic = function(t) {
        this.stopMusic(),
        this._bgSound = RES.getRes(t),
        this._bgSound && (this._bgSoundChannel = this._bgSound.play(0, 0),
        this._bgSoundChannel.volume = this._bgmVoice)
    }
    ,
    Object.defineProperty(e.prototype, "isMusicOn", {
        get: function() {
            return this._isMusicOn
        },
        set: function(t) {
            this._isMusicOn = t,
            this._isMusicOn ? (this._bgmVoice = .5,
            this._bgSoundChannel && (this._bgSoundChannel.volume = this._bgmVoice)) : (this._bgmVoice = 0,
            this._bgSoundChannel && (this._bgSoundChannel.volume = 0))
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "isSoundOn", {
        get: function() {
            return this._isSoundOn
        },
        set: function(t) {
            this._isSoundOn = t,
            this._isSoundOn ? this._soundVoice = .5 : this._soundVoice = 0
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.playSound = function(t, e, i) {
        if (void 0 === e && (e = ""),
        void 0 === i && (i = -1),
        this._isSoundOn) {
            var n = t
              , r = App.GlobalData.cdn + "resource/assets/sounds/sound/" + n + ".mp3";
            console.log("sound url = " + r);
            var o = new egret.Sound;
            o.addEventListener(egret.Event.COMPLETE, this.onLoadSoundComplete, this),
            o.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this),
            o.load(r)
        }
    }
    ,
    e.prototype.onLoadError = function(t) {}
    ,
    e.prototype.playSoundByUrl = function(t) {}
    ,
    e.prototype.onLoadSoundComplete = function(t) {
        var e = t.target;
        this._currentSoundChannel = e.play(0, 1),
        this._currentSoundChannel.volume = this._soundVoice,
        this._currentSoundChannel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this),
        this._currentSoundChannel.addEventListener(egret.Event.COMPLETE, this.onLoadSoundComplete, this),
        this._currentSoundChannel.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this)
    }
    ,
    e.prototype.onSoundComplete = function(t) {
        this.dispatchEvent(new DEvent(egret.Event.SOUND_COMPLETE))
    }
    ,
    e.prototype.stopSound = function() {
        null != this._currentSoundChannel && this._currentSoundChannel.stop(),
        this._currentSoundChannel = null
    }
    ,
    e.prototype.stopMusic = function() {
        null != this._bgSoundChannel && this._bgSoundChannel.stop(),
        this._bgSoundChannel = null
    }
    ,
    e.S_CHI = 0,
    e.S_PENG = 1,
    e.S_GANG = 2,
    e.S_TING = 3,
    e.S_HU = 4,
    e.S_ZIMO = 7,
    e.S_FANGPAO = 88,
    e.S_BUHUA = 36,
    e.S_LIUJU = 37,
    e.CHAT_PREFIX = "urgeSound",
    e.CARD_PREFIX = "sound",
    e.ACT_PREFIX = "actSound",
    e.GAME_SOUND = "gameSound",
    e
}(egret.EventDispatcher);
__reflect(SoundManager.prototype, "SoundManager");
var TimerManager = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._handlers = new Array,
        e._delHandlers = new Array,
        e._currTime = egret.getTimer(),
        e._currFrame = 0,
        e._count = 0,
        e._timeScale = 1,
        egret.Ticker.getInstance().register(e.onEnterFrame, e),
        e
    }
    return __extends(e, t),
    e.prototype.setTimeScale = function(t) {
        this._timeScale = t
    }
    ,
    e.prototype.onEnterFrame = function() {
        this._currFrame++,
        this._currTime = egret.getTimer(),
        App.DebugUtils.start("TimerManager:");
        for (var t = 0; t < this._count; t++) {
            var e = this._handlers[t]
              , i = e.userFrame ? this._currFrame : this._currTime;
            i >= e.exeTime && (App.DebugUtils.start(e.method.toString()),
            e.method.call(e.methodObj, (this._currTime - e.dealTime) * this._timeScale),
            App.DebugUtils.stop(e.method.toString()),
            e.dealTime = this._currTime,
            e.exeTime += e.delay,
            e.repeat || (e.repeatCount > 1 ? e.repeatCount-- : (e.complateMethod && e.complateMethod.apply(e.complateMethodObj),
            this._delHandlers.push(e))))
        }
        for (; this._delHandlers.length; ) {
            var e = this._delHandlers.pop();
            this.remove(e.method, e.methodObj)
        }
        App.DebugUtils.stop("TimerManager:")
    }
    ,
    e.prototype.create = function(t, e, i, n, r, o, s) {
        if (!(0 > e || 0 > i || null == n)) {
            this.remove(n, r);
            var a = ObjectPool2.pop("TimerHandler");
            a.userFrame = t,
            a.repeat = 0 == i,
            a.repeatCount = i,
            a.delay = e,
            a.method = n,
            a.methodObj = r,
            a.complateMethod = o,
            a.complateMethodObj = s,
            a.exeTime = e + (t ? this._currFrame : this._currTime),
            a.dealTime = this._currTime,
            this._handlers.push(a),
            this._count++
        }
    }
    ,
    e.prototype.doTimer = function(t, e, i, n, r, o) {
        void 0 === r && (r = null),
        void 0 === o && (o = null),
        this.create(!1, t, e, i, n, r, o)
    }
    ,
    e.prototype.doFrame = function(t, e, i, n, r, o) {
        void 0 === r && (r = null),
        void 0 === o && (o = null),
        this.create(!0, t, e, i, n, r, o)
    }
    ,
    Object.defineProperty(e.prototype, "count", {
        get: function() {
            return this._count
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.remove = function(t, e) {
        for (var i = 0; i < this._count; i++) {
            var n = this._handlers[i];
            if (n.method == t && n.methodObj == e) {
                this._handlers.splice(i, 1),
                ObjectPool2.push(n),
                this._count--;
                break
            }
        }
    }
    ,
    e.prototype.removeAll = function(t) {
        for (var e = 0; e < this._count; e++) {
            var i = this._handlers[e];
            i.methodObj == t && (this._handlers.splice(e, 1),
            ObjectPool2.push(i),
            this._count--,
            e--)
        }
    }
    ,
    e.prototype.isExists = function(t, e) {
        for (var i = 0; i < this._count; i++) {
            var n = this._handlers[i];
            if (n.method == t && n.methodObj == e)
                return !0
        }
        return !1
    }
    ,
    e
}(BaseClass);
__reflect(TimerManager.prototype, "TimerManager");
var TimerHandler = function() {
    function t() {
        this.delay = 0,
        this.repeatCount = 0,
        this.exeTime = 0,
        this.dealTime = 0
    }
    return t.prototype.clear = function() {
        this.method = null,
        this.methodObj = null,
        this.complateMethod = null,
        this.complateMethodObj = null
    }
    ,
    t
}();
__reflect(TimerHandler.prototype, "TimerHandler");
var ControllerManager = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._modules = {},
        e
    }
    return __extends(e, t),
    e.prototype.clear = function() {
        this._modules = {}
    }
    ,
    e.prototype.register = function(t, e) {
        this.isExists(t) || (this._modules[t] = e)
    }
    ,
    e.prototype.unregister = function(t) {
        this.isExists(t) && (this._modules[t] = null,
        delete this._modules[t])
    }
    ,
    e.prototype.isExists = function(t) {
        return null != this._modules[t]
    }
    ,
    e.prototype.applyFunc = function(t, e) {
        for (var i = [], n = 2; n < arguments.length; n++)
            i[n - 2] = arguments[n];
        var r = this._modules[t];
        if (r) {
            for (var o = [], s = 1; s < arguments.length; s++)
                o[s - 1] = arguments[s];
            return r.applyFunc.apply(r, o)
        }
        return Log.trace("模块" + t + "不存在"),
        null
    }
    ,
    e.prototype.getControllerModel = function(t) {
        var e = this._modules[t];
        return e ? e.getModel() : null
    }
    ,
    e
}(BaseClass);
__reflect(ControllerManager.prototype, "ControllerManager");
var ViewManager = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._views = {},
        e._opens = [],
        e
    }
    return __extends(e, t),
    e.prototype.clear = function() {
        this.closeAll(),
        this._views = {}
    }
    ,
    e.prototype.register = function(t, e) {
        null != e && (this._views[t] || (this._views[t] = e))
    }
    ,
    e.prototype.unregister = function(t) {
        this._views[t] && (this._views[t] = null,
        delete this._views[t])
    }
    ,
    e.prototype.destroy = function(t, e) {
        void 0 === e && (e = null);
        var i = this.getView(t);
        i && (this.unregister(t),
        i.destroy(),
        i = null),
        this.register(t, e)
    }
    ,
    e.prototype.open = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
        var n = this.getView(t);
        return null == n ? void Log.trace("UI_" + t + "不存在") : n.isShow() ? (n.open.apply(n, e),
        n) : (n.isInit() ? (n.addToParent(),
        n.open.apply(n, e)) : n.loadResource(function() {
            n.setVisible(!1),
            n.addToParent()
        }
        .bind(this), function() {
            n instanceof BaseEuiView || (n.initUI(),
            n.initData()),
            n.open.apply(n, e),
            n.setVisible(!0)
        }
        .bind(this)),
        this._opens.push(t),
        n)
    }
    ,
    e.prototype.close = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
        if (this.isShow(t)) {
            var n = this.getView(t);
            if (null == n)
                return void this._opens.splice(r, 1);
            var r = this._opens.indexOf(t);
            t >= 0 && this._opens.splice(r, 1),
            n.removeFromParent(),
            n.close.apply(n, e)
        }
    }
    ,
    e.prototype.closeView = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
        for (var n = Object.keys(this._views), r = 0, o = n.length; o > r; r++) {
            var s = parseInt(n[r]);
            if (this._views[s] == t)
                return void this.close(s, e)
        }
    }
    ,
    e.prototype.getView = function(t) {
        return this._views[t]
    }
    ,
    e.prototype.closeAll = function() {
        for (; this._opens.length; )
            this.close(this._opens[0])
    }
    ,
    e.prototype.currOpenNum = function() {
        return this._opens.length
    }
    ,
    e.prototype.isShow = function(t) {
        return -1 != this._opens.indexOf(t)
    }
    ,
    e
}(BaseClass);
__reflect(ViewManager.prototype, "ViewManager");
var LoadingUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "LoadingSkin",
        e.name = "LoadingUI",
        e.touchEnabled = e.touchChildren = !1,
        e
    }
    return __extends(e, t),
    e.prototype.showLoading = function(t) {}
    ,
    e.prototype.createComplete = function(e) {
        t.prototype.createComplete.call(this, e)
    }
    ,
    e.prototype.onProgress = function(t, e) {
        Math.floor(t / e * 100)
    }
    ,
    e
}(BaseUIComponent);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var BaseModel = function() {
    function t(t) {
        this._controller = t,
        this._controller.setModel(this)
    }
    return t
}();
__reflect(BaseModel.prototype, "BaseModel");
var BaseProxy = function() {
    function t(t) {
        this._controller = t
    }
    return t.prototype.applyFunc = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
        return this._controller.applyFunc.apply(this._controller, arguments)
    }
    ,
    t.prototype.applyControllerFunc = function(t, e) {
        for (var i = [], n = 2; n < arguments.length; n++)
            i[n - 2] = arguments[n];
        return this._controller.applyControllerFunc.apply(this._controller, arguments)
    }
    ,
    t.prototype.receiveServerMsg = function(t, e, i) {}
    ,
    t.prototype.receiveServerMsgOnce = function(t, e, i) {
        var n = function(r) {
            this.removeServerMsg(t, n, this),
            e.apply(i, r)
        };
        this.receiveServerMsg(t, n, this)
    }
    ,
    t.prototype.receiveServerHttpUpdateMsg = function(t, e, i) {
        this.receiveServerMsg(t + "_HttpUpdate", e, i)
    }
    ,
    t.prototype.receiveServerHttpUpdateMsgOnce = function(t, e, i) {
        this.receiveServerMsgOnce(t + "_HttpUpdate", e, i)
    }
    ,
    t.prototype.removeServerMsg = function(t, e, i) {}
    ,
    t.prototype.removeServerHttpUpdateMsg = function(t, e, i) {
        this.removeServerMsg(t + "_HttpUpdate", e, i)
    }
    ,
    t.prototype.sendSocketMsg = function(t, e, i) {}
    ,
    t.prototype.sendHttpMsg = function(t, e) {
        void 0 === e && (e = null)
    }
    ,
    t.prototype.getURLVariables = function(t, e) {
        var i = t.split(".")
          , n = {};
        n.mod = i[0],
        n["do"] = i[1],
        null != e && (n.p = e);
        var r = JSON.stringify(n)
          , o = new egret.URLVariables("data=" + r);
        return o
    }
    ,
    t
}();
__reflect(BaseProxy.prototype, "BaseProxy");
var Main = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e._gameApp = null,
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        var e = this;
        t.prototype.createChildren.call(this),
        egret.lifecycle.addLifecycleListener(function(t) {}),
        egret.lifecycle.onPause = function() {
            egret.ticker.pause()
        }
        ,
        egret.lifecycle.onResume = function() {
            egret.ticker.resume();
            var t = App.ViewManager.getView(ViewConst.Index3);
            if (t && t.stage) {
                App.Socket.close(),
                App.MessageCenter.addListener(SocketConst.SOCKET_CONNECT, e.onSocketConnected, e),
                App.Socket.connect();
                var i = new CommandVo;
                i.action = Http.playerinfo,
                i.params = {},
                App.Http.send(i, e, function(t) {
                    null != t && (MyUserInfo.getInstance().balance = t.balance)
                })
            }
        }
        ,
        egret.Capabilities.isMobile || (this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL,
        this.stage.orientation = "auto"),
        egret.MainContext.instance.stage.maxTouches = 1,
        App.init(this, this.stage),
        NativeManager.init(),
        eui.Label.default_fontFamily = egret.TextField.default_fontFamily = App.DEFAULT_FONT_NAME,
        egret.ImageLoader.crossOrigin = "anonymous";
        var i = new AssetAdapter;
        egret.registerImplementation("eui.IAssetAdapter", i),
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter),
        this.runGame()["catch"](function(t) {
            console.log(t)
        })
    }
    ,
    e.prototype.onSocketConnected = function() {
        var t = App.ViewManager.getView(ViewConst.Index3);
        t && t.stage && t.refresh()
    }
    ,
    e.prototype.runGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                case 0:
                    return [4, this.loadResource()];
                case 1:
                    return t.sent(),
                    [2]
                }
            })
        })
    }
    ,
    e.prototype.createGameScene = function() {
        this._gameApp = new GameApp,
        this._gameApp.start(),
        this.stage.removeChild(this.loadingView),
        this.loadingView = null;
        egret.ExternalInterface.addCallback("getParamResult", function(t) {
            App.shareCode = t
        }),
        NativeManager.call("getParam", "")
    }
    ,
    e.prototype.quitConfirm = function() {
        NativeManager.call("exitGame", "exitGame")
    }
    ,
    e.prototype.loadResource = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 5, , 6]),
                    [4, RES.loadConfig("resource/default.res.json", "resource/")];
                case 1:
                    return e.sent(),
                    [4, this.loadTheme()];
                case 2:
                    return e.sent(),
                    [4, RES.loadGroup("loading", 0)];
                case 3:
                    return e.sent(),
                    NativeManager.call("egret_init_complete", "egret_init_complete"),
                    this.loadingView = new LoadingUI,
                    this.stage.addChild(this.loadingView),
                    [4, this.loadResource2(null)];
                case 4:
                    return e.sent(),
                    [3, 6];
                case 5:
                    return t = e.sent(),
                    console.error(t),
                    [3, 6];
                case 6:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.loadResource2 = function(t) {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(e) {
                switch (e.label) {
                case 0:
                    return e.trys.push([0, 2, , 3]),
                    [4, RES.loadGroup("preload", 0, this.loadingView)];
                case 1:
                    return e.sent(),
                    egret.ExternalInterface.addCallback("getDeviceIdResult", function(t) {
                        var e = t.split("|")[0]
                          , i = t.split("|")[1];
                        GameApp.deviceId = e,
                        GameApp.clientIp = i
                    }),
                    NativeManager.call("getDeviceId", ""),
                    App.initConfigData(),
                    this.getInitConfig(),
                    [3, 3];
                case 2:
                    return t = e.sent(),
                    console.error(t),
                    [3, 3];
                case 3:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.getInitConfig = function() {
        var t = this;
        this.loadingView.showLoading(!1);
        var e = new CommandVo;
        e.action = Http.init,
        App.Http.send(e, this, function(e) {
            if (null != e) {
                var i = e.link
                  , n = e.packageUrl;
                App.downloadUrl = n,
                App.kefuUrl = i,
                t.createGameScene()
            }
        }, !1)
    }
    ,
    e.prototype.loadTheme = function() {
        var t = this;
        return new Promise(function(e, i) {
            var n = new eui.Theme("resource/default.thm.json",t.stage);
            n.addEventListener(eui.UIEvent.COMPLETE, function() {
                e()
            }, t)
        }
        )
    }
    ,
    e
}(eui.UILayer);
__reflect(Main.prototype, "Main");
var BaseSpriteView = function(t) {
    function e(e, i) {
        var n = t.call(this) || this;
        return n._resources = null,
        n._controller = e,
        n._myParent = i,
        n._isInit = !1,
        App.stage.addEventListener(egret.Event.RESIZE, n.onResize, n),
        n
    }
    return __extends(e, t),
    e.prototype.setResources = function(t) {
        this._resources = t
    }
    ,
    Object.defineProperty(e.prototype, "myParent", {
        get: function() {
            return this._myParent
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.isInit = function() {
        return this._isInit
    }
    ,
    e.prototype.applyFunc = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
        return this._controller.applyFunc.apply(this._controller, arguments)
    }
    ,
    e.prototype.applyControllerFunc = function(t, e) {
        for (var i = [], n = 2; n < arguments.length; n++)
            i[n - 2] = arguments[n];
        return this._controller.applyControllerFunc.apply(this._controller, arguments)
    }
    ,
    e.prototype.isShow = function() {
        return null != this.stage && this.visible
    }
    ,
    e.prototype.addToParent = function() {
        this._myParent.addChild(this)
    }
    ,
    e.prototype.removeFromParent = function() {}
    ,
    e.prototype.initUI = function() {
        this._isInit = !0
    }
    ,
    e.prototype.initData = function() {}
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e]
    }
    ,
    e.prototype.close = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e]
    }
    ,
    e.prototype.destroy = function() {
        this._controller = null,
        this._myParent = null,
        this._resources = null
    }
    ,
    e.prototype.onResize = function() {}
    ,
    e.prototype.loadResource = function(t, e) {
        this._resources && this._resources.length > 0 || (t(),
        e())
    }
    ,
    e.prototype.setVisible = function(t) {
        this.visible = t
    }
    ,
    e
}(egret.DisplayObjectContainer);
__reflect(BaseSpriteView.prototype, "BaseSpriteView", ["IBaseView"]);
var Http = function() {
    function t() {
        this._timerId = -1
    }
    return t.getInstance = function() {
        return null == t._instance && (t._instance = new t),
        t._instance
    }
    ,
    t.prototype.send = function(e, i, n, r) {
        function o() {
            console.log("请求超时，请重试..."),
            DataLoading.getInstance().hide(),
            egret.clearTimeout(this._timerId)
        }
        function s(e) {
            DataLoading.getInstance().hide(),
            egret.clearTimeout(this._timerId);
            var r = e.target;
            r.removeEventListener(egret.Event.COMPLETE, s, this),
            r.removeEventListener(egret.IOErrorEvent.IO_ERROR, h, this);
            var o = r.response
              , l = JSON.parse(o.toString());
            console.log("receive http message", l, (new Date).getTime());
            var c = l.status
              , p = l.message;
            if (c != t.NORMAL)
                990 == c ? (AlertView.getInstance().setConfirmCallBack(a, this),
                AlertView.getInstance().show("账号已在别处登录，请重新登录！", AlertView.ALERT_MODE)) : SystemTips.show(p);
            else {
                var u = l.data;
                null == u ? SystemTips.show("数据异常，请重试") : null != n && n.apply(i, [u])
            }
        }
        function a() {}
        function h() {
            DataLoading.getInstance().hide(),
            egret.clearTimeout(this._timerId),
            l.removeEventListener(egret.Event.COMPLETE, s, this),
            l.removeEventListener(egret.IOErrorEvent.IO_ERROR, h, this),
            SystemTips.show("服务器维护中，请稍后再试")
        }
        void 0 === n && (n = null),
        void 0 === r && (r = !0);
        var l = new egret.HttpRequest;
        l.responseType = egret.HttpResponseType.TEXT;
        var c = ""
          , p = e.action;
        c = -1 != p.indexOf("http://") ? e.action : App.isDebug ? App.GlobalData.httpDebug + p : App.GlobalData.http + p;
        var u = this.rebuild(e);
        console.log("send http request::url = " + c + u),
        l.open(c, egret.HttpMethod.POST),
        l.setRequestHeader("Content-Type", "application/json;charset=utf-8"),
        l.send(u),
        l.addEventListener(egret.Event.COMPLETE, s, this),
        l.addEventListener(egret.IOErrorEvent.IO_ERROR, h, this),
        r && DataLoading.getInstance().show(),
        this._timerId = egret.setTimeout(o, this, t.REQUEST_TIMEOUT)
    }
    ,
    t.prototype.rebuild2 = function(t) {
        var e = App.version;
        App.isDebug && (e = Math.random().toString());
        var i = t.params
          , n = "";
        if (i)
            for (var r in i)
                n += "&" + r + "=" + i[r];
        return n = n.substring(1)
    }
    ,
    t.prototype.rebuild = function(e) {
        var i = e.params;
        return i = i || {},
        -1 != GameApp.gameId && (i.gameId = GameApp.gameId),
        "" != t.token && (i.token = t.token,
        i.sessionToken = t.token),
        JSON.stringify(i)
    }
    ,
    t.NORMAL = 0,
    t.token = "",
    t.LOGIN = "player/login",
    t.loginPassword = "player/loginPassword",
    t.accountPassword = "player/accountPassword",
    t.register = "player/register",
    t.sendSms = "player/sendSms",
    t.addPlayer = "player/addPlayer",
    t.addAgent = "agent/addAgent",
    t.agentLink = "agent/link",
    t.entryArea = "player/entryArea",
    t.rechargeList = "capital/account/rechargeList",
    t.accountTransfer = "capital/account/transfer",
    t.playerBetHistory = "ws/playerBetHistory",
    t.gameHistory = "public/gameList",
    t.agentCenter = "agent/agentCenter",
    t.flowTransferList = "capital/flowTransfer/list",
    t.agentReport = "agent/agentReport",
    t.changePointRate = "agent/changePointRate",
    t.alipayWithdraw = "capital/account/alipyWithdraw",
    t.withdrawList = "capital/account/withdrawList",
    t.withdrawComminsion = "capital/account/withdrawComminsion",
    t.publicNotice = "public/notice",
    t.publicGameList = "public/gameList",
    t.agentInfo = "agent/agentInfo",
    t.version = "public/version",
    t.init = "public/init",
    t.rechargeInfo = "capital/getRechargeInfo",
    t.bindMobile = "player/bindMobile",
    t.myExpert = "plan/myExpert",
    t.changeHeadImg = "player/changeHeadImg",
    t.bindAccount = "player/bindAccount",
    t.getwithdrawInfo = "capital/getWithdrawInfo",
    t.withdrawAward = "capital/account/withdrawAward",
    t.playerinfo = "player/playerInfo",
    t.openHis = "public/openHis",
    t.gameHistory2 = "ws/gameHistory",
    t.recharegSucees = "game/recharegSucees",
    t.getRedpackInfo = "capital/getRedpackInfo",
    t.redpackInfoWithdraw = "capital/redpackInfoWithdraw",
    t.playerGameInfo = "player/playerGameInfo",
    t.playerBetHistory2 = "ws/playerBetGameHistory",
    t.REQUEST_TIMEOUT = 8e3,
    t._instance = null,
    t
}();
__reflect(Http.prototype, "Http");
var CommandVo = function() {
    function t(t, e) {
        void 0 === t && (t = ""),
        void 0 === e && (e = null),
        this.action = "",
        this.params = {},
        this.action = t,
        this.params = e
    }
    return t
}();
__reflect(CommandVo.prototype, "CommandVo");
var DebugPlatform = function() {
    function t() {}
    return t.prototype.getUserInfo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, {
                    nickName: "username"
                }]
            })
        })
    }
    ,
    t.prototype.login = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2]
            })
        })
    }
    ,
    t
}();
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]),
window.platform || (window.platform = new DebugPlatform);
var ByteArrayMsgByProtobuf = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.decode = function(t) {
        var e = t.readShort();
        if (t.bytesAvailable >= e + 8) {
            var i = t.readInt()
              , n = t.readInt()
              , r = new egret.ByteArray;
            t.readBytes(r, 0, e);
            var o = {};
            return o.id = n,
            o.sid = i,
            o.body = App.MsgFactory.decode(n, r.buffer),
            o
        }
        return null
    }
    ,
    e.prototype.encode = function(t) {}
    ,
    e
}(ByteArrayMsg);
__reflect(ByteArrayMsgByProtobuf.prototype, "ByteArrayMsgByProtobuf");
var HeartMgr = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.invalidTime = 0,
        e.sumTime = 0,
        e.timeOut = 50,
        e.pingRate = 10,
        e
    }
    return __extends(e, t),
    e.prototype.init = function() {
        this.sendHeart = !0,
        this.timer || (this.timer = new egret.Timer(1e3)),
        this.startHeart || (this.timer.hasEventListener(egret.TimerEvent.TIMER) || this.timer.addEventListener(egret.TimerEvent.TIMER, this.doTimer, this),
        this.timer.start(),
        this.startHeart = !0),
        App.MessageCenter.removeListener(SocketConst.HEART_BEAT, this.heart_beat, this),
        App.MessageCenter.addListener(SocketConst.HEART_BEAT, this.heart_beat, this),
        this.doTimer()
    }
    ,
    e.prototype.heart_beat = function() {
        this.invalidTime = 0
    }
    ,
    e.prototype.pause = function() {
        this.sendHeart = !1,
        this.invalidTime = 0,
        this.sumTime = 0,
        this.timer && this.timer.stop()
    }
    ,
    e.prototype.resume = function() {
        this.sendHeart = !1,
        this.invalidTime = 0,
        this.sumTime = 0,
        this.timer && this.timer.start()
    }
    ,
    e.prototype.uninit = function() {
        this.startHeart = !1,
        this.sendHeart = !1,
        this.invalidTime = 0,
        this.sumTime = 0,
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.doTimer, this)
    }
    ,
    e.prototype.doTimer = function() {
        this.sendHeart && (this.invalidTime++,
        this.sumTime++,
        this.sumTime > this.pingRate && (this.send_ReqHeartbeat(),
        this.sumTime = 0),
        this.invalidTime >= this.timeOut && (egret.log("心跳超时"),
        this.sendHeart = !1))
    }
    ,
    e.prototype.send_ReqHeartbeat = function() {
        var t = {};
        t.cmd = SocketConst.HEART_BEAT,
        t.params = {};
        App.Socket.send(t, null, this)
    }
    ,
    e
}(BaseClass);
__reflect(HeartMgr.prototype, "HeartMgr");
var MsgFactory = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.registerAll = function() {}
    ,
    e.prototype.encode = function(t, e) {}
    ,
    e.prototype.decode = function(t, e) {}
    ,
    e
}(BaseClass);
__reflect(MsgFactory.prototype, "MsgFactory");
var Socket = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._needReconnect = !0,
        e._maxReconnectCount = 45,
        e._reconnectCount = 1,
        e._reconnectTime = 2e3,
        e._reconnecting = !1,
        e._reconnectTimeout = !1,
        e._startReconnect = !1,
        e._isConnected = !1,
        e
    }
    return __extends(e, t),
    Object.defineProperty(e.prototype, "isConnected", {
        get: function() {
            return this._isConnected
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.addEvents = function() {
        this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this),
        this._socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this),
        this._socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this),
        this._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this)
    }
    ,
    e.prototype.removeEvents = function() {
        this._socket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this),
        this._socket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this),
        this._socket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this),
        this._socket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this)
    }
    ,
    e.prototype.onSocketOpen = function() {
        this._reconnectCount = 1,
        this._reconnecting = !1,
        this._reconnectTimeout = !1,
        this._startReconnect = !1,
        this._isConnecting = !0,
        DataLoading.getInstance().hide(),
        this._connectFlag && this._needReconnect ? App.MessageCenter.dispatch(SocketConst.SOCKET_RECONNECT) : App.MessageCenter.dispatch(SocketConst.SOCKET_CONNECT),
        this._connectFlag = !0
    }
    ,
    e.prototype.onSocketClose = function() {
        console.log("onSocketClose"),
        this._isConnecting = !1,
        this._needReconnect ? this.reconnect() : App.MessageCenter.dispatch(SocketConst.SOCKET_CLOSE)
    }
    ,
    e.prototype.onSocketError = function() {
        console.log("onSocketError"),
        this._needReconnect ? this.reconnect() : App.MessageCenter.dispatch(SocketConst.SOCKET_NOCONNECT),
        this._isConnecting = !1
    }
    ,
    e.prototype.onReceiveMessage = function(t) {
        this._msg.receive(this._socket)
    }
    ,
    e.prototype.initServer = function(t, e, i, n) {
        this._host = t,
        this._port = e,
        this._url = i,
        this._msg = n
    }
    ,
    e.prototype.connect = function() {
        return App.DeviceUtils.IsHtml5 && !window.WebSocket ? void Log.trace("不支持WebSocket") : (this._socket = new egret.WebSocket,
        this._msg instanceof ByteArrayMsg ? this._socket.type = egret.WebSocket.TYPE_BINARY : this._socket.type = egret.WebSocket.TYPE_STRING,
        Log.trace("WebSocket: " + this._url),
        this.addEvents(),
        this._socket.connectByUrl(this._url),
        void DataLoading.getInstance().show("connect to the server ..."))
    }
    ,
    e.prototype.reconnect = function() {
        this._reconnectCount > this._maxReconnectCount && this._reconnecting || this._reconnectTimeout ? (this._reconnectCount = 1,
        this._reconnecting = !1,
        App.MessageCenter.dispatch(SocketConst.SOCKET_CLOSE)) : this._startReconnect && (this._startReconnect = !1),
        this._reconnecting || this._reconnectTimeout || this.isConnecting() || (DataLoading.getInstance().show("reconnect to the server ..."),
        this._reconnecting = !0,
        App.TimerManager.doTimer(this._reconnectTime, this._maxReconnectCount, function() {
            this.isConnecting() || (this._reconnectCount++,
            App.IsNetAvaliable && !this._startReconnect && (this._startReconnect = !0,
            App.MessageCenter.dispatch(SocketConst.SOCKET_START_RECONNECT),
            this.closeCurrentSocket(),
            this.connect()))
        }, this, function() {
            this.isConnecting() || (0 == this._startReconnect && App.MessageCenter.dispatch(SocketConst.SOCKET_CLOSE),
            this._reconnectTimeout = !0)
        }, this))
    }
    ,
    e.prototype.send = function(t, e, i) {
        t && (t.token = Http.token,
        t.gameId = GameApp.gameId.toString()),
        console.log("send socket data ", t, (new Date).getTime());
        try {
            this._socket.connected ? this._msg.send(this._socket, t, e, i) : this.reconnect()
        } catch (n) {
            this.reconnect()
        }
    }
    ,
    e.prototype.close = function() {
        this._connectFlag = !1,
        this.closeCurrentSocket()
    }
    ,
    e.prototype.closeCurrentSocket = function() {
        this.removeEvents(),
        this._socket.close(),
        this._socket = null,
        this._msg.resetSid(),
        this._isConnecting = !1
    }
    ,
    e.prototype.isConnecting = function() {
        return this._isConnecting
    }
    ,
    e.prototype.debugInfo = function(t) {
        App.MessageCenter.dispatch(SocketConst.SOCKET_DEBUG_INFO, t)
    }
    ,
    e
}(BaseClass);
__reflect(Socket.prototype, "Socket");
var SocketConst = function() {
    function t() {}
    return t.NORMAL = 0,
    t.LOGIN_INVALID = 199,
    t.PLAYER_BET = "10",
    t.MONSTER_SORT_31 = "31",
    t.TuiJianNum = "43",
    t.ChuGuai_52 = "52",
    t.F_54 = "54",
    t.PLAYER_BET_INFO = "12",
    t.GAME_HISTORY_21 = "21",
    t.MONSTER_LIST_30 = "30",
    t.NOTICE = "40",
    t.HEART_BEAT = "41",
    t.ENTRY_ROOM_42 = "42",
    t.StepInfo_50 = "50",
    t.GameStart_51 = "51",
    t.ReadyNext_53 = "53",
    t.GAME_RESULT = "54",
    t.SOCKET_CONNECT = "SOCKET_CONNECT",
    t.SOCKET_RECONNECT = "SOCKET_RECONNECT",
    t.SOCKET_START_RECONNECT = "SOCKET_START_RECONNECT",
    t.SOCKET_CLOSE = "SOCKET_CLOSE",
    t.SOCKET_DATA = "SOCKET_DATA",
    t.SOCKET_NOCONNECT = "SOCKET_NOCONNECT",
    t.SOCKET_DEBUG_INFO = "SOCKET_DEBUG_INFO",
    t
}();
__reflect(SocketConst.prototype, "SocketConst");
var ThemeAdapter = function() {
    function t() {}
    return t.prototype.getTheme = function(t, e, i, n) {
        function r(t) {
            e.call(n, t)
        }
        function o(e) {
            e.resItem.url == t && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, o, null),
            i.call(n))
        }
        var s = this;
        if ("undefined" != typeof generateEUI)
            egret.callLater(function() {
                e.call(n, generateEUI)
            }, this);
        else if ("undefined" != typeof generateEUI2)
            RES.getResByUrl("resource/gameEui.json", function(t, i) {
                window.JSONParseClass.setData(t),
                egret.callLater(function() {
                    e.call(n, generateEUI2)
                }, s)
            }, this, RES.ResourceItem.TYPE_JSON);
        else if ("undefined" != typeof generateJSON)
            if (t.indexOf(".exml") > -1) {
                var a = t.split("/");
                a.pop();
                var h = a.join("/") + "_EUI.json";
                generateJSON.paths[t] ? egret.callLater(function() {
                    e.call(n, generateJSON.paths[t])
                }, this) : RES.getResByUrl(h, function(i) {
                    window.JSONParseClass.setData(i),
                    egret.callLater(function() {
                        e.call(n, generateJSON.paths[t])
                    }, s)
                }, this, RES.ResourceItem.TYPE_JSON)
            } else
                egret.callLater(function() {
                    e.call(n, generateJSON)
                }, this);
        else
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, o, null),
            RES.getResByUrl(t, r, this, RES.ResourceItem.TYPE_TEXT)
    }
    ,
    t
}();
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var UTFMsgByJson = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.decode = function(t) {
        return JSON.parse(t)
    }
    ,
    e.prototype.encode = function(t) {
        return JSON.stringify(t)
    }
    ,
    e
}(UTFMsg);
__reflect(UTFMsgByJson.prototype, "UTFMsgByJson");
var App = function() {
    function t() {}
    return Object.defineProperty(t, "ControllerManager", {
        get: function() {
            return ControllerManager.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "ViewManager", {
        get: function() {
            return ViewManager.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "SceneManager", {
        get: function() {
            return SceneManager.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "StageUtils", {
        get: function() {
            return StageUtils.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "DebugUtils", {
        get: function() {
            return DebugUtils.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "DisplayUtils", {
        get: function() {
            return DisplayUtils.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "Socket", {
        get: function() {
            return Socket.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "Http", {
        get: function() {
            return Http.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "DeviceUtils", {
        get: function() {
            return DeviceUtils.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "TimerManager", {
        get: function() {
            return TimerManager.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }),
    t.IsNetAvaliable = function() {
        return navigator && 0 == navigator.onLine ? !1 : !0
    }
    ,
    Object.defineProperty(t, "ArrayUtils", {
        get: function() {
            return ArrayUtils.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "MessageCenter", {
        get: function() {
            return MessageCenter.getInstance(0)
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "MsgFactory", {
        get: function() {
            return MsgFactory.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }),
    t.initConfigData = function() {
        t.GlobalData = RES.getRes("config_json"),
        t.isDebug = t.GlobalData.isDebug,
        t.DebugUtils.isOpen(t.GlobalData.IsDebug),
        t.DebugUtils.setThreshold(5)
    }
    ,
    t.init = function(e, i, n) {
        void 0 === n && (n = null),
        t.root = e,
        t.stage = i,
        n && (t.isDebug = 1 == n.debug,
        t.version = n.version),
        t.stage.addEventListener(egret.Event.RESIZE, this.onStageSizeChanged, this, !1, Number.MAX_VALUE),
        this.onStageSizeChanged()
    }
    ,
    t.onStageSizeChanged = function(e) {
        void 0 === e && (e = null),
        t.stageW = t.stage.stageWidth,
        t.stageH = t.stage.stageHeight,
        t.halfStageW = t.stageW / 2,
        t.halfStageH = t.stageH / 2
    }
    ,
    t.objectPool = new ObjectPool,
    t.stageW = 750,
    t.stageH = 1334,
    t.designW = 750,
    t.designH = 1334,
    t.isDebug = !0,
    t.version = "v.0.0.1",
    t.shareCode = "",
    t.DEFAULT_FONT_NAME = "Microsoft YaHei",
    t.GlobalData = {
        http: "http://api.f628.xyz:8000/game/",
        httpDebug: "http://api.f628.xyz:8000/game/",
        isDebug: !0,
        SocketServer: "",
        SocketPort: "",
        SocketUrl: "",
        cdn: ""
    },
    t.payUrl = "http://",
    t.kefuUrl = "http://",
    t.downloadUrl = "http://baid.com",
    t.COLOR_CONFIG = {
        white: 16777215,
        milkWhite: 16511407,
        grayWhite: 13547170,
        yellow: 16765440,
        lightYellow: 16777164,
        orangeYellow: 16750848,
        orange: 16754689,
        red: 16711680,
        green: 194336,
        blue: 115966,
        grayBlue: 3101047,
        purple: 13369599,
        pink: 16715417,
        black: 3026221,
        golden: 16766720,
        lightPurple: 11242933
    },
    t
}();
__reflect(App.prototype, "App");
var AssetAdapter = function() {
    function t() {}
    return t.prototype.getAsset = function(t, e, i) {
        function n(n) {
            e.call(i, n, t)
        }
        if (RES.hasRes(t)) {
            var r = RES.getRes(t);
            r ? n(r) : RES.getResAsync(t, n, this)
        } else
            RES.getResByUrl(t, n, this, RES.ResourceItem.TYPE_IMAGE)
    }
    ,
    t
}();
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var BaseSpriteLayer = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.touchEnabled = !1,
        e
    }
    return __extends(e, t),
    e
}(egret.DisplayObjectContainer);
__reflect(BaseSpriteLayer.prototype, "BaseSpriteLayer");
var SceneManager = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._scenes = {},
        e
    }
    return __extends(e, t),
    e.prototype.clear = function() {
        var t = this._scenes[this._currScene];
        t && (t.onExit(),
        this._currScene = void 0),
        this._scenes = {}
    }
    ,
    e.prototype.register = function(t, e) {
        this._scenes[t] = e
    }
    ,
    e.prototype.runScene = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
        var n = this._scenes[t];
        if (null == n)
            return void Log.trace("场景" + t + "不存在");
        var r = this._scenes[this._currScene];
        r && r.onExit(),
        n.onEnter.apply(n, e),
        this._currScene = t
    }
    ,
    e.prototype.getCurrScene = function() {
        return this._currScene
    }
    ,
    e
}(BaseClass);
__reflect(SceneManager.prototype, "SceneManager");
var AllAsyncExecutor = function() {
    function t() {
        this._functions = new Array,
        this._complateNum = 0
    }
    return t.prototype.setCallBack = function(t, e) {
        this._callBack = t,
        this._callBackTarget = e
    }
    ,
    t.prototype.regist = function(t, e) {
        this._functions.push([t, e])
    }
    ,
    t.prototype.start = function() {
        App.ArrayUtils.forEach(this._functions, function(t) {
            t[0].call(t[1])
        }, this)
    }
    ,
    t.prototype.complate = function() {
        this._functions && (this._complateNum++,
        this._complateNum == this._functions.length && (this._callBack && this._callBack.call(this._callBackTarget),
        this._callBack = null,
        this._callBackTarget = null,
        this._functions = null))
    }
    ,
    t
}();
__reflect(AllAsyncExecutor.prototype, "AllAsyncExecutor");
var AnchorUtil = function() {
    function t() {}
    return t.init = function() {
        t._propertyChange = Object.create(null),
        t._anchorChange = Object.create(null),
        t.injectAnchor()
    }
    ,
    t.setAnchorX = function(t, e) {
        t.anchorX = e
    }
    ,
    t.setAnchorY = function(t, e) {
        t.anchorY = e
    }
    ,
    t.setAnchor = function(t, e) {
        t.anchorX = t.anchorY = e
    }
    ,
    t.getAnchor = function(t) {
        return t.anchorX != t.anchorY && console.log("target's anchorX != anchorY"),
        t.anchorX || 0
    }
    ,
    t.getAnchorY = function(t) {
        return t.anchorY || 0
    }
    ,
    t.getAnchorX = function(t) {
        return t.anchorX || 0
    }
    ,
    t.injectAnchor = function() {
        Object.defineProperty(egret.DisplayObject.prototype, "width", {
            get: function() {
                return this.$getWidth()
            },
            set: function(e) {
                var i = this;
                this.$setWidth(e),
                t._propertyChange[this.hashCode] = !0,
                egret.callLater(function() {
                    t.changeAnchor(i)
                }, this)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(egret.DisplayObject.prototype, "height", {
            get: function() {
                return this.$getHeight()
            },
            set: function(e) {
                var i = this;
                this.$setHeight(e),
                t._propertyChange[this.hashCode] = !0,
                egret.callLater(function() {
                    t.changeAnchor(i)
                }, this)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(egret.DisplayObject.prototype, "anchorX", {
            get: function() {
                return this._anchorX
            },
            set: function(e) {
                var i = this;
                this._anchorX = e,
                t._propertyChange[this.hashCode] = !0,
                t._anchorChange[this.hashCode] = !0,
                egret.callLater(function() {
                    t.changeAnchor(i)
                }, this)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(egret.DisplayObject.prototype, "anchorY", {
            get: function() {
                return this._anchorY
            },
            set: function(e) {
                var i = this;
                this._anchorY = e,
                t._propertyChange[this.hashCode] = !0,
                t._anchorChange[this.hashCode] = !0,
                egret.callLater(function() {
                    t.changeAnchor(i)
                }, this)
            },
            enumerable: !0,
            configurable: !0
        })
    }
    ,
    t.changeAnchor = function(e) {
        t._propertyChange[e.hashCode] && t._anchorChange[e.hashCode] && (e.anchorOffsetX = e._anchorX * e.width,
        e.anchorOffsetY = e._anchorY * e.height,
        delete t._propertyChange[e.hashCode])
    }
    ,
    t
}();
__reflect(AnchorUtil.prototype, "AnchorUtil");
var ArrayUtils = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }
    return __extends(e, t),
    e.prototype.forEach = function(t, e, i) {
        for (var n = 0, r = t.length; r > n; n++)
            e.apply(i, [t[n]])
    }
    ,
    e
}(BaseClass);
__reflect(ArrayUtils.prototype, "ArrayUtils");
var AverageUtils = function() {
    function t(t) {
        void 0 === t && (t = 10),
        this.nums = [],
        this.numsLen = 0,
        this.numSum = 0,
        this.maxNum = t
    }
    return t.prototype.push = function(t) {
        this.numsLen > this.maxNum && (this.numsLen--,
        this.numSum -= this.nums.shift()),
        this.nums.push(t),
        this.numSum += t,
        this.numsLen++
    }
    ,
    t.prototype.getValue = function() {
        return this.numSum / this.numsLen
    }
    ,
    t.prototype.clear = function() {
        this.nums.splice(0),
        this.numsLen = 0,
        this.numSum = 0
    }
    ,
    t
}();
__reflect(AverageUtils.prototype, "AverageUtils");
var CommonUtils = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.labelIsOverLenght = function(t, e) {
            var i = null;
            i = 1e5 > e ? e : 1e6 > e ? Math.floor(e / 1e3 / 10).toString() + "万" : Math.floor(e / 1e4).toString() + "万",
            t.text = i
        }
        ,
        e
    }
    return __extends(e, t),
    e.prototype.addLableStrokeColor = function(t, e, i) {
        t.strokeColor = e,
        t.stroke = i
    }
    ,
    e.prototype.copyDataHandler = function(t) {
        var e;
        if (t instanceof Array)
            e = [];
        else {
            if (!(t instanceof Object))
                return t;
            e = {}
        }
        for (var i = Object.keys(t), n = 0, r = i.length; r > n; n++) {
            var o = i[n];
            e[o] = this.copyDataHandler(t[o])
        }
        return e
    }
    ,
    e.prototype.lock = function() {
        var t = App.StageUtils.getStage();
        t.$children.forEach(function(t) {
            t instanceof egret.DisplayObjectContainer && (t.touchEnabled = t.touchChildren = !1)
        })
    }
    ,
    e.prototype.unlock = function() {
        var t = App.StageUtils.getStage();
        t.$children.forEach(function(t) {
            t instanceof egret.DisplayObjectContainer && (t.touchEnabled = t.touchChildren = !0)
        })
    }
    ,
    e.prototype.int64ToNumber = function(t) {
        return parseInt(t.toString())
    }
    ,
    e
}(BaseClass);
__reflect(CommonUtils.prototype, "CommonUtils");
var DateUtils = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }
    return __extends(e, t),
    e.isLeapYear = function(t) {
        return t % 400 === 0 || t % 100 !== 0 && t % 4 === 0
    }
    ,
    e.getFormatBySecond = function(t, e) {
        void 0 === e && (e = 1);
        var i = "";
        switch (e) {
        case 1:
            i = this.getFormatBySecond1(t);
            break;
        case 2:
            i = this.getFormatBySecond2(t);
            break;
        case 3:
            i = this.getFormatBySecond3(t);
            break;
        case 4:
            i = this.getFormatBySecond4(t);
            break;
        case 5:
            i = this.getFormatBySecond5(t)
        }
        return i
    }
    ,
    e.getFormatBySecond1 = function(t) {
        void 0 === t && (t = 0);
        var e, i = Math.floor(t / 3600);
        e = 0 == i ? "00" : 10 > i ? "0" + i : "" + i;
        var n, r, o = Math.floor((t - 3600 * i) / 60), s = Math.floor((t - 3600 * i) % 60);
        return n = 0 == o ? "00" : 10 > o ? "0" + o : "" + o,
        r = 0 == s ? "00" : 10 > s ? "0" + s : "" + s,
        e + ":" + n + ":" + r
    }
    ,
    e.getFormatBySecond3 = function(t) {
        void 0 === t && (t = 0);
        var e, i, n = Math.floor(t / 3600), r = Math.floor((t - 3600 * n) / 60), o = Math.floor((t - 3600 * n) % 60);
        return e = 0 == r ? "00" : 10 > r ? "0" + r : "" + r,
        i = 0 == o ? "00" : 10 > o ? "0" + o : "" + o,
        e + ":" + i
    }
    ,
    e.getFormatBySecond2 = function(t) {
        var e = new Date(t)
          , i = e.getFullYear()
          , n = e.getMonth() + 1
          , r = e.getDate()
          , o = e.getHours()
          , s = e.getMinutes()
          , a = e.getSeconds();
        return i + "-" + n + "-" + r + " " + o + ":" + s + ":" + a
    }
    ,
    e.getFormatBySecond4 = function(t) {
        var e = Math.floor(t / 3600);
        return e > 0 ? e > 24 ? Math.floor(e / 24) + "天前" : e + "小时前" : Math.floor(t / 60) + "分钟前"
    }
    ,
    e.getFormatBySecond5 = function(t) {
        var e = 86400
          , i = 3600
          , n = 60
          , r = Math.floor(t / e)
          , o = Math.floor(t % e / i)
          , s = Math.floor((t - o * i) / n)
          , a = Math.floor((t - o * i) % n)
          , h = ""
          , l = ""
          , c = ""
          , p = "";
        return t > 0 ? 0 == r ? (h = "",
        0 == o ? (l = "",
        0 == s ? (c = "",
        p = 0 == a ? "" : 10 > a ? "0" + a + "秒" : "" + a + "秒") : (c = "" + s + "分",
        p = 0 == a ? "" : 10 > a ? "0" + a + "秒" : "" + a + "秒",
        c + p)) : (l = o + "小时",
        0 == s ? (c = "",
        p = 0 == a ? "" : 10 > a ? "0" + a + "秒" : "" + a + "秒") : (c = 10 > s ? "0" + s + "分" : "" + s + "分",
        l + c))) : (h = r + "天",
        l = 0 == o ? "" : 10 > o ? "0" + o + "小时" : "" + o + "小时",
        h + l) : ""
    }
    ,
    e
}(BaseClass);
__reflect(DateUtils.prototype, "DateUtils");
var DebugUtils = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._threshold = 3,
        e._startTimes = {},
        e
    }
    return __extends(e, t),
    e.prototype.isOpen = function(t) {
        this._isOpen = t
    }
    ,
    Object.defineProperty(e.prototype, "isDebug", {
        get: function() {
            return this._isOpen
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.start = function(t) {
        this._isOpen && (this._startTimes[t] = egret.getTimer())
    }
    ,
    e.prototype.stop = function(t) {
        if (!this._isOpen)
            return 0;
        if (!this._startTimes[t])
            return 0;
        var e = egret.getTimer() - this._startTimes[t];
        return e > this._threshold && Log.trace(t + ": " + e),
        e
    }
    ,
    e.prototype.setThreshold = function(t) {
        this._threshold = t
    }
    ,
    e
}(BaseClass);
__reflect(DebugUtils.prototype, "DebugUtils");
var DelayOptManager = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.TIME_THRESHOLD = 2,
        e._delayOpts = [],
        App.TimerManager.doFrame(1, 0, e.runCachedFun, e),
        e
    }
    return __extends(e, t),
    e.prototype.addDelayOptFunction = function(t, e, i, n, r) {
        this._delayOpts.push({
            fun: e,
            funPara: i,
            thisObj: t,
            callBack: n,
            para: r
        })
    }
    ,
    e.prototype.clear = function() {
        this._delayOpts.length = 0
    }
    ,
    e.prototype.stop = function() {
        App.TimerManager.remove(this.runCachedFun, this)
    }
    ,
    e.prototype.runCachedFun = function(t) {
        if (0 != this._delayOpts.length)
            for (var e, i = egret.getTimer(); this._delayOpts.length && (e = this._delayOpts.shift(),
            e.funPara ? e.fun.call(e.thisObj, e.funPara) : e.fun.call(e.thisObj),
            e.callBack && (void 0 != e.para ? e.callBack.call(e.thisObj, e.para) : e.callBack()),
            !(egret.getTimer() - i > this.TIME_THRESHOLD)); )
                ;
    }
    ,
    e
}(BaseClass);
__reflect(DelayOptManager.prototype, "DelayOptManager");
var DeviceUtils = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    Object.defineProperty(e.prototype, "IsHtml5", {
        get: function() {
            return egret.Capabilities.runtimeType == egret.RuntimeType.WEB
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "IsNative", {
        get: function() {
            return egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "IsMobile", {
        get: function() {
            return egret.Capabilities.isMobile
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "IsPC", {
        get: function() {
            return !egret.Capabilities.isMobile
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "IsQQBrowser", {
        get: function() {
            return this.IsHtml5 && -1 != navigator.userAgent.indexOf("MQQBrowser")
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "IsIEBrowser", {
        get: function() {
            return this.IsHtml5 && -1 != navigator.userAgent.indexOf("MSIE")
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "IsFirefoxBrowser", {
        get: function() {
            return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Firefox")
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "IsChromeBrowser", {
        get: function() {
            return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Chrome")
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "IsSafariBrowser", {
        get: function() {
            return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Safari")
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "IsOperaBrowser", {
        get: function() {
            return this.IsHtml5 && -1 != navigator.userAgent.indexOf("Opera")
        },
        enumerable: !0,
        configurable: !0
    }),
    e
}(BaseClass);
__reflect(DeviceUtils.prototype, "DeviceUtils");
var DisplayUtils = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.createBitmap = function(t) {
        var e = new egret.Bitmap
          , i = RES.getRes(t);
        return e.texture = i,
        e
    }
    ,
    e.prototype.createEuiImage = function(t) {
        var e = new eui.Image
          , i = RES.getRes(t);
        return e.source = i,
        e
    }
    ,
    e.prototype.removeFromParent = function(t) {
        null != t.parent && t.parent.removeChild(t)
    }
    ,
    e
}(BaseClass);
__reflect(DisplayUtils.prototype, "DisplayUtils");
var DragBoneAnimotion = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.armatureHash = new HashMap,
        e.armatureDisplayHash = new HashMap,
        e._timerId = -1,
        e
    }
    return __extends(e, t),
    e.create = function() {
        return e.pool.length ? e.pool.pop() : new e
    }
    ,
    e.prototype.setData = function(t, e) {
        void 0 === e && (e = "Armature"),
        this.armatureDisplay && this.armatureDisplay.parent && (this.removeChild(this.armatureDisplay),
        this.armatureDisplay = null),
        this.armature && (this.armature.dispose(),
        this.armature = null);
        var i = RES.getRes(t + "_ske_json")
          , n = RES.getRes(t + "_tex_json")
          , r = RES.getRes(t + "_tex_png")
          , o = new dragonBones.EgretFactory;
        o.parseDragonBonesData(i),
        o.parseTextureAtlasData(n, r),
        this.armature = o.buildArmature(e),
        this.armatureDisplay = o.buildArmatureDisplay(e),
        this.addChild(this.armatureDisplay)
    }
    ,
    e.prototype.gotoAndPlay = function(t, e, i, n) {
        void 0 === e && (e = 1),
        void 0 === i && (i = 1),
        this.armatureDisplay.animation.play(t),
        2 == i && (console.log(n),
        this.armatureDisplay.removeEventListener(dragonBones.AnimationEvent.COMPLETE, this.play_com, this),
        this.armatureDisplay.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.play_com, this))
    }
    ,
    e.prototype.play_com = function(t) {
        console.log("动画播放完毕..."),
        this.return_to_pool()
    }
    ,
    e.prototype.return_to_pool = function() {
        this.armatureDisplay && this.armatureDisplay.parent && (this.armatureDisplay.removeEventListener(dragonBones.AnimationEvent.COMPLETE, this.play_com, this),
        this.removeChild(this.armatureDisplay),
        this.armatureDisplay = null),
        this.armature && (this.armature.dispose(),
        this.armature = null),
        this.scaleX = this.scaleY = 1,
        this.x = this.y = 0,
        this.alpha = 1,
        this.rotation = 0,
        e.pool.push(this)
    }
    ,
    e.pool = new Array,
    e
}(egret.Sprite);
__reflect(DragBoneAnimotion.prototype, "DragBoneAnimotion");
var DUtils = function() {
    function t() {}
    return t.prototype.loopCall = function(t, e, i) {
        t.forEach(e, i)
    }
    ,
    t.isNative = function() {
        return egret.Capabilities.runtimeType != egret.RuntimeType.WEB
    }
    ,
    t.setAnchorCenter = function(t) {
        t.anchorOffsetX = t.width / 2,
        t.anchorOffsetY = t.height / 2
    }
    ,
    t.hitTestRect = function(t, e) {
        return t.y < e.bottom && t.bottom > e.y && t.x < e.right && t.right > e.x
    }
    ,
    t.getArrayByPage = function(t, e, i) {
        if (void 0 === i && (i = 5),
        null == t)
            return null;
        var n = (e - 1) * i
          , r = n + i;
        return r = Math.min(r, t.length),
        t.slice(n, r)
    }
    ,
    t.formatNumber = function(t) {
        for (var e = t.toString(), i = e.split(""), n = new Array, r = new Array, o = i.length - 1; o >= 0; o--)
            r.length < 3 ? (r.push(i[o]),
            0 == o && n.push(r)) : (n.push(r),
            r = [],
            r.push(i[o]),
            0 == o && n.push(r));
        for (var s = new Array, a = 0; a < n.length; a++) {
            var h = n[a];
            if (a != n.length - 1) {
                var l = ",";
                h.push(l)
            }
            for (var c = 0; c < h.length; c++)
                s.push(h[c])
        }
        for (var p = "", o = s.length - 1; o >= 0; o--)
            p += s[o];
        return p
    }
    ,
    t.createSimpleButton = function(e, i, n, r, o) {
        void 0 === o && (o = "");
        var s = new egret.Sprite;
        return null != o ? s.addChild(t.createBitmapByName(o)) : (s.graphics.beginFill(0, 0),
        s.graphics.drawRect(0, 0, n, r),
        s.graphics.endFill()),
        s.x = e,
        s.y = i,
        s.touchEnabled = !0,
        s
    }
    ,
    t.createTextField = function(t, e, i, n, r, o, s, a) {
        void 0 === o && (o = ""),
        void 0 === s && (s = !1),
        void 0 === a && (a = egret.TextFieldType.INPUT);
        var h = new egret.TextField;
        return h.fontFamily = App.DEFAULT_FONT_NAME,
        h.textAlign = egret.HorizontalAlign.LEFT,
        h.x = t,
        h.y = e,
        h.size = r,
        h.multiline = s,
        -1 != i && (h.width = i),
        -1 != n && (h.height = n),
        h.text = o,
        h
    }
    ,
    t.createBitmapByName = function(t) {
        var e = new egret.Bitmap
          , i = RES.getRes(t);
        return e.texture = i,
        e
    }
    ,
    t.createMovieClipByName = function(t) {
        var e = new egret.MovieClip
          , i = RES.getRes(t + "_json")
          , n = RES.getRes(t + "_png")
          , r = new egret.MovieClipDataFactory(i,n);
        return e = new egret.MovieClip(r.generateMovieClipData(t))
    }
    ,
    t.createSpriteSheetByName = function(t, e) {
        var i = new egret.Bitmap
          , n = RES.getRes(t);
        return i.texture = n.getTexture(e),
        i
    }
    ,
    t.getRequestParamByName = function(e) {
        var i = new Object;
        return i = t.getRequestParams(),
        i[e]
    }
    ,
    t.getRequestParams = function() {
        var t = document.location.search
          , e = new Object;
        if (-1 != t.indexOf("?"))
            for (var i = t.substr(1), n = i.split("&"), r = 0; r < n.length; r++)
                e[n[r].split("=")[0]] = n[r].split("=")[1];
        return e
    }
    ,
    t.randArray = function(t) {
        t.sort(function() {
            return .5 - Math.random()
        })
    }
    ,
    t.createRandomNum = function(t, e) {
        void 0 === t && (t = 0);
        var i = Math.floor(Math.random() * (e - t + 1)) + t;
        return i
    }
    ,
    t.trimStr = function(t, e) {
        return void 0 === e && (e = 10),
        t ? (t.length > e && (t = t.substr(0, e - 1) + ".."),
        t) : ""
    }
    ,
    t
}();
__reflect(DUtils.prototype, "DUtils");
var EffectUtils = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.macIconShake = function(t, e) {
        for (var i = [[20, 300], [15, 300], [10, 300], [5, 300]], n = "egret.Tween.get(" + t + ")", r = 0, o = i.length; o > r; r++)
            n += ".to({'y':" + e + "-" + i[r][0] + "}, " + i[r][1] + ")",
            n += ".to({'y':" + e + "}, " + i[r][1] + ")";
        return n += ";"
    }
    ,
    e.prototype.startFlicker = function(t, e) {
        t.alpha = 1,
        egret.Tween.get(t).to({
            alpha: 0
        }, e).to({
            alpha: 1
        }, e).call(this.startFlicker, this, [t, e])
    }
    ,
    e.prototype.stopFlicker = function(t) {
        egret.Tween.removeTweens(t)
    }
    ,
    e.grayMatrix = [.3, .6, 0, 0, 0, .3, .6, 0, 0, 0, .3, .6, 0, 0, 0, 0, 0, 0, 1, 0],
    e.grayFlilter = [new egret.ColorMatrixFilter(e.grayMatrix)],
    e
}(BaseClass);
__reflect(EffectUtils.prototype, "EffectUtils");
var FrameDelay = function() {
    function t() {}
    return t.prototype.delayCall = function(t, e, i) {
        this.func = e,
        this.thisObj = i,
        egret.callLater(function() {
            App.TimerManager.doFrame(t, 1, this.listener_enterFrame, this)
        }, this)
    }
    ,
    t.prototype.listener_enterFrame = function() {
        this.func.call(this.thisObj)
    }
    ,
    t
}();
__reflect(FrameDelay.prototype, "FrameDelay");
var FrameExecutor = function() {
    function t(t) {
        this.delayFrame = t,
        this.frameDelay = new FrameDelay,
        this.functions = new Array
    }
    return t.prototype.regist = function(t, e) {
        this.functions.push([t, e])
    }
    ,
    t.prototype.execute = function() {
        if (this.functions.length) {
            var t = this.functions.shift();
            t[0].call(t[1]),
            this.frameDelay.delayCall(this.delayFrame, this.execute, this)
        }
    }
    ,
    t
}();
__reflect(FrameExecutor.prototype, "FrameExecutor");
var Keyboard = function() {
    function t() {}
    return t.LEFT = 37,
    t.RIGHT = 39,
    t.UP = 38,
    t.DOWN = 40,
    t.W = 87,
    t.A = 65,
    t.S = 83,
    t.D = 68,
    t.J = 74,
    t.K = 75,
    t.L = 76,
    t.U = 85,
    t.I = 73,
    t.O = 79,
    t.P = 80,
    t.SPACE = 32,
    t
}();
__reflect(Keyboard.prototype, "Keyboard");
var InputValidate;
!function(t) {
    function e(t) {
        var e = new RegExp("^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$");
        return e.test(t)
    }
    function i(t) {
        var e = /^(?=.*\d)[a-z\d]{6,12}$/i;
        return e.test(t)
    }
    function n(t) {
        var e = /^\d+(\.\d+)?$/;
        return e.test(t) ? !0 : !1
    }
    function r(t) {
        var e = /^1(3|4|5|7|8)\d{9}$/;
        return e.test(t)
    }
    function o(t) {
        var e = /[\u4e00-\u9fa5]/;
        return e.test(t)
    }
    function s(t) {
        var e = /[a-zA-z]+:\/\/[^\s]*/;
        return e.test(t)
    }
    function a(t) {
        var e = /\d{3}-\d{8}|\d{4}-\d{7}/;
        return e.test(t)
    }
    function h(t) {
        var e = /[1-9][0-9]{4,}/;
        return e.test(t)
    }
    function l(t) {
        var e = /[1-9]\d{5}(?!\d)/;
        return e.test(t)
    }
    function c(t) {
        var e = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return e.test(t)
    }
    t.isEmail = e,
    t.isRightPassword = i,
    t.isNumber = n,
    t.isPhone = r,
    t.isChinese = o,
    t.isUrl = s,
    t.isTelephone = a,
    t.isQQ = h,
    t.isPost = l,
    t.isIdCard = c
}(InputValidate || (InputValidate = {}));
var KeyboardUtils = function(t) {
    function e() {
        var e = t.call(this) || this;
        if (e.key_ups = new Array,
        e.key_downs = new Array,
        App.DeviceUtils.IsHtml5) {
            var i = e;
            document.addEventListener("keyup", function(t) {
                for (var e = 0, n = i.key_ups.length; n > e; e++) {
                    var r = i.key_ups[e][0]
                      , o = i.key_ups[e][1];
                    o ? r.call(o, t.keyCode) : r(t.keyCode)
                }
            }),
            document.addEventListener("keydown", function(t) {
                for (var e = 0, n = i.key_downs.length; n > e; e++) {
                    var r = i.key_downs[e][0]
                      , o = i.key_downs[e][1];
                    o ? r.call(o, t.keyCode) : r(t.keyCode)
                }
            })
        }
        return e
    }
    return __extends(e, t),
    e.prototype.addKeyUp = function(t, e) {
        this.key_ups.push([t, e])
    }
    ,
    e.prototype.addKeyDown = function(t, e) {
        this.key_downs.push([t, e])
    }
    ,
    e.prototype.removeKeyUp = function(t, e) {
        for (var i = 0; i < this.key_ups.length; i++)
            this.key_ups[i][0] == t && this.key_ups[i][1] == e && (this.key_ups.splice(i, 1),
            i--)
    }
    ,
    e.prototype.removeKeyDown = function(t, e) {
        for (var i = 0; i < this.key_downs.length; i++)
            this.key_downs[i][0] == t && this.key_downs[i][1] == e && (this.key_downs.splice(i, 1),
            i--)
    }
    ,
    e
}(BaseClass);
__reflect(KeyboardUtils.prototype, "KeyboardUtils");
var Log = function() {
    function t() {}
    return t.trace = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        App.isDebug && (t[0] = "[DebugLog]" + t[0],
        console.log.apply(console, t))
    }
    ,
    t
}();
__reflect(Log.prototype, "Log");
var MathUtils = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }
    return __extends(e, t),
    e.prototype.getAngle = function(t) {
        return 180 * t / Math.PI
    }
    ,
    e.prototype.getRadian = function(t) {
        return t / 180 * Math.PI
    }
    ,
    e.prototype.getRadian2 = function(t, e, i, n) {
        var r = i - t
          , o = n - e;
        return Math.atan2(o, r)
    }
    ,
    e.prototype.getDistance = function(t, e, i, n) {
        var r = i - t
          , o = n - e
          , s = r * r + o * o;
        return Math.sqrt(s)
    }
    ,
    e.prototype.getDistanceByPoint = function(t, e) {
        var i = t.x - e.x
          , n = t.y - e.y
          , r = i * i + n * n;
        return Math.sqrt(r)
    }
    ,
    e.prototype.range = function(t, e) {
        return Math.round(Math.random() * (e - t)) + t
    }
    ,
    e
}(BaseClass);
__reflect(MathUtils.prototype, "MathUtils");
var md5 = function() {
    function t() {
        this.hexcase = 0,
        this.b64pad = ""
    }
    return t.prototype.hex_md5 = function(t) {
        return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)))
    }
    ,
    t.prototype.b64_md5 = function(t) {
        return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)))
    }
    ,
    t.prototype.any_md5 = function(t, e) {
        return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), e)
    }
    ,
    t.prototype.hex_hmac_md5 = function(t, e) {
        return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)))
    }
    ,
    t.prototype.b64_hmac_md5 = function(t, e) {
        return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)))
    }
    ,
    t.prototype.any_hmac_md5 = function(t, e, i) {
        return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)), i)
    }
    ,
    t.prototype.md5_vm_test = function() {
        return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase()
    }
    ,
    t.prototype.rstr_md5 = function(t) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length))
    }
    ,
    t.prototype.rstr_hmac_md5 = function(t, e) {
        var i = this.rstr2binl(t);
        i.length > 16 && (i = this.binl_md5(i, 8 * t.length));
        for (var n = Array(16), r = Array(16), o = 0; 16 > o; o++)
            n[o] = 909522486 ^ i[o],
            r[o] = 1549556828 ^ i[o];
        var s = this.binl_md5(n.concat(this.rstr2binl(e)), 512 + 8 * e.length);
        return this.binl2rstr(this.binl_md5(r.concat(s), 640))
    }
    ,
    t.prototype.rstr2hex = function(t) {
        try {
            this.hexcase
        } catch (e) {
            this.hexcase = 0
        }
        for (var i, n = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", r = "", o = 0; o < t.length; o++)
            i = t.charCodeAt(o),
            r += n.charAt(i >>> 4 & 15) + n.charAt(15 & i);
        return r
    }
    ,
    t.prototype.rstr2b64 = function(t) {
        try {
            this.b64pad
        } catch (e) {
            this.b64pad = ""
        }
        for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "", r = t.length, o = 0; r > o; o += 3)
            for (var s = t.charCodeAt(o) << 16 | (r > o + 1 ? t.charCodeAt(o + 1) << 8 : 0) | (r > o + 2 ? t.charCodeAt(o + 2) : 0), a = 0; 4 > a; a++)
                n += 8 * o + 6 * a > 8 * t.length ? this.b64pad : i.charAt(s >>> 6 * (3 - a) & 63);
        return n
    }
    ,
    t.prototype.rstr2any = function(t, e) {
        var i, n, r, o, s, a = e.length, h = Array(Math.ceil(t.length / 2));
        for (i = 0; i < h.length; i++)
            h[i] = t.charCodeAt(2 * i) << 8 | t.charCodeAt(2 * i + 1);
        var l = Math.ceil(8 * t.length / (Math.log(e.length) / Math.log(2)))
          , c = Array(l);
        for (n = 0; l > n; n++) {
            for (s = Array(),
            o = 0,
            i = 0; i < h.length; i++)
                o = (o << 16) + h[i],
                r = Math.floor(o / a),
                o -= r * a,
                (s.length > 0 || r > 0) && (s[s.length] = r);
            c[n] = o,
            h = s
        }
        var p = "";
        for (i = c.length - 1; i >= 0; i--)
            p += e.charAt(c[i]);
        return p
    }
    ,
    t.prototype.str2rstr_utf8 = function(t) {
        for (var e, i, n = "", r = -1; ++r < t.length; )
            e = t.charCodeAt(r),
            i = r + 1 < t.length ? t.charCodeAt(r + 1) : 0,
            e >= 55296 && 56319 >= e && i >= 56320 && 57343 >= i && (e = 65536 + ((1023 & e) << 10) + (1023 & i),
            r++),
            127 >= e ? n += String.fromCharCode(e) : 2047 >= e ? n += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : 65535 >= e ? n += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : 2097151 >= e && (n += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
        return n
    }
    ,
    t.prototype.str2rstr_utf16le = function(t) {
        for (var e = "", i = 0; i < t.length; i++)
            e += String.fromCharCode(255 & t.charCodeAt(i), t.charCodeAt(i) >>> 8 & 255);
        return e
    }
    ,
    t.prototype.str2rstr_utf16be = function(t) {
        for (var e = "", i = 0; i < t.length; i++)
            e += String.fromCharCode(t.charCodeAt(i) >>> 8 & 255, 255 & t.charCodeAt(i));
        return e
    }
    ,
    t.prototype.rstr2binl = function(t) {
        for (var e = Array(t.length >> 2), i = 0; i < e.length; i++)
            e[i] = 0;
        for (var i = 0; i < 8 * t.length; i += 8)
            e[i >> 5] |= (255 & t.charCodeAt(i / 8)) << i % 32;
        return e
    }
    ,
    t.prototype.binl2rstr = function(t) {
        for (var e = "", i = 0; i < 32 * t.length; i += 8)
            e += String.fromCharCode(t[i >> 5] >>> i % 32 & 255);
        return e
    }
    ,
    t.prototype.binl_md5 = function(t, e) {
        t[e >> 5] |= 128 << e % 32,
        t[(e + 64 >>> 9 << 4) + 14] = e;
        for (var i = 1732584193, n = -271733879, r = -1732584194, o = 271733878, s = 0; s < t.length; s += 16) {
            var a = i
              , h = n
              , l = r
              , c = o;
            i = this.md5_ff(i, n, r, o, t[s + 0], 7, -680876936),
            o = this.md5_ff(o, i, n, r, t[s + 1], 12, -389564586),
            r = this.md5_ff(r, o, i, n, t[s + 2], 17, 606105819),
            n = this.md5_ff(n, r, o, i, t[s + 3], 22, -1044525330),
            i = this.md5_ff(i, n, r, o, t[s + 4], 7, -176418897),
            o = this.md5_ff(o, i, n, r, t[s + 5], 12, 1200080426),
            r = this.md5_ff(r, o, i, n, t[s + 6], 17, -1473231341),
            n = this.md5_ff(n, r, o, i, t[s + 7], 22, -45705983),
            i = this.md5_ff(i, n, r, o, t[s + 8], 7, 1770035416),
            o = this.md5_ff(o, i, n, r, t[s + 9], 12, -1958414417),
            r = this.md5_ff(r, o, i, n, t[s + 10], 17, -42063),
            n = this.md5_ff(n, r, o, i, t[s + 11], 22, -1990404162),
            i = this.md5_ff(i, n, r, o, t[s + 12], 7, 1804603682),
            o = this.md5_ff(o, i, n, r, t[s + 13], 12, -40341101),
            r = this.md5_ff(r, o, i, n, t[s + 14], 17, -1502002290),
            n = this.md5_ff(n, r, o, i, t[s + 15], 22, 1236535329),
            i = this.md5_gg(i, n, r, o, t[s + 1], 5, -165796510),
            o = this.md5_gg(o, i, n, r, t[s + 6], 9, -1069501632),
            r = this.md5_gg(r, o, i, n, t[s + 11], 14, 643717713),
            n = this.md5_gg(n, r, o, i, t[s + 0], 20, -373897302),
            i = this.md5_gg(i, n, r, o, t[s + 5], 5, -701558691),
            o = this.md5_gg(o, i, n, r, t[s + 10], 9, 38016083),
            r = this.md5_gg(r, o, i, n, t[s + 15], 14, -660478335),
            n = this.md5_gg(n, r, o, i, t[s + 4], 20, -405537848),
            i = this.md5_gg(i, n, r, o, t[s + 9], 5, 568446438),
            o = this.md5_gg(o, i, n, r, t[s + 14], 9, -1019803690),
            r = this.md5_gg(r, o, i, n, t[s + 3], 14, -187363961),
            n = this.md5_gg(n, r, o, i, t[s + 8], 20, 1163531501),
            i = this.md5_gg(i, n, r, o, t[s + 13], 5, -1444681467),
            o = this.md5_gg(o, i, n, r, t[s + 2], 9, -51403784),
            r = this.md5_gg(r, o, i, n, t[s + 7], 14, 1735328473),
            n = this.md5_gg(n, r, o, i, t[s + 12], 20, -1926607734),
            i = this.md5_hh(i, n, r, o, t[s + 5], 4, -378558),
            o = this.md5_hh(o, i, n, r, t[s + 8], 11, -2022574463),
            r = this.md5_hh(r, o, i, n, t[s + 11], 16, 1839030562),
            n = this.md5_hh(n, r, o, i, t[s + 14], 23, -35309556),
            i = this.md5_hh(i, n, r, o, t[s + 1], 4, -1530992060),
            o = this.md5_hh(o, i, n, r, t[s + 4], 11, 1272893353),
            r = this.md5_hh(r, o, i, n, t[s + 7], 16, -155497632),
            n = this.md5_hh(n, r, o, i, t[s + 10], 23, -1094730640),
            i = this.md5_hh(i, n, r, o, t[s + 13], 4, 681279174),
            o = this.md5_hh(o, i, n, r, t[s + 0], 11, -358537222),
            r = this.md5_hh(r, o, i, n, t[s + 3], 16, -722521979),
            n = this.md5_hh(n, r, o, i, t[s + 6], 23, 76029189),
            i = this.md5_hh(i, n, r, o, t[s + 9], 4, -640364487),
            o = this.md5_hh(o, i, n, r, t[s + 12], 11, -421815835),
            r = this.md5_hh(r, o, i, n, t[s + 15], 16, 530742520),
            n = this.md5_hh(n, r, o, i, t[s + 2], 23, -995338651),
            i = this.md5_ii(i, n, r, o, t[s + 0], 6, -198630844),
            o = this.md5_ii(o, i, n, r, t[s + 7], 10, 1126891415),
            r = this.md5_ii(r, o, i, n, t[s + 14], 15, -1416354905),
            n = this.md5_ii(n, r, o, i, t[s + 5], 21, -57434055),
            i = this.md5_ii(i, n, r, o, t[s + 12], 6, 1700485571),
            o = this.md5_ii(o, i, n, r, t[s + 3], 10, -1894986606),
            r = this.md5_ii(r, o, i, n, t[s + 10], 15, -1051523),
            n = this.md5_ii(n, r, o, i, t[s + 1], 21, -2054922799),
            i = this.md5_ii(i, n, r, o, t[s + 8], 6, 1873313359),
            o = this.md5_ii(o, i, n, r, t[s + 15], 10, -30611744),
            r = this.md5_ii(r, o, i, n, t[s + 6], 15, -1560198380),
            n = this.md5_ii(n, r, o, i, t[s + 13], 21, 1309151649),
            i = this.md5_ii(i, n, r, o, t[s + 4], 6, -145523070),
            o = this.md5_ii(o, i, n, r, t[s + 11], 10, -1120210379),
            r = this.md5_ii(r, o, i, n, t[s + 2], 15, 718787259),
            n = this.md5_ii(n, r, o, i, t[s + 9], 21, -343485551),
            i = this.safe_add(i, a),
            n = this.safe_add(n, h),
            r = this.safe_add(r, l),
            o = this.safe_add(o, c)
        }
        return [i, n, r, o]
    }
    ,
    t.prototype.md5_cmn = function(t, e, i, n, r, o) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(n, o)), r), i)
    }
    ,
    t.prototype.md5_ff = function(t, e, i, n, r, o, s) {
        return this.md5_cmn(e & i | ~e & n, t, e, r, o, s)
    }
    ,
    t.prototype.md5_gg = function(t, e, i, n, r, o, s) {
        return this.md5_cmn(e & n | i & ~n, t, e, r, o, s)
    }
    ,
    t.prototype.md5_hh = function(t, e, i, n, r, o, s) {
        return this.md5_cmn(e ^ i ^ n, t, e, r, o, s)
    }
    ,
    t.prototype.md5_ii = function(t, e, i, n, r, o, s) {
        return this.md5_cmn(i ^ (e | ~n), t, e, r, o, s)
    }
    ,
    t.prototype.safe_add = function(t, e) {
        var i = (65535 & t) + (65535 & e)
          , n = (t >> 16) + (e >> 16) + (i >> 16);
        return n << 16 | 65535 & i
    }
    ,
    t.prototype.bit_rol = function(t, e) {
        return t << e | t >>> 32 - e
    }
    ,
    t
}();
__reflect(md5.prototype, "md5");
var MessageCenter = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i.type = e,
        i.dict = {},
        i.eVec = new Array,
        i.lastRunTime = 0,
        0 == i.type && App.TimerManager.doFrame(1, 0, i.run, i),
        i
    }
    return __extends(e, t),
    e.prototype.clear = function() {
        this.dict = {},
        this.eVec.splice(0)
    }
    ,
    e.prototype.addListener = function(t, e, i) {
        var n = this.dict[t];
        null == n && (n = new Array,
        this.dict[t] = n);
        var r = 0
          , o = n.length;
        for (r; o > r; r++)
            if (n[r][0] == e && n[r][1] == i)
                return;
        n.push([e, i])
    }
    ,
    e.prototype.removeListener = function(t, e, i) {
        var n = this.dict[t];
        if (null != n) {
            var r = 0
              , o = n.length;
            for (r; o > r; r++)
                if (n[r][0] == e && n[r][1] == i) {
                    n.splice(r, 1);
                    break
                }
            0 == n.length && (this.dict[t] = null,
            delete this.dict[t])
        }
    }
    ,
    e.prototype.removeAll = function(t) {
        for (var e = Object.keys(this.dict), i = 0, n = e.length; n > i; i++) {
            for (var r = e[i], o = this.dict[r], s = 0; s < o.length; s++)
                o[s][1] == t && (o.splice(s, 1),
                s--);
            0 == o.length && (this.dict[r] = null,
            delete this.dict[r])
        }
    }
    ,
    e.prototype.dispatch = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
        if (null != this.dict[t]) {
            var n = ObjectPool2.pop("MessageVo");
            n.type = t,
            n.param = e,
            0 == this.type ? this.eVec.push(n) : 1 == this.type ? this.dealMsg(n) : Log.trace("MessageCenter未实现的类型")
        }
    }
    ,
    e.prototype.run = function() {
        var t = egret.getTimer()
          , e = t - this.lastRunTime > 100;
        if (this.lastRunTime = t,
        e)
            for (; this.eVec.length > 0; )
                this.dealMsg(this.eVec.shift());
        else
            for (; this.eVec.length > 0 && (this.dealMsg(this.eVec.shift()),
            !(egret.getTimer() - t > 5)); )
                ;
    }
    ,
    e.prototype.dealMsg = function(t) {
        var e = this.dict[t.type];
        if (e) {
            for (var i = 0, n = e.length, r = null; n > i; )
                r = e[i],
                r[0].apply(r[1], t.param),
                e.length != n && (n = e.length,
                i--),
                i++;
            t.dispose(),
            ObjectPool2.push(t)
        }
    }
    ,
    e
}(BaseClass);
__reflect(MessageCenter.prototype, "MessageCenter");
var MessageVo = function() {
    function t() {}
    return t.prototype.dispose = function() {
        this.type = null,
        this.param = null
    }
    ,
    t
}();
__reflect(MessageVo.prototype, "MessageVo");
var DEvent = function(t) {
    function e(e, i, n, r) {
        void 0 === i && (i = null),
        void 0 === n && (n = !1),
        void 0 === r && (r = !1);
        var o = t.call(this, e, n, r) || this;
        return o.data = i,
        o
    }
    return __extends(e, t),
    e
}(egret.Event);
__reflect(DEvent.prototype, "DEvent");
var ObjectPool2 = function() {
    function t() {
        this._objs = new Array
    }
    return t.prototype.pushObj = function(t) {
        this._objs.push(t)
    }
    ,
    t.prototype.popObj = function() {
        return this._objs.length > 0 ? this._objs.pop() : null
    }
    ,
    t.prototype.clear = function() {
        for (; this._objs.length > 0; )
            this._objs.pop()
    }
    ,
    t.pop = function(e) {
        for (var i = [], n = 1; n < arguments.length; n++)
            i[n - 1] = arguments[n];
        t._content[e] || (t._content[e] = []);
        var r = t._content[e];
        if (r.length)
            return r.pop();
        var o, s = egret.getDefinitionByName(e), a = i.length;
        return 0 == a ? o = new s : 1 == a ? o = new s(i[0]) : 2 == a ? o = new s(i[0],i[1]) : 3 == a ? o = new s(i[0],i[1],i[2]) : 4 == a ? o = new s(i[0],i[1],i[2],i[3]) : 5 == a && (o = new s(i[0],i[1],i[2],i[3],i[4])),
        o.ObjectPoolKey = e,
        o
    }
    ,
    t.popWithExtraKey = function(e, i) {
        t._content[e] || (t._content[e] = []);
        var n, r = t._content[e];
        if (r.length)
            for (var o = 0; o < r.length; o++)
                if (r[o].extraKey == i) {
                    n = r[o],
                    r.splice(o, 1);
                    break
                }
        if (!n) {
            var s = egret.getDefinitionByName(e);
            n = new s(i),
            n.extraKey = i,
            n.ObjectPoolKey = e
        }
        return n
    }
    ,
    t.push = function(e) {
        if (null == e)
            return !1;
        var i = e.ObjectPoolKey;
        return t._content[i] ? (t._content[i].push(e),
        !0) : !1
    }
    ,
    t.clear = function() {
        t._content = {}
    }
    ,
    t.clearClass = function(e, i) {
        void 0 === i && (i = null);
        for (var n = t._content[e]; n && n.length; ) {
            var r = n.pop();
            i && r[i](),
            r = null
        }
        t._content[e] = null,
        delete t._content[e]
    }
    ,
    t.dealFunc = function(e, i) {
        var n = t._content[e];
        if (null != n) {
            var r = 0
              , o = n.length;
            for (r; o > r; r++)
                n[r][i]()
        }
    }
    ,
    t._content = {},
    t
}();
__reflect(ObjectPool2.prototype, "ObjectPool2");
var QueueExecutor = function() {
    function t() {
        this._functions = new Array
    }
    return t.prototype.setCallBack = function(t, e) {
        this._callBack = t,
        this._callBackTarget = e
    }
    ,
    t.prototype.regist = function(t, e) {
        this._functions.push([t, e])
    }
    ,
    t.prototype.start = function() {
        this.next()
    }
    ,
    t.prototype.next = function() {
        if (this._functions)
            if (0 == this._functions.length)
                this._callBack && this._callBack.call(this._callBackTarget),
                this._callBack = null,
                this._callBackTarget = null,
                this._functions = null;
            else {
                var t = this._functions.shift();
                t[0].call(t[1])
            }
    }
    ,
    t
}();
__reflect(QueueExecutor.prototype, "QueueExecutor");
var RandomUtils = function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }
    return __extends(e, t),
    e.prototype.limit = function(t, e) {
        t = Math.min(t, e),
        e = Math.max(t, e);
        var i = e - t;
        return t + Math.random() * i
    }
    ,
    e.prototype.limitInteger = function(t, e) {
        return Math.round(this.limit(t, e))
    }
    ,
    e.prototype.randomArray = function(t) {
        var e = Math.floor(Math.random() * t.length);
        return t[e]
    }
    ,
    e
}(BaseClass);
__reflect(RandomUtils.prototype, "RandomUtils");
var RenderTextureManager = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._pool = [],
        e._useNum = 0,
        e.isLowerQQBrowser() ? e._maxNum = 18 : e._maxNum = -1,
        e
    }
    return __extends(e, t),
    e.prototype.isLowerQQBrowser = function() {
        if (App.DeviceUtils.IsQQBrowser) {
            for (var t = ["2013022", "Lenovo A630t", "SM-G3818", "vivo X3t", "GT-I9100"], e = !1, i = 0, n = t.length; n > i; i++)
                if (-1 != navigator.userAgent.indexOf(t[i])) {
                    e = !0;
                    break
                }
            return e
        }
        return !1
    }
    ,
    e.prototype.pop = function() {
        var t = this._pool.pop();
        return t || (-1 == this._maxNum || this._useNum < this._maxNum) && (t = new egret.RenderTexture,
        this._useNum++),
        t
    }
    ,
    e.prototype.push = function(t) {
        for (var e = !1, i = 0, n = this._pool.length; n > i; i++)
            if (this._pool[i] == t) {
                e = !0;
                break
            }
        e || this._pool.push(t)
    }
    ,
    e
}(BaseClass);
__reflect(RenderTextureManager.prototype, "RenderTextureManager");
var ResourceUtils = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._groupIndex = 0,
        e._configs = new Array,
        e._groups = {},
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, e.onResourceLoadComplete, e),
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, e.onResourceLoadProgress, e),
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, e.onResourceLoadError, e),
        e
    }
    return __extends(e, t),
    e.prototype.addConfig = function(t, e) {
        this._configs.push([t, e])
    }
    ,
    e.prototype.loadConfig = function(t, e) {
        this._onConfigComplete = t,
        this._onConfigCompleteTarget = e,
        this.loadNextConfig()
    }
    ,
    e.prototype.loadNextConfig = function() {
        if (0 == this._configs.length)
            return this._onConfigComplete.call(this._onConfigCompleteTarget),
            this._onConfigComplete = null,
            void (this._onConfigCompleteTarget = null);
        var t = this._configs.shift();
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this),
        RES.loadConfig(t[0], t[1])
    }
    ,
    e.prototype.onConfigCompleteHandle = function(t) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this),
        this.loadNextConfig()
    }
    ,
    e.prototype.loadGroup = function(t, e, i, n) {
        this._groups[t] = [e, i, n],
        RES.loadGroup(t)
    }
    ,
    e.prototype.loadGroups = function(t, e, i, n, r) {
        RES.createGroup(t, e, !0),
        this.loadGroup(t, i, n, r)
    }
    ,
    e.prototype.pilfererLoadGroup = function(t, e) {
        void 0 === e && (e = null);
        var i = "pilferer_" + t;
        e || (e = [t]),
        RES.createGroup(i, e, !0),
        RES.loadGroup(i, -1)
    }
    ,
    e.prototype.onResourceLoadComplete = function(t) {
        var e = t.groupName;
        if (this._groups[e]) {
            var i = this._groups[e][0]
              , n = this._groups[e][2];
            null != i && i.apply(n, [e]),
            this._groups[e] = null,
            delete this._groups[e]
        }
    }
    ,
    e.prototype.onResourceLoadProgress = function(t) {
        var e = t.groupName;
        if (this._groups[e]) {
            var i = this._groups[e][1]
              , n = this._groups[e][2];
            null != i && i.call(n, t.itemsLoaded, t.itemsTotal)
        }
    }
    ,
    e.prototype.onResourceLoadError = function(t) {
        Log.trace(t.groupName + "资源组有资源加载失败"),
        this.onResourceLoadComplete(t)
    }
    ,
    e.prototype.loadResource = function(t, e, i, n, r) {
        void 0 === t && (t = []),
        void 0 === e && (e = []),
        void 0 === i && (i = null),
        void 0 === n && (n = null),
        void 0 === r && (r = null);
        var o = t.concat(e)
          , s = "loadGroup" + this._groupIndex++;
        RES.createGroup(s, o, !0),
        this._groups[s] = [i, n, r],
        RES.loadGroup(s)
    }
    ,
    e.prototype.createGroup = function(t, e) {
        RES.createGroup(t, e, !0)
    }
    ,
    e
}(BaseClass);
__reflect(ResourceUtils.prototype, "ResourceUtils");
var ResVersionManager = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.res_loadByVersion(),
        e
    }
    return __extends(e, t),
    e.prototype.res_loadByVersion = function() {
        RES.getVirtualUrl = function(t) {
            var i = ""
              , n = e.resVersionData
              , r = t.substring(9);
            return n && n[r] && (i = n[r]),
            0 == i.length && (i = window.version),
            t += -1 == t.indexOf("?") ? "?v=" + i : "&v=" + i
        }
    }
    ,
    e.prototype.loadConfig = function(t, e, i) {
        this.complateFunc = e,
        this.complateFuncTarget = i,
        RES.getResByUrl(t, this.loadResVersionComplate, this)
    }
    ,
    e.prototype.loadResVersionComplate = function(t) {
        e.resVersionData = t,
        this.complateFunc.call(this.complateFuncTarget)
    }
    ,
    e
}(BaseClass);
__reflect(ResVersionManager.prototype, "ResVersionManager");
var ShockUtils = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.MAP = 0,
        e.SPRITE = 1,
        e.mapPoss = [new egret.Point(0,5), new egret.Point(0,0), new egret.Point(0,-5)],
        e.spritePoss = [new egret.Point(-5,-5), new egret.Point(5,-5), new egret.Point(0,0), new egret.Point(-5,5), new egret.Point(5,5)],
        e._shockLength = 0,
        e._shockCount = 0,
        e._rx = 0,
        e._ry = 0,
        e._type = 0,
        e._repeatCount = 0,
        e
    }
    return __extends(e, t),
    e.prototype.destroy = function() {
        this.stop()
    }
    ,
    e.prototype.shock = function(t, e, i) {
        void 0 === t && (t = 0),
        void 0 === e && (e = null),
        void 0 === i && (i = 3),
        this._target || (this._type = t,
        this._target = e,
        this._type == this.MAP ? (this._shockPoss = this.mapPoss.concat(),
        this._shockLength = this._shockPoss.length) : this._type == this.SPRITE && (this._shockPoss = this.spritePoss.concat(),
        this._shockLength = this._shockPoss.length),
        this.start(i))
    }
    ,
    e.prototype.start = function(t) {
        void 0 === t && (t = 1),
        this.repeatCount = t,
        this._shockCount = 0,
        this._target && (this._type != this.MAP && (this._rx = this._target.x),
        this._ry = this._target.y,
        App.TimerManager.doFrame(1, 0, this.onShockEnter, this))
    }
    ,
    e.prototype.stop = function() {
        this._target && (this._type != this.MAP && (this._target.x = this._rx),
        this._target.y = this._ry,
        App.TimerManager.remove(this.onShockEnter, this)),
        this._target = null
    }
    ,
    e.prototype.onShockEnter = function(t) {
        var e = this._shockLength * this._repeatCount;
        if (this._shockCount >= e)
            return void this.stop();
        var i = this._shockCount % this._shockLength
          , n = this._shockPoss[i];
        this._target && (this._type != this.MAP && (this._target.x = this._rx + n.x),
        this._target.y = this._ry + n.y),
        this._shockCount++
    }
    ,
    Object.defineProperty(e.prototype, "repeatCount", {
        get: function() {
            return this._repeatCount
        },
        set: function(t) {
            this._repeatCount = t
        },
        enumerable: !0,
        configurable: !0
    }),
    e
}(BaseClass);
__reflect(ShockUtils.prototype, "ShockUtils");
var StageUtils = function(t) {
    function e() {
        var i = t.call(this) || this;
        return null == e._uiStage && (e._uiStage = new eui.UILayer,
        e._uiStage.percentHeight = 100,
        e._uiStage.percentWidth = 100,
        e._uiStage.touchEnabled = !1,
        i.getStage().addChild(e._uiStage)),
        i
    }
    return __extends(e, t),
    e.prototype.getHeight = function() {
        return this.getStage().stageHeight
    }
    ,
    e.prototype.getWidth = function() {
        return this.getStage().stageWidth
    }
    ,
    e.prototype.setTouchChildren = function(t) {
        this.getStage().touchChildren = t
    }
    ,
    e.prototype.setMaxTouches = function(t) {
        this.getStage().maxTouches = t
    }
    ,
    e.prototype.setFrameRate = function(t) {
        this.getStage().frameRate = t
    }
    ,
    e.prototype.setScaleMode = function(t) {
        this.getStage().scaleMode = t
    }
    ,
    e.prototype.getStage = function() {
        return egret.MainContext.instance.stage
    }
    ,
    e.prototype.getUIStage = function() {
        return e._uiStage
    }
    ,
    e.prototype.startFullscreenAdaptation = function(t, e, i) {
        this.designWidth = t,
        this.designHeight = e,
        this.resizeCallback = i,
        this.stageOnResize()
    }
    ,
    e.prototype.stageOnResize = function() {
        this.getStage().removeEventListener(egret.Event.RESIZE, this.stageOnResize, this);
        var t = this.designWidth
          , e = this.designHeight
          , i = window.innerWidth
          , n = window.innerHeight
          , r = i / n
          , o = t / e
          , s = r / o;
        if (r > o) {
            var a = s
              , h = s;
            t = Math.floor(t * a),
            e = Math.floor(e * h)
        }
        this.getStage().setContentSize(t, e),
        this.resizeCallback && this.resizeCallback(),
        this.getStage().addEventListener(egret.Event.RESIZE, this.stageOnResize, this)
    }
    ,
    e
}(BaseClass);
__reflect(StageUtils.prototype, "StageUtils");
var StringBuffer = function() {
    function t() {
        this._strings = new Array
    }
    return t.prototype.append = function(t) {
        this._strings.push(t)
    }
    ,
    t.prototype.toString = function() {
        return this._strings.join("")
    }
    ,
    t.prototype.clear = function() {
        this._strings.length = 0
    }
    ,
    t
}();
__reflect(StringBuffer.prototype, "StringBuffer");
var StringUtils = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.trimSpace = function(t) {
        return t.replace(/^\s*(.*?)[\s\n]*$/g, "$1")
    }
    ,
    e.getStringLength = function(t) {
        for (var e = t.split(""), i = 0, n = 0; n < e.length; n++) {
            var r = e[n];
            i += this.isChinese(r) ? 2 : 1
        }
        return i
    }
    ,
    e.isChinese = function(t) {
        var e = /^.*[\u4E00-\u9FA5]+.*$/;
        return e.test(t)
    }
    ,
    e.isPhone = function(t) {
        var e = /^[1][3,4,5,7,8][0-9]{9}$/;
        return e.test(t)
    }
    ,
    e.isEmpty = function(t) {
        return null == t || t.length <= 0
    }
    ,
    e
}(BaseClass);
__reflect(StringUtils.prototype, "StringUtils");
var TextFlowMaker = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.STYLE_COLOR = "C",
        e.STYLE_SIZE = "S",
        e.PROP_TEXT = "T",
        e
    }
    return __extends(e, t),
    e.prototype.generateTextFlow = function(t) {
        for (var e = t.split("|"), i = [], n = 0, r = e.length; r > n; n++)
            i.push(this.getSingleTextFlow(e[n]));
        return i
    }
    ,
    e.prototype.getSingleTextFlow = function(t) {
        for (var e, i = t.split("&"), n = {
            style: {}
        }, r = 0, o = i.length; o > r; r++)
            e = i[r].split(":"),
            e[0] == this.PROP_TEXT ? n.text = e[1] : e[0] == this.STYLE_SIZE ? n.style.size = parseInt(e[1]) : e[0] == this.STYLE_COLOR ? n.style.textColor = parseInt(e[1]) : n.text = e[0];
        return n
    }
    ,
    e
}(BaseClass);
__reflect(TextFlowMaker.prototype, "TextFlowMaker");
var UrlUtils = function() {
    function t() {}
    return t.getPara = function(t, e) {
        if (egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE)
            return null;
        var i = e || location.href;
        if (-1 != i.indexOf("?")) {
            var n = "&" + i.split("?")[1]
              , r = new RegExp("&" + t + "=.*?(?:&|$)")
              , o = r.exec(n);
            if (o) {
                var s = o[0];
                return s.split("&")[1].split("=")[1]
            }
        }
        return null
    }
    ,
    t.setProperty = function(t, e, i) {
        var n = i || location.href
          , r = "&" + n.split("?")[1];
        if (-1 == n.indexOf("?"))
            return n += "?" + t + "=" + e;
        var r = n.split("?")[1];
        if ("" == r)
            return n += t + "=" + e;
        var o = new RegExp("(?:^|&)" + t + "=.*?(?:&|$)")
          , s = o.exec(r);
        if (s && "" != s[0]) {
            var a = s[0]
              , h = new RegExp("=.*$")
              , l = a.replace(h, "=" + e);
            return n.replace(a, l)
        }
        return n += "&" + t + "=" + e
    }
    ,
    t.hasProperty = function(t, e) {
        var i = e || location.href
          , n = "&" + i.split("?")[1];
        return -1 != n.indexOf("&" + t + "=")
    }
    ,
    t
}();
__reflect(UrlUtils.prototype, "UrlUtils");
var AlertView = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.getInstance = function() {
        return null == this._instance && (this._instance = new e),
        this._instance
    }
    ,
    e.prototype.createComplete = function(t) {}
    ,
    e.prototype.setConfirmCallBack = function(t, e) {
        this._confirmCallBackFun = t,
        this._thisObj = e
    }
    ,
    e.prototype.setCancelCallBack = function(t, e) {
        this._cancelCallBackFun = t,
        this._thisObj = e
    }
    ,
    e.prototype.show = function(t, i) {
        void 0 === i && (i = e.ALERT_MODE),
        this.contentTF.text = t,
        i == e.ALERT_MODE ? (this.confirmBtn2.visible = !0,
        this.cancelBtn.visible = this.confirmBtn.visible = !1) : (this.confirmBtn2.visible = !1,
        this.cancelBtn.visible = this.confirmBtn.visible = !0),
        e.isShow = !0
    }
    ,
    e.prototype.hide = function() {
        this._confirmCallBackFun = null,
        this._cancelCallBackFun = null,
        e.isShow = !1
    }
    ,
    e.prototype.touchBindButtonHandler = function(t) {
        t == this.confirmBtn ? (null != this._confirmCallBackFun && this._confirmCallBackFun.call(this._thisObj),
        this.hide()) : t == this.confirmBtn2 ? (null != this._confirmCallBackFun && this._confirmCallBackFun.call(this._thisObj),
        this.hide()) : (null != this._cancelCallBackFun && this._cancelCallBackFun.call(this._thisObj),
        this.hide())
    }
    ,
    e.ALERT_MODE = 1,
    e.CONFIRM_MODE = 2,
    e.isShow = !1,
    e._instance = null,
    e
}(BaseEuiLayer);
__reflect(AlertView.prototype, "AlertView");
var BitmapMovie = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.curFrame = 0,
        e._delay = 1e3 / 12,
        e.loop = 0,
        e
    }
    return __extends(e, t),
    e.prototype.init = function(t, e, i) {
        void 0 === e && (e = "png"),
        void 0 === i && (i = 12),
        this.textureList = [];
        for (var n = 0; i > n; n++) {
            var r = "";
            10 > n ? r = "0000" + n : 100 > n ? r = "000" + n : 1e3 > n ? r = "00" + n : 1e4 > n && (r = "0" + n),
            this.textureList.push(t + "_" + r + "_" + e)
        }
        this.textureList.length > 0 && (this.source = this.textureList[0],
        this.curFrame = 1,
        this.totalFrame = this.textureList.length)
    }
    ,
    e.prototype.play = function(t) {
        void 0 === t && (t = 0),
        this.loop = t,
        this.startTimer()
    }
    ,
    e.prototype.stop = function() {
        this.stopTimer()
    }
    ,
    e.prototype.gotoAndPlay = function(t, e) {
        void 0 === e && (e = 0),
        t <= this.totalFrame ? (this.loop = e,
        this.curFrame = t,
        this.source = this.textureList[t - 1],
        this.startTimer()) : console.error("BitmapMovie >> frame超出范围")
    }
    ,
    e.prototype.gotoAndStop = function(t) {
        t <= this.totalFrame ? (this.stopTimer(),
        this.curFrame = t,
        this.source = this.textureList[t - 1]) : console.error("BitmapMovie >> frame超出范围")
    }
    ,
    e.prototype.startTimer = function() {
        this.timer || (this.timer = new egret.Timer(this.delay)),
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this),
        this.timer.reset(),
        this.timer.start()
    }
    ,
    e.prototype.onTimerHandler = function() {
        this.curFrame++,
        this.curFrame <= this.totalFrame ? this.source = this.textureList[this.curFrame - 1] : (this.loop--,
        this.dispatchEvent(new egret.Event(egret.Event.LOOP_COMPLETE)),
        console.log(this.loop),
        this.curFrame = 1,
        this.source = this.textureList[this.curFrame - 1])
    }
    ,
    e.prototype.stopTimer = function() {
        this.timer && (this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this),
        this.timer.stop())
    }
    ,
    Object.defineProperty(e.prototype, "delay", {
        get: function() {
            return this._delay
        },
        set: function(t) {
            this._delay = t,
            this.timer && (this.timer.delay = t)
        },
        enumerable: !0,
        configurable: !0
    }),
    e
}(eui.Image);
__reflect(BitmapMovie.prototype, "BitmapMovie");
var BottomView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._isIndex2 = !1,
        e.addEventListener(eui.UIEvent.COMPLETE, e.onUIComplete, e),
        e.skinName = "BottomViewSkin",
        e
    }
    return __extends(e, t),
    e.prototype.onUIComplete = function() {
        this.bindButtons([this.btnCz, this.ljxzBtn, this.btnGg, this.btnKf, this.btnHd, this.btnWd])
    }
    ,
    Object.defineProperty(e.prototype, "isIndex", {
        set: function(t) {
            this.ljxzBtn.visible = t,
            this.btnKf.visible = !t,
            this._isIndex2 = !1
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "isIndex2", {
        set: function(t) {
            this._isIndex2 = t,
            this.ljxzBtn.visible = t,
            this.btnKf.visible = !t
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.btnCz:
            App.ViewManager.open(ViewConst.Recharge);
            break;
        case this.btnGg:
            App.ViewManager.open(ViewConst.XiaoXiList);
            break;
        case this.btnKf:
            NativeManager.call("openUrl", App.kefuUrl);
            break;
        case this.btnHd:
            SystemTips.show("功能暂未开放，敬请期待");
            break;
        case this.btnWd:
            App.ViewManager.open(ViewConst.Me);
            break;
        case this.ljxzBtn:
            this._isIndex2 ? App.ViewManager.open(ViewConst.Xiazhu2) : App.ViewManager.open(ViewConst.Xiazhu)
        }
    }
    ,
    e
}(BaseUIComponent);
__reflect(BottomView.prototype, "BottomView");
var ButtonItemView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "ButtonItemSkin",
        e
    }
    return __extends(e, t),
    Object.defineProperty(e.prototype, "label", {
        set: function(t) {
            this.lname.text = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "enable", {
        set: function(t) {
            t ? (this.bg.alpha = 1,
            this.lname.alpha = 1) : (this.bg.alpha = .5,
            this.lname.alpha = .5)
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.childrenCreated = function() {}
    ,
    e
}(eui.Component);
__reflect(ButtonItemView.prototype, "ButtonItemView");
var DataLoading = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.initView(),
        e
    }
    return __extends(e, t),
    e.getInstance = function() {
        return null == this._instance && (this._instance = new e),
        this._instance
    }
    ,
    e.prototype.show = function(t) {
        void 0 === t && (t = ""),
        App.stage.addChild(this)
    }
    ,
    e.prototype.hide = function() {
        App.stage.contains(this) && App.stage.removeChild(this)
    }
    ,
    e.prototype.initView = function() {
        var t = new egret.Shape;
        t.graphics.beginFill(0, 0),
        t.graphics.drawRect(0, 0, App.stage.stageWidth, App.stage.stageHeight),
        t.graphics.endFill(),
        this.addChild(t),
        t.touchEnabled = !0,
        this._icon2 = new egret.Bitmap,
        this._icon2.texture = RES.getRes("load_icon_png"),
        this.addChild(this._icon2),
        this._icon2.anchorOffsetX = .5 * this._icon2.width,
        this._icon2.anchorOffsetY = .5 * this._icon2.height,
        this._icon2.x = .5 * App.stage.stageWidth,
        this._icon2.y = .5 * App.stage.stageHeight,
        egret.Tween.get(this._icon2, {
            loop: !0
        }).to({
            rotation: 360
        }, 800)
    }
    ,
    e._instance = null,
    e
}(egret.Sprite);
__reflect(DataLoading.prototype, "DataLoading");
var DButton = function(t) {
    function e(e, i, n) {
        void 0 === i && (i = ""),
        void 0 === n && (n = "");
        var r = t.call(this) || this;
        return r._disableSkinName = "",
        r._selectSkinName = "",
        r._defaultSkinName = "",
        r._isEnabled = !0,
        r._defaultSkinName = e,
        r._selectSkinName = n,
        r._disableSkinName = i,
        r._skin = new egret.Bitmap(RES.getRes(e)),
        r.addChild(r._skin),
        r.touchEnabled = !0,
        r.touchChildren = !1,
        r.addEventListener(egret.TouchEvent.TOUCH_TAP, r.onTouchTap, r),
        r.addEventListener(egret.TouchEvent.TOUCH_BEGIN, r.onTouchBegin, r),
        r.addEventListener(egret.TouchEvent.TOUCH_END, r.onTouchCancel, r),
        r.addEventListener(egret.TouchEvent.TOUCH_CANCEL, r.onTouchCancel, r),
        r.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, r.onTouchCancel, r),
        r
    }
    return __extends(e, t),
    e.prototype.onTouchBegin = function(t) {
        var e = t.currentTarget;
        e.scaleX = e.scaleY = .9
    }
    ,
    e.prototype.onTouchCancel = function(t) {
        var e = t.currentTarget;
        e.scaleX = e.scaleY = 1
    }
    ,
    e.prototype.onTouchTap = function(t) {}
    ,
    e.prototype.setEnabled = function(t) {
        this._isEnabled = t,
        this._isEnabled ? this._skin.texture = RES.getRes(this._defaultSkinName) : this._skin.texture = RES.getRes(this._disableSkinName),
        this.touchEnabled = this.touchChildren = t
    }
    ,
    e.prototype.isEnabled = function() {
        return this._isEnabled
    }
    ,
    e
}(DComponent);
__reflect(DButton.prototype, "DButton");
var DCheckBox = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._selected = !1,
        e._chkImgName = "login_json.check_box1",
        e._chkImgName2 = "login_json.check_box2",
        e.initView(),
        e
    }
    return __extends(e, t),
    Object.defineProperty(e.prototype, "selected", {
        get: function() {
            return this._selected
        },
        set: function(t) {
            this._selected = t,
            this._skin.texture = this._selected ? RES.getRes(this._chkImgName2) : RES.getRes(this._chkImgName)
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.setLabel = function(t, e, i, n) {
        void 0 === e && (e = !0),
        void 0 === i && (i = 1),
        void 0 === n && (n = -1),
        e ? (this._label.texture = RES.getRes(t),
        this._label.x = i,
        this._label.y = n) : (null == this._labelTF && (this._labelTF = new egret.TextField),
        this._labelTF.fontFamily = App.DEFAULT_FONT_NAME,
        this._labelTF.textColor = 9063179,
        this._labelTF.size = 21,
        this._labelTF.textAlign = egret.HorizontalAlign.LEFT,
        this._labelTF.x = i,
        this._labelTF.y = n,
        this._labelTF.text = t,
        this.addChild(this._labelTF),
        this._touchAreShape.graphics.clear(),
        this._touchAreShape.graphics.beginFill(0),
        this._touchAreShape.graphics.drawRect(0, 0, this._labelTF.textWidth + this._label.x + this._skin.width, this._skin.height),
        this._touchAreShape.graphics.endFill(),
        this._touchAreShape.visible = !0,
        this.addChild(this._touchAreShape))
    }
    ,
    e.prototype.setSkin = function(t, e) {
        this._chkImgName = t,
        this._chkImgName2 = e,
        this._skin.texture = RES.getRes(t)
    }
    ,
    e.prototype.initView = function() {
        var t = this;
        this.touchEnabled = !0,
        this._skin = new egret.Bitmap,
        this._skin.texture = RES.getRes(this._chkImgName),
        this.addChild(this._skin),
        this._skin.touchEnabled = !0,
        this._label = new egret.Bitmap,
        this._label.x = 34,
        this._label.y = 0,
        this.addChild(this._label),
        this._label.touchEnabled = !0,
        this._label.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            t.selected = !t.selected
        }, this),
        this._touchAreShape = new egret.Sprite,
        this._touchAreShape.graphics.beginFill(0),
        this._touchAreShape.graphics.drawRect(0, 0, 100, this._skin.height),
        this._touchAreShape.graphics.endFill(),
        this.addChild(this._touchAreShape),
        this._touchAreShape.alpha = 0,
        this._touchAreShape.visible = !1,
        this._touchAreShape.touchEnabled = !0,
        this._skin.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            t.selected = !t.selected
        }, this),
        this._touchAreShape.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            t.selected = !t.selected
        }, this)
    }
    ,
    e
}(egret.Sprite);
__reflect(DCheckBox.prototype, "DCheckBox");
var DImage = function(t) {
    function e(e, i, n) {
        void 0 === e && (e = -1),
        void 0 === i && (i = -1),
        void 0 === n && (n = "hall_json.maskBg");
        var r = t.call(this) || this;
        return r._width = -1,
        r._height = -1,
        r._defaultImgRes = "",
        r._width = e,
        r._height = i,
        r._defaultImgRes = n,
        r._img = new egret.Bitmap,
        r._img.texture = RES.getRes(n),
        r.addChild(r._img),
        r._maskImg = new egret.Bitmap,
        r._maskImg.texture = RES.getRes(n),
        r.addChild(r._maskImg),
        r._img.mask = r._maskImg,
        -1 != e && -1 != i && (r._img.width = e,
        r._img.height = i),
        r
    }
    return __extends(e, t),
    Object.defineProperty(e.prototype, "defaultImg", {
        set: function(t) {
            this._defaultImgRes = t,
            this._img.texture = RES.getRes(t),
            this._maskImg.texture = RES.getRes(t)
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.clear = function() {
        this.defaultImg = this._defaultImgRes
    }
    ,
    e.prototype.getWidth = function() {
        return this._width
    }
    ,
    e.prototype.getHeight = function() {
        return this._height
    }
    ,
    e.prototype.load = function(t) {
        this._url = null == t ? "" : t;
        var e = new egret.ImageLoader;
        e.addEventListener(egret.Event.COMPLETE, this.imageComplete, this),
        e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFaceError, this),
        e.load(this._url)
    }
    ,
    e.prototype.onLoadFaceError = function(t) {
        console.log("load face ioerror")
    }
    ,
    e.prototype.imageComplete = function(t) {
        console.log("load face complete"),
        this._img.texture = t.target.data,
        this._img.width = this._width,
        this._img.height = this._height
    }
    ,
    e
}(egret.Sprite);
__reflect(DImage.prototype, "DImage");
var DMenuView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._arr = [],
        e._type = -1,
        e
    }
    return __extends(e, t),
    e.getInstance = function() {
        return null == this._instance && (this._instance = new e),
        this._instance
    }
    ,
    e.prototype.createChildren = function() {}
    ,
    e.prototype.hide = function() {}
    ,
    e.prototype.onTouchStageHandle = function(t) {
        var e = new egret.Rectangle(this.x,this.y,this.width,this.height);
        e.contains(t.stageX, t.stageY) || "moreBtn" != t.target.name && "filterBtn" != t.target.name && this.hide()
    }
    ,
    e.prototype.show = function(t, e, i, n) {
        void 0 === n && (n = -1),
        this._data = e,
        this._type = n,
        App.stage.addChild(this),
        this.x = i.x,
        this.y = i.y,
        1 == n ? this.menuBg.source = "zj_shaixuan_kuang_png" : this.menuBg.source = "c_menuBg_png",
        this._arr = t,
        this._arr = this._arr || [],
        this._container.removeChildren();
        for (var r = t.length, o = 0; r > o; o++) {
            var s = new DMenuItem;
            s.y = 48 * o,
            s.data = t[o],
            this._container.addChild(s),
            s.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchItemHandle, this)
        }
        App.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchStageHandle, this)
    }
    ,
    e.prototype.onTouchItemHandle = function(t) {
        var e = t.currentTarget
          , i = e.data;
        i.index;
        console.log("item index = " + i.index),
        this.hide()
    }
    ,
    e.prototype.createComplete = function(t) {
        this._container = new egret.DisplayObjectContainer,
        this.addChild(this._container),
        this._container.x = 12,
        this._container.y = 18
    }
    ,
    e.SELECT_MENU = "SELECT_MENU",
    e._instance = null,
    e
}(BaseEuiLayer);
__reflect(DMenuView.prototype, "DMenuView");
var DMenuItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "MenuItemSkin",
        e.name = "DMenuItem",
        e
    }
    return __extends(e, t),
    Object.defineProperty(e.prototype, "height", {
        get: function() {
            return 30
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.dataChanged = function() {
        t.prototype.dataChanged.call(this),
        console.log("this.data = " + this.data),
        this.updateView()
    }
    ,
    e.prototype.updateView = function() {
        null != this.data && (this.titleTF.text = this.data.text)
    }
    ,
    e
}(eui.ItemRenderer);
__reflect(DMenuItem.prototype, "DMenuItem");
var DMoneyValue = function() {
    function t(t) {
        this._value = 0,
        this._type = 0,
        this._skin = t,
        this._addBtn = t.addBtn,
        this._valueTF = t.valueTF,
        this._addBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this),
        this._addBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.touchRelease, this),
        this._addBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchRelease, this)
    }
    return t.prototype.touchBegin = function(t) {
        var e = t.currentTarget;
        e.scaleX = e.scaleY = .9
    }
    ,
    t.prototype.touchRelease = function(t) {
        var e = t.currentTarget;
        e.scaleX = e.scaleY = 1
    }
    ,
    t.prototype.setValue = function(t, e) {
        this._value = t,
        this._type = e,
        this.updateView()
    }
    ,
    t.prototype.updateView = function() {
        this._valueTF.text = this._value.toString()
    }
    ,
    t.GOLD = 0,
    t.DIAMAND = 1,
    t
}();
__reflect(DMoneyValue.prototype, "DMoneyValue");
var DNoticeView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._notices = [],
        e._noticeIndex = 0,
        e.skinName = "resource/app_skins/components/NoticeSkin.exml",
        e.initView(),
        e
    }
    return __extends(e, t),
    e.prototype.setTextColor = function(t) {
        this.noticeTF.textColor = t
    }
    ,
    e.prototype.addNotice = function(t) {
        this._notices.push(t),
        1 == this._notices.length && this.nextNotice(),
        this.visible = !0
    }
    ,
    e.prototype.nextNotice = function() {
        var t = this;
        this._noticeIndex >= this._notices.length && (this._noticeIndex = 0);
        var e = this._notices[this._noticeIndex];
        this.noticeTF.text = e,
        this.noticeTF.width = e.length * this.noticeTF.size + 5,
        this.noticeTF.validateNow(),
        egret.callLater(function() {
            t.noticeTF.width = t.noticeTF.textWidth + 5
        }, this);
        var i = (this.noticeTF.textWidth + this.noticeTF.x) / 700
          , n = 1e4 * i;
        egret.Tween.removeTweens(this.noticeTF),
        egret.Tween.get(this.noticeTF).to({
            x: 30 - this.noticeTF.textWidth
        }, n).call(function() {
            t.noticeTF.x = 760,
            t._noticeIndex++,
            t.nextNotice()
        }, this)
    }
    ,
    e.prototype.createComplete = function(t) {
        this.initView()
    }
    ,
    e.prototype.initView = function() {
        this.noticeTF.x = 760,
        this.noticeTF.multiline = !1,
        this.noticeTF.textAlign = egret.HorizontalAlign.LEFT,
        this.noticeTF.mask = this.maskRec
    }
    ,
    e
}(eui.Component);
__reflect(DNoticeView.prototype, "DNoticeView");
var DProgressBar = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._maxValue = 100,
        e._value = 0,
        e.initView(),
        e
    }
    return __extends(e, t),
    e.prototype.initView = function() {
        this._background = new egret.Bitmap,
        this._background.texture = RES.getRes("loading_background_png"),
        this.addChild(this._background),
        this._foreground = new egret.Bitmap,
        this._foreground.texture = RES.getRes("loading_forground_png"),
        this.addChild(this._foreground),
        this._foreground.x = 11,
        this._foreground.y = 4,
        this._maskImg = new egret.Shape,
        this._maskImg.graphics.beginFill(0, 1),
        this._maskImg.graphics.drawRect(0, 0, this._foreground.width, this._foreground.height),
        this._maskImg.graphics.endFill(),
        this.addChild(this._maskImg),
        this._maskImg.x = this._foreground.x,
        this._maskImg.y = this._foreground.y,
        this._foreground.mask = this._maskImg
    }
    ,
    e.prototype.setMaxValue = function(t) {
        this._maxValue = t
    }
    ,
    e.prototype.setValue = function(t, e) {
        void 0 === e && (e = 100),
        this._value = t,
        this._maxValue = e;
        var i = this._value / this._maxValue;
        this._maskImg.scaleX = i
    }
    ,
    e
}(DComponent);
__reflect(DProgressBar.prototype, "DProgressBar");
var DSlider = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i._barMax = 0,
        i._minValue = 0,
        i._maxValue = 100,
        i._touchStatus = !1,
        i._distance = new egret.Point,
        i._skin = e,
        i.initView(),
        i
    }
    return __extends(e, t),
    e.prototype.setEnabled = function(t) {
        this._skin.touchEnabled = t
    }
    ,
    e.prototype.setMinValue = function(t) {
        this._minValue = t
    }
    ,
    e.prototype.getMinValue = function() {
        return this._minValue
    }
    ,
    e.prototype.setMaxValue = function(t) {
        this._maxValue = t
    }
    ,
    e.prototype.getMaxValue = function() {
        return this._maxValue
    }
    ,
    e.prototype.setValue = function(t) {
        t < this._minValue ? t = this._minValue : t > this._maxValue && (t = this._maxValue);
        var e = this._barMax * ((t - this._minValue) / (this._maxValue - this._minValue));
        this.updateBarPosition(e),
        this._maskImg.scaleX = (t - this._minValue) / (this._maxValue - this._minValue)
    }
    ,
    e.prototype.updateBarPosition = function(t) {
        this._barImg.x = t,
        this._barImg.x = Math.min(this._barMax, this._barImg.x),
        this._barImg.x = Math.max(e.DEFAULT_POS_X, this._barImg.x),
        this.valueTF.x = this._barImg.x - 33;
        var i = this.getValue();
        this.valueTF.text = i.toString()
    }
    ,
    e.prototype.getValue = function() {
        var t = this._minValue + (this._maxValue - this._minValue) * ((this._barImg.x - e.DEFAULT_POS_X) / (this._barMax - e.DEFAULT_POS_X));
        return t = Math.floor(100 * t) / 100
    }
    ,
    e.prototype.initView = function() {
        this._background = this._skin.sliderBackground,
        this._forground = this._skin.sliderForeground,
        this._barImg = this._skin.sliderBtn,
        this.valueTF = this._skin.valueTF,
        this.valueTF.text = "0.00",
        this._barMax = this._skin.width - e.DEFAULT_POS_X,
        this._maskImg = new egret.Shape,
        this._maskImg.graphics.beginFill(0),
        this._maskImg.graphics.drawRect(0, this._background.y, this._skin.width, this._background.height),
        this._maskImg.graphics.endFill(),
        this._skin.addChild(this._maskImg),
        this._forground.mask = this._maskImg,
        this._barImg.touchEnabled = !1,
        this.valueTF.touchEnabled = !1,
        this._skin.touchChildren = !1,
        this._skin.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this),
        this._skin.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this),
        this._skin.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchEnd, this),
        this._skin.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this),
        this._skin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this)
    }
    ,
    e.prototype.onTouchTap = function(t) {
        this.updateBarPosition(t.localX),
        this._maskImg.scaleX = this._barImg.x / this._barMax
    }
    ,
    e.prototype.onTouchBegin = function(t) {
        this._touchStatus = !0,
        this._distance.x = t.stageX - this._barImg.x,
        this._distance.y = t.stageY - this._barImg.y
    }
    ,
    e.prototype.onTouchMove = function(t) {
        this._touchStatus && (this.updateBarPosition(t.stageX - this._distance.x),
        this._maskImg.scaleX = this._barImg.x / this._barMax)
    }
    ,
    e.prototype.onTouchEnd = function(t) {
        this._touchStatus = !1
    }
    ,
    e.DEFAULT_POS_X = 30,
    e
}(egret.EventDispatcher);
__reflect(DSlider.prototype, "DSlider");
var DToggleButton = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._isSelect = !1,
        e.skinName = "DToggleButtonSkin",
        e.name = "DToggleButton",
        e
    }
    return __extends(e, t),
    Object.defineProperty(e.prototype, "label", {
        set: function(t) {
            this.labelTF.text = t
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.initView()
    }
    ,
    e.prototype.getSelect = function() {
        return this._isSelect
    }
    ,
    e.prototype.setSelect = function(t) {
        this._isSelect = t,
        t ? (this.selectImg.x = 140,
        this.bgImg.source = "hh2_png") : (this.selectImg.x = 111,
        this.bgImg.source = "hh1_png")
    }
    ,
    e.prototype.touchBindButtonHandler = function(t) {
        this.setSelect(!this._isSelect)
    }
    ,
    e.prototype.createComplete = function(t) {}
    ,
    e.prototype.initView = function() {
        this.selectImg.touchEnabled = !1
    }
    ,
    e.prototype.dispose = function() {}
    ,
    e
}(eui.Component);
__reflect(DToggleButton.prototype, "DToggleButton");
var DVersion = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.showVersion = function(t, e) {
        null == this.mTFVersion && (this.mTFVersion = new egret.TextField,
        this.addChild(this.mTFVersion),
        this.mTFVersion.text = App.version,
        this.mTFVersion.fontFamily = "Microsoft YaHei",
        this.mTFVersion.textColor = 16773804,
        this.mTFVersion.size = 20,
        this.mTFVersion.width = 120,
        this.mTFVersion.textAlign = egret.HorizontalAlign.RIGHT,
        this.mTFVersion.anchorOffsetX = this.mTFVersion.width,
        this.mTFVersion.anchorOffsetY = this.mTFVersion.height,
        this.mTFVersion.x = t,
        this.mTFVersion.y = e)
    }
    ,
    e
}(egret.Sprite);
__reflect(DVersion.prototype, "DVersion");
var GameZhuItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "resource/app_skins/items/ZhuItemViewSkin.exml",
        e
    }
    return __extends(e, t),
    e.prototype.reset = function() {
        this.amount = 0,
        this.lamount.text = "0",
        this.getscoreTF.visible = !1,
        egret.Tween.removeTweens(this.getscoreTF)
    }
    ,
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchlHandler, this)
    }
    ,
    e.prototype.onTouchlHandler = function(t) {
        App.MessageCenter.dispatch("user_xiaZhu", this.data, this)
    }
    ,
    e.prototype.setAmount = function(t, e) {
        var i = this;
        void 0 === e && (e = !1),
        t > 0 && (this.amount = t,
        this.lamount.text = t.toString(),
        e ? (this.getscoreTF.text = "+" + t,
        this.getscoreTF.visible = !0,
        this.getscoreTF.y = 196,
        egret.Tween.get(this.getscoreTF).to({
            y: 156
        }, 300).wait(500).call(function() {
            i.getscoreTF.visible = !1
        }, this)) : (this.getscoreTF.visible = !1,
        egret.Tween.removeTweens(this.getscoreTF)))
    }
    ,
    e.prototype.dataChanged = function() {
        this.data && (this.name = "ta" + this.data.weaponId,
        this.aniImg.source = "index_ani_" + this.data.weaponId + "_png",
        this.numTF.text = this.data.weaponId,
        this.lname.text = this.data.weaponName + " " + this.data.rate + "份"),
        this.reset()
    }
    ,
    e
}(eui.ItemRenderer);
__reflect(GameZhuItem.prototype, "GameZhuItem");
var MessagePop = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.initView(),
        e
    }
    return __extends(e, t),
    e.show = function(t) {
        var i;
        i = e.pool.length > 0 ? e.pool.pop() : new e,
        i && i.show(t)
    }
    ,
    e.prototype.show = function(t) {}
    ,
    e.prototype.tweenEnd = function() {
        this.parent && (this.parent.removeChild(this),
        e.pool.push(this))
    }
    ,
    e.prototype.initView = function() {
        this._bg = new egret.Bitmap,
        this._bg.texture = RES.getRes("messageBg_png"),
        this.addChild(this._bg),
        this._contentTF = new egret.TextField,
        this._contentTF.fontFamily = App.DEFAULT_FONT_NAME,
        this._contentTF.textColor = 0,
        this._contentTF.size = 30,
        this._contentTF.text = "message...",
        this.addChild(this._contentTF)
    }
    ,
    e.pool = [],
    e
}(DComponent);
__reflect(MessagePop.prototype, "MessagePop");
var SystemTips = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.addEventListener(eui.UIEvent.COMPLETE, e.onUIComplete, e),
        e.skinName = "resource/app_skins/components/SystemTipSkin.exml",
        e.touchEnabled = e.touchChildren = !1,
        e.width = 746,
        e.height = 70,
        e
    }
    return __extends(e, t),
    e.show = function(t) {
        null == this._self && (this._self = new e),
        this._self.show2(t)
    }
    ,
    e.prototype.onUIComplete = function() {}
    ,
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.percentWidth = 100,
        this.percentHeight = 100
    }
    ,
    e.prototype.show2 = function(t) {
        var e = this;
        App.stage.addChild(this),
        this.messageTF.text = t,
        this.x = App.stageW - this.width >> 1,
        this.y = App.stageH - this.height >> 1,
        this.alpha = 1,
        egret.Tween.removeTweens(this),
        egret.Tween.get(this).wait(1e3).to({
            alpha: 0,
            y: this.y - 100
        }, 1e3).call(function() {
            egret.Tween.removeTweens(e),
            App.stage.removeChild(e)
        }, this)
    }
    ,
    e
}(BaseUIComponent);
__reflect(SystemTips.prototype, "SystemTips");
var ControllerConst;
!function(t) {
    t[t.Loading = 1e4] = "Loading",
    t[t.Login = 10001] = "Login",
    t[t.Register = 10002] = "Register",
    t[t.BindTixian = 10003] = "BindTixian",
    t[t.BindTixian2 = 10004] = "BindTixian2",
    t[t.bindMobile = 10005] = "bindMobile",
    t[t.Rule = 10006] = "Rule",
    t[t.TixianRecord = 10007] = "TixianRecord",
    t[t.RechargeRecord = 10008] = "RechargeRecord",
    t[t.Recharge = 10009] = "Recharge",
    t[t.RechargeInfo = 10010] = "RechargeInfo",
    t[t.RechargeInfo2 = 10011] = "RechargeInfo2",
    t[t.Tixian = 10012] = "Tixian",
    t[t.XiaJiZhuanZhang = 10013] = "XiaJiZhuanZhang",
    t[t.ZiJinMiMa = 10014] = "ZiJinMiMa",
    t[t.DengLuMiMa = 10015] = "DengLuMiMa",
    t[t.XiaoXiList = 10016] = "XiaoXiList",
    t[t.XiaoXiDetail = 10017] = "XiaoXiDetail",
    t[t.XiaoFeiJiLu = 10018] = "XiaoFeiJiLu",
    t[t.TzJilu = 10019] = "TzJilu",
    t[t.TjJilu = 10020] = "TjJilu",
    t[t.TanXianJiLu = 10021] = "TanXianJiLu",
    t[t.Me = 10022] = "Me",
    t[t.Tuiguang = 10023] = "Tuiguang",
    t[t.GameGuiZe = 10024] = "GameGuiZe",
    t[t.ZhangBianMingXi = 10025] = "ZhangBianMingXi",
    t[t.Daili_Fenhong = 10026] = "Daili_Fenhong",
    t[t.Select_date = 10027] = "Select_date",
    t[t.Add_huiyuan = 10028] = "Add_huiyuan",
    t[t.Add_daili = 10029] = "Add_daili",
    t[t.Select_face = 10030] = "Select_face",
    t[t.Feichuan = 10031] = "Feichuan",
    t[t.ACCOUNT_INFO = 10032] = "ACCOUNT_INFO",
    t[t.ACCOUNT_INFO2 = 10033] = "ACCOUNT_INFO2",
    t[t.XiazhuRecord = 10034] = "XiazhuRecord",
    t[t.Index = 10035] = "Index",
    t[t.Index2 = 10036] = "Index2",
    t[t.Result = 10037] = "Result",
    t[t.Index3 = 10038] = "Index3",
    t[t.Activity = 10039] = "Activity",
    t[t.RedpacketInfo = 10040] = "RedpacketInfo",
    t[t.RechargeActivity = 10041] = "RechargeActivity",
    t[t.Select_Area = 10042] = "Select_Area",
    t[t.Touzhu = 10043] = "Touzhu",
    t[t.Jingong = 10044] = "Jingong",
    t[t.Test = 10045] = "Test",
    t[t.TlResult = 10046] = "TlResult",
    t[t.Xiazhu = 10047] = "Xiazhu",
    t[t.Select = 10048] = "Select",
    t[t.Xiazhu2 = 10049] = "Xiazhu2",
    t[t.Xiazhu3 = 10050] = "Xiazhu3",
    t[t.Xiazhu4 = 10051] = "Xiazhu4",
    t[t.Report = 10052] = "Report",
    t[t.ModifyRate = 10053] = "ModifyRate",
    t[t.MofiyFenhong = 10054] = "MofiyFenhong",
    t[t.GerenReport = 10055] = "GerenReport",
    t[t.Home = 10056] = "Home",
    t[t.Game = 10057] = "Game",
    t[t.Kj34Time = 10058] = "Kj34Time"
}(ControllerConst || (ControllerConst = {}));
var SceneConsts;
!function(t) {
    t[t.Login = 1] = "Login",
    t[t.Home = 2] = "Home"
}(SceneConsts || (SceneConsts = {}));
var GameApp = function() {
    function t() {}
    return Object.defineProperty(t, "HeartMgr", {
        get: function() {
            return HeartMgr.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }),
    t.prototype.start = function() {
        this.registerController(),
        App.MessageCenter.addListener(GameEventManager.LOGIN_SUCCESS, this.onLoginResponse, this),
        this.autoLogin()
    }
    ,
    t.prototype.registerController = function() {
        App.SceneManager.register(SceneConsts.Home, new HomeScene),
        App.SceneManager.register(SceneConsts.Login, new LoginScene),
        App.ControllerManager.register(ControllerConst.Login, new LoginController),
        App.ControllerManager.register(ControllerConst.Register, new RegisterController),
        App.ControllerManager.register(ControllerConst.BindTixian, new BindTixianController),
        App.ControllerManager.register(ControllerConst.BindTixian2, new BindTixianController2),
        App.ControllerManager.register(ControllerConst.Recharge, new RechargeController),
        App.ControllerManager.register(ControllerConst.RechargeInfo, new RechargeInfoController),
        App.ControllerManager.register(ControllerConst.RechargeInfo2, new RechargeInfoController2),
        App.ControllerManager.register(ControllerConst.RechargeRecord, new RechargeRecordController),
        App.ControllerManager.register(ControllerConst.XiaJiZhuanZhang, new XiaJiZhuanZhangController),
        App.ControllerManager.register(ControllerConst.ZiJinMiMa, new ZiJinMiMaController),
        App.ControllerManager.register(ControllerConst.Me, new MeController),
        App.ControllerManager.register(ControllerConst.Tuiguang, new TuiguangController),
        App.ControllerManager.register(ControllerConst.ZhangBianMingXi, new ZhangBianMingXiController),
        App.ControllerManager.register(ControllerConst.DengLuMiMa, new DengLuMiMaController),
        App.ControllerManager.register(ControllerConst.XiaoXiList, new XiaoXiListController),
        App.ControllerManager.register(ControllerConst.XiaoXiDetail, new XiaoXiDetailController),
        App.ControllerManager.register(ControllerConst.Select_date, new SelectDateController),
        App.ControllerManager.register(ControllerConst.Report, new ReportController),
        App.ControllerManager.register(ControllerConst.ModifyRate, new ModifyRateController),
        App.ControllerManager.register(ControllerConst.MofiyFenhong, new ModifyFenhongController),
        App.ControllerManager.register(ControllerConst.GerenReport, new GerenReportController),
        App.ControllerManager.register(ControllerConst.Tixian, new TixianController),
        App.ControllerManager.register(ControllerConst.TixianRecord, new TixianRecordController),
        App.ControllerManager.register(ControllerConst.Add_huiyuan, new AddHuiyuanController),
        App.ControllerManager.register(ControllerConst.Add_daili, new AddDailiController),
        App.ControllerManager.register(ControllerConst.Select, new SelectController),
        App.ControllerManager.register(ControllerConst.Index3, new TlGameController),
        App.ControllerManager.register(ControllerConst.Touzhu, new TouZhuJiLuController),
        App.ControllerManager.register(ControllerConst.TlResult, new TlKaijiangResultController)
    }
    ,
    t.prototype.onLoginResponse = function() {
        Log.trace("onLoginResponse>>"),
        App.MessageCenter.removeListener(GameEventManager.LOGIN_SUCCESS, this.onLoginResponse, this),
        App.Socket.initServer(App.GlobalData.SocketServer, App.GlobalData.SocketPort, App.GlobalData.SocketUrl, new UTFMsgByJson),
        this.connectServer()
    }
    ,
    t.prototype.onBindResponse = function() {
        App.Socket.initServer(App.GlobalData.SocketServer, App.GlobalData.SocketPort, App.GlobalData.SocketUrl, new UTFMsgByJson),
        this.connectServer()
    }
    ,
    t.prototype.autoLogin = function() {
        this.runLogin()
    }
    ,
    t.prototype.goLogin = function() {
        console.log("goLogin..."),
        AlertView.isShow && AlertView.getInstance().hide(),
        Http.token = "",
        CookieManager.remove("token"),
        SoundManager.instance.stopMusic(),
        SoundManager.instance.stopSound(),
        App.Socket.close(),
        t.HeartMgr.uninit(),
        App.MessageCenter.removeListener(SocketConst.PLAYER_BET_INFO, this.onUpdateBet, this),
        this.runLogin(),
        App.MessageCenter.addListener(GameEventManager.LOGIN_SUCCESS, this.onLoginResponse, this)
    }
    ,
    t.prototype.onSocketConnected = function() {
        t.HeartMgr.init(),
        App.MessageCenter.removeListener(SocketConst.SOCKET_CONNECT, this.onSocketConnected, this),
        App.MessageCenter.addListener(GameEventManager.BACK_TO_LOGIN, this.goLogin, this),
        App.MessageCenter.addListener(SocketConst.PLAYER_BET_INFO, this.onUpdateBet, this),
        App.SceneManager.runScene(SceneConsts.Home),
        App.ViewManager.open(ViewConst.Select),
        this.getNotice()
    }
    ,
    t.prototype.getNotice = function() {
        var t = new CommandVo;
        t.action = Http.publicNotice,
        t.params = {
            pageNumber: 0,
            pageSize: 1
        },
        App.Http.send(t, this, function(t) {
            if (null != t) {
                var e = t.list;
                if (e = e || [],
                e.length > 0) {
                    var i = e[0];
                    App.ViewManager.open(ViewConst.XiaoXiDetail, i)
                }
            }
        })
    }
    ,
    t.prototype.onUpdateBet = function(t, e) {
        var i = e.balance
          , n = e.amtProfit
          , r = e.cashOut;
        MyUserInfo.getInstance().amtProfit = n,
        MyUserInfo.getInstance().balance = i,
        e.hasOwnProperty("cashOut") && (MyUserInfo.getInstance().cashOut = r)
    }
    ,
    t.prototype.connectServer = function() {
        App.Socket.connect(),
        App.MessageCenter.addListener(SocketConst.SOCKET_CONNECT, this.onSocketConnected, this),
        App.MessageCenter.addListener(SocketConst.SOCKET_RECONNECT, function() {
            t.HeartMgr.resume(),
            console.log("重连成功")
        }, this),
        App.MessageCenter.addListener(SocketConst.SOCKET_START_RECONNECT, function() {
            t.HeartMgr.pause(),
            console.log("start to reconnect to the server...")
        }, this),
        App.MessageCenter.addListener(SocketConst.SOCKET_CLOSE, function() {
            t.HeartMgr.pause()
        }, this),
        App.MessageCenter.addListener(SocketConst.SOCKET_NOCONNECT, function() {
            t.HeartMgr.pause()
        }, this)
    }
    ,
    t.prototype.runLogin = function() {
        return App.SceneManager.runScene(SceneConsts.Login),
        App.ViewManager.open(ViewConst.Login),
        !0
    }
    ,
    t.gameId = 1003,
    t.TOWER = 1003,
    t.TOWER2 = 1004,
    t.clientIp = "",
    t.deviceId = "",
    t.taNames = ["", "箭塔", "火焰使者", "雷神", "圣光骑士", "神枪手", "暮色游侠", "精灵仙子", "神谕祭司"],
    t.monsterNames_2 = ["", "冰魔兔", "深渊兽人", "血翼飞龙", "幽冥萨满", "狼骑兵", "地狱蜘蛛", "黑煞狼", "哥布林"],
    t.monsterNames = ["", "原始人", "蝙蝠", "乙龙", "赤毒", "骇鸟", "长毛豚", "砖石狂牛", "火山咔咔"],
    t.monsterNames2 = ["", "毒蘑菇", "投石车", "灭龙果", "仙人球", "铁象牙", "食豚花", "熔岩", "地狱魔瞳"],
    t.MONSTER_COLORS = [0, 0, 15728879, 16384002, 549580, 16343071, 0, 0],
    t.BANK_TYPES = [{
        value: "ICBC",
        text: "中国工商银行"
    }, {
        value: "ABC",
        text: "中国农业银行"
    }, {
        value: "BOC",
        text: "中国银行"
    }, {
        value: "CCB",
        text: "中国建设银行"
    }, {
        value: "PSBC",
        text: "中国邮政储蓄银行"
    }, {
        value: "COMM",
        text: "交通银行"
    }, {
        value: "CMB",
        text: "招商银行"
    }, {
        value: "SPDB",
        text: "上海浦东发展银行"
    }, {
        value: "CIB",
        text: "兴业银行"
    }, {
        value: "HXBANK",
        text: "华夏银行"
    }, {
        value: "GDB",
        text: "广东发展银行"
    }, {
        value: "CMBC",
        text: "中国民生银行"
    }, {
        value: "CDB",
        text: "国家开发银行"
    }, {
        value: "CITIC",
        text: "中信银行"
    }, {
        value: "CEB",
        text: "中国光大银行"
    }, {
        value: "EGBANK",
        text: "恒丰银行"
    }, {
        value: "CZBANK",
        text: "浙商银行"
    }, {
        value: "BOHAIB",
        text: "渤海银行"
    }, {
        value: "SPABANK",
        text: "平安银行"
    }, {
        value: "SHRCB",
        text: "上海农村商业银行"
    }, {
        value: "YXCCB",
        text: "玉溪市商业银行"
    }, {
        value: "YDRCB",
        text: "尧都农商行"
    }, {
        value: "BJBANK",
        text: "北京银行"
    }, {
        value: "SHBANK",
        text: "上海银行"
    }, {
        value: "JSBANK",
        text: "江苏银行"
    }, {
        value: "HZCB",
        text: "杭州银行"
    }, {
        value: "NJCB",
        text: "南京银行"
    }, {
        value: "NBBANK",
        text: "宁波银行"
    }, {
        value: "HSBANK",
        text: "徽商银行"
    }, {
        value: "CSCB",
        text: "长沙银行"
    }, {
        value: "CDCB",
        text: "成都银行"
    }, {
        value: "CQBANK",
        text: "重庆银行"
    }, {
        value: "DLB",
        text: "大连银行"
    }, {
        value: "NCB",
        text: "南昌银行"
    }, {
        value: "FJHXBC",
        text: "福建海峡银行"
    }, {
        value: "HKB",
        text: "汉口银行"
    }, {
        value: "WZCB",
        text: "温州银行"
    }, {
        value: "QDCCB",
        text: "青岛银行"
    }, {
        value: "TZCB",
        text: "台州银行"
    }, {
        value: "JXBANK",
        text: "嘉兴银行"
    }, {
        value: "CSRCB",
        text: "常熟农村商业银行"
    }, {
        value: "NHB",
        text: "南海农村信用联社"
    }, {
        value: "CZRCB",
        text: "常州农村信用联社"
    }, {
        value: "H3CB",
        text: "内蒙古银行"
    }, {
        value: "SXCB",
        text: "绍兴银行"
    }, {
        value: "SDEB",
        text: "顺德农商银行"
    }, {
        value: "WJRCB",
        text: "吴江农商银行"
    }, {
        value: "ZBCB",
        text: "齐商银行"
    }, {
        value: "GYCB",
        text: "贵阳市商业银行"
    }, {
        value: "ZYCBANK",
        text: "遵义市商业银行"
    }, {
        value: "HZCCB",
        text: "湖州市商业银行"
    }, {
        value: "DAQINGB",
        text: "龙江银行"
    }, {
        value: "JINCHB",
        text: "晋城银行JCBANK"
    }, {
        value: "ZJTLCB",
        text: "浙江泰隆商业银行"
    }, {
        value: "GDRCC",
        text: "广东省农村信用社联合社"
    }, {
        value: "DRCBCL",
        text: "东莞农村商业银行"
    }, {
        value: "MTBANK",
        text: "浙江民泰商业银行"
    }, {
        value: "GCB",
        text: "广州银行"
    }, {
        value: "LYCB",
        text: "辽阳市商业银行"
    }, {
        value: "JSRCU",
        text: "江苏省农村信用联合社"
    }, {
        value: "LANGFB",
        text: "廊坊银行"
    }, {
        value: "CZCB",
        text: "浙江稠州商业银行"
    }, {
        value: "DYCB",
        text: "德阳商业银行"
    }, {
        value: "JZBANK",
        text: "晋中市商业银行"
    }, {
        value: "BOSZ",
        text: "苏州银行"
    }, {
        value: "GLBANK",
        text: "桂林银行"
    }, {
        value: "URMQCCB",
        text: "乌鲁木齐市商业银行"
    }, {
        value: "CDRCB",
        text: "成都农商银行"
    }, {
        value: "ZRCBANK",
        text: "张家港农村商业银行"
    }, {
        value: "BOD",
        text: "东莞银行"
    }, {
        value: "LSBANK",
        text: "莱商银行"
    }, {
        value: "BJRCB",
        text: "北京农村商业银行"
    }, {
        value: "TRCB",
        text: "天津农商银行"
    }, {
        value: "SRBANK",
        text: "上饶银行"
    }, {
        value: "FDB",
        text: "富滇银行"
    }, {
        value: "CRCBANK",
        text: "重庆农村商业银行"
    }, {
        value: "ASCB",
        text: "鞍山银行"
    }, {
        value: "NXBANK",
        text: "宁夏银行"
    }, {
        value: "BHB",
        text: "河北银行"
    }, {
        value: "HRXJB",
        text: "华融湘江银行"
    }, {
        value: "ZGCCB",
        text: "自贡市商业银行"
    }, {
        value: "YNRCC",
        text: "云南省农村信用社"
    }, {
        value: "JLBANK",
        text: "吉林银行"
    }, {
        value: "DYCCB",
        text: "东营市商业银行"
    }, {
        value: "KLB",
        text: "昆仑银行"
    }, {
        value: "ORBANK",
        text: "鄂尔多斯银行"
    }, {
        value: "XTB",
        text: "邢台银行"
    }, {
        value: "JSB",
        text: "晋商银行"
    }, {
        value: "TCCB",
        text: "天津银行"
    }, {
        value: "BOYK",
        text: "营口银行"
    }, {
        value: "JLRCU",
        text: "吉林农信"
    }, {
        value: "SDRCU",
        text: "山东农信"
    }, {
        value: "XABANK",
        text: "西安银行"
    }, {
        value: "HBRCU",
        text: "河北省农村信用社"
    }, {
        value: "NXRCU",
        text: "宁夏黄河农村商业银行"
    }, {
        value: "GZRCU",
        text: "贵州省农村信用社"
    }, {
        value: "FXCB",
        text: "阜新银行"
    }, {
        value: "HBHSBANK",
        text: "湖北银行黄石分行"
    }, {
        value: "ZJNX",
        text: "浙江省农村信用社联合社"
    }, {
        value: "XXBANK",
        text: "新乡银行"
    }, {
        value: "HBYCBANK",
        text: "湖北银行宜昌分行"
    }, {
        value: "LSCCB",
        text: "乐山市商业银行"
    }, {
        value: "TCRCB",
        text: "江苏太仓农村商业银行"
    }, {
        value: "BZMD",
        text: "驻马店银行"
    }, {
        value: "GZB",
        text: "赣州银行"
    }, {
        value: "WRCB",
        text: "无锡农村商业银行"
    }, {
        value: "BGB",
        text: "广西北部湾银行"
    }, {
        value: "GRCB",
        text: "广州农商银行"
    }, {
        value: "JRCB",
        text: "江苏江阴农村商业银行"
    }, {
        value: "BOP",
        text: "平顶山银行"
    }, {
        value: "TACCB",
        text: "泰安市商业银行"
    }, {
        value: "CGNB",
        text: "南充市商业银行"
    }, {
        value: "CCQTGB",
        text: "重庆三峡银行"
    }, {
        value: "XLBANK",
        text: "中山小榄村镇银行"
    }, {
        value: "HDBANK",
        text: "邯郸银行"
    }, {
        value: "KORLABANK",
        text: "库尔勒市商业银行"
    }, {
        value: "BOJZ",
        text: "锦州银行"
    }, {
        value: "QLBANK",
        text: "齐鲁银行"
    }, {
        value: "BOQH",
        text: "青海银行"
    }, {
        value: "YQCCB",
        text: "阳泉银行"
    }, {
        value: "SJBANK",
        text: "盛京银行"
    }, {
        value: "FSCB",
        text: "抚顺银行"
    }, {
        value: "ZZBANK",
        text: "郑州银行"
    }, {
        value: "SRCB",
        text: "深圳农村商业银行"
    }, {
        value: "BANKWF",
        text: "潍坊银行"
    }, {
        value: "JJBANK",
        text: "九江银行"
    }, {
        value: "JXRCU",
        text: "江西省农村信用"
    }, {
        value: "HNRCU",
        text: "河南省农村信用"
    }, {
        value: "GSRCU",
        text: "甘肃省农村信用"
    }, {
        value: "SCRCU",
        text: "四川省农村信用"
    }, {
        value: "GXRCU",
        text: "广西省农村信用"
    }, {
        value: "SXRCCU",
        text: "陕西信合"
    }, {
        value: "WHRCB",
        text: "武汉农村商业银行"
    }, {
        value: "YBCCB",
        text: "宜宾市商业银行"
    }, {
        value: "KSRB",
        text: "昆山农村商业银行"
    }, {
        value: "SZSBK",
        text: "石嘴山银行"
    }, {
        value: "HSBK",
        text: "衡水银行"
    }, {
        value: "XYBANK",
        text: "信阳银行"
    }, {
        value: "NBYZ",
        text: "鄞州银行"
    }, {
        value: "ZJKCCB",
        text: "张家口市商业银行"
    }, {
        value: "XCYH",
        text: "许昌银行"
    }, {
        value: "JNBANK",
        text: "济宁银行"
    }, {
        value: "CBKF",
        text: "开封市商业银行"
    }, {
        value: "WHCCB",
        text: "威海市商业银行"
    }, {
        value: "HBC",
        text: "湖北银行"
    }, {
        value: "BOCD",
        text: "承德银行"
    }, {
        value: "BODD",
        text: "丹东银行"
    }, {
        value: "JHBANK",
        text: "金华银行"
    }, {
        value: "BOCY",
        text: "朝阳银行"
    }, {
        value: "LSBC",
        text: "临商银行"
    }, {
        value: "BSB",
        text: "包商银行"
    }, {
        value: "LZYH",
        text: "兰州银行"
    }, {
        value: "BOZK",
        text: "周口银行"
    }, {
        value: "DZBANK",
        text: "德州银行"
    }, {
        value: "SCCB",
        text: "三门峡银行"
    }, {
        value: "AYCB",
        text: "安阳银行"
    }, {
        value: "ARCU",
        text: "安徽省农村信用社"
    }, {
        value: "HURCB",
        text: "湖北省农村信用社"
    }, {
        value: "HNRCC",
        text: "湖南省农村信用社"
    }, {
        value: "NYNB",
        text: "广东南粤银行"
    }, {
        value: "LYBANK",
        text: "洛阳银行"
    }, {
        value: "NHQS",
        text: "农信银清算中心"
    }, {
        value: "CBBQS",
        text: "城市商业银行资金清算中心"
    }],
    t
}();
__reflect(GameApp.prototype, "GameApp");
var BaseData = function() {
    function t(t) {
        if (null != t)
            for (var e in t)
                this[e] = t[e]
    }
    return t
}();
__reflect(BaseData.prototype, "BaseData");
var DStrings = function() {
    function t() {}
    return t.INPUT_RIGHT_MOBILE = "请输入正确的手机号码",
    t.INPUT_ACCOUNT = "请输入账号",
    t.SEND_SMS_OK = "验证码发送成功，请查收",
    t.INPUT_INVITECODE = "请输入邀请码",
    t.INPUT_PASSWORD = "请输入密码",
    t.INPUT_OLD_PASSWORD = "请输入原密码",
    t.INPUT_NEW_PASSWORD = "请输入新密码",
    t.INPUT_NEW_PASSWORD_AGAIN = "请再次输入新密码",
    t.INPUT_PASSWORD_AGAIN = "请再次输入密码",
    t.PASSWORD_NOT_SAME = "两次密码输入不一致",
    t.TIQU_OK = "恭喜，佣金提取成功",
    t.INPUT_MOBILE = "请输入手机号",
    t
}();
__reflect(DStrings.prototype, "DStrings");
var MyUserInfo = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e._agentFlag = "",
        e._weixinPic = "",
        e._weixin = "",
        e._payVersion = "",
        e._payUnit = "",
        e._noticeContent = "",
        e._agentLevel = 0,
        e._code = "",
        e._amtWin = 0,
        e._amtLose = 0,
        e._amtProfit = 0,
        e._balance = 0,
        e._cashOut = 0,
        e._commission = 0,
        e._level = 0,
        e._loginId = "",
        e._uname = "",
        e._photo = "",
        e._uid = "",
        e._alipayId = "",
        e._alipayName = "",
        e._accountNo = "",
        e._accountName = "",
        e._accountBankName = "",
        e._payFlag = "",
        e
    }
    return __extends(e, t),
    e.getInstance = function() {
        return null == this._instance && (this._instance = new e),
        this._instance
    }
    ,
    Object.defineProperty(e.prototype, "payUrlWx", {
        get: function() {
            return this._payUrlWx
        },
        set: function(t) {
            this._payUrlWx = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "banner", {
        get: function() {
            return this._banner
        },
        set: function(t) {
            this._banner = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "agentFlag", {
        get: function() {
            return this._agentFlag
        },
        set: function(t) {
            this._agentFlag = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "weixinPic", {
        get: function() {
            return this._weixinPic
        },
        set: function(t) {
            this._weixinPic = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "weixin", {
        get: function() {
            return this._weixin
        },
        set: function(t) {
            this._weixin = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "historyData", {
        get: function() {
            return this._historyData
        },
        set: function(t) {
            this._historyData = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "historyData2", {
        get: function() {
            return this._historyData2
        },
        set: function(t) {
            this._historyData2 = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "historyData3", {
        get: function() {
            return this._historyData3
        },
        set: function(t) {
            this._historyData3 = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "weaponList", {
        get: function() {
            return this._weaponList
        },
        set: function(t) {
            this._weaponList = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "weaponList2", {
        get: function() {
            return this._weaponList2
        },
        set: function(t) {
            this._weaponList2 = t
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.getMonsterById = function(t) {
        for (var e = this._weaponList.length, i = 0; e > i; i++) {
            var n = this._weaponList[i]
              , r = n.weaponId;
            if (r == t)
                return n
        }
        return null
    }
    ,
    e.prototype.getMonsterById2 = function(t) {
        for (var e = this._weaponList2.length, i = 0; e > i; i++) {
            var n = this._weaponList2[i]
              , r = n.weaponId;
            if (r == t)
                return n
        }
        return null
    }
    ,
    Object.defineProperty(e.prototype, "payVersion", {
        get: function() {
            return this._payVersion
        },
        set: function(t) {
            this._payVersion = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "payUnit", {
        get: function() {
            return this._payUnit
        },
        set: function(t) {
            this._payUnit = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "noticeContent", {
        get: function() {
            return this._noticeContent
        },
        set: function(t) {
            this._noticeContent = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "agentId", {
        get: function() {
            return this._agentId
        },
        set: function(t) {
            this._agentId = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "agentLevel", {
        get: function() {
            return this._agentLevel
        },
        set: function(t) {
            this._agentLevel = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "code", {
        get: function() {
            return this._code
        },
        set: function(t) {
            this._code = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "rate", {
        get: function() {
            return this._rate
        },
        set: function(t) {
            this._rate = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "amtPoint", {
        get: function() {
            return this._amtPoint
        },
        set: function(t) {
            this._amtPoint = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "amtWin", {
        get: function() {
            return this._amtWin
        },
        set: function(t) {
            this._amtWin = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "amtLose", {
        get: function() {
            return this._amtLose
        },
        set: function(t) {
            this._amtLose = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "amtProfit", {
        get: function() {
            return this._amtProfit
        },
        set: function(t) {
            this._amtProfit = t,
            GameEventManager.dispatchEvent(GameEventManager.UPDATE_USER_AMTPROFIT)
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "balance", {
        get: function() {
            return this._balance
        },
        set: function(t) {
            this._balance = t,
            GameEventManager.dispatchEvent(GameEventManager.UPDATE_USER_GOLD)
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "cashOut", {
        get: function() {
            return this._cashOut
        },
        set: function(t) {
            this._cashOut = t,
            GameEventManager.dispatchEvent(GameEventManager.UPDATE_USER_CASHOUT)
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "commission", {
        get: function() {
            return this._commission
        },
        set: function(t) {
            this._commission = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "level", {
        get: function() {
            return +this._level
        },
        set: function(t) {
            this._level = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "loginId", {
        get: function() {
            return this._loginId
        },
        set: function(t) {
            this._loginId = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "uname", {
        get: function() {
            return this._uname
        },
        set: function(t) {
            this._uname = t,
            GameEventManager.dispatchEvent(GameEventManager.UPDATE_USER_NAME)
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.getFormatUserName = function(t) {
        var e = StringUtils.getStringLength(this._uname);
        return e > t ? this._uname.substr(0, t) + "..." : this._uname
    }
    ,
    Object.defineProperty(e.prototype, "photo", {
        get: function() {
            return this._photo
        },
        set: function(t) {
            this._photo = t,
            GameEventManager.dispatchEvent(GameEventManager.UPDATE_USER_AVATAR)
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "uid", {
        get: function() {
            return this._uid
        },
        set: function(t) {
            this._uid = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "alipayId", {
        get: function() {
            return this._alipayId
        },
        set: function(t) {
            this._alipayId = t,
            GameEventManager.dispatchEvent(GameEventManager.UPDATE_ALIPAY)
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "alipayName", {
        get: function() {
            return this._alipayName
        },
        set: function(t) {
            this._alipayName = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "accountNo", {
        get: function() {
            return this._accountNo
        },
        set: function(t) {
            this._accountNo = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "accountName", {
        get: function() {
            return this._accountName
        },
        set: function(t) {
            this._accountName = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "accountBankName", {
        get: function() {
            return this._accountBankName
        },
        set: function(t) {
            this._accountBankName = t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "payFlag", {
        get: function() {
            return this._payFlag
        },
        set: function(t) {
            this._payFlag = t
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.init = function(t) {
        for (var e in t)
            this[e] = t[e];
        null == this.banner && (this.banner = [])
    }
    ,
    e
}(egret.EventDispatcher);
__reflect(MyUserInfo.prototype, "MyUserInfo");
var DataHistoryPotView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.countDown = 0,
        e.skinName = "DataHistoryPotSkin",
        e.width = e.height = 29,
        e
    }
    return __extends(e, t),
    e.prototype.createComplete = function(t) {}
    ,
    e.prototype.dispose = function() {
        egret.Tween.removeTweens(this.bg),
        this.countDown = -1,
        this.timer && (this.timer.stop(),
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        this.timer = null)
    }
    ,
    e.prototype.setType = function(t, e) {
        void 0 === e && (e = 1),
        this.num.text = t.toString(),
        t >= 3 && 6 >= t ? this.bg.source = "num" + t + "_png" : this.bg.source = "",
        t >= 3 && 6 >= t ? this.num.textColor = 16777215 : this.num.textColor = 0,
        egret.Tween.removeTweens(this.bg),
        this.bg.alpha = 1,
        this.countDown = -1,
        this.timer && (this.timer.stop(),
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this))
    }
    ,
    e.prototype.countNode = function(t, e) {
        void 0 === e && (e = 1),
        this.num.text = t.toString(),
        this.countDown = t,
        this.bg.source = "",
        this.num.textColor = 0,
        null == this.timer && (this.timer = new egret.Timer(1e3,this.countDown)),
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        egret.Tween.removeTweens(this.bg),
        egret.Tween.get(this.bg, {
            loop: !0
        }).to({
            alpha: .1
        }, 300).to({
            alpha: 1
        }, 300),
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        console.info("timer start", this.timer),
        this.timer.start()
    }
    ,
    e.prototype.getCountDown = function() {
        return this.countDown
    }
    ,
    e.prototype.timerFunc = function() {
        this.countDown--,
        this.countDown = Math.max(0, this.countDown),
        this.num.text = this.countDown.toString(),
        0 == this.countDown && (egret.Tween.removeTweens(this.bg),
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        this.countDown = -1,
        this.timer.stop())
    }
    ,
    e
}(BaseUIComponent);
__reflect(DataHistoryPotView.prototype, "DataHistoryPotView");
var GameRuleController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new GameRuleView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Rule, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(GameRuleController.prototype, "GameRuleController");
var GameRuleView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.rule_texts = "1.怪物发兵攻打人类城市，你作为人类勇士先锋官在怪物进攻道路上购买安置武器，消灭怪物减轻城市防守方压力。\n2.怪物每50s进攻一次，每次只有一种怪物，你有30s的时间建造武器进行准备，20s的时间消灭怪物。\n3.每种怪物的进攻概率，畏惧武器及消灭奖励如下表",
        n.skinName = "resource/app_skins/tl/GameRuleSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.infoTF.text = this.rule_texts,
        this.list.itemRenderer = GameRuleItem,
        this.bindButton(this.closerectBtn)
    }
    ,
    e.prototype.close = function() {
        t.prototype.close.call(this)
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        for (var i = t[0], n = t[1], r = new eui.ArrayCollection, o = GameApp.monsterNames2.length, s = 1; o > s; s++)
            r.addItem({
                gwId: i[s - 1].weaponId,
                gaiLv: i[s - 1].rate,
                bei: n[s - 1].rate
            });
        this.list.dataProvider = r
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closerectBtn:
            this.close()
        }
    }
    ,
    e
}(BaseEuiView);
__reflect(GameRuleView.prototype, "GameRuleView");
var GameRuleItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "GameRuleItemSkin",
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this)
    }
    ,
    e.prototype.dataChanged = function() {
        this.data && (GameApp.gameId == GameApp.TOWER ? (this.gw.source = "gw" + this.data.gwId + "2_png",
        this.nameTF.text = GameApp.monsterNames[this.data.gwId],
        this.weaponTF.text = GameApp.monsterNames2[this.data.gwId]) : (this.gw.source = "gw" + this.data.gwId + "2_2_png",
        this.nameTF.text = GameApp.monsterNames_2[this.data.gwId],
        this.weaponTF.text = GameApp.taNames[this.data.gwId]),
        this.rateTF.text = this.data.gaiLv,
        this.rewardTF.text = this.data.bei + "倍奖励")
    }
    ,
    e
}(BaseItemClickRenderer);
__reflect(GameRuleItem.prototype, "GameRuleItem");
var GuaiWuSprite = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "GuaiWuSkin",
        e.gw.width = e.gw.height = 96,
        e
    }
    return __extends(e, t),
    e.prototype.setType = function(t) {
        var e = this;
        null != t && (this.type = t,
        GameApp.gameId == GameApp.TOWER ? this.gw.source = "gw" + this.type + "0_png" : this.gw.source = "gw" + this.type + "0_2_png",
        egret.Tween.removeTweens(this.gw),
        egret.Tween.get(this.gw, {
            loop: !0
        }).wait(500).call(function() {
            GameApp.gameId == GameApp.TOWER ? e.gw.source = "gw" + e.type + "1_png" : e.gw.source = "gw" + e.type + "1_2_png"
        }).wait(500).call(function() {
            GameApp.gameId == GameApp.TOWER ? e.gw.source = "gw" + e.type + "0_png" : e.gw.source = "gw" + e.type + "0_2_png"
        }))
    }
    ,
    e
}(BaseUIComponent);
__reflect(GuaiWuSprite.prototype, "GuaiWuSprite");
var HistoryPotView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.countDown = 0,
        e.skinName = "HistoryPotSkin",
        e.touchEnabled = !1,
        e
    }
    return __extends(e, t),
    e.prototype.createComplete = function(t) {}
    ,
    e.prototype.dispose = function() {
        egret.Tween.removeTweens(this.bg),
        this.countDown = -1,
        this.timer && (this.timer.stop(),
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        this.timer = null)
    }
    ,
    e.prototype.setType = function(t, e) {
        void 0 === e && (e = 1),
        this.num.text = t.toString(),
        1 == e ? (this.bg.width = 29,
        this.bg.height = 29) : (this.bg.width = 31,
        this.bg.height = 31),
        t >= 3 && 6 >= t ? this.bg.source = "num" + t + "_png" : this.bg.source = "",
        t >= 3 && 6 >= t ? this.num.textColor = 16777215 : this.num.textColor = 0,
        egret.Tween.removeTweens(this.bg),
        this.bg.alpha = 1,
        this.countDown = -1,
        this.timer && (this.timer.stop(),
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this))
    }
    ,
    e.prototype.countNode = function(t, e) {
        void 0 === e && (e = 1),
        1 == e ? (this.bg.width = 29,
        this.bg.height = 29) : (this.bg.width = 31,
        this.bg.height = 31),
        this.num.text = t.toString(),
        this.countDown = t,
        this.bg.source = "",
        this.num.textColor = 0,
        null == this.timer && (this.timer = new egret.Timer(1e3,this.countDown)),
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        egret.Tween.removeTweens(this.bg),
        egret.Tween.get(this.bg, {
            loop: !0
        }).to({
            alpha: .1
        }, 300).to({
            alpha: 1
        }, 300),
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        console.info("timer start", this.timer),
        this.timer.start()
    }
    ,
    e.prototype.getCountDown = function() {
        return this.countDown
    }
    ,
    e.prototype.timerFunc = function() {
        this.countDown--,
        this.countDown = Math.max(0, this.countDown),
        this.num.text = this.countDown.toString(),
        0 == this.countDown && (egret.Tween.removeTweens(this.bg),
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        this.countDown = -1,
        this.timer.stop())
    }
    ,
    e
}(BaseUIComponent);
__reflect(HistoryPotView.prototype, "HistoryPotView");
var IndexQishuItemView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "HyQishuItemSkin",
        e
    }
    return __extends(e, t),
    e.prototype.dataChanged = function() {
        if (t.prototype.dataChanged.call(this),
        null != this.data) {
            var e = this.data.gameToken
              , i = this.data.weaponId;
            this.data.index;
            i > 4 ? (this.da.visible = !0,
            this.xiao.visible = !1) : (this.da.visible = !1,
            this.xiao.visible = !0);
            var n = i % 2;
            0 == n ? (this.shuang.visible = !0,
            this.dan.visible = !1) : (this.shuang.visible = !1,
            this.dan.visible = !0);
            for (var r = 0; 8 > r; r++)
                this["n" + (r + 1)].visible = !1;
            this["n" + i].visible = !0,
            e.length > 6 && (e = e.substr(e.length - 6)),
            this.qishu.text = e.toString()
        }
    }
    ,
    e.prototype.partAdded = function(e, i) {
        t.prototype.partAdded.call(this, e, i),
        !this.data
    }
    ,
    e
}(eui.ItemRenderer);
__reflect(IndexQishuItemView.prototype, "IndexQishuItemView");
var JingongRecordController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new JingongRecordView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Jingong, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(JingongRecordController.prototype, "JingongRecordController");
var JingongRecordView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n._curPage = 0,
        n._totalPage = 1,
        n.scrollDistance = 20,
        n._needNextPage = !1,
        n._needPrevPage = !1,
        n.currPage = 0,
        n.totalPage = 1,
        n.skinName = "resource/app_skins/tl/JingongRecordSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.scroller.verticalScrollBar.autoVisibility = !1,
        this.scroller.verticalScrollBar.visible = !1
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.scroller.addEventListener(eui.UIEvent.CHANGE, this.scrollChangeHandle, this),
        this.scroller.addEventListener(eui.UIEvent.CHANGE_END, this.scrollEndHandle, this),
        this.list.itemRenderer = JingongRecordItem
    }
    ,
    e.prototype.scrollChangeHandle = function(t) {
        this.scroller.viewport.scrollV > this.scroller.viewport.contentHeight - this.scroller.viewport.height + this.scrollDistance ? this._needNextPage = !0 : this.scroller.viewport.scrollV <= -this.scrollDistance && (this._needPrevPage = !0)
    }
    ,
    e.prototype.scrollEndHandle = function(t) {
        if (this._needNextPage) {
            if (this._needNextPage = !1,
            this._curPage >= this._totalPage - 1)
                return;
            this._curPage++,
            console.log("next page..."),
            this.getDataFromServer()
        } else if (this._needPrevPage) {
            if (console.log("prev page..."),
            this._needPrevPage = !1,
            this._curPage <= 0)
                return;
            this._curPage--,
            this.getDataFromServer()
        }
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.bindButtons([this.closeBtn], !0),
        this.getDataFromServer()
    }
    ,
    e.prototype.getDataFromServer = function() {
        var t = this
          , i = new CommandVo;
        i.action = Http.publicGameList,
        i.params = {
            pageNumber: this.currPage,
            pageSize: e.PAGE_SIZE
        },
        App.Http.send(i, this, function(e) {
            if (null != e) {
                t.scroller.viewport.scrollV = 0;
                var i = e.list
                  , n = new eui.ArrayCollection(i);
                t.list.dataProvider = n,
                t.totalPage = e.totalPages,
                t.totalPage = Math.max(t.totalPage, 1)
            }
        })
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close()
        }
    }
    ,
    e.PAGE_SIZE = 10,
    e
}(BaseEuiView);
__reflect(JingongRecordView.prototype, "JingongRecordView");
var JingongRecordItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "JingongRecordItemSkin",
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.shijian.text = "04-05 12:20",
        this.gwName.text = "-",
        this.taName.text = "-"
    }
    ,
    e.prototype.dataChanged = function() {
        if (this.data) {
            var t = this.data.index;
            if (this.bg.visible = !1,
            t % 2 == 0 && (this.bg.visible = !0),
            this.data.time) {
                var e = this.data.time;
                this.shijian.text = e.substr(5, 11)
            }
            this.data.monsterId && (this.taName.text = GameApp.monsterNames2[this.data.monsterId],
            this.gwName.text = GameApp.monsterNames[this.data.monsterId])
        }
    }
    ,
    e
}(BaseItemClickRenderer);
__reflect(JingongRecordItem.prototype, "JingongRecordItem");
var TestController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new TestView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Test, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(TestController.prototype, "TestController");
var TestView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/tl/TestSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.scroller.viewport = this.myGroup
    }
    ,
    e
}(BaseEuiView);
__reflect(TestView.prototype, "TestView");
var TlAniItemView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "HallGuaiItemSkin",
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this)
    }
    ,
    e.prototype.dataChanged = function() {
        this.data && (this.taId.text = this.data.monsterId,
        this.taName.textColor = GameApp.MONSTER_COLORS[this.data.monsterId - 1],
        GameApp.gameId == GameApp.TOWER ? (this.gw.source = "gw" + this.data.monsterId + "2_png",
        this.taName.text = GameApp.monsterNames[this.data.monsterId],
        this.gw.scaleX = this.gw.scaleY = 1) : (this.gw.source = "gw" + this.data.monsterId + "2_2_png",
        this.taName.text = GameApp.monsterNames_2[this.data.monsterId],
        this.gw.scaleX = this.gw.scaleY = .8),
        this.ltimes.text = this.data.total + "次",
        this.taIdBg.source = "num1_png",
        this.timeBg.source = "rect1bg_png",
        this.data.index < 4 ? (this.taId.textColor = 16777215,
        this.ltimes.textColor = 16777215,
        this.taIdBg.source = "num" + this.data.monsterId + "_png",
        this.timeBg.source = "rect" + this.data.monsterId + "bg_png") : (this.taId.textColor = 0,
        this.ltimes.textColor = 0))
    }
    ,
    e
}(eui.ItemRenderer);
__reflect(TlAniItemView.prototype, "TlAniItemView");
var TlGameController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new TlGameView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Index3, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(TlGameController.prototype, "TlGameController");
var TlGameView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n._currentPage = 1,
        n._totalPage = 1,
        n.pageSize = 20,
        n.currGameToken = "",
        n._isRepeatXiazhu = !1,
        n.canXiaZhu = !1,
        n.lastGameXiaZhuData = new Array,
        n._tabIndex = -1,
        n.isTimeout = !1,
        n.countDown = 0,
        n.currStep = 0,
        n.canReTry = !1,
        n.xiaZhuTa = 0,
        n.scrollDistance = 20,
        n._needNextPage = !1,
        n._needPrevPage = !1,
        n.gwPathX = [448, 496, 456, 155, 83, 65, 11, -164],
        n.gwPathY = [976, 633, 541, 554, 633, 974, 1068, 1157],
        n.skinName = "resource/app_skins/tl/TlIndexSkin2.exml",
        n
    }
    return __extends(e, t),
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.gwjgGroup.visible = !0,
        this.gwjgGroup.alpha = 0,
        this.jindutiao2.mask = this.jindutiao,
        this.bet1.group.selectedValue = null,
        this.bet2.group.selectedValue = 1,
        this.xzGroup.visible = !0,
        this.dataGroup.visible = !1,
        this.feiChuanTween(),
        this.initTaClick(),
        this.renderUserInfo(),
        this.aniList.itemRenderer = TlAniItemView,
        this.rateList.itemRenderer = TlRateItemView,
        this.qiList.itemRenderer = IndexQishuItemView,
        this.tableScroller.addEventListener(eui.UIEvent.CHANGE, this.scrollChangeHandle, this),
        this.tableScroller.addEventListener(eui.UIEvent.CHANGE_END, this.scrollEndHandle, this),
        App.stage.addEventListener(eui.UIEvent.RESIZE, this.onResizeHandle, this),
        this.initMonsterList(),
        this.initRightUp(),
        GameEventManager.addEvent(GameEventManager.UPDATE_USER_GOLD, this.updateUserGold, this)
    }
    ,
    e.prototype.onResizeHandle = function() {
        this.updateScroller()
    }
    ,
    e.prototype.initMonsterList = function() {
        for (var t = new eui.ArrayCollection, e = [3, 4, 5, 6, 1, 2, 7, 8], i = e.length, n = 0; i > n; n++)
            t.addItem({
                index: n,
                monsterId: e[n],
                total: 0
            });
        this.aniList.dataProvider = t
    }
    ,
    e.prototype.showTabView = function(t) {
        this._tabIndex != t && (this._tabIndex = t,
        1 == t ? (this.tab1.textColor = 4427007,
        this.tab2.textColor = 12369084,
        this.select1.visible = !0,
        this.select2.visible = !1,
        this.xzGroup.visible = !0,
        this.dataGroup.visible = !1,
        this.updateScroller()) : (this.tab1.textColor = 12369084,
        this.tab2.textColor = 4427007,
        this.select1.visible = !1,
        this.select2.visible = !0,
        this.xzGroup.visible = !1,
        this.dataGroup.visible = !0,
        this.updateScroller()))
    }
    ,
    e.prototype.send43ToServer = function() {
        var t = {
            cmd: SocketConst.TuiJianNum,
            uid: MyUserInfo.getInstance().uid
        };
        App.Socket.send(t, function() {}, this)
    }
    ,
    e.prototype.sendMonsterListToServer = function() {
        var t = {
            cmd: SocketConst.MONSTER_LIST_30
        };
        App.Socket.send(t, function() {}, this)
    }
    ,
    e.prototype.refresh = function() {
        this.send43ToServer(),
        this.sendMonsterListToServer(),
        this.send31ToServer(),
        this.getHistoryData()
    }
    ,
    e.prototype.freshTuiJianNums = function(t) {
        if (null != t)
            for (var e = t.list, i = 0; i < e.length; i++) {
                var n = this["tjnum" + (i + 1)];
                n.text = e[i]
            }
    }
    ,
    e.prototype.send31ToServer = function() {
        var t = {
            cmd: SocketConst.MONSTER_SORT_31,
            uid: MyUserInfo.getInstance().uid
        };
        App.Socket.send(t, function() {}, this)
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this._tabIndex = -1,
        this.showTabView(1),
        this.gw.visible = !1,
        this.exitGuang.alpha = 0,
        this.gwjgGroup.alpha = 0,
        this.bet1.group.selectedValue = null,
        this.bet2.group.selectedValue = 1,
        this.renderUserInfo(),
        this.bindButton(this.tabrect1),
        this.bindButton(this.tabrect2),
        this.bindButtons([this.closerect, this.rechargeBtn, this.repeatBtn, this.touzhuBtn], !0),
        App.MessageCenter.addListener(SocketConst.MONSTER_SORT_31, this.onGet31FromServer, this),
        App.MessageCenter.addListener(SocketConst.TuiJianNum, this.onGetTuiJianNumFromServer, this),
        App.MessageCenter.addListener(SocketConst.MONSTER_LIST_30, this.onGetMonsterListFromServer, this),
        App.MessageCenter.addListener(SocketConst.GameStart_51, this.onGetGameStartTriggerFromServer, this),
        App.MessageCenter.addListener(SocketConst.ChuGuai_52, this.onGetChuGuaiTriggerFromServer, this),
        App.MessageCenter.addListener(SocketConst.ReadyNext_53, this.onGetReadyNextTriggerFromServer, this),
        App.MessageCenter.addListener(SocketConst.F_54, this.onGetGameResultTriggerFromServer, this),
        App.MessageCenter.addListener(SocketConst.PLAYER_BET, this.onGetXiaZhuInfoFromServer, this),
        this.sendEnterRoomToServer(),
        this.getEnterGameInfoFromServer(),
        this.send43ToServer(),
        this.sendMonsterListToServer(),
        this.send31ToServer(),
        this.updateHistoryData(MyUserInfo.getInstance().historyData3)
    }
    ,
    e.prototype.updateHistoryData = function(t) {
        this.potView.setData(t, !0),
        this.potView2.setData(t, !0),
        this.freshQiShuTable(t),
        this.updateScroller()
    }
    ,
    e.prototype.getHistoryData = function() {
        var t = this
          , e = new CommandVo;
        e.action = Http.gameHistory2,
        App.Http.send(e, this, function(e) {
            null != e && (MyUserInfo.getInstance().historyData3 = e,
            t.updateHistoryData(e))
        }, !0)
    }
    ,
    e.prototype.updateScroller = function() {
        this.isTimeout ? (this.scroller.viewport.contentHeight > this.scroller.viewport.height && (this.scroller.viewport.scrollV = this.scroller.viewport.contentHeight - this.scroller.viewport.height),
        this.scroller2.viewport.contentHeight > this.scroller2.viewport.height && (this.scroller2.viewport.scrollV = this.scroller2.viewport.contentHeight - this.scroller2.viewport.height)) : (this.isTimeout = !0,
        egret.setTimeout(function() {
            this.scroller.viewport.contentHeight > this.scroller.viewport.height && (this.scroller.viewport.scrollV = this.scroller.viewport.contentHeight - this.scroller.viewport.height),
            this.scroller2.viewport.contentHeight > this.scroller2.viewport.height && (this.scroller2.viewport.scrollV = this.scroller2.viewport.contentHeight - this.scroller2.viewport.height)
        }, this, 500))
    }
    ,
    e.prototype.feiChuanTween = function() {
        egret.Tween.removeTweens(this.exitNormal),
        this.exitNormal.rotation = -5,
        egret.Tween.get(this.exitNormal, {
            loop: !0
        }).to({
            rotation: 5
        }, 300).to({
            rotation: -5
        }, 300)
    }
    ,
    e.prototype.sendEnterRoomToServer = function() {
        if (null == this.weaponData) {
            var t = {
                cmd: SocketConst.ENTRY_ROOM_42
            };
            App.Socket.send(t, function() {}, this),
            App.MessageCenter.addListener(SocketConst.ENTRY_ROOM_42, this.onGetEnterRoom, this)
        }
    }
    ,
    e.prototype.onGetEnterRoom = function(t, e) {
        this.weaponData = e.weaponSortList,
        this.gwData = e.monsterSortList,
        this.initTas()
    }
    ,
    e.prototype.getEnterGameInfoFromServer = function() {
        var t = {
            cmd: SocketConst.StepInfo_50
        };
        App.Socket.send(t, function() {}, this),
        App.MessageCenter.addListener(SocketConst.StepInfo_50, this.onEnterGame, this)
    }
    ,
    e.prototype.onEnterGame = function(t, e) {
        App.MessageCenter.removeListener(SocketConst.StepInfo_50, this.onEnterGame, this),
        this.canXiaZhu = !1,
        e.step = parseInt(e.step),
        "" != this.currGameToken && this.currGameToken != e.gameToken && (this.resetTas(),
        this.enableRepeat(!0)),
        this.currGameToken = e.gameToken,
        1 == e.step && (this.canXiaZhu = !0);
        var i = e.totalTime - e.useTime;
        this.jingDuTiao(!0, e.step, 1e3 * e.totalTime, 1e3 * i)
    }
    ,
    e.prototype.timerFunc = function() {
        this.countDown >= 1 && (this.countDown--,
        this.countDown > 5 ? this.ltips.text = "怪物进攻倒计时 " + (this.countDown - 5) + "s" : (this.canXiaZhu = !1,
        this.ltips.text = "怪物即将到来 " + this.countDown + "s",
        this.tiaoGroup.visible = !1),
        0 == this.countDown && (this.countDown = -1,
        egret.Tween.removeTweens(this.gwjgGroup),
        egret.Tween.get(this.gwjgGroup).to({
            alpha: 1
        }, 100).to({
            alpha: 0
        }, 1200),
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        this.timer = null))
    }
    ,
    e.prototype.jingDuTiao = function(t, e, i, n) {
        this.jinduGroup.visible = !0,
        this.currStep = e,
        this.canReTry = !1,
        this.tiaoGroup.visible = !1,
        this.canXiaZhu = !1,
        this.gwjgGroup.alpha = 0,
        egret.Tween.removeTweens(this.jindutiao),
        egret.Tween.removeTweens(this.gw),
        this.gw.x = -140,
        this.gw.y = 1077,
        this.timer && (this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        this.timer = null),
        1 == e && (this.countDown = Math.ceil(n / 1e3),
        n -= 5e3,
        this.countDown > 5 ? (this.ltips.text = "怪物进攻倒计时 " + (this.countDown - 5) + "s",
        this.tiaoGroup.visible = !0,
        this.canXiaZhu = !0,
        this.jindutiao.scaleX = 1,
        t && (this.jindutiao.scaleX = n / i),
        egret.Tween.get(this.jindutiao).to({
            scaleX: 0
        }, n)) : this.ltips.text = "怪物即将到来 " + this.countDown + "s",
        this.timer = new egret.Timer(1e3),
        this.timer.repeatCount = this.countDown,
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        this.timer.start()),
        2 == e && (this.ltips.text = "怪物进攻防守中"),
        3 == e && (this.ltips.text = "下一轮即将开始")
    }
    ,
    e.prototype.onTouchTa = function(t) {
        var e = t.currentTarget;
        console.log("taG.name = " + e);
        var i = Number(e.name);
        MyUserInfo.getInstance().balance,
        this.bet1.group.selectedValue;
        return 0 == this.canXiaZhu ? void (1 == this.currStep && SystemTips.show("防守中不可建造武器")) : (this.canReTry = !0,
        this.xiaZhuTa = i,
        void this.sendXiaZhuInfoToServer())
    }
    ,
    e.prototype.onGetGameStartTriggerFromServer = function(t, e) {
        this.enableRepeat(!0),
        this.currGameToken = e.gameToken,
        this.canXiaZhu = !0,
        this.resetTas();
        var i = e.totalTime - e.useTime;
        this.jingDuTiao(!1, 1, 1e3 * i, 1e3 * i)
    }
    ,
    e.prototype.onGetChuGuaiTriggerFromServer = function(t, e) {
        var i = this;
        console.log("onGetChuGuaiTriggerFromServer>>");
        var n = {
            gameToken: e.gameToken,
            weaponId: e.weaponId
        };
        this.potView.addNewNode(n),
        this.potView2.addNewNode(n),
        this.freshQiShuTable(this.potView2.historyData),
        this.sendMonsterListToServer(),
        this.send31ToServer(),
        this.canXiaZhu = !1,
        egret.Tween.removeTweens(this.exitGuang),
        this.exitGuang.alpha = 0,
        egret.Tween.removeTweens(this.exitNormal),
        egret.Tween.get(this.exitGuang).to({
            alpha: 1
        }, 2e3).to({
            alpha: 0
        }, 500).call(function() {
            i.feiChuanTween()
        }),
        egret.Tween.get(this).wait(300).call(function() {
            i.gwTween(e.monsterId)
        });
        var r = e.totalTime - e.useTime;
        this.jingDuTiao(!1, 2, 1e3 * r, 1e3 * r)
    }
    ,
    e.prototype.onGetReadyNextTriggerFromServer = function(t, e) {
        this.jingDuTiao(!1, 3, 1e4, 1e4)
    }
    ,
    e.prototype.onGetGameResultTriggerFromServer = function(t, e) {
        e.playerInfo.amtWin > 0 && (App.ViewManager.open(ViewConst.Tlkaijiang, e),
        e.playerInfo.balance && (MyUserInfo.getInstance().balance = e.playerInfo.balance,
        this.balanceTF.text = "积分:" + MyUserInfo.getInstance().balance.toString()))
    }
    ,
    e.prototype.initRateList = function(t) {
        if (null != t && 0 != t.length) {
            for (var e = t.length, i = new eui.ArrayCollection, n = 0; e > n; n++) {
                var r = t[n];
                i.addItem({
                    index: n + 1,
                    monsterId: r.monsterId,
                    num: r.weaponId,
                    rate: r.rate,
                    times: r.total
                })
            }
            this.rateList.dataProvider = i
        }
    }
    ,
    e.prototype.scrollChangeHandle = function(t) {
        this.tableScroller.viewport.scrollV > this.tableScroller.viewport.contentHeight - this.tableScroller.viewport.height + this.scrollDistance ? this._needNextPage = !0 : this.tableScroller.viewport.scrollV <= -this.scrollDistance && (this._needPrevPage = !0)
    }
    ,
    e.prototype.scrollEndHandle = function(t) {
        if (this._needNextPage) {
            if (this._needNextPage = !1,
            console.log("next page..."),
            this._currentPage >= this._totalPage)
                return;
            this._currentPage++,
            this.renderQiShuTable()
        } else if (this._needPrevPage) {
            if (console.log("prev page..."),
            this._needPrevPage = !1,
            this._currentPage <= 1)
                return;
            this._currentPage--,
            this.renderQiShuTable()
        }
    }
    ,
    e.prototype.freshQiShuTable = function(t) {
        if (null != t && 0 != t.length) {
            this.tableScroller.viewport.scrollV = 0;
            var e = this.potView2.historyData.slice(-100);
            this._currentPage = 1,
            this._totalPage = Math.ceil(e.length / this.pageSize),
            this._totalPage = Math.max(1, this._totalPage),
            console.log("this._totalPage = " + this._totalPage),
            this.renderQiShuTable()
        }
    }
    ,
    e.prototype.renderQiShuTable = function() {
        var t = this.potView2.historyData.slice(-100);
        t.reverse();
        var e = (this._currentPage - 1) * this.pageSize
          , i = this._currentPage * this.pageSize;
        i = Math.min(i, t.length);
        t.length;
        console.log("begin = " + e + ",end = " + i);
        for (var n = new eui.ArrayCollection, r = 0, o = e; i > o; o++) {
            var s = t[o];
            s.index = r,
            n.addItem(s),
            r++
        }
        this.qiList.dataProvider = n
    }
    ,
    e.prototype.initRightUp = function() {
        for (var t = new eui.ArrayCollection, e = [3, 4, 5, 6, 1, 2, 7, 8], i = 0; 8 > i; i++)
            t.addItem({
                index: i + 1,
                monsterId: e[i],
                num: e[i],
                rate: 0,
                times: 0
            });
        this.rateList.dataProvider = t
    }
    ,
    e.prototype.onGet31FromServer = function(t, e) {
        var i = e;
        this.initRateList(i)
    }
    ,
    e.prototype.onGetTuiJianNumFromServer = function(t, e) {
        this.freshTuiJianNums(e)
    }
    ,
    e.prototype.gwTween = function(t) {
        this.gw.visible = !0,
        this.gw.setType(t),
        egret.Tween.removeTweens(this.gw),
        this.gw.x = 546,
        this.gw.y = 996,
        egret.Tween.get(this.gw).to({
            y: 1072
        }, 1066).to({
            x: this.gwPathX[0],
            y: this.gwPathY[0]
        }, 1500).to({
            x: this.gwPathX[1],
            y: this.gwPathY[1]
        }, 2500).to({
            x: this.gwPathX[2],
            y: this.gwPathY[2]
        }, 500).to({
            x: this.gwPathX[3],
            y: this.gwPathY[3]
        }, 2e3).to({
            x: this.gwPathX[4],
            y: this.gwPathY[4]
        }, 500).to({
            x: this.gwPathX[5],
            y: this.gwPathY[5]
        }, 2e3).to({
            x: this.gwPathX[6],
            y: this.gwPathY[6]
        }, 500).to({
            x: this.gwPathX[7],
            y: this.gwPathY[7]
        }, 500)
    }
    ,
    e.prototype.initTas = function() {
        for (var t = this.weaponData.length, e = 0; t > e; e++) {
            var i = this.weaponData[e]
              , n = parseInt(i.monsterId)
              , r = this["goldTF" + n]
              , o = (this["weapon" + n],
            this["nameTF" + n])
              , s = this["beiTF" + n];
            this["arrow" + n];
            o.text = i.weaponName,
            s.text = "X" + i.rate,
            r.text = "0"
        }
    }
    ,
    e.prototype.resetTas = function() {
        this.lastGameXiaZhuData = new Array;
        for (var t = 1; 9 > t; t++) {
            var e = this["goldTF" + t]
              , i = Number(e.text);
            i > 0 && this.lastGameXiaZhuData.push({
                weaponId: t,
                amt: i
            }),
            this["arrow" + t].visible = !0,
            this["weapon" + t].visible = !1,
            e.text = "0"
        }
    }
    ,
    e.prototype.sendXiaZhuInfoToServer = function() {
        var t = this.bet1.group.selectedValue
          , e = {
            cmd: SocketConst.PLAYER_BET,
            gameToken: this.currGameToken,
            list: {
                amt: t,
                weaponId: this.xiaZhuTa
            }
        };
        App.Socket.send(e, function() {}, this)
    }
    ,
    e.prototype.initTaClick = function() {
        for (var t = 8, e = 0; t > e; e++) {
            var i = this["ta" + (e + 1)];
            i.name = (e + 1).toString();
            var n = this["weapon" + (e + 1)]
              , r = this["arrow" + (e + 1)];
            r.visible = !0,
            n.visible = !1,
            i.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTa, this)
        }
    }
    ,
    e.prototype.renderUserInfo = function() {
        this.idTF.text = "ID:" + MyUserInfo.getInstance().uid.toString(),
        this.nameTF.text = "账号：" + MyUserInfo.getInstance().loginId.toString(),
        this.updateUserGold()
    }
    ,
    e.prototype.updateUserGold = function(t) {
        void 0 === t && (t = null),
        this.balanceTF.text = "积分:" + MyUserInfo.getInstance().balance.toString()
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closerect:
            this.close();
            break;
        case this.rechargeBtn:
            App.ViewManager.open(ViewConst.Recharge);
            break;
        case this.repeatBtn:
            this.chongFuXiaZhu();
            break;
        case this.touzhuBtn:
            App.ViewManager.open(ViewConst.Touzhu);
            break;
        case this.tabrect1:
            this.showTabView(1);
            break;
        case this.tabrect2:
            this.showTabView(2)
        }
    }
    ,
    e.prototype.onGetXiaZhuInfoFromServer = function(t, e) {
        console.log("onGetXiaZhuInfoFromServer...");
        for (var i = e.list, n = 0; n < i.length; n++) {
            var r = i[n].weaponId
              , o = this["goldTF" + r]
              , s = this["weapon" + r]
              , a = this["arrow" + r]
              , h = Number(o.text.trim())
              , l = i[n].amt;
            h > l || (a.visible = !0,
            s.visible = !1,
            l > 0 && 1 == a.visible && (a.visible = !1,
            s.visible = !0,
            o.text = l.toString()))
        }
        MyUserInfo.getInstance().balance = e.balance,
        this.balanceTF.text = "积分:" + MyUserInfo.getInstance().balance.toString()
    }
    ,
    e.prototype.onGetXiaZhuInfoFromServer2 = function(t, e) {
        App.MessageCenter.removeListener(SocketConst.PLAYER_BET, this.onGetXiaZhuInfoFromServer2, this);
        for (var i = e.list, n = 0; n < i.length; n++) {
            var r = i[n].weaponId
              , o = this["goldTF" + r]
              , s = this["weapon" + r]
              , a = this["arrow" + r]
              , h = Number(o.text.trim())
              , l = i[n].amt;
            h > l || (a.visible = !0,
            s.visible = !1,
            l > 0 && 1 == a.visible && (a.visible = !1,
            s.visible = !0,
            o.text = l.toString()))
        }
        MyUserInfo.getInstance().balance = e.balance,
        this.balanceTF.text = "积分:" + MyUserInfo.getInstance().balance.toString(),
        this.enableRepeat(!1)
    }
    ,
    e.prototype.enableRepeat = function(t) {
        t ? (this._isRepeatXiazhu = !1,
        this.repeatBtn.touchEnabled = !0,
        this.repeatBtn.filters = null) : (this._isRepeatXiazhu = !0,
        this.repeatBtn.touchEnabled = !1,
        this.repeatBtn.filters = EffectUtils.grayFlilter)
    }
    ,
    e.prototype.chongFuXiaZhu = function() {
        if (!this._isRepeatXiazhu) {
            if (0 == this.canXiaZhu)
                return void (1 == this.currStep && SystemTips.show("防守中不可建造武器"));
            if (this.lastGameXiaZhuData.length > 0) {
                var t = {
                    cmd: SocketConst.PLAYER_BET,
                    gameToken: this.currGameToken,
                    list: this.lastGameXiaZhuData
                };
                App.Socket.send(t, function() {}, this),
                App.MessageCenter.addListener(SocketConst.PLAYER_BET, this.onGetXiaZhuInfoFromServer2, this)
            } else
                SystemTips.show("没有上一局的下注信息")
        }
    }
    ,
    e.prototype.onGetMonsterListFromServer = function(t, e) {
        var i = e;
        i = i || [];
        for (var n = i.length, r = new eui.ArrayCollection, o = 0; n > o; o++) {
            var s = (e[o].weaponId,
            e[o].weaponPicId,
            e[o].monsterPicId);
            r.addItem({
                index: o,
                monsterId: s,
                total: e[o].total
            })
        }
        r.length > 0 && (this.aniList.dataProvider = r)
    }
    ,
    e.prototype.close = function() {
        t.prototype.close.call(this),
        t.prototype.dispose.call(this),
        egret.Tween.removeTweens(this),
        egret.Tween.removeTweens(this.exitNormal),
        App.MessageCenter.removeListener(SocketConst.MONSTER_SORT_31, this.onGet31FromServer, this),
        App.MessageCenter.removeListener(SocketConst.TuiJianNum, this.onGetTuiJianNumFromServer, this),
        App.MessageCenter.removeListener(SocketConst.MONSTER_LIST_30, this.onGetMonsterListFromServer, this),
        App.MessageCenter.removeListener(SocketConst.GameStart_51, this.onGetGameStartTriggerFromServer, this),
        App.MessageCenter.removeListener(SocketConst.ChuGuai_52, this.onGetChuGuaiTriggerFromServer, this),
        App.MessageCenter.removeListener(SocketConst.ReadyNext_53, this.onGetReadyNextTriggerFromServer, this),
        App.MessageCenter.removeListener(SocketConst.F_54, this.onGetGameResultTriggerFromServer, this),
        App.MessageCenter.removeListener(SocketConst.PLAYER_BET, this.onGetXiaZhuInfoFromServer, this)
    }
    ,
    e
}(BaseEuiView);
__reflect(TlGameView.prototype, "TlGameView");
var TlHistoryPotList = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.newestNodeLeftTime = 0,
        e.pageSize = 100,
        e.currPage = 1,
        e.totalPage = 1,
        e.isFirstEnterGame = !1,
        e.skinName = "TlXiazhuHistoryPotSkin",
        e.touchChildren = !1,
        e
    }
    return __extends(e, t),
    e.prototype.createComplete = function(t) {}
    ,
    e.prototype.setData = function(t, e) {
        this.isFirstEnterGame = e,
        this.historyData = t,
        null == this.historyData && (this.historyData = new Array),
        this.totalPage = Math.ceil((this.historyData.length + 1) / this.pageSize),
        this.currPage = this.totalPage,
        this.fresh()
    }
    ,
    e.prototype.addNewNode = function(t) {
        null == this.historyData && (this.historyData = []);
        for (var e = !1, i = this.historyData.length - 1; i >= 0; i--) {
            var n = this.historyData[i];
            if (n.gameToken == t.gameToken) {
                e = !0;
                break
            }
        }
        0 == e && this.historyData.push(t),
        this.setData(this.historyData, !1)
    }
    ,
    e.prototype.fresh = function() {
        for (; this.potList.numChildren > 0; ) {
            var t = this.potList.removeChildAt(0);
            t.dispose(),
            App.objectPool.putObject(t)
        }
        for (var e = 0, i = this.historyData.length, n = e; i > n; n++) {
            var r = App.objectPool.getObject(HistoryPotView);
            r.x = n % 24 * 30,
            r.y = 30 * Math.floor(n / 24),
            r.setType(this.historyData[n].weaponId, 2),
            this.potList.addChild(r)
        }
        this.isFirstEnterGame ? this.getEnterGameInfoFromServer() : this.addNewestNode()
    }
    ,
    e.prototype.getEnterGameInfoFromServer = function() {
        var t = {
            cmd: SocketConst.StepInfo_50
        };
        App.Socket.send(t, function() {}, this),
        App.MessageCenter.addListener(SocketConst.StepInfo_50, this.onEnterGame, this)
    }
    ,
    e.prototype.onEnterGame = function(t, e) {
        App.MessageCenter.removeListener(SocketConst.StepInfo_50, this.onEnterGame, this);
        var i = e.totalTime - e.useTime;
        console.log("data.step = " + e.step),
        (2 == e.step || 3 == e.step) && (i += 35),
        i > 0 && this.addNewestNode(i)
    }
    ,
    e.prototype.addNewestNode = function(t) {
        void 0 === t && (t = 50),
        this.newestNodeLeftTime = t,
        this.currNewestNode && this.potList.contains(this.currNewestNode) && this.currNewestNode.getCountDown() >= 0 && (this.potList.removeChild(this.currNewestNode),
        this.currNewestNode.dispose()),
        this.currNewestNode = App.objectPool.getObject(HistoryPotView),
        this.currNewestNode.countNode(this.newestNodeLeftTime);
        var e = this.historyData.length;
        this.currNewestNode.x = e % 24 * 30,
        this.currNewestNode.y = 30 * Math.floor(e / 24),
        this.potList.addChild(this.currNewestNode)
    }
    ,
    e.prototype.dispose = function() {
        for (t.prototype.dispose.call(this); this.potList.numChildren > 0; ) {
            var e = this.potList.removeChildAt(0);
            e.dispose(),
            App.objectPool.putObject(e)
        }
        App.MessageCenter.removeListener(SocketConst.StepInfo_50, this.onEnterGame, this)
    }
    ,
    e
}(BaseUIComponent);
__reflect(TlHistoryPotList.prototype, "TlHistoryPotList");
var TlKaijiangResultController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new TlKaijiangResultView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Tlkaijiang, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(TlKaijiangResultController.prototype, "TlKaijiangResultController");
var TlKaijiangResultView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/tl/KaiJiangJieGuoSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this)
    }
    ,
    e.prototype.touchBindButtonHandler = function(t) {
        switch (t) {
        case this.closeBtn:
            this.close()
        }
    }
    ,
    e.prototype.open = function() {
        for (var t = this, e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        this.bindButtons([this.closeBtn], !0);
        var n = e[0]
          , r = parseInt(n.monsterId);
        this.taTF.text = GameApp.monsterNames2[r],
        this.gwTF.text = GameApp.monsterNames[r],
        GameApp.gameId == GameApp.TOWER ? (this.ta.source = "weapon" + r + "_png",
        this.gw.source = "gw" + n.monsterId + "2_png") : (this.ta.source = "weapon" + r + "_2_png",
        this.gw.source = "gw" + n.monsterId + "2_2_png"),
        n.playerInfo.amtWin > 0 ? this.jifen.text = "+" + n.playerInfo.amtWin : this.jifen.text = "" + n.playerInfo.amtWin,
        egret.Tween.removeTweens(this),
        egret.Tween.get(this).wait(5e3).call(function() {
            t.close()
        })
    }
    ,
    e
}(BaseEuiView);
__reflect(TlKaijiangResultView.prototype, "TlKaijiangResultView");
var TlRateItemView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "HallRateItemSkin",
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this)
    }
    ,
    e.prototype.dataChanged = function() {
        this.data && (this.taId.text = this.data.num,
        GameApp.gameId == GameApp.TOWER ? (this.gw.source = "gw" + this.data.monsterId + "2_png",
        this.gw.scaleX = this.gw.scaleY = .6) : (this.gw.source = "gw" + this.data.monsterId + "2_2_png",
        this.gw.scaleX = this.gw.scaleY = .4),
        this.lrate.text = this.data.rate,
        this.llian.text = this.data.times + "连",
        this.numBg.source = "num1_png",
        this.data.monsterId >= 3 && this.data.monsterId <= 6 ? (this.taId.textColor = 16777215,
        this.numBg.source = "num" + this.data.num + "_png") : this.taId.textColor = 0)
    }
    ,
    e
}(eui.ItemRenderer);
__reflect(TlRateItemView.prototype, "TlRateItemView");
var TlXiazhuController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new TlXiazhuView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Xiazhu3, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(TlXiazhuController.prototype, "TlXiazhuController");
var TlXiazhuHistoryPotView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.newestNodeLeftTime = 0,
        e.pageSize = 100,
        e.currPage = 1,
        e.totalPage = 1,
        e.isFirstEnterGame = !1,
        e.skinName = "TlXiazhuHistoryPotSkin",
        e.touchChildren = !1,
        e
    }
    return __extends(e, t),
    e.prototype.createComplete = function(t) {}
    ,
    e.prototype.setData = function(t, e) {
        this.isFirstEnterGame = e,
        this.historyData = t,
        null == this.historyData && (this.historyData = new Array),
        this.totalPage = Math.ceil((this.historyData.length + 1) / this.pageSize),
        this.currPage = this.totalPage,
        this.fresh()
    }
    ,
    e.prototype.addNewNode = function(t) {
        null == this.historyData && (this.historyData = []);
        for (var e = !1, i = this.historyData.length - 1; i >= 0; i--) {
            var n = this.historyData[i];
            if (n.gameToken == t.gameToken) {
                e = !0;
                break
            }
        }
        0 == e && this.historyData.push(t),
        this.setData(this.historyData, !1)
    }
    ,
    e.prototype.fresh = function() {
        for (; this.potList.numChildren > 0; ) {
            var t = this.potList.removeChildAt(0);
            t.dispose(),
            App.objectPool.putObject(t)
        }
        for (var e = 0, i = this.historyData.length, n = e; i > n; n++) {
            var r = App.objectPool.getObject(HistoryPotView);
            r.x = n % 20 * 34,
            r.y = 34 * Math.floor(n / 20),
            r.setType(this.historyData[n].weaponId, 2),
            this.potList.addChild(r)
        }
        this.isFirstEnterGame ? this.getEnterGameInfoFromServer() : this.addNewestNode()
    }
    ,
    e.prototype.getEnterGameInfoFromServer = function() {
        var t = {
            cmd: SocketConst.StepInfo_50
        };
        App.Socket.send(t, function() {}, this),
        App.MessageCenter.addListener(SocketConst.StepInfo_50, this.onEnterGame, this)
    }
    ,
    e.prototype.onEnterGame = function(t, e) {
        App.MessageCenter.removeListener(SocketConst.StepInfo_50, this.onEnterGame, this);
        var i = e.totalTime - e.useTime;
        console.log("data.step = " + e.step),
        (2 == e.step || 3 == e.step) && (i += 35),
        i > 0 && this.addNewestNode(i)
    }
    ,
    e.prototype.addNewestNode = function(t) {
        void 0 === t && (t = 50),
        this.newestNodeLeftTime = t,
        this.currNewestNode && this.potList.contains(this.currNewestNode) && this.currNewestNode.getCountDown() >= 0 && (this.potList.removeChild(this.currNewestNode),
        this.currNewestNode.dispose()),
        this.currNewestNode = App.objectPool.getObject(HistoryPotView),
        this.currNewestNode.countNode(this.newestNodeLeftTime);
        var e = this.historyData.length;
        this.currNewestNode.x = e % 20 * 34,
        this.currNewestNode.y = 34 * Math.floor(e / 20),
        this.potList.addChild(this.currNewestNode)
    }
    ,
    e.prototype.dispose = function() {
        for (t.prototype.dispose.call(this); this.potList.numChildren > 0; ) {
            var e = this.potList.removeChildAt(0);
            e.dispose(),
            App.objectPool.putObject(e)
        }
        App.MessageCenter.removeListener(SocketConst.StepInfo_50, this.onEnterGame, this)
    }
    ,
    e
}(BaseUIComponent);
__reflect(TlXiazhuHistoryPotView.prototype, "TlXiazhuHistoryPotView");
var TlXiazhuView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.xzValue = 0,
        n.currGameToken = "",
        n._isRepeatXiazhu = !1,
        n.countDown = 0,
        n.currStep = 0,
        n.canXiaZhu = !1,
        n.gwPathX = [448, 496, 456, 155, 83, 65, 11, -164],
        n.gwPathY = [976, 633, 541, 554, 633, 974, 1068, 1157],
        n.canReTry = !1,
        n.xiaZhuTa = 0,
        n.lastGameXiaZhuData = new Array,
        n.skinName = "resource/app_skins/tl/XiaZhuSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.refresh = function(t) {
        this.potView.setData(t, !0),
        this.getEnterGameInfoFromServer()
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.gwjgGroup.visible = !0,
        this.gwjgGroup.alpha = 0,
        this.jindutiao2.mask = this.jindutiao,
        this.tab1.group.selectedValue = null,
        this.tab1.group.selectedValue = 1,
        this.idTF.text = "ID:" + MyUserInfo.getInstance().uid.toString(),
        this.nameTF.text = MyUserInfo.getInstance().loginId.toString(),
        this.initTaClick(),
        GameEventManager.addEvent(GameEventManager.UPDATE_USER_GOLD, this.updateUserGold, this),
        this.updateUserGold()
    }
    ,
    e.prototype.initTaClick = function() {
        for (var t = 8, e = 0; t > e; e++) {
            var i = this["ta" + (e + 1)];
            i.name = (e + 1).toString();
            var n = this["weapon" + (e + 1)]
              , r = this["arrow" + (e + 1)];
            r.visible = !0,
            n.visible = !1,
            i.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTa, this)
        }
    }
    ,
    e.prototype.updateUserGold = function(t) {
        void 0 === t && (t = null),
        this.balanceTF.text = "积分:" + MyUserInfo.getInstance().balance.toString()
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var i = t[0];
        this.gw.visible = !1,
        this.exitGuang.alpha = 0,
        this.gwjgGroup.alpha = 0,
        this.potView.setData(i, !0),
        this.tab1.group.selectedValue = null,
        this.tab1.group.selectedValue = 1,
        this.idTF.text = "ID:" + MyUserInfo.getInstance().uid.toString(),
        this.nameTF.text = MyUserInfo.getInstance().loginId.toString(),
        this.updateUserGold(),
        this.bindButtons([this.closeBtn, this.rechargeBtn, this.repeatBtn, this.tzBtn, this.tjBtn], !0),
        this.bindButton(this.feichuanTip),
        this.bindButton(this.ruleBtn),
        App.MessageCenter.addListener(SocketConst.GameStart_51, this.onGetGameStartTriggerFromServer, this),
        App.MessageCenter.addListener(SocketConst.ChuGuai_52, this.onGetChuGuaiTriggerFromServer, this),
        App.MessageCenter.addListener(SocketConst.ReadyNext_53, this.onGetReadyNextTriggerFromServer, this),
        App.MessageCenter.addListener(SocketConst.F_54, this.onGetGameResultTriggerFromServer, this),
        App.MessageCenter.addListener(SocketConst.PLAYER_BET, this.onGetXiaZhuInfoFromServer, this),
        this.sendEnterRoomToServer(),
        this.getEnterGameInfoFromServer(),
        this.feiChuanTween()
    }
    ,
    e.prototype.feiChuanTween = function() {
        egret.Tween.removeTweens(this.exitNormal),
        this.exitNormal.rotation = -5,
        egret.Tween.get(this.exitNormal, {
            loop: !0
        }).to({
            rotation: 5
        }, 300).to({
            rotation: -5
        }, 300)
    }
    ,
    e.prototype.sendEnterRoomToServer = function() {
        if (null == this.weaponData) {
            var t = {
                cmd: SocketConst.ENTRY_ROOM_42
            };
            App.Socket.send(t, function() {}, this),
            App.MessageCenter.addListener(SocketConst.ENTRY_ROOM_42, this.onGetEnterRoom, this)
        }
    }
    ,
    e.prototype.onGetEnterRoom = function(t, e) {
        this.weaponData = e.weaponSortList,
        this.gwData = e.monsterSortList,
        this.initTas()
    }
    ,
    e.prototype.getEnterGameInfoFromServer = function() {
        var t = {
            cmd: SocketConst.StepInfo_50
        };
        App.Socket.send(t, function() {}, this),
        App.MessageCenter.addListener(SocketConst.StepInfo_50, this.onEnterGame, this)
    }
    ,
    e.prototype.onEnterGame = function(t, e) {
        App.MessageCenter.removeListener(SocketConst.StepInfo_50, this.onEnterGame, this),
        this.canXiaZhu = !1,
        e.step = parseInt(e.step),
        "" != this.currGameToken && this.currGameToken != e.gameToken && (this.resetTas(),
        this.enableRepeat(!0)),
        this.currGameToken = e.gameToken,
        1 == e.step && (this.canXiaZhu = !0);
        var i = e.totalTime - e.useTime;
        this.jingDuTiao(!0, e.step, 1e3 * e.totalTime, 1e3 * i)
    }
    ,
    e.prototype.timerFunc = function() {
        this.countDown >= 1 && (this.countDown--,
        this.countDown > 5 ? this.ltips.text = "怪物进攻倒计时 " + (this.countDown - 5) + "s" : (this.canXiaZhu = !1,
        this.ltips.text = "怪物即将到来 " + this.countDown + "s",
        this.tiaoGroup.visible = !1),
        0 == this.countDown && (this.countDown = -1,
        egret.Tween.removeTweens(this.gwjgGroup),
        egret.Tween.get(this.gwjgGroup).to({
            alpha: 1
        }, 100).to({
            alpha: 0
        }, 1200),
        this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        this.timer = null))
    }
    ,
    e.prototype.jingDuTiao = function(t, e, i, n) {
        this.jinduGroup.visible = !0,
        this.currStep = e,
        this.canReTry = !1,
        this.tiaoGroup.visible = !1,
        this.canXiaZhu = !1,
        this.gwjgGroup.alpha = 0,
        egret.Tween.removeTweens(this.jindutiao),
        egret.Tween.removeTweens(this.gw),
        this.gw.x = -140,
        this.gw.y = 1077,
        this.timer && (this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        this.timer = null),
        1 == e && (this.countDown = Math.ceil(n / 1e3),
        n -= 5e3,
        this.countDown > 5 ? (this.ltips.text = "怪物进攻倒计时 " + (this.countDown - 5) + "s",
        this.tiaoGroup.visible = !0,
        this.canXiaZhu = !0,
        this.jindutiao.scaleX = 1,
        t && (this.jindutiao.scaleX = n / i),
        egret.Tween.get(this.jindutiao).to({
            scaleX: 0
        }, n)) : this.ltips.text = "怪物即将到来 " + this.countDown + "s",
        this.timer = new egret.Timer(1e3),
        this.timer.repeatCount = this.countDown,
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        this.timer.start()),
        2 == e && (this.ltips.text = "怪物进攻防守中"),
        3 == e && (this.ltips.text = "下一轮即将开始")
    }
    ,
    e.prototype.onGetGameStartTriggerFromServer = function(t, e) {
        this.enableRepeat(!0),
        this.currGameToken = e.gameToken,
        this.canXiaZhu = !0,
        this.resetTas();
        var i = e.totalTime - e.useTime;
        this.jingDuTiao(!1, 1, 1e3 * i, 1e3 * i),
        this.potView.addNewestNode(35)
    }
    ,
    e.prototype.onGetChuGuaiTriggerFromServer = function(t, e) {
        var i = this;
        console.log("onGetChuGuaiTriggerFromServer>>");
        var n = {
            gameToken: e.gameToken,
            weaponId: e.weaponId
        };
        this.potView.addNewNode(n),
        this.canXiaZhu = !1,
        egret.Tween.removeTweens(this.exitGuang),
        this.exitGuang.alpha = 0,
        egret.Tween.removeTweens(this.exitNormal),
        egret.Tween.get(this.exitGuang).to({
            alpha: 1
        }, 2e3).to({
            alpha: 0
        }, 500).call(function() {
            i.feiChuanTween()
        }),
        egret.Tween.get(this).wait(300).call(function() {
            i.gwTween(e.monsterId)
        });
        var r = e.totalTime - e.useTime;
        this.jingDuTiao(!1, 2, 1e3 * r, 1e3 * r)
    }
    ,
    e.prototype.onGetReadyNextTriggerFromServer = function(t, e) {
        this.jingDuTiao(!1, 3, 1e4, 1e4)
    }
    ,
    e.prototype.onGetGameResultTriggerFromServer = function(t, e) {
        e.playerInfo.amtWin > 0 && (App.ViewManager.open(ViewConst.Tlkaijiang, e),
        e.playerInfo.balance && (MyUserInfo.getInstance().balance = e.playerInfo.balance,
        this.balanceTF.text = "积分:" + MyUserInfo.getInstance().balance.toString()))
    }
    ,
    e.prototype.gwTween = function(t) {
        this.gw.visible = !0,
        this.gw.setType(t),
        egret.Tween.removeTweens(this.gw),
        this.gw.x = 546,
        this.gw.y = 996,
        egret.Tween.get(this.gw).to({
            y: 1072
        }, 1066).to({
            x: this.gwPathX[0],
            y: this.gwPathY[0]
        }, 1500).to({
            x: this.gwPathX[1],
            y: this.gwPathY[1]
        }, 2500).to({
            x: this.gwPathX[2],
            y: this.gwPathY[2]
        }, 500).to({
            x: this.gwPathX[3],
            y: this.gwPathY[3]
        }, 2e3).to({
            x: this.gwPathX[4],
            y: this.gwPathY[4]
        }, 500).to({
            x: this.gwPathX[5],
            y: this.gwPathY[5]
        }, 2e3).to({
            x: this.gwPathX[6],
            y: this.gwPathY[6]
        }, 500).to({
            x: this.gwPathX[7],
            y: this.gwPathY[7]
        }, 500)
    }
    ,
    e.prototype.initTas = function() {
        for (var t = this.weaponData.length, e = 0; t > e; e++) {
            var i = this.weaponData[e]
              , n = parseInt(i.monsterId)
              , r = this["goldTF" + n]
              , o = (this["weapon" + n],
            this["nameTF" + n])
              , s = this["beiTF" + n];
            this["arrow" + n];
            o.text = i.weaponName,
            s.text = "X" + i.rate,
            r.text = "0"
        }
    }
    ,
    e.prototype.resetTas = function() {
        this.lastGameXiaZhuData = new Array;
        for (var t = 1; 9 > t; t++) {
            var e = this["goldTF" + t]
              , i = Number(e.text);
            i > 0 && this.lastGameXiaZhuData.push({
                weaponId: t,
                amt: i
            }),
            this["arrow" + t].visible = !0,
            this["weapon" + t].visible = !1,
            e.text = "0"
        }
    }
    ,
    e.prototype.onTouchTa = function(t) {
        var e = t.currentTarget;
        console.log("taG.name = " + e);
        var i = Number(e.name);
        MyUserInfo.getInstance().balance,
        this.tab1.group.selectedValue;
        return 0 == this.canXiaZhu ? void (1 == this.currStep && SystemTips.show("防守中不可建造武器")) : (this.canReTry = !0,
        this.xiaZhuTa = i,
        void this.sendXiaZhuInfoToServer())
    }
    ,
    e.prototype.sendXiaZhuInfoToServer = function() {
        var t = this.tab1.group.selectedValue
          , e = {
            cmd: SocketConst.PLAYER_BET,
            gameToken: this.currGameToken,
            list: {
                amt: t,
                weaponId: this.xiaZhuTa
            }
        };
        App.Socket.send(e, function() {}, this)
    }
    ,
    e.prototype.onGetXiaZhuInfoFromServer = function(t, e) {
        console.log("onGetXiaZhuInfoFromServer...");
        for (var i = e.list, n = 0; n < i.length; n++) {
            var r = i[n].weaponId
              , o = this["goldTF" + r]
              , s = this["weapon" + r]
              , a = this["arrow" + r]
              , h = Number(o.text.trim())
              , l = i[n].amt;
            h > l || (a.visible = !0,
            s.visible = !1,
            l > 0 && 1 == a.visible && (a.visible = !1,
            s.visible = !0,
            o.text = l.toString()))
        }
        MyUserInfo.getInstance().balance = e.balance,
        this.balanceTF.text = "积分:" + MyUserInfo.getInstance().balance.toString()
    }
    ,
    e.prototype.onGetXiaZhuInfoFromServer2 = function(t, e) {
        App.MessageCenter.removeListener(SocketConst.PLAYER_BET, this.onGetXiaZhuInfoFromServer2, this);
        for (var i = e.list, n = 0; n < i.length; n++) {
            var r = i[n].weaponId
              , o = this["goldTF" + r]
              , s = this["weapon" + r]
              , a = this["arrow" + r]
              , h = Number(o.text.trim())
              , l = i[n].amt;
            h > l || (a.visible = !0,
            s.visible = !1,
            l > 0 && 1 == a.visible && (a.visible = !1,
            s.visible = !0,
            o.text = l.toString()))
        }
        MyUserInfo.getInstance().balance = e.balance,
        this.balanceTF.text = "积分:" + MyUserInfo.getInstance().balance.toString(),
        this.enableRepeat(!1)
    }
    ,
    e.prototype.enableRepeat = function(t) {
        t ? (this._isRepeatXiazhu = !1,
        this.repeatBtn.touchEnabled = !0,
        this.repeatBtn.filters = null) : (this._isRepeatXiazhu = !0,
        this.repeatBtn.touchEnabled = !1,
        this.repeatBtn.filters = EffectUtils.grayFlilter)
    }
    ,
    e.prototype.chongFuXiaZhu = function() {
        if (!this._isRepeatXiazhu) {
            if (0 == this.canXiaZhu)
                return void (1 == this.currStep && SystemTips.show("防守中不可建造武器"));
            if (this.lastGameXiaZhuData.length > 0) {
                var t = {
                    cmd: SocketConst.PLAYER_BET,
                    gameToken: this.currGameToken,
                    list: this.lastGameXiaZhuData
                };
                App.Socket.send(t, function() {}, this),
                App.MessageCenter.addListener(SocketConst.PLAYER_BET, this.onGetXiaZhuInfoFromServer2, this)
            } else
                SystemTips.show("没有上一局的下注信息")
        }
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.ruleBtn:
            App.ViewManager.open(ViewConst.Rule, this.gwData, this.weaponData);
            break;
        case this.rechargeBtn:
            App.ViewManager.open(ViewConst.Recharge);
            break;
        case this.repeatBtn:
            this.chongFuXiaZhu();
            break;
        case this.tzBtn:
            App.ViewManager.open(ViewConst.Touzhu);
            break;
        case this.feichuanTip:
            break;
        case this.tjBtn:
            App.ViewManager.open(ViewConst.Jingong)
        }
    }
    ,
    e.prototype.close = function() {
        t.prototype.close.call(this),
        t.prototype.dispose.call(this),
        egret.Tween.removeTweens(this),
        egret.Tween.removeTweens(this.exitNormal),
        App.MessageCenter.removeListener(SocketConst.GameStart_51, this.onGetGameStartTriggerFromServer, this),
        App.MessageCenter.removeListener(SocketConst.ChuGuai_52, this.onGetChuGuaiTriggerFromServer, this),
        App.MessageCenter.removeListener(SocketConst.ReadyNext_53, this.onGetReadyNextTriggerFromServer, this),
        App.MessageCenter.removeListener(SocketConst.F_54, this.onGetGameResultTriggerFromServer, this),
        App.MessageCenter.removeListener(SocketConst.PLAYER_BET, this.onGetXiaZhuInfoFromServer, this)
    }
    ,
    e
}(BaseEuiView);
__reflect(TlXiazhuView.prototype, "TlXiazhuView");
var TouZhuJiLuController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new TouZhuJiLuView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Touzhu, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(TouZhuJiLuController.prototype, "TouZhuJiLuController");
var TouZhuJiLuView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n._curPage = 0,
        n._totalPage = 1,
        n.skinName = "resource/app_skins/tl/TouZhuJiLuSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.scroller.verticalScrollBar.autoVisibility = !1,
        this.scroller.verticalScrollBar.visible = !1
    }
    ,
    e.prototype.close = function() {
        t.prototype.close.call(this),
        t.prototype.dispose.call(this)
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.list.itemRenderer = TouZhuJiLuItem
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.bindButtons([this.closeBtn], !0),
        this.bindButtons([this.prevBtn, this.nextBtn], !0),
        t ? (this.uiOpenData = t[0],
        null != this.uiOpenData ? this.getDataFromServer2() : this.getDataFromServer()) : this.getDataFromServer()
    }
    ,
    e.prototype.getDataFromServer2 = function() {
        var t = this
          , e = new CommandVo;
        e.action = Http.playerGameInfo,
        e.params = {
            uid: this.uiOpenData.uid,
            gameToken: this.uiOpenData.gameToken,
            gameId: this.uiOpenData.gameId
        },
        App.Http.send(e, this, function(e) {
            if (null != e) {
                var i = e.list;
                i = i || [],
                t.scroller.viewport.scrollV = 0;
                var i = e.list
                  , n = new eui.ArrayCollection(i);
                t.list.dataProvider = n,
                t._totalPage = e.totalPages,
                t._totalPage = Math.max(t._totalPage, 1)
            }
        })
    }
    ,
    e.prototype.getDataFromServer = function() {
        var t = this
          , i = new CommandVo;
        i.action = Http.playerBetHistory2,
        i.params = {
            pageNumber: this._curPage,
            pageSize: e.PAGE_SIZE,
            uid: MyUserInfo.getInstance().uid
        },
        App.Http.send(i, this, function(e) {
            if (null != e) {
                t.scroller.viewport.scrollV = 0;
                var i = e.list
                  , n = new eui.ArrayCollection(i);
                t.list.dataProvider = n,
                t._totalPage = e.totalPages,
                t._totalPage = Math.max(t._totalPage, 1),
                t.pageTF.text = Number(t._curPage + 1) + "/" + t._totalPage
            }
        })
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.prevBtn:
            if (this._curPage <= 0)
                return;
            this._curPage--,
            this._curPage = Math.max(0, this._curPage),
            this.getDataFromServer();
            break;
        case this.nextBtn:
            if (this._curPage >= this._totalPage - 1)
                return;
            this._curPage++,
            this._curPage = Math.min(this._curPage, this._totalPage - 1),
            this.getDataFromServer()
        }
    }
    ,
    e.PAGE_SIZE = 10,
    e
}(BaseEuiView);
__reflect(TouZhuJiLuView.prototype, "TouZhuJiLuView");
var TouZhuJiLuItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "TouZhuJiLuItemSkin",
        e.addEventListener(egret.TouchEvent.TOUCH_TAP, e.onTouchTapHandle, e),
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this)
    }
    ,
    e.prototype.onTouchTapHandle = function(t) {}
    ,
    e.prototype.dataChanged = function() {
        if (this.data) {
            var t = this.data.gameToken
              , e = this.data.gameId
              , i = "部落保卫战";
            e == GameApp.TOWER2 && (i = "英雄塔防"),
            this.qishu.text = i + " " + t + "期",
            this.data.awardTime && (this.timeTF.text = this.data.awardTime),
            this.tz.text = this.data.amt,
            this.numTF.text = "（" + this.data.monsterId + "号）";
            for (var n = this.data.amtWin, r = n - this.data.amt, o = r.toFixed(2), s = 8, a = 0; s > a; a++)
                this["select" + (a + 1)].source = "tzjlkuang_d_png",
                this["countTF" + (a + 1)].text = "0/0";
            var h = this.data.monsterId;
            0 == h ? (this.gw.visible = !1,
            this.winresult.visible = !1,
            this.failresult.visible = !1,
            this.winTF.text = "未开奖") : (this.gw.visible = !0,
            e == GameApp.TOWER ? this.gw.source = "gw" + this.data.monsterId + "2_png" : this.gw.source = "gw" + this.data.monsterId + "2_2_png",
            r > 0 ? (this.winresult.visible = !0,
            this.failresult.visible = !1) : (this.winresult.visible = !1,
            this.failresult.visible = !0),
            this["select" + h].source = "tzjlkuang_s_png",
            this.winTF.text = o);
            for (var a = 0; 8 > a; a++) {
                var l = this["gw" + (a + 1)];
                l.width = l.height = 76,
                e == GameApp.TOWER2 ? l.source = "gw" + (a + 1) + "2_2_png" : l.source = "gw" + (a + 1) + "2_png"
            }
            for (var c = this.data.list, s = c.length, a = 0; s > a; a++) {
                var p = c[a]
                  , u = p.weaponId
                  , g = p.amt
                  , d = p.amtWin;
                (void 0 == d || null == d) && (d = 0),
                this["countTF" + u].textFlow = [{
                    text: d.toString(),
                    style: {
                        textColor: 16711680
                    }
                }, {
                    text: "/" + g.toString(),
                    style: {
                        textColor: 0
                    }
                }]
            }
        }
    }
    ,
    e
}(BaseItemClickRenderer);
__reflect(TouZhuJiLuItem.prototype, "TouZhuJiLuItem");
var ActivityController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new ActivityView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Activity, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(ActivityController.prototype, "ActivityController");
var ActivityView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/home/ActivitySkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.bindButton(this.closeBtn, !0),
        this.bindButtons([this.item2, this.item1, this.item3])
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.item1:
            App.ViewManager.open(ViewConst.RechargeActivity, 1);
            break;
        case this.item2:
            App.ViewManager.open(ViewConst.redpackInfoWithdraw);
            break;
        case this.item3:
            App.ViewManager.open(ViewConst.RechargeActivity, 3)
        }
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this)
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e),
        this.dispose()
    }
    ,
    e
}(BaseEuiView);
__reflect(ActivityView.prototype, "ActivityView");
var BannerView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.W = 687,
        e._max = 0,
        e.skinName = "resource/app_skins/components/BannerSkin.exml",
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.initData(),
        this.initEvent()
    }
    ,
    e.prototype.initData = function() {
        this.list.itemRenderer = BannerItemView;
        var t = MyUserInfo.getInstance().banner
          , e = new eui.ArrayCollection(t);
        this.list.dataProvider = e,
        this._max = t.length,
        this.indexFlag = 0,
        this.scroller.$Scroller[8].maxScrollPos = this._max * this.W - this.W
    }
    ,
    e.prototype.initEvent = function() {
        this.scroller.addEventListener(eui.UIEvent.CHANGE_START, this.onStart, this);
        var t = [];
        t.length = this._max,
        this.dotBar.dataProvider = new eui.ArrayCollection(t),
        this.refreshView()
    }
    ,
    e.prototype.onClose = function() {
        this.parent && this.parent.removeChild(this)
    }
    ,
    e.prototype.onStart = function(t) {
        this.oldScrollH = this.scroller.viewport.scrollH,
        this.stage.once(egret.TouchEvent.TOUCH_END, this.onEnd, this)
    }
    ,
    e.prototype.onEnd = function() {
        var t = this.scroller.viewport.scrollH - this.oldScrollH;
        Math.abs(t) >= 20 && this.onMove(t > 1 ? 1 : -1)
    }
    ,
    e.prototype.onMove = function(t) {
        this.indexFlag += t,
        this.indexFlag < 0 && (this.indexFlag = 0),
        this.indexFlag >= this._max && (this.indexFlag = this._max - 1),
        this.refreshView()
    }
    ,
    e.prototype.refreshView = function() {
        this.scroller.stopAnimation(),
        this.scroller.$Scroller[8].throwTo(this.indexFlag * this.W, 300),
        this.dotBar.selectedIndex = this.indexFlag
    }
    ,
    e
}(eui.Component);
__reflect(BannerView.prototype, "BannerView");
var BannerItemView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "BannerItemSkin",
        e
    }
    return __extends(e, t),
    e.prototype.dataChanged = function() {
        t.prototype.dataChanged.call(this),
        null != this.data && (this.banner.source = this.data)
    }
    ,
    e
}(eui.ItemRenderer);
__reflect(BannerItemView.prototype, "BannerItemView");
var RechargeActivityController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new RechargeActivityView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.RechargeActivity, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(RechargeActivityController.prototype, "RechargeActivityController");
var RechargeActivityView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/home/RechargeActivitySkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], i = 0; i < arguments.length; i++)
            t[i] = arguments[i];
        console.info(t);
        var n = t[0];
        3 == n ? this.content.text = e.CONTENT2 : this.content.text = e.CONTENT
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closerectBtn:
            this.close()
        }
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.bindButton(this.closerectBtn, !1)
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this)
    }
    ,
    e.CONTENT = "充值500以上的送 58.88 积分\n充值1000以上的送 88.88 积分\n充值2000以上的送 138.88 积分\n充值3000以上的送 258.88 积分\n充值4000以上的送 388.88 积分\n充值5000以上的送 488.88 积分\n充值8000以上的送 688.88 积分\n充值10000以上的送 1088.88 积分\n\n\n每日仅限第一笔充值达标有效，多笔充值也以第一个达标充值为准\n首充奖励每日只发放一次，同ip，同设备，视为多号套利",
    e.CONTENT2 = "男爵-累计消费<30W--佣金返利0.3%\n伯爵-累计消费>30W--佣金返利0.35%\n公爵-累计消费>60W--佣金返利0.40%\n国公-累计消费>100W--佣金返利0.45%\n藩王-累计消费>200W--佣金返利0.50%\n国王-累计消费>300W--佣金返利0.55%\n皇帝-累计消费>500W--佣金返利0.60%\n神-累计消费>800W--佣金返利0.70%",
    e
}(BaseEuiView);
__reflect(RechargeActivityView.prototype, "RechargeActivityView");
var RedpacketTixianController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new RedpacketTixianView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.redpackInfoWithdraw, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(RedpacketTixianController.prototype, "RedpacketTixianController");
var RedpacketTixianView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/home/RedpacketTixianSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = this, e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        this.bindButton(this.confirmBtn, !0),
        this.bindButton(this.closerectBtn, !0);
        var n = new CommandVo;
        n.action = Http.getRedpackInfo,
        App.Http.send(n, this, function(e) {
            if (null != e) {
                var i = e.amt;
                t.moneyTF.text = i.toString()
            }
        })
    }
    ,
    e.prototype.tixianconfirm = function() {
        var t = new CommandVo;
        t.action = Http.redpackInfoWithdraw,
        App.Http.send(t, this, function(t) {
            null != t && SystemTips.show("恭喜，提现成功！")
        })
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closerectBtn:
            this.close();
            break;
        case this.confirmBtn:
            var i = Number(this.moneyTF.text);
            if (0 >= i)
                return;
            this.tixianconfirm()
        }
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this)
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e),
        this.dispose()
    }
    ,
    e
}(BaseEuiView);
__reflect(RedpacketTixianView.prototype, "RedpacketTixianView");
var SelectController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new SelectView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Select, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(SelectController.prototype, "SelectController");
var SelectView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.percentWidth = 100,
        n.percentHeight = 100,
        n.skinName = "resource/app_skins/home/HomeSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.open.call(this, e),
        this.bindButtons([this.item1]),
        this.bindButton(this.kfBtn2, !0),
        this.bindButtons([this.rechargeBtn, this.kfBtn, this.meBtn, this.noticeBtn], !0),
        null == this.bannerView && (this.bannerView = new BannerView,
        this.addChild(this.bannerView),
        this.bannerView.x = 32,
        this.bannerView.y = 170)
    }
    ,
    e.prototype.getHistoryData = function() {
        var t = new CommandVo;
        t.action = Http.gameHistory2,
        App.Http.send(t, this, function(t) {
            null != t && (MyUserInfo.getInstance().historyData3 = t,
            App.ViewManager.open(ViewConst.Index3))
        }, !0)
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.item1:
            GameApp.gameId = GameApp.TOWER,
            this.getHistoryData();
            break;
        case this.rechargeBtn:
            App.ViewManager.open(ViewConst.Recharge);
            break;
        case this.noticeBtn:
            App.ViewManager.open(ViewConst.XiaoXiList);
            break;
        case this.kfBtn:
            var i = App.kefuUrl
              , n = encodeURI(i);
            NativeManager.call("openUrl", n),
            window.open(i);
            break;
        case this.kfBtn2:
            var i = App.kefuUrl
              , n = encodeURI(i);
            NativeManager.call("openUrl", n),
            window.open(i);
            break;
        case this.meBtn:
            App.ViewManager.open(ViewConst.Me)
        }
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this),
        this.dispose()
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this)
    }
    ,
    e
}(BaseEuiView);
__reflect(SelectView.prototype, "SelectView");
var TlSelectAreaController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new TlSelectAreaView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.SelectArea, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(TlSelectAreaController.prototype, "TlSelectAreaController");
var TlSelectAreaView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/home/TlSelectAreaSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.bindButton(this.closeBtn, !0),
        this.bindButtons([this.area1, this.area2, this.area3, this.area4, this.area5], !0)
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.area1:
            this.goArea(1);
            break;
        case this.area2:
            this.goArea(1);
            break;
        case this.area3:
            this.goArea(1);
            break;
        case this.area4:
            this.goArea(1);
            break;
        case this.area5:
            this.goArea(1)
        }
    }
    ,
    e.prototype.goArea = function(t) {
        var e = this
          , i = new CommandVo;
        i.action = Http.entryArea,
        i.params = {
            areaId: t
        },
        App.Http.send(i, this, function(t) {
            null != t && (e.close(),
            App.ViewManager.open(ViewConst.Index3))
        })
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this)
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e),
        this.dispose()
    }
    ,
    e
}(BaseEuiView);
__reflect(TlSelectAreaView.prototype, "TlSelectAreaView");
var LoginController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.loginView = new LoginView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Login, e.loginView),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(LoginController.prototype, "LoginController");
var LoginManager = function() {
    function t() {}
    return t
}();
__reflect(LoginManager.prototype, "LoginManager");
var LoginView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n._showPwd = !1,
        n.skinName = "resource/app_skins/login/NLoginSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var i = CookieManager.read("user.userName")
          , n = CookieManager.read("user.password");
        console.log("userName = " + i + ",pwd = " + n),
        null != i && "" != i && (this.accountTF.text = i,
        this.remChk.selected = !0),
        null != n && "" != n && (this.pswTF.text = n)
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.loginBtn:
            this.login();
            break;
        case this.kefuBtn:
            var i = App.kefuUrl
              , n = encodeURI(i);
            NativeManager.call("openUrl", App.kefuUrl),
            window.open(i);
            break;
        case this.forgetBtn:
            var i = App.kefuUrl
              , n = encodeURI(i);
            NativeManager.call("openUrl", n);
            break;
        case this.regBtn:
            App.ViewManager.open(ViewConst.Register),
            this.close();
            break;
        case this.downloadBtn:
            NativeManager.call("openUrl", App.downloadUrl);
            break;
        case this.eyeBtn:
            this._showPwd = !this._showPwd,
            this._showPwd ? (this.eyeImg.source = "eye_open_png",
            this.pswTF.inputType = egret.TextFieldInputType.TEXT,
            this.pswTF.displayAsPassword = !1) : (this.eyeImg.source = "eye_close_png",
            this.pswTF.inputType = egret.TextFieldInputType.PASSWORD,
            this.pswTF.displayAsPassword = !0)
        }
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.bindButtons([this.loginBtn, this.eyeBtn, this.kefuBtn, this.regBtn, this.forgetBtn, this.downloadBtn], !0),
        this.pswTF.prompt = "请输入密码",
        this.accountTF.prompt = "请输入用户名",
        this.pswTF.inputType = egret.TextFieldInputType.PASSWORD,
        this.pswTF.displayAsPassword = !0
    }
    ,
    e.prototype.login = function() {
        var t = this.accountTF.text.trim()
          , e = this.pswTF.text.trim();
        if ("" == t || 0 == t.length)
            return void SystemTips.show("请输入用户名");
        if ("" == e || 0 == e.length)
            return void SystemTips.show("请输入密码");
        var i = new md5;
        e = i.hex_md5(e);
        var n = new CommandVo;
        n.action = Http.LOGIN,
        n.params = {
            loginId: t,
            loginPassword: e,
            clientIp: GameApp.clientIp,
            deviceId: GameApp.deviceId
        },
        App.Http.send(n, this, this.loginResult)
    }
    ,
    e.prototype.loginResult = function(t) {
        MyUserInfo.getInstance().init(t),
        Http.token = t.token,
        App.payUrl = t.payUrl,
        App.GlobalData.SocketUrl = t.webSocketUrl,
        this.remChk.selected ? (CookieManager.write("user.userName", this.accountTF.text.trim()),
        CookieManager.write("user.password", this.pswTF.text.trim())) : (CookieManager.remove("user.userName"),
        CookieManager.remove("user.password")),
        this.close(),
        App.MessageCenter.dispatch(GameEventManager.LOGIN_SUCCESS)
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e)
    }
    ,
    e
}(BaseEuiView);
__reflect(LoginView.prototype, "LoginView");
var RegisterController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new RegisterView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Register, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(RegisterController.prototype, "RegisterController");
var RegisterView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/login/NRegisterSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            App.ViewManager.open(ViewConst.Login),
            this.close();
            break;
        case this.regBtn:
            this.reg()
        }
    }
    ,
    e.prototype.reg = function() {
        var t = this
          , e = this.invitecodeTF.text.trim()
          , i = this.pswTF.text.trim()
          , n = this.pswTF2.text.trim()
          , r = this.accountTF.text.trim();
        if (StringUtils.isEmpty(e))
            return void SystemTips.show(DStrings.INPUT_INVITECODE);
        if (StringUtils.isEmpty(r))
            return void SystemTips.show(DStrings.INPUT_ACCOUNT);
        if (StringUtils.isEmpty(i))
            return void SystemTips.show(DStrings.INPUT_PASSWORD);
        if (StringUtils.isEmpty(n))
            return void SystemTips.show(DStrings.INPUT_PASSWORD_AGAIN);
        if (i != n)
            return void SystemTips.show(DStrings.PASSWORD_NOT_SAME);
        var o = new md5;
        i = o.hex_md5(i);
        var s = new CommandVo;
        s.action = Http.register,
        s.params = {
            code: e,
            loginId: r,
            loginPassword: i,
            clientIp: GameApp.clientIp,
            deviceId: GameApp.deviceId
        },
        App.Http.send(s, this, function(e) {
            t.close(),
            App.ViewManager.open(ViewConst.Login, [r, i])
        })
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.invitecodeTF.text = App.shareCode,
        this.accountTF.text = "",
        this.pswTF.text = this.pswTF2.text = ""
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.bindButtons([this.regBtn, this.closeBtn], !0),
        this.pswTF.prompt = DStrings.INPUT_PASSWORD,
        this.pswTF2.prompt = DStrings.INPUT_PASSWORD_AGAIN,
        this.accountTF.prompt = DStrings.INPUT_ACCOUNT,
        this.invitecodeTF.prompt = DStrings.INPUT_INVITECODE,
        this.pswTF.inputType = egret.TextFieldInputType.PASSWORD,
        this.pswTF.displayAsPassword = !0,
        this.pswTF2.inputType = egret.TextFieldInputType.PASSWORD,
        this.pswTF2.displayAsPassword = !0,
        this.l1.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "账号",
            style: {
                textColor: 1579032
            }
        }],
        this.l2.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "密码",
            style: {
                textColor: 1579032
            }
        }],
        this.l3.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "确认密码",
            style: {
                textColor: 1579032
            }
        }],
        this.l4.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "推荐码",
            style: {
                textColor: 1579032
            }
        }]
    }
    ,
    e
}(BaseEuiView);
__reflect(RegisterView.prototype, "RegisterView");
var AddDailiController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new AddDailiView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Add_daili, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(AddDailiController.prototype, "AddDailiController");
var AddDailiView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/me/AddDailiSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        console.log("========adddaili open..."),
        this.bindButtons([this.closeBtn, this.confirmBtn], !0),
        this.passwordTF.text = "",
        this.accountTF.text = "",
        this.repasswordTF.text = ""
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.accountTF.prompt = "请输入账号",
        this.passwordTF.prompt = "请输入密码",
        this.repasswordTF.prompt = "请确认密码",
        this.fdTF.prompt = "输入返点",
        this.fhTF.prompt = "输入分红",
        this.passwordTF.inputType = egret.TextFieldInputType.PASSWORD,
        this.passwordTF.displayAsPassword = !0,
        this.repasswordTF.inputType = egret.TextFieldInputType.PASSWORD,
        this.repasswordTF.displayAsPassword = !0,
        this.l1.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "代理账号",
            style: {
                textColor: 1579032
            }
        }],
        this.l2.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "密码",
            style: {
                textColor: 1579032
            }
        }],
        this.l3.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "确认密码",
            style: {
                textColor: 1579032
            }
        }],
        this.l4.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "返点",
            style: {
                textColor: 1579032
            }
        }],
        this.l5.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "分红",
            style: {
                textColor: 1579032
            }
        }]
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e),
        this.dispose()
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.confirmBtn:
            this.onConfirm()
        }
    }
    ,
    e.prototype.onConfirm = function() {
        var t = this.accountTF.text.trim()
          , e = this.passwordTF.text.trim()
          , i = this.repasswordTF.text.trim()
          , n = this.fdTF.text.trim();
        if (StringUtils.isEmpty(t))
            return void SystemTips.show("请输入账号");
        if (StringUtils.isEmpty(e))
            return void SystemTips.show("请输入密码");
        if (StringUtils.isEmpty(i))
            return void SystemTips.show("请再次输入密码");
        if (e != i)
            return void SystemTips.show("两次密码输入不一致");
        var r = new md5;
        e = r.hex_md5(e);
        var o = new CommandVo;
        o.action = Http.addAgent,
        o.params = {
            loginId: t,
            loginPassword: e,
            rate: n,
            code: "",
            mobileNo: "",
            agentRate: Number(this.fhTF.text.trim())
        },
        App.Http.send(o, this, function(t) {
            SystemTips.show("恭喜，代理添加成功")
        })
    }
    ,
    e
}(BaseEuiView);
__reflect(AddDailiView.prototype, "AddDailiView");
var AddHuiyuanController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new AddHuiyuanView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Add_huiyuan, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(AddHuiyuanController.prototype, "AddHuiyuanController");
var AddHuiyuanView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/me/AddHuiyuanSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        console.log("========adddaili open..."),
        this.bindButtons([this.closeBtn, this.confirmBtn], !0),
        this.passwordTF.text = "",
        this.accountTF.text = "",
        this.repasswordTF.text = ""
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.confirmBtn:
            this.onConfirm()
        }
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e),
        this.dispose()
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.accountTF.prompt = "请输入账号",
        this.passwordTF.prompt = "请输入密码",
        this.repasswordTF.prompt = "请确认密码",
        this.passwordTF.inputType = egret.TextFieldInputType.PASSWORD,
        this.passwordTF.displayAsPassword = !0,
        this.repasswordTF.inputType = egret.TextFieldInputType.PASSWORD,
        this.repasswordTF.displayAsPassword = !0,
        this.l1.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "会员账号",
            style: {
                textColor: 1579032
            }
        }],
        this.l2.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "密码",
            style: {
                textColor: 1579032
            }
        }],
        this.l3.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "确认密码",
            style: {
                textColor: 1579032
            }
        }]
    }
    ,
    e.prototype.onConfirm = function() {
        var t = this.accountTF.text.trim()
          , e = this.passwordTF.text.trim()
          , i = this.repasswordTF.text.trim();
        if (StringUtils.isEmpty(t))
            return void SystemTips.show("请输入会员账号");
        if (StringUtils.isEmpty(e))
            return void SystemTips.show("请输入密码");
        if (StringUtils.isEmpty(i))
            return void SystemTips.show("请再次输入密码");
        if (e != i)
            return void SystemTips.show("两次密码输入不一致");
        var n = new md5;
        e = n.hex_md5(e);
        var r = new CommandVo;
        r.action = Http.addPlayer,
        r.params = {
            loginId: t,
            loginPassword: e
        },
        App.Http.send(r, this, function(t) {
            SystemTips.show("恭喜，会员账号添加成功")
        })
    }
    ,
    e
}(BaseEuiView);
__reflect(AddHuiyuanView.prototype, "AddHuiyuanView");
var BankTypeItemRender = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "resource/app_skins/items/BankTypeItemRenderSkin.exml",
        e
    }
    return __extends(e, t),
    e.prototype.click = function(e) {
        t.prototype.click.call(this, e);
        var i = this.nameTF.text.trim();
        App.MessageCenter.dispatch("select_bank_type", i)
    }
    ,
    e.prototype.onCreateComplete = function(e) {
        t.prototype.onCreateComplete.call(this, e),
        this.addButton(this.nameTF, !1)
    }
    ,
    e.prototype.dataChanged = function() {
        t.prototype.dataChanged.call(this),
        null != this.data && (this.nameTF.text = this.data.text)
    }
    ,
    e.prototype.partAdded = function(e, i) {
        t.prototype.partAdded.call(this, e, i),
        !this.data
    }
    ,
    e
}(BaseItemClickRenderer);
__reflect(BankTypeItemRender.prototype, "BankTypeItemRender");
var BindMobileController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new BindMobileView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.BindMobile, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(BindMobileController.prototype, "BindMobileController");
var BindMobileView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/me/BindMobileSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.mobileTF.text = "",
        this.bindButtons([this.closeBtn, this.confirmBtn], !0)
    }
    ,
    e.prototype.touchBindButtonHandler = function(t) {
        switch (t) {
        case this.closeBtn:
            this.close();
            break;
        case this.confirmBtn:
            this.confirmHandle()
        }
    }
    ,
    e.prototype.confirmHandle = function() {
        var t = this.mobileTF.text.trim()
          , e = new CommandVo;
        e.action = Http.bindMobile,
        e.params = {
            mobileNo: t
        },
        App.Http.send(e, this, function(t) {
            SystemTips.show("恭喜，手机号绑定成功")
        })
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.apply(this, e),
        this.dispose()
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.mobileTF.restrict = "0-9",
        this.mobileTF.prompt = "输入手机号"
    }
    ,
    e
}(BaseEuiView);
__reflect(BindMobileView.prototype, "BindMobileView");
var BindTixianController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new BindTixianView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.BindTixian, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(BindTixianController.prototype, "BindTixianController");
var BindTixianController2 = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new BindTixianView2(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.BindTixian2, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(BindTixianController2.prototype, "BindTixianController2");
var BindTixianView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/me/BindTixianSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.bankAccountNameTF.text = MyUserInfo.getInstance().accountName,
        this.bankNameTF.text = MyUserInfo.getInstance().accountBankName,
        this.bankNumTF.text = MyUserInfo.getInstance().accountNo,
        App.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchStageHandle, this)
    }
    ,
    e.prototype.onTouchStageHandle = function(t) {
        if (this.bankTypeG.visible) {
            var e = new egret.Rectangle(this.bankTypeG.x,this.bankTypeG.y,this.bankTypeG.width,this.bankTypeG.height);
            e.contains(t.stageX, t.stageY) || "bankTypeG" != t.target.name && (this.bankTypeG.visible = !1)
        }
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.bindBtn:
            this.bind();
            break;
        case this.closerect:
            this.close(),
            App.MessageCenter.dispatch(GameEventManager.BIND_OK);
            break;
        case this.select:
            this.bankTypeG.visible = !this.bankTypeG.visible
        }
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.bindButtons([this.closerect, this.bindBtn], !0),
        this.bindButton(this.select),
        this.bankAccountNameTF.prompt = "持卡人姓名",
        this.bankTypeTF.text = "",
        this.bankTypeG.visible = !1,
        this.select.name = "bankTypeG",
        this.list.itemRenderer = BankTypeItemRender;
        var e = new eui.ArrayCollection(GameApp.BANK_TYPES);
        this.list.dataProvider = e,
        this.scroller.viewport.scrollV = 0,
        this.l1.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "账号名称",
            style: {
                textColor: 1579032
            }
        }],
        this.l2.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "银行账号",
            style: {
                textColor: 1579032
            }
        }],
        this.l3.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "银行名称",
            style: {
                textColor: 1579032
            }
        }],
        this.l4.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "开户行",
            style: {
                textColor: 1579032
            }
        }],
        App.MessageCenter.addListener("select_bank_type", this.onSelectBankType, this)
    }
    ,
    e.prototype.bind = function() {
        var t = this.bankNameTF.text.trim()
          , e = this.bankAccountNameTF.text.trim()
          , i = this.bankNumTF.text.trim()
          , n = (this.bankTypeTF.text.trim(),
        "")
          , r = "";
        if ("" == r && "" == e)
            return void SystemTips.show("请填写支付宝账号或银行卡账号信息");
        if ("" != r && "" == n)
            return void SystemTips.show("请填写支付宝账号");
        if ("" != e && "" == i)
            return void SystemTips.show("请填写银行账号");
        var o = new CommandVo;
        o.action = Http.bindAccount,
        o.params = {
            accountBankName: t,
            accountName: e,
            accountNo: i,
            alipayId: n,
            alipayName: r
        },
        App.Http.send(o, this, this.onBindResponse)
    }
    ,
    e.prototype.onSelectBankType = function(t) {
        this.bankNameTF.text = t.toString(),
        this.bankTypeG.visible = !1
    }
    ,
    e.prototype.onBindResponse = function(t) {
        this.close(),
        App.MessageCenter.dispatch(GameEventManager.BIND_OK)
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e),
        App.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchStageHandle, this)
    }
    ,
    e
}(BaseEuiView);
__reflect(BindTixianView.prototype, "BindTixianView");
var BindTixianView2 = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/me/BindTixianSkin2.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.alipay_accountNameTF.text = MyUserInfo.getInstance().alipayName,
        this.alipay_accountTF.text = MyUserInfo.getInstance().alipayId
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.bindBtn:
            this.bind();
            break;
        case this.closerect:
            this.close(),
            App.MessageCenter.dispatch(GameEventManager.BIND_OK)
        }
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.bindButtons([this.closerect, this.bindBtn], !0),
        this.l1.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "真实姓名",
            style: {
                textColor: 1579032
            }
        }],
        this.l2.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "支付宝账号",
            style: {
                textColor: 1579032
            }
        }]
    }
    ,
    e.prototype.bind = function() {
        var t = this.alipay_accountNameTF.text.trim()
          , e = this.alipay_accountTF.text.trim()
          , i = new CommandVo;
        i.action = Http.bindAccount,
        i.params = {
            alipayId: e,
            alipayName: t
        },
        App.Http.send(i, this, this.onBindResponse)
    }
    ,
    e.prototype.onBindResponse = function(t) {
        this.close(),
        App.MessageCenter.dispatch(GameEventManager.BIND_OK)
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e)
    }
    ,
    e
}(BaseEuiView);
__reflect(BindTixianView2.prototype, "BindTixianView2");
var MeController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new MeView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Me, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(MeController.prototype, "MeController");
var MeView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/me/NMeSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.hallBtn:
            App.ViewManager.open(ViewConst.Select),
            this.close();
            break;
        case this.kefuBtn:
            var i = App.kefuUrl;
            window.open(i);
        case this.kfBtn:
            var i = App.kefuUrl
              , n = encodeURI(i);
            NativeManager.call("openUrl", n),
            window.open(i);
            break;
        case this.noticeBtn:
            App.ViewManager.open(ViewConst.XiaoXiList),
            this.close();
            break;
        case this.rechargeBtn:
            App.ViewManager.open(ViewConst.Recharge),
            this.close();
            break;
        case this.rechargeBtn:
            App.ViewManager.open(ViewConst.Recharge);
            break;
        case this.exchangeBtn:
            App.ViewManager.open(ViewConst.Tixian);
            break;
        case this.tiquBtn:
            this.tiqu();
            break;
        case this.pswBtn:
            App.ViewManager.open(ViewConst.DengLuMiMa);
            break;
        case this.zijinpswBtn:
            App.ViewManager.open(ViewConst.ZiJinMiMa);
            break;
        case this.tuiguangBtn:
            App.ViewManager.open(ViewConst.Tuiguang);
            break;
        case this.zhuanzhangBtn:
            App.ViewManager.open(ViewConst.XiaJiZhuanZhang);
            break;
        case this.grreportBtn:
            App.ViewManager.open(ViewConst.GerenReport);
            break;
        case this.dlreportBtn:
            App.ViewManager.open(ViewConst.Report);
            break;
        case this.addhuiyuanBtn:
            App.ViewManager.open(ViewConst.Add_huiyuan);
            break;
        case this.adddailiBtn:
            App.ViewManager.open(ViewConst.Add_daili);
            break;
        case this.quitBtn:
            App.MessageCenter.dispatch(GameEventManager.BACK_TO_LOGIN);
            break;
        case this.bindBtn:
            App.ViewManager.open(ViewConst.BindTixian);
            break;
        case this.bindBtn2:
            App.ViewManager.open(ViewConst.BindTixian2);
            break;
        case this.mobileBtn:
            App.ViewManager.open(ViewConst.BindMobile)
        }
    }
    ,
    e.prototype.tiqu = function() {
        var t = this
          , e = new CommandVo;
        e.action = Http.withdrawComminsion,
        e.params = {},
        App.Http.send(e, this, function(e) {
            if (null != e) {
                var i = e.balance;
                MyUserInfo.getInstance().balance = i,
                MyUserInfo.getInstance().commission = 0,
                t.yongjinTF.text = "佣金：0.00",
                SystemTips.show(DStrings.TIQU_OK)
            }
        })
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.bindButton(this.hallBtn, !0),
        this.bindButtons([this.quitBtn, this.bindBtn, this.bindBtn2], !0),
        this.bindButtons([this.rechargeBtn, this.rechargeBtn, this.exchangeBtn, this.tiquBtn, this.noticeBtn, this.kefuBtn, this.kfBtn], !0),
        this.bindButtons([this.dlreportBtn, this.grreportBtn, this.tuiguangBtn, this.addhuiyuanBtn, this.adddailiBtn, this.zhuanzhangBtn, this.pswBtn, this.zijinpswBtn, this.mobileBtn], !1),
        this.bindButton(this.quitBtn, !0),
        this.nameTF.text = MyUserInfo.getInstance().loginId,
        this.idTF.text = "ID：" + MyUserInfo.getInstance().uid,
        this.yingyuTF.text = "0",
        this.tixianTF.text = "0",
        this.tixianTF.text = MyUserInfo.getInstance().cashOut.toString(),
        this.yingyuTF.text = MyUserInfo.getInstance().amtProfit.toString(),
        "y" == MyUserInfo.getInstance().agentFlag.toLowerCase(),
        this.vipImg.visible = !1;
        var i = MyUserInfo.getInstance().level;
        i > 0 && (this.vipImg.visible = !0,
        this.vipImg.source = "vip" + i + "_png"),
        this.onUpdateUserGold(null),
        this.loadData()
    }
    ,
    e.prototype.loadData = function() {
        var t = this
          , e = new CommandVo;
        e.action = Http.agentInfo,
        e.params = {},
        App.Http.send(e, this, function(e) {
            if (null != e) {
                var i = e.commission;
                MyUserInfo.getInstance().commission = i;
                var n = i.toFixed(2);
                t.yongjinTF.text = "佣金：" + n.toString()
            }
        })
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.apply(this, e),
        this.dispose()
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        GameEventManager.addEvent(GameEventManager.UPDATE_USER_AMTPROFIT, this.onUpdateUserAmtprofit, this),
        GameEventManager.addEvent(GameEventManager.UPDATE_USER_GOLD, this.onUpdateUserGold, this)
    }
    ,
    e.prototype.onUpdateUserAmtprofit = function(t) {
        this.yingyuTF.text = MyUserInfo.getInstance().amtProfit.toString()
    }
    ,
    e.prototype.onUpdateUserGold = function(t) {
        this.balanceTF.text = MyUserInfo.getInstance().balance.toString()
    }
    ,
    e
}(BaseEuiView);
__reflect(MeView.prototype, "MeView");
var SelectFaceController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new SelectFaceView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Select_Face, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(SelectFaceController.prototype, "SelectFaceController");
var SelectFaceView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n._index = 1,
        n.skinName = "resource/app_skins/me/SelectFaceSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.bindButtons([this.closeBtn, this.confirmBtn], !0)
    }
    ,
    e.prototype.touchBindButtonHandler = function(t) {
        switch (t) {
        case this.closeBtn:
            this.close();
            break;
        case this.confirmBtn:
            this.confirmHandle()
        }
    }
    ,
    e.prototype.confirmHandle = function() {
        var t = new CommandVo;
        t.action = Http.changeHeadImg,
        t.params = {
            id: this._index
        },
        App.Http.send(t, this, function(t) {
            SystemTips.show("恭喜，头像修改成功"),
            MyUserInfo.getInstance().photo = t.photo
        })
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.apply(this, e),
        this.dispose()
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this);
        for (var i = 0; i < e.TOTAL; i++) {
            var n = this["head" + (i + 1)];
            n.name = "head_" + (i + 1),
            n.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchImageHandle, this)
        }
    }
    ,
    e.prototype.onTouchImageHandle = function(t) {
        for (var i = t.currentTarget, n = Number(i.name.split("_")[1]), r = 0; r < e.TOTAL; r++) {
            var o = this["head" + (r + 1)];
            o.source = "headpic" + (r + 1) + "_default_png"
        }
        i.source = "headpic" + n + "_select_png",
        this._index = n
    }
    ,
    e.TOTAL = 6,
    e
}(BaseEuiView);
__reflect(SelectFaceView.prototype, "SelectFaceView");
var TuiguangController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.tuiguangView = new TuiguangView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Tuiguang, e.tuiguangView),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(TuiguangController.prototype, "TuiguangController");
var TuiguangView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n._inviteCode = "",
        n.skinName = "resource/app_skins/me/TuiguangSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.bindButtons([this.closeBtn, this.copyLinkBtn, this.copyCodeBtn], !0),
        this.getDataFromServer()
    }
    ,
    e.prototype.getDataFromServer = function() {
        var t = this
          , e = new CommandVo;
        e.action = Http.agentLink,
        e.params = {
            uid: MyUserInfo.getInstance().uid
        },
        App.Http.send(e, this, function(e) {
            null != e && (t.linkTF.text = e.link,
            t._inviteCode = e.code,
            t.inviteCodeTF.text = "邀请码：" + t._inviteCode,
            t.qrcode.source = e.url)
        })
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.copyLinkBtn:
            this.copyLink();
            break;
        case this.copyCodeBtn:
            this.copyYqm()
        }
    }
    ,
    e.prototype.copyLink = function() {
        var t = this.linkTF.text.trim();
        NativeManager.call("copyToclipboard", t),
        SystemTips.show("复制成功！")
    }
    ,
    e.prototype.copyYqm = function() {
        var t = this._inviteCode;
        NativeManager.call("copyToclipboard", t),
        SystemTips.show("复制成功！")
    }
    ,
    e
}(BaseEuiView);
__reflect(TuiguangView.prototype, "TuiguangView");
var XiaoXiDetailController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new XiaoXiDetailView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.XiaoXiDetail, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(XiaoXiDetailController.prototype, "XiaoXiDetailController");
var XiaoXiDetailView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/home/XiaoXiDetailSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.title.text = t[0].noticeTitle,
        this.content.text = t[0].noticeContent
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closerect:
            this.close()
        }
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.bindButton(this.closerect, !1)
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this)
    }
    ,
    e
}(BaseEuiView);
__reflect(XiaoXiDetailView.prototype, "XiaoXiDetailView");
var XiaoXiListController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new XiaoXiListView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.XiaoXiList, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(XiaoXiListController.prototype, "XiaoXiListController");
var XiaoXiListView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.currPage = 0,
        n.totalPage = 1,
        n.skinName = "resource/app_skins/home/XiaoXiListSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.scroller.verticalScrollBar.autoVisibility = !1,
        this.scroller.verticalScrollBar.visible = !1,
        this.scroller.bounces = !1
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.list.itemRenderer = XiaoXiItem,
        this.list.useVirtualLayout = !0,
        this.bindButtons([this.closeBtn, this.prevBtn, this.nextBtn], !0),
        this.bindButtons([this.kfBtn, this.meBtn, this.rechargeBtn, this.hallBtn], !0)
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.getDataFromServer()
    }
    ,
    e.prototype.getDataFromServer = function() {
        var t = this
          , i = new CommandVo;
        i.action = Http.publicNotice,
        i.params = {
            pageNumber: this.currPage,
            pageSize: e.PAGE_SIZE
        },
        App.Http.send(i, this, function(e) {
            if (null != e) {
                var i = e.list;
                i = i || [],
                t.renderList(i),
                t.totalPage = e.totalPages,
                t.totalPage = Math.max(1, t.totalPage),
                t.pageTF.text = t.currPage + 1 + "/" + t.totalPage,
                i.length > 0 ? t.tipTF.visible = !1 : t.tipTF.visible = !0
            }
        })
    }
    ,
    e.prototype.renderList = function(t) {
        this.scroller.viewport.scrollV = 0;
        var e = new eui.ArrayCollection(t);
        this.list.dataProvider = e
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.prevBtn:
            if (this.currPage <= 0)
                return;
            this.currPage--,
            this.currPage = Math.max(0, this.currPage),
            this.getDataFromServer();
            break;
        case this.nextBtn:
            if (this.currPage >= this.totalPage - 1)
                return;
            this.currPage++,
            this.currPage = Math.min(this.totalPage - 1, this.currPage),
            this.getDataFromServer();
            break;
        case this.kfBtn:
            var i = App.kefuUrl
              , n = encodeURI(i);
            NativeManager.call("openUrl", n),
            window.open(i);
            break;
        case this.meBtn:
            App.ViewManager.open(ViewConst.Me),
            this.close();
            break;
        case this.hallBtn:
            App.ViewManager.open(ViewConst.Select),
            this.close();
            break;
        case this.rechargeBtn:
            App.ViewManager.open(ViewConst.Recharge),
            this.close()
        }
    }
    ,
    e.PAGE_SIZE = 15,
    e
}(BaseEuiView);
__reflect(XiaoXiListView.prototype, "XiaoXiListView");
var XiaoXiItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "resource/app_skins/items/XiaoXiItemSkin.exml",
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        var e = this;
        t.prototype.createChildren.call(this),
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            App.ViewManager.open(ViewConst.XiaoXiDetail, e.data)
        }, this)
    }
    ,
    e.prototype.dataChanged = function() {
        this.data && (this.ltitle.text = this.data.noticeTitle,
        this.ltime.text = "",
        this.data.gmtCreate && (this.ltime.text = this.data.gmtCreate))
    }
    ,
    e
}(BaseItemClickRenderer);
__reflect(XiaoXiItem.prototype, "XiaoXiItem");
var DengLuMiMaController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new DengLuMiMaView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.DengLuMiMa, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(DengLuMiMaController.prototype, "DengLuMiMaController");
var DengLuMiMaView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/me/DengLuMiMaSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.mima0TF.prompt = "请输入原密码",
        this.mima1TF.prompt = "请输入新密码",
        this.mima2TF.prompt = "请再次输入新密码",
        this.mima0TF.inputType = egret.TextFieldInputType.PASSWORD,
        this.mima0TF.displayAsPassword = !0,
        this.mima1TF.inputType = egret.TextFieldInputType.PASSWORD,
        this.mima1TF.displayAsPassword = !0,
        this.mima2TF.inputType = egret.TextFieldInputType.PASSWORD,
        this.mima2TF.displayAsPassword = !0,
        this.bindButtons([this.closeBtn, this.btnOK], !0),
        this.l1.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "原密码",
            style: {
                textColor: 1579032
            }
        }],
        this.l2.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "新密码",
            style: {
                textColor: 1579032
            }
        }],
        this.l3.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "确认密码",
            style: {
                textColor: 1579032
            }
        }]
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.mima0TF.text = this.mima1TF.text = this.mima2TF.text = ""
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.btnOK:
            this.tiJiao()
        }
    }
    ,
    e.prototype.tiJiao = function() {
        var t = this.mima0TF.text.trim()
          , e = this.mima1TF.text.trim()
          , i = this.mima2TF.text.trim();
        if (StringUtils.isEmpty(t))
            return void SystemTips.show("请输入原密码");
        if (StringUtils.isEmpty(e))
            return void SystemTips.show("请输入新密码");
        if (StringUtils.isEmpty(i))
            return void SystemTips.show("请再次输入新密码");
        if (e != i)
            return void SystemTips.show("两次密码输入不一致");
        var n = new md5;
        e = n.hex_md5(e),
        t = n.hex_md5(t);
        var r = new CommandVo;
        r.action = Http.loginPassword,
        r.params = {
            loginPassword: t,
            newPassword: e,
            uid: MyUserInfo.getInstance().uid
        },
        App.Http.send(r, this, function(t) {
            SystemTips.show("恭喜，密码修改成功")
        })
    }
    ,
    e
}(BaseEuiView);
__reflect(DengLuMiMaView.prototype, "DengLuMiMaView");
var RechargeController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.rechargeView = new RechargeView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Recharge, e.rechargeView),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(RechargeController.prototype, "RechargeController");
var RechargeInfoController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new RechargeInfoView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.RechargeInfo, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(RechargeInfoController.prototype, "RechargeInfoController");
var RechargeInfoController2 = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new RechargeInfoView2(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.RechargeInfo2, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(RechargeInfoController2.prototype, "RechargeInfoController2");
var RechargeInfoView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.uiOpenData = null,
        n._type = -1,
        n._orderId = "",
        n.skinName = "resource/app_skins/recharge/RechargeInfoSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        if (console.log("========login open..."),
        null != t && t.length > 0) {
            this.uiOpenData = t[0];
            var i = this.uiOpenData.money;
            this._type = this.uiOpenData.type,
            this.moneyTF.text = "¥" + i,
            this.tipTF1.text = "您需转账生成金额¥" + i + "，否则不到账",
            this.moneyTF2.text = "请按金额¥" + i + "充值，\n金额不符，无法到账！！！",
            1 == this._type ? this.numTypeTF.text = "支付宝账号" : this.numTypeTF.text = "银行卡号",
            this.getRechargeInfo()
        }
        this.bindButton(this.confirmBtn, !0),
        this.bindButtons([this.copyBtn1, this.copyBtn2, this.copyBtn3, this.copyBtn4, this.closeBtn], !0)
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.l1.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "收款人姓名",
            style: {
                textColor: 1579032
            }
        }],
        this.numTypeTF.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "银行卡号",
            style: {
                textColor: 1579032
            }
        }],
        this.l3.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "收款金额",
            style: {
                textColor: 1579032
            }
        }],
        this.l4.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "收款银行",
            style: {
                textColor: 1579032
            }
        }]
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e),
        this.dispose()
    }
    ,
    e.prototype.getRechargeInfo = function() {
        var t = this
          , e = this.uiOpenData.money
          , i = new CommandVo;
        i.action = Http.rechargeInfo,
        i.params = {
            type: this._type,
            amt: e
        },
        App.Http.send(i, this, function(e) {
            null != e && (t._orderId = e.orderNo,
            1 == t._type ? (t.nameTF.text = e.alipayName,
            t.banknumTF.text = e.alipayId,
            t.banknameTF.text = "支付宝") : (t.nameTF.text = e.accountName,
            t.banknumTF.text = e.accountNo,
            t.banknameTF.text = e.accountBankName),
            t.dingdanTF.text = t._orderId)
        })
    }
    ,
    e.prototype.payConfirm = function() {
        var t = new CommandVo;
        t.action = Http.recharegSucees,
        t.params = {
            orderId: this._orderId
        },
        App.Http.send(t, this, function(t) {
            null != t && SystemTips.show("提交成功！")
        })
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.copyBtn1:
            var i = this.nameTF.text.trim();
            NativeManager.call("copyToclipboard", i);
            break;
        case this.copyBtn2:
            var i = this.banknumTF.text.trim();
            NativeManager.call("copyToclipboard", i);
            break;
        case this.copyBtn3:
            var i = this.moneyTF.text.trim();
            NativeManager.call("copyToclipboard", i);
            break;
        case this.copyBtn4:
            var i = this.banknameTF.text.trim();
            NativeManager.call("copyToclipboard", i);
            break;
        case this.confirmBtn:
            this.payConfirm()
        }
    }
    ,
    e
}(BaseEuiView);
__reflect(RechargeInfoView.prototype, "RechargeInfoView");
var RechargeInfoView2 = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.uiOpenData = null,
        n._type = -1,
        n._orderId = "",
        n.skinName = "resource/app_skins/recharge/RechargeInfoSkin2.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        if (console.log("========login open..."),
        null != t && t.length > 0) {
            this.uiOpenData = t[0];
            var i = this.uiOpenData.money;
            this._type = this.uiOpenData.type,
            this.tipTF1.text = "您需转账生成金额¥" + i + "，否则不到账",
            this.moneyTF2.text = "请按金额¥" + i + "充值，\n金额不符，无法到账！！！",
            this.getRechargeInfo()
        }
        this.bindButton(this.confirmBtn, !0),
        this.bindButtons([this.copyBtn1, this.copyBtn2, this.copyBtn3, this.copyBtn4, this.closeBtn], !0)
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e),
        this.dispose()
    }
    ,
    e.prototype.getRechargeInfo = function() {
        var t = this
          , e = this.uiOpenData.money
          , i = new CommandVo;
        i.action = Http.rechargeInfo,
        i.params = {
            type: this._type,
            amt: e
        },
        App.Http.send(i, this, function(e) {
            if (null != e) {
                t._orderId = e.orderNo;
                var i = e.wxUrl;
                t.qrcode.source = i,
                t.dingdanTF.text = t._orderId
            }
        })
    }
    ,
    e.prototype.payConfirm = function() {
        var t = new CommandVo;
        t.action = Http.recharegSucees,
        t.params = {
            orderId: this._orderId
        },
        App.Http.send(t, this, function(t) {
            null != t && SystemTips.show("提交成功！")
        })
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.copyBtn1:
            var i = this.nameTF.text.trim();
            NativeManager.call("copyToclipboard", i);
            break;
        case this.copyBtn2:
            var i = this.banknumTF.text.trim();
            NativeManager.call("copyToclipboard", i);
            break;
        case this.copyBtn3:
            var i = this.moneyTF.text.trim();
            NativeManager.call("copyToclipboard", i);
            break;
        case this.copyBtn4:
            var i = this.banknameTF.text.trim();
            NativeManager.call("copyToclipboard", i);
            break;
        case this.confirmBtn:
            this.payConfirm()
        }
    }
    ,
    e
}(BaseEuiView);
__reflect(RechargeInfoView2.prototype, "RechargeInfoView2");
var RechargeRecordController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new RechargeRecordView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.RechargeRecord, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(RechargeRecordController.prototype, "RechargeRecordController");
var RechargeRecordView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n._currentPage = 0,
        n._totalPage = 1,
        n.scrollDistance = 20,
        n._needNextPage = !1,
        n._needPrevPage = !1,
        n.skinName = "resource/app_skins/recharge/RechargeRecordSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        console.log("========login open..."),
        this._currentPage = 0,
        this.getDataFromServer()
    }
    ,
    e.prototype.scrollChangeHandle = function(t) {
        this.scroller.viewport.scrollV > this.scroller.viewport.contentHeight - this.scroller.viewport.height + this.scrollDistance ? this._needNextPage = !0 : this.scroller.viewport.scrollV <= -this.scrollDistance && (this._needPrevPage = !0)
    }
    ,
    e.prototype.scrollEndHandle = function(t) {
        if (this._needNextPage) {
            if (this._needNextPage = !1,
            this._currentPage >= this._totalPage - 1)
                return;
            this._currentPage++,
            console.log("next page..."),
            this.getDataFromServer()
        } else if (this._needPrevPage) {
            if (console.log("prev page..."),
            this._needPrevPage = !1,
            this._currentPage <= 0)
                return;
            this._currentPage--,
            this.getDataFromServer()
        }
    }
    ,
    e.prototype.getDataFromServer = function() {
        var t = this
          , i = new CommandVo;
        i.action = Http.rechargeList,
        i.params = {
            loginId: MyUserInfo.getInstance().uid,
            pageNumber: this._currentPage,
            pageSize: e.PAGE_NUM
        },
        App.Http.send(i, this, function(e) {
            if (null != e) {
                t.scroller.viewport.scrollV = 0;
                var i = e.list;
                i = i || [];
                var n = new eui.ArrayCollection(i);
                t.list.dataProvider = n,
                t._totalPage = e.totalPages,
                t.totalTF.text = e.total,
                t.totalSuccessTF.text = e.amtSuccessTotal,
                t.totalMoneyTF.text = e.amtTotal,
                i.length > 0 ? t.tipTF.visible = !1 : t.tipTF.visible = !0
            }
        })
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close()
        }
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.list.itemRenderer = RechargeRecordItem,
        this.bindButtons([this.closeBtn], !0)
    }
    ,
    e.PAGE_NUM = 10,
    e
}(BaseEuiView);
__reflect(RechargeRecordView.prototype, "RechargeRecordView");
var RechargeRecordItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "TixianRecordItemSkin",
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this)
    }
    ,
    e.prototype.dataChanged = function() {
        t.prototype.dataChanged.call(this),
        this.data && (this.shijian.text = this.data.gmtCreate,
        this.jine.text = this.data.amt,
        1 == this.data.stt ? this.statusTF.text = "成功" : 5 == this.data.stt ? this.statusTF.text = "处理中" : 3 == this.data.stt ? this.statusTF.text = "已撤销" : this.statusTF.text = "失败")
    }
    ,
    e
}(BaseItemClickRenderer);
__reflect(RechargeRecordItem.prototype, "RechargeRecordItem");
var RechargeView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n._price = 100,
        n._payType = 1,
        n.PRICE_ARR = [200, 500, 800, 1e3, 2e3, 5e3, 1e4, 2e4],
        n.skinName = "resource/app_skins/recharge/RechargeSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var i = MyUserInfo.getInstance().payUnit;
        this.PRICE_ARR = i.split(",");
        for (var n = this.PRICE_ARR.length, r = 0; n > r; r++)
            this["price2_" + (r + 1)].text = this.PRICE_ARR[r],
            this["price2_" + (r + 1)].touchEnabled = !1,
            this["d2_" + (r + 1)].name = "m2" + (r + 1),
            this["d2_" + (r + 1)].source = "rectbg_png",
            this["price2_" + (r + 1)].textColor = 4427007,
            0 == r && (this["d2_" + (r + 1)].source = "bluebtn2_png",
            this._price = this.PRICE_ARR[r],
            this["price2_" + (r + 1)].textColor = 16777215),
            this["d2_" + (r + 1)].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchPriceHandle2, this)
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.rechargeBtn:
            this.onRecharge();
            break;
        case this.recordBtn:
            App.ViewManager.open(ViewConst.RechargeRecord);
            break;
        case this.noticeBtn:
            App.ViewManager.open(ViewConst.XiaoXiList),
            this.close();
            break;
        case this.kfBtn:
            var i = App.kefuUrl
              , n = encodeURI(i);
            NativeManager.call("openUrl", n),
            window.open(i);
            break;
        case this.meBtn:
            App.ViewManager.open(ViewConst.Me),
            this.close();
            break;
        case this.hallBtn:
            App.ViewManager.open(ViewConst.Select),
            this.close();
            break;
        case this.tab1:
            this.tab1.textColor = 4427007,
            this.tab2.textColor = 12369084,
            this.tab3.textColor = 12369084,
            this.tab4.textColor = 12369084,
            this.select1.visible = !0,
            this.select2.visible = !1,
            this.select3.visible = !1,
            this.select4.visible = !1,
            this._payType = 1;
            break;
        case this.tab2:
            this.tab1.textColor = 12369084,
            this.tab2.textColor = 4427007,
            this.tab3.textColor = 12369084,
            this.tab4.textColor = 12369084,
            this.select1.visible = !1,
            this.select2.visible = !0,
            this.select3.visible = !1,
            this.select4.visible = !1,
            this._payType = 2;
            break;
        case this.tab3:
            this.tab1.textColor = 12369084,
            this.tab2.textColor = 12369084,
            this.tab3.textColor = 4427007,
            this.tab4.textColor = 12369084,
            this.select1.visible = !1,
            this.select2.visible = !1,
            this.select3.visible = !0,
            this.select4.visible = !1,
            this._payType = 3;
            break;
        case this.tab4:
            this.tab1.textColor = 12369084,
            this.tab2.textColor = 12369084,
            this.tab3.textColor = 12369084,
            this.tab4.textColor = 4427007,
            this.select1.visible = !1,
            this.select2.visible = !1,
            this.select3.visible = !1,
            this.select4.visible = !0,
            this._payType = 4
        }
    }
    ,
    e.prototype.onRecharge = function() {
        var t = (Http.token,
        this._price)
          , e = Math.floor(100 * Math.random());
        e = Math.max(1, e),
        t = Number(t) + Number(e / 100);
        MyUserInfo.getInstance().payFlag;
        if (1 == this._payType)
            App.ViewManager.open(ViewConst.RechargeInfo, {
                type: 1,
                money: t
            });
        else if (4 == this._payType) {
            var i = App.kefuUrl
              , n = encodeURI(i);
            NativeManager.call("openUrl", n)
        } else
            3 == this._payType ? App.ViewManager.open(ViewConst.RechargeInfo2, {
                type: 2,
                money: t
            }) : 2 == this._payType && App.ViewManager.open(ViewConst.RechargeInfo, {
                type: 3,
                money: t
            })
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this);
        for (var e = this.PRICE_ARR.length, i = 0; e > i; i++)
            this["price2_" + (i + 1)].text = this.PRICE_ARR[i],
            this["price2_" + (i + 1)].touchEnabled = !1,
            this["d2_" + (i + 1)].name = "m2" + (i + 1),
            this["d2_" + (i + 1)].source = "rectbg_png",
            this["price2_" + (i + 1)].textColor = 4427007,
            0 == i && (this["d2_" + (i + 1)].source = "bluebtn2_png",
            this["price2_" + (i + 1)].textColor = 16777215);
        this.select1.visible = !0,
        this.select2.visible = !1,
        this.select3.visible = !1,
        this.select4.visible = !1,
        this.bindButtons([this.tab1, this.tab2, this.tab3]),
        this.bindButtons([this.closeBtn, this.rechargeBtn, this.recordBtn], !0),
        this.bindButtons([this.kfBtn, this.meBtn, this.noticeBtn, this.hallBtn], !0)
    }
    ,
    e.prototype.onTouchPriceHandle2 = function(t) {
        for (var e = t.currentTarget, i = Number(e.name.substr(2)), n = this.PRICE_ARR.length, r = 0; n > r; r++)
            this["d2_" + (r + 1)].source = "rectbg_png",
            this["price2_" + (r + 1)].textColor = 4427007;
        this["d2_" + i].source = "bluebtn2_png",
        this["price2_" + i].textColor = 16777215,
        this._price = this.PRICE_ARR[i - 1]
    }
    ,
    e
}(BaseEuiView);
__reflect(RechargeView.prototype, "RechargeView");
var TixianController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.tixianView = new TixianView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Tixian, e.tixianView),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(TixianController.prototype, "TixianController");
var TixianRecordController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.tixianRecordView = new TixianRecordView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.TixianRecord, e.tixianRecordView),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(TixianRecordController.prototype, "TixianRecordController");
var TixianRecordItemRender = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "resource/app_skins/items/RechargeRecordItemSkin.exml",
        e
    }
    return __extends(e, t),
    e.prototype.dataChanged = function() {
        t.prototype.dataChanged.call(this),
        null != this.data && (this.timeTF.text = this.data.time)
    }
    ,
    e.prototype.partAdded = function(e, i) {
        t.prototype.partAdded.call(this, e, i),
        !this.data
    }
    ,
    e
}(eui.ItemRenderer);
__reflect(TixianRecordItemRender.prototype, "TixianRecordItemRender");
var TixianRecordView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n._currentPage = 0,
        n._totalPage = 1,
        n.scrollDistance = 20,
        n._needNextPage = !1,
        n._needPrevPage = !1,
        n.skinName = "resource/app_skins/recharge/TixianRecordSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        console.log("========login open..."),
        this.bindButtons([this.closeBtn], !0),
        this._currentPage = 0,
        this.getDataFromServer()
    }
    ,
    e.prototype.scrollChangeHandle = function(t) {
        this.scroller.viewport.scrollV > this.scroller.viewport.contentHeight - this.scroller.viewport.height + this.scrollDistance ? this._needNextPage = !0 : this.scroller.viewport.scrollV <= -this.scrollDistance && (this._needPrevPage = !0)
    }
    ,
    e.prototype.scrollEndHandle = function(t) {
        if (this._needNextPage) {
            if (this._needNextPage = !1,
            this._currentPage >= this._totalPage - 1)
                return;
            this._currentPage++,
            console.log("next page..."),
            this.getDataFromServer()
        } else if (this._needPrevPage) {
            if (console.log("prev page..."),
            this._needPrevPage = !1,
            this._currentPage <= 0)
                return;
            this._currentPage--,
            this.getDataFromServer()
        }
    }
    ,
    e.prototype.getDataFromServer = function() {
        var t = this
          , i = new CommandVo;
        i.action = Http.withdrawList,
        i.params = {
            loginId: MyUserInfo.getInstance().uid,
            pageNumber: this._currentPage,
            pageSize: e.PAGE_NUM
        },
        App.Http.send(i, this, function(e) {
            if (null != e) {
                t.scroller.viewport.scrollV = 0;
                var i = e.list;
                i = i || [];
                var n = new eui.ArrayCollection(i);
                t.list.dataProvider = n,
                t._totalPage = e.totalPages,
                t.totalTF.text = e.total,
                t.totalSuccessTF.text = e.amtSuccessTotal,
                t.totalMoneyTF.text = e.amtTotal,
                i.length > 0 ? t.tipTF.visible = !1 : t.tipTF.visible = !0
            }
        })
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close()
        }
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.list.itemRenderer = TixianItem,
        this.bindButtons([this.closeBtn], !0)
    }
    ,
    e.PAGE_NUM = 10,
    e
}(BaseEuiView);
__reflect(TixianRecordView.prototype, "TixianRecordView");
var TixianItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "TixianRecordItemSkin",
        e
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this)
    }
    ,
    e.prototype.dataChanged = function() {
        this.data && (this.shijian.text = this.data.gmtCreate,
        this.jine.text = this.data.amt,
        1 == this.data.stt ? this.statusTF.text = "成功" : 5 == this.data.stt ? this.statusTF.text = "处理中" : 3 == this.data.stt ? this.statusTF.text = "已撤销" : this.statusTF.text = "失败")
    }
    ,
    e
}(eui.ItemRenderer);
__reflect(TixianItem.prototype, "TixianItem");
var TixianView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n._type = 2,
        n.skinName = "resource/app_skins/recharge/TixianSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.bindButtons([this.closeBtn, this.confirmBtn, this.chakanBtn1, this.recordBtn, this.chakanBtn2], !0),
        this._type = 2,
        this.loadData(),
        this.balanceTF.text = MyUserInfo.getInstance().balance.toString()
    }
    ,
    e.prototype.loadData = function() {
        var t = this
          , e = new CommandVo;
        e.action = Http.getwithdrawInfo,
        e.params = {},
        App.Http.send(e, this, function(e) {
            null != e && (t.todayRechargeTF.text = e.rechargeAmtTotal,
            t.todayTixianTF.text = e.withdrawNum,
            t.todayLiushuiTF.text = e.rechargeAmt,
            t.todayTixianTF2.text = e.withdrawAmt,
            t.totalRechargeTF.text = e.flowAmtTotal,
            t.totalLiushuiTF.text = e.flowAmt,
            t.minMoneyTF.text = e.withdrawAmtMin,
            t.maxMoneyTF.text = e.withdrawAmtMax)
        })
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e),
        this.dispose()
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.l1.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "资金密码",
            style: {
                textColor: 1579032
            }
        }],
        this.l2.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "提现金额",
            style: {
                textColor: 1579032
            }
        }],
        GameEventManager.addEvent(GameEventManager.UPDATE_USER_GOLD, this.onUpdateUserGold, this)
    }
    ,
    e.prototype.onUpdateUserGold = function(t) {
        this.balanceTF.text = MyUserInfo.getInstance().balance.toString()
    }
    ,
    e.prototype.confirmHandle = function() {
        var t = this
          , e = this.moneyTF.text.trim()
          , i = this.passwordTF.text.trim();
        if ("" == e || 0 == e.length)
            return void SystemTips.show("请输入提现金额");
        if ("" == i || 0 == i.length)
            return void SystemTips.show("请输入资金密码");
        var n = new md5;
        if (i = n.hex_md5(i),
        1 == this._type) {
            var r = new CommandVo;
            r.action = Http.alipayWithdraw,
            r.params = {
                alipayId: "",
                alipayName: "",
                accountPassword: i,
                amt: e
            },
            App.Http.send(r, this, function(t) {
                t.balance;
                SystemTips.show("提现已提交，请耐心等候")
            })
        } else {
            var r = new CommandVo;
            r.action = Http.alipayWithdraw,
            r.params = {
                accountBankName: "",
                accountName: "",
                accountNo: "",
                accountPassword: i,
                amt: e
            },
            App.Http.send(r, this, function(e) {
                e.balance;
                t.loadData(),
                SystemTips.show("提现已提交，请耐心等候")
            })
        }
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.confirmBtn:
            this.confirmHandle();
            break;
        case this.recordBtn:
            App.ViewManager.open(ViewConst.TixianRecord);
            break;
        case this.chakanBtn1:
            App.ViewManager.open(ViewConst.BindTixian);
            break;
        case this.chakanBtn2:
            App.ViewManager.open(ViewConst.BindTixian2)
        }
    }
    ,
    e
}(BaseEuiView);
__reflect(TixianView.prototype, "TixianView");
var XiaJiZhuanZhangController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new XiaJiZhuanZhangView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.XiaJiZhuanZhang, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(XiaJiZhuanZhangController.prototype, "XiaJiZhuanZhangController");
var XiaJiZhuanZhangView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/me/XiaJiZhuanZhangSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.accountTF.prompt = "请输入收款人ID",
        this.amountTF.prompt = "请输入金额",
        this.pswTF.prompt = "请输入密码",
        this.pswTF.inputType = egret.TextFieldInputType.PASSWORD,
        this.pswTF.displayAsPassword = !0,
        this.bindButtons([this.closeBtn, this.btnOK], !0),
        this.l1.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "收款人ID",
            style: {
                textColor: 1579032
            }
        }],
        this.l2.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "转账金额",
            style: {
                textColor: 1579032
            }
        }],
        this.l3.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "资金密码",
            style: {
                textColor: 1579032
            }
        }]
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        console.log("========XiaJiZhuanZhangView open...")
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.btnOK:
            this.tiJiao()
        }
    }
    ,
    e.prototype.tiJiao = function() {
        var t = this.accountTF.text.trim()
          , e = +this.amountTF.text.trim()
          , i = this.pswTF.text.trim();
        if (StringUtils.isEmpty(t))
            return void SystemTips.show("请输入收款人ID");
        if (0 > e)
            return void SystemTips.show("请输入正确的金额");
        if (StringUtils.isEmpty(i))
            return void SystemTips.show("请输入密码");
        var n = new md5;
        i = n.hex_md5(i);
        var r = new CommandVo;
        r.action = Http.accountTransfer,
        r.params = {
            uid: t,
            accountPassword: i,
            amt: e
        },
        App.Http.send(r, this, function(t) {
            if (null != t) {
                var e = t.balance;
                if (void 0 == e)
                    return;
                MyUserInfo.getInstance().balance = e,
                SystemTips.show("恭喜，转账成功")
            }
        })
    }
    ,
    e
}(BaseEuiView);
__reflect(XiaJiZhuanZhangView.prototype, "XiaJiZhuanZhangView");
var ZhangBianMingXiController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new ZhangBianMingXiView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.ZhangBianMingXi, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(ZhangBianMingXiController.prototype, "ZhangBianMingXiController");
var ZhangBianMingXiView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.currPage = 0,
        n.totalPage = 1,
        n.uiOpenData = null,
        n.skinName = "resource/app_skins/me/ZhangBianMingXiSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this),
        this.scroller.verticalScrollBar.autoVisibility = !1,
        this.scroller.verticalScrollBar.visible = !1
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.list.itemRenderer = ZhangBianMingXiItem,
        this.bindButtons([this.closeBtn], !0),
        this.bindButtons([this.prevBtn, this.nextBtn], !0),
        this.tipTF.visible = !1
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.uiOpenData = t[0],
        null != this.uiOpenData && (this.lname.text = this.uiOpenData.loginId),
        this.getDataFromServer()
    }
    ,
    e.prototype.getDataFromServer = function() {
        var t = this
          , i = new CommandVo;
        i.action = Http.flowTransferList,
        i.params = {
            uid: this.uiOpenData.uid,
            pageNumber: this.currPage,
            pageSize: e.PAGE_SIZE
        },
        App.Http.send(i, this, function(e) {
            if (null != e) {
                var i = e.list;
                i = i || [],
                t.renderList(i),
                t.totalPage = e.totalPages,
                t.totalPage = Math.max(1, t.totalPage),
                t.pageTF.text = t.currPage + 1 + "/" + t.totalPage,
                t.updateBtnStatus(),
                i.length <= 0 ? t.tipTF.visible = !0 : t.tipTF.visible = !1
            }
        })
    }
    ,
    e.prototype.renderList = function(t) {
        this.scroller.viewport.scrollV = 0;
        var e = new eui.ArrayCollection(t);
        this.list.dataProvider = e
    }
    ,
    e.prototype.updateBtnStatus = function() {}
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.prevBtn:
            if (this.currPage <= 0)
                return;
            this.currPage--,
            this.currPage = Math.max(0, this.currPage),
            this.getDataFromServer();
            break;
        case this.nextBtn:
            if (this.currPage >= this.totalPage - 1)
                return;
            this.currPage++,
            this.currPage = Math.min(this.currPage, this.totalPage - 1),
            this.getDataFromServer()
        }
    }
    ,
    e.PAGE_SIZE = 15,
    e
}(BaseEuiView);
__reflect(ZhangBianMingXiView.prototype, "ZhangBianMingXiView");
var ZhangBianMingXiItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "ZhangBianMingXiItemSkin",
        e
    }
    return __extends(e, t),
    e.prototype.onCreateComplete = function(e) {
        t.prototype.onCreateComplete.call(this, e),
        this.addButton(this.lnote)
    }
    ,
    e.prototype.click = function(e) {
        if (t.prototype.click.call(this, e),
        e == this.lnote) {
            var i = this.data.uid
              , n = this.data.gameToken
              , r = this.data.gameId;
            null != n && "" != n && App.ViewManager.open(ViewConst.Touzhu, {
                uid: i,
                gameId: r,
                gameToken: n
            })
        }
    }
    ,
    e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this)
    }
    ,
    e.prototype.dataChanged = function() {
        if (this.data) {
            this.ltime.text = this.data.gmtCreate;
            var t = this.data.amtIn;
            null == t ? this.lamount.text = "--" : this.lamount.text = t.toString();
            var e = this.data.amtOut;
            null == e ? this.ldir.text = "--" : this.ldir.text = e.toString();
            var i = Math.floor(this.data.amt);
            this.lbalance.text = i.toString(),
            this.lnote.text = this.data.remark;
            var n = this.data.gameToken;
            null != n && "" != n && (this.lnote.textFlow = (new egret.HtmlTextParser).parser("<u>" + this.data.remark + "</u>"))
        }
    }
    ,
    e
}(BaseItemClickRenderer);
__reflect(ZhangBianMingXiItem.prototype, "ZhangBianMingXiItem");
var ZiJinMiMaController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new ZiJinMiMaView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.ZiJinMiMa, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(ZiJinMiMaController.prototype, "ZiJinMiMaController");
var ZiJinMiMaView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/me/ZiJinMiMaSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.mima0TF.prompt = "默认原始密码123456",
        this.mima1TF.prompt = "请输入新密码",
        this.mima2TF.prompt = "请再次输入新密码",
        this.mima0TF.inputType = egret.TextFieldInputType.PASSWORD,
        this.mima0TF.displayAsPassword = !0,
        this.mima1TF.inputType = egret.TextFieldInputType.PASSWORD,
        this.mima1TF.displayAsPassword = !0,
        this.mima2TF.inputType = egret.TextFieldInputType.PASSWORD,
        this.mima2TF.displayAsPassword = !0,
        this.bindButtons([this.closeBtn, this.btnOK], !0),
        this.l1.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "原密码",
            style: {
                textColor: 1579032
            }
        }],
        this.l2.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "新密码",
            style: {
                textColor: 1579032
            }
        }],
        this.l3.textFlow = [{
            text: "*",
            style: {
                textColor: 16711680
            }
        }, {
            text: "确认密码",
            style: {
                textColor: 1579032
            }
        }]
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        console.log("========ZiJinMiMaView open..."),
        this.mima0TF.text = this.mima1TF.text = this.mima2TF.text = ""
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.btnOK:
            this.tiJiao()
        }
    }
    ,
    e.prototype.tiJiao = function() {
        var t = this.mima0TF.text.trim()
          , e = this.mima1TF.text.trim()
          , i = this.mima2TF.text.trim();
        if (StringUtils.isEmpty(t))
            return void SystemTips.show(DStrings.INPUT_OLD_PASSWORD);
        if (StringUtils.isEmpty(e))
            return void SystemTips.show(DStrings.INPUT_NEW_PASSWORD);
        if (StringUtils.isEmpty(i))
            return void SystemTips.show(DStrings.INPUT_NEW_PASSWORD_AGAIN);
        if (e != i)
            return void SystemTips.show(DStrings.PASSWORD_NOT_SAME);
        var n = new md5;
        t = n.hex_md5(t),
        e = n.hex_md5(e);
        var r = new CommandVo;
        r.action = Http.accountPassword,
        r.params = {
            loginPassword: t,
            newPassword: e,
            uid: MyUserInfo.getInstance().uid
        },
        App.Http.send(r, this, function(t) {
            SystemTips.show("恭喜，资金密码修改成功")
        })
    }
    ,
    e
}(BaseEuiView);
__reflect(ZiJinMiMaView.prototype, "ZiJinMiMaView");
var DailiFenhongController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new DailiFenhongView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Daili_fenhong, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(DailiFenhongController.prototype, "DailiFenhongController");
var DailiFenhongView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n._leftTime = 0,
        n.skinName = "resource/app_skins/me/DailiFenhongSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.bindButtons([this.tiquBtn, this.closeBtn], !0),
        this.updateInfo(),
        this.loadData()
    }
    ,
    e.prototype.loadData = function() {
        var t = this
          , e = new CommandVo;
        e.action = Http.agentInfo,
        e.params = {},
        App.Http.send(e, this, function(e) {
            null != e && (t._leftTime = e.seconds,
            t.fhlTF.text = "代理分红率：" + e.agentRate,
            t.zhouqiTF.text = "结算周期：" + e.round + "天",
            t.tdykTF.text = "团队盈亏：" + e.profitAmt,
            t.yjjlTF.text = "预计奖励：" + e.amtAward,
            t._timer.stop(),
            t._timer.reset(),
            t._leftTime > 0 && (t.timeTF.text = DateUtils.getFormatBySecond(t._leftTime, 1),
            t._timer.start()))
        })
    }
    ,
    e.prototype.updateInfo = function() {
        this.nameTF.text = "用户名：" + MyUserInfo.getInstance().loginId,
        this.idTF.text = "游戏ID：" + MyUserInfo.getInstance().uid.toString(),
        this.nameTF.textFlow = [{
            text: "用户名：",
            style: {
                textColor: 11269373
            }
        }, {
            text: MyUserInfo.getInstance().loginId.toString(),
            style: {
                textColor: 16777215
            }
        }],
        this.idTF.textFlow = [{
            text: "游戏ID：",
            style: {
                textColor: 11269373
            }
        }, {
            text: MyUserInfo.getInstance().uid.toString(),
            style: {
                textColor: 16777215
            }
        }]
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this._timer = new egret.Timer(1e3),
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.doTimer, this)
    }
    ,
    e.prototype.doTimer = function() {
        this._leftTime--,
        this.timeTF.text = DateUtils.getFormatBySecond(this._leftTime, 1),
        this._leftTime <= 0 && (this._timer.stop(),
        this._timer.reset())
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e),
        this.dispose(),
        this._timer.stop(),
        this._timer.reset()
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.tiquBtn:
            this.tiqu()
        }
    }
    ,
    e.prototype.tiqu = function() {
        var t = this
          , e = new CommandVo;
        e.action = Http.withdrawAward,
        e.params = {},
        App.Http.send(e, this, function(e) {
            null != e && (SystemTips.show("恭喜，提取成功"),
            t.loadData())
        })
    }
    ,
    e
}(BaseEuiView);
__reflect(DailiFenhongView.prototype, "DailiFenhongView");
var GerenReportController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new GerenReportView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.GerenReport, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(GerenReportController.prototype, "GerenReportController");
var GerenReportItemRender = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "resource/app_skins/items/GerenReportItemSkin.exml",
        e
    }
    return __extends(e, t),
    e.prototype.onCreateComplete = function(e) {
        t.prototype.onCreateComplete.call(this, e),
        this.addButton(this.chakanBtn, !0),
        this.addButton(this.fdTF, !0),
        this.addButton(this.fhTF, !0),
        this.addButton(this.nameTF),
        this.chakanBtn.textFlow = (new egret.HtmlTextParser).parser("<u>查看</u>")
    }
    ,
    e.prototype.click = function(e) {
        if (t.prototype.click.call(this, e),
        e == this.chakanBtn)
            App.ViewManager.open(ViewConst.ZhangBianMingXi, this.data);
        else if (e == this.fdTF) {
            var i = this.data.uid;
            i != MyUserInfo.getInstance().uid && App.ViewManager.open(ViewConst.ModifyRate, this.data)
        } else if (e == this.fhTF) {
            var i = this.data.uid;
            i != MyUserInfo.getInstance().uid && App.ViewManager.open(ViewConst.ModifyFenhong, this.data)
        } else {
            var n = this.data.memberCount;
            n > 0 && GameEventManager.dispatchEvent(GameEventManager.SHOW_MEMBER_LIST2, this.data)
        }
    }
    ,
    e.prototype.dataChanged = function() {
        if (t.prototype.dataChanged.call(this),
        null != this.data) {
            this.nameTF.text = this.data.loginId;
            var e = this.data.rate
              , i = this.data.uid
              , n = this.data.agentRate;
            null == n && (n = 0);
            var r = this.data.memberCount;
            r > 0 ? this.nameTF.textFlow = [{
                text: this.data.loginId
            }, {
                text: "\n团队" + r + "人"
            }, {
                text: "\nID:" + i
            }] : this.nameTF.textFlow = [{
                text: this.data.loginId
            }, {
                text: "\nID:" + i
            }],
            this.balanceTF.text = this.data.balance,
            this.fdTF.text = e.toString(),
            this.fhTF.text = n.toString(),
            i != MyUserInfo.getInstance().uid && (this.fdTF.textFlow = (new egret.HtmlTextParser).parser("<u>" + e + "</u>"),
            this.fhTF.textFlow = (new egret.HtmlTextParser).parser("<u>" + n + "</u>"))
        }
    }
    ,
    e.prototype.partAdded = function(e, i) {
        t.prototype.partAdded.call(this, e, i),
        !this.data
    }
    ,
    e
}(BaseItemClickRenderer);
__reflect(GerenReportItemRender.prototype, "GerenReportItemRender");
var GerenReportView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n._curPage = 0,
        n._totalPage = 1,
        n._navigates = [],
        n._currentUid = "",
        n._currentLoginId = "",
        n._memberCount = -1,
        n.scrollDistance = 20,
        n._needNextPage = !1,
        n._needPrevPage = !1,
        n.skinName = "resource/app_skins/report/NGerenReportSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.updateRate = function(t) {
        for (var e = t.data, i = e.uid, n = e.rate, r = this._dataList.length, o = 0; r > o; o++) {
            var s = this._dataList[o];
            if (s.uid == i) {
                s.rate = n,
                this.dataList.itemUpdated(s);
                break
            }
        }
    }
    ,
    e.prototype.updateFenhong = function(t) {
        for (var e = t.data, i = e.uid, n = e.rate, r = this._dataList.length, o = 0; r > o; o++) {
            var s = this._dataList[o];
            if (s.uid == i) {
                s.agentRate = n,
                this.dataList.itemUpdated(s);
                break
            }
        }
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.bindButtons([this.closeBtn], !0),
        this._navigates = [],
        this._navigates.push({
            uid: MyUserInfo.getInstance().uid,
            loginId: "本级"
        }),
        this.initNavigates(),
        this._currentUid = "",
        this._currentLoginId = "",
        this._curPage = 0,
        this.loadReportData(),
        GameEventManager.addEvent(GameEventManager.UPDATE_RATE, this.updateRate, this),
        GameEventManager.addEvent(GameEventManager.UPDATE_Fenhong, this.updateFenhong, this),
        GameEventManager.addEvent(GameEventManager.SHOW_MEMBER_LIST2, this.onShowMemberlist, this)
    }
    ,
    e.prototype.onTouchTapHandl2 = function(t) {
        var e = t.currentTarget
          , i = e.getData();
        this.onShowMemberlist2(i.uid, i.loginId)
    }
    ,
    e.prototype.onShowMemberlist2 = function(t, i, n) {
        var r = this;
        void 0 === n && (n = 0),
        this._curPage = 0,
        this._currentUid = t,
        this._currentLoginId = i;
        var o = new CommandVo;
        o.action = Http.agentCenter,
        o.params = {
            uid: t,
            pageNumber: this._curPage,
            pageSize: e.PAGE_SIZE,
            loginId: ""
        },
        App.Http.send(o, this, function(t) {
            if (null != t) {
                var e = t.list;
                e = e || [],
                r._totalPage = t.totalPages,
                r._totalPage = Math.max(1, r._totalPage);
                t.totalRecord;
                r._dataList = e,
                e.length > 0 ? r.tipTF.visible = !1 : r.tipTF.visible = !0,
                r.renderList(e);
                for (var i = !1, n = -1, o = 0; o < r._navigates.length; o++) {
                    var s = r._navigates[o]
                      , a = s.uid;
                    if (a == r._currentUid) {
                        i = !0,
                        n = o;
                        break
                    }
                }
                i ? r._navigates = r._navigates.slice(0, n + 1).concat() : r._navigates.push({
                    uid: r._currentUid,
                    loginId: r._currentLoginId
                }),
                r.initNavigates()
            }
        })
    }
    ,
    e.prototype.initNavigates = function() {
        this._navitateContainer.removeChildren();
        for (var t = this._navigates.length, e = 0, i = 0; t > i; i++) {
            var n = this._navigates[i]
              , r = new DailiNavigateItem;
            r.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandl2, this),
            r.setData(n),
            i == t - 1 ? r.setArrowVisible(!1) : r.setArrowVisible(!0),
            r.x = e,
            e += r.width,
            this._navitateContainer.addChild(r)
        }
    }
    ,
    e.prototype.onShowMemberlist = function(t) {
        var e = t.data
          , i = e.uid
          , n = e.loginId
          , r = e.memberCount;
        this._currentUid = i.toString(),
        this._currentLoginId = n,
        this.onShowMemberlist2(this._currentUid, this._currentLoginId, r)
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e),
        this.dispose(),
        GameEventManager.removeEvent(GameEventManager.UPDATE_RATE, this.updateRate, this),
        GameEventManager.removeEvent(GameEventManager.SHOW_MEMBER_LIST2, this.onShowMemberlist, this)
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.scroller.addEventListener(eui.UIEvent.CHANGE, this.scrollChangeHandle, this),
        this.scroller.addEventListener(eui.UIEvent.CHANGE_END, this.scrollEndHandle, this),
        this.list.useVirtualLayout = !0,
        this.list.itemRenderer = GerenReportItemRender,
        this._navitateContainer = new egret.Sprite,
        this.addChild(this._navitateContainer),
        this._navitateContainer.x = 134,
        this._navitateContainer.y = 152
    }
    ,
    e.prototype.loadReportData = function(t) {
        var i = this;
        void 0 === t && (t = "");
        var n = new CommandVo;
        n.action = Http.agentCenter,
        n.params = {
            uid: this._currentUid,
            pageNumber: this._curPage,
            pageSize: e.PAGE_SIZE,
            loginId: ""
        },
        App.Http.send(n, this, function(t) {
            if (null != t) {
                var e = t.list;
                e = e || [],
                i._totalPage = t.totalPages,
                i._totalPage = Math.max(1, i._totalPage);
                t.totalRecord;
                i._dataList = e,
                e.length > 0 ? i.tipTF.visible = !1 : i.tipTF.visible = !0,
                i.renderList(e)
            }
        })
    }
    ,
    e.prototype.renderList = function(t) {
        this.scroller.viewport.scrollV = 0,
        this.dataList = new eui.ArrayCollection(t),
        this.list.dataProvider = this.dataList
    }
    ,
    e.prototype.scrollChangeHandle = function(t) {
        console.log("this.scroller.viewport.scrollV" + this.scroller.viewport.scrollV),
        this.scroller.viewport.scrollV > this.scroller.viewport.contentHeight - this.scroller.viewport.height + this.scrollDistance ? this._needNextPage = !0 : this.scroller.viewport.scrollV <= -this.scrollDistance && (this._needPrevPage = !0)
    }
    ,
    e.prototype.scrollEndHandle = function(t) {
        if (this._needNextPage) {
            if (this._needNextPage = !1,
            this._curPage >= this._totalPage - 1)
                return;
            this._curPage++,
            console.log("next page..."),
            this.loadReportData()
        } else if (this._needPrevPage) {
            if (console.log("prev page..."),
            this._needPrevPage = !1,
            this._curPage <= 0)
                return;
            this._curPage--,
            this.loadReportData()
        }
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close()
        }
    }
    ,
    e.PAGE_SIZE = 20,
    e
}(BaseEuiView);
__reflect(GerenReportView.prototype, "GerenReportView");
var ModifyFenhongController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new ModifyFenhongView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.ModifyFenhong, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(ModifyFenhongController.prototype, "ModifyFenhongController");
var ModifyFenhongView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/report/ModifyFenhongSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        if (this.uiOpenData = t[0],
        null != this.uiOpenData) {
            var i = this.uiOpenData.agentRate;
            null == i && (i = 0),
            this.curRateTF.text = "当前分红比例：" + i.toString(),
            this.rateTF.text = "0.00",
            MyUserInfo.getInstance().rate <= 0,
            this.bindButtons([this.closerect, this.submitBtn], !0)
        }
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        var i = this;
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closerect:
            this.close();
            break;
        case this.submitBtn:
            var n = new CommandVo;
            n.action = Http.changePointRate,
            n.params = {
                uid: this.uiOpenData.uid,
                rate: Number(this.rateTF.text.trim()),
                type: 1
            },
            App.Http.send(n, this, function(t) {
                SystemTips.show("恭喜，分红调整成功"),
                GameEventManager.dispatchEvent(GameEventManager.UPDATE_Fenhong, {
                    rate: Number(i.rateTF.text.trim()),
                    uid: i.uiOpenData.uid
                }),
                i.close()
            })
        }
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e),
        this.dispose()
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this)
    }
    ,
    e
}(BaseEuiView);
__reflect(ModifyFenhongView.prototype, "ModifyFenhongView");
var ModifyRateController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new ModifyRateView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.ModifyRate, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(ModifyRateController.prototype, "ModifyRateController");
var ModifyRateView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n.skinName = "resource/app_skins/report/ModifyRateSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        if (this.uiOpenData = t[0],
        null != this.uiOpenData) {
            var i = this.uiOpenData.rate;
            this.curRateTF.text = "当前返利系数：" + i.toString(),
            this.rateTF.text = "0.00",
            MyUserInfo.getInstance().rate <= 0,
            this.bindButtons([this.closerect, this.submitBtn], !0)
        }
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        var i = this;
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closerect:
            this.close();
            break;
        case this.submitBtn:
            var n = new CommandVo;
            n.action = Http.changePointRate,
            n.params = {
                uid: this.uiOpenData.uid,
                rate: Number(this.rateTF.text.trim())
            },
            App.Http.send(n, this, function(t) {
                SystemTips.show("恭喜，返点调整成功"),
                GameEventManager.dispatchEvent(GameEventManager.UPDATE_RATE, {
                    rate: Number(i.rateTF.text.trim()),
                    uid: i.uiOpenData.uid
                }),
                i.close()
            })
        }
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e),
        this.dispose()
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this)
    }
    ,
    e
}(BaseEuiView);
__reflect(ModifyRateView.prototype, "ModifyRateView");
var ReportController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new ReportView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Report, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(ReportController.prototype, "ReportController");
var ReportView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n._navigates = [],
        n._curPage = 0,
        n._totalPage = 1,
        n._leftTime = 0,
        n._fromMonth = 1,
        n._fromDay = 1,
        n._toMonth = 1,
        n._toDay = 1,
        n.scrollDistance = 20,
        n._needNextPage = !1,
        n._needPrevPage = !1,
        n._currentUid = "",
        n._currentLoginId = "",
        n.skinName = "resource/app_skins/report/NReportSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.onTouchTapHandl2 = function(t) {
        var e = t.currentTarget
          , i = e.getData();
        this.showMemberData(i)
    }
    ,
    e.prototype.scrollChangeHandle = function(t) {
        this.scroller.viewport.scrollV > this.scroller.viewport.contentHeight - this.scroller.viewport.height + this.scrollDistance ? this._needNextPage = !0 : this.scroller.viewport.scrollV <= -this.scrollDistance && (this._needPrevPage = !0)
    }
    ,
    e.prototype.scrollEndHandle = function(t) {
        if (this._needNextPage) {
            if (this._needNextPage = !1,
            this._curPage >= this._totalPage - 1)
                return;
            this._curPage++,
            console.log("next page..."),
            this.loadReportData()
        } else if (this._needPrevPage) {
            if (console.log("prev page..."),
            this._needPrevPage = !1,
            this._curPage <= 0)
                return;
            this._curPage--,
            this.loadReportData()
        }
    }
    ,
    e.prototype.initNavigates = function() {
        this._navitateContainer.removeChildren();
        for (var t = this._navigates.length, e = 0, i = 0; t > i; i++) {
            var n = this._navigates[i]
              , r = new DailiNavigateItem;
            r.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHandl2, this),
            r.setData(n),
            i == t - 1 ? r.setArrowVisible(!1) : r.setArrowVisible(!0),
            r.x = e,
            e += r.width,
            this._navitateContainer.addChild(r)
        }
    }
    ,
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        this.bindButtons([this.closeBtn, this.searchBtn], !0),
        this.bindButtons([this.fromGroup, this.toGroup]),
        this._curPage = 0;
        var i = new Date;
        this._fromMonth = i.getMonth() + 1,
        this._fromDay = i.getDate(),
        this._toMonth = i.getMonth() + 1,
        this._toDay = i.getDate(),
        this.updateDateView(),
        this._currentUid = "",
        this._currentLoginId = "",
        this._navigates = [],
        this._navigates.push({
            uid: MyUserInfo.getInstance().uid,
            loginId: "本级"
        }),
        this.initNavigates(),
        this.loadReportData()
    }
    ,
    e.prototype.updateDateView = function() {
        var t = this._fromMonth.toString();
        this._fromMonth < 10 && (t = "0" + this._fromMonth);
        var e = this._fromDay.toString();
        this._fromDay < 10 && (e = "0" + this._fromDay),
        this.fromDateTF.text = t + "月" + e + "日";
        var t = this._toMonth.toString();
        this._toMonth < 10 && (t = "0" + this._toMonth);
        var e = this._toDay.toString();
        this._toDay < 10 && (e = "0" + this._toDay),
        this.toDateTF.text = t + "月" + e + "日"
    }
    ,
    e.prototype.showMemberData = function(t) {
        var i = this
          , n = t.uid
          , r = t.loginId
          , o = new Date
          , s = o.getFullYear()
          , a = s.toString()
          , h = this._fromMonth.toString()
          , l = this._fromDay.toString();
        this._fromMonth < 10 && (h = "0" + this._fromMonth),
        this._fromDay < 10 && (l = "0" + this._fromDay);
        var c = a + h + l;
        this._currentUid = n.toString(),
        this._currentLoginId = r;
        var p = this._toMonth.toString()
          , u = this._toDay.toString();
        this._toMonth < 10 && (p = "0" + this._toMonth),
        this._toDay < 10 && (u = "0" + this._toDay);
        var g = a + p + u
          , d = new CommandVo;
        d.action = Http.agentReport,
        d.params = {
            uid: n,
            startDate: c,
            endDate: g,
            pageNumber: this._curPage,
            pageSize: e.PAGE_SIZE
        },
        App.Http.send(d, this, function(t) {
            if (null != t) {
                i.grfhTF.text = "个人应得分红：" + t.amtAward,
                i.dlfhTF.text = "代理分红率：" + Math.floor(100 * t.agentRate) + "%",
                i.tdfhTF.text = "团队预计分红：" + t.teamAmtAward,
                i.xjfhTF.text = "应发下级分红：" + t.subAmtAward,
                i.zhyeTF.text = "账户余额：" + t.balance,
                i.yjczTF.text = "预计充值：" + (t.rechargeAmt ? t.rechargeAmt : 0),
                i.jsrqTF.text = "下次结算日期：" + t.checkDate + "天",
                i._leftTime = t.seconds,
                i.djsTF.text = "结算倒计时：" + DateUtils.getFormatBySecond(i._leftTime, 1),
                i._timer.stop(),
                i._timer.reset(),
                i._leftTime > 0 && i._timer.start(),
                i._totalPage = t.totalPages,
                i._totalPage = Math.max(1, i._totalPage);
                var e = t.list;
                t.totalRecord;
                e = e || [],
                i.renderList(e),
                e.length > 0 ? i.tipTF.visible = !1 : i.tipTF.visible = !0;
                for (var n = !1, r = -1, o = 0; o < i._navigates.length; o++) {
                    var s = i._navigates[o]
                      , a = s.uid;
                    if (a == i._currentUid) {
                        n = !0,
                        r = o;
                        break
                    }
                }
                n ? i._navigates = i._navigates.slice(0, r + 1).concat() : i._navigates.push({
                    uid: i._currentUid,
                    loginId: i._currentLoginId
                }),
                i.initNavigates();
                var h = t.amtPointTotal
                  , l = h.toString();
                i.totalFdTF.text = l,
                i.totalTF.text = t.amtFlowTotal;
                var c = t.amtProfitTotal
                  , p = c.toString();
                i.totalZBTF.text = p;
                var u = t.awardAmtTotal;
                u.toString();
                i.totalFHTF.text = u.toString()
            }
        })
    }
    ,
    e.prototype.loadReportData = function() {
        var t = this
          , i = new Date
          , n = i.getFullYear()
          , r = n.toString()
          , o = this._fromMonth.toString()
          , s = this._fromDay.toString();
        this._fromMonth < 10 && (o = "0" + this._fromMonth),
        this._fromDay < 10 && (s = "0" + this._fromDay);
        var a = r + o + s
          , h = this._toMonth.toString()
          , l = this._toDay.toString();
        this._toMonth < 10 && (h = "0" + this._toMonth),
        this._toDay < 10 && (l = "0" + this._toDay);
        var c = r + h + l
          , p = new CommandVo;
        p.action = Http.agentReport,
        p.params = {
            loginId: "",
            startDate: a,
            endDate: c,
            pageNumber: this._curPage,
            pageSize: e.PAGE_SIZE,
            uid: this._currentUid
        },
        App.Http.send(p, this, function(e) {
            if (null != e) {
                t.grfhTF.text = "个人应得分红：" + e.amtAward,
                t.dlfhTF.text = "代理分红率：" + Math.floor(100 * e.agentRate) + "%",
                t.tdfhTF.text = "团队预计分红：" + e.teamAmtAward,
                t.xjfhTF.text = "应发下级分红：" + e.subAmtAward,
                t.zhyeTF.text = "账户余额：" + e.balance,
                t.yjczTF.text = "预计充值：" + (e.rechargeAmt ? e.rechargeAmt : 0),
                t.jsrqTF.text = "下次结算日期：" + e.checkDate + "天",
                t._leftTime = e.seconds,
                t.djsTF.text = "结算倒计时：" + DateUtils.getFormatBySecond(t._leftTime, 1),
                t._timer.stop(),
                t._timer.reset(),
                t._leftTime > 0 && t._timer.start(),
                t._totalPage = e.totalPages,
                t._totalPage = Math.max(1, t._totalPage);
                var i = e.list;
                e.totalRecord;
                i = i || [],
                t.renderList(i),
                i.length > 0 ? t.tipTF.visible = !1 : t.tipTF.visible = !0;
                var n = e.amtPointTotal
                  , r = n.toString();
                t.totalFdTF.text = r,
                t.totalTF.text = e.amtFlowTotal;
                var o = e.amtProfitTotal
                  , s = o.toString();
                t.totalZBTF.text = s;
                var a = e.awardAmtTotal;
                a.toString();
                t.totalFHTF.text = a.toString()
            }
        })
    }
    ,
    e.prototype.renderList = function(t) {
        var e = new eui.ArrayCollection(t);
        this.list.dataProvider = e
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.list.itemRenderer = DailiReportItem,
        GameEventManager.addEvent(GameEventManager.SELECT_DATE, this.onSelectDate, this),
        GameEventManager.addEvent(GameEventManager.SHOW_MEMBER_LIST2, this.onShowMemberlist, this),
        this.scroller.addEventListener(eui.UIEvent.CHANGE, this.scrollChangeHandle, this),
        this.scroller.addEventListener(eui.UIEvent.CHANGE_END, this.scrollEndHandle, this),
        this._navitateContainer = new egret.Sprite,
        this.posG.addChild(this._navitateContainer),
        this._navitateContainer.y = 18,
        this._timer = new egret.Timer(1e3),
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.doTimer, this)
    }
    ,
    e.prototype.onShowMemberlist = function(t) {
        this._curPage = 0;
        var e = t.data;
        this.showMemberData(e)
    }
    ,
    e.prototype.doTimer = function() {
        this._leftTime--,
        this.djsTF.text = "结算倒计时：" + DateUtils.getFormatBySecond(this._leftTime, 1),
        this._leftTime <= 0 && (this._timer.stop(),
        this._timer.reset())
    }
    ,
    e.prototype.onSelectDate = function(t) {
        var e = t.data.day
          , i = t.data.who
          , n = t.data.month;
        if ("from" == i) {
            this._fromDay = e,
            this._fromMonth = n;
            var r = this._fromMonth.toString();
            this._fromMonth < 10 && (r = "0" + this._fromMonth);
            var o = this._fromDay.toString();
            this._fromDay < 10 && (o = "0" + this._fromDay),
            this.fromDateTF.text = r + "月" + o + "日"
        } else {
            this._toDay = e,
            this._toMonth = n;
            var r = this._toMonth.toString();
            this._toMonth < 10 && (r = "0" + this._toMonth);
            var o = this._toDay.toString();
            this._toDay < 10 && (o = "0" + this._toDay),
            this.toDateTF.text = r + "月" + o + "日"
        }
    }
    ,
    e.prototype.close = function() {
        for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
        t.prototype.close.call(this, e),
        this.dispose(),
        this._timer.stop(),
        this._timer.reset()
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closeBtn:
            this.close();
            break;
        case this.searchBtn:
            this.loadReportData();
            break;
        case this.fromGroup:
            var i = (new Date).getFullYear();
            App.ViewManager.open(ViewConst.Select_date, {
                year: i,
                month: this._fromMonth,
                day: this._fromDay,
                who: "from"
            });
            break;
        case this.toGroup:
            var i = (new Date).getFullYear();
            App.ViewManager.open(ViewConst.Select_date, {
                year: i,
                month: this._toMonth,
                day: this._toDay,
                who: "to"
            })
        }
    }
    ,
    e.PAGE_SIZE = 15,
    e
}(BaseEuiView);
__reflect(ReportView.prototype, "ReportView");
var DailiReportItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "ReportItemSkin",
        e.name = "DailiReportItem",
        e.accountTF.addEventListener(egret.TouchEvent.TOUCH_TAP, e.onTouchTap, e),
        e
    }
    return __extends(e, t),
    e.prototype.onTouchTap = function(t) {
        var e = this.data.memberCount;
        e > 0 && GameEventManager.dispatchEvent(GameEventManager.SHOW_MEMBER_LIST2, this.data)
    }
    ,
    e.prototype.dataChanged = function() {
        t.prototype.dataChanged.call(this),
        this.updateView()
    }
    ,
    e.prototype.updateView = function() {
        if (null != this.data) {
            this.accountTF.text = this.data.loginId,
            this.tzTF.text = this.data.amtFlow;
            var t = this.data.amtProfit
              , e = t.toString();
            this.ykTF.text = e;
            var i = this.data.amtAward;
            (null == i || void 0 == i) && (i = 0),
            this.fhTF.text = i.toString(),
            t >= 0 ? this.ykTF.textColor = 65398 : this.ykTF.textColor = 16711680;
            var n = this.data.amtPoint
              , r = n.toString();
            this.fdTF.text = r;
            var o = this.data.memberCount;
            o > 0 && (this.accountTF.textFlow = [{
                text: this.data.loginId,
                style: {
                    size: 24
                }
            }, {
                text: "\n团队" + o + "人",
                style: {
                    size: 24
                }
            }])
        }
    }
    ,
    e
}(eui.ItemRenderer);
__reflect(DailiReportItem.prototype, "DailiReportItem");
var DailiNavigateItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "DailiNavigateItemSkin",
        e
    }
    return __extends(e, t),
    Object.defineProperty(e.prototype, "width", {
        get: function() {
            return this.arrowTF.visible ? this.arrowTF.x + this.arrowTF.textWidth + 5 : this.nameTF.x + this.nameTF.width + 5
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.setArrowVisible = function(t) {
        this.arrowTF.visible = t
    }
    ,
    e.prototype.createComplete = function(e) {
        t.prototype.createComplete.call(this, e)
    }
    ,
    e.prototype.getData = function() {
        return this._data
    }
    ,
    e.prototype.setData = function(t) {
        this._data = t,
        this.nameTF.text = t.loginId,
        this.nameTF.width = this.nameTF.textWidth + 20
    }
    ,
    e
}(BaseUIComponent);
__reflect(DailiNavigateItem.prototype, "DailiNavigateItem");
var SelectDateController = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.view = new SelectDateView(e,LayerManager.UI_Main),
        App.ViewManager.register(ViewConst.Select_date, e.view),
        e
    }
    return __extends(e, t),
    e
}(BaseController);
__reflect(SelectDateController.prototype, "SelectDateController");
var SelectDateView = function(t) {
    function e(e, i) {
        var n = t.call(this, e, i) || this;
        return n._days = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        n._curMonth = 1,
        n.skinName = "resource/app_skins/report/SelectDateSkin.exml",
        n
    }
    return __extends(e, t),
    e.prototype.open = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        if (this.uiOpenData = t[0],
        this.bindButtons([this.closerect], !0),
        this.bindButtons([this.prevBtn, this.nextBtn], !1),
        null != this.uiOpenData) {
            var i = this.uiOpenData.year
              , n = this.uiOpenData.month;
            this._curMonth = n;
            var r = this.uiOpenData.day
              , o = DateUtils.isLeapYear(i);
            o ? this._days[1] = 29 : this._days[1] = 28,
            this.updateDate(n, r)
        }
    }
    ,
    e.prototype.initUI = function() {
        t.prototype.initUI.call(this),
        this.list.itemRenderer = SelectDateItem,
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickItem, this)
    }
    ,
    e.prototype.onClickItem = function(t) {
        var e = this.list.selectedItem
          , i = e.num;
        this.close();
        var n = this.uiOpenData.who;
        GameEventManager.dispatchEvent(GameEventManager.SELECT_DATE, {
            month: this._curMonth,
            day: i,
            who: n
        })
    }
    ,
    e.prototype.updateDate = function(t, e) {
        var i = []
          , n = this._days[t - 1];
        console.log(t);
        for (var r = 0; n > r; r++)
            r == e - 1 ? i.push({
                num: r + 1,
                select: !0
            }) : i.push({
                num: r + 1,
                select: !1
            });
        this.monthTF.text = t + "月";
        var o = new eui.ArrayCollection(i);
        this.list.dataProvider = o
    }
    ,
    e.prototype.touchBindButtonHandler = function(e) {
        switch (t.prototype.touchBindButtonHandler.call(this, e),
        e) {
        case this.closerect:
            this.close();
            break;
        case this.prevBtn:
            var i = this.uiOpenData.day;
            if (this._curMonth <= 1)
                return;
            this._curMonth--,
            this.updateDate(this._curMonth, i);
            break;
        case this.nextBtn:
            var i = (this.uiOpenData.month,
            this.uiOpenData.day);
            if (this._curMonth >= 12)
                return;
            this._curMonth++,
            this.updateDate(this._curMonth, i)
        }
    }
    ,
    e
}(BaseEuiView);
__reflect(SelectDateView.prototype, "SelectDateView");
var SelectDateItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "SelectDateItemSkin",
        e.selectImg.visible = !1,
        e.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function() {
            e.selectImg.visible = !0
        }, e),
        e.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function() {
            e.selectImg.visible = !1
        }, e),
        e.addEventListener(egret.TouchEvent.TOUCH_END, function() {
            e.selectImg.visible = !1
        }, e),
        e
    }
    return __extends(e, t),
    e.prototype.setSelect = function(t) {
        this.selected = t,
        this.selectImg.visible = t
    }
    ,
    e.prototype.dataChanged = function() {
        t.prototype.dataChanged.call(this),
        this.updateView()
    }
    ,
    e.prototype.updateView = function() {
        var t = this.data.num
          , e = this.data.select;
        this.numTF.text = t.toString(),
        this.selectImg.visible = e
    }
    ,
    e
}(eui.ItemRenderer);
__reflect(SelectDateItem.prototype, "SelectDateItem");
var HomeScene = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.onEnter = function() {
        t.prototype.onEnter.call(this),
        this.addLayer(LayerManager.UI_Main),
        this.addLayer(LayerManager.UI_Popup)
    }
    ,
    e
}(BaseScene);
__reflect(HomeScene.prototype, "HomeScene");
var LoginScene = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.onEnter = function() {
        t.prototype.onEnter.call(this),
        this.addLayer(LayerManager.UI_Main),
        this.addLayer(LayerManager.UI_Popup)
    }
    ,
    e
}(BaseScene);
__reflect(LoginScene.prototype, "LoginScene");
