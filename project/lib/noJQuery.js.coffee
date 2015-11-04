# The content of this file largely reference to:
# http://youmightnotneedjquery.com/

window.$ =
  ready: (fn) ->
    if(document.readyState != 'loading')
      fn()
    else
      document.addEventListener('DOMContentLoaded', fn)
  trigger: (evt, data) ->
    if (window.CustomEvent)
        event = new CustomEvent(evt, data)
    else
        event = document.createEvent('CustomEvent')
        event.initCustomEvent evt, true, true, data

    el.dispatchEvent(event)
