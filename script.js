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

function move(timeArr) {
    var arrowSeconds = document.querySelector('.arrow-seconds');
    arrowSeconds.style.transform = 'rotate(' + 6 * timeArr['seconds'] + 'deg)';
    var arrowHours = document.querySelector('.arrow-hours');
    arrowHours.style.transform = 'rotate(' + 30 * timeArr['hours'] + 'deg)';
    var arrowMinutes = document.querySelector('.arrow-minutes');
    arrowMinutes.style.transform = 'rotate(' + 6 * timeArr['minutes'] + 'deg)';
};

function startTime() {
    var valueTime = getTime();
    move(valueTime);
};

window.addEventListener('load', startTime);

setInterval(startTime, 1000);