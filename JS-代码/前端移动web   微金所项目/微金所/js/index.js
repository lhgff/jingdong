/*
 * @Author: zhengwei
 * @Date:   2016-07-03 01:22:47
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2016-07-03 11:53:15
 */

'use strict';
$(function() {
    // 这个tooltips插件需要初始化一下
    $('[data-toggle="tooltip"]').tooltip();
    // a) 得定义一个大小图的档次 比如小于768认为他是小图 
    // b) 如果大于768认为他是大图
    // c) 得知道屏幕宽度有没有大于768
    // d) 得获取屏幕宽度
    // e) 如果是小屏我们要把所有轮播图的图片都变小
    // f) 如果是大图的话把所有轮播图都变大
    // g) 把所有图片变小变大是不是得获取到所有图片的每一张图片的
    // h) 然后给每一张图片设置对应的图片路径
    var isSmall = 768; //定义一个小图的档次

    //我们要在屏幕宽度变化的时候调用JS设置图片和判断
    //添加一个屏幕变化事件
    $(window).on('resize', function() {
        var windowWidth = $(window).width();
        var smallImgSrc = ["img/slide_01_640x340.jpg", "img/slide_02_640x340.jpg", "img/slide_03_640x340.jpg"];
        var largeImgSrc = ["img/slide_01_2000x410.jpg", "img/slide_02_2000x410.jpg", "img/slide_03_2000x410.jpg"]
        var item = $('.carousel-inner .item'); //获取轮播图里面的.item
        if (windowWidth < isSmall) {
            //说明是小图
            //设置所有图片变成小图
            //小屏就是让他要用图片标签然后等比例缩放
            //得遍历每个item分别设置对应的图片
            item.each(function(index, el) {
                $(this).html('<img src="' + smallImgSrc[index] + '" alt="" />');
                $(this).css('background-image', '');
            });
        } else {
            //说明是大图
            item.each(function(index, el) {
                $(this).css('background-image', 'url(' + largeImgSrc[index] + ')');
                //大图的时候不需要这个图片标签
                $(this).html("");
            });
        }
    }).trigger('resize');

})
