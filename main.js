var arr=[1,2,3,4];
var b=arr.push(5,6,7);
console.log(b);
console.log(arr);
arr.pop();
console.log(arr);

arr.shift();
console.log(arr);
arr.unshift(6);
console.log(arr);
var newArr=arr.slice(3);
console.log(newArr);

var b1=2,c1=1;
var c=[1,2,3,4,5];
var d=c.push(b1>c1);
console.log(c);

var e=[1,2,3,4,5,6,7,8,9];
var f=e.slice(6);
console.log(f);

var g=e.lastIndexOf(5);
console.log(g);

var h=[10,11,12];
var e1=e.concat(h);
console.log(e1);

e.sort(function(a,b){
	return b-a;
});
console.log(e);



