$(window).on('load', function(){
    Main.init();
});
var Main = (function($){
    return {
        vars:{
            svgInit : true
        },
        //inits here
        init: function(){
            Main.events();
            setTimeout(function(){ 
                Main.activateSVG('#svg_awesome');
            },500);
        },
        //events
        events: function(){
            $('#svg_awesome .letter').on({
                mouseenter: function() {
                    var letter = $(this).data('letter');
                    $('#'+ letter +' rect, #'+ letter +' polygon').each(function() {
                        $(this).css({
                            '-webkit-transform': 'translate3d('+Main.explodeSVG(-100, 100)+'px, '+Main.explodeSVG(-100, 100)+'px, 0)',
                            '-moz-transform': 'translate3d('+Main.explodeSVG(-100, 100)+'px, '+Main.explodeSVG(-100, 100)+'px, 0)',
                            '-ms-transform': 'translate3d('+Main.explodeSVG(-100, 100)+'px, '+Main.explodeSVG(-100, 100)+'px, 0)',
                            '-o-transform': 'translate3d('+Main.explodeSVG(-100, 100)+'px, '+Main.explodeSVG(-100, 100)+'px, 0)',
                            'transform': 'translate3d('+Main.explodeSVG(-100, 100)+'px, '+Main.explodeSVG(-100, 100)+'px, 0)',
                        });
                    });
                },
                mouseleave: function() {
                    var letter = $(this).data('letter');
                    $('#'+ letter +' rect, #'+ letter +' polygon').each(function() {
                        $(this).css({
                            '-webkit-transform': 'translate3d(0, 0, 0)',
                            '-moz-transform': 'translate3d(0, 0, 0)',
                            '-ms-transform': 'translate3d(0, 0, 0)',
                            '-o-transform': 'translate3d(0, 0, 0)',
                            'transform': 'translate3d(0, 0, 0)',
                        });
                    });
                }
            });
        },
        //functions
        explodeSVG: function(min,max){
            var width = $(window).width();
            if (width > 1025){
                var offset = min;
                var range = max - min + 1
                var randomNumber = Math.floor( Math.random() * (range)) + offset;

                return randomNumber;
            }
            
        },
        activateSVG: function(elem){
            if (Main.vars.svgInit){
                setTimeout(function(){ Main.transformSVG('logo_left'); },100);
                setTimeout(function(){ Main.transformSVG('logo_c'); },400);
                setTimeout(function(){ Main.transformSVG('logo_o'); },700);
                setTimeout(function(){ Main.transformSVG('logo_d'); },900);
                setTimeout(function(){ Main.transformSVG('logo_i'); },1000);
                setTimeout(function(){ Main.transformSVG('logo_n'); },1100);
                setTimeout(function(){ Main.transformSVG('logo_g'); },1200);
                setTimeout(function(){ Main.transformSVG('logo_rightf'); },1300);
                setTimeout(function(){ Main.transformSVG('logo_rights'); },1400);


                setTimeout(function(){
                    $('#svg_awesome svg rect, #svg_awesome svg polygon').each(function() {
                        $(this).css({
                            '-webkit-transform': 'translate3d(0, 0, 0)',
                            '-moz-transform': 'translate3d(0, 0, 0)',
                            '-ms-transform': 'translate3d(0, 0, 0)',
                            '-o-transform': 'translate3d(0, 0, 0)',
                            'transform': 'translate3d(0, 0, 0)',
                        });
                    });
                }, 1800);

                Main.vars.svgInit = false;
            }
        },
        transformSVG: function(el){
            $('#svg_awesome svg #'+ $(el).selector +' rect, #svg_awesome svg #'+ $(el).selector +' polygon').each(function() {
                $(this).css({
                    '-webkit-transform': 'translate3d('+Main.explodeSVG(-100, 100)+'px, '+Main.explodeSVG(-100, 100)+'px, 0)',
                    '-moz-transform': 'translate3d('+Main.explodeSVG(-100, 100)+'px, '+Main.explodeSVG(-100, 100)+'px, 0)',
                    '-ms-transform': 'translate3d('+Main.explodeSVG(-100, 100)+'px, '+Main.explodeSVG(-100, 100)+'px, 0)',
                    '-o-transform': 'translate3d('+Main.explodeSVG(-100, 100)+'px, '+Main.explodeSVG(-100, 100)+'px, 0)',
                    'transform': 'translate3d('+Main.explodeSVG(-100, 100)+'px, '+Main.explodeSVG(-100, 100)+'px, 0)',
                });
            });
        }
    }
})($);




