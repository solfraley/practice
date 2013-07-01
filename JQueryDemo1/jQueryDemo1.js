$(document).ready(function(){
  
  var counter = 0;
  var workDone = false;

  $('#reset').on("click", function(){
  	counter = 0;
  	$('#b1').html("button 1");
  	$('#b2').html("button 2");
  	$('#b3').html("button 3");
  })
  
  $("#b1").on("click", function(){
	counter += 1;
	$("#b1").html("click count: " + counter);
  });

  $("#b2").on("click", function(){

  if ( !workDone ) {
    var textField = $("<textarea id='message'> message here </textarea>");
    var submit = $("<button id=submit> send message</button>")
    $('#main').append(textField);
    $('#main').append(submit); 
    workDone = true;
  } 

  	//this would be the ajax request to server, instead printed to doc
  	/*$.ajax({
  		url: 'server submit page here',
            type: 'POST',
            dataType: 'json',
            data: { text: $('textarea').val() },
            success: function(data) {
                $('#statuses').append('<li>' + data.text + '</li>');
                $('#new-status').find('textarea').val('');
              }

  	});*/

  });


})