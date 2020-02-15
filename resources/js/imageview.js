$.ajax({


		url: 'http://localhost:3001/v1/addimage',
		method: 'GET',
		dataType: 'json',
		// headers : { authorization : 'Bearer'+window.localStorage.getItem('token') },
		success: function(result, status) {
			console.log(result);

			for (key in result) {

				console.log(result[key])

				$('#imageviewlist').append('<tr> ]\
	  <th scope="row">'+ result[key].id+ '</th> \
	  <td> <img src="file:///home/sujen/agriculturebackend/t2-backend-api-Suzzain/images/' + result[key].img +'"+alt="img" height="100px" width="100px"></td>\
	  <td>' + result[key].title+ '</td> \
	  <td>' + result[key].description + '</td> \
    </tr>')
			}
		},
		error: function(jqXHR, status) {

		}


	})
