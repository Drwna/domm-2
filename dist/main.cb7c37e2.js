// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
// addClass
// jQuery('.test').addClass('red').addClass('blue');

// const api = jQuery('.test'); // 不返回元素门，返回 api 对象
// api.addClass('red') // this 就是 api
//     .addClass('blue')
//     .addClass('black'); // 链式操作

// obj.fn(p1); // 函数里的 this 就是 obj
// obj.fn.call(obj, p1)


// find
// const api1 = jQuery('.test');
// api1.addClass('blue');

// const api2 = api1.find('.child').addClass('red');

// api1.addClass('green');
// api1 添加 blue 类后，再给 test 类下的 child 类 添加一个 red 类
// 之后再重新用 api1 添加 green 类，这个 green 类会添加在 child 类后边
// 重新构造函数实现
// jQuery('.test').find('.child').addClass('red').addClass('green');


// end
// jQuery('.test')
//     .find('.child')
//     .addClass('red')
//     .addClass('greed')
//     .end() // 回到上一层，在 test 上添加 yellow
//     .addClass('yellow')


// each
// const x = jQuery('.test')
//     .find('.child')

// x.each((e) => console.log(e))


// parent
// const x = jQuery('.test')
// x.parent().print()


// children
jQuery('.test').children().print();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.cb7c37e2.map