// Generated by CoffeeScript 1.6.3
(function() {
  (function($) {
    var res, w;
    w = function(txt, tag) {
      return '<' + tag + '>' + txt + '</' + tag + '>';
    };
    res = "";
    $.get("record.txt", function(dta, sts, xhr) {
      $.each(dta, function(idx, row) {
        var cTxt;
        cTxt = "";
        $.each(row, function(idc, col) {
          return cTxt += w(col, "td");
        });
        return res += w(cTxt, "tr");
      });
      $("#code_fill").html(res);
      return console.log(res);
    }, "json");
    return $.get("total.txt", function(dta, sts, xhr) {
      console.log(dta);
      return $("#total").html(dta);
    });
  })(jQuery);

}).call(this);
