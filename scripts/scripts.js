var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'<span class="blinking">|</span>'+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};

$(document).ready(function(){
    $('#img-portrait').fadeIn(3000);

    var copyright = 'Riley Wells © ' + new Date().getFullYear();
    document.getElementById('copyright').innerHTML = copyright;

    var i = 0;
    var txt = 'Hi, I\'m Riley!';
    var speed = 150;
    
    function typeWriter() {
      if (i < txt.length) {
        $("#type-writer-heading").append(txt.charAt(i));
        i++;
        setTimeout(typeWriter, speed);
      }
    };

    // var j = 0;
    // var m = 0;
    // var ima = 'I\'m a ';
    // var speed = 150;

    // function typeWriter2() {
    //     if (j < ima.length) {
    //         $("#type-writer-attributes").append(ima.charAt(j));
    //         j++;
    //         if (j == ima.length) {
    //             typeWriter3();
    //         }
    //         setTimeout(typeWriter2, speed);
    //     }
    // };

    // function typeWriter3() {
    //     var attributes = ['Developer','Strategist','Learner','Builder','Leader']
    //     for (var k = 0; k < attributes.length; k++) {
    //         var currentAttribute = attributes[k];
    //         for (l = 0; l < currentAttribute.length; l++) {
    //             (function() {
    //                 setTimeout(function() {
    //                     $("#type-writer-attributes").append(currentAttribute.charAt(l));
    //                 }, 1000);
    //             });
    //         };
    //     }
    // }

    // typeWriter();
});