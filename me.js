function telltime() {
      var out = ""; 
      var now = new Date(); 
      out += "<br/> Date:" + now.getDate(); 
      out +="<br/> Month: " + now.getMonth();
      out +="<br/> Year: " + now.getFullYear(); 
      out +="<br/> Hours: " + now.getHours(); 
      out +="<br/> Minutes: " + now.getMinutes() ;
      out +="<br/> Seconds: " + now.getSeconds(); 
      document.getElementById("div1").innerHTML = out; 
    }

function seasonalActivity(){
  var month ="";
  var now = new Date(); 
  month =now.getMonth();

  if (month>=3 && month<6) {
    document.getElementById("div2").innerHTML="Spring is coming!let's go for picnic.";
    document.getElementById("div2").style.color="green";
  }
  if (month>=6 && month<9) {
    document.getElementById("div2").innerHTML="Summer is coming!let's go for water fight.";
    document.getElementById("div2").style.color="red";
  }
  if (month>=9 && month<12) {
    document.getElementById("div2").innerHTML="Autumn is coming!let's go climbing.";
    document.getElementById("div2").style.color="orange";
  }
  if (month>=1 && month<=2 ) {
    document.getElementById("div2").innerHTML="Winter is coming!let's go skating.";
    document.getElementById("div2").style.color="blue";
  }
}

window.onload = function (){
    
    document.getElementById("button1").onclick=telltime;
    document.getElementById("button2").onclick=seasonalActivity;
}
