$(document).ready(function(){
            $('.blueberry').blueberry();
		});

		$(document).ready(function(e){
			$('ul>li').hover(function(e){
				$(this).find('ul>li').stop().slideToggle();
			});
		});

