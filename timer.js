// console.log("is working");
function createElement(element,myid){
	var element=document.createElement(element);
	element.id = myid;
	return element;
}
var timerBox=createElement("div","timerBox");
var timer=createElement("p","timer");
timerBox.appendChild(timer);
document.body.appendChild(timerBox);
var i = 0;
var timerstart = setInterval(function(){
	i++;
	timer.innerHTML=formatter(i);
},1000);
function formatter(seconds){
	var h,m,s;
	h = addzero(Math.floor(seconds/3600));
	m = addzero(Math.floor((seconds%3600)/60));
	s = addzero(seconds%60);
	function addzero(n){
		return n < 10 ? `0${n}`: n ;
	}
	return `${h}:${m}:${s}`;
}
timerBox.ondblclick = function(){
	clearInterval(timerstart);
	this.style.display='none';
	timer.style.display='none';
}