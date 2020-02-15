$(document).ready(function(){

var uid;

	 $('#addblog').submit(function(event){
	 	// $('#lform').hide();
	 	event.preventDefault();
		console.log('register button clicked');
	 	var myFormData = {
	 		title: $('#title').val(),
	 		description: $('#description').val()
	 		
		 } 
		 console.log(myFormData);
	 	
$.ajax({
//v1 is the version and users is the route in api.
	url:'http://localhost:3001/v1/addblog',
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



//update
$('#bloglist').on('click','#edit', function(){

uid=$(this)[0].attributes.uid.nodeValue;
console.log($(this)[0].attributes.uid.nodeValue);

$.ajax({
    url: 'http://localhost:3001/v1/addblog/' +uid,
    method: 'GET',
    dataType: 'json',
    success: function(result) {
		console.log(result);

		$('#title ').val(result.title)
		$('#description ').val(result.description)

    },
    error:function(){

    }

})
})


var uid;
///update


$('#editblog').submit(function(e) {


e.preventDefault();

var editData = {
	title: $('#title').val(),
	description: $('#description').val(),

}

$.ajax({

	url: 'http://localhost:3001/v1/addblog/' + uid, // here uid has already been set to actual userid in previous funciton when edit is clicked, since uid is global
	method: "PUT",
	contentType: 'application/json',
	dataType: 'json',
	data:JSON.stringify(editData),
	success: function(result) {
		console.log(result)
		// your logic here , redirect to another page or show message etc
	},
	error: function() {

	}

})

})




//delete
        $('#bloglist').on('click','#delete',function(){

            // console.log('delete pressed');
            // console.log($(this)[0].attributes.uid.nodeValue);

            uid= $(this)[0].attributes.uid.nodeValue
			var isDelete=confirm("Are you sure ? ");
			if (isDelete== true){
    
            $.ajax({
                url: 'http://localhost:3001/v1/addblog/'+uid,
                method: 'DELETE',
                dataType: 'json',
                
                success: function() {
                 
window.location.href=" adminpage.html";


                },
                error:function(){

                }


            })
        }
        else{

        }
        })

	$.ajax({


		url: 'http://localhost:3001/v1/addblog',
		method: 'GET',
		dataType: 'json',
		// headers : { authorization : 'Bearer'+window.localStorage.getItem('token') },
		success: function(result, status) {
			console.log(result);

			for (key in result) {

				console.log(result[key])

				$('#bloglist').append('<tr> ]\
	  <th scope="row">' + result[key].id+ '</th> \
	  <td>' + result[key].title+ '</td> \
	  <td>' + result[key].description + '</td> \
	<td><button type="button" uid="' + result[key].id + '" data-toggle="modal" data-target="#exampleModal" \
	id="edit"  class="btn btn-primary">Edit</button></td>\
    <td><button type="button" uid="' + result[key].id + '"  id="delete" class="btn btn-danger">Delete</button></td>\
    </tr>')
			}
		},
		error: function(jqXHR, status) {

		}


	})



