// Generated by CoffeeScript 1.10.0
(function() {
  var d;

  d = React.DOM;

  window.Calendar = React.createClass({
    render: function() {
      return d.div({
        className: 'calendar'
      }, 'It works!');
    }
  });

  ReactDOM.render(React.createElement(Calendar), document.getElementById('#calendar'));

}).call(this);
