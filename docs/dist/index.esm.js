
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/**
 * 由于部分低版本下的某些 app 可能会缺少某些原型方法, 这里增加兼容
 */
// ie11 不兼容 includes 方法
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function value(valueToFind, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      } // 1. Let O be ? ToObject(this value).


      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. If len is 0, return false.

      if (len === 0) {
        return false;
      } // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)


      var n = fromIndex | 0; // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.

      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      } // 7. Repeat, while k < len


      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(valueToFind, elementK) is true, return true.
        if (sameValueZero(o[k], valueToFind)) {
          return true;
        } // c. Increase k by 1.


        k++;
      } // 8. Return false


      return false;
    }
  });
} // vivo x7 下网易云游戏 app 缺少 includes 方法


if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {

    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
} // vivo x7 下网易云游戏 app 缺少 find 方法


if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


      var thisArg = arguments[1]; // 5. Let k be 0.

      var k = 0; // 6. Repeat, while k < len

      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];

        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        } // e. Increase k by 1.


        k++;
      } // 7. Return undefined.


      return void 0;
    }
  });
}

/**
 * 判断是否是期望的类型
 * @param { unknown } param 将要判断的变量
 * @param { ...string } types 期望的类型
 * @return { boolean } 返回期望是否正确
 */
var isExpectType = function (param) {
    var types = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        types[_i - 1] = arguments[_i];
    }
    return types.some(function (type) { return Object.prototype.toString.call(param).slice(8, -1).toLowerCase() === type; });
};
var has = function (data, key) {
    return Object.prototype.hasOwnProperty.call(data, key);
};
/**
 * 移除\n
 * @param { string } str 将要处理的字符串
 * @return { string } 返回新的字符串
 */
var removeEnter = function (str) {
    return [].filter.call(str, function (s) { return s !== '\n'; }).join('');
};
/**
 * 把任何数据类型转成数字
 * @param num
 */
var getNumber = function (num) {
    if (num === null)
        return 0;
    if (typeof num === 'object')
        return NaN;
    if (typeof num === 'number')
        return num;
    if (typeof num === 'string') {
        if (num[num.length - 1] === '%') {
            return Number(num.slice(0, -1)) / 100;
        }
        return Number(num);
    }
    return NaN;
};
/**
 * 判断颜色是否有效 (透明色 === 无效)
 * @param color 颜色
 */
var hasBackground = function (color) {
    if (typeof color !== 'string')
        return false;
    color = color.toLocaleLowerCase().trim();
    if (color === 'transparent')
        return false;
    if (/^rgba/.test(color)) {
        var alpha = /([^\s,]+)\)$/.exec(color);
        if (getNumber(alpha) === 0)
            return false;
    }
    return true;
};
/**
 * 通过padding计算
 * @return { object } block 边框信息
 */
var computePadding = function (block, getLength) {
    var _a;
    var padding = ((_a = block.padding) === null || _a === void 0 ? void 0 : _a.split(' ').map(function (n) { return getLength(n); })) || [0], paddingTop = 0, paddingBottom = 0, paddingLeft = 0, paddingRight = 0;
    switch (padding.length) {
        case 1:
            paddingTop = paddingBottom = paddingLeft = paddingRight = padding[0];
            break;
        case 2:
            paddingTop = paddingBottom = padding[0];
            paddingLeft = paddingRight = padding[1];
            break;
        case 3:
            paddingTop = padding[0];
            paddingLeft = paddingRight = padding[1];
            paddingBottom = padding[2];
            break;
        default:
            paddingTop = padding[0];
            paddingBottom = padding[1];
            paddingLeft = padding[2];
            paddingRight = padding[3];
    }
    // 检查是否单独传入值, 并且不是0
    var res = { paddingTop: paddingTop, paddingBottom: paddingBottom, paddingLeft: paddingLeft, paddingRight: paddingRight };
    for (var key in res) {
        // 是否含有这个属性, 并且是数字或字符串
        res[key] = has(block, key) && isExpectType(block[key], 'string', 'number')
            ? getLength(block[key])
            : res[key];
    }
    return [paddingTop, paddingBottom, paddingLeft, paddingRight];
};
/**
 * 节流函数
 * @param fn 将要处理的函数
 * @param wait 时间, 单位为毫秒
 * @returns 包装好的节流函数
 */
var throttle = function (fn, wait) {
    if (wait === void 0) { wait = 300; }
    var timeId = null;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeId)
            return;
        timeId = setTimeout(function () {
            fn.apply(_this, args);
            clearTimeout(timeId);
            timeId = null;
        }, wait);
    };
};
/**
 * 通过概率计算出一个奖品索引
 * @param { Array<number | undefined> } rangeArr 概率
 * @returns { number } 中奖索引
 */
var computeRange = function (rangeArr) {
    var ascendingArr = [];
    // 额外增加 map 来优化 ts 的类型推断
    var sum = rangeArr.map(function (num) { return Number(num); }).reduce(function (prev, curr) {
        if (curr > 0) { // 大于0
            var res = prev + curr;
            ascendingArr.push(res);
            return res;
        }
        else { // 小于等于0或NaN
            ascendingArr.push(NaN);
            return prev;
        }
    }, 0);
    var random = Math.random() * sum;
    return ascendingArr.findIndex(function (num) { return random <= num; });
};
/**
 * 根据宽度分割字符串, 来达到换行的效果
 * @param text
 * @param maxWidth
 * @returns
 */
var splitText = function (ctx, text, getWidth, lineClamp) {
    if (lineClamp === void 0) { lineClamp = Infinity; }
    // 如果 lineClamp 设置不正确, 则忽略该属性
    if (lineClamp <= 0)
        lineClamp = Infinity;
    var str = '';
    var lines = [];
    var EndWidth = ctx.measureText('...').width;
    for (var i = 0; i < text.length; i++) {
        str += text[i];
        var currWidth = ctx.measureText(str).width;
        var maxWidth = getWidth(lines);
        // 如果正在计算最后一行, 则加上三个小点的宽度
        if (lineClamp === lines.length + 1)
            currWidth += EndWidth;
        // 如果已经没有宽度了, 就没有必要再计算了
        if (maxWidth < 0)
            return lines;
        // 如果当前一行的宽度不够了, 则处理下一行
        if (currWidth > maxWidth) {
            lines.push(str.slice(0, -1));
            str = text[i];
        }
        // 如果现在是最后一行, 则加上三个小点并跳出
        if (lineClamp === lines.length) {
            lines[lines.length - 1] += '...';
            return lines;
        }
    }
    if (str)
        lines.push(str);
    if (!lines.length)
        lines.push(text);
    return lines;
};
// 获取一个重新排序的数组
var getSortedArrayByIndex = function (arr, order) {
    var map = {}, res = [];
    for (var i = 0; i < arr.length; i++) {
        map[i] = arr[i];
    }
    for (var i = 0; i < order.length; i++) {
        var curr = map[order[i]];
        if (curr)
            (res[i] = curr);
    }
    return res;
};

var name = "lucky-canvas";
var version = "1.7.26";

var Dep = /** @class */ (function () {
    /**
     * 订阅中心构造器
     */
    function Dep() {
        this.subs = [];
    }
    /**
     * 收集依赖
     * @param {*} sub
     */
    Dep.prototype.addSub = function (sub) {
        // 此处临时使用includes防重复添加
        if (!this.subs.includes(sub)) {
            this.subs.push(sub);
        }
    };
    /**
     * 派发更新
     */
    Dep.prototype.notify = function () {
        this.subs.forEach(function (sub) {
            sub.update();
        });
    };
    return Dep;
}());

var hasProto = '__proto__' in {};
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    });
}
function parsePath(path) {
    path += '.';
    var segments = [], segment = '';
    for (var i = 0; i < path.length; i++) {
        var curr = path[i];
        if (/\[|\./.test(curr)) {
            segments.push(segment);
            segment = '';
        }
        else if (/\W/.test(curr)) {
            continue;
        }
        else {
            segment += curr;
        }
    }
    return function (data) {
        return segments.reduce(function (data, key) {
            return data[key];
        }, data);
    };
}
function traverse(value) {
    // const seenObjects = new Set()
    var dfs = function (data) {
        if (!isExpectType(data, 'array', 'object'))
            return;
        Object.keys(data).forEach(function (key) {
            var value = data[key];
            dfs(value);
        });
    };
    dfs(value);
    // seenObjects.clear()
}

/**
 * 重写数组的原型方法
 */
var oldArrayProto = Array.prototype;
var newArrayProto = Object.create(oldArrayProto);
var methods = ['push', 'pop', 'shift', 'unshift', 'sort', 'splice', 'reverse'];
methods.forEach(function (method) {
    newArrayProto[method] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var res = oldArrayProto[method].apply(this, args);
        var luckyOb = this['__luckyOb__'];
        if (['push', 'unshift', 'splice'].includes(method))
            luckyOb.walk(this);
        luckyOb.dep.notify();
        return res;
    };
});

var Observer = /** @class */ (function () {
    /**
     * 观察者构造器
     * @param value
     */
    function Observer(value) {
        // this.value = value
        this.dep = new Dep();
        // 将响应式对象代理到当前value上面, 并且将当前的enumerable设置为false
        def(value, '__luckyOb__', this);
        if (Array.isArray(value)) { // 如果是数组, 则重写原型方法
            if (hasProto) {
                value['__proto__'] = newArrayProto;
            }
            else {
                Object.getOwnPropertyNames(newArrayProto).forEach(function (key) {
                    def(value, key, newArrayProto[key]);
                });
            }
        }
        this.walk(value);
    }
    Observer.prototype.walk = function (data) {
        Object.keys(data).forEach(function (key) {
            defineReactive(data, key, data[key]);
        });
    };
    return Observer;
}());
/**
 * 处理响应式
 * @param { Object | Array } data
 */
function observe(data) {
    if (!data || typeof data !== 'object')
        return;
    var luckyOb;
    if ('__luckyOb__' in data) {
        luckyOb = data['__luckyOb__'];
    }
    else {
        luckyOb = new Observer(data);
    }
    return luckyOb;
}
/**
 * 重写 setter / getter
 * @param {*} data
 * @param {*} key
 * @param {*} val
 */
function defineReactive(data, key, val) {
    var dep = new Dep();
    var property = Object.getOwnPropertyDescriptor(data, key);
    if (property && property.configurable === false) {
        return;
    }
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
        val = data[key];
    }
    var childOb = observe(val);
    Object.defineProperty(data, key, {
        get: function () {
            var value = getter ? getter.call(data) : val;
            if (Dep.target) {
                dep.addSub(Dep.target);
                if (childOb) {
                    childOb.dep.addSub(Dep.target);
                }
            }
            return value;
        },
        set: function (newVal) {
            if (newVal === val)
                return;
            val = newVal;
            if (getter && !setter)
                return;
            if (setter) {
                setter.call(data, newVal);
            }
            else {
                val = newVal;
            }
            childOb = observe(newVal);
            dep.notify();
        }
    });
}

var uid = 0;
var Watcher = /** @class */ (function () {
    /**
     * 观察者构造器
     * @param {*} $lucky
     * @param {*} expr
     * @param {*} cb
     */
    function Watcher($lucky, expr, cb, options) {
        if (options === void 0) { options = {}; }
        this.id = uid++;
        this.$lucky = $lucky;
        this.expr = expr;
        this.deep = !!options.deep;
        if (typeof expr === 'function') {
            this.getter = expr;
        }
        else {
            this.getter = parsePath(expr);
        }
        this.cb = cb;
        this.value = this.get();
    }
    /**
     * 根据表达式获取新值
     */
    Watcher.prototype.get = function () {
        Dep.target = this;
        var value = this.getter.call(this.$lucky, this.$lucky);
        // 处理深度监听
        if (this.deep) {
            traverse(value);
        }
        Dep.target = null;
        return value;
    };
    /**
     * 触发 watcher 更新
     */
    Watcher.prototype.update = function () {
        // get获取新值
        var newVal = this.get();
        // 读取之前存储的旧值
        var oldVal = this.value;
        this.value = newVal;
        // 触发 watch 回调
        this.cb.call(this.$lucky, newVal, oldVal);
    };
    return Watcher;
}());

var Lucky = /** @class */ (function () {
    /**
     * 公共构造器
     * @param config
     */
    function Lucky(config, data) {
        var _this = this;
        this.version = version;
        this.htmlFontSize = 16;
        this.rAF = function () { };
        this.boxWidth = 0;
        this.boxHeight = 0;
        // 兼容代码开始: 为了处理 v1.0.6 版本在这里传入了一个 dom
        if (typeof config === 'string')
            config = { el: config };
        else if (config.nodeType === 1)
            config = { el: '', divElement: config };
        // 这里先野蛮的处理, 等待后续优化, 对外暴露的类型是UserConfigType, 但内部期望是ConfigType
        config = config;
        this.config = config;
        this.data = data;
        // 开始初始化
        if (!config.flag)
            config.flag = 'WEB';
        if (config.el)
            config.divElement = document.querySelector(config.el);
        // 如果存在父盒子, 就创建canvas标签
        if (config.divElement) {
            // 无论盒子内有没有canvas都执行覆盖逻辑
            config.canvasElement = document.createElement('canvas');
            config.divElement.appendChild(config.canvasElement);
        }
        // 获取 canvas 上下文
        if (config.canvasElement) {
            config.ctx = config.canvasElement.getContext('2d');
            // 添加版本信息到标签上, 方便定位版本问题
            config.canvasElement.setAttribute('package', "".concat(name, "@").concat(version));
            config.canvasElement.addEventListener('click', function (e) { return _this.handleClick(e); });
        }
        this.ctx = config.ctx;
        // 初始化 window 方法
        this.initWindowFunction();
        // 如果最后得不到 canvas 上下文那就无法进行绘制
        if (!this.config.ctx) {
            console.error('无法获取到 CanvasContext2D');
        }
        // 监听 window 触发 resize 时重置
        if (window && typeof window.addEventListener === 'function') {
            window.addEventListener('resize', throttle(function () { return _this.resize(); }, 300));
        }
        // 监听异步设置 html 的 fontSize 并重新绘制
        if (window && typeof window.MutationObserver === 'function') {
            new window.MutationObserver(function () {
                _this.resize();
            }).observe(document.documentElement, { attributes: true });
        }
    }
    /**
     * 初始化组件大小/单位
     */
    Lucky.prototype.resize = function () {
        var _a, _b;
        (_b = (_a = this.config).beforeResize) === null || _b === void 0 ? void 0 : _b.call(_a);
        // 先初始化 fontSize 以防后面有 rem 单位
        this.setHTMLFontSize();
        // 拿到 config 即可设置 dpr
        this.setDpr();
        // 初始化宽高
        this.resetWidthAndHeight();
        // 根据 dpr 来缩放 canvas
        this.zoomCanvas();
    };
    /**
     * 初始化方法
     */
    Lucky.prototype.initLucky = function () {
        this.resize();
        if (!this.boxWidth || !this.boxHeight) {
            return console.error('无法获取到宽度或高度');
        }
    };
    /**
     * 鼠标点击事件
     * @param e 事件参数
     */
    Lucky.prototype.handleClick = function (e) { };
    /**
     * 根标签的字体大小
     */
    Lucky.prototype.setHTMLFontSize = function () {
        if (!window)
            return;
        this.htmlFontSize = +window.getComputedStyle(document.documentElement).fontSize.slice(0, -2);
    };
    // 清空画布
    Lucky.prototype.clearCanvas = function () {
        var _a = [this.boxWidth, this.boxHeight], width = _a[0], height = _a[1];
        this.ctx.clearRect(-width, -height, width * 2, height * 2);
    };
    /**
     * 设备像素比
     * window 环境下自动获取, 其余环境手动传入
     */
    Lucky.prototype.setDpr = function () {
        var config = this.config;
        if (config.dpr) ;
        else if (window) {
            window['dpr'] = config.dpr = window.devicePixelRatio || 1;
        }
        else if (!config.dpr) {
            console.error(config, '未传入 dpr 可能会导致绘制异常');
        }
    };
    /**
     * 重置盒子和canvas的宽高
     */
    Lucky.prototype.resetWidthAndHeight = function () {
        var _a = this, config = _a.config, data = _a.data;
        // 如果是浏览器环境并且存在盒子
        var boxWidth = 0, boxHeight = 0;
        if (config.divElement) {
            boxWidth = config.divElement.offsetWidth;
            boxHeight = config.divElement.offsetHeight;
        }
        // 先从 data 里取宽高, 如果 config 上面没有, 就从 style 上面取
        this.boxWidth = this.getLength(data.width || config['width']) || boxWidth;
        this.boxHeight = this.getLength(data.height || config['height']) || boxHeight;
        // 重新把宽高赋给盒子
        if (config.divElement) {
            config.divElement.style.overflow = 'hidden';
            config.divElement.style.width = this.boxWidth + 'px';
            config.divElement.style.height = this.boxHeight + 'px';
        }
    };
    /**
     * 根据 dpr 缩放 canvas 并处理位移
     */
    Lucky.prototype.zoomCanvas = function () {
        var _a = this, config = _a.config, ctx = _a.ctx;
        var canvasElement = config.canvasElement, dpr = config.dpr;
        var _b = [this.boxWidth * dpr, this.boxHeight * dpr], width = _b[0], height = _b[1];
        if (!canvasElement)
            return;
        canvasElement.width = width;
        canvasElement.height = height;
        canvasElement.style.width = "".concat(width, "px");
        canvasElement.style.height = "".concat(height, "px");
        canvasElement.style['transform-origin'] = 'left top';
        canvasElement.style.transform = "scale(".concat(1 / dpr, ")");
        ctx.scale(dpr, dpr);
    };
    /**
     * 从 window 对象上获取一些方法
     */
    Lucky.prototype.initWindowFunction = function () {
        var config = this.config;
        if (window) {
            this.rAF = window.requestAnimationFrame ||
                window['webkitRequestAnimationFrame'] ||
                window['mozRequestAnimationFrame'] ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
            config.setTimeout = window.setTimeout;
            config.setInterval = window.setInterval;
            config.clearTimeout = window.clearTimeout;
            config.clearInterval = window.clearInterval;
            return;
        }
        if (config.rAF) {
            // 优先使用帧动画
            this.rAF = config.rAF;
        }
        else if (config.setTimeout) {
            // 其次使用定时器
            var timeout_1 = config.setTimeout;
            this.rAF = function (callback) { return timeout_1(callback, 16.7); };
        }
        else {
            // 如果config里面没有提供, 那就假设全局方法存在setTimeout
            this.rAF = function (callback) { return setTimeout(callback, 16.7); };
        }
    };
    Lucky.prototype.isWeb = function () {
        return ['WEB', 'UNI-H5', 'TARO-H5'].includes(this.config.flag);
    };
    /**
     * 异步加载图片并返回图片的几何信息
     * @param src 图片路径
     * @param info 图片信息
     */
    Lucky.prototype.loadImg = function (src, info, resolveName) {
        var _this = this;
        if (resolveName === void 0) { resolveName = '$resolve'; }
        return new Promise(function (resolve, reject) {
            if (!src)
                reject("=> '".concat(info.src, "' \u4E0D\u80FD\u4E3A\u7A7A\u6216\u4E0D\u5408\u6CD5"));
            if (_this.config.flag === 'WEB') {
                var imgObj_1 = new Image();
                imgObj_1['crossorigin'] = 'anonymous';
                imgObj_1.onload = function () { return resolve(imgObj_1); };
                imgObj_1.onerror = function () { return reject("=> '".concat(info.src, "' \u56FE\u7247\u52A0\u8F7D\u5931\u8D25")); };
                imgObj_1.src = src;
            }
            else {
                // 其余平台向外暴露, 交给外部自行处理
                info[resolveName] = resolve;
                info['$reject'] = reject;
                return;
            }
        });
    };
    /**
     * 公共绘制图片的方法
     * @param imgObj 图片对象
     * @param rectInfo: [x轴位置, y轴位置, 渲染宽度, 渲染高度]
     */
    Lucky.prototype.drawImage = function (ctx, imgObj) {
        var _a, _b;
        var rectInfo = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rectInfo[_i - 2] = arguments[_i];
        }
        var drawImg;
        var _c = this.config, flag = _c.flag, dpr = _c.dpr;
        if (['WEB', 'MP-WX'].includes(flag)) {
            // 浏览器和新版小程序中直接绘制即可
            drawImg = imgObj;
        }
        else if (['UNI-H5', 'UNI-MP', 'TARO-H5', 'TARO-MP'].includes(flag)) {
            drawImg = imgObj.path;
        }
        else {
            // 如果传入了未知的标识
            return console.error('意料之外的 flag, 该平台尚未兼容!');
        }
        var miniProgramOffCtx = (_b = (_a = (drawImg['canvas'] || drawImg)).getContext) === null || _b === void 0 ? void 0 : _b.call(_a, '2d');
        if (miniProgramOffCtx && !this.isWeb()) {
            rectInfo = rectInfo.map(function (val) { return val * dpr; });
            var temp = miniProgramOffCtx.getImageData.apply(miniProgramOffCtx, rectInfo.slice(0, 4));
            ctx.putImageData.apply(ctx, __spreadArray([temp], rectInfo.slice(4, 6), false));
        }
        else {
            if (rectInfo.length === 8) {
                rectInfo = rectInfo.map(function (val, index) { return index < 4 ? val * dpr : val; });
            }
            // 尝试捕获错误
            try {
                ctx.drawImage.apply(ctx, __spreadArray([drawImg], rectInfo, false));
            }
            catch (err) {
                /**
                 * TODO: safari浏览器下, init() 会出现奇怪的报错
                 * IndexSizeError: The index is not in the allowed range
                 * 但是这个报错并不影响实际的绘制, 目前先放一放, 等待有缘人
                 */
                // console.log(err)
            }
        }
    };
    /**
     * 计算图片的渲染宽高
     * @param imgObj 图片标签元素
     * @param imgInfo 图片信息
     * @param maxWidth 最大宽度
     * @param maxHeight 最大高度
     * @return [渲染宽度, 渲染高度]
     */
    Lucky.prototype.computedWidthAndHeight = function (imgObj, imgInfo, maxWidth, maxHeight) {
        // 根据配置的样式计算图片的真实宽高
        if (!imgInfo.width && !imgInfo.height) {
            // 如果没有配置宽高, 则使用图片本身的宽高
            return [imgObj.width, imgObj.height];
        }
        else if (imgInfo.width && !imgInfo.height) {
            // 如果只填写了宽度, 没填写高度
            var trueWidth = this.getLength(imgInfo.width, maxWidth);
            // 那高度就随着宽度进行等比缩放
            return [trueWidth, imgObj.height * (trueWidth / imgObj.width)];
        }
        else if (!imgInfo.width && imgInfo.height) {
            // 如果只填写了宽度, 没填写高度
            var trueHeight = this.getLength(imgInfo.height, maxHeight);
            // 那宽度就随着高度进行等比缩放
            return [imgObj.width * (trueHeight / imgObj.height), trueHeight];
        }
        // 如果宽度和高度都填写了, 就如实计算
        return [
            this.getLength(imgInfo.width, maxWidth),
            this.getLength(imgInfo.height, maxHeight)
        ];
    };
    /**
     * 转换单位
     * @param { string } value 将要转换的值
     * @param { number } denominator 分子
     * @return { number } 返回新的字符串
     */
    Lucky.prototype.changeUnits = function (value, denominator) {
        var _this = this;
        if (denominator === void 0) { denominator = 1; }
        var config = this.config;
        return Number(value.replace(/^([-]*[0-9.]*)([a-z%]*)$/, function (val, num, unit) {
            var handleCssUnit = {
                '%': function (n) { return n * (denominator / 100); },
                'px': function (n) { return n * 1; },
                'rem': function (n) { return n * _this.htmlFontSize; },
                'vw': function (n) { return n / 100 * window.innerWidth; },
            }[unit];
            if (handleCssUnit)
                return handleCssUnit(num);
            // 如果找不到默认单位, 就交给外面处理
            var otherHandleCssUnit = config.handleCssUnit || config['unitFunc'];
            return otherHandleCssUnit ? otherHandleCssUnit(num, unit) : num;
        }));
    };
    /**
     * 获取长度
     * @param length 将要转换的长度
     * @param maxLength 最大长度
     * @return 返回长度
     */
    Lucky.prototype.getLength = function (length, maxLength) {
        if (isExpectType(length, 'number'))
            return length;
        if (isExpectType(length, 'string'))
            return this.changeUnits(length, maxLength);
        return 0;
    };
    /**
     * 获取相对(居中)X坐标
     * @param width
     * @param col
     */
    Lucky.prototype.getOffsetX = function (width, maxWidth) {
        if (maxWidth === void 0) { maxWidth = 0; }
        return (maxWidth - width) / 2;
    };
    Lucky.prototype.getOffscreenCanvas = function (width, height) {
        if (!has(this, '_offscreenCanvas')) {
            if (window && window.document && this.config.flag === 'WEB') {
                this['_offscreenCanvas'] = document.createElement('canvas');
            }
            else {
                this['_offscreenCanvas'] = this.config['offscreenCanvas'];
            }
            if (!this['_offscreenCanvas'])
                return console.error('离屏 Canvas 无法渲染!');
        }
        var dpr = this.config.dpr;
        var _offscreenCanvas = this['_offscreenCanvas'];
        _offscreenCanvas.width = (width || 300) * dpr;
        _offscreenCanvas.height = (height || 150) * dpr;
        var _ctx = _offscreenCanvas.getContext('2d');
        _ctx.clearRect(0, 0, width, height);
        _ctx.scale(dpr, dpr);
        _ctx['dpr'] = dpr;
        return { _offscreenCanvas: _offscreenCanvas, _ctx: _ctx };
    };
    /**
     * 添加一个新的响应式数据 (临时)
     * @param data 数据
     * @param key 属性
     * @param value 新值
     */
    Lucky.prototype.$set = function (data, key, value) {
        if (!data || typeof data !== 'object')
            return;
        defineReactive(data, key, value);
    };
    /**
     * 添加一个属性计算 (临时)
     * @param data 源数据
     * @param key 属性名
     * @param callback 回调函数
     */
    Lucky.prototype.$computed = function (data, key, callback) {
        var _this = this;
        Object.defineProperty(data, key, {
            get: function () {
                return callback.call(_this);
            }
        });
    };
    /**
     * 添加一个观察者 create user watcher
     * @param expr 表达式
     * @param handler 回调函数
     * @param watchOpt 配置参数
     * @return 卸载当前观察者的函数 (暂未返回)
     */
    Lucky.prototype.$watch = function (expr, handler, watchOpt) {
        if (watchOpt === void 0) { watchOpt = {}; }
        if (typeof handler === 'object') {
            watchOpt = handler;
            handler = watchOpt.handler;
        }
        // 创建 user watcher
        var watcher = new Watcher(this, expr, handler, watchOpt);
        // 判断是否需要初始化时触发回调
        if (watchOpt.immediate) {
            handler.call(this, watcher.value);
        }
        // 返回一个卸载当前观察者的函数
        return function unWatchFn() { };
    };
    Lucky.version = version;
    return Lucky;
}());

/**
 * 转换为运算角度
 * @param { number } deg 数学角度
 * @return { number } 运算角度
 */
var getAngle = function (deg) {
    return Math.PI / 180 * deg;
};
/**
 * 根据角度计算圆上的点
 * @param { number } deg 运算角度
 * @param { number } r 半径
 * @return { Array<number> } 坐标[x, y]
 */
var getArcPointerByDeg = function (deg, r) {
    return [+(Math.cos(deg) * r).toFixed(8), +(Math.sin(deg) * r).toFixed(8)];
};
// 使用 arc 绘制扇形
var fanShapedByArc = function (ctx, minRadius, maxRadius, start, end, gutter) {
    ctx.beginPath();
    var maxGutter = getAngle(90 / Math.PI / maxRadius * gutter);
    var maxStart = start + maxGutter;
    var maxEnd = end - maxGutter;
    ctx.arc(0, 0, maxRadius, maxStart, maxEnd, false);
    // 如果 getter 比按钮短就绘制圆弧, 反之计算新的坐标点
    // if (minEnd > minStart) {
    //   ctx.arc(0, 0, minRadius, minEnd, minStart, true)
    // } else {
    ctx.lineTo.apply(ctx, getArcPointerByDeg((start + end) / 2, gutter / 2 / Math.abs(Math.sin((start - end) / 2))));
    // }
    ctx.closePath();
};
// 使用 arc 绘制圆角矩形
var roundRectByArc = function (ctx) {
    var _a = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        _a[_i - 1] = arguments[_i];
    }
    var x = _a[0], y = _a[1], w = _a[2], h = _a[3], r = _a[4];
    var min = Math.min(w, h), PI = Math.PI;
    if (r > min / 2)
        r = min / 2;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arc(x + w - r, y + r, r, -PI / 2, 0);
    ctx.lineTo(x + w, y + h - r);
    ctx.arc(x + w - r, y + h - r, r, 0, PI / 2);
    ctx.lineTo(x + r, y + h);
    ctx.arc(x + r, y + h - r, r, PI / 2, PI);
    ctx.lineTo(x, y + r);
    ctx.arc(x + r, y + r, r, PI, -PI / 2);
    ctx.closePath();
};
/**
 * 创建线性渐变色
 */
var getLinearGradient = function (ctx, x, y, w, h, background) {
    var context = /linear-gradient\((.+)\)/.exec(background)[1]
        .split(',') // 根据逗号分割
        .map(function (text) { return text.trim(); }); // 去除两边空格
    var deg = context.shift(), direction = [0, 0, 0, 0];
    // 通过起始点和角度计算渐变终点的坐标点, 这里感谢泽宇大神提醒我使用勾股定理....
    if (deg.includes('deg')) {
        deg = deg.slice(0, -3) % 360;
        // 根据4个象限定义起点坐标, 根据45度划分8个区域计算终点坐标
        var getLenOfTanDeg = function (deg) { return Math.tan(deg / 180 * Math.PI); };
        if (deg >= 0 && deg < 45)
            direction = [x, y + h, x + w, y + h - w * getLenOfTanDeg(deg - 0)];
        else if (deg >= 45 && deg < 90)
            direction = [x, y + h, (x + w) - h * getLenOfTanDeg(deg - 45), y];
        else if (deg >= 90 && deg < 135)
            direction = [x + w, y + h, (x + w) - h * getLenOfTanDeg(deg - 90), y];
        else if (deg >= 135 && deg < 180)
            direction = [x + w, y + h, x, y + w * getLenOfTanDeg(deg - 135)];
        else if (deg >= 180 && deg < 225)
            direction = [x + w, y, x, y + w * getLenOfTanDeg(deg - 180)];
        else if (deg >= 225 && deg < 270)
            direction = [x + w, y, x + h * getLenOfTanDeg(deg - 225), y + h];
        else if (deg >= 270 && deg < 315)
            direction = [x, y, x + h * getLenOfTanDeg(deg - 270), y + h];
        else if (deg >= 315 && deg < 360)
            direction = [x, y, x + w, y + h - w * getLenOfTanDeg(deg - 315)];
    }
    // 创建四个简单的方向坐标
    else if (deg.includes('top'))
        direction = [x, y + h, x, y];
    else if (deg.includes('bottom'))
        direction = [x, y, x, y + h];
    else if (deg.includes('left'))
        direction = [x + w, y, x, y];
    else if (deg.includes('right'))
        direction = [x, y, x + w, y];
    // 创建线性渐变必须使用整数坐标
    var gradient = ctx.createLinearGradient.apply(ctx, direction.map(function (n) { return n >> 0; }));
    // 这里后期重构, 先用any代替
    return context.reduce(function (gradient, item, index) {
        var info = item.split(' ');
        if (info.length === 1)
            gradient.addColorStop(index, info[0]);
        else if (info.length === 2)
            gradient.addColorStop.apply(gradient, info);
        return gradient;
    }, gradient);
};
// // 根据三点画圆弧
// export const drawRadian = (
//   ctx: CanvasRenderingContext2D,
//   r: number,
//   start: number,
//   end: number,
//   direction: boolean = true
// ) => {
//   // 如果角度大于等于180度, 则分两次绘制, 因为 arcTo 无法绘制180度的圆弧
//   if (Math.abs(end - start).toFixed(8) >= getAngle(180).toFixed(8)) {
//     let middle = (end + start) / 2
//     if (direction) {
//       drawRadian(ctx, r, start, middle, direction)
//       drawRadian(ctx, r, middle, end, direction)
//     } else {
//       drawRadian(ctx, r, middle, end, direction)
//       drawRadian(ctx, r, start, middle, direction)
//     }
//     return false
//   }
//   // 如果方法相反, 则交换起点和终点
//   if (!direction) [start, end] = [end, start]
//   const [x1, y1] = getArcPointerByDeg(start, r)
//   const [x2, y2] = getArcPointerByDeg(end, r)
//   const [k1, b1] = getTangentByPointer(x1, y1)
//   const [k2, b2] = getTangentByPointer(x2, y2)
//   // 计算两条切线的交点
//   let x0 = (b2 - b1) / (k1 - k2)
//   let y0 = (k2 * b1 - k1 * b2) / (k2 - k1)
//   // 如果有任何一条切线垂直于x轴, 则斜率不存在
//   if (isNaN(x0)) {
//     Math.abs(x1) === +r.toFixed(8) && (x0 = x1)
//     Math.abs(x2) === +r.toFixed(8) && (x0 = x2)
//   }
//   if (k1 === Infinity || k1 === -Infinity) {
//     y0 = k2 * x0 + b2
//   }
//   else if (k2 === Infinity || k2 === -Infinity) {
//     y0 = k1 * x0 + b1
//   }
//   ctx.lineTo(x1, y1)
//   // 微信小程序下 arcTo 在安卓真机下绘制有 bug
//   ctx.arcTo(x0, y0, x2, y2, r)
// }
// // 使用 arcTo 绘制扇形 (弃用)
// export const drawSectorByArcTo = (
//   ctx: CanvasRenderingContext2D,
//   minRadius: number,
//   maxRadius: number,
//   start: number,
//   end: number,
//   gutter: number,
// ) => {
//   if (!minRadius) minRadius = gutter
//   // 内外圆弧分别进行等边缩放
//   let maxGutter = getAngle(90 / Math.PI / maxRadius * gutter)
//   let minGutter = getAngle(90 / Math.PI / minRadius * gutter)
//   let maxStart = start + maxGutter
//   let maxEnd = end - maxGutter
//   let minStart = start + minGutter
//   let minEnd = end - minGutter
//   ctx.beginPath()
//   ctx.moveTo(...getArcPointerByDeg(maxStart, maxRadius))
//   drawRadian(ctx, maxRadius, maxStart, maxEnd, true)
//   // 如果 getter 比按钮短就绘制圆弧, 反之计算新的坐标点
//   if (minEnd > minStart) {
//     drawRadian(ctx, minRadius, minStart, minEnd, false)
//   } else {
//     ctx.lineTo(
//       ...getArcPointerByDeg(
//         (start + end) / 2,
//         gutter / 2 / Math.abs(Math.sin((start - end) / 2))
//       )
//     )
//   }
//   ctx.closePath()
// }
// // 使用 arcTo 绘制圆角矩形 (弃用)
// export const roundRectByArcTo = (
//   ctx: CanvasRenderingContext2D,
//   ...[x, y, w, h, r]: number[]
// ) => {
//   let min = Math.min(w, h)
//   if (r > min / 2) r = min / 2
//   ctx.beginPath()
//   ctx.moveTo(x + r, y)
//   ctx.lineTo(x + r, y)
//   ctx.lineTo(x + w - r, y)
//   ctx.arcTo(x + w, y, x + w, y + r, r)
//   ctx.lineTo(x + w, y + h - r)
//   ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
//   ctx.lineTo(x + r, y + h)
//   ctx.arcTo(x, y + h, x, y + h - r, r)
//   ctx.lineTo(x, y + r)
//   ctx.arcTo(x, y, x + r, y, r)
// }

/**
 * 缓动函数
 * t: current time（当前时间）
 * b: beginning value（初始值）
 * c: change in value（变化量）
 * d: duration（持续时间）
 *
 * 感谢张鑫旭大佬 https://github.com/zhangxinxu/Tween
 */
// 二次方的缓动
var quad = {
    easeIn: function (t, b, c, d) {
        if (t >= d)
            t = d;
        return c * (t /= d) * t + b;
    },
    easeOut: function (t, b, c, d) {
        if (t >= d)
            t = d;
        return -c * (t /= d) * (t - 2) + b;
    }
};

var LuckyWheel = /** @class */ (function (_super) {
    __extends(LuckyWheel, _super);
    /**
     * 大转盘构造器
     * @param config 配置项
     * @param data 抽奖数据
     */
    function LuckyWheel(config, data) {
        var _this = this;
        var _a;
        _this = _super.call(this, config, {
            width: data.width,
            height: data.height
        }) || this;
        _this.blocks = [];
        _this.prizes = [];
        _this.buttons = [];
        _this.defaultConfig = {};
        _this.defaultStyle = {};
        _this._defaultConfig = {};
        _this._defaultStyle = {};
        _this.Radius = 0; // 大转盘半径
        _this.prizeRadius = 0; // 奖品区域半径
        _this.prizeDeg = 0; // 奖品数学角度
        _this.prizeAng = 0; // 奖品运算角度
        _this.rotateDeg = 0; // 转盘旋转角度
        _this.maxBtnRadius = 0; // 最大按钮半径
        _this.startTime = 0; // 开始时间戳
        _this.endTime = 0; // 停止时间戳
        _this.stopDeg = 0; // 刻舟求剑
        _this.endDeg = 0; // 停止角度
        _this.FPS = 16.6; // 屏幕刷新率
        /**
         * 游戏当前的阶段
         * step = 0 时, 游戏尚未开始
         * step = 1 时, 此时处于加速阶段
         * step = 2 时, 此时处于匀速阶段
         * step = 3 时, 此时处于减速阶段
         */
        _this.step = 0;
        _this.ImageCache = new Map();
        _this.initData(data);
        _this.initWatch();
        _this.initComputed();
        // 创建前回调函数
        (_a = config.beforeCreate) === null || _a === void 0 ? void 0 : _a.call(_this);
        // 首次初始化
        _this.init();
        return _this;
    }
    LuckyWheel.prototype.resize = function () {
        var _a, _b;
        _super.prototype.resize.call(this);
        this.Radius = Math.min(this.boxWidth, this.boxHeight) / 2;
        this.ctx.translate(this.Radius, this.Radius);
        this.draw();
        (_b = (_a = this.config).afterResize) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    LuckyWheel.prototype.initLucky = function () {
        this.Radius = 0;
        this.prizeRadius = 0;
        this.prizeDeg = 0;
        this.prizeAng = 0;
        this.rotateDeg = 0;
        this.maxBtnRadius = 0;
        this.startTime = 0;
        this.endTime = 0;
        this.stopDeg = 0;
        this.endDeg = 0;
        this.FPS = 16.6;
        this.prizeFlag = -1;
        this.step = 0;
        _super.prototype.initLucky.call(this);
    };
    /**
     * 初始化数据
     * @param data
     */
    LuckyWheel.prototype.initData = function (data) {
        this.$set(this, 'width', data.width);
        this.$set(this, 'height', data.height);
        this.$set(this, 'blocks', data.blocks || []);
        this.$set(this, 'prizes', data.prizes || []);
        this.$set(this, 'buttons', data.buttons || []);
        this.$set(this, 'defaultConfig', data.defaultConfig || {});
        this.$set(this, 'defaultStyle', data.defaultStyle || {});
        this.$set(this, 'startCallback', data.start);
        this.$set(this, 'endCallback', data.end);
    };
    /**
     * 初始化属性计算
     */
    LuckyWheel.prototype.initComputed = function () {
        var _this = this;
        // 默认配置
        this.$computed(this, '_defaultConfig', function () {
            var config = __assign({ gutter: '0px', offsetDegree: 0, speed: 20, speedFunction: 'quad', accelerationTime: 2500, decelerationTime: 2500, stopRange: 0 }, _this.defaultConfig);
            return config;
        });
        // 默认样式
        this.$computed(this, '_defaultStyle', function () {
            var style = __assign({ fontSize: '18px', fontColor: '#000', fontStyle: 'sans-serif', fontWeight: '400', background: 'rgba(0,0,0,0)', wordWrap: true, lengthLimit: '90%' }, _this.defaultStyle);
            return style;
        });
    };
    /**
     * 初始化观察者
     */
    LuckyWheel.prototype.initWatch = function () {
        var _this = this;
        // 重置宽度
        this.$watch('width', function (newVal) {
            _this.data.width = newVal;
            _this.resize();
        });
        // 重置高度
        this.$watch('height', function (newVal) {
            _this.data.height = newVal;
            _this.resize();
        });
        // 观察 blocks 变化收集图片
        this.$watch('blocks', function (newData) {
            _this.initImageCache();
        }, { deep: true });
        // 观察 prizes 变化收集图片
        this.$watch('prizes', function (newData) {
            _this.initImageCache();
        }, { deep: true });
        // 观察 buttons 变化收集图片
        this.$watch('buttons', function (newData) {
            _this.initImageCache();
        }, { deep: true });
        this.$watch('defaultConfig', function () { return _this.draw(); }, { deep: true });
        this.$watch('defaultStyle', function () { return _this.draw(); }, { deep: true });
        this.$watch('startCallback', function () { return _this.init(); });
        this.$watch('endCallback', function () { return _this.init(); });
    };
    /**
     * 初始化 canvas 抽奖
     */
    LuckyWheel.prototype.init = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.initLucky();
                        config = this.config;
                        // 初始化前回调函数
                        (_a = config.beforeInit) === null || _a === void 0 ? void 0 : _a.call(this);
                        this.draw(); // 先画一次, 防止闪烁
                        this.draw(); // 再画一次, 拿到正确的按钮轮廓
                        // 异步加载图片
                        return [4 /*yield*/, this.initImageCache()
                            // 初始化后回调函数
                        ];
                    case 1:
                        // 异步加载图片
                        _c.sent();
                        // 初始化后回调函数
                        (_b = config.afterInit) === null || _b === void 0 ? void 0 : _b.call(this);
                        return [2 /*return*/];
                }
            });
        });
    };
    LuckyWheel.prototype.initImageCache = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var willUpdateImgs = {
                blocks: _this.blocks.map(function (block) { return block.imgs; }),
                prizes: _this.prizes.map(function (prize) { return prize.imgs; }),
                buttons: _this.buttons.map(function (btn) { return btn.imgs; }),
            };
            Object.keys(willUpdateImgs).forEach(function (imgName) {
                var willUpdate = willUpdateImgs[imgName];
                // 循环遍历所有图片
                var allPromise = [];
                willUpdate && willUpdate.forEach(function (imgs, cellIndex) {
                    imgs && imgs.forEach(function (imgInfo, imgIndex) {
                        allPromise.push(_this.loadAndCacheImg(imgName, cellIndex, imgIndex));
                    });
                });
                Promise.all(allPromise).then(function () {
                    _this.draw();
                    resolve();
                });
            });
        });
    };
    /**
     * canvas点击事件
     * @param e 事件参数
     */
    LuckyWheel.prototype.handleClick = function (e) {
        var _a;
        var ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(0, 0, this.maxBtnRadius, 0, Math.PI * 2, false);
        if (!ctx.isPointInPath(e.offsetX, e.offsetY))
            return;
        if (this.step !== 0)
            return;
        (_a = this.startCallback) === null || _a === void 0 ? void 0 : _a.call(this, e);
    };
    /**
     * 根据索引单独加载指定图片并缓存
     * @param cellName 模块名称
     * @param cellIndex 模块索引
     * @param imgName 模块对应的图片缓存
     * @param imgIndex 图片索引
     */
    LuckyWheel.prototype.loadAndCacheImg = function (cellName, cellIndex, imgIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // 获取图片信息
                        var cell = _this[cellName][cellIndex];
                        if (!cell || !cell.imgs)
                            return;
                        var imgInfo = cell.imgs[imgIndex];
                        if (!imgInfo)
                            return;
                        // 异步加载图片
                        _this.loadImg(imgInfo.src, imgInfo).then(function (currImg) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(typeof imgInfo.formatter === 'function')) return [3 /*break*/, 2];
                                        return [4 /*yield*/, Promise.resolve(imgInfo.formatter.call(this, currImg))];
                                    case 1:
                                        currImg = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        this.ImageCache.set(imgInfo['src'], currImg);
                                        resolve();
                                        return [2 /*return*/];
                                }
                            });
                        }); }).catch(function (err) {
                            console.error("".concat(cellName, "[").concat(cellIndex, "].imgs[").concat(imgIndex, "] ").concat(err));
                            reject();
                        });
                    })];
            });
        });
    };
    LuckyWheel.prototype.drawBlock = function (radius, block, blockIndex) {
        var _this = this;
        var ctx = this.ctx;
        if (hasBackground(block.background)) {
            ctx.beginPath();
            ctx.fillStyle = block.background;
            ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
            ctx.fill();
        }
        block.imgs && block.imgs.forEach(function (imgInfo, imgIndex) {
            var blockImg = _this.ImageCache.get(imgInfo.src);
            if (!blockImg)
                return;
            // 绘制图片
            var _a = _this.computedWidthAndHeight(blockImg, imgInfo, radius * 2, radius * 2), trueWidth = _a[0], trueHeight = _a[1];
            var _b = [_this.getOffsetX(trueWidth) + _this.getLength(imgInfo.left, radius * 2), _this.getLength(imgInfo.top, radius * 2) - radius], xAxis = _b[0], yAxis = _b[1];
            ctx.save();
            imgInfo.rotate && ctx.rotate(getAngle(_this.rotateDeg));
            _this.drawImage(ctx, blockImg, xAxis, yAxis, trueWidth, trueHeight);
            ctx.restore();
        });
    };
    /**
     * 开始绘制
     */
    LuckyWheel.prototype.draw = function () {
        var _this = this;
        var _a, _b;
        var _c = this, config = _c.config, ctx = _c.ctx, _defaultConfig = _c._defaultConfig, _defaultStyle = _c._defaultStyle;
        // 触发绘制前回调
        (_a = config.beforeDraw) === null || _a === void 0 ? void 0 : _a.call(this, ctx);
        // 清空画布
        ctx.clearRect(-this.Radius, -this.Radius, this.Radius * 2, this.Radius * 2);
        // 计算 padding 并绘制 blocks 边框
        this.prizeRadius = this.blocks.reduce(function (radius, block, blockIndex) {
            _this.drawBlock(radius, block, blockIndex);
            return radius - _this.getLength(block.padding && block.padding.split(' ')[0]);
        }, this.Radius);
        // 计算起始弧度
        this.prizeDeg = 360 / this.prizes.length;
        this.prizeAng = getAngle(this.prizeDeg);
        var shortSide = this.prizeRadius * Math.sin(this.prizeAng / 2) * 2;
        // 起始角度调整到正上方, 并且减去半个扇形角度
        var start = getAngle(this.rotateDeg - 90 + this.prizeDeg / 2 + _defaultConfig.offsetDegree);
        // 计算文字横坐标
        var getFontX = function (font, line) {
            return _this.getOffsetX(ctx.measureText(line).width) + _this.getLength(font.left, shortSide);
        };
        // 计算文字纵坐标
        var getFontY = function (font, height, lineIndex) {
            // 优先使用字体行高, 要么使用默认行高, 其次使用字体大小, 否则使用默认字体大小
            var lineHeight = font.lineHeight || _defaultStyle.lineHeight || font.fontSize || _defaultStyle.fontSize;
            return _this.getLength(font.top, height) + (lineIndex + 1) * _this.getLength(lineHeight);
        };
        ctx.save();
        // 绘制prizes奖品区域
        this.prizes.forEach(function (prize, prizeIndex) {
            // 计算当前奖品区域中间坐标点
            var currMiddleDeg = start + prizeIndex * _this.prizeAng;
            // 奖品区域可见高度
            var prizeHeight = _this.prizeRadius - _this.maxBtnRadius;
            // 绘制背景
            var background = prize.background || _defaultStyle.background;
            if (hasBackground(background)) {
                ctx.fillStyle = background;
                fanShapedByArc(ctx, _this.maxBtnRadius, _this.prizeRadius, currMiddleDeg - _this.prizeAng / 2, currMiddleDeg + _this.prizeAng / 2, _this.getLength(_defaultConfig.gutter));
                ctx.fill();
            }
            // 计算临时坐标并旋转文字
            var x = Math.cos(currMiddleDeg) * _this.prizeRadius;
            var y = Math.sin(currMiddleDeg) * _this.prizeRadius;
            ctx.translate(x, y);
            ctx.rotate(currMiddleDeg + getAngle(90));
            // 绘制图片
            prize.imgs && prize.imgs.forEach(function (imgInfo, imgIndex) {
                var prizeImg = _this.ImageCache.get(imgInfo.src);
                if (!prizeImg)
                    return;
                var _a = _this.computedWidthAndHeight(prizeImg, imgInfo, _this.prizeAng * _this.prizeRadius, prizeHeight), trueWidth = _a[0], trueHeight = _a[1];
                var _b = [
                    _this.getOffsetX(trueWidth) + _this.getLength(imgInfo.left, shortSide),
                    _this.getLength(imgInfo.top, prizeHeight)
                ], xAxis = _b[0], yAxis = _b[1];
                _this.drawImage(ctx, prizeImg, xAxis, yAxis, trueWidth, trueHeight);
            });
            // 逐行绘制文字
            prize.fonts && prize.fonts.forEach(function (font) {
                var fontColor = font.fontColor || _defaultStyle.fontColor;
                var fontWeight = font.fontWeight || _defaultStyle.fontWeight;
                var fontSize = _this.getLength(font.fontSize || _defaultStyle.fontSize);
                var fontStyle = font.fontStyle || _defaultStyle.fontStyle;
                var wordWrap = has(font, 'wordWrap') ? font.wordWrap : _defaultStyle.wordWrap;
                var lengthLimit = font.lengthLimit || _defaultStyle.lengthLimit;
                var lineClamp = font.lineClamp || _defaultStyle.lineClamp;
                ctx.fillStyle = fontColor;
                ctx.font = "".concat(fontWeight, " ").concat(fontSize >> 0, "px ").concat(fontStyle);
                var lines = [], text = String(font.text);
                if (wordWrap) {
                    lines = splitText(ctx, removeEnter(text), function (lines) {
                        // 三角形临边
                        var adjacentSide = _this.prizeRadius - getFontY(font, prizeHeight, lines.length);
                        // 三角形短边
                        var shortSide = adjacentSide * Math.tan(_this.prizeAng / 2);
                        // 最大宽度
                        var maxWidth = shortSide * 2 - _this.getLength(_defaultConfig.gutter);
                        return _this.getLength(lengthLimit, maxWidth);
                    }, lineClamp);
                }
                else {
                    lines = text.split('\n');
                }
                lines.filter(function (line) { return !!line; }).forEach(function (line, lineIndex) {
                    ctx.fillText(line, getFontX(font, line), getFontY(font, prizeHeight, lineIndex));
                });
            });
            // 修正旋转角度和原点坐标
            ctx.rotate(getAngle(360) - currMiddleDeg - getAngle(90));
            ctx.translate(-x, -y);
        });
        ctx.restore();
        // 绘制按钮
        this.buttons.forEach(function (btn, btnIndex) {
            var radius = _this.getLength(btn.radius, _this.prizeRadius);
            // 绘制背景颜色
            _this.maxBtnRadius = Math.max(_this.maxBtnRadius, radius);
            if (hasBackground(btn.background)) {
                ctx.beginPath();
                ctx.fillStyle = btn.background;
                ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
                ctx.fill();
            }
            // 绘制指针
            if (btn.pointer && hasBackground(btn.background)) {
                ctx.beginPath();
                ctx.fillStyle = btn.background;
                ctx.moveTo(-radius, 0);
                ctx.lineTo(radius, 0);
                ctx.lineTo(0, -radius * 2);
                ctx.closePath();
                ctx.fill();
            }
            // 绘制按钮图片
            btn.imgs && btn.imgs.forEach(function (imgInfo, imgIndex) {
                var btnImg = _this.ImageCache.get(imgInfo.src);
                if (!btnImg)
                    return;
                var _a = _this.computedWidthAndHeight(btnImg, imgInfo, radius * 2, radius * 2), trueWidth = _a[0], trueHeight = _a[1];
                var _b = [_this.getOffsetX(trueWidth) + _this.getLength(imgInfo.left, radius), _this.getLength(imgInfo.top, radius)], xAxis = _b[0], yAxis = _b[1];
                _this.drawImage(ctx, btnImg, xAxis, yAxis, trueWidth, trueHeight);
            });
            // 绘制按钮文字
            btn.fonts && btn.fonts.forEach(function (font) {
                var fontColor = font.fontColor || _defaultStyle.fontColor;
                var fontWeight = font.fontWeight || _defaultStyle.fontWeight;
                var fontSize = _this.getLength(font.fontSize || _defaultStyle.fontSize);
                var fontStyle = font.fontStyle || _defaultStyle.fontStyle;
                ctx.fillStyle = fontColor;
                ctx.font = "".concat(fontWeight, " ").concat(fontSize >> 0, "px ").concat(fontStyle);
                String(font.text).split('\n').forEach(function (line, lineIndex) {
                    ctx.fillText(line, getFontX(font, line), getFontY(font, radius, lineIndex));
                });
            });
        });
        // 触发绘制后回调
        (_b = config.afterDraw) === null || _b === void 0 ? void 0 : _b.call(this, ctx);
    };
    /**
     * 刻舟求剑
     */
    LuckyWheel.prototype.carveOnGunwaleOfAMovingBoat = function () {
        var _a = this, _defaultConfig = _a._defaultConfig, prizeFlag = _a.prizeFlag, prizeDeg = _a.prizeDeg, rotateDeg = _a.rotateDeg;
        this.endTime = Date.now();
        var stopDeg = this.stopDeg = rotateDeg;
        var speed = _defaultConfig.speed;
        var stopRange = (Math.random() * prizeDeg - prizeDeg / 2) * this.getLength(_defaultConfig.stopRange);
        var i = 0, prevSpeed = 0, prevDeg = 0;
        while (++i) {
            var endDeg = 360 * i - prizeFlag * prizeDeg - rotateDeg - _defaultConfig.offsetDegree + stopRange - prizeDeg / 2;
            var currSpeed = quad.easeOut(this.FPS, stopDeg, endDeg, _defaultConfig.decelerationTime) - stopDeg;
            if (currSpeed > speed) {
                this.endDeg = (speed - prevSpeed > currSpeed - speed) ? endDeg : prevDeg;
                break;
            }
            prevDeg = endDeg;
            prevSpeed = currSpeed;
        }
    };
    /**
     * 对外暴露: 开始抽奖方法
     */
    LuckyWheel.prototype.play = function () {
        var _a, _b;
        if (this.step !== 0)
            return;
        // 记录游戏开始时间
        this.startTime = Date.now();
        // 重置中奖索引
        this.prizeFlag = void 0;
        // 加速阶段
        this.step = 1;
        // 触发回调
        (_b = (_a = this.config).afterStart) === null || _b === void 0 ? void 0 : _b.call(_a);
        // 开始游戏
        this.run();
    };
    /**
     * 对外暴露: 缓慢停止方法
     * @param index 中奖索引
     */
    LuckyWheel.prototype.stop = function (index) {
        if (this.step === 0 || this.step === 3)
            return;
        // 如果没有传递中奖索引, 则通过range属性计算一个
        if (!index && index !== 0) {
            var rangeArr = this.prizes.map(function (item) { return item.range; });
            index = computeRange(rangeArr);
        }
        // 如果index是负数则停止游戏, 反之则传递中奖索引
        if (index < 0) {
            this.step = 0;
            this.prizeFlag = -1;
        }
        else {
            this.step = 2;
            this.prizeFlag = index % this.prizes.length;
        }
    };
    /**
     * 实际开始执行方法
     * @param num 记录帧动画执行多少次
     */
    LuckyWheel.prototype.run = function (num) {
        var _a;
        if (num === void 0) { num = 0; }
        var _b = this, rAF = _b.rAF, step = _b.step, prizeFlag = _b.prizeFlag, _defaultConfig = _b._defaultConfig;
        var accelerationTime = _defaultConfig.accelerationTime, decelerationTime = _defaultConfig.decelerationTime, speed = _defaultConfig.speed;
        // 游戏结束
        if (step === 0) {
            (_a = this.endCallback) === null || _a === void 0 ? void 0 : _a.call(this, this.prizes.find(function (prize, index) { return index === prizeFlag; }) || {});
            return;
        }
        // 如果等于 -1 就直接停止游戏
        if (prizeFlag === -1)
            return;
        // 计算结束位置
        if (step === 3 && !this.endDeg)
            this.carveOnGunwaleOfAMovingBoat();
        // 计算时间间隔
        var startInterval = Date.now() - this.startTime;
        var endInterval = Date.now() - this.endTime;
        var rotateDeg = this.rotateDeg;
        // 
        if (step === 1 || startInterval < accelerationTime) { // 加速阶段
            // 记录帧率
            this.FPS = startInterval / num;
            var currSpeed = quad.easeIn(startInterval, 0, speed, accelerationTime);
            // 加速到峰值后, 进入匀速阶段
            if (currSpeed === speed) {
                this.step = 2;
            }
            rotateDeg = rotateDeg + currSpeed % 360;
        }
        else if (step === 2) { // 匀速阶段
            // 速度保持不变
            rotateDeg = rotateDeg + speed % 360;
            // 如果 prizeFlag 有值, 则进入减速阶段
            if (prizeFlag !== void 0 && prizeFlag >= 0) {
                this.step = 3;
                // 清空上一次的位置信息
                this.stopDeg = 0;
                this.endDeg = 0;
            }
        }
        else if (step === 3) { // 减速阶段
            // 开始缓慢停止
            rotateDeg = quad.easeOut(endInterval, this.stopDeg, this.endDeg, decelerationTime);
            if (endInterval >= decelerationTime) {
                this.step = 0;
            }
        }
        else {
            // 出现异常
            this.stop(-1);
        }
        this.rotateDeg = rotateDeg;
        this.draw();
        rAF(this.run.bind(this, num + 1));
    };
    /**
     * 换算渲染坐标
     * @param x
     * @param y
     */
    LuckyWheel.prototype.conversionAxis = function (x, y) {
        var config = this.config;
        return [x / config.dpr - this.Radius, y / config.dpr - this.Radius];
    };
    return LuckyWheel;
}(Lucky));

var LuckyGrid = /** @class */ (function (_super) {
    __extends(LuckyGrid, _super);
    /**
     * 九宫格构造器
     * @param config 配置项
     * @param data 抽奖数据
     */
    function LuckyGrid(config, data) {
        var _this = this;
        var _a;
        _this = _super.call(this, config, {
            width: data.width,
            height: data.height
        }) || this;
        _this.rows = 3;
        _this.cols = 3;
        _this.blocks = [];
        _this.prizes = [];
        _this.buttons = [];
        _this.defaultConfig = {};
        _this.defaultStyle = {};
        _this.activeStyle = {};
        _this._defaultConfig = {};
        _this._defaultStyle = {};
        _this._activeStyle = {};
        _this.cellWidth = 0; // 格子宽度
        _this.cellHeight = 0; // 格子高度
        _this.startTime = 0; // 开始时间戳
        _this.endTime = 0; // 结束时间戳
        _this.currIndex = 0; // 当前index累加
        _this.stopIndex = 0; // 刻舟求剑
        _this.endIndex = 0; // 停止索引
        _this.demo = false; // 是否自动游走
        _this.timer = 0; // 游走定时器
        _this.FPS = 16.6; // 屏幕刷新率
        /**
         * 游戏当前的阶段
         * step = 0 时, 游戏尚未开始
         * step = 1 时, 此时处于加速阶段
         * step = 2 时, 此时处于匀速阶段
         * step = 3 时, 此时处于减速阶段
         */
        _this.step = 0;
        /**
         * 中奖索引
         * prizeFlag = undefined 时, 处于开始抽奖阶段, 正常旋转
         * prizeFlag >= 0 时, 说明stop方法被调用, 并且传入了中奖索引
         * prizeFlag === -1 时, 说明stop方法被调用, 并且传入了负值, 本次抽奖无效
         */
        _this.prizeFlag = -1;
        // 所有格子
        _this.cells = [];
        // 图片缓存
        _this.ImageCache = new Map();
        _this.initData(data);
        _this.initWatch();
        _this.initComputed();
        // 创建前回调函数
        (_a = config.beforeCreate) === null || _a === void 0 ? void 0 : _a.call(_this);
        // 首次初始化
        _this.init();
        return _this;
    }
    LuckyGrid.prototype.resize = function () {
        var _a, _b;
        _super.prototype.resize.call(this);
        this.draw();
        (_b = (_a = this.config).afterResize) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    LuckyGrid.prototype.initLucky = function () {
        this.cellWidth = 0;
        this.cellHeight = 0;
        this.startTime = 0;
        this.endTime = 0;
        this.currIndex = 0;
        this.stopIndex = 0;
        this.endIndex = 0;
        this.demo = false;
        this.timer = 0;
        this.FPS = 16.6;
        this.prizeFlag = -1;
        this.step = 0;
        _super.prototype.initLucky.call(this);
    };
    /**
     * 初始化数据
     * @param data
     */
    LuckyGrid.prototype.initData = function (data) {
        this.$set(this, 'width', data.width);
        this.$set(this, 'height', data.height);
        this.$set(this, 'rows', Number(data.rows) || 3);
        this.$set(this, 'cols', Number(data.cols) || 3);
        this.$set(this, 'blocks', data.blocks || []);
        this.$set(this, 'prizes', data.prizes || []);
        this.$set(this, 'buttons', data.buttons || []);
        // 临时过渡代码, 升级到2.x即可删除
        this.$set(this, 'button', data.button);
        this.$set(this, 'defaultConfig', data.defaultConfig || {});
        this.$set(this, 'defaultStyle', data.defaultStyle || {});
        this.$set(this, 'activeStyle', data.activeStyle || {});
        this.$set(this, 'startCallback', data.start);
        this.$set(this, 'endCallback', data.end);
    };
    /**
     * 初始化属性计算
     */
    LuckyGrid.prototype.initComputed = function () {
        var _this = this;
        // 默认配置
        this.$computed(this, '_defaultConfig', function () {
            var config = __assign({ gutter: 5, speed: 20, accelerationTime: 2500, decelerationTime: 2500 }, _this.defaultConfig);
            config.gutter = _this.getLength(config.gutter);
            config.speed = config.speed / 40;
            return config;
        });
        // 默认样式
        this.$computed(this, '_defaultStyle', function () {
            return __assign({ borderRadius: 20, fontColor: '#000', fontSize: '18px', fontStyle: 'sans-serif', fontWeight: '400', background: 'rgba(0,0,0,0)', shadow: '', wordWrap: true, lengthLimit: '90%' }, _this.defaultStyle);
        });
        // 中奖样式
        this.$computed(this, '_activeStyle', function () {
            return __assign({ background: '#ffce98', shadow: '' }, _this.activeStyle);
        });
    };
    /**
     * 初始化观察者
     */
    LuckyGrid.prototype.initWatch = function () {
        var _this = this;
        // 重置宽度
        this.$watch('width', function (newVal) {
            _this.data.width = newVal;
            _this.resize();
        });
        // 重置高度
        this.$watch('height', function (newVal) {
            _this.data.height = newVal;
            _this.resize();
        });
        // 监听 blocks 数据的变化
        this.$watch('blocks', function (newData) {
            _this.initImageCache();
        }, { deep: true });
        // 监听 prizes 数据的变化
        this.$watch('prizes', function (newData) {
            _this.initImageCache();
        }, { deep: true });
        // 监听 button 数据的变化
        this.$watch('buttons', function (newData) {
            _this.initImageCache();
        }, { deep: true });
        this.$watch('rows', function () { return _this.init(); });
        this.$watch('cols', function () { return _this.init(); });
        this.$watch('defaultConfig', function () { return _this.draw(); }, { deep: true });
        this.$watch('defaultStyle', function () { return _this.draw(); }, { deep: true });
        this.$watch('activeStyle', function () { return _this.draw(); }, { deep: true });
        this.$watch('startCallback', function () { return _this.init(); });
        this.$watch('endCallback', function () { return _this.init(); });
    };
    /**
     * 初始化 canvas 抽奖
     */
    LuckyGrid.prototype.init = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.initLucky();
                        config = this.config;
                        // 初始化前回调函数
                        (_a = config.beforeInit) === null || _a === void 0 ? void 0 : _a.call(this);
                        // 先画一次防止闪烁
                        this.draw();
                        // 异步加载图片
                        return [4 /*yield*/, this.initImageCache()
                            // 初始化后回调函数
                        ];
                    case 1:
                        // 异步加载图片
                        _c.sent();
                        // 初始化后回调函数
                        (_b = config.afterInit) === null || _b === void 0 ? void 0 : _b.call(this);
                        return [2 /*return*/];
                }
            });
        });
    };
    LuckyGrid.prototype.initImageCache = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var btnImgs = _this.buttons.map(function (btn) { return btn.imgs; });
            if (_this.button)
                btnImgs.push(_this.button.imgs);
            var willUpdateImgs = {
                blocks: _this.blocks.map(function (block) { return block.imgs; }),
                prizes: _this.prizes.map(function (prize) { return prize.imgs; }),
                buttons: btnImgs,
            };
            Object.keys(willUpdateImgs).forEach(function (imgName) {
                var willUpdate = willUpdateImgs[imgName];
                // 循环遍历所有图片
                var allPromise = [];
                willUpdate && willUpdate.forEach(function (imgs, cellIndex) {
                    imgs && imgs.forEach(function (imgInfo, imgIndex) {
                        allPromise.push(_this.loadAndCacheImg(imgName, cellIndex, imgIndex));
                    });
                });
                Promise.all(allPromise).then(function () {
                    _this.draw();
                    resolve();
                });
            });
        });
    };
    /**
     * canvas点击事件
     * @param e 事件参数
     */
    LuckyGrid.prototype.handleClick = function (e) {
        var _this = this;
        var ctx = this.ctx;
        __spreadArray(__spreadArray([], this.buttons, true), [
            this.button
        ], false).forEach(function (btn) {
            var _a;
            if (!btn)
                return;
            var _b = _this.getGeometricProperty([
                btn.x, btn.y, btn.col || 1, btn.row || 1
            ]), x = _b[0], y = _b[1], width = _b[2], height = _b[3];
            ctx.beginPath();
            ctx.rect(x, y, width, height);
            if (!ctx.isPointInPath(e.offsetX, e.offsetY))
                return;
            if (_this.step !== 0)
                return;
            // 如果btn里有单独的回调方法, 优先触发
            if (typeof btn.callback === 'function')
                btn.callback.call(_this, btn);
            // 最后触发公共回调
            (_a = _this.startCallback) === null || _a === void 0 ? void 0 : _a.call(_this, e, btn);
        });
    };
    /**
     * 根据索引单独加载指定图片并缓存
     * @param cellName 模块名称
     * @param cellIndex 模块索引
     * @param imgName 模块对应的图片缓存
     * @param imgIndex 图片索引
     */
    LuckyGrid.prototype.loadAndCacheImg = function (cellName, cellIndex, imgIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var cell = _this[cellName][cellIndex];
                        // 临时过渡代码, 升级到2.x即可删除
                        if (cellName === 'buttons' && !_this.buttons.length && _this.button) {
                            cell = _this.button;
                        }
                        if (!cell || !cell.imgs)
                            return;
                        var imgInfo = cell.imgs[imgIndex];
                        if (!imgInfo)
                            return;
                        // 异步加载图片
                        var request = [
                            _this.loadImg(imgInfo.src, imgInfo),
                            imgInfo['activeSrc'] && _this.loadImg(imgInfo['activeSrc'], imgInfo, '$activeResolve')
                        ];
                        Promise.all(request).then(function (_a) {
                            var defaultImg = _a[0], activeImg = _a[1];
                            return __awaiter(_this, void 0, void 0, function () {
                                var formatter;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            formatter = imgInfo.formatter;
                                            if (!(typeof formatter === 'function')) return [3 /*break*/, 3];
                                            return [4 /*yield*/, Promise.resolve(formatter.call(this, defaultImg))];
                                        case 1:
                                            defaultImg = _b.sent();
                                            if (!activeImg) return [3 /*break*/, 3];
                                            return [4 /*yield*/, Promise.resolve(formatter.call(this, activeImg))];
                                        case 2:
                                            activeImg = _b.sent();
                                            _b.label = 3;
                                        case 3:
                                            this.ImageCache.set(imgInfo['src'], defaultImg);
                                            activeImg && this.ImageCache.set(imgInfo['activeSrc'], activeImg);
                                            resolve();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }).catch(function (err) {
                            console.error("".concat(cellName, "[").concat(cellIndex, "].imgs[").concat(imgIndex, "] ").concat(err));
                            reject();
                        });
                    })];
            });
        });
    };
    /**
     * 绘制九宫格抽奖
     */
    LuckyGrid.prototype.draw = function () {
        var _this = this;
        var _a, _b;
        var _c = this, config = _c.config, ctx = _c.ctx, _defaultConfig = _c._defaultConfig, _defaultStyle = _c._defaultStyle, _activeStyle = _c._activeStyle;
        // 触发绘制前回调
        (_a = config.beforeDraw) === null || _a === void 0 ? void 0 : _a.call(this, ctx);
        // 清空画布
        ctx.clearRect(0, 0, this.boxWidth, this.boxHeight);
        // 合并奖品和按钮
        this.cells = __spreadArray(__spreadArray([], this.prizes, true), this.buttons, true);
        if (this.button)
            this.cells.push(this.button);
        this.cells.forEach(function (cell) {
            cell.col = cell.col || 1;
            cell.row = cell.row || 1;
        });
        // 计算获取奖品区域的几何信息
        this.prizeArea = this.blocks.reduce(function (_a, block, blockIndex) {
            var x = _a.x, y = _a.y, w = _a.w, h = _a.h;
            var _b = computePadding(block, _this.getLength.bind(_this)), paddingTop = _b[0], paddingBottom = _b[1], paddingLeft = _b[2], paddingRight = _b[3];
            var r = block.borderRadius ? _this.getLength(block.borderRadius) : 0;
            // 绘制边框
            var background = block.background;
            if (hasBackground(background)) {
                ctx.fillStyle = _this.handleBackground(x, y, w, h, background);
                roundRectByArc(ctx, x, y, w, h, r);
                ctx.fill();
            }
            // 绘制图片
            block.imgs && block.imgs.forEach(function (imgInfo, imgIndex) {
                var blockImg = _this.ImageCache.get(imgInfo.src);
                if (!blockImg)
                    return;
                // 绘制图片
                var _a = _this.computedWidthAndHeight(blockImg, imgInfo, w, h), trueWidth = _a[0], trueHeight = _a[1];
                var _b = [
                    _this.getOffsetX(trueWidth, w) + _this.getLength(imgInfo.left, w),
                    _this.getLength(imgInfo.top, h)
                ], xAxis = _b[0], yAxis = _b[1];
                _this.drawImage(ctx, blockImg, x + xAxis, y + yAxis, trueWidth, trueHeight);
            });
            return {
                x: x + paddingLeft,
                y: y + paddingTop,
                w: w - paddingLeft - paddingRight,
                h: h - paddingTop - paddingBottom
            };
        }, { x: 0, y: 0, w: this.boxWidth, h: this.boxHeight });
        // 计算单一奖品格子的宽度和高度
        this.cellWidth = (this.prizeArea.w - _defaultConfig.gutter * (this.cols - 1)) / this.cols;
        this.cellHeight = (this.prizeArea.h - _defaultConfig.gutter * (this.rows - 1)) / this.rows;
        // 绘制所有格子
        this.cells.forEach(function (cell, cellIndex) {
            var _a = _this.getGeometricProperty([cell.x, cell.y, cell.col, cell.row]), x = _a[0], y = _a[1], width = _a[2], height = _a[3];
            // 默认不显示中奖标识
            var isActive = false;
            // 只要 prizeFlag 不是负数, 就显示中奖标识
            if (_this.prizeFlag === void 0 || _this.prizeFlag > -1) {
                isActive = cellIndex === _this.currIndex % _this.prizes.length >> 0;
            }
            // 绘制背景色
            var background = isActive ? _activeStyle.background : (cell.background || _defaultStyle.background);
            if (hasBackground(background)) {
                // 处理阴影 (暂时先用any, 这里后续要优化)
                var shadow = (isActive ? _activeStyle.shadow : (cell.shadow || _defaultStyle.shadow))
                    .replace(/px/g, '') // 清空px字符串
                    .split(',')[0].split(' ') // 防止有人声明多个阴影, 截取第一个阴影
                    .map(function (n, i) { return i < 3 ? Number(n) : n; }); // 把数组的前三个值*像素比
                // 绘制阴影
                if (shadow.length === 4) {
                    ctx.shadowColor = shadow[3];
                    ctx.shadowOffsetX = shadow[0] * config.dpr;
                    ctx.shadowOffsetY = shadow[1] * config.dpr;
                    ctx.shadowBlur = shadow[2];
                    // 修正(格子+阴影)的位置, 这里使用逗号运算符
                    shadow[0] > 0 ? (width -= shadow[0]) : (width += shadow[0], x -= shadow[0]);
                    shadow[1] > 0 ? (height -= shadow[1]) : (height += shadow[1], y -= shadow[1]);
                }
                // 绘制背景
                ctx.fillStyle = _this.handleBackground(x, y, width, height, background);
                var borderRadius = _this.getLength(cell.borderRadius ? cell.borderRadius : _defaultStyle.borderRadius);
                roundRectByArc(ctx, x, y, width, height, borderRadius);
                ctx.fill();
                // 清空阴影
                ctx.shadowColor = 'rgba(0, 0, 0, 0)';
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 0;
            }
            if (cellIndex >= _this.prizes.length) {
                cellIndex -= _this.prizes.length;
            }
            // 绘制图片
            cell.imgs && cell.imgs.forEach(function (imgInfo, imgIndex) {
                var cellImg = _this.ImageCache.get(imgInfo.src);
                var activeImg = _this.ImageCache.get(imgInfo['activeSrc']);
                if (!cellImg)
                    return;
                var renderImg = (isActive && activeImg) || cellImg;
                if (!renderImg)
                    return;
                var _a = _this.computedWidthAndHeight(renderImg, imgInfo, width, height), trueWidth = _a[0], trueHeight = _a[1];
                var _b = [
                    x + _this.getOffsetX(trueWidth, width) + _this.getLength(imgInfo.left, width),
                    y + _this.getLength(imgInfo.top, height)
                ], xAxis = _b[0], yAxis = _b[1];
                _this.drawImage(ctx, renderImg, xAxis, yAxis, trueWidth, trueHeight);
            });
            // 绘制文字
            cell.fonts && cell.fonts.forEach(function (font) {
                // 字体样式
                var style = isActive && _activeStyle.fontStyle
                    ? _activeStyle.fontStyle
                    : (font.fontStyle || _defaultStyle.fontStyle);
                // 字体加粗
                var fontWeight = isActive && _activeStyle.fontWeight
                    ? _activeStyle.fontWeight
                    : (font.fontWeight || _defaultStyle.fontWeight);
                // 字体大小
                var size = isActive && _activeStyle.fontSize
                    ? _this.getLength(_activeStyle.fontSize)
                    : _this.getLength(font.fontSize || _defaultStyle.fontSize);
                // 字体行高
                var lineHeight = isActive && _activeStyle.lineHeight
                    ? _activeStyle.lineHeight
                    : font.lineHeight || _defaultStyle.lineHeight || font.fontSize || _defaultStyle.fontSize;
                var wordWrap = has(font, 'wordWrap') ? font.wordWrap : _defaultStyle.wordWrap;
                var lengthLimit = font.lengthLimit || _defaultStyle.lengthLimit;
                var lineClamp = font.lineClamp || _defaultStyle.lineClamp;
                ctx.font = "".concat(fontWeight, " ").concat(size >> 0, "px ").concat(style);
                ctx.fillStyle = (isActive && _activeStyle.fontColor) ? _activeStyle.fontColor : (font.fontColor || _defaultStyle.fontColor);
                var lines = [], text = String(font.text);
                // 计算文字换行
                if (wordWrap) {
                    // 最大宽度
                    var maxWidth_1 = _this.getLength(lengthLimit, width);
                    lines = splitText(ctx, removeEnter(text), function () { return maxWidth_1; }, lineClamp);
                }
                else {
                    lines = text.split('\n');
                }
                lines.forEach(function (line, lineIndex) {
                    ctx.fillText(line, x + _this.getOffsetX(ctx.measureText(line).width, width) + _this.getLength(font.left, width), y + _this.getLength(font.top, height) + (lineIndex + 1) * _this.getLength(lineHeight));
                });
            });
        });
        // 触发绘制后回调
        (_b = config.afterDraw) === null || _b === void 0 ? void 0 : _b.call(this, ctx);
    };
    /**
     * 处理背景色
     * @param x
     * @param y
     * @param width
     * @param height
     * @param background
     * @param isActive
     */
    LuckyGrid.prototype.handleBackground = function (x, y, width, height, background) {
        var ctx = this.ctx;
        // 处理线性渐变
        if (background.includes('linear-gradient')) {
            background = getLinearGradient(ctx, x, y, width, height, background);
        }
        return background;
    };
    /**
     * 刻舟求剑
     */
    LuckyGrid.prototype.carveOnGunwaleOfAMovingBoat = function () {
        var _a = this, _defaultConfig = _a._defaultConfig, prizeFlag = _a.prizeFlag, currIndex = _a.currIndex;
        this.endTime = Date.now();
        var stopIndex = this.stopIndex = currIndex;
        var speed = _defaultConfig.speed;
        var i = 0, prevSpeed = 0, prevIndex = 0;
        while (++i) {
            var endIndex = this.prizes.length * i + prizeFlag - (stopIndex);
            var currSpeed = quad.easeOut(this.FPS, stopIndex, endIndex, _defaultConfig.decelerationTime) - stopIndex;
            if (currSpeed > speed) {
                this.endIndex = (speed - prevSpeed > currSpeed - speed) ? endIndex : prevIndex;
                break;
            }
            prevIndex = endIndex;
            prevSpeed = currSpeed;
        }
    };
    /**
     * 对外暴露: 开始抽奖方法
     */
    LuckyGrid.prototype.play = function () {
        var _a, _b;
        if (this.step !== 0)
            return;
        // 记录游戏开始的时间
        this.startTime = Date.now();
        // 重置中奖索引
        this.prizeFlag = void 0;
        // 开始加速
        this.step = 1;
        // 触发回调
        (_b = (_a = this.config).afterStart) === null || _b === void 0 ? void 0 : _b.call(_a);
        // 开始运行
        this.run();
    };
    /**
     * 对外暴露: 缓慢停止方法
     * @param index 中奖索引
     */
    LuckyGrid.prototype.stop = function (index) {
        if (this.step === 0 || this.step === 3)
            return;
        // 如果没有传递中奖索引, 则通过range属性计算一个
        if (!index && index !== 0) {
            var rangeArr = this.prizes.map(function (item) { return item.range; });
            index = computeRange(rangeArr);
        }
        // 如果index是负数则停止游戏, 反之则传递中奖索引
        if (index < 0) {
            this.step = 0;
            this.prizeFlag = -1;
        }
        else {
            this.step = 2;
            this.prizeFlag = index % this.prizes.length;
        }
    };
    /**
     * 实际开始执行方法
     * @param num 记录帧动画执行多少次
     */
    LuckyGrid.prototype.run = function (num) {
        var _a;
        if (num === void 0) { num = 0; }
        var _b = this, rAF = _b.rAF, step = _b.step, prizes = _b.prizes, prizeFlag = _b.prizeFlag, _defaultConfig = _b._defaultConfig;
        var accelerationTime = _defaultConfig.accelerationTime, decelerationTime = _defaultConfig.decelerationTime, speed = _defaultConfig.speed;
        // 结束游戏
        if (step === 0) {
            (_a = this.endCallback) === null || _a === void 0 ? void 0 : _a.call(this, this.prizes.find(function (prize, index) { return index === prizeFlag; }) || {});
            return;
        }
        // 如果等于 -1 就直接停止游戏
        if (prizeFlag === -1)
            return;
        // 计算结束位置
        if (step === 3 && !this.endIndex)
            this.carveOnGunwaleOfAMovingBoat();
        // 计算时间间隔
        var startInterval = Date.now() - this.startTime;
        var endInterval = Date.now() - this.endTime;
        var currIndex = this.currIndex;
        // 
        if (step === 1 || startInterval < accelerationTime) { // 加速阶段
            // 记录帧率
            this.FPS = startInterval / num;
            var currSpeed = quad.easeIn(startInterval, 0.1, speed - 0.1, accelerationTime);
            // 加速到峰值后, 进入匀速阶段
            if (currSpeed === speed) {
                this.step = 2;
            }
            currIndex = currIndex + currSpeed % prizes.length;
        }
        else if (step === 2) { // 匀速阶段
            // 速度保持不变
            currIndex = currIndex + speed % prizes.length;
            // 如果 prizeFlag 有值, 则进入减速阶段
            if (prizeFlag !== void 0 && prizeFlag >= 0) {
                this.step = 3;
                // 清空上一次的位置信息
                this.stopIndex = 0;
                this.endIndex = 0;
            }
        }
        else if (step === 3) { // 减速阶段
            // 开始缓慢停止
            currIndex = quad.easeOut(endInterval, this.stopIndex, this.endIndex, decelerationTime);
            if (endInterval >= decelerationTime) {
                this.step = 0;
            }
        }
        else {
            // 出现异常
            this.stop(-1);
        }
        this.currIndex = currIndex;
        this.draw();
        rAF(this.run.bind(this, num + 1));
    };
    /**
     * 计算奖品格子的几何属性
     * @param { array } [...矩阵坐标, col, row]
     * @return { array } [...真实坐标, width, height]
     */
    LuckyGrid.prototype.getGeometricProperty = function (_a) {
        var x = _a[0], y = _a[1], _b = _a[2], col = _b === void 0 ? 1 : _b, _c = _a[3], row = _c === void 0 ? 1 : _c;
        var _d = this, cellWidth = _d.cellWidth, cellHeight = _d.cellHeight;
        var gutter = this._defaultConfig.gutter;
        var res = [
            this.prizeArea.x + (cellWidth + gutter) * x,
            this.prizeArea.y + (cellHeight + gutter) * y
        ];
        col && row && res.push(cellWidth * col + gutter * (col - 1), cellHeight * row + gutter * (row - 1));
        return res;
    };
    /**
     * 换算渲染坐标
     * @param x
     * @param y
     */
    LuckyGrid.prototype.conversionAxis = function (x, y) {
        var config = this.config;
        return [x / config.dpr, y / config.dpr];
    };
    return LuckyGrid;
}(Lucky));

var SlotMachine = /** @class */ (function (_super) {
    __extends(SlotMachine, _super);
    /**
     * 老虎机构造器
     * @param config 配置项
     * @param data 抽奖数据
     */
    function SlotMachine(config, data) {
        var _this = this;
        var _a;
        _this = _super.call(this, config, {
            width: data.width,
            height: data.height
        }) || this;
        // 背景
        _this.blocks = [];
        // 奖品列表
        _this.prizes = [];
        // 插槽列表
        _this.slots = [];
        // 默认配置
        _this.defaultConfig = {};
        _this._defaultConfig = {};
        // 默认样式
        _this.defaultStyle = {};
        _this._defaultStyle = {};
        _this.endCallback = function () { };
        _this.cellWidth = 0; // 格子宽度
        _this.cellHeight = 0; // 格子高度
        _this.cellAndSpacing = 0; // 格子+间距
        _this.widthAndSpacing = 0; // 格子宽度+列间距
        _this.heightAndSpacing = 0; // 格子高度+行间距
        _this.FPS = 16.6; // 屏幕刷新率
        _this.scroll = []; // 滚动的长度
        _this.stopScroll = []; // 刻舟求剑
        _this.endScroll = []; // 最终停止的长度
        _this.startTime = 0; // 开始游戏的时间
        _this.endTime = 0; // 开始停止的时间
        /**
         * 游戏当前的阶段
         * step = 0 时, 游戏尚未开始
         * step = 1 时, 此时处于加速阶段
         * step = 2 时, 此时处于匀速阶段
         * step = 3 时, 此时处于减速阶段
         */
        _this.step = 0;
        /**
         * 中奖索引
         * prizeFlag = undefined 时, 处于开始抽奖阶段, 正常旋转
         * prizeFlag >= 0 时, 说明stop方法被调用, 并且传入了中奖索引
         * prizeFlag === -1 时, 说明stop方法被调用, 并且传入了负值, 本次抽奖无效
         */
        _this.prizeFlag = void 0;
        // 图片缓存
        _this.ImageCache = new Map();
        _this.initData(data);
        _this.initWatch();
        _this.initComputed();
        // 创建前回调函数
        (_a = config.beforeCreate) === null || _a === void 0 ? void 0 : _a.call(_this);
        // 首次初始化
        _this.init();
        return _this;
    }
    SlotMachine.prototype.resize = function () {
        var _a, _b;
        _super.prototype.resize.call(this);
        this.draw();
        (_b = (_a = this.config).afterResize) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    SlotMachine.prototype.initLucky = function () {
        this.cellWidth = 0;
        this.cellHeight = 0;
        this.cellAndSpacing = 0;
        this.widthAndSpacing = 0;
        this.heightAndSpacing = 0;
        this.FPS = 16.6;
        this.scroll = [];
        this.stopScroll = [];
        this.endScroll = [];
        this.startTime = 0;
        this.endTime = 0;
        this.prizeFlag = void 0;
        this.step = 0;
        _super.prototype.initLucky.call(this);
    };
    /**
     * 初始化数据
     * @param data
     */
    SlotMachine.prototype.initData = function (data) {
        this.$set(this, 'width', data.width);
        this.$set(this, 'height', data.height);
        this.$set(this, 'blocks', data.blocks || []);
        this.$set(this, 'prizes', data.prizes || []);
        this.$set(this, 'slots', data.slots || []);
        this.$set(this, 'defaultConfig', data.defaultConfig || {});
        this.$set(this, 'defaultStyle', data.defaultStyle || {});
        this.$set(this, 'endCallback', data.end);
    };
    /**
     * 初始化属性计算
     */
    SlotMachine.prototype.initComputed = function () {
        var _this = this;
        // 默认配置
        this.$computed(this, '_defaultConfig', function () {
            var config = __assign({ mode: 'vertical', rowSpacing: 0, colSpacing: 5, speed: 20, direction: 1, accelerationTime: 2500, decelerationTime: 2500 }, _this.defaultConfig);
            config.rowSpacing = _this.getLength(config.rowSpacing);
            config.colSpacing = _this.getLength(config.colSpacing);
            return config;
        });
        // 默认样式
        this.$computed(this, '_defaultStyle', function () {
            return __assign({ borderRadius: 0, fontColor: '#000', fontSize: '18px', fontStyle: 'sans-serif', fontWeight: '400', background: 'rgba(0,0,0,0)', wordWrap: true, lengthLimit: '90%' }, _this.defaultStyle);
        });
    };
    /**
     * 初始化观察者
     */
    SlotMachine.prototype.initWatch = function () {
        var _this = this;
        // 重置宽度
        this.$watch('width', function (newVal) {
            _this.data.width = newVal;
            _this.resize();
        });
        // 重置高度
        this.$watch('height', function (newVal) {
            _this.data.height = newVal;
            _this.resize();
        });
        // 监听 blocks 数据的变化
        this.$watch('blocks', function (newData) {
            _this.initImageCache();
        }, { deep: true });
        // 监听 prizes 数据的变化
        this.$watch('prizes', function (newData) {
            _this.initImageCache();
        }, { deep: true });
        // 监听 prizes 数据的变化
        this.$watch('slots', function (newData) {
            _this.drawOffscreenCanvas();
            _this.draw();
        }, { deep: true });
        this.$watch('defaultConfig', function () { return _this.draw(); }, { deep: true });
        this.$watch('defaultStyle', function () { return _this.draw(); }, { deep: true });
        this.$watch('endCallback', function () { return _this.init(); });
    };
    /**
     * 初始化 canvas 抽奖
     */
    SlotMachine.prototype.init = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.initLucky();
                        config = this.config;
                        // 初始化前回调函数
                        (_a = config.beforeInit) === null || _a === void 0 ? void 0 : _a.call(this);
                        // 先绘制一次
                        this.drawOffscreenCanvas();
                        this.draw();
                        // 异步加载图片
                        return [4 /*yield*/, this.initImageCache()
                            // 初始化后回调函数
                        ];
                    case 1:
                        // 异步加载图片
                        _c.sent();
                        // 初始化后回调函数
                        (_b = config.afterInit) === null || _b === void 0 ? void 0 : _b.call(this);
                        return [2 /*return*/];
                }
            });
        });
    };
    SlotMachine.prototype.initImageCache = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var willUpdateImgs = {
                blocks: _this.blocks.map(function (block) { return block.imgs; }),
                prizes: _this.prizes.map(function (prize) { return prize.imgs; }),
            };
            Object.keys(willUpdateImgs).forEach(function (imgName) {
                var willUpdate = willUpdateImgs[imgName];
                // 循环遍历所有图片
                var allPromise = [];
                willUpdate && willUpdate.forEach(function (imgs, cellIndex) {
                    imgs && imgs.forEach(function (imgInfo, imgIndex) {
                        allPromise.push(_this.loadAndCacheImg(imgName, cellIndex, imgIndex));
                    });
                });
                Promise.all(allPromise).then(function () {
                    _this.drawOffscreenCanvas();
                    _this.draw();
                    resolve();
                });
            });
        });
    };
    /**
     * 根据索引单独加载指定图片并缓存
     * @param cellName 模块名称
     * @param cellIndex 模块索引
     * @param imgName 模块对应的图片缓存
     * @param imgIndex 图片索引
     */
    SlotMachine.prototype.loadAndCacheImg = function (cellName, cellIndex, imgIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var cell = _this[cellName][cellIndex];
                        if (!cell || !cell.imgs)
                            return;
                        var imgInfo = cell.imgs[imgIndex];
                        if (!imgInfo)
                            return;
                        // 异步加载图片
                        _this.loadImg(imgInfo.src, imgInfo).then(function (currImg) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(typeof imgInfo.formatter === 'function')) return [3 /*break*/, 2];
                                        return [4 /*yield*/, Promise.resolve(imgInfo.formatter.call(this, currImg))];
                                    case 1:
                                        currImg = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        this.ImageCache.set(imgInfo['src'], currImg);
                                        resolve();
                                        return [2 /*return*/];
                                }
                            });
                        }); }).catch(function (err) {
                            console.error("".concat(cellName, "[").concat(cellIndex, "].imgs[").concat(imgIndex, "] ").concat(err));
                            reject();
                        });
                    })];
            });
        });
    };
    /**
     * 绘制离屏canvas
     */
    SlotMachine.prototype.drawOffscreenCanvas = function () {
        var _this = this;
        var _a = this, _defaultConfig = _a._defaultConfig, _defaultStyle = _a._defaultStyle;
        var _b = this.drawBlocks(), w = _b.w, h = _b.h;
        // 计算单一奖品格子的宽度和高度
        var prizesLen = this.prizes.length;
        var _c = this.displacementWidthOrHeight(), cellWidth = _c.cellWidth, cellHeight = _c.cellHeight, widthAndSpacing = _c.widthAndSpacing, heightAndSpacing = _c.heightAndSpacing;
        var defaultOrder = new Array(prizesLen).fill(void 0).map(function (v, i) { return i; });
        var maxOffWidth = 0, maxOffHeight = 0;
        this.slots.forEach(function (slot, slotIndex) {
            // 初始化 scroll 的值
            if (_this.scroll[slotIndex] === void 0)
                _this.scroll[slotIndex] = 0;
            // 如果没有order属性, 就填充prizes
            slot.order = slot.order || defaultOrder;
            // 计算最大值
            var currLen = slot.order.length;
            maxOffWidth = Math.max(maxOffWidth, w + widthAndSpacing * currLen);
            maxOffHeight = Math.max(maxOffHeight, h + heightAndSpacing * currLen);
        });
        // 创建一个离屏Canvas来存储画布的内容
        var _d = this.getOffscreenCanvas(maxOffWidth, maxOffHeight), _offscreenCanvas = _d._offscreenCanvas, _ctx = _d._ctx;
        this._offscreenCanvas = _offscreenCanvas;
        // 绘制插槽
        this.slots.forEach(function (slot, slotIndex) {
            var cellX = cellWidth * slotIndex;
            var cellY = cellHeight * slotIndex;
            var lengthOfCopy = 0;
            // 绘制奖品
            var newPrizes = getSortedArrayByIndex(_this.prizes, slot.order);
            // 如果没有奖品则打断逻辑
            if (!newPrizes.length)
                return;
            newPrizes.forEach(function (cell, cellIndex) {
                if (!cell)
                    return;
                slot.order[cellIndex];
                var prizesX = widthAndSpacing * cellIndex + _defaultConfig.colSpacing / 2;
                var prizesY = heightAndSpacing * cellIndex + _defaultConfig.rowSpacing / 2;
                var _a = _this.displacement([cellX, prizesY, heightAndSpacing], [prizesX, cellY, widthAndSpacing]), _x = _a[0], _y = _a[1], spacing = _a[2];
                lengthOfCopy += spacing;
                // 绘制背景
                var background = cell.background || _defaultStyle.background;
                if (hasBackground(background)) {
                    var borderRadius = _this.getLength(has(cell, 'borderRadius') ? cell.borderRadius : _defaultStyle.borderRadius);
                    roundRectByArc(_ctx, _x, _y, cellWidth, cellWidth, borderRadius);
                    _ctx.fillStyle = background;
                    _ctx.fill();
                }
                // 绘制图片
                cell.imgs && cell.imgs.forEach(function (imgInfo, imgIndex) {
                    var cellImg = _this.ImageCache.get(imgInfo.src);
                    if (!cellImg)
                        return;
                    var _a = _this.computedWidthAndHeight(cellImg, imgInfo, cellWidth, cellHeight), trueWidth = _a[0], trueHeight = _a[1];
                    var _b = [
                        _x + _this.getOffsetX(trueWidth, cellWidth) + _this.getLength(imgInfo.left, cellWidth),
                        _y + _this.getLength(imgInfo.top, cellHeight)
                    ], xAxis = _b[0], yAxis = _b[1];
                    _this.drawImage(_ctx, cellImg, xAxis, yAxis, trueWidth, trueHeight);
                });
                // 绘制文字
                cell.fonts && cell.fonts.forEach(function (font) {
                    // 字体样式
                    var style = font.fontStyle || _defaultStyle.fontStyle;
                    // 字体加粗
                    var fontWeight = font.fontWeight || _defaultStyle.fontWeight;
                    // 字体大小
                    var size = _this.getLength(font.fontSize || _defaultStyle.fontSize);
                    // 字体行高
                    var lineHeight = font.lineHeight || _defaultStyle.lineHeight || font.fontSize || _defaultStyle.fontSize;
                    var wordWrap = has(font, 'wordWrap') ? font.wordWrap : _defaultStyle.wordWrap;
                    var lengthLimit = font.lengthLimit || _defaultStyle.lengthLimit;
                    var lineClamp = font.lineClamp || _defaultStyle.lineClamp;
                    _ctx.font = "".concat(fontWeight, " ").concat(size >> 0, "px ").concat(style);
                    _ctx.fillStyle = font.fontColor || _defaultStyle.fontColor;
                    var lines = [], text = String(font.text);
                    // 计算文字换行
                    if (wordWrap) {
                        // 最大宽度
                        var maxWidth_1 = _this.getLength(lengthLimit, cellWidth);
                        lines = splitText(_ctx, removeEnter(text), function () { return maxWidth_1; }, lineClamp);
                    }
                    else {
                        lines = text.split('\n');
                    }
                    lines.forEach(function (line, lineIndex) {
                        _ctx.fillText(line, _x + _this.getOffsetX(_ctx.measureText(line).width, cellWidth) + _this.getLength(font.left, cellWidth), _y + _this.getLength(font.top, cellHeight) + (lineIndex + 1) * _this.getLength(lineHeight));
                    });
                });
            });
            var _a = _this.displacement([cellX, 0, cellWidth, lengthOfCopy], [0, cellY, lengthOfCopy, cellHeight]), _x = _a[0], _y = _a[1], _w = _a[2], _h = _a[3];
            var drawLen = lengthOfCopy;
            while (drawLen < maxOffHeight + lengthOfCopy) {
                var _b = _this.displacement([_x, drawLen], [drawLen, _y]), drawX = _b[0], drawY = _b[1];
                _this.drawImage(_ctx, _offscreenCanvas, _x, _y, _w, _h, drawX, drawY, _w, _h);
                drawLen += lengthOfCopy;
            }
        });
    };
    /**
     * 绘制背景区域
     */
    SlotMachine.prototype.drawBlocks = function () {
        var _this = this;
        var _a = this; _a.config; var ctx = _a.ctx; _a._defaultConfig; var _defaultStyle = _a._defaultStyle;
        // 绘制背景区域, 并计算奖品区域
        return this.prizeArea = this.blocks.reduce(function (_a, block, blockIndex) {
            var x = _a.x, y = _a.y, w = _a.w, h = _a.h;
            var _b = computePadding(block, _this.getLength.bind(_this)), paddingTop = _b[0], paddingBottom = _b[1], paddingLeft = _b[2], paddingRight = _b[3];
            var r = block.borderRadius ? _this.getLength(block.borderRadius) : 0;
            // 绘制边框
            var background = block.background || _defaultStyle.background;
            if (hasBackground(background)) {
                roundRectByArc(ctx, x, y, w, h, r);
                ctx.fillStyle = background;
                ctx.fill();
            }
            // 绘制图片
            block.imgs && block.imgs.forEach(function (imgInfo, imgIndex) {
                var blockImg = _this.ImageCache.get(imgInfo.src);
                if (!blockImg)
                    return;
                // 绘制图片
                var _a = _this.computedWidthAndHeight(blockImg, imgInfo, w, h), trueWidth = _a[0], trueHeight = _a[1];
                var _b = [_this.getOffsetX(trueWidth, w) + _this.getLength(imgInfo.left, w), _this.getLength(imgInfo.top, h)], xAxis = _b[0], yAxis = _b[1];
                _this.drawImage(ctx, blockImg, x + xAxis, y + yAxis, trueWidth, trueHeight);
            });
            return {
                x: x + paddingLeft,
                y: y + paddingTop,
                w: w - paddingLeft - paddingRight,
                h: h - paddingTop - paddingBottom
            };
        }, { x: 0, y: 0, w: this.boxWidth, h: this.boxHeight });
    };
    /**
     * 绘制老虎机抽奖
     */
    SlotMachine.prototype.draw = function () {
        var _this = this;
        var _a;
        var _b = this, config = _b.config, ctx = _b.ctx; _b._defaultConfig; _b._defaultStyle;
        // 触发绘制前回调
        (_a = config.beforeDraw) === null || _a === void 0 ? void 0 : _a.call(this, ctx);
        // 清空画布
        ctx.clearRect(0, 0, this.boxWidth, this.boxHeight);
        // 绘制背景
        var _c = this.drawBlocks(), x = _c.x, y = _c.y, w = _c.w, h = _c.h;
        // 绘制插槽
        if (!this._offscreenCanvas)
            return;
        var _d = this, cellWidth = _d.cellWidth, cellHeight = _d.cellHeight, cellAndSpacing = _d.cellAndSpacing, widthAndSpacing = _d.widthAndSpacing, heightAndSpacing = _d.heightAndSpacing;
        this.slots.forEach(function (slot, slotIndex) {
            // 绘制临界点
            var _p = cellAndSpacing * slot.order.length;
            // 调整奖品垂直居中
            var start = _this.displacement(-(h - heightAndSpacing) / 2, -(w - widthAndSpacing) / 2);
            var scroll = _this.scroll[slotIndex] + start;
            // scroll 会无限累加 1 / -1
            if (scroll < 0) {
                scroll = scroll % _p + _p;
            }
            if (scroll > _p) {
                scroll = scroll % _p;
            }
            var _a = _this.displacement([cellWidth * slotIndex, scroll, cellWidth, h], [scroll, cellHeight * slotIndex, w, cellHeight]), sx = _a[0], sy = _a[1], sw = _a[2], sh = _a[3];
            var _b = _this.displacement([x + widthAndSpacing * slotIndex, y, cellWidth, h], [x, y + heightAndSpacing * slotIndex, w, cellHeight]), dx = _b[0], dy = _b[1], dw = _b[2], dh = _b[3];
            _this.drawImage(ctx, _this._offscreenCanvas, sx, sy, sw, sh, dx, dy, dw, dh);
        });
    };
    /**
     * 刻舟求剑
     */
    SlotMachine.prototype.carveOnGunwaleOfAMovingBoat = function () {
        var _this = this;
        var _a = this, _defaultConfig = _a._defaultConfig, prizeFlag = _a.prizeFlag, cellAndSpacing = _a.cellAndSpacing;
        // 记录开始停止的时间戳
        this.endTime = Date.now();
        this.slots.forEach(function (slot, slotIndex) {
            var order = slot.order;
            if (!order.length)
                return;
            var speed = slot.speed || _defaultConfig.speed;
            var direction = slot.direction || _defaultConfig.direction;
            var orderIndex = order.findIndex(function (prizeIndex) { return prizeIndex === prizeFlag[slotIndex]; });
            var _p = cellAndSpacing * order.length;
            var stopScroll = _this.stopScroll[slotIndex] = _this.scroll[slotIndex];
            var i = 0;
            while (++i) {
                var endScroll = cellAndSpacing * orderIndex + (_p * i * direction) - stopScroll;
                var currSpeed = quad.easeOut(_this.FPS, stopScroll, endScroll, _defaultConfig.decelerationTime) - stopScroll;
                if (Math.abs(currSpeed) > speed) {
                    _this.endScroll[slotIndex] = endScroll;
                    break;
                }
            }
        });
    };
    /**
     * 对外暴露: 开始抽奖方法
     */
    SlotMachine.prototype.play = function () {
        var _a, _b;
        if (this.step !== 0)
            return;
        // 记录开始游戏的时间
        this.startTime = Date.now();
        // 清空中奖索引
        this.prizeFlag = void 0;
        // 开始加速
        this.step = 1;
        // 触发回调
        (_b = (_a = this.config).afterStart) === null || _b === void 0 ? void 0 : _b.call(_a);
        // 开始渲染
        this.run();
    };
    SlotMachine.prototype.stop = function (index) {
        var _a;
        if (this.step === 0 || this.step === 3)
            return;
        // 设置中奖索引
        if (typeof index === 'number') {
            this.prizeFlag = new Array(this.slots.length).fill(index);
        }
        else if (isExpectType(index, 'array')) {
            if (index.length === this.slots.length) {
                this.prizeFlag = index;
            }
            else {
                this.stop(-1);
                return console.error("stop([".concat(index, "]) \u53C2\u6570\u957F\u5EA6\u7684\u4E0D\u6B63\u786E"));
            }
        }
        else {
            this.stop(-1);
            return console.error("stop() \u65E0\u6CD5\u8BC6\u522B\u7684\u53C2\u6570\u7C7B\u578B ".concat(typeof index));
        }
        // 如果包含负数则停止游戏, 反之则继续游戏
        if ((_a = this.prizeFlag) === null || _a === void 0 ? void 0 : _a.includes(-1)) {
            this.prizeFlag = [];
            // 停止游戏
            this.step = 0;
        }
        else {
            // 进入匀速
            this.step = 2;
        }
    };
    /**
     * 让游戏动起来
     * @param num 记录帧动画执行多少次
     */
    SlotMachine.prototype.run = function (num) {
        var _this = this;
        var _a, _b;
        if (num === void 0) { num = 0; }
        var _c = this, rAF = _c.rAF, step = _c.step, prizeFlag = _c.prizeFlag, _defaultConfig = _c._defaultConfig, cellAndSpacing = _c.cellAndSpacing, slots = _c.slots;
        var accelerationTime = _defaultConfig.accelerationTime, decelerationTime = _defaultConfig.decelerationTime;
        // 游戏结束
        if (this.step === 0 && (prizeFlag === null || prizeFlag === void 0 ? void 0 : prizeFlag.length) === slots.length) {
            var flag_1 = prizeFlag[0];
            for (var i = 0; i < slots.length; i++) {
                var slot = slots[i], currFlag = prizeFlag[i];
                if (!((_a = slot.order) === null || _a === void 0 ? void 0 : _a.includes(currFlag)) || flag_1 !== currFlag) {
                    flag_1 = -1;
                    break;
                }
            }
            (_b = this.endCallback) === null || _b === void 0 ? void 0 : _b.call(this, this.prizes.find(function (prize, index) { return index === flag_1; }) || void 0);
            return;
        }
        // 如果长度为 0 就直接停止游戏
        if (prizeFlag !== void 0 && !prizeFlag.length)
            return;
        // 计算最终停止的位置
        if (this.step === 3 && !this.endScroll.length)
            this.carveOnGunwaleOfAMovingBoat();
        // 计算时间间隔
        var startInterval = Date.now() - this.startTime;
        var endInterval = Date.now() - this.endTime;
        // 分别计算对应插槽的加速度
        slots.forEach(function (slot, slotIndex) {
            var order = slot.order;
            if (!order || !order.length)
                return;
            var _p = cellAndSpacing * order.length;
            var speed = Math.abs(slot.speed || _defaultConfig.speed);
            var direction = slot.direction || _defaultConfig.direction;
            var scroll = 0, prevScroll = _this.scroll[slotIndex];
            if (step === 1 || startInterval < accelerationTime) { // 加速阶段
                // 记录帧率
                _this.FPS = startInterval / num;
                var currSpeed = quad.easeIn(startInterval, 0, speed, accelerationTime);
                // 加速到最大速度后, 即可进入匀速阶段
                if (currSpeed === speed) {
                    _this.step = 2;
                }
                scroll = (prevScroll + (currSpeed * direction)) % _p;
            }
            else if (step === 2) { // 匀速阶段
                // 速度保持不变
                scroll = (prevScroll + (speed * direction)) % _p;
                // 如果有 prizeFlag 有值, 则进入减速阶段
                if ((prizeFlag === null || prizeFlag === void 0 ? void 0 : prizeFlag.length) === slots.length) {
                    _this.step = 3;
                    // 清空上一轮的位置信息
                    _this.stopScroll = [];
                    _this.endScroll = [];
                }
            }
            else if (step === 3 && endInterval) { // 减速阶段
                // 开始缓慢停止
                var stopScroll = _this.stopScroll[slotIndex];
                var endScroll = _this.endScroll[slotIndex];
                scroll = quad.easeOut(endInterval, stopScroll, endScroll, decelerationTime);
                if (endInterval >= decelerationTime) {
                    _this.step = 0;
                }
            }
            _this.scroll[slotIndex] = scroll;
        });
        this.draw();
        rAF(this.run.bind(this, num + 1));
    };
    // 根据mode置换数值
    SlotMachine.prototype.displacement = function (a, b) {
        return this._defaultConfig.mode === 'horizontal' ? b : a;
    };
    // 根据mode计算宽高
    SlotMachine.prototype.displacementWidthOrHeight = function () {
        var mode = this._defaultConfig.mode;
        var slotsLen = this.slots.length;
        var _a = this._defaultConfig, colSpacing = _a.colSpacing, rowSpacing = _a.rowSpacing;
        var _b = this.prizeArea || this.drawBlocks(); _b.x; _b.y; var w = _b.w, h = _b.h;
        var cellWidth = 0, cellHeight = 0, widthAndSpacing = 0, heightAndSpacing = 0;
        if (mode === 'horizontal') {
            cellHeight = this.cellHeight = (h - rowSpacing * (slotsLen - 1)) / slotsLen;
            cellWidth = this.cellWidth = cellHeight;
        }
        else {
            cellWidth = this.cellWidth = (w - colSpacing * (slotsLen - 1)) / slotsLen;
            cellHeight = this.cellHeight = cellWidth;
        }
        widthAndSpacing = this.widthAndSpacing = this.cellWidth + colSpacing;
        heightAndSpacing = this.heightAndSpacing = this.cellHeight + rowSpacing;
        if (mode === 'horizontal') {
            this.cellAndSpacing = widthAndSpacing;
        }
        else {
            this.cellAndSpacing = heightAndSpacing;
        }
        return {
            cellWidth: cellWidth,
            cellHeight: cellHeight,
            widthAndSpacing: widthAndSpacing,
            heightAndSpacing: heightAndSpacing,
        };
    };
    return SlotMachine;
}(Lucky));

/**
 * 切割圆角
 * @param img 将要裁剪的图片对象
 * @param radius 裁剪的圆角半径
 * @returns 返回一个离屏 canvas 用于渲染
 */
var cutRound = function (img, radius) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = img.width, height = img.height;
    canvas.width = width;
    canvas.height = height;
    roundRectByArc(ctx, 0, 0, width, height, radius);
    ctx.clip();
    ctx.drawImage(img, 0, 0, width, height);
    return canvas;
};
/**
 * 透明度
 * @param img 将要处理的图片对象
 * @param opacity 透明度
 * @returns 返回一个离屏 canvas 用于渲染
 */
var opacity = function (img, opacity) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = img.width, height = img.height;
    canvas.width = width;
    canvas.height = height;
    // 绘制图片, 部分浏览器不支持 filter 属性, 需要处理兼容
    if (typeof ctx.filter === 'string') {
        ctx.filter = "opacity(".concat(opacity * 100, "%)");
        ctx.drawImage(img, 0, 0, width, height);
    }
    else {
        ctx.drawImage(img, 0, 0, width, height);
        var imageData = ctx.getImageData(0, 0, width, height);
        var data = imageData.data;
        var len = data.length;
        for (var i = 0; i < len; i += 4) {
            var alpha = data[i + 3];
            if (alpha !== 0)
                data[i + 3] = alpha * opacity;
        }
        ctx.putImageData(imageData, 0, 0);
    }
    return canvas;
};

export { LuckyGrid, LuckyWheel, SlotMachine, cutRound, opacity };
//# sourceMappingURL=index.esm.js.map
