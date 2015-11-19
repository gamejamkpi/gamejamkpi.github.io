window.onload = function() {
    //display mentors name
    var mentors = document.getElementsByClassName('mentor-img');
    for (var i = 0; i < mentors.length; i++) {
        mentors[i].addEventListener('mouseenter', function() {
            document.getElementById('mentor-name').innerHTML = this.getAttribute('data-name');
            document.getElementById('mentor-about').innerHTML = this.getAttribute('data-about');
        }, true);
    }

    //hide modal after click on menu
    var chapters = document.getElementsByClassName('chapter');
    for (var i = 0; i < chapters.length; i++) {
        chapters[i].addEventListener('click', function() {
            $('#menuModal').modal('hide');
        }, true);
    }

    //hide modal when 'registration' pressed
    document.getElementById("registerButton").addEventListener('click', function() {
        $('#menuModal').modal('hide');
        setTimeout(function() {
            $('#registrationModal').modal('show');
        }, 500);
    }, true);

    //detailed plane fade in
    $("#detailed-plan-btn").click(function() {
        if ($("#detailed-plan-block").is(":hidden")) {
            $("#detailed-plan-block").slideDown("slow");
            $("#arrowUpDown").attr('src', '/images/arrow-up.png');
        }
        else {
            $("#detailed-plan-block").slideUp("slow");
            $("#arrowUpDown").attr('src', '/images/arrow-down.png');
        }

    });

    //detailed plane fade out
    $("#plan-hide-arrow").click(function() {
        $("#detailed-plan-block").slideUp("slow");
        $("#arrowUpDown").attr('src', '/images/arrow-down.png');
    });

    $(".day1").on('click', function() {
        $(".day1").addClass('day-active');
        $(".day2").removeClass('day-active');
        $('#plan-day-two').css('display', 'none');
        $('#plan-day-one').css('display', 'block');
    });

    $(".day2").on('click', function() {
        $(".day2").addClass('day-active');
        $(".day1").removeClass('day-active');
        $('#plan-day-two').css('display', 'block');
        $('#plan-day-one').css('display', 'none');
    });


    $('#camera-icon-p').hover(
        function() {
            $('#camera-icon').attr('src', '/images/video-icon-hover.png')
        },
        function() {
            $('#camera-icon').attr('src', '/images/video-icon.png')
        });

    $('#vk').hover(
        function() {
            $('#vk').attr('src', '/images/vk-blue.png')
        },
        function() {
            $('#vk').attr('src', '/images/vk.png')
        });

    $('#fb').hover(
        function() {
            $('#fb').attr('src', '/images/fb-blue.png')
        },
        function() {
            $('#fb').attr('src', '/images/fb.png')
        });

    // function calcTimeToEvent() {
    //     var now = Date();
    //     var event = new Date(2015,10,)
    // }
};
