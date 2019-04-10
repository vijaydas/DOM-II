// Your code goes here

// sign-up button mouseover
 const btn = document.querySelectorAll('.btn');
 console.log(btn);

 btn[0].addEventListener("mouseover", function(event) {
   console.log(event.target)
   event.target.style.color = "orange";
 });


 btn[0].addEventListener("mouseover", function(event) {
    console.log(event.target)
    event.target.style.color = "crimson";
  });

 
 btn[0].addEventListener("mouseover", function(event) {
    console.log(event.target)
    event.target.style.color = "blue";
  });
  
// bus animation

 const busInImg = document.querySelector(".hidden");
 window.addEventListener("load", function(event) {
    console.log(busInImg.classList);
    busInImg.classList.remove("hidden");
    busInImg.classList.add("slideRight");
 });


