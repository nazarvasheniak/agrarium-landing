var Carousel = function(args = {}) {
    /* var container = args
    var
    var item = {
        width: args.item['width'],
        margin: args.item['margin']
    };

    var position = 0;
    var step = item.width + item.margin;

    var onslide = function() {
        position = position - step;

        Object.keys(container.children).map(function(key, index) {
            container.children[key].style.transform = 'translateX(' + position + ) + 'px)';
        });

        return position;
    }

    console.log(position); */

    console.log(args);

    items = args['container'];
    //console.log(items);
    
}

new Carousel({
    container: document.querySelector('.card_slide_wrap'),
})