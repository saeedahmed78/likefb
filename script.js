
//  sign-up 

let users = [];
let pass = [];
function addUser() {
	let user = document.querySelector("#fullName").value;
	users.push(user);
	localStorage.setItem("users", users.join(","));

	let password = document.querySelector("#password").value;
	pass.push(password);
	localStorage.setItem("pass", pass.join(","));


	if (user == "" || password == "") {
		alert("please attempt all ");
	}   else{
		alert("sucessfull logged in")
		window.location.replace("html/home.html");

	}
}


// local storage

function reloadUsers() {
	if (localStorage.getItem("users") !== null) {
		users = localStorage.getItem("users").split(",");
		pass = localStorage.getItem("pass").split(",");
		
	}


}
reloadUsers();



// login-panle


function login(){

	let fname = document.querySelector("#fname").value;
	let password = document.querySelector("#pass").value;
	for ( i = 0; i < users.length; i++){
		for ( i = 0; i < pass.length; i++){

			if(fname == users[i] && password == pass ){

				window.location.replace("home.html");

// }
return  
}else{
	alert("erorr");
	return
}
}   
}
}




// logout


function chackLogIn(){
	// localStorage.removeItem("currentUser");
	window.location.replace("../index.html")
}

// post

let count = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
let count10 = 0;




function post(){

	let textarea = document.querySelector("textarea").value;
	let post = document.querySelector("#posts");
	post.innerHTML += "<div>" + textarea + "<br>"+ "<hr>"  +"<i class='far fa-heart likeit' onclick='like() '></i>" + "</div>" ;
	document.querySelector("#btn-con").innerHTML = "<button class='btn btn-post' type='submit' onclick='post2()'>post</button>" 
}
function like(){
	count++;
	let likes = document.querySelector(".likeit");
	likes.innerHTML = count;

}
function post2(){

	let textarea = document.querySelector("textarea").value;
	let post = document.querySelector("#posts");
	post.innerHTML += "<div>" + textarea + "<br>"+ "<hr>"  +"<i class='far fa-heart likeit2' onclick='like2() '></i>" + "</div>" ;
	document.querySelector("#btn-con").innerHTML = "<button class='btn btn-post' type='submit' onclick='post3()'>post</button>" 
}



function like2(){
	count2++;
	let likes = document.querySelector(".likeit2");
	likes.innerHTML = count2;

}
function post3(){

	let textarea = document.querySelector("textarea").value;
	let post = document.querySelector("#posts");
	post.innerHTML += "<div>" + textarea + "<br>"+ "<hr>"  +"<i class='far fa-heart likeit3' onclick='like3() '></i>" +"</div>" ;
	document.querySelector("#btn-con").innerHTML = "<button class='btn btn-post' type='submit' onclick='post4()'>post</button>" 
}



function like3(){
	count3++;
	let likes = document.querySelector(".likeit3");
	likes.innerHTML = count3;

}


function post4(){

	let textarea = document.querySelector("textarea").value;
	let post = document.querySelector("#posts");
	post.innerHTML += "<div>" + textarea + "<br>"+ "<hr>"  +"<i class='far fa-heart likeit4' onclick='like4() '></i>" + "</div>" ;
	document.querySelector("#btn-con").innerHTML = "<button class='btn btn-post' type='submit' onclick='post5()'>post</button>" 
}



function like4(){
	count4++;
	let likes = document.querySelector(".likeit4");
	likes.innerHTML = count4;

}


function post5(){

	let textarea = document.querySelector("textarea").value;
	let post = document.querySelector("#posts");
	post.innerHTML += "<div>" + textarea + "<br>"+ "<hr>"  +"<i class='far fa-heart likeit5' onclick='like5() '></i>" + "</div>" ;
	document.querySelector("#btn-con").innerHTML = "<button class='btn btn-post' type='submit' onclick='post6()'>post</button>" 
}



function like5(){
	count5 ++;
	let likes = document.querySelector(".likeit5");
	likes.innerHTML = count5;

}



function post6(){

	let textarea = document.querySelector("textarea").value;
	let post = document.querySelector("#posts");
	post.innerHTML += "<div>" + textarea + "<br>"+ "<hr>"  +"<i class='far fa-heart likeit6' onclick='like6() '></i>" + "</div>" ;
	document.querySelector("#btn-con").innerHTML = "<button class='btn btn-post' type='submit' onclick='post7()'>post</button>" 
}



function like6(){
	count6++;
	let likes = document.querySelector(".likeit6");
	likes.innerHTML = count6;

}



function post7(){

	let textarea = document.querySelector("textarea").value;
	let post = document.querySelector("#posts");
	post.innerHTML += "<div>" + textarea + "<br>"+ "<hr>"  +"<i class='far fa-heart likeit7' onclick='like7() '></i>" + "</div>" ;
	document.querySelector("#btn-con").innerHTML = "<button class='btn btn-post' type='submit' onclick='post8()'>post</button>" 
}



function like7(){
	count7++;
	let likes = document.querySelector(".likeit7");
	likes.innerHTML = count7;

}



function post8(){

	let textarea = document.querySelector("textarea").value;
	let post = document.querySelector("#posts");
	post.innerHTML += "<div>" + textarea + "<br>"+ "<hr>"  +"<i class='far fa-heart likeit8' onclick='like8() '></i>" + "</div>" ;
	document.querySelector("#btn-con").innerHTML = "<button class='btn btn-post' type='submit' onclick='post9()'>post</button>" 
}



function like8(){
	count8++;
	let likes = document.querySelector(".likeit8");
	likes.innerHTML = count8;

}




function post9(){

	let textarea = document.querySelector("textarea").value;
	let post = document.querySelector("#posts");
	post.innerHTML += "<div>" + textarea + "<br>"+ "<hr>"  +"<i class='far fa-heart likeit9' onclick='like9() '></i>" + "</div>" ;
	document.querySelector("#btn-con").innerHTML = "<button class='btn btn-post' type='submit' onclick='post10()'>post</button>" 
}



function like9(){
	count9++;
	let likes = document.querySelector(".likeit9");
	likes.innerHTML = count9;

}




function post10(){

	let textarea = document.querySelector("textarea").value;
	let post = document.querySelector("#posts");
	post.innerHTML += "<div>" + textarea + "<br>"+ "<hr>"  +"<i class='far fa-heart likeit10' onclick='like10() '></i>" + "</div>" ;
	document.querySelector("#btn-con").innerHTML = "<button class='btn btn-post' type='submit' onclick='post11()'>post</button>" 
}



function like10(){
	count10++;
	let likes = document.querySelector(".likeit10");
	likes.innerHTML = count10;

}

let themeChanger = ["http://paperlief.com/images/cool-computer-keyboards-wallpaper-1.jpg","https://images2.alphacoders.com/459/459023.jpg","https://previews.123rf.com/images/schristina/schristina0905/schristina090500018/4911123-a-white-modern-keyboard-with-a-white-mouse-on-fantastic-blue-background.jpg","http://www.baltana.com/files/wallpapers-2/Keyboard-HD-Images-04248.jpg","http://travellerlifestyle.com/wp-content/uploads/2015/03/keyboard-background-3.jpg"]
function themeChange(){
	let backRan = parseInt(Math.random()*5);
	document.querySelector("body").style["background-image"] = `url(${themeChanger[backRan]})`;
}









