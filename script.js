/* This is a javascript file. It contains code that runs locally in your
 * browser, although it has spread to a large number of other uses.
 *
 * The final part of the flag is 2a79d2dc833
 */

function sayHI(){
	alert("Hi there!");
}
var count=0; 

function sayBoo(){
	if(count===0) {
		alert("Nothin' Here Bro!");
		count++;
	}
	else if(count===1) {
		alert("Look somewhere else")
		count++;
	}
	else {
		alert("Can't Help you Boo")
	}
}