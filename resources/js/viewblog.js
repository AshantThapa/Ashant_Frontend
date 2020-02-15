$(document).ready(function(){

	$.ajax({


		url: 'http://localhost:3001/v1/addblog',
		method: 'GET',
		dataType: 'json',
		// headers : { authorization : 'Bearer'+window.localStorage.getItem('token') },
		success: function(result, status) {
			console.log(result);

			for (key in result) {

				console.log(result[key])

				$('#viewbloglist').append('<tr> ]\
	  <th scope="row">' + result[key].id+ '</th> \
	  <td>' + result[key].title+ '</td> \
	  <td>' + result[key].description + '</td> \
    </tr>')
			}
		},
		error: function(jqXHR, status) {

		}


	})
})
