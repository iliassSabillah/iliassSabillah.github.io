(($)=> {
    "use strict"; // Start of use strict

    $(window).scroll(()=>{
    	//navbar style when scrolling
		if($(window).width() > 480) {
            if ($(window).scrollTop() >= 50) {

                $('nav').css({
                    'backgroundColor': 'white',
                    'z-index': '3',
                    'font-weight': '700'
                });
                $('.nav-link-contacts>a ,.nav-link-portfolio>a').css({
                    'color': 'black',
                    'font-weight': '700'
                });
                $('.navbar-brand').css({
                    'color': '#F05F40',
                    'text-transform': 'uppercase'
                })
            }
            //navbar style when on top
            else if ( $(window).scrollTop() < 50 ) {
                $('nav').css({
                    'transition': 'all 0.5s',
                    'background-color': 'transparent',
                    'flex-flow': 'row nowrap',
                    'justify-content': 'flex-start'
                    , 'max-height': '50px',
                    'border-bottom': '1px solid white'
                });
                $('.nav-link-contacts>a ,.nav-link-portfolio>a').css({
                    'color': '#afadb0',
                    'text-decoration': 'none'
                })
                $('.navbar-brand').css({
                    'color': 'rgba(255,255,255,.7)',
                    'text-transform': 'uppercase'
                })
            }
        }
		// else if( $(window).scrollTop() < 50  && $(window).width() < 400){
         //    $('nav').css({
         //        'display': 'flex',
         //        'background-color': 'transparent',
         //        'flex-flow': 'column nowrap',
         //        'border-bottom': '2px solid white',
         //        'padding-bottom': '10px',
         //    });
        	// $('.navbar-brand').css({
         //        'flex-grow': '2',
         //        'align-self': 'center',
         //        'text-align': 'center',
         //        'flex': '1',
         //        'padding': '15px 15px',
         //        'min-width': '185px',
         //        'font-size': '18px',
         //        'line-height': '20px',
         //        'font-family': '"Open Sans","Helvetica Neue",Arial,sans-serif"',
         //        'font-weight': '700',
         //        'text-transform': 'uppercase',
         //    })
		// }
    })

})(jQuery); // End of use strict
