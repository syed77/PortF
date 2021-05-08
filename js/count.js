var n = localStorage.getItem('on_visit_counter');

if (n === null) {
  n = 0;
}
n++;

localStorage.setItem("on_visit_counter", n);
console.log(n);
window.onload()=countVisits();

function countVisits()
{
    var n = localStorage.getItem('on_visit_counter');

if (n === null) {
  n = 0;
}
n++;

localStorage.setItem("on_visit_counter", n);
console.log(n);
var e = document.getElementById('counter');
console.log(e.getAttribute('data-number'));
return n;

}