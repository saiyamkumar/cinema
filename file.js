$(document).ready(function() { 
   $("#btn").click(function(){ 
          
    // $("#Tab").empty();
$.getJSON("Aggfilm.php", function(dati){         

for (var i = 0; i <= dati.length + i ;i++)
{
 alert(i);
$("#Tab").append("<tr value ='"+ i +"'><td>" + dati[0][i].Nome + "</td><td>" + dati[0][i].Posti + "</td><td>" + dati[0][i].Citta + "</td></tr>");
// $("#sel").append("<option value='r" + dati[0][i].Citta +"'>" + dati[0][i] + " </option>");
}
 });
});  
});