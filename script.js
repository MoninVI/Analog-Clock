var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var widget = hours + ':' + minutes + ':' + seconds;
document.querySelector('.time').innerHTML = widget;