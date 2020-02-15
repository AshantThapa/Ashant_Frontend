$(document).ready(function() {

	 $('#register').submit(function(event){
	 	// $('#lform').hide();
	 	event.preventDefault();
		console.log('register button clicked');
	 	var myFormData = {
	 		firstname: $('#firstname').val(),
	 		lastname: $('#lastname').val(),
	 		address:$('#address').val(),
	 		email:$('#email').val(),
	 		password: $('#password').val(),
	 		usertype:'user'
	 		
		 } 
		 console.log(myFormData);
	 	
$.ajax({
//v1 is the version and users is the route in api.
	url:'http://localhost:3001/v1/registers',
	method:'POST',
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
});

	 }) 


$('#loginForm').submit(function(event){
	event.preventDefault();
	console.log('login button clicked');
	var myFormData = {
		email : $('#email').val(),
		password : $('#password').val()
	}

	$.ajax({

		url:'http://localhost:3001/v1/verify',
		method : 'POST',
		contentType: 'application/json',
		//headers: {'authorization':'Bearer'+window.localStorage.getItem('token')},
		data: JSON.stringify(myFormData),
		dataType: 'json',
		
		success : function(result,status){
				// console.log(result);
				// console.log(status);
					window.localStorage.setItem('token', result.token);
					window.localStorage.setItem('id', result.result.id);
					window.localStorage.setItem('firstname', result.result.firstname);
					window.localStorage.setItem('lastname', result.result.lastname);
					window.localStorage.setItem('address', result.result.address);
					window.localStorage.setItem('email', result.email);
					window.localStorage.setItem('usertype', result.result.usertype);
					
					$('#message').html(result.message)
					console.log(result.result.usertype)
					if (result.result.usertype == "user") {
						window.location.href = "viewarticle.html"

					}
					else
					{
						window.location.href = "adminpage.html"
						// 		console.log('admin');
					}

},

			error:function(jqXHR, status){
				console.log(jqXHR, response.JSON.message);
				//console.log('Bye')
				$("#message").html(jqXHR.responseJSON.message);

			}
		})

	})
})
