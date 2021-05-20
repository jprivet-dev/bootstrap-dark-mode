// See https://getbootstrap.com/docs/4.6/components/toasts/
$(function () {
    $('.toast').toast();
    $('#liveToastBtn').click(function () {
        $('#liveToast').toast('show');
    });
});
