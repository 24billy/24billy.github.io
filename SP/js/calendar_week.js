var dayList = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

document.addEventListener('DOMContentLoaded', function () {
    setBeginArrow();
   
    if (document.querySelector('#my-wk-btn') !== null) {
        document.querySelector('#my-wk-btn').addEventListener('click', () => {
            setBeginArrow();
        });
    }

    document.querySelector('.week').addEventListener('click', (e) => {
        var dayText = '', day;
        if (e.target.classList[0] === 'day') {
            dayText = e.target.innerText.substring(0, 3);
            day = e.target.childNodes[1];
            document.querySelector('.picked').classList.remove('picked');
            day.classList.add('picked');
            moveArrow(dayText);
        }
        if (e.target.classList[0] === 'day-num') {
            dayText = e.target.parentElement.innerText.substring(0, 3);
            day = e.target;
            document.querySelector('.picked').classList.remove('picked');
            day.classList.add('picked');
            moveArrow(dayText);
        }
    });
});
function setBeginArrow() {
    var arrow = document.querySelector('.arrow');
    var arrowWidth = arrow.offsetWidth / 2;
    var blockWidth = document.querySelector('.day').offsetWidth;
    var dayPercent = 100 / 14 + "%";
    var marginLeft = "calc(" + dayPercent + " - " + arrowWidth + "px )";
    arrow.style.margin = '0 0 0 ' + marginLeft;
}
function moveArrow(dayText) {
    var dayNum = 0;
    for (var i = 0; i < dayList.length; i++) {
        if (dayText === dayList[i]) {
            dayNum = i + 1;
        }
    }
    var arrow = document.querySelector('.arrow');
    var arrowWidth = arrow.offsetWidth / 2;
    var blockWidth = document.querySelector('.day').offsetWidth;
    var dayPercent = 100 / 7;
    var arrowPostion = dayPercent * dayNum - (dayPercent / 2) + "%";
    //var marginLeft = blockWidth * dayNum - (blockWidth / 2) - (arrowWidth / 2);
    var marginLeft = "calc(" + arrowPostion + " - " + arrowWidth + "px )";
    arrow.style.margin = '0 0 0 ' + marginLeft;
}
