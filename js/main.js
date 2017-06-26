/*
Main js file
*/

//define the array first
var arr = [1,2,3,4,5,6,67,7];

//show in default div
document.getElementById("ar_maiin").innerHTML = arr;

//push 8,9,10,11
arr.push(8);
arr.push(9);
arr.push(10);
arr.push(11);
document.getElementById("ar_push").innerHTML = arr;

//pop 8,9,10,11
arr.pop();
arr.pop();
arr.pop();
arr.pop();
document.getElementById("ar_pop").innerHTML = arr;

//Extract first four elements of array
document.getElementById("ar_slice").innerHTML = arr.slice(0,4);

//print array using iteration
var ul = document.getElementById("iteration");//select the ul
for (var i = 0, len = arr.length; i < len; i++) {
  var li = document.createElement("li");//create li
  li.appendChild(document.createTextNode(arr[i]));//create textnode for li
  ul.appendChild(li);//append final li
}