// Generated by CoffeeScript 1.10.0
(function() {
  window.$ = {
    ready: function(fn) {
      if (document.readyState !== 'loading') {
        return fn();
      } else {
        return document.addEventListener('DOMContentLoaded', fn);
      }
    },
    trigger: function(evt, data) {
      var event;
      if (window.CustomEvent) {
        event = new CustomEvent(evt, data);
      } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(evt, true, true, data);
      }
      return el.dispatchEvent(event);
    }
  };

}).call(this);
