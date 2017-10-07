//trianglestars function//
const stars=function(n){
	if(n===0)
		return'';
	return '*'+stars(n-1);
};
const space=function(s){
	if(s===0)
		return '';
	return ' '+space(s-1);
};
const trianglestars=function(n){
	const loop=function(a){
	if(a===0){
		return'';
	}
	console.log(space(n-a)+stars(a*2-1));
	return loop(a-1);
}; 
return loop(n);
};
console.log(trianglestars(5));
 
//pow function//

const pow=function (base, n) {
	if(n===0)
     return 1;  
   return base * pow(base, n-1);
  };
console.log(pow(2,3));
 
//reverse function//

const reverse=function(str) {
const indexfunc=function(str,index){
      if(index<0)
       return '';
      return str[index]+indexfunc(str,index-1);
 };
      return indexfunc(str,str.length-1);
};
console.log(reverse("elina"));

//checkerboard function//
const stars=function(n){
	if(n===0)
		return '';
return "* "+stars(n-1);
};
const spaces=function(s){
	if(s===0)
		return '';
	return " *"+spaces(s-1);
};
	const printhelper = function(num, num1) {
     if(num1 === 0) {
        return "";
  }
    console.log(stars(num));
    console.log(spaces(num));
        return printhelper(num, num1-1);
};

const checkerboard = function(num) {
    if(num % 2 !== 0){
    printhelper(num, (num - 1)/2);
    console.log(stars(num));
        return "";
  }
  if(num % 2 === 0)
        return printhelper(num, num/2);
};
console.log(checkerboard(5));