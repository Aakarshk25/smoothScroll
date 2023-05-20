function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) { //this is decent animation i find out from chatgpt
        t /= d;
        t--;
        return c * (t * t * t + 1) + b;
      }
  
    requestAnimationFrame(animation);
  }
  
  var section1 = document.querySelector('.section1');
  var section2 = document.querySelector('.section2');
  
  section1.addEventListener('click', function() {
    smoothScroll('.section2', 2000);
  });
  section2.addEventListener('click', function() {
    smoothScroll('.section1', 2000);
  });
  
  






































// function smoothScroll(target,duration) {
//     var target=document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect().top;// in case you want to study more (https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
//     var startposition = window.pageYOffset;// window.pageYoffset positive mai lekrr upar sai neeche jaane mai hep karta hai 
//     var distace = targetPosition - startposition;
//     var startTime = null;
//     function animation(currentTime) {
//         if (startTime===null) startTime = currentTime; 
//         var timeLapsed = currentTime - startTime;
//         var run = ease(timeLapsed,startposition,distace,duration);
//         window.scrollTo(0,run); // (horizontally, vertically)
//         if(timeElapsed < duration) requestAnimationFrame(animation);
//     }
//     function ease(t, b, c, d) {//https://gizma.com/easing/ 
//         t /= d/2;
//         if (t < 1) return c/2*t*t*t + b;
//         t -= 2;
//         return c/2*(t*t*t + 2) + b;
//     requestAnimationFrame(animation); // this will animate everything(https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
  
// };

// var section1 = document.querySelector('.section1');

// section1.addEventListener('click',function(){
//     smoothScroll('.section2',3000);
// });