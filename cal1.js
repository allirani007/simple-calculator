//this function clear all the values
var mmr=0;
function clearscreen()
{
    document.getElementById("result").value="";

}
//this function dispaly values
function display(Value)
{
    document.getElementById("result").value += Value;
 }
 //This function evaluates the expression and return result
 function calculate()
 {
     var p =document.getElementById("result").value;
      var q = eval(p)
      document.getElementById("result").value=q;
 }
 function mmrfun()
 {
document.getElementById("result").value=mmr;
 }
 function mmms()
 {
     mmr=document.getElementById("result").value;
     document.getElementById("result").value="";
 }