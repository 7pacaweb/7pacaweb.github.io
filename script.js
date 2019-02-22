var next = document.getElementById('next');
var previous = document.getElementById('previous');
var slides = document.querySelectorAll('#slides .slide');


var currentSlide = 0;
next.onclick = function(){
   
    nextSlide();
};


function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className += 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className += 'slide showing';
}


previous.onclick = function(){
    previousSlide();
};
