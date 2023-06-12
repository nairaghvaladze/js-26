document.body.style.backgroundColor="Darkseagreen";
document.body.style.textAlign="center";
document.body.style.marginTop="30px";
document.body.style.fontWeight="600";
document.getElementById("text").style.borderRadius="15px";
document.getElementById("text").style.border="none";
document.getElementById("text").style.width="350px";
document.getElementById("text").style.height="50px";
document.getElementById("text").style.outline="none";
document.getElementById("text1").style.borderRadius="15px";
document.getElementById("text1").style.border="none";
document.getElementById("text1").style.height="50px";
document.getElementById("text1").style.width="100px";
document.getElementById("text1").style.backgroundColor="Darkslategray";
document.getElementById("text1").style.fontWeight="600";
document.getElementById("text1").style.color="white";




var masivi= [];

function add(){
     var a=document.getElementById("text").value;
     masivi.push(a);
     document.getElementById("text2").innerHTML=masivi;
     document.getElementById("myform").reset();
}