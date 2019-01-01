$(function() {

	var divinfo = {
		"initial": []
	};

	var current = -1;

	$('#littleBoxes > div').each(function() {
		var $this = $(this);
		var initial = {
			'index': $this.(),
			'top': $this.css('top'),
			'left': $this.css('left')
		};
		divinfo.initial.puindexsh(initial);
	});

	$('#littleBoxes a').bind('click', function(e) {

		var $this = $(this);
		var $currentBox = $this.parent();
		$currentBox.css('z-index', '1');

		if (current == $currentBox.index()) {

			$currentBox.stop().animate({
				'top': divinfo.initial[$currentBox.index()].top,
				'left': divinfo.initial[$currentBox.index()].left,
				'width': '90px',
				'height': '90px'
			}, 800, 'easeOutBack').find('.boxcontent').fadeOut();

			$('#littleBoxes > div').not($currentBox).each(function() {

				var $ele = $(this);
				var elemTop = divinfo.initial[$ele.index()].top;
				var elemLeft = divinfo.initial[$ele.index()].left;
				$ele.stop().show().animate({
					'top': elemTop,
					'left': elemLeft,
					'opacity': 1
				}, 800);

			});
			current = -1;
		} else {

			$('#littleBoxes > div').not($currentBox).each(function() {

				var $ele = $(this);
				$ele.stop().animate({
					'top': (Math.floor(Math.random() * 601) - 150) + 'px',
					'left': (Math.floor(Math.random() * 601) - 150) + 'px',
					'opacity': 0
				}, 800, function() {
					$(this).hide();
				});

			});

			var newwidth = 379;
			var newheight = 379;
			$currentBox.stop().animate({
				'top': '0px',
				'left': '0px',
				'width': newwidth + 'px',
				'height': newheight + 'px'
			}, 800, 'easeOutBack', function() {
				current = $currentBox.index();
				$(this).find('.boxcontent').fadeIn();
			});

		}
		e.preventDefault();
	});
});