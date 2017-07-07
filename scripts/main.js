var number = prompt("Donnez un chiffre de 1 à 70 !");
//localStorage.setItem('numberofsquare', number);
console.log(number);

//Creating the string sequence corresponding to the number to have the right grid
var htmlstring = "" 

for (i = 0; i < number; i++) 
{ 
	htmlstring += "<tr>";
		for (j = 0; j < number; j++) 
		{ 
		    htmlstring += "<td></td>";
		}
	htmlstring += "</tr>";
}

console.log(htmlstring);

//pushing the new html into the table
document.getElementById("table").innerHTML = htmlstring;

//Automatic setup of width and height, the base is a 600px square

////Calculation of the right width and heigth
var pixel_size = Math.floor(600/number);
console.log(pixel_size);
var pixel_name = ''+pixel_size+'px';
console.log(pixel_name);

//Implementation of the width of each square
var els = document.getElementById("table").getElementsByTagName("td");
for(var i=0;i<number;i++){
  els[i].style.width += pixel_name;    
}

//Implementation of the height of each square
var els = document.getElementById("table").getElementsByTagName("tr");
for(var i=0;i<number;i++){
  els[i].style.height = pixel_name;    
}
