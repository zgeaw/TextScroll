//文字逐行滚动
//32237384@qq.com
/*
 * obj 传入CLASS或ID
 * direction 运动方向
 * height 每次滚动高度
 * time 间隔多久滚动一次 单位 (秒)
 */
TextScroll = function(obj, direction, height, time) {
	var _time = time,
		_auto = {},//定义变量为对象
		_height = height,
		_direction = direction;
	if(_time == '' || _time == undefined) { //判断变量是否为空或未定义
		_time = 1; //条件成立重新赋值
	}
	_auto = setInterval(autoScroll, _time * 1000);//循环调用函数
	$(obj).hover(function() {
		clearInterval(_auto);//鼠标经过终止函数调用
	}, function() {
		_auto = setInterval(autoScroll, _time * 1000);//鼠标移出继续循环函数调用
	});
	
	$(obj+' .up').on('click', function() {//点击向上按钮事件
		_direction = 'up';//变量重新赋值
		autoScroll();//执行函数
	});
	$(obj+' .down').on('click', function() {//点击向下按钮事件
		_direction = 'down';//变量重新赋值
		autoScroll();//执行函数
	});

	function autoScroll() {
		if(_direction == 'down') {
			$(obj).find("ul").animate({//执行动画
				bottom: -height
			}, 500, function() {
				$(this).css({//执行动画完毕，改变其CSS
					bottom: 0,
					top:'inherit'
				}).find('li:last-child').prependTo(this);//查找最后一个li元素，并移动到UL开始位置
			});
		} else {
			$(obj).find("ul").animate({//执行动画
				top: -height
			}, 500, function() {
				$(this).css({//执行动画完毕，改变其CSS
					top: 0,
					bottom:'inherit'
				}).find('li:first').appendTo(this);//查找第一个li元素，并移动到UL结束位置
			});
		}
	}
}