var cols = document.getElementsByClassName('col');
var len = cols.length;

// changing backgrond
for (i = 0; i < len; i++) {
    var colors = cols[i].textContent;
    var item = cols[i];
    cols[i].style.backgroundColor = colors;
    if (cols[i].textContent == 'black') {
        cols[i].style.color = 'white';

    }
    // copying to clip board
    item.addEventListener('click', function() {
        var choice = document.getElementById('choice').value;
        var cpy_color = this.textContent;
        if (choice == 'background') {
            navigator.clipboard.writeText("background-color:" + cpy_color + ";");
        } else {
            navigator.clipboard.writeText("color:" + cpy_color + ";");
        }
        var audio = new Audio('cpy.wav');
        audio.play();
        swal("copied", "You copied " + cpy_color + ' color', "success");

    })
}