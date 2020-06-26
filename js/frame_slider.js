function hide_all_slides() {
    Children = $('.slide-container').children();
    for (i = 0; i < Children.length; i++) {
        Children[i].classList.remove('show-mobile');
        Children[i].classList.remove('show-desktop');
    }
}

function change_slide(Change, Instance) {
    hide_all_slides();
    $('.slide-container').attr('current-slide', Change);
    $('div[slide=' + Change + ']').addClass('show-mobile');
    if (Change > Children.length+1 || Change == 1) {
        $('div[slide=1]').addClass('show-desktop');
        $('div[slide=2]').addClass('show-desktop');
        $('.main-container').attr('current-slide', 1);
    } else {
        if (Instance == 'Next') {
            $('div[slide=' + Change + ']').addClass('show-desktop');
            $('div[slide=' + (Change + 1) + ']').addClass('show-desktop');
            $('.main-container').attr('current-slide', Change);
        } else if (Instance == 'Previous') {
            $('div[slide=' + Change + ']').addClass('show-desktop');
            $('div[slide=' + (Change - 1) + ']').addClass('show-desktop');
            $('.main-container').attr('current-slide', Change-1);
        }

    }
}

$(document).ready(function () {
    hide_all_slides();
    Start = $('.slide-container').attr('current-slide') || 1;
    console.log(Start);
    change_slide(parseInt(Start));
    $('*#Next').on('click', function () {
        Current = $(this).parent().attr('slide');
        Children = $('.main-container').children();
        if (Current == Children.length) {
            change_slide(1);
        } else {
            change_slide((parseInt(Current) + 1), 'Next');
        }
    })
    $('*#Previous').on('click', function () {
        Current = $(this).parent().attr('slide');
        Children = $('.main-container').children();
        if (Current == 1) {
            change_slide(Children.length);
        } else {
            change_slide((parseInt(Current) - 1), 'Previous');
        }
    })
})
