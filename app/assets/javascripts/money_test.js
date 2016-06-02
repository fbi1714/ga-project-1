var displayCurrency = function () {
  var money = function(data) {
    fx.rates = data.rates;

    // Get the current value of the first dropdown .val();
    // Get the current value of the second dropdown .val();

    var rate = fx(1).from("USD").to("AUD")
    $("#money").text( Object.keys(fx.rates)[29] + " = $ " + rate.toFixed(3) + " " + Object.keys(fx.rates)[0])
    $("#result").text( Object.keys(fx.rates)[29] + " = $ " + rate.toFixed(3) + " " + Object.keys(fx.rates)[0])

  }

  $.getJSON("http://api.fixer.io/latest", money)
}

displayCurrency();

// Select the two dropdowns, every time one of them is changed,

// $("select").on("change", displayCurrency);
