document.addEventListener('DOMContentLoaded', function () {

    /*others-block display */
    var pics_btn = document.querySelector('.img-frame .pics');
    var list_btn = document.querySelector('.img-frame .list');

    document.querySelector('.switch-display.pics').addEventListener('click', (e) => {
        var status = document.querySelector('.others-list').classList[1];
        pics_btn.src = 'images/pics.png';
        pics_btn.parentElement.style.background = 'none';
        list_btn.src = 'images/list_none.png';
        list_btn.parentElement.style.background = '#bfbfbf';
        if (status === 'js_list') {
            document.querySelector('.others-list').classList.remove('js_list');
            document.querySelector('.others-list').classList.add('js_pics');
        }
    });

    document.querySelector('.switch-display.list').addEventListener('click', (e) => {
        var status = document.querySelector('.others-list').classList[1];
        pics_btn.src = 'images/pics_none.png';
        pics_btn.parentElement.style.background = '#bfbfbf';
        list_btn.src = 'images/list.png';
        list_btn.parentElement.style.background = 'none';
        if (status === 'js_pics') {
            document.querySelector('.others-list').classList.remove('js_pics');
            document.querySelector('.others-list').classList.add('js_list');
        }
    });
});
