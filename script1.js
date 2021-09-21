var count = 9;
var countElement = document.querySelector("#count1");

function add1(){
    count++;
    countElement.innerText = count + " like(s)";
    console.log(count);
}

var num = 12;
var countAdd = document.querySelector("#count2");

function increaseNumber(){
    num++;
    countAdd.innerText = num + " like(s)";
    console.log(num);
}

var int = 9;
var countIncrease = document.querySelector("#count3");

function increaseInteger(){
    int++;
    countIncrease.innerText = int + " like(s)";
    console.log(int);
}