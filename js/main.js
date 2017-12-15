// Carousel

'use strict';

/* var carousel = {
    container: document.querySelector('.card_slide_wrap'),
    itemwidth: 262,
    margin: 30,
    eventslide: function(curpos) {
        var newpos = curpos - (this.itemwidth + this.margin);

        Object.keys(this.container.children).map(function(key, index) {
            this.carousel.container.children[key].style.transform = 'translateX(' + newpos + 'px)';
        });

        return newpos;
    },
    eventslidestart: function() {
        Object.keys(this.container.children).map(function(key, index) {
            this.carousel.container.children[key].style.transform = 'translateX(' + 0 + 'px)';
        });
    },
} */

/* var slideevent = setInterval(function() {
    var pos = 0;
    var maxpos = -(((carousel.itemwidth + carousel.margin) * carousel.container.children.length) - ((carousel.itemwidth + carousel.margin) * 4));

    if(pos > maxpos) {
        var slide = carousel.eventslide(pos);
        pos = slide;
        console.log(pos);
        console.log(maxpos);
    } else {
        var slide = carousel.eventslidestart();
        pos = 0;
        console.log(pos);
        console.log(maxpos);
    }
}, 1000); */

