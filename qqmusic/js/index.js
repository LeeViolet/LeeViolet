// 左箭头
$('.slide_arrow_left').click(function () {
    const playlist = $(this).parent().find('.playlist_list');
    const dot = $(this).parent().find('.slide_switch_item i');
    let left = parseInt(playlist.css('left'));
    if (left == 0) {
        playlist.css('left', '-2400px');

    } else {
        playlist.css('left', left + 1200);
    }
    
    // 小圆点处理
    left = parseInt(playlist.css('left'));
    const index = Math.abs(left / 1200);
    dot.each(function () {
        $(this).css('background-color', '')
    }).eq(index).css('background-color', 'rgba(0, 0, 0, .3)');
})

// 右箭头
$('.slide_arrow_right').click(function () {
    const playlist = $(this).parent().find('.playlist_list');
    const dot = $(this).parent().find('.slide_switch_item i');
    let left = parseInt(playlist.css('left'));
    if (left == -2400) {
        playlist.css('left', 0);
    } else {
        playlist.css('left', left - 1200);
    }

    // 小圆点处理
    left = parseInt(playlist.css('left'));
    const index = Math.abs(left / 1200);
    dot.each(function () {
        $(this).css('background-color', '')
    }).eq(index).css('background-color', 'rgba(0, 0, 0, .3)');
})

// 轮播切换小圆点
$('.slide_switch_item').click(function(e) {
    const playlist = $(this).parent().parent().find('.playlist_list');
    const dot = $(this).parent().find('.slide_switch_item i');
    const index = $(this).index();
    playlist.css('left',index*-1200);
    dot.each(function () {
        $(this).css('background-color', '')
    }).eq(index).css('background-color', 'rgba(0, 0, 0, .3)');
}) 