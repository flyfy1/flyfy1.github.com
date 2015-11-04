( ->
  console.log('runned')
  class ReactDOMTextComponent
    constructor: (text) ->
      @_currentElement= '' + text
      @_rootNodeID = null
    mountComponent: (rootID) ->
      this._rootNodeID = rootID
      '<span data-reactid="' + rootID + '">' + this._currentElement + '</span>'

  instantiateReactComponent = (node) ->
    if(typeof node == 'string' || typeof node == 'number')
      new ReactDOMTextComponent(node)
    else
      null

  window.React =
    render: (ele, container) ->
      componentInstance = instantiateReactComponent ele
      markup = componentInstance.mountComponent React.nextReactRootIndex++
      container.innerHTML = markup
      # $(document).trigger('mountReady')
)()


