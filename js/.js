window.onload = function() {
    var mentors = document.getElementsByClassName('mentor-img');
    for (var i = 0; i < mentors.length; i++) {
        mentors[i].addEventListener('mouseenter', function() {
            document.getElementById('mentor-name').innerHTML = this.getAttribute('data-name');
            document.getElementById('mentor-about').innerHTML = this.getAttribute('data-about');
        }, true);
    }

    var chapters = document.getElementsByClassName('chapter');
    for (var i = 0; i < chapters.length; i++) {
        chapters[i].addEventListener('click', function() {
            $('#myModal').modal('hide');
        }, true);
    }
}