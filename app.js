const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "pink"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
  // get random number betwen 0 - 3 clors[0];

  const random_number = get_random_number();
  document.body.style.backgroundColor = colors[random_number];
  color.textContent = colors[random_number];
})

function get_random_number(){
  return Math.floor(Math.random() *colors.length);
}