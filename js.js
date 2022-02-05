
 var countDate = new Date('Dec 24, 2022 00:00:01').getTime();
        
 function countdown(){
var now = new Date().getTime();
 gap = countDate - now;

 var second = 1000;
 var minute = second * 60;
 var hour = minute * 60;
 var day = hour * 24;

 var d = Math.floor (gap / (day));
 var h = Math.floor ((gap % (day)) /(hour));
 var m = Math.floor ((gap % (hour)) /(minute));
 var s = Math.floor ((gap % (minute)) / (second));

 document.getElementById('days').innerText = d;
 document.getElementById('hours').innerText = h;
 document.getElementById('minutes').innerText = m;
 document.getElementById('seconds').innerText = s;
 
}

setInterval(function(){
 countdown();
},1000)

function revealGreeting() {
    var x = document.getElementById("myHello");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function revealGreeting2() {
    var x = document.getElementById("myMerry");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function revealGreeting3() {
    var x = document.getElementById("myHohoho");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function changePicture1(){ 
    document.getElementById('image1') 
    .src="img/frozen.jpg"; 
} 

function changePicture2(){ 
  document.getElementById('image2') 
  .src="img/headphones.jpg"; 
} 

function changePicture3(){ 
  document.getElementById('image3') 
  .src="img/ninjago.jpg"; 
} 

function changePicture4(){ 
  document.getElementById('image4') 
  .src="img/pawpatrol.jpg"; 
}

function changePicture5(){ 
  document.getElementById('image5') 
  .src="img/codenames.jpg"; 
} 

function changePicture6(){ 
  document.getElementById('image6') 
  .src="img/jewelry.jpg"; 
} 

function changePicture7(){ 
  document.getElementById('image7') 
  .src="img/newyorker.jpg"; 
} 

function changePicture8(){ 
  document.getElementById('image8') 
  .src="img/kuulokkeet.jpg"; 
} 

function changePicture9(){ 
  document.getElementById('image9') 
  .src="img/kuulokkeet.jpg"; 
} 
