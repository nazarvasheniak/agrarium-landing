// Carousel

'use strict';
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
        }, 3000)
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

var consultants = new CarouselInit(document.querySelector('#consultants_cards'))
consultants.init();

//Таймер
function countDown(second,endMinute,endHour,endDay,endMonth,endYear) {
    var now = new Date();
    second = (arguments.length == 1) ? second + now.getSeconds() : second;
    endYear =  typeof(endYear) != 'undefined' ?  endYear : now.getFullYear();            
    endMonth = endMonth ? endMonth - 1 : now.getMonth();  //номер месяца начинается с 0   
    endDay = typeof(endDay) != 'undefined' ? endDay :  now.getDate();    
    endHour = typeof(endHour) != 'undefined' ?  endHour : now.getHours();
    endMinute = typeof(endMinute) != 'undefined' ? endMinute : now.getMinutes();   
    //добавляем секунду к конечной дате (таймер показывает время уже спустя 1с.) 
    var endDate = new Date(endYear,endMonth,endDay,endHour,endMinute,second+1); 
    var interval = setInterval(function() { //запускаем таймер с интервалом 1 секунду
        var time = endDate.getTime() - now.getTime();
        if (time < 0) {                      //если конечная дата меньше текущей
            clearInterval(interval);
            alert("Неверная дата!");            
        } else {            
            var days = Math.floor(time / 864e5);
            var hours = Math.floor(time / 36e5) % 24; 
            var minutes = Math.floor(time / 6e4) % 60;
            var seconds = Math.floor(time / 1e3) % 60;  
            document.getElementById('value_day').innerHTML = days;
            document.getElementById('value_hour').innerHTML = hours;
            document.getElementById('value_min').innerHTML = minutes;
            document.getElementById('value_sec').innerHTML = seconds;
            if (!seconds && !minutes && !days && !hours) { 
                clearInterval(interval);
            }           
        }
        now.setSeconds(now.getSeconds() + 1); //увеличиваем текущее время на 1 секунду
    }, 1000);
    }
    countDown(0,0,24,31);//отсчет идет до нового года(31 день 24 часа)


    $('.menu_toggle').click(function(){
        $('.menu').slideToggle().css('display','flex');
    });
    
	var h = $(window).height();
    $(window).scroll(function(){
    if ( ($(this).scrollTop()+h) >= $(".bottom_content .cost_block .items .item").offset().top) {
        $(".bottom_content .cost_block .items .item1").fadeIn(750,
        function(){
            $(".bottom_content .cost_block .items .item2").fadeIn(750,
                function(){
                    $(".bottom_content .cost_block .items .item3").fadeIn(750);
                });
        });
    }
    });
    $('.play_btn').click(function(){
        $(this,).fadeOut();
        $('.video_preview').fadeOut();
        $('.video_wrap').append('<iframe width="560" height="377" src="https://www.youtube.com/embed/Hi-CTlR3YxA?autoplay=1" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen class="ytube_video"></iframe> ');
    });