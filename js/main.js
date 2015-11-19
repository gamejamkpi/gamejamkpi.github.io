var gamajam = {} || gamajam;
(function(gamajam) {

    window.onload = function() {
        //pretty scroll
        $('a[href^="#"]').click(function() {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 72 // 72 бо ширина закріпленого блоку зверху - 72px

            }, 200);
            return false;
            e.preventDefault();
        });

        //hide modal after click on menu chapter
        var chapters = document.getElementsByClassName('chapter');
        for (var i = 0; i < chapters.length; i++) {
            chapters[i].addEventListener('click', function() {
                $('#menuModal').modal('hide');
            }, true);
        }

        //hide modalMenu when 'registration' pressed
        document.getElementById("registerButton").addEventListener('click', function() {
            $('#menuModal').modal('hide');
            setTimeout(function() {
                $('#registrationModal').modal('show');
            }, 500);
        }, true);

        //megaHOVERs 
        $('#camera-icon-p').hover(
            function() {
                $('#camera-icon').attr('src', '/images/video-icon-hover.png');
            },
            function() {
                $('#camera-icon').attr('src', '/images/video-icon.png');
            });

        $('img#vk-nav-icon').hover(
            function() {
                $('img#vk-nav-icon').attr('src', '/images/vk-blue.png');
            },
            function() {
                $('img#vk-nav-icon').attr('src', '/images/vk.png');
            });

        $('img#fb-nav-icon').hover(
            function() {
                $('img#fb-nav-icon').attr('src', '/images/fb-blue.png');
            },
            function() {
                $('img#fb-nav-icon').attr('src', '/images/fb.png');
            });


        //detailed plane fade in/out
        $("#detailed-plan-show-hide").click(function() {
            if ($(".detailed-plan").is(":hidden")) {
                $(".detailed-plan").slideDown("slow");
                $("img#arrow-show-hide").attr('src', '/images/arrow-up.png');
            }
            else {
                $(".detailed-plan").slideUp("slow");
                $("img#arrow-show-hide").attr('src', '/images/arrow-down.png');
            }

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


        //display mentors name
        $('.mentors-img').hover(function() {
            $('#mentor-name').html($(this).find('.mentor-img').attr('data-name'));
            $('#mentor-about').html($(this).find('.mentor-img').attr('data-about'));
            if ($(window).width() < 574) {
                $('.mentors-img').css('width', '22%');
                $(this).css('width', '34%');
            }
        }, function() {
            if ($(window).width() < 574) {
                $('.mentors-img').css('width', '25%');
            }
        })
    }
})(gamajam);