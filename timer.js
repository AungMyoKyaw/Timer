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
// function getTime(){
// 	chrome.storage.sync.get(document.domain,function(a){
// 		// console.log(a);
// 		var domain = document.domain;
// 		if(a.domain){
// 			console.log(a.domain);
// 			i = a.domain;
// 		} else {
// 			console.log(0);
// 			i = 0;
// 		}
// 	});
// }
// getTime();
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
// chrome.tabs.onRemoved.addListener(function(){
// 	chrome.storage.sync.set("{"+document.domain+":"+i+"}");
// });
// console.log(formatter(5401));
