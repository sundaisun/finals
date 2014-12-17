// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
	function adjustWindow(){
		
 // Get window size
    winH = $window.height();
    winW = $window.width();
     
    // Keep minimum height 550
    if(winH <= 550) {
        winH = 550;
    }
     
    // Init Skrollr for 654 and up
    if( winW >= 654) {
 
        // Init Skrollr
        var s = skrollr.init({
            forceHeight: false
        });
 
        // Resize our slides
        $slide.height(winH);
 
        s.refresh($('.homeSlide'));
 
    } else {
 
        // Init Skrollr
        var s = skrollr.init();
        s.destroy();
    }
 
    // Check for touch
    if(Modernizr.touch) {
 
        // Init Skrollr
        var s = skrollr.init();
        s.destroy();
    }	    
	}
    
function initAdjustWindow() {
    return {
        match : function() {
            adjustWindow();
        },
        unmatch : function() {
            adjustWindow();
        }
    };
}
 
enquire.register("(max-width : 654px)", initAdjustWindow(), false);
		