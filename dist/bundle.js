
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global.ni = factory(global.$));
}(this, (function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var Plugin = function ($$$1) {
    var NAME = 'plugin';
    var VERSION = '0.0.1';

    var Plugin =
    /*#__PURE__*/
    function () {
      function Plugin(element) {
        console.log("initialized");
        this._element = element;
      }

      Plugin._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data('hg.plugin');

          if (!data) {
            data = new Plugin(this);
            $$$1(this).data('hg.plugin', data);
          }

          if (config === 'enable') {
            data[config]();
          }
        });
      };

      _createClass(Plugin, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Plugin;
    }();

    $$$1(window).on("load.hg.plugin", function () {
      var plugins = [].slice.call(document.querySelectorAll('[data-plugin="on"]'));

      for (var i = 0, len = plugins.length; i < len; i++) {
        var $plugin = $$$1(plugins[i]);

        Plugin._jQueryInterface.call($plugin, $plugin.data());
      }
    });
    $$$1.fn[NAME] = Plugin._jQueryInterface;
    $$$1.fn[NAME].Constructor = Plugin;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Plugin._jQueryInterface;
    };

    return Plugin;
  }($);

  return Plugin;

})));
