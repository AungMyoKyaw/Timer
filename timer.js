// console.log("is working");
function createElement(element, myid) {
  var element = document.createElement(element);
  element.id = myid;
  return element;
}
var timerBox_amk = createElement('div', 'timerBox');
var timer_amk = createElement('p', 'timer');
timerBox_amk.appendChild(timer_amk);
document.body.appendChild(timerBox_amk);
var i = 0;
var timerstart = setInterval(function() {
  i++;
  timer_amk.innerHTML = formatter(i);
}, 1000);

function formatter(seconds) {
  var h, m, s;
  h = addzero(Math.floor(seconds / 3600));
  m = addzero(Math.floor((seconds % 3600) / 60));
  s = addzero(seconds % 60);

  function addzero(n) {
    return n < 10 ? `0${n}` : n;
  }
  return `${h}:${m}:${s}`;
}
timerBox_amk.ondblclick = function() {
  popUp();
};
var overlay_amk = createElement('div', 'amk_overlay');
var box_amk = createElement('div', 'amk_box');
var message = document.createElement('p');
var yes = createElement('button', 'amk_yes');
var no = createElement('button', 'amk_no');
message.innerHTML = 'Are you sure to stop timer ?';
yes.innerHTML = 'Yes';
no.innerHTML = 'No';
box_amk.appendChild(message);
box_amk.appendChild(no);
box_amk.appendChild(yes);
document.body.appendChild(overlay_amk);
document.body.appendChild(box_amk);

function popUp() {
  overlay_amk.style.display = 'block';
  box_amk.style.display = 'block';
}
overlay_amk.onclick = function() {
  overlay_amk.style.display = 'none';
  box_amk.style.display = 'none';
};
yes.onclick = function() {
  overlay_amk.style.display = 'none';
  box_amk.style.display = 'none';
  clearInterval(timerstart);
  timerBox_amk.style.display = 'none';
  timer_amk.style.display = 'none';
};
no.onclick = function() {
  overlay_amk.style.display = 'none';
  box_amk.style.display = 'none';
};
