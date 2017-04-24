(function($) {
    "use strict"; // Start of use strict

    $(window).scroll(()=>{
    	//navbar style when scrolling
    	if($(window).scrollTop() >= 50 && $(window).width()> 400){
    		$('nav').css({
				'backgroundColor':'white',
				'z-index':'3',
				'font-weight':'700',
			})
			$('.nav-link-contacts>a ,.nav-link-portfolio>a').css({
					'color':'black',
		    		'font-weight': '700'
		    })
			$('.navbar-brand').css({
					'color':'#F05F40',
		    		'text-transform': 'uppercase'
		    })
    	}
    	//navbar style when on top 
    	else if ($(window).scrollTop() < 50){
    		$('nav').css({	
    			'transition': 'all 0.5s',
    			'background-color': 'transparent',
    			'flex-flow': 'row nowrap',
    			'justify-content': 'flex-start'
    			,'max-height': '50px',
    			'border-bottom': '1px solid white'
			})
			$('.nav-link-contacts>a ,.nav-link-portfolio>a').css({
				'color':'#afadb0',
	    		'text-decoration': 'none'
		    })
			$('.navbar-brand').css({
				'color':'rgba(255,255,255,.7)',
		    	'text-transform': 'uppercase'
		    })
    		}
    })

})(jQuery); // End of use strict
