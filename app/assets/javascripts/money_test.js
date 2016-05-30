var money = function(data) {
  fx.rates = data.rates
  var rate = fx(1).from("USD").to("AUD")
  $("#money").text("USD1 = $" + rate.toFixed(4))
}

$.getJSON("http://api.fixer.io/latest", money)
