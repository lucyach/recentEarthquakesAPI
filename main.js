// JQUERY 3.3.1

$.get({
  url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson",
  success: function(result) {
    var data = result.features;
    var locationOutput = "https://maps.googleapis.com/maps/api/staticmap?size=700x550&zoom=3&visible=14,-167|72,-167|72,-59|14,-59&maptype=roadmap&key=AIzaSyCU14MgXL6k8x1W2BKzJ_Fp4YEs9WfQt_I&amp;format=png&visual_refresh=true&markers=";
    for (var index in data){
      var quakeObject = data[index];
      if(quakeObject.properties.mag >= 4){
        var lat = quakeObject.geometry.coordinates[1];
        var long = quakeObject.geometry.coordinates[0];
        if(lat > 14 && lat < 72 && long > -167 && long < -59){
          locationOutput += lat + "," + long + "|";
        }
      }
    }
  	var awsten = "https://answersafrica.com/wp-content/uploads/2019/09/Knight-640x463.jpg"
  	$("#map").html('<img src = "' + locationOutput + '">');
  },
  error: function(error) {
  	console.log(error);
  }
});
