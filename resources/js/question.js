$(document).ready(function(){

var uid;

	 $('#addquestion').submit(function(event){
	 	// $('#lform').hide();
	 	event.preventDefault();
		console.log('Add button clicked');
	 	var myFormData = {
	 		question: $('#question').val()
	 		
		 } 
		 console.log(myFormData);
	 	
$.ajax({
//v1 is the version and users is the route in api.
	url:'http://localhost:3001/v1/addquestion',
	method:'POST',
	processData: false,
	contentType: 'application/json',
	data: JSON.stringify(myFormData),
	dataType: 'json',

	sucess:function(result,status){
		console.log(result);
		console.log(status);
		console.log('kamehameha');
		

	},

	error:function(jqXHR,status){
		console.log(jqXHR)
		console.log('finalflash')
	}
})

	 })

	 }) 

$.ajax({


		url: 'http://localhost:3001/v1/viewquestion',
		method: 'GET',
		dataType: 'json',
		// headers : { authorization : 'Bearer'+window.localStorage.getItem('token') },
		success: function(result, status) {
			console.log(result);

			for (key in result) {

				console.log(result[key])

	$('#questionlist').append('<tr> ]\
	  <th scope="row">' + result[key].id+ '</th> \
	  <td>' + result[key].question + '</td> \
	  </tr>')
			}
		},
		error: function(jqXHR, status) {

		}


	})

