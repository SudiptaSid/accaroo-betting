// Loader
$(window).load(function() {
    // Animate loader off screen
    $(".loader").fadeOut("slow");;
});

// Video Player
$('#play').on('click', function (e) {
    e.preventDefault();
    $("#player")[0].src += "?autoplay=1";
    $('#player').show();
    $('#video-cover').hide();
    $('#play').hide();
});
$('#play2').on('click', function (e) {
    e.preventDefault();
    $("#player2")[0].src += "?autoplay=1";
    $('#player2').show();
    $('#video-cover2').hide();
    $('#play2').hide();
});

// Login Pin Show/Hide

// Bet Number
$('.bet-add').click(function () {
    if ($(this).next().val() < 10) {
    $(this).next().val(+$(this).next().val() + 1);
    }
});
$('.bet-sub').click(function () {
    if ($(this).prev().val() > 0) {
    if ($(this).prev().val() > 0) $(this).prev().val(+$(this).prev().val() - 1);
    }
});

// Leaderboard Filter
$(function() {
    $('#leader-short').change(function(){
        $('.leader-short-item').hide();
        $('#' + $(this).val()).show();
    });
});