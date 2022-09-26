let btn=document.querySelector("#but");
let quote=document.querySelector(".sp");
let person=document.querySelector(".person");

let quotes=[ {
    quote:'"Health is wealth"',
    person:'ALBERT'
},
{
    quote:'"Apple a day keeps the doctor away"',
    person:'DOCTOR STRANGE'

},];

btn.addEventListener('click',function(){

    let random=Math.floor(Math.random()* quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})