//http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2ba6f8f900369b4cb0cc5f5a439d3312&hash=e0c4f2fd938a8eaa74f60ef882946e5d
var marvel = {
	render: function() {
		var url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2ba6f8f900369b4cb0cc5f5a439d3312&hash=e0c4f2fd938a8eaa74f60ef882946e5d";
		var message = document.getElementById("message");
		var footer = document.getElementById("footer");
		var marvelContainer = document.getElementById("marvel-container");

		$.ajax({
			url: url,
			type: "GET",
			beforeSend: function() {
				message.innerHTML = "Loading...";
			},
			complete: function() {
				message.innerHTML = "Sucessfully done!";
			},
			success: function(data) {
				footer.innerHTML = data.attributionHTML;
				var string = "";
				string += "<div class='row'>";

				for(var i = 0; i<data.data.results.length;i++) {
					var element = data.data.results[i];
					
					string += "<div class='col-md-3'>";
					string += "  <a href='" + element.urls[0].url+ "' target='_blank'>"
					string += "    <img src='"+ element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+"' />";
					string += "  </a>";
					string += "  <h3>" +element.name + "</h3>";
					string += "</div>";

					if((i+1) % 4 == 0) {
						string += "</div>";
						string += "<div class='row'>";
					}					
				}

				marvelContainer.innerHTML = string;

			},
			error: function() {
				message.innerHTML = "We are sorry!";
			}

		});
	}
};
marvel.render();