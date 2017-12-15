// Years
var Tabs = {
    toggle: document.querySelectorAll('.years_items .item'),
    tabs: document.querySelectorAll('.card_slide_block'),
}

Object.keys(Tabs.toggle).map(function(key, index) {
    Tabs.toggle[key].onclick = function() {
        var tab = this.dataset.target;

        // stop if toggle is not tab
        if(this.dataset.toggle != 'tab') {
            return;
        }

        // remove active class from all toggles
        Object.keys(Tabs.toggle).map(function(key, index) {
            Tabs.toggle[key].classList.remove('active');
        })

        // remove active class from all toggles
        Object.keys(Tabs.tabs).map(function(key, index) {
            Tabs.tabs[key].classList.remove('active');
        })

        //show target tab
        this.classList.add('active');
        
        Object.keys(Tabs.tabs).map(function(key, index) {
            if(Tabs.tabs[key].dataset.tab == tab) {
                Tabs.tabs[key].classList.add('active');
            }
        })
    }
})

// Carousel
var Carousel = function(data) {
    var self = this;

    this.container = data.container;

    this.itemwidth = 262;
    this.margin = 30;

    this.eventslide = function(curpos) {
        var newpos = curpos - (this.itemwidth + this.margin);

        Object.keys(self.container.children).map(function(key, index) {
            self.container.children[key].style.transform = 'translateX(' + newpos + 'px)';
        });

        return newpos;
    }

    this.eventslidestart = function() {
        Object.keys(self.container.children).map(function(key, index) {
            self.container.children[key].style.transform = 'translateX(' + 0 + 'px)';
        });
    }
}

// Carousel init
var CarouselInit = function(container) {
    var self = this;

    this.container = container;
    
    var carousel = new Carousel({container: this.container});

    this.pos = 0;
    this.maxpos = -(((carousel.itemwidth + carousel.margin) * container.children.length) - ((carousel.itemwidth + carousel.margin) * 5));
    console.log(this);

    this.getPos = function() {
        return this.pos;
    }

    this.getMaxPos = function() {
        return this.maxpos;
    }

    this.setPos = function(pos) {
        this.pos = pos;
    }

    this.init = function() {
        
        setInterval(function() {
            
            if(self.pos > self.maxpos) {
                var slide = carousel.eventslide(self.pos);
                self.setPos(slide);
        
                /* console.log(this.pos);
                console.log(this.maxpos); */
            } else {
                var slide = carousel.eventslidestart();
                self.setPos(0);
        
                /* console.log(this.pos);
                console.log(this.maxpos); */
            }
        }, 2000)
    }
}

var init1 = new CarouselInit(document.querySelector('#card_slide_wrap1'))
var init2 = new CarouselInit(document.querySelector('#card_slide_wrap2'))
var init3 = new CarouselInit(document.querySelector('#card_slide_wrap3'))
var init4 = new CarouselInit(document.querySelector('#card_slide_wrap4'))
init1.init();
init2.init();
init3.init();
init4.init();
