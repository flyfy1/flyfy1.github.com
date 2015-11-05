$.ready( ->
  d = React.DOM
  c = React.createElement

  ResultSet = React.createClass
    render: ->
      terms = @props.vals.map (t) ->
        d.div className: 'result-term',
          d.a href: t[1], t[0]

      d.div className: 'result-set',
        d.div className: 'result-set-title', @props.title
        terms

  CompleteResult = React.createClass
    render: ->
      terms = []
      for title, vals of @props.terms
        terms.push c(ResultSet, title: title, vals:vals)
      result_clz = 'auto-complete-result'
      result_clz += ' bordered' if terms.length > 0
      d.div className: result_clz,
        d.div className: 'result-parent', terms

  CompleteBox = React.createClass
    getInitialState: ->
      terms:
        'abc is nice:': [
          ['First Blood','google.com']
          ['Second Blood','zhihu.com']
        ]
        'Bloody Hell': [ ['Hello', 'douban.com'] ]
      searchTerm: ''
    handleSearchTermChange: (evt)->
      v = evt.target.value
      console.log('Changed: ', v)
    render: ->
      d.div className: 'auto-complete-box',
        d.input placeholder: 'Search', onChange: @handleSearchTermChange, value: @state.searchTerm
        c CompleteResult, ref: 'result', terms: @state.terms
        

  root = React.createElement(CompleteBox, null)
  ReactDOM.render root, document.getElementById('container')
)
