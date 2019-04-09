// Your code goes here
const btn = document.querySelectorAll('.btn');
console.log(btn);

btn.addEventListener('click', function(event) {
  console.log('currentTarget:', event.currentTarget.innerHTML)
  });