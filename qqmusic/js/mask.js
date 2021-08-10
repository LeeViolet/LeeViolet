$(function () {
    // 模态框
    $('.slide_list a,.login').click(function () {
        $('.mask').show();
        $('.login_modal').show();
        $('body').css({
            overflow: 'hidden',
            paddingRight: '10px',
        });
    });
    $('.btn_close').click(function () {
        $('.mask').hide();
        $('.login_modal').hide();
        $('body').css({
            overflow: '',
            paddingRight: '',
        });
    });
    $('.login_hd a').click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('.login_bd>div').eq($(this).index()).addClass('current').siblings().removeClass('current');
    });
})