function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var massiveTime = {
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };

    return massiveTime;
};

function move() {
    var arrowSeconds = document.querySelector('.arrow-seconds');
    var transform = window.getComputedStyle(arrowSeconds).transform;

}


setInterval(() => {
    var valueTime = getTime();
}, 1000);