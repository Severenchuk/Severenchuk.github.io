/*
let nam1 = Number(prompt("введіть число MIN"));
let nam2 = Number(prompt("введіть число MAX"));
function randomInteger(min, max) {
  let rand = Math.floor(min + Math.random() * (max - min) + 1)
  return (rand);
}
console.log( randomInteger(nam1, nam2) );
*/
/*
let num1 = prompt("введіть число MIN");
let num2 = prompt("введіть число MAX");
let rund = Math.floor(num1 + Math.random() * (num2 - num1))
console.log(rund)
*/

$(document).ready(function(){
 $('.header').height($(window).height());
})
$(".navbar a").click(function(){
$("body,html").animate({
  scrollTop:$("#" + $(this).data('value')).offset().top
},1000)
 })

