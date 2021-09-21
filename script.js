var count = 3;
var countPar = document.querySelector("#count");

function add1(){
    count++;
    countPar.innerText = count + " like(s)";
    console.log(count)
}