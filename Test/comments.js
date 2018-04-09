function test(){
	alert("Test:OK");
}

function clearx(){
	alert('ok');
	document.getElementById('txt1').value="";

}

function add(){
	alert("fired");
	var newComment=document.getElementById('txt1').value;
	var oldComment=document.getElementById('comments').innerHTML;

	document.getElementById('comments').innerHTML=oldComment+"<p>"+newComment+"</p>";
	
}


