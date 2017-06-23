// this is the first problem
function person(age, name){
	return(age + " " + name);
}

console.log(person(18, "natan"));




// this is the second
function times(num1, num2){
	return(num1 * num2);
}
console.log(times(23,45));



// this is the third
var user = {
	username: "Nate",
	password: "Dog",
	isLoggedIn: function(username, password){
			
if(username == "Nate" && password == "Dog"){
	console.log("You have access");
}else if (username !== "Nate" && password !== "Dog"){
    console.log("You have access");
}else{
	console.log("Access denied");
};

   
  }}

user.isLoggedIn("dog",6);




var dog = {
	name: "Rudy",
	food: "soft",
	playTime: function(){
		return(dog);
	}
}



// this is the fourth
var num1 = 20;
	for(i = 0; i < 22; i+=2) {
		console.log(i);
};

	
