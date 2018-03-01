


function countClicks() {
        localStorage.clickcount = (localStorage.clickcount) ? Number(localStorage.clickcount) + 1: 1;
        update();
}
function update() {
        target.innerHTML = localStorage.clickcount || 0;
}
update();
count.onclick = countClicks;

function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return '';
}

