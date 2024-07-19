let temp=document.getElementById("temparature");
let res=document.getElementById("Result");
function t1(){
    let value=temp.value;
    let converter=parseInt(value)+273.15;
    res.textContent=converter+"k";
}
function t2(){
    let value=temp.value;
    let converter=parseInt(value)-273.15;
    res.textContent=converter+"C";
}
function t3(){
    let value=temp.value;
    let converter=(parseInt(value)-32)*(5/9);
    res.textContent=converter+"C";
}
function t4(){
    let value=temp.value;
    let converter=parseInt(value)*(9/5)+32;
    res.textContent=converter+"F";
}
function t5(){
    let value=temp.value;
    let converter=(parseInt(value)-32)*(5/9)+273.15;
    res.textContent=converter+"K";
}
function t6(){
    let value=temp.value;
    let converter=(parseInt(value)-273.15)*(9/5)+32;
    res.textContent=converter+"F";
}


