(function($) {
    $.fn.extend({
        slider: function(options) {
            var _that = this,
                main = null, //主函数，入口
                start = null, //开始动画
                stop = null, //停止动画
                stop2 = null,
                init = null, //初始化 
                dot = null,
                next = null, //播放下一张
                prev = null, //播放上一张
                timeout = null, //定时器
                elems = {}, //元素集合
                defaults = {
                    speed: 600,
                    delay: 3000
                }
            options = $.extend(defaults, options);

            init = function() {
                elems._index = 1; //当前播放的图片编号
                elems.sliderDiv = _that.children('.adad_adadimg');
                elems.btn = _that.children('a');
                elems.dot = _that.children('dl').children('dd');

                elems.sliderDiv.append(elems.sliderDiv.children('img').first().clone());

                _that.hover(function() {
                    stop();
                }, function() {
                    timeout = setInterval(function() { start(1); }, options.delay + options.speed);
                });

                elems.btn.on('click', function() {
                    if (elems.btn.index($(this))) {
                        next();
                    } else {
                        prev();
                    }
                });

                elems.dot.hover(function() {
                        var newdot = elems.dot.index($(this)) * 1920;
                        elems._index = elems.dot.index($(this)) + 1;
                        elems.sliderDiv.css('left', '-' + newdot + 'px');
                        $(this).attr('class', 'on');
                        $(this).siblings().removeClass('on');
                        stop2();
                    },
                    function() {
                        clearInterval(timeout);
                        timeout = setInterval(function() { start(1); }, options.delay + options.speed);

                    }

                )



            }

            start = function(direction) {
                var left = "-=1920";
                var slonow = _that.children('dl').children('dd');
                //console.log(elems._index);
                $(slonow[elems._index]).addClass('on');
                $(slonow[elems._index]).siblings().removeClass('on');
                if (elems._index == 4) {
                    $(slonow[0]).addClass('on');
                    $(slonow[0]).siblings().removeClass('on');
                }
                //else if (elems._index == 0) {
                //     $(slonow[0]).addClass('on');
                //     $(slonow[0]).siblings().removeClass('on');
                // }

                if (!direction) {
                    left = "+=1920";
                    if (elems._index <= 1) {
                        var imglift = elems.sliderDiv.children('img').last().offset().left,
                            divleft = _that.offset().left;

                        elems._index = 5;
                        elems.sliderDiv.css('left', '-' + (imglift - divleft) + 'px');
                    }
                    $(slonow[elems._index - 2]).addClass('on');
                    $(slonow[elems._index - 2]).siblings().removeClass('on');
                }

                elems.sliderDiv.animate({
                    left: left
                }, options.speed, function() {
                    if (direction) elems._index++;
                    else {
                        elems._index--;
                    };
                    if (elems._index == 5) {
                        elems.sliderDiv.css('left', 0);
                        elems._index = 1;
                    }
                }).delay(options.delay);
            }

            next = function() {
                stop();
                start(1);
            }

            prev = function() {
                stop();
                start(0);
            }

            stop = function() {
                elems.sliderDiv.stop(true, true);
                clearInterval(timeout);
            }
            stop2 = function() {
                elems.sliderDiv.stop(true, false);
                clearInterval(timeout);
            }

            main = function() {
                init();
                timeout = setInterval(function() { start(1); }, options.delay + options.speed);
            }

            main();

        }
    });
})(jQuery)