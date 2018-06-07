$(document).ready(function() { 
   $("#btn").click(function(){ 
         
     
   $("tbody").empty();
    $("#tab").append(); 
$.getJSON("Aggfilm.php", function(dati){         
var ta=$("<table id='Tab' align='center' class='table table-dark'><thead class='thead-dark'></thead><tbody align='center'><tr><td><h4>Nome :</h4></td><td><h4>Posti :</h4></td><td><h4>Città :</h4></td></tr></tbody></table>");
for (var i = 0; i <= dati.length + i ;i++)
{
  $("#Tab").append("<tbody align='center'><tr value ='"+ i +"'><td>" + dati[0][i].Nome + "</td><td>" + dati[0][i].Posti + "</td><td>" + dati[0][i].Citta + "</tbody></td></tr>"); 
  // $("#sel").append("<option value='r" + dati[0][i].Citta +"'>" + dati[0][i] + " </option>");
}

 });
});  
});