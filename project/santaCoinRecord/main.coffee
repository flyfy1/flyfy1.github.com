(($)->
  w = (txt, tag) -> '<' + tag + '>' + txt + '</' + tag + '>'
  
  res = ""
  $.get("record.txt",(dta, sts, xhr) ->
    $.each(dta, (idx,row) ->
      cTxt = ""
      $.each(row, (idc, col) ->
        cTxt += w(col,"td")
      )
      res += w(cTxt,"tr")
    )
    $("#code_fill").html(res)
    console.log(res)
  "json")
)(jQuery)
