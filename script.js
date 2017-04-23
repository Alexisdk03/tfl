
$( "#search-bethnal-tube" ).on( "click", function() {
  // api request to be sent on button click

  var url = 'https://api.tfl.gov.uk/Line/central/Arrivals/940GZZLUBLG?direction=inbound&app_id=&app_key=';

  $.getJSON(url, function(data){

       var items = data.sort(function(a, b){return a.timeToStation - b.timeToStation});

       items.forEach(function(items){

        var times = moment().add(items.timeToStation, 'seconds').fromNow()
        $("<p/>", {
        "class": "main",
        html:items.destinationName + " will arrive in " + times}).appendTo("html");

       });

  });

});
