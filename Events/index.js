const btn = document.querySelector('button');
const counter = document.querySelector('h1');
// btn.onclick = () => {
//     console.log('helo');
// }
var count = 0;

// btn.addEventListener('click', () => {
//     counter.innerHTML = "Count : " + count;
//     count++;
// });

btn.addEventListener('mouseover', () => {
    counter.innerHTML = "Over mouse";
});

btn.addEventListener('mouseleave', () => {
    counter.innerHTML = "Leaved";
});