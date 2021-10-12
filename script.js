function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var widget = hours + ':' + minutes + ':' + seconds;
    return widget;
};

function updateTime(widget) {
    document.querySelector('.time').innerHTML = widget;
};

setInterval(() => {
    var valueTime = getTime();
    updateTime(valueTime);
}, 1000);